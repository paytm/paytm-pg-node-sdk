/**
 * Copyright (C) 2019 Paytm.
 */
export declare class SDKResponse {
    /**
     * @var \Paytm\pg\response\\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\\\Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\\NativeRefundStatusResponse responseObject
     */
    private responseObject;
    /**
     * @var string jsonResponse
     */
    private jsonResponse;
    /**
     * Paytm\merchant\models\SDKResponse constructor.
     * @param \Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse responseObject
     * @param string jsonResponse
     */
    constructor(responseObject: object, jsonResponse: string | null);
    /**
     * @return \Paytm\pg\response\\Paytm\pg\response\\AsyncRefundResponse|\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse
     */
    getResponseObject(): any;
    /**
     * @return string
     */
    getJsonResponse(): string;
    /**
     * @param \Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\\\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse responseObject
     * @return void
     */
    setResponseObject(responseObject: any): void;
    /**
     * @param string jsonResponse
     * @return void
     */
    setJsonResponse(jsonResponse: string): void;
}
