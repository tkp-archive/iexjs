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

describe("Timeseries", () => {
  test("timeSeriesInventory", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.timeSeriesInventory(SYMBOL);
    expect(res).toBeDefined();
  });

  test("timeSeries", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.timeSeries(SYMBOL);
    expect(res).toBeDefined();
  });
});
