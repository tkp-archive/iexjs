/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-param-reassign */

import { _get, _strToList, _quoteSymbols } from "../common";
import { Client } from "../client";

const _baseEvents = (
  event,
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) => {
  // default to all events
  event = event || "events";

  // process symbol
  symbol = _strToList(symbol);

  // build url
  let url;

  if (symbol.length === 0) {
    // full market
    url = `stock/market/upcoming-${event}`;
  } else if (Symbol.length === 1) {
    // just 1 symbol
    url = `stock/${_quoteSymbols(symbol)}/upcoming-${event}`;
  } else {
    // many symbols
    url = `stock/market/upcoming-${event}?symbols=${_quoteSymbols(symbol)}`;
  }

  if (exactDate && symbol.length > 1) {
    url += `&exactDate=${exactDate}`;
  } else if (exactDate) {
    url += `?exactDate=${exactDate}`;
  }

  return _get({
    url,
    token,
    version,
    filter,
    format,
  });
};

/**
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market. If market is passed for the symbol, IPOs will also be included.
 *
 * https://iexcloud.io/docs/api/#upcoming-events
 *
 * @param {string} symbol Symbol to look up, or blank for `market`
 * @param {string} exactDate Optional. Exact date for which to get data
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const upcomingEvents = (
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) =>
  _baseEvents("events", symbol, exactDate, {
    token,
    version,
    filter,
    format,
  });

Client.prototype.upcomingEvents = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingEvents(symbol, exactDate, {
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
) =>
  _baseEvents("earnings", symbol, exactDate, {
    token,
    version,
    filter,
    format,
  });

Client.prototype.upcomingEarnings = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingEarnings(symbol, exactDate, {
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
) =>
  _baseEvents("dividends", symbol, exactDate, {
    token,
    version,
    filter,
    format,
  });

Client.prototype.upcomingDividends = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingDividends(symbol, exactDate, {
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
  symbol,
  exactDate,
  { token, version, filter, format } = {},
) =>
  _baseEvents("splits", symbol, exactDate, {
    token,
    version,
    filter,
    format,
  });

Client.prototype.upcomingSplits = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingSplits(symbol, exactDate, {
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
) =>
  _baseEvents("ipos", symbol, exactDate, {
    token,
    version,
    filter,
    format,
  });

Client.prototype.upcomingIPOs = function (
  symbol,
  exactDate,
  { filter, format } = {},
) {
  return upcomingIPOs(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
