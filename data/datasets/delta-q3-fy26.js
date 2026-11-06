window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "delta-q3-fy26",
  "name": "Delta · Q3 FY26",
  "company": "Delta Air Lines",
  "meta": {
    "company": "Delta Air Lines",
    "title": "Delta Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/delta-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1338,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2055,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#003d7a",
        "label": "#003d7a"
      },
      "hub": {
        "node": "#003d7a",
        "label": "#155077"
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
      "source": "#85a0bc",
      "hub": "#85a0bc",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 10
    }
  },
  "rasterAnnotations": [
    {
      "key": "delta-company-lockup",
      "href": "data/assets/raster-annotations/delta/company-lockup.png",
      "x": 480,
      "y": 257,
      "width": 805,
      "height": 126
    }
  ],
  "layout": {
    "nodes": {
      "passenger": {
        "x": 271,
        "y": 458,
        "width": 72,
        "height": 261
      },
      "cargo": {
        "x": 271,
        "y": 927,
        "width": 72,
        "height": 5
      },
      "other_revenue": {
        "x": 274,
        "y": 1100,
        "width": 72,
        "height": 72
      },
      "revenue": {
        "x": 895,
        "y": 626,
        "width": 72,
        "height": 339
      },
      "operating_profit": {
        "x": 1518,
        "y": 449,
        "width": 72,
        "height": 24
      },
      "operating_expenses": {
        "x": 1518,
        "y": 822,
        "width": 72,
        "height": 314
      },
      "net_profit": {
        "x": 2141,
        "y": 284,
        "width": 72,
        "height": 12
      },
      "tax": {
        "x": 2141,
        "y": 432,
        "width": 72,
        "height": 6
      },
      "interest_other": {
        "x": 2141,
        "y": 506,
        "width": 72,
        "height": 4
      },
      "salaries_benefits": {
        "x": 2141,
        "y": 546,
        "width": 72,
        "height": 80
      },
      "aircraft_fuel": {
        "x": 2141,
        "y": 675,
        "width": 72,
        "height": 72
      },
      "ancillary_business": {
        "x": 2141,
        "y": 800,
        "width": 72,
        "height": 43
      },
      "contracted_services": {
        "x": 2141,
        "y": 909,
        "width": 72,
        "height": 20
      },
      "landing_fees": {
        "x": 2141,
        "y": 1006,
        "width": 72,
        "height": 16
      },
      "regional_carrier": {
        "x": 2141,
        "y": 1094,
        "width": 72,
        "height": 10
      },
      "depreciation_amortization": {
        "x": 2141,
        "y": 1180,
        "width": 72,
        "height": 11
      },
      "maintenance": {
        "x": 2141,
        "y": 1267,
        "width": 72,
        "height": 10
      },
      "other_operating": {
        "x": 2141,
        "y": 1348,
        "width": 72,
        "height": 43
      }
    },
    "labels": {
      "passenger": {
        "blocks": [
          {
            "x": 309,
            "top": 363,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#155077"
              },
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 251,
            "top": 565,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Passenger",
                "size": 40,
                "weight": 800,
                "color": "#003d7a"
              }
            ]
          }
        ]
      },
      "cargo": {
        "blocks": [
          {
            "x": 307,
            "top": 833,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#155077"
              },
              {
                "text": "+29% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 215,
            "top": 905,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cargo",
                "size": 40,
                "weight": 800,
                "color": "#003d7a"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 307,
            "top": 1007,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#155077"
              },
              {
                "text": "+48% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 215,
            "top": 1111.5,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#003d7a"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 931,
            "top": 480,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#155077"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#155077"
              },
              {
                "text": "+21% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1551.5,
            "top": 262,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1555,
            "top": 1155,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2398,
            "top": 226,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "4% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "salaries_benefits": {
        "blocks": [
          {
            "x": 2240,
            "top": 573,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Salaries & benefits ($4.8B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "aircraft_fuel": {
        "blocks": [
          {
            "x": 2240,
            "top": 695,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Aircraft fuel ($4.4B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "ancillary_business": {
        "blocks": [
          {
            "x": 2240,
            "top": 808,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Ancillary business ($2.6B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "contracted_services": {
        "blocks": [
          {
            "x": 2240,
            "top": 907,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Contracted services ($1.3B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "landing_fees": {
        "blocks": [
          {
            "x": 2240,
            "top": 999,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Landing fees ($1.0B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2240,
            "top": 1257,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Maintenance ($0.7B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2240,
            "top": 1168,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "D&A ($0.7B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "regional_carrier": {
        "blocks": [
          {
            "x": 2240,
            "top": 1082,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Regional carrier ($0.7B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2240,
            "top": 1356,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($2.6B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2240,
            "top": 420,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax ($0.4B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest_other": {
        "blocks": [
          {
            "x": 2240,
            "top": 492,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest & other ($0.4B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "passenger",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Passenger",
      "value": 15.5,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#003d7a",
      "labelColor": "#003d7a",
      "linkTint": "#85a0bc"
    },
    {
      "id": "cargo",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Cargo",
      "value": 0.3,
      "notes": [
        "+29% Y/Y"
      ],
      "color": "#003d7a",
      "labelColor": "#003d7a",
      "linkTint": "#85a0bc"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Other",
      "value": 4.4,
      "notes": [
        "+48% Y/Y"
      ],
      "color": "#003d7a",
      "labelColor": "#003d7a",
      "linkTint": "#85a0bc"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 20.2,
      "notes": [
        "+21% Y/Y"
      ],
      "color": "#003d7a",
      "labelColor": "#155077",
      "linkTint": "#85a0bc"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.5,
      "notes": [
        "7% margin",
        "(3pp) Y/Y"
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
      "value": 18.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.8,
      "notes": [
        "4% margin",
        "(5pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "salaries_benefits",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Salaries & benefits",
      "value": 4.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "aircraft_fuel",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Aircraft fuel",
      "value": 4.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ancillary_business",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "Ancillary business",
      "value": 2.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "contracted_services",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Contracted services",
      "value": 1.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "landing_fees",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Landing fees",
      "value": 1,
      "valueText": "$1.0B",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "maintenance",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "depreciation_amortization",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "D&A",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "regional_carrier",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "Regional carrier",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_operating",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Other",
      "value": 2.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "tax",
      "label": "Tax",
      "type": "cost",
      "col": 4,
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "interest_other",
      "label": "Interest & other",
      "type": "cost",
      "col": 4,
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only",
      "value": 20.2,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "representation": "data-only",
      "value": 0,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "passenger",
      "target": "revenue",
      "value": 15.5,
      "sourceWidth": 261,
      "targetWidth": 261,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85a0bc"
    },
    {
      "source": "cargo",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85a0bc"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 72,
      "targetWidth": 73,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85a0bc"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 25,
      "targetWidth": 24,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 18.7,
      "sourceWidth": 314,
      "targetWidth": 314,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 6,
      "targetWidth": 6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "interest_other",
      "value": 0.4,
      "sourceWidth": 6,
      "targetWidth": 4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "salaries_benefits",
      "value": 4.8,
      "sourceWidth": 81,
      "targetWidth": 80,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "aircraft_fuel",
      "value": 4.4,
      "sourceWidth": 74,
      "targetWidth": 72,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ancillary_business",
      "value": 2.6,
      "sourceWidth": 44,
      "targetWidth": 43,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "contracted_services",
      "value": 1.3,
      "sourceWidth": 22,
      "targetWidth": 20,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "landing_fees",
      "value": 1,
      "sourceWidth": 17,
      "targetWidth": 16,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "regional_carrier",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 10,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 11,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 10,
      "sourceOrder": 7,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 2.6,
      "sourceWidth": 43,
      "targetWidth": 43,
      "sourceOrder": 8,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "达美航空 · 2026 财年第三季度",
      "meta": {
        "title": "达美航空 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleSize": 112,
        "titleTextLength": 1900
      },
      "nodes": {
        "passenger": {
          "label": "客运",
          "notes": [
            "同比 +15%"
          ]
        },
        "cargo": {
          "label": "货运",
          "notes": [
            "同比 +29%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +48%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 (5 个百分点)"
          ]
        },
        "salaries_benefits": {
          "label": "薪酬与福利"
        },
        "aircraft_fuel": {
          "label": "航空燃油"
        },
        "ancillary_business": {
          "label": "辅助业务"
        },
        "contracted_services": {
          "label": "合同服务"
        },
        "landing_fees": {
          "label": "着陆费"
        },
        "maintenance": {
          "label": "维护"
        },
        "depreciation_amortization": {
          "label": "折旧与摊销"
        },
        "regional_carrier": {
          "label": "支线承运人"
        },
        "other_operating": {
          "label": "其他"
        },
        "tax": {
          "label": "税费"
        },
        "interest_other": {
          "label": "利息及其他"
        }
      },
      "layout": {
        "labels": {
          "passenger": {
            "blocks": [
              {
                "x": 309,
                "top": 363,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#155077"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 251,
                "top": 565,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "客运",
                    "size": 40,
                    "weight": 800,
                    "color": "#003d7a"
                  }
                ]
              }
            ]
          },
          "cargo": {
            "blocks": [
              {
                "x": 307,
                "top": 833,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#155077"
                  },
                  {
                    "text": "同比 +29%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 215,
                "top": 905,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "货运",
                    "size": 40,
                    "weight": 800,
                    "color": "#003d7a"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 307,
                "top": 1007,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#155077"
                  },
                  {
                    "text": "同比 +48%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 215,
                "top": 1111.5,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#003d7a"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 931,
                "top": 480,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#155077"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#155077"
                  },
                  {
                    "text": "同比 +21%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1551.5,
                "top": 262,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1555,
                "top": 1155,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
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
                "x": 2398,
                "top": 226,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "salaries_benefits": {
            "blocks": [
              {
                "x": 2240,
                "top": 573,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利 ($4.8B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "aircraft_fuel": {
            "blocks": [
              {
                "x": 2240,
                "top": 695,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "航空燃油 ($4.4B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "ancillary_business": {
            "blocks": [
              {
                "x": 2240,
                "top": 808,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "辅助业务 ($2.6B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "contracted_services": {
            "blocks": [
              {
                "x": 2240,
                "top": 907,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "合同服务 ($1.3B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "landing_fees": {
            "blocks": [
              {
                "x": 2240,
                "top": 999,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "着陆费 ($1.0B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2240,
                "top": 1257,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "维护 ($0.7B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2240,
                "top": 1168,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与摊销 ($0.7B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "regional_carrier": {
            "blocks": [
              {
                "x": 2240,
                "top": 1082,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "支线承运人 ($0.7B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2240,
                "top": 1356,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 ($2.6B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2240,
                "top": 420,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费 ($0.4B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest_other": {
            "blocks": [
              {
                "x": 2240,
                "top": 492,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息及其他 ($0.4B)",
                    "size": 32,
                    "weight": 800,
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
});
