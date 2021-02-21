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
 * https://iexcloud.io/docs/api/#stats-intraday
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const systemStats = (token, version, filter) =>
  _get({
    url: `stats/intraday`,
    token,
    version,
    filter,
  });

Client.prototype.systemStats = function (filter) {
  return systemStats(this._token, this._version, filter);
};

/**
 * https://iexcloud.io/docs/api/#stats-recent
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const recent = (token, version, filter) =>
  _get({
    url: `stats/recent`,
    token,
    version,
    filter,
  });

Client.prototype.recent = function (filter) {
  return recent(this._token, this._version, filter);
};

/**
 * https://iexcloud.io/docs/api/#stats-records
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const records = (token, version, filter) =>
  _get({
    url: `stats/records`,
    token,
    version,
    filter,
  });

Client.prototype.records = function (filter) {
  return records(this._token, this._version, filter);
};

/**
 * https://iexcloud.io/docs/api/#stats-historical-summary
 *
 * @param {string} date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const summary = (date, token, version, filter) => {
  if (date) {
    return _get({
      url: `stats/historical?date=${date}`,
      token,
      version,
      filter,
    });
  }
  return _get({
    url: `stats/historical`,
    token,
    version,
    filter,
  });
};

Client.prototype.summary = function (date, filter) {
  return summary(date, this._token, this._version, filter);
};

/**
 * https://iexcloud.io/docs/api/#stats-historical-daily
 *
 * @param {string} date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {number} last Optional last number to include
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const daily = (date, last, token, version, filter) => {
  if (date) {
    return _get({
      url: `stats/historical/daily?date=${date}`,
      token,
      version,
      filter,
    });
  }
  if (last) {
    return _get({
      url: `stats/historical/daily?last=${last}`,
      token,
      version,
      filter,
    });
  }
  return _get({
    url: `stats/historical/daily`,
    token,
    version,
    filter,
  });
};

Client.prototype.daily = function (date, last, filter) {
  return daily(date, last, this._token, this._version, filter);
};
