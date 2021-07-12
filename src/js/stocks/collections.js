/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _COLLECTION_TAGS, IEXJSException } from "../common";
import { Client } from "../client";

/**
 * Returns an array of quote objects for a given collection type. Currently supported collection types are sector, tag, and list
 *
 * https://iexcloud.io/docs/api/#collections
 *
 * @param {string} tag Sector, Tag, or List
 * @param {string} collectionName Associated name for tag
 * @param {number} count number to get
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const collections = (
  tag,
  collectionName,
  { token, version, filter, format } = {},
) => {
  if (_COLLECTION_TAGS.indexOf(tag) < 0) {
    throw new IEXJSException("Uncrecognized tag");
  }
  return _get({
    url: `stock/market/collection/${tag}?collectionName=${
      collectionName || ""
    }`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.collections = function (
  tag,
  collectionName,
  { filter, format } = {},
) {
  return collections(tag, collectionName, {
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};
