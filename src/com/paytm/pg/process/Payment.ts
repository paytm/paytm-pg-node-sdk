/**
 * Copyright (C) 2019 Paytm.
 */

/**
 * PreProcess class is used to validate the Api call on the basis of required parameters.
 * It also set the signature for api in which signature is required.
 */

import * as _MerchantProperties from "../../pg/constants/MerchantProperties";
import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _LoggingUtil from "../../pg/utils/LoggingUtil";
import * as _SDKException from "../../pg/exceptions/SDKException";
import * as _InitiateTransactionResponse from "../../pg/response/InitiateTransactionResponse";
import * as _InitiateTransactionResponseBody from "../../pg/response/InitiateTransactionResponseBody";
import * as _InitiateTransactionRequest from "../../pg/request/InitiateTransactionRequest";
import * as _Request from "../../pg/process/Request";
import * as _ErrorConstants from "../constants/ErrorConstants";
import * as _PaymentDetail from "../../merchant/models/PaymentDetail";
import * as _Money from "../models/Money";
import * as _UserInfo from "../models/UserInfo";
import * as _SecureRequestHeader from "../request/SecureRequestHeader";
import * as _EncDecUtil from "../utils/EncDecUtil";
import * as _NativePaymentStatusResponse from "../response/NativePaymentStatusResponse";
import * as _NativePaymentStatusResponseBody from "../response/NativePaymentStatusResponseBody";
import * as _NativePaymentStatusRequest from "../request/NativePaymentStatusRequest";
import * as _PaymentStatusDetail from "../../merchant/models/PaymentStatusDetail";
import * as _Config from "../constants/Config";

/* class: Payment */
export class Payment {

