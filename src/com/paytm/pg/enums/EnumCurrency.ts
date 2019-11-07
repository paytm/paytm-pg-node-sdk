/**
 * Copyright (C) 2019 Paytm.
 */

/**
 * This Enum represents the total list of currencies supported by the system
 *
 */
/* class: EnumCurrency  */
export class EnumCurrency {
	static readonly INR: string = "INR";

	/**
	* @var string
	*/
	public currency: string;

	/**
	* @return string
	*/
	public getCurrency(): string {
		return this.currency;
	}

	/**
	 * EnumCurrency constructor.
	 * @param string currency
	 */
	public constructor(currency: string) {
		this.currency = currency;
	}

	/**
	 * @return array
	 */
	public static getEnumCurrencyOptions(): Array<string> {
		return [
			EnumCurrency.INR,
		];
	}

	/**
	* @param currency
	* @return int
	* @throws Exception
	*/
	public static getEnumByCurrency(currency: string): string {
		var enumOptions = this.getEnumCurrencyOptions();
		for (var x in enumOptions) {
			if (currency == enumOptions[x]) {
				return x;
			}
		}

		throw new Error("FacadeInvalidParameterException : Given value of Currency is not supported");
	}
}