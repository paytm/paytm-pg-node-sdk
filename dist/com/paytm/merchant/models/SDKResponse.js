"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: SDKResponse */
class SDKResponse {
    /**
     * Paytm\merchant\models\SDKResponse constructor.
     * @param \Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse responseObject
     * @param string jsonResponse
     */
    constructor(responseObject, jsonResponse) {
        this.responseObject = responseObject;
        this.jsonResponse = jsonResponse;
    }
    /**
     * @return \Paytm\pg\response\\Paytm\pg\response\\AsyncRefundResponse|\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse
     */
    getResponseObject() {
        return this.responseObject;
    }
    /**
     * @return string
     */
    getJsonResponse() {
        return this.jsonResponse;
    }
    /**
     * @param \Paytm\pg\response\AsyncRefundResponse|\Paytm\pg\response\\\Paytm\pg\response\InitiateTransactionResponse|\Paytm\pg\response\NativePaymentStatusResponse|\Paytm\pg\response\NativeRefundStatusResponse responseObject
     * @return void
     */
    setResponseObject(responseObject) {
        this.responseObject = responseObject;
    }
    /**
     * @param string jsonResponse
     * @return void
     */
    setJsonResponse(jsonResponse) {
        this.jsonResponse = jsonResponse;
    }
}
exports.SDKResponse = SDKResponse;
