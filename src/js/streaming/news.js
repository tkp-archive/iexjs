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

/**
 * Stream news
 * https://iexcloud.io/docs/api/#sse-streaming
 * @param {string} symbols
 * @param {function} on_data
 * @param {string} token
 * @param {string} version
 */
export const newsSSE = (symbols, on_data, token, version) =>
  _runSSE("news-stream", symbols, on_data, token, version);

Client.prototype.newsSSE = function (symbols, on_data) {
  return newsSSE(symbols, on_data, this._token, this._version);
};
