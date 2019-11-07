"use strict";
/**
  * Copyright (C) 2019 Paytm.
  */
Object.defineProperty(exports, "__esModule", { value: true });
const _Config = require("../constants/Config");
var Levels;
(function (Levels) {
    Levels[Levels["EMERGENCY"] = 0] = "EMERGENCY";
    Levels[Levels["ALERT"] = 1] = "ALERT";
    Levels[Levels["CRITICAL"] = 2] = "CRITICAL";
    Levels[Levels["ERROR"] = 3] = "ERROR";
    Levels[Levels["WARNING"] = 4] = "WARNING";
    Levels[Levels["NOTICE"] = 5] = "NOTICE";
    Levels[Levels["INFO"] = 6] = "INFO";
    Levels[Levels["DEBUG"] = 7] = "DEBUG";
})(Levels || (Levels = {}));
/* class: LoggingUtil */
class LoggingUtil {
    /**
     * LoggingUtil constructor.
     */
    constructor() {
    }
    /**
     * @param string severity
     * @param string msg
     * @throws Exception
     */
    static addLog(severity, className, msg, ...objects) {
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
                level: Levels[_Config.Config.logLevel],
                levels: LoggingUtil.LogLevel,
                format: combine(timestamp(), logFormat),
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
/**
 * @var Logger
 */
LoggingUtil.logger = null;
/**
 * @var LogLevel
 */
LoggingUtil.LogLevel = Levels;
exports.LoggingUtil = LoggingUtil;
