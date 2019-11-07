/**
 * Copyright (C) 2019 Paytm.
 */

import * as _SecureResponse from "./interfaces/SecureResponse";

/* class: AsyncRefundResponse */
export class AsyncRefundResponse implements _SecureResponse.SecureResponse {

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
    public getHead() {
        return this.head;
    }

    /**
     * Paytm\pg\response\AsyncRefundResponse constructor.
     * @param SecureResponseHeader    head
     * @param AsyncRefundResponseBody body
     */
    public constructor(head, body) {
        this.head = head;
        this.body = body;
    }

    /**
     * @param SecureResponseHeader head
     * @return void
     */
    public setHead(head): void {
        this.head = head;
    }

    /**
     * @return AsyncRefundResponseBody|BaseResponseBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param AsyncRefundResponseBody body
     * @return void
     */
    public setBody(body): void {
        this.body = body;
    }

    public toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}