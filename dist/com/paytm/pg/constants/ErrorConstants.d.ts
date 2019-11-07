/**
 * Copyright (C) 2019 Paytm.
 */
/**
 * This class is used to store error constants
 * Merchant can update these constants according to his need
 *
 */
export declare class ErrorConstants {
    static readonly UTILITY_CLASS_EXCEPTION: string;
    static readonly FAILURE: string;
    /**
     * ErrorConstants constructor.
     * @throws Exception
     */
    private constructor();
}
/**
 * Result messages in case of failure
 */
export declare class ErrorMessage {
    /** Result message when verify signature returns false */
    static readonly SIGNATURE_VALIDATION_FAILED: string;
    /** Result message when any required parameter is missing in api calling */
    static readonly MISSING_MANDATORY_PARAMETERS: string;
    /** Result message when Merchant Property are not initialized */
    static readonly MISSING_MERCHANT_PROPERTY: string;
    /** Result message when String to object conversion failed */
    static readonly JSONSTRING_TO_OBJECT_CONVERSION_FAILED: string;
    /** Result message when object of expected type is not passed in parameter*/
    static readonly UNEXPECTED_OBJECT_PASSED_AS_PARAM: string;
    /**
     * ErrorMessage constructor.
     * @throws Exception
     */
    private constructor();
}
export declare class ErrorCode {
    static readonly DEFAULT_CODE: string;
    /**
     * ErrorCode constructor.
     * @throws \Exception
     */
    private constructor();
}
