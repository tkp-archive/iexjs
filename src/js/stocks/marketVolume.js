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
 * This endpoint returns real time traded volume on U.S. markets.
 *
 * https://iexcloud.io/docs/api/#market-volume-u-s
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const marketVolume = ({ token, version, filter, format } = {}) =>
  _get({
    url: `market/`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.marketVolume = function ({ filter, format } = {}) {
  return marketVolume({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
