"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _LibraryContants = require("../constants/LibraryConstants");
const _ErrorConstants = require("../constants/ErrorConstants");
const _LoggingUtil = require("../utils/LoggingUtil");
const _SecureRequestHeader = require("../request/SecureRequestHeader");
const _ResultInfo = require("../response/ResultInfo");
const _SDKException = require("../exceptions/SDKException");
const _SDKResponse = require("../../merchant/models/SDKResponse");
const uuid = require("uuid");
/**
 * This class handles all the calls from TransactionalHandler.java and
 * create request objects and make call to the respective controller
 *
 * This class receive the Paytm response objects and translate the to their
 * respective merchant response objects and returns call to Merchant Application
 */
/* class: CommonUtil */
class CommonUtil {
    /**
     * @param Exception e
     * @param InitiateTransactionResponse|NativePaymentStatusResponse|AsyncRefundResponse|NativeRefundStatusResponse obj
     * @return SDKResponse
     * @throws Exception
     */
    static getSDKResponse(e, obj) {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "CommonUtil", "getSDKResponse with exception : ", e);
        var result = new _ResultInfo.ResultInfo();
        result.setResultStatus(_ErrorConstants.ErrorConstants.FAILURE);
        result.setResultCode(_ErrorConstants.ErrorCode.DEFAULT_CODE);
        result.setResultMsg(e);
        // if (obj instanceof Response) {
        obj.getBody().setResultInfo(result);
        // }
        if (e instanceof _SDKException.SDKException) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "CommonUtil", "Exception instanceof SDKException with rawData : " + e.getRawdata());
            return new _SDKResponse.SDKResponse(obj, e.getRawdata());
        }
        return new _SDKResponse.SDKResponse(obj, null);
    }
    /**
     * @param string clientId
     * @param string workFlow
     * @param string channelId
     * @return SecureRequestHeader returns the SecureRequestHeader object
     * @throws Exception
     */
    static getSecureRequestHeader(clientId, workFlow, channelId) {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "CommonUtil", "In getSecureRequestHeader");
        var secureRequestHeader = new _SecureRequestHeader.SecureRequestHeader();
        secureRequestHeader.setVersion(_LibraryContants.LibraryConstants.VERSION);
        secureRequestHeader.setChannelId(channelId);
        secureRequestHeader.setRequestTimestamp(new Date().getTime().toString());
        secureRequestHeader.setWorkFlow(workFlow);
        secureRequestHeader.setClientId(clientId);
        secureRequestHeader.setSignature(null);
        return secureRequestHeader;
    }
    /**
     * @param string param
     * @return bool
     */
    static isEmptyOrNull(param) {
        /** CASE1: Empty string
         *  CASE2: Null value
         *  CASE3: Whitespaces
         */
        if (typeof param === "undefined" || (typeof param !== "object" && param.trim() == ""))
            return true;
        /** CASE4: valid string value */
        return false;
    }
    /**
     * @param item
     * @return {boolean}
     */
    static isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    static mergeDeep(target, ...sources) {
        if (!sources.length)
            return target;
        const source = sources.shift();
        if (CommonUtil.isObject(target) && CommonUtil.isObject(source)) {
            for (const key in source) {
                if (CommonUtil.isObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, { [key]: {} });
                    CommonUtil.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return CommonUtil.mergeDeep(target, ...sources);
    }
    /**
    * @return string
    */
    static getUniqueRequestId() {
        return _LibraryContants.LibraryConstants.NODE_SDK_TEXT + ":" + _LibraryContants.LibraryConstants.NODE_SDK_VERSION + ":" +
            uuid.v4();
    }
}
exports.CommonUtil = CommonUtil;
