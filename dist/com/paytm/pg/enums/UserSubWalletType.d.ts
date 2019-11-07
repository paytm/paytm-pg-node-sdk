/**
 * Copyright (C) 2019 Paytm.
 */
export declare class UserSubWalletType {
    static readonly FOOD: string;
    static readonly GIFT: string;
    static readonly MULTI_PURPOSE_GIFT: string;
    static readonly TOLL: string;
    static readonly CLOSED_LOOP_WALLET: string;
    static readonly CLOSED_LOOP_SUB_WALLET: string;
    static readonly FUEL: string;
    static readonly INTERNATIONAL_FUNDS_TRANSFER: string;
    static readonly CASHBACK: string;
    static readonly GIFT_VOUCHER: string;
    static readonly COMMUNICATION: string;
    /**
     * @var string
     */
    code: string;
    /**
     * @var string
     */
    type: string;
    /**
     * UserSubWalletType constructor.
     * @param string code
     * @param string type
     */
    private constructor();
    /**
     * @return string
     */
    getCode(): string;
    /**
     * @param string code
     * @return void
     */
    setCode(code: string): void;
    /**
     * @return string
     */
    getType(): string;
    /**
     * @param string type
     */
    setType(type: string): void;
}
