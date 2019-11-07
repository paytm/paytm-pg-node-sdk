/**
 * Copyright (C) 2019 Paytm.
 */


/**
 * This class is used to store error constants
 * Merchant can update these constants according to his need
 *
 */
/* class: ErrorConstants */
export class ErrorConstants {

    static readonly UTILITY_CLASS_EXCEPTION: string = "Utility class cannot be instantiated";

    // Result Status In case of Failure
    static readonly FAILURE: string = "failure";

    /**
     * ErrorConstants constructor.
     * @throws Exception
     */
    private constructor() {
        throw new Error(ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}

/**
 * Result messages in case of failure
 */
/* class: ErrorMessage */
export class ErrorMessage {

    /** Result message when verify signature returns false */
    static readonly SIGNATURE_VALIDATION_FAILED: string = "Signature Validation Failed";
    /** Result message when any required parameter is missing in api calling */
    static readonly MISSING_MANDATORY_PARAMETERS: string = "Missing Mandatory Parameters";
    /** Result message when Merchant Property are not initialized */
    static readonly MISSING_MERCHANT_PROPERTY: string = "Missing merchant property";
    /** Result message when String to object conversion failed */
    static readonly JSONSTRING_TO_OBJECT_CONVERSION_FAILED: string = "JsonString to object conversion failure";
    /** Result message when object of expected type is not passed in parameter*/
    static readonly UNEXPECTED_OBJECT_PASSED_AS_PARAM: string = "Object of unexpected type is passed as parameter";

    /**
     * ErrorMessage constructor.
     * @throws Exception
     */
    private constructor() {
        /** @noinspection PhpUnhandledExceptionInspection */
        throw new Error(ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}

/* class: ErrorCode */
export class ErrorCode {

    // Result code in case of failure
    static readonly DEFAULT_CODE: string = "501";

    /**
     * ErrorCode constructor.
     * @throws \Exception
     */
    private constructor() {
        throw new Error(ErrorConstants.UTILITY_CLASS_EXCEPTION);
    }
}