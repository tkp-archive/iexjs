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
 * This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF.
 *
 * https://iexcloud.io/docs/api/#sector-performance
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const sectorPerformance = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/sector-performance`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.sectorPerformance = function ({ filter, format } = {}) {
  return sectorPerformance({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
