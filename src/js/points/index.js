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

/**
 * Data points are available per symbol and return individual plain text values.
 * Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed.
 * We also provide update times for some endpoints which allow you to call an endpoint only once it has new data.
 *
 * https://iexcloud.io/docs/api/#data-points
 *
 * @param {string} symbol ticker
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format */
export const points = (symbol, key, token, version, filter, format) => {
  _raiseIfNotStr(symbol || "market");

  if (key) {
    return _get({
      url: `data-points/${symbol || "market"}/${key}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `data-points/${symbol || "market"}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.points = function (symbol, key, filter, format) {
  return points(symbol, key, this._token, this._version, filter, format);
};
