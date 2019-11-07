/**
 * Copyright (C) 2019 Paytm.
 */
import * as _SecureResponse from "../response/interfaces/SecureResponse";
export declare class InitiateTransactionResponse implements _SecureResponse.SecureResponse {
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
    constructor(head: any, body: any);
    /**
     * @return SecureResponseHeader
     */
    getHead(): any;
    /**
     * @param SecureResponseHeader head
     * @return void
     */
    setHead(head: any): void;
    /**
     * @return BaseResponseBody|InitiateTransactionResponseBody
     */
    getBody(): any;
    /**
     * @param InitiateTransactionResponseBody body
     * @return void
     */
    setBody(body: any): void;
    fromJSON(json: any): any;
    toJSON(): {
        'head': any;
        'body': any;
    };
}
