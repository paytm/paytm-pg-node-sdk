/**
 * Copyright (C) 2019 Paytm.
 */

/* class: RefundInitiateRequest */
export class RefundInitiateRequest {

    /**
     * @var SecureRequestHeader
     */
    private head;

    /**
     * @var RefundInitiateRequestBody
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
     * @return RefundInitiateRequestBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param RefundInitiateRequestBody body
     * @return void
     */
    public setBody(body): void {
        this.body = body;
    }

    public toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        }
    }
}