/**
 * Copyright (C) 2019 Paytm.
 */
import * as _SecureResponse from "./interfaces/SecureResponse";
export declare class AsyncRefundResponse implements _SecureResponse.SecureResponse {
    /**
     * @var SecureResponseHeader
     */
    private head;
    /**
     * @var AsyncRefundResponseBody
     */
    private body;
    /**
     * @return SecureResponseHeader
     */
    getHead(): any;
    /**
     * Paytm\pg\response\AsyncRefundResponse constructor.
     * @param SecureResponseHeader    head
     * @param AsyncRefundResponseBody body
     */
    constructor(head: any, body: any);
    /**
     * @param SecureResponseHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return AsyncRefundResponseBody|BaseResponseBody
     */
    getBody(): any;
    /**
     * @param AsyncRefundResponseBody body
     * @return void
     */
    setBody(body: any): void;
    toJSON(): {
        'head': any;
        'body': any;
    };
}
