"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: InitiateTransactionRequest */
class InitiateTransactionRequest {
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
     * @return InitiateTransactionRequestBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param InitiateTransactionRequestBody body
     * @return void
     */
    setBody(body) {
        this.body = body;
    }
    /**
     * Paytm\pg\request\InitiateTransactionRequest constructor.
     * @param SecureRequestHeader            head
     * @param InitiateTransactionRequestBody body
     */
    constructor(head, body) {
        this.head = typeof head !== "undefined" ? head : null;
        this.body = typeof body !== "undefined" ? body : null;
    }
    toJSON() {
        var headObj = this.getHead();
        var bodyObj = this.getBody();
        return {
            'head': headObj.toJSON(),
            'body': bodyObj.toJSON()
        };
    }
}
exports.InitiateTransactionRequest = InitiateTransactionRequest;
