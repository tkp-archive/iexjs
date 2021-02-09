/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import {
  _USAGE_TYPES,
  IEXJSException,
  _getJson,
  _postJson,
  _requireSecret,
} from "../common";
import { Client } from "../client";

/**
 * Used to set an upper limit, “message budget”, on pay as you go messages where
 * you want to make sure not to go above a certain amount. Set the total messages
 * you wish to consume for the month, and once that limit is reached, all API
 * calls will stop until the limit is removed or increased.
 *
 * https://iexcloud.io/docs/api/#message-budget
 *
 * @param {number} totalMessages The total messages your account is allowed to consume for the current month above your quota. For example: If your account is allowed 5 million messages, and you do not want to exceed 10 million for the month, then you will pass 10000000 as total messages.
 * @param {string} token Access token
 * @param {string} version API version
 */
export const messageBudget = (totalMessages, token, version) => {
  _requireSecret(token);
  return _postJson({
    url: `account/messagebudget?totalMessages=${totalMessages}`,
    token,
    version,
  });
};

Client.prototype.messageBudget = function (totalMessages) {
  return messageBudget(totalMessages, this._token, this._version);
};

/**
 * Used to retrieve account details such as current tier, payment status, message quote usage, etc.
 * https://iexcloud.io/docs/api/#metadata
 * @param {string} token Access token
 * @param {string} version API version
 */
export const metadata = (token, version) => {
  _requireSecret(token);
  return _getJson({
    url: "account/metadata",
    token,
    version,
  });
};

Client.prototype.metadata = function () {
  return metadata(this._token, this._version);
};

/**
 * Used to toggle Pay-as-you-go on your account.
 * https://iexcloud.io/docs/api/#pay-as-you-go
 * @param {boolean} allow
 * @param {string} token Access token
 * @param {string} version API version
 */
export const payAsYouGo = (allow = false, token = "", version = "") => {
  _requireSecret(token);
  if (!(typeof allow === "boolean")) {
    throw IEXJSException(
      `allow must be boolean, got ${typeof allow} (${allow})`,
    );
  }
  return _postJson({
    url: `account/messagebudget?allow=${allow}`,
    token,
    version,
  });
};

Client.prototype.payAsYouGo = function (allow) {
  return metadata(allow, this._token, this._version);
};

/**
 * Used to retrieve current month usage for your account.
 * https://iexcloud.io/docs/api/#usage
 * @param {string} type type to request
 * @param {string} token Access token
 * @param {string} version API version
 */
export const usage = (type, token = "", version = "") => {
  _requireSecret(token);
  if (type) {
    if (_USAGE_TYPES.indexOf(type) < 0) {
      throw IEXJSException(`Type must be defined or in ${_USAGE_TYPES}`);
    }
    return _getJson({
      url: `account/usage/${type}`,
      token,
      version,
    });
  }
  return _getJson({
    url: `account/usage`,
    token,
    version,
  });
};

Client.prototype.usage = function (type) {
  return usage(type, this._token, this._version);
};
