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
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.type 'daily' or 'minute'
 * @param {string} options.date date in YYYYMMDD or datetime
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const sentiment = (
  { symbol, type, date } = {},
  { token, version, filter, format } = {},
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

Client.prototype.sentiment = function (options, standardOptions) {
  return sentiment(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
