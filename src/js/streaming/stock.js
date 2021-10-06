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

export const STOCKSUSNOUTP = "stocksUSNoUTP";
export const STOCKSUS = "stocksUS";
export const STOCKSUS1SECOND = "stocksUS1Second";
export const STOCKSUS5SECOND = "stocksUS5Second";
export const STOCKSUS1MINUTE = "stocksUS1Minute";

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUSNoUTPSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) => _runSSE("stocksUSNoUTP", symbols, on_data, nosnapshot, { token, version });

Client.prototype.stocksUSNoUTPSSE = function (symbols, on_data, nosnapshot) {
  return stocksUSNoUTPSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUSSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) => _runSSE("stocksUS", symbols, on_data, nosnapshot, { token, version });

Client.prototype.stocksUSSSE = function (symbols, on_data, nosnapshot) {
  return stocksUSSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUS1SecondSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) =>
  _runSSE("stocksUS1Second", symbols, on_data, nosnapshot, { token, version });

Client.prototype.stocksUS1SecondSSE = function (symbols, on_data, nosnapshot) {
  return stocksUS1SecondSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUSNoUTP1SecondSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) =>
  _runSSE("stocksUSNoUTP1Second", symbols, on_data, nosnapshot, {
    token,
    version,
  });

Client.prototype.stocksUSNoUTP1SecondSSE = function (
  symbols,
  on_data,
  nosnapshot,
) {
  return stocksUSNoUTP1SecondSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUS5SecondSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) =>
  _runSSE("stocksUS5Second", symbols, on_data, nosnapshot, { token, version });

Client.prototype.stocksUS5SecondSSE = function (symbols, on_data, nosnapshot) {
  return stocksUS5SecondSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUSNoUTP5SecondSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) =>
  _runSSE("stocksUSNoUTP5Second", symbols, on_data, nosnapshot, {
    token,
    version,
  });

Client.prototype.stocksUSNoUTP5SecondSSE = function (
  symbols,
  on_data,
  nosnapshot,
) {
  return stocksUSNoUTP5SecondSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUS1MinuteSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) =>
  _runSSE("stocksUS1Minute", symbols, on_data, nosnapshot, { token, version });

Client.prototype.stocksUS1MinuteSSE = function (symbols, on_data, nosnapshot) {
  return stocksUS1MinuteSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};

/**
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {boolean} nosnapshot
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stocksUSNoUTP1MinuteSSE = (
  symbols,
  on_data,
  nosnapshot,
  { token, version } = {},
) =>
  _runSSE("stocksUSNoUTP1Minute", symbols, on_data, nosnapshot, {
    token,
    version,
  });

Client.prototype.stocksUSNoUTP1MinuteSSE = function (
  symbols,
  on_data,
  nosnapshot,
) {
  return stocksUSNoUTP1MinuteSSE(symbols, on_data, nosnapshot, {
    token: this._token,
    version: this._version,
  });
};
