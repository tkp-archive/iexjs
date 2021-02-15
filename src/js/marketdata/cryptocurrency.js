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

export const CRYPTOBOOK = "cryptoBook";
export const CRYPTOEVENTS = "cryptoEvents";
export const CRYPTOQUOTES = "cryptoQuotes";

/**
 * This returns a current snapshot of the book for a specified cryptocurrency. For REST, you will receive a current snapshot of the current book for the specific cryptocurrency. For SSE Streaming, you will get a full representation of the book updated as often as the book changes. Examples of each are below:
 * https://iexcloud.io/docs/api/#cryptocurrency-book
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const cryptoBookSSE = (symbols, on_data, token, version) =>
  _runSSE("cryptoBook", symbols, on_data, token, version);

Client.prototype.cryptoBookSSE = function (symbols, on_data) {
  return cryptoBookSSE(symbols, on_data, this._token, this._version);
};

/**
 * This returns a streaming list of event updates such as new and canceled orders.
 * https://iexcloud.io/docs/api/#cryptocurrency-events
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const cryptoEventsSSE = (symbols, on_data, token, version) =>
  _runSSE("cryptoEvents", symbols, on_data, token, version);

Client.prototype.cryptoEventsSSE = function (symbols, on_data) {
  return cryptoEventsSSE(symbols, on_data, this._token, this._version);
};

/**
 * This returns the quote for a specified cryptocurrency. Quotes are available via REST and SSE Streaming.
 * https://iexcloud.io/docs/api/#cryptocurrency-quote
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const cryptoQuotesSSE = (symbols, on_data, token, version) =>
  _runSSE("cryptoQuotes", symbols, on_data, token, version);

Client.prototype.cryptoQuotesSSE = function (symbols, on_data) {
  return cryptoQuotesSSE(symbols, on_data, this._token, this._version);
};
