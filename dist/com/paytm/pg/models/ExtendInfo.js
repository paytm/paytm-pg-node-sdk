"use strict";
/**
 * Copyright (C) 2019 Paytm.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* clas: ExtendInfo  */
class ExtendInfo {
    /**
     * ExtendInfo constructor.
     */
    constructor() {
    }
    /**
     * @param object subwalletAmount
     * @return void
     */
    setSubwalletAmount(subwalletAmount) {
        this.subwalletAmount = subwalletAmount;
    }
    /**
     * @return string
     */
    getUdf1() {
        return this.udf1;
    }
    /**
     * @param string udf1
     * @return void
     */
    setUdf1(udf1) {
        this.udf1 = udf1;
    }
    /**
     * @return string
     */
    getUdf2() {
        return this.udf2;
    }
    /**
     * @param string udf2
     * @return void
     */
    setUdf2(udf2) {
        this.udf2 = udf2;
    }
    /**
     * @return string
     */
    getUdf3() {
        return this.udf3;
    }
    /**
     * @param string udf3
     * @return void
     */
    setUdf3(udf3) {
        this.udf3 = udf3;
    }
    /**
     * @return string
     */
    getMercUnqRef() {
        return this.mercUnqRef;
    }
    /**
     * @param string mercUnqRef
     * @return void
     */
    setMercUnqRef(mercUnqRef) {
        this.mercUnqRef = mercUnqRef;
    }
    /**
     * @return string
     */
    getComments() {
        return this.comments;
    }
    /**
     * @param string comments
     * @return void
     */
    setComments(comments) {
        this.comments = comments;
    }
    /**
     * @return string
     */
    getAmountToBeRefunded() {
        return this.amountToBeRefunded;
    }
    /**
     * @return string
     */
    getSubwalletAmount() {
        return this.subwalletAmount;
    }
    /**
     * @param string amountToBeRefunded
     * @return void
     */
    setAmountToBeRefunded(amountToBeRefunded) {
        this.amountToBeRefunded = amountToBeRefunded;
    }
}
exports.ExtendInfo = ExtendInfo;
