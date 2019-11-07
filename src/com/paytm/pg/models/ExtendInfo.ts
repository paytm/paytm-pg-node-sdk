/**
 * Copyright (C) 2019 Paytm.
 */

/* clas: ExtendInfo  */
export class ExtendInfo {
    /**
     * @var string
     */
    private udf1: string;

    /**
     * @var string
     */
    private udf2: string;

    /**
     * @var string
     */
    private udf3: string;

    /**
     * @var string
     */
    private mercUnqRef: string;

    /**
     * @var string
     */
    private comments: string;

    /**
     * @var string
     */
    private amountToBeRefunded: string;

    /**
     * @var string
     */
    private subwalletAmount: object;

    /**
     * ExtendInfo constructor.
     */
    public constructor() {
    }

    /**
     * @param object subwalletAmount
     * @return void
     */
    public setSubwalletAmount(subwalletAmount: object): void {
        this.subwalletAmount = subwalletAmount;
    }

    /**
     * @return string
     */
    public getUdf1(): string {
        return this.udf1;
    }

    /**
     * @param string udf1
     * @return void
     */
    public setUdf1(udf1: string): void {
        this.udf1 = udf1;
    }

    /**
     * @return string
     */
    public getUdf2(): string {
        return this.udf2;
    }

    /**
     * @param string udf2
     * @return void
     */
    public setUdf2(udf2: string): void {
        this.udf2 = udf2;
    }

    /**
     * @return string
     */
    public getUdf3(): string {
        return this.udf3;
    }

    /**
     * @param string udf3
     * @return void
     */
    public setUdf3(udf3: string): void {
        this.udf3 = udf3;
    }

    /**
     * @return string
     */
    public getMercUnqRef(): string {
        return this.mercUnqRef;
    }

    /**
     * @param string mercUnqRef
     * @return void
     */
    public setMercUnqRef(mercUnqRef: string): void {
        this.mercUnqRef = mercUnqRef;
    }

    /**
     * @return string
     */
    public getComments(): string {
        return this.comments;
    }

    /**
     * @param string comments
     * @return void
     */
    public setComments(comments: string): void {
        this.comments = comments;
    }

    /**
     * @return string
     */
    public getAmountToBeRefunded(): string {
        return this.amountToBeRefunded;
    }

    /**
     * @return string
     */
    public getSubwalletAmount(): object {
        return this.subwalletAmount;
    }

    /**
     * @param string amountToBeRefunded
     * @return void
     */
    public setAmountToBeRefunded(amountToBeRefunded: string): void {
        this.amountToBeRefunded = amountToBeRefunded;
    }
}