/**
 * Copyright (C) 2019 Paytm.
 */

/* class: SDKResponse */
export class SDKResponse {

    /**
     * @var \Paytm\pg\response\\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\\\Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\\NativeRefundStatusResponse responseObject
     */
    private responseObject;

    /**
     * @var string jsonResponse
     */
    private jsonResponse: string;

    /**
     * Paytm\merchant\models\SDKResponse constructor.
     * @param \Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse responseObject
     * @param string jsonResponse
     */
    public constructor(responseObject: object, jsonResponse: string | null) {
        this.responseObject = responseObject;
        this.jsonResponse = jsonResponse;
    }

    /**
     * @return \Paytm\pg\response\\Paytm\pg\response\\AsyncRefundResponse|\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse
     */
    public getResponseObject() {
        return this.responseObject;
    }

    /**
     * @return string
     */
    public getJsonResponse(): string {
        return this.jsonResponse;
    }

    /**
     * @param \Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\\\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse responseObject
     * @return void
     */
    public setResponseObject(responseObject): void {
        this.responseObject = responseObject;
    }

    /**
     * @param string jsonResponse
     * @return void
     */
    public setJsonResponse(jsonResponse: string): void {
        this.jsonResponse = jsonResponse;
    }
}