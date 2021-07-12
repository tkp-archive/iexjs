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
 * Pulls data from the last four months.
 *
 * https://iexcloud.io/docs/api/#analyst-recommendations
 *
 * @param {string} symbol ticker to request
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const analystRecommendations = (
  symbol,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/recommendation-trends`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.analystRecommendations = function (
  symbol,
  { filter, format } = {},
) {
  return analystRecommendations(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
