/**
 * Copyright (C) 2019 Paytm.
 */

import * as _RefundBaseRequest from "../request/RefundBaseRequest";

/* class: RefundInitiateRequestBody */
export class RefundInitiateRequestBody extends _RefundBaseRequest.RefundBaseRequest {
    /**
     * @var string
     */
    private txnId: string;

    /**
     * @var string
     */
    private refundAmount: string;

    /**
     * @var string
     */
    private comments: string;

    /**
     * @var string
     */
    private txnType: string;

    /**
     * @var string
     */
    private preferredDestination: string;

    /**
     * @var string
     */
    private requestId: string;

    /**
     * @var array
     */
    private subwalletAmount: Array<object>;

    /**
     * Paytm\pg\request\RefundInitiateRequestBody constructor.
     */
    public constructor() {
        super();
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

    /*@Size(
        max = 255,
        message = "Length validation failed on "
    )*/
    /**
     * @return string
     */
    public getComments(): string {
        return this.comments;
    }

    /**
     * @param string comments
     * @return void
     */
    public setComments(comments: string): void {
        this.comments = comments;
    }

    /**
     * @return string
     */
    public getPreferredDestination(): string {
        return this.preferredDestination;
    }

    /**
     * @param string preferredDestination
     * @return void
     */
    public setPreferredDestination(preferredDestination: string): void {
        this.preferredDestination = preferredDestination;
    }

    /**
     * @return string
     */
    public getRequestId(): string {
        return this.requestId !== null ? this.requestId : this.getRefId();
    }

    /**
     * @param string requestId
     * @return void
     */
    public setRequestId(requestId: string): void {
        this.requestId = requestId;
    }

    /**
     * @return array
     */
    public getSubwalletAmount(): Array<object> {
        return this.subwalletAmount;
    }

    /**
     * @param array subwalletAmount
     * @return void
     */
    public setSubwalletAmount(subwalletAmount: Array<object>): void {
        this.subwalletAmount = subwalletAmount;
    }

    public toJSON() {
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