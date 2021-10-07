/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import {
  _checkPeriodLast,
  _get,
  _quoteSymbols,
  _raiseIfNotStr,
} from "../common";
import { Client } from "../client";

/**
 * Earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters) and annually (last 4 years).
 *
 * https://iexcloud.io/docs/api/#earnings
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} options.field sub field to fetch
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const earnings = async (
  { symbol, period, last, field } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  if (field === undefined) {
    return (
      (
        await _get({
          url: `stock/${_quoteSymbols(symbol)}/earnings?period=${
            period || "quarter"
          }&last=${last || 1}`,
          token,
          version,
          filter,
          format,
        })
      ).earnings || []
    );
  }
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/earnings/${
        last || 1
      }/${field}?period=${period || "quarter"}`,
      token,
      version,
      filter,
      format,
    }).earnings) || []
  );
};

Client.prototype.earnings = function (
  { symbol, period, last, field } = {},
  { filter, format } = {},
) {
  return earnings(
    { symbol, period, last, field },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Returns earnings that will be reported today as two arrays: before the open bto and after market close amc.
 *   Each array contains an object with all keys from earnings, a quote object, and a headline key.
 *
 * https://iexcloud.io/docs/api/#earnings-today
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const earningsToday = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/today-earnings`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.earningsToday = function ({ filter, format } = {}) {
  return earningsToday({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
