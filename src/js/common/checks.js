/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { IEXJSException } from "./exception";

const _TIMEFRAME_REGEX = /^((q|Q)[1-4]|(h|H)[1-2])?(1|2)(0|9)[0-9][0-9]/;

export const _TIMEFRAME_CHART = [
  "max",
  "5y",
  "2y",
  "1y",
  "ytd",
  "6m",
  "3m",
  "1m",
  "1mm",
  "5d",
  "5dm",
  "1d",
  "dynamic",
];
export const _TIMEFRAME_DIVSPLIT = [
  "5y",
  "2y",
  "1y",
  "ytd",
  "6m",
  "3m",
  "1m",
  "next",
];
export const _LIST_OPTIONS = [
  "mostactive",
  "gainers",
  "losers",
  "iexvolume",
  "iexpercent",
];
export const _COLLECTION_TAGS = ["sector", "tag", "list"];
export const _DATE_RANGES = [
  "today",
  "yesterday",
  "ytd",
  "last-week",
  "last-month",
  "last-quarter",
  "d",
  "w",
  "m",
  "q",
  "y",
  "tomorrow",
  "this-week",
  "this-month",
  "this-quarter",
  "next-week",
  "next-month",
  "next-quarter",
];
export const _KEY_STATS = [
  "companyName",
  "marketcap",
  "week52high",
  "week52low",
  "week52change",
  "sharesOutstanding",
  "float",
  "avg10Volume",
  "avg30Volume",
  "day200MovingAvg",
  "day50MovingAvg",
  "employees",
  "ttmEPS",
  "ttmDividendRate",
  "dividendYield",
  "nextDividendDate",
  "exDividendDate",
  "nextEarningsDate",
  "peRatio",
  "beta",
  "maxChangePercent",
  "year5ChangePercent",
  "year2ChangePercent",
  "year1ChangePercent",
  "ytdChangePercent",
  "month6ChangePercent",
  "month3ChangePercent",
  "month1ChangePercent",
  "day30ChangePercent",
  "day5ChangePercent",
];
export const _USAGE_TYPES = [
  "messages",
  "rules",
  "rule-records",
  "alerts",
  "alert-records",
];

export const _BATCH_TYPES = [
  "book",
  "chart",
  "company",
  "dividends",
  "earnings",
  "financials",
  "stats",
  "news",
  "peers",
  "splits",
  // limit 10
  "intraday-prices",
  "effective-spread",
  "delayed-quote",
  "largest-trades",
  "previous",
  "price",
  "quote",
  "relevant",
  "volume-by-venue",
];

export const _STANDARD_DATE_FIELDS = [
  "consensusEndDate",
  "consensusStartDate",
  "DailyListTimestamp",
  "date",
  "datetime",
  "declaredDate",
  "EPSReportDate",
  "endDate",
  "exDate",
  "expectedDate",
  "expirationDate",
  "fiscalEndDate",
  "latestTime",
  "lastTradeDate",
  "lastUpdated",
  "paymentDate",
  "processedTime",
  "recordDate",
  "RecordUpdateTime",
  "reportDate",
  "settlementDate",
  "startDate",
];

export const _STANDARD_TIME_FIELDS = [
  "closeTime",
  "close.time",
  "delayedPriceTime",
  "extendedPriceTime",
  "highTime",
  "iexCloseTime",
  "iexLastUpdated",
  "iexOpenTime",
  "lastTradeTime",
  "lastUpdated",
  "latestTime",
  "latestUpdate",
  "lowTime",
  "oddLotDelayedPriceTime",
  "openTime",
  "open.time",
  "processedTime",
  "report_date",
  "reportDate",
  "time",
  "timestamp",
  "updated",
];

