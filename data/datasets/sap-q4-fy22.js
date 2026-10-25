window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "sap-q4-fy22",
  "name": "SAP · Q4 FY22",
  "company": "SAP",
  "meta": {
    "company": "SAP",
    "title": "SAP Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sap-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1958,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "type": {
      "name": 38,
      "value": 38,
      "note": 28,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "nodes": {
      "saas": {
        "x": 381.56,
        "y": 335.98,
        "width": 72.93,
        "height": 100.27
      },
      "paas": {
        "x": 381.56,
        "y": 579.5,
        "width": 72.93,
        "height": 16.93
      },
      "iaas": {
        "x": 381.56,
        "y": 738.37,
        "width": 72.93,
        "height": 7.81
      },
      "software_licenses": {
        "x": 381.56,
        "y": 889.43,
        "width": 72.93,
        "height": 33.86
      },
      "software_support": {
        "x": 381.56,
        "y": 1066.54,
        "width": 72.93,
        "height": 109.39
      },
      "cloud": {
        "x": 755.3,
        "y": 523.5,
        "width": 72.93,
        "height": 125.02
      },
      "licenses_support": {
        "x": 755.3,
        "y": 868.6,
        "width": 72.93,
        "height": 141.94
      },
      "services": {
        "x": 750.09,
        "y": 1246.25,
        "width": 72.93,
        "height": 41.67
      },
      "revenue": {
        "x": 1129.05,
        "y": 722.75,
        "width": 72.93,
        "height": 308.63
      },
      "gross_profit": {
        "x": 1505.4,
        "y": 660.24,
        "width": 72.93,
        "height": 221.38
      },
      "cost_of_revenue": {
        "x": 1505.4,
        "y": 1014.45,
        "width": 72.93,
        "height": 87.25
      },
      "operating_profit": {
        "x": 1881.75,
        "y": 425.83,
        "width": 72.93,
        "height": 62.51
      },
      "operating_expenses": {
        "x": 1881.75,
        "y": 899.85,
        "width": 72.93,
        "height": 165.39
      },
      "other_income": {
        "x": 1771.05,
        "y": 634.19,
        "width": 72.93,
        "height": 5.21
      },
      "net_profit": {
        "x": 2250.28,
        "y": 294.31,
        "width": 72.93,
        "height": 13.02
      },
      "financial": {
        "x": 2250.28,
        "y": 496.16,
        "width": 72.93,
        "height": 32.56
      },
      "tax": {
        "x": 2250.28,
        "y": 609.45,
        "width": 72.93,
        "height": 15.63
      },
      "other_expense": {
        "x": 2250.28,
        "y": 698.0,
        "width": 72.93,
        "height": 2.6
      },
      "sm": {
        "x": 2250.28,
        "y": 810.0,
        "width": 72.93,
        "height": 85.95
      },
      "rnd": {
        "x": 2250.28,
        "y": 1007.94,
        "width": 72.93,
        "height": 59.9
      },
      "ga": {
        "x": 2250.28,
        "y": 1174.63,
        "width": 72.93,
        "height": 18.23
      },
      "restructuring": {
        "x": 2250.28,
        "y": 1295.73,
        "width": 72.93,
        "height": 1.3
      }
    },
    "labels": {
      "saas": {
        "blocks": [
          {
            "x": 418.02,
            "top": 248.73,
            "anchor": "middle",
            "lineGap": 9,
            "valueColor": "#35495f",
            "noteColor": "#777777",
            "valueSize": 38,
            "noteSize": 28,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "+31% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 341.19,
            "top": 354.86,
            "anchor": "end",
            "lineGap": 9,
            "nameSize": 36,
            "noteSize": 28,
            "nameColor": "#35495f",
            "noteColor": "#777777",
            "lines": [
              {
                "text": "Saas",
                "size": 36,
                "weight": 700,
                "color": "#35495f"
              },
              {
                "text": "73% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "paas": {
        "blocks": [
          {
            "x": 418.02,
            "top": 488.34,
            "anchor": "middle",
            "lineGap": 9,
            "valueColor": "#35495f",
            "noteColor": "#777777",
            "valueSize": 38,
            "noteSize": 28,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "+51% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 341.19,
            "top": 556.71,
            "anchor": "end",
            "lineGap": 9,
            "nameSize": 36,
            "noteSize": 28,
            "nameColor": "#35495f",
            "noteColor": "#777777",
            "lines": [
              {
                "text": "Paas",
                "size": 36,
                "weight": 700,
                "color": "#35495f"
              },
              {
                "text": "80% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "iaas": {
        "blocks": [
          {
            "x": 418.02,
            "top": 644.61,
            "anchor": "middle",
            "lineGap": 9,
            "valueColor": "#35495f",
            "noteColor": "#777777",
            "valueSize": 38,
            "noteSize": 28,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "(16%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 341.19,
            "top": 711.03,
            "anchor": "end",
            "lineGap": 9,
            "nameSize": 36,
            "noteSize": 28,
            "nameColor": "#35495f",
            "noteColor": "#777777",
            "lines": [
              {
                "text": "Iaas",
                "size": 36,
                "weight": 700,
                "color": "#35495f"
              },
              {
                "text": "28% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "software_licenses": {
        "blocks": [
          {
            "x": 418.02,
            "top": 802.18,
            "parts": [
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "valueColor": "#1a68c0",
            "noteColor": "#777777",
            "valueSize": 38,
            "noteSize": 28
          },
          {
            "x": 349.0,
            "top": 883.91,
            "parts": [
              "name"
            ],
            "anchor": "end",
            "lineGap": 9,
            "nameSize": 36,
            "noteSize": 28,
            "nameColor": "#1a68c0",
            "noteColor": "#777777"
          }
        ]
      },
      "software_support": {
        "blocks": [
          {
            "x": 418.02,
            "top": 971.48,
            "anchor": "middle",
            "lineGap": 9,
            "valueColor": "#1a68c0",
            "noteColor": "#777777",
            "valueSize": 38,
            "noteSize": 28,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 349.0,
            "top": 1089.98,
            "anchor": "end",
            "lineGap": 9,
            "nameSize": 36,
            "noteSize": 28,
            "nameColor": "#1a68c0",
            "noteColor": "#777777",
            "lines": [
              {
                "text": "Software Support",
                "size": 36,
                "weight": 700,
                "color": "#1a68c0"
              },
              {
                "text": "87% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 791.77,
            "top": 376.35,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#35495f",
            "valueColor": "#35495f",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "licenses_support": {
        "blocks": [
          {
            "x": 791.77,
            "top": 670.66,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#1a68c0",
            "valueColor": "#1a68c0",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 786.56,
            "top": 1151.19,
            "anchor": "middle",
            "lineGap": 9,
            "valueColor": "#02afeb",
            "noteColor": "#777777",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#02afeb"
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 739.68,
            "top": 1243.65,
            "anchor": "end",
            "lineGap": 9,
            "nameColor": "#02afeb",
            "noteColor": "#777777",
            "noteSize": 28,
            "lines": [
              {
                "text": "Services",
                "size": 38,
                "weight": 700,
                "color": "#02afeb"
              },
              {
                "text": "24% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1164.21,
            "top": 575.59,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#35495f",
            "valueColor": "#35495f",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1540.56,
            "top": 474.02,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#008f51",
            "valueColor": "#008f51",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1540.56,
            "top": 1116.02,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1918.21,
            "top": 240.92,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#008f51",
            "valueColor": "#008f51",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1918.21,
            "top": 1080.86,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1807.52,
            "top": 652.43,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#008f51",
            "valueColor": "#008f51",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2448.6,
            "top": 278.68,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#008f51",
            "valueColor": "#008f51",
            "noteColor": "#777777",
            "nameSize": 38,
            "valueSize": 38,
            "noteSize": 28
          }
        ]
      },
      "financial": {
        "blocks": [
          {
            "x": 2432.6,
            "top": 480.53,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2432.6,
            "top": 579.5,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2432.6,
            "top": 670.66,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2441.71,
            "top": 821.72,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2441.71,
            "top": 998.82,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2441.71,
            "top": 1144.67,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2441.71,
            "top": 1256.67,
            "parts": [
              "name",
              "value",
              "notes"
            ],
            "anchor": "middle",
            "lineGap": 9,
            "nameColor": "#941100",
            "valueColor": "#941100",
            "noteColor": "#777777",
            "nameSize": 32,
            "valueSize": 32,
            "noteSize": 28
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "saas",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Saas",
      "value": 2.7,
      "valueText": "€2.7B",
      "notes": [
        "73% gross margin",
        "+31% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "paas",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Paas",
      "value": 0.5,
      "valueText": "€0.5B",
      "notes": [
        "80% gross margin",
        "+51% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "iaas",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Iaas",
      "value": 0.2,
      "valueText": "€0.2B",
      "notes": [
        "28% gross margin",
        "(16%) Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "software_licenses",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Software Licenses",
      "value": 0.9,
      "valueText": "€0.9B",
      "notes": [
        "(38%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0",
      "linkTint": "#91b4db"
    },
    {
      "id": "software_support",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Software Support",
      "value": 3.0,
      "valueText": "€3.0B",
      "notes": [
        "87% gross margin",
        "+3% Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0",
      "linkTint": "#91b4db"
    },
    {
      "id": "cloud",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Cloud",
      "value": 3.4,
      "valueText": "€3.4B",
      "notes": [
        "+30% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "licenses_support",
      "col": 1,
      "order": 6,
      "type": "source",
      "label": [
        "Licenses",
        "& Support"
      ],
      "value": 3.9,
      "valueText": "€3.9B",
      "notes": [
        "(11%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0",
      "linkTint": "#91b4db"
    },
    {
      "id": "services",
      "col": 1,
      "order": 7,
      "type": "source",
      "label": "Services",
      "value": 1.1,
      "valueText": "€1.1B",
      "notes": [
        "24% gross margin",
        "+15% Y/Y"
      ],
      "color": "#02afeb",
      "labelColor": "#02afeb",
      "linkTint": "#86d3ee"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 8,
      "type": "hub",
      "label": "Revenue",
      "value": 8.4,
      "valueText": "€8.4B",
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 9,
      "type": "profit",
      "label": "Gross profit",
      "value": 6.1,
      "valueText": "€6.1B",
      "notes": [
        "72% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2.4,
      "valueText": "(€2.4B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 11,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.7,
      "valueText": "€1.7B",
      "notes": [
        "20% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.5,
      "valueText": "(€4.5B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "col": 3,
      "order": 13,
      "type": "profit",
      "label": "Other",
      "value": 0.2,
      "valueText": "€0.2B",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 14,
      "type": "profit",
      "label": "Net profit",
      "value": 0.3,
      "valueText": "€0.3B",
      "notes": [
        "3% margin",
        "(14pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "financial",
      "col": 5,
      "order": 15,
      "type": "cost",
      "label": "Financial",
      "value": 0.9,
      "valueText": "(€0.9B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 16,
      "type": "cost",
      "label": "Tax",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 17,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "valueText": "(€0.1B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 18,
      "type": "cost",
      "label": "S&M",
      "value": 2.4,
      "valueText": "(€2.4B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 19,
      "type": "cost",
      "label": "R&D",
      "value": 1.6,
      "valueText": "(€1.6B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 20,
      "type": "cost",
      "label": "G&A",
      "value": 0.5,
      "valueText": "(€0.5B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 21,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.027,
      "valueText": "(€27M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "saas",
      "target": "cloud",
      "value": 2.7,
      "sourceWidth": 100.27,
      "targetWidth": 100.27,
      "width": 100.27,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9da6af"
    },
    {
      "source": "paas",
      "target": "cloud",
      "value": 0.5,
      "sourceWidth": 16.93,
      "targetWidth": 16.93,
      "width": 16.93,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9da6af"
    },
    {
      "source": "iaas",
      "target": "cloud",
      "value": 0.2,
      "sourceWidth": 7.81,
      "targetWidth": 7.81,
      "width": 7.81,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9da6af"
    },
    {
      "source": "software_licenses",
      "target": "licenses_support",
      "value": 0.9,
      "sourceWidth": 33.86,
      "targetWidth": 33.86,
      "width": 33.86,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#91b4db"
    },
    {
      "source": "software_support",
      "target": "licenses_support",
      "value": 3.0,
      "sourceWidth": 109.39,
      "targetWidth": 108.09,
      "width": 109.39,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#91b4db"
    },
    {
      "source": "cloud",
      "target": "revenue",
      "value": 3.4,
      "sourceWidth": 125.02,
      "targetWidth": 125.02,
      "width": 125.02,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9da6af"
    },
    {
      "source": "licenses_support",
      "target": "revenue",
      "value": 3.9,
      "sourceWidth": 141.94,
      "targetWidth": 141.94,
      "width": 141.94,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#91b4db"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 1.1,
      "sourceWidth": 41.67,
      "targetWidth": 41.67,
      "width": 41.67,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#86d3ee"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.1,
      "sourceWidth": 222.68,
      "targetWidth": 221.38,
      "width": 222.68,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.4,
      "sourceWidth": 85.95,
      "targetWidth": 87.25,
      "width": 85.95,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 56.0,
      "targetWidth": 57.3,
      "width": 56.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.5,
      "sourceWidth": 165.39,
      "targetWidth": 165.39,
      "width": 165.39,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.2,
      "sourceWidth": 5.21,
      "targetWidth": 5.21,
      "width": 5.21,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 13.02,
      "targetWidth": 13.02,
      "width": 13.02,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "financial",
      "value": 0.9,
      "sourceWidth": 31.25,
      "targetWidth": 32.56,
      "width": 31.25,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 15.63,
      "targetWidth": 15.63,
      "width": 15.63,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 2.6,
      "targetWidth": 2.6,
      "width": 2.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.4,
      "sourceWidth": 85.95,
      "targetWidth": 85.95,
      "width": 85.95,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.6,
      "sourceWidth": 59.9,
      "targetWidth": 59.9,
      "width": 59.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.5,
      "sourceWidth": 18.23,
      "targetWidth": 18.23,
      "width": 18.23,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.027,
      "sourceWidth": 1.3,
      "targetWidth": 1.3,
      "width": 1.3,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "annotationsSvg": "<g data-typography-role=\"brand\" transform=\"translate(1020 309)\"><path d=\"M0 0H339L170 168H0Z\" fill=\"#00afe5\"/><path d=\"M0 126H212L170 168H0Z\" fill=\"#2068b8\"/><text x=\"0\" y=\"136\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"142\" font-weight=\"900\" fill=\"white\" textLength=\"252\" lengthAdjust=\"spacingAndGlyphs\">SAP</text></g><g fill=\"#777777\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"23\"><text x=\"50\" y=\"1310\">SaaS = Software as a Service</text><text x=\"50\" y=\"1340\">PaaS = Platform as a Service</text><text x=\"50\" y=\"1370\">IaaS = Infrastructure as a Service</text></g>",
  "i18n": {
    "zh": {
      "name": "SAP · 2022 财年第四季度",
      "meta": {
        "title": "SAP 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月"
      },
      "nodes": {
        "saas": {
          "label": "SaaS",
          "notes": [
            "毛利率 73%",
            "同比 +31%"
          ]
        },
        "paas": {
          "label": "PaaS",
          "notes": [
            "毛利率 80%",
            "同比 +51%"
          ]
        },
        "iaas": {
          "label": "IaaS",
          "notes": [
            "毛利率 28%",
            "同比 (16%)"
          ]
        },
        "software_licenses": {
          "label": "软件许可证",
          "notes": [
            "同比 (38%)"
          ]
        },
        "software_support": {
          "label": "软件支持",
          "notes": [
            "毛利率 87%",
            "同比 +3%"
          ]
        },
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +30%"
          ]
        },
        "licenses_support": {
          "label": [
            "许可证",
            "与支持"
          ],
          "notes": [
            "同比 (11%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "毛利率 24%",
            "同比 +15%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 72%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 20%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 (14 个百分点)"
          ]
        },
        "financial": {
          "label": "财务费用",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        }
      },
      "annotationsSvg": "<g data-typography-role=\"brand\" transform=\"translate(1020 309)\"><path d=\"M0 0H339L170 168H0Z\" fill=\"#00afe5\"/><path d=\"M0 126H212L170 168H0Z\" fill=\"#2068b8\"/><text x=\"0\" y=\"136\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"142\" font-weight=\"900\" fill=\"white\" textLength=\"252\" lengthAdjust=\"spacingAndGlyphs\">SAP</text></g><g fill=\"#777777\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"23\"><text x=\"50\" y=\"1310\">SaaS = 软件即服务</text><text x=\"50\" y=\"1340\">PaaS = 平台即服务</text><text x=\"50\" y=\"1370\">IaaS = 基础设施即服务</text></g>",
      "layout": {
        "labels": {
          "saas": {
            "blocks": [
              {
                "x": 418.02,
                "top": 248.73,
                "anchor": "middle",
                "lineGap": 9,
                "valueColor": "#35495f",
                "noteColor": "#777777",
                "valueSize": 38,
                "noteSize": 28,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 341.19,
                "top": 354.86,
                "anchor": "end",
                "lineGap": 9,
                "nameSize": 36,
                "noteSize": 28,
                "nameColor": "#35495f",
                "noteColor": "#777777",
                "lines": [
                  {
                    "text": "SaaS",
                    "size": 36,
                    "weight": 700,
                    "color": "#35495f"
                  },
                  {
                    "text": "毛利率 73%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "paas": {
            "blocks": [
              {
                "x": 418.02,
                "top": 488.34,
                "anchor": "middle",
                "lineGap": 9,
                "valueColor": "#35495f",
                "noteColor": "#777777",
                "valueSize": 38,
                "noteSize": 28,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 +51%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 341.19,
                "top": 556.71,
                "anchor": "end",
                "lineGap": 9,
                "nameSize": 36,
                "noteSize": 28,
                "nameColor": "#35495f",
                "noteColor": "#777777",
                "lines": [
                  {
                    "text": "PaaS",
                    "size": 36,
                    "weight": 700,
                    "color": "#35495f"
                  },
                  {
                    "text": "毛利率 80%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "iaas": {
            "blocks": [
              {
                "x": 418.02,
                "top": 644.61,
                "anchor": "middle",
                "lineGap": 9,
                "valueColor": "#35495f",
                "noteColor": "#777777",
                "valueSize": 38,
                "noteSize": 28,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 (16%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 341.19,
                "top": 711.03,
                "anchor": "end",
                "lineGap": 9,
                "nameSize": 36,
                "noteSize": 28,
                "nameColor": "#35495f",
                "noteColor": "#777777",
                "lines": [
                  {
                    "text": "IaaS",
                    "size": 36,
                    "weight": 700,
                    "color": "#35495f"
                  },
                  {
                    "text": "毛利率 28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "software_support": {
            "blocks": [
              {
                "x": 418.02,
                "top": 971.48,
                "anchor": "middle",
                "lineGap": 9,
                "valueColor": "#1a68c0",
                "noteColor": "#777777",
                "valueSize": 38,
                "noteSize": 28,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 349.0,
                "top": 1089.98,
                "anchor": "end",
                "lineGap": 9,
                "nameSize": 36,
                "noteSize": 28,
                "nameColor": "#1a68c0",
                "noteColor": "#777777",
                "lines": [
                  {
                    "text": "软件支持",
                    "size": 36,
                    "weight": 700,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "毛利率 87%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 786.56,
                "top": 1151.19,
                "anchor": "middle",
                "lineGap": 9,
                "valueColor": "#02afeb",
                "noteColor": "#777777",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#02afeb"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 739.68,
                "top": 1243.65,
                "anchor": "end",
                "lineGap": 9,
                "nameColor": "#02afeb",
                "noteColor": "#777777",
                "noteSize": 28,
                "lines": [
                  {
                    "text": "服务",
                    "size": 38,
                    "weight": 700,
                    "color": "#02afeb"
                  },
                  {
                    "text": "毛利率 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
