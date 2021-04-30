/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-undef */

const {
  Client,
  // account
  messageBudget,
  metadata,
  payAsYouGo,
  usage,
  // alternative
  sentiment,
  ceoCompensation,
  // commodities
  wti,
  brent,
  natgas,
  heatoil,
  jet,
  diesel,
  gasreg,
  gasmid,
  gasprm,
  propane,
  // cryptocurrency
  cryptoBook,
  cryptoPrice,
  cryptoQuote,
  // economic
  us30,
  us15,
  us5,
  fedfunds,
  creditcard,
  cdnj,
  cdj,
  gdp,
  indpro,
  cpi,
  payroll,
  housing,
  unemployment,
  vehicles,
  recessionProb,
  initialClaims,
  institutionalMoney,
  retailMoney,
  // fx
  latestFX,
  convertFX,
  historicalFX,
  // streaming
  cryptoBookSSE,
  cryptoEventsSSE,
  cryptoQuotesSSE,
  fxSSE,
  forex1SecondSSE,
  forex5SecondSSE,
  forex1MinuteSSE,
  newsSSE,
  sentimentSSE,
  lastSSE,
  deepSSE,
  tradesSSE,
  auctionSSE,
  bookSSE,
  officialPriceSSE,
  securityEventSSE,
  ssrStatusSSE,
  tradeBreaksSSE,
  tradingStatusSSE,
  stocksUSNoUTPSSE,
  stocksUSSSE,
  stocksUS1SecondSSE,
  stocksUSNoUTP1SecondSSE,
  stocksUS5SecondSSE,
  stocksUSNoUTP5SecondSSE,
  stocksUS1MinuteSSE,
  stocksUSNoUTP1MinuteSSE,
  // metadata
  queryMetadata,
  // options
  optionExpirations,
  options,
  // points
  points,
  // premium
  // audit analytics
  directorAndOfficerChangesAuditAnalytics,
  accountingQualityAndRiskMatrixAuditAnalytics,
  // brain
  thirtyDaySentimentBrain,
  sevenDaySentimentBrain,
  twentyOneDayMLReturnRankingBrain,
  tenDayMLReturnRankingBrain,
  fiveDayMLReturnRankingBrain,
  threeDayMLReturnRankingBrain,
  twoDayMLReturnRankingBrain,
  languageMetricsOnCompanyFilingsAllBrain,
  languageMetricsOnCompanyFilingsBrain,
  languageMetricsOnCompanyFilingsDifferenceAllBrain,
  languageMetricsOnCompanyFilingsDifferenceBrain,
  // extract alpha
  cam1ExtractAlpha,
  esgCFPBComplaintsExtractAlpha,
  esgCPSCRecallsExtractAlpha,
  esgDOLVisaApplicationsExtractAlpha,
  esgEPAEnforcementsExtractAlpha,
  esgEPAMilestonesExtractAlpha,
  esgFECIndividualCampaingContributionsExtractAlpha,
  esgOSHAInspectionsExtractAlpha,
  esgSenateLobbyingExtractAlpha,
  esgUSASpendingExtractAlpha,
  esgUSPTOPatentApplicationsExtractAlpha,
  esgUSPTOPatentGrantsExtractAlpha,
  tacticalModel1ExtractAlpha,
  // fraud factors
  similarityIndexFraudFactors,
  nonTimelyFilingsFraudFactors,
  // kavout
  kScoreKavout,
  kScoreChinaKavout,
  // precision alpha
  precisionAlphaPriceDynamics,
  // stocktwits
  socialSentimentStockTwits,
  // valuengine
  stockReportValuEngine,
  downloadStockReportvaluEngine,
  // new constructs
  reportNewConstructs,
  downloadReportNewConstructs,
  // wall street horizon
  analystDaysWallStreetHorizon,
  boardOfDirectorsMeetingWallStreetHorizon,
  businessUpdatesWallStreetHorizon,
  buybacksWallStreetHorizon,
  capitalMarketsDayWallStreetHorizon,
  companyTravelWallStreetHorizon,
  filingDueDatesWallStreetHorizon,
  fiscalQuarterEndWallStreetHorizon,
  forumWallStreetHorizon,
  generalConferenceWallStreetHorizon,
  fdaAdvisoryCommitteeMeetingsWallStreetHorizon,
  holidaysWallStreetHorizon,
  indexChangesWallStreetHorizon,
  iposWallStreetHorizon,
  legalActionsWallStreetHorizon,
  mergersAndAcquisitionsWallStreetHorizon,
  productEventsWallStreetHorizon,
  researchAndDevelopmentDaysWallStreetHorizon,
  sameStoreSalesWallStreetHorizon,
  secondaryOfferingsWallStreetHorizon,
  seminarsWallStreetHorizon,
  shareholderMeetingsWallStreetHorizon,
  summitMeetingsWallStreetHorizon,
  tradeShowsWallStreetHorizon,
  witchingHoursWallStreetHorizon,
  workshopsWallStreetHorizon,
  // rates
  thirtyYear,
  twentyYear,
  tenYear,
  fiveYear,
  twoYear,
  oneYear,
  sixMonth,
  threeMonth,
  oneMonth,
  // refdata
  calendar,
  holidays,
  exchanges,
  internationalExchanges,
  figi,
  search,
  sectors,
  tags,
  symbols,
  iexSymbols,
  mutualFundSymbols,
  otcSymbols,
  internationalSymbols,
  fxSymbols,
  optionsSymbols,
  cryptoSymbols,
  symbolsList,
  iexSymbolsList,
  mutualFundSymbolsList,
  otcSymbolsList,
  internationalSymbolsList,
  fxSymbolsList,
  optionsSymbolsList,
  cryptoSymbolsList,
  isinLookup,
  ricLookup,
  // rules
  // files
  files,
  download,
  // stats
  systemStats,
  recent,
  records,
  summary,
  daily,
  // stocks
  batch,
  stockSplits,
  bonusIssue,
  distribution,
  dividends,
  returnOfCapital,
  rightsIssue,
  rightToPurchase,
  securityReclassification,
  securitySwap,
  spinoff,
  splits,
  balanceSheet,
  cashFlow,
  dividendsBasic,
  earnings,
  financials,
  fundamentals,
  incomeStatement,
  collections,
  earningsToday,
  ipoToday,
  ipoUpcoming,
  list,
  marketVolume,
  marketOhlc,
  marketYesterday,
  sectorPerformance,
  marketShortInterest,
  upcomingEvents,
  upcomingEarnings,
  upcomingDividends,
  upcomingSplits,
  upcomingIPOs,
  news,
  marketNews,
  book,
  delayedQuote,
  largestTrades,
  ohlc,
  yesterday,
  previous,
  price,
  quote,
  spread,
  volumeByVenue,
  chart,
  intraday,
  company,
  insiderRoster,
  insiderSummary,
  insiderTransactions,
  logo,
  peers,
  advancedStats,
  analystRecommendations,
  estimates,
  fundOwnership,
  institutionalOwnership,
  keyStats,
  priceTarget,
  technicals,
  threshold,
  shortInterest,
  timeSeriesInventory,
  timeSeries,
  tenQ,
  tenK,
  iexTops,
  iexLast,
  iexDeep,
  iexAuction,
  iexBook,
  iexOpHaltStatus,
  iexOfficialPrice,
  iexSecurityEvent,
  iexSsrStatus,
  iexSystemEvent,
  iexTrades,
  iexTradeBreak,
  iexTradingStatus,
  iexHist,
  priceDynamicsPrecisionAlpha,
} = require("../src/js");

