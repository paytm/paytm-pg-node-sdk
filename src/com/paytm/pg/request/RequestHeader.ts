/**
 * Copyright (C) 2019 Paytm.
 */

import * as _BaseHeader from "../request/BaseHeader";

/* class: RequestHeader */
export class RequestHeader extends _BaseHeader.BaseHeader {

    /**
     * @var string
     */
    public requestTimestamp: string;

    /**
     * @var string
     */
    private workFlow: string;

    /**
     * @return string
     */
    public getRequestTimestamp(): string {
        return this.requestTimestamp;
    }

    /**
     * @param string requestTimestamp
     * @return void
     */
    public setRequestTimestamp(requestTimestamp: string): void {
        this.requestTimestamp = requestTimestamp;
    }

    /**
     * @return string
     */
    public getWorkFlow(): string {
        return this.workFlow;
    }

    /**
     * @param string workFlow
     * @return void
     */
    public setWorkFlow(workFlow: string): void {
        this.workFlow = workFlow;
    }

    /**
     * Paytm\pg\request\RequestHeader constructor.
     */
    public constructor() {
        super();
    }

    public toJSON() {
        return {
            'version': this.getVersion(),
            'channelId': this.getChannelId(),
            'requestTimestamp': this.getRequestTimestamp(),
            'workFlow': this.getWorkFlow()
        };
    }
}