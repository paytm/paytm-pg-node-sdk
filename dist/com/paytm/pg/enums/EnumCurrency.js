"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Enum represents the total list of currencies supported by the system
 *
 */
/* class: EnumCurrency  */
class EnumCurrency {
    /**
     * EnumCurrency constructor.
     * @param string currency
     */
    constructor(currency) {
        this.currency = currency;
    }
    /**
    * @return string
    */
    getCurrency() {
        return this.currency;
    }
    /**
     * @return array
     */
    static getEnumCurrencyOptions() {
        return [
            EnumCurrency.INR,
        ];
    }
    /**
    * @param currency
    * @return int
    * @throws Exception
    */
    static getEnumByCurrency(currency) {
        var enumOptions = this.getEnumCurrencyOptions();
        for (var x in enumOptions) {
            if (currency == enumOptions[x]) {
                return x;
            }
        }
        throw new Error("FacadeInvalidParameterException : Given value of Currency is not supported");
    }
}
EnumCurrency.INR = "INR";
exports.EnumCurrency = EnumCurrency;
