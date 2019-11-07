"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is used to store error constants
 * Merchant can update these constants according to his need
 *
 */
/* class: ErrorConstants */
class ErrorConstants {
    /**
     * ErrorConstants constructor.
     * @throws Exception
     */
    constructor() {
        throw new Error(ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}
ErrorConstants.UTILITY_CLASS_EXCEPTION = "Utility class cannot be instantiated";
// Result Status In case of Failure
ErrorConstants.FAILURE = "failure";
exports.ErrorConstants = ErrorConstants;
/**
 * Result messages in case of failure
 */
/* class: ErrorMessage */
class ErrorMessage {
    /**
     * ErrorMessage constructor.
     * @throws Exception
     */
    constructor() {
        /** @noinspection PhpUnhandledExceptionInspection */
        throw new Error(ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}
/** Result message when verify signature returns false */
ErrorMessage.SIGNATURE_VALIDATION_FAILED = "Signature Validation Failed";
/** Result message when any required parameter is missing in api calling */
ErrorMessage.MISSING_MANDATORY_PARAMETERS = "Missing Mandatory Parameters";
/** Result message when Merchant Property are not initialized */
ErrorMessage.MISSING_MERCHANT_PROPERTY = "Missing merchant property";
/** Result message when String to object conversion failed */
ErrorMessage.JSONSTRING_TO_OBJECT_CONVERSION_FAILED = "JsonString to object conversion failure";
/** Result message when object of expected type is not passed in parameter*/
ErrorMessage.UNEXPECTED_OBJECT_PASSED_AS_PARAM = "Object of unexpected type is passed as parameter";
exports.ErrorMessage = ErrorMessage;
/* class: ErrorCode */
class ErrorCode {
    /**
     * ErrorCode constructor.
     * @throws \Exception
     */
    constructor() {
        throw new Error(ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}
// Result code in case of failure
ErrorCode.DEFAULT_CODE = "501";
exports.ErrorCode = ErrorCode;
