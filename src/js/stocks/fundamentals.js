/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import {
  _TIMEFRAME_DIVSPLIT,
  _checkPeriodLast,
  _get,
  _quoteSymbols,
  _raiseIfNotStr,
  IEXJSException,
} from "../common";
import { Client } from "../client";
import { timeSeries } from "../timeseries";

/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * https://iexcloud.io/docs/api/#balance-sheet
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const balanceSheet = async (
  { symbol, period, last } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/balance-sheet?period=${
          period || "quarter"
        }&last=${last || 1}`,
        token,
        version,
        filter,
        format,
      })
    ).balancesheet || []
  );
};

Client.prototype.balanceSheet = function (
  { symbol, period, last } = {},
  { filter, format } = {},
) {
  return balanceSheet(
    { symbol, period, last },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Pulls cash flow data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#cash-flow
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const cashFlow = async (
  { symbol, period, last } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/cash-flow?period=${
          period || "quarter"
        }&last=${last || 1}`,
        token,
        version,
        filter,
        format,
      })
    ).cashflow || []
  );
};

Client.prototype.cashFlow = function (
  { symbol, period, last } = {},
  { filter, format } = {},
) {
  return cashFlow(
    { symbol, period, last },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Dividend history
 *
 * https://iexcloud.io/docs/api/#dividends
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.timeframe timeframe for data
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const dividendsBasic = (
  { symbol, timeframe } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  if (_TIMEFRAME_DIVSPLIT.indexOf(timeframe || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/dividends/${timeframe || "ytd"}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.dividendsBasic = function (
  { symbol, timeframe } = {},
  { filter, format } = {},
) {
  return dividendsBasic(
    { symbol, timeframe },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters) and annually (last 4 years).
 *
 * https://iexcloud.io/docs/api/#earnings
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} options.field sub field to fetch
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const earnings = async (
  { symbol, period, last, field } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  if (field === undefined) {
    return (
      (
        await _get({
          url: `stock/${_quoteSymbols(symbol)}/earnings?period=${
            period || "quarter"
          }&last=${last || 1}`,
          token,
          version,
          filter,
          format,
        })
      ).earnings || []
    );
  }
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/earnings/${
        last || 1
      }/${field}?period=${period || "quarter"}`,
      token,
      version,
      filter,
      format,
    }).earnings) || []
  );
};

Client.prototype.earnings = function (
  { symbol, period, last, field } = {},
  { filter, format } = {},
) {
  return earnings(
    { symbol, period, last, field },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Pulls income statement, balance sheet, and cash flow data from the four most recent reported quarters.
 *
 * https://iexcloud.io/docs/api/#financials
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const financials = async (
  { symbol, period, last } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/financials?period=${
          period || "quarter"
        }&last=${last || 1}`,
        token,
        version,
        filter,
        format,
      })
    ).financials || []
  );
};

Client.prototype.financials = function (
  { symbol, period, last } = {},
  { filter, format } = {},
) {
  return financials(
    { symbol, period, last },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Pulls fundamentals data.
 *
 * https://iexcloud.io/docs/api/#advanced-fundamentals
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fundamentals = async (
  { symbol, period } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/fundamentals?period=${
          period || "quarter"
        }`,
        token,
        version,
        filter,
        format,
      })
    ).fundamentals || []
  );
};

Client.prototype.fundamentals = function (
  { symbol, period } = {},
  { filter, format } = {},
) {
  return fundamentals(
    { symbol, period },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Pulls income statement data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#income-statement
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {string} options.period Period, either 'annual' or 'quarter'
 * @param {number} options.last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const incomeStatement = async (
  { symbol, period, last } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (
      await _get({
        url: `stock/${_quoteSymbols(symbol)}/income?period=${
          period || "quarter"
        }&last=${last || 1}`,
        token,
        version,
        filter,
        format,
      })
    ).income || []
  );
};

Client.prototype.incomeStatement = function (
  { symbol, period, last } = {},
  { filter, format } = {},
) {
  return incomeStatement(
    { symbol, period, last },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};

/**
 * Get company's 10-Q statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const tenQ = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);
  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "10-Q",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.tenQ = function (options, { filter, format } = {}) {
  return tenQ(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Get company's 10-K statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const tenK = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);

  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "10-K",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.tenK = function (symbol, options, { filter, format } = {}) {
  return tenK(symbol, options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Get company's 20-F statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const twentyF = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);

  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "20-F",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.twentyF = function (options, { filter, format } = {}) {
  return twentyF(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Get company's 40-F statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const fortyF = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);
  timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "40-F",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.fortyF = function (options, { filter, format } = {}) {
  return fortyF(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
