/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _quoteSymbols, _raiseIfNotStr, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * This endpoint will return aggregated intraday prices in one minute buckets
 *
 * https://iexcloud.io/docs/api/#intraday-prices
 *
 * @param {string} symbol ticker to request
 * @param {string} date (str): Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. Currently supporting trailing 30 calendar days of minute bar data.
 * @param {string} exactDate (str): Same as `date`, takes precedence
 * @param {number} last (number): If passed, chart data will return the last N elements
 * @param {boolean} IEXOnly (bool): Limits the return of intraday prices to IEX only data.
 * @param {boolean} reset (bool): If true, chart will reset at midnight instead of the default behavior of 9:30am ET.
 * @param {boolean} simplify (bool): If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
 * @param {number} interval (number): If passed, chart data will return every Nth element as defined by chartInterval
 * @param {boolean} changeFromClose (bool): If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
 * @param {boolean} IEXWhenNull (bool): By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const intraday = (
  symbol,
  options,
  { token, version, filter, format } = {},
) => {
  const {
    date = "",
    exactDate = "",
    last = -1,
    IEXOnly = false,
    reset = false,
    simplify = false,
    interval = -1,
    changeFromClose = false,
    IEXWhenNull = false,
  } = options || {};

  _raiseIfNotStr(symbol);

  // exactDate takes precedence
  let thedate = exactDate || date;
  if (thedate) {
    thedate = _strOrDate(thedate);
  }

  // Assemble params
  const params = {};

  if (thedate) params.exactDate = thedate;

  if (last > 0) params.chartLast = last;
  if (last > 0) params.chartLast = last;
  if (IEXOnly) params.chartIEXOnly = IEXOnly;
  if (reset) params.chartReset = reset;
  if (simplify) params.chartSimplify = simplify;
  if (interval > 0) params.chartInterval = interval;
  if (changeFromClose) params.changeFromClose = changeFromClose;
  if (IEXWhenNull) params.chartIEXWhenNull = IEXWhenNull;

  let base_url = `stock/${_quoteSymbols(symbol)}/intraday-prices?`;

  if (Object.keys(params).length > 0) {
    base_url += Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }
  return _get({
    url: base_url,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.intraday = function (
  symbol,
  options,
  { filter, format } = {},
) {
  return intraday(symbol, options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
