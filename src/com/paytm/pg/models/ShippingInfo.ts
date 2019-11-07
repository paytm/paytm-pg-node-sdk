/**
 * Copyright (C) 2019 Paytm.
 */

/* class: ShippingInfo  */
export class ShippingInfo {
    /**
     * @var string
     */
    private merchantShippingId: string;

    /**
     * @var string
     */
    private trackingNo: string;

    /**
     * @var string
     */
    private carrier: string;

    /**
     * @var Money
     */
    private chargeAmount;

    /**
     * @var string
     */
    private countryName: string;

    /**
     * @var string
     */
    private stateName: string;

    /**
     * @var string
     */
    private cityName: string;

    /**
     * @var string
     */
    private address1: string;

    /**
     * @var string
     */
    private address2: string;

    /**
     * @var string
     */
    private firstName: string;

    /**
     * @var string
     */
    private lastName: string;

    /**
     * @var string
     */
    private mobileNo: string;

    /**
     * @var string
     */
    private zipCode: string;

    /**
     * @var string
     */
    private email: string;

    /**
     * ShippingInfo constructor.
     */
    public constructor() {
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
    public getTrackingNo(): string {
        return this.trackingNo;
    }

    /**
     * @param string trackingNo
     * @return void
     */
    public setTrackingNo(trackingNo: string): void {
        this.trackingNo = trackingNo;
    }

    /**
     * @return string
     */
    public getCarrier(): string {
        return this.carrier;
    }

    /**
     * @param string carrier
     * @return void
     */
    public setCarrier(carrier: string): void {
        this.carrier = carrier;
    }

    /**
     * @return Money
     */
    public getChargeAmount() {
        return this.chargeAmount;
    }

    /**
     * @param Money chargeAmount
     * @return void
     */
    public setChargeAmount(chargeAmount): void {
        this.chargeAmount = chargeAmount;
    }

    /**
     * @return string
     */
    public getCountryName(): string {
        return this.countryName;
    }

    /**
     * @param string countryName
     * @return void
     */
    public setCountryName(countryName: string): void {
        this.countryName = countryName;
    }

    /**
     * @return string
     */
    public getStateName(): string {
        return this.stateName;
    }

    /**
     * @param string stateName
     * @return void
     */
    public setStateName(stateName: string): void {
        this.stateName = stateName;
    }

    /**
     * @return string
     */
    public getCityName(): string {
        return this.cityName;
    }

    /**
     * @param string cityName
     * @return void
     */
    public setCityName(cityName: string): void {
        this.cityName = cityName;
    }

    /**
     * @return string
     */
    public getAddress1(): string {
        return this.address1;
    }

    /**
     * @param string address1
     * @return void
     */
    public setAddress1(address1: string): void {
        this.address1 = address1;
    }

    /**
     * @return string
     */
    public getAddress2(): string {
        return this.address2;
    }

    /**
     * @param string address2
     * @return void
     */
    public setAddress2(address2: string): void {
        this.address2 = address2;
    }

    /**
     * @return string
     */
    public getFirstName(): string {
        return this.firstName;
    }

    /**
     * @param string firstName
     * @return void
     */
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    /**
     * @return string
     */
    public getLastName(): string {
        return this.lastName;
    }

    /**
     * @param string lastName
     * @return void
     */
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    /**
     * @return string
     */
    public getMobileNo(): string {
        return this.mobileNo;
    }

    /**
     * @param string mobileNo
     * @return void
     */
    public setMobileNo(mobileNo: string): void {
        this.mobileNo = mobileNo;
    }

    /**
     * @return string
     */
    public getZipCode(): string {
        return this.zipCode;
    }

    /**
     * @param string zipCode
     * @return void
     */
    public setZipCode(zipCode: string): void {
        this.zipCode = zipCode;
    }

    /**
     * @return string
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * @param string email
     * @return void
     */
    public setEmail(email: string): void {
        this.email = email;
    }
}