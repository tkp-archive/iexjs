/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import {
  _get,
  _quoteSymbols,
  _raiseIfNotStr,
  _strOrDate,
  _COLLECTION_TAGS,
  _LIST_OPTIONS,
  IEXJSException,
} from "../common";
import { Client } from "../client";

/**
 * Returns an array of quote objects for a given collection type. Currently supported collection types are sector, tag, and list
 *
 * https://iexcloud.io/docs/api/#collections
 *
 * @param {string} tag Sector, Tag, or List
 * @param {string} collectionName Associated name for tag
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const collections = (
  tag,
  collectionName,
  { token, version, filter, format } = {},
) => {
  if (_COLLECTION_TAGS.indexOf(tag) < 0) {
    throw new IEXJSException("Uncrecognized tag");
  }
  return _get({
    url: `stock/market/collection/${tag}?collectionName=${
      collectionName || ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.collections = function (
  tag,
  collectionName,
  { filter, format } = {},
) {
  return collections(tag, collectionName, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns earnings that will be reported today as two arrays: before the open bto and after market close amc.
 *   Each array contains an object with all keys from earnings, a quote object, and a headline key.
 *
 * https://iexcloud.io/docs/api/#earnings-today
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const earningsToday = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/today-earnings`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.earningsToday = function ({ filter, format } = {}) {
  return earningsToday({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures:
 *  rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user.
 *
 * https://iexcloud.io/docs/api/#ipo-calendar
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const ipoToday = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/today-ipos`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.ipoToday = function ({ filter, format } = {}) {
  return ipoToday({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures:
 *    rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user.
 *
 * https://iexcloud.io/docs/api/#ipo-calendar
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const ipoUpcoming = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/upcoming-ipos`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.ipoUpcoming = function ({ filter, format } = {}) {
  return ipoUpcoming({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns an array of quotes for the top 10 symbols in a specified list.
 *
 * https://iexcloud.io/docs/api/#list
 *
 * @param {string} option Option to query
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const list = (option, { token, version, filter, format } = {}) => {
  // eslint-disable-next-line no-param-reassign
  option = option || "mostactive";
  if (_LIST_OPTIONS.indexOf(option) < 0) {
    throw new IEXJSException("Option not recognized");
  }
  return _get({
    url: `stock/market/list/${option}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.list = function (option, { filter, format } = {}) {
  return list(option, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This endpoint returns real time traded volume on U.S. markets.
 *
 * https://iexcloud.io/docs/api/#market-volume-u-s
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const marketVolume = ({ token, version, filter, format } = {}) =>
  _get({
    url: `market/`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketVolume = function ({ filter, format } = {}) {
  return marketVolume({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns the official open and close for whole market.
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const marketOhlc = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/ohlc`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketOhlc = function ({ filter, format } = {}) {
  return marketOhlc({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This returns previous day adjusted price data for whole market
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const marketYesterday = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/previous`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketYesterday = function ({ filter, format } = {}) {
  return marketYesterday({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

export const marketPrevious = marketYesterday;
Client.prototype.marketPrevious = Client.prototype.marketYesterday;

/**
 * This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF.
 *
 * https://iexcloud.io/docs/api/#sector-performance
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const sectorPerformance = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/sector-performance`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.sectorPerformance = function ({ filter, format } = {}) {
  return sectorPerformance({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * The consolidated market short interest positions in all IEX-listed securities are included in the IEX Short Interest Report.
 *
 * https://iexcloud.io/docs/api/#listed-short-interest-list-in-dev
 *
 * @param {string} date effective datetime
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const marketShortInterest = (
  date,
  { token, version, filter, format } = {},
) => {
  if (date) {
    return _get({
      url: `stock/market/short-interest/${_strOrDate(date)}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stock/market/short-interest`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.marketShortInterest = function (
  date,
  { filter, format } = {},
) {
  return marketShortInterest(date, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const upcomingEvents = (
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-events${
        exactDate ? `?exactDate=${exactDate}` : ""
      }`,
      token,
      version,
      filter,
      format,
    });
  }

  return _get({
    url: `stock/market/upcoming-events${
      exactDate ? `?exactDate=${exactDate}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.upcomingEvents = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingEvents(symbol, refid, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const upcomingEarnings = (
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-earnings${
        exactDate ? `?exactDate=${exactDate}` : ""
      }`,
      token,
      version,
      filter,
      format,
    });
  }

  return _get({
    url: `stock/market/upcoming-earnings${
      exactDate ? `?exactDate=${exactDate}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.upcomingEarnings = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingEarnings(symbol, refid, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const upcomingDividends = (
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-dividends${
        exactDate ? `?exactDate=${exactDate}` : ""
      }`,
      token,
      version,
      filter,
      format,
    });
  }

  return _get({
    url: `stock/market/upcoming-dividends${
      exactDate ? `?exactDate=${exactDate}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.upcomingDividends = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingDividends(symbol, refid, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const upcomingSplits = (
  exactDate,
  { token, version, filter, format } = {},
) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-splits${
        exactDate ? `?exactDate=${exactDate}` : ""
      }`,
      token,
      version,
      filter,
      format,
    });
  }

  return _get({
    url: `stock/market/upcoming-splits${
      exactDate ? `?exactDate=${exactDate}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.upcomingSplits = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingSplits(symbol, refid, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const upcomingIPOs = (
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-ipos${
        exactDate ? `?exactDate=${exactDate}` : ""
      }`,
      token,
      version,
      filter,
      format,
    });
  }

  return _get({
    url: `stock/market/upcoming-ipos${
      exactDate ? `?exactDate=${exactDate}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.upcomingIPOs = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingIPOs(symbol, refid, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
