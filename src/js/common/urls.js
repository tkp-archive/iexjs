/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import { IEXJSException } from "./exception";

export const _URL_PREFIX = () => "https://api.iextrading.com/1.0/";
export let _URL_PREFIX_CLOUD = (version) =>
  `https://cloud.iexapis.com/${version}/`;
export let _URL_PREFIX_CLOUD_SANDBOX = () =>
  `https://sandbox.iexapis.com/stable/`;

const _URL_PREFIX_CLOUD_ORIG = _URL_PREFIX_CLOUD;
const _URL_PREFIX_CLOUD_SANDBOX_ORIG = _URL_PREFIX_CLOUD_SANDBOX;

export const _SIO_URL_PREFIX = "https://ws-api.iextrading.com";
export const _SIO_PORT = 443;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export let _SSE_URL_PREFIX = (version, channel, symbols, token) =>
  `https://cloud-sse.iexapis.com/${version}/${channel}?symbols=${symbols}&token=${token}`;
const _SSE_URL_PREFIX_ORIG = _SSE_URL_PREFIX;
export let _SSE_URL_PREFIX_ALL = (version, channel, token) =>
  `https://cloud-sse.iexapis.com/${version}/${channel}?token=${token}`;
const _SSE_URL_PREFIX_ALL_ORIG = _SSE_URL_PREFIX_ALL;
export let _SSE_DEEP_URL_PREFIX = (version, symbols, channels, token) =>
  `https://cloud-sse.iexapis.com/${version}/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
const _SSE_DEEP_URL_PREFIX_ORIG = _SSE_DEEP_URL_PREFIX;
export let _SSE_URL_PREFIX_SANDBOX = (version, channel, symbols, token) =>
  `https://sandbox-sse.iexapis.com/stable/${channel}?symbols=${symbols}&token=${token}`;
const _SSE_URL_PREFIX_SANDBOX_ORIG = _SSE_URL_PREFIX_SANDBOX;
export let _SSE_URL_PREFIX_ALL_SANDBOX = (channel, token) =>
  `https://sandbox-sse.iexapis.com/stable/${channel}?token=${token}`;
