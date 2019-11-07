/**
 * Copyright (C) 2019 Paytm.
 */

/**
 * This class is used to store all the merchant related constants
 *  that are common to all payments and orders
 */
import * as _LibraryConstants from "../constants/LibraryConstants";
import * as _LoggingUtil from "../utils/LoggingUtil";
import * as _CommonUtil from "../utils/CommonUtil";
import * as _SDKException from "../exceptions/SDKException";

/* class: MerchantProperties */
export class MerchantProperties {

    /**
     * @var bool
     */
    public static isInitialized: boolean = false;

    // TEST for Testing and PROD for Production.
    /**
     * @var string
     * ENVIRONMENT is used to set URLs(TESTING or PRODUCTION)
     */
    public static environment: string = _LibraryConstants.LibraryConstants.STAGING_ENVIRONMENT;

    /**
     * @var int
     * timeout constants
     */
    public static connectTimeout: number = 30000; // 30 * 1000

    /**
     * @var int
     * timeout constants
     */
    public static readTimeout: number = 80000; // 80 * 1000

    /**
     * @var string
     */
    public static mid: string;

    /**
     * @var string
     */
    public static merchantKey: string;

    /**
     * @var string
     */
    public static website: string = "WEBSTAGING";

    /**
     * @var string
     */
    public static clientId: string;

    /**
     * @var string callbackUrl callback url on which paytm will respond for api calls
     */
    public static callbackUrl: string = "https://pg-staging.paytm.in/MerchantSite/bankResponse";

    /** URLs */
    /**
     * @var string
     */
    private static initiateTxnUrl: string = "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction";

    /**
     * @var string
     */
    private static refundUrl: string = "https://securegw-stage.paytm.in/refund/api/v1/async/refund";

    /**
     * @var string
     */
    private static paymentStatusUrl: string = "https://securegw-stage.paytm.in/merchant-status/api/v1/getPaymentStatus";

    /**
     * @var string
     */
    private static refundStatusUrl: string = "https://securegw-stage.paytm.in/refund/api/v1/refundStatus";

    /**
     * @param string environment
     * @param string mid
     * @param string merchantKey
     * @param string website
     * @throws Exception
     */
    public static initialize(environment: string, mid: string, merchantKey: string, website: string) {
        if (!MerchantProperties.isInitialized) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "MerchantProperties", "initialize called");

            if (_CommonUtil.CommonUtil.isEmptyOrNull(environment))
                throw new _SDKException.SDKException("Environment can not be null or empty");
            else if (_CommonUtil.CommonUtil.isEmptyOrNull(mid))
                throw new _SDKException.SDKException("Mid can not be null or empty");
            else if (_CommonUtil.CommonUtil.isEmptyOrNull(merchantKey))
                throw new _SDKException.SDKException("Merchant key can not be null or empty");
            else if (_CommonUtil.CommonUtil.isEmptyOrNull(website))
                throw new _SDKException.SDKException("Website can not be null or empty");
            else {
                MerchantProperties.isInitialized = true;
                MerchantProperties.setEnvironment(environment);
                MerchantProperties.setMid(mid);
                MerchantProperties.setMerchantKey(merchantKey);
                MerchantProperties.setWebsite(website);
            }
        }
    }

    /**
     * @return string
     */
    public static getEnvironment(): string {
        return MerchantProperties.environment;
    }

    /**
     * @return string
     */
    public static getMid(): string {
        return MerchantProperties.mid;
    }

    /**
     * @return string
     */
    public static getMerchantKey(): string {
        return MerchantProperties.merchantKey;
    }

    /**
     * @return string
     */
    public static getWebsite(): string {
        return MerchantProperties.website;
    }

    /**
     * @return string
     */
    public static getClientId(): string {
        return MerchantProperties.clientId;
    }

    /**
     * @return string
     */
    public static getCallbackUrl(): string {
        return MerchantProperties.callbackUrl;
    }

    /**
     * @return string
     */
    public static getInitiateTxnUrl(): string {
        return MerchantProperties.initiateTxnUrl;
    }

    /**
     * @return string
     */
    public static getRefundUrl(): string {
        return MerchantProperties.refundUrl;
    }

    /**
     * @return string
     */
    public static getRefundStatusUrl(): string {
        return MerchantProperties.refundStatusUrl;
    }

    /**
     * @return string
     */
    public static getPaymentStatusUrl(): string {
        return MerchantProperties.paymentStatusUrl;
    }

    /**
     * @return int
     */
    public static getConnectionTimeout(): number {
        return MerchantProperties.connectTimeout;
    }

    /**
     * @param int connectionTimeout
     * @return void
     */
    public static setConnectionTimeout(connectionTimeout: number): void {
        MerchantProperties.connectTimeout = connectionTimeout;
    }

    /**
     * @param string mid
     */
    public static setMid(mid: string) {
        MerchantProperties.mid = mid;
    }

    /**
     * @param string merchantKey
     * @return void
     */
    public static setMerchantKey(merchantKey: string): void {
        MerchantProperties.merchantKey = merchantKey;
    }

    /**
     * @param string website
     * @return void
     */
    public static setWebsite(website: string): void {
        MerchantProperties.website = website;
    }

    /**
     * @param string clientId
     * @return void
     */
    public static setClientId(clientId: string): void {
        MerchantProperties.clientId = clientId;
    }

    /**
     * @param string callbackUrl
     * @return void
     */
    public static setCallbackUrl(callbackUrl: string): void {
        MerchantProperties.callbackUrl = callbackUrl;
    }

    /**
     * @param string environment
     * @return void
     * @throws Exception
     */
    public static setEnvironment(environment: string): void {
        MerchantProperties.environment = environment;
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "MerchantProperties", "Setting Environment for " + environment);
        if (environment === _LibraryConstants.LibraryConstants.PRODUCTION_ENVIRONMENT) {
            MerchantProperties.initiateTxnUrl = "https://securegw.paytm.in/theia/api/v1/initiateTransaction";
            MerchantProperties.refundUrl = "https://securegw.paytm.in/refund/api/v1/async/refund";
            MerchantProperties.paymentStatusUrl = "https://securegw.paytm.in/merchant-status/api/v1/getPaymentStatus";
            MerchantProperties.refundStatusUrl = "https://pgp-ite.paytm.in/refund/api/v1/refundStatus";
        }
    }
}