"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHeader = void 0;
/* class: BaseHeader */
class BaseHeader {
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
    /**
     * @return string
     */
    getChannelId() {
        return this.channelId;
    }
    /**
     * @param string channelId
     * @return void
     */
    setChannelId(channelId) {
        this.channelId = channelId;
    }
    /**
     * Paytm\pg\request\BaseHeader constructor.
     */
    constructor() {
    }
}
exports.BaseHeader = BaseHeader;
