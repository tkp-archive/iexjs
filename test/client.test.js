/* eslint-disable no-unused-vars */
/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-undef */

const fetch = require("cross-fetch");
const { Client } = require("../src/js");

const SYMBOL = "BAC";

beforeAll(() => {
  global.fetch = fetch;
});

// set timeout to 30s for long calls
jest.setTimeout(50000);

afterEach(async () => {
  await new Promise((r) => setTimeout(r, 500));
});

describe("Client", () => {
  test("Exists", () => {
    expect(Client).toBeDefined();
  });
});

describe("Client - Account", () => {
  test("messageBudget", async () => {
    const client = new Client({ version: "sandbox" });

    // can't test without secret token
    expect(client.messageBudget).toBeDefined();
  });

  test("metadata", async () => {
    const client = new Client({ version: "sandbox" });

    // can't test without secret token
    expect(client.metadata).toBeDefined();
  });

  test("payAsYouGo", async () => {
    const client = new Client({ version: "sandbox" });

    // can't test without secret token
    expect(client.payAsYouGo).toBeDefined();
  });

  test("usage", async () => {
    const client = new Client({ version: "sandbox" });

    // can't test without secret token
    expect(client.usage).toBeDefined();
  });
});

describe("Client - Alternative", () => {
  test("sentiment", async () => {
    // const client = new Client({ version: "sandbox" });
    // 451
    // const res = await client.sentiment(SYMBOL);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("ceoCompensation", async () => {
    const client = new Client({ version: "sandbox" });

    const res = await client.ceoCompensation(SYMBOL);
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe(SYMBOL);
  });
});

describe("Client - Commodities", () => {
  test("cryptoPrice", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoPrice("BTCUSD");
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe("BTCUSD");
  });

  test("wti", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.wti();
    expect(typeof res).toBe("number");
  });

  test("brent", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.brent();
    expect(typeof res).toBe("number");
  });

  test("natgas", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.natgas();
    expect(typeof res).toBe("number");
  });

  test("heatoil", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.heatoil();
    expect(typeof res).toBe("number");
  });

  test("jet", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.jet();
    expect(typeof res).toBe("number");
  });

  test("diesel", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.diesel();
    expect(typeof res).toBe("number");
  });

  test("gasreg", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gasreg();
    expect(typeof res).toBe("number");
  });

  test("gasmid", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gasmid();
    expect(typeof res).toBe("number");
  });

  test("gasprm", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gasprm();
    expect(typeof res).toBe("number");
  });

  test("propane", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.propane();
    expect(typeof res).toBe("number");
  });
});

describe("Client - Cryptocurrency", () => {
  test("cryptoBook", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoBook("BTCUSD");
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe("BTCUSD");
  });

  test("cryptoPrice", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoPrice("BTCUSD");
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe("BTCUSD");
  });

  test("cryptoQuote", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoQuote("BTCUSD");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });
});

describe("Client - Economic", () => {
  test("us30", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.us30();
    expect(typeof res).toBe("number");
  });

  test("us15", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.us15();
    expect(typeof res).toBe("number");
  });

  test("us5", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.us5();
    expect(typeof res).toBe("number");
  });

  test("fedfunds", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fedfunds();
    expect(typeof res).toBe("number");
  });

  test("creditcard", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.creditcard();
    expect(typeof res).toBe("number");
  });

  test("cdnj", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cdnj();
    expect(typeof res).toBe("number");
  });

  test("cdj", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cdj();
    expect(typeof res).toBe("number");
  });

  test("gdp", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gdp();
    expect(typeof res).toBe("number");
  });

  test("indpro", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.indpro();
    expect(typeof res).toBe("number");
  });

  test("cpi", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cpi();
    expect(typeof res).toBe("number");
  });

  test("payroll", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.payroll();
    expect(typeof res).toBe("number");
  });

  test("housing", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.housing();
    expect(typeof res).toBe("number");
  });

  test("unemployment", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.unemployment();
    expect(typeof res).toBe("number");
  });

  test("vehicles", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.vehicles();
    expect(typeof res).toBe("number");
  });

  test("recessionProb", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.recessionProb();
    expect(typeof res).toBe("number");
  });

  test("initialClaims", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.initialClaims();
    expect(typeof res).toBe("number");
  });

  test("institutionalMoney", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.institutionalMoney();
    expect(typeof res).toBe("number");
  });

  test("retailMoney", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.retailMoney();
    expect(typeof res).toBe("number");
  });
});

