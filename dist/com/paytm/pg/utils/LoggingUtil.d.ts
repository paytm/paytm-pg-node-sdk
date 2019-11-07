/**
  * Copyright (C) 2019 Paytm.
  */
declare enum Levels {
    EMERGENCY = 0,
    ALERT = 1,
    CRITICAL = 2,
    ERROR = 3,
    WARNING = 4,
    NOTICE = 5,
    INFO = 6,
    DEBUG = 7
}
export declare class LoggingUtil {
    /**
     * @var Logger
     */
    protected static logger: any;
    /**
     * @var LogLevel
     */
    static readonly LogLevel: typeof Levels;
    /**
     * LoggingUtil constructor.
     */
    protected constructor();
    /**
     * @param string severity
     * @param string msg
     * @throws Exception
     */
    static addLog(severity: Levels, className: string, msg: string, ...objects: any): void;
}
export {};
