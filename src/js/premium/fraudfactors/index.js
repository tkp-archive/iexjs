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
 * The Similarity Index quantifies the textual differences between a given company’s annual or quarterly filings on an “as disclosed” basis. For example, a similarity score is calculated by comparing a company’s 2017 10-K with the 2016 10-K; or a company’s 2017 Q3 10-Q compared to the 2016 Q3 10-Q a year ago.
 * Intuitively, firms breaking from routine phrasing and content in mandatory disclosures give clues about their future performance which eventually drive stock returns over time. This data set captures significant changes in disclosure texts in the form of low similarity scores.
 * Academic research has shown that a portfolio that shorts low similarity scores and longs high similarity scores earns non-trivial and uncorrelated returns over a period of 12-18 months.
 * Data available from 2001 with coverage of about 23,000 equities
 * https://iexcloud.io/docs/api/#similiarity-index
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const similarityIndexFraudFactors = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_FRAUD_FACTORS_SIMILARITY_INDEX",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.similarityIndex = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return similarityIndexFraudFactors(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * The data set records the date in which a firm files a Non-Timely notification with the SEC.
 * Companies regulated by the SEC are required to file a Non-Timely notification when they are unable to file their annual or quarterly disclosures on time. In most cases, the inability to file annual/quarterly disclosures on time is a red-flag and thus a valuable signal for algorithmic strategies and fundamental investing alike.
 * Data available from 1994 with coverage of about 18,000 equities
 * https://iexcloud.io/docs/api/#non-timely-filings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const nonTimelyFilingsFraudFactors = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_FRAUD_FACTORS_NON_TIMELY_FILINGS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.nonTimelyFilings = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return nonTimelyFilingsFraudFactors(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};
