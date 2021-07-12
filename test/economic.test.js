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
  test("us30", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.us30();
    expect(typeof res).toBe("number");
  });

  test("us15", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.us15();
    expect(typeof res).toBe("number");
  });

  test("us5", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.us5();
    expect(typeof res).toBe("number");
  });

  test("fedfunds", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.fedfunds();
    expect(typeof res).toBe("number");
  });

  test("creditcard", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.creditcard();
    expect(typeof res).toBe("number");
  });

  test("cdnj", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cdnj();
    expect(typeof res).toBe("number");
  });

  test("cdj", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cdj();
    expect(typeof res).toBe("number");
  });

  test("gdp", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.gdp();
    expect(typeof res).toBe("number");
  });

  test("indpro", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.indpro();
    expect(typeof res).toBe("number");
  });

  test("cpi", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.cpi();
    expect(typeof res).toBe("number");
  });

  test("payroll", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.payroll();
    expect(typeof res).toBe("number");
  });

  test("housing", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.housing();
    expect(typeof res).toBe("number");
  });

  test("unemployment", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.unemployment();
    expect(typeof res).toBe("number");
  });

  test("vehicles", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.vehicles();
    expect(typeof res).toBe("number");
  });

  test("recessionProb", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.recessionProb();
    expect(typeof res).toBe("number");
  });

  test("initialClaims", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.initialClaims();
    expect(typeof res).toBe("number");
  });

  test("institutionalMoney", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.institutionalMoney();
    expect(typeof res).toBe("number");
  });

  test("retailMoney", async () => {
    const client = new Client({ version: "sandbox" });
    const res = await client.retailMoney();
    expect(typeof res).toBe("number");
  });
});
