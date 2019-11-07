/**
 * Copyright (C) 2019 Paytm.
 */

import * as _LibraryConstants from "../constants/LibraryConstants";
import * as _RequestHeader from "../request/RequestHeader";

/* class: SecureRequestHeader */
export class SecureRequestHeader extends _RequestHeader.RequestHeader {
    /**
     * @var string
     */
    private clientId: string;

    /**
     * @var string
     */
    private signature: string | null;

    /**
     * @return string
     */
    public getClientId(): string {
        return this.clientId;
    }

    /**
     * @param string clientId
     * @return void
     */
    public setClientId(clientId: string): void {
        this.clientId = clientId;
    }

    /**
     * @return string
     */
    public getSignature(): string {
        return this.signature;
    }

    /**
     * @param string signature
     * @return void
     */
    public setSignature(signature: string | null): void {
        this.signature = signature;
    }

    /**
     * Paytm\pg\request\SecureRequestHeader constructor.
     */
    public constructor() {
        super();
    }

    /**
     * @param string clientId
     * @param string workFlow
     * @param string channelId
     * @return SecureRequestHeader
     */
    public getSecureRequestHeader(clientId: string, workFlow: string, channelId: string) {
        var secureRequestHeader = new SecureRequestHeader();
        secureRequestHeader.setVersion(_LibraryConstants.LibraryConstants.VERSION);
        secureRequestHeader.setChannelId(channelId);
        secureRequestHeader.setRequestTimestamp(new Date().getTime().toString());
        secureRequestHeader.setWorkFlow(workFlow);
        secureRequestHeader.setClientId(clientId);
        return secureRequestHeader;
    }

    public toJSON() {
        return {
            'version': this.getVersion(),
            'channelId': this.getChannelId(),
            'requestTimestamp': this.getRequestTimestamp(),
            'workFlow': this.getWorkFlow(),
            'clientId': this.getClientId(),
            'signature': this.getSignature()
        };
    }
}