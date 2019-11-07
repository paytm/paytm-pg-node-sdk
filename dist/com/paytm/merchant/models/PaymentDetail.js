"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is used to store all the paymentDetail information
 * Paytm\pg\process\Request of initiateTransaction api is translated by paymentDetail object
 */
const _LibraryConstants = require("../../pg/constants/LibraryConstants");
const _MerchantProperties = require("../../pg/constants/MerchantProperties");
const _InitiateTransactionRequestBody = require("../../pg/request/InitiateTransactionRequestBody");
/* class: PaymentDetail */
class PaymentDetail {
    /**
     * Paytm\merchant\models\PaymentDetail constructor.
     * @param PaymentDetailBuilder paymentDetailBuilder
     */
    constructor(paymentDetailBuilder) {
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
        this.channelId = paymentDetailBuilder.channelId;
        this.orderId = paymentDetailBuilder.orderId;
        this.txnAmount = paymentDetailBuilder.txnAmount;
        this.userInfo = paymentDetailBuilder.userInfo;
        this.paytmSsoToken = paymentDetailBuilder.paytmSsoToken;
        this.enablePaymentMode = paymentDetailBuilder.enablePaymentMode;
        this.disablePaymentMode = paymentDetailBuilder.disablePaymentMode;
        this.goods = paymentDetailBuilder.goods;
        this.shippingInfo = paymentDetailBuilder.shippingInfo;
        this.workFlow = paymentDetailBuilder.workFlow;
        this.extendInfo = paymentDetailBuilder.extendInfo;
        this.promoCode = paymentDetailBuilder.promoCode;
        this.emiOption = paymentDetailBuilder.emiOption;
        this.cardTokenRequired = paymentDetailBuilder.cardTokenRequired;
        this.cartValidationRequired = paymentDetailBuilder.cartValidationRequired;
        this.readTimeout = paymentDetailBuilder.readTimeout;
    }
    /**
     * @return string
     */
    getChannelId() {
        return this.channelId;
    }
    /**
     * @return string
     */
    getWorkFlow() {
        return this.workFlow;
    }
    /**
     * @return string
     */
    getPromoCode() {
        return this.promoCode;
    }
    /**
     * @return \Paytm\pg\models\ExtendInfo
     */
    getExtendInfo() {
        return this.extendInfo;
    }
    /**
     * @return string
     */
    getEmiOption() {
        return this.emiOption;
    }
    /**
     * @return string
     */
    getCardTokenRequired() {
        return this.cardTokenRequired;
    }
    /**
     * @return string
     */
    getCartValidationRequired() {
        return this.cartValidationRequired;
    }
    /**
     * @return string
     */
    getOrderId() {
        return this.orderId;
    }
    /**
     * @return \Paytm\pg\models\Money
     */
    getTxnAmount() {
        return this.txnAmount;
    }
    /**
     * @return \Paytm\pg\models\UserInfo
     */
    getUserInfo() {
        return this.userInfo;
    }
    /**
     * @return string
     */
    getPaytmSsoToken() {
        return this.paytmSsoToken;
    }
    /**
     * @return array
     */
    getEnablePaymentMode() {
        return this.enablePaymentMode;
    }
    /**
     * @return array
     */
    getDisablePaymentMode() {
        return this.disablePaymentMode;
    }
    /**
     * @return array
     */
    getGoods() {
        return this.goods;
    }
    /**
     * @return array
     */
    getShippingInfo() {
        return this.shippingInfo;
    }
    /**
     * @return int
     */
    getReadTimeout() {
        return this.readTimeout;
    }
    /**
     * @return InitiateTransactionRequestBody
     */
    createInitiateTransactionRequestBody() {
        var body = new _InitiateTransactionRequestBody.InitiateTransactionRequestBody();
        body.setRequestType(_LibraryConstants.LibraryConstants.REQUEST_TYPE_PAYMENT);
        body.setMid(_MerchantProperties.MerchantProperties.getMid());
        body.setOrderId(this.getOrderId());
        body.setWebsiteName(_MerchantProperties.MerchantProperties.getWebsite());
        body.setTxnAmount(this.getTxnAmount());
        body.setUserInfo(this.getUserInfo());
        body.setPaytmSsoToken(this.getPaytmSsoToken());
        body.setEnablePaymentMode(this.getEnablePaymentMode());
        body.setDisablePaymentMode(this.getDisablePaymentMode());
        body.setPromoCode(this.getPromoCode());
        body.setCallbackUrl(_MerchantProperties.MerchantProperties.getCallbackUrl());
        body.setGoods(this.getGoods());
        body.setShippingInfo(this.getShippingInfo());
        body.setExtendInfo(this.getExtendInfo());
        body.setEmiOption(this.getEmiOption());
        body.setCardTokenRequired(this.getCardTokenRequired());
        body.setCartValidationRequired(this.getCartValidationRequired());
        return body;
    }
}
exports.PaymentDetail = PaymentDetail;
const _SDKException = require("../../pg/exceptions/SDKException");
const _UserInfo = require("../../pg/models/UserInfo");
const _CommonUtil = require("../../pg/utils/CommonUtil");
const _Money = require("../../pg/models/Money");
/**
 * PaymentDetailBuilder is used to build the paymentDetail object
 */
