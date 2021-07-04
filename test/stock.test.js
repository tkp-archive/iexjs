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
    const res = await client.balanceSheet({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("cashFlow", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cashFlow({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("dividendsBasic", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.dividendsBasic({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  // test("earnings", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.earnings(SYMBOL);
  //   expect(res).toBeDefined();
  // });

  test("financials", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.financials({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("fundamentals", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fundamentals({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("incomeStatement", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.incomeStatement({ symbol: SYMBOL });
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
    const res = await client.news({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("news - language", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.news({ symbol: SYMBOL, language: "en" });
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

  test("tenQ", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tenQ({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("tenK", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tenK({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("twentyF", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.twentyF({ symbol: "BABA" });
    expect(res).toBeDefined();
  });

  test("fortyF", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fortyF({ symbol: "SHOP" });
    expect(res).toBeDefined();
  });
});
