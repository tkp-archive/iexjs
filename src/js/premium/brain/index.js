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
 * Brain Company’s Sentiment Indicator monitors the stock sentiment from the last 30 days of public financial news for about 3,500 US stocks. The sentiment scoring technology is based on a combination of various natural language processing techniques. The sentiment score assigned to each stock is a value ranging from -1 (most negative) to +1 (most positive) that is updated daily.
 * https://iexcloud.io/docs/api/#brain-companys-30-day-sentiment-indicator
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const thirtyDaySentimentBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_SENTIMENT_30_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.thirtyDaySentiment = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return thirtyDaySentimentBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Brain Company’s Sentiment Indicator monitors the stock sentiment from the last 7 days of public financial news for about 3,500 US stocks. The sentiment scoring technology is based on a combination of various natural language processing techniques. The sentiment score assigned to each stock is a value ranging from -1 (most negative) to +1 (most positive) that is updated daily.
 * https://iexcloud.io/docs/api/#brain-companys-7-day-sentiment-indicator
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const sevenDaySentimentBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_SENTIMENT_7_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.sevenDaySentiment = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return sevenDaySentimentBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 21 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-21-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const twentyOneDayMLReturnRankingBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_21_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.twentyOneDayMLReturnRanking = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return twentyOneDayMLReturnRankingBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-10-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const tenDayMLReturnRankingBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_10_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.tenDayMLReturnRanking = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return tenDayMLReturnRankingBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-5-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const fiveDayMLReturnRankingBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_5_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.fiveDayMLReturnRanking = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return fiveDayMLReturnRankingBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-3-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const threeDayMLReturnRankingBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_3_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.threeDayMLReturnRanking = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return threeDayMLReturnRankingBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-2-day-machine-learning-estimated-return-ranking
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const twoDayMLReturnRankingBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_2_DAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.twoDayMLReturnRanking = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return twoDayMLReturnRankingBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Metrics about the language used in a company’s most recent annual or quarterly filings (10Ks and 10Qs). Includes metrics on the financial sentiment and the scores based on the prevalence of words in the statement categorized into four themes: constraining language, interesting language, litigious language, and language indicating uncertainty.
 * https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-quarterly-and-annual
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const languageMetricsOnCompanyFilingsAllBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_METRICS_ALL",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.languageMetricsOnCompanyFilingsAll = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return languageMetricsOnCompanyFilingsAllBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Metrics about the language used in a company’s most recent annual filing (10Ks). Includes metrics on the financial sentiment and the scores based on the prevalence of words in the statement categorized into four themes: constraining language, interesting language, litigious language, and language indicating uncertainty.
 * https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-annual-only
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const languageMetricsOnCompanyFilingsBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_METRICS_10K",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.languageMetricsOnCompanyFilings = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return languageMetricsOnCompanyFilingsBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Compares Brain’s sentiment and language metrics from the company’s most recent repot (annual or quarterly) to the report from last year (10Ks) or the corresponding quarter the prior year (10Qs).
 * https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-filings-quarterly-and-annual-from-prior-period
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const languageMetricsOnCompanyFilingsDifferenceAllBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_ALL",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.languageMetricsOnCompanyFilingsDifferenceAll = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return languageMetricsOnCompanyFilingsDifferenceAllBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Compares Brain’s sentiment and language metrics from the company’s most recent annual filing (10K) to the report from last year.
 * https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-annual-filings-from-prior-year
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const languageMetricsOnCompanyFilingsDifferenceBrain = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_10K",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.languageMetricsOnCompanyFilingsDifference = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return languageMetricsOnCompanyFilingsDifferenceBrain(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};
