"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: ResultInfo */
class ResultInfo {
    /**
     * Paytm\pg\response\ResultInfo constructor.
     */
    constructor() {
    }
    /**
     * @return string
     */
    getResultStatus() {
        return this.resultStatus;
    }
    /**
     * @param string resultStatus
     * @return void
     */
    setResultStatus(resultStatus) {
        this.resultStatus = resultStatus;
    }
    /**
     * @return string
     */
    getResultCode() {
        return this.resultCode;
    }
    /**
     * @param string resultCode
     * @return void
     */
    setResultCode(resultCode) {
        this.resultCode = resultCode;
    }
    /**
     * @return string
     */
    getResultMsg() {
        return this.resultMsg;
    }
    /**
     * @param string resultMsg
     * @return void
     */
    setResultMsg(resultMsg) {
        this.resultMsg = resultMsg;
    }
    /**
     * @return bool
     */
    isRedirect() {
        return this.is_redirect;
    }
    /**
     * @param bool isRedirect
     * @return void
     */
    setRedirect(is_redirect) {
        this.is_redirect = is_redirect;
    }
    toJSON() {
        return {
            'resultStatus': this.getResultStatus(),
            'resultMsg': this.getResultMsg(),
            'resultCode': this.getResultCode(),
            'isRedirect': this.isRedirect()
        };
    }
}
exports.ResultInfo = ResultInfo;
