/**
 * Copyright (C) 2019 Paytm.
 */

import * as _MerchantProperties from "../constants/MerchantProperties";
import * as _EncDecUtil from "../utils/EncDecUtil";
import * as _LibraryConstants from "../constants/LibraryConstants";
import * as _ErrorConstants from "../constants/ErrorConstants";
import * as _LoggingUtil from "../utils/LoggingUtil";
import * as _SecureResponseHeader from "../response/SecureResponseHeader"
import * as _SDKException from "../exceptions/SDKException"
import * as _SDKResponse from "../../merchant/models/SDKResponse";
import * as _AsyncRefundResponse from "../response/AsyncRefundResponse";
import * as _AsyncRefundResponseBody from "../response/AsyncRefundResponseBody";
import * as _InitiateTransactionResponse from "../response/InitiateTransactionResponse";
import * as _InitiateTransactionResponseBody from "../response/InitiateTransactionResponseBody";
import * as _NativePaymentStatusResponse from "../response/NativePaymentStatusResponse";
import * as _NativePaymentStatusResponseBody from "../response/NativePaymentStatusResponseBody";
import * as _NativeRefundStatusResponse from "../response/NativeRefundStatusResponse";
import * as _NativeRefundStatusResponseBody from "../response/NativeRefundStatusResponseBody";
import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _Config from "../../pg/constants/Config";
import * as _request from "request";

/* class: Request */
export class Request {

    /**
     * @param object request
     * @param string url
     * @param string responseClassName
     * @param int readTimeout
     * @param int connTimeout
     * @return SDKResponse
     * @throws Exception
     */
    public static async process(request: object, url: string, responseClassName: string, readTimeout: number, connTimeout: number) {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "process for request: ", request);

        // create JSON request but skip null values
        var formattedJsonReq = JSON.stringify(request, function (key, value) {
            if (value !== null) {
                return value;
            }
        });

        var rawJsonResponse = await Request.executeCurl(url, formattedJsonReq, readTimeout, connTimeout);
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "Raw Response: " + rawJsonResponse);

        /* convert json to object of their respective response class type */
        var responseObj: any;
        if (responseClassName == "AsyncRefundResponse") {
            responseObj = new _AsyncRefundResponse.AsyncRefundResponse(new _SecureResponseHeader.SecureResponseHeader(), new _AsyncRefundResponseBody.AsyncRefundResponseBody());
        } else if (responseClassName == "InitiateTransactionResponse") {
            responseObj = new _InitiateTransactionResponse.InitiateTransactionResponse(new _SecureResponseHeader.SecureResponseHeader(), new _InitiateTransactionResponseBody.InitiateTransactionResponseBody());
        } else if (responseClassName == "NativePaymentStatusResponse") {
            responseObj = new _NativePaymentStatusResponse.NativePaymentStatusResponse(new _SecureResponseHeader.SecureResponseHeader(), new _NativePaymentStatusResponseBody.NativePaymentStatusResponseBody());
        } else if (responseClassName == "NativeRefundStatusResponse") {
            responseObj = new _NativeRefundStatusResponse.NativeRefundStatusResponse(new _SecureResponseHeader.SecureResponseHeader(), new _NativeRefundStatusResponseBody.NativeRefundStatusResponseBody());
        }

        responseObj = _CommonUtil.CommonUtil.mergeDeep(responseObj, JSON.parse(rawJsonResponse));

        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "Response Data Object: ", responseObj);

        var responseObjBody = responseObj.getBody();
        if (typeof responseObjBody === "undefined" || responseObjBody == null) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", _ErrorConstants.ErrorMessage.JSONSTRING_TO_OBJECT_CONVERSION_FAILED + "as responseData->getBody is null and raw json received is: " + rawJsonResponse);

            throw _SDKException.SDKException.getSDKException(_ErrorConstants.ErrorMessage.JSONSTRING_TO_OBJECT_CONVERSION_FAILED, rawJsonResponse);
        }

        var head = responseObj.getHead();
        var signature = head.getSignature();
        var resultInfo = responseObjBody.getResultInfo();
        var resultStatus = resultInfo.getResultStatus();

        Request.validateResponseSignature(responseObj, responseClassName, resultStatus, rawJsonResponse, signature);

        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "Execution completed with raw json response: " + rawJsonResponse);
        return new _SDKResponse.SDKResponse(responseObj, rawJsonResponse);
    }

    /**
     * @param string apiURL
     * @param strin requestParams
     * @throws Exception
     */
    private static executeCurl(apiURL: string, requestParams: string, readTimeout: number, connTimeout: number): Promise<any> {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "executeCurl called ");

        var options = {
            method: 'POST',
            url: apiURL,
            headers: {
                'Content-Type': 'application/json',
                'X-Request-ID': _Config.Config.requestId
            },
            timeout: readTimeout,
            body: requestParams,
        }

        //console.log("\n\n>>>>>>>>>>Json request body: ", requestParams);

        return new Promise(function (resolve, reject) {

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "will make API call to: " + apiURL);

            _request(options, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    //console.log("\n\n>>>>>>>>>>Json response body: ", body);
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "API response received upon successful execution: " + body);
                    resolve(body);
                }
                else {
                    var error = res.statusCode + ": " + res.statusMessage;
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.ERROR, "Request", "API Communication Error: " + error + "\nResponse Received: " + body);

                    reject(new _SDKException.SDKException("API Communication Error" + error));
                }
            });
        });
    }

    /**
     * @param responseObj
     * @param responseClassName
     * @param resultStatus
     * @param rawJsonResponse
     * @param signature
     * @return void
     * @throws Exception
     */
    private static validateResponseSignature(responseObj, responseClassName: string, resultStatus: string, rawJsonResponse: string, signature: string): void {
        if ((responseObj.constructor.name == responseClassName) &&
            (_LibraryConstants.LibraryConstants.SUCCESS_STATUS == resultStatus || _LibraryConstants.LibraryConstants.PENDING_STATUS == resultStatus || _LibraryConstants.LibraryConstants.TXN_SUCCESS_STATUS == resultStatus)) {

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "validating signature ");

            /* declare interface to know typescript there will be some head and body for this object */
            interface rawJsonResponse {
                head
                body
            }

            var arrayResponse: rawJsonResponse = JSON.parse(rawJsonResponse);
            var body: string = JSON.stringify(arrayResponse.body);

            var isValidated: boolean = _EncDecUtil.EncDecUtil.verifySignature(body, _MerchantProperties.MerchantProperties.getMerchantKey(), signature);

            if (!isValidated) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.DEBUG, "Request", "signature validation failed ");

                throw _SDKException.SDKException.getSignatureValidationFailedException(rawJsonResponse);
            }

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "signature validation passed ");
        }
    }
}