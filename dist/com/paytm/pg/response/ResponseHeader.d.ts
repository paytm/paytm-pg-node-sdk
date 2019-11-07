/**
 * Copyright (C) 2019 Paytm.
 */
export declare class ResponseHeader {
    /**
     * @var string
     */
    responseTimestamp: string;
    /**
     * @var string
     */
    version: string;
    /**
     * Paytm\pg\response\ResponseHeader constructor.
     */
    constructor();
    /**
     * @return string
     */
    getResponseTimestamp(): string;
    /**
     * @param string responseTimestamp
     * @return void
     */
    setResponseTimestamp(responseTimestamp: string): void;
    /**
     * @return string
     */
    getVersion(): string;
    /**
     * @param string version
     * @return void
     */
    setVersion(version: string): void;
    toJSON(): {
        'responseTimestamp': string;
        'version': string;
    };
}
