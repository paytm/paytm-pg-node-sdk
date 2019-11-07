/**
 * Copyright (C) 2019 Paytm.
 */
export declare class NativeRefundStatusRequestBody {
    /**
     * @var string
     */
    private mid;
    /**
     * @var string
     */
    private orderId;
    /**
     * @var string
     */
    private refId;
    /**
     * Paytm\pg\request\NativeRefundStatusRequestBody constructor.
     * @param string mid
     * @param string orderId
     * @param string refId
     */
    constructor(mid: string, orderId: string, refId: string);
    /**
     * @return string
     */
    getmid(): string;
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @return string
     */
    getRefId(): string;
}
