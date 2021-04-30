/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get } from "../common";
import { Client } from "../client";

/**
 * This call returns an array of symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#sectors
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const symbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.symbols = function (filter, format) {
  return symbols(this._token, this._version, filter, format);
};

/**
 * This call returns an array of symbols the Investors Exchange supports for trading.
 *
 * https://iexcloud.io/docs/api/#iex-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const iexSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/iex/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.iexSymbols = function (filter, format) {
  return iexSymbols(this._token, this._version, filter, format);
};

/**
 * This call returns an array of mutual fund symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#mutual-fund-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const mutualFundSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/mutual-funds/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.mutualFundSymbols = function (filter, format) {
  return mutualFundSymbols(this._token, this._version, filter, format);
};

/**
 * This call returns an array of OTC symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#otc-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const otcSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/otc/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.otcSymbols = function (filter, format) {
  return otcSymbols(this._token, this._version, filter, format);
};

/**
 * This call returns an array of international symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#international-symbols
 *
 * @param {string} region 2 letter case insensitive string of country codes using ISO 3166-1 alpha-2
 * @param {string} exchange Case insensitive string of Exchange using IEX Supported Exchanges list
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const internationalSymbols = (
  region,
  exchange,
  token = "",
  version = "",
  filter = "",
  format = "json",
) => {
  if (region) {
    return _get({
      url: `ref-data/region/${region}/symbols`,
      token,
      version,
      filter,
      format,
    });
  }
  if (exchange) {
    return _get({
      url: `ref-data/exchange/${exchange}/symbols`,
      token,
      version,
      filter,
      format,
    });
  }
  return _get({
    url: `ref-data/region/us/symbols`,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.internationalSymbols = function (
  region,
  exchange,
  filter,
  format,
) {
  return internationalSymbols(
    region,
    exchange,
    this._token,
    this._version,
    filter,
    format,
  );
};

/**
 * This call returns a list of supported currencies and currency pairs.
 *
 * https://iexcloud.io/docs/api/#fx-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const fxSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/fx/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.fxSymbols = function (filter, format) {
  return fxSymbols(this._token, this._version, filter, format);
};

/**
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const optionsSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/options/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.optionsSymbols = function (filter, format) {
  return optionsSymbols(this._token, this._version, filter, format);
};

/**
 * This provides a full list of supported cryptocurrencies by IEX Cloud.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const cryptoSymbols = (
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `ref-data/crypto/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.cryptoSymbols = function (filter, format) {
  return cryptoSymbols(this._token, this._version, filter, format);
};

const convertToList = async (res) => (await res).map((record) => record.symbol);

export const symbolsList = (token, version) =>
  convertToList(symbols(token, version, "symbol"));

Client.prototype.symbolsList = function () {
  return convertToList(symbols(this._token, this._version, "symbol"));
};

export const iexSymbolsList = (token, version) =>
  convertToList(iexSymbols(token, version, "symbol"));

Client.prototype.iexSymbolsList = function () {
  return convertToList(iexSymbols(this._token, this._version, "symbol"));
};

export const mutualFundSymbolsList = (token, version) =>
  convertToList(mutualFundSymbols(token, version, "symbol"));

Client.prototype.mutualFundSymbolsList = function () {
  return convertToList(mutualFundSymbols(this._token, this._version, "symbol"));
};

export const otcSymbolsList = (token, version) =>
  convertToList(otcSymbols(token, version, "symbol"));

Client.prototype.otcSymbolsList = function () {
  return convertToList(otcSymbols(this._token, this._version, "symbol"));
};

export const internationalSymbolsList = (region, exchange, token, version) =>
  convertToList(
    internationalSymbols(region, exchange, token, version, "symbol"),
  );

Client.prototype.internationalSymbolsList = function (region, exchange) {
  return convertToList(
    internationalSymbols(
      region,
      exchange,
      this._token,
      this._version,
      "symbol",
    ),
  );
};

export const fxSymbolsList = async (token, version) => {
  const fx = await fxSymbols(token, version);
  const ret = [[], []];
  fx.currencies.forEach((record) => {
    ret[0].push(record.code);
  });
  fx.pairs.forEach((record) => {
    ret[1].push(record.fromCurrency + record.toCurrency);
  });
  return ret;
};

Client.prototype.fxSymbolsList = function () {
  return fxSymbolsList(this._token, this._version);
};

const convertOptionsSymbolsToList = (data) => {
  const ret = [];
  Object.keys(data).forEach((symbol) => {
    data[symbol].forEach((date) => {
      ret.push(`${symbol}-${date}`);
    });
  });
  return ret;
};

export const optionsSymbolsList = async (token, version) =>
  convertOptionsSymbolsToList(await optionsSymbols(token, version, "symbol"));

Client.prototype.optionsSymbolsList = async function () {
  return convertOptionsSymbolsToList(
    await optionsSymbols(this._token, this._version, "symbol"),
  );
};

export const cryptoSymbolsList = (token, version) =>
  convertToList(cryptoSymbols(token, version, "symbol"));

Client.prototype.cryptoSymbolsList = function () {
  return convertToList(cryptoSymbols(this._token, this._version, "symbol"));
};
