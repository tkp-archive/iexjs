/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { points } from "../points";
import { Client } from "../client";

export const wti = (token, version) =>
  points(null, "DCOILWTICO", token, version);
export const brent = (token, version) =>
  points(null, "DCOILBRENTEU", token, version);
export const natgas = (token, version) =>
  points(null, "DHHNGSP", token, version);
export const heatoil = (token, version) =>
  points(null, "DHOILNYH", token, version);
export const jet = (token, version) =>
  points(null, "DJFUELUSGULF", token, version);
export const diesel = (token, version) =>
  points(null, "GASDESW", token, version);
export const gasreg = (token, version) =>
  points(null, "GASREGCOVW", token, version);
export const gasmid = (token, version) =>
  points(null, "GASMIDCOVW", token, version);
export const gasprm = (token, version) =>
  points(null, "GASPRMCOVW", token, version);
export const propane = (token, version) =>
  points(null, "DPROPANEMBTX", token, version);

Client.prototype.wti = function () {
  return wti(this._token, this._version);
};

Client.prototype.brent = function () {
  return brent(this._token, this._version);
};

Client.prototype.natgas = function () {
  return natgas(this._token, this._version);
};

Client.prototype.heatoil = function () {
  return heatoil(this._token, this._version);
};

Client.prototype.jet = function () {
  return jet(this._token, this._version);
};

Client.prototype.diesel = function () {
  return diesel(this._token, this._version);
};

Client.prototype.gasreg = function () {
  return gasreg(this._token, this._version);
};

Client.prototype.gasmid = function () {
  return gasmid(this._token, this._version);
};

Client.prototype.gasprm = function () {
  return gasprm(this._token, this._version);
};

Client.prototype.propane = function () {
  return propane(this._token, this._version);
};
