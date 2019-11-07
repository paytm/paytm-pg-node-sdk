/**
 * Copyright (C) 2019 Paytm.
 */
export declare class ExtendInfo {
    /**
     * @var string
     */
    private udf1;
    /**
     * @var string
     */
    private udf2;
    /**
     * @var string
     */
    private udf3;
    /**
     * @var string
     */
    private mercUnqRef;
    /**
     * @var string
     */
    private comments;
    /**
     * @var string
     */
    private amountToBeRefunded;
    /**
     * @var string
     */
    private subwalletAmount;
    /**
     * ExtendInfo constructor.
     */
    constructor();
    /**
     * @param object subwalletAmount
     * @return void
     */
    setSubwalletAmount(subwalletAmount: object): void;
    /**
     * @return string
     */
    getUdf1(): string;
    /**
     * @param string udf1
     * @return void
     */
    setUdf1(udf1: string): void;
    /**
     * @return string
     */
    getUdf2(): string;
    /**
     * @param string udf2
     * @return void
     */
    setUdf2(udf2: string): void;
    /**
     * @return string
     */
    getUdf3(): string;
    /**
     * @param string udf3
     * @return void
     */
    setUdf3(udf3: string): void;
    /**
     * @return string
     */
    getMercUnqRef(): string;
    /**
     * @param string mercUnqRef
     * @return void
     */
    setMercUnqRef(mercUnqRef: string): void;
    /**
     * @return string
     */
    getComments(): string;
    /**
     * @param string comments
     * @return void
     */
    setComments(comments: string): void;
    /**
     * @return string
     */
    getAmountToBeRefunded(): string;
    /**
     * @return string
     */
    getSubwalletAmount(): object;
    /**
     * @param string amountToBeRefunded
     * @return void
     */
    setAmountToBeRefunded(amountToBeRefunded: string): void;
}
