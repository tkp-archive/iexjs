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
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const figi = (
  figi_,
  { token = "", version = "", filter = "", format = "json" } = {},
) => {
  _raiseIfNotStr(figi_);
  return _get({
    url: `ref-data/figi?figi=${figi_}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.figi = function (figi_, { filter, format } = {}) {
  return figi(figi_, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
