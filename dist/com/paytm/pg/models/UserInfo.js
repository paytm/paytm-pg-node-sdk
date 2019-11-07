"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* class: UserInfo  */
class UserInfo {
    /**
     * @return string
     */
    getCustId() {
        return this.custId;
    }
    /**
     * @param string custId
     * @return void
     */
    setCustId(custId) {
        this.custId = custId;
    }
    /**
     * @return string
     */
    getMobile() {
        return this.mobile;
    }
    /**
     * @param string mobile
     * @return void
     */
    setMobile(mobile) {
        this.mobile = mobile;
    }
    /**
     * @return string
     */
    getEmail() {
        return this.email;
    }
    /**
     * @param string email
     * @return void
     */
    setEmail(email) {
        this.email = email;
    }
    /**
     * @return string
     */
    getFirstName() {
        return this.firstName;
    }
    /**
     * @param string firstName
     * @return void
     */
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    /**
     * @return string
     */
    getLastName() {
        return this.lastName;
    }
    /**
     * @param string lastName
     * @return void
     */
    setLastName(lastName) {
        this.lastName = lastName;
    }
    /**
     * @return string
     */
    getAddress() {
        return this.address;
    }
    /**
     * @param string address
     * @return void
     */
    setAddress(address) {
        this.address = address;
    }
    /**
     * @return string
     */
    getPincode() {
        return this.pincode;
    }
    /**
     * @param string pincode
     * @return void
     */
    setPincode(pincode) {
        this.pincode = pincode;
    }
    /**
     * UserInfo constructor.
     * @param custId
     */
    constructor(custId) {
        this.custId = custId;
    }
}
exports.UserInfo = UserInfo;
