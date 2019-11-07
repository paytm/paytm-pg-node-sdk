"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: NativeRefundStatusRequest */
class NativeRefundStatusRequest {
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
     * @return NativeRefundStatusRequestBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param NativeRefundStatusRequestBody body
     * @return void
     */
    setBody(body) {
        this.body = body;
    }
    /**
     * Paytm\pg\request\NativeRefundStatusRequest constructor.
     * @param SecureRequestHeader           head
     * @param NativeRefundStatusRequestBody body
     */
    constructor(head, body) {
        this.head = head;
        this.body = body;
    }
    /**
     * @return array|mixed
     */
    toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}
exports.NativeRefundStatusRequest = NativeRefundStatusRequest;
