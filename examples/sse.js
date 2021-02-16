const { Client } = require("iexjs");

// set IEX_TOKEN environment variable or pass in here
const client = new Client({ version: "sandbox" });

client.cryptoQuotesSSE("BTCUSD", (e) => {
  console.log(e);
});