describe("Client", () => {
  test("Client", () => {
    expect(Client).toBeDefined();
  });
});

describe("Files", () => {
  test("files", () => {
    expect(files).toBeDefined();
  });

  test("download", () => {
    expect(download).toBeDefined();
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

describe("Commodities", () => {
  test("wti", () => {
    expect(wti).toBeDefined();
  });

  test("brent", () => {
    expect(brent).toBeDefined();
  });

  test("natgas", () => {
    expect(natgas).toBeDefined();
  });

  test("heatoil", () => {
    expect(heatoil).toBeDefined();
  });

  test("jet", () => {
    expect(jet).toBeDefined();
  });

  test("diesel", () => {
    expect(diesel).toBeDefined();
  });

  test("gasreg", () => {
    expect(gasreg).toBeDefined();
  });

  test("gasmid", () => {
    expect(gasmid).toBeDefined();
  });

  test("gasprm", () => {
    expect(gasprm).toBeDefined();
  });

  test("propane", () => {
    expect(propane).toBeDefined();
  });
});

describe("Cryptocurrency", () => {
  test("cryptoBook", () => {
    expect(cryptoBook).toBeDefined();
  });
  test("cryptoPrice", () => {
    expect(cryptoPrice).toBeDefined();
  });
  test("cryptoQuote", () => {
    expect(cryptoQuote).toBeDefined();
  });
});

describe("Economic", () => {
  test("us30", () => {
    expect(us30).toBeDefined();
  });

  test("us15", () => {
    expect(us15).toBeDefined();
  });

  test("us5", () => {
    expect(us5).toBeDefined();
  });

  test("fedfunds", () => {
    expect(fedfunds).toBeDefined();
  });

  test("creditcard", () => {
    expect(creditcard).toBeDefined();
  });

  test("cdnj", () => {
    expect(cdnj).toBeDefined();
  });

  test("cdj", () => {
    expect(cdj).toBeDefined();
  });

  test("gdp", () => {
    expect(gdp).toBeDefined();
  });

  test("indpro", () => {
    expect(indpro).toBeDefined();
  });

  test("cpi", () => {
    expect(cpi).toBeDefined();
  });

  test("payroll", () => {
    expect(payroll).toBeDefined();
  });

  test("housing", () => {
    expect(housing).toBeDefined();
  });

  test("unemployment", () => {
    expect(unemployment).toBeDefined();
  });

  test("vehicles", () => {
    expect(vehicles).toBeDefined();
  });

  test("recessionProb", () => {
    expect(recessionProb).toBeDefined();
  });

  test("initialClaims", () => {
    expect(initialClaims).toBeDefined();
  });

  test("institutionalMoney", () => {
    expect(institutionalMoney).toBeDefined();
  });

  test("retailMoney", () => {
    expect(retailMoney).toBeDefined();
  });
});

describe("FX", () => {
  test("latestFX", () => {
    expect(latestFX).toBeDefined();
  });

  test("convertFX", () => {
    expect(convertFX).toBeDefined();
  });

  test("historicalFX", () => {
    expect(historicalFX).toBeDefined();
  });
});

describe("MarketData", () => {
  test("cryptoBookSSE", () => {
    expect(cryptoBookSSE).toBeDefined();
  });

  test("cryptoEventsSSE", () => {
    expect(cryptoEventsSSE).toBeDefined();
  });

  test("cryptoQuotesSSE", () => {
    expect(cryptoQuotesSSE).toBeDefined();
  });

  test("fxSSE", () => {
    expect(fxSSE).toBeDefined();
  });

  test("forex1SecondSSE", () => {
    expect(forex1SecondSSE).toBeDefined();
  });

  test("forex5SecondSSE", () => {
    expect(forex5SecondSSE).toBeDefined();
  });

  test("forex1MinuteSSE", () => {
    expect(forex1MinuteSSE).toBeDefined();
  });

  test("newsSSE", () => {
    expect(newsSSE).toBeDefined();
  });

  test("sentimentSSE", () => {
    expect(sentimentSSE).toBeDefined();
  });

  test("lastSSE", () => {
    expect(lastSSE).toBeDefined();
  });

  test("deepSSE", () => {
    expect(deepSSE).toBeDefined();
  });

  test("tradesSSE", () => {
    expect(tradesSSE).toBeDefined();
  });

  test("auctionSSE", () => {
    expect(auctionSSE).toBeDefined();
  });

  test("bookSSE", () => {
    expect(bookSSE).toBeDefined();
  });

  test("officialPriceSSE", () => {
    expect(officialPriceSSE).toBeDefined();
  });

  test("securityEventSSE", () => {
    expect(securityEventSSE).toBeDefined();
  });

  test("ssrStatusSSE", () => {
    expect(ssrStatusSSE).toBeDefined();
  });

  test("tradeBreaksSSE", () => {
    expect(tradeBreaksSSE).toBeDefined();
  });

  test("tradingStatusSSE", () => {
    expect(tradingStatusSSE).toBeDefined();
  });

  test("stocksUSNoUTPSSE", () => {
    expect(stocksUSNoUTPSSE).toBeDefined();
  });

  test("stocksUSSSE", () => {
    expect(stocksUSSSE).toBeDefined();
  });

  test("stocksUS1SecondSSE", () => {
    expect(stocksUS1SecondSSE).toBeDefined();
    expect(stocksUSNoUTP1SecondSSE).toBeDefined();
  });

  test("stocksUS5SecondSSE", () => {
    expect(stocksUS5SecondSSE).toBeDefined();
    expect(stocksUSNoUTP5SecondSSE).toBeDefined();
  });

  test("stocksUS1MinuteSSE", () => {
    expect(stocksUS1MinuteSSE).toBeDefined();
    expect(stocksUSNoUTP1MinuteSSE).toBeDefined();
  });
});

describe("Metadata", () => {
  test("metadata", () => {
    expect(queryMetadata).toBeDefined();
  });
});

describe("Options", () => {
  test("optionsExpirations", () => {
    expect(optionExpirations).toBeDefined();
  });

  test("options", () => {
    expect(options).toBeDefined();
  });
});

describe("Points", () => {
  test("points", () => {
    expect(points).toBeDefined();
  });
});

describe("Premium", () => {
  test("directorAndOfficerChanges", () => {
    expect(directorAndOfficerChangesAuditAnalytics).toBeDefined();
  });

  test("accountingQualityAndRiskMatrix", () => {
    expect(accountingQualityAndRiskMatrixAuditAnalytics).toBeDefined();
  });

  test("brain30DaySentiment", () => {
    expect(thirtyDaySentimentBrain).toBeDefined();
  });

  test("brain7DaySentiment", () => {
    expect(sevenDaySentimentBrain).toBeDefined();
  });

  test("brain21DayMLReturnRanking", () => {
    expect(twentyOneDayMLReturnRankingBrain).toBeDefined();
  });

  test("brain10DayMLReturnRanking", () => {
    expect(tenDayMLReturnRankingBrain).toBeDefined();
  });

  test("brain5DayMLReturnRanking", () => {
    expect(fiveDayMLReturnRankingBrain).toBeDefined();
  });

  test("brain3DayMLReturnRanking", () => {
    expect(threeDayMLReturnRankingBrain).toBeDefined();
  });

  test("brain2DayMLReturnRanking", () => {
    expect(twoDayMLReturnRankingBrain).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilingsAll", () => {
    expect(languageMetricsOnCompanyFilingsAllBrain).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilings", () => {
    expect(languageMetricsOnCompanyFilingsAllBrain).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilingsDifferenceAll", () => {
    expect(languageMetricsOnCompanyFilingsDifferenceAllBrain).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilingsDifference", () => {
    expect(languageMetricsOnCompanyFilingsDifferenceBrain).toBeDefined();
  });

  test("cam1", () => {
    expect(cam1ExtractAlpha).toBeDefined();
  });

  test("esgCFPBComplaints", () => {
    expect(esgCFPBComplaintsExtractAlpha).toBeDefined();
  });



  test("esgCPSCRecalls", () => {
    expect(esgCPSCRecallsExtractAlpha).toBeDefined();
  });

  test("esgDOLVisaApplications", () => {
    expect(esgDOLVisaApplicationsExtractAlpha).toBeDefined();
  });

  test("esgEPAEnforcements", () => {
    expect(esgEPAEnforcementsExtractAlpha).toBeDefined();
  });

  test("esgEPAMilestones", () => {
    expect(esgEPAMilestonesExtractAlpha).toBeDefined();
  });

  test("esgFECIndividualCampaingContributions", () => {
    expect(esgFECIndividualCampaingContributionsExtractAlpha).toBeDefined();
  });

  test("esgOSHAInspections", () => {
    expect(esgOSHAInspectionsExtractAlpha).toBeDefined();
  });

  test("esgSenateLobbying", () => {
    expect(esgSenateLobbyingExtractAlpha).toBeDefined();
  });

  test("esgUSASpending", () => {
    expect(esgUSASpendingExtractAlpha).toBeDefined();
  });

  test("esgUSPTOPatentApplications", () => {
    expect(esgUSPTOPatentApplicationsExtractAlpha).toBeDefined();
  });

  test("esgUSPTOPatentGrants", () => {
    expect(esgUSPTOPatentGrantsExtractAlpha).toBeDefined();
  });

  test("tacticalModel1", () => {
    expect(tacticalModel1ExtractAlpha).toBeDefined();
  });

  test("similarityIndex", () => {
    expect(similarityIndexFraudFactors).toBeDefined();
  });

  test("nonTimelyFilings", () => {
    expect(nonTimelyFilingsFraudFactors).toBeDefined();
  });

  test("kScore", () => {
    expect(kScoreKavout).toBeDefined();
  });

  test("kScoreChina", () => {
    expect(kScoreChinaKavout).toBeDefined();
  });

  test("precisionAlphaPriceDynamics", () => {
    expect(priceDynamicsPrecisionAlpha).toBeDefined();
  });

  test("socialSentiment", () => {
    expect(socialSentimentStockTwits).toBeDefined();
  });

  test("valuEngineStockResearchReport", () => {
    expect(stockReportValuEngine).toBeDefined();
  });

  test("valuEngineStockResearchReportDownload", () => {
    expect(downloadStockReportvaluEngine).toBeDefined();
  });

  test("newConstructsReport", () => {
    expect(reportNewConstructs).toBeDefined();
  });

  test("newConstructsReportDownload", () => {
    expect(downloadReportNewConstructs).toBeDefined();
  });

  test("analystDays", () => {
    expect(analystDaysWallStreetHorizon).toBeDefined();
  });

  test("boardOfDirectorsMeeting", () => {
    expect(boardOfDirectorsMeetingWallStreetHorizon).toBeDefined();
  });

  test("businessUpdates", () => {
    expect(businessUpdatesWallStreetHorizon).toBeDefined();
  });

  test("buybacks", () => {
    expect(buybacksWallStreetHorizon).toBeDefined();
  });

  test("capitalMarketsDay", () => {
    expect(capitalMarketsDayWallStreetHorizon).toBeDefined();
  });

  test("companyTravel", () => {
    expect(companyTravelWallStreetHorizon).toBeDefined();
  });

  test("filingDueDates", () => {
    expect(filingDueDatesWallStreetHorizon).toBeDefined();
  });

  test("fiscalQuarterEnd", () => {
    expect(fiscalQuarterEndWallStreetHorizon).toBeDefined();
  });

  test("forum", () => {
    expect(forumWallStreetHorizon).toBeDefined();
  });

  test("generalConference", () => {
    expect(generalConferenceWallStreetHorizon).toBeDefined();
  });

  test("fdaAdvisoryCommitteeMeetings", () => {
    expect(fdaAdvisoryCommitteeMeetingsWallStreetHorizon).toBeDefined();
  });

  test("holidaysWSH", () => {
    expect(holidaysWallStreetHorizon).toBeDefined();
  });

  test("indexChanges", () => {
    expect(indexChangesWallStreetHorizon).toBeDefined();
  });

  test("iposWSH", () => {
    expect(iposWallStreetHorizon).toBeDefined();
  });

  test("legalActions", () => {
    expect(legalActionsWallStreetHorizon).toBeDefined();
  });

  test("mergersAndAcquisitions", () => {
    expect(mergersAndAcquisitionsWallStreetHorizon).toBeDefined();
  });

  test("productEvents", () => {
    expect(productEventsWallStreetHorizon).toBeDefined();
  });

  test("researchAndDevelopmentDays", () => {
    expect(researchAndDevelopmentDaysWallStreetHorizon).toBeDefined();
  });

  test("sameStoreSales", () => {
    expect(sameStoreSalesWallStreetHorizon).toBeDefined();
  });

  test("secondaryOfferings", () => {
    expect(secondaryOfferingsWallStreetHorizon).toBeDefined();
  });

  test("seminars", () => {
    expect(seminarsWallStreetHorizon).toBeDefined();
  });

  test("shareholderMeetings", () => {
    expect(shareholderMeetingsWallStreetHorizon).toBeDefined();
  });

  test("summitMeetings", () => {
    expect(summitMeetingsWallStreetHorizon).toBeDefined();
  });

  test("tradeShows", () => {
    expect(tradeShowsWallStreetHorizon).toBeDefined();
  });

  test("witchingHours", () => {
    expect(witchingHoursWallStreetHorizon).toBeDefined();
  });

  test("workshops", () => {
    expect(workshopsWallStreetHorizon).toBeDefined();
  });
});

describe("Rates", () => {
  test("thirtyYear", () => {
    expect(thirtyYear).toBeDefined();
  });

  test("twentyYear", () => {
    expect(twentyYear).toBeDefined();
  });

  test("tenYear", () => {
    expect(tenYear).toBeDefined();
  });

  test("fiveYear", () => {
    expect(fiveYear).toBeDefined();
  });

  test("twoYear", () => {
    expect(twoYear).toBeDefined();
  });

  test("oneYear", () => {
    expect(oneYear).toBeDefined();
  });

  test("sixMonth", () => {
    expect(sixMonth).toBeDefined();
  });

  test("threeMonth", () => {
    expect(threeMonth).toBeDefined();
  });

  test("oneMonth", () => {
    expect(oneMonth).toBeDefined();
  });
});

describe("RefData", () => {
  test("calendar", () => {
    expect(calendar).toBeDefined();
  });
  test("holidays", () => {
    expect(holidays).toBeDefined();
  });
  test("exchanges", () => {
    expect(exchanges).toBeDefined();
  });
  test("internationalExchanges", () => {
    expect(internationalExchanges).toBeDefined();
  });
  test("figi", () => {
    expect(figi).toBeDefined();
  });
  test("search", () => {
    expect(search).toBeDefined();
  });
  test("sectors", () => {
    expect(sectors).toBeDefined();
  });
  test("tags", () => {
    expect(tags).toBeDefined();
  });
  test("symbols", () => {
    expect(symbols).toBeDefined();
  });
  test("iexSymbols", () => {
    expect(iexSymbols).toBeDefined();
  });
  test("mutualFundSymbols", () => {
    expect(mutualFundSymbols).toBeDefined();
  });
  test("otcSymbols", () => {
    expect(otcSymbols).toBeDefined();
  });
  test("internationalSymbols", () => {
    expect(internationalSymbols).toBeDefined();
  });
  test("fxSymbols", () => {
    expect(fxSymbols).toBeDefined();
  });
  test("optionsSymbols", () => {
    expect(optionsSymbols).toBeDefined();
  });
  test("cryptoSymbols", () => {
    expect(cryptoSymbols).toBeDefined();
  });
  test("symbolsList", () => {
    expect(symbolsList).toBeDefined();
  });
  test("iexSymbolsList", () => {
    expect(iexSymbolsList).toBeDefined();
  });
  test("mutualFundSymbolsList", () => {
    expect(mutualFundSymbolsList).toBeDefined();
  });
  test("otcSymbolsList", () => {
    expect(otcSymbolsList).toBeDefined();
  });
  test("internationalSymbolsList", () => {
    expect(internationalSymbolsList).toBeDefined();
  });
  test("fxSymbolsList", () => {
    expect(fxSymbolsList).toBeDefined();
  });
  test("optionsSymbolsList", () => {
    expect(optionsSymbolsList).toBeDefined();
  });
  test("cryptoSymbolsList", () => {
    expect(cryptoSymbolsList).toBeDefined();
  });
  test("isinLookup", () => {
    expect(isinLookup).toBeDefined();
  });
  test("ricLookup", () => {
    expect(ricLookup).toBeDefined();
  });
});

describe("Stats", () => {
  test("systemStats", () => {
    expect(systemStats).toBeDefined();
  });
  test("recent", () => {
    expect(recent).toBeDefined();
  });
  test("records", () => {
    expect(records).toBeDefined();
  });
  test("summary", () => {
    expect(summary).toBeDefined();
  });
  test("daily", () => {
    expect(daily).toBeDefined();
  });
});

describe("Stock", () => {
  test("batch", () => {
    expect(batch).toBeDefined();
  });

  test("stockSplits", () => {
    expect(stockSplits).toBeDefined();
  });

  test("bonusIssue", () => {
    expect(bonusIssue).toBeDefined();
  });

  test("distribution", () => {
    expect(distribution).toBeDefined();
  });

  test("dividends", () => {
    expect(dividends).toBeDefined();
  });

  test("returnOfCapital", () => {
    expect(returnOfCapital).toBeDefined();
  });

  test("rightsIssue", () => {
    expect(rightsIssue).toBeDefined();
  });

  test("rightToPurchase", () => {
    expect(rightToPurchase).toBeDefined();
  });

  test("securityReclassification", () => {
    expect(securityReclassification).toBeDefined();
  });

  test("securitySwap", () => {
    expect(securitySwap).toBeDefined();
  });

  test("spinoff", () => {
    expect(spinoff).toBeDefined();
  });

  test("splits", () => {
    expect(splits).toBeDefined();
  });

  test("balanceSheet", () => {
    expect(balanceSheet).toBeDefined();
  });

  test("cashFlow", () => {
    expect(cashFlow).toBeDefined();
  });

  test("dividendsBasic", () => {
    expect(dividendsBasic).toBeDefined();
  });

  test("earnings", () => {
    expect(earnings).toBeDefined();
  });

  test("financials", () => {
    expect(financials).toBeDefined();
  });

  test("fundamentals", () => {
    expect(fundamentals).toBeDefined();
  });

  test("incomeStatement", () => {
    expect(incomeStatement).toBeDefined();
  });

  test("collections", () => {
    expect(collections).toBeDefined();
  });

  test("earningsToday", () => {
    expect(earningsToday).toBeDefined();
  });

  test("ipoToday", () => {
    expect(ipoToday).toBeDefined();
  });

  test("ipoUpcoming", () => {
    expect(ipoUpcoming).toBeDefined();
  });

  test("list", () => {
    expect(list).toBeDefined();
  });

  test("marketVolume", () => {
    expect(marketVolume).toBeDefined();
  });

  test("marketOhlc", () => {
    expect(marketOhlc).toBeDefined();
  });

  test("marketYesterday", () => {
    expect(marketYesterday).toBeDefined();
  });

  test("sectorPerformance", () => {
    expect(sectorPerformance).toBeDefined();
  });

  test("marketShortInterest", () => {
    expect(marketShortInterest).toBeDefined();
  });

  test("upcomingEvents", () => {
    expect(upcomingEvents).toBeDefined();
  });

  test("upcomingEarnings", () => {
    expect(upcomingEarnings).toBeDefined();
  });

  test("upcomingDividends", () => {
    expect(upcomingDividends).toBeDefined();
  });

  test("upcomingSplits", () => {
    expect(upcomingSplits).toBeDefined();
  });

  test("upcomingIPOs", () => {
    expect(upcomingIPOs).toBeDefined();
  });

  test("news", () => {
    expect(news).toBeDefined();
  });

  test("marketNews", () => {
    expect(marketNews).toBeDefined();
  });

  test("book", () => {
    expect(book).toBeDefined();
  });

  test("delayedQuote", () => {
    expect(delayedQuote).toBeDefined();
  });

  test("largestTrades", () => {
    expect(largestTrades).toBeDefined();
  });

  test("ohlc", () => {
    expect(ohlc).toBeDefined();
  });

  test("yesterday", () => {
    expect(yesterday).toBeDefined();
  });

  test("previous", () => {
    expect(previous).toBeDefined();
  });

  test("price", () => {
    expect(price).toBeDefined();
  });

  test("quote", () => {
    expect(quote).toBeDefined();
  });

  test("spread", () => {
    expect(spread).toBeDefined();
  });

  test("volumeByVenue", () => {
    expect(volumeByVenue).toBeDefined();
  });

  test("chart", () => {
    expect(chart).toBeDefined();
  });

  test("intraday", () => {
    expect(intraday).toBeDefined();
  });

  test("company", () => {
    expect(company).toBeDefined();
  });

  test("insiderRoster", () => {
    expect(insiderRoster).toBeDefined();
  });

  test("insiderSummary", () => {
    expect(insiderSummary).toBeDefined();
  });

  test("insiderTransactions", () => {
    expect(insiderTransactions).toBeDefined();
  });

  test("logo", () => {
    expect(logo).toBeDefined();
  });

  test("peers", () => {
    expect(peers).toBeDefined();
  });

  test("advancedStats", () => {
    expect(advancedStats).toBeDefined();
  });

  test("analystRecommendations", () => {
    expect(analystRecommendations).toBeDefined();
  });

  test("estimates", () => {
    expect(estimates).toBeDefined();
  });

  test("fundOwnership", () => {
    expect(fundOwnership).toBeDefined();
  });

  test("institutionalOwnership", () => {
    expect(institutionalOwnership).toBeDefined();
  });

  test("keyStats", () => {
    expect(keyStats).toBeDefined();
  });

  test("priceTarget", () => {
    expect(priceTarget).toBeDefined();
  });

  test("technicals", () => {
    expect(technicals).toBeDefined();
  });

  test("threshold", () => {
    expect(threshold).toBeDefined();
  });

  test("shortInterest", () => {
    expect(shortInterest).toBeDefined();
  });

  test("timeSeriesInventory", () => {
    expect(timeSeriesInventory).toBeDefined();
  });

  test("timeSeries", () => {
    expect(timeSeries).toBeDefined();
  });

  test("tenQ", () => {
    expect(tenQ).toBeDefined();
  });

  test("tenK", () => {
    expect(tenK).toBeDefined();
  });

  test("tops", () => {
    expect(iexTops).toBeDefined();
  });

  test("last", () => {
    expect(iexLast).toBeDefined();
  });

  test("deep", () => {
    expect(iexDeep).toBeDefined();
  });

  test("auction", () => {
    expect(iexAuction).toBeDefined();
  });

  test("iexBook", () => {
    expect(iexBook).toBeDefined();
  });

  test("opHaltStatus", () => {
    expect(iexOpHaltStatus).toBeDefined();
  });

  test("officialPrice", () => {
    expect(iexOfficialPrice).toBeDefined();
  });

  test("securityEvent", () => {
    expect(iexSecurityEvent).toBeDefined();
  });

  test("ssrStatus", () => {
    expect(iexSsrStatus).toBeDefined();
  });

  test("systemEvent", () => {
    expect(iexSystemEvent).toBeDefined();
  });

  test("trades", () => {
    expect(iexTrades).toBeDefined();
  });

  test("tradeBreak", () => {
    expect(iexTradeBreak).toBeDefined();
  });

  test("tradingStatus", () => {
    expect(iexTradingStatus).toBeDefined();
  });

  test("hist", () => {
    expect(iexHist).toBeDefined();
  });
});
