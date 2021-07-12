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
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const thirtyYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS30",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.thirtyYear = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return thirtyYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const twentyYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS20",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.twentyYear = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return twentyYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const tenYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS10",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.tenYear = function (timeseriesArgs, { filter, format } = {}) {
  return tenYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const sevenYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS7",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.sevenYear = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return sevenYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fiveYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS5",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.fiveYear = function (timeseriesArgs, { filter, format } = {}) {
  return fiveYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const threeYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS3",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.threeYear = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return threeYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const twoYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS2",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.twoYear = function (timeseriesArgs, { filter, format } = {}) {
  return twoYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const oneYear = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS1",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.oneYear = function (timeseriesArgs, { filter, format } = {}) {
  return oneYear(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const sixMonth = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS6MO",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.sixMonth = function (timeseriesArgs, { filter, format } = {}) {
  return sixMonth(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const threeMonth = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS3MO",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.threeMonth = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return threeMonth(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const oneMonth = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "TREASURY",
      key: "DGS1MO",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.oneMonth = function (timeseriesArgs, { filter, format } = {}) {
  return oneMonth(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
