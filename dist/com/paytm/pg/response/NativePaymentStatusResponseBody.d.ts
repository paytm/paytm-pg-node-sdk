/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseResponseBody from "./BaseResponseBody";
export declare class NativePaymentStatusResponseBody extends _BaseResponseBody.BaseResponseBody {
    /**
     * @var string
     */
    private txnId;
    /**
     * @var string
     */
    private bankTxnId;
    /**
     * @var string
     */
    private orderId;
    /**
     * @var string
     */
    private txnAmount;
    /**
     * @var string
     */
    private txnType;
    /**
     * @var string
     */
    private gatewayName;
    /**
     * @var string
     */
    private bankName;
    /**
     * @var string
     */
    private mid;
    /**
     * @var string
     */
    private paymentMode;
    /**
     * @var string
     */
    private refundAmt;
    /**
     * @var string
     */
    private txnDate;
    /**
     * @var string
     */
    private refundId;
    /**
     * @var string
     */
    private refId;
    /**
     * @var array
     */
    private childTransaction;
    /**
     * @var string
     */
    private subsId;
    /**
     * @var string
     */
    private merchantUniqueReference;
    /**
     * @var string
     */
    private blockedAmount;
    /**
     * @var string
     */
    private preAuthId;
    /**
     * @var string
     */
    private customMerchantResponse;
    /**
     * @var string
     */
    private customChecksumString;
    /**
     * @var string
     */
    private maskedCardNo;
    /**
     * @var string
     */
    private cardIndexNo;
    /**
     * @var string
     */
    private maskedCustomerMobileNumber;
    /**
     * @var string
     */
    private posId;
    /**
     * @var string
     */
    private uniqueReferenceLabel;
    /**
     * @var string
     */
    private uniqueReferenceValue;
    /**
     * @var string
     */
    private pccCode;
    /**
     * @var string
     */
    private prn;
    /**
     * @var string
     */
    private udf1;
    /**
     * @var string
     */
    private udf2;
    /**
     * @var string
     */
    private udf3;
    /**
     * @var string
     */
    private comments;
    /**
     * @var string
     */
    private currentTxnCount;
    /**
     * @var string
     */
    private loyaltyPoints;
    /**
     * Paytm\pg\response\NativePaymentStatusResponseBody constructor.
     */
    constructor();
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
    getBankTxnId(): string;
    /**
     * @param string bankTxnId
     * @return void
     */
    setBankTxnId(bankTxnId: string): void;
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
    getTxnAmount(): string;
    /**
     * @param string txnAmount
     * @return void
     */
    setTxnAmount(txnAmount: string): void;
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
    getGatewayName(): string;
    /**
     * @param string gatewayName
     * @return void
     */
    setGatewayName(gatewayName: string): void;
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
    getMid(): string;
    /**
     * @param string mid
     * @return void
     */
    setMid(mid: string): void;
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
    getRefundAmt(): string;
    /**
     * @param string refundAmt
     * @return void
     */
    setRefundAmt(refundAmt: string): void;
    /**
     * @return string
     */
    getTxnDate(): string;
    /**
     * @param string txnDate
     * @return void
     */
    setTxnDate(txnDate: string): void;
    /**
     * @return string
     */
    getRefundId(): string;
    /**
     * @param string refundId
     * @return void
     */
    setRefundId(refundId: string): void;
    /**
     * @return string
     */
    getRefId(): string;
    /**
     * @param string refId
     * @return void
     */
    setRefId(refId: string): void;
    /**
     * @return array
     */
    getChildTransaction(): Array<any>;
    /**
     * @param array childTransaction
     * @return void
     */
    setChildTransaction(childTransaction: Array<any>): void;
    /**
     * @return string
     */
    getSubsId(): string;
    /**
     * @param string subsId
     * @return void
     */
    setSubsId(subsId: string): void;
    /**
     * @return string
     */
    getMerchantUniqueReference(): string;
    /**
     * @param string merchantUniqueReference
     * @return void
     */
    setMerchantUniqueReference(merchantUniqueReference: string): void;
    /**
     * @return string
     */
    getBlockedAmount(): string;
    /**
     * @param string blockedAmount
     * @return void
     */
    setBlockedAmount(blockedAmount: string): void;
    /**
     * @return string
     */
    getPreAuthId(): string;
    /**
     * @param string preAuthId
     * @return void
     */
    setPreAuthId(preAuthId: string): void;
    /**
     * @return string
     */
    getCustomMerchantResponse(): string;
    /**
     * @param string customMerchantResponse
     * @return void
     */
    setCustomMerchantResponse(customMerchantResponse: string): void;
    /**
     * @return string
     */
    getCustomChecksumString(): string;
    /**
     * @param string customChecksumString
     * @return void
     */
    setCustomChecksumString(customChecksumString: string): void;
    /**
     * @return string
     */
    getMaskedCardNo(): string;
    /**
     * @param string maskedCardNo
     * @return void
     */
    setMaskedCardNo(maskedCardNo: string): void;
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
    getMaskedCustomerMobileNumber(): string;
    /**
     * @param string maskedCustomerMobileNumber
     * @return void
     */
    setMaskedCustomerMobileNumber(maskedCustomerMobileNumber: string): void;
    /**
     * @return string
     */
    getPosId(): string;
    /**
     * @param string posId
     * @return void
     */
    setPosId(posId: string): void;
    /**
     * @return string
     */
    getUniqueReferenceLabel(): string;
    /**
     * @param string uniqueReferenceLabel
     * @return void
     */
    setUniqueReferenceLabel(uniqueReferenceLabel: string): void;
    /**
     * @return string
     */
    getUniqueReferenceValue(): string;
    /**
     * @param string uniqueReferenceValue
     * @return void
     */
    setUniqueReferenceValue(uniqueReferenceValue: string): void;
    /**
     * @return string
     */
    getPccCode(): string;
    /**
     * @param string pccCode
     * @return void
     */
    setPccCode(pccCode: string): void;
    /**
     * @return string
     */
    getPrn(): string;
    /**
     * @param string prn
     * @return void
     */
    setPrn(prn: string): void;
    /**
     * @return string
     */
    getUdf1(): string;
    /**
     * @param string udf1
     * @return void
     */
    setUdf1(udf1: string): void;
    /**
     * @return string
     */
    getUdf2(): string;
    /**
     * @param string udf2
     * @return void
     */
    setUdf2(udf2: string): void;
    /**
     * @return string
     */
    getUdf3(): string;
    /**
     * @param string udf3
     * @return void
     */
    setUdf3(udf3: string): void;
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
    getCurrentTxnCount(): string;
    /**
     * @param string currentTxnCount
     * @return void
     */
    setCurrentTxnCount(currentTxnCount: string): void;
    /**
     * @return string
     */
    getLoyaltyPoints(): string;
    /**
     * @param string loyaltyPoints
     * @return void
     */
    setLoyaltyPoints(loyaltyPoints: string): void;
    toJSON(): {
        'txnId': string;
        'bankTxnId': string;
        'orderId': string;
        'txnAmount': string;
        'txnType': string;
        'gatewayName': string;
        'bankName': string;
        'mid': string;
        'paymentMode': string;
        'refundAmt': string;
        'txnDate': string;
        'refundId': string;
        'refId': string;
        'childTransaction': any[];
        'subsId': string;
        'merchantUniqueReference': string;
        'blockedAmount': string;
        'preAuthId': string;
        'customMerchantResponse': string;
        'customChecksumString': string;
        'maskedCardNo': string;
        'cardIndexNo': string;
        'maskedCustomerMobileNumber': string;
        'posId': string;
        'uniqueReferenceLabel': string;
        'uniqueReferenceValue': string;
        'pccCode': string;
        'prn': string;
        'udf1': string;
        'udf2': string;
        'udf3': string;
        'comments': string;
        'currentTxnCount': string;
        'loyaltyPoints': string;
        'resultInfo': any;
        'extraParamsMap': {};
    };
}
