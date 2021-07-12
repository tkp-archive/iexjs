/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { timeSeries } from "../timeseries";
import { Client } from "../client";

/**
 * Credit Card Interest Rate
 * https://iexcloud.io/docs/api/#credit-card-interest-rate
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const creditcard = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "RATES",
      key: "TERMCBCCALLNS",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * CD Rate Non-Jumbo less than $100,000 Money market
 * https://iexcloud.io/docs/api/#cd-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const cdnj = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "RATES",
      key: "MMNRNJ",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * CD Rate Jumbo more than $100,000 Money market
 * https://iexcloud.io/docs/api/#cd-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const cdj = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "RATES",
      key: "MMNRJD",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.creditcard = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return creditcard(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.cdnj = function (timeseriesArgs, { filter, format } = {}) {
  return cdnj(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.cdj = function (timeseriesArgs, { filter, format } = {}) {
  return cdj(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
