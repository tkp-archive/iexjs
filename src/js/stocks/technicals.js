/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import {
  _INDICATORS,
  _TIMEFRAME_CHART,
  IEXJSException,
  _get,
  _raiseIfNotStr,
} from "../common";
import { Client } from "../client";

/**
   * Technical indicators are available for any historical or intraday range.
   * This endpoint calls the historical or intraday price endpoints for the given range, and the associated indicator for the price range.
   *
   * https://iexcloud.io/docs/api/#technical-indicators
   *
   * @param {object} options
   * @param {string} options.symbol ticker to request
   * @param {string} options.indicator Technical indicator to request, in:
              Indicator   Description                              Inputs                       Defaults         Outputs
              -------------------------------------------------------------------------------------------------------------
              abs         Vector Absolute Value                                                                   abs
              acos        Vector Arccosine                                                                        acos
              ad          Accumulation/Distribution Line                                                          ad
              add         Vector Addition                                                                          add
              adosc       Accumulation/Distribution Oscillator    short period,long period        2,5             adosc
              adx         Average Directional Movement Index      period                          5               dx
              adxr        Average Directional Movement Rating     period                          5               dx
              ao          Awesome Oscillator                                                                      ao
              apo         Absolute Price Oscillator               short period,long period        2,5             apo
              aroon       Aroon                                   period                          5               aroon_down,aroon_up
              aroonosc    Aroon Oscillator                        period                          5               aroonosc
              asin        Vector Arcsine                                                                          asin
              atan        Vector Arctangent                                                                       atan
              atr         Average True Range                      period                          5               atr
              avgprice    Average Price                                                                           avgprice
              bbands      Bollinger Bands                         period,stddev                   20,2            bbands_lower,bbands_middle,bbands_upper
              bop         Balance of Power
              cci         Commodity Channel Index                 period                          5               cci
              ceil        Vector Ceiling                                                                          ceil
              cmo         Chande Momentum Oscillator              period                          5               cmo
              cos         Vector Cosine                                                                           cos
              cosh        Vector Hyperbolic Cosine                                                                cosh
              crossany    Crossany                                                                                crossany
              crossover   Crossover                                                                               crossover
              cvi         Chaikins Volatility                     period                          5               cvi
              decay       Linear Decay                            period                          5               decay
              dema        Double Exponential Moving Average       period                          5               dema
              di          Directional Indicator                   period                          5               plus_di,minus_di
              div         Vector Division                                                                         div
              dm          Directional Movement                    period                          5               plus_dm,minus_dm
              dpo         Detrended Price Oscillator              period                          5               dpo
              dx          Directional Movement Index              period                          5               dx
              edecay      Exponential Decay                       period                          5               edecay
              ema         Exponential Moving Average              period                          5               ema
              emv         Ease of Movement                                                                        emv
              exp         Vector Exponential                                                                      exp
              fisher      Fisher Transform                        period                          5               fisher,fisher_signal
              floor       Vector Floor                                                                            floor
              fosc        Forecast Oscillator                     period                          5               fosc
              hma         Hull Moving Average                     period                          5               hma
              kama        Kaufman Adaptive Moving Average         period                          5               kama
              kvo         Klinger Volume Oscillator               short period,long period        2,5             kvo
              lag         Lag                                     period                          5               lag
              linreg      Linear Regression                       period                          5               linreg
              linregintercept     Linear Regression Intercept     period                          5               linregintercept
              linregslope         Linear Regression Slope         period                          5               linregslope
              ln          Vector Natural  Log                                                                     ln
              log10       Vector Base-10 Log                                                                      log10
              macd        Moving Average Conv/Div                 short per,long per,signal per   12,26,9         macd,macd_signal,macd_histogram
              marketfi    Market Facilitation Index                                                               marketfi
              mass        Mass Index                              period                          5               mass
              max         Maximum In Period                       period                          5               max
              md          Mean Deviation Over Period              period                          5               md
              medprice    Median Price                                                                            medprice
              mfi         Money Flow Index                        period                          5               mfi
              min         Minimum In Period                       period                          5               min
              mom         Momentum                                period                          5               mom
              msw         Mesa Sine Wave                          period                          5               msw_sine,msw_lead
              mul         Vector Multiplication                                                                   mul
              natr        Normalized Average True Range           period                          5               natr
              nvi         Negative Volume Index                                                                   nvi
              obv         On Balance Volume                                                                       obv
              ppo         Percentage Price Oscillator             short period,long period        2,5             ppo
              psar        Parabolic SAR                           accelfactor step,accel factor max    .2,2       psar
              pvi         Positive Volume Index                                                                   pvi
              qstick      Qstick                                  period                          5               qstick
              roc         Rate of Change                          period                          5               roc
              rocr        Rate of Change Ratio                    period                          5               rocr
              round       Vector Round                                                                            round
              rsi         Relative Strength Index                 period                          5               rsi
              sin         Vector Sine                                                                             sin
              sinh        Vector Hyperbolic Sine                                                                  sinh
              sma         Simple Moving Average                   period                          5               sma
              sqrt        Vector Square Root                                                                      sqrt
              stddev      Standard Deviation Over Period          period                          5               stddev
              stderr      Standard Error Over Period              period                          5               stderr
              stoch       Stochastic Oscillator                   k per,k slowing per,d per       5,3,3           stoch_k,stoch_d
              stochrsi    Stochastic RSI                          period                          5               stochrsi
              sub         Vector Subtraction                                                                      sub
              sum         Sum Over Period                         period                          5               sum
              tan         Vector Tangent                                                                          tan
              tanh        Vector Hyperbolic Tangent                                                               tanh
              tema        Triple Exponential Moving Average       period                          5               tema
              todeg       Vector Degree Conversion                                                                degrees
              torad       Vector Radian Conversion                                                                radians
              tr          True Range                                                                              tr
              trima       Triangular Moving Average               period                          5               trima
              trix        Trix                                    period                          5               trix
              trunc       Vector Truncate                                                                         trunc
              tsf         Time Series Forecast                    period                          5               tsf
              typprice    Typical Price                                                                           typprice
              ultosc      Ultimate Oscillator                     short per,med per,long per      2,3,5           ultosc
              var         Variance Over Period                    period                          5               var
              vhf         Vertical Horizontal Filter              period                          5               vhf
              vidya       Variable Index Dynamic Average          short period,long period,alpha  2,5,.2          vidya
              volatility  Annualized Historical Volatility        period                          5               volatility
              vosc        Volume Oscillator                       short period,long period        2,5             vosc
              vwma        Volume Weighted Moving Average          period                          5               vwma
              wad         Williams Accumulation/Distribution                                                      wad
              wcprice     Weighted Close Price                                                                    wcprice
              wilders     Wilders Smoothing                       period                          5               wilders
              willr       Williams %R    period
              wma         Weighted Moving Average                 period                          5               wma
              zlema       Zero-Lag Exponential Moving Average     period                          5               zlema
  
   * @param {string} options.range Timeframe to request e.g. 1m
   * @param {string} options.inputs array of inputs to request
   * @param {object} standardOptions
   * @param {string} standardOptions.token Access token
   * @param {string} standardOptions.version API version
   * @param {string} standardOptions.filter https://iexcloud.io/docs/api/#filter-results
   * @param {string} standardOptions.format output format
  */
