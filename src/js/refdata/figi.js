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
 * Returns a lookup for the given figi
 *
 * @param {object} options
 * @param {object} options.figi figi to lookup
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const figi = (
  // eslint-disable-next-line no-shadow
  { figi } = {},
  { token = "", version = "", filter = "", format = "json" } = {},
) => {
  _raiseIfNotStr(figi);
  return _get({
    url: `ref-data/figi?figi=${figi}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.figi = function (options, standardOptions) {
  return figi(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
