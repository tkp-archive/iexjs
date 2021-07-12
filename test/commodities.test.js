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

describe("Client - Commodities", () => {
  test("wti", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.wti();
    expect(Array.isArray(res)).toBe(true);
  });

  test("brent", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.brent();
    expect(Array.isArray(res)).toBe(true);
  });

  test("natgas", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.natgas();
    expect(Array.isArray(res)).toBe(true);
  });

  test("heatoil", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.heatoil();
    expect(Array.isArray(res)).toBe(true);
  });

  test("jet", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.jet();
    expect(Array.isArray(res)).toBe(true);
  });

  test("diesel", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.diesel();
    expect(Array.isArray(res)).toBe(true);
  });

  test("gasreg", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gasreg();
    expect(Array.isArray(res)).toBe(true);
  });

  test("gasmid", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gasmid();
    expect(Array.isArray(res)).toBe(true);
  });

  test("gasprm", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gasprm();
    expect(Array.isArray(res)).toBe(true);
  });

  test("propane", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.propane();
    expect(Array.isArray(res)).toBe(true);
  });
});
