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
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
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

Client.prototype.sectors = function (standardOptions) {
  return sectors({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};

/**
 * Returns an array of tags.
 *
 * https://iexcloud.io/docs/api/#tags
 *
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
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

Client.prototype.tags = function (standardOptions) {
  return tags({
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
