/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { _raiseIfNotStr, _timeseriesWrapper } from "../common";
import { Client } from "../client";
import { timeSeries } from "../timeseries";

/**
 * Obtain up-to-date and detailed information on all new dividend announcements, as well as 12+ years of historical dividend records. This endpoint covers over 39,000 US equities, mutual funds, ADRs, and ETFs.
 *     You’ll be provided with:
 *     Detailed information on both cash and stock dividends including record, payment, ex, and announce dates
 *     Gross and net amounts
 *     Details of all currencies in which a dividend can be paid
 *     Tax information
 *     The ability to keep up with the growing number of complex dividend distributions
 *
 * https://iexcloud.io/docs/api/#dividends
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const dividends = (
  symbol,
  refid,
  timeseries_options,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_dividends",
      key: symbol,
      subkey: refid || "",
      ...(timeseries_options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.dividends = function (
  symbol,
  refid,
  timeseries_options,
  { filter, format } = {},
) {
  return dividends(symbol, refid, timeseries_options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
