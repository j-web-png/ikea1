
/**
 * Inter IKEA Group Financial Dataset (FY25 vs FY26)
 * Source: Inter IKEA Holding B.V. Annual Report FY26
 *
 * Financial units: EUR Billions (€B)
 * Geographical income: EUR Millions (€M)
 */

window.ikeaFinancialData = {

    metadata: {
        entity: "Inter IKEA Group (Inter IKEA Holding B.V.)",

        timePeriod: {
            fy25: "1 September 2024 – 31 August 2025",
            fy26: "1 September 2025 – 31 August 2026"
        },

        sampleSizeN: 2,

        notes: "Excludes Ingka Group retail operations. Financial figures reported in EUR Billions unless otherwise indicated."
    },

    // FINANCIAL METRICS

    metrics: [

        {
            category: "Total Operating Income",
            fy25: 26.306,
            fy26: 25.864,
            absoluteChange: -0.442,
            percentChange: -1.68,
            description: "Total operating income."
        },

        {
            category: "Operating Income from Sales of Goods",
            fy25: 26.306,
            fy26: 25.864,
            absoluteChange: -0.442,
            percentChange: -1.68,
            description: "Operating income from sales of goods."
        },

        {
            category: "Cost of Raw Materials & Consumables",
            fy25: 21.33,
            fy26: 20.66,
            absoluteChange: -0.67,
            percentChange: -3.15,
            description: "Direct procurement, manufacturing input, and supply-chain logistics costs."
        },

        {
            category: "Other Operating Expenses & Labour",
            fy25: 3.25,
            fy26: 3.75,
            absoluteChange: 0.50,
            percentChange: 15.22,
            description: "Includes wage inflation, digital system investments, and one-off organizational restructuring costs."
        },

        {
            category: "Operating Profit (EBIT)",
            fy25: 1.73,
            fy26: 1.46,
            absoluteChange: -0.27,
            percentChange: -15.42,
            description: "Operating result before financial items and tax."
        },

        {
            category: "Net Profit",
            fy25: 1.50,
            fy26: 1.40,
            absoluteChange: -0.10,
            percentChange: -6.48,
            description: "Bottom-line profit cushioned by net financial income and currency derivative gains."
        }

    ],

    // GEOGRAPHICAL DISTRIBUTION OF OPERATING INCOME
    // Units: EUR Millions (€M)

    geographicalIncome: {

        unit: "EUR Millions",

        regions: [
            "The Netherlands",
            "European Union",
            "Rest of the world"
        ],

        fy25: {
            label: "FY25",
            values: [1177, 14452, 10677],
            total: 26306
        },

        fy26: {
            label: "FY26",
            values: [1292, 14240, 10332],
            total: 25864
        }

    },

    // WORLDWIDE IKEA RETAIL SALES
    // Units: EUR Billions (€B)

    worldwideRetailSales: {

        unit: "EUR Billions",

        fy25: 44.6,
        fy26: 43.8

    },

    // FINANCIAL RATIOS

    ratios: {

        fy25: {
            operatingMargin: 6.56,
            netMargin: 5.69,
            avgFTE: 25971
        },

        fy26: {
            operatingMargin: 5.64,
            netMargin: 5.41,
            avgFTE: 26826
        }

    },

    // EBIT WATERFALL BRIDGE

    waterfallBridge: [

        {
            label: "FY25 EBIT",
            value: 1.73,
            type: "total"
        },

        {
            label: "Revenue Impact",
            value: -0.44,
            type: "negative"
        },

        {
            label: "Material Savings",
            value: 0.67,
            type: "positive"
        },

        {
            label: "OpEx & Restructuring Headwinds",
            value: -0.50,
            type: "negative"
        },

        {
            label: "FY26 EBIT",
            value: 1.46,
            type: "total"
        }

    ]

};
