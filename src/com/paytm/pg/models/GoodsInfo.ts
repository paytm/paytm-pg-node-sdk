/**
 * Copyright (C) 2019 Paytm.
 */

/* class: GoodsInfo  */
export class GoodsInfo {

    /**
     * @var string
     */
    private merchantGoodsId: string;

    /**
     * @var string
     */
    private merchantShippingId: string;

    /**
     * @var string
     */
    private snapshotUrl: string;

    /**
     * @var string
     */
    private description: string;

    /**
     * @var string
     */
    private category: string;

    /**
     * @var string
     */
    private quantity: string;

    /**
     * @var string
     */
    private unit: string;

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
    public constructor() {
    }

    /**
     * @return string
     */
    public getMerchantGoodsId(): string {
        return this.merchantGoodsId;
    }

    /**
     * @param string merchantGoodsId
     * @return void
     */
    public setMerchantGoodsId(merchantGoodsId: string): void {
        this.merchantGoodsId = merchantGoodsId;
    }

    /**
     * @return string
     */
    public getMerchantShippingId(): string {
        return this.merchantShippingId;
    }

    /**
     * @param string merchantShippingId
     * @return void
     */
    public setMerchantShippingId(merchantShippingId: string): void {
        this.merchantShippingId = merchantShippingId;
    }

    /**
     * @return string
     */
    public getSnapshotUrl(): string {
        return this.snapshotUrl;
    }

    /**
     * @param string snapshotUrl
     * @return void
     */
    public setSnapshotUrl(snapshotUrl: string): void {
        this.snapshotUrl = snapshotUrl;
    }

    /**
     * @return string
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * @param string description
     * @return void
     */
    public setDescription(description: string): void {
        this.description = description;
    }

    /**
     * @return string
     */
    public getCategory(): string {
        return this.category;
    }

    /**
     * @param string category
     * @return void
     */
    public setCategory(category: string): void {
        this.category = category;
    }

    /**
     * @return string
     */
    public getQuantity(): string {
        return this.quantity;
    }

    /**
     * @param string quantity
     * @return void
     */
    public setQuantity(quantity: string): void {
        this.quantity = quantity;
    }

    /**
     * @return string
     */
    public getUnit(): string {
        return this.unit;
    }

    /**
     * @param string unit
     * @return void
     */
    public setUnit(unit: string): void {
        this.unit = unit;
    }

    /**
     * @return Money
     */
    public getPrice() {
        return this.price;
    }

    /**
     * @param Money price
     * @return void
     */
    public setPrice(price): void {
        this.price = price;
    }

    /**
     * @return ExtendInfo
     */
    public getExtendInfo() {
        return this.extendInfo;
    }

    /**
     * @param ExtendInfo extendInfo
     * @return void
     */
    public setExtendInfo(extendInfo) {
        this.extendInfo = extendInfo;
    }
}