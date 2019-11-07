/**
 * Copyright (C) 2019 Paytm.
 */

import * as _BaseResponseBody from "./BaseResponseBody";

/* class: InitiateTransactionResponseBody */
export class InitiateTransactionResponseBody extends _BaseResponseBody.BaseResponseBody {

    /**
     * @var string
     */
    private txnToken: string;

    /**
     * @var bool
     */
    private isPromoCodeValid: boolean;

    /**
     * @var string
     */
    private subscriptionId: string;

    /**
     * @var bool
     */
    private is_authenticated: boolean;

    /**
     * @var string
     */
    private callbackUrl: string;

    /**
     * Paytm\pg\response\InitiateTransactionResponseBody constructor.
     */
    public constructor() {
        super();
    }

    /**
     * @return string
     */
    public getTxnToken(): string {
        return this.txnToken;
    }

    /**
     * @param string txnToken
     * @return void
     */
    public setTxnToken(txnToken: string): void {
        this.txnToken = txnToken;
    }

    /**
     * @return bool
     */
    public isAuthenticated(): boolean {
        return this.is_authenticated;
    }

    /**
     * @param bool isAuthenticated
     * @return void
     */
    public setAuthenticated(is_authenticated: boolean): void {
        this.is_authenticated = is_authenticated;
    }

    /**
     * @return bool
     */
    public isPromocodeValid(): boolean {
        return this.isPromoCodeValid;
    }

    /**
     * @param bool isPromoCodeValid
     * @return void
     */
    public setPromocodeValid(isPromoCodeValid: boolean): void {
        this.isPromoCodeValid = isPromoCodeValid;
    }

    /**
     * @return string
     */
    public getSubscriptionId(): string {
        return this.subscriptionId;
    }

    /**
     * @param string subscriptionId
     * @return void
     */
    public setSubscriptionId(subscriptionId: string): void {
        this.subscriptionId = subscriptionId;
    }

    /**
     * @return string
     */
    public getCallbackUrl(): string {
        return this.callbackUrl;
    }

    /**
     * @param string callbackUrl
     * @return void
     */
    public setCallbackUrl(callbackUrl: string): void {
        this.callbackUrl = callbackUrl;
    }

    public toJSON() {
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