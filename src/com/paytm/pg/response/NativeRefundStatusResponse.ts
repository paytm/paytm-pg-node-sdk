/**
 * Copyright (C) 2019 Paytm.
 */

import * as _SecureResponse from "./interfaces/SecureResponse";

/* class: NativeRefundStatusResponse */
export class NativeRefundStatusResponse implements _SecureResponse.SecureResponse {

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
    public constructor(head, body) {
        this.head = head;
        this.body = body;
    }

    /**
     * @return SecureResponseHeader
     */
    public getHead() {
        return this.head;
    }

    /**
     * @param SecureResponseHeader head
     * @return void
     */
    public setHead(head) {
        this.head = head;
    }

    /**
     * @return NativeRefundStatusResponseBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param NativeRefundStatusResponseBody body
     * @return void
     */
    public setBody(body) {
        this.body = body;
    }

    public toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}