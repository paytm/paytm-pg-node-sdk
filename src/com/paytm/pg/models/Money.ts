/**
 * Copyright (C) 2019 Paytm.
 */

import * as _EnumCurrency from "../enums/EnumCurrency";

/* class: Money  */
export class Money {
    /**
     * @var EnumCurrency
     */
    private currency: string;

    /**
     * @var string
     */
    private value: string;

    /**
     * Money constructor.
     */
    public constructor() {
    }

    /**
     * @param string value
     * @return Money
     */
    public static constructWithValue(value: string): Money {
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
    public static constructWithCurrencyAndValue(currency: string, value: string) {
        var instance = new this;
        instance.currency = currency;
        instance.value = value;
        return instance;
    }

    /**
     * @return EnumCurrency
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * @param EnumCurrency currency
     * @return void
     */
    public setCurrency(currency: string): void {
        this.currency = currency;
    }

    /**
     * @return string
     */
    public getValue(): string {
        return this.value;
    }

    /**
     * @param string value
     * @return void
     */
    public setValue(value: string): void {
        this.value = value;
    }
}