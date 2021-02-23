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
  stocksUS5SecondSSE,
  stocksUS1MinuteSSE,
  // options
  optionExpirations,
  options,
  // points
  points,
  // premium
  // audit analytics
  directorAndOfficerChanges,
  accountingQualityAndRiskMatrix,
  // brain
  brain30DaySentiment,
  brain7DaySentiment,
  brain21DayMLReturnRanking,
  brain10DayMLReturnRanking,
  brain5DayMLReturnRanking,
  brain3DayMLReturnRanking,
  brain2DayMLReturnRanking,
  brainLanguageMetricsOnCompanyFilingsAll,
  brainLanguageMetricsOnCompanyFilings,
  brainLanguageMetricsOnCompanyFilingsDifferenceAll,
  brainLanguageMetricsOnCompanyFilingsDifference,
  // extract alpha
  cam1,
  esgCFPBComplaints,
  esgCPSCRecalls,
  esgDOLVisaApplications,
  esgEPAEnforcements,
  esgEPAMilestones,
  esgFECIndividualCampaingContributions,
  esgOSHAInspections,
  esgSenateLobbying,
  esgUSASpending,
  esgUSPTOPatentApplications,
  esgUSPTOPatentGrants,
  tacticalModel1,
  // fraud factors
  similarityIndex,
  nonTimelyFilings,
  // kavout
  kScore,
  kScoreChina,
  // precision alpha
  precisionAlphaPriceDynamics,
  // stocktwits
  socialSentiment,
  // valuengine
  valuEngineStockResearchReport,
  // wall street horizon
  analystDays,
  boardOfDirectorsMeeting,
  businessUpdates,
  buybacks,
  capitalMarketsDay,
  companyTravel,
  filingDueDates,
  fiscalQuarterEnd,
  forum,
  generalConference,
  fdaAdvisoryCommitteeMeetings,
  holidaysWSH,
  indexChanges,
  iposWSH,
  legalActions,
  mergersAndAcquisitions,
  productEvents,
  researchAndDevelopmentDays,
  sameStoreSales,
  secondaryOfferings,
  seminars,
  shareholderMeetings,
  summitMeetings,
  tradeShows,
  witchingHours,
  workshops,
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
  // rules
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
} = require("../src/js");

