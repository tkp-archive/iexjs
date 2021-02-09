/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const { Client } = require("../src/js");

const SYMBOL = "BAC";

// set timeout to 30s for long calls
jest.setTimeout(30000);


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
    const client = new Client({ version: "sandbox" });

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

describe("Client - Commodities", () => {});

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

describe("Client - Economic", () => {});

describe("Client - FX", () => {
  test("latestFX", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.latestFX("EURUSD");
    console.log(res);
  });
  test("convertFX", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.convertFX("EURUSD", 5);
    console.log(res);
  });
  test("historicalFX", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.historicalFX("EURUSD", "20210201");
    console.log(res);
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
    console.log(res);
  });
});

describe("Client- RefData", () => {
  test("calendar", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.calendar();
    console.log(res);
  });

  test("holidays", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.holidays();
    console.log(res);
  });

  test("exchanges", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.exchanges();
    console.log(res);
  });

  test("internationalExchanges", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.internationalExchanges();
    console.log(res);
  });

  test("figi", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.figi(SYMBOL);
    console.log(res);
  });

  test("search", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.search();
    console.log(res);
  });

  test("sectors", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.sectors();
    console.log(res);
  });

  test("tags", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tags();
    console.log(res);
  });

  test("symbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.symbols();
    console.log(res);
  });

  test("iexSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSymbols();
    console.log(res);
  });

  test("mutualFundSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.mutualFundSymbols();
    console.log(res);
  });

  test("otcSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.otcSymbols();
    console.log(res);
  });

  test("internationalSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.internationalSymbols();
    console.log(res);
  });

  test("fxSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fxSymbols();
    console.log(res);
  });

  test("optionsSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.optionsSymbols();
    console.log(res);
  });

  test("cryptoSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoSymbols();
    console.log(res);
  });

  test("symbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.symbolsList();
    console.log(res);
  });

  test("iexSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.iexSymbolsList();
    console.log(res);
  });

  test("mutualFundSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.mutualFundSymbolsList();
    console.log(res);
  });

  test("otcSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.otcSymbolsList();
    console.log(res);
  });

  test("internationalSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.internationalSymbolsList();
    console.log(res);
  });

  test("fxSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fxSymbolsList();
    console.log(res);
  });

  test("optionsSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.optionsSymbolsList();
    console.log(res);
  });

  test("cryptoSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cryptoSymbolsList();
    console.log(res);
  });

  test("isinLookup", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.isinLookup();
    console.log(res);
  });
});
