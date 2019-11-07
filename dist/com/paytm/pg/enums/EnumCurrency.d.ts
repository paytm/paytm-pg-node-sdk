/**
 * Copyright (C) 2019 Paytm.
 */
/**
 * This Enum represents the total list of currencies supported by the system
 *
 */
export declare class EnumCurrency {
    static readonly INR: string;
    /**
    * @var string
    */
    currency: string;
    /**
    * @return string
    */
    getCurrency(): string;
    /**
     * EnumCurrency constructor.
     * @param string currency
     */
    constructor(currency: string);
    /**
     * @return array
     */
    static getEnumCurrencyOptions(): Array<string>;
    /**
    * @param currency
    * @return int
    * @throws Exception
    */
    static getEnumByCurrency(currency: string): string;
}
