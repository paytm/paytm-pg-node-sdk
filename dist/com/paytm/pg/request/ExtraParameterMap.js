"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: ExtraParameterMap */
class ExtraParameterMap {
    /**
     * Paytm\pg\request\ExtraParameterMap constructor.
     */
    constructor() {
        /**
         * @var object
         */
        this.extraParamsMap = {};
    }
    /**
     * @return object
     */
    getExtraParamsMap() {
        return this.extraParamsMap;
    }
    /**
     * @param object extraParamsMap
     * @return void
     */
    setExtraParamsMap(extraParamsMap) {
        this.extraParamsMap = extraParamsMap;
    }
    toJSON() {
        return {
            'extraParamsMap': this.getExtraParamsMap()
        };
    }
}
exports.ExtraParameterMap = ExtraParameterMap;
