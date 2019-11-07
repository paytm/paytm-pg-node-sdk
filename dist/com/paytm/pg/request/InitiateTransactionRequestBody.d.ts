/**
 * Copyright (C) 2019 Paytm.
 */
export declare class InitiateTransactionRequestBody {
    /**
     * @var string
     */
    private requestType;
    /**
     * @var string
     */
    private mid;
    /**
     * @var string
     */
    private orderId;
    /**
     * @var string
     */
    private websiteName;
    /**
     * @var \Paytm\pg\models\Money
     */
    private txnAmount;
    /**
     * @var \Paytm\pg\models\UserInfo
     */
    private userInfo;
    /**
     * @var string
     */
    private paytmSsoToken;
    /**
     * @var array
     */
    private enablePaymentMode;
    /**
     * @var array
     */
    private disablePaymentMode;
    /**
     * @var string
     */
    private promoCode;
    /**
     * @var string
     */
    private callbackUrl;
    /**
     * @var array
     */
    private goods;
    /**
     * @var array
     */
    private shippingInfo;
    /**
     * @var ExtendInfo
     */
    private extendInfo;
    /**
     * @var string
     */
    private emiOption;
    /**
     * @var string
     */
    private cardTokenRequired;
    /**
     * @var string
     */
    private cartValidationRequired;
    /**
     * @return string
     */
    getCartValidationRequired(): string;
    /**
     * @param string cartValidationRequired
     * @return void
     */
    setCartValidationRequired(cartValidationRequired: string): void;
    /**
     * @return string
     */
    getEmiOption(): string;
    /**
     * @param string emiOption
     * @return void
     */
    setEmiOption(emiOption: string): void;
    /**
     * @return string
     */
    getRequestType(): string;
    /**
     * @param string requestType
     * @return void
     */
    setRequestType(requestType: string): void;
    /**
     * @return string
     */
    getMid(): string;
    /**
     * @param string mid
     * @return void
     */
    setMid(mid: string): void;
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @param string orderId
     * @return void
     */
    setOrderId(orderId: string): void;
    /**
     * @return string
     */
    getWebsiteName(): string;
    /**
     * @param string websiteName
     * @return void
     */
    setWebsiteName(websiteName: string): void;
    /**
     * @return \Paytm\pg\models\Money
     */
    getTxnAmount(): any;
    /**
     * @param Money txnAmount
     * @return void
     */
    setTxnAmount(txnAmount: any): void;
    /**
     * @return UserInfo
     */
    getUserInfo(): any;
    /**
     * @param UserInfo userInfo
     * @return void
     */
    setUserInfo(userInfo: any): void;
    /**
     * @return string
     */
    getPaytmSsoToken(): string;
    /**
     * @param string paytmSsoToken
     * @return void
     */
    setPaytmSsoToken(paytmSsoToken: string): void;
    /**
     * @return array
     */
    getEnablePaymentMode(): Array<object>;
    /**
     * @param array enablePaymentMode
     * @return void
     */
    setEnablePaymentMode(enablePaymentMode: Array<object>): void;
    /**
     * @return array
     */
    getDisablePaymentMode(): Array<object>;
    /**
     * @param array disablePaymentMode
     * @return void
     */
    setDisablePaymentMode(disablePaymentMode: Array<object>): void;
    /**
     * @return string
     */
    getPromoCode(): string;
    /**
     * @param string promoCode
     * @return void
     */
    setPromoCode(promoCode: string): void;
    /**
     * @return string
     */
    getCallbackUrl(): string;
    /**
     * @param string callbackUrl
     * @return void
     */
    setCallbackUrl(callbackUrl: string): void;
    /**
     * @return array
     */
    getGoods(): Array<object>;
    /**
     * @param array goods
     * @return void
     */
    setGoods(goods: Array<object>): void;
    /**
     * @return array
     */
    getShippingInfo(): Array<object>;
    /**
     * @param array shippingInfo
     * @return void
     */
    setShippingInfo(shippingInfo: Array<object>): void;
    /**
     * @return \Paytm\pg\models\ExtendInfo
     */
    getExtendInfo(): any;
    /**
     * @param ExtendInfo extendInfo
     * @return void
     */
    setExtendInfo(extendInfo: any): void;
    /**
     * @return string
     */
    getCardTokenRequired(): string;
    /**
     * @param string cardTokenRequired
     * @return void
     */
    setCardTokenRequired(cardTokenRequired: string): void;
    toJSON(): {
        'requestType': string;
        'mid': string;
        'orderId': string;
        'websiteName': string;
        'txnAmount': any;
        'userInfo': any;
        'paytmSsoToken': string;
        'enablePaymentMode': object[];
        'disablePaymentMode': object[];
        'promoCode': string;
        'callbackUrl': string;
        'goods': object[];
        'shippingInfo': object[];
        'extendInfo': any;
        'emiOption': string;
        'cardTokenRequired': string;
        'cartValidationRequired': string;
    };
}
