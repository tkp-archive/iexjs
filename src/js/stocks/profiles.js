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
 * Company reference data
 *
 * https://iexcloud.io/docs/api/#company
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const company = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/company`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.company = function (symbol, filter, format) {
  return company(symbol, this._token, this._version, filter, format);
};

/**
 * Returns the top 10 insiders, with the most recent information.
 *
 * https://iexcloud.io/docs/api/#insider-roster
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const insiderRoster = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-roster`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.insiderRoster = function (symbol, filter, format) {
  return insiderRoster(symbol, this._token, this._version, filter, format);
};

/**
 * Returns aggregated insiders summary data for the last 6 months.
 *
 * https://iexcloud.io/docs/api/#insider-summary
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const insiderSummary = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-summary`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.insiderSummary = function (symbol, filter, format) {
  return insiderSummary(symbol, this._token, this._version, filter, format);
};

/**
 * Returns insider transactions.
 *
 * https://iexcloud.io/docs/api/#insider-transactions
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const insiderTransactions = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-transactions`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.insiderTransactions = function (symbol, filter, format) {
  return insiderTransactions(
    symbol,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * This is a helper function, but the google APIs url is standardized.
 *
 * https://iexcloud.io/docs/api/#logo
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const logo = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/logo`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.logo = function (symbol, filter, format) {
  return logo(symbol, this._token, this._version, filter, format);
};

/**
 * Peers of ticker
 *
 * https://iexcloud.io/docs/api/#peers
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const peers = (symbol, token, version, filter, format) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/peers`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.peers = function (symbol, filter, format) {
  return peers(symbol, this._token, this._version, filter, format);
};
