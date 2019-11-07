/**
 * Copyright (C) 2019 Paytm.
 */
export declare class NativePaymentStatusRequestBody {
    /**
     * @var string
     */
    private mid;
    /**
     * @var string
     */
    private orderId;
    /**
     * @var string
     */
    private txnType;
    /**
     * @var bool
     */
    private fromAoaMerchant;
    /**
     * Paytm\pg\request\NativePaymentStatusRequestBody constructor.
     */
    constructor();
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
    getOrderId(): string;
    /**
     * @param string orderId
     * @return void
     */
    setOrderId(orderId: string): void;
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
     * @return bool
     */
    isFromAoaMerchant(): boolean;
    /**
     * @param bool fromAoaMerchant
     * @return void
     */
    setFromAoaMerchant(fromAoaMerchant: boolean): void;
    toJSON(): {
        'mid': string;
        'orderId': string;
        'txnType': string;
    };
}
