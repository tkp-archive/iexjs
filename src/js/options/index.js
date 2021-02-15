/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _raiseIfNotStr } from "../common";
import { Client } from "../client";

/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} symbol ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const optionExpirations = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  return _getJson({
    url: `/stock/${symbol}/options`,
    token,
    version,
    filter,
  });
};

Client.prototype.optionExpirations = function (symbol, filter) {
  return optionExpirations(symbol, this._token, this._version, filter);
};

/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} symbol ticker
 * @param {string} expiration expiration string
 * @param {string} side option side
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const options = (symbol, expiration, side, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (side) {
    return _getJson({
      url: `stock/${symbol}/options/${expiration}/${side}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `stock/${symbol}/options/${expiration}`,
    token,
    version,
    filter,
  });
};

Client.prototype.options = function (symbol, expiration, side, filter) {
  return options(symbol, expiration, side, this._token, this._version, filter);
};
