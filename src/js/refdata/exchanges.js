/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson } from "../common";
import { Client } from "../client";

/**
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const exchanges = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/market/us/exchanges`,
    token,
    version,
    filter,
  });

Client.prototype.exchanges = function (filter) {
  return exchanges(this._token, this._version, filter);
};

/**
 * Returns an array of exchanges.
 *
 * https://iexcloud.io/docs/api/#international-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const internationalExchanges = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/exchanges`,
    token,
    version,
    filter,
  });

Client.prototype.internationalExchanges = function (filter) {
  return internationalExchanges(this._token, this._version, filter);
};
