/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson } from "../common";
import { Client } from "../client";

/**
 * This returns a current snapshot of the book for a specified cryptocurrency. For REST, you will receive a current snapshot of the current book for the specific cryptocurrency. For SSE Streaming, you will get a full representation of the book updated as often as the book changes. Examples of each are below:
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-book
 *
 * @param {string} symbol cryptocurrency ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const cryptoBook = (symbol, token, version, filter) =>
  _getJson({
    url: `/crypto/${symbol}/book`,
    token,
    version,
    filter,
  });

Client.prototype.cryptoBook = function (symbol, filter) {
  return cryptoBook(symbol, this._token, this._version, filter);
};

/**
 * This returns the price for a specified cryptocurrency.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-price
 *
 * @param {string} symbol cryptocurrency ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const cryptoPrice = (symbol, token, version, filter) =>
  _getJson({
    url: `/crypto/${symbol}/price`,
    token,
    version,
    filter,
  });

Client.prototype.cryptoPrice = function (symbol, filter) {
  return cryptoPrice(symbol, this._token, this._version, filter);
};

/**
 * This returns the price for a specified cryptocurrency.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-quote
 *
 * @param {string} symbol cryptocurrency ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const cryptoQuote = (symbol, token, version, filter) =>
  _getJson({
    url: `/crypto/${symbol}/quote`,
    token,
    version,
    filter,
  });

Client.prototype.cryptoQuote = function (symbol, filter) {
  return cryptoQuote(symbol, this._token, this._version, filter);
};
