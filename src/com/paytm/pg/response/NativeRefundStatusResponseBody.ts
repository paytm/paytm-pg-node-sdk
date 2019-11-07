/**
 * Copyright (C) 2019 Paytm.
 */

import * as _BaseResponseBody from "./BaseResponseBody";

/* class: NativeRefundStatusResponseBody */
export class NativeRefundStatusResponseBody extends _BaseResponseBody.BaseResponseBody {

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
    private totalRefundedAmount: string;

    /**
     * @var string
     */
    private refundDate: string;

    /**
     * @var string
     */
    private refId: string;

    /**
     * @var string
     */
    private bankTxnId: string;

    /**
     * @var string
     */
    private txnType: string;

    /**
     * @var string
     */
    private gatewayName: string;

    /**
     * @var string
     */
    private bankName: string;

    /**
     * @var string
     */
    private paymentMode: string;

    /**
     * @var string
     */
    private refundId: string;

    /**
     * @var string
     */
    private refundType: string;

    /**
     * @var string
     */
    private ssoId: string;

    /**
     * NativeRefundStatusResponseBody constructor.
     */
    public constructor() {
        super();
    }

    /**
     * @return string
     */
    public getTxnId(): string {
        return this.txnId;
    }

    /**
     * @param string txnId
     * @return void
     */
    public setTxnId(txnId: string): void {
        this.txnId = txnId;
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
    public getTxnAmount(): string {
        return this.txnAmount;
    }

    /**
     * @param string txnAmount
     * @return void
     */
    public setTxnAmount(txnAmount: string): void {
        this.txnAmount = txnAmount;
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
    public getRefundAmount(): string {
        return this.refundAmount;
    }

    /**
     * @param string refundAmount
     * @return void
     */
    public setRefundAmount(refundAmount: string): void {
        this.refundAmount = refundAmount;
    }

    /**
     * @return string
     */
    public getTxnDate(): string {
        return this.txnDate;
    }

    /**
     * @param string txnDate
     * @return void
     */
    public setTxnDate(txnDate: string): void {
        this.txnDate = txnDate;
    }

    /**
     * @return string
     */
    public getTotalRefundedAmount(): string {
        return this.totalRefundedAmount;
    }

    /**
     * @param string totalRefundedAmount
     * @return void
     */
    public setTotalRefundedAmount(totalRefundedAmount: string): void {
        this.totalRefundedAmount = totalRefundedAmount;
    }

    /**
     * @return string
     */
    public getRefundDate(): string {
        return this.refundDate;
    }

    /**
     * @param string refundDate
     * @return void
     */
    public setRefundDate(refundDate: string): void {
        this.refundDate = refundDate;
    }

    /**
     * @return string
     */
    public getRefId(): string {
        return this.refId;
    }

    /**
     * @param string refId
     * @return void
     */
    public setRefId(refId: string): void {
        this.refId = refId;
    }

    /**
     * @return string
     */
    public getBankTxnId(): string {
        return this.bankTxnId;
    }

    /**
     * @param string bankTxnId
     * @return void
     */
    public setBankTxnId(bankTxnId: string): void {
        this.bankTxnId = bankTxnId;
    }

    /**
     * @return string
     */
    public getTxnType(): string {
        return this.txnType;
    }

    /**
     * @param string txnType
     * @return void
     */
    public setTxnType(txnType: string): void {
        this.txnType = txnType;
    }

    /**
     * @return string
     */
    public getGatewayName(): string {
        return this.gatewayName;
    }

    /**
     * @param string gatewayName
     * @return void
     */
    public setGatewayName(gatewayName: string): void {
        this.gatewayName = gatewayName;
    }

    /**
     * @return string
     */
    public getBankName(): string {
        return this.bankName;
    }

    /**
     * @param string bankName
     * @return void
     */
    public setBankName(bankName: string): void {
        this.bankName = bankName;
    }

    /**
     * @return string
     */
    public getPaymentMode(): string {
        return this.paymentMode;
    }

    /**
     * @param string paymentMode
     * @return void
     */
    public setPaymentMode(paymentMode: string): void {
        this.paymentMode = paymentMode;
    }

    /**
     * @return string
     */
    public getRefundId(): string {
        return this.refundId;
    }

    /**
     * @param string refundId
     * @return void
     */
    public setRefundId(refundId: string): void {
        this.refundId = refundId;
    }

    /**
     * @return string
     */
    public getRefundType(): string {
        return this.refundType;
    }

    /**
     * @param string refundType
     * @return void
     */
    public setRefundType(refundType: string): void {
        this.refundType = refundType;
    }

    /**
     * @return string
     */
    public getSsoId(): string {
        return this.ssoId;
    }

    /**
     * @param string ssoId
     * @return void
     */
    public setSsoId(ssoId: string): void {
        this.ssoId = ssoId;
    }

    public toJSON() {
        return {
            'txnId': this.getTxnId(),
            'orderId': this.getOrderId(),
            'txnAmount': this.getTxnAmount(),
            'mid': this.getMid(),
            'refundAmount': this.getRefundAmount(),
            'txnDate': this.getTxnDate(),
            'totalRefundedAmount': this.getTotalRefundedAmount(),
            'refundDate': this.getRefundDate(),
            'refId': this.getRefId(),
            'bankTxnId': this.getBankTxnId(),
            'txnType': this.getTxnType(),
            'gatewayName': this.getGatewayName(),
            'bankName': this.getBankName(),
            'paymentMode': this.getPaymentMode(),
            'refundId': this.getRefundId(),
            'refundType': this.getRefundType(),
            'ssoId': this.getSsoId(),
            'resultInfo': this.getResultInfo(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}