export const _INDICATORS = [
  "abs",
  "acos",
  "ad",
  "add",
  "adosc",
  "adx",
  "adxr",
  "ao",
  "apo",
  "aroon",
  "aroonosc",
  "asin",
  "atan",
  "atr",
  "avgprice",
  "bbands",
  "bop",
  "cci",
  "ceil",
  "cmo",
  "cos",
  "cosh",
  "crossany",
  "crossover",
  "cvi",
  "decay",
  "dema",
  "di",
  "div",
  "dm",
  "dpo",
  "dx",
  "edecay",
  "ema",
  "emv",
  "exp",
  "fisher",
  "floor",
  "fosc",
  "hma",
  "kama",
  "kvo",
  "lag",
  "linreg",
  "linregintercept",
  "linregslope",
  "ln",
  "log10",
  "macd",
  "marketfi",
  "mass",
  "max",
  "md",
  "medprice",
  "mfi",
  "min",
  "mom",
  "msw",
  "mul",
  "natr",
  "nvi",
  "obv",
  "ppo",
  "psar",
  "pvi",
  "qstick",
  "roc",
  "rocr",
  "round",
  "rsi",
  "sin",
  "sinh",
  "sma",
  "sqrt",
  "stddev",
  "stderr",
  "stoch",
  "stochrsi",
  "sub",
  "sum",
  "tan",
  "tanh",
  "tema",
  "todeg",
  "torad",
  "tr",
  "trima",
  "trix",
  "trunc",
  "tsf",
  "typprice",
  "ultosc",
  "var",
  "vhf",
  "vidya",
  "volatility",
  "vosc",
  "vwma",
  "wad",
  "wcprice",
  "wilders",
  "willr",
  "wma",
  "zlema",
];

export const _INDICATOR_RETURNS = {
  abs: ["abs"],
  acos: ["acos"],
  ad: ["ad"],
  add: ["add"],
  adosc: ["adosc"],
  adx: ["dx"],
  adxr: ["dx"],
  ao: ["ao"],
  apo: ["apo"],
  aroon: ["aroon_down", "aroon_up"],
  aroonosc: ["aroonosc"],
  asin: ["asin"],
  atan: ["atan"],
  atr: ["atr"],
  avgprice: ["avgprice"],
  bbands: ["bbands_lower", "bbands_middle", "bbands_upper"],
  bop: ["bop"],
  cci: ["cci"],
  ceil: ["ceil"],
  cmo: ["cmo"],
  cos: ["cos"],
  cosh: ["cosh"],
  crossany: ["crossany"],
  crossover: ["crossover"],
  cvi: ["cvi"],
  decay: ["decay"],
  dema: ["dema"],
  di: ["plus_di", "minus_di"],
  div: ["div"],
  dm: ["plus_dm", "minus_dm"],
  dpo: ["dop"],
  dx: ["dx"],
  edecay: ["edecay"],
  ema: ["ema"],
  emv: ["emv"],
  exp: ["exp"],
  fisher: ["fisher", "fisher_signal"],
  floor: ["floor"],
  fosc: ["fosc"],
  hma: ["hma"],
  kama: ["kama"],
  kvo: ["kvo"],
  lag: ["lag"],
  linreg: ["linreg"],
  linregintercept: ["linregintercept"],
  linregslope: ["linregslope"],
  ln: ["ln"],
  log10: ["log10"],
  macd: ["macd", "macd_signal", "macd_histogram"],
  marketfi: ["marketfi"],
  mass: ["mass"],
  max: ["max"],
  md: ["md"],
  medprice: ["medprice"],
  mfi: ["mfi"],
  min: ["min"],
  mom: ["mom"],
  msw: ["msw_sine", "msw_lead"],
  mul: ["mul"],
  natr: ["matr"],
  nvi: ["nvi"],
  obv: ["obv"],
  ppo: ["ppo"],
  psar: ["psar"],
  pvi: ["pvi"],
  qstick: ["qstick"],
  roc: ["roc"],
  rocr: ["rocr"],
  round: ["round"],
  rsi: ["rsi"],
  sin: ["sin"],
  sinh: ["sinh"],
  sma: ["sma"],
  sqrt: ["sqrt"],
  stddev: ["stddev"],
  stderr: ["stderr"],
  stoch: ["stock_k", "stock_d"],
  stochrsi: ["stochrsi"],
  sub: ["sub"],
  sum: ["sum"],
  tan: ["tan"],
  tanh: ["tanh"],
  tema: ["tema"],
  todeg: ["degrees"],
  torad: ["radians"],
  tr: ["tr"],
  trima: ["trima"],
  trix: ["trix"],
  trunc: ["trunc"],
  tsf: ["tsf"],
  typprice: ["typprice"],
  ultosc: ["ultosc"],
  var: ["var"],
  vhf: ["vhf"],
  vidya: ["vidya"],
  volatility: ["volatility"],
  vosc: ["vosc"],
  vwma: ["vwma"],
  wad: ["wad"],
  wcprice: ["wcprice"],
  wilders: ["wilders"],
  willr: ["willr"],
  wma: ["wma"],
  zlema: ["zlema"],
};

