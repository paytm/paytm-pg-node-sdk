/**
 * Copyright (C) 2019 Paytm.
 */

import * as _ExtraParameterMap from "../request/ExtraParameterMap";

/* class: RefundBaseRequest */
export class RefundBaseRequest extends _ExtraParameterMap.ExtraParameterMap {

    /**
     * @var string
     */
    protected mid: string;

    /**
     * @var string
     */
    protected orderId: string;

    /**
     * @var string
     */
    protected refId: string;

    /**
     * Paytm\pg\request\RefundBaseRequest constructor.
     */
    public constructor() {
        super();
    }

    /**
     * @return string
     */
    public getMid(): string {
        return this.mid;
    }

    /**
     * @param string mid
     * @return void
     */
    public setMid(mid: string): void {
        this.mid = mid;
    }

    /**
     * @return string
     */
    public getOrderId(): string {
        return this.orderId;
    }

    /**
     * @param string orderId
     * @return void
     */
    public setOrderId(orderId: string): void {
        this.orderId = orderId;
    }

    /**
     * @return string
     */
    public getRefId(): string {
        return this.refId;
    }

    /**
     * @param string refId
     * @return void
     */
    public setRefId(refId: string): void {
        this.refId = refId;
    }

    public toJSON() {
        return {
            'mid': this.getMid(),
            'orderId': this.getOrderId(),
            'refId': this.getRefId(),
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}