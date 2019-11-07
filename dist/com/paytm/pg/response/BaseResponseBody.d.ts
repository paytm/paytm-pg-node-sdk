/**
 * Copyright (C) 2019 Paytm.
 */
import * as _ExtraParameterMap from "../request/ExtraParameterMap";
export declare class BaseResponseBody extends _ExtraParameterMap.ExtraParameterMap {
    /**
     * @var ResultInfo
     */
    private resultInfo;
    /**
     * Paytm\pg\response\BaseResponseBody constructor.
     */
    constructor();
    /**
     * @return ResultInfo
     */
    getResultInfo(): any;
    /**
     * @param ResultInfo resultInfo
     * @return void
     */
    setResultInfo(resultInfo: any): void;
    toJSON(): {
        'resultInfo': any;
        'extraParamsMap': {};
    };
}
