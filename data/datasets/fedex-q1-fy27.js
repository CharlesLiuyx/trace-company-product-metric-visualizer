(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "fedex-q1-fy27",
  "name": "FedEx · Q1 FY27",
  "company": "FedEx",
  "meta": {
    "company": "FedEx",
    "title": "FedEx Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/fedex-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2090,
    "periodX": 178,
    "periodY": 300,
    "periodNoteY": 342
  },
  "nodes": [
    {
      "id": "us_domestic",
      "label": "US Domestic",
      "value": 14.7,
      "type": "source",
      "col": 0,
      "notes": [
        "+10% Y/Y",
        "9% operating margin"
      ],
      "valueText": "$14.7B"
    },
    {
      "id": "international",
      "label": "International",
      "value": 7.5,
      "type": "source",
      "col": 0,
      "notes": [
        "+17% Y/Y",
        "2% operating margin"
      ],
      "valueText": "$7.5B"
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 0.7,
      "type": "source",
      "col": 0,
      "notes": [
        "+0% Y/Y"
      ],
      "valueText": "$0.7B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 22.9,
      "type": "hub",
      "col": 1,
      "notes": [
        "+12% Y/Y"
      ],
      "valueText": "$22.9B"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.1,
      "type": "profit",
      "col": 2,
      "notes": [
        "5% margin",
        "(0pp) Y/Y"
      ],
      "valueText": "$1.1B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 21.8,
      "type": "cost",
      "col": 2,
      "notes": [],
      "valueText": "($21.8B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.3,
      "type": "profit",
      "col": 3,
      "notes": [
        "1% margin",
        "(2pp) Y/Y"
      ],
      "valueText": "$0.3B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($0.1B)"
    },
    {
      "id": "other_expenses",
      "label": "Other",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($0.6B)"
    },
    {
      "id": "salaries_benefits",
      "label": "Salaries & benefits",
      "value": 7.4,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($7.4B)"
    },
    {
      "id": "purchased_transportation",
      "label": [
        "Purchased",
        "transportation"
      ],
      "value": 6.5,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($6.5B)"
    },
    {
      "id": "rentals",
      "label": "Rentals",
      "value": 1.2,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($1.2B)"
    },
    {
      "id": "depreciation_amortization",
      "label": [
        "Depreciation &",
        "Amortization"
      ],
      "value": 1,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($1.0B)"
    },
    {
      "id": "fuel",
      "label": "Fuel",
      "value": 1.3,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($1.3B)"
    },
    {
      "id": "maintenance",
      "label": "Maintenance",
      "value": 0.8,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($0.8B)"
    },
    {
      "id": "other_operating",
      "label": "Other",
      "value": 3.7,
      "type": "cost",
      "col": 3,
      "notes": [],
      "valueText": "($3.7B)"
    }
  ],
  "links": [
    {
      "source": "us_domestic",
      "target": "revenue",
      "value": 14.7,
      "sourceWidth": 226,
      "targetWidth": 226,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#a88ec4"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 7.5,
      "sourceWidth": 116,
      "targetWidth": 114,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a88ec4"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 11,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#a88ec4"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.1,
      "sourceWidth": 17,
      "targetWidth": 16,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 21.8,
      "sourceWidth": 334,
      "targetWidth": 334,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expenses",
      "value": 0.6,
      "sourceWidth": 3,
      "targetWidth": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "salaries_benefits",
      "value": 7.4,
      "sourceWidth": 115,
      "targetWidth": 115,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 6.5,
      "sourceWidth": 100,
      "targetWidth": 100,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rentals",
      "value": 1.2,
      "sourceWidth": 18,
      "targetWidth": 18,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 1,
      "sourceWidth": 15,
      "targetWidth": 15,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.3,
      "sourceWidth": 20,
      "targetWidth": 20,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.8,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 3.7,
      "sourceWidth": 52,
      "targetWidth": 57,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "us_domestic": {
        "x": 353,
        "y": 507,
        "width": 73,
        "height": 226
      },
      "international": {
        "x": 353,
        "y": 872,
        "width": 73,
        "height": 116
      },
      "other_revenue": {
        "x": 353,
        "y": 1128,
        "width": 73,
        "height": 11
      },
      "revenue": {
        "x": 975,
        "y": 651,
        "width": 73,
        "height": 351
      },
      "operating_profit": {
        "x": 1598,
        "y": 492,
        "width": 73,
        "height": 16
      },
      "operating_expenses": {
        "x": 1598,
        "y": 800,
        "width": 73,
        "height": 334
      },
      "net_profit": {
        "x": 2221,
        "y": 262,
        "width": 73,
        "height": 3
      },
      "tax": {
        "x": 2221,
        "y": 424,
        "width": 73,
        "height": 10
      },
      "other_expenses": {
        "x": 2221,
        "y": 507,
        "width": 73,
        "height": 2
      },
      "salaries_benefits": {
        "x": 2221,
        "y": 576,
        "width": 73,
        "height": 115
      },
      "purchased_transportation": {
        "x": 2221,
        "y": 752,
        "width": 73,
        "height": 100
      },
      "rentals": {
        "x": 2221,
        "y": 933,
        "width": 73,
        "height": 18
      },
      "depreciation_amortization": {
        "x": 2221,
        "y": 1038,
        "width": 73,
        "height": 15
      },
      "fuel": {
        "x": 2221,
        "y": 1142,
        "width": 73,
        "height": 20
      },
      "maintenance": {
        "x": 2221,
        "y": 1248,
        "width": 73,
        "height": 14
      },
      "other_operating": {
        "x": 2221,
        "y": 1336,
        "width": 73,
        "height": 57
      }
    },
    "labels": {
      "us_domestic": {
        "blocks": [
          {
            "x": 386,
            "top": 411,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#4d148c"
              },
              {
                "text": "+10% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 190,
            "top": 632,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "US Domestic",
                "size": 32,
                "weight": 800,
                "color": "#4d148c"
              },
              {
                "text": "9% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 386,
            "top": 776,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#4d148c"
              },
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 190,
            "top": 910,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "International",
                "size": 32,
                "weight": 800,
                "color": "#4d148c"
              },
              {
                "text": "2% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 386,
            "top": 1030,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#4d148c"
              },
              {
                "text": "+0% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 246,
            "top": 1114,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#4d148c"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1012,
            "top": 508,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#4d148c"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#4d148c"
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1635,
            "top": 311,
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
                "text": "5% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1635,
            "top": 1156,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 28,
                "weight": 400,
                "color": "#777777"
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
            "x": 2464,
            "top": 212,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "1% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2464,
            "top": 417,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
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
      "other_expenses": {
        "blocks": [
          {
            "x": 2464,
            "top": 494,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
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
      "salaries_benefits": {
        "blocks": [
          {
            "x": 2464,
            "top": 600,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Salaries & benefits",
                "size": 32,
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
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2464,
            "top": 744,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Purchased",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "transportation",
                "size": 28,
                "weight": 400,
                "color": "#777777"
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
      "rentals": {
        "blocks": [
          {
            "x": 2464,
            "top": 926,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Rentals",
                "size": 32,
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
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2464,
            "top": 1012,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Amortization",
                "size": 28,
                "weight": 400,
                "color": "#777777"
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
      "fuel": {
        "blocks": [
          {
            "x": 2464,
            "top": 1138,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Fuel",
                "size": 32,
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
      "maintenance": {
        "blocks": [
          {
            "x": 2464,
            "top": 1243,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Maintenance",
                "size": 32,
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
      "other_operating": {
        "blocks": [
          {
            "x": 2464,
            "top": 1350,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
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
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/fedex/company-wordmark.png",
      "x": 746,
      "y": 251,
      "width": 534,
      "height": 155
    },
    {
      "key": "domestic-express",
      "href": "data/assets/raster-annotations/fedex/express.png",
      "x": 78,
      "y": 522,
      "width": 221,
      "height": 103
    },
    {
      "key": "international-express",
      "href": "data/assets/raster-annotations/fedex/express.png",
      "x": 92,
      "y": 795,
      "width": 221,
      "height": 103
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#4d148c",
        "label": "#4d148c"
      },
      "hub": {
        "node": "#4d148c",
        "label": "#4d148c"
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
    "linkOpacity": 1,
    "type": {
      "name": 34,
      "value": 38,
      "note": 28,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "i18n": {
    "zh": {
      "name": "联邦快递 · 2027 财年第一季度",
      "meta": {
        "title": "联邦快递 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 1740
      },
      "nodes": {
        "us_domestic": {
          "label": "美国国内",
          "notes": [
            "同比 +10%",
            "营业利润率 9%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +17%",
            "营业利润率 2%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +0%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 5%",
            "同比 (0 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expenses": {
          "label": "其他",
          "notes": []
        },
        "salaries_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "purchased_transportation": {
          "label": [
            "外购",
            "运输"
          ],
          "notes": []
        },
        "rentals": {
          "label": "租赁费用",
          "notes": []
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ],
          "notes": []
        },
        "fuel": {
          "label": "燃油",
          "notes": []
        },
        "maintenance": {
          "label": "维修",
          "notes": []
        },
        "other_operating": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "us_domestic": {
            "blocks": [
              {
                "x": 386,
                "top": 411,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#4d148c"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 190,
                "top": 632,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "美国国内",
                    "size": 32,
                    "weight": 800,
                    "color": "#4d148c"
                  },
                  {
                    "text": "营业利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 386,
                "top": 776,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#4d148c"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 190,
                "top": 910,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "国际",
                    "size": 32,
                    "weight": 800,
                    "color": "#4d148c"
                  },
                  {
                    "text": "营业利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 386,
                "top": 1030,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#4d148c"
                  },
                  {
                    "text": "同比 +0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 246,
                "top": 1114,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#4d148c"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1012,
                "top": 508,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#4d148c"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#4d148c"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1635,
                "top": 311,
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
                    "text": "利润率 5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1635,
                "top": 1156,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
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
                "x": 2464,
                "top": 212,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2464,
                "top": 417,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
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
          "other_expenses": {
            "blocks": [
              {
                "x": 2464,
                "top": 494,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
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
          "salaries_benefits": {
            "blocks": [
              {
                "x": 2464,
                "top": 600,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 32,
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
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2464,
                "top": 744,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "外购",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运输",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
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
          "rentals": {
            "blocks": [
              {
                "x": 2464,
                "top": 926,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "租赁费用",
                    "size": 32,
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2464,
                "top": 1012,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "摊销",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
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
          "fuel": {
            "blocks": [
              {
                "x": 2464,
                "top": 1138,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "燃油",
                    "size": 32,
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
          "maintenance": {
            "blocks": [
              {
                "x": 2464,
                "top": 1243,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "维修",
                    "size": 32,
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
          "other_operating": {
            "blocks": [
              {
                "x": 2464,
                "top": 1350,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
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
          }
        }
      }
    }
  }
});})();
