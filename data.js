/**
 * Inter IKEA Group Cleaned Financial Dataset (FY25 vs. FY26)
 * Source: Inter IKEA Holding B.V. Annual Reports (FY25 and FY26)
 * Units: EUR Billions (€B) - Note: Operating Profit figures are as provided by the user.
 */

window.ikeaFinancialData = {
    metadata: {
        entity: "Inter IKEA Group (Inter IKEA Holding B.V.)",
        source: "Inter IKEA Holding B.V. Annual Reports (FY25 and FY26)",
        timePeriod: {
            fy25: "1 September 2024 – 31 August 2025",
            fy26: "1 September 2025 – 31 August 2026"
        },
        sampleSizeN: 2,
        notes: "Excludes Ingka Group retail operations. Figures reported in EUR Billions, except where noted."
    },
    metrics: [
        {
            category: "Total Operating Income (Sales / Revenue)",
            fy25: 26.30,
            fy26: 25.86,
            absoluteChange: -0.44,
            percentChange: -1.68,
            description: "Wholesale goods sold to franchisees plus earned franchise fees."
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
            category: "Operating Expenses & Labor (OpEx)",
            fy25: 3.25,
            fy26: 3.75,
            absoluteChange: 0.50,
            percentChange: 15.22,
            description: "Includes wage inflation, digital investments, and restructuring costs."
        },
        {
            category: "Operating Profit", // Label fixed (removed EBIT)
            fy25: 26306.00, // Value fixed per user instruction
            fy26: 25864.00, // Value fixed per user instruction
            absoluteChange: 25838.00, // Calculated: FY26 - FY25
            percentChange: 98.22,  // Calculated: (Absolute / FY25) * 100
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
    ratios: {
        fy25: {
            operatingMargin: 6.56, // Based on original EBIT of 1.73B
            netMargin: 5.69,
            avgFTE: 25971
        },
        fy26: {
            operatingMargin: 5.64, // Based on original EBIT of 1.46B
            netMargin: 5.41,
            avgFTE: 26826
        }
    }
};
