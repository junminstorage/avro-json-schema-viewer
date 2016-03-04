var swan = [{
    "type": "record",
    "name": "com.xyz.ds.swan.Key", 
    "fields": [
        { "name": "figi", "type": "com.xyz.Figi" }
    ]
}, {
    "name": "com.xyz.ds.swan.Currency",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","USD","EUR","AED","ARS","ATS","AUD","BDT","BEF","BGN","BHD","BRL","BWP","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CYP","CZK","DEM","DKK","DOP","EEK","EGP","ESP","FIM","FRF","GBP","GHS","GRD","HKD","HRK","HUF","IDR","IEP","ILS","INR","IQD","ISK","ITL","JMD","JOD","JPY","KES","KPW","KRW","KWD","KZT","LBP","LKR","LTL","LUF","LVL","MAD","MTL","MUR","MWK","MXN","MYR","NGN","NLG","NOK","NZD","OMR","PEN","PHP","PKR","PLN","PTE","QAR","ROL","RON","RSD","RUB","SAR","SEK","SGD","SIT","SKK","SYP","THB","TJS","TRL","TRY","TWD","TZS","UAH","UGX","UYU","VEB","VND","XAF","XAU","XEU","XGD","ZAR","ZMK","ZMW"],
    "doc": "Underlying currency of instrument"
}, {
    "name": "com.xyz.ds.swan.SettlementDays",
    "type": "enum",
    "symbols": ["DEFAULT","T_PLUS_0","T_PLUS_1","T_PLUS_2","T_PLUS_3","T_PLUS_4"],
    "doc": "The date by which an executed security trade must be settled. That is, the date by which a buyer must pay for the securities delivered by the seller"
}, {
    "name": "com.xyz.ds.swan.SettlementUnit",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","DAYS"],
    "doc": "What form the settlement is in"
}, {
    "name": "com.xyz.ds.swan.QuoteUnit",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","BP","PERCENT","BPA","BPD","UPFRONT_AMOUNT"],
    "doc": "Method in which returns on swap are quoted"
}, {
    "name": "com.xyz.ds.swan.DiscountMethod",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","OIS","LIBOR"],
    "doc": "Approach in which a bond (called discount bond) is sold at a discount on its par value in lieu of paying interest"
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.BasicsCollateral",
    "fields": [
        { "name": "currency", "type": "com.xyz.ds.swan.Currency","doc": "Underlying currency of instrument","default": "NOT_APPLICABLE" },
        { "name": "collateralCurrency", "type": [ "null","com.xyz.ds.swan.Currency"],"doc": "Delivery Currency of Instrument" },
        { "name": "settlementDays", "type": "com.xyz.ds.swan.SettlementDays","doc": "The date by which an executed security trade must be settled. That is, the date by which a buyer must pay for the securities delivered by the seller","default": "T_PLUS_2" },
        { "name": "settleUnit", "type": "com.xyz.ds.swan.SettlementUnit","doc": "What form the settlement is in","default": "DAYS" },
        { "name": "quoteUnit", "type": "com.xyz.ds.swan.QuoteUnit","doc": "Method in which returns on swap are quoted","default": "PERCENT" },
        { "name": "discountMethod", "type": "com.xyz.ds.swan.DiscountMethod","doc": "Approach in which a bond (called discount bond) is sold at a discount on its par value in lieu of paying interest","default": "OIS" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.LegFixed",
    "fields": [
    ]
}, {
    "name": "com.xyz.ds.swan.Frequency",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","SEMI_ANNUAL","ZERO","DAILY","WEEKLY","MONTHLY","QUARTERLY","YEARLY"]
}, {
    "name": "com.xyz.ds.swan.IdType",
    "type": "enum",
    "symbols": ["DEFAULT","BB_TKR_AND_YKEY","FIGI","ISIN","EXCHANGE_SYMBOL","SEDOL","CINS"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.LegFloat",
    "fields": [
        { "name": "resetFrequency", "type": "com.xyz.ds.swan.Frequency","doc": "How often the floating leg of a swap resets during life of contract","default": "SEMI_ANNUAL" },
        { "name": "referenceSecurityId", "type": "string","doc": "The actual identifier (of the format reference Id Type specified)" },
        { "name": "referenceIdType", "type": "com.xyz.ds.swan.IdType","doc": "The type of reference identifier","default": "FIGI" }
    ]
}, {
    "name": "com.xyz.ds.swan.DayCount",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","EOM_ACT_ACT","EOM_ACT_360","EOM_ACT_365","EOM_30_ACT","EOM_30_360","EOM_30_365","EOM_NL_ACT","EOM_NL_360","EOM_NL_365","EOM_30E_ACT_ISMA","EOM_30E_360_ISMA","EOM_30E_365_ISMA","E0M_ACT_ACT_ISMA","EOM_30I_360","EOM_30I_365","EOM_30I_ACT","EOM_30U_360","EOM_30U_365","EOM_30U_ACT","EOM_ACT_ACT_ISDA","EOM_ACT_360_ISDA","EOM_ACT_365_ISDA","EOM_DU_252"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Leg",
    "fields": [
        { "name": "style", "type": [ "com.xyz.Default","com.xyz.ds.swan.LegFixed","com.xyz.ds.swan.LegFloat"],"doc": "Choose the style of the leg for the swap" },
        { "name": "currency", "type": "com.xyz.ds.swan.Currency","doc": "Underlying currency of instrument","default": "NOT_APPLICABLE" },
        { "name": "dayCount", "type": "com.xyz.ds.swan.DayCount","doc": "Determines how interest accrues over time","default": "NOT_APPLICABLE" },
        { "name": "paymentFrequency", "type": "com.xyz.ds.swan.Frequency","doc": "How often borrower will pay on loan","default": "SEMI_ANNUAL" }
    ]
}, {
    "name": "com.xyz.ds.swan.MaturityTenorUnit",
    "type": "enum",
    "symbols": ["DEFAULT","YEAR","DAY","WEEK","MONTH","IMM"]
}, {
    "name": "com.xyz.ds.swan.ForwardStartTermUnit",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","MONTH","DAY","WEEK","YEAR","IMM"],
    "doc": "What unit of time the forward contract is quoted in"
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.ForwardTermType",
    "fields": [
        { "name": "forwardStartTermValue", "type": "int","doc": "Numerical value of forward start contract" },
        { "name": "forwardStartTermUnit", "type": "com.xyz.ds.swan.ForwardStartTermUnit","doc": "What unit of time the forward contract is quoted in" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Maturity",
    "fields": [
        { "name": "maturityTenorValue", "type": "int","doc": "The value of the maturation tenor of contract","default": 0 },
        { "name": "maturityTenorUnit", "type": "com.xyz.ds.swan.MaturityTenorUnit","doc": "Which unit of time the maturation of the contract is quoted in","default": "YEAR" },
        { "name": "forwardStartTerms", "type": [ "null","com.xyz.ds.swan.ForwardTermType"],"doc": "Forward term details" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FixedFloatSubTypeVanilla",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" },
        { "name": "terms", "type": "com.xyz.ds.swan.Maturity","doc": "Maturity and Forward terms" }
    ]
}, {
    "name": "com.xyz.ds.swan.Shore",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","ON_SHORE","NDS","NDIRS"],
    "doc": "Does this swap settle on shore or off shore?"
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.BasicsNonDeliverable",
    "fields": [
        { "name": "shore", "type": "com.xyz.ds.swan.Shore","doc": "Does this swap settle on shore or off shore?","default": "NDIRS" },
        { "name": "currency", "type": "com.xyz.ds.swan.Currency","doc": "Underlying currency of instrument","default": "NOT_APPLICABLE" },
        { "name": "deliveryCurrency", "type": "com.xyz.ds.swan.Currency","doc": "Currency that swap will be delivered in for onshore/offshore swaps","default": "NOT_APPLICABLE" },
        { "name": "settlementDays", "type": "com.xyz.ds.swan.SettlementDays","doc": "The date by which an executed security trade must be settled. That is, the date by which a buyer must pay for the securities delivered by the seller","default": "T_PLUS_2" },
        { "name": "settleUnit", "type": "com.xyz.ds.swan.SettlementUnit","doc": "What form the settlement is in","default": "DAYS" },
        { "name": "quoteUnit", "type": "com.xyz.ds.swan.QuoteUnit","doc": "Method in which returns on swap are quoted","default": "PERCENT" },
        { "name": "discountMethod", "type": "com.xyz.ds.swan.DiscountMethod","doc": "Approach in which a bond (called discount bond) is sold at a discount on its par value in lieu of paying interest","default": "OIS" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" },
        { "name": "terms", "type": "com.xyz.ds.swan.Maturity","doc": "Maturity and Forward terms" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FixedFloatSubTypeNdIrs",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsNonDeliverable","doc": "Basic information needed for the swap" }
    ]
}, {
    "name": "com.xyz.ds.swan.LagUnit",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","MONTHS","DAYS"]
}, {
    "name": "com.xyz.ds.swan.Interpolation",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","DAILY","MONTHLY"]
}, {
    "name": "com.xyz.ds.swan.InflationType",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","YOY","ZERO_CPN"]
}, {
    "name": "com.xyz.ds.swan.CompoundFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","SEMI_ANNUAL","DAILY","WEEKLY","MONTHLY","QUARTERLY","ANNUAL"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Inflation",
    "fields": [
        { "name": "lag", "type": "int","doc": "The lag for the price indices","default": 0 },
        { "name": "lagUnit", "type": "com.xyz.ds.swan.LagUnit","doc": "The unit that the lag is in","default": "MONTHS" },
        { "name": "interpolation", "type": "com.xyz.ds.swan.Interpolation","doc": "Interpolation method of the instrument","default": "DAILY" },
        { "name": "inflationType", "type": "com.xyz.ds.swan.InflationType","doc": "The type of inflation for this instrument","default": "ZERO_CPN" },
        { "name": "compoundFrequency", "type": "com.xyz.ds.swan.CompoundFrequency","doc": "Compound Frequency of the instrument","default": "ANNUAL" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FixedFloatSubTypeInflation",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "inflationProperties", "type": "com.xyz.ds.swan.Inflation","doc": "Inflation Properties" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" },
        { "name": "terms", "type": "com.xyz.ds.swan.Maturity","doc": "Maturity and Forward terms" }
    ]
}, {
    "name": "com.xyz.ds.swan.ExecutionMethod",
    "type": "enum",
    "symbols": ["DEFAULT","ONE_SWAP","TWO_SWAP"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FloatFloatSubTypeXCurrencyBasis",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "executionMethod", "type": "com.xyz.ds.swan.ExecutionMethod","doc": "Choose either 'one swap' or 'two swap' for your execution method","default": "ONE_SWAP" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" },
        { "name": "terms", "type": "com.xyz.ds.swan.Maturity","doc": "Maturity and Forward terms" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FloatFloatSubTypeNonDeliverableSwap",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsNonDeliverable","doc": "Basic information needed for the swap" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FloatFloatSubTypeSameCurrencyBasisSingleExecution",
    "fields": [
        { "name": "executionMethod", "type": "com.xyz.ds.swan.ExecutionMethod","doc": "Choose either 'one swap' or 'two swap' for your execution method","default": "ONE_SWAP" },
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" },
        { "name": "terms", "type": "com.xyz.ds.swan.Maturity","doc": "Maturity and Forward terms" }
    ]
}, {
    "name": "com.xyz.ds.swan.ClearingHouse",
    "type": "enum",
    "symbols": ["DEFAULT","CME","LCH","CMECE","OTC","JSCC","LCHUS"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FloatFloatSubTypeSameCurrencyBasisTwoSwapExecution",
    "fields": [
        { "name": "executionMethod", "type": "com.xyz.ds.swan.ExecutionMethod","doc": "Choose either 'one swap' or 'two swap' for your execution method","default": "TWO_SWAP" },
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" },
        { "name": "underlyingTicker1", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType1", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse1", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" },
        { "name": "underlyingTicker2", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType2", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse2", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" },
        { "name": "terms", "type": "com.xyz.ds.swan.Maturity","doc": "Maturity and Forward terms" }
    ]
}, {
    "name": "com.xyz.ds.swan.ImmContract",
    "type": "enum",
    "symbols": ["DEFAULT","NEXT_IMM_DATE_START","SECOND_IMM_DATE_START","THIRD_IMM_DATE_START","FOURTH_IMM_DATE_START","FIFTH_IMM_DATE_START","SIXTH_IMM_DATE_START","SEVENTH_IMM_DATE_START","EIGHT_IMM_DATE_START","NINTH_IMM_DATE_START","TENTH_IMM_DATE_START","ELEVENTH_IMM_DATE_START","TWELFTH_IMM_DATE_START"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.ContractForwardRateAgreement",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "forwardStartTerms", "type": [ "null","com.xyz.ds.swan.ForwardTermType"],"doc": "Forward term details" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" },
        { "name": "immStartDate", "type": "com.xyz.ds.swan.ImmContract","doc": "Indicates the start of the IMM dates" }
    ]
}, {
    "name": "com.xyz.ds.swan.MatchedMaturitySubType",
    "type": "enum",
    "symbols": ["DEFAULT","PAR_PAR","YIELD_YIELD","PROCEEDS","Z_SPREADS"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.MatchedMaturityAssetSwap",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "subType", "type": "com.xyz.ds.swan.MatchedMaturitySubType","doc": "The sub-type of the Matched Maturity Asset Swap" },
        { "name": "underlyingTicker1", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType1", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse1", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.MatchedMaturityInterestRateSwap",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "maturityDate", "type": "com.xyz.Date","doc": "The maturity date of the Matched Maturity Interest Rate Swap" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" }
    ]
}, {
    "name": "com.xyz.ds.swan.IrsVBondFutureSubType",
    "type": "enum",
    "symbols": ["DEFAULT","CROSS","ROLL","SPREAD","BOX"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.IrsVBondFutureAssetSwap",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "subType", "type": "com.xyz.ds.swan.IrsVBondFutureSubType","doc": "The sub-type of the IRS v Bond Future Asset Swap" },
        { "name": "underlyingTicker1", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType1", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse1", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" },
        { "name": "underlyingTicker2", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType2", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse2", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.American",
    "fields": [
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.European",
    "fields": [
    ]
}, {
    "name": "com.xyz.ds.swan.ExpiryFrequency",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","SEMI_ANNUAL","DAILY","WEEKLY","MONTHLY","QUARTERLY","YEARLY"]
}, {
    "name": "com.xyz.ds.swan.TermUnit",
    "type": "enum",
    "symbols": ["DEFAULT","MONTH","DAY","WEEK","YEAR"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Bermudan",
    "fields": [
        { "name": "expiryFrequency", "type": "com.xyz.ds.swan.ExpiryFrequency","doc": "The frequency in which the contract will expire","default": "SEMI_ANNUAL" },
        { "name": "isAccreting", "type": "boolean","doc": "Does the instrument have an accumulation of value?" },
        { "name": "callTermValue", "type": "int","doc": "Period for which the option can't be called","default": 0 },
        { "name": "callTermUnit", "type": "com.xyz.ds.swan.TermUnit","doc": "Unit for the period the option can't be called","default": "MONTH" },
        { "name": "fee", "type": "double","doc": "Basis point fee charged to enter swaption","default": 0.0 }
    ]
}, {
    "name": "com.xyz.ds.swan.QuoteMethod",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","RATE","STRIKE","BLACK_VOL","NORM_VOL","SPOT_PREMIUM","BLACK_SPRD_V_ATM","NORM_SPRD_V_ATM","FORWARD_PREMIUM","BLACK_VOL_OIS_DSC","NORM_VOL_OIS_DSC"],
    "doc": "Applies to Volatility tickers, in what form the actual swap is quoted"
}, {
    "name": "com.xyz.ds.swan.StrikeType",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","ATM","ABSOLUTE_ATM","SPREAD_V_ATM"],
    "doc": "Method of strike type for forward start contract"
}, {
    "name": "com.xyz.ds.swan.UnderlyingTenorUnit",
    "type": "enum",
    "symbols": ["DEFAULT","YEAR","DAY","WEEK","MONTH"],
    "doc": "Which unit of time the maturation of the contract is quoted in"
}, {
    "name": "com.xyz.ds.swan.Delivery",
    "type": "enum",
    "symbols": ["DEFAULT","NOT_APPLICABLE","PHYSICAL","CASH"]
}, {
    "name": "com.xyz.ds.swan.NotificationCalendar",
    "type": "enum",
    "symbols": ["DEFAULT","BUSINESS_DAYS","CALENDAR_DAYS"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Option",
    "fields": [
        { "name": "exerciseType", "type": [ "com.xyz.Default","com.xyz.ds.swan.American","com.xyz.ds.swan.European","com.xyz.ds.swan.Bermudan"],"doc": "Method of execution for forward start contract. Choose either American, European, or Bermudan for the Exercise Type" },
        { "name": "quoteMethod", "type": "com.xyz.ds.swan.QuoteMethod","doc": "Applies to Volatility tickers, in what form the actual swap is quoted","default": "NOT_APPLICABLE" },
        { "name": "strikeType", "type": "com.xyz.ds.swan.StrikeType","doc": "Method of strike type for forward start contract","default": "NOT_APPLICABLE" },
        { "name": "strike", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "expiryTermValue", "type": "int","doc": "Numerical Value of expiration of contract","default": 0 },
        { "name": "expiryTermUnit", "type": "com.xyz.ds.swan.TermUnit","doc": "The method in which the expiration of the contract will be quoted","default": "MONTH" },
        { "name": "underlyingTenor", "type": "int","doc": "The underlying tenor of the contract","default": 0 },
        { "name": "underlyingTenorUnit", "type": "com.xyz.ds.swan.UnderlyingTenorUnit","doc": "Which unit of time the maturation of the contract is quoted in","default": "YEAR" },
        { "name": "delivery", "type": "com.xyz.ds.swan.Delivery","doc": "The method of delivery","default": "NOT_APPLICABLE" },
        { "name": "notificationDays", "type": "int","doc": "Number of days after expiration of the option until the swap can start","default": 2 },
        { "name": "notificationCalendarType", "type": "com.xyz.ds.swan.NotificationCalendar","doc": "The type of calendar to user for notification days","default": "BUSINESS_DAYS" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Swaption",
    "fields": [
        { "name": "basics", "type": "com.xyz.ds.swan.BasicsCollateral","doc": "Basic information needed for the swap" },
        { "name": "optionFields", "type": "com.xyz.ds.swan.Option","doc": "Fields to fill out related to the option" },
        { "name": "immSwap", "type": "boolean","doc": "Indicate if this instrument aligns with IMM dates" },
        { "name": "legs", "type": { "type": "array", "items": "com.xyz.ds.swan.Leg"},"doc": "Add one or more legs to this swap type" }
    ]
}, {
    "name": "com.xyz.ds.swan.StrikeUnit",
    "type": "enum",
    "symbols": ["DEFAULT","PERCENT","BASIS_POINTS","NOT_APPLICABLE"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Cap",
    "fields": [
        { "name": "strike", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strikeUnit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Floor",
    "fields": [
        { "name": "strike", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strikeUnit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Straddle",
    "fields": [
        { "name": "strike", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strikeUnit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Collar",
    "fields": [
        { "name": "strike1", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strike1Unit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" },
        { "name": "strike2", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strike2Unit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.CapSpread",
    "fields": [
        { "name": "strike1", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strike1Unit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" },
        { "name": "strike2", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strike2Unit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.FloorSpread",
    "fields": [
        { "name": "strike1", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strike1Unit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" },
        { "name": "strike2", "type": "double","doc": "Value of strike","default": 0.0 },
        { "name": "strike2Unit", "type": "com.xyz.ds.swan.StrikeUnit","doc": "What type of value the strike is being quoted as","default": "PERCENT" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.InterestRateOptionPlain",
    "fields": [
        { "name": "expiryTermValue", "type": "int","doc": "Numerical Value of expiration of contract","default": 0 },
        { "name": "expiryTermUnit", "type": "com.xyz.ds.swan.TermUnit","doc": "The method in which the expiration of the contract will be quoted","default": "MONTH" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.InterestRateOptionInflation",
    "fields": [
        { "name": "maturityTenorValue", "type": "int","doc": "The value of the maturation tenor of contract","default": 0 },
        { "name": "maturityTenorUnit", "type": "com.xyz.ds.swan.MaturityTenorUnit","doc": "Which unit of time the maturation of the contract is quoted in","default": "YEAR" },
        { "name": "inflationProperties", "type": "com.xyz.ds.swan.Inflation","doc": "Inflation Properties" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.InterestRateOption",
    "fields": [
        { "name": "optionStyle", "type": [ "com.xyz.Default","com.xyz.ds.swan.Cap","com.xyz.ds.swan.Floor","com.xyz.ds.swan.Straddle","com.xyz.ds.swan.Collar","com.xyz.ds.swan.CapSpread","com.xyz.ds.swan.FloorSpread"],"doc": "The style of the option" },
        { "name": "quoteMethod", "type": "com.xyz.ds.swan.QuoteMethod","doc": "Applies to Volatility tickers, in what form the actual swap is quoted","default": "NOT_APPLICABLE" },
        { "name": "currency", "type": "com.xyz.ds.swan.Currency","doc": "Underlying currency of instrument","default": "NOT_APPLICABLE" },
        { "name": "dayCount", "type": "com.xyz.ds.swan.DayCount","doc": "Determines how interest accrues over time","default": "NOT_APPLICABLE" },
        { "name": "strikeType", "type": "com.xyz.ds.swan.StrikeType","doc": "Method of strike type for forward start contract","default": "NOT_APPLICABLE" },
        { "name": "paymentFrequency", "type": "com.xyz.ds.swan.Frequency","doc": "How often borrower will pay on loan","default": "SEMI_ANNUAL" },
        { "name": "resetFrequency", "type": "com.xyz.ds.swan.Frequency","doc": "How often the floating leg of a swap resets during life of contract","default": "SEMI_ANNUAL" },
        { "name": "referenceSecurityId", "type": "string","doc": "The actual identifier (of the format reference Id Type specified)" },
        { "name": "referenceIdType", "type": "com.xyz.ds.swan.IdType","doc": "The type of reference identifier","default": "FIGI" },
        { "name": "subType", "type": [ "com.xyz.Default","com.xyz.ds.swan.InterestRateOptionPlain","com.xyz.ds.swan.InterestRateOptionInflation"],"doc": "The type of Interest Rate Option (plain or inflation)" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Spread2Instrument",
    "fields": [
        { "name": "forwardStartTerms", "type": [ "null","com.xyz.ds.swan.ForwardTermType"],"doc": "Forward term details" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.SpreadButterfly",
    "fields": [
        { "name": "underlyingTicker3", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType3", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse3", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Spread",
    "fields": [
        { "name": "currency", "type": "com.xyz.ds.swan.Currency","doc": "Underlying currency of instrument","default": "NOT_APPLICABLE" },
        { "name": "collateralCurrency", "type": [ "null","com.xyz.ds.swan.Currency"],"doc": "Delivery Currency of Instrument" },
        { "name": "settlementDays", "type": "com.xyz.ds.swan.SettlementDays","doc": "The date by which an executed security trade must be settled. That is, the date by which a buyer must pay for the securities delivered by the seller","default": "T_PLUS_2" },
        { "name": "settleUnit", "type": "com.xyz.ds.swan.SettlementUnit","doc": "What form the settlement is in","default": "DAYS" },
        { "name": "quoteUnit", "type": "com.xyz.ds.swan.QuoteUnit","doc": "Method in which returns on swap are quoted","default": "BP" },
        { "name": "underlyingTicker1", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType1", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse1", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" },
        { "name": "underlyingTicker2", "type": "string","doc": "Ticker name of index that floating leg is set against" },
        { "name": "idType2", "type": "com.xyz.ds.swan.IdType","doc": "Choose the type of input that you gave for the underlying ticker","default": "FIGI" },
        { "name": "clearingHouse2", "type": [ "null","com.xyz.ds.swan.ClearingHouse"],"doc": "Give an optional clearing house for the underlying ticker" },
        { "name": "subType", "type": [ "com.xyz.Default","com.xyz.ds.swan.Spread2Instrument","com.xyz.ds.swan.SpreadButterfly"],"doc": "The type of Spread (2 Instrument or Butterfly)" }
    ]
}, {
    "name": "com.xyz.ds.swan.StatusEnum",
    "type": "enum",
    "symbols": ["DEFAULT","STAGED","NOT_PROCESSED","ACCEPT","REJECT","DUPLICATE"]
}, {
    "name": "com.xyz.ds.swan.AttachmentStatusEnum",
    "type": "enum",
    "symbols": ["DEFAULT","NO_UPLOAD","UPLOAD_PENDING","UPLOAD_COMPLETED"]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.AuditRecord",
    "fields": [
        { "name": "username", "type": [ "null","string"],"doc": "The username of the institutional account that submitted this form." },
        { "name": "submissionTime", "type": [ "null","string"],"doc": "The date and time of the username's submission, in ISO 8601 string format, in UTC timezone." },
        { "name": "submissionId", "type": [ "null","string"],"doc": "The submission ID of this submission in the OpenFIGI database. A tracking number of sorts." },
        { "name": "email", "type": [ "null","string"],"doc": "The e-mail address of the person who submitted this form." },
        { "name": "status", "type": "com.xyz.ds.swan.StatusEnum","doc": "The status of the application, as internally determined.","default": "NOT_PROCESSED" },
        { "name": "attachmentStatus", "type": "com.xyz.ds.swan.AttachmentStatusEnum","doc": "The status of the attachments for this submission.","default": "NO_UPLOAD" },
        { "name": "attachmentLinkArray", "type": [ "null",{ "type": "array", "items": "string"}],"doc": "Array of strings, where each string is the link for where to find the attachment(s) associated with this payload" },
        { "name": "bundleId", "type": [ "null","string"],"doc": "In the case of a bundle of results (typically for a parent-child relationship), this is an ID to combine them together." },
        { "name": "bundleCount", "type": [ "null","string"],"doc": "In the case of a bundle of results (typically for a parent-child relationship), this is a count of how many should be bundled together." }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.swan.Data",
    "fields": [
        { "name": "swapTypes", "type": [ "com.xyz.Default","com.xyz.ds.swan.FixedFloatSubTypeVanilla","com.xyz.ds.swan.FixedFloatSubTypeNdIrs","com.xyz.ds.swan.FixedFloatSubTypeInflation","com.xyz.ds.swan.FloatFloatSubTypeXCurrencyBasis","com.xyz.ds.swan.FloatFloatSubTypeNonDeliverableSwap","com.xyz.ds.swan.FloatFloatSubTypeSameCurrencyBasisSingleExecution","com.xyz.ds.swan.FloatFloatSubTypeSameCurrencyBasisTwoSwapExecution","com.xyz.ds.swan.ContractForwardRateAgreement","com.xyz.ds.swan.MatchedMaturityAssetSwap","com.xyz.ds.swan.MatchedMaturityInterestRateSwap","com.xyz.ds.swan.IrsVBondFutureAssetSwap","com.xyz.ds.swan.Swaption","com.xyz.ds.swan.InterestRateOption","com.xyz.ds.swan.Spread"],"doc": "Choose the top-level type of swap you want to register a FIGI identifer for" },
        { "name": "auditField", "type": "com.xyz.ds.swan.AuditRecord","internal": "true" }
    ],
    "doc": "Type of Interest Rate Derivative"
}, {
    "type": "record",
    "name": "com.xyz.ds.swan",
    "fields": [
        { "name": "key", "type": "com.xyz.ds.swan.Key" },
        { "name": "data", "type": "com.xyz.ds.swan.Data" },
        { "name": "metadata", "type": { "type": "map", "values": "string"} },
        { "name": "version", "type": "com.xyz.SchemaVersion" }
    ]
}]
