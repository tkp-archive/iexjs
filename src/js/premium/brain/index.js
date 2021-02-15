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
const _base = (id, symbol, token, version, filter, ...timeseriesArgs) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    token,
    version,
    filter,
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
export const brain30DaySentiment = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_SENTIMENT_30_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain30DaySentiment = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain30DaySentiment(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brain7DaySentiment = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_SENTIMENT_7_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain7DaySentiment = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain7DaySentiment(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brain21DayMLReturnRanking = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_21_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain21DayMLReturnRanking = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain21DayMLReturnRanking(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brain10DayMLReturnRanking = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_10_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain10DayMLReturnRanking = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain10DayMLReturnRanking(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brain5DayMLReturnRanking = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_5_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain5DayMLReturnRanking = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain5DayMLReturnRanking(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brain3DayMLReturnRanking = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_3_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain3DayMLReturnRanking = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain3DayMLReturnRanking(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brain2DayMLReturnRanking = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_RANKING_2_DAYS",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brain2DayMLReturnRanking = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brain2DayMLReturnRanking(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brainLanguageMetricsOnCompanyFilingsAll = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_METRICS_ALL",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brainLanguageMetricsOnCompanyFilingsAll = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brainLanguageMetricsOnCompanyFilingsAll(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brainLanguageMetricsOnCompanyFilings = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_METRICS_10K",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brainLanguageMetricsOnCompanyFilings = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brainLanguageMetricsOnCompanyFilings(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brainLanguageMetricsOnCompanyFilingsDifferenceAll = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_ALL",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brainLanguageMetricsOnCompanyFilingsDifferenceAll = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brainLanguageMetricsOnCompanyFilingsDifferenceAll(
    symbol,
    this._token,
    this._version,
    filter,
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
export const brainLanguageMetricsOnCompanyFilingsDifference = (
  symbol,
  token,
  version,
  filter,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_10K",
    symbol,
    token,
    version,
    filter,
    ...timeseriesArgs,
  );

Client.prototype.brainLanguageMetricsOnCompanyFilingsDifference = function (
  symbol,
  filter,
  ...timeseriesArgs
) {
  return brainLanguageMetricsOnCompanyFilingsDifference(
    symbol,
    this._token,
    this._version,
    filter,
    ...timeseriesArgs,
  );
};
