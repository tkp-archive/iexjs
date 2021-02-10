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

export const thirtyYear = (token, version) =>
  points(null, "DGS30", token, version);

Client.prototype.thirtyYear = function () {
  return thirtyYear(this._token, this._version);
};

export const twentyYear = (token, version) =>
  points(null, "DGS20", token, version);

Client.prototype.twentyYear = function () {
  return twentyYear(this._token, this._version);
};

export const tenYear = (token, version) =>
  points(null, "DGS10", token, version);

Client.prototype.tenYear = function () {
  return tenYear(this._token, this._version);
};

export const fiveYear = (token, version) =>
  points(null, "DGS5", token, version);

Client.prototype.fiveYear = function () {
  return fiveYear(this._token, this._version);
};

export const twoYear = (token, version) => points(null, "DGS2", token, version);

Client.prototype.twoYear = function () {
  return twoYear(this._token, this._version);
};

export const oneYear = (token, version) => points(null, "DGS1", token, version);

Client.prototype.oneYear = function () {
  return oneYear(this._token, this._version);
};

export const sixMonth = (token, version) =>
  points(null, "DGS6MO", token, version);

Client.prototype.sixMonth = function () {
  return thirtyYear(this._token, this._version);
};

export const threeMonth = (token, version) =>
  points(null, "DGS3MO", token, version);

Client.prototype.threeMonth = function () {
  return threeMonth(this._token, this._version);
};

export const oneMonth = (token, version) =>
  points(null, "DGS1MO", token, version);

Client.prototype.oneMonth = function () {
  return oneMonth(this._token, this._version);
};