const _SSE_URL_PREFIX_ALL_SANDBOX_ORIG = _SSE_URL_PREFIX_ALL_SANDBOX;
export let _SSE_DEEP_URL_PREFIX_SANDBOX = (symbols, channels, token) =>
  `https://sandbox-sse.iexapis.com/stable/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
const _SSE_DEEP_URL_PREFIX_SANDBOX_ORIG = _SSE_DEEP_URL_PREFIX_SANDBOX;

/**
 *
 * @param {string} url
 */
const _getOrig = () => {
  throw IEXJSException(
    "Old IEX API is deprecated. For a free API token, sign up at https://iexcloud.io",
  );
};

/**
 * for IEX Cloud
 * @param {object} options
 */
const _getIEXCloudBase = async (options) => {
  const {
    base_url,
    url,
    token = "",
    version = "stable",
    filter = "",
    format = "json",
  } = options;
  let contentType;
  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);

  if (filter) endpoint.searchParams.append("filter", filter);

  if (format === "csv" || format === "text") {
    endpoint.searchParams.append("format", format);
    contentType = "text/plain";
  } else if (format === "schema") {
    endpoint.searchParams.append("schema", true);
    contentType = "application/json";
  } else {
    contentType = "application/json";
  }

  let tries = 0;
  let res = { status: 429, text: () => "Error 429 - Too Many Requests" };

  while (res.status === 429 && tries++ < 5) {
    res = await fetch(endpoint.href, {
      method: "GET",
      headers: {
        "Content-Type": contentType,
      },
    });

    // break out
    if (res.ok) {
      break;
    }

    // exponential backoff
    await sleep(Math.random() * 50 * tries);
  }

  if (res.ok) {
    if (format === "json") {
      return res.json();
    }
    if (format === "schema") {
      const ret = res.json();
      return Array.isArray(ret) ? ret[0] : ret;
    }
    return res.text();
  }
  throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
};

/**
 *
 * @param {object} options
 */
const _getIEXCloud = (options) =>
  _getIEXCloudBase({ base_url: _URL_PREFIX_CLOUD, ...options });

/**
 *
 * @param {object} options
 */
const _getIEXCloudSandbox = (options) =>
  _getIEXCloudBase({ base_url: _URL_PREFIX_CLOUD_SANDBOX, ...options });

/**
 *
 * @param {object} options
 */
const _pppIEXCloudBase = async (options) => {
  const {
    base_url,
    method,
    url,
    data = {},
    token = "",
    version = "stable",
    token_in_params = true,
    format = "json",
  } = options;

  const endpoint = new URL(`${base_url(version)}${url}`);

  if (token_in_params) {
    endpoint.searchParams.append("token", token);
  }

  return fetch(endpoint, {
    method,
    body: token_in_params ? { token, ...data } : {},
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }
      return res.text();
    }
    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};

/**
 *
 * @param {object} options
 */
const _postIEXCloud = (options) =>
  _pppIEXCloudBase({ base_url: _URL_PREFIX_CLOUD, method: "POST", ...options });

/**
 *
 * @param {object} options
 */
const _postIEXCloudSandbox = (options) =>
  _pppIEXCloudBase({
    base_url: _URL_PREFIX_CLOUD_SANDBOX,
    method: "POST",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _putIEXCloud = (options) =>
  _pppIEXCloudBase({ base_url: _URL_PREFIX_CLOUD, method: "PUT", ...options });

/**
 *
 * @param {object} options
 */
const _putIEXCloudSandbox = (options) =>
  _pppIEXCloudBase({
    base_url: _URL_PREFIX_CLOUD_SANDBOX,
    method: "PUT",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _patchIEXCloud = (options) =>
  _pppIEXCloudBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "PATCH",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _patchIEXCloudSandbox = (options) =>
  _pppIEXCloudBase({
    base_url: _URL_PREFIX_CLOUD_SANDBOX,
    method: "PATCH",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _deleteIEXCloudBase = async (options) => {
  const {
    base_url,
    url,
    token = "",
    version = "stable",
    format = "json",
  } = options;

  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);

  return fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    if (res.ok) {
      if (format === "json") {
        return res.json();
      }
      return res.text();
    }
    throw IEXJSException(`Response ${res.status} - ${await res.text()}`);
  });
};

const _deleteIEXCloud = (options) =>
  _deleteIEXCloudBase({ base_url: _URL_PREFIX_CLOUD, ...options });

const _deleteIEXCloudSandbox = (options) =>
  _deleteIEXCloudBase({ base_url: _URL_PREFIX_CLOUD_SANDBOX, ...options });

export const _streamSSE = (
  url,
  on_data,
  { nosnapshot = false, accrue = false },
) => {
  // eslint-disable-next-line no-param-reassign
  if (nosnapshot) url = `${url}&nosnapshot=true`;
  const messages = new EventSource(url);

  // eslint-disable-next-line no-console
  const callback = on_data || console.log;

  messages.accrued = [];

  messages.onmessage = async (event) => {
    // TODO stop
    const datum = JSON.parse(event.data);
    await callback(datum);
    if (accrue) {
      messages.accrued.push(datum);
    }
  };

  return messages;
};

/**
 * Override the default IEX Cloud url
 * @param {string} url
 * @param {string} env
 */
export const overrideUrl = ({ url = "", env = "" } = {}) => {
  if (env) {
    _URL_PREFIX_CLOUD = (version) =>
      `https://cloud.${env}.iexapis.com/${version}/`;
    _URL_PREFIX_CLOUD_SANDBOX = () =>
      `https://sandbox.${env}.iexapis.com/stable/`;
    _SSE_URL_PREFIX = (version, channel, symbols, token) =>
      `https://cloud-sse.${env}.iexapis.com/${version}/${channel}?symbols=${symbols}&token=${token}`;
    _SSE_URL_PREFIX_ALL = (version, channel, token) =>
      `https://cloud-sse.${env}.iexapis.com/${version}/${channel}?token=${token}`;
    _SSE_DEEP_URL_PREFIX = (version, symbols, channels, token) =>
      `https://cloud-sse.${env}.iexapis.com/${version}/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
    _SSE_URL_PREFIX_SANDBOX = (version, channel, symbols, token) =>
      `https://sandbox-sse.${env}.iexapis.com/stable/${channel}?symbols=${symbols}&token=${token}`;
    _SSE_URL_PREFIX_ALL_SANDBOX = (channel, token) =>
      `https://sandbox-sse.${env}.iexapis.com/stable/${channel}?token=${token}`;
    _SSE_DEEP_URL_PREFIX_SANDBOX = (symbols, channels, token) =>
      `https://sandbox-sse.${env}.iexapis.com/stable/deep?symbols=${symbols}&channels=${channels}&token=${token}`;
  } else if (url) {
    _URL_PREFIX_CLOUD = () => url;
    _URL_PREFIX_CLOUD_SANDBOX = () => url;
    _SSE_URL_PREFIX = (version, channel, symbols, token) =>
      `${url}${channel}?symbols=${symbols}&token=${token}`;
    _SSE_URL_PREFIX_ALL = (version, channel, token) =>
      `${url}${channel}?token=${token}`;
    _SSE_DEEP_URL_PREFIX = (version, symbols, channels, token) =>
      `${url}deep?symbols=${symbols}&channels=${channels}&token=${token}`;
    _SSE_URL_PREFIX_SANDBOX = (version, channel, symbols, token) =>
      `${url}${channel}?symbols=${symbols}&token=${token}`;
    _SSE_URL_PREFIX_ALL_SANDBOX = (channel, token) =>
      `${url}${channel}?token=${token}`;
    _SSE_DEEP_URL_PREFIX_SANDBOX = (symbols, channels, token) =>
      `${url}deep?symbols=${symbols}&channels=${channels}&token=${token}`;
  } else {
    // reset
    _URL_PREFIX_CLOUD = _URL_PREFIX_CLOUD_ORIG;
    _URL_PREFIX_CLOUD_SANDBOX = _URL_PREFIX_CLOUD_SANDBOX_ORIG;
    _SSE_URL_PREFIX = _SSE_URL_PREFIX_ORIG;
    _SSE_URL_PREFIX_ALL = _SSE_URL_PREFIX_ALL_ORIG;
    _SSE_DEEP_URL_PREFIX = _SSE_DEEP_URL_PREFIX_ORIG;
    _SSE_URL_PREFIX_SANDBOX = _SSE_URL_PREFIX_SANDBOX_ORIG;
    _SSE_URL_PREFIX_ALL_SANDBOX = _SSE_URL_PREFIX_ALL_SANDBOX_ORIG;
    _SSE_DEEP_URL_PREFIX_SANDBOX = _SSE_DEEP_URL_PREFIX_SANDBOX_ORIG;
  }
};

