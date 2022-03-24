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
import { _URL_PREFIX_CLOUD } from "./urls";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/**
 * for IEX Cloud platform
 * @param {object} options
 */
const _getIEXCloudPlatformBase = async (options) => {
  const {
    base_url,
    url,
    token = "",
    version = "V1",
    filter = "",
    format = "json",
  } = options;
  let contentType;
  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);

  if (filter) endpoint.searchParams.append("filter", filter);

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
const _getIEXCloudPlatform = (options) =>
  _getIEXCloudPlatformBase({ base_url: _URL_PREFIX_CLOUD, ...options });

/**
 *
 * @param {object} options
 */
const _pppIEXCloudPlatformBase = async (options) => {
  const {
    base_url,
    method,
    url,
    data,
    token = "",
    version = "V1",
    token_in_params = true,
    format = "json",
    contentType,
  } = options;

  const endpoint = new URL(`${base_url(version)}${url}`);

  if (token_in_params) {
    endpoint.searchParams.append("token", token);
  }
  
  return fetch(endpoint, {
    method,
    body: data,
    headers: {
      "Content-Type": contentType,
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
const _postIEXCloudPlatform = (options) =>
  _pppIEXCloudPlatformBase({ base_url: _URL_PREFIX_CLOUD, method: "POST", ...options });

/**
 *
 * @param {object} options
 */
 const _putIEXCloudPlatform = (options) =>
 _pppIEXCloudPlatformBase({ base_url: _URL_PREFIX_CLOUD, method: "PUT", ...options });

/**
 *
 * @param {object} options
 */
const _patchIEXCloudPlatform = (options) =>
  _pppIEXCloudPlatformBase({
    base_url: _URL_PREFIX_CLOUD,
    method: "PATCH",
    ...options,
  });

/**
 *
 * @param {object} options
 */
const _deleteIEXCloudPlatformBase = async (options) => {
  const {
    base_url,
    url,
    token = "",
    version = "V1",
    format = "json",
    contentType,
  } = options;

  const endpoint = new URL(`${base_url(version)}${url}`);
  endpoint.searchParams.append("token", token);

  return fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": contentType,
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
 * for backwards compat, accepting token and version but ignoring
 * @param {object} options
 */
export const _platformGet = async (options) => {
  return _getIEXCloudPlatform(options);
};

/**
 *
 * @param {object} options
 */
export const _platformPost = async (options) => {
  return _postIEXCloudPlatform(options);
};

/**
 *
 * @param {object} options
 */
export const _platformPut = async (options) => {
  return _putIEXCloudPlatform(options);
};

/**
 *
 * @param {object} options
 */
export const _platformPatch = async (options) => {
  return _patchIEXCloudPlatform(options);
};
/**
 *
 * @param {object} options
 */
export const _platformDelete = (options) => {
  return _deleteIEXCloudPlatformBase(options);
};
