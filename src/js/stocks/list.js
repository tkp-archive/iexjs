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
 * @param {string} option Option to query
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const list = (option, { token, version, filter, format } = {}) => {
  // eslint-disable-next-line no-param-reassign
  option = option || "mostactive";
  if (_LIST_OPTIONS.indexOf(option) < 0) {
    throw new IEXJSException("Option not recognized");
  }
  return _get({
    url: `stock/market/list/${option}`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.list = function (option, { filter, format } = {}) {
  return list(option, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
