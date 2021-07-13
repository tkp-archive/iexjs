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

describe("Client - Economic", () => {
  test("fedfunds", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fedfunds();
    expect(Array.isArray(res)).toBe(true);
  });

  test("gdp", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gdp();
    expect(Array.isArray(res)).toBe(true);
  });

  test("indpro", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.indpro();
    expect(Array.isArray(res)).toBe(true);
  });

  test("cpi", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cpi();
    expect(Array.isArray(res)).toBe(true);
  });

  test("payroll", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.payroll();
    expect(Array.isArray(res)).toBe(true);
  });

  test("housing", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.housing();
    expect(Array.isArray(res)).toBe(true);
  });

  test("unemployment", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.unemployment();
    expect(Array.isArray(res)).toBe(true);
  });

  test("vehicles", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.vehicles();
    expect(Array.isArray(res)).toBe(true);
  });

  test("recessionProb", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.recessionProb();
    expect(Array.isArray(res)).toBe(true);
  });

  test("initialClaims", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.initialClaims();
    expect(Array.isArray(res)).toBe(true);
  });

  test("institutionalMoney", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.institutionalMoney();
    expect(Array.isArray(res)).toBe(true);
  });

  test("retailMoney", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.retailMoney();
    expect(Array.isArray(res)).toBe(true);
  });
});
