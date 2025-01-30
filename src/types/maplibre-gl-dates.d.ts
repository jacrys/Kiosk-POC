//  @openhistoricalmap/maplibre-gl-dates.d.ts

declare module '@openhistoricalmap/maplibre-gl-dates' {

    type dateRange = {
        startDate: String | Date;
        startDate: String | Date;
        startDecimalYear: Number;
        startISODate: String;
        endDate: String | Date;
        endDecimalYear: Number;
        endISODate: String;
    };
    type ExpressionSpecification = [
        "array",
        unknown | ExpressionSpecification
    ] | [
        "array",
        ExpressionInputType | ExpressionSpecification,
        unknown | ExpressionSpecification
    ] | [
        "array",
        ExpressionInputType | ExpressionSpecification,
        number | ExpressionSpecification,
        unknown | ExpressionSpecification
    ] | [
        "boolean",
        ...(unknown | ExpressionSpecification)[],
        unknown | ExpressionSpecification
    ] | CollatorExpressionSpecification | [
        "format",
        ...(string | [
            "image",
            ExpressionSpecification
        ] | ExpressionSpecification | {
            "font-scale"?: number | ExpressionSpecification;
            "text-font"?: string[] | ExpressionSpecification;
            "text-color"?: ColorSpecification | ExpressionSpecification;
        })[]
    ] | [
        "image",
        unknown | ExpressionSpecification
    ] | [
        "literal",
        unknown
    ] | [
        "number",
        unknown | ExpressionSpecification,
        ...(unknown | ExpressionSpecification)[]
    ] | [
        "number-format",
        number | ExpressionSpecification,
        {
            "locale"?: string | ExpressionSpecification;
            "currency"?: string | ExpressionSpecification;
            "min-fraction-digits"?: number | ExpressionSpecification;
            "max-fraction-digits"?: number | ExpressionSpecification;
        }
    ] | [
        "object",
        unknown | ExpressionSpecification,
        ...(unknown | ExpressionSpecification)[]
    ] | [
        "string",
        unknown | ExpressionSpecification,
        ...(unknown | ExpressionSpecification)[]
    ] | [
        "to-boolean",
        unknown | ExpressionSpecification
    ] | [
        "to-color",
        unknown | ExpressionSpecification,
        ...(unknown | ExpressionSpecification)[]
    ] | [
        "to-number",
        unknown | ExpressionSpecification,
        ...(unknown | ExpressionSpecification)[]
    ] | [
        "to-string",
        unknown | ExpressionSpecification
    ] | [
        "accumulated"
    ] | [
        "feature-state",
        string
    ] | [
        "geometry-type"
    ] | [
        "id"
    ] | [
        "line-progress"
    ] | [
        "properties"
    ] | [
        "at",
        number | ExpressionSpecification,
        ExpressionSpecification
    ] | [
        "get",
        string | ExpressionSpecification,
        (Record<string, unknown> | ExpressionSpecification)?
    ] | [
        "has",
        string | ExpressionSpecification,
        (Record<string, unknown> | ExpressionSpecification)?
    ] | [
        "in",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification
    ] | [
        "index-of",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification
    ] | [
        "length",
        string | ExpressionSpecification
    ] | [
        "slice",
        string | ExpressionSpecification,
        number | ExpressionSpecification,
        (number | ExpressionSpecification)?
    ] | [
        "!",
        boolean | ExpressionSpecification
    ] | [
        "!=",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        CollatorExpressionSpecification?
    ] | [
        "<",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        CollatorExpressionSpecification?
    ] | [
        "<=",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        CollatorExpressionSpecification?
    ] | [
        "==",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        CollatorExpressionSpecification?
    ] | [
        ">",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        CollatorExpressionSpecification?
    ] | [
        ">=",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        CollatorExpressionSpecification?
    ] | [
        "all",
        ...(boolean | ExpressionSpecification)[]
    ] | [
        "any",
        ...(boolean | ExpressionSpecification)[]
    ] | [
        "case",
        boolean | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        ...(boolean | ExpressionInputType | ExpressionSpecification)[],
        ExpressionInputType | ExpressionSpecification
    ] | [
        "coalesce",
        ...(ExpressionInputType | ExpressionSpecification)[]
    ] | [
        "match",
        ExpressionInputType | ExpressionSpecification,
        ExpressionInputType | ExpressionInputType[],
        ExpressionInputType | ExpressionSpecification,
        ...(ExpressionInputType | ExpressionInputType[] | ExpressionSpecification)[],
        // repeated as above
        ExpressionInputType | ExpressionSpecification
    ] | [
        "within",
        unknown | ExpressionSpecification
    ] | [
        "distance",
        unknown | ExpressionSpecification
    ] | [
        "interpolate",
        InterpolationSpecification,
        number | ExpressionSpecification,
        ...(number | number[] | ColorSpecification | ExpressionSpecification | ProjectionDefinitionSpecification)[]
    ] | [
        "interpolate-hcl",
        InterpolationSpecification,
        number | ExpressionSpecification,
        ...(number | ColorSpecification)[]
    ] | [
        "interpolate-lab",
        InterpolationSpecification,
        number | ExpressionSpecification,
        ...(number | ColorSpecification)[]
    ] | [
        "step",
        number | ExpressionSpecification,
        ExpressionInputType | ExpressionSpecification,
        ...(number | ExpressionInputType | ExpressionSpecification)[]
    ] | [
        "let",
        string,
        ExpressionInputType | ExpressionSpecification,
        ...(string | ExpressionInputType | ExpressionSpecification)[]
    ] | [
        "var",
        string
    ] | [
        "concat",
        ...(ExpressionInputType | ExpressionSpecification)[]
    ] | [
        "downcase",
        string | ExpressionSpecification
    ] | [
        "is-supported-script",
        string | ExpressionSpecification
    ] | [
        "resolved-locale",
        CollatorExpressionSpecification
    ] | [
        "upcase",
        string | ExpressionSpecification
    ] | [
        "rgb",
        number | ExpressionSpecification,
        number | ExpressionSpecification,
        number | ExpressionSpecification
    ] | [
        "rgba",
        number | ExpressionSpecification,
        number | ExpressionSpecification,
        number | ExpressionSpecification,
        number | ExpressionSpecification
    ] | [
        "to-rgba",
        ColorSpecification | ExpressionSpecification
    ] | [
        "-",
        number | ExpressionSpecification,
        (number | ExpressionSpecification)?
    ] | [
        "*",
        number | ExpressionSpecification,
        number | ExpressionSpecification,
        ...(number | ExpressionSpecification)[]
    ] | [
        "/",
        number | ExpressionSpecification,
        number | ExpressionSpecification
    ] | [
        "%",
        number | ExpressionSpecification,
        number | ExpressionSpecification
    ] | [
        "^",
        number | ExpressionSpecification,
        number | ExpressionSpecification
    ] | [
        "+",
        ...(number | ExpressionSpecification)[]
    ] | [
        "abs",
        number | ExpressionSpecification
    ] | [
        "acos",
        number | ExpressionSpecification
    ] | [
        "asin",
        number | ExpressionSpecification
    ] | [
        "atan",
        number | ExpressionSpecification
    ] | [
        "ceil",
        number | ExpressionSpecification
    ] | [
        "cos",
        number | ExpressionSpecification
    ] | [
        "distance",
        Record<string, unknown> | ExpressionSpecification
    ] | [
        "ExpressionSpecification"
    ] | [
        "floor",
        number | ExpressionSpecification
    ] | [
        "ln",
        number | ExpressionSpecification
    ] | [
        "ln2"
    ] | [
        "log10",
        number | ExpressionSpecification
    ] | [
        "log2",
        number | ExpressionSpecification
    ] | [
        "max",
        number | ExpressionSpecification,
        ...(number | ExpressionSpecification)[]
    ] | [
        "min",
        number | ExpressionSpecification,
        ...(number | ExpressionSpecification)[]
    ] | [
        "pi"
    ] | [
        "round",
        number | ExpressionSpecification
    ] | [
        "sin",
        number | ExpressionSpecification
    ] | [
        "sqrt",
        number | ExpressionSpecification
    ] | [
        "tan",
        number | ExpressionSpecification
    ] | [
        "zoom"
    ] | [
        "heatmap-density"
    ];

