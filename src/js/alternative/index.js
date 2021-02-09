/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _raiseIfNotStr, _strOrDate } from "../common";
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
 */
export const sentiment = (symbol, type, date, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (date) {
    return _getJson({
      url: `stock/${symbol}/sentiment/${type}/${_strOrDate(date)}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `stock/${symbol}/sentiment/${type}/`,
    token,
    version,
    filter,
  });
};

Client.prototype.sentiment = function (
  symbol,
  type = "daily",
  date = null,
  filter,
) {
  return sentiment(symbol, type, date, this._token, this._version, filter);
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
 */
export const ceoCompensation = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${symbol}/ceo-compensation/`,
    token,
    version,
    filter,
  });
};

Client.prototype.ceoCompensation = function (symbol, filter) {
  return ceoCompensation(symbol, this._token, this._version, filter);
};
