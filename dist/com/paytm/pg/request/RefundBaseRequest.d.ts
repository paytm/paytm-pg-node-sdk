/**
 * Copyright (C) 2019 Paytm.
 */
import * as _ExtraParameterMap from "../request/ExtraParameterMap";
export declare class RefundBaseRequest extends _ExtraParameterMap.ExtraParameterMap {
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
    constructor();
    /**
     * @return string
     */
    getMid(): string;
    /**
     * @param string mid
     * @return void
     */
    setMid(mid: string): void;
    /**
     * @return string
     */
    getOrderId(): string;
    /**
     * @param string orderId
     * @return void
     */
    setOrderId(orderId: string): void;
    /**
     * @return string
     */
    getRefId(): string;
    /**
     * @param string refId
     * @return void
     */
    setRefId(refId: string): void;
    toJSON(): {
        'mid': string;
        'orderId': string;
        'refId': string;
        'extraParamsMap': {};
    };
}
