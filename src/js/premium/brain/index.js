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
 * Brain Company’s Sentiment Indicator monitors the stock sentiment from the last 30 days of public financial news for about 3,500 US stocks. The sentiment scoring technology is based on a combination of various natural language processing techniques. The sentiment score assigned to each stock is a value ranging from -1 (most negative) to +1 (most positive) that is updated daily.
 * https://iexcloud.io/docs/api/#brain-companys-30-day-sentiment-indicator
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const thirtyDaySentimentBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_SENTIMENT_30_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.thirtyDaySentiment = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return thirtyDaySentimentBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Brain Company’s Sentiment Indicator monitors the stock sentiment from the last 7 days of public financial news for about 3,500 US stocks. The sentiment scoring technology is based on a combination of various natural language processing techniques. The sentiment score assigned to each stock is a value ranging from -1 (most negative) to +1 (most positive) that is updated daily.
 * https://iexcloud.io/docs/api/#brain-companys-7-day-sentiment-indicator
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const sevenDaySentimentBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_SENTIMENT_7_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.sevenDaySentiment = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return sevenDaySentimentBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 21 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-21-day-machine-learning-estimated-return-ranking
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const twentyOneDayMLReturnRankingBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_RANKING_21_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.twentyOneDayMLReturnRanking = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return twentyOneDayMLReturnRankingBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-10-day-machine-learning-estimated-return-ranking
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const tenDayMLReturnRankingBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_RANKING_10_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.tenDayMLReturnRanking = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return tenDayMLReturnRankingBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-5-day-machine-learning-estimated-return-ranking
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fiveDayMLReturnRankingBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_RANKING_5_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.fiveDayMLReturnRanking = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return fiveDayMLReturnRankingBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-3-day-machine-learning-estimated-return-ranking
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const threeDayMLReturnRankingBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_RANKING_3_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.threeDayMLReturnRanking = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return threeDayMLReturnRankingBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Brain Company’s Machine Learning proprietary platform is used to generate a daily stock ranking based on the predicted future returns of a universe of around 1,000 stocks over 10 days. The model implements a voting scheme of machine learning classifiers that non linearly combine a variety of features with a series of techniques aimed at mitigating the well-known overfitting problem for financial data with a low signal to noise ratio.
 * https://iexcloud.io/docs/api/#brain-companys-2-day-machine-learning-estimated-return-ranking
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const twoDayMLReturnRankingBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_RANKING_2_DAYS", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.twoDayMLReturnRanking = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return twoDayMLReturnRankingBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Metrics about the language used in a company’s most recent annual or quarterly filings (10Ks and 10Qs). Includes metrics on the financial sentiment and the scores based on the prevalence of words in the statement categorized into four themes: constraining language, interesting language, litigious language, and language indicating uncertainty.
 * https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-quarterly-and-annual
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const languageMetricsOnCompanyFilingsAllBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_LANGUAGE_METRICS_ALL", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.languageMetricsOnCompanyFilingsAll = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return languageMetricsOnCompanyFilingsAllBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Metrics about the language used in a company’s most recent annual filing (10Ks). Includes metrics on the financial sentiment and the scores based on the prevalence of words in the statement categorized into four themes: constraining language, interesting language, litigious language, and language indicating uncertainty.
 * https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-annual-only
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const languageMetricsOnCompanyFilingsBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base({ id: "PREMIUM_BRAIN_LANGUAGE_METRICS_10K", symbol }, timeseriesArgs, {
    token,
    version,
    filter,
    format,
  });

Client.premium.prototype.languageMetricsOnCompanyFilings = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return languageMetricsOnCompanyFilingsBrain(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Compares Brain’s sentiment and language metrics from the company’s most recent repot (annual or quarterly) to the report from last year (10Ks) or the corresponding quarter the prior year (10Qs).
 * https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-filings-quarterly-and-annual-from-prior-period
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const languageMetricsOnCompanyFilingsDifferenceAllBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base(
    { id: "PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_ALL", symbol },
    timeseriesArgs,
    {
      token,
      version,
      filter,
      format,
    },
  );

Client.premium.prototype.languageMetricsOnCompanyFilingsDifferenceAll =
  function (options, timeseriesArgs, standardOptions) {
    return languageMetricsOnCompanyFilingsDifferenceAllBrain(
      options,
      timeseriesArgs,
      { token: this._token, version: this._version, ...standardOptions },
    );
  };

/**
 * Compares Brain’s sentiment and language metrics from the company’s most recent annual filing (10K) to the report from last year.
 * https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-annual-filings-from-prior-year
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const languageMetricsOnCompanyFilingsDifferenceBrain = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base(
    { id: "PREMIUM_BRAIN_LANGUAGE_DIFFERENCES_10K", symbol },
    timeseriesArgs,
    {
      token,
      version,
      filter,
      format,
    },
  );

Client.premium.prototype.languageMetricsOnCompanyFilingsDifference = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return languageMetricsOnCompanyFilingsDifferenceBrain(
    options,
    timeseriesArgs,
    { token: this._token, version: this._version, ...standardOptions },
  );
};
