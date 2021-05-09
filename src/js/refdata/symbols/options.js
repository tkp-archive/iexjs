/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../../common";
import { Client } from "../../client";

/**
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const optionsSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/options/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.optionsSymbols = function ({ filter, format } = {}) {
  return optionsSymbols({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

const convertOptionsSymbolsToList = (data) => {
  const ret = [];
  Object.keys(data).forEach((symbol) => {
    data[symbol].forEach((date) => {
      ret.push(`${symbol}-${date}`);
    });
  });
  return ret;
};

export const optionsSymbolsList = async ({ token, version } = {}) =>
  convertOptionsSymbolsToList(
    await optionsSymbols({ token, version, filter: "symbol" }),
  );

Client.prototype.optionsSymbolsList = async function () {
  return convertOptionsSymbolsToList(
    await optionsSymbols({
      token: this._token,
      version: this._version,
      filter: "symbol",
    }),
  );
};
