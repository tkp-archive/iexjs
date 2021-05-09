/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _raiseIfNotStr } from "../common";
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
 * @param {string} format output format
 */
export const optionExpirations = (
  symbol,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `/stock/${symbol}/options`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.optionExpirations = function (
  symbol,
  { filter, format } = {},
) {
  return optionExpirations(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
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
 * @param {string} format output format
 */
export const options = (
  symbol,
  expiration,
  side,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  if (side) {
    return _get({
      url: `stock/${symbol}/options/${expiration}/${side}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stock/${symbol}/options/${expiration}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.options = function (
  symbol,
  expiration,
  side,
  { filter, format } = {},
) {
  return options(symbol, expiration, side, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
