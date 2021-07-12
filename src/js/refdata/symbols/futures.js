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
 * This call returns an array of futures symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#futures-symbols
 *
 * @param {string} underlyingSymbol underlying symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const futuresSymbols = (
  underlyingSymbol,
  { token = "", version = "", filter = "", format = "json" } = {},
) => {
  let url;
  if (underlyingSymbol) {
    url = `ref-data/futures/symbols/${underlyingSymbol}`;
  } else {
    url = `ref-data/futures/symbols`;
  }
  return _get({
    url,
    token,
    version,
    filter,
    format,
  });
};

/**
 * This call returns an array of futures symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#futures-symbols
 *
 * @param {string} underlyingSymbol underlying symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
Client.prototype.futuresSymbols = function (
  underlyingSymbol,
  { filter, format } = {},
) {
  return futuresSymbols(underlyingSymbol, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

export const futuresSymbolsList = (
  underlyingSymbol,
  { token, version } = {},
) => {
  if (underlyingSymbol) {
    return convertToList(
      futuresSymbols({ token, version, filter: "symbol" }),
      "underlying",
    );
  }
  return convertToList(futuresSymbols({ token, version, filter: "symbol" }));
};

/**
 * This call returns an array of futures symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#futures-symbols
 *
 * @param {string} underlyingSymbol underlying symbol
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
Client.prototype.futuresSymbolsList = function (underlyingSymbol) {
  return convertToList(
    underlyingSymbol,
    futuresSymbols(underlyingSymbol, {
      token: this._token,
      version: this._version,
      filter: "symbol",
    }),
  );
};
