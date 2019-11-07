/**
  * Copyright (C) 2019 Paytm.
  */

import * as _Config from "../constants/Config";

enum Levels {
    EMERGENCY = 0,
    ALERT = 1,
    CRITICAL = 2,
    ERROR = 3,
    WARNING = 4,
    NOTICE = 5,
    INFO = 6,
    DEBUG = 7
}

/* class: LoggingUtil */
export class LoggingUtil {

    /**
     * @var Logger
     */
    protected static logger = null;

    /**
     * @var LogLevel
     */
    public static readonly LogLevel = Levels;

    /**
     * LoggingUtil constructor.
     */
    protected constructor() {
    }

    /**
     * @param string severity
     * @param string msg
     * @throws Exception
     */
    public static addLog(severity: Levels, className: string, msg: string, ...objects: any) {

        if (LoggingUtil.logger === null) {

            const winston = require('winston');
            const { combine, timestamp, label, printf } = winston.format;

            const logFormat = printf(({ level, message, label, timestamp }) => {
                var pattern = "";
                pattern += `[${timestamp}]`;
                if (typeof _Config.Config.logName !== "undefined" && _Config.Config.logName.trim() !== "") {
                    pattern += ` ${_Config.Config.logName.trim()}`;
                }
                pattern += ` ${level} [${_Config.Config.requestId}] <${label}>: ${message}`;
                return pattern;
            });

            LoggingUtil.logger = winston.createLogger({
                level: Levels[_Config.Config.logLevel], // minimum serverity to write log
                levels: LoggingUtil.LogLevel,
                format: combine(
                    timestamp(),
                    logFormat
                ),
                transports: [
                    // new winston.transports.Console(),
                    new winston.transports.File({ filename: _Config.Config.logfile })
                ]
            });
        }

        var log_msg = msg;
        if (objects.length > 0) {
            for (var i = 0; i < objects.length; i++) {
                if (typeof objects[i] === "object")
                    log_msg += JSON.stringify(objects[i]);
                else
                    log_msg += objects[i];
            }
        }

        LoggingUtil.logger.log({
            level: LoggingUtil.LogLevel[severity],
            label: className,
            message: log_msg
        });
    }
}