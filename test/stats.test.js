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

describe("Stats", () => {
  test("systemStats", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.systemStats();
    expect(res).toBeDefined();
  });
  test("recent", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.recent();
    expect(res).toBeDefined();
  });
  test("records", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.records();
    expect(res).toBeDefined();
  });
  test("summary", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.summary();
    expect(res).toBeDefined();
  });
  test("daily", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.daily();
    expect(res).toBeDefined();
  });
});
