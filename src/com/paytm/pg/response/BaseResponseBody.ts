/**
 * Copyright (C) 2019 Paytm.
 */

import * as _ExtraParameterMap from "../request/ExtraParameterMap";
import * as _ResultInfo from "../response/ResultInfo";

/* class: BaseResponseBody */
export class BaseResponseBody extends _ExtraParameterMap.ExtraParameterMap {

    /**
     * @var ResultInfo
     */
    private resultInfo;

    /**
     * Paytm\pg\response\BaseResponseBody constructor.
     */
    public constructor() {
        super();
        this.resultInfo = new _ResultInfo.ResultInfo();
    }

    /**
     * @return ResultInfo
     */
    public getResultInfo() {
        return this.resultInfo;
    }

    /**
     * @param ResultInfo resultInfo
     * @return void
     */
    public setResultInfo(resultInfo): void {
        this.resultInfo = resultInfo;
    }

    public toJSON() {
        return {
            'resultInfo': this.getResultInfo(),
            'extraParamsMap': this.getExtraParamsMap(),
        };
    }
}