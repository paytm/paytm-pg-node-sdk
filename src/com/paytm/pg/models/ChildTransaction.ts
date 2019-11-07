/**
 * Copyright (C) 2019 Paytm.
 */

/* class: ChildTransaction  */
export class ChildTransaction {

    /**
     * @var string
     */
    private txnId: string;

    /**
     * @var string
     */
    private paymentMode: string;

    /**
     * @var string
     */
    private txnAmount: string;

    /**
     * @var string
     */
    private gateway: string;

    /**
     * @var string
     */
    private bankTxnId: string;

    /**
     * @var string
     */
    private bankName: string;

    /**
     * @var string
     */
    private status: string;

    /**
     * @var string
     */
    private cardIndexNo: string;

    /**
     * @var string
     */
    private maskedCardNo: string;

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
    public getPaymentMode(): string {
        return this.paymentMode;
    }

    /**
     * @param string paymentMode
     * @return void
     */
    public setPaymentMode(paymentMode: string): void {
        this.paymentMode = paymentMode;
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
    public getGateway(): string {
        return this.gateway;
    }

    /**
     * @param string gateway
     * @return void
     */
    public setGateway(gateway: string): void {
        this.gateway = gateway;
    }

    /**
     * @return string
     */
    public getBankTxnId(): string {
        return this.bankTxnId;
    }

    /**
     * @param string bankTxnId
     * @return void
     */
    public setBankTxnId(bankTxnId: string): void {
        this.bankTxnId = bankTxnId;
    }

    /**
     * @return string
     */
    public getBankName(): string {
        return this.bankName;
    }

    /**
     * @param string bankName
     * @return void
     */
    public setBankName(bankName: string): void {
        this.bankName = bankName;
    }

    /**
     * @return string
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * @param string status
     * @return void
     */
    public setStatus(status: string): void {
        this.status = status;
    }

    /**
     * @return string
     */
    public getCardIndexNo(): string {
        return this.cardIndexNo;
    }

    /**
     * @param string cardIndexNo
     * @return void
     */
    public setCardIndexNo(cardIndexNo: string): void {
        this.cardIndexNo = cardIndexNo;
    }

    /**
     * @return string
     */
    public getMaskedCardNo(): string {
        return this.maskedCardNo;
    }

    /**
     * @param string maskedCardNo
     * @return void
     */
    public setMaskedCardNo(maskedCardNo: string): void {
        this.maskedCardNo = maskedCardNo;
    }
}