"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _BaseResponseBody = require("./BaseResponseBody");
/* class: NativeRefundStatusResponseBody */
class NativeRefundStatusResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * NativeRefundStatusResponseBody constructor.
     */
    constructor() {
        super();
    }
    /**
     * @return string
     */
    getTxnId() {
        return this.txnId;
    }
    /**
     * @param string txnId
     * @return void
     */
    setTxnId(txnId) {
        this.txnId = txnId;
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
    getTxnAmount() {
        return this.txnAmount;
    }
    /**
     * @param string txnAmount
     * @return void
     */
    setTxnAmount(txnAmount) {
        this.txnAmount = txnAmount;
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
    getRefundAmount() {
        return this.refundAmount;
    }
    /**
     * @param string refundAmount
     * @return void
     */
    setRefundAmount(refundAmount) {
        this.refundAmount = refundAmount;
    }
    /**
     * @return string
     */
    getTxnDate() {
        return this.txnDate;
    }
    /**
     * @param string txnDate
     * @return void
     */
    setTxnDate(txnDate) {
        this.txnDate = txnDate;
    }
    /**
     * @return string
     */
    getTotalRefundedAmount() {
        return this.totalRefundedAmount;
    }
    /**
     * @param string totalRefundedAmount
     * @return void
     */
    setTotalRefundedAmount(totalRefundedAmount) {
        this.totalRefundedAmount = totalRefundedAmount;
    }
    /**
     * @return string
     */
    getRefundDate() {
        return this.refundDate;
    }
    /**
     * @param string refundDate
     * @return void
     */
    setRefundDate(refundDate) {
        this.refundDate = refundDate;
    }
    /**
     * @return string
     */
    getRefId() {
        return this.refId;
    }
    /**
     * @param string refId
     * @return void
     */
    setRefId(refId) {
        this.refId = refId;
    }
    /**
     * @return string
     */
    getBankTxnId() {
        return this.bankTxnId;
    }
    /**
     * @param string bankTxnId
     * @return void
     */
    setBankTxnId(bankTxnId) {
        this.bankTxnId = bankTxnId;
    }
    /**
     * @return string
     */
    getTxnType() {
        return this.txnType;
    }
    /**
     * @param string txnType
     * @return void
     */
    setTxnType(txnType) {
        this.txnType = txnType;
    }
    /**
     * @return string
     */
    getGatewayName() {
        return this.gatewayName;
    }
    /**
     * @param string gatewayName
     * @return void
     */
    setGatewayName(gatewayName) {
        this.gatewayName = gatewayName;
    }
    /**
     * @return string
     */
    getBankName() {
        return this.bankName;
    }
    /**
     * @param string bankName
     * @return void
     */
    setBankName(bankName) {
        this.bankName = bankName;
    }
    /**
     * @return string
     */
    getPaymentMode() {
        return this.paymentMode;
    }
    /**
     * @param string paymentMode
     * @return void
     */
    setPaymentMode(paymentMode) {
        this.paymentMode = paymentMode;
    }
    /**
     * @return string
     */
    getRefundId() {
        return this.refundId;
    }
    /**
     * @param string refundId
     * @return void
     */
    setRefundId(refundId) {
        this.refundId = refundId;
    }
    /**
     * @return string
     */
    getRefundType() {
        return this.refundType;
    }
    /**
     * @param string refundType
     * @return void
     */
    setRefundType(refundType) {
        this.refundType = refundType;
    }
    /**
     * @return string
     */
    getSsoId() {
        return this.ssoId;
    }
    /**
     * @param string ssoId
     * @return void
     */
    setSsoId(ssoId) {
        this.ssoId = ssoId;
    }
    toJSON() {
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
exports.NativeRefundStatusResponseBody = NativeRefundStatusResponseBody;
