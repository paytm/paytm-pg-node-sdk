"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: NativePaymentStatusRequest */
class NativePaymentStatusRequest {
    /**
     * Paytm\pg\request\NativePaymentStatusRequest constructor.
     */
    constructor() {
    }
    /**
     * @return SecureRequestHeader
     */
    getHead() {
        return this.head;
    }
    /**
     * @param SecureRequestHeader head
     * @return void
     */
    setHead(head) {
        this.head = head;
    }
    /**
     * @return NativePaymentStatusRequestBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param NativePaymentStatusRequestBody body
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
exports.NativePaymentStatusRequest = NativePaymentStatusRequest;
