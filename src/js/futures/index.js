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
 * Returns end of day futures data
 *
 * https://iexcloud.io/docs/api/#futures
 *
 * @param {string} contract  Specific dated option contract, e.g. ES21M
 * @param {object} timeseriesArgs
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const futures = (
  contract,
  timeseriesArgs,
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(contract);
  return timeSeries(
    {
      id: contract,
      key: "chart",
      overrideBase: "futures",
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

Client.prototype.futures = function (
  contract,
  timeseriesArgs,
  { filter, format } = {},
) {
  return futures(contract, timeseriesArgs, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
