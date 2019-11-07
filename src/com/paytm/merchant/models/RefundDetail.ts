/**
 * Copyright (C) 2019 Paytm.
 */

import * as _RefundInitiateRequestBody from "../../pg/request/RefundInitiateRequestBody";
import * as _MerchantProperties from "../../pg/constants/MerchantProperties";

/**
 * This class is used to store all the Paytm\pg\process\Refund information Paytm\pg\process\Request of
 * initiateRefund api is translated from Paytm\pg\process\Refund object
 */
/* class: RefundDetail */
export class RefundDetail {

    /** required */
    /**
     * @var string
     */
    private orderId: string;

    /**
     * @var string
     */
    private refId: string;

    /**
     * @var string
     */
    private txnId: string;

    /**
     * @var string
     */
    private txnType: string;

    /**
     * @var string
     */
    private refundAmount: string;


    /** optional */
    /**
     * @var string
     */
    private workFlow: string;

    /**
     * @var string
     */
    private comments: string;

    /**
     * @var string
     */
    private preferredDestination: string;

    /**
     * @var string
     */
    private requestId: string;

    /**
     * @var object
     */
    private subwalletAmount: Array<object>;

    /**
     * @var object
     */
    private extraParamsMap;

    /** Read TimeOut for Paytm\pg\process\Refund Api */
    /**
     * @var int
     */
    private readTimeout: number;

    /**
     * Paytm\merchant\models\RefundDetail constructor.
     * @param RefundDetailBuilder refundBuilder
     */
    public constructor(refundBuilder) {
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
    public getOrderId(): string {
        return this.orderId;
    }

    /**
     * @return string
     */
    public getRefId(): string {
        return this.refId;
    }

    /**
     * @return object
     */
    public getExtraParamsMap() {
        return this.extraParamsMap;
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
    public getTxnId(): string {
        return this.txnId;
    }

    /**
     * @return string
     */
    public getTxnType(): string {
        return this.txnType;
    }

    /**
     * @return string
     */
    public getRefundAmount(): string {
        return this.refundAmount;
    }

    /**
     * @return string
     */
    public getComments(): string {
        return this.comments;
    }

    /**
     * @return string
     */
    public getPreferredDestination(): string {
        return this.preferredDestination;
    }

    /**
     * @return string
     */
    public getRequestId(): string {
        return this.requestId;
    }

    /**
     * @return array
     */
    public getSubwalletAmount(): Array<object> {
        return this.subwalletAmount;
    }

    /**
     * @return int
     */
    public getReadTimeout(): number {
        return this.readTimeout;
    }

    /**
     * @return \Paytm\pg\request\RefundInitiateRequestBody
     */
    public createRefundInitiateRequestBody() {
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


import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _SDKException from "../../pg/exceptions/SDKException";

/**
 * RefundBuilder is used to build the Paytm\pg\process\Refund object
 */

/* class: RefundDetailBuilder */
export class RefundDetailBuilder {

    /**
     * @var string
     */
    public orderId: string;

    /**
     * @var string
     */
    public refId: string;

    /**
     * @var array
     */
    public extraParamsMap;

    /**
     * @var string
     */
    public workFlow: string;

    /**
     * @var string
     */
    public txnId: string;

    /**
     * @var string
     */
    public txnType: string;

    /**
     * @var string
     */
    public refundAmount: string;

    /**
     * @var string
     */
    public comments: string;

    /**
     * @var string
     */
    public preferredDestination: string;

    /**
     * @var string
     */
    public requestId: string;

    /**
     * @var array
     */
    public subwalletAmount: object;

    /**
     * @var int
     * Default value of readTimeout is 80000
     */
    public readTimeout: number = 80000;

    /**
     * RefundDetailBuilder constructor.
     * @param string orderId
     * @param string refId
     * @param string txnId
     * @param string txnType
     * @param string refundAmount
     * @throws \Exception
     */
    public constructor(orderId: string, refId: string, txnId: string, txnType: string, refundAmount: string) {
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
    public build() {
        return new RefundDetail(this);
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
     * @param string refId
     * @return this
     */
    public setRefId(refId: string) {
        this.refId = refId;
        return this;
    }

    /**
     * @param array extraParamsMap
     * @return this
     */
    public setExtraParamsMap(extraParamsMap) {
        this.extraParamsMap = extraParamsMap;
        return this;
    }

    /**
     * @param string workFlow
     * @return this
     */
    public setWorkFlow(workFlow: string) {
        this.workFlow = workFlow;
        return this;
    }

    /**
     * @param string txnId
     * @return this
     */
    public setTxnId(txnId: string) {
        this.txnId = txnId;
        return this;
    }

    /**
     * @param string txnType
     * @return this
     */
    public setTxnType(txnType: string) {
        this.txnType = txnType;
        return this;
    }

    /**
     * @param string refundAmount
     * @return this
     */
    public setRefundAmount(refundAmount: string) {
        this.refundAmount = refundAmount;
        return this;
    }

    /**
     * @param string comments
     * @return this
     */
    public setComments(comments: string) {
        this.comments = comments;
        return this;
    }

    /**
     * @param string preferredDestination
     * @return this
     */
    public setPreferredDestination(preferredDestination: string) {
        this.preferredDestination = preferredDestination;
        return this;
    }

    /**
     * @param string requestId
     * @return this
     */
    public setRequestId(requestId: string) {
        this.requestId = requestId;
        return this;
    }

    /**
     * @param array subwalletAmount
     * @return this
     */
    public setSubwalletAmount(subwalletAmount: object) {
        this.subwalletAmount = subwalletAmount;
        return this;
    }

    /**
     * @param int readTimeout
     * @return this
     */
    public setReadTimeout(readTimeout: number) {
        this.readTimeout = readTimeout;
        return this;
    }
}