describe("Client - FX", () => {
  test("latestFX", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.latestFX("EURUSD");
  });
  test("convertFX", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.convertFX("EURUSD", 5);
  });
  test("historicalFX", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.historicalFX("EURUSD", "20210201");
  });
});

describe("Client - IEX", () => {
  test("tops", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexTops(SYMBOL);
  });

  // test("last", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.iexLast(SYMBOL);
  // });

  test("deep", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexDeep(SYMBOL);
  });

  test("auction", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexAuction(SYMBOL);
  });

  test("iexBook", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexBook(SYMBOL);
  });

  test("opHaltStatus", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexOpHaltStatus(SYMBOL);
  });

  test("officialPrice", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexOfficialPrice(SYMBOL);
  });

  test("securityEvent", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSecurityEvent(SYMBOL);
  });

  test("ssrStatus", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSsrStatus(SYMBOL);
  });

  test("systemEvent", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSystemEvent(SYMBOL);
  });

  test("trades", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexTrades(SYMBOL);
  });

  test("tradeBreak", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexTradeBreak(SYMBOL);
  });

  test("tradingStatus", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexTradingStatus(SYMBOL);
  });

  // test("hist", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.iexHist();
  // });
});

describe("Client - Options", () => {
  test("optionsExpirations", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.optionExpirations(SYMBOL);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("options", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.options(SYMBOL, "20210416");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("options", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.options(SYMBOL, "20210416", "call");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });
});

describe("Client - Points", () => {
  test("points", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.points(SYMBOL);
    // console.log(res);
    expect(Array.isArray(res)).toBe(true);
  });

  test("points", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.points(SYMBOL, "NEXTDIVIDENDDATE");
  });
});

describe("Client - Rates", () => {
  test("thirtyYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.thirtyYear();
    expect(typeof res).toBe("number");
  });

  test("twentyYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.twentyYear();
    expect(typeof res).toBe("number");
  });

  test("tenYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tenYear();
    expect(typeof res).toBe("number");
  });

  test("fiveYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fiveYear();
    expect(typeof res).toBe("number");
  });

  test("twoYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.twoYear();
    expect(typeof res).toBe("number");
  });

  test("oneYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.oneYear();
    expect(typeof res).toBe("number");
  });

  test("sixMonth", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.sixMonth();
    expect(typeof res).toBe("number");
  });

  test("threeMonth", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.threeMonth();
    expect(typeof res).toBe("number");
  });

  test("oneMonth", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.oneMonth();
    expect(typeof res).toBe("number");
  });
});

