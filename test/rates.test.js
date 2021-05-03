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

describe("Client - Rates", () => {
  test("thirtyYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.thirtyYear();
    expect(typeof res).toBe("number");
  });

  test("twentyYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.twentyYear();
    expect(typeof res).toBe("number");
  });

  test("tenYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.tenYear();
    expect(typeof res).toBe("number");
  });

  test("fiveYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fiveYear();
    expect(typeof res).toBe("number");
  });

  test("twoYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.twoYear();
    expect(typeof res).toBe("number");
  });

  test("oneYear", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.oneYear();
    expect(typeof res).toBe("number");
  });

  test("sixMonth", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.sixMonth();
    expect(typeof res).toBe("number");
  });

  test("threeMonth", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.threeMonth();
    expect(typeof res).toBe("number");
  });

  test("oneMonth", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.oneMonth();
    expect(typeof res).toBe("number");
  });
});
