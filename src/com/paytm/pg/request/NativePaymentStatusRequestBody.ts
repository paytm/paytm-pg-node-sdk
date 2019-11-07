/**
 * Copyright (C) 2019 Paytm.
 */

/* class: NativePaymentStatusRequestBody */
export class NativePaymentStatusRequestBody {

    /**
     * @var string
     */
    private mid: string;

    /**
     * @var string
     */
    private orderId: string;

    /**
     * @var string
     */
    private txnType: string;

    /**
     * @var bool
     */
    private fromAoaMerchant: boolean;

    /**
     * Paytm\pg\request\NativePaymentStatusRequestBody constructor.
     */
    public constructor() {
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
     * @return bool
     */
    public isFromAoaMerchant(): boolean {
        return this.fromAoaMerchant;
    }

    /**
     * @param bool fromAoaMerchant
     * @return void
     */
    public setFromAoaMerchant(fromAoaMerchant: boolean): void {
        this.fromAoaMerchant = fromAoaMerchant;
    }

    public toJSON() {
        return {
            'mid': this.getMid(),
            'orderId': this.getOrderId(),
            'txnType': this.getTxnType(),
        };
    }
}