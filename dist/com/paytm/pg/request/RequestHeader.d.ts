/**
 * Copyright (C) 2019 Paytm.
 */
import * as _BaseHeader from "../request/BaseHeader";
export declare class RequestHeader extends _BaseHeader.BaseHeader {
    /**
     * @var string
     */
    requestTimestamp: string;
    /**
     * @var string
     */
    private workFlow;
    /**
     * @return string
     */
    getRequestTimestamp(): string;
    /**
     * @param string requestTimestamp
     * @return void
     */
    setRequestTimestamp(requestTimestamp: string): void;
    /**
     * @return string
     */
    getWorkFlow(): string;
    /**
     * @param string workFlow
     * @return void
     */
    setWorkFlow(workFlow: string): void;
    /**
     * Paytm\pg\request\RequestHeader constructor.
     */
    constructor();
    toJSON(): {
        'version': string;
        'channelId': string;
        'requestTimestamp': string;
        'workFlow': string;
    };
}
