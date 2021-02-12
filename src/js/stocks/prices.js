/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import {
  _TIMEFRAME_CHART,
  IEXJSException,
  _getJson,
  _quoteSymbols,
  _raiseIfNotStr,
  _strOrDate,
} from "../common";
import { Client } from "../client";

/**
 * Book data
 *
 * https://iextrading.com/developer/docs/#book
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const book = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/book`,
    token,
    version,
    filter,
  });
};

Client.prototype.book = function (symbol, filter) {
  return book(symbol, this._token, this._version, filter);
};

/**
 * This returns the 15 minute delayed market quote.
 *
 * https://iexcloud.io/docs/api/#delayed-quote
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const delayedQuote = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/delayed-quote`,
    token,
    version,
    filter,
  });
};

Client.prototype.delayedQuote = function (symbol, filter) {
  return delayedQuote(symbol, this._token, this._version, filter);
};
/**
 * This returns 15 minute delayed, last sale eligible trades.
 *
 * https://iexcloud.io/docs/api/#largest-trades
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const largestTrades = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/largest-trades`,
    token,
    version,
    filter,
  });
};

Client.prototype.largestTrades = function (symbol, filter) {
  return largestTrades(symbol, this._token, this._version, filter);
};

/**
 * Returns the official open and close for a give symbol.
 *
 * https://iexcloud.io/docs/api/#ohlc
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const ohlc = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/ohlc`,
    token,
    version,
    filter,
  });
};

Client.prototype.ohlc = function (symbol, filter) {
  return ohlc(symbol, this._token, this._version, filter);
};

/**
 * This returns previous day adjusted price data for one or more stocks
 *
 * https://iexcloud.io/docs/api/#previous-day-prices
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const yesterday = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/previous`,
    token,
    version,
    filter,
  });
};

Client.prototype.yesterday = function (symbol, filter) {
  return yesterday(symbol, this._token, this._version, filter);
};

export const previous = yesterday;
Client.prototype.previous = Client.prototype.yesterday;

/**
 * Price of ticker
 *
 * https://iexcloud.io/docs/api/#price
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const price = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/price`,
    token,
    version,
    filter,
  });
};

Client.prototype.price = function (symbol, filter) {
  return price(symbol, this._token, this._version, filter);
};

/**
 * Get quote for ticker
 *
 * https://iexcloud.io/docs/api/#quote
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const quote = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/quote`,
    token,
    version,
    filter,
  });
};

Client.prototype.quote = function (symbol, filter) {
  return quote(symbol, this._token, this._version, filter);
};

/**
 * This returns an array of effective spread, eligible volume, and price improvement of a stock, by market.
 *
 * https://iexcloud.io/docs/api/#price-only
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const spread = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/effective-spread`,
    token,
    version,
    filter,
  });
};

Client.prototype.spread = function (symbol, filter) {
  return spread(symbol, this._token, this._version, filter);
};

/**
 * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market.
 * This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
 *
 * https://iexcloud.io/docs/api/#volume-by-venue
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const volumeByVenue = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/volume-by-venue`,
    token,
    version,
    filter,
  });
};

Client.prototype.volumeByVenue = function (symbol, filter) {
  return volumeByVenue(symbol, this._token, this._version, filter);
};

/**
 * Historical price/volume data, daily and intraday
 *
 * https://iexcloud.io/docs/api/#historical-prices
 *
 * @param {string} symbol ticker to request
 * @param {string} timeframe Timeframe to request e.g. 1m
 * @param {string} date date, if requesting intraday
 * @param {string} exactDate Same as `date`, takes precedence
 * @param {number} last If passed, chart data will return the last N elements from the time period defined by the range parameter
 * @param {boolean} closeOnly Will return adjusted data only with keys date, close, and volume.
 * @param {boolean} byDay Used only when range is date to return OHLCV data instead of minute bar data.
 * @param {boolean} simplifyIf true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
 * @param {number} intervalIf passed, chart data will return every Nth element as defined by chartInterval
 * @param {boolean} changeFromClose If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
 * @param {boolean} displayPercent If set to true, all percentage values will be multiplied by a factor of 100 (Ex: /stock/twtr/chart?displayPercent=true)
 * @param {string} range Same format as the path parameter. This can be used for batch calls.
 * @param {string} sort Can be "asc" or "desc" to sort results by date. Defaults to "desc"
 * @param {boolean} includeToday If true, current trading day data is appended
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const chart = (symbol, options, token, version, filter) => {
  const {
    timeframe = "1m",
    date = "",
    exactDate = "",
    last = -1,
    closeOnly = false,
    byDay = false,
    simplify = false,
    interval = -1,
    changeFromClose = false,
    displayPercent = false,
    sort = "desc",
    includeToday = false,
  } = options;

  _raiseIfNotStr(symbol);
  let base_url = `stock/${_quoteSymbols(symbol)}/chart/${timeframe}?`;

  // exactDate takes precedence
  let thedate = exactDate || date;
  if (thedate) {
    thedate = _strOrDate(thedate);
  }

  if (timeframe && timeframe !== "1d") {
    if (_TIMEFRAME_CHART.indexOf(timeframe) < 0) {
      throw new IEXJSException(`Timeframe not recognized ${timeframe}`);
    }
  }

  // Assemble params
  const params = {};

  if (last > 0) params.chartLast = last;
  if (closeOnly) params.chartCloseOnly = closeOnly;
  if (byDay) params.chartByDay = byDay;
  if (simplify) params.chartSimplify = simplify;
  if (interval > 0) params.chartInterval = interval;
  if (changeFromClose) params.changeFromClose = changeFromClose;
  if (displayPercent) params.displayPercent = displayPercent;
  if (exactDate) params.exactDate = exactDate;
  if (sort) {
    if (sort.lower() !== "asc" && sort.lower() !== "desc") {
      throw new IEXJSException(`Sort not recognized: ${sort}`);
    }
    params.sort = sort.lower();
  }

  if (includeToday) params.includeToday = includeToday;

  if (thedate) {
    base_url = `stock/${_quoteSymbols(symbol)}/chart/date/${thedate}?`;
    if (Object.keys(params).length > 0) {
      base_url += params
        .entries()
        .map((key, value) => `${key}=${value}`)
        .join("&");
    }
    return _getJson({
      url: base_url,
      token,
      version,
      filter,
    });
  }

  if (Object.keys(params).length > 0) {
    base_url += params
      .entries()
      .map((key, value) => `${key}=${value}`)
      .join("&");
  }
  return _getJson({
    url: base_url,
    token,
    version,
    filter,
  });
};

Client.prototype.chart = function (symbol, options, filter) {
  return chart(symbol, options, this._token, this._version, filter);
};

/**
 * This endpoint will return aggregated intraday prices in one minute buckets
 *
 * https://iexcloud.io/docs/api/#intraday-prices
 *
 * @param {string} symbol ticker to request
 * @param {string} date (str): Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. Currently supporting trailing 30 calendar days of minute bar data.
 * @param {string} exactDate (str): Same as `date`, takes precedence
 * @param {number} last (number): If passed, chart data will return the last N elements
 * @param {boolean} IEXOnly (bool): Limits the return of intraday prices to IEX only data.
 * @param {boolean} reset (bool): If true, chart will reset at midnight instead of the default behavior of 9:30am ET.
 * @param {boolean} simplify (bool): If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
 * @param {number} interval (number): If passed, chart data will return every Nth element as defined by chartInterval
 * @param {boolean} changeFromClose (bool): If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
 * @param {boolean} IEXWhenNull (bool): By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const intraday = (symbol, options, token, version, filter) => {
  const {
    date = "",
    exactDate = "",
    last = -1,
    IEXOnly = false,
    reset = false,
    simplify = false,
    interval = -1,
    changeFromClose = false,
    IEXWhenNull = false,
  } = options;

  _raiseIfNotStr(symbol);

  // exactDate takes precedence
  let thedate = exactDate || date;
  if (thedate) {
    thedate = _strOrDate(thedate);
  }

  // Assemble params
  const params = {};

  if (thedate) params.exactDate = thedate;

  if (last > 0) params.chartLast = last;
  if (last > 0) params.chartLast = last;
  if (IEXOnly) params.chartIEXOnly = IEXOnly;
  if (reset) params.chartReset = reset;
  if (simplify) params.chartSimplify = simplify;
  if (interval > 0) params.chartInterval = interval;
  if (changeFromClose) params.changeFromClose = changeFromClose;
  if (IEXWhenNull) params.chartIEXWhenNull = IEXWhenNull;

  let base_url = "stock/{}/intraday-prices?".format(symbol);

  if (Object.keys(params).length > 0) {
    base_url += params
      .entries()
      .map((key, value) => `${key}=${value}`)
      .join("&");
  }
  return _getJson({
    url: base_url,
    token,
    version,
    filter,
  });
};

Client.prototype.intraday = function (symbol, options, filter) {
  return intraday(symbol, options, this._token, this._version, filter);
};
