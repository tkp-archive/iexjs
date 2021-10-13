/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import { timeSeries } from "../../timeseries";

/**
 * internal
 * @param {object} options
 * @param {string} options.id
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
const _base = (
  { id, symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    { token, version, filter, format },
  );

/**
 * Precision Alpha performs an unbiased non-equilibrium market analysis on six months of closing price data for all NASDAQ and NYSE listed equities, every day after market close. Precision Alpha calculates scientifically and exactly: market emotion, power, resistance, noise/efficiency, and next day probabilities
 * https://iexcloud.io/docs/api/#precision-alpha-price-dynamics
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const priceDynamicsPrecisionAlpha = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base(
    { id: "PREMIUM_PRECISION_ALPHA_PRICE_DYNAMICS", symbol },
    timeseriesArgs,
    {
      token,
      version,
      filter,
      format,
    },
  );

Client.premium.prototype.priceDynamics = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return priceDynamicsPrecisionAlpha(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
