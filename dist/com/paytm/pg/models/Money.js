"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _EnumCurrency = require("../enums/EnumCurrency");
/* class: Money  */
class Money {
    /**
     * Money constructor.
     */
    constructor() {
    }
    /**
     * @param string value
     * @return Money
     */
    static constructWithValue(value) {
        var instance = new this;
        instance.currency = _EnumCurrency.EnumCurrency.INR;
        instance.value = value;
        return instance;
    }
    /**
     * @param string (EnumCurrency) currency
     * @param string value
     * @return Money
     */
    static constructWithCurrencyAndValue(currency, value) {
        var instance = new this;
        instance.currency = currency;
        instance.value = value;
        return instance;
    }
    /**
     * @return EnumCurrency
     */
    getCurrency() {
        return this.currency;
    }
    /**
     * @param EnumCurrency currency
     * @return void
     */
    setCurrency(currency) {
        this.currency = currency;
    }
    /**
     * @return string
     */
    getValue() {
        return this.value;
    }
    /**
     * @param string value
     * @return void
     */
    setValue(value) {
        this.value = value;
    }
}
exports.Money = Money;
