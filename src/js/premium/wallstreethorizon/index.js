/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Client } from "../../client";
import { timeSeries } from "../../stocks";

/**
 * internal
 * @param {string} id
 * @param {string} symbol
 * @param  {object} timeseriesArgs
 * @returns
 */
const _base = (id, symbol, token, version, filter, format, ...timeseriesArgs) =>
  timeSeries(
    {
      id,
      key: symbol,
      ...timeseriesArgs,
    },
    token,
    version,
    filter,
    format,
  );

/**
 * This is a meeting where company executives provide information about the company’s performance and its future prospects.
 * https://iexcloud.io/docs/api/#analyst-days
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const analystDaysWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_ANALYST_DAY",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.analystDays = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return analystDaysWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is an end-point for getting information about a formal meeting of a company’s board of directors to establish corporate management related policies and to make decisions on major company issues.
 * https://iexcloud.io/docs/api/#analyst-days
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const boardOfDirectorsMeetingWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_BOARD_OF_DIRECTORS_MEETING",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.boardOfDirectorsMeeting = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return boardOfDirectorsMeetingWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a meeting or conference call in which company information is reviewed by one or more company executives.
 * https://iexcloud.io/docs/api/#business-updates
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const businessUpdatesWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_BUSINESS_UPDATE",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.businessUpdates = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return businessUpdatesWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * The repurchase of outstanding shares by a company to reduce the number of shares on the market.
 * https://iexcloud.io/docs/api/#buybacks
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const buybacksWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_BUYBACK",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.buybacks = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return buybacksWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a meeting where company executives provide information about the company’s performance and its future prospects.
 * https://iexcloud.io/docs/api/#capital-markets-day
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const capitalMarketsDayWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_CAPITAL_MARKETS_DAY",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.capitalMarketsDay = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return capitalMarketsDayWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a roadshow or bus tour event in which one or more company executives speaks to interested investors and analysts.
 * https://iexcloud.io/docs/api/#company-travel
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const companyTravelWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_COMPANY_TRAVEL",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.companyTravel = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return companyTravelWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is an estimated date, based on historical trends for this company in which a company must file the appropriate Form for the quarter/year or file for an extension.
 * https://iexcloud.io/docs/api/#filing-due-dates
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const filingDueDatesWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_FILING_DUE_DATE",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.filingDueDates = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return filingDueDatesWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a forecasted quarterly ending announcement date for a company. This may or may not correspond to a calendar quarter.
 * https://iexcloud.io/docs/api/#fiscal-quarter-end
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const fiscalQuarterEndWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_FISCAL_QUARTER_END_DATE",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.fiscalQuarterEnd = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return fiscalQuarterEndWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a meeting where ideas and views of a business nature can be exchanged.
 * https://iexcloud.io/docs/api/#forum
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const forumWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_FORUM",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.forum = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return forumWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a formal meeting in which representatives of many companies gather to discuss ideas or issues related to a particular topic or business, usually held for several days. This item indicates at least one representative from the company will be presenting at the conference on the specified date and time. Note: Conference details include full Conference dates.
 * https://iexcloud.io/docs/api/#general-conference
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const generalConferenceWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_GENERAL_CONFERENCE",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.generalConference = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return generalConferenceWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * The FDA uses 50 committees and panels to obtain independent expert advice on scientific, technical, and policy matters
 * https://iexcloud.io/docs/api/#fda-advisory-committee-meetings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const fdaAdvisoryCommitteeMeetingsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_STOCK_SPECIFIC_FDA_ADVISORY_COMMITTEE_MEETING",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.fdaAdvisoryCommitteeMeetings = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return fdaAdvisoryCommitteeMeetingsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This returns a list of market holidays.
 * https://iexcloud.io/docs/api/#holidays
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const holidaysWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_HOLIDAYS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.holidays = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return holidaysWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This shows additions and removals from various indexes for particular stocks.
 * https://iexcloud.io/docs/api/#index-changes
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const indexChangesWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_INDEX_CHANGE",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.indexChanges = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return indexChangesWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * TGet a list of upcoming IPOs.
 * hhttps://iexcloud.io/docs/api/#ipos
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const iposWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_INITIAL_PUBLIC_OFFERING",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.ipos = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return iposWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * These are legal actions where an individual represents a group in a court claim. The judgment from the suit is for all the members of the group or class.
 * https://iexcloud.io/docs/api/#legal-actions
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const legalActionsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_LEGAL_ACTIONS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.legalActions = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return legalActionsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * These are a type of corporate action in which two companies combine to form a single company, or one company is taken over by another.
 * https://iexcloud.io/docs/api/#mergers-acquisitions
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const mergersAndAcquisitionsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_MERGER_ACQUISITIONS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.mergersAndAcquisitions = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return mergersAndAcquisitionsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Represents movie and video releases. This is the date on which a movie distributor plans to release a movie to theaters
 * https://iexcloud.io/docs/api/#product-events
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const productEventsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_PRODUCT_EVENTS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.productEvents = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return productEventsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a day in which investors and analysts can meet with a company’s R&D representatives to learn more about new or improved products and services.
 * https://iexcloud.io/docs/api/#research-and-development-days
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const researchAndDevelopmentDaysWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_RD_DAY",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.researchAndDevelopmentDays = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return researchAndDevelopmentDaysWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Same-store sales, also referred to as comparable-store sales, SSS or identical-store sales, is a financial metric that companies in the retail industry use to evaluate the total dollar amount of sales in the company’s stores that have been operating for a year or more.
 * https://iexcloud.io/docs/api/#same-store-sales
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const sameStoreSalesWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_SAME_STORE_SALES",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.sameStoreSales = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return sameStoreSalesWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * Secondary Offerings are the issuance of new stock for public sale from a company that has already made its initial public offering (IPO).
 * Usually, these kinds of public offerings are made by companies wishing to refinance, or raise capital for growth.
 * Money raised from these kinds of secondary offerings goes to the company, through the investment bank that underwrites the offering.
 * Investment banks are issued an allotment, and possibly an overallotment which they may choose to exercise if there is a strong possibility of making money on the spread between the allotment price and the selling price of the securities. Short Selling is prohibited during the period of the secondary offering.
 * https://iexcloud.io/docs/api/#secondary-offerings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const secondaryOfferingsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_SECONDARY_OFFERING",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.secondaryOfferings = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return secondaryOfferingsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is an educational event that features one or more subject matter experts delivering information via lecture and discussion.
 * https://iexcloud.io/docs/api/#seminars
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const seminarsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_SEMINAR",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.seminars = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return seminarsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a meeting, held at least annually, to elect members to the board of directors and hear reports on the business’ financial situation as well as new policy initiatives from the corporation’s management.
 * https://iexcloud.io/docs/api/#shareholder-meetings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const shareholderMeetingsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_SHAREHOLDER_MEETING",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.shareholderMeetings = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return shareholderMeetingsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a gathering of people who are interested in the same business subject or topic.
 * https://iexcloud.io/docs/api/#summit-meetings
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const summitMeetingsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_SUMMIT_MEETING",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.summitMeetings = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return summitMeetingsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a large gathering in which different companies in a particular field or industry show their products to possible customers.
 * https://iexcloud.io/docs/api/#trade-shows
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const tradeShowsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_TRADE_SHOW",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.tradeShows = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return tradeShowsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is when option contracts and futures contracts expire on the exact same day.
 * https://iexcloud.io/docs/api/#witching-hours
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const witchingHoursWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_WITCHING_HOURS",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.witchingHours = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return witchingHoursWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};

/**
 * This is a meeting or series of meetings at which a group of people engage in discussion and activity on a particular subject, product or service to gain hands-on experience.
 * https://iexcloud.io/docs/api/#workshops
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 * @param  {object} rest
 */
export const workshopsWallStreetHorizon = (
  symbol,
  token,
  version,
  filter,
  format,
  ...timeseriesArgs
) =>
  _base(
    "PREMIUM_WALLSTREETHORIZON_WORKSHOP",
    symbol,
    token,
    version,
    filter,
    format,
    ...timeseriesArgs,
  );

Client.premium.prototype.workshops = function (
  symbol,
  filter,
  format,
  ...timeseriesArgs
) {
  return workshopsWallStreetHorizon(
    symbol,
    this._token,
    this._version,
    filter,
    format,
    ...timeseriesArgs,
  );
};
