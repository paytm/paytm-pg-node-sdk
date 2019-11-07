/**
 * Copyright (C) 2019 Paytm.
 */
export declare class NativeRefundStatusRequest {
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
    getHead(): any;
    /**
     * @param SecureRequestHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return NativeRefundStatusRequestBody
     */
    getBody(): any;
    /**
     * @param NativeRefundStatusRequestBody body
     * @return void
     */
    setBody(body: any): void;
    /**
     * Paytm\pg\request\NativeRefundStatusRequest constructor.
     * @param SecureRequestHeader           head
     * @param NativeRefundStatusRequestBody body
     */
    constructor(head: any, body: any);
    /**
     * @return array|mixed
     */
    toJSON(): {
        'head': any;
        'body': any;
    };
}
