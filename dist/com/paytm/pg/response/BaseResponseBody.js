"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ExtraParameterMap = require("../request/ExtraParameterMap");
const _ResultInfo = require("../response/ResultInfo");
/* class: BaseResponseBody */
class BaseResponseBody extends _ExtraParameterMap.ExtraParameterMap {
    /**
     * Paytm\pg\response\BaseResponseBody constructor.
     */
    constructor() {
        super();
        this.resultInfo = new _ResultInfo.ResultInfo();
    }
    /**
     * @return ResultInfo
     */
    getResultInfo() {
        return this.resultInfo;
    }
    /**
     * @param ResultInfo resultInfo
     * @return void
     */
    setResultInfo(resultInfo) {
        this.resultInfo = resultInfo;
    }
    toJSON() {
        return {
            'resultInfo': this.getResultInfo(),
            'extraParamsMap': this.getExtraParamsMap(),
        };
    }
}
exports.BaseResponseBody = BaseResponseBody;
