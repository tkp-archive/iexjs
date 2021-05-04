/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { convertToList } from "./common";
import { _get } from "../../common";
import { Client } from "../../client";
/**
 * This provides a full list of supported cryptocurrencies by IEX Cloud.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const cryptoSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/crypto/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.cryptoSymbols = function (filter, format) {
  return cryptoSymbols(this._token, this._version, filter, format);
};

export const cryptoSymbolsList = (token, version) =>
  convertToList(cryptoSymbols(token, version, "symbol"));

Client.prototype.cryptoSymbolsList = function () {
  return convertToList(cryptoSymbols(this._token, this._version, "symbol"));
};
