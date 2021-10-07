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
 * This call returns a list of supported currencies and currency pairs.
 *
 * https://iexcloud.io/docs/api/#fx-symbols
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const fxSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/fx/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.fxSymbols = function ({ filter, format } = {}) {
  return fxSymbols({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

export const fxSymbolsList = async ({ token, version } = {}) => {
  const fx = await fxSymbols({ token, version });
  const ret = [[], []];
  fx.currencies.forEach((record) => {
    ret[0].push(record.code);
  });
  fx.pairs.forEach((record) => {
    ret[1].push(record.fromCurrency + record.toCurrency);
  });
  return ret;
};

Client.prototype.fxSymbolsList = function () {
  return fxSymbolsList({ token: this._token, version: this._version });
};
