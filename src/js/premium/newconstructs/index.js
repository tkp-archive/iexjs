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
 * Powered by the best fundamental data in the world, New Constructs’ research provides unrivalled insights into the profitability and valuation of public and private companies.Our risk/reward ratings empower clients to make more informed investing decisions based on true, not reported or distorted, earnings. Research reports for 3,000+ stocks, 400+ ETFs, and 7,000+ mutual funds.
 * https://iexcloud.io/docs/api/#new-constructs-report
 *
 * @param {object} options
 * @param {string} options.symbol
 * @param {string} options.date
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const reportNewConstructs = (
  { symbol, date } = {},
  { token, version } = {},
) => {
  if (!symbol || !date) {
    throw new IEXJSException("symbol and date required");
  }
  return files({ id: "VALUENGINE_REPORT", symbol, date }, { token, version });
};

/**
 * Powered by the best fundamental data in the world, New Constructs’ research provides unrivalled insights into the profitability and valuation of public and private companies.Our risk/reward ratings empower clients to make more informed investing decisions based on true, not reported or distorted, earnings. Research reports for 3,000+ stocks, 400+ ETFs, and 7,000+ mutual funds.
 * https://iexcloud.io/docs/api/#new-constructs-report
 *
 * @param {object} options
 * @param {string} options.symbol
 * @param {string} options.date
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 */
export const downloadReportNewConstructs = (
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

Client.premiumfiles.prototype.newConstructs = function (options) {
  return reportNewConstructs(options, {
    token: this._token,
    version: this._version,
  });
};

Client.premiumfiles.prototype.downloadNewConstructs = function (options) {
  return downloadReportNewConstructs(options, {
    token: this._token,
    version: this._version,
  });
};
