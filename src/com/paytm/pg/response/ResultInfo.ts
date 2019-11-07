/**
 * Copyright (C) 2019 Paytm.
 */

/* class: ResultInfo */
export class ResultInfo {

    /**
     * @var string
     */
    public resultStatus: string;

    /**
     * @var string
     */
    public resultCode: string;

    /**
     * @var string
     */
    public resultMsg: string;

    /**
     * @var bool
     */
    public is_redirect: boolean;

    /**
     * Paytm\pg\response\ResultInfo constructor.
     */
    public constructor() {
    }

    /**
     * @return string
     */
    public getResultStatus(): string {
        return this.resultStatus;
    }

    /**
     * @param string resultStatus
     * @return void
     */
    public setResultStatus(resultStatus: string): void {
        this.resultStatus = resultStatus;
    }

    /**
     * @return string
     */
    public getResultCode(): string {
        return this.resultCode;
    }

    /**
     * @param string resultCode
     * @return void
     */
    public setResultCode(resultCode: string): void {
        this.resultCode = resultCode;
    }

    /**
     * @return string
     */
    public getResultMsg(): string {
        return this.resultMsg;
    }

    /**
     * @param string resultMsg
     * @return void
     */
    public setResultMsg(resultMsg: string): void {
        this.resultMsg = resultMsg;
    }

    /**
     * @return bool
     */
    public isRedirect(): boolean {
        return this.is_redirect;
    }

    /**
     * @param bool isRedirect
     * @return void
     */
    public setRedirect(is_redirect: boolean): void {
        this.is_redirect = is_redirect;
    }

    public toJSON() {
        return {
            'resultStatus': this.getResultStatus(),
            'resultMsg': this.getResultMsg(),
            'resultCode': this.getResultCode(),
            'isRedirect': this.isRedirect()
        };
    }
}