"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: RefundInitiateRequest */
class RefundInitiateRequest {
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
     * @return RefundInitiateRequestBody
     */
    getBody() {
        return this.body;
    }
    /**
     * @param RefundInitiateRequestBody body
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
exports.RefundInitiateRequest = RefundInitiateRequest;
