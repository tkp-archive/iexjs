/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _raiseIfNotStr } from "../common";
import { Client } from "../client";
import { timeSeries } from "../timeseries";

/**
 * Get company's 10-Q statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const tenQ = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);
  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "10-Q",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.tenQ = function (options, { filter, format } = {}) {
  return tenQ(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Get company's 10-K statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const tenK = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);

  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "10-K",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.tenK = function (options, { filter, format } = {}) {
  return tenK(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Get company's 20-F statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const twentyF = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);

  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "20-F",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.twentyF = function (options, { filter, format } = {}) {
  return twentyF(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Get company's 40-F statement
 *
 * @param {object} options `timeseries` options
 * @param {string} options.symbol company symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fortyF = (options, { token, version, filter, format } = {}) => {
  const { symbol } = options;
  _raiseIfNotStr(symbol);
  return timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "40-F",
      ...(options || {}),
    },
    { token, version, filter, format },
  );
};

Client.prototype.fortyF = function (options, { filter, format } = {}) {
  return fortyF(options, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
