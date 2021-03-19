/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * The Files API allows users to download bulk data files, PDFs, etc.
 * https://iexcloud.io/docs/api/#files
 *
 * @param {string} id file id
 * @param {string} symbol symbol to fetch
 * @param {string} date date to fetch for
 * @param {string} token Access token
 * @param {string} version API version
 */
export const files = (id, symbol, date, token, version) => {
  if (id) {
    if (symbol && date) {
      return _get(
        {
          url: `files/download/${id}?symbol=${symbol}&date=${_strOrDate(date)}`,
          token,
          version,
        },
      );
    }
    return _get({ url: `files/info/${id}`, token, version});
  }
  return _get({ url: "files", token, version});
};

/**
 * The Files API allows users to download bulk data files, PDFs, etc.
 * https://iexcloud.io/docs/api/#files
 *
 * @param {string} id file id
 * @param {string} symbol symbol to fetch
 * @param {string} date date to fetch for
 * @param {string} token Access token
 * @param {string} version API version
 */
export const download = async (id, symbol, date, token, version) => {
  const data = await files(id, symbol, date, token, version);
  const datauri = `data:application/pdf,${encodeURI(data)}`;
  const a = document.createElement("a");
  a.href = datauri;
  a.download = `${id}-${symbol}-${date}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

Client.prototype.files = function (id, symbol, date) {
  return files(id, symbol, date, this._token, this._version);
};

Client.prototype.download = function (id, symbol, date) {
  return download(id, symbol, date, this._token, this._version);
};
