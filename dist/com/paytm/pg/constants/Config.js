"use strict";
/**
  * Copyright (C) 2019 Paytm.
  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const _LibraryContants = require("../constants/LibraryConstants");
const _LoggingUtil = require("../utils/LoggingUtil");
class Config {
}
exports.Config = Config;
/**
 * @var string
 */
Config.logName = '[PAYTM]';
/**
 * @var int
 */
Config.logLevel = _LoggingUtil.LoggingUtil.LogLevel.INFO;
/**
 * @var string
 */
Config.logfile = 'logs/app.log';
Config.requestId = _LibraryContants.LibraryConstants.NODE_SDK_TEXT + _LibraryContants.LibraryConstants.NODE_SDK_VERSION;
