/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson } from "../common";
import { Client } from "../client";

/**
 * Returns an array of sectors.
 *
 * https://iexcloud.io/docs/api/#sectors
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const sectors = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/sectors`,
    token,
    version,
    filter,
  });

Client.prototype.sectors = function (filter) {
  return sectors(this._token, this._version, filter);
};

/**
 * Returns an array of tags.
 *
 * https://iexcloud.io/docs/api/#tags
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const tags = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/tags`,
    token,
    version,
    filter,
  });

Client.prototype.tags = function (filter) {
  return tags(this._token, this._version, filter);
};
