/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { _getJson, _quoteSymbols, _raiseIfNotStr } from "../common";
import { Client } from "../client";

/**
 * News about company
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const news = (symbol, count, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/news/last/${count || 10}`,
    token,
    version,
    filter,
  });
};

Client.prototype.news = function (symbol, count, filter) {
  return news(symbol, count, this._token, this._version, filter);
};

/**
 * News about market
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const marketNews = (count, token, version, filter) =>
  _getJson({
    url: `stock/market/news/last/${count || 10}`,
    token,
    version,
    filter,
  });

Client.prototype.marketNews = function (symbol, filter) {
  return marketNews(symbol, this._token, this._version, filter);
};
