/**
 * Copyright (C) 2019 Paytm.
 */
export declare class ExtraParameterMap {
    /**
     * @var object
     */
    private extraParamsMap;
    /**
     * Paytm\pg\request\ExtraParameterMap constructor.
     */
    protected constructor();
    /**
     * @return object
     */
    getExtraParamsMap(): {};
    /**
     * @param object extraParamsMap
     * @return void
     */
    setExtraParamsMap(extraParamsMap: any): void;
    toJSON(): {
        'extraParamsMap': {};
    };
}
