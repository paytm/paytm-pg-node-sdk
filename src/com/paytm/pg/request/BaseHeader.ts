/**
 * Copyright (C) 2019 Paytm.
 */

/* class: BaseHeader */
export class BaseHeader {

    /**
     * @var string
     */
    public version: string;

    /**
     * @var EChannelId
     */
    public channelId: string;

    /**
     * @return string
     */
    public getVersion(): string {
        return this.version;
    }

    /**
     * @param string version
     * @return void
     */
    public setVersion(version: string): void {
        this.version = version;
    }

    /**
     * @return string
     */
    public getChannelId(): string {
        return this.channelId;
    }

    /**
     * @param string channelId
     * @return void
     */
    public setChannelId(channelId: string): void {
        this.channelId = channelId;
    }

    /**
     * Paytm\pg\request\BaseHeader constructor.
     */
    public constructor() {
    }
}