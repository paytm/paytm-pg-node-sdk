"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _BaseHeader = require("../request/BaseHeader");
/* class: RequestHeader */
class RequestHeader extends _BaseHeader.BaseHeader {
    /**
     * @return string
     */
    getRequestTimestamp() {
        return this.requestTimestamp;
    }
    /**
     * @param string requestTimestamp
     * @return void
     */
    setRequestTimestamp(requestTimestamp) {
        this.requestTimestamp = requestTimestamp;
    }
    /**
     * @return string
     */
    getWorkFlow() {
        return this.workFlow;
    }
    /**
     * @param string workFlow
     * @return void
     */
    setWorkFlow(workFlow) {
        this.workFlow = workFlow;
    }
    /**
     * Paytm\pg\request\RequestHeader constructor.
     */
    constructor() {
        super();
    }
    toJSON() {
        return {
            'version': this.getVersion(),
            'channelId': this.getChannelId(),
            'requestTimestamp': this.getRequestTimestamp(),
            'workFlow': this.getWorkFlow()
        };
    }
}
exports.RequestHeader = RequestHeader;
