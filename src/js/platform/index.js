/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _platformGet,
  _dateRange,
  _quoteSymbols,
  _strOrDate,
  _platformPatch,
  _platformPut,
  _platformPost,
  _platformDelete,
  IEXJSException,
  _get,
} from "../common";
import { Client } from "../client";

export const _queryUrl = (options) => {
  const {
    provider = "CORE",
    id = "",
    key = "",
    subkey = "",
    date = "",
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
    sort = "",
    interval = 0,
    transforms = null,
    basePath = "query",
    maximumValidationErrors = null,
  } = options || {};

  let base_url = basePath;

  if (provider) base_url += `/${provider}`;

  if (provider && id) base_url += `/${_quoteSymbols(id)}`;
  if (provider && id && key) base_url += `/${_quoteSymbols(key)}`;
  if (provider && id && key && subkey) base_url += `/${_quoteSymbols(subkey)}`;
  if (provider && id && key && subkey && date) base_url += `/${_quoteSymbols(date)}`;

  base_url += "?";

  if (provider && id) {
    if (range) base_url += `range=${_dateRange(range)}&`;

    base_url += `calendar=${calendar.toString()}&`;

    if (limit && !last && (!to || !from)) base_url += `limit=${limit}&`;
    if (offset > 0) base_url += `offset=${offset}&`;
    if (subattribute) base_url += `subattribute=${subattribute}&`;
    if (dateField) base_url += `dateField=${dateField}&`;
    if (from) base_url += `from=${_strOrDate(from)}&`;
    if (to) base_url += `to=${_strOrDate(to)}&`;
    if (on) base_url += `on=${_strOrDate(on)}&`;
    if (last) base_url += `last=${last}&`;
    if (first) base_url += `first=${first}&`;
    if (sort) {
      if (["asc", "desc"].indexOf(sort.toLowerCase()) < 0)
        throw new IEXJSException(`Sort must be in (asc, desc), got: ${sort}`);
      base_url += `sort=${sort}&`;
    }

    if (interval) base_url += `interval=${interval}&`;
    if (transforms)
      base_url += `transforms=${JSON.stringify(transforms || [])}&`;
    if (maximumValidationErrors)
      base_url += `maximumValidationErrors=${maximumValidationErrors}&`;
  }
  return base_url;
};

const _queryMetaUrl = (options) => {
  const { provider = "CORE", key = "", subkey = "" } = options || {};
  let { id = "" } = options || {};
  let url = "meta";
  if (provider) {
    url += `/${provider}`;
    if (!id && key) id = "*";
    if (id) {
      url += `/${_quoteSymbols(id)}`;
      if (key) {
        url += `/${_quoteSymbols(key)}`;
        if (subkey) {
          url += `/${_quoteSymbols(subkey)}`;
        }
      }
    }
  }
  return url;
};

export const queryMeta = (options, standardOptions = {}) =>
  _get({
    url: _queryMetaUrl(options),
    ...standardOptions,
  });

Client.platform.prototype.queryMeta = function (options, standardOptions) {
  return queryMeta(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const query = (options, standardOptions = {}) =>
  _platformGet({
    url: _queryUrl(options),
    ...standardOptions,
  });

Client.platform.prototype.query = function (options, standardOptions) {
  return query(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export * from "./crud_external";