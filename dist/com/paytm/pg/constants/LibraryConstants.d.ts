export declare class LibraryConstants {
    static readonly VERSION: string;
    /** Environment constants */
    static readonly STAGING_ENVIRONMENT: string;
    static readonly PRODUCTION_ENVIRONMENT: string;
    static readonly SUCCESS_STATUS: string;
    static readonly PENDING_STATUS: string;
    static readonly TXN_SUCCESS_STATUS: string;
    static readonly REQUEST_TYPE_PAYMENT: string;
    /** holds constant value for Request Id text */
    static readonly X_REQUEST_ID = "X-Request-ID";
    /** holds the version of SDK */
    static readonly NODE_SDK_TEXT = "NODE-SDK";
    /** holds the version of SDK */
    static readonly NODE_SDK_VERSION = "1.0.0";
    /**
     * Constants constructor.
     * @throws Exception
     */
    private constructor();
}
export declare class Request {
    /**
     * Request constructor.
     * @throws \Exception
     */
    private constructor();
    static readonly FOOD_WALLET: string;
    static readonly GIFT_WALLET: string;
}
