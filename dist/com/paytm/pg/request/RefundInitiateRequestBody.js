"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _RefundBaseRequest = require("../request/RefundBaseRequest");
/* class: RefundInitiateRequestBody */
class RefundInitiateRequestBody extends _RefundBaseRequest.RefundBaseRequest {
    /**
     * Paytm\pg\request\RefundInitiateRequestBody constructor.
     */
    constructor() {
        super();
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
    /*@Size(
        max = 255,
        message = "Length validation failed on "
    )*/
    /**
     * @return string
     */
    getComments() {
        return this.comments;
    }
    /**
     * @param string comments
     * @return void
     */
    setComments(comments) {
        this.comments = comments;
    }
    /**
     * @return string
     */
    getPreferredDestination() {
        return this.preferredDestination;
    }
    /**
     * @param string preferredDestination
     * @return void
     */
    setPreferredDestination(preferredDestination) {
        this.preferredDestination = preferredDestination;
    }
    /**
     * @return string
     */
    getRequestId() {
        return this.requestId !== null ? this.requestId : this.getRefId();
    }
    /**
     * @param string requestId
     * @return void
     */
    setRequestId(requestId) {
        this.requestId = requestId;
    }
    /**
     * @return array
     */
    getSubwalletAmount() {
        return this.subwalletAmount;
    }
    /**
     * @param array subwalletAmount
     * @return void
     */
    setSubwalletAmount(subwalletAmount) {
        this.subwalletAmount = subwalletAmount;
    }
    toJSON() {
        return {
            'txnId': this.getTxnId(),
            'refundAmount': this.getRefundAmount(),
            'comments': this.getComments(),
            'txnType': this.getTxnType(),
            'preferredDestination': this.getPreferredDestination(),
            'requestId': this.getRequestId(),
            'subwalletAmount': this.getSubwalletAmount(),
            'mid': this.getMid(),
            'orderId': this.getOrderId(),
            'refId': this.getRefId(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}
exports.RefundInitiateRequestBody = RefundInitiateRequestBody;