describe("Client- RefData", () => {
  test("calendar", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.calendar();
    expect(Array.isArray(res)).toBe(true);
  });

  test("holidays", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.holidays();
    expect(Array.isArray(res)).toBe(true);
  });

  test("exchanges", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.exchanges();
    expect(Array.isArray(res)).toBe(true);
  });

  test("internationalExchanges", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.internationalExchanges();
    expect(Array.isArray(res)).toBe(true);
  });

  test("figi", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.figi(SYMBOL);
    expect(Array.isArray(res)).toBe(true);
  });

  test("search", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.search();
    expect(Array.isArray(res)).toBe(true);
  });

  test("sectors", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.sectors();
    expect(Array.isArray(res)).toBe(true);
  });

  test("tags", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tags();
    expect(Array.isArray(res)).toBe(true);
  });

  test("symbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.symbols();
    expect(Array.isArray(res)).toBe(true);
  });

  test("iexSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSymbols();
    expect(Array.isArray(res)).toBe(true);
  });

  test("mutualFundSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.mutualFundSymbols();
    expect(Array.isArray(res)).toBe(true);
  });

  test("otcSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.otcSymbols();
    expect(Array.isArray(res)).toBe(true);
  });

  test("internationalSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.internationalSymbols();
    expect(Array.isArray(res)).toBe(true);
  });

  test("fxSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fxSymbols();
    expect(typeof res).toBe("object");
  });

  test("optionsSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.optionsSymbols();
    expect(typeof res).toBe("object");
  });

  test("cryptoSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoSymbols();
    expect(Array.isArray(res)).toBe(true);
  });

  test("symbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.symbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("iexSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSymbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("mutualFundSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.mutualFundSymbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("otcSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.otcSymbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("internationalSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.internationalSymbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("fxSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fxSymbolsList();
    expect(typeof res).toBe("object");
  });

  test("optionsSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.optionsSymbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("cryptoSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoSymbolsList();
    expect(Array.isArray(res)).toBe(true);
  });

  test("isinLookup", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.isinLookup();
    expect(Array.isArray(res)).toBe(true);
  });
});

describe("Stats", () => {
  test("systemStats", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.systemStats();
    expect(res).toBeDefined();
  });
  test("recent", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.recent();
    expect(res).toBeDefined();
  });
  test("records", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.records();
    expect(res).toBeDefined();
  });
  test("summary", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.summary();
    expect(res).toBeDefined();
  });
  test("daily", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.daily();
    expect(res).toBeDefined();
  });
});

