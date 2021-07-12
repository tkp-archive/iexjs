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
    let res = await client.optionsSymbols();
    expect(typeof res).toBe("object");
    res = await client.optionsSymbols("SPY");
    expect(Array.isArray(res)).toBe(true);
  });

  test("futuresSymbols", async () => {
    const client = new Client({ version: "sandbox" });
    let res = await client.futuresSymbols();
    expect(Array.isArray(res)).toBe(true);
    res = await client.futuresSymbols("ES");
    expect(Array.isArray(res)).toBe(true);
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
    let res = await client.optionsSymbolsList();
    expect(Array.isArray(res)).toBe(true);
    res = await client.optionsSymbolsList("SPY");
    expect(Array.isArray(res)).toBe(true);
  });

  test("futuresSymbolsList", async () => {
    const client = new Client({ version: "sandbox" });
    let res = await client.futuresSymbolsList();
    expect(Array.isArray(res)).toBe(true);
    res = await client.futuresSymbolsList("ES");
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

  test("ricLookup", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.ricLookup();
    expect(Array.isArray(res)).toBe(true);
  });
});
