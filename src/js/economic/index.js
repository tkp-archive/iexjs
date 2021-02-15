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

export const us30 = (token, version) =>
  points(null, "MORTGAGE30US", token, version);
export const us15 = (token, version) =>
  points(null, "MORTGAGE15US", token, version);
export const us5 = (token, version) =>
  points(null, "MORTGAGE5US", token, version);
export const fedfunds = (token, version) =>
  points(null, "FEDFUNDS", token, version);
export const creditcard = (token, version) =>
  points(null, "TERMCBCCALLNS", token, version);
export const cdnj = (token, version) => points(null, "MMNRNJ", token, version);
export const cdj = (token, version) => points(null, "MMNRJD", token, version);
export const gdp = (token, version) =>
  points(null, "A191RL1Q225SBEA", token, version);
export const indpro = (token, version) =>
  points(null, "INDPRO", token, version);
export const cpi = (token, version) => points(null, "CPIAUCSL", token, version);
export const payroll = (token, version) =>
  points(null, "PAYEMS", token, version);
export const housing = (token, version) =>
  points(null, "HOUST", token, version);
export const unemployment = (token, version) =>
  points(null, "UNRATE", token, version);
export const vehicles = (token, version) =>
  points(null, "TOTALSA", token, version);
export const recessionProb = (token, version) =>
  points(null, "RECPROUSM156N", token, version);
export const initialClaims = (token, version) =>
  points(null, "IC4WSA", token, version);
export const institutionalMoney = (token, version) =>
  points(null, "WRMFSL", token, version);
export const retailMoney = (token, version) =>
  points(null, "WIMFSL", token, version);

Client.prototype.us30 = function () {
  return us30(this._token, this._version);
};

Client.prototype.us15 = function () {
  return us15(this._token, this._version);
};

Client.prototype.us5 = function () {
  return us5(this._token, this._version);
};

Client.prototype.fedfunds = function () {
  return fedfunds(this._token, this._version);
};

Client.prototype.creditcard = function () {
  return creditcard(this._token, this._version);
};

Client.prototype.cdnj = function () {
  return cdnj(this._token, this._version);
};

Client.prototype.cdj = function () {
  return cdj(this._token, this._version);
};

Client.prototype.gdp = function () {
  return gdp(this._token, this._version);
};

Client.prototype.indpro = function () {
  return indpro(this._token, this._version);
};

Client.prototype.cpi = function () {
  return cpi(this._token, this._version);
};

Client.prototype.payroll = function () {
  return payroll(this._token, this._version);
};

Client.prototype.housing = function () {
  return housing(this._token, this._version);
};

Client.prototype.unemployment = function () {
  return unemployment(this._token, this._version);
};

Client.prototype.vehicles = function () {
  return vehicles(this._token, this._version);
};

Client.prototype.recessionProb = function () {
  return recessionProb(this._token, this._version);
};

Client.prototype.initialClaims = function () {
  return initialClaims(this._token, this._version);
};

Client.prototype.institutionalMoney = function () {
  return institutionalMoney(this._token, this._version);
};

Client.prototype.retailMoney = function () {
  return retailMoney(this._token, this._version);
};
