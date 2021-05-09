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
 * News about company
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {string} symbol ticker to request
 * @param {number} last number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const news = (symbol, last, { token, version, filter, format } = {}) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/news/last/${last || 10}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.news = function (symbol, last, { filter, format } = {}) {
  return news(symbol, last, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * News about market
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {number} last number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const marketNews = (last, { token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/news/last/${last || 10}`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketNews = function (last, { filter, format } = {}) {
  return marketNews(last, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
