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
jest.retryTimes(2);
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

  test("splitsBasic", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.splitsBasic({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("bonusIssue", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.bonusIssue({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("distribution", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.distribution({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("dividends", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.dividends({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("dividendsForecast", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.dividendsForecast({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("returnOfCapital", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.returnOfCapital({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("rightsIssue", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.rightsIssue({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("rightToPurchase", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.rightToPurchase({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("securityReclassification", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.securityReclassification({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("securitySwap", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.securitySwap({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("spinoff", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.spinoff({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("splits", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.splits({ symbol: SYMBOL });
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

  test("fundamentalValuations", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fundamentalValuations({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("incomeStatement", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.incomeStatement({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("collections", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.collections({
      tag: "sector",
      collectionName: "Technology",
    });
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
    let res = await client.upcomingEvents();
    expect(res).toBeDefined();
    res = await client.upcomingEvents({ symbol: SYMBOL });
    expect(res).toBeDefined();
    res = await client.upcomingEvents("AAPL,BAC");
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
    const res = await client.book({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("delayedQuote", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.delayedQuote({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("largestTrades", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.largestTrades({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("ohlc", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.ohlc({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("yesterday", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.yesterday({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("previous", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.previous({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("price", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.price({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("quote", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.quote({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  // test("spread", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.spread({symbol: SYMBOL});
  //   expect(res).toBeDefined();
  // });

  test("volumeByVenue", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.volumeByVenue({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("chart", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.chart({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("intraday", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.intraday({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("company", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.company({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("insiderRoster", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.insiderRoster({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("insiderSummary", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.insiderSummary({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("insiderTransactions", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.insiderTransactions({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("logo", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.logo({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("peers", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.peers({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("stats", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.stats({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  // test("analystRecommendations", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.analystRecommendations({symbol: SYMBOL});
  //   expect(res).toBeDefined();
  // });

  // test("estimates", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.estimates({symbol: SYMBOL});
  //   expect(res).toBeDefined();
  // });

  test("fundOwnership", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fundOwnership({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("institutionalOwnership", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.institutionalOwnership({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  test("statsBasic", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.statsBasic({ symbol: SYMBOL });
    expect(res).toBeDefined();
  });

  // test("priceTarget", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.priceTarget({symbol: SYMBOL});
  //   expect(res).toBeDefined();
  // });

  test("technicals", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.technicals({ symbol: SYMBOL, indicator: "sma" });
    expect(res).toBeDefined();
  });

  // test("shortInterest", async () => {
  //   const client = new Client({ version: "sandbox" });
  //   const res = await client.shortInterest({symbol: SYMBOL});
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

  test("ceoCompensation", async () => {
    const client = new Client({ version: "sandbox" });

    const res = await client.ceoCompensation({ symbol: SYMBOL });
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe(SYMBOL);
  });
});
