"use strict";
/**
  * Copyright (C) 2019 Paytm.
  */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const _LoggingUtil = require("../utils/LoggingUtil");
/* class: EncDecUtil */
class EncDecUtil {
    /**
     * @param data string
     * @param key string
     * @return string
     */
    static encrypt(data, key) {
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
    static decrypt(data, key) {
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
        }
        catch (e) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", e);
        }
        return decrypted;
    }
    /**
     * @param len number
     * @return Promise
     */
    static generateRandomString(len) {
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "generateRandomString() called");
        return new Promise(function (resolve, reject) {
            crypto.randomBytes((len * 3.0) / 4.0, function (err, buf) {
                if (!err) {
                    var salt = buf.toString("base64");
                    _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "generateSalt returns: " + salt);
                    resolve(salt);
                }
                else {
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
    static generateSignature(data, key) {
        return __awaiter(this, void 0, void 0, function* () {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "generateSignature() called");
            const salt = yield EncDecUtil.generateRandomString(4);
            var sha256 = crypto.createHash('sha256')
                .update(data + '|' + salt)
                .digest('hex');
            var final_str = sha256 + salt;
            var checksum = EncDecUtil.encrypt(final_str, key);
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "EncDecUtil", "getChecksumFromString returns: " + checksum);
            return checksum;
        });
    }
    /**
     * @param string params
     * @param string key
     * @param string checksumhash
     * @return boolean
     */
    static verifySignature(params, key, checksumhash) {
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
/**
 * @var string
 */
EncDecUtil.IV = '@@@@&&&&####$$$$';
exports.EncDecUtil = EncDecUtil;
