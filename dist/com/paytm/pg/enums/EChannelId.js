"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: EChannelId  */
class EChannelId {
    /**
     * EChannelId constructor.
     */
    constructor() {
    }
    /**
     * @param string value
     * @return void
     */
    setValue(value) {
        this.value = value;
    }
    /**
     * @return string
     */
    getValue() {
        return this.value;
    }
    /**
     * @return array
     */
    static getEChannelIdOptions() {
        return [
            EChannelId.APP,
            EChannelId.WEB,
            EChannelId.WAP,
            EChannelId.SYSTEM
        ];
    }
    /**
     * @param string value
     * @return int
     * @throws Exception
     */
    static getEChannelIdByValue(value) {
        var EChannelIdOptions = EChannelId.getEChannelIdOptions();
        for (var x = 0; x < EChannelIdOptions.length - 1; x++) {
            if (value == EChannelIdOptions[x]) {
                return x;
            }
        }
        throw new Error("Given value of Currency is not supported");
    }
}
EChannelId.APP = "APP";
EChannelId.WEB = "WEB";
EChannelId.WAP = "WAP";
EChannelId.SYSTEM = "SYSTEM";
exports.EChannelId = EChannelId;
