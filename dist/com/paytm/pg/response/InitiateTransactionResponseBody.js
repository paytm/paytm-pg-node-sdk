"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _BaseResponseBody = require("./BaseResponseBody");
/* class: InitiateTransactionResponseBody */
class InitiateTransactionResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * Paytm\pg\response\InitiateTransactionResponseBody constructor.
     */
    constructor() {
        super();
    }
    /**
     * @return string
     */
    getTxnToken() {
        return this.txnToken;
    }
    /**
     * @param string txnToken
     * @return void
     */
    setTxnToken(txnToken) {
        this.txnToken = txnToken;
    }
    /**
     * @return bool
     */
    isAuthenticated() {
        return this.is_authenticated;
    }
    /**
     * @param bool isAuthenticated
     * @return void
     */
    setAuthenticated(is_authenticated) {
        this.is_authenticated = is_authenticated;
    }
    /**
     * @return bool
     */
    isPromocodeValid() {
        return this.isPromoCodeValid;
    }
    /**
     * @param bool isPromoCodeValid
     * @return void
     */
    setPromocodeValid(isPromoCodeValid) {
        this.isPromoCodeValid = isPromoCodeValid;
    }
    /**
     * @return string
     */
    getSubscriptionId() {
        return this.subscriptionId;
    }
    /**
     * @param string subscriptionId
     * @return void
     */
    setSubscriptionId(subscriptionId) {
        this.subscriptionId = subscriptionId;
    }
    /**
     * @return string
     */
    getCallbackUrl() {
        return this.callbackUrl;
    }
    /**
     * @param string callbackUrl
     * @return void
     */
    setCallbackUrl(callbackUrl) {
        this.callbackUrl = callbackUrl;
    }
    toJSON() {
        return {
            'txnToken': this.getTxnToken(),
            'isPromoCodeValid': this.isPromocodeValid(),
            'subscriptionId': this.getSubscriptionId(),
            'isAuthenticated': this.isAuthenticated(),
            'callbackUrl': this.getCallbackUrl(),
            'resultInfo': this.getResultInfo(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}
exports.InitiateTransactionResponseBody = InitiateTransactionResponseBody;
