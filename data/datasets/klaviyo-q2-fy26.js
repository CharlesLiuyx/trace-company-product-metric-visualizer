window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "klaviyo-q2-fy26",
  "name": "Klaviyo · Q2 FY26",
  "company": "Klaviyo",
  "meta": {
    "company": "Klaviyo",
    "title": "Klaviyo Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/klaviyo-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199.02032520325204,
    "titleSize": 123.98373983739839,
    "titleWeight": 800,
    "titleTextLength": 2166
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "operating_loss:right",
        "sm:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#959595",
      "hub": "#959595",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "us",
      "label": "United States",
      "value": 216,
      "valueText": "$216M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#232426",
      "labelColor": "#232426",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "other_americas",
      "label": "Other Americas",
      "value": 17,
      "valueText": "$17M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#232426",
      "labelColor": "#232426",
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "americas",
      "label": "Americas",
      "value": 233,
      "valueText": "$233M",
      "type": "source",
      "col": 1,
      "order": 2,
      "color": "#232426",
      "labelColor": "#232426",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 39,
      "valueText": "$39M",
      "type": "source",
      "col": 1,
      "order": 3,
      "color": "#232426",
      "labelColor": "#232426",
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 98,
      "valueText": "$98M",
      "type": "source",
      "col": 1,
      "order": 4,
      "color": "#232426",
      "labelColor": "#232426",
      "notes": [
        "+37% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 371,
      "valueText": "$371M",
      "type": "hub",
      "col": 2,
      "order": 5,
      "color": "#232426",
      "labelColor": "#232426",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 269,
      "valueText": "$269M",
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "73% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 101,
      "valueText": "($101M)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -15,
      "valueText": "($15M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "(4%) margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 284,
      "valueText": "($284M)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 139,
      "valueText": "($139M)",
      "type": "cost",
      "col": 6,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "38% of revenue",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "rd",
      "label": "R&D",
      "value": 92,
      "valueText": "($92M)",
      "type": "cost",
      "col": 6,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "25% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 53,
      "valueText": "($53M)",
      "type": "cost",
      "col": 6,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "14% of revenue",
        "(4pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "us",
      "target": "americas",
      "value": 216,
      "sourceWidth": 176,
      "y0": 534,
      "sourceOrder": 0,
      "targetWidth": 176,
      "y1": 632,
      "targetOrder": 0,
      "linkTint": "#959595"
    },
    {
      "source": "other_americas",
      "target": "americas",
      "value": 17,
      "sourceWidth": 13,
      "y0": 823.5,
      "sourceOrder": 0,
      "targetWidth": 13,
      "y1": 726.5,
      "targetOrder": 1,
      "linkTint": "#959595"
    },
    {
      "source": "americas",
      "target": "revenue",
      "value": 233,
      "sourceWidth": 189,
      "y0": 638.5,
      "sourceOrder": 0,
      "targetWidth": 191.537,
      "y1": 740.768,
      "targetOrder": 0,
      "linkTint": "#959595"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 39,
      "sourceWidth": 30,
      "y0": 942,
      "sourceOrder": 0,
      "targetWidth": 30.403,
      "y1": 851.738,
      "targetOrder": 1,
      "linkTint": "#959595"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 98,
      "sourceWidth": 79,
      "y0": 1177.5,
      "sourceOrder": 0,
      "targetWidth": 80.06,
      "y1": 906.97,
      "targetOrder": 2,
      "linkTint": "#959595"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 269,
      "sourceWidth": 219,
      "y0": 754.5,
      "sourceOrder": 0,
      "targetWidth": 221,
      "y1": 649.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 101,
      "sourceWidth": 82,
      "y0": 906,
      "sourceOrder": 1,
      "targetWidth": 84,
      "y1": 1011,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 269,
      "sourceWidth": 221,
      "y0": 649.5,
      "sourceOrder": 0,
      "targetWidth": 220.056,
      "y1": 753.028,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 15,
      "sourceWidth": 13,
      "y0": 960.5,
      "sourceOrder": 0,
      "targetWidth": 12.944,
      "y1": 869.528,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 139,
      "sourceWidth": 114.021,
      "y0": 700.011,
      "sourceOrder": 0,
      "targetWidth": 115,
      "y1": 515.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 92,
      "sourceWidth": 75.353,
      "y0": 794.698,
      "sourceOrder": 1,
      "targetWidth": 76,
      "y1": 797,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 53,
      "sourceWidth": 43.626,
      "y0": 854.187,
      "sourceOrder": 2,
      "targetWidth": 44,
      "y1": 1064,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "us": {
        "x": 454,
        "y": 446,
        "width": 71,
        "height": 176
      },
      "other_americas": {
        "x": 454,
        "y": 817,
        "width": 71,
        "height": 13
      },
      "americas": {
        "x": 828,
        "y": 544,
        "width": 70,
        "height": 189
      },
      "apac": {
        "x": 828,
        "y": 927,
        "width": 70,
        "height": 30
      },
      "emea": {
        "x": 828,
        "y": 1138,
        "width": 70,
        "height": 79
      },
      "revenue": {
        "x": 1202,
        "y": 645,
        "width": 70,
        "height": 302
      },
      "gross_profit": {
        "x": 1578,
        "y": 539,
        "width": 70,
        "height": 221
      },
      "cost_of_revenue": {
        "x": 1575,
        "y": 969,
        "width": 71,
        "height": 84
      },
      "operating_loss": {
        "x": 1788,
        "y": 954,
        "width": 70,
        "height": 13
      },
      "operating_expenses": {
        "x": 1949,
        "y": 643,
        "width": 71,
        "height": 233
      },
      "sm": {
        "x": 2322,
        "y": 458,
        "width": 71,
        "height": 115
      },
      "rd": {
        "x": 2322,
        "y": 759,
        "width": 71,
        "height": 76
      },
      "ga": {
        "x": 2322,
        "y": 1042,
        "width": 71,
        "height": 44
      }
    },
    "labels": {
      "us": {
        "blocks": [
          {
            "x": 494.75,
            "top": 343.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.96999999999997,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#222425",
                "textLength": 118
              },
              {
                "text": "+22% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 310.5,
            "top": 509.49998779296874,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "United States",
                "size": 40,
                "weight": 800,
                "color": "#222425",
                "textLength": 257
              }
            ]
          }
        ]
      },
      "other_americas": {
        "blocks": [
          {
            "x": 494.75,
            "top": 711.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#222425",
                "textLength": 96
              },
              {
                "text": "+25% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 279,
            "top": 798.9999877929688,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Other Americas",
                "size": 40,
                "weight": 800,
                "color": "#222425",
                "textLength": 300
              }
            ]
          }
        ]
      },
      "americas": {
        "blocks": [
          {
            "x": 862.3333333333334,
            "top": 387.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.120000000000005,
            "lines": [
              {
                "text": "Americas",
                "size": 40,
                "weight": 800,
                "color": "#222425",
                "textLength": 178
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#222425",
                "textLength": 118
              },
              {
                "text": "+22% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 116
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 752.5,
            "top": 914.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "APAC",
                "size": 40,
                "weight": 800,
                "color": "#222425",
                "textLength": 101
              }
            ]
          },
          {
            "x": 862.75,
            "top": 823.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#222425",
                "textLength": 96
              },
              {
                "text": "+29% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 759,
            "top": 1154.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "EMEA",
                "size": 40,
                "weight": 800,
                "color": "#222425",
                "textLength": 102
              }
            ]
          },
          {
            "x": 862.75,
            "top": 1033.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#222425",
                "textLength": 96
              },
              {
                "text": "+37% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1237.8333333333333,
            "top": 490.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#222425",
                "textLength": 163
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#222425",
                "textLength": 118
              },
              {
                "text": "+26% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 116
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1615.375,
            "top": 347.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 224
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "73% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1613.1666666666667,
            "top": 1067.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 16.284999999999968,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 114
              },
              {
                "text": "revenue",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 132
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 123
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1824.7,
            "top": 977.4000000000001,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.060000000000002,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 193
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 70
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 121
              },
              {
                "text": "(4%) margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 151
              },
              {
                "text": "+7pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1986,
            "top": 476.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.63500000000002,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 193
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 176
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 143
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2519.25,
            "top": 481.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333359,
            "lines": [
              {
                "text": "S&M",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 64
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "38% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 198
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2519.75,
            "top": 770.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.846666666666692,
            "lines": [
              {
                "text": "R&D",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 60
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "25% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2520,
            "top": 1032.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333359,
            "lines": [
              {
                "text": "G&A",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 63
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "14% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"72\" y=\"1150\" width=\"165\" height=\"167\" rx=\"31\" fill=\"#222323\"/><rect x=\"243\" y=\"1150\" width=\"324\" height=\"167\" rx=\"31\" fill=\"#222323\"/><text x=\"156\" y=\"1209.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text><text x=\"155.5\" y=\"1249.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">109%</text><text x=\"155\" y=\"1292.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+1pp Y/Y</text><text x=\"407.5\" y=\"1226.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">Customers &gt; $50K</text><text x=\"405.5\" y=\"1269.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">4,477 (+36% Y/Y)</text><text x=\"325.5\" y=\"1362.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text><g transform=\"translate(116 517)\">\n        <rect x=\"0\" y=\"0\" width=\"49\" height=\"32\" fill=\"#ffffff\"/>\n        <rect x=\"0\" y=\"0\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"4.923076923076923\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"9.846153846153847\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"14.76923076923077\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"19.692307692307693\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"24.615384615384617\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"29.53846153846154\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/>\n        <rect x=\"0\" y=\"0\" width=\"21.07\" height=\"17.230769230769234\" fill=\"#2b5aa8\"/>\n        <g fill=\"#ffffff\" opacity=\"0.92\">\n          <circle cx=\"4\" cy=\"4\" r=\"0.8\"/><circle cx=\"7.2\" cy=\"4\" r=\"0.8\"/><circle cx=\"10.4\" cy=\"4\" r=\"0.8\"/><circle cx=\"13.600000000000001\" cy=\"4\" r=\"0.8\"/><circle cx=\"16.8\" cy=\"4\" r=\"0.8\"/><circle cx=\"20\" cy=\"4\" r=\"0.8\"/><circle cx=\"4\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"7.2\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"10.4\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"13.600000000000001\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"16.8\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"20\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"4\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"7.2\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"10.4\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"13.600000000000001\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"16.8\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"20\" cy=\"12.4\" r=\"0.8\"/>\n        </g>\n      </g>\n      \n      <g transform=\"translate(678 379) scale(0.76)\">\n        <circle cx=\"50\" cy=\"50\" r=\"43\" fill=\"#ffffff\" stroke=\"#c9c9c9\" stroke-width=\"2\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"24\" ry=\"43\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"43\" ry=\"15\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <path d=\"M8 50H92M50 8V92\" stroke=\"#e6e6e6\" stroke-width=\"1.2\"/>\n        <g fill=\"#2d7f39\">\n          <path d=\"M26 20C35 12 50 13 59 23C50 27 49 35 40 38C35 42 35 49 44 55C40 64 32 68 27 60C25 53 20 50 22 43C13 39 13 27 26 20Z\"/>\n          <path d=\"M45 58C53 58 61 67 57 77C49 78 44 71 45 58Z\"/>\n        </g>\n        <path d=\"M17 74C29 86 59 91 81 77\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"5\" opacity=\"0.65\"/>\n        <path d=\"M82 19C90 29 94 43 92 58\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"8\" opacity=\"0.7\"/>\n      </g>\n      \n      <g transform=\"translate(606 900) scale(0.72)\">\n        <circle cx=\"50\" cy=\"50\" r=\"43\" fill=\"#ffffff\" stroke=\"#c9c9c9\" stroke-width=\"2\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"24\" ry=\"43\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"43\" ry=\"15\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <path d=\"M8 50H92M50 8V92\" stroke=\"#e6e6e6\" stroke-width=\"1.2\"/>\n        <g fill=\"#2d7f39\">\n            <path d=\"M26 18C39 9 58 13 70 25C62 25 55 29 49 34C42 29 33 33 29 40C23 35 18 26 26 18Z\"/>\n            <path d=\"M52 45C62 47 71 53 74 62C66 68 51 69 43 61C43 53 46 48 52 45Z\"/>\n            <path d=\"M71 25C80 29 86 36 88 45C80 45 74 39 71 25Z\" fill=\"#6ed441\"/>\n          </g>\n        <path d=\"M17 74C29 86 59 91 81 77\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"5\" opacity=\"0.65\"/>\n        <path d=\"M82 19C90 29 94 43 92 58\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"8\" opacity=\"0.7\"/>\n      </g>\n      \n      <g transform=\"translate(606 1137) scale(0.72)\">\n        <circle cx=\"50\" cy=\"50\" r=\"43\" fill=\"#ffffff\" stroke=\"#c9c9c9\" stroke-width=\"2\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"24\" ry=\"43\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"43\" ry=\"15\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <path d=\"M8 50H92M50 8V92\" stroke=\"#e6e6e6\" stroke-width=\"1.2\"/>\n        <g fill=\"#2d7f39\">\n            <path d=\"M32 31C43 23 58 24 69 34C64 42 56 39 52 47C44 48 36 43 32 31Z\"/>\n            <path d=\"M54 48C65 46 77 52 82 63C72 74 57 72 49 62C49 56 51 52 54 48Z\"/>\n            <path d=\"M27 55C36 52 43 56 47 65C41 72 28 67 27 55Z\"/>\n          </g>\n        <path d=\"M17 74C29 86 59 91 81 77\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"5\" opacity=\"0.65\"/>\n        <path d=\"M82 19C90 29 94 43 92 58\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"8\" opacity=\"0.7\"/>\n      </g>\n\n      \n    </g>",
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "ARPAM",
      "GMV",
      "Clover GPV",
      "USDC",
      "Klarna Checkout (KCO)",
      "monday"
    ],
    "zh": {
      "name": "Klaviyo · 2026 财年第二季度",
      "meta": {
        "title": "Klaviyo 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1678.875
      },
      "nodes": {
        "us": {
          "label": "美国",
          "notes": [
            "同比 +22%"
          ]
        },
        "other_americas": {
          "label": "美洲其他地区",
          "notes": [
            "同比 +25%"
          ]
        },
        "americas": {
          "label": "美洲",
          "notes": [
            "同比 +22%"
          ]
        },
        "apac": {
          "label": "亚太地区",
          "notes": [
            "同比 +29%"
          ]
        },
        "emea": {
          "label": "欧洲、中东及非洲",
          "notes": [
            "同比 +37%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +26%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 73%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (4%)",
            "同比 +7 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 38%",
            "同比 (6 个百分点)"
          ]
        },
        "rd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 14%",
            "同比 (4 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "us": {
            "blocks": [
              {
                "x": 494.75,
                "top": 343.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.96999999999997,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#222425",
                    "textLength": 118
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 310.5,
                "top": 509.49998779296874,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800,
                    "color": "#222425"
                  }
                ]
              }
            ]
          },
          "other_americas": {
            "blocks": [
              {
                "x": 494.75,
                "top": 711.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#222425",
                    "textLength": 96
                  },
                  {
                    "text": "同比 +25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 279,
                "top": 798.9999877929688,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "美洲其他地区",
                    "size": 40,
                    "weight": 800,
                    "color": "#222425"
                  }
                ]
              }
            ]
          },
          "americas": {
            "blocks": [
              {
                "x": 862.3333333333334,
                "top": 387.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.120000000000005,
                "lines": [
                  {
                    "text": "美洲",
                    "size": 40,
                    "weight": 800,
                    "color": "#222425"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#222425",
                    "textLength": 118
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 752.5,
                "top": 914.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "亚太",
                    "size": 40,
                    "weight": 800,
                    "color": "#222425"
                  }
                ]
              },
              {
                "x": 862.75,
                "top": 823.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#222425",
                    "textLength": 96
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
          "emea": {
            "blocks": [
              {
                "x": 759,
                "top": 1159.6000000000001,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "EMEA 地区",
                    "size": 26,
                    "weight": 800,
                    "color": "#222425"
                  }
                ]
              },
              {
                "x": 862.75,
                "top": 1033.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#222425",
                    "textLength": 96
                  },
                  {
                    "text": "同比 +37%",
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
                "x": 1237.8333333333333,
                "top": 490.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#222425"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#222425",
                    "textLength": 118
                  },
                  {
                    "text": "同比 +26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1615.375,
                "top": 347.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 117
                  },
                  {
                    "text": "利润率 73%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1613.1666666666667,
                "top": 1067.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 16.284999999999968,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "收入",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 123
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1824.7,
                "top": 977.4000000000001,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.060000000000002,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 121
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 28,
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
                "x": 1986,
                "top": 476.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.63500000000002,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 143
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2519.25,
                "top": 481.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333359,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 38%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2519.75,
                "top": 770.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.846666666666692,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2520,
                "top": 1032.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333359,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"72\" y=\"1150\" width=\"165\" height=\"167\" rx=\"31\" fill=\"#222323\"/><rect x=\"243\" y=\"1150\" width=\"324\" height=\"167\" rx=\"31\" fill=\"#222323\"/><text x=\"156\" y=\"1209.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text><text x=\"155.5\" y=\"1249.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">109%</text><text x=\"155\" y=\"1292.23\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"400\" fill=\"#ffffff\">同比 +1 个百分点</text><text x=\"407.5\" y=\"1226.23\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"400\" fill=\"#ffffff\">年收入超过 $50K 的客户</text><text x=\"405.5\" y=\"1269.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">4,477（同比 +36%）</text><text x=\"325.5\" y=\"1362.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">DBNR = 金额净留存率</text><g transform=\"translate(116 517)\">\n        <rect x=\"0\" y=\"0\" width=\"49\" height=\"32\" fill=\"#ffffff\"/>\n        <rect x=\"0\" y=\"0\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"4.923076923076923\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"9.846153846153847\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"14.76923076923077\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"19.692307692307693\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"24.615384615384617\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/><rect x=\"0\" y=\"29.53846153846154\" width=\"49\" height=\"2.4615384615384617\" fill=\"#e53b4d\"/>\n        <rect x=\"0\" y=\"0\" width=\"21.07\" height=\"17.230769230769234\" fill=\"#2b5aa8\"/>\n        <g fill=\"#ffffff\" opacity=\"0.92\">\n          <circle cx=\"4\" cy=\"4\" r=\"0.8\"/><circle cx=\"7.2\" cy=\"4\" r=\"0.8\"/><circle cx=\"10.4\" cy=\"4\" r=\"0.8\"/><circle cx=\"13.600000000000001\" cy=\"4\" r=\"0.8\"/><circle cx=\"16.8\" cy=\"4\" r=\"0.8\"/><circle cx=\"20\" cy=\"4\" r=\"0.8\"/><circle cx=\"4\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"7.2\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"10.4\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"13.600000000000001\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"16.8\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"20\" cy=\"8.2\" r=\"0.8\"/><circle cx=\"4\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"7.2\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"10.4\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"13.600000000000001\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"16.8\" cy=\"12.4\" r=\"0.8\"/><circle cx=\"20\" cy=\"12.4\" r=\"0.8\"/>\n        </g>\n      </g>\n      \n      <g transform=\"translate(678 379) scale(0.76)\">\n        <circle cx=\"50\" cy=\"50\" r=\"43\" fill=\"#ffffff\" stroke=\"#c9c9c9\" stroke-width=\"2\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"24\" ry=\"43\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"43\" ry=\"15\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <path d=\"M8 50H92M50 8V92\" stroke=\"#e6e6e6\" stroke-width=\"1.2\"/>\n        <g fill=\"#2d7f39\">\n          <path d=\"M26 20C35 12 50 13 59 23C50 27 49 35 40 38C35 42 35 49 44 55C40 64 32 68 27 60C25 53 20 50 22 43C13 39 13 27 26 20Z\"/>\n          <path d=\"M45 58C53 58 61 67 57 77C49 78 44 71 45 58Z\"/>\n        </g>\n        <path d=\"M17 74C29 86 59 91 81 77\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"5\" opacity=\"0.65\"/>\n        <path d=\"M82 19C90 29 94 43 92 58\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"8\" opacity=\"0.7\"/>\n      </g>\n      \n      <g transform=\"translate(606 900) scale(0.72)\">\n        <circle cx=\"50\" cy=\"50\" r=\"43\" fill=\"#ffffff\" stroke=\"#c9c9c9\" stroke-width=\"2\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"24\" ry=\"43\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"43\" ry=\"15\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <path d=\"M8 50H92M50 8V92\" stroke=\"#e6e6e6\" stroke-width=\"1.2\"/>\n        <g fill=\"#2d7f39\">\n            <path d=\"M26 18C39 9 58 13 70 25C62 25 55 29 49 34C42 29 33 33 29 40C23 35 18 26 26 18Z\"/>\n            <path d=\"M52 45C62 47 71 53 74 62C66 68 51 69 43 61C43 53 46 48 52 45Z\"/>\n            <path d=\"M71 25C80 29 86 36 88 45C80 45 74 39 71 25Z\" fill=\"#6ed441\"/>\n          </g>\n        <path d=\"M17 74C29 86 59 91 81 77\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"5\" opacity=\"0.65\"/>\n        <path d=\"M82 19C90 29 94 43 92 58\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"8\" opacity=\"0.7\"/>\n      </g>\n      \n      <g transform=\"translate(606 1137) scale(0.72)\">\n        <circle cx=\"50\" cy=\"50\" r=\"43\" fill=\"#ffffff\" stroke=\"#c9c9c9\" stroke-width=\"2\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"24\" ry=\"43\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <ellipse cx=\"50\" cy=\"50\" rx=\"43\" ry=\"15\" fill=\"none\" stroke=\"#e1e1e1\" stroke-width=\"1.5\"/>\n        <path d=\"M8 50H92M50 8V92\" stroke=\"#e6e6e6\" stroke-width=\"1.2\"/>\n        <g fill=\"#2d7f39\">\n            <path d=\"M32 31C43 23 58 24 69 34C64 42 56 39 52 47C44 48 36 43 32 31Z\"/>\n            <path d=\"M54 48C65 46 77 52 82 63C72 74 57 72 49 62C49 56 51 52 54 48Z\"/>\n            <path d=\"M27 55C36 52 43 56 47 65C41 72 28 67 27 55Z\"/>\n          </g>\n        <path d=\"M17 74C29 86 59 91 81 77\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"5\" opacity=\"0.65\"/>\n        <path d=\"M82 19C90 29 94 43 92 58\" fill=\"none\" stroke=\"#a9a9a9\" stroke-width=\"8\" opacity=\"0.7\"/>\n      </g>\n\n      \n    </g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/klaviyo/company-logo-klaviyo-q2-fy26.png",
      "x": 956,
      "y": 250,
      "width": 576,
      "height": 178
    }
  ]
});
