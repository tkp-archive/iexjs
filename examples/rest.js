const { Client } = require("iexjs");

// set IEX_TOKEN environment variable or pass in here
const client = new Client({ version: "sandbox" });

client.quote("AAPL").then((e) => {
  console.log(e);
});
