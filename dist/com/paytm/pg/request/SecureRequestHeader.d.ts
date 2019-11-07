/**
 * Copyright (C) 2019 Paytm.
 */
import * as _RequestHeader from "../request/RequestHeader";
export declare class SecureRequestHeader extends _RequestHeader.RequestHeader {
    /**
     * @var string
     */
    private clientId;
    /**
     * @var string
     */
    private signature;
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
    setSignature(signature: string | null): void;
    /**
     * Paytm\pg\request\SecureRequestHeader constructor.
     */
    constructor();
    /**
     * @param string clientId
     * @param string workFlow
     * @param string channelId
     * @return SecureRequestHeader
     */
    getSecureRequestHeader(clientId: string, workFlow: string, channelId: string): SecureRequestHeader;
    toJSON(): {
        'version': string;
        'channelId': string;
        'requestTimestamp': string;
        'workFlow': string;
        'clientId': string;
        'signature': string;
    };
}
