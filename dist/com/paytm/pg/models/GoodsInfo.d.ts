/**
 * Copyright (C) 2019 Paytm.
 */
export declare class GoodsInfo {
    /**
     * @var string
     */
    private merchantGoodsId;
    /**
     * @var string
     */
    private merchantShippingId;
    /**
     * @var string
     */
    private snapshotUrl;
    /**
     * @var string
     */
    private description;
    /**
     * @var string
     */
    private category;
    /**
     * @var string
     */
    private quantity;
    /**
     * @var string
     */
    private unit;
    /**
     * @var Money
     */
    private price;
    /**
     * @var ExtendInfo
     */
    private extendInfo;
    /**
     * GoodsInfo constructor.
     */
    constructor();
    /**
     * @return string
     */
    getMerchantGoodsId(): string;
    /**
     * @param string merchantGoodsId
     * @return void
     */
    setMerchantGoodsId(merchantGoodsId: string): void;
    /**
     * @return string
     */
    getMerchantShippingId(): string;
    /**
     * @param string merchantShippingId
     * @return void
     */
    setMerchantShippingId(merchantShippingId: string): void;
    /**
     * @return string
     */
    getSnapshotUrl(): string;
    /**
     * @param string snapshotUrl
     * @return void
     */
    setSnapshotUrl(snapshotUrl: string): void;
    /**
     * @return string
     */
    getDescription(): string;
    /**
     * @param string description
     * @return void
     */
    setDescription(description: string): void;
    /**
     * @return string
     */
    getCategory(): string;
    /**
     * @param string category
     * @return void
     */
    setCategory(category: string): void;
    /**
     * @return string
     */
    getQuantity(): string;
    /**
     * @param string quantity
     * @return void
     */
    setQuantity(quantity: string): void;
    /**
     * @return string
     */
    getUnit(): string;
    /**
     * @param string unit
     * @return void
     */
    setUnit(unit: string): void;
    /**
     * @return Money
     */
    getPrice(): any;
    /**
     * @param Money price
     * @return void
     */
    setPrice(price: any): void;
    /**
     * @return ExtendInfo
     */
    getExtendInfo(): any;
    /**
     * @param ExtendInfo extendInfo
     * @return void
     */
    setExtendInfo(extendInfo: any): void;
}
