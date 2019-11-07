/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseResponseBody from "./BaseResponseBody";
export declare class AsyncRefundResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * @var string
     */
    private refundId;
    /**
     * @var string
     */
    private mid;
    /**
     * @var string
     */
    private txnId;
    /**
     * @var string
     */
    private orderId;
    /**
     * @var string
     */
    private txnAmount;
    /**
     * @var string
     */
    private refundAmount;
    /**
     * @var string
     */
    private refId;
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
    getMid(): string;
    /**
     * @param string mid
     * @return void
     */
    setMid(mid: string): void;
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
    getRefundAmount(): string;
    /**
     * @param string refundAmount
     * @return void
     */
    setRefundAmount(refundAmount: string): void;
    /**
     * @return string
     */
    getRefId(): string;
    /**
     * @param string refId
     * @return void
     */
    setRefId(refId: string): void;
    toJSON(): {
        'refundId': string;
        'mid': string;
        'txnId': string;
        'orderId': string;
        'txnAmount': string;
        'refundAmount': string;
        'refId': string;
        'resultInfo': any;
        'extraParamsMap': {};
    };
}
