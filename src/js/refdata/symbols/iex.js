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
 * This call returns an array of symbols the Investors Exchange supports for trading.
 *
 * https://iexcloud.io/docs/api/#iex-symbols
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const iexSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/iex/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.iexSymbols = function (standardOptions) {
  return iexSymbols({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const iexSymbolsList = ({ token, version } = {}) =>
  convertToList(iexSymbols({ token, version, filter: "symbol" }));

Client.prototype.iexSymbolsList = function () {
  return convertToList(
    iexSymbols({
      token: this._token,
      version: this._version,
      filter: "symbol",
    }),
  );
};
