/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../common";
import { Client } from "../client";

/**
 * Returns an array of sectors.
 *
 * https://iexcloud.io/docs/api/#sectors
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const sectors = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/sectors`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.sectors = function ({ filter, format } = {}) {
  return sectors({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

/**
 * Returns an array of tags.
 *
 * https://iexcloud.io/docs/api/#tags
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const tags = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/tags`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.tags = function ({ filter, format } = {}) {
  return tags({ token: this._token, version: this._version, filter, format });
};
