/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _raiseIfNotStr } from "../common";
import { Client } from "../client";

/**
 * Returns an array of U.S. exchanges.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const figi = (figi_, token = "", version = "", filter = "") => {
  _raiseIfNotStr(figi_);
  return _getJson({
    url: `ref-data/figi?figi=${figi_}`,
    token,
    version,
    filter,
  });
};

Client.prototype.figi = function (figi_, filter) {
  return figi(figi_, this._token, this._version, filter);
};
