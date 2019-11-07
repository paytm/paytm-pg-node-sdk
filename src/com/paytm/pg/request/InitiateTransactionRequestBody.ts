/**
 * Copyright (C) 2019 Paytm.
 */

/* class: InitiateTransactionRequestBody */
export class InitiateTransactionRequestBody {
    /**
     * @var string
     */
    private requestType: string;

    /**
     * @var string
     */
    private mid: string;

    /**
     * @var string
     */
    private orderId: string;

    /**
     * @var string
     */
    private websiteName: string;

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
    private paytmSsoToken: string;

    /**
     * @var array
     */
    private enablePaymentMode: Array<object> = [];

    /**
     * @var array
     */
    private disablePaymentMode: Array<object> = [];

    /**
     * @var string
     */
    private promoCode: string;

    /**
     * @var string
     */
    private callbackUrl: string;

    /**
     * @var array
     */
    private goods: Array<object> = [];

    /**
     * @var array
     */
    private shippingInfo: Array<object> = [];

    /**
     * @var ExtendInfo
     */
    private extendInfo;

    /**
     * @var string
     */
    private emiOption: string;

    /**
     * @var string
     */
    private cardTokenRequired: string;

    /**
     * @var string
     */
    private cartValidationRequired: string;

    /**
     * @return string
     */
    public getCartValidationRequired(): string {
        return this.cartValidationRequired;
    }

    /**
     * @param string cartValidationRequired
     * @return void
     */
    public setCartValidationRequired(cartValidationRequired: string): void {
        this.cartValidationRequired = cartValidationRequired;
    }

    /**
     * @return string
     */
    public getEmiOption(): string {
        return this.emiOption;
    }

    /**
     * @param string emiOption
     * @return void
     */
    public setEmiOption(emiOption: string): void {
        this.emiOption = emiOption;
    }

    /**
     * @return string
     */
    public getRequestType(): string {
        return this.requestType;
    }

    /**
     * @param string requestType
     * @return void
     */
    public setRequestType(requestType: string): void {
        this.requestType = requestType;
    }

    /**
     * @return string
     */
    public getMid(): string {
        return this.mid;
    }

    /**
     * @param string mid
     * @return void
     */
    public setMid(mid: string): void {
        this.mid = mid;
    }

    /**
     * @return string
     */
    public getOrderId(): string {
        return this.orderId;
    }

    /**
     * @param string orderId
     * @return void
     */
    public setOrderId(orderId: string): void {
        this.orderId = orderId;
    }

    /**
     * @return string
     */
    public getWebsiteName(): string {
        return this.websiteName;
    }

    /**
     * @param string websiteName
     * @return void
     */
    public setWebsiteName(websiteName: string): void {
        this.websiteName = websiteName;
    }

    /**
     * @return \Paytm\pg\models\Money
     */
    public getTxnAmount() {
        return this.txnAmount;
    }

    /**
     * @param Money txnAmount
     * @return void
     */
    public setTxnAmount(txnAmount): void {
        this.txnAmount = txnAmount;
    }

    /**
     * @return UserInfo
     */
    public getUserInfo() {
        return this.userInfo;
    }

    /**
     * @param UserInfo userInfo
     * @return void
     */
    public setUserInfo(userInfo): void {
        this.userInfo = userInfo;
    }

    /**
     * @return string
     */
    public getPaytmSsoToken(): string {
        return this.paytmSsoToken;
    }

    /**
     * @param string paytmSsoToken
     * @return void
     */
    public setPaytmSsoToken(paytmSsoToken: string): void {
        this.paytmSsoToken = paytmSsoToken;
    }

    /**
     * @return array
     */
    public getEnablePaymentMode(): Array<object> {
        return this.enablePaymentMode;
    }

    /**
     * @param array enablePaymentMode
     * @return void
     */
    public setEnablePaymentMode(enablePaymentMode: Array<object>): void {
        this.enablePaymentMode = enablePaymentMode;
    }

    /**
     * @return array
     */
    public getDisablePaymentMode(): Array<object> {
        return this.disablePaymentMode;
    }

    /**
     * @param array disablePaymentMode
     * @return void
     */
    public setDisablePaymentMode(disablePaymentMode: Array<object>): void {
        this.disablePaymentMode = disablePaymentMode;
    }

    /**
     * @return string
     */
    public getPromoCode(): string {
        return this.promoCode;
    }

    /**
     * @param string promoCode
     * @return void
     */
    public setPromoCode(promoCode: string): void {
        this.promoCode = promoCode;
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

    /**
     * @return array
     */
    public getGoods(): Array<object> {
        return this.goods;
    }

    /**
     * @param array goods
     * @return void
     */
    public setGoods(goods: Array<object>): void {
        this.goods = goods;
    }

    /**
     * @return array
     */
    public getShippingInfo(): Array<object> {
        return this.shippingInfo;
    }

    /**
     * @param array shippingInfo
     * @return void
     */
    public setShippingInfo(shippingInfo: Array<object>): void {
        this.shippingInfo = shippingInfo;
    }

    /**
     * @return \Paytm\pg\models\ExtendInfo
     */
    public getExtendInfo() {
        return this.extendInfo;
    }

    /**
     * @param ExtendInfo extendInfo
     * @return void
     */
    public setExtendInfo(extendInfo): void {
        this.extendInfo = extendInfo;
    }

    /**
     * @return string
     */
    public getCardTokenRequired(): string {
        return this.cardTokenRequired;
    }

    /**
     * @param string cardTokenRequired
     * @return void
     */
    public setCardTokenRequired(cardTokenRequired: string): void {
        this.cardTokenRequired = cardTokenRequired;
    }

    public toJSON() {
        return {
            'requestType': this.getRequestType(),
            'mid': this.getMid(),
            'orderId': this.getOrderId(),
            'websiteName': this.getWebsiteName(),
            'txnAmount': this.getTxnAmount(),
            'userInfo': this.getUserInfo(),
            'paytmSsoToken': this.getPaytmSsoToken(),
            'enablePaymentMode': this.getEnablePaymentMode(),
            'disablePaymentMode': this.getDisablePaymentMode(),
            'promoCode': this.getPromoCode(),
            'callbackUrl': this.getCallbackUrl(),
            'goods': this.getGoods(),
            'shippingInfo': this.getShippingInfo(),
            'extendInfo': this.getExtendInfo(),
            'emiOption': this.getEmiOption(),
            'cardTokenRequired': this.getCardTokenRequired(),
            'cartValidationRequired': this.getCartValidationRequired()
        };
    }
}