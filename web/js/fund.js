var fund = [{
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.Key", 
    "fields": [
        { "name": "figi", "type": "com.bloomberg.Figi" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.Contact",
    "fields": [
        { "name": "firstName", "type": "string","doc": "First name of the contact" },
        { "name": "lastName", "type": "string","doc": "Last name of the contact" },
        { "name": "phoneNumber", "type": "string","doc": "Phone number of the contact" },
        { "name": "email", "type": "string","doc": "Email address of the contact" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.NewPricingSource",
    "fields": [
        { "name": "didYouSendATestEmailToBloomberg", "type": "boolean","doc": "Did you send a test pricing email to fundpricing@bloomberg.net?" },
        { "name": "senderEmailAddress", "type": "string","doc": "Sender's email address" },
        { "name": "subjectLineOfPricingFile", "type": "string","doc": "Subject line of the pricing file" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.ExistingPricingSource",
    "fields": [
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.PricingInfo",
    "fields": [
        { "name": "bloombergPricingContact", "type": [ "null","string"],"doc": "Your contact on Bloomberg's Data Team" },
        { "name": "isThisANewPricingSource", "type": [ "com.bloomberg.Default","com.bloomberg.ds.OpenFigiFunds.NewPricingSource","com.bloomberg.ds.OpenFigiFunds.ExistingPricingSource"],"doc": "Is this a new pricing source?" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.GeneralInformation",
    "fields": [
        { "name": "documentContact", "type": "com.bloomberg.ds.OpenFigiFunds.Contact","doc": "Contact for specified type of fund data - Documents" },
        { "name": "pricingAndAssetsContact", "type": "com.bloomberg.ds.OpenFigiFunds.Contact","doc": "Contact for specified type of fund data - Pricing and Assets" },
        { "name": "dividendsContact", "type": [ "null","com.bloomberg.ds.OpenFigiFunds.Contact"],"doc": "Contact for specified type of fund data - Dividends" },
        { "name": "portfolioHoldingsContact", "type": "com.bloomberg.ds.OpenFigiFunds.Contact","doc": "Contact for specified type of fund data - Portfolio Holdings" },
        { "name": "pricingInfo", "type": "com.bloomberg.ds.OpenFigiFunds.PricingInfo","doc": "" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.ExistingFund",
    "fields": [
        { "name": "existingFigiOrTicker", "type": "string","doc": "What is the existing FIGI identifier or ticker id for that share class?" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.NoExistingFund",
    "fields": [
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.OpenSubType",
    "type": "enum",
    "symbols": ["DEFAULT","FUND_OF_FUNDS","SICAV","UNIT_TRUST","FCP","OPEN_END_FUND","OEIC","OPEN_END_PENSION"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.OpenEndFund",
    "fields": [
        { "name": "subType", "type": "com.bloomberg.ds.OpenFigiFunds.OpenSubType","doc": "The sub-type of fund being submitted" }
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.ClosedSubType",
    "type": "enum",
    "symbols": ["DEFAULT","SICAF","TRUST_UNITS","INVESTMENT_TRUST","CLOSED_END_FUND","CLOSED_END_PENSION"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.ClosedEndFund",
    "fields": [
        { "name": "subType", "type": "com.bloomberg.ds.OpenFigiFunds.ClosedSubType","doc": "The sub-type of fund being submitted" }
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.HedgeSubType",
    "type": "enum",
    "symbols": ["DEFAULT","HEDGE_FUND","FUND_OF_HEDGE_FUNDS"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.FiscalMonth",
    "type": "enum",
    "symbols": ["DEFAULT","JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.HedgeFund",
    "fields": [
        { "name": "subType", "type": "com.bloomberg.ds.OpenFigiFunds.HedgeSubType","doc": "The sub-type of the fund being submitted" },
        { "name": "fiscalMonth", "type": "com.bloomberg.ds.OpenFigiFunds.FiscalMonth","doc": "This month signifies the end of the year for the Fund" },
        { "name": "administrator", "type": "string","doc": "The administrator handles the funds filings as well as preparing information supplied to the board of directors" },
        { "name": "auditorLong", "type": "string","doc": " Professional examination and verification of a company's accounting documents and supporting data for the purpose of rendering an opinion as to their fairness, consistency and conformity with generally accepted accounting principles" },
        { "name": "custodian", "type": "string","doc": "The custodians service includes the maintenance of a separate account(s) in the name of the fund, issuance of receipts and income, and the settlement of security transactions and the safekeeping of fund securities" },
        { "name": "primeBroker", "type": "string","doc": "This is the service company that generally provides stock loan, enhanced leverage, customized reporting and back-end communication tools" },
        { "name": "legalCounsel", "type": "string","doc": "Lawyer or legal department in a company that advises the company's management, including the board of directors and chief executive officer" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.FundInformation",
    "fields": [
        { "name": "fundName", "type": "string","doc": "The official name of the fund (do not include the share class)" },
        { "name": "fundAssetCurrency", "type": "string","doc": "The currency of the Total Assets of the fund" },
        { "name": "isThereAnExistingShareClass", "type": [ "com.bloomberg.Default","com.bloomberg.ds.OpenFigiFunds.ExistingFund","com.bloomberg.ds.OpenFigiFunds.NoExistingFund"],"doc": "Is there an existing share class with a registered FIGI?" },
        { "name": "countryOfDomicile", "type": "string","doc": "The country where the fund is domiciled" },
        { "name": "isFundListedOnCannex", "type": "boolean","doc": "Is this fund listed on Cannex? This applies only if it's an Open-End Fund and the country of domicile is Canada" },
        { "name": "ucitsCompliant", "type": "boolean","doc": "Indicates if the fund is UCITS compliant" },
        { "name": "benchmark", "type": [ "null","string"],"doc": "Indicates the primary benchmark of the fund (Bloomberg ticker or descriptive text)" },
        { "name": "fundType", "type": [ "com.bloomberg.Default","com.bloomberg.ds.OpenFigiFunds.OpenEndFund","com.bloomberg.ds.OpenFigiFunds.ClosedEndFund","com.bloomberg.ds.OpenFigiFunds.HedgeFund"],"doc": "The type of the fund being submitted" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.CompanyInformation",
    "fields": [
        { "name": "name", "type": "string","doc": "Name of the management company; (Hedge) Name of the investment advisor" },
        { "name": "addressLine1", "type": "string","doc": "Address of the management company; (Hedge) Address of the investment advisor" },
        { "name": "addressLine2", "type": [ "null","string"],"doc": "Address of the management company; (Hedge) Address of the investment advisor" },
        { "name": "addressLine3", "type": [ "null","string"],"doc": "Address of the management company; (Hedge) Address of the investment advisor" },
        { "name": "country", "type": "string","doc": "Country of the management company; (Hedge) Country of the investment advisor" },
        { "name": "state", "type": [ "null","string"],"doc": "State of the management company; (Hedge) State of the investment advisor" },
        { "name": "city", "type": "string","doc": "City of the management company; (Hedge) City of the investment advisor" },
        { "name": "zipCode", "type": [ "null","string"],"doc": "Zip code of the management company; (Hedge) Zip code of the investment advisor" },
        { "name": "phoneNumber", "type": "string","doc": "Phone number of the management company; (Hedge) Phone number of the investment advisor" },
        { "name": "fundWebsite", "type": [ "null","string"],"doc": "Website of the management company; (Hedge) Website of the investment advisor" }
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.PortfolioFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","ANNUAL","MONTHLY","QUARTERLY"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.ManagerTitle",
    "type": "enum",
    "symbols": ["DEFAULT","FUND_MANAGER","LEAD_MANAGER","CO_MANAGER","TEAM_MEMBER"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.Manager",
    "fields": [
        { "name": "portfolioManagerTitle", "type": "com.bloomberg.ds.OpenFigiFunds.ManagerTitle","doc": "Indicates the title of the managing member" },
        { "name": "firstName", "type": "string","doc": "Indicates the first name of the managing member" },
        { "name": "middleName", "type": [ "null","string"],"doc": "Indicates the middle name of the managing member" },
        { "name": "lastName", "type": "string","doc": "Indicates the last name of the managing member" },
        { "name": "lastNameSuffix", "type": [ "null","string"],"doc": "Indicates the suffix of the last name of the managing member" },
        { "name": "startDateAtFund", "type": "com.bloomberg.Date","doc": "Indicates the start date of the managing member" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.Name",
    "fields": [
        { "name": "managers", "type": { "type": "array", "items": "com.bloomberg.ds.OpenFigiFunds.Manager"},"doc": "" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.TeamManaged",
    "fields": [
        { "name": "managers", "type": { "type": "array", "items": "com.bloomberg.ds.OpenFigiFunds.Manager"},"doc": "" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.WillNotDisclose",
    "fields": [
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.PortfolioManagement",
    "fields": [
        { "name": "portfolioFrequency", "type": [ "null","com.bloomberg.ds.OpenFigiFunds.PortfolioFrequency"],"doc": "Indicates how often the portfolio is made available. This only applies to Open-End or Closed-End funds" },
        { "name": "portfolioManager", "type": [ "com.bloomberg.Default","com.bloomberg.ds.OpenFigiFunds.Name","com.bloomberg.ds.OpenFigiFunds.TeamManaged","com.bloomberg.ds.OpenFigiFunds.WillNotDisclose"],"doc": "Indicates the type of management structure" }
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.InvestorShareClass",
    "type": "enum",
    "symbols": ["DEFAULT","INSTITUTIONAL","RETAIL"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.PaymentShareClass",
    "type": "enum",
    "symbols": ["DEFAULT","ACCUMULATION","INCOME"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.ValuationFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","DAILY","WEEKLY","BIMONTHLY","MONTHLY","QUARTERLY"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.DividendFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","ANNUAL","SEMI_ANNUAL","THREE_TIMES_PER_YEAR","QUARTERLY","BIMONTHLY","MONTHLY","DAILY","IRREGULAR"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.SecurityIdentifierType",
    "type": "enum",
    "symbols": ["DEFAULT","ISIN","SEDOL","FMQ_SEDOL","WKN","VALOREN","MEXID","CUSIP_OR_CINS","LOCAL_ID_NUMBER_COUNTRY","LOCAL_ID_NUMBER"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.SecurityIdentifier",
    "fields": [
        { "name": "identifierType", "type": "com.bloomberg.ds.OpenFigiFunds.SecurityIdentifierType","doc": "Pick one of the following identifier types:  ISIN:  A twelve-character number assigned by the local national numbering agency. The International Securities Identification Number (ISIN) consists of a two-letter country code, followed by the nine character alphanumerical national security identifier, and a check digit. SEDOL:  Stock Exchange Daily Official List number (SEDOL) issued by the London Stock Exchange to identify foreign stocks.  SEDOL numbers issued prior to March 8, 2004 consist of seven digits. SEDOLs issued after this date consist of seven alphanumeric characters, where the first character is always a letter. FMQ SEDOL:  The Stock Exchange Daily Official List number, SEDOL representing the Fund Manager Quote. WKN:  The German identification number - Wertpapier Kenn-Nummer is a six digit alphanumeric number. VALOREN:  The official Swiss Identification number consisting of nine digits. CUSIP/CINS:  A 9 digit alpha-numeric identifier assigned by CUSIP International Numbering Service. The first six positions, known as the issuer number, consist of a country or regional alpha code of one character, plus five positions, the last of which may be alpha or numeric. A two-character suffix (either numeric or alphabetic or both) known as the issue number follows. The ninth character is a check digit. Local ID Number Country:  Local identification number for a company. Used for the Irish Coding sedol, Austria, and Japan traded funds. Local ID Number:  Local identification number for a company. Used for the Irish Coding sedol, Austria, and Japan traded funds." },
        { "name": "identiferText", "type": "string","doc": "The actual identifier that corresponds to the Identifer Type listed." }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.OpenEndShareClass",
    "fields": [
        { "name": "doYouWantToRequestATicker", "type": [ "null","boolean"],"doc": "Would you like to request a ticker?" },
        { "name": "requestedTicker", "type": [ "null","string"],"doc": "Ticker that is being requested" },
        { "name": "minimumInvestment", "type": [ "null","double"],"doc": "The least amount needed to open an account" },
        { "name": "minimumSubsequentInvestment", "type": [ "null","double"],"doc": "The incremental amount of money to invest after the initial investment in the fund" },
        { "name": "minimumInvestmentCurrency", "type": [ "null","string"],"doc": "The currency of the minimum investment amount" },
        { "name": "baseManagementFeePercent", "type": [ "null","double"],"doc": "This is the current base management fee that the management company charges annually for its services" },
        { "name": "managementPerformanceFeePercent", "type": [ "null","double"],"doc": "This field displays a percentage fee (net assets) that the management company charges for exceeding an established performance benchmark" },
        { "name": "frontEndLoad", "type": [ "null","double"],"doc": "This is a current fee charged for the purchase of fund shares displayed on a securities description page" },
        { "name": "redemptionChargePercent", "type": [ "null","double"],"doc": "This is a current fee charged for the redemption of fund shares displayed on a securities description page" },
        { "name": "earlyWithdrawChargePercent", "type": [ "null","double"],"doc": "This is a fee paid to the fund for early withdraw from the fund" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.ClosedEndShareClass",
    "fields": [
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.HedgeFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","DAILY","MONTHLY","QUARTERLY","SEMI_ANNUAL","ANNUAL","WEEKLY","SEMI_MONTHLY"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.HedgeSchedule",
    "type": "enum",
    "symbols": ["DEFAULT","DAYS","MONTHS","YEARS"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.HedgeShareClass",
    "fields": [
        { "name": "doYouWantToRequestATicker", "type": [ "null","boolean"],"doc": "Would you like to request a ticker?" },
        { "name": "requestedTicker", "type": [ "null","string"],"doc": "Ticker that is being requested" },
        { "name": "minimumInvestment", "type": [ "null","double"],"doc": "The least amount needed to open an account" },
        { "name": "minimumSubsequentInvestment", "type": [ "null","double"],"doc": "The incremental amount of money to invest after the initial investment in the fund" },
        { "name": "minimumInvestmentCurrency", "type": [ "null","string"],"doc": "The currency of the minimum investment amount" },
        { "name": "baseManagementFeePercent", "type": [ "null","double"],"doc": "This is the current base management fee that the management company charges annually for its services" },
        { "name": "managementPerformanceFeePercent", "type": [ "null","double"],"doc": "This field displays a percentage fee (net assets) that the management company charges for exceeding an established performance benchmark" },
        { "name": "highWaterMark", "type": [ "null","boolean"],"doc": "Indicates if the fund must make up any previous losses in performance before being permitted to charge a performance fee" },
        { "name": "hurdleRatePercent", "type": [ "null","double"],"doc": "The stated return a fund must achieve before it can charge a performance fee. It is a percentage based number" },
        { "name": "placementFeePercent", "type": [ "null","double"],"doc": "Fee paid by fund to broker/dealer to generate a predetermined amount of fund investment" },
        { "name": "subscriptionFrequency", "type": "com.bloomberg.ds.OpenFigiFunds.HedgeFrequency","doc": "Stated periods that the fund will allow subscriptions" },
        { "name": "redemptionFrequency", "type": "com.bloomberg.ds.OpenFigiFunds.HedgeFrequency","doc": "Stated periods that the fund will allow redemptions" },
        { "name": "priorNoticeForRedemption", "type": "double","doc": "Number of days in advance of a redemption date that investors must notify a fund of their intent to withdraw some or all of their investment" },
        { "name": "lockUpPeriod", "type": "double","doc": "This is the designated period of time that the fund prohibits redemptions after the shareholders initial investment.  The lockup period may be expressed in days, months, or years" },
        { "name": "lockUpType", "type": "com.bloomberg.ds.OpenFigiFunds.HedgeSchedule","doc": "This is the designated period of time that the fund prohibits redemptions after the shareholders initial investment.  The lockup period may be expressed in days, months, or years" },
        { "name": "performanceFeeFrequency", "type": "com.bloomberg.ds.OpenFigiFunds.HedgeFrequency","doc": "Interval at which a fund charges its performance fee" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.ShareClass",
    "fields": [
        { "name": "shareClassName", "type": [ "null","string"],"doc": "Share class designation" },
        { "name": "shareClassCurrency", "type": "string","doc": "The currency designation of the share class" },
        { "name": "investorShareClass", "type": "com.bloomberg.ds.OpenFigiFunds.InvestorShareClass","doc": "Identifies the type of investor that will be allowed to invest in the fund" },
        { "name": "paymentShareClass", "type": "com.bloomberg.ds.OpenFigiFunds.PaymentShareClass","doc": "Identifies how distributions are treated by a fund" },
        { "name": "valuationFrequency", "type": "com.bloomberg.ds.OpenFigiFunds.ValuationFrequency","doc": "The frequency of valuation" },
        { "name": "dividendFrequency", "type": [ "null","com.bloomberg.ds.OpenFigiFunds.DividendFrequency"],"doc": "The frequency of distrubutions" },
        { "name": "pricingCurrency", "type": "string","doc": "The currency of the share class" },
        { "name": "closedToNewInvestors", "type": "boolean","doc": "Indicates if the fund is closed to new investors" },
        { "name": "launchDateOrFirstNavDate", "type": "com.bloomberg.Date","doc": "The start date of the fund.  It usually occurs after the initial subscription period.  It is the first business day the fund will price" },
        { "name": "launchPriceOrInitialValue", "type": "double","doc": "Base amount of a single share on the first day of trading. Does not include front-end load" },
        { "name": "initialValueCurrency", "type": "string","doc": "Currency of the base amount of a single share on the first day of trading. Does not include front-end load" },
        { "name": "securityIdentifier", "type": { "type": "array", "items": "com.bloomberg.ds.OpenFigiFunds.SecurityIdentifier"},"doc": "" },
        { "name": "shareClassType", "type": [ "com.bloomberg.Default","com.bloomberg.ds.OpenFigiFunds.OpenEndShareClass","com.bloomberg.ds.OpenFigiFunds.ClosedEndShareClass","com.bloomberg.ds.OpenFigiFunds.HedgeShareClass"],"doc": "The type of the fund being submitted" }
    ]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.StatusEnum",
    "type": "enum",
    "symbols": ["DEFAULT","STAGED","NOT_PROCESSED","ACCEPT","REJECT","DUPLICATE"]
}, {
    "name": "com.bloomberg.ds.OpenFigiFunds.AttachmentStatusEnum",
    "type": "enum",
    "symbols": ["DEFAULT","NO_UPLOAD","UPLOAD_PENDING","UPLOAD_COMPLETED"]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.AuditRecord",
    "fields": [
        { "name": "username", "type": [ "null","string"],"doc": "The username of the institutional account that submitted this form." },
        { "name": "submissionTime", "type": [ "null","string"],"doc": "The date and time of the username's submission, in ISO 8601 string format, in UTC timezone." },
        { "name": "submissionId", "type": [ "null","string"],"doc": "The submission ID of this submission in the OpenFIGI database. A tracking number of sorts." },
        { "name": "email", "type": [ "null","string"],"doc": "The e-mail address of the person who submitted this form." },
        { "name": "status", "type": "com.bloomberg.ds.OpenFigiFunds.StatusEnum","doc": "The status of the application, as determined internally.","default": "NOT_PROCESSED" },
        { "name": "attachmentStatus", "type": "com.bloomberg.ds.OpenFigiFunds.AttachmentStatusEnum","doc": "The status of the attachments for this submission.","default": "NO_UPLOAD" },
        { "name": "attachmentLinkArray", "type": [ "null",{ "type": "array", "items": "string"}],"doc": "Array of strings, where each string is the link for where to find the attachment(s) associated with this payload." },
        { "name": "bundleId", "type": [ "null","string"],"doc": "In the case of a bundle of results (typically for a parent-child relationship), this is an ID to combine them together." },
        { "name": "bundleCount", "type": [ "null","string"],"doc": "In the case of a bundle of results (typically for a parent-child relationship), this is a count of how many should be bundled together." }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds.Data",
    "fields": [
        { "name": "generalInformation", "type": "com.bloomberg.ds.OpenFigiFunds.GeneralInformation" },
        { "name": "fundInformation", "type": "com.bloomberg.ds.OpenFigiFunds.FundInformation" },
        { "name": "companyInformation", "type": "com.bloomberg.ds.OpenFigiFunds.CompanyInformation","doc": "The Management Company, or the Investment Company (If this is a Hedge Fund)" },
        { "name": "portfolioManagement", "type": "com.bloomberg.ds.OpenFigiFunds.PortfolioManagement" },
        { "name": "shareClass", "type": "com.bloomberg.ds.OpenFigiFunds.ShareClass" },
        { "name": "auditField", "type": "com.bloomberg.ds.OpenFigiFunds.AuditRecord","internal": "true" }
    ]
}, {
    "type": "record",
    "name": "com.bloomberg.ds.OpenFigiFunds",
    "fields": [
        { "name": "key", "type": "com.bloomberg.ds.OpenFigiFunds.Key" },
        { "name": "data", "type": "com.bloomberg.ds.OpenFigiFunds.Data" },
        { "name": "metadata", "type": { "type": "map", "values": "string"} },
        { "name": "version", "type": "com.bloomberg.SchemaVersion" }
    ]
}]
