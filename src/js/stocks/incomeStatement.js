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
 * Pulls income statement data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#income-statement
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const incomeStatement = async (
  { symbol, period, last } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/income?period=${
          period || "quarter"
        }&last=${last || 1}`,
        token,
        version,
        filter,
        format,
      })
    ).income || []
  );
};

Client.prototype.incomeStatement = function (options, standardOptions) {
  return incomeStatement(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
