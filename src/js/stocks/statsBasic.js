/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _KEY_STATS,
  IEXJSException,
  _get,
  _quoteSymbols,
  _raiseIfNotStr,
} from "../common";
import { Client } from "../client";

/**
 * Key Stats about company
 *
 * https://iexcloud.io/docs/api/#stats-basic
 *
 * @param {object} options
 * @param {string} options.symbol ticker to request
 * @param {string} options.stat specific stat to request, in: {companyName, marketcap, week52high, week52low, week52change, sharesOutstanding, float, avg10Volume, avg30Volume, day200MovingAvg, day50MovingAvg, employees, ttmEPS, ttmDividendRate, dividendYield, nextDividendDate, exDividendDate, nextEarningsDate, peRatio, beta, maxChangePercent, year5ChangePercent, year2ChangePercent, year1ChangePercent, ytdChangePercent, month6ChangePercent, month3ChangePercent, month1ChangePercent, day30ChangePercent, day5ChangePercent}
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const statsBasic = (
  { symbol, stat } = {},
  { token, version, filter, format } = {},
) => {
  _raiseIfNotStr(symbol);
  if (stat) {
    if (_KEY_STATS.indexOf(stat) < 0) {
      throw new IEXJSException(`Stat must be in ${_KEY_STATS}`);
    }
    return _get({
      url: `stock/${_quoteSymbols(symbol)}/stats/${stat}`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `stock/${_quoteSymbols(symbol)}/stats`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.statsBasic = function (
  { symbol, stat } = {},
  { filter, format } = {},
) {
  return statsBasic(
    { symbol, stat },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};
