/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import { timeSeries } from "../../stocks";

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */
const _base = (id, symbol, token, version, filter, format, ...timeseriesArgs) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    token,
    version,
    filter,
    format,
  );

/**
 * Precision Alpha performs an unbiased non-equilibrium market analysis on six months of closing price data for all NASDAQ and NYSE listed equities, every day after market close. Precision Alpha calculates scientifically and exactly: market emotion, power, resistance, noise/efficiency, and next day probabilities
 * https://iexcloud.io/docs/api/#precision-alpha-price-dynamics
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const priceDynamicsPrecisionAlpha = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_PRECISION_ALPHA_PRICE_DYNAMICS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.priceDynamics = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return priceDynamicsPrecisionAlpha(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};
