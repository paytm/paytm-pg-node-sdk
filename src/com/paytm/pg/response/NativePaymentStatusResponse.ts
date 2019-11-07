/**
 * Copyright (C) 2019 Paytm.
 */

import * as _SecureResponse from "./interfaces/SecureResponse";

/* class: NativePaymentStatusResponse */
export class NativePaymentStatusResponse implements _SecureResponse.SecureResponse {

    /**
     * @var SecureResponseHeader
     */
    public head;

    /**
     * @var NativePaymentStatusResponseBody
     */
    public body;

    /**
     * Paytm\pg\response\NativePaymentStatusResponse constructor.
     * @param SecureResponseHeader            head
     * @param NativePaymentStatusResponseBody body
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
     * @return BaseResponseBody|NativePaymentStatusResponseBody
     */
    public getBody() {
        return this.body;
    }

    /**
     * @param NativePaymentStatusResponseBody body
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