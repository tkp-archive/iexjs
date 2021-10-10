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
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const futuresSymbols = (
  { underlyingSymbol } = {},
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
 * @param {object} options
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
Client.prototype.futuresSymbols = function (options, standardOptions) {
  return futuresSymbols(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const futuresSymbolsList = (
  underlyingSymbol,
  { token, version } = {},
) => {
  let filter;
  if (underlyingSymbol) {
    filter = "underlying";
  } else {
    filter = "symbol";
  }
  return convertToList(
    futuresSymbols(underlyingSymbol, { token, version, filter }),
  );
};

/**
 * This call returns an array of futures symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#futures-symbols
 *
 * @param {object} options
 * @param {string} options.underlyingSymbol underlying symbol
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
Client.prototype.futuresSymbolsList = function (options) {
  return futuresSymbolsList(options, {
    token: this._token,
    version: this._version,
  });
};
