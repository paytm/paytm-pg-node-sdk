/**
 * Copyright (C) 2019 Paytm.
 */
import * as _RefundInitiateRequestBody from "../../pg/request/RefundInitiateRequestBody";
/**
 * This class is used to store all the Paytm\pg\process\Refund information Paytm\pg\process\Request of
 * initiateRefund api is translated from Paytm\pg\process\Refund object
 */
export declare class RefundDetail {
    /** required */
    /**
     * @var string
     */
    private orderId;
    /**
     * @var string
     */
    private refId;
    /**
     * @var string
     */
    private txnId;
    /**
     * @var string
     */
    private txnType;
    /**
     * @var string
     */
    private refundAmount;
    /** optional */
    /**
     * @var string
     */
    private workFlow;
    /**
     * @var string
     */
    private comments;
    /**
     * @var string
     */
    private preferredDestination;
    /**
     * @var string
     */
    private requestId;
    /**
     * @var object
     */
    private subwalletAmount;
    /**
     * @var object
     */
    private extraParamsMap;
    /** Read TimeOut for Paytm\pg\process\Refund Api */
    /**
     * @var int
     */
    private readTimeout;
    /**
     * Paytm\merchant\models\RefundDetail constructor.
     * @param RefundDetailBuilder refundBuilder
     */
    constructor(refundBuilder: any);
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @return string
     */
    getRefId(): string;
    /**
     * @return object
     */
    getExtraParamsMap(): any;
    /**
     * @return string
     */
    getWorkFlow(): string;
    /**
     * @return string
     */
    getTxnId(): string;
    /**
     * @return string
     */
    getTxnType(): string;
    /**
     * @return string
     */
    getRefundAmount(): string;
    /**
     * @return string
     */
    getComments(): string;
    /**
     * @return string
     */
    getPreferredDestination(): string;
    /**
     * @return string
     */
    getRequestId(): string;
    /**
     * @return array
     */
    getSubwalletAmount(): Array<object>;
    /**
     * @return int
     */
    getReadTimeout(): number;
    /**
     * @return \Paytm\pg\request\RefundInitiateRequestBody
     */
    createRefundInitiateRequestBody(): _RefundInitiateRequestBody.RefundInitiateRequestBody;
}
/**
 * RefundBuilder is used to build the Paytm\pg\process\Refund object
 */
export declare class RefundDetailBuilder {
    /**
     * @var string
     */
    orderId: string;
    /**
     * @var string
     */
    refId: string;
    /**
     * @var array
     */
    extraParamsMap: any;
    /**
     * @var string
     */
    workFlow: string;
    /**
     * @var string
     */
    txnId: string;
    /**
     * @var string
     */
    txnType: string;
    /**
     * @var string
     */
    refundAmount: string;
    /**
     * @var string
     */
    comments: string;
    /**
     * @var string
     */
    preferredDestination: string;
    /**
     * @var string
     */
    requestId: string;
    /**
     * @var array
     */
    subwalletAmount: object;
    /**
     * @var int
     * Default value of readTimeout is 80000
     */
    readTimeout: number;
    /**
     * RefundDetailBuilder constructor.
     * @param string orderId
     * @param string refId
     * @param string txnId
     * @param string txnType
     * @param string refundAmount
     * @throws \Exception
     */
    constructor(orderId: string, refId: string, txnId: string, txnType: string, refundAmount: string);
    /**
     * @return RefundDetail
     */
    build(): RefundDetail;
    /**
     * @param string orderId
     * @return this
     */
    setOrderId(orderId: string): this;
    /**
     * @param string refId
     * @return this
     */
    setRefId(refId: string): this;
    /**
     * @param array extraParamsMap
     * @return this
     */
    setExtraParamsMap(extraParamsMap: any): this;
    /**
     * @param string workFlow
     * @return this
     */
    setWorkFlow(workFlow: string): this;
    /**
     * @param string txnId
     * @return this
     */
    setTxnId(txnId: string): this;
    /**
     * @param string txnType
     * @return this
     */
    setTxnType(txnType: string): this;
    /**
     * @param string refundAmount
     * @return this
     */
    setRefundAmount(refundAmount: string): this;
    /**
     * @param string comments
     * @return this
     */
    setComments(comments: string): this;
    /**
     * @param string preferredDestination
     * @return this
     */
    setPreferredDestination(preferredDestination: string): this;
    /**
     * @param string requestId
     * @return this
     */
    setRequestId(requestId: string): this;
    /**
     * @param array subwalletAmount
     * @return this
     */
    setSubwalletAmount(subwalletAmount: object): this;
    /**
     * @param int readTimeout
     * @return this
     */
    setReadTimeout(readTimeout: number): this;
}
