"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _LibraryConstants = require("../constants/LibraryConstants");
const _RequestHeader = require("../request/RequestHeader");
/* class: SecureRequestHeader */
class SecureRequestHeader extends _RequestHeader.RequestHeader {
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
    /**
     * Paytm\pg\request\SecureRequestHeader constructor.
     */
    constructor() {
        super();
    }
    /**
     * @param string clientId
     * @param string workFlow
     * @param string channelId
     * @return SecureRequestHeader
     */
    getSecureRequestHeader(clientId, workFlow, channelId) {
        var secureRequestHeader = new SecureRequestHeader();
        secureRequestHeader.setVersion(_LibraryConstants.LibraryConstants.VERSION);
        secureRequestHeader.setChannelId(channelId);
        secureRequestHeader.setRequestTimestamp(new Date().getTime().toString());
        secureRequestHeader.setWorkFlow(workFlow);
        secureRequestHeader.setClientId(clientId);
        return secureRequestHeader;
    }
    toJSON() {
        return {
            'version': this.getVersion(),
            'channelId': this.getChannelId(),
            'requestTimestamp': this.getRequestTimestamp(),
            'workFlow': this.getWorkFlow(),
            'clientId': this.getClientId(),
            'signature': this.getSignature()
        };
    }
}
exports.SecureRequestHeader = SecureRequestHeader;
