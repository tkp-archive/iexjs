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
 * This call converts an RIC to an iex symbol
 *
 * https://iexcloud.io/docs/api/#ric-mapping
 *
 * @param {string} ric ric
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const ricLookup = (
  ric,
  { token = "", version = "", filter = "", format = "json" } = {},
) =>
  _get({
    url: `ref-data/ric?ric=${ric}`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.ricLookup = function (ric, { filter, format } = {}) {
  return ricLookup(ric, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
