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

export const thirtyYear = ({ token, version } = {}) =>
  points({ key: "DGS30" }, { token, version });

Client.prototype.thirtyYear = function () {
  return thirtyYear({ token: this._token, version: this._version });
};

export const twentyYear = ({ token, version } = {}) =>
  points({ key: "DGS20" }, { token, version });

Client.prototype.twentyYear = function () {
  return twentyYear({ token: this._token, version: this._version });
};

export const tenYear = ({ token, version } = {}) =>
  points({ key: "DGS10" }, { token, version });

Client.prototype.tenYear = function () {
  return tenYear({ token: this._token, version: this._version });
};

export const fiveYear = ({ token, version } = {}) =>
  points({ key: "DGS5" }, { token, version });

Client.prototype.fiveYear = function () {
  return fiveYear({ token: this._token, version: this._version });
};

export const twoYear = ({ token, version } = {}) =>
  points({ key: "DGS2" }, { token, version });

Client.prototype.twoYear = function () {
  return twoYear({ token: this._token, version: this._version });
};

export const oneYear = ({ token, version } = {}) =>
  points({ key: "DGS1" }, { token, version });

Client.prototype.oneYear = function () {
  return oneYear({ token: this._token, version: this._version });
};

export const sixMonth = ({ token, version } = {}) =>
  points({ key: "DGS6MO" }, { token, version });

Client.prototype.sixMonth = function () {
  return thirtyYear({ token: this._token, version: this._version });
};

export const threeMonth = ({ token, version } = {}) =>
  points({ key: "DGS3MO" }, { token, version });

Client.prototype.threeMonth = function () {
  return threeMonth({ token: this._token, version: this._version });
};

export const oneMonth = ({ token, version } = {}) =>
  points({ key: "DGS1MO" }, { token, version });

Client.prototype.oneMonth = function () {
  return oneMonth({ token: this._token, version: this._version });
};
