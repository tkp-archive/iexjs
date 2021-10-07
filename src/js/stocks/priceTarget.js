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
 * Provides the latest avg, high, and low analyst price target for a symbol.
 *
 * https://iexcloud.io/docs/api/#price-target
 *
 * @param {string} symbol ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const priceTarget = (
  symbol,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/price-target`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.priceTarget = function (symbol, { filter, format } = {}) {
  return priceTarget(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
