/**
 * Copyright (C) 2019 Paytm.
 */

/* class: ResponseHeader */
export class ResponseHeader {

    /**
     * @var string
     */
    public responseTimestamp: string;

    /**
     * @var string
     */
    public version: string;

    /**
     * Paytm\pg\response\ResponseHeader constructor.
     */
    public constructor() {
        this.responseTimestamp = new Date().getTime().toString();
        this.version = "v2";
    }

    /**
     * @return string
     */
    public getResponseTimestamp(): string {
        return this.responseTimestamp;
    }

    /**
     * @param string responseTimestamp
     * @return void
     */
    public setResponseTimestamp(responseTimestamp: string): void {
        this.responseTimestamp = responseTimestamp;
    }

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

    public toJSON() {
        return {
            'responseTimestamp': this.getResponseTimestamp(),
            'version': this.getVersion()
        };
    }
}