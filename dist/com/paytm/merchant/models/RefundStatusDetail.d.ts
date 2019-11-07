/**
 * Copyright (C) 2019 Paytm.
 */
import * as _NativeRefundStatusRequestBody from "../../pg/request/NativeRefundStatusRequestBody";
export declare class RefundStatusDetail {
    /**
     * @var string
     * required
     * Unique order for each order request
     */
    private orderId;
    /**
     * @var string refId
     * Unique ref id for each refund request
     */
    private refId;
    /**
     * @var int readTimeout
     * Optional
     */
    private readTimeout;
    /**
     * Paytm\merchant\models\RefundStatusDetail constructor.
     * @param RefundStatusDetailBuilder refundStatusDetailBuilder
     */
    constructor(refundStatusDetailBuilder: any);
    /**
     * @return \Paytm\pg\request\NativeRefundStatusRequestBody
     */
    createNativeRefundStatusRequestBody(): _NativeRefundStatusRequestBody.NativeRefundStatusRequestBody;
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @return string
     */
    getRefId(): string;
    /**
     * @return int
     */
    getReadTimeout(): number;
}
/**
 * PaymentStatusDetailBuilder is used to build the Paytm\pg\process\Refund object
 */
export declare class RefundStatusDetailBuilder {
    /**
     * @var string
     */
    orderId: string;
    /**
     * @var string
     */
    refId: string;
    /**
     * @var int
     */
    readTimeout: number;
    /**
     * RefundStatusDetailBuilder constructor.
     * @param string orderId
     * @param string refId
     * @throws \Exception
     */
    constructor(orderId: string, refId: string);
    /**
     * builder method
     * @return RefundStatusDetail
     */
    build(): RefundStatusDetail;
    /**
     * @param int readTimeout
     * @return this
     */
    setReadTimeout(readTimeout: number): this;
}