export const technicals = (
  { symbol, indicator, range, inputs } = {},
  { token, version, filter, format } = {},
) => {
  // eslint-disable-next-line no-param-reassign
  indicator = indicator || "sma";

  // eslint-disable-next-line no-param-reassign
  inputs = inputs || [];

  _raiseIfNotStr(symbol);
  if (_INDICATORS.indexOf(indicator) < 0) {
    throw new IEXJSException("Indicator not recognized");
  }
  if ((range || "1m") !== "1d") {
    if (_TIMEFRAME_CHART.indexOf(range || "1m") < 0) {
      throw new IEXJSException("Range not recognized");
    }
  }

  let base_url = `stock/${symbol}/indicator/${indicator}?range=${
    range || "1m"
  }`;

  if (
    [
      "abs",
      "acos",
      "ad",
      "add",
      "ao",
      "asin",
      "atan",
      "avgprice",
      "bop",
      "ceil",
      "cos",
      "cosh",
      "crossany",
      "crossover",
      "div",
      "emv",
      "exp",
      "floor",
      "ln",
      "log10",
      "marketfi",
      "medprice",
      "mul",
      "nvi",
      "obv",
      "pvi",
      "round",
      "sin",
      "sinh",
      "sqrt",
      "sub",
      "tan",
      "tanh",
      "todeg",
      "torad",
      "tr",
      "trunc",
      "typprice",
      "wad",
      "wcprice",
      "willr",
    ].indexOf(indicator) >= 0
  ) {
    if (inputs) {
      throw IEXJSException("Indicator takes no arguments");
    }
  }
  if (
    [
      "aroon",
      "aroonosc",
      "atr",
      "adx",
      "adxr",
      "cci",
      "cmo",
      "cvi",
      "decay",
      "dema",
      "di",
      "dm",
      "dpo",
      "dx",
      "edecay",
      "ema",
      "fisher",
      "fosc",
      "hma",
      "kama",
      "lag",
      "linreg",
      "linregintercept",
      "linregslope",
      "mass",
      "max",
      "md",
      "mfi",
      "min",
      "mom",
      "msw",
      "natr",
      "qstick",
      "roc",
      "rocr",
      "rsi",
      "sma",
      "stddev",
      "stderr",
      "stochrsi",
      "sum",
      "tema",
      "trima",
      "trix",
      "tsf",
      "var",
      "vhf",
      "volatility",
      "vwma",
      "wilders",
      "wma",
      "zlema",
    ].indexOf(indicator) >= 0
  ) {
    const [input1, input2, input3, input4] = inputs;
    if (input2 || input3 || input4) {
      throw IEXJSException("Indicator takes at most 1 argument");
    }
    if (input1) base_url += `&input1=${input1}`;
  }

  if (
    ["adosc", "apo", "bbands", "kvo", "ppo", "psar", "vosc"].indexOf(
      indicator,
    ) >= 0
  ) {
    const [input1, input2, input3, input4] = inputs;
    if (input3 || input4) {
      throw IEXJSException("Indicator takes at most 2 argument");
    }
    if (input1) base_url += `&input1=${input1}`;
    if (input2) base_url += `&input2=${input2}`;
  }

  if (["macd", "stoch", "ultosc", "vidya"].indexOf(indicator) >= 0) {
    const [input1, input2, input3, input4] = inputs;
    if (input4) {
      throw IEXJSException("Indicator takes at most 3 argument");
    }
    if (input1) base_url += `&input1=${input1}`;
    if (input2) base_url += `&input2=${input2}`;
    if (input3) base_url += `&input3=${input3}`;
  }
  return _get({ url: base_url, token, version, filter, format });
};

Client.prototype.technicals = function (options, standardOptions) {
  return technicals(options, {
    token: this._token,
    version: this._version,
    ...standardOptions,
  });
};
