const { Client } = require("../src/js");

const SYMBOL = "BAC";


describe("Client", () => {
  test("Exists", () => {
    expect(Client).toBeDefined();
  });
});

describe("Client - Account", () => {
  test("messageBudget", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.messageBudget).toBeDefined();
  });

  test("metadata", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.metadata).toBeDefined();
  });

  test("payAsYouGo", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.payAsYouGo).toBeDefined();
  });

  test("usage", async () => {
    const client = new Client({version: "sandbox"});

    // can't test without secret token
    expect(client.usage).toBeDefined();
  });
});

describe("Client - Alternative", () => {
  test("sentiment", async () => {
    const client = new Client({version: "sandbox"});

    // 451
    // const res = await client.sentiment(SYMBOL);
    // expect(typeof res).toBe("object");
    // expect(res.symbol).toBe(SYMBOL);
  });

  test("ceoCompensation", async () => {
    const client = new Client({version: "sandbox"});

    const res = await client.ceoCompensation(SYMBOL);
    console.log(res);
    expect(typeof res).toBe("object");
    expect(res.symbol).toBe(SYMBOL);
  });
});