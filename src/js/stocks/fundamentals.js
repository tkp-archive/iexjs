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
 * Pulls fundamentals data.
 *
 * https://iexcloud.io/docs/api/#advanced-fundamentals
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fundamentals = async (
  { symbol, period } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/fundamentals?period=${
          period || "quarter"
        }`,
        token,
        version,
        filter,
        format,
      })
    ).fundamentals || []
  );
};

Client.prototype.fundamentals = function (
  { symbol, period } = {},
  { filter, format } = {},
) {
  return fundamentals(
    { symbol, period },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};
