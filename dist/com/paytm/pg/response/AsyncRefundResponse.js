"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: AsyncRefundResponse */
class AsyncRefundResponse {
    /**
     * @return SecureResponseHeader
     */
    getHead() {
        return this.head;
    }
    /**
     * Paytm\pg\response\AsyncRefundResponse constructor.
     * @param SecureResponseHeader    head
     * @param AsyncRefundResponseBody body
     */
    constructor(head, body) {
        this.head = head;
        this.body = body;
    }
    /**
     * @param SecureResponseHeader head
     * @return void
     */
    setHead(head) {
        this.head = head;
    }
    /**
     * @return AsyncRefundResponseBody|BaseResponseBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param AsyncRefundResponseBody body
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
exports.AsyncRefundResponse = AsyncRefundResponse;
