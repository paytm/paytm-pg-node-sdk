"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is used to store all the merchant related constants
 *  that are common to all payments and orders
 */
const _LibraryConstants = require("../constants/LibraryConstants");
const _LoggingUtil = require("../utils/LoggingUtil");
const _CommonUtil = require("../utils/CommonUtil");
const _SDKException = require("../exceptions/SDKException");
/* class: MerchantProperties */
class MerchantProperties {
    /**
     * @param string environment
     * @param string mid
     * @param string merchantKey
     * @param string website
     * @throws Exception
     */
    static initialize(environment, mid, merchantKey, website) {
        if (!MerchantProperties.isInitialized) {
            _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "MerchantProperties", "initialize called");
            if (_CommonUtil.CommonUtil.isEmptyOrNull(environment))
                throw new _SDKException.SDKException("Environment can not be null or empty");
            else if (_CommonUtil.CommonUtil.isEmptyOrNull(mid))
                throw new _SDKException.SDKException("Mid can not be null or empty");
            else if (_CommonUtil.CommonUtil.isEmptyOrNull(merchantKey))
                throw new _SDKException.SDKException("Merchant key can not be null or empty");
            else if (_CommonUtil.CommonUtil.isEmptyOrNull(website))
                throw new _SDKException.SDKException("Website can not be null or empty");
            else {
                MerchantProperties.isInitialized = true;
                MerchantProperties.setEnvironment(environment);
                MerchantProperties.setMid(mid);
                MerchantProperties.setMerchantKey(merchantKey);
                MerchantProperties.setWebsite(website);
            }
        }
    }
    /**
     * @return string
     */
    static getEnvironment() {
        return MerchantProperties.environment;
    }
    /**
     * @return string
     */
    static getMid() {
        return MerchantProperties.mid;
    }
    /**
     * @return string
     */
    static getMerchantKey() {
        return MerchantProperties.merchantKey;
    }
    /**
     * @return string
     */
    static getWebsite() {
        return MerchantProperties.website;
    }
    /**
     * @return string
     */
    static getClientId() {
        return MerchantProperties.clientId;
    }
    /**
     * @return string
     */
    static getCallbackUrl() {
        return MerchantProperties.callbackUrl;
    }
    /**
     * @return string
     */
    static getInitiateTxnUrl() {
        return MerchantProperties.initiateTxnUrl;
    }
    /**
     * @return string
     */
    static getRefundUrl() {
        return MerchantProperties.refundUrl;
    }
    /**
     * @return string
     */
    static getRefundStatusUrl() {
        return MerchantProperties.refundStatusUrl;
    }
    /**
     * @return string
     */
    static getPaymentStatusUrl() {
        return MerchantProperties.paymentStatusUrl;
    }
    /**
     * @return int
     */
    static getConnectionTimeout() {
        return MerchantProperties.connectTimeout;
    }
    /**
     * @param int connectionTimeout
     * @return void
     */
    static setConnectionTimeout(connectionTimeout) {
        MerchantProperties.connectTimeout = connectionTimeout;
    }
    /**
     * @param string mid
     */
    static setMid(mid) {
        MerchantProperties.mid = mid;
    }
    /**
     * @param string merchantKey
     * @return void
     */
    static setMerchantKey(merchantKey) {
        MerchantProperties.merchantKey = merchantKey;
    }
    /**
     * @param string website
     * @return void
     */
    static setWebsite(website) {
        MerchantProperties.website = website;
    }
    /**
     * @param string clientId
     * @return void
     */
    static setClientId(clientId) {
        MerchantProperties.clientId = clientId;
    }
    /**
     * @param string callbackUrl
     * @return void
     */
    static setCallbackUrl(callbackUrl) {
        MerchantProperties.callbackUrl = callbackUrl;
    }
    /**
     * @param string environment
     * @return void
     * @throws Exception
     */
    static setEnvironment(environment) {
        MerchantProperties.environment = environment;
        _LoggingUtil.LoggingUtil.addLog(_LoggingUtil.LoggingUtil.LogLevel.INFO, "MerchantProperties", "Setting Environment for " + environment);
        if (environment === _LibraryConstants.LibraryConstants.PRODUCTION_ENVIRONMENT) {
            MerchantProperties.initiateTxnUrl = "https://securegw.paytm.in/theia/api/v1/initiateTransaction";
            MerchantProperties.refundUrl = "https://securegw.paytm.in/refund/api/v1/async/refund";
            MerchantProperties.paymentStatusUrl = "https://securegw.paytm.in/merchant-status/api/v1/getPaymentStatus";
            MerchantProperties.refundStatusUrl = "https://pgp-ite.paytm.in/refund/api/v1/refundStatus";
        }
    }
}
/**
 * @var bool
 */
MerchantProperties.isInitialized = false;
// TEST for Testing and PROD for Production.
/**
 * @var string
 * ENVIRONMENT is used to set URLs(TESTING or PRODUCTION)
 */
MerchantProperties.environment = _LibraryConstants.LibraryConstants.STAGING_ENVIRONMENT;
/**
 * @var int
 * timeout constants
 */
MerchantProperties.connectTimeout = 30000; // 30 * 1000
/**
 * @var int
 * timeout constants
 */
MerchantProperties.readTimeout = 80000; // 80 * 1000
/**
 * @var string
 */
MerchantProperties.website = "WEBSTAGING";
/**
 * @var string callbackUrl callback url on which paytm will respond for api calls
 */
MerchantProperties.callbackUrl = "https://pg-staging.paytm.in/MerchantSite/bankResponse";
/** URLs */
/**
 * @var string
 */
MerchantProperties.initiateTxnUrl = "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction";
/**
 * @var string
 */
MerchantProperties.refundUrl = "https://securegw-stage.paytm.in/refund/api/v1/async/refund";
/**
 * @var string
 */
MerchantProperties.paymentStatusUrl = "https://securegw-stage.paytm.in/merchant-status/api/v1/getPaymentStatus";
/**
 * @var string
 */
MerchantProperties.refundStatusUrl = "https://securegw-stage.paytm.in/refund/api/v1/refundStatus";
exports.MerchantProperties = MerchantProperties;
