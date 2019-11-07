/**
 * Copyright (C) 2019 Paytm.
 */
export declare class PaymentMode {
    /**
     * @var string
     */
    private mode;
    /**
     * @var array
     */
    private channels;
    /**
     * PaymentMode constructor.
     */
    constructor();
    /**
     * @return string
     */
    getMode(): string;
    /**
     * @param string mode
     * @return void
     */
    setMode(mode: string): void;
    /**
     * @return array
     */
    getChannels(): Array<string>;
    /**
     * @param array channels
     * @return void
     */
    setChannels(channels: Array<string>): void;
}