export const _strToList = (st) => {
  if (typeof st === "string") {
    return [st];
  }
  return st;
};

export const _strCommaSeparatedString = (st) => _strToList(st).join(",");

export const _strOrDate = (st) => {
  if (typeof st === "string") return st;
  if (st instanceof Date)
    return st.toISOString().slice(0, 10).replace(/-/g, "");
  throw IEXJSException(`Not a date: ${typeof st} ${st}`);
};

export const _dateRange = (st) => {
  if (_DATE_RANGES.indexOf(st) < 0 && !_TIMEFRAME_REGEX.test(st))
    throw IEXJSException(`Must be a valid date range: got ${st}`);
  return st;
};

export const _raiseIfNotStr = (s) => {
  if (typeof s !== "string")
    throw IEXJSException(`Cannot use type ${typeof s}`);
};

export const _checkPeriodLast = (per, last) => {
  if (per !== "quarter" && per !== "annual") {
    throw IEXJSException("Period must be in {'quarter', 'annual'}");
  }
  if (per === "quarter") {
    if (last < 1 || last > 12) {
      throw IEXJSException("Last must be in [1, 12] for period 'quarter'");
    }
  } else if (last < 1 || last > 4) {
    throw IEXJSException("Last must be in [1, 4] for period 'annual'");
  }
};

// TODO
// def _expire(**temporal_args):
//     if not os.path.exists(_PYEX_CACHE_FOLDER):
//         os.makedirs(_PYEX_CACHE_FOLDER)

//     def _wrapper(foo):
//         temporal_args["persistent"] = os.path.join(_PYEX_CACHE_FOLDER, foo.__name__)
//         return expire(**temporal_args)(foo)

//     return _wrapper

// TODO
// def _interval(**temporal_args):
//     if not os.path.exists(_PYEX_CACHE_FOLDER):
//         os.makedirs(_PYEX_CACHE_FOLDER)

//     def _wrapper(foo):
//         temporal_args["persistent"] = os.path.join(_PYEX_CACHE_FOLDER, foo.__name__)
//         return interval(**temporal_args)(foo)

//     return _wrapper

export const _requireSecret = (token, allowSandbox = true) => {
  if (token.startsWith("sk") || (allowSandbox && token.startsWith("Tsk")))
    return;
  throw IEXJSException("Requires secret token!");
};

export const _quoteSymbols = (symbols) => {
  if (Array.isArray(symbols)) {
    // comma separated, quote separately
    return symbols.map((symbol) => encodeURIComponent(symbol)).join(",");
  }
  // not comma separated, just quote
  return encodeURIComponent(symbols);
};

export const _timeseriesWrapper = (
  options,
  enforceKey = true,
  enforceSubkey = true,
) => {
  if (enforceKey) {
    const { key } = options || {};
    if (!(key === undefined || key === null))
      throw IEXJSException(
        "Cannot pass `key` argument to timeseries, already used",
      );
  }
  if (enforceSubkey) {
    const { subkey } = options || {};
    if (!(subkey === undefined || subkey === null))
      throw IEXJSException(
        "Cannot pass `subkey` argument to timeseries, already used",
      );
  }
};
