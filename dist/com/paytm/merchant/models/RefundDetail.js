"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _RefundInitiateRequestBody = require("../../pg/request/RefundInitiateRequestBody");
const _MerchantProperties = require("../../pg/constants/MerchantProperties");
/**
 * This class is used to store all the Paytm\pg\process\Refund information Paytm\pg\process\Request of
 * initiateRefund api is translated from Paytm\pg\process\Refund object
 */
/* class: RefundDetail */
class RefundDetail {
    /**
     * Paytm\merchant\models\RefundDetail constructor.
     * @param RefundDetailBuilder refundBuilder
     */
    constructor(refundBuilder) {
        this.orderId = refundBuilder.orderId;
        this.refId = refundBuilder.refId;
        this.txnId = refundBuilder.txnId;
        this.txnType = refundBuilder.txnType;
        this.refundAmount = refundBuilder.refundAmount;
        this.extraParamsMap = refundBuilder.extraParamsMap;
        this.workFlow = refundBuilder.workFlow;
        this.comments = refundBuilder.comments;
        this.preferredDestination = refundBuilder.preferredDestination;
        this.requestId = refundBuilder.requestId;
        this.subwalletAmount = refundBuilder.subwalletAmount;
        this.readTimeout = refundBuilder.readTimeout;
    }
    /**
     * @return string
     */
    getOrderId() {
        return this.orderId;
    }
    /**
     * @return string
     */
    getRefId() {
        return this.refId;
    }
    /**
     * @return object
     */
    getExtraParamsMap() {
        return this.extraParamsMap;
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
    getTxnId() {
        return this.txnId;
    }
    /**
     * @return string
     */
    getTxnType() {
        return this.txnType;
    }
    /**
     * @return string
     */
    getRefundAmount() {
        return this.refundAmount;
    }
    /**
     * @return string
     */
    getComments() {
        return this.comments;
    }
    /**
     * @return string
     */
    getPreferredDestination() {
        return this.preferredDestination;
    }
    /**
     * @return string
     */
    getRequestId() {
        return this.requestId;
    }
    /**
     * @return array
     */
    getSubwalletAmount() {
        return this.subwalletAmount;
    }
    /**
     * @return int
     */
    getReadTimeout() {
        return this.readTimeout;
    }
    /**
     * @return \Paytm\pg\request\RefundInitiateRequestBody
     */
    createRefundInitiateRequestBody() {
        var refundInitiateRequestBody = new _RefundInitiateRequestBody.RefundInitiateRequestBody();
        refundInitiateRequestBody.setMid(_MerchantProperties.MerchantProperties.getMid());
        refundInitiateRequestBody.setOrderId(this.getOrderId());
        refundInitiateRequestBody.setRefId(this.getRefId());
        refundInitiateRequestBody.setExtraParamsMap(this.getExtraParamsMap());
        refundInitiateRequestBody.setTxnId(this.getTxnId());
        refundInitiateRequestBody.setRefundAmount(this.getRefundAmount());
        refundInitiateRequestBody.setComments(this.getComments());
        refundInitiateRequestBody.setTxnType(this.getTxnType());
        refundInitiateRequestBody.setPreferredDestination(this.getPreferredDestination());
        refundInitiateRequestBody.setRequestId(this.getRequestId());
        refundInitiateRequestBody.setSubwalletAmount(this.getSubwalletAmount());
        return refundInitiateRequestBody;
    }
}
exports.RefundDetail = RefundDetail;
const _CommonUtil = require("../../pg/utils/CommonUtil");
const _SDKException = require("../../pg/exceptions/SDKException");
/**
 * RefundBuilder is used to build the Paytm\pg\process\Refund object
 */
/* class: RefundDetailBuilder */
class RefundDetailBuilder {
    /**
     * RefundDetailBuilder constructor.
     * @param string orderId
     * @param string refId
     * @param string txnId
     * @param string txnType
     * @param string refundAmount
     * @throws \Exception
     */
    constructor(orderId, refId, txnId, txnType, refundAmount) {
        /**
         * @var int
         * Default value of readTimeout is 80000
         */
        this.readTimeout = 80000;
        if (_CommonUtil.CommonUtil.isEmptyOrNull(orderId))
            throw new _SDKException.SDKException("OrderId can not be null or empty");
        else if (_CommonUtil.CommonUtil.isEmptyOrNull(refId))
            throw new _SDKException.SDKException("RefId can not be null or empty");
        else if (_CommonUtil.CommonUtil.isEmptyOrNull(txnId))
            throw new _SDKException.SDKException("Txn ID can not be null or empty");
        else if (_CommonUtil.CommonUtil.isEmptyOrNull(txnType))
            throw new _SDKException.SDKException("Txn type can not be null or empty");
        else if (_CommonUtil.CommonUtil.isEmptyOrNull(refundAmount))
            throw new _SDKException.SDKException("Refund amount can not be null or empty");
        else {
            this.orderId = orderId;
            this.refId = refId;
            this.txnId = txnId;
            this.txnType = txnType;
            this.refundAmount = refundAmount;
        }
    }
    /**
     * @return RefundDetail
     */
    build() {
        return new RefundDetail(this);
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
     * @param string refId
     * @return this
     */
    setRefId(refId) {
        this.refId = refId;
        return this;
    }
    /**
     * @param array extraParamsMap
     * @return this
     */
    setExtraParamsMap(extraParamsMap) {
        this.extraParamsMap = extraParamsMap;
        return this;
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
     * @param string txnId
     * @return this
     */
    setTxnId(txnId) {
        this.txnId = txnId;
        return this;
    }
    /**
     * @param string txnType
     * @return this
     */
    setTxnType(txnType) {
        this.txnType = txnType;
        return this;
    }
    /**
     * @param string refundAmount
     * @return this
     */
    setRefundAmount(refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    /**
     * @param string comments
     * @return this
     */
    setComments(comments) {
        this.comments = comments;
        return this;
    }
    /**
     * @param string preferredDestination
     * @return this
     */
    setPreferredDestination(preferredDestination) {
        this.preferredDestination = preferredDestination;
        return this;
    }
    /**
     * @param string requestId
     * @return this
     */
    setRequestId(requestId) {
        this.requestId = requestId;
        return this;
    }
    /**
     * @param array subwalletAmount
     * @return this
     */
    setSubwalletAmount(subwalletAmount) {
        this.subwalletAmount = subwalletAmount;
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
exports.RefundDetailBuilder = RefundDetailBuilder;
