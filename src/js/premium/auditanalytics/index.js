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
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */
const _base = (id, symbol, token, version, filter, format, ...timeseriesArgs) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    token,
    version,
    filter,
    format,
  );

/**
 * The Director & Officer Changes data set covers all SEC registrants who have disclosed a director or officer change in Item 5.02 of an 8-K or 8-K/A since August 2004. As of January 1, 2018, the dataset also includes director or officer change disclosures in 6-K & 6-K/A filings.
 * https://iexcloud.io/docs/api/#audit-analytics-director-and-officer-changes
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const directorAndOfficerChangesAuditAnalytics = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_AUDIT_ANALYTICS_DIRECTOR_OFFICER_CHANGES",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.directorAndOfficerChanges = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return directorAndOfficerChangesAuditAnalytics(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * AQRM is an interactive tool designed to quickly identify and understand qualitative and contextual metrics of governance and reporting quality. Red flags and events highlighted in the risk matrix can be used for screening, idea generation, portfolio monitoring, and risk management for every SEC registrant.
 * https://iexcloud.io/docs/api/#audit-analytics-accounting-quality-and-risk-matrix
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const accountingQualityAndRiskMatrixAuditAnalytics = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_AUDIT_ANALYTICS_ACCOUNTING_QUALITY_RISK_MATRIX",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.accountingQualityAndRiskMatrix = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return accountingQualityAndRiskMatrixAuditAnalytics(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};
