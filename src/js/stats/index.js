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
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const systemStats = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stats/intraday`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.systemStats = function (standardOptions) {
  return systemStats({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * https://iexcloud.io/docs/api/#stats-recent
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const recent = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stats/recent`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.recent = function (standardOptions) {
  return recent({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * https://iexcloud.io/docs/api/#stats-records
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const records = ({ token, version, filter, format } = {}) =>
  _get({
    url: `stats/records`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.records = function (standardOptions) {
  return records({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * https://iexcloud.io/docs/api/#stats-historical-summary
 *
 * @param {object} options
 * @param {string} options.date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const summary = (
  { date } = {},
  { token, version, filter, format } = {},
) => {
  if (date) {
    return _get({
      url: `stats/historical?date=${date}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stats/historical`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.summary = function (options, standardOptions) {
  return summary(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * https://iexcloud.io/docs/api/#stats-historical-daily
 *
 * @param {object} options
 * @param {string} options.date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {number} options.last Optional last number to include
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const daily = (
  { date, last } = {},
  { token, version, filter, format } = {},
) => {
  if (date) {
    return _get({
      url: `stats/historical/daily?date=${date}`,
      token,
      version,
      filter,
      format,
    });
  }
  if (last) {
    return _get({
      url: `stats/historical/daily?last=${last}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stats/historical/daily`,
    token,
    version,
    filter,
  });
};

Client.prototype.daily = function (options, standardOptions) {
  return daily(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
