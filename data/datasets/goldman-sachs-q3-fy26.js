(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q3-fy26",
  "name": "Goldman Sachs · Q3 FY26",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/goldman-sachs-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2508,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 242,
    "logoHeight": 242,
    "logoY": 241,
    "logoViewBox": "0 0 244 242",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).goldmanSachsWordmark || "",
    "logoX": 943
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#6b96c3",
        "label": "#6a96c3"
      },
      "hub": {
        "node": "#6b96c3",
        "label": "#6a96c3"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#b4c9dc",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text>\n      <g fill=\"#6b96c3\">\n        <rect x=\"118\" y=\"1133\" width=\"240\" height=\"148\" rx=\"29\"/>\n        <rect x=\"368\" y=\"1133\" width=\"349\" height=\"148\" rx=\"29\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"238\" y=\"1186\" font-size=\"29\" font-weight=\"800\">CET1 ratio</text>\n        <text x=\"238\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"cet1\">12.4%</text>\n        <text x=\"238\" y=\"1258\" font-size=\"22\" font-weight=\"400\">(1.9pp) Y/Y</text>\n        <text x=\"542.5\" y=\"1186\" font-size=\"29\" font-weight=\"800\">Annualized ROE</text>\n        <text x=\"542.5\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"roe\">18.7%</text>\n        <text x=\"542.5\" y=\"1258\" font-size=\"22\" font-weight=\"400\">+4.5pp Y/Y</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"28\" font-weight=\"400\">\n        <text x=\"244\" y=\"1320\">CET1 = Common Equity Tier 1</text>\n        <text x=\"162\" y=\"1352\">ROE = Return on average common equity</text>\n      </g>\n    </g>",
  "layout": {
    "scale": 14.827586,
    "nodes": {
      "global_banking_markets": {
        "x": 401,
        "y": 454,
        "width": 71,
        "height": 231
      },
      "asset_wealth_management": {
        "x": 401,
        "y": 849,
        "width": 71,
        "height": 87
      },
      "platform_solutions": {
        "x": 401,
        "y": 1080,
        "width": 71,
        "height": 2
      },
      "revenue": {
        "x": 1023,
        "y": 648,
        "width": 72,
        "height": 321
      },
      "pretax_income": {
        "x": 1649,
        "y": 507,
        "width": 71,
        "height": 120
      },
      "operating_expenses": {
        "x": 1646,
        "y": 891,
        "width": 73,
        "height": 194
      },
      "provision_for_credit_loss": {
        "x": 1646,
        "y": 1252,
        "width": 73,
        "height": 6
      },
      "net_income": {
        "x": 2269,
        "y": 232,
        "width": 71,
        "height": 90
      },
      "tax": {
        "x": 2269,
        "y": 416,
        "width": 71,
        "height": 29
      },
      "compensation_benefits": {
        "x": 2269,
        "y": 542,
        "width": 71,
        "height": 87
      },
      "transaction_based": {
        "x": 2269,
        "y": 714,
        "width": 71,
        "height": 51
      },
      "market_development": {
        "x": 2269,
        "y": 844,
        "width": 71,
        "height": 3
      },
      "communication_technology": {
        "x": 2269,
        "y": 943,
        "width": 71,
        "height": 11
      },
      "da": {
        "x": 2269,
        "y": 1053,
        "width": 71,
        "height": 9
      },
      "occupancy": {
        "x": 2269,
        "y": 1156,
        "width": 71,
        "height": 3
      },
      "professional_fees": {
        "x": 2269,
        "y": 1247,
        "width": 71,
        "height": 17
      },
      "other": {
        "x": 2269,
        "y": 1357,
        "width": 71,
        "height": 6
      }
    },
    "labels": {
      "platform_solutions": {
        "blocks": [
          {
            "x": 436.5,
            "top": 976,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(72%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 124
              }
            ]
          },
          {
            "x": 385,
            "top": 1003,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform Solutions",
                "size": 37,
                "weight": 800,
                "textLength": 376
              },
              {
                "text": "(45%) net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "global_banking_markets": {
        "blocks": [
          {
            "x": 428,
            "top": 362,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+32% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 376,
            "top": 510,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Global Banking &",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Markets",
                "size": 38,
                "weight": 800
              },
              {
                "text": "32% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 417,
            "top": 756,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 365,
            "top": 823,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 38,
                "weight": 800
              },
              {
                "text": "20% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1074,
            "top": 504,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1688,
            "top": 402,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1673,
            "top": 1104.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "provision_for_credit_loss": {
        "blocks": [
          {
            "x": 1682.5,
            "top": 1278,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Provision for",
                "size": 35,
                "weight": 800
              },
              {
                "text": "credit loss",
                "size": 35,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2378,
            "top": 220,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2440,
            "top": 400,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2497,
            "top": 533.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Compensation",
                "size": 30,
                "weight": 800
              },
              {
                "text": "& benefits",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 2497,
            "top": 705,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Transaction based",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "market_development": {
        "blocks": [
          {
            "x": 2497,
            "top": 815,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Market dev.",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "communication_technology": {
        "blocks": [
          {
            "x": 2497,
            "top": 912.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Communication,",
                "size": 30,
                "weight": 800
              },
              {
                "text": "Technology",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2497,
            "top": 1025,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "D&A",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2497,
            "top": 1127,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Occupancy",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2497,
            "top": 1221,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Professional fees",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2497,
            "top": 1326,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "global_banking_markets",
      "label": [
        "Global Banking &",
        "Markets"
      ],
      "value": 13.5,
      "notes": [
        "+32% Y/Y",
        "32% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$13.5B"
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 5.1,
      "notes": [
        "+14% Y/Y",
        "20% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$5.1B"
    },
    {
      "id": "platform_solutions",
      "label": "Platform Solutions",
      "value": 0.2,
      "notes": [
        "(72%) Y/Y",
        "(45%) net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$0.2B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 18.7,
      "notes": [
        "+23% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$18.7B"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 7,
      "type": "profit",
      "col": 2,
      "order": 0,
      "valueText": "$7.0B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 11.3,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($11.3B)"
    },
    {
      "id": "provision_for_credit_loss",
      "label": [
        "Provision for",
        "credit loss"
      ],
      "value": 0.4,
      "type": "cost",
      "col": 2,
      "order": 2,
      "valueText": "($0.4B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 5.3,
      "notes": [
        "+29% Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "$5.3B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.7,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($1.7B)"
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 5.1,
      "type": "cost",
      "col": 3,
      "order": 2,
      "valueText": "($5.1B)"
    },
    {
      "id": "transaction_based",
      "label": "Transaction based",
      "value": 3,
      "type": "cost",
      "col": 3,
      "order": 3,
      "valueText": "($3.0B)"
    },
    {
      "id": "market_development",
      "label": "Market dev.",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 4,
      "valueText": "($0.2B)"
    },
    {
      "id": "communication_technology",
      "label": [
        "Communication,",
        "Technology"
      ],
      "value": 0.7,
      "type": "cost",
      "col": 3,
      "order": 5,
      "valueText": "($0.7B)"
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 6,
      "valueText": "($0.5B)"
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($0.3B)"
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($0.4B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 9,
      "valueText": "($1.1B)"
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 13.5,
      "sourceWidth": 231,
      "targetWidth": 231,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 5.1,
      "sourceWidth": 87,
      "targetWidth": 87,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 3,
      "targetOrder": 2,
      "linkTint": "#b4c9dc"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 7,
      "sourceWidth": 120,
      "targetWidth": 120,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 11.3,
      "sourceWidth": 195,
      "targetWidth": 194,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.4,
      "sourceWidth": 6,
      "targetWidth": 6,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 5.3,
      "sourceWidth": 91,
      "targetWidth": 90,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.7,
      "sourceWidth": 29,
      "targetWidth": 29,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 5.1,
      "sourceWidth": 88,
      "targetWidth": 87,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 3,
      "sourceWidth": 52,
      "targetWidth": 51,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 11,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.5,
      "sourceWidth": 9,
      "targetWidth": 9,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 3,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 20,
      "targetWidth": 17,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 1.1,
      "sourceWidth": 7,
      "targetWidth": 6,
      "sourceOrder": 7,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Goldman Sachs · 2026 财年第三季度",
      "meta": {
        "title": "Goldman Sachs 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月"
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text>\n      <g fill=\"#6b96c3\">\n        <rect x=\"118\" y=\"1133\" width=\"240\" height=\"148\" rx=\"29\"/>\n        <rect x=\"368\" y=\"1133\" width=\"349\" height=\"148\" rx=\"29\"/>\n      </g>\n      <g fill=\"#ffffff\" text-anchor=\"middle\">\n        <text x=\"238\" y=\"1186\" font-size=\"29\" font-weight=\"800\">CET1 比率</text>\n        <text x=\"238\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"cet1\">12.4%</text>\n        <text x=\"238\" y=\"1258\" font-size=\"22\" font-weight=\"400\">同比 (1.9 个百分点)</text>\n        <text x=\"542.5\" y=\"1186\" font-size=\"29\" font-weight=\"800\">年化 ROE</text>\n        <text x=\"542.5\" y=\"1226\" font-size=\"28\" font-weight=\"400\" data-operating-metric=\"roe\">18.7%</text>\n        <text x=\"542.5\" y=\"1258\" font-size=\"22\" font-weight=\"400\">同比 +4.5 个百分点</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"28\" font-weight=\"400\">\n        <text x=\"244\" y=\"1320\">CET1 = 普通股一级资本</text>\n        <text x=\"162\" y=\"1352\">ROE = 平均普通股股东权益回报率</text>\n      </g>\n    </g>",
      "nodes": {
        "global_banking_markets": {
          "label": "全球银行与市场",
          "notes": [
            "同比 +32%",
            "净利率 32%"
          ]
        },
        "asset_wealth_management": {
          "label": "资产与财富管理",
          "notes": [
            "同比 +14%",
            "净利率 20%"
          ]
        },
        "platform_solutions": {
          "label": "平台解决方案",
          "notes": [
            "同比 (72%)",
            "净利率 (45%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "provision_for_credit_loss": {
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +29%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "transaction_based": {
          "label": "交易相关"
        },
        "market_development": {
          "label": "市场开发"
        },
        "communication_technology": {
          "label": "通信与技术"
        },
        "da": {
          "label": "折旧与摊销"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "professional_fees": {
          "label": "专业费用"
        },
        "other": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "platform_solutions": {
            "blocks": [
              {
                "x": 436.5,
                "top": 976,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (72%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 385,
                "top": 1003,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台解决方案",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "净利率 (45%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "global_banking_markets": {
            "blocks": [
              {
                "x": 428,
                "top": 362,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +32%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 376,
                "top": 510,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "全球银行与市场",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "净利率 32%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 417,
                "top": 756,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 365,
                "top": 823,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "资产与财富管理",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "净利率 20%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1074,
                "top": 504,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1688,
                "top": 402,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1673,
                "top": 1104.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "provision_for_credit_loss": {
            "blocks": [
              {
                "x": 1682.5,
                "top": 1278,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2378,
                "top": 220,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2440,
                "top": 400,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2497,
                "top": 533.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 2497,
                "top": 705,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "market_development": {
            "blocks": [
              {
                "x": 2497,
                "top": 815,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "communication_technology": {
            "blocks": [
              {
                "x": 2497,
                "top": 912.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "通信与技术",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2497,
                "top": 1025,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2497,
                "top": 1127,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2497,
                "top": 1221,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2497,
                "top": 1326,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "12.4",
      "literal": "12.4%",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "roe",
      "value": "18.7",
      "literal": "18.7%",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    }
  ]
});})();
