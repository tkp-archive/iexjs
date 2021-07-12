/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _quoteSymbols, _raiseIfNotStr } from "../common";
import { Client } from "../client";

/**
 * Returns the official open and close for a give symbol.
 *
 * https://iexcloud.io/docs/api/#ohlc
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const ohlc = (symbol, { token, version, filter, format } = {}) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/ohlc`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.ohlc = function (symbol, { filter, format } = {}) {
  return ohlc(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns the official open and close for whole market.
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const marketOhlc = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/ohlc`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketOhlc = function ({ filter, format } = {}) {
  return marketOhlc({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
