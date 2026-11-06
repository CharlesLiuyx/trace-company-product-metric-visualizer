window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "american-q3-fy26",
  "name": "American Airlines · Q3 FY26",
  "company": "American Airlines",
  "meta": {
    "company": "American Airlines",
    "title": "American Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/american-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.941,
    "titleSize": 125.016,
    "titleWeight": 800,
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
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#465a6b",
        "label": "#465a6b"
      },
      "hub": {
        "node": "#465a6b",
        "label": "#465a6b"
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
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7.813
    }
  },
  "rasterAnnotations": [
    {
      "key": "american-company-lockup",
      "href": "data/assets/raster-annotations/american/company-lockup.png",
      "x": 657.634,
      "y": 225.289,
      "width": 612.056,
      "height": 225.289
    }
  ],
  "layout": {
    "nodes": {
      "passenger": {
        "x": 261,
        "y": 456,
        "width": 71,
        "height": 281
      },
      "cargo": {
        "x": 261,
        "y": 895,
        "width": 71,
        "height": 3
      },
      "other_revenue": {
        "x": 261,
        "y": 1033,
        "width": 71,
        "height": 20
      },
      "revenue": {
        "x": 883,
        "y": 610,
        "width": 72,
        "height": 309
      },
      "operating_profit": {
        "x": 1506,
        "y": 460,
        "width": 72,
        "height": 1
      },
      "operating_expenses": {
        "x": 1506,
        "y": 813,
        "width": 72,
        "height": 306
      },
      "net_loss": {
        "x": 2012,
        "y": 329,
        "width": 72,
        "height": 5
      },
      "other_expenses": {
        "x": 2129,
        "y": 275,
        "width": 71,
        "height": 7
      },
      "salaries_benefits": {
        "x": 2129,
        "y": 449,
        "width": 71,
        "height": 87
      },
      "aircraft_fuel": {
        "x": 2129,
        "y": 598,
        "width": 71,
        "height": 89
      },
      "regional": {
        "x": 2129,
        "y": 761,
        "width": 71,
        "height": 27
      },
      "maintenance": {
        "x": 2129,
        "y": 862,
        "width": 71,
        "height": 20
      },
      "landing_fees": {
        "x": 2129,
        "y": 966,
        "width": 71,
        "height": 18
      },
      "aircraft_rent": {
        "x": 2129,
        "y": 1066,
        "width": 71,
        "height": 5
      },
      "selling_expenses": {
        "x": 2129,
        "y": 1160,
        "width": 71,
        "height": 10
      },
      "depreciation_amortization": {
        "x": 2129,
        "y": 1254,
        "width": 71,
        "height": 9
      },
      "other_operating": {
        "x": 2129,
        "y": 1337,
        "width": 71,
        "height": 36
      }
    },
    "labels": {
      "passenger": {
        "blocks": [
          {
            "x": 295.61,
            "top": 362.024,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#465a6b"
              },
              {
                "text": "+19% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          },
          {
            "x": 229.195,
            "top": 572.961,
            "lines": [
              {
                "text": "Passenger",
                "size": 39.067,
                "weight": 800,
                "color": "#465a6b"
              }
            ],
            "anchor": "end",
            "lineGap": 7.813
          }
        ]
      },
      "cargo": {
        "blocks": [
          {
            "x": 295.61,
            "top": 799.579,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#465a6b"
              },
              {
                "text": "+29% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          },
          {
            "x": 229.195,
            "top": 875.109,
            "lines": [
              {
                "text": "Cargo",
                "size": 39.067,
                "weight": 800,
                "color": "#465a6b"
              }
            ],
            "anchor": "end",
            "lineGap": 7.813
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 295.61,
            "top": 938.919,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#465a6b"
              },
              {
                "text": "+15% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          },
          {
            "x": 229.195,
            "top": 1015.752,
            "lines": [
              {
                "text": "Other",
                "size": 39.067,
                "weight": 800,
                "color": "#465a6b"
              }
            ],
            "anchor": "end",
            "lineGap": 7.813
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 919.386,
            "top": 462.297,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800,
                "color": "#465a6b"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#465a6b"
              },
              {
                "text": "+19% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1541.859,
            "top": 274.774,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "1% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1541.859,
            "top": 1136.861,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          }
        ]
      },
      "net_loss": {
        "blocks": [
          {
            "x": 2047.131,
            "top": 349.002,
            "lines": [
              {
                "text": "Net loss",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2364.879,
            "top": 242.218,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 7.813
          }
        ]
      },
      "salaries_benefits": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 455.786,
            "lines": [
              {
                "text": "Salaries & benefits",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "aircraft_fuel": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 620.52,
            "lines": [
              {
                "text": "Aircraft fuel ($4.6B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "regional": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 752.698,
            "lines": [
              {
                "text": "Regional ($1.4B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 850.367,
            "lines": [
              {
                "text": "Maintenance ($1.1B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "landing_fees": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 953.244,
            "lines": [
              {
                "text": "Landing fees ($1.0B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "aircraft_rent": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 1047.006,
            "lines": [
              {
                "text": "Aircraft rent ($0.3B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "selling_expenses": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 1143.372,
            "lines": [
              {
                "text": "Selling expenses ($0.6B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 1236.483,
            "lines": [
              {
                "text": "D&A ($0.5B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2220.33,
            "top": 1333.5,
            "lines": [
              {
                "text": "Other ($2.0B)",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              }
            ],
            "anchor": "start",
            "lineGap": 7.813
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "passenger",
      "label": "Passenger",
      "value": 14.9,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$14.9B"
    },
    {
      "id": "cargo",
      "label": "Cargo",
      "value": 0.3,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$0.3B"
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 1.2,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$1.2B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 16.3,
      "type": "hub",
      "col": 1,
      "order": 3,
      "valueText": "$16.3B"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "type": "profit",
      "col": 2,
      "order": 4,
      "valueText": "$0.1B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 16.2,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($16.2B)"
    },
    {
      "id": "net_loss",
      "label": "Net loss",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 6,
      "valueText": "($0.3B)"
    },
    {
      "id": "other_expenses",
      "label": "Other",
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($0.4B)"
    },
    {
      "id": "salaries_benefits",
      "label": "Salaries & benefits",
      "value": 4.7,
      "type": "cost",
      "col": 3,
      "order": 8,
      "valueText": "($4.7B)"
    },
    {
      "id": "aircraft_fuel",
      "label": "Aircraft fuel",
      "value": 4.6,
      "type": "cost",
      "col": 3,
      "order": 9,
      "valueText": "($4.6B)"
    },
    {
      "id": "regional",
      "label": "Regional",
      "value": 1.4,
      "type": "cost",
      "col": 3,
      "order": 10,
      "valueText": "($1.4B)"
    },
    {
      "id": "maintenance",
      "label": "Maintenance",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 11,
      "valueText": "($1.1B)"
    },
    {
      "id": "landing_fees",
      "label": "Landing fees",
      "value": 1.0,
      "type": "cost",
      "col": 3,
      "order": 12,
      "valueText": "($1.0B)"
    },
    {
      "id": "aircraft_rent",
      "label": "Aircraft rent",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 13,
      "valueText": "($0.3B)"
    },
    {
      "id": "selling_expenses",
      "label": "Selling expenses",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 14,
      "valueText": "($0.6B)"
    },
    {
      "id": "depreciation_amortization",
      "label": "D&A",
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 15,
      "valueText": "($0.5B)"
    },
    {
      "id": "other_operating",
      "label": "Other",
      "value": 2.0,
      "type": "cost",
      "col": 3,
      "order": 16,
      "valueText": "($2.0B)"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only",
      "value": 16.3,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "representation": "data-only",
      "value": 0,
      "type": "cost"
    },
    {
      "id": "tax",
      "representation": "data-only",
      "value": 0,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "passenger",
      "target": "revenue",
      "value": 14.9,
      "sourceWidth": 281,
      "targetWidth": 281,
      "y0": 596.5,
      "y1": 750.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#a5aeb4"
    },
    {
      "source": "cargo",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 3,
      "targetWidth": 6,
      "y0": 896.5,
      "y1": 894,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a5aeb4"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.2,
      "sourceWidth": 20,
      "targetWidth": 22,
      "y0": 1043.0,
      "y1": 908,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#a5aeb4"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 610.5,
      "y1": 460.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 16.2,
      "sourceWidth": 308,
      "targetWidth": 306,
      "y0": 765,
      "y1": 966.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expenses",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 460.5,
      "y1": 275.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "net_loss",
      "target": "other_expenses",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 331.5,
      "y1": 278.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "salaries_benefits",
      "value": 4.7,
      "sourceWidth": 88,
      "targetWidth": 87,
      "y0": 857.0,
      "y1": 492.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "aircraft_fuel",
      "value": 4.6,
      "sourceWidth": 89,
      "targetWidth": 89,
      "y0": 945.5,
      "y1": 642.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "regional",
      "value": 1.4,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 1003.5,
      "y1": 774.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 1.1,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 1027.0,
      "y1": 872.0,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "landing_fees",
      "value": 1.0,
      "sourceWidth": 18,
      "targetWidth": 18,
      "y0": 1046.0,
      "y1": 975.0,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "aircraft_rent",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 1057.5,
      "y1": 1068.5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "selling_expenses",
      "value": 0.6,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 1065.0,
      "y1": 1165.0,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.5,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 1074.5,
      "y1": 1258.5,
      "sourceOrder": 7,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 2.0,
      "sourceWidth": 40,
      "targetWidth": 36,
      "y0": 1099.0,
      "y1": 1355.0,
      "sourceOrder": 8,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "美国航空 · 2026 财年第三季度",
      "meta": {
        "title": "美国航空 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "titleSize": 111.993
      },
      "nodes": {
        "passenger": {
          "label": "客运"
        },
        "cargo": {
          "label": "货运"
        },
        "other_revenue": {
          "label": "其他"
        },
        "revenue": {
          "label": "收入"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_loss": {
          "label": "净亏损"
        },
        "other_expenses": {
          "label": "其他"
        },
        "salaries_benefits": {
          "label": "薪酬与福利"
        },
        "aircraft_fuel": {
          "label": "航空燃油"
        },
        "regional": {
          "label": "支线业务"
        },
        "maintenance": {
          "label": "维护"
        },
        "landing_fees": {
          "label": "着陆费"
        },
        "aircraft_rent": {
          "label": "飞机租赁"
        },
        "selling_expenses": {
          "label": "销售费用"
        },
        "depreciation_amortization": {
          "label": "折旧与摊销"
        },
        "other_operating": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "passenger": {
            "blocks": [
              {
                "x": 295.61,
                "top": 362.024,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#465a6b"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              },
              {
                "x": 229.195,
                "top": 572.961,
                "lines": [
                  {
                    "text": "客运",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#465a6b"
                  }
                ],
                "anchor": "end",
                "lineGap": 7.813
              }
            ]
          },
          "cargo": {
            "blocks": [
              {
                "x": 295.61,
                "top": 799.579,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#465a6b"
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              },
              {
                "x": 229.195,
                "top": 875.109,
                "lines": [
                  {
                    "text": "货运",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#465a6b"
                  }
                ],
                "anchor": "end",
                "lineGap": 7.813
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 295.61,
                "top": 938.919,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#465a6b"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              },
              {
                "x": 229.195,
                "top": 1015.752,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#465a6b"
                  }
                ],
                "anchor": "end",
                "lineGap": 7.813
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 919.386,
                "top": 462.297,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#465a6b"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#465a6b"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1541.859,
                "top": 274.774,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 1%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1541.859,
                "top": 1136.861,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              }
            ]
          },
          "net_loss": {
            "blocks": [
              {
                "x": 2047.131,
                "top": 349.002,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2364.879,
                "top": 242.218,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 7.813
              }
            ]
          },
          "salaries_benefits": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 455.786,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "aircraft_fuel": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 620.52,
                "lines": [
                  {
                    "text": "航空燃油 ($4.6B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "regional": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 752.698,
                "lines": [
                  {
                    "text": "支线业务 ($1.4B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 850.367,
                "lines": [
                  {
                    "text": "维护 ($1.1B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "landing_fees": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 953.244,
                "lines": [
                  {
                    "text": "着陆费 ($1.0B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "aircraft_rent": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 1047.006,
                "lines": [
                  {
                    "text": "飞机租赁 ($0.3B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "selling_expenses": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 1143.372,
                "lines": [
                  {
                    "text": "销售费用 ($0.6B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 1236.483,
                "lines": [
                  {
                    "text": "折旧与摊销 ($0.5B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2220.33,
                "top": 1333.5,
                "lines": [
                  {
                    "text": "其他 ($2.0B)",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  }
                ],
                "anchor": "start",
                "lineGap": 7.813
              }
            ]
          }
        }
      }
    }
  }
});
