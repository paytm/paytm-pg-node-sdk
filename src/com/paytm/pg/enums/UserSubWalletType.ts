/**
 * Copyright (C) 2019 Paytm.
 */

/* class: UserSubWalletType  */
export class UserSubWalletType {

    static readonly FOOD: string = "FOOD";
    static readonly GIFT: string = "GIFT";
    static readonly MULTI_PURPOSE_GIFT: string = "MULTI_PURPOSE_GIFT";
    static readonly TOLL: string = "TOLL";
    static readonly CLOSED_LOOP_WALLET: string = "CLOSED_LOOP_WALLET";
    static readonly CLOSED_LOOP_SUB_WALLET: string = "CLOSED_LOOP_SUB_WALLET";
    static readonly FUEL: string = "FUEL";
    static readonly INTERNATIONAL_FUNDS_TRANSFER: string = "INTERNATIONAL_FUNDS_TRANSFER";
    static readonly CASHBACK: string = "CASHBACK";
    static readonly GIFT_VOUCHER: string = "GIFT_VOUCHER";
    static readonly COMMUNICATION: string = "COMMUNICATION";

    /**
     * @var string
     */
    public code: string;

    /**
     * @var string
     */
    public type: string;

    /**
     * UserSubWalletType constructor.
     * @param string code
     * @param string type
     */
    private constructor(code: string, type: string) {
        this.code = code;
        this.type = type;
    }

    /**
     * @return string
     */
    public getCode(): string {
        return this.code;
    }

    /**
     * @param string code
     * @return void
     */
    public setCode(code: string): void {
        this.code = code;
    }

    /**
     * @return string
     */
    public getType() {
        return this.type;
    }

    /**
     * @param string type
     */
    public setType(type: string): void {
        this.type = type;
    }
}