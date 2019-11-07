"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ExtraParameterMap = require("../request/ExtraParameterMap");
/* class: RefundBaseRequest */
class RefundBaseRequest extends _ExtraParameterMap.ExtraParameterMap {
    /**
     * Paytm\pg\request\RefundBaseRequest constructor.
     */
    constructor() {
        super();
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
    toJSON() {
        return {
            'mid': this.getMid(),
            'orderId': this.getOrderId(),
            'refId': this.getRefId(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}
exports.RefundBaseRequest = RefundBaseRequest;
