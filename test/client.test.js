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


describe("Client", () => {
  test("Exists", () => {
    expect(Client).toBeDefined();
  });
});

describe("Client - Account", () => {
  test("messageBudget", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.messageBudget).toBeDefined();
  });

  test("metadata", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.metadata).toBeDefined();
  });

  test("payAsYouGo", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.payAsYouGo).toBeDefined();
  });

  test("usage", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.usage).toBeDefined();
  });
});

describe("Client - Alternative", () => {
  test("sentiment", async () => {
    const client = new Client({version: "sandbox"});

    // 451
    // const res = await client.sentiment(SYMBOL);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("ceoCompensation", async () => {
    const client = new Client({version: "sandbox"});

    const res = await client.ceoCompensation(SYMBOL);
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe(SYMBOL);
  });
});

describe("Client - Commodities", () => { });

describe("Client - Cryptocurrency", () => {
  test("cryptoBook", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.cryptoBook("BTCUSD");
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe("BTCUSD");
  });

  test("cryptoPrice", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.cryptoPrice("BTCUSD");
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe("BTCUSD");
  });

  test("cryptoQuote", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.cryptoQuote("BTCUSD");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });
});

describe("Client - Economic", () => { });

describe("Client - FX", () => {
  test("latestFX", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.latestFX("EURUSD");
    console.log(res);
  });
  test("convertFX", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.convertFX("EURUSD", 5);
    console.log(res);
  });
  test("historicalFX", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.historicalFX("EURUSD", "20210201");
    console.log(res);
  });
});

describe("Client - MarketData", () => { });

describe("Client - Options", () => {
  test("optionsExpirations", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.optionExpirations(SYMBOL);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("options", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.options(SYMBOL, "20210416");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("options", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.options(SYMBOL, "20210416", "call");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });
});

describe("Client - Points", () => {
  test("points", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.points(SYMBOL);
    // console.log(res);
    expect(Array.isArray(res)).toBe(true);
  });

  test("points", async () => {
    const client = new Client({version: "sandbox"});
    const res = await client.points(SYMBOL, "NEXTDIVIDENDDATE");
    console.log(res);
  });
});
