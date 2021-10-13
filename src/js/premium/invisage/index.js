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
 * @returns
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
 * Current and historical Consensus Analyst Recommendations and Price Targets. Generated with Invisage’s proprietary smart consensus methodlogy.
 * https://iexcloud.io/docs/api/#analyst-recommendations-and-price-targets-premium
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const analystRecommendationsAndPriceTargetsInvisage = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_INVISAGE_ESTIMATES", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.analystRecommendationsAndPriceTargetsInvisage =
  function (options, timeseriesArgs, standardOptions) {
    return analystRecommendationsAndPriceTargetsInvisage(
      options,
      timeseriesArgs,
      {
        token: this._token,
        version: this._version,
        ...standardOptions,
      },
    );
  };
