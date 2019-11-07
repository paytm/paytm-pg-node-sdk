/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseResponseBody from "./BaseResponseBody";

/* class: NativePaymentStatusResponseBody */
export class NativePaymentStatusResponseBody extends _BaseResponseBody.BaseResponseBody {

    /**
     * @var string
     */
    private txnId: string;

    /**
     * @var string
     */
    private bankTxnId: string;

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
    private txnType: string;

    /**
     * @var string
     */
    private gatewayName: string;

    /**
     * @var string
     */
    private bankName: string;

    /**
     * @var string
     */
    private mid: string;

    /**
     * @var string
     */
    private paymentMode: string;

    /**
     * @var string
     */
    private refundAmt: string;

    /**
     * @var string
     */
    private txnDate: string;

    /**
     * @var string
     */
    private refundId: string;

    /**
     * @var string
     */
    private refId: string;

    /**
     * @var array
     */
    private childTransaction: Array<any>;

    /**
     * @var string
     */
    private subsId: string;

    /**
     * @var string
     */
    private merchantUniqueReference: string;

    /**
     * @var string
     */
    private blockedAmount: string;

    /**
     * @var string
     */
    private preAuthId: string;

    /**
     * @var string
     */
    private customMerchantResponse: string;

    /**
     * @var string
     */
    private customChecksumString: string;

    /**
     * @var string
     */
    private maskedCardNo: string;

    /**
     * @var string
     */
    private cardIndexNo: string;

    /**
     * @var string
     */
    private maskedCustomerMobileNumber: string;

    /**
     * @var string
     */
    private posId: string;

    /**
     * @var string
     */
    private uniqueReferenceLabel: string;

    /**
     * @var string
     */
    private uniqueReferenceValue: string;

    /**
     * @var string
     */
    private pccCode: string;

    /**
     * @var string
     */
    private prn: string;

    /**
     * @var string
     */
    private udf1: string;

    /**
     * @var string
     */
    private udf2: string;

    /**
     * @var string
     */
    private udf3: string;

    /**
     * @var string
     */
    private comments: string;

    /**
     * @var string
     */
    private currentTxnCount: string;

    /**
     * @var string
     */
    private loyaltyPoints: string;

