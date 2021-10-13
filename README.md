# <img src="https://raw.githubusercontent.com/iexcloud/iexjs/main/docs/img/icon.png" width="300">

JavaScript interface to [IEX Cloud](https://iexcloud.io/docs/api/)

[![Build Status](https://github.com/iexcloud/iexjs/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/iexcloud/iexjs/actions?query=workflow%3A%22Build+Status%22)
[![License](https://img.shields.io/github/license/iexcloud/iexjs.svg)](https://github.com/iexcloud/iexjs/)
[![npm](https://img.shields.io/npm/v/iexjs)](https://www.npmjs.com/package/iexjs)

## Referral

Please subscribe to IEX Cloud using [this referral code](https://iexcloud.io/s/6332a3c3 ).

## Install

Install from npm

`npm install --save iexjs`

`iexjs` can run in the browser via native `fetch` and `eventsource`, or from node via [cross-fetch](https://www.npmjs.com/package/cross-fetch) and [eventsource](https://github.com/EventSource/eventsource).

## Overview

`iexjs` supports the IEX Cloud api through 2 interfaces. The first is a simple function call, passing in the api version and token as arguments

```javascript
const {chart} = require("iexjs");
chart({symbol: "AAPL", range: "1m"}, {token, version}).then((res) => {
    console.log(res);
});
```

Since the token rarely changes, we have a `Client` object for convenience:

```javascript
const {Client} = require("iexjs");
const client = new Client({api_token: "YOUR_TOKEN_HERE", version: "v1"});
client.chart({symbol: "AAPL", range: "1m"}).then((res) => {
    console.log(res);
});
```

The client will automatically pick up the API key from the environment variable `IEX_TOKEN`, or it can be passed as an argument. To use the IEX Cloud test environment, simple set `version: 'sandbox'`.

### Full API
`iexjs` provides wrappers around both static and SSE streaming data. Implemented methods are provided in [CATALOG.md](CATALOG.md).

## License

This software is licensed under the Apache 2.0 license. See the
[LICENSE](LICENSE) and [AUTHORS](AUTHORS) files for details.
