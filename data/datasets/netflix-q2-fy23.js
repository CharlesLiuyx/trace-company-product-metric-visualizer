window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "netflix-q2-fy23",
  "name": "Netflix - Q2 FY23",
  "company": "Netflix",
  "meta": {
    "company": "Netflix",
    "title": "Netflix Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/netflix-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 122.39583333333333,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#666666",
        "label": "#606060"
      },
      "hub": {
        "node": "#666666",
        "label": "#444444"
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
      "source": "#b3b3b3",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 29,
      "note": 21,
      "lineGap": 7
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "nodes": {
      "ucan": {
        "x": 453.181640625,
        "y": 486.97916666666663,
        "width": 72.92578125,
        "height": 157.55208333333331
      },
      "emea": {
        "x": 453.181640625,
        "y": 766.9270833333333,
        "width": 72.92578125,
        "height": 113.28125
      },
      "latam": {
        "x": 453.181640625,
        "y": 1002.6041666666666,
        "width": 72.92578125,
        "height": 46.875
      },
      "apac": {
        "x": 453.181640625,
        "y": 1174.4791666666665,
        "width": 72.92578125,
        "height": 40.36458333333333
      },
      "other_revenue": {
        "x": 453.181640625,
        "y": 1325.5208333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "revenue": {
        "x": 920.68798828125,
        "y": 714.84375,
        "width": 72.92578125,
        "height": 360.6770833333333
      },
      "gross_profit": {
        "x": 1389.49658203125,
        "y": 623.6979166666666,
        "width": 72.92578125,
        "height": 154.94791666666666
      },
      "cost_of_revenue": {
        "x": 1392.10107421875,
        "y": 946.6145833333333,
        "width": 72.92578125,
        "height": 205.72916666666666
      },
      "operating_profit": {
        "x": 1845.28271484375,
        "y": 536.4583333333333,
        "width": 72.92578125,
        "height": 80.72916666666666
      },
      "operating_expenses": {
        "x": 1846.5849609375,
        "y": 790.3645833333333,
        "width": 72.92578125,
        "height": 74.21875
      },
      "net_profit": {
        "x": 2321.90478515625,
        "y": 471.35416666666663,
        "width": 72.92578125,
        "height": 65.10416666666666
      },
      "other": {
        "x": 2321.90478515625,
        "y": 738.28125,
        "width": 72.92578125,
        "height": 6.510416666666666
      },
      "tax": {
        "x": 2321.90478515625,
        "y": 863.28125,
        "width": 72.92578125,
        "height": 9.114583333333332
      },
      "technology_development": {
        "x": 2321.90478515625,
        "y": 979.1666666666666,
        "width": 72.92578125,
        "height": 28.645833333333332
      },
      "marketing": {
        "x": 2321.90478515625,
        "y": 1140.625,
        "width": 72.92578125,
        "height": 27.34375
      },
      "ga": {
        "x": 2321.90478515625,
        "y": 1307.2916666666665,
        "width": 72.92578125,
        "height": 18.229166666666664
      }
    },
    "labels": {
      "ucan": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 390.625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 542.3177083333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "UCAN",
                "size": 39.0625,
                "weight": 800,
                "color": "#606060"
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 673.1770833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 800.1302083333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "EMEA",
                "size": 39.0625,
                "weight": 800,
                "color": "#606060"
              }
            ]
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 907.5520833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1002.6041666666666,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "LATAM",
                "size": 39.0625,
                "weight": 800,
                "color": "#606060"
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 1079.4270833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1171.2239583333333,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "APAC",
                "size": 39.0625,
                "weight": 800,
                "color": "#606060"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 1268.2291666666667,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 424.5322265625,
            "top": 1300.78125,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Other",
                "size": 39.0625,
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
            "x": 957.15087890625,
            "top": 566.40625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#444444"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#444444"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34375,
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
            "x": 1425.95947265625,
            "top": 434.8958333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "43% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
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
            "x": 1881.74560546875,
            "top": 350.26041666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "22% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
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
            "x": 1428.56396484375,
            "top": 1161.4583333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1883.0478515625,
            "top": 877.6041666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37.760416666666664,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
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
            "x": 2514.63720703125,
            "top": 403.6458333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "18% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Flat Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 683.59375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& other",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 828.125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2519.84619140625,
            "top": 933.59375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Technology &",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "development",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2519.84619140625,
            "top": 1111.9791666666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 27.34375,
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
            "x": 2519.84619140625,
            "top": 1238.28125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "General &",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Admin",
                "size": 31.25,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "5% of revenue",
                "size": 27.34375,
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
      "id": "ucan",
      "label": "UCAN",
      "value": 3.6,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 2.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 1.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.9,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 0.03,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [],
      "valueText": "$30M",
      "decimals": 2
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 8.2,
      "type": "hub",
      "col": 1,
      "order": 5,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 3.5,
      "type": "profit",
      "col": 2,
      "order": 6,
      "notes": [
        "43% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 4.7,
      "type": "cost",
      "col": 2,
      "order": 7,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.8,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "22% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.7,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.5,
      "type": "profit",
      "col": 4,
      "order": 10,
      "notes": [
        "18% margin",
        "Flat Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Interest & other",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": []
    },
    {
      "id": "technology_development",
      "label": "Technology & development",
      "value": 0.7,
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": [
        "8% of revenue"
      ]
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 14,
      "notes": [
        "8% of revenue"
      ]
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 15,
      "notes": [
        "5% of revenue"
      ]
    }
  ],
  "links": [
    {
      "source": "ucan",
      "target": "revenue",
      "value": 3.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 157.55208333333331,
      "targetWidth": 157.55208333333331
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 2.6,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 113.28125,
      "targetWidth": 113.28125
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 1.1,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 46.875,
      "targetWidth": 46.875
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.9,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 40.36458333333333,
      "targetWidth": 40.36458333333333
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.03,
      "sourceOrder": 0,
      "targetOrder": 4,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 154.94791666666666,
      "targetWidth": 154.94791666666666
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 205.72916666666666,
      "targetWidth": 205.72916666666666
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 80.72916666666666,
      "targetWidth": 80.72916666666666
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 74.21875,
      "targetWidth": 74.21875
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 65.10416666666666,
      "targetWidth": 65.10416666666666
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 6.510416666666666
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 9.114583333333332,
      "targetWidth": 9.114583333333332
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 0.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 28.645833333333332,
      "targetWidth": 28.645833333333332
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 18.229166666666664,
      "targetWidth": 18.229166666666664
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g><text x=\"570\" y=\"361\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"114\" font-weight=\"900\" textLength=\"344\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#e50914\" data-typography-role=\"brand\">NETFLIX</text><g transform=\"translate(157 400) scale(0.68)\"><defs><radialGradient id=\"netflix-q4-globe-bg-ucan\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-ucan\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-ucan)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-ucan)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M22 34C30 24 39 20 50 23C55 28 58 34 58 43C50 45 44 43 38 40C33 47 27 48 21 43Z\" fill=\"#1f7936\" /><path d=\"M35 45C42 47 47 51 50 58C43 61 36 59 31 54Z\" fill=\"#1f7936\" /><path d=\"M57 60C65 61 70 66 73 73C63 74 57 70 54 64Z\" fill=\"#b8b8b8\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><g transform=\"translate(157 607) scale(0.64)\"><defs><radialGradient id=\"netflix-q4-globe-bg-emea\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-emea\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-emea)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-emea)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M33 32C43 23 60 24 68 36C60 39 55 42 51 49C45 45 39 43 33 45Z\" fill=\"#1f7936\" /><path d=\"M45 46C59 45 70 51 78 61C67 65 55 64 45 58Z\" fill=\"#1f7936\" /><path d=\"M36 49C44 54 45 63 42 73C33 68 29 60 30 52Z\" fill=\"#1f7936\" /><path d=\"M24 27C32 22 40 20 47 23C40 27 34 31 30 37Z\" fill=\"#b8b8b8\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><g transform=\"translate(157 753) scale(0.64)\"><defs><radialGradient id=\"netflix-q4-globe-bg-latam\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-latam\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-latam)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-latam)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M24 29C33 24 44 25 51 33C45 38 40 39 34 37C29 40 25 39 21 35Z\" fill=\"#1f7936\" /><path d=\"M48 38C60 41 68 50 70 61C62 65 55 62 51 54C45 51 41 48 39 42Z\" fill=\"#1f7936\" /><path d=\"M57 61C65 67 66 77 61 88C52 80 50 70 54 62Z\" fill=\"#1f7936\" /><path d=\"M26 23C38 17 52 18 64 26C56 28 49 28 42 25Z\" fill=\"#b8b8b8\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><g transform=\"translate(157 883) scale(0.64)\"><defs><radialGradient id=\"netflix-q4-globe-bg-apac\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-apac\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-apac)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-apac)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M21 30C35 18 56 17 72 27C64 35 50 35 41 31C33 36 26 38 19 36Z\" fill=\"#1f7936\" /><path d=\"M44 39C57 37 70 43 78 54C67 58 55 56 45 50Z\" fill=\"#1f7936\" /><path d=\"M55 62C66 61 75 66 79 76C66 81 55 77 50 68Z\" fill=\"#1f7936\" /><path d=\"M68 22C76 23 82 28 86 35C78 34 72 31 68 27Z\" fill=\"#6ad94b\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><rect x=\"22\" y=\"171\" width=\"144\" height=\"142\" rx=\"23\" fill=\"#ed0015\"/><path d=\"M49 374 Q49 361 62 361 H72 L94 325 L116 361 H122 Q135 361 135 374 V967 Q135 980 122 980 H62 Q49 980 49 967 Z\" fill=\"#ed0015\"/><text x=\"94\" y=\"216\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">Paid</text><text x=\"94\" y=\"253\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">members</text><text data-operating-metric=\"paid_members\" x=\"94\" y=\"289\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">238M</text><text data-operating-metric=\"paid_ucan\" x=\"92\" y=\"441\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">76M</text><text data-operating-metric=\"paid_emea\" x=\"92\" y=\"650\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">80M</text><text data-operating-metric=\"paid_latam\" x=\"92\" y=\"793\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">42M</text><text data-operating-metric=\"paid_apac\" x=\"92\" y=\"924\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">41M</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\" fill=\"#000\">Source: Quarterly results</text></g></g>",
  "operatingMetrics": [
    {
      "id": "paid_members",
      "value": "238000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "238M"
    },
    {
      "id": "paid_ucan",
      "value": "76000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "76M"
    },
    {
      "id": "paid_emea",
      "value": "80000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "80M"
    },
    {
      "id": "paid_latam",
      "value": "42000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "42M"
    },
    {
      "id": "paid_apac",
      "value": "41000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "41M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Netflix · 2023 财年第二季度",
      "meta": {
        "title": "Netflix 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "titleSize": 109.375
      },
      "nodes": {
        "ucan": {
          "label": "UCAN",
          "notes": [
            "同比 +2%"
          ]
        },
        "emea": {
          "label": "EMEA",
          "notes": [
            "同比 +4%"
          ]
        },
        "latam": {
          "label": "LATAM",
          "notes": [
            "同比 +5%"
          ]
        },
        "apac": {
          "label": "APAC",
          "notes": [
            "同比 +1%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 43%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 22%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 18%",
            "同比持平"
          ]
        },
        "other": {
          "label": "利息及其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 8%"
          ]
        },
        "marketing": {
          "label": "市场营销",
          "notes": [
            "占收入 8%"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 5%"
          ]
        }
      },
      "layout": {
        "labels": {
          "ucan": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 390.625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 542.3177083333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "UCAN",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#606060"
                  }
                ]
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 673.1770833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 800.1302083333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "EMEA",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#606060"
                  }
                ]
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 907.5520833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1002.6041666666666,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "LATAM",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#606060"
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 1079.4270833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1171.2239583333333,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "APAC",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#606060"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 1268.2291666666667,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 424.5322265625,
                "top": 1300.78125,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0625,
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
                "x": 957.15087890625,
                "top": 566.40625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#444444"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#444444"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34375,
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
                "x": 1425.95947265625,
                "top": 434.8958333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 43%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
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
                "x": 1881.74560546875,
                "top": 350.26041666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 22%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
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
                "x": 1428.56396484375,
                "top": 1161.4583333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1883.0478515625,
                "top": 877.6041666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.760416666666664,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 37.760416666666664,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
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
                "x": 2514.63720703125,
                "top": 403.6458333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 18%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比持平",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 683.59375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "及其他",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 828.125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2519.84619140625,
                "top": 933.59375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2519.84619140625,
                "top": 1111.9791666666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "市场营销",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34375,
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
                "x": 2519.84619140625,
                "top": 1238.28125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "管理",
                    "size": 31.25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g><text x=\"570\" y=\"361\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"114\" font-weight=\"900\" textLength=\"344\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#e50914\" data-typography-role=\"brand\">NETFLIX</text><g transform=\"translate(157 400) scale(0.68)\"><defs><radialGradient id=\"netflix-q4-globe-bg-ucan\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-ucan\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-ucan)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-ucan)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M22 34C30 24 39 20 50 23C55 28 58 34 58 43C50 45 44 43 38 40C33 47 27 48 21 43Z\" fill=\"#1f7936\" /><path d=\"M35 45C42 47 47 51 50 58C43 61 36 59 31 54Z\" fill=\"#1f7936\" /><path d=\"M57 60C65 61 70 66 73 73C63 74 57 70 54 64Z\" fill=\"#b8b8b8\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><g transform=\"translate(157 607) scale(0.64)\"><defs><radialGradient id=\"netflix-q4-globe-bg-emea\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-emea\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-emea)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-emea)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M33 32C43 23 60 24 68 36C60 39 55 42 51 49C45 45 39 43 33 45Z\" fill=\"#1f7936\" /><path d=\"M45 46C59 45 70 51 78 61C67 65 55 64 45 58Z\" fill=\"#1f7936\" /><path d=\"M36 49C44 54 45 63 42 73C33 68 29 60 30 52Z\" fill=\"#1f7936\" /><path d=\"M24 27C32 22 40 20 47 23C40 27 34 31 30 37Z\" fill=\"#b8b8b8\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><g transform=\"translate(157 753) scale(0.64)\"><defs><radialGradient id=\"netflix-q4-globe-bg-latam\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-latam\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-latam)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-latam)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M24 29C33 24 44 25 51 33C45 38 40 39 34 37C29 40 25 39 21 35Z\" fill=\"#1f7936\" /><path d=\"M48 38C60 41 68 50 70 61C62 65 55 62 51 54C45 51 41 48 39 42Z\" fill=\"#1f7936\" /><path d=\"M57 61C65 67 66 77 61 88C52 80 50 70 54 62Z\" fill=\"#1f7936\" /><path d=\"M26 23C38 17 52 18 64 26C56 28 49 28 42 25Z\" fill=\"#b8b8b8\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><g transform=\"translate(157 883) scale(0.64)\"><defs><radialGradient id=\"netflix-q4-globe-bg-apac\" cx=\"34%\" cy=\"25%\" r=\"70%\"><stop offset=\"0\" stop-color=\"#fff\" /><stop offset=\".62\" stop-color=\"#f5f5f5\" /><stop offset=\"1\" stop-color=\"#d8d8d8\" /></radialGradient><clipPath id=\"netflix-q4-globe-clip-apac\"><circle cx=\"50\" cy=\"50\" r=\"47\" /></clipPath></defs><circle cx=\"50\" cy=\"50\" r=\"47\" fill=\"url(#netflix-q4-globe-bg-apac)\" stroke=\"#d5d5d5\" stroke-width=\"1.5\" /><g clip-path=\"url(#netflix-q4-globe-clip-apac)\"><path d=\"M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76\" fill=\"none\" stroke=\"#e2e2e2\" stroke-width=\"1.6\" /><path d=\"M21 30C35 18 56 17 72 27C64 35 50 35 41 31C33 36 26 38 19 36Z\" fill=\"#1f7936\" /><path d=\"M44 39C57 37 70 43 78 54C67 58 55 56 45 50Z\" fill=\"#1f7936\" /><path d=\"M55 62C66 61 75 66 79 76C66 81 55 77 50 68Z\" fill=\"#1f7936\" /><path d=\"M68 22C76 23 82 28 86 35C78 34 72 31 68 27Z\" fill=\"#6ad94b\" /><path d=\"M11 25C24 5 54 -2 77 12\" fill=\"none\" stroke=\"#fff\" stroke-width=\"7\" opacity=\".65\" /><path d=\"M18 87C37 99 65 97 82 82\" fill=\"none\" stroke=\"#bdbdbd\" stroke-width=\"4\" opacity=\".5\" /></g></g><rect x=\"22\" y=\"171\" width=\"144\" height=\"142\" rx=\"23\" fill=\"#ed0015\"/><path d=\"M49 374 Q49 361 62 361 H72 L94 325 L116 361 H122 Q135 361 135 374 V967 Q135 980 122 980 H62 Q49 980 49 967 Z\" fill=\"#ed0015\"/><text x=\"94\" y=\"216\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">付费</text><text x=\"94\" y=\"253\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">会员</text><text data-operating-metric=\"paid_members\" x=\"94\" y=\"289\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">238M</text><text data-operating-metric=\"paid_ucan\" x=\"92\" y=\"441\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">76M</text><text data-operating-metric=\"paid_emea\" x=\"92\" y=\"650\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">80M</text><text data-operating-metric=\"paid_latam\" x=\"92\" y=\"793\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">42M</text><text data-operating-metric=\"paid_apac\" x=\"92\" y=\"924\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"700\" fill=\"white\">41M</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\" fill=\"#000\">来源：季度业绩</text></g></g>"
    }
  }
});
