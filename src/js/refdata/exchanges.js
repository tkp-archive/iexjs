/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../common";
import { Client } from "../client";

/**
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const exchanges = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/market/us/exchanges`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.exchanges = function (filter, format) {
  return exchanges(this._token, this._version, filter, format);
};

/**
 * Returns an array of exchanges.
 *
 * https://iexcloud.io/docs/api/#international-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const internationalExchanges = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/exchanges`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.internationalExchanges = function (filter, format) {
  return internationalExchanges(this._token, this._version, filter, format);
};
