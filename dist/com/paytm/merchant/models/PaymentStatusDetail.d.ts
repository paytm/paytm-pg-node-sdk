/**
 * Copyright (C) 2019 Paytm.
 */
import * as _NativePaymentStatusRequestBody from "../../pg/request/NativePaymentStatusRequestBody";
export declare class PaymentStatusDetail {
    /** required */
    /**
     * @var string
     */
    private orderId;
    /** Optional */
    /**
     * @var int
     */
    private readTimeout;
    /**
     * Paytm\merchant\models\PaymentStatusDetail constructor.
     * @param PaymentStatusDetailBuilder paymentStatusDetailBuilder
     */
    constructor(paymentStatusDetailBuilder: any);
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @return int
     */
    getReadTimeout(): number;
    /**
     * @return \Paytm\pg\request\NativePaymentStatusRequestBody
     */
    createNativePaymentStatusRequestBody(): _NativePaymentStatusRequestBody.NativePaymentStatusRequestBody;
}
/**
 * PaymentStatusDetailBuilder is used to build the Paytm\pg\process\Refund object
 */
export declare class PaymentStatusDetailBuilder {
    /**
     * @var string
     */
    orderId: string;
    /**
     * @var int
     * Default value of readTimeout is  80000
     */
    readTimeout: number;
    /**
     * PaymentStatusDetailBuilder constructor.
     * @param string orderId
     * @throws \Exception
     */
    constructor(orderId: string);
    /**
     * @return PaymentStatusDetail
     */
    build(): PaymentStatusDetail;
    /**
     * @param int readTimeout
     * @return this
     */
    setReadTimeout(readTimeout: number): PaymentStatusDetailBuilder;
}
