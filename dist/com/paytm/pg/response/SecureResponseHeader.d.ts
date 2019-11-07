/**
 * Copyright (C) 2019 Paytm.
 */
import * as _ResponseHeader from "../response/ResponseHeader";
export declare class SecureResponseHeader extends _ResponseHeader.ResponseHeader {
    /**
     * @var string
     */
    clientId: string;
    /**
     * @var string
     */
    signature: string;
    /**
     * Paytm\pg\response\SecureResponseHeader constructor.
     */
    constructor();
    /**
     * @return string
     */
    getClientId(): string;
    /**
     * @param string clientId
     * @return void
     */
    setClientId(clientId: string): void;
    /**
     * @return string
     */
    getSignature(): string;
    /**
     * @param string signature
     * @return void
     */
    setSignature(signature: string): void;
    toJSON(): {
        'clientId': string;
        'signature': string;
        'responseTimestamp': string;
        'version': string;
    };
}
