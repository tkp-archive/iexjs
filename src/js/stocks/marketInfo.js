/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import {
  _getJson,
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
 */
export const collections = (tag, collectionName, token, version, filter) => {
  if (_COLLECTION_TAGS.indexOf(tag) < 0) {
    throw new IEXJSException("Uncrecognized tag");
  }
  return _getJson({
    url: `stock/market/collection/${tag}?collectionName=${
      collectionName || ""
    }`,
    token,
    version,
    filter,
  });
};

Client.prototype.collections = function (tag, collectionName, filter) {
  return collections(tag, collectionName, this._token, this._version, filter);
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
 */
export const earningsToday = (token, version, filter) =>
  _getJson({
    url: `stock/market/today-earnings`,
    token,
    version,
    filter,
  });

Client.prototype.earningsToday = function (filter) {
  return earningsToday(this._token, this._version, filter);
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
 */
export const ipoToday = (token, version, filter) =>
  _getJson({
    url: `stock/market/today-ipos`,
    token,
    version,
    filter,
  });

Client.prototype.ipoToday = function (filter) {
  return ipoToday(this._token, this._version, filter);
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
 */
export const ipoUpcoming = (token, version, filter) =>
  _getJson({
    url: `stock/market/upcoming-ipos`,
    token,
    version,
    filter,
  });

Client.prototype.ipoUpcoming = function (filter) {
  return ipoUpcoming(this._token, this._version, filter);
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
 */
export const list = (option, token, version, filter) => {
  // eslint-disable-next-line no-param-reassign
  option = option || "mostactive";
  if (_LIST_OPTIONS.indexOf(option) < 0) {
    throw new IEXJSException("Option not recognized");
  }
  return _getJson({
    url: `stock/market/list/${option}`,
    token,
    version,
    filter,
  });
};

Client.prototype.list = function (option, filter) {
  return list(option, this._token, this._version, filter);
};

/**
 * This endpoint returns real time traded volume on U.S. markets.
 *
 * https://iexcloud.io/docs/api/#market-volume-u-s
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const marketVolume = (token, version, filter) =>
  _getJson({
    url: `market/`,
    token,
    version,
    filter,
  });

Client.prototype.marketVolume = function (filter) {
  return marketVolume(this._token, this._version, filter);
};

/**
 * Returns the official open and close for whole market.
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const marketOhlc = (token, version, filter) =>
  _getJson({
    url: `stock/market/ohlc`,
    token,
    version,
    filter,
  });

Client.prototype.marketOhlc = function (filter) {
  return marketOhlc(this._token, this._version, filter);
};

/**
 * This returns previous day adjusted price data for whole market
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const marketYesterday = (token, version, filter) =>
  _getJson({
    url: `stock/market/previous`,
    token,
    version,
    filter,
  });

Client.prototype.marketYesterday = function (filter) {
  return marketYesterday(this._token, this._version, filter);
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
 */
export const sectorPerformance = (token, version, filter) =>
  _getJson({
    url: `stock/market/sector-performance`,
    token,
    version,
    filter,
  });

Client.prototype.sectorPerformance = function (filter) {
  return sectorPerformance(this._token, this._version, filter);
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
 */
export const marketShortInterest = (date, token, version, filter) => {
  if (date) {
    return _getJson({
      url: `stock/market/short-interest/${_strOrDate(date)}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `stock/market/short-interest`,
    token,
    version,
    filter,
  });
};

Client.prototype.marketShortInterest = function (date, filter) {
  return marketShortInterest(date, this._token, this._version, filter);
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const upcomingEvents = (symbol, refid, token, version, filter) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _getJson({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-events`,
      token,
      version,
      filter,
    });
  }

  return _getJson({
    url: `stock/market/upcoming-events`,
    token,
    version,
    filter,
  });
};

Client.prototype.upcomingEvents = function (symbol, refid, filter) {
  return upcomingEvents(symbol, refid, this._token, this._version, filter);
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const upcomingEarnings = (symbol, refid, token, version, filter) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _getJson({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-earnings`,
      token,
      version,
      filter,
    });
  }

  return _getJson({
    url: `stock/market/upcoming-earnings`,
    token,
    version,
    filter,
  });
};

Client.prototype.upcomingEarnings = function (symbol, refid, filter) {
  return upcomingEarnings(symbol, refid, this._token, this._version, filter);
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const upcomingDividends = (symbol, refid, token, version, filter) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _getJson({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-dividends`,
      token,
      version,
      filter,
    });
  }

  return _getJson({
    url: `stock/market/upcoming-dividends`,
    token,
    version,
    filter,
  });
};

Client.prototype.upcomingDividends = function (symbol, refid, filter) {
  return upcomingDividends(symbol, refid, this._token, this._version, filter);
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const upcomingSplits = (symbol, refid, token, version, filter) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _getJson({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-splits`,
      token,
      version,
      filter,
    });
  }

  return _getJson({
    url: `stock/market/upcoming-splits`,
    token,
    version,
    filter,
  });
};

Client.prototype.upcomingSplits = function (symbol, refid, filter) {
  return upcomingSplits(symbol, refid, this._token, this._version, filter);
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up
 * @param {string} refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const upcomingIPOs = (symbol, refid, token, version, filter) => {
  if (symbol) {
    _raiseIfNotStr(symbol);
    return _getJson({
      url: `stock/${_quoteSymbols(symbol)}/upcoming-ipos`,
      token,
      version,
      filter,
    });
  }

  return _getJson({
    url: `stock/market/upcoming-ipos`,
    token,
    version,
    filter,
  });
};

Client.prototype.upcomingIPOs = function (symbol, refid, filter) {
  return upcomingIPOs(symbol, refid, this._token, this._version, filter);
};
