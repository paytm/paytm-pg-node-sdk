/**
 * Copyright (C) 2019 Paytm.
 */

/* class: UserInfo  */
export class UserInfo {

    /**
     * @var string
     */
    private custId: string;

    /**
     * @var string
     */
    private mobile: string;

    /**
     * @var string
     */
    private email: string;

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
    private address: string;

    /**
     * @var string
     */
    private pincode: string;

    /**
     * @return string
     */
    public getCustId(): string {
        return this.custId;
    }

    /**
     * @param string custId
     * @return void
     */
    public setCustId(custId: string): void {
        this.custId = custId;
    }

    /**
     * @return string
     */
    public getMobile(): string {
        return this.mobile;
    }

    /**
     * @param string mobile
     * @return void
     */
    public setMobile(mobile: string): void {
        this.mobile = mobile;
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
    public getAddress(): string {
        return this.address;
    }

    /**
     * @param string address
     * @return void
     */
    public setAddress(address: string): void {
        this.address = address;
    }

    /**
     * @return string
     */
    public getPincode(): string {
        return this.pincode;
    }

    /**
     * @param string pincode
     * @return void
     */
    public setPincode(pincode: string): void {
        this.pincode = pincode;
    }

    /**
     * UserInfo constructor.
     * @param custId
     */
    public constructor(custId: string) {
        this.custId = custId;
    }
}