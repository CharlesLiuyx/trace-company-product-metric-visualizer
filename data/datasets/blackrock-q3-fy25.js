(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "blackrock-q3-fy25",
  "name": "BlackRock - Q3 FY25",
  "company": "BlackRock",
  "meta": {
    "company": "BlackRock",
    "title": "BlackRock Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/blackrock-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2360,
    "hidePeriodStamp": true,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 720,
    "logoHeight": 134,
    "logoY": 310,
    "logoViewBox": "0 0 720 134",
    "logoSvg": "\n        <text x=\"350\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"137\" font-weight=\"900\" textLength=\"710\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#000000\">BlackRock</text>\n        <text x=\"714\" y=\"121\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#000000\">&#174;</text>\n      ",
    "logoX": 700
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#737373",
    "interfaceAudit": {
      "mode": "error"
    },
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
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
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
  "layout": {
    "scale": 40,
    "nodes": {
      "investment_advisory_fees": {
        "x": 407,
        "y": 462,
        "width": 72,
        "height": 204
      },
      "performance_fees": {
        "x": 407,
        "y": 813,
        "width": 72,
        "height": 20
      },
      "technology_services": {
        "x": 407,
        "y": 962,
        "width": 72,
        "height": 21
      },
      "distribution_fees": {
        "x": 407,
        "y": 1121,
        "width": 72,
        "height": 14
      },
      "advisory_other": {
        "x": 407,
        "y": 1264,
        "width": 72,
        "height": 2
      },
      "revenue": {
        "x": 1030,
        "y": 657,
        "width": 72,
        "height": 264
      },
      "operating_profit": {
        "x": 1652,
        "y": 466,
        "width": 73,
        "height": 79
      },
      "operating_expenses": {
        "x": 1650,
        "y": 902,
        "width": 73,
        "height": 185
      },
      "net_profit": {
        "x": 2275,
        "y": 290,
        "width": 73,
        "height": 62
      },
      "tax": {
        "x": 2276,
        "y": 639,
        "width": 72,
        "height": 19
      },
      "other": {
        "x": 2121,
        "y": 448,
        "width": 72,
        "height": 2
      },
      "compensation_benefits": {
        "x": 2276,
        "y": 774,
        "width": 72,
        "height": 96
      },
      "sales_asset_account_expenses": {
        "x": 2276,
        "y": 995,
        "width": 72,
        "height": 49
      },
      "ga": {
        "x": 2276,
        "y": 1169,
        "width": 72,
        "height": 32
      },
      "amortization_other": {
        "x": 2276,
        "y": 1327,
        "width": 72,
        "height": 10
      }
    },
    "labels": {
      "investment_advisory_fees": {
        "blocks": [
          {
            "x": 444,
            "top": 366,
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
                "text": "+25% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 489,
            "anchor": "end",
            "lineGap": 11,
            "lines": [
              {
                "text": "Investment",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "advisory, fees &",
                "size": 38,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "securities lending",
                "size": 38,
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
            "top": 717,
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
                "text": "+33% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 751,
            "anchor": "end",
            "lineGap": 11,
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
            "top": 865,
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
                "text": "+28% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 925,
            "anchor": "end",
            "lineGap": 11,
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
            "top": 1025,
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
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 1105,
            "anchor": "end",
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
            "top": 1168,
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
                "text": "+45% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 370,
            "top": 1242,
            "anchor": "end",
            "lines": [
              {
                "text": "Advisory & other",
                "size": 38,
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
            "top": 510,
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
                "text": "+25% Y/Y",
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
            "top": 275,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "30% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(9pp) Y/Y",
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
            "top": 1100,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2505,
            "top": 268,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "23% margin",
                "size": 29,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(9pp) Y/Y",
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
            "top": 610,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2160,
            "top": 464,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 33,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2506,
            "top": 763,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Compensation &",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "benefits",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sales_asset_account_expenses": {
        "blocks": [
          {
            "x": 2506,
            "top": 962,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Sales, asset &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Account expenses",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2506,
            "top": 1146,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "amortization_other": {
        "blocks": [
          {
            "x": 2506,
            "top": 1272,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Amortization &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
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
      "value": 5,
      "notes": [
        "+25% Y/Y"
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
      "value": 0.5,
      "notes": [
        "+33% Y/Y"
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
        "+28% Y/Y"
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
      "value": 0.4,
      "notes": [
        "+10% Y/Y"
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
        "+45% Y/Y"
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
      "value": 6.5,
      "notes": [
        "+25% Y/Y"
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
      "value": 2,
      "notes": [
        "30% margin",
        "(9pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
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
      "value": 4.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 1.5,
      "notes": [
        "23% margin",
        "(9pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 2,
      "order": 2,
      "type": "profit",
      "label": "Other",
      "value": 0.042,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$42M"
    },
    {
      "id": "compensation_benefits",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": [
        "Compensation &",
        "benefits"
      ],
      "value": 2.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sales_asset_account_expenses",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": [
        "Sales, asset &",
        "Account expenses"
      ],
      "value": 1.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "G&A",
      "value": 0.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "amortization_other",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Amortization &",
        "other"
      ],
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "investment_advisory_fees",
      "target": "revenue",
      "value": 5,
      "sourceWidth": 204,
      "targetWidth": 204,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "performance_fees",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 20,
      "targetWidth": 20,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "technology_services",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 21,
      "targetWidth": 21,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "distribution_fees",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "advisory_other",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 5,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2,
      "sourceWidth": 79,
      "targetWidth": 79,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 4.6,
      "sourceWidth": 185,
      "targetWidth": 185,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.5,
      "sourceWidth": 60,
      "targetWidth": 60,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 2.4,
      "sourceWidth": 96,
      "targetWidth": 96,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sales_asset_account_expenses",
      "value": 1.2,
      "sourceWidth": 49,
      "targetWidth": 49,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.8,
      "sourceWidth": 32,
      "targetWidth": 32,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization_other",
      "value": 0.3,
      "sourceWidth": 8,
      "targetWidth": 10,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.042,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1
    }
  ],
  "i18n": {
    "zh": {
      "name": "BlackRock · 2025 财年第三季度",
      "meta": {
        "title": "BlackRock 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月"
      },
      "nodes": {
        "investment_advisory_fees": {
          "label": "投资顾问、费用及证券借贷",
          "notes": [
            "同比 +25%"
          ]
        },
        "performance_fees": {
          "label": "投资顾问绩效费",
          "notes": [
            "同比 +33%"
          ]
        },
        "technology_services": {
          "label": "技术服务",
          "notes": [
            "同比 +28%"
          ]
        },
        "distribution_fees": {
          "label": "分销费用",
          "notes": [
            "同比 +10%"
          ]
        },
        "advisory_other": {
          "label": "顾问及其他",
          "notes": [
            "同比 +45%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +25%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 30%",
            "同比 -9 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 -9 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "sales_asset_account_expenses": {
          "label": "销售、资产及账户费用"
        },
        "ga": {
          "label": "管理费用"
        },
        "amortization_other": {
          "label": "摊销及其他"
        }
      },
      "layout": {
        "labels": {
          "investment_advisory_fees": {
            "blocks": [
              {
                "x": 444,
                "top": 366,
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
                    "text": "同比 +25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 370,
                "top": 517,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "投资顾问、费用及",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "证券借贷",
                    "size": 38,
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
                "top": 717,
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
                    "text": "同比 +33%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 370,
                "top": 776,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "投资顾问",
                    "size": 38,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "绩效费",
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
                "top": 865,
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
                    "text": "同比 +28%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 370,
                "top": 950,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "技术服务",
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
                "top": 1025,
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
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 370,
                "top": 1105,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "分销费用",
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
                "top": 1168,
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
                    "text": "同比 +45%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 370,
                "top": 1242,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "顾问及其他",
                    "size": 38,
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
                "top": 510,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
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
                    "text": "同比 +25%",
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
                "top": 275,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 30%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 -9 个百分点",
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
                "top": 1100,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2505,
                "top": 268,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 -9 个百分点",
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
                "top": 610,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2160,
                "top": 464,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2506,
                "top": 763,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "薪酬与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "福利",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sales_asset_account_expenses": {
            "blocks": [
              {
                "x": 2506,
                "top": 962,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售、资产及",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "账户费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2506,
                "top": 1146,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "amortization_other": {
            "blocks": [
              {
                "x": 2506,
                "top": 1272,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "摊销及",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}); })();
