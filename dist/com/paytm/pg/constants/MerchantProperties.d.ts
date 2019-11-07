/**
 * Copyright (C) 2019 Paytm.
 */
export declare class MerchantProperties {
    /**
     * @var bool
     */
    static isInitialized: boolean;
    /**
     * @var string
     * ENVIRONMENT is used to set URLs(TESTING or PRODUCTION)
     */
    static environment: string;
    /**
     * @var int
     * timeout constants
     */
    static connectTimeout: number;
    /**
     * @var int
     * timeout constants
     */
    static readTimeout: number;
    /**
     * @var string
     */
    static mid: string;
    /**
     * @var string
     */
    static merchantKey: string;
    /**
     * @var string
     */
    static website: string;
    /**
     * @var string
     */
    static clientId: string;
    /**
     * @var string callbackUrl callback url on which paytm will respond for api calls
     */
    static callbackUrl: string;
    /** URLs */
    /**
     * @var string
     */
    private static initiateTxnUrl;
    /**
     * @var string
     */
    private static refundUrl;
    /**
     * @var string
     */
    private static paymentStatusUrl;
    /**
     * @var string
     */
    private static refundStatusUrl;
    /**
     * @param string environment
     * @param string mid
     * @param string merchantKey
     * @param string website
     * @throws Exception
     */
    static initialize(environment: string, mid: string, merchantKey: string, website: string): void;
    /**
     * @return string
     */
    static getEnvironment(): string;
    /**
     * @return string
     */
    static getMid(): string;
    /**
     * @return string
     */
    static getMerchantKey(): string;
    /**
     * @return string
     */
    static getWebsite(): string;
    /**
     * @return string
     */
    static getClientId(): string;
    /**
     * @return string
     */
    static getCallbackUrl(): string;
    /**
     * @return string
     */
    static getInitiateTxnUrl(): string;
    /**
     * @return string
     */
    static getRefundUrl(): string;
    /**
     * @return string
     */
    static getRefundStatusUrl(): string;
    /**
     * @return string
     */
    static getPaymentStatusUrl(): string;
    /**
     * @return int
     */
    static getConnectionTimeout(): number;
    /**
     * @param int connectionTimeout
     * @return void
     */
    static setConnectionTimeout(connectionTimeout: number): void;
    /**
     * @param string mid
     */
    static setMid(mid: string): void;
    /**
     * @param string merchantKey
     * @return void
     */
    static setMerchantKey(merchantKey: string): void;
    /**
     * @param string website
     * @return void
     */
    static setWebsite(website: string): void;
    /**
     * @param string clientId
     * @return void
     */
    static setClientId(clientId: string): void;
    /**
     * @param string callbackUrl
     * @return void
     */
    static setCallbackUrl(callbackUrl: string): void;
    /**
     * @param string environment
     * @return void
     * @throws Exception
     */
    static setEnvironment(environment: string): void;
}
