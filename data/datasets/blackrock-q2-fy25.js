(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "blackrock-q2-fy25",
  "name": "BlackRock - Q2 FY25",
  "company": "BlackRock",
  "meta": {
    "company": "BlackRock",
    "title": "BlackRock Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/blackrock-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2360,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 720,
    "logoHeight": 134,
    "logoY": 278,
    "logoViewBox": "0 0 720 134",
    "logoSvg": "\n        <text x=\"350\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"137\" font-weight=\"900\" textLength=\"710\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\">BlackRock</text>\n        <text x=\"714\" y=\"121\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#000000\">&#174;</text>\n      ",
    "logoX": 684
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#737373",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#990e00"
      }
    },
    "linkTint": {
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "",
  "layout": {
    "scale": 43,
    "nodes": {
      "investment_advisory_fees": {
        "x": 408,
        "y": 485,
        "width": 72,
        "height": 189
      },
      "performance_fees": {
        "x": 408,
        "y": 844,
        "width": 72,
        "height": 4
      },
      "technology_services": {
        "x": 408,
        "y": 989,
        "width": 72,
        "height": 22
      },
      "distribution_fees": {
        "x": 408,
        "y": 1144,
        "width": 72,
        "height": 13
      },
      "advisory_other": {
        "x": 408,
        "y": 1293,
        "width": 72,
        "height": 2
      },
      "revenue": {
        "x": 1030,
        "y": 696,
        "width": 72,
        "height": 231
      },
      "operating_profit": {
        "x": 1653,
        "y": 554,
        "width": 72,
        "height": 74
      },
      "operating_expenses": {
        "x": 1651,
        "y": 903,
        "width": 72,
        "height": 158
      },
      "other": {
        "x": 2126,
        "y": 519,
        "width": 72,
        "height": 22
      },
      "net_profit": {
        "x": 2276,
        "y": 404,
        "width": 72,
        "height": 71
      },
      "tax": {
        "x": 2276,
        "y": 708,
        "width": 72,
        "height": 25
      },
      "compensation_benefits": {
        "x": 2276,
        "y": 845,
        "width": 72,
        "height": 75
      },
      "sales_asset_account_expenses": {
        "x": 2276,
        "y": 1026,
        "width": 72,
        "height": 45
      },
      "ga": {
        "x": 2276,
        "y": 1189,
        "width": 72,
        "height": 29
      },
      "amortization_other": {
        "x": 2276,
        "y": 1334,
        "width": 72,
        "height": 6
      }
    },
    "labels": {
      "other": {
        "blocks": [
          {
            "x": 2162,
            "top": 558,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      },
      "investment_advisory_fees": {
        "blocks": [
          {
            "x": 444,
            "top": 395,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 515,
            "anchor": "end",
            "lineGap": 11,
            "semanticRole": "source-group",
            "lines": [
              {
                "text": "Investment",
                "size": 39,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "advisory, fees &",
                "size": 39,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "securities lending",
                "size": 39,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "performance_fees": {
        "blocks": [
          {
            "x": 444,
            "top": 754,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(43%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 747,
            "anchor": "end",
            "lineGap": 11,
            "semanticRole": "source-group",
            "lines": [
              {
                "text": "Investment",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "advisory",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "performance fees",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "technology_services": {
        "blocks": [
          {
            "x": 444,
            "top": 901,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+26% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 958,
            "anchor": "end",
            "lineGap": 11,
            "semanticRole": "source-group",
            "lines": [
              {
                "text": "Technology",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "services",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "distribution_fees": {
        "blocks": [
          {
            "x": 444,
            "top": 1053,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+1% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 1132,
            "anchor": "end",
            "semanticRole": "source-group",
            "lines": [
              {
                "text": "Distribution fees",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "advisory_other": {
        "blocks": [
          {
            "x": 444,
            "top": 1202,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 1276,
            "anchor": "end",
            "semanticRole": "source-group",
            "lines": [
              {
                "text": "Advisory & other",
                "size": 41,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1066,
            "top": 554,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+13% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1689,
            "top": 369,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "32% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1689,
            "top": 1081,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 33,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "expenses",
                "size": 33,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#990e00"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2505,
            "top": 369,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "31% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2505,
            "top": 681,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 33,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#990e00"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2506,
            "top": 829,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Compensation &",
                "size": 33,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "benefits",
                "size": 33,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#990e00"
              }
            ]
          }
        ]
      },
      "sales_asset_account_expenses": {
        "blocks": [
          {
            "x": 2506,
            "top": 1001,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Sales, asset &",
                "size": 31,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "Account expenses",
                "size": 31,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#990e00"
              }
            ]
          }
        ]
      },
      "amortization_other": {
        "blocks": [
          {
            "x": 2506,
            "top": 1283,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Amortization &",
                "size": 31,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "other",
                "size": 31,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#990e00"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2506,
            "top": 1170,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#990e00"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#990e00"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "investment_advisory_fees",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Investment advisory,",
        "fees & securities lending"
      ],
      "value": 4.5,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "performance_fees",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Investment advisory",
        "performance fees"
      ],
      "value": 0.1,
      "notes": [
        "(43%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "technology_services",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Technology services",
      "value": 0.5,
      "notes": [
        "+26% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "distribution_fees",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Distribution fees",
      "value": 0.3,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "advisory_other",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Advisory & other",
      "value": 0.1,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 5.4,
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.7,
      "notes": [
        "32% margin",
        "(6pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 3.7,
      "color": "#cc0000",
      "labelColor": "#990e00",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.5,
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 1.7,
      "notes": [
        "31% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.6,
      "color": "#cc0000",
      "labelColor": "#990e00",
      "linkTint": "#e08585"
    },
    {
      "id": "compensation_benefits",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": [
        "Compensation &",
        "benefits"
      ],
      "value": 1.8,
      "color": "#cc0000",
      "labelColor": "#990e00",
      "linkTint": "#e08585"
    },
    {
      "id": "sales_asset_account_expenses",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": [
        "Sales, asset &",
        "Account expenses"
      ],
      "value": 1.1,
      "color": "#cc0000",
      "labelColor": "#990e00",
      "linkTint": "#e08585"
    },
    {
      "id": "amortization_other",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "Amortization &",
        "other"
      ],
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#990e00",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "G&A",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#990e00",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "investment_advisory_fees",
      "target": "revenue",
      "value": 4.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 189,
      "targetWidth": 189
    },
    {
      "source": "performance_fees",
      "target": "revenue",
      "value": 0.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 4,
      "targetWidth": 4
    },
    {
      "source": "technology_services",
      "target": "revenue",
      "value": 0.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 22,
      "targetWidth": 22
    },
    {
      "source": "distribution_fees",
      "target": "revenue",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 13,
      "targetWidth": 13
    },
    {
      "source": "advisory_other",
      "target": "revenue",
      "value": 0.1,
      "sourceOrder": 0,
      "targetOrder": 4,
      "sourceWidth": 2,
      "targetWidth": 3
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 74,
      "targetWidth": 74
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 3.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 157,
      "targetWidth": 158
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 49,
      "targetWidth": 49
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 25,
      "targetWidth": 25
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 22,
      "targetWidth": 22,
      "y0": 530,
      "y1": 464,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 1.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 76,
      "targetWidth": 75
    },
    {
      "source": "operating_expenses",
      "target": "sales_asset_account_expenses",
      "value": 1.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 45,
      "targetWidth": 45
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 29,
      "targetWidth": 29
    },
    {
      "source": "operating_expenses",
      "target": "amortization_other",
      "value": 0.2,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 8,
      "targetWidth": 6
    }
  ],
  "i18n": {
    "zh": {
      "name": "BlackRock · 2025 财年第二季度",
      "meta": {
        "title": "BlackRock 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月"
      },
      "nodes": {
        "investment_advisory_fees": {
          "label": "投资顾问、费用及证券借贷",
          "notes": [
            "同比 +15%"
          ]
        },
        "performance_fees": {
          "label": "投资顾问绩效费",
          "notes": [
            "同比 -43%"
          ]
        },
        "technology_services": {
          "label": "技术服务",
          "notes": [
            "同比 +26%"
          ]
        },
        "distribution_fees": {
          "label": "分销费用",
          "notes": [
            "同比 +1%"
          ]
        },
        "advisory_other": {
          "label": "顾问及其他",
          "notes": [
            "同比 +6%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 32%",
            "同比 -6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 31%",
            "同比 -1 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "sales_asset_account_expenses": {
          "label": "销售、资产及账户费用"
        },
        "amortization_other": {
          "label": "摊销及其他"
        },
        "ga": {
          "label": "管理费用"
        }
      }
    }
  }
}); })();
