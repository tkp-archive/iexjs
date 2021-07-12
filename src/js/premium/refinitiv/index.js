/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import {
  analystRecommendations,
  earnings,
  estimates,
  priceTarget,
} from "../../stocks";

export const analystRecommendationsRefinitiv = analystRecommendations;
export const earningsRefinitiv = earnings;
export const estimatesRefinitiv = estimates;
export const priceTargetRefinitiv = priceTarget;

Client.premium.prototype.analystRecommendationsRefinitiv =
  Client.premium.prototype.analystRecommendations;

Client.premium.prototype.earningsRefinitiv = Client.premium.prototype.earnings;

Client.premium.prototype.estimatesRefinitiv =
  Client.premium.prototype.estimates;

Client.premium.prototype.priceTargetRefinitiv =
  Client.premium.prototype.priceTarget;
