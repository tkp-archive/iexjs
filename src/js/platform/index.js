/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _get,
  _dateRange,
  _quoteSymbols,
  _strOrDate,
  _patch,
  _put,
  _post,
  _delete,
  IEXJSException,
} from "../common";
import { Client } from "../client";

const _queryUrl = (options) => {
  const {
    provider = "CORE",
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
    sort = "",
    interval = 0,
    transforms = null,
    basePath = "query",
  } = options || {};

  let base_url = basePath;

  if (provider) base_url += `/${provider}`;

  if (provider && id) base_url += `/${_quoteSymbols(id)}`;
  if (provider && id && key) base_url += `/${_quoteSymbols(key)}`;
  if (provider && id && key && subkey) base_url += `/${_quoteSymbols(subkey)}`;

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
  _get({
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

export const listJobs = ({ provider, type = "ingest" }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide `provider`");
  const url = `jobs/${provider}/${type}`;
  return _get({ url, ...standardOptions });
};

Client.platform.prototype.listJobs = function (options, standardOptions) {
  return listJobs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDatasets = ({ provider = "CORE", id = "" }, standardOptions) =>
  _get({ url: _queryUrl({ provider, id }), ...standardOptions });

Client.platform.prototype.listDatasets = function (options, standardOptions) {
  return listDatasets(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const createDataset = ({ provider, schema }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide `provider`");
  if (!schema) throw new IEXJSException("Must provide `schema`");
  const url = _queryUrl({ provider, limit: null, basePath: "datasets" });

  return _post({
    url,
    data: schema,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.createDataset = function (options, standardOptions) {
  return createDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const loadData = ({ provider, id, data }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide `provider`");
  if (!id) throw new IEXJSException("Must provide `id`");
  if (!data) throw new IEXJSException("Must provide `data`");
  const url = _queryUrl({ provider, id, limit: null, basePath: "datasets" });

  return _put({
    url,
    data,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.loadData = function (options, standardOptions) {
  return loadData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const modifyDataset = ({ provider, schema }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide `provider`");
  if (!schema) throw new IEXJSException("Must provide `schema`");
  const url = _queryUrl({ provider, limit: null, basePath: "datasets" });

  return _patch({
    url,
    data: schema,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.modifyDataset = function (options, standardOptions) {
  return modifyDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const modifyData = (options, standardOptions = {}) => {
  const { transforms } = options;

  return _patch({
    url: _queryUrl(options),
    data: transforms,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.modifyData = function (options, standardOptions) {
  return modifyData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteData = (options, standardOptions = {}) =>
  _delete({
    url: _queryUrl(options),
    ...standardOptions,
  });

Client.platform.prototype.deleteData = function (options, standardOptions) {
  return deleteData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const deleteDataset = ({ provider, id }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide `provider`");
  if (!id) throw new IEXJSException("Must provide `id`");
  return _delete({
    url: _queryUrl({ provider, id, limit: null, basePath: "datasets" }),
    ...standardOptions,
  });
};

Client.platform.prototype.deleteDataset = function (options, standardOptions) {
  return deleteDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
