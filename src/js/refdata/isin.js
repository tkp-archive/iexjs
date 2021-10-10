/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../common";
import { Client } from "../client";

/**
 * This call converts an ISIN to an iex symbol
 *
 * https://iexcloud.io/docs/api/#isin-mapping
 *
 * @param {object} options
 * @param {string} options.isin isin
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const isinLookup = (
  { isin } = {},
  { token = "", version = "", filter = "", format = "json" } = {},
) =>
  _get({
    url: `ref-data/isin?isin=${isin}`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.isinLookup = function (options, standardOptions) {
  return isinLookup(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
