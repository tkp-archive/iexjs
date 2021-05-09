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
export const fedfunds = ({ token, version } = {}) =>
  points({ key: "FEDFUNDS" }, { token, version });
export const creditcard = ({ token, version } = {}) =>
  points({ key: "TERMCBCCALLNS" }, { token, version });
export const cdnj = ({ token, version } = {}) =>
  points({ key: "MMNRNJ" }, { token, version });
export const cdj = ({ token, version } = {}) =>
  points({ key: "MMNRJD" }, { token, version });
export const gdp = ({ token, version } = {}) =>
  points({ key: "A191RL1Q225SBEA" }, { token, version });
export const indpro = ({ token, version } = {}) =>
  points({ key: "INDPRO" }, { token, version });
export const cpi = ({ token, version } = {}) =>
  points({ key: "CPIAUCSL" }, { token, version });
export const payroll = ({ token, version } = {}) =>
  points({ key: "PAYEMS" }, { token, version });
export const housing = ({ token, version } = {}) =>
  points({ key: "HOUST" }, { token, version });
export const unemployment = ({ token, version } = {}) =>
  points({ key: "UNRATE" }, { token, version });
export const vehicles = ({ token, version } = {}) =>
  points({ key: "TOTALSA" }, { token, version });
export const recessionProb = ({ token, version } = {}) =>
  points({ key: "RECPROUSM156N" }, { token, version });
export const initialClaims = ({ token, version } = {}) =>
  points({ key: "IC4WSA" }, { token, version });
export const institutionalMoney = ({ token, version } = {}) =>
  points({ key: "WRMFSL" }, { token, version });
export const retailMoney = ({ token, version } = {}) =>
  points({ key: "WIMFSL" }, { token, version });

Client.prototype.us30 = function () {
  return us30({ token: this._token, version: this._version });
};

Client.prototype.us15 = function () {
  return us15({ token: this._token, version: this._version });
};

Client.prototype.us5 = function () {
  return us5({ token: this._token, version: this._version });
};

Client.prototype.fedfunds = function () {
  return fedfunds({ token: this._token, version: this._version });
};

Client.prototype.creditcard = function () {
  return creditcard({ token: this._token, version: this._version });
};

Client.prototype.cdnj = function () {
  return cdnj({ token: this._token, version: this._version });
};

Client.prototype.cdj = function () {
  return cdj({ token: this._token, version: this._version });
};

Client.prototype.gdp = function () {
  return gdp({ token: this._token, version: this._version });
};

Client.prototype.indpro = function () {
  return indpro({ token: this._token, version: this._version });
};

Client.prototype.cpi = function () {
  return cpi({ token: this._token, version: this._version });
};

Client.prototype.payroll = function () {
  return payroll({ token: this._token, version: this._version });
};

Client.prototype.housing = function () {
  return housing({ token: this._token, version: this._version });
};

Client.prototype.unemployment = function () {
  return unemployment({ token: this._token, version: this._version });
};

Client.prototype.vehicles = function () {
  return vehicles({ token: this._token, version: this._version });
};

Client.prototype.recessionProb = function () {
  return recessionProb({ token: this._token, version: this._version });
};

Client.prototype.initialClaims = function () {
  return initialClaims({ token: this._token, version: this._version });
};

Client.prototype.institutionalMoney = function () {
  return institutionalMoney({ token: this._token, version: this._version });
};

Client.prototype.retailMoney = function () {
  return retailMoney({ token: this._token, version: this._version });
};