/**
 * for backwards compat, accepting token and version but ignoring
 * @param {object} options
 */
export const _get = async (options) => {
  const { url, token = "", version = "" } = options;
  if (token) {
    if (version === "sandbox") {
      return _getIEXCloudSandbox(options);
    }
    return _getIEXCloud(options);
  }
  return _getOrig(url);
};

/**
 *
 * @param {object} options
 */
export const _post = async (options) => {
  const { version = "" } = options;

  if (version === "sandbox") {
    return _postIEXCloudSandbox(options);
  }
  return _postIEXCloud(options);
};

/**
 *
 * @param {object} options
 */
export const _put = async (options) => {
  const { version = "" } = options;

  if (version === "sandbox") {
    return _putIEXCloudSandbox(options);
  }
  return _putIEXCloud(options);
};

/**
 *
 * @param {object} options
 */
export const _patch = async (options) => {
  const { version = "" } = options;

  if (version === "sandbox") {
    return _patchIEXCloudSandbox(options);
  }
  return _patchIEXCloud(options);
};
/**
 *
 * @param {object} options
 */
export const _delete = (options) => {
  const { version = "" } = options;
  if (version === "sandbox") {
    return _deleteIEXCloudSandbox(options);
  }
  return _deleteIEXCloud(options);
};
