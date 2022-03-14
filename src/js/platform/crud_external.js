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
  import { _queryUrl } from "./index";
  import { Client } from "../client";


export const createDataJob = ({ provider, type, data, contentType = "application/json", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = `jobs/${provider}/${type}`;
  return _platformPost({
    url,
    data,
    contentType,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.createDataJob = function (options, standardOptions) {
  return createDataJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDataJobs = ({ provider, type, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${provider}/${type}`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.listDataJobs = function (options, standardOptions) {
  return listDataJobs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const queryDataJobs = ({ provider, type, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  const url = `jobs/${provider}/${type}/query`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.queryDataJobs = function (options, standardOptions) {
  return queryDataJobs(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataJob = ({ provider, type, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${provider}/${type}/${id}`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.getDataJob = function (options, standardOptions) {
  return getDataJob(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataJobLog = ({ provider, type, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!type) throw new IEXJSException("Must provide 'type'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = `jobs/${provider}/${type}/${id}/invalid-records-log`;
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.getDataJobLog = function (options, standardOptions) {
  return getDataJobLog(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const listDatasets = ({ provider, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  const url = _queryUrl({ provider, basePath: "datasets" });
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.listDatasets = function (options, standardOptions) {
  return listDatasets(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const getDataset = ({ provider, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  return _get({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.getDataset = function (options, standardOptions) {
  return getDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const registerDataset = ({ provider, schema, contentType = "application/json", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!schema) throw new IEXJSException("Must provide 'schema'");
  const url = _queryUrl({ provider, basePath: "datasets" });
  return _platformPost({
    url,
    data: schema,
    contentType,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.registerDataset = function (options, standardOptions) {
  return registerDataset(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const loadData = ({ provider, id, data, contentType, overwrite = false, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  if (!contentType) throw new IEXJSException("Must provide 'contentType'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  if (overwrite) {
    return _platformPut({
      url,
      data,
      contentType,
      token_in_params: true,
      ...standardOptions,
    });
  } else {
    return _platformPost({
      url,
      data,
      contentType,
      token_in_params: true,
      ...standardOptions,
    });
  };
};

Client.platform.prototype.loadData = function (options, standardOptions) {
  return loadData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

export const modifyDataset = ({ provider, id, data, contentType = "application/json", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!data) throw new IEXJSException("Must provide 'data'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  return _platformPatch({
    url,
    data,
    contentType,
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

export const deleteDataset = ({ provider, id, }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  const url = _queryUrl({ provider, id, basePath: "datasets" });
  return _platformDelete({
    url,
    token_in_params: true,
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

export const deleteData = ({ provider, id, key, subkey = "", date = "", }, standardOptions) => {
  if (!provider) throw new IEXJSException("Must provide 'provider'");
  if (!id) throw new IEXJSException("Must provide 'id'");
  if (!key) throw new IEXJSException("Must provide 'key'");
  const url = _queryUrl({ provider, id, key, subkey, date, basePath: "datasets" });
  return _platformDelete({
    url,
    token_in_params: true,
    ...standardOptions,
  });
};

Client.platform.prototype.deleteData = function (options, standardOptions) {
  return deleteData(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

