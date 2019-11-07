/**
 * Copyright (C) 2019 Paytm.
 */

/* class: InitiateTransactionRequest */
export class InitiateTransactionRequest {

    /**
     * @var SecureRequestHeader
     */
    private head;

    /**
     * @var InitiateTransactionRequestBody
     */
    private body;

    /**
     * @return SecureRequestHeader
     */
    public getHead() {
        return this.head;
    }

    /**
     * @param SecureRequestHeader head
     * @return void
     */
    public setHead(head): void {
        this.head = head;
    }

    /**
     * @return InitiateTransactionRequestBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param InitiateTransactionRequestBody body
     * @return void
     */
    public setBody(body): void {
        this.body = body;
    }

    /**
     * Paytm\pg\request\InitiateTransactionRequest constructor.
     * @param SecureRequestHeader            head
     * @param InitiateTransactionRequestBody body
     */
    public constructor(head, body) {
        this.head = typeof head !== "undefined" ? head : null;
        this.body = typeof body !== "undefined" ? body : null;
    }

    public toJSON() {
        var headObj = this.getHead();
        var bodyObj = this.getBody();
        return {
            'head': headObj.toJSON(),
            'body': bodyObj.toJSON()
        };
    }
}