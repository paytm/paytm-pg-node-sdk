/**
 * Copyright (C) 2019 Paytm.
 */

/* class: NativePaymentStatusRequest */
export class NativePaymentStatusRequest {

    /**
     * @var SecureRequestHeader
     */
    public head;

    /**
     * @var NativePaymentStatusRequestBody
     */
    public body;

    /**
     * Paytm\pg\request\NativePaymentStatusRequest constructor.
     */
    public constructor() {
    }

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
     * @return NativePaymentStatusRequestBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param NativePaymentStatusRequestBody body
     * @return void
     */
    public setBody(body): void {
        this.body = body;
    }

    public toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}