    /**
     * Paytm\pg\response\NativePaymentStatusResponseBody constructor.
     */
    public constructor() {
        super();
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
    public getGatewayName(): string {
        return this.gatewayName;
    }

    /**
     * @param string gatewayName
     * @return void
     */
    public setGatewayName(gatewayName: string): void {
        this.gatewayName = gatewayName;
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
    public getRefundAmt(): string {
        return this.refundAmt;
    }

    /**
     * @param string refundAmt
     * @return void
     */
    public setRefundAmt(refundAmt: string): void {
        this.refundAmt = refundAmt;
    }

    /**
     * @return string
     */
    public getTxnDate(): string {
        return this.txnDate;
    }

    /**
     * @param string txnDate
     * @return void
     */
    public setTxnDate(txnDate: string): void {
        this.txnDate = txnDate;
    }

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

    /**
     * @return array
     */
    public getChildTransaction(): Array<any> {
        return this.childTransaction;
    }

    /**
     * @param array childTransaction
     * @return void
     */
    public setChildTransaction(childTransaction: Array<any>): void {
        this.childTransaction = childTransaction;
    }

    /**
     * @return string
     */
    public getSubsId(): string {
        return this.subsId;
    }

    /**
     * @param string subsId
     * @return void
     */
    public setSubsId(subsId: string): void {
        this.subsId = subsId;
    }

    /**
     * @return string
     */
    public getMerchantUniqueReference(): string {
        return this.merchantUniqueReference;
    }

    /**
     * @param string merchantUniqueReference
     * @return void
     */
    public setMerchantUniqueReference(merchantUniqueReference: string): void {
        this.merchantUniqueReference = merchantUniqueReference;
    }

    /**
     * @return string
     */
    public getBlockedAmount(): string {
        return this.blockedAmount;
    }

    /**
     * @param string blockedAmount
     * @return void
     */
    public setBlockedAmount(blockedAmount: string): void {
        this.blockedAmount = blockedAmount;
    }

    /**
     * @return string
     */
    public getPreAuthId(): string {
        return this.preAuthId;
    }

    /**
     * @param string preAuthId
     * @return void
     */
    public setPreAuthId(preAuthId: string): void {
        this.preAuthId = preAuthId;
    }

    /**
     * @return string
     */
    public getCustomMerchantResponse(): string {
        return this.customMerchantResponse;
    }

    /**
     * @param string customMerchantResponse
     * @return void
     */
    public setCustomMerchantResponse(customMerchantResponse: string): void {
        this.customMerchantResponse = customMerchantResponse;
    }

    /**
     * @return string
     */
    public getCustomChecksumString(): string {
        return this.customChecksumString;
    }

    /**
     * @param string customChecksumString
     * @return void
     */
    public setCustomChecksumString(customChecksumString: string): void {
        this.customChecksumString = customChecksumString;
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
    public getMaskedCustomerMobileNumber(): string {
        return this.maskedCustomerMobileNumber;
    }

    /**
     * @param string maskedCustomerMobileNumber
     * @return void
     */
    public setMaskedCustomerMobileNumber(maskedCustomerMobileNumber: string): void {
        this.maskedCustomerMobileNumber = maskedCustomerMobileNumber;
    }

    /**
     * @return string
     */
    public getPosId(): string {
        return this.posId;
    }

    /**
     * @param string posId
     * @return void
     */
    public setPosId(posId: string): void {
        this.posId = posId;
    }

    /**
     * @return string
     */
    public getUniqueReferenceLabel(): string {
        return this.uniqueReferenceLabel;
    }

    /**
     * @param string uniqueReferenceLabel
     * @return void
     */
    public setUniqueReferenceLabel(uniqueReferenceLabel: string): void {
        this.uniqueReferenceLabel = uniqueReferenceLabel;
    }

    /**
     * @return string
     */
    public getUniqueReferenceValue(): string {
        return this.uniqueReferenceValue;
    }

    /**
     * @param string uniqueReferenceValue
     * @return void
     */
    public setUniqueReferenceValue(uniqueReferenceValue: string): void {
        this.uniqueReferenceValue = uniqueReferenceValue;
    }

    /**
     * @return string
     */
    public getPccCode(): string {
        return this.pccCode;
    }

    /**
     * @param string pccCode
     * @return void
     */
    public setPccCode(pccCode: string): void {
        this.pccCode = pccCode;
    }

    /**
     * @return string
     */
    public getPrn(): string {
        return this.prn;
    }

    /**
     * @param string prn
     * @return void
     */
    public setPrn(prn: string): void {
        this.prn = prn;
    }

    /**
     * @return string
     */
    public getUdf1(): string {
        return this.udf1;
    }

    /**
     * @param string udf1
     * @return void
     */
    public setUdf1(udf1: string): void {
        this.udf1 = udf1;
    }

    /**
     * @return string
     */
    public getUdf2(): string {
        return this.udf2;
    }

    /**
     * @param string udf2
     * @return void
     */
    public setUdf2(udf2: string): void {
        this.udf2 = udf2;
    }

    /**
     * @return string
     */
    public getUdf3(): string {
        return this.udf3;
    }

    /**
     * @param string udf3
     * @return void
     */
    public setUdf3(udf3: string): void {
        this.udf3 = udf3;
    }

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
    public getCurrentTxnCount(): string {
        return this.currentTxnCount;
    }

    /**
     * @param string currentTxnCount
     * @return void
     */
    public setCurrentTxnCount(currentTxnCount: string): void {
        this.currentTxnCount = currentTxnCount;
    }

    /**
     * @return string
     */
    public getLoyaltyPoints(): string {
        return this.loyaltyPoints;
    }

    /**
     * @param string loyaltyPoints
     * @return void
     */
    public setLoyaltyPoints(loyaltyPoints: string): void {
        this.loyaltyPoints = loyaltyPoints;
    }

    public toJSON() {
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