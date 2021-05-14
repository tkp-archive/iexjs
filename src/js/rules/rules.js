/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-param-reassign */

import {
  IEXJSException,
  _delete,
  _get,
  _post,
  _raiseIfNotStr,
} from "../common";
import { Client } from "../client";

/**
 * Pull the latest schema for data points, notification types, and operators used to construct rules.
 * https://iexcloud.io/docs/api/#rules-schema
 * @param {string} lookup_ If a schema object has “isLookup”: true, pass the value key to /stable/rules/lookup/{value}. This returns all valid values for the rightValue of a condition.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const lookup = (lookup_, { token, version, format = "json" } = {}) => {
  _raiseIfNotStr(lookup_);
  if (lookup_) {
    return _get({ url: `rules/lookup/${lookup_}`, token, version, format });
  }
  return _get({ url: "rules/schema", token, version, format });
};

Client.prototype.lookup = function (lookup_, { format }) {
  return lookup(lookup_, {
    token: this._token,
    version: this._version,
    format,
  });
};

/**
 * Pull the latest schema for data points, notification types, and operators used to construct rules.
 * https://iexcloud.io/docs/api/#rules-schema
 * @param {string} lookup If a schema object has “isLookup”: true, pass the value key to /stable/rules/lookup/{value}. This returns all valid values for the rightValue of a condition.
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const schema = ({ token, version, format = "json" } = {}) =>
  _get({ url: "rules/schema", token, version, format });

Client.prototype.schema = function ({ format } = {}) {
  return schema({ token: this._token, version: this._version, format });
};

/**
 * This endpoint is used to both create and edit rules. Note that rules run be default after being created.
 * https://iexcloud.io/docs/api/#rules-schema
 * @param {object} rule rule object to create
 * @param {string} ruleName name for rule
 * @param {string} ruleSet Valid US symbol or the string ANYEVENT. If the string ANYEVENT is passed, the rule will be triggered for any symbol in the system. The cool down period for alerts (frequency) is applied on a per symbol basis.
 * @param {string} type Specify either any, where if any condition is true you get an alert, or all, where all conditions must be true to trigger an alert. any is the default value
 * @param {string} existingId The id of an existing rule only if you are editing the existing rule
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const create = (
  rule,
  ruleName,
  ruleSet,
  type,
  existingId,
  { token, version, format = "json" } = {},
) => {
  type = type || "any";
  if (type !== "any" && type !== "all") {
    throw new IEXJSException("Type must be in (any, all)");
  }

  rule.token = token;
  rule.ruleSet = ruleSet;
  rule.type = type;
  rule.ruleName = ruleName;

  // Conditions, outputs, and additionalKeys handled by rule object
  if (rule.conditions === undefined) {
    throw new IEXJSException("rule is missing `conditions` key!");
  }

  if (rule.outputs === undefined) {
    throw new IEXJSException("rule is missing `outputs` key!");
  }

  if (existingId) {
    rule.id = existingId;
  }

  return _post({
    url: "rules/create",
    json: rule,
    token,
    version,
    token_in_params: false,
    format,
  });
};

Client.prototype.create = function (
  rule,
  ruleName,
  ruleSet,
  type,
  existingId,
  { format },
) {
  return create(rule, ruleName, ruleSet, type, existingId, {
    token: this._token,
    version: this._version,
    format,
  });
};

/**
 * You can control the output of rules by pausing and resume per rule id.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const pause = (ruleId, { token, version, format = "json" } = {}) =>
  _post({
    url: "rules/pause",
    json: { ruleId, token },
    token,
    version,
    token_in_params: false,
    format,
  });

Client.prototype.pause = function (ruleId, { format } = {}) {
  return pause(ruleId, { token: this._token, version: this._version, format });
};
/**
 * You can control the output of rules by pausing and resume per rule id.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const resume = (ruleId, { token, version, format = "json" } = {}) =>
  _post({
    url: "rules/resume",
    json: { ruleId, token },
    token,
    version,
    token_in_params: false,
    format,
  });

Client.prototype.resume = function (ruleId, { format } = {}) {
  return resume(ruleId, { token: this._token, version: this._version, format });
};

/**
 * You can delete a rule by using an __HTTP DELETE__ request. This will stop rule executions and delete the rule from your dashboard. If you only want to temporarily stop a rule, use the pause/resume functionality instead.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const delete_ = (ruleId, { token, version, format = "json" } = {}) =>
  _delete({
    url: `rules/${ruleId}`,
    token,
    version,
    format,
  });
Client.prototype.delete = function (ruleId, { format } = {}) {
  return delete_(ruleId, {
    token: this._token,
    version: this._version,
    format,
  });
};
/**
 * Rule information such as the current rule status and execution statistics.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const rule = (ruleId, { token, version, format = "json" } = {}) =>
  _get({
    url: `rules/info/${ruleId}`,
    token,
    version,
    format,
  });
Client.prototype.rule = function (ruleId, { format } = {}) {
  return rule(ruleId, { token: this._token, version: this._version, format });
};
/**
 * List all rules that are currently on your account. Each rule object returned will include the current rule status and execution statistics."""
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const rules = ({ token, version, format = "json" } = {}) =>
  _get({
    url: "rules",
    token,
    version,
    format,
  });
Client.prototype.rules = function ({ format } = {}) {
  return rules({ token: this._token, version: this._version, format });
};
/**
 * If you choose `logs` as your rule output method, IEX Cloud will save the output objects on our server. You can use this method to retrieve those data objects.
 * @param {string} ruleId The id of an existing rule to puase
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} format output format
 */
export const output = (ruleId, { token, version, format = "json" } = {}) =>
  _get({
    url: `rules/output/${ruleId}`,
    token,
    version,
    format,
  });

Client.prototype.output = function (ruleId, { format } = {}) {
  return output(ruleId, { token: this._token, version: this._version, format });
};