    /**
     * createTxnToken gets PaymentDetail object as parameter and creates request
     * object to call ProcessRequest.process. It returns the
     * InitiateTransactionResponseBody which holds the createTxnToken result
     * parameters which will be used by merchant in future. It handles the exception
     * if occurred, and returns the respective object with error message.
     *
     * @param PaymentDetail
     * @return SDKResponse
     * @throws Exception
     */
    public static async createTxnToken(paymentDetails): Promise<any> {
        if (paymentDetails instanceof _PaymentDetail.PaymentDetail) {
            try {
                _Config.Config.requestId = _CommonUtil.CommonUtil.getUniqueRequestId();
                if (!_MerchantProperties.MerchantProperties.isInitialized) {
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "MerchantProperties are not initialized ");
                    var exception = _SDKException.SDKException.getMerchantPropertyInitializationException();
                    var response_body = new _InitiateTransactionResponseBody.InitiateTransactionResponseBody();
                    var response = new _InitiateTransactionResponse.InitiateTransactionResponse(null, response_body);
                    return _CommonUtil.CommonUtil.getSDKResponse(exception, response);
                }

                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "In createTxnToken PaymentDetail: ", paymentDetails);

                Payment.validatePaymentDetailsObject(paymentDetails);
                var request = Payment.createInitiateTransactionRequest(paymentDetails);

                var requestHead = request.getHead();
                var requestBody = request.getBody();
                await Payment.setSignature(requestHead, requestBody);

                var url = Payment.urlBuilder(_MerchantProperties.MerchantProperties.getInitiateTxnUrl(), requestBody.getMid(), requestBody.getOrderId());
                return await _Request.Request.process(request, url,
                    "InitiateTransactionResponse", paymentDetails.getReadTimeout(), _MerchantProperties.MerchantProperties.connectTimeout);

            } catch (e) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "Exception caught in createTxnToken: ", e);

                return _CommonUtil.CommonUtil.getSDKResponse(e, new _InitiateTransactionResponse.InitiateTransactionResponse(null, new _InitiateTransactionResponseBody.InitiateTransactionResponseBody()));
            }
        } else {
            var e = _SDKException.SDKException.getSDKException("In createInitiateTransactionRequest, " + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
            return _CommonUtil.CommonUtil.getSDKResponse(e, new _InitiateTransactionResponse.InitiateTransactionResponse(null, new _InitiateTransactionResponseBody.InitiateTransactionResponseBody()));
        }
    }

    /**
     * validateCreateTxnToken checks if all mandatory parameters are present for
     * CreateTxnToken api call.
     * If not, then this will throw SDKException exception
     * 
     * @param PaymentDetail
     * @throws Exception
     * @return void
     */
    private static validatePaymentDetailsObject(paymentDetails): void {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "validatePaymentDetailsObject for object: ", paymentDetails);

        if (paymentDetails instanceof _PaymentDetail.PaymentDetail) {
            var txnAmount = paymentDetails.getTxnAmount();
            var userInfo = paymentDetails.getUserInfo();
            if (//Is ChannelId a mandatory param ????
                _CommonUtil.CommonUtil.isEmptyOrNull(paymentDetails.getOrderId())
                || (false === (txnAmount instanceof _Money.Money))
                || _CommonUtil.CommonUtil.isEmptyOrNull(txnAmount.getValue())
                || (false === (userInfo instanceof _UserInfo.UserInfo))
                || _CommonUtil.CommonUtil.isEmptyOrNull(userInfo.getCustId())) {

                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", " validatePaymentDetailsObject returns false ");
                throw _SDKException.SDKException.getMissingMandatoryParametersException();
            }
        } else {

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "validatePaymentDetailsObject for object: " + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM);

            throw new _SDKException.SDKException("In validatePaymentDetailsObject, " + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM);

        }
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", " validatePaymentDetailsObject returns true ");
    }

    /**
     * @param PaymentDetail
     * @return InitiateTransactionRequest
     * @throws Exception
     */
    private static createInitiateTransactionRequest(paymentDetails) {
        if (paymentDetails instanceof _PaymentDetail.PaymentDetail) {
            var head = _CommonUtil.CommonUtil.getSecureRequestHeader(_MerchantProperties.MerchantProperties.getClientId(), paymentDetails.getWorkFlow(), paymentDetails.getChannelId());
            var body = paymentDetails.createInitiateTransactionRequestBody();
            var request = new _InitiateTransactionRequest.InitiateTransactionRequest(head, body);

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "InitiateTransactionRequest object ", request);
            return request;

        } else {
            throw _SDKException.SDKException.getSDKException("In createInitiateTransactionRequest, " + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }
    }

    /**
     * setSignature set the signature in head(SecureRequestHeader), signature will
     * be generated by the body(Object)
     *
     * @param SecureRequestHeader
     * @param InitiateTransactionRequestBody|NativePaymentStatusRequestBody
     * @throws Exception
     */
    private static async setSignature(head, body): Promise<any> {
        if (head instanceof _SecureRequestHeader.SecureRequestHeader) {
            var formattedJsonBody = JSON.stringify(body);
            var signature = await _EncDecUtil.EncDecUtil.generateSignature(formattedJsonBody, _MerchantProperties.MerchantProperties.getMerchantKey());
            head.setSignature(signature);
        } else {
            throw _SDKException.SDKException.getSDKException("In setSignature, " + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }
    }

    /**
     * getPaymentStatus gets constant parameters and creates request object to call
     * ProcessRequest.process. It returns the NativeMerchantStatusResponseBody which
     * holds the getPaymentStatus result parameters which will be used by merchant
     * in future. It handles the exception if occurred, and returns the respective
     * object with error message.
     *
     * @param PaymentStatusDetail
     * @return SDKResponse
     * @throws Exception
     */
    public static async getPaymentStatus(paymentStatusDetail): Promise<any> {
        if (paymentStatusDetail instanceof _PaymentStatusDetail.PaymentStatusDetail) {
            _Config.Config.requestId = _CommonUtil.CommonUtil.getUniqueRequestId();
            try {
                if (!_MerchantProperties.MerchantProperties.isInitialized) {
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", " MerchantProperties are not initialized ");
                    return _CommonUtil.CommonUtil.getSDKResponse(_SDKException.SDKException.getMerchantPropertyInitializationException(),
                        new _NativePaymentStatusResponse.NativePaymentStatusResponse(null, new _NativePaymentStatusResponseBody.NativePaymentStatusResponseBody()));
                }

                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "In getPaymentStatus PaymentStatusDetail: ", paymentStatusDetail);

                Payment.validatePaymentStatusDetailObject(paymentStatusDetail);

                var request = Payment.createNativePaymentStatusRequest(paymentStatusDetail);

                var requestHead = request.getHead();
                var requestBody = request.getBody();
                await Payment.setSignature(requestHead, requestBody);

                return await _Request.Request.process(request, _MerchantProperties.MerchantProperties.getPaymentStatusUrl(), "NativePaymentStatusResponse", paymentStatusDetail.getReadTimeout(), _MerchantProperties.MerchantProperties.connectTimeout);

            } catch (e) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.ERROR, "Payment", "Caught exception in getPaymentStatus: ", e);
                return _CommonUtil.CommonUtil.getSDKResponse(e, new _NativePaymentStatusResponse.NativePaymentStatusResponse(null, new _NativePaymentStatusResponseBody.NativePaymentStatusResponseBody()));
            }
        } else {
            var e = _SDKException.SDKException.getSDKException('In getPaymentStatus, ' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
            return _CommonUtil.CommonUtil.getSDKResponse(e, new _NativePaymentStatusResponse.NativePaymentStatusResponse(null, new _NativePaymentStatusResponseBody.NativePaymentStatusResponseBody()));
        }
    }

    /**
     * validateGetPaymentStatus checks if all mandatory parameters are present for
     * Payment Status api call. If not, then is will throw the
     * SDKException exception
     *
     * @param PaymentStatusDetail
     * @return void
     * @throws Exception
     */
    private static validatePaymentStatusDetailObject(paymentStatusDetail): void {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "validatePaymentStatusDetailObject for request: ", paymentStatusDetail);

        if (paymentStatusDetail instanceof _PaymentStatusDetail.PaymentStatusDetail) {
            if (_CommonUtil.CommonUtil.isEmptyOrNull(paymentStatusDetail.getOrderId())) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", " validatePaymentStatusDetailObject returns false ");
                throw _SDKException.SDKException.getMissingMandatoryParametersException();
            }
        } else {
            throw _SDKException.SDKException.getSDKException('In validatePaymentStatusDetailObject, ' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }

        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", " validatePaymentStatusDetailObject returns true ");
    }

    /**
     * @param PaymentStatusDetail
     * @return NativePaymentStatusRequest
     * @throws Exception
     */
    private static createNativePaymentStatusRequest(paymentStatusDetail) {
        if (paymentStatusDetail instanceof _PaymentStatusDetail.PaymentStatusDetail) {
            var head = _CommonUtil.CommonUtil.getSecureRequestHeader(_MerchantProperties.MerchantProperties.getClientId(), null, null);
            var body = paymentStatusDetail.createNativePaymentStatusRequestBody();

            var request = new _NativePaymentStatusRequest.NativePaymentStatusRequest();
            request.setHead(head);
            request.setBody(body);

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Payment", "NativePaymentStatusRequest object ", request);
            return request;
        } else {
            throw _SDKException.SDKException.getSDKException('In createNativePaymentStatusRequest, ' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }

    }

    /**
     * @param url
     * @param mid
     * @param orderId
     * @return string
     * Returns the url string with adding queryParameters
     */
    private static urlBuilder(url: string, mid: string, orderId: string): string {
        return url + "?mid=" + mid + "&orderId=" + orderId;
    }
}