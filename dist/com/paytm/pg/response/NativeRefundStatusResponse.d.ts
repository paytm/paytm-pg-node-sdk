/**
 * Copyright (C) 2019 Paytm.
 */
import * as _SecureResponse from "./interfaces/SecureResponse";
export declare class NativeRefundStatusResponse implements _SecureResponse.SecureResponse {
    /**
     * @var SecureResponseHeader
     */
    private head;
    /**
     * @var NativeRefundStatusResponseBody
     */
    private body;
    /**
     * Paytm\pg\response\NativeRefundStatusResponse constructor.
     * @param SecureResponseHeader           head
     * @param NativeRefundStatusResponseBody body
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
     * @return NativeRefundStatusResponseBody
     */
    getBody(): any;
    /**
     * @param NativeRefundStatusResponseBody body
     * @return void
     */
    setBody(body: any): void;
    toJSON(): {
        'head': any;
        'body': any;
    };
}
