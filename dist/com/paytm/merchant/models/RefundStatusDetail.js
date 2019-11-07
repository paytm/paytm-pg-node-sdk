"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _NativeRefundStatusRequestBody = require("../../pg/request/NativeRefundStatusRequestBody");
const _MerchantProperties = require("../../pg/constants/MerchantProperties");
/* class: RefundStatusDetail */
class RefundStatusDetail {
    /**
     * Paytm\merchant\models\RefundStatusDetail constructor.
     * @param RefundStatusDetailBuilder refundStatusDetailBuilder
     */
    constructor(refundStatusDetailBuilder) {
        this.orderId = refundStatusDetailBuilder.orderId;
        this.refId = refundStatusDetailBuilder.refId;
        this.readTimeout = refundStatusDetailBuilder.readTimeout;
    }
    /**
     * @return \Paytm\pg\request\NativeRefundStatusRequestBody
     */
    createNativeRefundStatusRequestBody() {
        return new _NativeRefundStatusRequestBody.NativeRefundStatusRequestBody(_MerchantProperties.MerchantProperties.getMid(), this.orderId, this.refId);
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
    /**
     * @return int
     */
    getReadTimeout() {
        return this.readTimeout;
    }
}
exports.RefundStatusDetail = RefundStatusDetail;
const _CommonUtil = require("../../pg/utils/CommonUtil");
const _SDKException = require("../../pg/exceptions/SDKException");
/**
 * PaymentStatusDetailBuilder is used to build the Paytm\pg\process\Refund object
 */
/* class: RefundStatusDetailBuilder */
class RefundStatusDetailBuilder {
    /**
     * RefundStatusDetailBuilder constructor.
     * @param string orderId
     * @param string refId
     * @throws \Exception
     */
    constructor(orderId, refId) {
        if (_CommonUtil.CommonUtil.isEmptyOrNull(orderId))
            throw new _SDKException.SDKException("OrderId can not be null or empty");
        else if (_CommonUtil.CommonUtil.isEmptyOrNull(refId))
            throw new _SDKException.SDKException("RefId can not be null or empty");
        else {
            this.orderId = orderId;
            this.refId = refId;
        }
    }
    /**
     * builder method
     * @return RefundStatusDetail
     */
    build() {
        return new RefundStatusDetail(this);
    }
    /**
     * @param int readTimeout
     * @return this
     */
    setReadTimeout(readTimeout) {
        this.readTimeout = readTimeout;
        return this;
    }
}
exports.RefundStatusDetailBuilder = RefundStatusDetailBuilder;
