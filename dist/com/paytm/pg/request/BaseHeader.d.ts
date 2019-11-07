/**
 * Copyright (C) 2019 Paytm.
 */
export declare class BaseHeader {
    /**
     * @var string
     */
    version: string;
    /**
     * @var EChannelId
     */
    channelId: string;
    /**
     * @return string
     */
    getVersion(): string;
    /**
     * @param string version
     * @return void
     */
    setVersion(version: string): void;
    /**
     * @return string
     */
    getChannelId(): string;
    /**
     * @param string channelId
     * @return void
     */
    setChannelId(channelId: string): void;
    /**
     * Paytm\pg\request\BaseHeader constructor.
     */
    constructor();
}
