/**
 * Copyright (C) 2019 Paytm.
 */
/**
 * SDKException creates exception which are originated from Merchant code
 */
export declare class SDKException {
    /**
     * @var string
     */
    private rawData;
    /**
     * @var string
     */
    private message;
    /**
     * SDKException constructor.
     * @param string msg
     */
    constructor(msg: string, rawData?: string);
    /**
     * @return string
     */
    getMessage(): string;
    /**
     * @return string
     */
    getRawdata(): string;
    /**
     * @param string msg
     * @param string rawData
     * @return void
     */
    setRawData(rawData: string): void;
    /**
     * @return SDKException when any mandatory parameter is missing
     * @throws Exception
     */
    static getMerchantPropertyInitializationException(): SDKException;
    /**
     * @return SDKException when any mandatory parameter is missing
     * @throws Exception
     */
    static getMissingMandatoryParametersException(): SDKException;
    /**
     * @return SDKException when Signature validation failed at merchant side
     * @throws Exception
     */
    static getSignatureValidationFailedException(rawJsonResponse: string): SDKException;
    /**
     * @param exceptionMessage
     * @param jsonObject
     * @return SDKException
     * @throws Exception
     */
    static getSDKException(exceptionMessage: string, rawJsonResponse: string): SDKException;
}
