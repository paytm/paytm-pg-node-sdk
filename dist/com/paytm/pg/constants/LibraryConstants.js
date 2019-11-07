"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2019 Paytm.
 */
const _ErrorConstants = require("../constants/ErrorConstants");
/* class: LibraryConstants */
class LibraryConstants {
    /**
     * Constants constructor.
     * @throws Exception
     */
    constructor() {
        throw new Error(_ErrorConstants.ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}
LibraryConstants.VERSION = "v2";
/** Environment constants */
LibraryConstants.STAGING_ENVIRONMENT = "STAGE";
LibraryConstants.PRODUCTION_ENVIRONMENT = "PROD";
// Status message can be returned in case of Api success
LibraryConstants.SUCCESS_STATUS = "S";
LibraryConstants.PENDING_STATUS = "PENDING";
LibraryConstants.TXN_SUCCESS_STATUS = "TXN_SUCCESS";
LibraryConstants.REQUEST_TYPE_PAYMENT = "Payment";
/** holds constant value for Request Id text */
LibraryConstants.X_REQUEST_ID = "X-Request-ID";
/** holds the version of SDK */
LibraryConstants.NODE_SDK_TEXT = "NODE-SDK";
/** holds the version of SDK */
LibraryConstants.NODE_SDK_VERSION = "1.0.0";
exports.LibraryConstants = LibraryConstants;
/* class: Request */
class Request {
    /**
     * Request constructor.
     * @throws \Exception
     */
    constructor() {
        throw new Error(_ErrorConstants.ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}
Request.FOOD_WALLET = "FOOD";
Request.GIFT_WALLET = "GIFT";
exports.Request = Request;
