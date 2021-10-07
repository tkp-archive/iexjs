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
 * Returns aggregated insiders summary data for the last 6 months.
 *
 * https://iexcloud.io/docs/api/#insider-summary
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const insiderSummary = (
  { symbol } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/insider-summary`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.insiderSummary = function (
  { symbol } = {},
  { filter, format } = {},
) {
  return insiderSummary(
    { symbol },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};
