/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-unused-vars */
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

describe("Client - metadata", () => {
  test("metadata", async () => {
    const client = new Client({ version: "sandbox" });
    let res;
    try {
      res = await client.queryMetadata("SPLITS");
    } catch {
      // try again
      res = await client.queryMetadata("SPLITS");
    }
    expect(Array.isArray(res)).toBe(true);
  });

  test("metadata - any", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.queryMetadata({ key: SYMBOL });
    expect(Array.isArray(res)).toBe(true);
  });
});
