window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "semrush-q1-fy24",
  "name": "Semrush · Q1 FY24",
  "company": "Semrush",
  "meta": {
    "company": "Semrush",
    "title": "Semrush Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/semrush-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.941,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2278.931
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "linkOpacity": 1,
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "us",
      "label": "United States",
      "value": 41,
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#ff6427",
      "labelColor": "#ff6427",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "uk",
      "label": "United Kingdom",
      "value": 8,
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#ff6427",
      "labelColor": "#ff6427",
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 37,
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#ff6427",
      "labelColor": "#ff6427",
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 86,
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#ff6427",
      "labelColor": "#ff6427",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 71,
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "83% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 15,
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1,
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "2% margin",
        "+17pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 70,
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2,
      "type": "profit",
      "col": 5,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "2% margin",
        "+16pp Y/Y"
      ]
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 1,
      "type": "profit",
      "col": 4,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 34,
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "40% of revenue",
        "(11pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 18,
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "22% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 17,
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "20% of revenue",
        "+1pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "us",
      "target": "revenue",
      "value": 41,
      "sourceWidth": 152.363,
      "targetWidth": 152.363,
      "y0": 505.923,
      "y1": 693.446,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#fab199"
    },
    {
      "source": "uk",
      "target": "revenue",
      "value": 8,
      "sourceWidth": 31.254,
      "targetWidth": 31.254,
      "y0": 787.859,
      "y1": 785.254,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#fab199"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 37,
      "sourceWidth": 138.038,
      "targetWidth": 138.038,
      "y0": 1062.633,
      "y1": 869.9,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#fab199"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 71,
      "sourceWidth": 266.96,
      "targetWidth": 265.658,
      "y0": 750.745,
      "y1": 648.519,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 15,
      "sourceWidth": 54.694,
      "targetWidth": 54.694,
      "y0": 911.572,
      "y1": 1024.868,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1,
      "sourceWidth": 5.209,
      "targetWidth": 5.209,
      "y0": 518.294,
      "y1": 404.999,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 70,
      "sourceWidth": 260.449,
      "targetWidth": 260.449,
      "y0": 651.123,
      "y1": 755.303,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 5.209,
      "targetWidth": 5.209,
      "y0": 404.999,
      "y1": 315.144,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 2.604,
      "targetWidth": 2.604,
      "y0": 401.092,
      "y1": 319.05,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 34,
      "sourceWidth": 127.62,
      "targetWidth": 126.318,
      "y0": 688.888,
      "y1": 742.931,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 18,
      "sourceWidth": 69.019,
      "targetWidth": 69.019,
      "y0": 787.208,
      "y1": 972.127,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 17,
      "sourceWidth": 63.81,
      "targetWidth": 65.112,
      "y0": 853.622,
      "y1": 1208.484,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "us": {
        "x": 367.233,
        "y": 429.741,
        "width": 72.926,
        "height": 152.363
      },
      "uk": {
        "x": 367.233,
        "y": 772.232,
        "width": 72.926,
        "height": 31.254
      },
      "other": {
        "x": 367.233,
        "y": 993.614,
        "width": 72.926,
        "height": 138.038
      },
      "revenue": {
        "x": 834.74,
        "y": 617.265,
        "width": 72.926,
        "height": 321.655
      },
      "gross_profit": {
        "x": 1304.851,
        "y": 515.689,
        "width": 72.926,
        "height": 265.658
      },
      "cost_of_revenue": {
        "x": 1307.455,
        "y": 997.521,
        "width": 72.926,
        "height": 54.694
      },
      "operating_profit": {
        "x": 1769.752,
        "y": 402.394,
        "width": 72.926,
        "height": 5.209
      },
      "operating_expenses": {
        "x": 1769.752,
        "y": 625.078,
        "width": 72.926,
        "height": 260.449
      },
      "net_profit": {
        "x": 2235.957,
        "y": 312.539,
        "width": 72.926,
        "height": 7.813
      },
      "other_income": {
        "x": 2084.896,
        "y": 399.79,
        "width": 72.926,
        "height": 2.604
      },
      "sm": {
        "x": 2235.957,
        "y": 679.772,
        "width": 72.926,
        "height": 126.318
      },
      "ga": {
        "x": 2235.957,
        "y": 937.617,
        "width": 72.926,
        "height": 69.019
      },
      "rnd": {
        "x": 2235.957,
        "y": 1175.928,
        "width": 72.926,
        "height": 65.112
      }
    },
    "labels": {
      "us": {
        "blocks": [
          {
            "x": 403.696,
            "top": 333.375,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#ff6427"
              },
              {
                "text": "+17% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226.591,
            "top": 458.71799999999996,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "United",
                "size": 39.067,
                "weight": 800,
                "color": "#ff6427"
              },
              {
                "text": "States",
                "size": 39.067,
                "weight": 400,
                "color": "#ff6427"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "uk": {
        "blocks": [
          {
            "x": 403.696,
            "top": 674.563,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#ff6427"
              },
              {
                "text": "+19% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226.591,
            "top": 740.769,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "United",
                "size": 39.067,
                "weight": 800,
                "color": "#ff6427"
              },
              {
                "text": "Kingdom",
                "size": 39.067,
                "weight": 400,
                "color": "#ff6427"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 403.696,
            "top": 897.248,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#ff6427"
              },
              {
                "text": "+27% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226.591,
            "top": 1037.89,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 39.067,
                "weight": 800,
                "color": "#ff6427"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 871.203,
            "top": 468.809,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800,
                "color": "#ff6427"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#ff6427"
              },
              {
                "text": "+21% Y/Y",
                "size": 27.347,
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
            "x": 1341.313,
            "top": 326.864,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "83% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1343.918,
            "top": 1063.935,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1806.215,
            "top": 213.568,
            "anchor": "middle",
            "lineGap": 9.116,
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
                "text": "2% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+17pp Y/Y",
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
            "x": 1806.215,
            "top": 901.154,
            "anchor": "middle",
            "lineGap": 9.116,
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
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.067,
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
            "x": 2427.387,
            "top": 268.263,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "2% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+16pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2122.661,
            "top": 414.114,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2427.387,
            "top": 679.772,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "40% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(11pp) Y/Y",
                "size": 27.347,
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
            "x": 2427.387,
            "top": 932.408,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "22% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.347,
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
            "x": 2427.387,
            "top": 1164.208,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "20% of revenue",
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
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "arr",
      "label": "ARR",
      "value": "354",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$354M",
      "basis": "unspecified",
      "notes": [
        "+21% Y/Y"
      ],
      "quote": "ARR\n$354M\n+21% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          132,
          1152,
          165,
          165
        ]
      }
    },
    {
      "id": "dbnr",
      "label": "DBNR",
      "value": "107",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "107%",
      "basis": "unspecified",
      "notes": [
        "Flat Q/Q"
      ],
      "quote": "DBNR\n107%\nFlat Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          302,
          1152,
          165,
          165
        ]
      }
    },
    {
      "id": "customers",
      "label": "Customers",
      "value": "112000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "112,000",
      "basis": "unspecified",
      "notes": [
        "+10% Y/Y"
      ],
      "quote": "Customers\n112,000\n+10% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          477,
          1149,
          301,
          167
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"131.527\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"39.067\" fill=\"#ff6427\"/><text x=\"214.219\" y=\"1205.88\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">ARR</text><text x=\"214.219\" y=\"1246.25\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"arr\">$354M</text><text x=\"214.219\" y=\"1286.619\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">+21% Y/Y</text><rect x=\"302.121\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"39.067\" fill=\"#ff6427\"/><text x=\"384.814\" y=\"1205.88\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text><text x=\"384.814\" y=\"1246.25\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"dbnr\">107%</text><text x=\"384.814\" y=\"1286.619\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">Flat Q/Q</text><rect x=\"476.622\" y=\"1148.581\" width=\"300.819\" height=\"166.688\" rx=\"39.067\" fill=\"#ff6427\"/><text x=\"627.031\" y=\"1201.973\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">Customers</text><text x=\"627.031\" y=\"1242.343\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"customers\">112,000</text><text x=\"627.031\" y=\"1282.712\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">+10% Y/Y</text><text x=\"432.346\" y=\"1350.429\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><text x=\"432.346\" y=\"1390.799\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text><text x=\"432.346\" y=\"1437.68\" text-anchor=\"middle\" font-size=\"39.067\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Semrush · 2024 财年第一季度",
      "meta": {
        "title": "Semrush 2024 财年第一季度利润表"
      },
      "nodes": {
        "us": {
          "label": "美国",
          "notes": [
            "同比 +17%"
          ]
        },
        "uk": {
          "label": "英国",
          "notes": [
            "同比 +19%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +27%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +17 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 +16 个百分点"
          ]
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 40%",
            "同比 (11 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及管理",
          "notes": [
            "占收入 22%",
            "同比 (5 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 20%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "us": {
            "blocks": [
              {
                "x": 403.696,
                "top": 333.375,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#ff6427"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 226.591,
                "top": 478.8225,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "美国",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#ff6427"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "uk": {
            "blocks": [
              {
                "x": 403.696,
                "top": 674.563,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#ff6427"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 226.591,
                "top": 760.7589999999999,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "英国",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#ff6427"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 403.696,
                "top": 897.248,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#ff6427"
                  },
                  {
                    "text": "同比 +27%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 226.591,
                "top": 1035.5330000000001,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#ff6427"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 871.203,
                "top": 468.809,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#ff6427"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#ff6427"
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.347,
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
                "x": 1341.313,
                "top": 326.864,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 83%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1343.918,
                "top": 1063.935,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
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
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1806.215,
                "top": 213.568,
                "anchor": "middle",
                "lineGap": 9.116,
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
                    "text": "利润率 2%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +17 个百分点",
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
                "x": 1806.215,
                "top": 901.154,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "运营费用",
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
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2427.387,
                "top": 268.263,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "利润率 2%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +16 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2122.661,
                "top": 414.114,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2427.387,
                "top": 679.772,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 40%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (11 个百分点)",
                    "size": 27.347,
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
                "x": 2427.387,
                "top": 932.408,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "一般及管理",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 22%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.347,
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
                "x": 2427.387,
                "top": 1164.208,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 20%",
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
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"131.527\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"39.067\" fill=\"#ff6427\"/><text x=\"214.219\" y=\"1205.88\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">ARR</text><text x=\"214.219\" y=\"1246.25\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"arr\">$354M</text><text x=\"214.219\" y=\"1286.619\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">同比 +21%</text><rect x=\"302.121\" y=\"1152.488\" width=\"165.385\" height=\"165.385\" rx=\"39.067\" fill=\"#ff6427\"/><text x=\"384.814\" y=\"1205.88\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text><text x=\"384.814\" y=\"1246.25\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"dbnr\">107%</text><text x=\"384.814\" y=\"1286.619\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">环比持平</text><rect x=\"476.622\" y=\"1148.581\" width=\"300.819\" height=\"166.688\" rx=\"39.067\" fill=\"#ff6427\"/><text x=\"627.031\" y=\"1201.973\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"#ffffff\">客户数</text><text x=\"627.031\" y=\"1242.343\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"customers\">112,000</text><text x=\"627.031\" y=\"1282.712\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#ffffff\">同比 +10%</text><text x=\"432.346\" y=\"1350.429\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777777\">ARR = 年度经常性收入</text><text x=\"432.346\" y=\"1390.799\" text-anchor=\"middle\" font-size=\"27.347\" font-weight=\"400\" fill=\"#777777\">DBNR = 金额净留存率</text><text x=\"432.346\" y=\"1437.68\" text-anchor=\"middle\" font-size=\"39.067\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "semrush-company-logo",
      "href": "data/assets/raster-annotations/semrush/company-logo.png",
      "x": 685,
      "y": 236,
      "width": 378,
      "height": 172
    }
  ]
});
