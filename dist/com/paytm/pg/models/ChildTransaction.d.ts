/**
 * Copyright (C) 2019 Paytm.
 */
export declare class ChildTransaction {
    /**
     * @var string
     */
    private txnId;
    /**
     * @var string
     */
    private paymentMode;
    /**
     * @var string
     */
    private txnAmount;
    /**
     * @var string
     */
    private gateway;
    /**
     * @var string
     */
    private bankTxnId;
    /**
     * @var string
     */
    private bankName;
    /**
     * @var string
     */
    private status;
    /**
     * @var string
     */
    private cardIndexNo;
    /**
     * @var string
     */
    private maskedCardNo;
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
    getPaymentMode(): string;
    /**
     * @param string paymentMode
     * @return void
     */
    setPaymentMode(paymentMode: string): void;
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
    getGateway(): string;
    /**
     * @param string gateway
     * @return void
     */
    setGateway(gateway: string): void;
    /**
     * @return string
     */
    getBankTxnId(): string;
    /**
     * @param string bankTxnId
     * @return void
     */
    setBankTxnId(bankTxnId: string): void;
    /**
     * @return string
     */
    getBankName(): string;
    /**
     * @param string bankName
     * @return void
     */
    setBankName(bankName: string): void;
    /**
     * @return string
     */
    getStatus(): string;
    /**
     * @param string status
     * @return void
     */
    setStatus(status: string): void;
    /**
     * @return string
     */
    getCardIndexNo(): string;
    /**
     * @param string cardIndexNo
     * @return void
     */
    setCardIndexNo(cardIndexNo: string): void;
    /**
     * @return string
     */
    getMaskedCardNo(): string;
    /**
     * @param string maskedCardNo
     * @return void
     */
    setMaskedCardNo(maskedCardNo: string): void;
}
