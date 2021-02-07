/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { IEXJSException } from "./common";

export class Client {
  constructor(api_token, version = "v1") {
    // TODO get from env in node
    // this._token = api_token || process.env.IEX_TOKEN;
    this._token = api_token;

    if (!this._token) {
      throw IEXJSException(
        "API Token missing or not in environment (IEX_TOKEN)",
      );
    }

    if (["beta", "stable", "v1", "sandbox"].indexOf(version) < 0) {
      throw IEXJSException("Unrecognized api version: {}".format(version));
    }

    if (this._token.startswith("T") && version !== "sandbox") {
      throw IEXJSException(
        "Using test key but attempting to connect to non-sandbox environment",
      );
    }

    this._version = version;
  }
}
