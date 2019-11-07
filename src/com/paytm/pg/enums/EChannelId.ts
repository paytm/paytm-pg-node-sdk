/**
 * Copyright (C) 2019 Paytm.
 */

/* class: EChannelId  */
export class EChannelId {

    static readonly APP: string = "APP";
    static readonly WEB: string = "WEB";
    static readonly WAP: string = "WAP";
    static readonly SYSTEM: string = "SYSTEM";

    /**
     * @var string
     */
    private value: string;

    /**
     * EChannelId constructor.
     */
    public constructor() {
    }

    /**
     * @param string value
     * @return void
     */
    public setValue(value: string): void {
        this.value = value;
    }

    /**
     * @return string
     */
    public getValue(): string {
        return this.value;
    }

    /**
     * @return array
     */
    public static getEChannelIdOptions(): Array<string> {
        return [
            EChannelId.APP,
            EChannelId.WEB,
            EChannelId.WAP,
            EChannelId.SYSTEM
        ];
    }

    /**
     * @param string value
     * @return int
     * @throws Exception
     */
    public static getEChannelIdByValue(value: string): number {
        var EChannelIdOptions = EChannelId.getEChannelIdOptions();
        for (var x = 0; x < EChannelIdOptions.length - 1; x++) {
            if (value == EChannelIdOptions[x]) {
                return x;
            }
        }

        throw new Error("Given value of Currency is not supported");
    }
}