/**
 * Copyright (C) 2019 Paytm.
 */

import * as _NativeRefundStatusRequestBody from "../../pg/request/NativeRefundStatusRequestBody";
import * as _MerchantProperties from "../../pg/constants/MerchantProperties";

/* class: RefundStatusDetail */
export class RefundStatusDetail {

    /**
     * @var string
     * required
     * Unique order for each order request
     */
    private orderId: string;

    /**
     * @var string refId
     * Unique ref id for each refund request
     */
    private refId: string;

    /**
     * @var int readTimeout
     * Optional
     */
    private readTimeout: number;

    /**
     * Paytm\merchant\models\RefundStatusDetail constructor.
     * @param RefundStatusDetailBuilder refundStatusDetailBuilder
     */
    public constructor(refundStatusDetailBuilder) {
        this.orderId = refundStatusDetailBuilder.orderId;
        this.refId = refundStatusDetailBuilder.refId;
        this.readTimeout = refundStatusDetailBuilder.readTimeout;
    }

    /**
     * @return \Paytm\pg\request\NativeRefundStatusRequestBody
     */
    public createNativeRefundStatusRequestBody() {
        return new _NativeRefundStatusRequestBody.NativeRefundStatusRequestBody(_MerchantProperties.MerchantProperties.getMid(), this.orderId, this.refId);
    }

    /**
     * @return string
     */
    public getOrderId(): string {
        return this.orderId;
    }

    /**
     * @return string
     */
    public getRefId(): string {
        return this.refId;
    }

    /**
     * @return int
     */
    public getReadTimeout(): number {
        return this.readTimeout;
    }
}


import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _SDKException from "../../pg/exceptions/SDKException";

/**
 * PaymentStatusDetailBuilder is used to build the Paytm\pg\process\Refund object
 */
/* class: RefundStatusDetailBuilder */
export class RefundStatusDetailBuilder {

    /**
     * @var string
     */
    public orderId: string;

    /**
     * @var string
     */
    public refId: string;

    /**
     * @var int
     */
    public readTimeout: number;

    /**
     * RefundStatusDetailBuilder constructor.
     * @param string orderId
     * @param string refId
     * @throws \Exception
     */
    public constructor(orderId: string, refId: string) {
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
    public build() {
        return new RefundStatusDetail(this);
    }

    /**
     * @param int readTimeout
     * @return this
     */
    public setReadTimeout(readTimeout: number) {
        this.readTimeout = readTimeout;
        return this;
    }
}