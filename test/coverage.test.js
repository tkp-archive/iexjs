/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const {
    Client,
    // account
    messageBudget,
    metadata,
    payAsYouGo,
    usage,
    // alternative
    sentiment,
    ceoCompensation,
    // commodities
    // cryptocurrency
    cryptoBook,
    cryptoPrice,
    cryptoQuote,
    // economic
    // fx
    latestFX,
    convertFX,
    historicalFX,
    // marketdata
    // options
    optionExpirations,
    options,
    // points
    points,
    // premium
    // rates
    // refdata
    // rules
    // stats
    // stocks
} = require("../src/js");

describe("Client", () => {
  test("Client", () => {
    expect(Client).toBeDefined();
  });
});

describe("Account", () => {
    test("messageBudget", () => {
    expect(messageBudget).toBeDefined();
  });
  test("metadata", () => {
    expect(metadata).toBeDefined();
  });
  test("payAsYouGo", () => {
    expect(payAsYouGo).toBeDefined();
  });
  test("usage", () => {
    expect(usage).toBeDefined();
  });
});

describe("Alternative", () => {
  test("sentiment", () => {
    expect(sentiment).toBeDefined();
  });
  test("ceoCompensation", () => {
    expect(ceoCompensation).toBeDefined();
  });
});

describe("Commodities", () => { });

describe("Cryptocurrency", () => {
  test("cryptoBook", () => {
    expect(cryptoBook).toBeDefined();
  });
  test("cryptoPrice", () => {
    expect(cryptoPrice).toBeDefined();
  });
  test("cryptoQuote", () => {
    expect(cryptoQuote).toBeDefined();
  });
});

describe("Economic", () => { });

describe("FX", () => {
  test("latestFX", () => {
    expect(latestFX).toBeDefined();
  });

  test("convertFX", () => {
    expect(convertFX).toBeDefined();
  });

  test("historicalFX", () => {
    expect(historicalFX).toBeDefined();
  });
});

describe("MarketData", () => { });

describe("Options", () => {
  test("optionsExpirations", () => {
    expect(optionExpirations).toBeDefined();
  });

  test("options", () => {
    expect(options).toBeDefined();
  });
});

describe("Points", () => {
  test("points", () => {
    expect(points).toBeDefined();
  });
});
