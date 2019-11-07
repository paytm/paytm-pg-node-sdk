"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: ChildTransaction  */
class ChildTransaction {
    /**
     * @return string
     */
    getTxnId() {
        return this.txnId;
    }
    /**
     * @param string txnId
     * @return void
     */
    setTxnId(txnId) {
        this.txnId = txnId;
    }
    /**
     * @return string
     */
    getPaymentMode() {
        return this.paymentMode;
    }
    /**
     * @param string paymentMode
     * @return void
     */
    setPaymentMode(paymentMode) {
        this.paymentMode = paymentMode;
    }
    /**
     * @return string
     */
    getTxnAmount() {
        return this.txnAmount;
    }
    /**
     * @param string txnAmount
     * @return void
     */
    setTxnAmount(txnAmount) {
        this.txnAmount = txnAmount;
    }
    /**
     * @return string
     */
    getGateway() {
        return this.gateway;
    }
    /**
     * @param string gateway
     * @return void
     */
    setGateway(gateway) {
        this.gateway = gateway;
    }
    /**
     * @return string
     */
    getBankTxnId() {
        return this.bankTxnId;
    }
    /**
     * @param string bankTxnId
     * @return void
     */
    setBankTxnId(bankTxnId) {
        this.bankTxnId = bankTxnId;
    }
    /**
     * @return string
     */
    getBankName() {
        return this.bankName;
    }
    /**
     * @param string bankName
     * @return void
     */
    setBankName(bankName) {
        this.bankName = bankName;
    }
    /**
     * @return string
     */
    getStatus() {
        return this.status;
    }
    /**
     * @param string status
     * @return void
     */
    setStatus(status) {
        this.status = status;
    }
    /**
     * @return string
     */
    getCardIndexNo() {
        return this.cardIndexNo;
    }
    /**
     * @param string cardIndexNo
     * @return void
     */
    setCardIndexNo(cardIndexNo) {
        this.cardIndexNo = cardIndexNo;
    }
    /**
     * @return string
     */
    getMaskedCardNo() {
        return this.maskedCardNo;
    }
    /**
     * @param string maskedCardNo
     * @return void
     */
    setMaskedCardNo(maskedCardNo) {
        this.maskedCardNo = maskedCardNo;
    }
}
exports.ChildTransaction = ChildTransaction;
