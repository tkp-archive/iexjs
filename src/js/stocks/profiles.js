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
 * Company reference data
 *
 * https://iexcloud.io/docs/api/#company
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const company = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/company`,
    token,
    version,
    filter,
  });
};

Client.prototype.company = function (symbol, filter) {
  return company(symbol, this._token, this._version, filter);
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
 */
export const insiderRoster = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/insider-roster`,
    token,
    version,
    filter,
  });
};

Client.prototype.insiderRoster = function (symbol, filter) {
  return insiderRoster(symbol, this._token, this._version, filter);
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
 */
export const insiderSummary = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/insider-summary`,
    token,
    version,
    filter,
  });
};

Client.prototype.insiderSummary = function (symbol, filter) {
  return insiderSummary(symbol, this._token, this._version, filter);
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
 */
export const insiderTransactions = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/insider-transactions`,
    token,
    version,
    filter,
  });
};

Client.prototype.insiderTransactions = function (symbol, filter) {
  return insiderTransactions(symbol, this._token, this._version, filter);
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
 */
export const logo = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/logo`,
    token,
    version,
    filter,
  });
};

Client.prototype.logo = function (symbol, filter) {
  return logo(symbol, this._token, this._version, filter);
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
 */
export const peers = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/peers`,
    token,
    version,
    filter,
  });
};

Client.prototype.peers = function (symbol, filter) {
  return peers(symbol, this._token, this._version, filter);
};
