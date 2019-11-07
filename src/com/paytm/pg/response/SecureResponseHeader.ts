/**
 * Copyright (C) 2019 Paytm.
 */
import * as _ResponseHeader from "../response/ResponseHeader";

/* class: SecureResponseHeader */
export class SecureResponseHeader extends _ResponseHeader.ResponseHeader {

    /**
     * @var string
     */
    public clientId: string;

    /**
     * @var string
     */
    public signature: string;

    /**
     * Paytm\pg\response\SecureResponseHeader constructor.
     */
    public constructor() {
        super();
    }

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
    public setSignature(signature: string): void {
        this.signature = signature;
    }

    public toJSON() {
        return {
            'clientId': this.getClientId(),
            'signature': this.getSignature(),
            'responseTimestamp': this.getResponseTimestamp(),
            'version': this.getVersion()
        };
    }
}