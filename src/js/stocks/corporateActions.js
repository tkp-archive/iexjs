/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _TIMEFRAME_DIVSPLIT,
  _getJson,
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
 */
export const stockSplits = (symbol, timeframe, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (_TIMEFRAME_DIVSPLIT.indexOf(timeframe || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/splits/${timeframe || "ytd"}`,
    token,
    version,
    filter,
  });
};

Client.prototype.stockSplits = function (symbol, timeframe, filter) {
  return stockSplits(symbol, timeframe, this._token, this._version, filter);
};
