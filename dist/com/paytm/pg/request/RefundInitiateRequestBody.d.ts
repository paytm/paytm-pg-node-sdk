/**
 * Copyright (C) 2019 Paytm.
 */
import * as _RefundBaseRequest from "../request/RefundBaseRequest";
export declare class RefundInitiateRequestBody extends _RefundBaseRequest.RefundBaseRequest {
    /**
     * @var string
     */
    private txnId;
    /**
     * @var string
     */
    private refundAmount;
    /**
     * @var string
     */
    private comments;
    /**
     * @var string
     */
    private txnType;
    /**
     * @var string
     */
    private preferredDestination;
    /**
     * @var string
     */
    private requestId;
    /**
     * @var array
     */
    private subwalletAmount;
    /**
     * Paytm\pg\request\RefundInitiateRequestBody constructor.
     */
    constructor();
    /**
     * @return string
     */
    getTxnType(): string;
    /**
     * @param string txnType
     * @return void
     */
    setTxnType(txnType: string): void;
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
    getRefundAmount(): string;
    /**
     * @param string refundAmount
     * @return void
     */
    setRefundAmount(refundAmount: string): void;
    /**
     * @return string
     */
    getComments(): string;
    /**
     * @param string comments
     * @return void
     */
    setComments(comments: string): void;
    /**
     * @return string
     */
    getPreferredDestination(): string;
    /**
     * @param string preferredDestination
     * @return void
     */
    setPreferredDestination(preferredDestination: string): void;
    /**
     * @return string
     */
    getRequestId(): string;
    /**
     * @param string requestId
     * @return void
     */
    setRequestId(requestId: string): void;
    /**
     * @return array
     */
    getSubwalletAmount(): Array<object>;
    /**
     * @param array subwalletAmount
     * @return void
     */
    setSubwalletAmount(subwalletAmount: Array<object>): void;
    toJSON(): {
        'txnId': string;
        'refundAmount': string;
        'comments': string;
        'txnType': string;
        'preferredDestination': string;
        'requestId': string;
        'subwalletAmount': object[];
        'mid': string;
        'orderId': string;
        'refId': string;
        'extraParamsMap': {};
    };
}
