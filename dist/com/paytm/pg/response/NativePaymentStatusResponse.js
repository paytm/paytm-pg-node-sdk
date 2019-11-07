"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: NativePaymentStatusResponse */
class NativePaymentStatusResponse {
    /**
     * Paytm\pg\response\NativePaymentStatusResponse constructor.
     * @param SecureResponseHeader            head
     * @param NativePaymentStatusResponseBody body
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
     * @return BaseResponseBody|NativePaymentStatusResponseBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param NativePaymentStatusResponseBody body
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
exports.NativePaymentStatusResponse = NativePaymentStatusResponse;
