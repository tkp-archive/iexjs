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
 * Kavout takes in over 200 factors and signals including fundamentals, pricing, technical indicators, and alternative data, and then uses an ensemble machine learning technique to analyze and rank stocks.
 * K Score is a stock rating and ranking score with values ranging from 1-to-9. A higher K Score (7-9) assigned to a stock indicates a higher probability of outperformance, whereas a lower K Score (1-3) indicates a lower probability of outperformance in the next month.
 * https://iexcloud.io/docs/api/#k-score-for-us-equities
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const kScore = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_KAVOUT_KSCORE",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.prototype.kScore = function (symbol, filter, format, ...timeseriesArgs) {
  return kScore(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Kavout takes in over 200 factors and signals including fundamentals, pricing, technical indicators, and alternative data, and then uses an ensemble machine learning technique to analyze and rank stocks.
 * K Score is a stock rating and ranking score with values ranging from 1-to-9. A higher K Score (7-9) assigned to a stock indicates a higher probability of outperformance, whereas a lower K Score (1-3) indicates a lower probability of outperformance in the next month.
 * For quantitative users, overlay K Score as a signal in investment models. Mitigate risk in portfolio construction by avoiding stocks with low K scores (1-3).
 * China Stock Market at a Glance
 * The China A-share stock market has two exchanges – Shanghai stock exchange (SSE) and Shenzhen stock exchange (SZSE). The SSE and the SZSE are the world’s 5th largest and 8th largest stock market by market capitalization respectively.
 * The most important Indices in China A-share are CSI 300, CSI 500 and CSI 800.
 * CSI 300 Index consists of the 300 largest and most liquid A-share stocks, similar to the largest 500 stocks by market cap in the US.
 * CSI 500 Index consists of the largest remaining 500 A-Share stocks after excluding the CSI 300 Index, similar to the largest 2,000 US stocks by market cap. CSI 500 Index reflects the overall performance of small-mid cap A-shares.
 * CSI 800 Index consists of all the constituents of the CSI 300 Index and CSI 500 Index, similar to the largest 3,000 US stocks by market cap.
 * https://iexcloud.io/docs/api/#k-score-for-china-a-shares
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const kScoreChina = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_KAVOUT_KSCORE_A_SHARES",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.prototype.kScoreChina = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return kScoreChina(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};
