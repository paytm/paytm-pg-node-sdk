/**
 * Copyright (C) 2019 Paytm.
 */

import * as _MerchantProperties from "../../pg/constants/MerchantProperties";
import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _LoggingUtil from "../../pg/utils/LoggingUtil";
import * as _SDKException from "../../pg/exceptions/SDKException";
import * as _AsyncRefundResponse from "../../pg/response/AsyncRefundResponse";
import * as _AsyncRefundResponseBody from "../../pg/response/AsyncRefundResponseBody";
import * as _Request from "../../pg/process/Request";
import * as _SecureRequestHeader from "../request/SecureRequestHeader";
import * as _EncDecUtil from "../utils/EncDecUtil";
import * as _ErrorConstants from "../constants/ErrorConstants";
import * as _RefundDetail from "../../merchant/models/RefundDetail";
import * as _RefundStatusDetail from "../../merchant/models/RefundStatusDetail";
import * as _RefundInitiateRequest from "../request/RefundInitiateRequest";
import * as _NativeRefundStatusResponse from "../response/NativeRefundStatusResponse";
import * as _NativeRefundStatusResponseBody from "../response/NativeRefundStatusResponseBody";
import * as _NativeRefundStatusRequest from "../request/NativeRefundStatusRequest";
import * as _Config from "../constants/Config";

/**
 * This class is handle all the Refund calls from EntryPoint.java and create
 * request objects and make call to the respective controller
 *
 * This class receive the Paytm response objects and translate the to their
 * respective merchant response objects and returns call to EntryPoint
 */