describe("Client", () => {
  test("Client", () => {
    expect(Client).toBeDefined();
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
  });

  test("stocksUS5SecondSSE", () => {
    expect(stocksUS5SecondSSE).toBeDefined();
  });

  test("stocksUS1MinuteSSE", () => {
    expect(stocksUS1MinuteSSE).toBeDefined();
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
    expect(directorAndOfficerChanges).toBeDefined();
  });

  test("accountingQualityAndRiskMatrix", () => {
    expect(accountingQualityAndRiskMatrix).toBeDefined();
  });

  test("brain30DaySentiment", () => {
    expect(brain30DaySentiment).toBeDefined();
  });

  test("brain7DaySentiment", () => {
    expect(brain7DaySentiment).toBeDefined();
  });

  test("brain21DayMLReturnRanking", () => {
    expect(brain21DayMLReturnRanking).toBeDefined();
  });

  test("brain10DayMLReturnRanking", () => {
    expect(brain10DayMLReturnRanking).toBeDefined();
  });

  test("brain5DayMLReturnRanking", () => {
    expect(brain5DayMLReturnRanking).toBeDefined();
  });

  test("brain3DayMLReturnRanking", () => {
    expect(brain3DayMLReturnRanking).toBeDefined();
  });

  test("brain2DayMLReturnRanking", () => {
    expect(brain2DayMLReturnRanking).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilingsAll", () => {
    expect(brainLanguageMetricsOnCompanyFilingsAll).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilings", () => {
    expect(brainLanguageMetricsOnCompanyFilings).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilingsDifferenceAll", () => {
    expect(brainLanguageMetricsOnCompanyFilingsDifferenceAll).toBeDefined();
  });

  test("brainLanguageMetricsOnCompanyFilingsDifference", () => {
    expect(brainLanguageMetricsOnCompanyFilingsDifference).toBeDefined();
  });

  test("cam1", () => {
    expect(cam1).toBeDefined();
  });

  test("esgCFPBComplaints", () => {
    expect(esgCFPBComplaints).toBeDefined();
  });

  test("esgCPSCRecalls", () => {
    expect(esgCPSCRecalls).toBeDefined();
  });

  test("esgDOLVisaApplications", () => {
    expect(esgDOLVisaApplications).toBeDefined();
  });

  test("esgEPAEnforcements", () => {
    expect(esgEPAEnforcements).toBeDefined();
  });

  test("esgEPAMilestones", () => {
    expect(esgEPAMilestones).toBeDefined();
  });

  test("esgFECIndividualCampaingContributions", () => {
    expect(esgFECIndividualCampaingContributions).toBeDefined();
  });

  test("esgOSHAInspections", () => {
    expect(esgOSHAInspections).toBeDefined();
  });

  test("esgSenateLobbying", () => {
    expect(esgSenateLobbying).toBeDefined();
  });

  test("esgUSASpending", () => {
    expect(esgUSASpending).toBeDefined();
  });

  test("esgUSPTOPatentApplications", () => {
    expect(esgUSPTOPatentApplications).toBeDefined();
  });

  test("esgUSPTOPatentGrants", () => {
    expect(esgUSPTOPatentGrants).toBeDefined();
  });

  test("tacticalModel1", () => {
    expect(tacticalModel1).toBeDefined();
  });

  test("similarityIndex", () => {
    expect(similarityIndex).toBeDefined();
  });

  test("nonTimelyFilings", () => {
    expect(nonTimelyFilings).toBeDefined();
  });

  test("kScore", () => {
    expect(kScore).toBeDefined();
  });

  test("kScoreChina", () => {
    expect(kScoreChina).toBeDefined();
  });

  test("precisionAlphaPriceDynamics", () => {
    expect(precisionAlphaPriceDynamics).toBeDefined();
  });

  test("socialSentiment", () => {
    expect(socialSentiment).toBeDefined();
  });

  test("valuEngineStockResearchReport", () => {
    expect(valuEngineStockResearchReport).toBeDefined();
  });

  test("analystDays", () => {
    expect(analystDays).toBeDefined();
  });

  test("boardOfDirectorsMeeting", () => {
    expect(boardOfDirectorsMeeting).toBeDefined();
  });

  test("businessUpdates", () => {
    expect(businessUpdates).toBeDefined();
  });

  test("buybacks", () => {
    expect(buybacks).toBeDefined();
  });

  test("capitalMarketsDay", () => {
    expect(capitalMarketsDay).toBeDefined();
  });

  test("companyTravel", () => {
    expect(companyTravel).toBeDefined();
  });

  test("filingDueDates", () => {
    expect(filingDueDates).toBeDefined();
  });

  test("fiscalQuarterEnd", () => {
    expect(fiscalQuarterEnd).toBeDefined();
  });

  test("forum", () => {
    expect(forum).toBeDefined();
  });

  test("generalConference", () => {
    expect(generalConference).toBeDefined();
  });

  test("fdaAdvisoryCommitteeMeetings", () => {
    expect(fdaAdvisoryCommitteeMeetings).toBeDefined();
  });

  test("holidaysWSH", () => {
    expect(holidaysWSH).toBeDefined();
  });

  test("indexChanges", () => {
    expect(indexChanges).toBeDefined();
  });

  test("iposWSH", () => {
    expect(iposWSH).toBeDefined();
  });

  test("legalActions", () => {
    expect(legalActions).toBeDefined();
  });

  test("mergersAndAcquisitions", () => {
    expect(mergersAndAcquisitions).toBeDefined();
  });

  test("productEvents", () => {
    expect(productEvents).toBeDefined();
  });

  test("researchAndDevelopmentDays", () => {
    expect(researchAndDevelopmentDays).toBeDefined();
  });

  test("sameStoreSales", () => {
    expect(sameStoreSales).toBeDefined();
  });

  test("secondaryOfferings", () => {
    expect(secondaryOfferings).toBeDefined();
  });

  test("seminars", () => {
    expect(seminars).toBeDefined();
  });

  test("shareholderMeetings", () => {
    expect(shareholderMeetings).toBeDefined();
  });

  test("summitMeetings", () => {
    expect(summitMeetings).toBeDefined();
  });

  test("tradeShows", () => {
    expect(tradeShows).toBeDefined();
  });

  test("witchingHours", () => {
    expect(witchingHours).toBeDefined();
  });

  test("workshops", () => {
    expect(workshops).toBeDefined();
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
