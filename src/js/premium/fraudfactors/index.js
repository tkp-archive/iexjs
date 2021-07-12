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
 * @param {string} id
 * @param {string} symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 * @returns
 */
const _base = (
  id,
  symbol,
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
 * The Similarity Index quantifies the textual differences between a given company’s annual or quarterly filings on an “as disclosed” basis. For example, a similarity score is calculated by comparing a company’s 2017 10-K with the 2016 10-K; or a company’s 2017 Q3 10-Q compared to the 2016 Q3 10-Q a year ago.
 * Intuitively, firms breaking from routine phrasing and content in mandatory disclosures give clues about their future performance which eventually drive stock returns over time. This data set captures significant changes in disclosure texts in the form of low similarity scores.
 * Academic research has shown that a portfolio that shorts low similarity scores and longs high similarity scores earns non-trivial and uncorrelated returns over a period of 12-18 months.
 * Data available from 2001 with coverage of about 23,000 equities
 * https://iexcloud.io/docs/api/#similiarity-index
 * @param {string} symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const similarityIndexFraudFactors = (
  symbol,
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base("PREMIUM_FRAUD_FACTORS_SIMILARITY_INDEX", symbol, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.similarityIndex = function (
  symbol,
  timeseriesArgs,
  { filter, format } = {},
) {
  return similarityIndexFraudFactors(symbol, timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * The data set records the date in which a firm files a Non-Timely notification with the SEC.
 * Companies regulated by the SEC are required to file a Non-Timely notification when they are unable to file their annual or quarterly disclosures on time. In most cases, the inability to file annual/quarterly disclosures on time is a red-flag and thus a valuable signal for algorithmic strategies and fundamental investing alike.
 * Data available from 1994 with coverage of about 18,000 equities
 * https://iexcloud.io/docs/api/#non-timely-filings
 * @param {string} symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const nonTimelyFilingsFraudFactors = (
  symbol,
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base("PREMIUM_FRAUD_FACTORS_NON_TIMELY_FILINGS", symbol, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.nonTimelyFilings = function (
  symbol,
  timeseriesArgs,
  { filter, format } = {},
) {
  return nonTimelyFilingsFraudFactors(symbol, timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
