/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _raiseIfNotStr, _quoteSymbols, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * The following are IEX-listed securities that have an aggregate fail to deliver position for five consecutive settlement days at a registered clearing agency, totaling 10,000 shares or more and equal to at least 0.5% of the issuer’s total shares outstanding (i.e., “threshold securities”).
 *   The report data will be published to the IEX website daily at 8:30 p.m. ET with data for that trading day.
 *
 * https://iexcloud.io/docs/api/#listed-regulation-sho-threshold-securities-list-in-dev
 *
 * @param {string} date date
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const threshold = (date, token, version, filter) => {
  if (date) {
    return _getJson({
      url: `stock/market/threshold-securities/${_strOrDate(date)}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `stock/market/threshold-securities`,
    token,
    version,
    filter,
  });
};

Client.prototype.threshold = function (date, filter) {
  return threshold(date, this._token, this._version, filter);
};

/**
 * The consolidated market short interest positions in all IEX-listed securities are included in the IEX Short Interest Report.
 *
 * https://iexcloud.io/docs/api/#listed-short-interest-list-in-dev
 *
 * @param {string} symbol Ticker to request
 * @param {string} date Effective Datetime
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const shortInterest = (symbol, date, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (date) {
    return _getJson({
      url: `stock/${_quoteSymbols(symbol)}/short-interest/${_strOrDate(date)}`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `stock/${_quoteSymbols(symbol)}/short-interest`,
    token,
    version,
    filter,
  });
};

Client.prototype.shortInterest = function (symbol, date, filter) {
  return shortInterest(symbol, date, this._token, this._version, filter);
};