describe("Stock", () => {
  // test("batch", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.batch();
  //   expect(res).toBeDefined();
  // });

  test("stockSplits", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.stockSplits(SYMBOL);
    expect(res).toBeDefined();
  });

  test("bonusIssue", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.bonusIssue(SYMBOL);
    expect(res).toBeDefined();
  });

  test("distribution", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.distribution(SYMBOL);
    expect(res).toBeDefined();
  });

  test("dividends", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.dividends(SYMBOL);
    expect(res).toBeDefined();
  });

  test("returnOfCapital", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.returnOfCapital(SYMBOL);
    expect(res).toBeDefined();
  });

  test("rightsIssue", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.rightsIssue(SYMBOL);
    expect(res).toBeDefined();
  });

  test("rightToPurchase", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.rightToPurchase(SYMBOL);
    expect(res).toBeDefined();
  });

  test("securityReclassification", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.securityReclassification(SYMBOL);
    expect(res).toBeDefined();
  });

  test("securitySwap", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.securitySwap(SYMBOL);
    expect(res).toBeDefined();
  });

  test("spinoff", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.spinoff(SYMBOL);
    expect(res).toBeDefined();
  });

  test("splits", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.splits(SYMBOL);
    expect(res).toBeDefined();
  });

  test("balanceSheet", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.balanceSheet(SYMBOL);
    expect(res).toBeDefined();
  });

  test("cashFlow", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cashFlow(SYMBOL);
    expect(res).toBeDefined();
  });

  test("dividendsBasic", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.dividendsBasic(SYMBOL);
    expect(res).toBeDefined();
  });

  // test("earnings", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.earnings(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("financials", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.financials(SYMBOL);
    expect(res).toBeDefined();
  });

  test("fundamentals", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fundamentals(SYMBOL);
    expect(res).toBeDefined();
  });

  test("incomeStatement", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.incomeStatement(SYMBOL);
    expect(res).toBeDefined();
  });

  test("collections", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.collections("sector", "Technology");
    expect(res).toBeDefined();
  });

  // test("earningsToday", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.earningsToday(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("ipoToday", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.ipoToday();
    expect(res).toBeDefined();
  });

  // test("ipoUpcoming", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.ipoUpcoming();
  //   expect(res).toBeDefined();
  // });

  test("list", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.list();
    expect(res).toBeDefined();
  });

  test("marketVolume", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.marketVolume();
    expect(res).toBeDefined();
  });

  test("marketOhlc", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.marketOhlc();
    expect(res).toBeDefined();
  });

  test("marketYesterday", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.marketYesterday();
    expect(res).toBeDefined();
  });

  test("sectorPerformance", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.sectorPerformance();
    expect(res).toBeDefined();
  });

  // test("marketShortInterest", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.marketShortInterest();
  //   expect(res).toBeDefined();
  // });

  test("upcomingEvents", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.upcomingEvents();
    expect(res).toBeDefined();
  });

  // test("upcomingEarnings", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.upcomingEarnings();
  //   expect(res).toBeDefined();
  // });

  test("upcomingDividends", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.upcomingDividends();
    expect(res).toBeDefined();
  });

  test("upcomingSplits", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.upcomingSplits();
    expect(res).toBeDefined();
  });

  // test("upcomingIPOs", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.upcomingIPOs();
  //   expect(res).toBeDefined();
  // });

  test("news", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.news(SYMBOL);
    expect(res).toBeDefined();
  });

  test("marketNews", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.marketNews();
    expect(res).toBeDefined();
  });

  test("book", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.book(SYMBOL);
    expect(res).toBeDefined();
  });

  test("delayedQuote", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.delayedQuote(SYMBOL);
    expect(res).toBeDefined();
  });

  test("largestTrades", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.largestTrades(SYMBOL);
    expect(res).toBeDefined();
  });

  test("ohlc", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.ohlc(SYMBOL);
    expect(res).toBeDefined();
  });

  test("yesterday", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.yesterday(SYMBOL);
    expect(res).toBeDefined();
  });

  test("previous", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.previous(SYMBOL);
    expect(res).toBeDefined();
  });

  test("price", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.price(SYMBOL);
    expect(res).toBeDefined();
  });

  test("quote", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.quote(SYMBOL);
    expect(res).toBeDefined();
  });

  // test("spread", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.spread(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("volumeByVenue", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.volumeByVenue(SYMBOL);
    expect(res).toBeDefined();
  });

  test("chart", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.chart(SYMBOL);
    expect(res).toBeDefined();
  });

  test("intraday", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.intraday(SYMBOL);
    expect(res).toBeDefined();
  });

  test("company", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.company(SYMBOL);
    expect(res).toBeDefined();
  });

  test("insiderRoster", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.insiderRoster(SYMBOL);
    expect(res).toBeDefined();
  });

  test("insiderSummary", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.insiderSummary(SYMBOL);
    expect(res).toBeDefined();
  });

  test("insiderTransactions", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.insiderTransactions(SYMBOL);
    expect(res).toBeDefined();
  });

  test("logo", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.logo(SYMBOL);
    expect(res).toBeDefined();
  });

  test("peers", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.peers(SYMBOL);
    expect(res).toBeDefined();
  });

  test("advancedStats", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.advancedStats(SYMBOL);
    expect(res).toBeDefined();
  });

  // test("analystRecommendations", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.analystRecommendations(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  // test("estimates", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.estimates(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("fundOwnership", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fundOwnership(SYMBOL);
    expect(res).toBeDefined();
  });

  test("institutionalOwnership", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.institutionalOwnership(SYMBOL);
    expect(res).toBeDefined();
  });

  test("keyStats", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.keyStats(SYMBOL);
    expect(res).toBeDefined();
  });

  // test("priceTarget", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.priceTarget(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("technicals", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.technicals(SYMBOL, "sma");
    expect(res).toBeDefined();
  });

  // test("threshold", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.threshold(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  // test("shortInterest", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.shortInterest(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("timeSeriesInventory", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.timeSeriesInventory(SYMBOL);
    expect(res).toBeDefined();
  });

  test("timeSeries", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.timeSeries(SYMBOL);
    expect(res).toBeDefined();
  });

  test("tenQ", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tenQ(SYMBOL);
    expect(res).toBeDefined();
  });

  test("tenK", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tenK(SYMBOL);
    expect(res).toBeDefined();
  });
});
