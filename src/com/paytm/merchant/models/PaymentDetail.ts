/**
 * Copyright (C) 2019 Paytm.
 */

/**
 * This class is used to store all the paymentDetail information
 * Paytm\pg\process\Request of initiateTransaction api is translated by paymentDetail object
 */

import * as _LibraryConstants from "../../pg/constants/LibraryConstants";
import * as _MerchantProperties from "../../pg/constants/MerchantProperties";
import * as _InitiateTransactionRequestBody from "../../pg/request/InitiateTransactionRequestBody";

/* class: PaymentDetail */
export class PaymentDetail {

    /** required */
    /**
     * @var string
     */
    private channelId: string;

    /**
     * @var string
     */
    private orderId: string;

    /**
     * @var \Paytm\pg\models\Money
     */
    private txnAmount;

    /**
     * @var \Paytm\pg\models\UserInfo
     */
    private userInfo;

    /** optional */
    // Paytm Token for a user
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
     * @var array
     */
    private goods: Array<object> = [];

    /**
     * @var array
     */
    private shippingInfo: Array<object> = [];

    /**
     * @var string
     */
    private workFlow: string;

    /**
     * @var string
     */
    private promoCode: string;

    /**
     * @var \Paytm\pg\models\ExtendInfo
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

    /** Read TimeOut for Paytm\pg\process\Payment Api */
    /**
     * @var int
     */
    private readTimeout: number;

