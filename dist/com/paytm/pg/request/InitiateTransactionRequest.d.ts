/**
 * Copyright (C) 2019 Paytm.
 */
export declare class InitiateTransactionRequest {
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
    getHead(): any;
    /**
     * @param SecureRequestHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return InitiateTransactionRequestBody
     */
    getBody(): any;
    /**
     * @param InitiateTransactionRequestBody body
     * @return void
     */
    setBody(body: any): void;
    /**
     * Paytm\pg\request\InitiateTransactionRequest constructor.
     * @param SecureRequestHeader            head
     * @param InitiateTransactionRequestBody body
     */
    constructor(head: any, body: any);
    toJSON(): {
        'head': any;
        'body': any;
    };
}
