/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-undef */

const { Client } = require("../src/js");

const SYMBOL = "BAC";

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

describe("Client - MarketData", () => {});

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
    expect(typeof res).toBe("object");
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
