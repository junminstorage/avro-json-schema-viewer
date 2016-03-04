var fund = [{
    "type": "record",
    "name": "com.xyz.ds.funs.Key", 
    "fields": [
        { "name": "figi", "type": "com.xyz.Figi" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.Contact",
    "fields": [
        { "name": "firstName", "type": "string","doc": "First name of the contact" },
        { "name": "lastName", "type": "string","doc": "Last name of the contact" },
        { "name": "phoneNumber", "type": "string","doc": "Phone number of the contact" },
        { "name": "email", "type": "string","doc": "Email address of the contact" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.NewPricingSource",
    "fields": [
        { "name": "didYouSendATestEmailToxyz", "type": "boolean","doc": "Did you send a test pricing email to fundpricing@xyz.net?" },
        { "name": "senderEmailAddress", "type": "string","doc": "Sender's email address" },
        { "name": "subjectLineOfPricingFile", "type": "string","doc": "Subject line of the pricing file" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.ExistingPricingSource",
    "fields": [
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.PricingInfo",
    "fields": [
        { "name": "xyzPricingContact", "type": [ "null","string"],"doc": "Your contact on xyz's Data Team" },
        { "name": "isThisANewPricingSource", "type": [ "com.xyz.Default","com.xyz.ds.funs.NewPricingSource","com.xyz.ds.funs.ExistingPricingSource"],"doc": "Is this a new pricing source?" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.GeneralInformation",
    "fields": [
        { "name": "documentContact", "type": "com.xyz.ds.funs.Contact","doc": "Contact for specified type of fund data - Documents" },
        { "name": "pricingAndAssetsContact", "type": "com.xyz.ds.funs.Contact","doc": "Contact for specified type of fund data - Pricing and Assets" },
        { "name": "dividendsContact", "type": [ "null","com.xyz.ds.funs.Contact"],"doc": "Contact for specified type of fund data - Dividends" },
        { "name": "portfolioHoldingsContact", "type": "com.xyz.ds.funs.Contact","doc": "Contact for specified type of fund data - Portfolio Holdings" },
        { "name": "pricingInfo", "type": "com.xyz.ds.funs.PricingInfo","doc": "" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.ExistingFund",
    "fields": [
        { "name": "existingFigiOrTicker", "type": "string","doc": "What is the existing FIGI identifier or ticker id for that share class?" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.NoExistingFund",
    "fields": [
    ]
}, {
    "name": "com.xyz.ds.funs.OpenSubType",
    "type": "enum",
    "symbols": ["DEFAULT","FUND_OF_FUNDS","SICAV","UNIT_TRUST","FCP","OPEN_END_FUND","OEIC","OPEN_END_PENSION"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.OpenEndFund",
    "fields": [
        { "name": "subType", "type": "com.xyz.ds.funs.OpenSubType","doc": "The sub-type of fund being submitted" }
    ]
}, {
    "name": "com.xyz.ds.funs.ClosedSubType",
    "type": "enum",
    "symbols": ["DEFAULT","SICAF","TRUST_UNITS","INVESTMENT_TRUST","CLOSED_END_FUND","CLOSED_END_PENSION"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.ClosedEndFund",
    "fields": [
        { "name": "subType", "type": "com.xyz.ds.funs.ClosedSubType","doc": "The sub-type of fund being submitted" }
    ]
}, {
    "name": "com.xyz.ds.funs.HedgeSubType",
    "type": "enum",
    "symbols": ["DEFAULT","HEDGE_FUND","FUND_OF_HEDGE_FUNDS"]
}, {
    "name": "com.xyz.ds.funs.FiscalMonth",
    "type": "enum",
    "symbols": ["DEFAULT","JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.HedgeFund",
    "fields": [
        { "name": "subType", "type": "com.xyz.ds.funs.HedgeSubType","doc": "The sub-type of the fund being submitted" },
        { "name": "fiscalMonth", "type": "com.xyz.ds.funs.FiscalMonth","doc": "This month signifies the end of the year for the Fund" },
        { "name": "administrator", "type": "string","doc": "The administrator handles the funds filings as well as preparing information supplied to the board of directors" },
        { "name": "auditorLong", "type": "string","doc": " Professional examination and verification of a company's accounting documents and supporting data for the purpose of rendering an opinion as to their fairness, consistency and conformity with generally accepted accounting principles" },
        { "name": "custodian", "type": "string","doc": "The custodians service includes the maintenance of a separate account(s) in the name of the fund, issuance of receipts and income, and the settlement of security transactions and the safekeeping of fund securities" },
        { "name": "primeBroker", "type": "string","doc": "This is the service company that generally provides stock loan, enhanced leverage, customized reporting and back-end communication tools" },
        { "name": "legalCounsel", "type": "string","doc": "Lawyer or legal department in a company that advises the company's management, including the board of directors and chief executive officer" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.FundInformation",
    "fields": [
        { "name": "fundName", "type": "string","doc": "The official name of the fund (do not include the share class)" },
        { "name": "fundAssetCurrency", "type": "string","doc": "The currency of the Total Assets of the fund" },
        { "name": "isThereAnExistingShareClass", "type": [ "com.xyz.Default","com.xyz.ds.funs.ExistingFund","com.xyz.ds.funs.NoExistingFund"],"doc": "Is there an existing share class with a registered FIGI?" },
        { "name": "countryOfDomicile", "type": "string","doc": "The country where the fund is domiciled" },
        { "name": "isFundListedOnCannex", "type": "boolean","doc": "Is this fund listed on Cannex? This applies only if it's an Open-End Fund and the country of domicile is Canada" },
        { "name": "ucitsCompliant", "type": "boolean","doc": "Indicates if the fund is UCITS compliant" },
        { "name": "benchmark", "type": [ "null","string"],"doc": "Indicates the primary benchmark of the fund (xyz ticker or descriptive text)" },
        { "name": "fundType", "type": [ "com.xyz.Default","com.xyz.ds.funs.OpenEndFund","com.xyz.ds.funs.ClosedEndFund","com.xyz.ds.funs.HedgeFund"],"doc": "The type of the fund being submitted" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.CompanyInformation",
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
    "name": "com.xyz.ds.funs.PortfolioFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","ANNUAL","MONTHLY","QUARTERLY"]
}, {
    "name": "com.xyz.ds.funs.ManagerTitle",
    "type": "enum",
    "symbols": ["DEFAULT","FUND_MANAGER","LEAD_MANAGER","CO_MANAGER","TEAM_MEMBER"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.Manager",
    "fields": [
        { "name": "portfolioManagerTitle", "type": "com.xyz.ds.funs.ManagerTitle","doc": "Indicates the title of the managing member" },
        { "name": "firstName", "type": "string","doc": "Indicates the first name of the managing member" },
        { "name": "middleName", "type": [ "null","string"],"doc": "Indicates the middle name of the managing member" },
        { "name": "lastName", "type": "string","doc": "Indicates the last name of the managing member" },
        { "name": "lastNameSuffix", "type": [ "null","string"],"doc": "Indicates the suffix of the last name of the managing member" },
        { "name": "startDateAtFund", "type": "com.xyz.Date","doc": "Indicates the start date of the managing member" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.Name",
    "fields": [
        { "name": "managers", "type": { "type": "array", "items": "com.xyz.ds.funs.Manager"},"doc": "" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.TeamManaged",
    "fields": [
        { "name": "managers", "type": { "type": "array", "items": "com.xyz.ds.funs.Manager"},"doc": "" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.WillNotDisclose",
    "fields": [
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.PortfolioManagement",
    "fields": [
        { "name": "portfolioFrequency", "type": [ "null","com.xyz.ds.funs.PortfolioFrequency"],"doc": "Indicates how often the portfolio is made available. This only applies to Open-End or Closed-End funds" },
        { "name": "portfolioManager", "type": [ "com.xyz.Default","com.xyz.ds.funs.Name","com.xyz.ds.funs.TeamManaged","com.xyz.ds.funs.WillNotDisclose"],"doc": "Indicates the type of management structure" }
    ]
}, {
    "name": "com.xyz.ds.funs.InvestorShareClass",
    "type": "enum",
    "symbols": ["DEFAULT","INSTITUTIONAL","RETAIL"]
}, {
    "name": "com.xyz.ds.funs.PaymentShareClass",
    "type": "enum",
    "symbols": ["DEFAULT","ACCUMULATION","INCOME"]
}, {
    "name": "com.xyz.ds.funs.ValuationFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","DAILY","WEEKLY","BIMONTHLY","MONTHLY","QUARTERLY"]
}, {
    "name": "com.xyz.ds.funs.DividendFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","ANNUAL","SEMI_ANNUAL","THREE_TIMES_PER_YEAR","QUARTERLY","BIMONTHLY","MONTHLY","DAILY","IRREGULAR"]
}, {
    "name": "com.xyz.ds.funs.SecurityIdentifierType",
    "type": "enum",
    "symbols": ["DEFAULT","ISIN","SEDOL","FMQ_SEDOL","WKN","VALOREN","MEXID","CUSIP_OR_CINS","LOCAL_ID_NUMBER_COUNTRY","LOCAL_ID_NUMBER"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.SecurityIdentifier",
    "fields": [
        { "name": "identifierType", "type": "com.xyz.ds.funs.SecurityIdentifierType","doc": "Pick one of the following identifier types:  ISIN:  A twelve-character number assigned by the local national numbering agency. The International Securities Identification Number (ISIN) consists of a two-letter country code, followed by the nine character alphanumerical national security identifier, and a check digit. SEDOL:  Stock Exchange Daily Official List number (SEDOL) issued by the London Stock Exchange to identify foreign stocks.  SEDOL numbers issued prior to March 8, 2004 consist of seven digits. SEDOLs issued after this date consist of seven alphanumeric characters, where the first character is always a letter. FMQ SEDOL:  The Stock Exchange Daily Official List number, SEDOL representing the Fund Manager Quote. WKN:  The German identification number - Wertpapier Kenn-Nummer is a six digit alphanumeric number. VALOREN:  The official Swiss Identification number consisting of nine digits. CUSIP/CINS:  A 9 digit alpha-numeric identifier assigned by CUSIP International Numbering Service. The first six positions, known as the issuer number, consist of a country or regional alpha code of one character, plus five positions, the last of which may be alpha or numeric. A two-character suffix (either numeric or alphabetic or both) known as the issue number follows. The ninth character is a check digit. Local ID Number Country:  Local identification number for a company. Used for the Irish Coding sedol, Austria, and Japan traded funds. Local ID Number:  Local identification number for a company. Used for the Irish Coding sedol, Austria, and Japan traded funds." },
        { "name": "identiferText", "type": "string","doc": "The actual identifier that corresponds to the Identifer Type listed." }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.OpenEndShareClass",
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
    "name": "com.xyz.ds.funs.ClosedEndShareClass",
    "fields": [
    ]
}, {
    "name": "com.xyz.ds.funs.HedgeFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","DAILY","MONTHLY","QUARTERLY","SEMI_ANNUAL","ANNUAL","WEEKLY","SEMI_MONTHLY"]
}, {
    "name": "com.xyz.ds.funs.HedgeSchedule",
    "type": "enum",
    "symbols": ["DEFAULT","DAYS","MONTHS","YEARS"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.HedgeShareClass",
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
        { "name": "subscriptionFrequency", "type": "com.xyz.ds.funs.HedgeFrequency","doc": "Stated periods that the fund will allow subscriptions" },
        { "name": "redemptionFrequency", "type": "com.xyz.ds.funs.HedgeFrequency","doc": "Stated periods that the fund will allow redemptions" },
        { "name": "priorNoticeForRedemption", "type": "double","doc": "Number of days in advance of a redemption date that investors must notify a fund of their intent to withdraw some or all of their investment" },
        { "name": "lockUpPeriod", "type": "double","doc": "This is the designated period of time that the fund prohibits redemptions after the shareholders initial investment.  The lockup period may be expressed in days, months, or years" },
        { "name": "lockUpType", "type": "com.xyz.ds.funs.HedgeSchedule","doc": "This is the designated period of time that the fund prohibits redemptions after the shareholders initial investment.  The lockup period may be expressed in days, months, or years" },
        { "name": "performanceFeeFrequency", "type": "com.xyz.ds.funs.HedgeFrequency","doc": "Interval at which a fund charges its performance fee" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.ShareClass",
    "fields": [
        { "name": "shareClassName", "type": [ "null","string"],"doc": "Share class designation" },
        { "name": "shareClassCurrency", "type": "string","doc": "The currency designation of the share class" },
        { "name": "investorShareClass", "type": "com.xyz.ds.funs.InvestorShareClass","doc": "Identifies the type of investor that will be allowed to invest in the fund" },
        { "name": "paymentShareClass", "type": "com.xyz.ds.funs.PaymentShareClass","doc": "Identifies how distributions are treated by a fund" },
        { "name": "valuationFrequency", "type": "com.xyz.ds.funs.ValuationFrequency","doc": "The frequency of valuation" },
        { "name": "dividendFrequency", "type": [ "null","com.xyz.ds.funs.DividendFrequency"],"doc": "The frequency of distrubutions" },
        { "name": "pricingCurrency", "type": "string","doc": "The currency of the share class" },
        { "name": "closedToNewInvestors", "type": "boolean","doc": "Indicates if the fund is closed to new investors" },
        { "name": "launchDateOrFirstNavDate", "type": "com.xyz.Date","doc": "The start date of the fund.  It usually occurs after the initial subscription period.  It is the first business day the fund will price" },
        { "name": "launchPriceOrInitialValue", "type": "double","doc": "Base amount of a single share on the first day of trading. Does not include front-end load" },
        { "name": "initialValueCurrency", "type": "string","doc": "Currency of the base amount of a single share on the first day of trading. Does not include front-end load" },
        { "name": "securityIdentifier", "type": { "type": "array", "items": "com.xyz.ds.funs.SecurityIdentifier"},"doc": "" },
        { "name": "shareClassType", "type": [ "com.xyz.Default","com.xyz.ds.funs.OpenEndShareClass","com.xyz.ds.funs.ClosedEndShareClass","com.xyz.ds.funs.HedgeShareClass"],"doc": "The type of the fund being submitted" }
    ]
}, {
    "name": "com.xyz.ds.funs.StatusEnum",
    "type": "enum",
    "symbols": ["DEFAULT","STAGED","NOT_PROCESSED","ACCEPT","REJECT","DUPLICATE"]
}, {
    "name": "com.xyz.ds.funs.AttachmentStatusEnum",
    "type": "enum",
    "symbols": ["DEFAULT","NO_UPLOAD","UPLOAD_PENDING","UPLOAD_COMPLETED"]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.AuditRecord",
    "fields": [
        { "name": "username", "type": [ "null","string"],"doc": "The username of the institutional account that submitted this form." },
        { "name": "submissionTime", "type": [ "null","string"],"doc": "The date and time of the username's submission, in ISO 8601 string format, in UTC timezone." },
        { "name": "submissionId", "type": [ "null","string"],"doc": "The submission ID of this submission in the OpenFIGI database. A tracking number of sorts." },
        { "name": "email", "type": [ "null","string"],"doc": "The e-mail address of the person who submitted this form." },
        { "name": "status", "type": "com.xyz.ds.funs.StatusEnum","doc": "The status of the application, as determined internally.","default": "NOT_PROCESSED" },
        { "name": "attachmentStatus", "type": "com.xyz.ds.funs.AttachmentStatusEnum","doc": "The status of the attachments for this submission.","default": "NO_UPLOAD" },
        { "name": "attachmentLinkArray", "type": [ "null",{ "type": "array", "items": "string"}],"doc": "Array of strings, where each string is the link for where to find the attachment(s) associated with this payload." },
        { "name": "bundleId", "type": [ "null","string"],"doc": "In the case of a bundle of results (typically for a parent-child relationship), this is an ID to combine them together." },
        { "name": "bundleCount", "type": [ "null","string"],"doc": "In the case of a bundle of results (typically for a parent-child relationship), this is a count of how many should be bundled together." }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs.Data",
    "fields": [
        { "name": "generalInformation", "type": "com.xyz.ds.funs.GeneralInformation" },
        { "name": "fundInformation", "type": "com.xyz.ds.funs.FundInformation" },
        { "name": "companyInformation", "type": "com.xyz.ds.funs.CompanyInformation","doc": "The Management Company, or the Investment Company (If this is a Hedge Fund)" },
        { "name": "portfolioManagement", "type": "com.xyz.ds.funs.PortfolioManagement" },
        { "name": "shareClass", "type": "com.xyz.ds.funs.ShareClass" },
        { "name": "auditField", "type": "com.xyz.ds.funs.AuditRecord","internal": "true" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.funs",
    "fields": [
        { "name": "key", "type": "com.xyz.ds.funs.Key" },
        { "name": "data", "type": "com.xyz.ds.funs.Data" },
        { "name": "metadata", "type": { "type": "map", "values": "string"} },
        { "name": "version", "type": "com.xyz.SchemaVersion" }
    ]
}]