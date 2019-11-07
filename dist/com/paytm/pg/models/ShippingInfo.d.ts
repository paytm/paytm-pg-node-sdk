/**
 * Copyright (C) 2019 Paytm.
 */
export declare class ShippingInfo {
    /**
     * @var string
     */
    private merchantShippingId;
    /**
     * @var string
     */
    private trackingNo;
    /**
     * @var string
     */
    private carrier;
    /**
     * @var Money
     */
    private chargeAmount;
    /**
     * @var string
     */
    private countryName;
    /**
     * @var string
     */
    private stateName;
    /**
     * @var string
     */
    private cityName;
    /**
     * @var string
     */
    private address1;
    /**
     * @var string
     */
    private address2;
    /**
     * @var string
     */
    private firstName;
    /**
     * @var string
     */
    private lastName;
    /**
     * @var string
     */
    private mobileNo;
    /**
     * @var string
     */
    private zipCode;
    /**
     * @var string
     */
    private email;
    /**
     * ShippingInfo constructor.
     */
    constructor();
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
    getTrackingNo(): string;
    /**
     * @param string trackingNo
     * @return void
     */
    setTrackingNo(trackingNo: string): void;
    /**
     * @return string
     */
    getCarrier(): string;
    /**
     * @param string carrier
     * @return void
     */
    setCarrier(carrier: string): void;
    /**
     * @return Money
     */
    getChargeAmount(): any;
    /**
     * @param Money chargeAmount
     * @return void
     */
    setChargeAmount(chargeAmount: any): void;
    /**
     * @return string
     */
    getCountryName(): string;
    /**
     * @param string countryName
     * @return void
     */
    setCountryName(countryName: string): void;
    /**
     * @return string
     */
    getStateName(): string;
    /**
     * @param string stateName
     * @return void
     */
    setStateName(stateName: string): void;
    /**
     * @return string
     */
    getCityName(): string;
    /**
     * @param string cityName
     * @return void
     */
    setCityName(cityName: string): void;
    /**
     * @return string
     */
    getAddress1(): string;
    /**
     * @param string address1
     * @return void
     */
    setAddress1(address1: string): void;
    /**
     * @return string
     */
    getAddress2(): string;
    /**
     * @param string address2
     * @return void
     */
    setAddress2(address2: string): void;
    /**
     * @return string
     */
    getFirstName(): string;
    /**
     * @param string firstName
     * @return void
     */
    setFirstName(firstName: string): void;
    /**
     * @return string
     */
    getLastName(): string;
    /**
     * @param string lastName
     * @return void
     */
    setLastName(lastName: string): void;
    /**
     * @return string
     */
    getMobileNo(): string;
    /**
     * @param string mobileNo
     * @return void
     */
    setMobileNo(mobileNo: string): void;
    /**
     * @return string
     */
    getZipCode(): string;
    /**
     * @param string zipCode
     * @return void
     */
    setZipCode(zipCode: string): void;
    /**
     * @return string
     */
    getEmail(): string;
    /**
     * @param string email
     * @return void
     */
    setEmail(email: string): void;
}
