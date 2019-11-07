"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2019 Paytm.
 */
const _BaseResponseBody = require("./BaseResponseBody");
/* class: NativePaymentStatusResponseBody */
class NativePaymentStatusResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * Paytm\pg\response\NativePaymentStatusResponseBody constructor.
     */
    constructor() {
        super();
    }
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
    getOrderId() {
        return this.orderId;
    }
    /**
     * @param string orderId
     * @return void
     */
    setOrderId(orderId) {
        this.orderId = orderId;
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
    getTxnType() {
        return this.txnType;
    }
    /**
     * @param string txnType
     * @return void
     */
    setTxnType(txnType) {
        this.txnType = txnType;
    }
    /**
     * @return string
     */
    getGatewayName() {
        return this.gatewayName;
    }
    /**
     * @param string gatewayName
     * @return void
     */
    setGatewayName(gatewayName) {
        this.gatewayName = gatewayName;
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
    getMid() {
        return this.mid;
    }
    /**
     * @param string mid
     * @return void
     */
    setMid(mid) {
        this.mid = mid;
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
    getRefundAmt() {
        return this.refundAmt;
    }
    /**
     * @param string refundAmt
     * @return void
     */
    setRefundAmt(refundAmt) {
        this.refundAmt = refundAmt;
    }
    /**
     * @return string
     */
    getTxnDate() {
        return this.txnDate;
    }
    /**
     * @param string txnDate
     * @return void
     */
    setTxnDate(txnDate) {
        this.txnDate = txnDate;
    }
    /**
     * @return string
     */
    getRefundId() {
        return this.refundId;
    }
    /**
     * @param string refundId
     * @return void
     */
    setRefundId(refundId) {
        this.refundId = refundId;
    }
    /**
     * @return string
     */
    getRefId() {
        return this.refId;
    }
    /**
     * @param string refId
     * @return void
     */
    setRefId(refId) {
        this.refId = refId;
    }
    /**
     * @return array
     */
    getChildTransaction() {
        return this.childTransaction;
    }
    /**
     * @param array childTransaction
     * @return void
     */
    setChildTransaction(childTransaction) {
        this.childTransaction = childTransaction;
    }
    /**
     * @return string
     */
    getSubsId() {
        return this.subsId;
    }
    /**
     * @param string subsId
     * @return void
     */
    setSubsId(subsId) {
        this.subsId = subsId;
    }
    /**
     * @return string
     */
    getMerchantUniqueReference() {
        return this.merchantUniqueReference;
    }
    /**
     * @param string merchantUniqueReference
     * @return void
     */
    setMerchantUniqueReference(merchantUniqueReference) {
        this.merchantUniqueReference = merchantUniqueReference;
    }
    /**
     * @return string
     */
    getBlockedAmount() {
        return this.blockedAmount;
    }
    /**
     * @param string blockedAmount
     * @return void
     */
    setBlockedAmount(blockedAmount) {
        this.blockedAmount = blockedAmount;
    }
    /**
     * @return string
     */
    getPreAuthId() {
        return this.preAuthId;
    }
    /**
     * @param string preAuthId
     * @return void
     */
    setPreAuthId(preAuthId) {
        this.preAuthId = preAuthId;
    }
    /**
     * @return string
     */
    getCustomMerchantResponse() {
        return this.customMerchantResponse;
    }
    /**
     * @param string customMerchantResponse
     * @return void
     */
    setCustomMerchantResponse(customMerchantResponse) {
        this.customMerchantResponse = customMerchantResponse;
    }
    /**
     * @return string
     */
    getCustomChecksumString() {
        return this.customChecksumString;
    }
    /**
     * @param string customChecksumString
     * @return void
     */
    setCustomChecksumString(customChecksumString) {
        this.customChecksumString = customChecksumString;
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
    getMaskedCustomerMobileNumber() {
        return this.maskedCustomerMobileNumber;
    }
    /**
     * @param string maskedCustomerMobileNumber
     * @return void
     */
    setMaskedCustomerMobileNumber(maskedCustomerMobileNumber) {
        this.maskedCustomerMobileNumber = maskedCustomerMobileNumber;
    }
    /**
     * @return string
     */
    getPosId() {
        return this.posId;
    }
    /**
     * @param string posId
     * @return void
     */
    setPosId(posId) {
        this.posId = posId;
    }
    /**
     * @return string
     */
    getUniqueReferenceLabel() {
        return this.uniqueReferenceLabel;
    }
    /**
     * @param string uniqueReferenceLabel
     * @return void
     */
    setUniqueReferenceLabel(uniqueReferenceLabel) {
        this.uniqueReferenceLabel = uniqueReferenceLabel;
    }
    /**
     * @return string
     */
    getUniqueReferenceValue() {
        return this.uniqueReferenceValue;
    }
    /**
     * @param string uniqueReferenceValue
     * @return void
     */
    setUniqueReferenceValue(uniqueReferenceValue) {
        this.uniqueReferenceValue = uniqueReferenceValue;
    }
    /**
     * @return string
     */
    getPccCode() {
        return this.pccCode;
    }
    /**
     * @param string pccCode
     * @return void
     */
    setPccCode(pccCode) {
        this.pccCode = pccCode;
    }
    /**
     * @return string
     */
    getPrn() {
        return this.prn;
    }
    /**
     * @param string prn
     * @return void
     */
    setPrn(prn) {
        this.prn = prn;
    }
    /**
     * @return string
     */
    getUdf1() {
        return this.udf1;
    }
    /**
     * @param string udf1
     * @return void
     */
    setUdf1(udf1) {
        this.udf1 = udf1;
    }
    /**
     * @return string
     */
    getUdf2() {
        return this.udf2;
    }
    /**
     * @param string udf2
     * @return void
     */
    setUdf2(udf2) {
        this.udf2 = udf2;
    }
    /**
     * @return string
     */
    getUdf3() {
        return this.udf3;
    }
    /**
     * @param string udf3
     * @return void
     */
    setUdf3(udf3) {
        this.udf3 = udf3;
    }
    /**
     * @return string
     */
    getComments() {
        return this.comments;
    }
    /**
     * @param string comments
     * @return void
     */
    setComments(comments) {
        this.comments = comments;
    }
    /**
     * @return string
     */
    getCurrentTxnCount() {
        return this.currentTxnCount;
    }
    /**
     * @param string currentTxnCount
     * @return void
     */
    setCurrentTxnCount(currentTxnCount) {
        this.currentTxnCount = currentTxnCount;
    }
    /**
     * @return string
     */
    getLoyaltyPoints() {
        return this.loyaltyPoints;
    }
    /**
     * @param string loyaltyPoints
     * @return void
     */
    setLoyaltyPoints(loyaltyPoints) {
        this.loyaltyPoints = loyaltyPoints;
    }
    toJSON() {
        return {
            'txnId': this.getTxnId(),
            'bankTxnId': this.getBankTxnId(),
            'orderId': this.getOrderId(),
            'txnAmount': this.getTxnAmount(),
            'txnType': this.getTxnType(),
            'gatewayName': this.getGatewayName(),
            'bankName': this.getBankName(),
            'mid': this.getMid(),
            'paymentMode': this.getPaymentMode(),
            'refundAmt': this.getRefundAmt(),
            'txnDate': this.getTxnDate(),
            'refundId': this.getRefundId(),
            'refId': this.getRefId(),
            'childTransaction': this.getChildTransaction(),
            'subsId': this.getSubsId(),
            'merchantUniqueReference': this.getMerchantUniqueReference(),
            'blockedAmount': this.getBlockedAmount(),
            'preAuthId': this.getPreAuthId(),
            'customMerchantResponse': this.getCustomMerchantResponse(),
            'customChecksumString': this.getCustomChecksumString(),
            'maskedCardNo': this.getMaskedCardNo(),
            'cardIndexNo': this.getCardIndexNo(),
            'maskedCustomerMobileNumber': this.getMaskedCustomerMobileNumber(),
            'posId': this.getPosId(),
            'uniqueReferenceLabel': this.getUniqueReferenceLabel(),
            'uniqueReferenceValue': this.getUniqueReferenceValue(),
            'pccCode': this.getPccCode(),
            'prn': this.getPrn(),
            'udf1': this.getUdf1(),
            'udf2': this.getUdf2(),
            'udf3': this.getUdf3(),
            'comments': this.getComments(),
            'currentTxnCount': this.getCurrentTxnCount(),
            'loyaltyPoints': this.getLoyaltyPoints(),
            'resultInfo': this.getResultInfo(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}
exports.NativePaymentStatusResponseBody = NativePaymentStatusResponseBody;
