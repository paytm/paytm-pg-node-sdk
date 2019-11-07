/**
  * Copyright (C) 2019 Paytm.
  */
export declare class EncDecUtil {
    /**
     * @var string
     */
    private static readonly IV;
    /**
     * @param data string
     * @param key string
     * @return string
     */
    private static encrypt;
    /**
     * @param data string
     * @param key string
     * @return string
     */
    private static decrypt;
    /**
     * @param len number
     * @return Promise
     */
    private static generateRandomString;
    /**
     * @param data string
     * @param key string
     * @return Promise
     */
    static generateSignature(data: string, key: string): Promise<any>;
    /**
     * @param string params
     * @param string key
     * @param string checksumhash
     * @return boolean
     */
    static verifySignature(params: string, key: string, checksumhash: string): boolean;
}
