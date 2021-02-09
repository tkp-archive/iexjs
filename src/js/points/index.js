/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _raiseIfNotStr } from "../common";
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
 */
export const points = (symbol, key, token, version, filter) => {
  _raiseIfNotStr(symbol || "market");

  if (key) {
    return _getJson({
      url: `data-points/${symbol || "market"}/${key}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `data-points/${symbol || "market"}`,
    token,
    version,
    filter,
  });
};

Client.prototype.points = function (symbol, key, filter) {
  return points(symbol, key, this._token, this._version, filter);
};
