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
 * @param {string} timeframe timeframe for data
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const stockSplits = (
  symbol,
  timeframe,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  if (_TIMEFRAME_DIVSPLIT.indexOf(timeframe || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/splits/${timeframe || "ytd"}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.stockSplits = function (
  symbol,
  timeframe,
  { filter, format } = {},
) {
  return stockSplits(symbol, timeframe, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
