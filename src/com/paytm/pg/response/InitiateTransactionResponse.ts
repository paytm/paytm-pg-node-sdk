/**
 * Copyright (C) 2019 Paytm.
 */

import * as _SecureResponse from "../response/interfaces/SecureResponse";

/* class: InitiateTransactionResponse */
export class InitiateTransactionResponse implements _SecureResponse.SecureResponse {

    /**
     * @var SecureResponseHeader
     */
    private head;

    /**
     * @var InitiateTransactionResponseBody
     */
    private body;

    /**
     * Paytm\pg\response\InitiateTransactionResponse constructor.
     * @param SecureResponseHeader            head
     * @param InitiateTransactionResponseBody body
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
    public setHead(head): void {
        this.head = head;
    }

    /**
     * @return BaseResponseBody|InitiateTransactionResponseBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param InitiateTransactionResponseBody body
     * @return void
     */
    public setBody(body): void {
        this.body = body;
    }

    public fromJSON(json) {
        return Object.assign(this, json);
    }

    public toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}