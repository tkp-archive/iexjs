/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { points } from "../points";
import { Client } from "../client";

export const creditcard = ({ token, version } = {}) =>
  points({ key: "TERMCBCCALLNS" }, { token, version });
export const cdnj = ({ token, version } = {}) =>
  points({ key: "MMNRNJ" }, { token, version });
export const cdj = ({ token, version } = {}) =>
  points({ key: "MMNRJD" }, { token, version });

Client.prototype.creditcard = function () {
  return creditcard({ token: this._token, version: this._version });
};

Client.prototype.cdnj = function () {
  return cdnj({ token: this._token, version: this._version });
};

Client.prototype.cdj = function () {
  return cdj({ token: this._token, version: this._version });
};
