"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _MerchantProperties = require("../constants/MerchantProperties");
const _EncDecUtil = require("../utils/EncDecUtil");
const _LibraryConstants = require("../constants/LibraryConstants");
const _ErrorConstants = require("../constants/ErrorConstants");
const _LoggingUtil = require("../utils/LoggingUtil");
const _SecureResponseHeader = require("../response/SecureResponseHeader");
const _SDKException = require("../exceptions/SDKException");
const _SDKResponse = require("../../merchant/models/SDKResponse");
const _AsyncRefundResponse = require("../response/AsyncRefundResponse");
const _AsyncRefundResponseBody = require("../response/AsyncRefundResponseBody");
const _InitiateTransactionResponse = require("../response/InitiateTransactionResponse");
const _InitiateTransactionResponseBody = require("../response/InitiateTransactionResponseBody");
const _NativePaymentStatusResponse = require("../response/NativePaymentStatusResponse");
const _NativePaymentStatusResponseBody = require("../response/NativePaymentStatusResponseBody");
const _NativeRefundStatusResponse = require("../response/NativeRefundStatusResponse");
const _NativeRefundStatusResponseBody = require("../response/NativeRefundStatusResponseBody");
const _CommonUtil = require("../../pg/utils/CommonUtil");
const _Config = require("../../pg/constants/Config");
const _request = require("request");
/* class: Request */
class Request {
    /**
     * @param object request
     * @param string url
     * @param string responseClassName
     * @param int readTimeout
     * @param int connTimeout
     * @return SDKResponse
     * @throws Exception
     */
    static process(request, url, responseClassName, readTimeout, connTimeout) {
        return __awaiter(this, void 0, void 0, function* () {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "process for request: ", request);
            // create JSON request but skip null values
            var formattedJsonReq = JSON.stringify(request, function (key, value) {
                if (value !== null) {
                    return value;
                }
            });
            var rawJsonResponse = yield Request.executeCurl(url, formattedJsonReq, readTimeout, connTimeout);
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "Raw Response: " + rawJsonResponse);
            /* convert json to object of their respective response class type */
            var responseObj;
            if (responseClassName == "AsyncRefundResponse") {
                responseObj = new _AsyncRefundResponse.AsyncRefundResponse(new _SecureResponseHeader.SecureResponseHeader(), new _AsyncRefundResponseBody.AsyncRefundResponseBody());
            }
            else if (responseClassName == "InitiateTransactionResponse") {
                responseObj = new _InitiateTransactionResponse.InitiateTransactionResponse(new _SecureResponseHeader.SecureResponseHeader(), new _InitiateTransactionResponseBody.InitiateTransactionResponseBody());
            }
            else if (responseClassName == "NativePaymentStatusResponse") {
                responseObj = new _NativePaymentStatusResponse.NativePaymentStatusResponse(new _SecureResponseHeader.SecureResponseHeader(), new _NativePaymentStatusResponseBody.NativePaymentStatusResponseBody());
            }
            else if (responseClassName == "NativeRefundStatusResponse") {
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
        });
    }
    /**
     * @param string apiURL
     * @param strin requestParams
     * @throws Exception
     */
    static executeCurl(apiURL, requestParams, readTimeout, connTimeout) {
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
        };
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
    static validateResponseSignature(responseObj, responseClassName, resultStatus, rawJsonResponse, signature) {
        if ((responseObj.constructor.name == responseClassName) &&
            (_LibraryConstants.LibraryConstants.SUCCESS_STATUS == resultStatus || _LibraryConstants.LibraryConstants.PENDING_STATUS == resultStatus || _LibraryConstants.LibraryConstants.TXN_SUCCESS_STATUS == resultStatus)) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "validating signature ");
            var arrayResponse = JSON.parse(rawJsonResponse);
            var body = JSON.stringify(arrayResponse.body);
            var isValidated = _EncDecUtil.EncDecUtil.verifySignature(body, _MerchantProperties.MerchantProperties.getMerchantKey(), signature);
            if (!isValidated) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.DEBUG, "Request", "signature validation failed ");
                throw _SDKException.SDKException.getSignatureValidationFailedException(rawJsonResponse);
            }
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Request", "signature validation passed ");
        }
    }
}
exports.Request = Request;
