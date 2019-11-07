/**
 * Copyright (C) 2019 Paytm.
 */
export declare class UserInfo {
    /**
     * @var string
     */
    private custId;
    /**
     * @var string
     */
    private mobile;
    /**
     * @var string
     */
    private email;
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
    private address;
    /**
     * @var string
     */
    private pincode;
    /**
     * @return string
     */
    getCustId(): string;
    /**
     * @param string custId
     * @return void
     */
    setCustId(custId: string): void;
    /**
     * @return string
     */
    getMobile(): string;
    /**
     * @param string mobile
     * @return void
     */
    setMobile(mobile: string): void;
    /**
     * @return string
     */
    getEmail(): string;
    /**
     * @param string email
     * @return void
     */
    setEmail(email: string): void;
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
    getAddress(): string;
    /**
     * @param string address
     * @return void
     */
    setAddress(address: string): void;
    /**
     * @return string
     */
    getPincode(): string;
    /**
     * @param string pincode
     * @return void
     */
    setPincode(pincode: string): void;
    /**
     * UserInfo constructor.
     * @param custId
     */
    constructor(custId: string);
}