    /**
     * Paytm\merchant\models\PaymentDetail constructor.
     * @param PaymentDetailBuilder paymentDetailBuilder
     */
    public constructor(paymentDetailBuilder) {
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
    public getChannelId(): string {
        return this.channelId;
    }

    /**
     * @return string
     */
    public getWorkFlow(): string {
        return this.workFlow;
    }

    /**
     * @return string
     */
    public getPromoCode(): string {
        return this.promoCode;
    }

    /**
     * @return \Paytm\pg\models\ExtendInfo
     */
    public getExtendInfo() {
        return this.extendInfo;
    }

    /**
     * @return string
     */
    public getEmiOption(): string {
        return this.emiOption;
    }

    /**
     * @return string
     */
    public getCardTokenRequired(): string {
        return this.cardTokenRequired;
    }

    /**
     * @return string
     */
    public getCartValidationRequired(): string {
        return this.cartValidationRequired;
    }

    /**
     * @return string
     */
    public getOrderId(): string {
        return this.orderId;
    }

    /**
     * @return \Paytm\pg\models\Money
     */
    public getTxnAmount() {
        return this.txnAmount;
    }

    /**
     * @return \Paytm\pg\models\UserInfo
     */
    public getUserInfo() {
        return this.userInfo;
    }

    /**
     * @return string
     */
    public getPaytmSsoToken(): string {
        return this.paytmSsoToken;
    }

    /**
     * @return array
     */
    public getEnablePaymentMode(): Array<object> {
        return this.enablePaymentMode;
    }

    /**
     * @return array
     */
    public getDisablePaymentMode(): Array<object> {
        return this.disablePaymentMode;
    }

    /**
     * @return array
     */
    public getGoods(): Array<object> {
        return this.goods;
    }

    /**
     * @return array
     */
    public getShippingInfo(): Array<object> {
        return this.shippingInfo;
    }

    /**
     * @return int
     */
    public getReadTimeout(): number {
        return this.readTimeout;
    }

    /**
     * @return InitiateTransactionRequestBody
     */
    public createInitiateTransactionRequestBody() {
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

import * as _SDKException from "../../pg/exceptions/SDKException";
import * as _UserInfo from "../../pg/models/UserInfo";
import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _Money from "../../pg/models/Money";


/**
 * PaymentDetailBuilder is used to build the paymentDetail object
 */

/* class: PaymentDetailBuilder */
export class PaymentDetailBuilder {

    /**
     * @var string
     */
    public channelId: string;

    /**
     * @var string
     */
    public orderId: string;

    /**
     * @var \Paytm\pg\models\Money
     */
    public txnAmount;

    /**
     * @var \Paytm\pg\models\UserInfo
     */
    public userInfo;

    /**
     * @var string
     */
    public paytmSsoToken: string;

    /**
     * @var array
     */
    public enablePaymentMode: Array<object>;

    /**
     * @var array
     */
    public disablePaymentMode: Array<object>;

    /**
     * @var array
     */
    public goods: Array<object>;

    /**
     * @var array
     */
    public shippingInfo: Array<object>;

    /**
     * @var string
     */
    public workFlow: string;

    /**
     * @var string
     */
    public promoCode: string;

    /**
     * @var \Paytm\pg\models\ExtendInfo
     */
    public extendInfo;

    /**
     * @var string
     */
    public emiOption: string;

    /**
     * @var string
     */
    public cardTokenRequired: string;

    /**
     * @var string
     */
    public cartValidationRequired: string;

    /**
     * @var int
     * Default value of readTimeout is 80000
     */
    public readTimeout: number = 80000;

    /**
     * PaymentDetailBuilder constructor.
     * @param string (Paytm\pg\enums\EChannelId) channelId
     * @param string                    orderId
     * @param \Paytm\pg\models\Money    txnAmount
     * @param \Paytm\pg\models\UserInfo userInfo
     * @throws \Exception
     */
    public constructor(channelId: string, orderId: string, txnAmount, userInfo) {
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
    public build() {
        return new PaymentDetail(this);
    }

    /**
     * @param string orderId
     * @return this
     */
    public setOrderId(orderId: string) {
        this.orderId = orderId;
        return this;
    }

    /**
     * @param string channelId
     */
    public setChannelId(channelId: string): void {
        this.channelId = channelId;
    }

    /**
     * @param string workFlow
     * @return this
     */
    public setWorkFlow(workFlow: string): PaymentDetailBuilder {
        this.workFlow = workFlow;
        return this;
    }

    /**
     * @param string promoCode
     * @return this
     */
    public setPromoCode(promoCode: string): PaymentDetailBuilder {
        this.promoCode = promoCode;
        return this;
    }

    /**
     * @param \Paytm\pg\models\ExtendInfo extendInfo
     * @return this
     */
    public setExtendInfo(extendInfo): PaymentDetailBuilder {
        this.extendInfo = extendInfo;
        return this;
    }

    /**
     * @param string emiOption
     * @return this
     */
    public setEmiOption(emiOption: string): PaymentDetailBuilder {
        this.emiOption = emiOption;
        return this;
    }

    /**
     * @param string cardTokenRequired
     * @return this
     */
    public setCardTokenRequired(cardTokenRequired: string): PaymentDetailBuilder {
        this.cardTokenRequired = cardTokenRequired;
        return this;
    }

    /**
     * @param string cartValidationRequired
     * @return this
     */
    public setCartValidationRequired(cartValidationRequired: string): PaymentDetailBuilder {
        this.cartValidationRequired = cartValidationRequired;
        return this;
    }

    /**
     * @param \Paytm\pg\models\Money txnAmount
     * @return this
     */
    public setTxnAmount(txnAmount): PaymentDetailBuilder {
        this.txnAmount = txnAmount;
        return this;
    }

    /**
     * @param \Paytm\pg\models\UserInfo userInfo
     * @return this
     */
    public setUserInfo(userInfo): PaymentDetailBuilder {
        this.userInfo = userInfo;
        return this;
    }

    /**
     * @param string paytmSsoToken
     * @return this
     */
    public setPaytmSsoToken(paytmSsoToken: string): PaymentDetailBuilder {
        this.paytmSsoToken = paytmSsoToken;
        return this;
    }

    /**
     * @param array enablePaymentMode
     * @return this
     */
    public setEnablePaymentMode(enablePaymentMode: Array<object>): PaymentDetailBuilder {
        this.enablePaymentMode = enablePaymentMode;
        return this;
    }

    /**
     * @param array disablePaymentMode
     * @return this
     */
    public setDisablePaymentMode(disablePaymentMode: Array<object>): PaymentDetailBuilder {
        this.disablePaymentMode = disablePaymentMode;
        return this;
    }

    /**
     * @param array goods
     * @return this
     */
    public setGoods(goods: Array<object>): PaymentDetailBuilder {
        this.goods = goods;
        return this;
    }

    /**
     * @param array shippingInfo
     * @return this
     */
    public setShippingInfo(shippingInfo: Array<object>): PaymentDetailBuilder {
        this.shippingInfo = shippingInfo;
        return this;
    }

    /**
     * @param int readTimeout
     * @return this
     */
    public setReadTimeout(readTimeout: number): PaymentDetailBuilder {
        this.readTimeout = readTimeout;
        return this;
    }
}