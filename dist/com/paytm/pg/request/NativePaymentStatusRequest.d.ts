/**
 * Copyright (C) 2019 Paytm.
 */
export declare class NativePaymentStatusRequest {
    /**
     * @var SecureRequestHeader
     */
    head: any;
    /**
     * @var NativePaymentStatusRequestBody
     */
    body: any;
    /**
     * Paytm\pg\request\NativePaymentStatusRequest constructor.
     */
    constructor();
    /**
     * @return SecureRequestHeader
     */
    getHead(): any;
    /**
     * @param SecureRequestHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return NativePaymentStatusRequestBody
     */
    getBody(): any;
    /**
     * @param NativePaymentStatusRequestBody body
     * @return void
     */
    setBody(body: any): void;
    toJSON(): {
        'head': any;
        'body': any;
    };
}
