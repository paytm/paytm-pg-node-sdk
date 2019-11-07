/**
 * Copyright (C) 2019 Paytm.
 */
export declare class ResultInfo {
    /**
     * @var string
     */
    resultStatus: string;
    /**
     * @var string
     */
    resultCode: string;
    /**
     * @var string
     */
    resultMsg: string;
    /**
     * @var bool
     */
    is_redirect: boolean;
    /**
     * Paytm\pg\response\ResultInfo constructor.
     */
    constructor();
    /**
     * @return string
     */
    getResultStatus(): string;
    /**
     * @param string resultStatus
     * @return void
     */
    setResultStatus(resultStatus: string): void;
    /**
     * @return string
     */
    getResultCode(): string;
    /**
     * @param string resultCode
     * @return void
     */
    setResultCode(resultCode: string): void;
    /**
     * @return string
     */
    getResultMsg(): string;
    /**
     * @param string resultMsg
     * @return void
     */
    setResultMsg(resultMsg: string): void;
    /**
     * @return bool
     */
    isRedirect(): boolean;
    /**
     * @param bool isRedirect
     * @return void
     */
    setRedirect(is_redirect: boolean): void;
    toJSON(): {
        'resultStatus': string;
        'resultMsg': string;
        'resultCode': string;
        'isRedirect': boolean;
    };
}
