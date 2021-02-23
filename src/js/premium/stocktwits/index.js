/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import { IEXJSException, _get, _raiseIfNotStr, _strOrDate } from "../../common";

/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * https://iexcloud.io/docs/api/#balance-sheet
 *
 * @param {string} symbol Symbol to look up
 * @param {string} type Can only be daily or minute. Default is daily.
 * @param {string} date Format YYYYMMDD date to fetch sentiment data. Default is today.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const socialSentiment = async (
  symbol,
  type,
  date,
  token,
  version,
  filter,
  format,
) => {
  _raiseIfNotStr(symbol);
  if (["daily", "minute"].indexOf(type || "daily") < 0) {
    throw new IEXJSException("`type` must be either daily or minute");
  }

  let base_url = `stock/${symbol}/sentiment/${type || "daily"}`;
  if (date) {
    // eslint-disable-next-line no-param-reassign
    date = _strOrDate(date);
    base_url += `/${date}`;
  }

  return _get({
    url: base_url,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.socialSentiment = function (
  symbol,
  type,
  date,
  filter,
  format,
) {
  return socialSentiment(
    symbol,
    type,
    date,
    this._token,
    this._version,
    filter,
    format,
  );
};
