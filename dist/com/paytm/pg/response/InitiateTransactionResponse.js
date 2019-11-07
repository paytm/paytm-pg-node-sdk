"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: InitiateTransactionResponse */
class InitiateTransactionResponse {
    /**
     * Paytm\pg\response\InitiateTransactionResponse constructor.
     * @param SecureResponseHeader            head
     * @param InitiateTransactionResponseBody body
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
     * @return BaseResponseBody|InitiateTransactionResponseBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param InitiateTransactionResponseBody body
     * @return void
     */
    setBody(body) {
        this.body = body;
    }
    fromJSON(json) {
        return Object.assign(this, json);
    }
    toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}
exports.InitiateTransactionResponse = InitiateTransactionResponse;
