/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { timeSeries } from "../timeseries";
import { Client } from "../client";

/**
 * US 30-Year fixed rate mortgage average
 * https://iexcloud.io/docs/api/#mortgage-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const us30 = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "MORTGAGE",
      key: "MORTGAGE30US",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * US 15-Year fixed rate mortgage average
 * https://iexcloud.io/docs/api/#mortgage-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const us15 = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "MORTGAGE",
      key: "MORTGAGE15US",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * US 5/1-Year adjustable rate mortgage average
 * https://iexcloud.io/docs/api/#mortgage-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const us5 = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "MORTGAGE",
      key: "MORTGAGE5US",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.us30 = function (timeseriesArgs, standardOptions) {
  return us30(timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

Client.prototype.us15 = function (timeseriesArgs, standardOptions) {
  return us15(timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

Client.prototype.us5 = function (timeseriesArgs, standardOptions) {
  return us5(timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