    type ExpressionFilterSpecification = boolean | ExpressionSpecification

    type LegacyFilterSpecification =
    // Existential
    | ['has', string]
    | ['!has', string]
    // Comparison
    | ['==', string, string | number | boolean]
    | ['!=', string, string | number | boolean]
    | ['>', string, string | number | boolean]
    | ['>=', string, string | number | boolean]
    | ['<', string, string | number | boolean]
    | ['<=', string, string | number | boolean]
    // Set membership
    | ['in', string, ...(string | number | boolean)[]]
    | ['!in', string, ...(string | number | boolean)[]]
    // Combining
    | ['all', ...LegacyFilterSpecification[]]
    | ['any', ...LegacyFilterSpecification[]]
    | ['none', ...LegacyFilterSpecification[]]

    type FilterSpecification = ExpressionFilterSpecification | LegacyFilterSpecification

    export function filterByDate(map: any, date: String | Date): void;

    export function dateRangeFromDate(date: String | Date): dateRange;

    export function dateRangeFromISODate(isoDate: String): dateRange;

    export function dateFromUTC(year: Number, month: Number, day: Number): Date;

    export function decimalYearFromDate(date: String | Date): Number;

    export function constrainFilterByDateRange(filter: FilterSpecification, dateRange: dateRange): FilterSpecification;

    export function constrainLegacyFilterByDateRange(filter: FilterSpecification, dateRange: dateRange): FilterSpecification;

    export function constrainExpressionFilterByDateRange(filter: FilterSpecification, dateRange: dateRange): FilterSpecification;

    export function isLegacyFilter(filter: FilterSpecification): Boolean;

    export function updateVariable(letExpression, name, newValue): void;
}