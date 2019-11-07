"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: GoodsInfo  */
class GoodsInfo {
    /**
     * GoodsInfo constructor.
     */
    constructor() {
    }
    /**
     * @return string
     */
    getMerchantGoodsId() {
        return this.merchantGoodsId;
    }
    /**
     * @param string merchantGoodsId
     * @return void
     */
    setMerchantGoodsId(merchantGoodsId) {
        this.merchantGoodsId = merchantGoodsId;
    }
    /**
     * @return string
     */
    getMerchantShippingId() {
        return this.merchantShippingId;
    }
    /**
     * @param string merchantShippingId
     * @return void
     */
    setMerchantShippingId(merchantShippingId) {
        this.merchantShippingId = merchantShippingId;
    }
    /**
     * @return string
     */
    getSnapshotUrl() {
        return this.snapshotUrl;
    }
    /**
     * @param string snapshotUrl
     * @return void
     */
    setSnapshotUrl(snapshotUrl) {
        this.snapshotUrl = snapshotUrl;
    }
    /**
     * @return string
     */
    getDescription() {
        return this.description;
    }
    /**
     * @param string description
     * @return void
     */
    setDescription(description) {
        this.description = description;
    }
    /**
     * @return string
     */
    getCategory() {
        return this.category;
    }
    /**
     * @param string category
     * @return void
     */
    setCategory(category) {
        this.category = category;
    }
    /**
     * @return string
     */
    getQuantity() {
        return this.quantity;
    }
    /**
     * @param string quantity
     * @return void
     */
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    /**
     * @return string
     */
    getUnit() {
        return this.unit;
    }
    /**
     * @param string unit
     * @return void
     */
    setUnit(unit) {
        this.unit = unit;
    }
    /**
     * @return Money
     */
    getPrice() {
        return this.price;
    }
    /**
     * @param Money price
     * @return void
     */
    setPrice(price) {
        this.price = price;
    }
    /**
     * @return ExtendInfo
     */
    getExtendInfo() {
        return this.extendInfo;
    }
    /**
     * @param ExtendInfo extendInfo
     * @return void
     */
    setExtendInfo(extendInfo) {
        this.extendInfo = extendInfo;
    }
}
exports.GoodsInfo = GoodsInfo;
