/**
 * Copyright (C) 2019 Paytm.
 */
import * as _ErrorConstants from "../constants/ErrorConstants";

/* class: LibraryConstants */
export class LibraryConstants {
    static readonly VERSION: string = "v2";

    /** Environment constants */
    static readonly STAGING_ENVIRONMENT: string = "STAGE";
    static readonly PRODUCTION_ENVIRONMENT: string = "PROD";

    // Status message can be returned in case of Api success
    static readonly SUCCESS_STATUS: string = "S";
    static readonly PENDING_STATUS: string = "PENDING";
    static readonly TXN_SUCCESS_STATUS: string = "TXN_SUCCESS";

    static readonly REQUEST_TYPE_PAYMENT: string = "Payment";

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
    private constructor() {
        throw new Error(_ErrorConstants.ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}

/* class: Request */
export class Request {

    /**
     * Request constructor.
     * @throws \Exception
     */
    private constructor() {
        throw new Error(_ErrorConstants.ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }

    static readonly FOOD_WALLET: string = "FOOD";
    static readonly GIFT_WALLET: string = "GIFT";
}