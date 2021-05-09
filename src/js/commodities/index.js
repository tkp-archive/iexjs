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

export const wti = ({ token, version } = {}) =>
  points({ key: "DCOILWTICO" }, { token, version });
export const brent = ({ token, version } = {}) =>
  points({ key: "DCOILBRENTEU" }, { token, version });
export const natgas = ({ token, version } = {}) =>
  points({ key: "DHHNGSP" }, { token, version });
export const heatoil = ({ token, version } = {}) =>
  points({ key: "DHOILNYH" }, { token, version });
export const jet = ({ token, version } = {}) =>
  points({ key: "DJFUELUSGULF" }, { token, version });
export const diesel = ({ token, version } = {}) =>
  points({ key: "GASDESW" }, { token, version });
export const gasreg = ({ token, version } = {}) =>
  points({ key: "GASREGCOVW" }, { token, version });
export const gasmid = ({ token, version } = {}) =>
  points({ key: "GASMIDCOVW" }, { token, version });
export const gasprm = ({ token, version } = {}) =>
  points({ key: "GASPRMCOVW" }, { token, version });
export const propane = ({ token, version } = {}) =>
  points({ key: "DPROPANEMBTX" }, { token, version });

Client.prototype.wti = function () {
  return wti({ token: this._token, version: this._version });
};

Client.prototype.brent = function () {
  return brent({ token: this._token, version: this._version });
};

Client.prototype.natgas = function () {
  return natgas({ token: this._token, version: this._version });
};

Client.prototype.heatoil = function () {
  return heatoil({ token: this._token, version: this._version });
};

Client.prototype.jet = function () {
  return jet({ token: this._token, version: this._version });
};

Client.prototype.diesel = function () {
  return diesel({ token: this._token, version: this._version });
};

Client.prototype.gasreg = function () {
  return gasreg({ token: this._token, version: this._version });
};

Client.prototype.gasmid = function () {
  return gasmid({ token: this._token, version: this._version });
};

Client.prototype.gasprm = function () {
  return gasprm({ token: this._token, version: this._version });
};

Client.prototype.propane = function () {
  return propane({ token: this._token, version: this._version });
};
