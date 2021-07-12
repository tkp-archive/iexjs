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

// retry twice and set timeout to 30s for long calls
jest.retryTimes(2);
jest.setTimeout(50000);

afterEach(async () => {
  await new Promise((r) => setTimeout(r, 500));
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
