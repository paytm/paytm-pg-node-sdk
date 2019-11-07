/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseResponseBody from "./BaseResponseBody";
export declare class NativeRefundStatusResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * @var string
     */
    protected txnId: string;
    /**
     * @var string
     */
    protected orderId: string;
    /**
     * @var string
     */
    protected txnAmount: string;
    /**
     * @var string
     */
    protected mid: string;
    /**
     * @var string
     */
    protected refundAmount: string;
    /**
     * @var string
     */
    protected txnDate: string;
    /**
     * @var string
     */
    private totalRefundedAmount;
    /**
     * @var string
     */
    private refundDate;
    /**
     * @var string
     */
    private refId;
    /**
     * @var string
     */
    private bankTxnId;
    /**
     * @var string
     */
    private txnType;
    /**
     * @var string
     */
    private gatewayName;
    /**
     * @var string
     */
    private bankName;
    /**
     * @var string
     */
    private paymentMode;
    /**
     * @var string
     */
    private refundId;
    /**
     * @var string
     */
    private refundType;
    /**
     * @var string
     */
    private ssoId;
    /**
     * NativeRefundStatusResponseBody constructor.
     */
    constructor();
    /**
     * @return string
     */
    getTxnId(): string;
    /**
     * @param string txnId
     * @return void
     */
    setTxnId(txnId: string): void;
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
    getTxnAmount(): string;
    /**
     * @param string txnAmount
     * @return void
     */
    setTxnAmount(txnAmount: string): void;
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
    getRefundAmount(): string;
    /**
     * @param string refundAmount
     * @return void
     */
    setRefundAmount(refundAmount: string): void;
    /**
     * @return string
     */
    getTxnDate(): string;
    /**
     * @param string txnDate
     * @return void
     */
    setTxnDate(txnDate: string): void;
    /**
     * @return string
     */
    getTotalRefundedAmount(): string;
    /**
     * @param string totalRefundedAmount
     * @return void
     */
    setTotalRefundedAmount(totalRefundedAmount: string): void;
    /**
     * @return string
     */
    getRefundDate(): string;
    /**
     * @param string refundDate
     * @return void
     */
    setRefundDate(refundDate: string): void;
    /**
     * @return string
     */
    getRefId(): string;
    /**
     * @param string refId
     * @return void
     */
    setRefId(refId: string): void;
    /**
     * @return string
     */
    getBankTxnId(): string;
    /**
     * @param string bankTxnId
     * @return void
     */
    setBankTxnId(bankTxnId: string): void;
    /**
     * @return string
     */
    getTxnType(): string;
    /**
     * @param string txnType
     * @return void
     */
    setTxnType(txnType: string): void;
    /**
     * @return string
     */
    getGatewayName(): string;
    /**
     * @param string gatewayName
     * @return void
     */
    setGatewayName(gatewayName: string): void;
    /**
     * @return string
     */
    getBankName(): string;
    /**
     * @param string bankName
     * @return void
     */
    setBankName(bankName: string): void;
    /**
     * @return string
     */
    getPaymentMode(): string;
    /**
     * @param string paymentMode
     * @return void
     */
    setPaymentMode(paymentMode: string): void;
    /**
     * @return string
     */
    getRefundId(): string;
    /**
     * @param string refundId
     * @return void
     */
    setRefundId(refundId: string): void;
    /**
     * @return string
     */
    getRefundType(): string;
    /**
     * @param string refundType
     * @return void
     */
    setRefundType(refundType: string): void;
    /**
     * @return string
     */
    getSsoId(): string;
    /**
     * @param string ssoId
     * @return void
     */
    setSsoId(ssoId: string): void;
    toJSON(): {
        'txnId': string;
        'orderId': string;
        'txnAmount': string;
        'mid': string;
        'refundAmount': string;
        'txnDate': string;
        'totalRefundedAmount': string;
        'refundDate': string;
        'refId': string;
        'bankTxnId': string;
        'txnType': string;
        'gatewayName': string;
        'bankName': string;
        'paymentMode': string;
        'refundId': string;
        'refundType': string;
        'ssoId': string;
        'resultInfo': any;
        'extraParamsMap': {};
    };
}
