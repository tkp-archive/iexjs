/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { files, download } from "../../files";
import { Client } from "../../client";
import { IEXJSException } from "../../common";

/**
 * ValuEngine provides research on over 5,000 stocks with stock valuations, Buy/Hold/Sell recommendations, and forecasted target prices, so that you the individual investor can make informed decisions. Every ValuEngine Valuation and Forecast model for the U.S. equities markets has been extensively back-tested. ValuEngine’s performance exceeds that of many well-known stock-picking styles. Reports available since March 19th, 2020.
 * https://iexcloud.io/docs/api/#valuengine-stock-research-report
 *
 * @param {object} options
 * @param {string} options.symbol
 * @param {string} options.date
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const stockReportValuEngine = (
  { symbol, date } = {},
  { token, version } = {},
) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }
  return files({ id: "VALUENGINE_REPORT", symbol, date }, { token, version });
};

/**
 * ValuEngine provides research on over 5,000 stocks with stock valuations, Buy/Hold/Sell recommendations, and forecasted target prices, so that you the individual investor can make informed decisions. Every ValuEngine Valuation and Forecast model for the U.S. equities markets has been extensively back-tested. ValuEngine’s performance exceeds that of many well-known stock-picking styles. Reports available since March 19th, 2020.
 * https://iexcloud.io/docs/api/#valuengine-stock-research-report
 * @param {object} options
 * @param {string} options.symbol
 * @param {string} options.date
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const downloadStockReportvaluEngine = (
  { symbol, date } = {},
  { token, version } = {},
) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }
  return download(
    { id: "VALUENGINE_REPORT", symbol, date },
    { token, version },
  );
};

Client.premiumfiles.prototype.valuEngine = function (options) {
  return stockReportValuEngine(options, {
    token: this._token,
    version: this._version,
  });
};

Client.premiumfiles.prototype.downloadValuEngine = function (options) {
  return downloadStockReportvaluEngine(options, {
    token: this._token,
    version: this._version,
  });
};
