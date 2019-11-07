/**
 * Copyright (C) 2019 Paytm.
 */

/* class: NativeRefundStatusRequest */
export class NativeRefundStatusRequest {

    /**
     * @var SecureRequestHeader
     */
    private head;

    /**
     * @var NativeRefundStatusRequestBody
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
     * @return NativeRefundStatusRequestBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param NativeRefundStatusRequestBody body
     * @return void
     */
    public setBody(body): void {
        this.body = body;
    }

    /**
     * Paytm\pg\request\NativeRefundStatusRequest constructor.
     * @param SecureRequestHeader           head
     * @param NativeRefundStatusRequestBody body
     */
    public constructor(head, body) {
        this.head = head;
        this.body = body;
    }

    /**
     * @return array|mixed
     */
    public toJSON() {
        return {
            'head': this.getHead(),
            'body': this.getBody()
        };
    }
}