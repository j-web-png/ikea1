/**
 * Inter IKEA Group Cleaned Financial Dataset (FY25 vs. FY26)
 * Source: Inter IKEA Holding B.V. Annual Reports (FY25 and FY26)
 * Units: EUR Billions (€B)
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
        notes: "Excludes Ingka Group retail operations. Figures reported in EUR Billions."
    },
    metrics: [
        {
            category: "Operating Income (Sales of Goods)",
            fy25: 26.30,
            fy26: 25.86,
            absoluteChange: -0.44,
            percentChange: -1.68,
            description: "Wholesale goods sold to franchisees."
        },
        {
            category: "Operating Income from Franchising",
            fy25: 10.10,
            fy26: 10.10,
            absoluteChange: 0.00,
            percentChange: 0.00,
            description: "Fees earned from franchisees."
        },
        {
            category: "Total Operating Income",
            fy25: 26.306, // Corrected from 1.73
            fy26: 25.864, // Corrected from 1.46
            absoluteChange: -0.442,
            percentChange: -1.68,
            description: "Total income before financial items and tax."
        },
        {
            category: "Raw Materials and Consumables", // Label updated
            fy25: 21.33,
            fy26: 20.66,
            absoluteChange: -0.67,
            percentChange: -3.15,
            description: "Direct procurement and supply-chain costs."
        },
        {
            category: "Other Operating Expenses & Labor (OpEx)",
            fy25: 3.25,
            fy26: 3.75,
            absoluteChange: 0.50,
            percentChange: 15.22,
            description: "Wage inflation and digital investments."
        },
        {
            category: "Net Profit",
            fy25: 1.50,
            fy26: 1.40,
            absoluteChange: -0.10,
            percentChange: -6.48,
            description: "Bottom-line profit."
        },
        // New External Metric
        {
            category: "Worldwide IKEA Retail Sales",
            fy25: 44.6,
            fy26: 43.8,
            absoluteChange: -0.8,
            percentChange: -1.79,
            description: "Total sales by all franchisees to customers (external metric)."
        }
    ],
    ratios: {
        fy25: {
            operatingMargin: 6.56,
            netMargin: 5.69
        },
        fy26: {
            operatingMargin: 5.64,
            netMargin: 5.41
        }
    }
};
