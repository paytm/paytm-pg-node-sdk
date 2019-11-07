/**
 * Copyright (C) 2019 Paytm.
 */
import * as _SecureResponse from "./interfaces/SecureResponse";
export declare class NativePaymentStatusResponse implements _SecureResponse.SecureResponse {
    /**
     * @var SecureResponseHeader
     */
    head: any;
    /**
     * @var NativePaymentStatusResponseBody
     */
    body: any;
    /**
     * Paytm\pg\response\NativePaymentStatusResponse constructor.
     * @param SecureResponseHeader            head
     * @param NativePaymentStatusResponseBody body
     */
    constructor(head: any, body: any);
    /**
     * @return SecureResponseHeader
     */
    getHead(): any;
    /**
     * @param SecureResponseHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return BaseResponseBody|NativePaymentStatusResponseBody
     */
    getBody(): any;
    /**
     * @param NativePaymentStatusResponseBody body
     * @return void
     */
    setBody(body: any): void;
    toJSON(): {
        'head': any;
        'body': any;
    };
}
