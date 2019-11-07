/**
 * Copyright (C) 2019 Paytm.
 */

/* class: PaymentMode  */
export class PaymentMode {
    /**
     * @var string
     */
    private mode: string;

    /**
     * @var array
     */
    private channels: Array<string> = [];

    /**
     * PaymentMode constructor.
     */
    public constructor() {
    }

    /**
     * @return string
     */
    public getMode(): string {
        return this.mode;
    }

    /**
     * @param string mode
     * @return void
     */
    public setMode(mode: string): void {
        this.mode = mode;
    }

    /**
     * @return array
     */
    public getChannels(): Array<string> {
        return this.channels;
    }

    /**
     * @param array channels
     * @return void
     */
    public setChannels(channels: Array<string>): void {
        this.channels = channels;
    }
}