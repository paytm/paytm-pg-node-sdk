/**
  * Copyright (C) 2019 Paytm.
  */

import * as crypto from 'crypto';
import * as _LoggingUtil from "../utils/LoggingUtil";

/* class: EncDecUtil */
export class EncDecUtil {

    /**
     * @var string
     */
    private static readonly IV: string = '@@@@&&&&####$$$$';

    /**
     * @param data string
     * @param key string
     * @return string
     */
    private static encrypt(data: string, key: string): string {
        var algo = '256';
        switch (key.length) {
            case 16:
                algo = '128';
                break;
            case 24:
                algo = '192';
                break;
            case 32:
                algo = '256';
                break;
        }
        var cipher = crypto.createCipheriv('AES-' + algo + '-CBC', key, EncDecUtil.IV);
        var encrypted = cipher.update(data, 'binary', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }

    /**
     * @param data string
     * @param key string
     * @return string
     */
    private static decrypt(data: string, key: string): string {
        var algo = '256';
        switch (key.length) {
            case 16:
                algo = '128';
                break;
            case 24:
                algo = '192';
                break;
            case 32:
                algo = '256';
                break;
        }
        var decipher = crypto.createDecipheriv('AES-' + algo + '-CBC', key, EncDecUtil.IV);
        var decrypted = decipher.update(data, 'base64', 'binary');
        try {
            decrypted += decipher.final('binary');
        } catch (e) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", e);
        }
        return decrypted;
    }

    /**
     * @param len number
     * @return Promise
     */
    private static generateRandomString(len: number): Promise<any> {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "generateRandomString() called");
        return new Promise(function (resolve, reject) {
            crypto.randomBytes((len * 3.0) / 4.0, function (err, buf) {
                if (!err) {
                    var salt = buf.toString("base64");
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "generateSalt returns: " + salt);
                    resolve(salt);
                } else {
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "error occurred in generateSalt: " + err);
                    reject(err);
                }
            });
        });
    }

    /**
     * @param data string
     * @param key string
     * @return Promise
     */
    public static async generateSignature(data: string, key: string): Promise<any> {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "generateSignature() called");
        const salt = await EncDecUtil.generateRandomString(4);
        var sha256 = crypto.createHash('sha256')
            .update(data + '|' + salt)
            .digest('hex');
        var final_str = sha256 + salt;
        var checksum = EncDecUtil.encrypt(final_str, key);
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "getChecksumFromString returns: " + checksum);
        return checksum;
    }

    /**
     * @param string params
     * @param string key
     * @param string checksumhash
     * @return boolean
     */
    public static verifySignature(params: string, key: string, checksumhash: string): boolean {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "verifyChecksumByString called()");
        if (typeof params !== "string") {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.WARNING, "EncDecUtil", "param is expected to be string, " + (typeof params) + " given.");
            return false;
        }
        var checksum = EncDecUtil.decrypt(checksumhash, key);
        var salt = checksum.substr(checksum.length - 4);
        var sha256 = checksum.substr(0, checksum.length - 4);
        var hash = crypto.createHash('sha256').update(params + '|' + salt).digest('hex');
        var res = (hash === sha256);
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "verifyChecksumByString returns: " + res);
        return res;
    }
}