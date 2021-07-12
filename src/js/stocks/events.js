/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _quoteSymbols, _raiseIfNotStr } from "../common";
import { Client } from "../client";

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
  return upcomingIPOs(symbol, exactDate, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
