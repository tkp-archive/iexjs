/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _raiseIfNotStr } from "../common";
import { Client } from "../client";
import { timeSeries } from "../timeseries";

/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} symbol ticker
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const optionExpirations = (
  symbol,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  return _get({
    url: `/stock/${symbol}/options`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.optionExpirations = function (
  symbol,
  { filter, format } = {},
) {
  return optionExpirations(symbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} symbol ticker
 * @param {string} expiration expiration string
 * @param {string} side option side
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const stockOptions = (
  symbol,
  expiration,
  side,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  if (side) {
    return _get({
      url: `stock/${symbol}/options/${expiration}/${side}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stock/${symbol}/options/${expiration}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.stockOptions = function (
  symbol,
  expiration,
  side,
  { filter, format } = {},
) {
  return stockOptions(symbol, expiration, side, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns end of day options data
 *
 * https://iexcloud.io/docs/api/#options
 *
 * @param {string} contract  Specific dated option contract, e.g. NG0Z
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const options = (
  contract,
  timeseriesArgs,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(contract);
  return timeSeries(
    {
      id: contract,
      key: "chart",
      overrideBase: "options",
      ...timeseriesArgs,
    },
    {
      token,
      version,
      filter,
      format,
    },
  );
};

Client.prototype.options = function (
  contract,
  timeseriesArgs,
  { filter, format } = {},
) {
  return options(contract, timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
