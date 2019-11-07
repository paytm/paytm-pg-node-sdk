"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2019 Paytm.
 */
const _ResponseHeader = require("../response/ResponseHeader");
/* class: SecureResponseHeader */
class SecureResponseHeader extends _ResponseHeader.ResponseHeader {
    /**
     * Paytm\pg\response\SecureResponseHeader constructor.
     */
    constructor() {
        super();
    }
    /**
     * @return string
     */
    getClientId() {
        return this.clientId;
    }
    /**
     * @param string clientId
     * @return void
     */
    setClientId(clientId) {
        this.clientId = clientId;
    }
    /**
     * @return string
     */
    getSignature() {
        return this.signature;
    }
    /**
     * @param string signature
     * @return void
     */
    setSignature(signature) {
        this.signature = signature;
    }
    toJSON() {
        return {
            'clientId': this.getClientId(),
            'signature': this.getSignature(),
            'responseTimestamp': this.getResponseTimestamp(),
            'version': this.getVersion()
        };
    }
}
exports.SecureResponseHeader = SecureResponseHeader;
