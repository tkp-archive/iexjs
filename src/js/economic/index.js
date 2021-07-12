/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { Client } from "../client";
import { timeSeries } from "../timeseries";

/**
 * Federal Funds rate
 * https://iexcloud.io/docs/api/#federal-fund-rates
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fedfunds = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "FEDFUNDS",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Real GDP
 * https://iexcloud.io/docs/api/#real-gdp
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const gdp = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "A191RL1Q225SBEA",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Industrial Production Index
 * https://iexcloud.io/docs/api/#industrial-production-index
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const indpro = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "INDPRO",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Consumer Price Index
 * https://iexcloud.io/docs/api/#consumer-price-index
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const cpi = (timeseriesArgs, { token, version, format, filter } = {}) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "CPIAUCSL",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Total Payrolls
 * https://iexcloud.io/docs/api/#total-payrolls
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const payroll = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "PAYEMS",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Total Housing Starts
 * https://iexcloud.io/docs/api/#total-housing-starts
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const housing = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "HOUST",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Unemployment Rate
 * https://iexcloud.io/docs/api/#unemployment-rate
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const unemployment = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "UNRATE",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Total Vehicle Sales
 * https://iexcloud.io/docs/api/#total-vehicle-sales
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const vehicles = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "TOTALSA",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * US Recession Probabilities
 * https://iexcloud.io/docs/api/#us-recession-probabilities
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const recessionProb = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "RECPROUSM156N",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Initial Claims
 * https://iexcloud.io/docs/api/#initial-claims
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const initialClaims = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "IC4WSA",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Institutional Money Funds
 * https://iexcloud.io/docs/api/#institutional-money-funds
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const institutionalMoney = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "WRMFSL",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

/**
 * Retail Money Funds
 * https://iexcloud.io/docs/api/#retail-money-funds
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const retailMoney = (
  timeseriesArgs,
  { token, version, format, filter } = {},
) =>
  timeSeries(
    {
      id: "ECONOMIC",
      key: "WIMFSL",
      ...timeseriesArgs,
    },
    { token, version, format, filter },
  );

Client.prototype.fedfunds = function (timeseriesArgs, { filter, format } = {}) {
  return fedfunds(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.gdp = function (timeseriesArgs, { filter, format } = {}) {
  return gdp(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.indpro = function (timeseriesArgs, { filter, format } = {}) {
  return indpro(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.cpi = function (timeseriesArgs, { filter, format } = {}) {
  return cpi(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.payroll = function (timeseriesArgs, { filter, format } = {}) {
  return payroll(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.housing = function (timeseriesArgs, { filter, format } = {}) {
  return housing(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.unemployment = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return unemployment(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.vehicles = function (timeseriesArgs, { filter, format } = {}) {
  return vehicles(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.recessionProb = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return recessionProb(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.initialClaims = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return initialClaims(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.institutionalMoney = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return institutionalMoney(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

Client.prototype.retailMoney = function (
  timeseriesArgs,
  { filter, format } = {},
) {
  return retailMoney(timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
