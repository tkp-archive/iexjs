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
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures:
 *  rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user.
 *
 * https://iexcloud.io/docs/api/#ipo-calendar
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const ipoToday = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/today-ipos`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.ipoToday = function ({ filter, format } = {}) {
  return ipoToday({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures:
 *    rawData and viewData. rawData represents all available data for an IPO. viewData represents data structured for display to a user.
 *
 * https://iexcloud.io/docs/api/#ipo-calendar
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const ipoUpcoming = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stock/market/upcoming-ipos`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.ipoUpcoming = function ({ filter, format } = {}) {
  return ipoUpcoming({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
