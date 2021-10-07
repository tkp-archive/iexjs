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
 * This endpoint provides CEO compensation for a company by symbol.
 *
 * https://iexcloud.io/docs/api/#ceo-compensation
 *
 * @param {object} options
 * @param {string} options.symbol Ticker to request
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const ceoCompensation = (
  { symbol } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `stock/${symbol}/ceo-compensation/`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.ceoCompensation = function (options, standardOptions) {
  return ceoCompensation(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
