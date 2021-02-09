/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * This call allows you to fetch a number of trade dates or holidays from a given date. For example, if you want the next trading day, you would call /ref-data/us/dates/trade/next/1.
 *
 * https://iexcloud.io/docs/api/#u-s-exchanges
 *
 * @param {string} type "holiday" or "trade"
 * @param {string} direction "next" or "last"
 * @param {number} last number to move in direction
 * @param {string} startDate start date for next or last, YYYYMMDD
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const calendar = (
  type = "holiday",
  direction = "next",
  last = 1,
  startDate = null,
  token = "",
  version = "",
  filter = "",
) => {
  if (startDate) {
    return _getJson({
      url: `ref-data/us/dates/${type}/${direction}/${last}/${_strOrDate(
        startDate,
      )}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `ref-data/us/dates/${type}/${direction}/${last.toString()}`,
    token,
    version,
    filter,
  });
};

export const holidays = calendar;

Client.prototype.calendar = function (
  type,
  direction,
  last,
  startDate,
  filter,
) {
  return calendar(
    type,
    direction,
    last,
    startDate,
    this._token,
    this._version,
    filter,
  );
};

Client.prototype.holidays = function (
  type,
  direction,
  last,
  startDate,
  filter,
) {
  return calendar(
    type,
    direction,
    last,
    startDate,
    this._token,
    this._version,
    filter,
  );
};
