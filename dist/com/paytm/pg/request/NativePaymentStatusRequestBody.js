"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: NativePaymentStatusRequestBody */
class NativePaymentStatusRequestBody {
    /**
     * Paytm\pg\request\NativePaymentStatusRequestBody constructor.
     */
    constructor() {
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
     * @return bool
     */
    isFromAoaMerchant() {
        return this.fromAoaMerchant;
    }
    /**
     * @param bool fromAoaMerchant
     * @return void
     */
    setFromAoaMerchant(fromAoaMerchant) {
        this.fromAoaMerchant = fromAoaMerchant;
    }
    toJSON() {
        return {
            'mid': this.getMid(),
            'orderId': this.getOrderId(),
            'txnType': this.getTxnType(),
        };
    }
}
exports.NativePaymentStatusRequestBody = NativePaymentStatusRequestBody;
