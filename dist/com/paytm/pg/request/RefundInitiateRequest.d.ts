/**
 * Copyright (C) 2019 Paytm.
 */
export declare class RefundInitiateRequest {
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
    getHead(): any;
    /**
     * @param SecureRequestHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return RefundInitiateRequestBody
     */
    getBody(): any;
    /**
     * @param RefundInitiateRequestBody body
     * @return void
     */
    setBody(body: any): void;
    toJSON(): {
        'head': any;
        'body': any;
    };
}
