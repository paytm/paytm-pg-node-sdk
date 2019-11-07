"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _NativePaymentStatusRequestBody = require("../../pg/request/NativePaymentStatusRequestBody");
const _MerchantProperties = require("../../pg/constants/MerchantProperties");
/* class: PaymentStatusDetail */
class PaymentStatusDetail {
    /**
     * Paytm\merchant\models\PaymentStatusDetail constructor.
     * @param PaymentStatusDetailBuilder paymentStatusDetailBuilder
     */
    constructor(paymentStatusDetailBuilder) {
        this.orderId = paymentStatusDetailBuilder.orderId;
        this.readTimeout = paymentStatusDetailBuilder.readTimeout;
    }
    /**
     * @return string
     */
    getOrderId() {
        return this.orderId;
    }
    /**
     * @return int
     */
    getReadTimeout() {
        return this.readTimeout;
    }
    /**
     * @return \Paytm\pg\request\NativePaymentStatusRequestBody
     */
    createNativePaymentStatusRequestBody() {
        var nativePaymentStatusRequestBody = new _NativePaymentStatusRequestBody.NativePaymentStatusRequestBody();
        nativePaymentStatusRequestBody.setMid(_MerchantProperties.MerchantProperties.getMid());
        nativePaymentStatusRequestBody.setOrderId(this.orderId);
        return nativePaymentStatusRequestBody;
    }
}
exports.PaymentStatusDetail = PaymentStatusDetail;
const _CommonUtil = require("../../pg/utils/CommonUtil");
const _SDKException = require("../../pg/exceptions/SDKException");
/**
 * PaymentStatusDetailBuilder is used to build the Paytm\pg\process\Refund object
 */
/* class: PaymentStatusDetailBuilder */
class PaymentStatusDetailBuilder {
    /**
     * PaymentStatusDetailBuilder constructor.
     * @param string orderId
     * @throws \Exception
     */
    constructor(orderId) {
        /**
         * @var int
         * Default value of readTimeout is  80000
         */
        this.readTimeout = 80000;
        if (_CommonUtil.CommonUtil.isEmptyOrNull(orderId)) {
            throw new _SDKException.SDKException("ChannelId can not be null or empty");
        }
        else {
            this.orderId = orderId;
        }
    }
    /**
     * @return PaymentStatusDetail
     */
    build() {
        return new PaymentStatusDetail(this);
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
exports.PaymentStatusDetailBuilder = PaymentStatusDetailBuilder;
