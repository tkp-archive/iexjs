/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { _getJson, _dateRange, _quoteSymbols, _strOrDate } from "../common";
import { Client } from "../client";

/**
 * Get inventory of available time series endpoints
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const timeSeriesInventory = (token, version, filter) =>
  _getJson({
    url: `time-series`,
    token,
    version,
    filter,
  });

Client.prototype.timeSeriesInventory = function (filter) {
  return timeSeriesInventory(this._token, this._version, filter);
};

/**
 * Time series is the most common type of data available, and consists of a collection of data points over a period of time. Time series data is indexed by a single date field, and can be retrieved by any portion of time.
 *
 * https://iexcloud.io/docs/api/#time-series
 * @param {string} id ID used to identify a time series dataset.
 * @param {string} key Key used to identify data within a dataset. A common example is a symbol such as AAPL.
 * @param {string} subkey The optional subkey can used to further refine data for a particular key if available.
 * @param {string} range Returns data for a given range. Supported ranges described below.
 * @param {boolean} calendar Used in conjunction with range to return data in the future.
 * @param {number} limit Limits the number of results returned. Defaults to 1.
 * @param {string} subattribute Allows you to query time series by any field in the result set. All time series data is stored by ID, then key, then subkey. If you want to query by any other field in the data, you can use subattribute.
 *                              For example, news may be stored as /news/{symbol}/{newsId}, and the result data returns the keys id, symbol, date, sector, hasPaywall
 *                              By default you can only query by symbol or id. Maybe you want to query all news where the sector is Technology. Your query would be:
 *                              /time-series/news?subattribute=source|WSJ
 *                              The syntax is subattribute={keyName}|{value}. Both the key name and the value are case sensitive. A pipe symbol is used to represent ‘equal to’.
 * @param {string} dateField All time series data is stored by a single date field, and that field is used for any range or date parameters. You may want to query time series data by a different date in the result set. To change the date field used by range queries, pass the case sensitive field name with this parameter.
 *                           For example, corporate buy back data may be stored by announce date, but also contains an end date which you’d rather query by. To query by end date you would use dateField=endDate&range=last-week
 * @param {string} from Returns data on or after the given from date. Format YYYY-MM-DD
 * @param {string} to Returns data on or before the given to date. Format YYYY-MM-DD
 * @param {string} on (Returns data on the given date. Format YYYY-MM-DD
 * @param {number} last Returns the latest n number of records in the series
 * @param {number} first Returns the first n number of records in the series
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 *
 *     Date Ranges:
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | today        | Returns data for today                                                                                                                     |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | yesterday    | Returns data for yesterday                                                                                                                 |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | ytd          | Returns data for the current year                                                                                                          |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | last-week    | Returns data for Sunday-Saturday last week                                                                                                 |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | last-month   | Returns data for the last month                                                                                                            |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | last-quarter | Returns data for the last quarter                                                                                                          |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | d            | Use the short hand d to return a number of days. Example: 2d returns 2 days. If calendar=true, data is returned from today forward.        |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | w            | Use the short hand w to return a number of weeks. Example: 2w returns 2 weeks. If calendar=true, data is returned from today forward.      |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | m            | Use the short hand m to return a number of months. Example: 2m returns 2 months. If calendar=true, data is returned from today forward.    |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | q            | Use the short hand q to return a number of quarters. Example: 2q returns 2 quarters. If calendar=true, data is returned from today forward.|
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | y            | Use the short hand y to return a number of years. Example: 2y returns 2 years. If calendar=true, data is returned from today forward.      |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | tomorrow     | Calendar data for tomorrow. Requires calendar=true                                                                                         |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | this-week    | Calendar data for Sunday-Saturday this week. Requires calendar=true                                                                        |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | this-month   | Calendar data for current month. Requires calendar=true                                                                                    |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | this-quarter | Calendar data for current quarter. Requires calendar=true                                                                                  |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | next-week    | Calendar data for Sunday-Saturday next week. Requires calendar=true                                                                        |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | next-month   | Calendar data for next month. Requires calendar=true                                                                                       |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 *     | next-quarter | Calendar data for next quarter. Requires calendar=true                                                                                     |
 *     +--------------+--------------------------------------------------------------------------------------------------------------------------------------------+
 */
export const timeSeries = (options, token, version, filter) => {
  const {
    id = "",
    key = "",
    subkey = "",
    range = "1m",
    // calendar = false,
    limit = 1,
    subattribute = "",
    dateField = "",
    from = "",
    to = "",
    on = "",
    last = 0,
    first = 0,
  } = options || {};

  if (!id) return timeSeriesInventory(token, version, filter);

  let base_url = `time-series/${id}`;
  if (key) base_url += `/${_quoteSymbols(key)}`;
  if (subkey) base_url += `/${_quoteSymbols(subkey)}`;

  base_url += "?";

  if (range) base_url += `range=${_dateRange(range)}&`;

  // TODO https://github.com/timkpaine/pyEX/issues/164
  // base_url += "calendar={}&".format(str(calendar))

  if (!last) base_url += `limit=${limit}&`;
  if (subattribute) base_url += `subattribute=${subattribute}&`;
  if (dateField) base_url += `dateField=${dateField}&`;
  if (from) base_url += `from=${_strOrDate(from)}&`;
  if (to) base_url += `to=${_strOrDate(to)}&`;
  if (on) base_url += `on=${_strOrDate(on)}&`;
  if (last) base_url += `last=${last}&`;
  if (first) base_url += `first=${first}&`;

  // TODO
  // if extra_params:
  //     base_url += "&".join("{}={}".format(k, v) for k, v in extra_params.items())
  return _getJson({
    url: base_url,
    token,
    version,
    filter,
  });
};

Client.prototype.timeSeries = function (options, filter) {
  return timeSeries(options, this._token, this._version, filter);
};

/**
 * Get company's 10-Q statement
 *
 * @param {string} symbol company symbol
 * @param {object} options `timeseries` options
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const tenQ = (symbol, options, token, version, filter) =>
  timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "10-Q",
      ...(options || {}),
    },
    token,
    version,
    filter,
  );

Client.prototype.tenQ = function (symbol, options, filter) {
  return tenQ(symbol, options, this._token, this._version, filter);
};

/**
 * Get company's 10-K statement
 *
 * @param {string} symbol company symbol
 * @param {object} options `timeseries` options
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const tenK = (symbol, options, token, version, filter) =>
  timeSeries(
    {
      id: "REPORTED_FINANCIALS",
      key: symbol,
      subkey: "10-K",
      ...(options || {}),
    },
    token,
    version,
    filter,
  );

Client.prototype.tenK = function (symbol, options, filter) {
  return tenK(symbol, options, this._token, this._version, filter);
};
