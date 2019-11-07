/**
 * Copyright (C) 2019 Paytm.
 */
export declare class EChannelId {
    static readonly APP: string;
    static readonly WEB: string;
    static readonly WAP: string;
    static readonly SYSTEM: string;
    /**
     * @var string
     */
    private value;
    /**
     * EChannelId constructor.
     */
    constructor();
    /**
     * @param string value
     * @return void
     */
    setValue(value: string): void;
    /**
     * @return string
     */
    getValue(): string;
    /**
     * @return array
     */
    static getEChannelIdOptions(): Array<string>;
    /**
     * @param string value
     * @return int
     * @throws Exception
     */
    static getEChannelIdByValue(value: string): number;
}
