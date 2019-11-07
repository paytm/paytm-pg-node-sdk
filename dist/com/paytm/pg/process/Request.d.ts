/**
 * Copyright (C) 2019 Paytm.
 */
import * as _SDKResponse from "../../merchant/models/SDKResponse";
export declare class Request {
    /**
     * @param object request
     * @param string url
     * @param string responseClassName
     * @param int readTimeout
     * @param int connTimeout
     * @return SDKResponse
     * @throws Exception
     */
    static process(request: object, url: string, responseClassName: string, readTimeout: number, connTimeout: number): Promise<_SDKResponse.SDKResponse>;
    /**
     * @param string apiURL
     * @param strin requestParams
     * @throws Exception
     */
    private static executeCurl;
    /**
     * @param responseObj
     * @param responseClassName
     * @param resultStatus
     * @param rawJsonResponse
     * @param signature
     * @return void
     * @throws Exception
     */
    private static validateResponseSignature;
}
