/**
 * Copyright (C) 2019 Paytm.
 */
import * as _InitiateTransactionRequestBody from "../../pg/request/InitiateTransactionRequestBody";
export declare class PaymentDetail {
    /** required */
    /**
     * @var string
     */
    private channelId;
    /**
     * @var string
     */
    private orderId;
    /**
     * @var \Paytm\pg\models\Money
     */
    private txnAmount;
    /**
     * @var \Paytm\pg\models\UserInfo
     */
    private userInfo;
    /** optional */
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
     * @var array
     */
    private goods;
    /**
     * @var array
     */
    private shippingInfo;
    /**
     * @var string
     */
    private workFlow;
    /**
     * @var string
     */
    private promoCode;
    /**
     * @var \Paytm\pg\models\ExtendInfo
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
    /** Read TimeOut for Paytm\pg\process\Payment Api */
    /**
     * @var int
     */
    private readTimeout;
    /**
     * Paytm\merchant\models\PaymentDetail constructor.
     * @param PaymentDetailBuilder paymentDetailBuilder
     */
    constructor(paymentDetailBuilder: any);
    /**
     * @return string
     */
    getChannelId(): string;
    /**
     * @return string
     */
    getWorkFlow(): string;
    /**
     * @return string
     */
    getPromoCode(): string;
    /**
     * @return \Paytm\pg\models\ExtendInfo
     */
    getExtendInfo(): any;
    /**
     * @return string
     */
    getEmiOption(): string;
    /**
     * @return string
     */
    getCardTokenRequired(): string;
    /**
     * @return string
     */
    getCartValidationRequired(): string;
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @return \Paytm\pg\models\Money
     */
    getTxnAmount(): any;
    /**
     * @return \Paytm\pg\models\UserInfo
     */
    getUserInfo(): any;
    /**
     * @return string
     */
    getPaytmSsoToken(): string;
    /**
     * @return array
     */
    getEnablePaymentMode(): Array<object>;
    /**
     * @return array
     */
    getDisablePaymentMode(): Array<object>;
    /**
     * @return array
     */
    getGoods(): Array<object>;
    /**
     * @return array
     */
    getShippingInfo(): Array<object>;
    /**
     * @return int
     */
    getReadTimeout(): number;
    /**
     * @return InitiateTransactionRequestBody
     */
    createInitiateTransactionRequestBody(): _InitiateTransactionRequestBody.InitiateTransactionRequestBody;
}
/**
 * PaymentDetailBuilder is used to build the paymentDetail object
 */
export declare class PaymentDetailBuilder {
    /**
     * @var string
     */
    channelId: string;
    /**
     * @var string
     */
    orderId: string;
    /**
     * @var \Paytm\pg\models\Money
     */
    txnAmount: any;
    /**
     * @var \Paytm\pg\models\UserInfo
     */
    userInfo: any;
    /**
     * @var string
     */
    paytmSsoToken: string;
    /**
     * @var array
     */
    enablePaymentMode: Array<object>;
    /**
     * @var array
     */
    disablePaymentMode: Array<object>;
    /**
     * @var array
     */
    goods: Array<object>;
    /**
     * @var array
     */
    shippingInfo: Array<object>;
    /**
     * @var string
     */
    workFlow: string;
    /**
     * @var string
     */
    promoCode: string;
    /**
     * @var \Paytm\pg\models\ExtendInfo
     */
    extendInfo: any;
    /**
     * @var string
     */
    emiOption: string;
    /**
     * @var string
     */
    cardTokenRequired: string;
    /**
     * @var string
     */
    cartValidationRequired: string;
    /**
     * @var int
     * Default value of readTimeout is 80000
     */
    readTimeout: number;
    /**
     * PaymentDetailBuilder constructor.
     * @param string (Paytm\pg\enums\EChannelId) channelId
     * @param string                    orderId
     * @param \Paytm\pg\models\Money    txnAmount
     * @param \Paytm\pg\models\UserInfo userInfo
     * @throws \Exception
     */
    constructor(channelId: string, orderId: string, txnAmount: any, userInfo: any);
    /**
     * @return paymentDetail
     */
    build(): PaymentDetail;
    /**
     * @param string orderId
     * @return this
     */
    setOrderId(orderId: string): this;
    /**
     * @param string channelId
     */
    setChannelId(channelId: string): void;
    /**
     * @param string workFlow
     * @return this
     */
    setWorkFlow(workFlow: string): PaymentDetailBuilder;
    /**
     * @param string promoCode
     * @return this
     */
    setPromoCode(promoCode: string): PaymentDetailBuilder;
    /**
     * @param \Paytm\pg\models\ExtendInfo extendInfo
     * @return this
     */
    setExtendInfo(extendInfo: any): PaymentDetailBuilder;
    /**
     * @param string emiOption
     * @return this
     */
    setEmiOption(emiOption: string): PaymentDetailBuilder;
    /**
     * @param string cardTokenRequired
     * @return this
     */
    setCardTokenRequired(cardTokenRequired: string): PaymentDetailBuilder;
    /**
     * @param string cartValidationRequired
     * @return this
     */
    setCartValidationRequired(cartValidationRequired: string): PaymentDetailBuilder;
    /**
     * @param \Paytm\pg\models\Money txnAmount
     * @return this
     */
    setTxnAmount(txnAmount: any): PaymentDetailBuilder;
    /**
     * @param \Paytm\pg\models\UserInfo userInfo
     * @return this
     */
    setUserInfo(userInfo: any): PaymentDetailBuilder;
    /**
     * @param string paytmSsoToken
     * @return this
     */
    setPaytmSsoToken(paytmSsoToken: string): PaymentDetailBuilder;
    /**
     * @param array enablePaymentMode
     * @return this
     */
    setEnablePaymentMode(enablePaymentMode: Array<object>): PaymentDetailBuilder;
    /**
     * @param array disablePaymentMode
     * @return this
     */
    setDisablePaymentMode(disablePaymentMode: Array<object>): PaymentDetailBuilder;
    /**
     * @param array goods
     * @return this
     */
    setGoods(goods: Array<object>): PaymentDetailBuilder;
    /**
     * @param array shippingInfo
     * @return this
     */
    setShippingInfo(shippingInfo: Array<object>): PaymentDetailBuilder;
    /**
     * @param int readTimeout
     * @return this
     */
    setReadTimeout(readTimeout: number): PaymentDetailBuilder;
}
