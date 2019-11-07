/**
  * Copyright (C) 2019 Paytm.
  */

import * as _LibraryContants from "../constants/LibraryConstants";
import * as _LoggingUtil from "../utils/LoggingUtil";

export class Config {
  /**
   * @var string
   */
  static readonly logName: string = '[PAYTM]';

  /**
   * @var int
   */
  static readonly logLevel: number = _LoggingUtil.LoggingUtil.LogLevel.INFO;

  /**
   * @var string
   */
  static readonly logfile: string = 'logs/app.log';
  /**
       * This holds unique uuid v4
       *
       * @var string
       */
  static requestId;

}
Config.requestId = _LibraryContants.LibraryConstants.NODE_SDK_TEXT + _LibraryContants.LibraryConstants.NODE_SDK_VERSION;