/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

/* eslint-disable no-param-reassign */
import {
  _BATCH_TYPES,
  _TIMEFRAME_CHART,
  IEXJSException,
  _get,
  _quoteSymbols,
} from "../common";
import { Client } from "../client";

/**
 * Batch several data requests into one invocation. If no `fields` passed in, will default to `quote`
 *
 * https://iexcloud.io/docs/api/#batch-requests
 *
 * @param {string} symbols List of tickers to request
 * @param {string} fields List of fields to request
 * @param {string} range Date range for chart
 * @param {number} last last number of records
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const batch = (
  symbols,
  fields,
  range,
  last,
  token,
  version,
  filter,
  format,
) => {
  fields = fields || "quote";
  range = range || "1m";
  last = last || 10;

  if (typeof fields === "string") {
    fields = fields.split(",");
  }

  fields.forEach((elem) => {
    if (_BATCH_TYPES.indexOf(elem) < 0) {
      throw new IEXJSException(`Unrecognized batch request field: ${elem}`);
    }
  });

  if (_TIMEFRAME_CHART.indexOf(range) < 0) {
    throw new IEXJSException(`Unrecognized range argument: ${range}`);
  }

  symbols = _quoteSymbols(symbols);
  if (symbols.split(",").length > 100) {
    throw new IEXJSException(
      "IEX will only handle up to 100 symbols at a time!",
    );
  }

  let route;
  if (symbols.indexOf(",") < 0) {
    route = `stock/${symbols}/batch?types=${fields.join(
      ",",
    )}&range=${range}&last=${last}`;
  } else {
    route = `stock/market/batch?symbols=${symbols}&types=${fields.join(
      ",",
    )}&range=${range}&last=${last}`;
  }
  return _get({
    url: route,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.batch = function (
  symbols,
  fields,
  range,
  last,
  filter,
  format,
) {
  return batch(
    symbols,
    fields,
    range,
    last,
    this._token,
    this._version,
    filter,
    format,
  );
};
