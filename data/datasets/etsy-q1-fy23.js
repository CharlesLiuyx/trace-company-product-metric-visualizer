(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q1-fy23",
  "name": "Etsy · Q1 FY23",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 1985.92529296875,
    "hidePeriodStamp": true
  },
  "nodes": [
    {
      "id": "marketplace",
      "label": "Marketplace",
      "value": 468,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 173,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 641,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 445,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "70% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 195,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 78,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "12% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 367,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 3,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 75,
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "12% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 7,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 171,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "27% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 116,
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [
        "18% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 80,
      "type": "cost",
      "col": 5,
      "order": 4,
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 468,
      "sourceWidth": 288.0,
      "targetWidth": 289.9144736842105,
      "y0": 655.0,
      "y1": 788.9572368421052,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 173,
      "sourceWidth": 106.99999999999999,
      "targetWidth": 107.08552631578947,
      "y0": 1063.5,
      "y1": 987.4572368421052,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 445,
      "sourceWidth": 276.8552631578947,
      "targetWidth": 276.0,
      "y0": 782.4276315789473,
      "y1": 711.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 195,
      "sourceWidth": 120.14473684210525,
      "targetWidth": 121.0,
      "y0": 980.9276315789473,
      "y1": 1033.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 78,
      "sourceWidth": 48.16981132075472,
      "targetWidth": 48.0,
      "y0": 597.0849056603773,
      "y1": 506.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 367,
      "sourceWidth": 227.83018867924528,
      "targetWidth": 227.0,
      "y0": 735.0849056603773,
      "y1": 813.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 71,
      "sourceWidth": 45.4054054054054,
      "targetWidth": 44.72222222222222,
      "y0": 504.7027027027027,
      "y1": 395.3611111111111,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 7,
      "sourceWidth": 2.5945945945945943,
      "targetWidth": 3.0,
      "y0": 528.7027027027027,
      "y1": 663.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 3,
      "sourceWidth": 2.0,
      "targetWidth": 1.277777777777778,
      "y0": 498.0,
      "y1": 418.3611111111111,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9bcd99",
      "curve": {
        "c1x": 2230.74755859375,
        "c1y": 498.0,
        "c2x": 2206.0048828125,
        "c2y": 418.3611111111111
      }
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 171,
      "sourceWidth": 106.36571428571429,
      "targetWidth": 106.00000000000001,
      "y0": 753.1828571428572,
      "y1": 820.0,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 116,
      "sourceWidth": 71.34285714285714,
      "targetWidth": 72.0,
      "y0": 842.0371428571428,
      "y1": 1038.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 80,
      "sourceWidth": 49.291428571428575,
      "targetWidth": 49.0,
      "y0": 902.3542857142857,
      "y1": 1258.5,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.617601891575663,
    "nodes": {
      "marketplace": {
        "x": 390,
        "y": 511,
        "width": 71,
        "height": 288
      },
      "services": {
        "x": 390,
        "y": 1010,
        "width": 71,
        "height": 107
      },
      "revenue": {
        "x": 857,
        "y": 644,
        "width": 70,
        "height": 397
      },
      "gross_profit": {
        "x": 1326,
        "y": 573,
        "width": 72,
        "height": 276
      },
      "cost_of_revenue": {
        "x": 1329,
        "y": 973,
        "width": 71,
        "height": 121
      },
      "operating_profit": {
        "x": 1782,
        "y": 482,
        "width": 70,
        "height": 48
      },
      "operating_expenses": {
        "x": 1779,
        "y": 700,
        "width": 70,
        "height": 227
      },
      "net_profit": {
        "x": 2258,
        "y": 373,
        "width": 71,
        "height": 46
      },
      "marketing": {
        "x": 2258,
        "y": 767,
        "width": 71,
        "height": 106
      },
      "rnd": {
        "x": 2258,
        "y": 1002,
        "width": 71,
        "height": 72
      },
      "ga": {
        "x": 2258,
        "y": 1234,
        "width": 71,
        "height": 49
      },
      "other": {
        "x": 2117,
        "y": 497,
        "width": 71,
        "height": 2
      },
      "tax": {
        "x": 2258,
        "y": 662,
        "width": 71,
        "height": 3
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 412.81201171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#f27321"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
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
            "x": 429.7412109375,
            "top": 911.572265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#f27321"
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 1039.98115234375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#f27321"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 892.03857421875,
            "top": 496.15576171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#f27321"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#f27321"
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1362.1494140625,
            "top": 388.0693359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#009454"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009454"
              },
              {
                "text": "70% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1362.1494140625,
            "top": 1106.9091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#a32100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1816.63330078125,
            "top": 293.00537109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#009454"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009454"
              },
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1814.02880859375,
            "top": 942.826171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "Expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#a32100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2152.61279296875,
            "top": 511.78271484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#009454"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#009454"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2469.05859375,
            "top": 322.95703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#009454"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009454"
              },
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2465.15185546875,
            "top": 619.869140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a32100"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2469.05859375,
            "top": 761.81396484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a32100"
              },
              {
                "text": "27% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2469.05859375,
            "top": 996.21826171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a32100"
              },
              {
                "text": "18% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2469.05859375,
            "top": 1222.80908203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a32100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a32100"
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<rect x=\"79.43701171875\" y=\"1153.7900390625\" width=\"164.0830078125\" height=\"164.0830078125\" rx=\"36.462890625\" fill=\"#f77320\"/><text x=\"161.478515625\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"white\">GMS</text><text data-operating-metric=\"gms\" x=\"161.478515625\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">$3.1B</text><text x=\"161.478515625\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">(5%) Y/Y</text><rect x=\"251.33349609375\" y=\"1153.7900390625\" width=\"333.375\" height=\"164.0830078125\" rx=\"36.462890625\" fill=\"#f77320\"/><text x=\"418.02099609375\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"white\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"418.02099609375\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">7.9M</text><text x=\"418.02099609375\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">+4% Y/Y</text><rect x=\"588.615234375\" y=\"1153.7900390625\" width=\"330.7705078125\" height=\"164.0830078125\" rx=\"36.462890625\" fill=\"#f77320\"/><text x=\"754.00048828125\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"white\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"754.00048828125\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">95.5M</text><text x=\"754.00048828125\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">+0.4% Y/Y</text><text x=\"421.927734375\" y=\"1375.171875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">GMV = Gross Merchandise Sales</text><text x=\"429.7412109375\" y=\"1437.6796875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">Source: Quarterly results</text><g class=\"sankey-interactive-annotation\" data-node=\"marketplace\"><text x=\"223.986328125\" y=\"599.033203125\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#f27321\">Marketplace</text></g>",
  "rasterAnnotations": [
    {
      "key": "etsy-logo-q1-fy23",
      "href": "data/assets/raster-annotations/etsy/company-logo-q1-fy23.png",
      "x": 760.51171875,
      "y": 223.986328125,
      "width": 260.44921875,
      "height": 260.44921875
    },
    {
      "key": "etsy-brands-q1-fy23",
      "href": "data/assets/raster-annotations/etsy/brands-q1-fy23.png",
      "x": 37.76513671875,
      "y": 627.6826171875,
      "width": 343.79296875,
      "height": 147.15380859375
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155577",
    "nodeWidth": 71.62353515625,
    "linkOpacity": 1,
    "palette": {
      "source": {
        "node": "#eb6d20",
        "label": "#f27321"
      },
      "hub": {
        "node": "#eb6d20",
        "label": "#f27321"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009454"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a32100"
      }
    },
    "linkTint": {
      "source": "#eeb793",
      "hub": "#eeb793",
      "profit": "#9bcd99",
      "cost": "#de8585"
    },
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 10.41796875
    }
  },
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "3.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.1B"
    },
    {
      "id": "active-sellers",
      "value": "7900000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "7.9M"
    },
    {
      "id": "active-buyers",
      "value": "95500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "95.5M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Etsy · 2023 财年第一季度",
      "meta": {
        "title": "Etsy 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月"
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 +9%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +14%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 70%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "营业利润率 12%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "净利率 12%",
            "同比 (3 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 27%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 412.81201171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#f27321"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
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
                "x": 429.7412109375,
                "top": 911.572265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#f27321"
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 223.986328125,
                "top": 1039.98115234375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#f27321"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 892.03857421875,
                "top": 496.15576171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#f27321"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#f27321"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1362.1494140625,
                "top": 388.0693359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#009454"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#009454"
                  },
                  {
                    "text": "毛利率 70%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1362.1494140625,
                "top": 1106.9091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#a32100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1816.63330078125,
                "top": 293.00537109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#009454"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#009454"
                  },
                  {
                    "text": "营业利润率 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1814.02880859375,
                "top": 942.826171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#a32100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2152.61279296875,
                "top": 511.78271484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#009454"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#009454"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2469.05859375,
                "top": 322.95703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#009454"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#009454"
                  },
                  {
                    "text": "净利率 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2465.15185546875,
                "top": 619.869140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a32100"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2469.05859375,
                "top": 761.81396484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a32100"
                  },
                  {
                    "text": "占收入 27%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2469.05859375,
                "top": 996.21826171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a32100"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2469.05859375,
                "top": 1222.80908203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a32100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a32100"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<rect x=\"79.43701171875\" y=\"1153.7900390625\" width=\"164.0830078125\" height=\"164.0830078125\" rx=\"36.462890625\" fill=\"#f77320\"/><text x=\"161.478515625\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"white\">GMS</text><text data-operating-metric=\"gms\" x=\"161.478515625\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">$3.1B</text><text x=\"161.478515625\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">同比 (5%)</text><rect x=\"251.33349609375\" y=\"1153.7900390625\" width=\"333.375\" height=\"164.0830078125\" rx=\"36.462890625\" fill=\"#f77320\"/><text x=\"418.02099609375\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"white\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"418.02099609375\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">7.9M</text><text x=\"418.02099609375\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">同比 +4%</text><rect x=\"588.615234375\" y=\"1153.7900390625\" width=\"330.7705078125\" height=\"164.0830078125\" rx=\"36.462890625\" fill=\"#f77320\"/><text x=\"754.00048828125\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"white\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"754.00048828125\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"white\">95.5M</text><text x=\"754.00048828125\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">同比 +0.4%</text><text x=\"421.927734375\" y=\"1375.171875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">GMV = 商品交易总额</text><text x=\"429.7412109375\" y=\"1437.6796875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">来源：季度业绩</text><g class=\"sankey-interactive-annotation\" data-node=\"marketplace\"><text x=\"223.986328125\" y=\"599.033203125\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#f27321\">交易市场</text></g>"
    }
  }
});})();
