/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _TIMEFRAME_DIVSPLIT,
  _getJson,
  _quoteSymbols,
  _raiseIfNotStr,
  _timeseriesWrapper,
  IEXJSException,
} from "../common";
import { timeSeries } from "./timeseries";
import { Client } from "../client";

/**
 * Stock split history
 *
 * https://iexcloud.io/docs/api/#splits
 *
 * @param {string} symbol Ticker to request
 * @param {string} timeframe timeframe for data
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const stockSplits = (symbol, timeframe, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (_TIMEFRAME_DIVSPLIT.indexOf(timeframe || "ytd") < 0) {
    throw new IEXJSException("Timeframe not recognized");
  }
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/splits/${timeframe || "ytd"}`,
    token,
    version,
    filter,
  });
};

Client.prototype.stockSplits = function (symbol, timeframe, filter) {
  return stockSplits(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Bonus Issue Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#bonus-issue
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const bonusIssue = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_bonus",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.bonusIssue = function (symbol, timeframe, filter) {
  return bonusIssue(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Distribution Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#distribution
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const distribution = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_distribution",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.distribution = function (symbol, timeframe, filter) {
  return distribution(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Obtain up-to-date and detailed information on all new dividend announcements, as well as 12+ years of historical dividend records. This endpoint covers over 39,000 US equities, mutual funds, ADRs, and ETFs.
 *     You’ll be provided with:
 *     Detailed information on both cash and stock dividends including record, payment, ex, and announce dates
 *     Gross and net amounts
 *     Details of all currencies in which a dividend can be paid
 *     Tax information
 *     The ability to keep up with the growing number of complex dividend distributions
 *
 * https://iexcloud.io/docs/api/#dividends
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const dividends = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_dividends",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.dividends = function (symbol, timeframe, filter) {
  return dividends(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Return of capital up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#return-of-capital
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const returnOfCapital = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_return_of_capital",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.returnOfCapital = function (symbol, timeframe, filter) {
  return returnOfCapital(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Rights issue up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#rights-issue
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const rightsIssue = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_rights",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.rightsIssue = function (symbol, timeframe, filter) {
  return rightsIssue(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Right to purchase up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#right-to-purchase
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const rightToPurchase = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_right_to_purchase",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.rightToPurchase = function (symbol, timeframe, filter) {
  return rightToPurchase(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Security reclassification up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#security-reclassification
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const securityReclassification = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_security_reclassification",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.securityReclassification = function (
  symbol,
  timeframe,
  filter,
) {
  return securityReclassification(
    symbol,
    timeframe,
    this._token,
    this._version,
    filter,
  );
};

/**
 * Security Swap up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#security-swap
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const securitySwap = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_security_swap",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.securitySwap = function (symbol, timeframe, filter) {
  return securitySwap(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Security spinoff up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#spinoff
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const spinoff = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_spinoff",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.spinoff = function (symbol, timeframe, filter) {
  return spinoff(symbol, timeframe, this._token, this._version, filter);
};

/**
 * Security splits up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 *
 * https://iexcloud.io/docs/api/#splits
 *
 * @param {string} symbol Ticker to request
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {object} timeseries_args Arguments to pass through to timeseries call
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const splits = (
  symbol,
  refid,
  timeseries_options,
  token,
  version,
  filter,
) => {
  _raiseIfNotStr(symbol);
  _timeseriesWrapper(timeseries_options);

  return timeSeries(
    {
      id: "advanced_splits",
      key: symbol,
      subkey: refid || "",
      ...timeseries_options,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.splits = function (symbol, timeframe, filter) {
  return splits(symbol, timeframe, this._token, this._version, filter);
};
