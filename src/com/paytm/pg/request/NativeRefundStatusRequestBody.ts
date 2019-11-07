/**
 * Copyright (C) 2019 Paytm.
 */

/* class: NativeRefundStatusRequestBody */
export class NativeRefundStatusRequestBody {

    /**
     * @var string
     */
    private mid: string;

    /**
     * @var string
     */
    private orderId: string;

    /**
     * @var string
     */
    private refId: string;

    /**
     * Paytm\pg\request\NativeRefundStatusRequestBody constructor.
     * @param string mid
     * @param string orderId
     * @param string refId
     */
    public constructor(mid: string, orderId: string, refId: string) {
        this.mid = mid;
        this.orderId = orderId;
        this.refId = refId;
    }

    /**
     * @return string
     */
    public getmid(): string {
        return this.mid;
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
}