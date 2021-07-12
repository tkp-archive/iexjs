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

describe("Client - Options", () => {
  test("optionsExpirations", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.optionExpirations(SYMBOL);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("stockOptions", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.stockOptions(SYMBOL, "20210416");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("stockOptions", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.stockOptions(SYMBOL, "20210416", "call");
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("options", async () => {
    const client = new Client({ version: "sandbox" });
    const [{ symbol }] = await client.optionsSymbols("SPY");
    const res = await client.options(symbol);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });
});
