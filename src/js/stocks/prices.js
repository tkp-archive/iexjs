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

// def chart(
//     symbol,
//     timeframe="1m",
//     date=None,
//     exactDate=None,
//     last=-1,
//     closeOnly=False,
//     byDay=False,
//     simplify=False,
//     interval=-1,
//     changeFromClose=False,
//     displayPercent=False,
//     sort="desc",
//     includeToday=False,
//     token="",
//     version="",
//     filter="",
// ):
//     """Historical price/volume data, daily and intraday

//     https://iexcloud.io/docs/api/#historical-prices
//     Data Schedule
//     1d: -9:30-4pm ET Mon-Fri on regular market trading days
//         -9:30-1pm ET on early close trading days
//     All others:
//         -Prior trading day available after 4am ET Tue-Sat

//     Args:
//         symbol (str): Ticker to request
//         timeframe (str): Timeframe to request e.g. 1m
//         date (datetime): date, if requesting intraday
//         exactDate (str): Same as `date`, takes precedence
//         last (int): If passed, chart data will return the last N elements from the time period defined by the range parameter
//         closeOnly (bool): Will return adjusted data only with keys date, close, and volume.
//         byDay (bool): Used only when range is date to return OHLCV data instead of minute bar data.
//         simplify (bool) If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
//         interval (int) If passed, chart data will return every Nth element as defined by chartInterval
//         changeFromClose (bool): If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
//         displayPercent (bool): If set to true, all percentage values will be multiplied by a factor of 100 (Ex: /stock/twtr/chart?displayPercent=true)
//         range (str): Same format as the path parameter. This can be used for batch calls.
//         sort (str): Can be "asc" or "desc" to sort results by date. Defaults to "desc"
//         includeToday (bool): If true, current trading day data is appended
//         token (str): Access token
//         version (str): API version
//         filter (str): filters: https://iexcloud.io/docs/api/#filter-results

//     Returns:
//         dict or DataFrame: result
//     """
//     _raiseIfNotStr(symbol)
//     symbol = _quoteSymbols(symbol)

//     base_url = "stock/{}/chart/{}?".format(symbol, timeframe)

//     # exactDate takes precedence
//     date = exactDate or date
//     if date:
//         date = _strOrDate(date)

//     if timeframe is not None and timeframe != "1d":
//         if timeframe not in _TIMEFRAME_CHART:
//             raise PyEXception("Range must be in {}".format(_TIMEFRAME_CHART))

//     # Assemble params
//     params = {}

//     # TODO need these?
//     # if date:
//     #     params["exactDate"] = date
//     # if range:
//     #     params["range"] = range

//     if last > 0:
//         params["chartLast"] = last

//     if closeOnly:
//         params["chartCloseOnly"] = closeOnly

//     if byDay:
//         params["chartByDay"] = byDay

//     if simplify:
//         params["chartSimplify"] = simplify

//     if interval > 0:
//         params["chartInterval"] = interval

//     if changeFromClose:
//         params["changeFromClose"] = changeFromClose

//     if displayPercent:
//         params["displayPercent"] = displayPercent

//     if exactDate:
//         params["exactDate"] = exactDate

//     if sort:
//         if sort.lower() not in (
//             "asc",
//             "desc",
//         ):
//             raise PyEXception("Sort must be in (asc, desc), got: {}".format(sort))

//         params["sort"] = sort.lower()

//     if includeToday:
//         params["includeToday"] = includeToday

//     if date:
//         base_url = "stock/{}/chart/date/{}?".format(symbol, date)

//         if params:
//             base_url += "&".join("{}={}".format(k, v) for k, v in params.items())
//         return _getJson(base_url, token, version, filter)

//     if params:
//         base_url += "&".join("{}={}".format(k, v) for k, v in params.items())

//     return _getJson(base_url, token, version, filter)

// def intraday(
//     symbol,
//     date="",
//     exactDate="",
//     last=-1,
//     IEXOnly=False,
//     reset=False,
//     simplify=False,
//     interval=-1,
//     changeFromClose=False,
//     IEXWhenNull=False,
//     token="",
//     version="",
//     filter="",
// ):
//     """This endpoint will return aggregated intraday prices in one minute buckets

//     https://iexcloud.io/docs/api/#intraday-prices
//     9:30-4pm ET Mon-Fri on regular market trading days
//     9:30-1pm ET on early close trading days

//     Args:
//         symbol (str): Ticker to request
//         date (str): Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. Currently supporting trailing 30 calendar days of minute bar data.
//         exactDate (str): Same as `date`, takes precedence
//         last (number): If passed, chart data will return the last N elements
//         IEXOnly (bool): Limits the return of intraday prices to IEX only data.
//         reset (bool): If true, chart will reset at midnight instead of the default behavior of 9:30am ET.
//         simplify (bool): If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts.
//         interval (number): If passed, chart data will return every Nth element as defined by chartInterval
//         changeFromClose (bool): If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value.
//         IEXWhenNull (bool): By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available.
//         token (str): Access token
//         version (str): API version
//         filter (str): filters: https://iexcloud.io/docs/api/#filter-results

//     Returns:
//         dict or DataFrame: result
//     """
//     _raiseIfNotStr(symbol)
//     symbol = _quoteSymbols(symbol)

//     # exactDate takes precedence
//     date = exactDate or date
//     if date:
//         date = _strOrDate(date)

//     # Assemble params
//     params = {}

//     if date:
//         params["exactDate"] = date

//     if last > 0:
//         params["chartLast"] = last

//     if IEXOnly:
//         params["chartIEXOnly"] = IEXOnly

//     if reset:
//         params["chartReset"] = reset

//     if simplify:
//         params["chartSimplify"] = simplify

//     if interval > 0:
//         params["chartInterval"] = interval

//     if changeFromClose:
//         params["changeFromClose"] = changeFromClose

//     if IEXWhenNull:
//         params["chartIEXWhenNull"] = IEXWhenNull

//     base_url = "stock/{}/intraday-prices?".format(symbol)

//     if params:
//         base_url += "&".join("{}={}".format(k, v) for k, v in params.items())
//     return _getJson(base_url, token, version, filter)
