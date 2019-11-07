/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseResponseBody from "./BaseResponseBody";
export declare class InitiateTransactionResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * @var string
     */
    private txnToken;
    /**
     * @var bool
     */
    private isPromoCodeValid;
    /**
     * @var string
     */
    private subscriptionId;
    /**
     * @var bool
     */
    private is_authenticated;
    /**
     * @var string
     */
    private callbackUrl;
    /**
     * Paytm\pg\response\InitiateTransactionResponseBody constructor.
     */
    constructor();
    /**
     * @return string
     */
    getTxnToken(): string;
    /**
     * @param string txnToken
     * @return void
     */
    setTxnToken(txnToken: string): void;
    /**
     * @return bool
     */
    isAuthenticated(): boolean;
    /**
     * @param bool isAuthenticated
     * @return void
     */
    setAuthenticated(is_authenticated: boolean): void;
    /**
     * @return bool
     */
    isPromocodeValid(): boolean;
    /**
     * @param bool isPromoCodeValid
     * @return void
     */
    setPromocodeValid(isPromoCodeValid: boolean): void;
    /**
     * @return string
     */
    getSubscriptionId(): string;
    /**
     * @param string subscriptionId
     * @return void
     */
    setSubscriptionId(subscriptionId: string): void;
    /**
     * @return string
     */
    getCallbackUrl(): string;
    /**
     * @param string callbackUrl
     * @return void
     */
    setCallbackUrl(callbackUrl: string): void;
    toJSON(): {
        'txnToken': string;
        'isPromoCodeValid': boolean;
        'subscriptionId': string;
        'isAuthenticated': boolean;
        'callbackUrl': string;
        'resultInfo': any;
        'extraParamsMap': {};
    };
}