/* class: Refund */
export class Refund {
    /**
     * doRefund gets RefundDetail object as parameter and creates request object to
     * call Processrequest process. It returns the AsyncRefundResponseBody which
     * will be used by merchant in future. It handles the exception if occurred, and
     * returns the respective object with error message.
     *
     * @param RefundDetail
     * @return SDKResponse
     * @throws Exception
     */
    public static async initiateRefund(refundDetail): Promise<any> {
        if (refundDetail instanceof _RefundDetail.RefundDetail) {
            try {
                _Config.Config.requestId = _CommonUtil.CommonUtil.getUniqueRequestId();
                if (!_MerchantProperties.MerchantProperties.isInitialized) {
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", " MerchantProperties are not initialized ");
                    return _CommonUtil.CommonUtil.getSDKResponse(_SDKException.SDKException.getMerchantPropertyInitializationException(),
                        new _AsyncRefundResponse.AsyncRefundResponse(null, new _AsyncRefundResponseBody.AsyncRefundResponseBody()));
                }

                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "In doRefund RefundDetail " + JSON.stringify(refundDetail));

                Refund.validateRefundDetailObject(refundDetail);
                var request = Refund.createRefundInitiateRequest(refundDetail);

                var requestHead = request.getHead();
                var requestBody = request.getBody();
                await Refund.setSignature(requestHead, requestBody);

                return await _Request.Request.process(request, _MerchantProperties.MerchantProperties.getRefundUrl(), "AsyncRefundResponse", refundDetail.getReadTimeout(), _MerchantProperties.MerchantProperties.connectTimeout);

            } catch (e) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "Caught exception in doRefund, exception object: ", e);
                return _CommonUtil.CommonUtil.getSDKResponse(e, new _AsyncRefundResponse.AsyncRefundResponse(null, new _AsyncRefundResponseBody.AsyncRefundResponseBody()));
            }
        } else {
            var e = _SDKException.SDKException.getSDKException("In initiateRefund, " + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
            return _CommonUtil.CommonUtil.getSDKResponse(e, new _AsyncRefundResponse.AsyncRefundResponse(null, new _AsyncRefundResponseBody.AsyncRefundResponseBody()));
        }
    }

    /**
     * setSignature set the signature in head(SecureRequestHeader), signature will
     * be generated by the body(Object)
     * @param SecureRequestHeader
     * @param RefundInitiateRequestBody
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
     * @param RefundDetail
     * @return RefundInitiateRequest
     * @throws Exception
     */
    private static createRefundInitiateRequest(refundDetail) {
        if (refundDetail instanceof _RefundDetail.RefundDetail) {
            var head = _CommonUtil.CommonUtil.getSecureRequestHeader(_MerchantProperties.MerchantProperties.getClientId(), refundDetail.getWorkFlow(), null);
            var body = refundDetail.createRefundInitiateRequestBody();

            var request = new _RefundInitiateRequest.RefundInitiateRequest();
            request.setHead(head);
            request.setBody(body);
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "RefundInitiateRequest object " + JSON.stringify(request));
            return request;
        } else {
            throw _SDKException.SDKException.getSDKException('In createRefundInitiateRequestWithRefundDetail' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }
    }

    /**
     * validateRefund checks if all mandatory parameters are present for Refund api
     * call. If not, then is will throw the SDKException exception
     *
     * @param RefundDetail
     * @return void
     * @throws Exception
     */
    private static validateRefundDetailObject(refundDetail): void {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "validateRefundDetailObject for object: " + JSON.stringify(refundDetail));

        if (_CommonUtil.CommonUtil.isEmptyOrNull(refundDetail.getOrderId())
            || _CommonUtil.CommonUtil.isEmptyOrNull(refundDetail.getRefId())
            || _CommonUtil.CommonUtil.isEmptyOrNull(refundDetail.getTxnId())
            || _CommonUtil.CommonUtil.isEmptyOrNull(refundDetail.getTxnType())
            || _CommonUtil.CommonUtil.isEmptyOrNull(refundDetail.getRefundAmount())) {

            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "validateRefundDetailObject returns false ");
            throw _SDKException.SDKException.getMissingMandatoryParametersException();
        }
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "validateRefundDetailObject returns true ");
    }

    /**
     * This method gets RefundStatusDetail object as parameter and returns the
     * SDKResponse(NativeRefundStatusResponse).
     *
     * It creates request object to call ProcessRequest.process. It returns the
     * SDKResponse(NativeRefundStatusResponse) which contains refund status object.
     * It handles the exception if occurred, and returns the respective object with
     * error message.
     *
     * @param RefundStatusDetail object containing data regarding refund status
     * @return SDKResponse containing response string from api hit and response object
     *
     * @throws Exception
     */
    public static async getRefundStatus(refundStatusDetail): Promise<any> {
        if (refundStatusDetail instanceof _RefundStatusDetail.RefundStatusDetail) {
            try {
                _Config.Config.requestId = _CommonUtil.CommonUtil.getUniqueRequestId();
                if (!_MerchantProperties.MerchantProperties.isInitialized) {
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", " MerchantProperties are not initialized ");
                    return _CommonUtil.CommonUtil.getSDKResponse(_SDKException.SDKException.getMerchantPropertyInitializationException(),
                        new _NativeRefundStatusResponse.NativeRefundStatusResponse(null, new _NativeRefundStatusResponseBody.NativeRefundStatusResponseBody()));
                }

                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "In getRefundStatus, RefundStatusDetail: " + JSON.stringify(refundStatusDetail));

                Refund.validateRefundStatusDetailObject(refundStatusDetail);
                var request = Refund.createRefundStatusRequest(refundStatusDetail);

                var requestHead = request.getHead();
                var requestBody = request.getBody();
                await Refund.setSignature(requestHead, requestBody);

                return await _Request.Request.process(request, _MerchantProperties.MerchantProperties.getRefundStatusUrl(), "NativeRefundStatusResponse", refundStatusDetail.getReadTimeout(), _MerchantProperties.MerchantProperties.connectTimeout);

            } catch (e) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.ERROR, "Refund", "Caught exception in getRefundStatus: ", e);
                return _CommonUtil.CommonUtil.getSDKResponse(e, new _NativeRefundStatusResponse.NativeRefundStatusResponse(null, new _NativeRefundStatusResponseBody.NativeRefundStatusResponseBody()));
            }
        } else {
            var e = _SDKException.SDKException.getSDKException('In getRefundStatus, ' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
            return _CommonUtil.CommonUtil.getSDKResponse(e, new _NativeRefundStatusResponse.NativeRefundStatusResponse(null, new _NativeRefundStatusResponseBody.NativeRefundStatusResponseBody()));
        }
    }

    /**
     * @param RefundStatusDetail refundStatusDetail
     * @return NativeRefundStatusRequest
     * @throws Exception
     */
    private static createRefundStatusRequest(refundStatusDetail) {
        if (refundStatusDetail instanceof _RefundStatusDetail.RefundStatusDetail) {
            var head = _CommonUtil.CommonUtil.getSecureRequestHeader(_MerchantProperties.MerchantProperties.getClientId(), null, null);
            var body = refundStatusDetail.createNativeRefundStatusRequestBody();
            var request = new _NativeRefundStatusRequest.NativeRefundStatusRequest(head, body);
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "NativeRefundStatusRequest object " + JSON.stringify(request));
            return request;
        } else {
            throw _SDKException.SDKException.getSDKException('In createRefundInitiateRequestWithRefundDetail, ' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }
    }

    /**
     * validateRefundStatusDetailObject checks if all mandatory parameters are present for
     * Payment Status api call. If not, then is will throw the
     * SDKException exception
     *
     * @param RefundStatusDetail
     * @return void
     * @throws Exception
     */
    private static validateRefundStatusDetailObject(refundStatusDetail): void {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", "validateRefundStatusDetailObject for request: " + JSON.stringify(refundStatusDetail));

        if (refundStatusDetail instanceof _RefundStatusDetail.RefundStatusDetail) {
            if (_CommonUtil.CommonUtil.isEmptyOrNull(refundStatusDetail.getOrderId())
                || _CommonUtil.CommonUtil.isEmptyOrNull(refundStatusDetail.getRefId())) {
                _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", " validateRefundStatusDetailObject returns false ");
                throw _SDKException.SDKException.getMissingMandatoryParametersException();
            }
        } else {
            throw _SDKException.SDKException.getSDKException('In validateRefundStatusDetailObject, ' + _ErrorConstants.ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM, null);
        }
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "Refund", " validateRefundStatusDetailObject returns true ");
    }
}