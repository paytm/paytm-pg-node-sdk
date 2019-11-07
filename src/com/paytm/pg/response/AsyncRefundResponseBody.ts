/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseResponseBody from "./BaseResponseBody";

/* class: AsyncRefundResponseBody */
export class AsyncRefundResponseBody extends _BaseResponseBody.BaseResponseBody {

    /**
     * @var string
     */
    private refundId: string;

    /**
     * @var string
     */
    private mid: string;

    /**
     * @var string
     */
    private txnId: string;

    /**
     * @var string
     */
    private orderId: string;

    /**
     * @var string
     */
    private txnAmount: string;

    /**
     * @var string
     */
    private refundAmount: string;

    /**
     * @var string
     */
    private refId: string;

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

    public toJSON() {
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