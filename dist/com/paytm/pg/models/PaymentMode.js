"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: PaymentMode  */
class PaymentMode {
    /**
     * PaymentMode constructor.
     */
    constructor() {
        /**
         * @var array
         */
        this.channels = [];
    }
    /**
     * @return string
     */
    getMode() {
        return this.mode;
    }
    /**
     * @param string mode
     * @return void
     */
    setMode(mode) {
        this.mode = mode;
    }
    /**
     * @return array
     */
    getChannels() {
        return this.channels;
    }
    /**
     * @param array channels
     * @return void
     */
    setChannels(channels) {
        this.channels = channels;
    }
}
exports.PaymentMode = PaymentMode;
