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
 * This returns previous day adjusted price data for one or more stocks
 *
 * https://iexcloud.io/docs/api/#previous-day-prices
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const yesterday = (
  { symbol } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/previous`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.yesterday = function (options, standardOptions) {
  return yesterday(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const previous = yesterday;
Client.prototype.previous = Client.prototype.yesterday;

/**
 * This returns previous day adjusted price data for whole market
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const marketYesterday = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/previous`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketYesterday = function (options, standardOptions) {
  return marketYesterday({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const marketPrevious = marketYesterday;
Client.prototype.marketPrevious = Client.prototype.marketYesterday;
