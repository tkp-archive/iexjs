/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import { timeSeries } from "../../timeseries";

/**
 * internal
 * @param {object} options
 * @param {string} options.id
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 * @returns
 */
const _base = (
  { id, symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    { token, version, filter, format },
  );

/**
 * The data set records the date in which a firm files a Non-Timely notification with the SEC.
 * Companies regulated by the SEC are required to file a Non-Timely notification when they are unable to file their annual or quarterly disclosures on time. In most cases, the inability to file annual/quarterly disclosures on time is a red-flag and thus a valuable signal for algorithmic strategies and fundamental investing alike.
 * Data available from 1994 with coverage of about 18,000 equities
 * https://iexcloud.io/docs/api/#non-timely-filings
 *
 * @param {object} options
 * @param {string} options.symbol
 * @param {object} timeseriesArgs The standard arguments from time-series
 * @param {object} standardOptions
 * @param {string} standardOptions.token Access token
 * @param {string} standardOptions.version API version
 * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} standardOptions.format output format
 */
export const nonTimelyFilingsFraudFactors = (
  { symbol } = {},
  timeseriesArgs,
  { token, version, filter, format } = {},
) =>
  _base(
    { id: "PREMIUM_FRAUD_FACTORS_NON_TIMELY_FILINGS", symbol },
    timeseriesArgs,
    {
      token,
      version,
      filter,
      format,
    },
  );

Client.premium.prototype.nonTimelyFilings = function (
  options,
  timeseriesArgs,
  standardOptions,
) {
  return nonTimelyFilingsFraudFactors(options, timeseriesArgs, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
