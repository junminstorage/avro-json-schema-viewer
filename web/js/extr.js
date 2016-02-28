extr = [{
    "type": "record",
    "name": "com.xyz.ds.extr.Key",
    "fields": [
        { "name": "familyId", "type": "string" },
        { "name": "url", "type": "string" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.CurrentSentence",
    "fields": [
        { "name": "valueLength", "type": [ "null","int"] },
        { "name": "valueOffsetInText", "type": [ "null","int"] },
        { "name": "text", "type": "string" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.Duration",
    "fields": [
        { "name": "startDate", "type": "string" },
        { "name": "endDate", "type": "string" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.Transparency",
    "fields": [
        { "name": "c", "type": [ "null","int"],"doc": "string field" },
        { "name": "h", "type": [ "null","int"],"doc": "string field" },
        { "name": "len", "type": [ "null","int"],"doc": "string field" },
        { "name": "off", "type": [ "null","int"],"doc": "string field" },
        { "name": "r", "type": [ "null","int"],"doc": "string field" },
        { "name": "sheet", "type": [ "null","string"],"doc": "string field" },
        { "name": "w", "type": [ "null","int"],"doc": "string field" },
        { "name": "x", "type": [ "null","int"],"doc": "string field" },
        { "name": "xpath", "type": [ "null","string"],"doc": "string field" },
        { "name": "y", "type": [ "null","int"],"doc": "string field" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.Target",
    "fields": [
        { "name": "name", "type": "string" },
        { "name": "value", "type": "string","doc": "for target value" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.Targets",
    "fields": [
        { "name": "target", "type": { "type": "array", "items": "com.xyz.ds.extr.Target"} }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.DataPoint",
    "fields": [
        { "name": "entityId", "type": "string","doc": "string field" },
        { "name": "confidence", "type": [ "null","long"],"doc": "long field" },
        { "name": "currency", "type": [ "null","string"],"doc": "string field" },
        { "name": "currentSentence", "type": "com.xyz.ds.extr.CurrentSentence","doc": "object field" },
        { "name": "periodRawString", "type": [ "null","string"],"doc": "string field" },
        { "name": "period", "type": [ "null","string","com.xyz.ds.extr.Duration"],"doc": "string field" },
        { "name": "scale", "type": [ "null","string"],"doc": "string field" },
        { "name": "transparency", "type": "com.xyz.ds.extr.Transparency","doc": "string field" },
        { "name": "value", "type": [ "null","string"],"doc": "string field" },
        { "name": "targets", "type": [ "null",{ "type": "array", "items": "com.xyz.ds.extr.Targets"}],"doc": "target field" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.ExtractionResult",
    "fields": [
        { "name": "engine", "type": "string" },
        { "name": "dataPoint", "type": { "type": "array", "items": "com.xyz.ds.extr.DataPoint"},"doc": "array field" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr.Data",
    "fields": [
        { "name": "familyId", "type": "string" },
        { "name": "url", "type": "string" },
        { "name": "extractionResult", "type": { "type": "array", "items": "com.xyz.ds.extr.ExtractionResult"},"doc": "array field" }
    ]
}, {
    "type": "record",
    "name": "com.xyz.ds.extr",
    "fields": [
        { "name": "key", "type": "com.xyz.ds.extr.Key" },
        { "name": "data", "type": "com.xyz.ds.extr.Data" },
        { "name": "metadata", "type": { "type": "map", "values": "string"} },
        { "name": "version", "type": "com.xyz.SchemaVersion" }
    ]
}]