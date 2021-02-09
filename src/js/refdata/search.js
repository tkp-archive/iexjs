/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _quoteSymbols } from "../common";
import { Client } from "../client";

/**
 * Returns an array of symbols up to the top 10 matches. Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
 *
 * https://iexcloud.io/docs/api/#search
 *
 * @param {string} fragment search fragment
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const search = (fragment, token = "", version = "", filter = "") =>
  _getJson({
    url: `search/${_quoteSymbols(fragment)}`,
    token,
    version,
    filter,
  });

Client.prototype.search = function (fragment, filter) {
  return search(fragment, this._token, this._version, filter);
};
