/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _raiseIfNotStr, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * This endpoint provides social sentiment data from StockTwits. Data can be viewed as a daily value, or by minute for a given date.
 *
 * https://iexcloud.io/docs/api/#social-sentiment
 *
 * @param {string} symbol Ticker to request
 * @param {string} type 'daily' or 'minute'
 * @param {string} date date in YYYYMMDD or datetime
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const sentiment = (
  symbol,
  type,
  date,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  if (date) {
    return _get({
      url: `stock/${symbol}/sentiment/${type}/${_strOrDate(date)}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stock/${symbol}/sentiment/${type}/`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.sentiment = function (
  symbol,
  type = "daily",
  date = null,
  filter,
  format,
) {
  return sentiment(
    symbol,
    type,
    date,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * This endpoint provides CEO compensation for a company by symbol.
 *
 * https://iexcloud.io/docs/api/#ceo-compensation
 *
 * @param {string} symbol Ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const ceoCompensation = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${symbol}/ceo-compensation/`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.ceoCompensation = function (symbol, filter, format) {
  return ceoCompensation(symbol, this._token, this._version, filter, format);
};
