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
 * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds,
 *    pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
 *
 * https://iexcloud.io/docs/api/#fund-ownership
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fundOwnership = (
  { symbol } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/fund-ownership`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.fundOwnership = function (
  { symbol } = {},
  { filter, format } = {},
) {
  return fundOwnership(
    { symbol },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};
