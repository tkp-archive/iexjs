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

export const us30 = ({ token, version } = {}) =>
  points({ key: "MORTGAGE30US" }, { token, version });
export const us15 = ({ token, version } = {}) =>
  points({ key: "MORTGAGE15US" }, { token, version });
export const us5 = ({ token, version } = {}) =>
  points({ key: "MORTGAGE5US" }, { token, version });

Client.prototype.us30 = function () {
  return us30({ token: this._token, version: this._version });
};

Client.prototype.us15 = function () {
  return us15({ token: this._token, version: this._version });
};

Client.prototype.us5 = function () {
  return us5({ token: this._token, version: this._version });
};
