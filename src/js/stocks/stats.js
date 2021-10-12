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
 * Returns everything in key stats plus additional advanced stats such as EBITDA, ratios, key financial data, and more.
 *
 * https://iexcloud.io/docs/api/#advanced-stats
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const stats = (
  { symbol } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/advanced-stats`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.stats = function (options, standardOptions) {
  return stats(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
