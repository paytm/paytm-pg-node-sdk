"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ErrorConstants = require("../constants/ErrorConstants");
const _LoggingUtil = require("../utils/LoggingUtil");
const _SDKException = require("../exceptions/SDKException");
/**
 * SDKException creates exception which are originated from Merchant code
 */
/* class: SDKException */
class SDKException {
    /**
     * SDKException constructor.
     * @param string msg
     */
    constructor(msg, rawData) {
        this.message = msg;
        if ("undefined" !== typeof rawData && null !== rawData) {
            this.rawData = rawData;
        }
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", "SDKException's msg " + this.message);
    }
    /**
     * @return string
     */
    getMessage() {
        return this.message;
    }
    /**
     * @return string
     */
    getRawdata() {
        return this.rawData;
    }
    /**
     * @param string msg
     * @param string rawData
     * @return void
     */
    setRawData(rawData) {
        this.rawData = rawData;
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", "SDKException's raw response JSON " + this.rawData);
    }
    /**
     * @return SDKException when any mandatory parameter is missing
     * @throws Exception
     */
    static getMerchantPropertyInitializationException() {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", _ErrorConstants.ErrorMessage.MISSING_MERCHANT_PROPERTY);
        return new SDKException(_ErrorConstants.ErrorMessage.MISSING_MERCHANT_PROPERTY);
    }
    /**
     * @return SDKException when any mandatory parameter is missing
     * @throws Exception
     */
    static getMissingMandatoryParametersException() {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", _ErrorConstants.ErrorMessage.MISSING_MANDATORY_PARAMETERS);
        return new SDKException(_ErrorConstants.ErrorMessage.MISSING_MANDATORY_PARAMETERS);
    }
    /**
     * @return SDKException when Signature validation failed at merchant side
     * @throws Exception
     */
    static getSignatureValidationFailedException(rawJsonResponse) {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", _ErrorConstants.ErrorMessage.SIGNATURE_VALIDATION_FAILED);
        return new _SDKException.SDKException(_ErrorConstants.ErrorMessage.SIGNATURE_VALIDATION_FAILED, rawJsonResponse);
    }
    /**
     * @param exceptionMessage
     * @param jsonObject
     * @return SDKException
     * @throws Exception
     */
    static getSDKException(exceptionMessage, rawJsonResponse) {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", "getSDKException message: " + exceptionMessage + " and jsonObject: " + rawJsonResponse);
        var sdkException = new _SDKException.SDKException(exceptionMessage);
        sdkException.setRawData(rawJsonResponse);
        return sdkException;
    }
}
exports.SDKException = SDKException;
