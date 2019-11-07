/**
 * Copyright (C) 2019 Paytm.
 */
export declare class Money {
    /**
     * @var EnumCurrency
     */
    private currency;
    /**
     * @var string
     */
    private value;
    /**
     * Money constructor.
     */
    constructor();
    /**
     * @param string value
     * @return Money
     */
    static constructWithValue(value: string): Money;
    /**
     * @param string (EnumCurrency) currency
     * @param string value
     * @return Money
     */
    static constructWithCurrencyAndValue(currency: string, value: string): Money;
    /**
     * @return EnumCurrency
     */
    getCurrency(): string;
    /**
     * @param EnumCurrency currency
     * @return void
     */
    setCurrency(currency: string): void;
    /**
     * @return string
     */
    getValue(): string;
    /**
     * @param string value
     * @return void
     */
    setValue(value: string): void;
}
