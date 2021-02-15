/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../client";
import { _runSSE } from "./sse";

export const FOREX = "forex";
export const FOREX1SECOND = "forex1Second";
export const FOREX5SECOND = "forex5Second";
export const FOREX1MINUTE = "forex1Minute";

/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const fxSSE = (symbols, on_data, token, version, name = "forex") =>
  _runSSE(name, symbols, on_data, token, version);

Client.prototype.fxSSE = function (symbols, on_data) {
  return fxSSE(symbols, on_data, this._token, this._version);
};

/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const forex1SecondSSE = (symbols, on_data, token, version) =>
  fxSSE(symbols, on_data, token, version, "forex1Second");

Client.prototype.forex1SecondSSE = function (symbols, on_data) {
  return forex1SecondSSE(symbols, on_data, this._token, this._version);
};

/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const forex5SecondSSE = (symbols, on_data, token, version) =>
  fxSSE(symbols, on_data, token, version, "forex5Second");

Client.prototype.forex5SecondSSE = function (symbols, on_data) {
  return forex5SecondSSE(symbols, on_data, this._token, this._version);
};

/**
 * This endpoint streams real-time foreign currency exchange rates.
 * https://iexcloud.io/docs/api/#forex-currencies
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const forex1MinuteSSE = (symbols, on_data, token, version) =>
  fxSSE(symbols, on_data, token, version, "forex1Minute");

Client.prototype.forex1MinuteSSE = function (symbols, on_data) {
  return forex1MinuteSSE(symbols, on_data, this._token, this._version);
};
