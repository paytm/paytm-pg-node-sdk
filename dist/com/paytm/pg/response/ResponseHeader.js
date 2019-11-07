"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: ResponseHeader */
class ResponseHeader {
    /**
     * Paytm\pg\response\ResponseHeader constructor.
     */
    constructor() {
        this.responseTimestamp = new Date().getTime().toString();
        this.version = "v2";
    }
    /**
     * @return string
     */
    getResponseTimestamp() {
        return this.responseTimestamp;
    }
    /**
     * @param string responseTimestamp
     * @return void
     */
    setResponseTimestamp(responseTimestamp) {
        this.responseTimestamp = responseTimestamp;
    }
    /**
     * @return string
     */
    getVersion() {
        return this.version;
    }
    /**
     * @param string version
     * @return void
     */
    setVersion(version) {
        this.version = version;
    }
    toJSON() {
        return {
            'responseTimestamp': this.getResponseTimestamp(),
            'version': this.getVersion()
        };
    }
}
exports.ResponseHeader = ResponseHeader;
