/**
 * Copyright (C) 2019 Paytm.
 */
import * as _SecureRequestHeader from "../request/SecureRequestHeader";
import * as _SDKResponse from "../../merchant/models/SDKResponse";
/**
 * This class handles all the calls from TransactionalHandler.java and
 * create request objects and make call to the respective controller
 *
 * This class receive the Paytm response objects and translate the to their
 * respective merchant response objects and returns call to Merchant Application
 */
export declare class CommonUtil {
    /**
     * @param Exception e
     * @param InitiateTransactionResponse|NativePaymentStatusResponse|AsyncRefundResponse|NativeRefundStatusResponse obj
     * @return SDKResponse
     * @throws Exception
     */
    static getSDKResponse(e: any, obj: any): _SDKResponse.SDKResponse;
    /**
     * @param string clientId
     * @param string workFlow
     * @param string channelId
     * @return SecureRequestHeader returns the SecureRequestHeader object
     * @throws Exception
     */
    static getSecureRequestHeader(clientId: string, workFlow: string, channelId: string): _SecureRequestHeader.SecureRequestHeader;
    /**
     * @param string param
     * @return bool
     */
    static isEmptyOrNull(param: string): boolean;
    /**
     * @param item
     * @return {boolean}
     */
    private static isObject;
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    static mergeDeep(target: any, ...sources: Array<any>): object;
    /**
    * @return string
    */
    static getUniqueRequestId(): string;
}
