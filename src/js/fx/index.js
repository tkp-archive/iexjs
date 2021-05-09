/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _strOrDate, _strToList } from "../common";
import { Client } from "../client";

/**
 * This endpoint returns real-time foreign currency exchange rates data updated every 250 milliseconds.
 *
 * https://iexcloud.io/docs/api/#latest-currency-rates
 *
 * @param {string} symbols comma seperated list of symbols
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const latestFX = (symbols, { token, version, filter, format } = {}) => {
  if (symbols) {
    return _get({
      url: `/fx/latest?symbols=${_strToList(symbols).join(",")}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `/fx/latest`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.latestFX = function (symbols, { filter, format } = {}) {
  return latestFX(symbols, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * This endpoint performs a conversion from one currency to another for a supplied amount of the base currency. If an amount isn’t provided, the latest exchange rate will be provided and the amount will be null.
 *
 * https://iexcloud.io/docs/api/#currency-conversion
 *
 * @param {object} options
 * @param {string} symbols comma seperated list of symbols
 * @param {number} amount amount to convert
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const convertFX = (
  { symbols, amount } = {},
  { token, version, filter, format } = {},
) => {
  if (symbols) {
    return _get({
      url: `/fx/convert?symbols=${_strToList(symbols).join(",")}&amount=${
        amount || ""
      }`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `/fx/convert?amount=${amount || ""}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.convertFX = function (
  { symbols, amount } = {},
  { filter, format } = {},
) {
  return convertFX(
    { symbols, amount },
    { token: this._token, version: this._version, filter, format },
  );
};

/**
 * This endpoint returns a daily value for the desired currency pair.
 *
 * https://iexcloud.io/docs/api/#historical-daily
 *
 * @param {object} options
 * @param {string} options.symbols comma seperated list of symbols
 * @param {string or date} options.from Returns data on or after the given from date. Format YYYY-MM-DD
 * @param {string or date} options.to Returns data on or before the given to date. Format YYYY-MM-DD
 * @param {string or date} options.on Returns data on the given date. Format YYYY-MM-DD
 * @param {number} options.last Returns the latest n number of records in the series
 * @param {number} options.first Returns the first n number of records in the series
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const historicalFX = (
  { symbols, from, to, on, last, first } = {},
  { token, version, filter, format } = {},
) => {
  let base_url = "/fx/historical?";
  if (symbols) base_url += `symbols=${_strToList(symbols).join(",")}&`;
  if (from) base_url += `from=${_strOrDate(from)}&`;
  if (to) base_url += `to=${_strOrDate(to)}&`;
  if (on) base_url += `to=${_strOrDate(on)}&`;
  if (last) base_url += `last=${last.toString()}&`;
  if (first) base_url += `last=${first.toString()}&`;
  return _get({
    url: base_url,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.historicalFX = function (
  { symbols, from, to, on, last, first } = {},
  { filter, format } = {},
) {
  return historicalFX(
    { symbols, from, to, on, last, first },

    { token: this._token, version: this._version, filter, format },
  );
};
