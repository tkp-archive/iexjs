/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-param-reassign */
import { _get, _quoteSymbols, _raiseIfNotStr } from "../common";
import { Client } from "../client";

/**
 * News about company
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {number} options.last number to get
 * @param {string} options.language filter news by language
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const news = (
  { symbol, last, language } = {},
  { token, version, filter, format } = {},
) => {
  symbol = symbol || "market";
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/news/last/${last || 10}${
      language ? `?language=${language}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.news = function (options, standardOptions) {
  return news(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * News about market
 *
 * https://iexcloud.io/docs/api/#news
 *
 * @param {object} options
 * @param {number} options.last number to get
 * @param {string} options.language filter news by language
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const marketNews = (
  { last, language } = {},
  { token, version, filter, format } = {},
) =>
  _get({
    url: `stock/market/news/last/${last || 10}${
      language ? `?language=${language}` : ""
    }`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketNews = function (options, standardOptions) {
  return marketNews(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
