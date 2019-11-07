/**
 * Copyright (C) 2019 Paytm.
 */

import * as _NativePaymentStatusRequestBody from "../../pg/request/NativePaymentStatusRequestBody";
import * as _MerchantProperties from "../../pg/constants/MerchantProperties";

/* class: PaymentStatusDetail */
export class PaymentStatusDetail {

    /** required */
    /**
     * @var string
     */
    private orderId: string;

    /** Optional */
    /**
     * @var int
     */
    private readTimeout: number;

    /**
     * Paytm\merchant\models\PaymentStatusDetail constructor.
     * @param PaymentStatusDetailBuilder paymentStatusDetailBuilder
     */
    public constructor(paymentStatusDetailBuilder) {
        this.orderId = paymentStatusDetailBuilder.orderId;
        this.readTimeout = paymentStatusDetailBuilder.readTimeout;
    }

    /**
     * @return string
     */
    public getOrderId(): string {
        return this.orderId;
    }

    /**
     * @return int
     */
    public getReadTimeout(): number {
        return this.readTimeout;
    }

    /**
     * @return \Paytm\pg\request\NativePaymentStatusRequestBody
     */
    public createNativePaymentStatusRequestBody() {
        var nativePaymentStatusRequestBody = new _NativePaymentStatusRequestBody.NativePaymentStatusRequestBody();
        nativePaymentStatusRequestBody.setMid(_MerchantProperties.MerchantProperties.getMid());
        nativePaymentStatusRequestBody.setOrderId(this.orderId);
        return nativePaymentStatusRequestBody;
    }
}


import * as _CommonUtil from "../../pg/utils/CommonUtil";
import * as _SDKException from "../../pg/exceptions/SDKException";

/**
 * PaymentStatusDetailBuilder is used to build the Paytm\pg\process\Refund object
 */

/* class: PaymentStatusDetailBuilder */
export class PaymentStatusDetailBuilder {

    /**
     * @var string
     */
    public orderId: string;

    /**
     * @var int
     * Default value of readTimeout is  80000
     */
    public readTimeout: number = 80000;

    /**
     * PaymentStatusDetailBuilder constructor.
     * @param string orderId
     * @throws \Exception
     */
    public constructor(orderId: string) {
        if (_CommonUtil.CommonUtil.isEmptyOrNull(orderId)) {
            throw new _SDKException.SDKException("ChannelId can not be null or empty");
        } else {
            this.orderId = orderId;
        }
    }

    /**
     * @return PaymentStatusDetail
     */
    public build(): PaymentStatusDetail {
        return new PaymentStatusDetail(this);
    }

    /**
     * @param int readTimeout
     * @return this
     */
    public setReadTimeout(readTimeout: number): PaymentStatusDetailBuilder {
        this.readTimeout = readTimeout;
        return this;
    }
}