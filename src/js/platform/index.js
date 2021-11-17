/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { _get, _dateRange, _quoteSymbols, _strOrDate } from "../common";
import { Client } from "../client";

export const query = (options, { token, version, filter, format } = {}) => {
  const {
    provider = "",
    id = "",
    key = "",
    subkey = "",
    range = "",
    calendar = false,
    limit = 1,
    offset = 0,
    subattribute = "",
    dateField = "",
    from = "",
    to = "",
    on = "",
    last = 0,
    first = 0,
    interval = 0,
  } = options || {};

  let base_url = "query";
  if (provider) base_url += `/${_quoteSymbols(provider)}`;
  if (provider && id) base_url += `/${_quoteSymbols(id)}`;
  if (provider && id && key) base_url += `/${_quoteSymbols(key)}`;
  if (provider && id && subkey) base_url += `/${_quoteSymbols(subkey)}`;

  base_url += "?";

  if (provider && id) {
    if (range) base_url += `range=${_dateRange(range)}&`;

    base_url += `calendar=${calendar.toString()}&`;

    if (!last && (!to || !from)) base_url += `limit=${limit}&`;
    if (offset > 0) base_url += `offset=${offset}&`;
    if (subattribute) base_url += `subattribute=${subattribute}&`;
    if (dateField) base_url += `dateField=${dateField}&`;
    if (from) base_url += `from=${_strOrDate(from)}&`;
    if (to) base_url += `to=${_strOrDate(to)}&`;
    if (on) base_url += `on=${_strOrDate(on)}&`;
    if (last) base_url += `last=${last}&`;
    if (first) base_url += `first=${first}&`;
    if (interval) base_url += `interval=${interval}&`;
  }

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.query = function (options, standardOptions) {
  return query(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