/* class: PaymentDetailBuilder */
class PaymentDetailBuilder {
    /**
     * PaymentDetailBuilder constructor.
     * @param string (Paytm\pg\enums\EChannelId) channelId
     * @param string                    orderId
     * @param \Paytm\pg\models\Money    txnAmount
     * @param \Paytm\pg\models\UserInfo userInfo
     * @throws \Exception
     */
    constructor(channelId, orderId, txnAmount, userInfo) {
        /**
         * @var int
         * Default value of readTimeout is 80000
         */
        this.readTimeout = 80000;
        if (_CommonUtil.CommonUtil.isEmptyOrNull(channelId)) {
            throw new _SDKException.SDKException("ChannelId can not be null or empty");
        }
        if (_CommonUtil.CommonUtil.isEmptyOrNull(orderId)) {
            throw new _SDKException.SDKException("OrderId can not be null or empty");
        }
        if (_CommonUtil.CommonUtil.isEmptyOrNull(txnAmount) || (txnAmount instanceof _Money.Money) === false) {
            throw new _SDKException.SDKException("Txn amount should be of type paytm_pg_models\Money");
        }
        if (_CommonUtil.CommonUtil.isEmptyOrNull(userInfo) || (userInfo instanceof _UserInfo.UserInfo) === false) {
            throw new _SDKException.SDKException("User info should be of type paytm_pg_models\UserInfo");
        }
        this.channelId = channelId;
        this.orderId = orderId;
        this.txnAmount = txnAmount;
        this.userInfo = userInfo;
    }
    /**
     * @return paymentDetail
     */
    build() {
        return new PaymentDetail(this);
    }
    /**
     * @param string orderId
     * @return this
     */
    setOrderId(orderId) {
        this.orderId = orderId;
        return this;
    }
    /**
     * @param string channelId
     */
    setChannelId(channelId) {
        this.channelId = channelId;
    }
    /**
     * @param string workFlow
     * @return this
     */
    setWorkFlow(workFlow) {
        this.workFlow = workFlow;
        return this;
    }
    /**
     * @param string promoCode
     * @return this
     */
    setPromoCode(promoCode) {
        this.promoCode = promoCode;
        return this;
    }
    /**
     * @param \Paytm\pg\models\ExtendInfo extendInfo
     * @return this
     */
    setExtendInfo(extendInfo) {
        this.extendInfo = extendInfo;
        return this;
    }
    /**
     * @param string emiOption
     * @return this
     */
    setEmiOption(emiOption) {
        this.emiOption = emiOption;
        return this;
    }
    /**
     * @param string cardTokenRequired
     * @return this
     */
    setCardTokenRequired(cardTokenRequired) {
        this.cardTokenRequired = cardTokenRequired;
        return this;
    }
    /**
     * @param string cartValidationRequired
     * @return this
     */
    setCartValidationRequired(cartValidationRequired) {
        this.cartValidationRequired = cartValidationRequired;
        return this;
    }
    /**
     * @param \Paytm\pg\models\Money txnAmount
     * @return this
     */
    setTxnAmount(txnAmount) {
        this.txnAmount = txnAmount;
        return this;
    }
    /**
     * @param \Paytm\pg\models\UserInfo userInfo
     * @return this
     */
    setUserInfo(userInfo) {
        this.userInfo = userInfo;
        return this;
    }
    /**
     * @param string paytmSsoToken
     * @return this
     */
    setPaytmSsoToken(paytmSsoToken) {
        this.paytmSsoToken = paytmSsoToken;
        return this;
    }
    /**
     * @param array enablePaymentMode
     * @return this
     */
    setEnablePaymentMode(enablePaymentMode) {
        this.enablePaymentMode = enablePaymentMode;
        return this;
    }
    /**
     * @param array disablePaymentMode
     * @return this
     */
    setDisablePaymentMode(disablePaymentMode) {
        this.disablePaymentMode = disablePaymentMode;
        return this;
    }
    /**
     * @param array goods
     * @return this
     */
    setGoods(goods) {
        this.goods = goods;
        return this;
    }
    /**
     * @param array shippingInfo
     * @return this
     */
    setShippingInfo(shippingInfo) {
        this.shippingInfo = shippingInfo;
        return this;
    }
    /**
     * @param int readTimeout
     * @return this
     */
    setReadTimeout(readTimeout) {
        this.readTimeout = readTimeout;
        return this;
    }
}
exports.PaymentDetailBuilder = PaymentDetailBuilder;
