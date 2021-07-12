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
 * Provides the latest consensus estimate for the next fiscal period
 *
 * https://iexcloud.io/docs/api/#estimates
 *
 * @param {string} symbol ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const estimates = (
  symbol,
  period,
  last,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/estimates?period=${
      period || "quarter"
    }&last=${last || 1}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.estimates = function (
  symbol,
  period,
  last,
  { filter, format } = {},
) {
  return estimates(symbol, period, last, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
