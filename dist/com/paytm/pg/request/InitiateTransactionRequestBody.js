"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: InitiateTransactionRequestBody */
class InitiateTransactionRequestBody {
    constructor() {
        /**
         * @var array
         */
        this.enablePaymentMode = [];
        /**
         * @var array
         */
        this.disablePaymentMode = [];
        /**
         * @var array
         */
        this.goods = [];
        /**
         * @var array
         */
        this.shippingInfo = [];
    }
    /**
     * @return string
     */
    getCartValidationRequired() {
        return this.cartValidationRequired;
    }
    /**
     * @param string cartValidationRequired
     * @return void
     */
    setCartValidationRequired(cartValidationRequired) {
        this.cartValidationRequired = cartValidationRequired;
    }
    /**
     * @return string
     */
    getEmiOption() {
        return this.emiOption;
    }
    /**
     * @param string emiOption
     * @return void
     */
    setEmiOption(emiOption) {
        this.emiOption = emiOption;
    }
    /**
     * @return string
     */
    getRequestType() {
        return this.requestType;
    }
    /**
     * @param string requestType
     * @return void
     */
    setRequestType(requestType) {
        this.requestType = requestType;
    }
    /**
     * @return string
     */
    getMid() {
        return this.mid;
    }
    /**
     * @param string mid
     * @return void
     */
    setMid(mid) {
        this.mid = mid;
    }
    /**
     * @return string
     */
    getOrderId() {
        return this.orderId;
    }
    /**
     * @param string orderId
     * @return void
     */
    setOrderId(orderId) {
        this.orderId = orderId;
    }
    /**
     * @return string
     */
    getWebsiteName() {
        return this.websiteName;
    }
    /**
     * @param string websiteName
     * @return void
     */
    setWebsiteName(websiteName) {
        this.websiteName = websiteName;
    }
    /**
     * @return \Paytm\pg\models\Money
     */
    getTxnAmount() {
        return this.txnAmount;
    }
    /**
     * @param Money txnAmount
     * @return void
     */
    setTxnAmount(txnAmount) {
        this.txnAmount = txnAmount;
    }
    /**
     * @return UserInfo
     */
    getUserInfo() {
        return this.userInfo;
    }
    /**
     * @param UserInfo userInfo
     * @return void
     */
    setUserInfo(userInfo) {
        this.userInfo = userInfo;
    }
    /**
     * @return string
     */
    getPaytmSsoToken() {
        return this.paytmSsoToken;
    }
    /**
     * @param string paytmSsoToken
     * @return void
     */
    setPaytmSsoToken(paytmSsoToken) {
        this.paytmSsoToken = paytmSsoToken;
    }
    /**
     * @return array
     */
    getEnablePaymentMode() {
        return this.enablePaymentMode;
    }
    /**
     * @param array enablePaymentMode
     * @return void
     */
    setEnablePaymentMode(enablePaymentMode) {
        this.enablePaymentMode = enablePaymentMode;
    }
    /**
     * @return array
     */
    getDisablePaymentMode() {
        return this.disablePaymentMode;
    }
    /**
     * @param array disablePaymentMode
     * @return void
     */
    setDisablePaymentMode(disablePaymentMode) {
        this.disablePaymentMode = disablePaymentMode;
    }
    /**
     * @return string
     */
    getPromoCode() {
        return this.promoCode;
    }
    /**
     * @param string promoCode
     * @return void
     */
    setPromoCode(promoCode) {
        this.promoCode = promoCode;
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
    /**
     * @return array
     */
    getGoods() {
        return this.goods;
    }
    /**
     * @param array goods
     * @return void
     */
    setGoods(goods) {
        this.goods = goods;
    }
    /**
     * @return array
     */
    getShippingInfo() {
        return this.shippingInfo;
    }
    /**
     * @param array shippingInfo
     * @return void
     */
    setShippingInfo(shippingInfo) {
        this.shippingInfo = shippingInfo;
    }
    /**
     * @return \Paytm\pg\models\ExtendInfo
     */
    getExtendInfo() {
        return this.extendInfo;
    }
    /**
     * @param ExtendInfo extendInfo
     * @return void
     */
    setExtendInfo(extendInfo) {
        this.extendInfo = extendInfo;
    }
    /**
     * @return string
     */
    getCardTokenRequired() {
        return this.cardTokenRequired;
    }
    /**
     * @param string cardTokenRequired
     * @return void
     */
    setCardTokenRequired(cardTokenRequired) {
        this.cardTokenRequired = cardTokenRequired;
    }
    toJSON() {
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
exports.InitiateTransactionRequestBody = InitiateTransactionRequestBody;
