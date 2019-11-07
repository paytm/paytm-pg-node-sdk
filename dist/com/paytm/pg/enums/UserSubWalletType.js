"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: UserSubWalletType  */
class UserSubWalletType {
    /**
     * UserSubWalletType constructor.
     * @param string code
     * @param string type
     */
    constructor(code, type) {
        this.code = code;
        this.type = type;
    }
    /**
     * @return string
     */
    getCode() {
        return this.code;
    }
    /**
     * @param string code
     * @return void
     */
    setCode(code) {
        this.code = code;
    }
    /**
     * @return string
     */
    getType() {
        return this.type;
    }
    /**
     * @param string type
     */
    setType(type) {
        this.type = type;
    }
}
UserSubWalletType.FOOD = "FOOD";
UserSubWalletType.GIFT = "GIFT";
UserSubWalletType.MULTI_PURPOSE_GIFT = "MULTI_PURPOSE_GIFT";
UserSubWalletType.TOLL = "TOLL";
UserSubWalletType.CLOSED_LOOP_WALLET = "CLOSED_LOOP_WALLET";
UserSubWalletType.CLOSED_LOOP_SUB_WALLET = "CLOSED_LOOP_SUB_WALLET";
UserSubWalletType.FUEL = "FUEL";
UserSubWalletType.INTERNATIONAL_FUNDS_TRANSFER = "INTERNATIONAL_FUNDS_TRANSFER";
UserSubWalletType.CASHBACK = "CASHBACK";
UserSubWalletType.GIFT_VOUCHER = "GIFT_VOUCHER";
UserSubWalletType.COMMUNICATION = "COMMUNICATION";
exports.UserSubWalletType = UserSubWalletType;
