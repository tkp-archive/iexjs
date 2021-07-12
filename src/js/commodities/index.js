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
export const wti = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "DCOILWTICO",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.wti = function (timeseriesArgs, { filter, format } = {}) {
  return wti(timeseriesArgs, {
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
export const brent = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "DCOILBRENTEU",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.brent = function (timeseriesArgs, { filter, format } = {}) {
  return brent(timeseriesArgs, {
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
export const natgas = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "DHHNGSP",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.natgas = function (timeseriesArgs, { filter, format } = {}) {
  return natgas(timeseriesArgs, {
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
export const heatoil = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "DHOILNYH",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.heatoil = function (timeseriesArgs, { filter, format } = {}) {
  return heatoil(timeseriesArgs, {
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
export const jet = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "DJFUELUSGULF",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.jet = function (timeseriesArgs, { filter, format } = {}) {
  return jet(timeseriesArgs, {
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
export const diesel = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "GASDESW",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.diesel = function (timeseriesArgs, { filter, format } = {}) {
  return diesel(timeseriesArgs, {
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
export const gasreg = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "GASREGCOVW",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.gasreg = function (timeseriesArgs, { filter, format } = {}) {
  return gasreg(timeseriesArgs, {
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
export const gasmid = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "GASMIDCOVW",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.gasmid = function (timeseriesArgs, { filter, format } = {}) {
  return gasmid(timeseriesArgs, {
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
export const gasprm = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "GASPRMCOVW",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.gasprm = function (timeseriesArgs, { filter, format } = {}) {
  return gasprm(timeseriesArgs, {
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
export const propane = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ENERGY",
      key: "DPROPANEMBTX",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.propane = function (timeseriesArgs, { filter, format } = {}) {
  return propane(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
