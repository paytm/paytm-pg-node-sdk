"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2019 Paytm.
 */
const _BaseResponseBody = require("./BaseResponseBody");
/* class: AsyncRefundResponseBody */
class AsyncRefundResponseBody extends _BaseResponseBody.BaseResponseBody {
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
    toJSON() {
        return {
            'refundId': this.getRefundId(),
            'mid': this.getMid(),
            'txnId': this.getTxnId(),
            'orderId': this.getOrderId(),
            'txnAmount': this.getTxnAmount(),
            'refundAmount': this.getRefundAmount(),
            'refId': this.getRefId(),
            'resultInfo': this.getResultInfo(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}
exports.AsyncRefundResponseBody = AsyncRefundResponseBody;
