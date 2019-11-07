"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: NativeRefundStatusResponse */
class NativeRefundStatusResponse {
    /**
     * Paytm\pg\response\NativeRefundStatusResponse constructor.
     * @param SecureResponseHeader           head
     * @param NativeRefundStatusResponseBody body
     */
    constructor(head, body) {
        this.head = head;
        this.body = body;
    }
    /**
     * @return SecureResponseHeader
     */
    getHead() {
        return this.head;
    }
    /**
     * @param SecureResponseHeader head
     * @return void
     */
    setHead(head) {
        this.head = head;
    }
    /**
     * @return NativeRefundStatusResponseBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param NativeRefundStatusResponseBody body
     * @return void
     */
    setBody(body) {
        this.body = body;
    }
    toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}
exports.NativeRefundStatusResponse = NativeRefundStatusResponse;
