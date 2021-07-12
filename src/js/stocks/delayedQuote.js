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
 * This returns the 15 minute delayed market quote.
 *
 * https://iexcloud.io/docs/api/#delayed-quote
 *
 * @param {string} symbol ticker to request
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const delayedQuote = (
  symbol,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/delayed-quote`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.delayedQuote = function (symbol, { filter, format } = {}) {
  return delayedQuote(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
