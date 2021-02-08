const {
    Client,
    // account
    messageBudget,
    metadata,
    payAsYouGo,
    usage,
    // alternative
    crypto,
    sentiment,
    ceoCompensation,
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
