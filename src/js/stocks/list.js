/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _LIST_OPTIONS, IEXJSException } from "../common";
import { Client } from "../client";

/**
 * Returns an array of quotes for the top 10 symbols in a specified list.
 *
 * https://iexcloud.io/docs/api/#list
 *
 * @param {object} options
 * @param {string} options.list List to query
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const list = (
  // eslint-disable-next-line no-shadow
  { list } = {},
  { token, version, filter, format } = {},
) => {
  // eslint-disable-next-line no-param-reassign
  list = list || "mostactive";
  if (_LIST_OPTIONS.indexOf(list) < 0) {
    throw new IEXJSException("Option not recognized");
  }
  return _get({
    url: `stock/market/list/${list}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.list = function (options, standardOptions) {
  return list(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
