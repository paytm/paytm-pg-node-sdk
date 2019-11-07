/**
 * Copyright (C) 2019 Paytm.
 */

/* class: ExtraParameterMap */
export class ExtraParameterMap {

    /**
     * @var object
     */
    private extraParamsMap = {};

    /**
     * Paytm\pg\request\ExtraParameterMap constructor.
     */
    protected constructor() {
    }

    /**
     * @return object
     */
    public getExtraParamsMap() {
        return this.extraParamsMap;
    }

    /**
     * @param object extraParamsMap
     * @return void
     */
    public setExtraParamsMap(extraParamsMap): void {
        this.extraParamsMap = extraParamsMap;
    }

    public toJSON() {
        return {
            'extraParamsMap': this.getExtraParamsMap()
        };
    }

}