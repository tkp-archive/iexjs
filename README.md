# iexjs

Javascript interface to [IEX Cloud](https://iexcloud.io/docs/api/)

[![Build Status](https://github.com/timkpaine/iexjs/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/timkpaine/iexjs/actions?query=workflow%3A%22Build+Status%22)
[![License](https://img.shields.io/github/license/timkpaine/iexjs.svg)](https://github.com/timkpaine/iexjs/)
[![npm](https://img.shields.io/npm/v/iexjs)](https://www.npmjs.com/package/iexjs)

## Referral

Please subscribe to IEX Cloud using [my referral code](https://iexcloud.io/s/6332a3c3 ).

## Install

Install from npm

`npm install --save iexjs`

## Overview

### Full API
Currently, the following methods are implemented:

### Data Points

- [points](https://iexcloud.io/docs/api/#data-points)

### Account

- [messageBudget](https://iexcloud.io/docs/api/#message-budget)
- [metadata](https://iexcloud.io/docs/api/#metadata)
- [payAsYouGo](https://iexcloud.io/docs/api/#pay-as-you-go)
- [usage](https://iexcloud.io/docs/api/#usage)

### Stocks

<!-- #### Stock Prices -->

<!-- - [book](https://iexcloud.io/docs/api/#book) -->
<!-- - [chart](https://iexcloud.io/docs/api/#charts) -->
<!-- - [delayedQuote](https://iexcloud.io/docs/api/#delayed-quote) -->
<!-- - [intraday](https://iexcloud.io/docs/api/#intraday-prices) -->
<!-- - [largestTrades](https://iexcloud.io/docs/api/#largest-trades) -->
<!-- - [ohlc](https://iexcloud.io/docs/api/#open-close-price) -->
<!-- - [marketOhlc](https://iexcloud.io/docs/api/#open-close-price) -->
<!-- - [yesterday (previous day price)](https://iexcloud.io/docs/api/#previous-day-price) -->
<!-- - [marketYesterday](https://iexcloud.io/docs/api/#previous-day-price) -->
<!-- - [price](https://iexcloud.io/docs/api/#price-only) -->
<!-- - [quote](https://iexcloud.io/docs/api/#quote) -->
<!-- - [volumeByVenue](https://iexcloud.io/docs/api/#volume-by-venue) -->

#### Stock Profiles

- [company](https://iexcloud.io/docs/api/#company)
- [insiderRoster](https://iexcloud.io/docs/api/#insider-roster)
- [insiderSummary](https://iexcloud.io/docs/api/#insider-summary)
- [insiderTransactions](https://iexcloud.io/docs/api/#insider-transactions)
- [logo](https://iexcloud.io/docs/api/#logo)
- [peers](https://iexcloud.io/docs/api/#peer-groups)

#### Stock Fundamentals

<!-- - [balanceSheet](https://iexcloud.io/docs/api/#balance-sheet) -->
<!-- - [cashFlow](https://iexcloud.io/docs/api/#cash-flow) -->
<!-- - [dividendsBasic](https://iexcloud.io/docs/api/#dividends-basic) -->
<!-- - [earnings](https://iexcloud.io/docs/api/#earnings) -->
<!-- - [financials](https://iexcloud.io/docs/api/#financials) -->
<!-- - [incomeStatement](https://iexcloud.io/docs/api/#income-statement) -->
- [tenQ](https://iexcloud.io/docs/api/#financials-as-reported)
- [tenK](https://iexcloud.io/docs/api/#financials-as-reported)
<!-- - [stockSplits](https://iexcloud.io/docs/api/#splits-basic) -->

#### Stock Research

- [advancedStats](https://iexcloud.io/docs/api/#advanced-stats)
- [analystRecommendations](https://iexcloud.io/docs/api/#analyst-recommendations)
- [estimates](https://iexcloud.io/docs/api/#estimates)
- [fundOwnership](https://iexcloud.io/docs/api/#fund-ownership)
- [institutionalOwnership](https://iexcloud.io/docs/api/#institutional-ownership)
- [keyStats](https://iexcloud.io/docs/api/#key-stats)
- [priceTarget](https://iexcloud.io/docs/api/#price-target)
- [technicals](https://iexcloud.io/docs/api/#technical-indicators)

<!-- #### Corporate Actions -->

<!-- - [bonusIssue](https://iexcloud.io/docs/api/#bonus-issue) -->
<!-- - [distribution](https://iexcloud.io/docs/api/#distribution) -->
<!-- - [dividends](https://iexcloud.io/docs/api/#dividends) -->
<!-- - [returnOfCapital](https://iexcloud.io/docs/api/#return-of-capital) -->
<!-- - [rightsIssue](https://iexcloud.io/docs/api/#rights-issue) -->
<!-- - [rightToPurchase](https://iexcloud.io/docs/api/#right-to-purchase) -->
<!-- - [securityReclassification](https://iexcloud.io/docs/api/#security-reclassification) -->
<!-- - [securitySwap](https://iexcloud.io/docs/api/#security-swap) -->
<!-- - [spinoff](https://iexcloud.io/docs/api/#spinoff) -->
<!-- - [splits](https://iexcloud.io/docs/api/#splits) -->

#### Market Info

- [collections](https://iexcloud.io/docs/api/#collections)
- [earningsToday](https://iexcloud.io/docs/api/#earnings-today)
- [ipoToday](https://iexcloud.io/docs/api/#ipo-calendar)
- [ipoUpcoming](https://iexcloud.io/docs/api/#ipo-calendar)
- [list](https://iexcloud.io/docs/api/#list)
- [marketVolume](https://iexcloud.io/docs/api/#market-volume-u-s)
- [sectorPerformance](https://iexcloud.io/docs/api/#sector-performance)
- [upcomingEvents](https://iexcloud.io/docs/api/#upcoming-events)
- [upcomingEarnings](https://iexcloud.io/docs/api/#upcoming-events)
- [upcomingDividends](https://iexcloud.io/docs/api/#upcoming-events)
- [upcomingSplits](https://iexcloud.io/docs/api/#upcoming-events)
- [upcomingIPOs](https://iexcloud.io/docs/api/#upcoming-events)

#### News

- [news](https://iexcloud.io/docs/api/#news)
- [marketNews](https://iexcloud.io/docs/api/#news)

#### Time Series

- [timeSeriesInventory](https://iexcloud.io/docs/api/#time-series)
- [timeSeries](https://iexcloud.io/docs/api/#time-series)

<!-- #### Bulk -->

<!-- - batch -->

#### Old/Unknown/Deprecated

<!-- - spread -->
<!-- - shortInterest -->
- marketShortInterest

### Crypto

- [cryptoBook](https://iexcloud.io/docs/api/#cryptocurrency-book)
- [cryptoQuote](https://iexcloud.io/docs/api/#cryptocurrency-quote)
- [cryptoPrice](https://iexcloud.io/docs/api/#cryptocurrency-price)

### FX

- [latestFX](https://iexcloud.io/docs/api/#latest-currency-rates)
- [convertFX](https://iexcloud.io/docs/api/#currency-conversion)
- [historicalFX](https://iexcloud.io/docs/api/#historical-daily)

### EOD Options

- [optionExpirations](https://iexcloud.io/docs/api/#end-of-day-options)
- [options](https://iexcloud.io/docs/api/#end-of-day-options)

### CEO Compensation

- [ceoCompensation](https://iexcloud.io/docs/api/#ceo-compensation)

### Treasuries

#### Daily Treasury Rates

- [thirtyYear](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [twentyYear](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [tenYear](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [fiveYear](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [twoYear](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [oneYear](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [sixMonth](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [threeMonth](https://iexcloud.io/docs/api/#daily-treasury-rates)
- [oneMonth](https://iexcloud.io/docs/api/#daily-treasury-rates)

### Commodities

- [wti](https://iexcloud.io/docs/api/#oil-prices)
- [brent](https://iexcloud.io/docs/api/#oil-prices)
- [natgas](https://iexcloud.io/docs/api/#natural-gas-price)
- [heatoil](https://iexcloud.io/docs/api/#heating-oil-prices)
- [jet](https://iexcloud.io/docs/api/#jet-fuel-prices)
- [diesel](https://iexcloud.io/docs/api/#diesel-price)
- [gasreg](https://iexcloud.io/docs/api/#gas-prices)
- [gasmid](https://iexcloud.io/docs/api/#gas-prices)
- [gasprm](https://iexcloud.io/docs/api/#gas-prices)
- [propane](https://iexcloud.io/docs/api/#propane-prices)

### Economic Data

- [cdnj](https://iexcloud.io/docs/api/#cd-rates)
- [cdj](https://iexcloud.io/docs/api/#cd-rates)
- [cpi](https://iexcloud.io/docs/api/#consumer-price-index)
- [creditcard](https://iexcloud.io/docs/api/#credit-card-interest-rate)
- [fedfunds](https://iexcloud.io/docs/api/#federal-fund-rates)
- [gdp](https://iexcloud.io/docs/api/#real-gdp)
- [institutionalMoney](https://iexcloud.io/docs/api/#institutional-money-funds)
- [initialClaims](https://iexcloud.io/docs/api/#initial-claims)
- [indpro](https://iexcloud.io/docs/api/#industrial-production-index)
- [us30](https://iexcloud.io/docs/api/#mortgage-rates)
- [us15](https://iexcloud.io/docs/api/#mortgage-rates)
- [us5](https://iexcloud.io/docs/api/#mortgage-rates)
- [housing](https://iexcloud.io/docs/api/#total-housing-starts)
- [payroll](https://iexcloud.io/docs/api/#total-payrolls)
- [vehicles](https://iexcloud.io/docs/api/#total-vehicle-sales)
- [retailMoney](https://iexcloud.io/docs/api/#retail-money-funds)
- [unemployment](https://iexcloud.io/docs/api/#unemployment-rate)
- [recessionProb](https://iexcloud.io/docs/api/#us-recession-probabilities)

### Reference Data

- [cryptoSymbols](https://iexcloud.io/docs/api/#cryptocurrency-symbols)
- [cryptoSymbolsList](https://iexcloud.io/docs/api/#cryptocurrency-symbols)
- [fxSymbols](https://iexcloud.io/docs/api/#fx-symbols)
- [fxSymbolsList](https://iexcloud.io/docs/api/#fx-symbols)
- [iexSymbols](https://iexcloud.io/docs/api/#iex-symbols)
- [iexSymbolsList](https://iexcloud.io/docs/api/#iex-symbols)
- [internationalSymbols](https://iexcloud.io/docs/api/#international-symbols)
- [internationalSymbolsList](https://iexcloud.io/docs/api/#international-symbols)
- [internationalExchanges](https://iexcloud.io/docs/api/#international-exchanges)
- [figi](https://iexcloud.io/docs/api/#figi-mapping)
- [mutualFundSymbols](https://iexcloud.io/docs/api/#mutual-fund-symbols)
- [mutualFundSymbolsList](https://iexcloud.io/docs/api/#mutual-fund-symbols)
- [optionsSymbols](https://iexcloud.io/docs/api/#options-symbols)
- [optionsSymbolsList](https://iexcloud.io/docs/api/#options-symbols)
- [otcSymbols](https://iexcloud.io/docs/api/#otc-symbols)
- [otcSymbolsList](https://iexcloud.io/docs/api/#otc-symbols)
- [sectors](https://iexcloud.io/docs/api/#sectors)
- [search](https://iexcloud.io/docs/api/#search)
- [symbols](https://iexcloud.io/docs/api/#symbols)
- [symbolsList](https://iexcloud.io/docs/api/#symbols)
- [tags](https://iexcloud.io/docs/api/#tags)
- [exchanges](https://iexcloud.io/docs/api/#u-s-exchanges)
- [holidays](https://iexcloud.io/docs/api/#u-s-holidays-and-trading-dates)
- [isinLookup](https://iexcloud.io/docs/api/#isin-mapping)

<!-- ### Other Reference -->

<!-- - corporateActions -->
<!-- - refDividends -->
<!-- - nextDayExtDate -->
<!-- - directory -->
<!-- - [calendar](https://iexcloud.io/docs/api/#calendar) -->

<!-- ### IEX Data -->

<!-- #### TOPS -->

<!-- - [deep](https://iexcloud.io/docs/api/#deep) -->
<!-- - [auction](https://iexcloud.io/docs/api/#deep-auction) -->
<!-- - [bookDeep](https://iexcloud.io/docs/api/#deep-book) -->
<!-- - [opHaltStatus](https://iexcloud.io/docs/api/#deep-operational-halt-status) -->
<!-- - [officialPrice](https://iexcloud.io/docs/api/#deep-official-price) -->
<!-- - [securityEvent](https://iexcloud.io/docs/api/#deep-security-event) -->
<!-- - [ssrStatus](https://iexcloud.io/docs/api/#deep-short-sale-price-test-status) -->
<!-- - [systemEvent](https://iexcloud.io/docs/api/#deep-system-event) -->
<!-- - [trades](https://iexcloud.io/docs/api/#deep-trades) -->
<!-- - [tradeBreak](https://iexcloud.io/docs/api/#deep-trade-break) -->
<!-- - [tradingStatus](https://iexcloud.io/docs/api/#deep-trading-status) -->
<!-- - [last](https://iexcloud.io/docs/api/#last) -->
<!-- - [threshold](https://iexcloud.io/docs/api/#listed-regulation-sho-threshold-securities-list-in-dev) -->
<!-- - [tops](https://iexcloud.io/docs/api/#tops) -->

#### Stats

- daily
- summary
- systemStats
- recent
- records

### Alternative

- sentiment

<!-- ## Streaming Data -->

<!-- ### SSE Streaming -->

<!-- - [topsSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [lastSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [deepSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [tradesSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [auctionSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [bookSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [opHaltStatusSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [officialPriceSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [securityEventSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [ssrStatusSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [systemEventSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [tradeBreaksSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [tradingStatusSSE](https://iexcloud.io/docs/api/#sse-streaming) -->

<!-- ### Stocks -->

<!-- - [stocksUSNoUTPSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [stocksUSSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [stocksUS1SecondSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [stocksUS5SecondSSE](https://iexcloud.io/docs/api/#sse-streaming) -->
<!-- - [stocksUS1MinuteSSE](https://iexcloud.io/docs/api/#sse-streaming) -->

<!-- ### News -->

<!-- - [newsSSE](https://iexcloud.io/docs/api/#streaming-news) -->

<!-- ### Sentiment -->

<!-- - sentimentSSE -->

<!-- ### FX -->

<!-- - fxSSE -->
<!-- - forex1SecondSSE -->
<!-- - forex5SecondSSE -->
<!-- - forex1MinuteSSE -->

<!-- ### Crypto -->

<!-- - cryptoBookSSE -->
<!-- - cryptoEventsSSE -->
<!-- - cryptoQuotesSSE -->

<!-- ## Premium Data -->

<!-- ### Wall Street Horizon -->

<!-- - [analystDays](https://iexcloud.io/docs/api/#analyst-days) -->
<!-- - [boardOfDirectorsMeeting](https://iexcloud.io/docs/api/#board-of-directors-meeting) -->
<!-- - [businessUpdates](https://iexcloud.io/docs/api/#business-updates) -->
<!-- - [buybacks](https://iexcloud.io/docs/api/#buybacks) -->
<!-- - [capitalMarketsDay](https://iexcloud.io/docs/api/#capital-markets-day) -->
<!-- - [companyTravel](https://iexcloud.io/docs/api/#company-travel) -->
<!-- - [filingDueDates](https://iexcloud.io/docs/api/#filing-due-dates) -->
<!-- - [fiscalQuarterEnd](https://iexcloud.io/docs/api/#fiscal-quarter-end) -->
<!-- - [forum](https://iexcloud.io/docs/api/#forum) -->
<!-- - [generalConference](https://iexcloud.io/docs/api/#general-conference) -->
<!-- - [fdaAdvisoryCommitteeMeetings](https://iexcloud.io/docs/api/#fda-advisory-committee-meetings) -->
<!-- - [holidaysWSH](https://iexcloud.io/docs/api/#holidays) -->
<!-- - [indexChanges](https://iexcloud.io/docs/api/#index-changes) -->
<!-- - [iposWSH](https://iexcloud.io/docs/api/#ipos) -->
<!-- - [legalActions](https://iexcloud.io/docs/api/#legal-actions) -->
<!-- - [mergersAndAcquisitions](https://iexcloud.io/docs/api/#mergers-acquisitions) -->
<!-- - [productEventsDF](https://iexcloud.io/docs/api/#product-events) -->
<!-- - [researchAndDevelopmentDays](https://iexcloud.io/docs/api/#research-and-development-days) -->
<!-- - [sameStoreSales](https://iexcloud.io/docs/api/#same-store-sales) -->
<!-- - [secondaryOfferings](https://iexcloud.io/docs/api/#secondary-offerings) -->
<!-- - [seminars](https://iexcloud.io/docs/api/#seminars) -->
<!-- - [shareholderMeetings](https://iexcloud.io/docs/api/#shareholder-meetings) -->
<!-- - [summitMeetings](https://iexcloud.io/docs/api/#summit-meetings) -->
<!-- - [tradeShows](https://iexcloud.io/docs/api/#trade-shows) -->
<!-- - [witchingHours](https://iexcloud.io/docs/api/#witching-hours) -->
<!-- - [workshops](https://iexcloud.io/docs/api/#workshops) -->

<!-- ### Fraud Factors -->

<!-- - [similarityIndex](https://iexcloud.io/docs/api/#similiarity-index) -->
<!-- - [nonTimelyFilings](https://iexcloud.io/docs/api/#non-timely-filings) -->

<!-- ### Extract Alpha -->

<!-- - [cam1](https://iexcloud.io/docs/api/#cross-asset-model-1) -->
<!-- - [esgCFPBComplaints](https://iexcloud.io/docs/api/#esg-cfpb-complaints) -->
<!-- - [esgCPSCRecalls](https://iexcloud.io/docs/api/#esg-cpsc-recalls) -->
<!-- - [esgDOLVisaApplications](https://iexcloud.io/docs/api/#esg-dol-visa-applications) -->
<!-- - [esgEPAEnforcements](https://iexcloud.io/docs/api/#esg-epa-enforcements) -->
<!-- - [esgEPAMilestones](https://iexcloud.io/docs/api/#esg-epa-milestones) -->
<!-- - [esgFECIndividualCampaingContributions](https://iexcloud.io/docs/api/#esg-fec-individual-campaign-contributions) -->
<!-- - [esgOSHAInspections](https://iexcloud.io/docs/api/#esg-osha-inspections) -->
<!-- - [esgSenateLobbying](https://iexcloud.io/docs/api/#esg-senate-lobbying) -->
<!-- - [esgUSASpending](https://iexcloud.io/docs/api/#esg-usa-spending) -->
<!-- - [esgUSPTOPatentApplications](https://iexcloud.io/docs/api/#esg-uspto-patent-applications) -->
<!-- - [esgUSPTOPatentGrants](https://iexcloud.io/docs/api/#esg-uspto-patent-grants) -->
<!-- - [tacticalModel1](https://iexcloud.io/docs/api/#tactical-model-1) -->

<!-- ### Precision Alpha -->

<!-- - [precisionAlphaPriceDynamics](https://iexcloud.io/docs/api/#precision-alpha-price-dynamics) -->

<!-- ### BRAIN Company -->

<!-- - [brain30DaySentiment](https://iexcloud.io/docs/api/#brain-companys-30-day-sentiment-indicator) -->
<!-- - [brain7DaySentiment](https://iexcloud.io/docs/api/#brain-companys-7-day-sentiment-indicator) -->
<!-- - [brain21DayMLReturnRanking](https://iexcloud.io/docs/api/#brain-companys-21-day-machine-learning-estimated-return-ranking) -->
<!-- - [brain10DayMLReturnRanking](https://iexcloud.io/docs/api/#brain-companys-10-day-machine-learning-estimated-return-ranking) -->
<!-- - [brain5DayMLReturnRanking](https://iexcloud.io/docs/api/#brain-companys-5-day-machine-learning-estimated-return-ranking) -->
<!-- - [brain3DayMLReturnRanking](https://iexcloud.io/docs/api/#brain-companys-3-day-machine-learning-estimated-return-ranking) -->
<!-- - [brain2DayMLReturnRanking](https://iexcloud.io/docs/api/#brain-companys-2-day-machine-learning-estimated-return-ranking) -->
<!-- - [brainLanguageMetricsOnCompanyFilingsAll](https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-quarterly-and-annual) -->
<!-- - [brainLanguageMetricsOnCompanyFilings](https://iexcloud.io/docs/api/#brain-companys-language-metrics-on-company-filings-annual-only) -->
<!-- - [brainLanguageMetricsOnCompanyFilingsDifferenceAll](https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-annual-filings-from-prior-year) -->
<!-- - [brainLanguageMetricsOnCompanyFilingsDifference](https://iexcloud.io/docs/api/#brain-companys-differences-in-language-metrics-on-company-annual-filings-from-prior-year) -->

<!-- ### Kavout -->

<!-- - [kScore](https://iexcloud.io/docs/api/#k-score-for-us-equities) -->
<!-- - [kScoreChina](https://iexcloud.io/docs/api/#k-score-for-china-a-shares) -->

<!-- ### Audit Analytics -->

<!-- - [accountingQualityAndRiskMatrix](https://iexcloud.io/docs/api/#audit-analytics-accounting-quality-and-risk-matrix) -->
<!-- - [directorAndOfficerChanges](https://iexcloud.io/docs/api/#audit-analytics-director-and-officer-changes) -->

<!-- ### ValuEngine -->

<!-- - [valuEngineStockResearchReport](https://iexcloud.io/docs/api/#valuengine-stock-research-report) -->

<!-- ### StockTwits Sentiment -->

<!-- - [socialSentiment](https://iexcloud.io/docs/api/#social-sentiment) -->

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This software is licensed under the Apache 2.0 license. See the
[LICENSE](LICENSE) and [AUTHORS](AUTHORS) files for details.
