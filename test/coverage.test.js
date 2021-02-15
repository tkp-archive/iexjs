/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-undef */

const {
  Client,
  // account
  messageBudget,
  metadata,
  payAsYouGo,
  usage,
  // alternative
  sentiment,
  ceoCompensation,
  // commodities
  wti,
  brent,
  natgas,
  heatoil,
  jet,
  diesel,
  gasreg,
  gasmid,
  gasprm,
  propane,
  // cryptocurrency
  cryptoBook,
  cryptoPrice,
  cryptoQuote,
  // economic
  us30,
  us15,
  us5,
  fedfunds,
  creditcard,
  cdnj,
  cdj,
  gdp,
  indpro,
  cpi,
  payroll,
  housing,
  unemployment,
  vehicles,
  recessionProb,
  initialClaims,
  institutionalMoney,
  retailMoney,
  // fx
  latestFX,
  convertFX,
  historicalFX,
  // marketdata
  // options
  optionExpirations,
  options,
  // points
  points,
  // premium
  // rates
  thirtyYear,
  twentyYear,
  tenYear,
  fiveYear,
  twoYear,
  oneYear,
  sixMonth,
  threeMonth,
  oneMonth,
  // refdata
  calendar,
  holidays,
  exchanges,
  internationalExchanges,
  figi,
  search,
  sectors,
  tags,
  symbols,
  iexSymbols,
  mutualFundSymbols,
  otcSymbols,
  internationalSymbols,
  fxSymbols,
  optionsSymbols,
  cryptoSymbols,
  symbolsList,
  iexSymbolsList,
  mutualFundSymbolsList,
  otcSymbolsList,
  internationalSymbolsList,
  fxSymbolsList,
  optionsSymbolsList,
  cryptoSymbolsList,
  isinLookup,
  // rules
  // stats
  systemStats,
  recent,
  records,
  summary,
  daily,
  // stocks
} = require("../src/js");

describe("Client", () => {
  test("Client", () => {
    expect(Client).toBeDefined();
  });
});

describe("Account", () => {
  test("messageBudget", () => {
    expect(messageBudget).toBeDefined();
  });
  test("metadata", () => {
    expect(metadata).toBeDefined();
  });
  test("payAsYouGo", () => {
    expect(payAsYouGo).toBeDefined();
  });
  test("usage", () => {
    expect(usage).toBeDefined();
  });
});

describe("Alternative", () => {
  test("sentiment", () => {
    expect(sentiment).toBeDefined();
  });
  test("ceoCompensation", () => {
    expect(ceoCompensation).toBeDefined();
  });
});

describe("Commodities", () => {
  test("wti", () => {
    expect(wti).toBeDefined();
  });

  test("brent", () => {
    expect(brent).toBeDefined();
  });

  test("natgas", () => {
    expect(natgas).toBeDefined();
  });

  test("heatoil", () => {
    expect(heatoil).toBeDefined();
  });

  test("jet", () => {
    expect(jet).toBeDefined();
  });

  test("diesel", () => {
    expect(diesel).toBeDefined();
  });

  test("gasreg", () => {
    expect(gasreg).toBeDefined();
  });

  test("gasmid", () => {
    expect(gasmid).toBeDefined();
  });

  test("gasprm", () => {
    expect(gasprm).toBeDefined();
  });

  test("propane", () => {
    expect(propane).toBeDefined();
  });
});

describe("Cryptocurrency", () => {
  test("cryptoBook", () => {
    expect(cryptoBook).toBeDefined();
  });
  test("cryptoPrice", () => {
    expect(cryptoPrice).toBeDefined();
  });
  test("cryptoQuote", () => {
    expect(cryptoQuote).toBeDefined();
  });
});

describe("Economic", () => {
  test("us30", () => {
    expect(us30).toBeDefined();
  });

  test("us15", () => {
    expect(us15).toBeDefined();
  });

  test("us5", () => {
    expect(us5).toBeDefined();
  });

  test("fedfunds", () => {
    expect(fedfunds).toBeDefined();
  });

  test("creditcard", () => {
    expect(creditcard).toBeDefined();
  });

  test("cdnj", () => {
    expect(cdnj).toBeDefined();
  });

  test("cdj", () => {
    expect(cdj).toBeDefined();
  });

  test("gdp", () => {
    expect(gdp).toBeDefined();
  });

  test("indpro", () => {
    expect(indpro).toBeDefined();
  });

  test("cpi", () => {
    expect(cpi).toBeDefined();
  });

  test("payroll", () => {
    expect(payroll).toBeDefined();
  });

  test("housing", () => {
    expect(housing).toBeDefined();
  });

  test("unemployment", () => {
    expect(unemployment).toBeDefined();
  });

  test("vehicles", () => {
    expect(vehicles).toBeDefined();
  });

  test("recessionProb", () => {
    expect(recessionProb).toBeDefined();
  });

  test("initialClaims", () => {
    expect(initialClaims).toBeDefined();
  });

  test("institutionalMoney", () => {
    expect(institutionalMoney).toBeDefined();
  });

  test("retailMoney", () => {
    expect(retailMoney).toBeDefined();
  });
});

