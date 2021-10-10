/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _TIMEFRAME_DIVSPLIT,
  _get,
  _quoteSymbols,
  _raiseIfNotStr,
  IEXJSException,
} from "../common";
import { Client } from "../client";

/**
 * Stock split history
 *
 * https://iexcloud.io/docs/api/#splits
 *
 * @param {string} symbol Ticker to request
 * @param {object} options
 * @param {string} options.range range for data
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const splitsBasic = (
  { symbol, range } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  if (_TIMEFRAME_DIVSPLIT.indexOf(range || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/splits/${range || "ytd"}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.splitsBasic = function (options, standardOptions) {
  return splitsBasic(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
