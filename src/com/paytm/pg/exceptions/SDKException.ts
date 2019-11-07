/**
 * Copyright (C) 2019 Paytm.
 */

import * as _ErrorConstants from "../constants/ErrorConstants";
import * as _LoggingUtil from "../utils/LoggingUtil";
import * as _SDKException from "../exceptions/SDKException";


/**
 * SDKException creates exception which are originated from Merchant code
 */
/* class: SDKException */
export class SDKException {

    /**
     * @var string
     */
    private rawData: string;

    /**
     * @var string
     */
    private message: string;

    /**
     * SDKException constructor.
     * @param string msg
     */
    public constructor(msg: string, rawData?: string) {
        this.message = msg;
        if ("undefined" !== typeof rawData && null !== rawData) {
            this.rawData = rawData;
        }
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", "SDKException's msg " + this.message);
    }

    /**
     * @return string
     */
    public getMessage(): string {
        return this.message;
    }

    /**
     * @return string
     */
    public getRawdata(): string {
        return this.rawData;
    }

    /**
     * @param string msg
     * @param string rawData
     * @return void
     */
    public setRawData(rawData: string): void {
        this.rawData = rawData;
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", "SDKException's raw response JSON " + this.rawData);
    }

    /**
     * @return SDKException when any mandatory parameter is missing
     * @throws Exception
     */
    public static getMerchantPropertyInitializationException(): SDKException {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", _ErrorConstants.ErrorMessage.MISSING_MERCHANT_PROPERTY);
        return new SDKException(_ErrorConstants.ErrorMessage.MISSING_MERCHANT_PROPERTY);
    }

    /**
     * @return SDKException when any mandatory parameter is missing
     * @throws Exception
     */
    public static getMissingMandatoryParametersException(): SDKException {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", _ErrorConstants.ErrorMessage.MISSING_MANDATORY_PARAMETERS);
        return new SDKException(_ErrorConstants.ErrorMessage.MISSING_MANDATORY_PARAMETERS);
    }

    /**
     * @return SDKException when Signature validation failed at merchant side
     * @throws Exception
     */
    public static getSignatureValidationFailedException(rawJsonResponse: string): SDKException {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", _ErrorConstants.ErrorMessage.SIGNATURE_VALIDATION_FAILED);
        return new _SDKException.SDKException(_ErrorConstants.ErrorMessage.SIGNATURE_VALIDATION_FAILED, rawJsonResponse);
    }

    /**
     * @param exceptionMessage
     * @param jsonObject
     * @return SDKException
     * @throws Exception
     */
    public static getSDKException(exceptionMessage: string, rawJsonResponse: string): SDKException {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.CRITICAL, "SDKException", "getSDKException message: " + exceptionMessage + " and jsonObject: " + rawJsonResponse);
        var sdkException = new _SDKException.SDKException(exceptionMessage);
        sdkException.setRawData(rawJsonResponse);
        return sdkException;
    }
}