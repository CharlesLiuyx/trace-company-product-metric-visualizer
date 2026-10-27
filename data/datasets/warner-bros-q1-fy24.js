(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "warner-bros-q1-fy24",
  "name": "Warner Bros. Discovery · Q1 FY24",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.639,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2457.338,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#001daf",
        "label": "#001daf"
      },
      "hub": {
        "node": "#001daf",
        "label": "#001daf"
      },
      "profit": {
        "node": "#28a02a",
        "label": "#009654"
      },
      "cost": {
        "node": "#cd0000",
        "label": "#991800"
      }
    },
    "linkTint": {
      "source": "#8996d3",
      "hub": "#8996d3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7
    }
  },
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "literal": "99.6M",
      "value": "99600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "global_arpu",
      "literal": "$7.83",
      "value": "0.00783",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq"
    }
  ],
  "annotationsSvg": "<g><rect x=\"48.183\" y=\"1233.227\" width=\"755.303\" height=\"119.807\" rx=\"31.254\" fill=\"#001daf\"/><text x=\"115.9\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\"><tspan font-weight=\"800\">DTC subscribers</tspan></text><text data-operating-metric=\"dtc_subscribers\" x=\"367.233\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">99.6M</text><text x=\"460.995\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">(+1% Y/Y, +2% Q/Q)</text><text x=\"151.061\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\"><tspan font-weight=\"800\">Global ARPU</tspan></text><text data-operating-metric=\"global_arpu\" x=\"349.002\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">$7.83</text><text x=\"440.159\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">(+4% Y/Y, -1% Q/Q)</text><text x=\"199.244\" y=\"1386.892\" font-size=\"27.347\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"169.292\" y=\"1437.68\" font-size=\"37.765\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 742.28,
      "y": 230.498,
      "width": 703.213,
      "height": 253.938
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 26.045,
      "y": 360.722,
      "width": 173.199,
      "height": 181.012
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-networks-cluster.png",
      "x": 29.952,
      "y": 651.123,
      "width": 149.758,
      "height": 231.8
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-streaming-cluster.png",
      "x": 36.463,
      "y": 1028.774,
      "width": 89.855,
      "height": 161.479
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 431.043,
        "y": 402.394,
        "width": 72.926,
        "height": 83.344
      },
      "networks": {
        "x": 431.043,
        "y": 698.004,
        "width": 72.926,
        "height": 149.758
      },
      "streaming": {
        "x": 431.043,
        "y": 1053.517,
        "width": 72.926,
        "height": 72.926
      },
      "gross_revenue": {
        "x": 804.788,
        "y": 605.544,
        "width": 72.926,
        "height": 303.423
      },
      "revenue": {
        "x": 1175.928,
        "y": 655.03,
        "width": 72.926,
        "height": 291.703
      },
      "eliminations": {
        "x": 1175.928,
        "y": 1058.726,
        "width": 72.926,
        "height": 13.022
      },
      "gross_profit": {
        "x": 1552.277,
        "y": 552.152,
        "width": 72.926,
        "height": 114.598
      },
      "cost_of_revenue": {
        "x": 1552.277,
        "y": 851.669,
        "width": 72.926,
        "height": 177.105
      },
      "operating_loss": {
        "x": 1764.543,
        "y": 889.434,
        "width": 72.926,
        "height": 7.813
      },
      "operating_expenses": {
        "x": 1923.417,
        "y": 655.03,
        "width": 72.926,
        "height": 123.713
      },
      "sga": {
        "x": 2299.767,
        "y": 399.79,
        "width": 72.926,
        "height": 66.415
      },
      "amortization": {
        "x": 2299.767,
        "y": 649.821,
        "width": 72.926,
        "height": 54.694
      },
      "restructuring": {
        "x": 2299.767,
        "y": 894.643,
        "width": 72.926,
        "height": 2.604
      },
      "asset_impairment": {
        "x": 2299.767,
        "y": 1086.073,
        "width": 72.926,
        "height": 2.604
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "studios": {
        "blocks": [
          {
            "x": 467.506,
            "top": 311.237,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#001daf"
              },
              {
                "text": "(12%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.696,
            "top": 418.021,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Studios",
                "size": 39.067,
                "weight": 800,
                "color": "#001daf"
              },
              {
                "text": "7% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "-12pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 467.506,
            "top": 608.149,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#001daf"
              },
              {
                "text": "(8%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.696,
            "top": 713.631,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Networks",
                "size": 39.067,
                "weight": 800,
                "color": "#001daf"
              },
              {
                "text": "41% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "streaming": {
        "blocks": [
          {
            "x": 467.506,
            "top": 959.755,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#001daf"
              },
              {
                "text": "+0% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.696,
            "top": 1041.797,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Direct to",
                "size": 39.067,
                "weight": 800,
                "color": "#001daf"
              },
              {
                "text": "consumer",
                "size": 39.067,
                "weight": 800,
                "color": "#001daf"
              },
              {
                "text": "3% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.347,
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
            "x": 1212.391,
            "top": 503.969,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.765,
                "weight": 800,
                "color": "#001daf"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#001daf"
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1212.391,
            "top": 1089.98,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Eliminations",
                "size": 31.254,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#991800"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1588.74,
            "top": 364.629,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.765,
                "weight": 800,
                "color": "#009654"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#009654"
              },
              {
                "text": "39% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
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
            "x": 1588.74,
            "top": 1047.006,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.765,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "revenue",
                "size": 37.765,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#991800"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1801.006,
            "top": 912.875,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 37.765,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "loss",
                "size": 37.765,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "(3%) margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.347,
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
            "x": 1959.88,
            "top": 498.76,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 37.765,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "expenses",
                "size": 37.765,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#991800"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 398.487,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.254,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "22% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 632.892,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.254,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "19% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 855.576,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.254,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "0% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "asset_impairment": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 1048.308,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Asset",
                "size": 31.254,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "impairment",
                "size": 31.254,
                "weight": 800,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "0% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "studios",
      "label": "Studios",
      "value": 2.8,
      "valueText": "$2.8B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(12%) Y/Y",
        "7% adj. margin",
        "-12pp Y/Y"
      ]
    },
    {
      "id": "networks",
      "label": "Networks",
      "value": 5.1,
      "valueText": "$5.1B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(8%) Y/Y",
        "41% adj. margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "streaming",
      "label": [
        "Direct to",
        "consumer"
      ],
      "value": 2.5,
      "valueText": "$2.5B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+0% Y/Y",
        "3% adj. margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 10.4,
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -0.4,
      "valueText": "($0.4B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 10.0,
      "valueText": "$10.0B",
      "type": "hub",
      "col": 2,
      "order": 4,
      "notes": [
        "(7%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 3.9,
      "valueText": "$3.9B",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "39% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 6.1,
      "valueText": "($6.1B)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [
        "(3%) margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.2,
      "valueText": "($4.2B)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.2,
      "valueText": "($2.2B)",
      "type": "cost",
      "col": 6,
      "order": 10,
      "notes": [
        "22% of revenue"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 6,
      "order": 11,
      "notes": [
        "19% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.035,
      "valueText": "($35M)",
      "type": "cost",
      "col": 6,
      "order": 12,
      "notes": [
        "0% of revenue"
      ]
    },
    {
      "id": "asset_impairment",
      "label": [
        "Asset",
        "impairment"
      ],
      "value": 0.012,
      "valueText": "($12M)",
      "type": "cost",
      "col": 6,
      "order": 13,
      "notes": [
        "0% of revenue"
      ]
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 2.8,
      "width": 83.344,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5.1,
      "width": 149.758,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 149.758,
      "targetWidth": 148.456
    },
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 2.5,
      "width": 72.926,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 72.926,
      "targetWidth": 71.624
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 10,
      "width": 290.401,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 290.401,
      "targetWidth": 291.703
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.4,
      "width": 13.022,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.9,
      "width": 114.598,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 6.1,
      "width": 177.105,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.9,
      "width": 114.598,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 114.598,
      "targetWidth": 115.9
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.3,
      "width": 7.813,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 7.813,
      "targetWidth": 7.813
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.2,
      "width": 66.415,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 66.415,
      "sourceWidth": 65.113
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.9,
      "width": 54.694,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 54.694,
      "sourceWidth": 53.392
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.035,
      "width": 2.604,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "asset_impairment",
      "value": 0.012,
      "width": 2.604,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2024 财年第一季度",
      "meta": {
        "title": "Warner Bros. 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "titleTextLength": 2226.841
      },
      "annotationsSvg": "<g><rect x=\"48.183\" y=\"1233.227\" width=\"755.303\" height=\"119.807\" rx=\"31.254\" fill=\"#001daf\"/><text x=\"115.9\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\"><tspan font-weight=\"800\">DTC 订阅用户</tspan></text><text data-operating-metric=\"dtc_subscribers\" x=\"367.233\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">99.6M</text><text x=\"460.995\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">（同比 +1%，环比 +2%）</text><text x=\"151.061\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\"><tspan font-weight=\"800\">全球 ARPU</tspan></text><text data-operating-metric=\"global_arpu\" x=\"349.002\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">$7.83</text><text x=\"440.159\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">（同比 +4%，环比 -1%）</text><text x=\"199.244\" y=\"1386.892\" font-size=\"27.347\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"169.292\" y=\"1437.68\" font-size=\"37.765\" font-weight=\"800\">来源：季度财报</text></g>",
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (12%)",
            "调整后利润率 7%",
            "同比 -12 个百分点"
          ]
        },
        "networks": {
          "label": "线性网络",
          "notes": [
            "同比 (8%)",
            "调整后利润率 41%",
            "同比 +0 个百分点"
          ]
        },
        "streaming": {
          "label": [
            "直接面向",
            "消费者"
          ],
          "notes": [
            "同比 +0%",
            "调整后利润率 3%",
            "同比 +1 个百分点"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (7%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 39%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (3%)",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 22%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 19%"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 0%"
          ]
        },
        "asset_impairment": {
          "label": [
            "资产",
            "减值"
          ],
          "notes": [
            "占收入 0%"
          ]
        },
        "gross_revenue": {
          "label": "分部收入合计",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "studios": {
            "blocks": [
              {
                "x": 467.506,
                "top": 311.237,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#001daf"
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 418.021,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#001daf"
                  },
                  {
                    "text": "调整后利润率 7%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -12 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 467.506,
                "top": 608.149,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#001daf"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 713.631,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "线性网络",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#001daf"
                  },
                  {
                    "text": "调整后利润率 41%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "streaming": {
            "blocks": [
              {
                "x": 467.506,
                "top": 959.755,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#001daf"
                  },
                  {
                    "text": "同比 +0%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 1041.797,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#001daf"
                  },
                  {
                    "text": "消费者",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#001daf"
                  },
                  {
                    "text": "调整后利润率 3%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.347,
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
                "x": 1212.391,
                "top": 503.969,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#001daf"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#001daf"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1212.391,
                "top": 1089.98,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#991800"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1588.74,
                "top": 364.629,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#009654"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#009654"
                  },
                  {
                    "text": "利润率 39%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.347,
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
                "x": 1588.74,
                "top": 1047.006,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "成本",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#991800"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1801.006,
                "top": 912.875,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "亏损",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "利润率 (3%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.347,
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
                "x": 1959.88,
                "top": 498.76,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "费用",
                    "size": 37.765,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#991800"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 398.487,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 28.649,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 22%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 632.892,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 855.576,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 0%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "asset_impairment": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 1048.308,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "资产",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "减值",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 0%",
                    "size": 27.347,
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
});})();