describe("FX", () => {
  test("latestFX", () => {
    expect(latestFX).toBeDefined();
  });

  test("convertFX", () => {
    expect(convertFX).toBeDefined();
  });

  test("historicalFX", () => {
    expect(historicalFX).toBeDefined();
  });
});

describe("MarketData", () => {});

describe("Options", () => {
  test("optionsExpirations", () => {
    expect(optionExpirations).toBeDefined();
  });

  test("options", () => {
    expect(options).toBeDefined();
  });
});

describe("Points", () => {
  test("points", () => {
    expect(points).toBeDefined();
  });
});

describe("Rates", () => {
  test("thirtyYear", () => {
    expect(thirtyYear).toBeDefined();
  });

  test("twentyYear", () => {
    expect(twentyYear).toBeDefined();
  });

  test("tenYear", () => {
    expect(tenYear).toBeDefined();
  });

  test("fiveYear", () => {
    expect(fiveYear).toBeDefined();
  });

  test("twoYear", () => {
    expect(twoYear).toBeDefined();
  });

  test("oneYear", () => {
    expect(oneYear).toBeDefined();
  });

  test("sixMonth", () => {
    expect(sixMonth).toBeDefined();
  });

  test("threeMonth", () => {
    expect(threeMonth).toBeDefined();
  });

  test("oneMonth", () => {
    expect(oneMonth).toBeDefined();
  });
});

describe("RefData", () => {
  test("calendar", () => {
    expect(calendar).toBeDefined();
  });
  test("holidays", () => {
    expect(holidays).toBeDefined();
  });
  test("exchanges", () => {
    expect(exchanges).toBeDefined();
  });
  test("internationalExchanges", () => {
    expect(internationalExchanges).toBeDefined();
  });
  test("figi", () => {
    expect(figi).toBeDefined();
  });
  test("search", () => {
    expect(search).toBeDefined();
  });
  test("sectors", () => {
    expect(sectors).toBeDefined();
  });
  test("tags", () => {
    expect(tags).toBeDefined();
  });
  test("symbols", () => {
    expect(symbols).toBeDefined();
  });
  test("iexSymbols", () => {
    expect(iexSymbols).toBeDefined();
  });
  test("mutualFundSymbols", () => {
    expect(mutualFundSymbols).toBeDefined();
  });
  test("otcSymbols", () => {
    expect(otcSymbols).toBeDefined();
  });
  test("internationalSymbols", () => {
    expect(internationalSymbols).toBeDefined();
  });
  test("fxSymbols", () => {
    expect(fxSymbols).toBeDefined();
  });
  test("optionsSymbols", () => {
    expect(optionsSymbols).toBeDefined();
  });
  test("cryptoSymbols", () => {
    expect(cryptoSymbols).toBeDefined();
  });
  test("symbolsList", () => {
    expect(symbolsList).toBeDefined();
  });
  test("iexSymbolsList", () => {
    expect(iexSymbolsList).toBeDefined();
  });
  test("mutualFundSymbolsList", () => {
    expect(mutualFundSymbolsList).toBeDefined();
  });
  test("otcSymbolsList", () => {
    expect(otcSymbolsList).toBeDefined();
  });
  test("internationalSymbolsList", () => {
    expect(internationalSymbolsList).toBeDefined();
  });
  test("fxSymbolsList", () => {
    expect(fxSymbolsList).toBeDefined();
  });
  test("optionsSymbolsList", () => {
    expect(optionsSymbolsList).toBeDefined();
  });
  test("cryptoSymbolsList", () => {
    expect(cryptoSymbolsList).toBeDefined();
  });
  test("isinLookup", () => {
    expect(isinLookup).toBeDefined();
  });
});

describe("Stats", () => {
  test("systemStats", () => {
    expect(systemStats).toBeDefined();
  });
  test("recent", () => {
    expect(recent).toBeDefined();
  });
  test("records", () => {
    expect(records).toBeDefined();
  });
  test("summary", () => {
    expect(summary).toBeDefined();
  });
  test("daily", () => {
    expect(daily).toBeDefined();
  });
});
