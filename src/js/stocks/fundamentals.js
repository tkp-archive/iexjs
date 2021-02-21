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

/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * https://iexcloud.io/docs/api/#balance-sheet
 *
 * @param {string} symbol Ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const balanceSheet = async (
  symbol,
  period,
  last,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/balance-sheet?period=${
        period || "quarter"
      }&last=${last || 1}`,
      token,
      version,
      filter,
      format,
    }).balancesheet) || []
  );
};

Client.prototype.balanceSheet = function (
  symbol,
  period,
  last,
  filter,
  format,
) {
  return balanceSheet(
    symbol,
    period,
    last,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * Pulls cash flow data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#cash-flow
 *
 * @param {string} symbol Ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const cashFlow = async (
  symbol,
  period,
  last,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/cash-flow?period=${
        period || "quarter"
      }&last=${last || 1}`,
      token,
      version,
      filter,
      format,
    }).cashflow) || []
  );
};

Client.prototype.cashFlow = function (symbol, period, last, filter, format) {
  return cashFlow(
    symbol,
    period,
    last,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * Dividend history
 *
 * https://iexcloud.io/docs/api/#dividends
 *
 * @param {string} symbol Ticker to request
 * @param {string} timeframe timeframe for data
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const dividendsBasic = (
  symbol,
  timeframe,
  token,
  version,
  filter,
  format,
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

Client.prototype.dividendsBasic = function (symbol, timeframe, filter, format) {
  return dividendsBasic(
    symbol,
    timeframe,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * Earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters) and annually (last 4 years).
 *
 * https://iexcloud.io/docs/api/#earnings
 *
 * @param {string} symbol Ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} field sub field to fetch
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const earnings = async (
  symbol,
  period,
  last,
  field,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  if (field === undefined) {
    return (
      (await _get({
        url: `stock/${_quoteSymbols(symbol)}/earnings?period=${
          period || "quarter"
        }&last=${last || 1}`,
        token,
        version,
        filter,
        format,
      }).earnings) || []
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
  symbol,
  period,
  last,
  field,
  filter,
  format,
) {
  return earnings(
    symbol,
    period,
    last,
    field,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * Pulls income statement, balance sheet, and cash flow data from the four most recent reported quarters.
 *
 * https://iexcloud.io/docs/api/#financials
 *
 * @param {string} symbol Ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const financials = async (
  symbol,
  period,
  last,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/financials?period=${
        period || "quarter"
      }&last=${last || 1}`,
      token,
      version,
      filter,
      format,
    }).financials) || []
  );
};

Client.prototype.financials = function (symbol, period, last, filter, format) {
  return financials(
    symbol,
    period,
    last,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * Pulls fundamentals data.
 *
 * https://iexcloud.io/docs/api/#advanced-fundamentals
 *
 * @param {string} symbol Ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const fundamentals = async (
  symbol,
  period,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", 1);
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/fundamentals?period=${
        period || "quarter"
      }`,
      token,
      version,
      filter,
      format,
    }).fundamentals) || []
  );
};

Client.prototype.fundamentals = function (symbol, period, filter, format) {
  return fundamentals(
    symbol,
    period,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * Pulls income statement data. Available quarterly (4 quarters) or annually (4 years).
 *
 * https://iexcloud.io/docs/api/#income-statement
 *
 * @param {string} symbol Ticker to request
 * @param {string} period Period, either 'annual' or 'quarter'
 * @param {number} last Number of records to fetch, up to 12 for 'quarter' and 4 for 'annual'
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const incomeStatement = async (
  symbol,
  period,
  last,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  _checkPeriodLast(period || "quarter", last || 1);
  return (
    (await _get({
      url: `stock/${_quoteSymbols(symbol)}/income?period=${
        period || "quarter"
      }&last=${last || 1}`,
      token,
      version,
      filter,
      format,
    }).income) || []
  );
};

Client.prototype.incomeStatement = function (
  symbol,
  period,
  last,
  filter,
  format,
) {
  return incomeStatement(
    symbol,
    period,
    last,
    this._token,
    this._version,
    filter,
    format,
  );
};
