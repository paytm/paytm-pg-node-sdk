"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: NativeRefundStatusRequestBody */
class NativeRefundStatusRequestBody {
    /**
     * Paytm\pg\request\NativeRefundStatusRequestBody constructor.
     * @param string mid
     * @param string orderId
     * @param string refId
     */
    constructor(mid, orderId, refId) {
        this.mid = mid;
        this.orderId = orderId;
        this.refId = refId;
    }
    /**
     * @return string
     */
    getmid() {
        return this.mid;
    }
    /**
     * @return string
     */
    getOrderId() {
        return this.orderId;
    }
    /**
     * @return string
     */
    getRefId() {
        return this.refId;
    }
}
exports.NativeRefundStatusRequestBody = NativeRefundStatusRequestBody;
