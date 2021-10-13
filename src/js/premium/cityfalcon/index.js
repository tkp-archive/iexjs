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
 * CityFalcon democratises access to financial content and data, structures and personalises it, adds analytics, and delivers all of this in real-time. Covered are more than 300k financial and business topics, key people, organisations, stocks, sectors, locations, and more. Data is sourced from 10,000+ publications, encompassing a truly global view of markets and the events that affect them. Our natural language processing and machine learning models ensure relevancy for the chosen topics, and our in-house taxonomy offers more than simple keyword search, preventing false negatives when dealing with complex topics.
 * https://iexcloud.io/docs/api/#cityfalcon-news
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const newsCityFalcon = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_CITYFALCON_NEWS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.newsCityFalcon = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return newsCityFalcon(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
