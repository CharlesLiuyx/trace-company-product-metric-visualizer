(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/spotify-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2168.23974609375,
    "hidePeriodStamp": true,
    "logoWidth": 242.2177734375,
    "logoHeight": 242.2177734375,
    "logoY": 255.240234375,
    "logoViewBox": "0 0 231 231",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"231\" height=\"231\" rx=\"52\" fill=\"#0a0a0a\"/>\n    <circle cx=\"115.5\" cy=\"115.5\" r=\"90\" fill=\"#1ed760\"/>\n    \n    <path d=\"M 59.7 120.2 Q 115.5 89.6 171.3 120.2\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"12.15\" stroke-linecap=\"round\"/>\n    <path d=\"M 70.5 137.3 Q 115.5 110.3 160.5 137.3\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"10.35\" stroke-linecap=\"round\"/>\n    <path d=\"M 82.2 152.6 Q 115.5 131.9 148.8 152.6\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"8.55\" stroke-linecap=\"round\"/>",
    "logoX": 737.0712890625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#818181",
    "noteColor": "#818181",
    "palette": {
      "source": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
      },
      "hub": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
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
    "linkOpacity": 1
  },
  "key": "spotify-q1-fy23",
  "name": "Spotify · Q1 FY23",
  "company": "Spotify",
  "nodes": [
    {
      "id": "premium",
      "label": "Premium",
      "value": 2713,
      "valueText": "€2,713M",
      "col": 0,
      "order": 0,
      "type": "source"
    },
    {
      "id": "advertising",
      "label": "Ad-supported",
      "value": 329,
      "valueText": "€329M",
      "col": 0,
      "order": 1,
      "type": "source"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3042,
      "valueText": "€3,042M",
      "col": 1,
      "order": 2,
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 766,
      "valueText": "€766M",
      "col": 2,
      "order": 3,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2276,
      "valueText": "(€2,276M)",
      "col": 2,
      "order": 4,
      "type": "cost"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 922,
      "valueText": "(€922M)",
      "col": 3,
      "order": 5,
      "type": "cost"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 156,
      "valueText": "(€156M)",
      "col": 3,
      "order": 6,
      "type": "cost"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 435,
      "valueText": "(€435M)",
      "col": 4,
      "order": 7,
      "type": "cost"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 347,
      "valueText": "(€347M)",
      "col": 4,
      "order": 8,
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 140,
      "valueText": "(€140M)",
      "col": 4,
      "order": 9,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 2713,
      "width": 315.1435546875,
      "sourceWidth": 315.1435546875,
      "targetWidth": 315.1435546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 329,
      "width": 37.76513671875,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "sourceOrder": 1,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 766,
      "width": 88.552734375,
      "sourceWidth": 88.552734375,
      "targetWidth": 88.552734375,
      "sourceOrder": 2,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2276,
      "width": 264.35595703125,
      "sourceWidth": 264.35595703125,
      "targetWidth": 264.35595703125,
      "sourceOrder": 3,
      "targetOrder": 3
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 766,
      "width": 88.552734375,
      "sourceWidth": 88.552734375,
      "targetWidth": 88.552734375,
      "sourceOrder": 4,
      "targetOrder": 4
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 156,
      "width": 18.2314453125,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 5,
      "targetOrder": 5
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 435,
      "width": 50.78759765625,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "sourceOrder": 6,
      "targetOrder": 6
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 347,
      "width": 40.36962890625,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "sourceOrder": 7,
      "targetOrder": 7
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 140,
      "width": 15.626953125,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 8,
      "targetOrder": 8
    }
  ],
  "layout": {
    "nodes": {
      "premium": {
        "x": 363.32666015625,
        "y": 548.24560546875,
        "width": 71.62353515625,
        "height": 315.1435546875
      },
      "advertising": {
        "x": 363.32666015625,
        "y": 1062.6328125,
        "width": 71.62353515625,
        "height": 37.76513671875
      },
      "revenue": {
        "x": 832.13525390625,
        "y": 669.3544921875,
        "width": 72.92578125,
        "height": 352.90869140625
      },
      "gross_profit": {
        "x": 1297.037109375,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 88.552734375
      },
      "cost_of_revenue": {
        "x": 1299.6416015625,
        "y": 826.92626953125,
        "width": 72.92578125,
        "height": 264.35595703125
      },
      "operating_loss": {
        "x": 1644.73681640625,
        "y": 974.080078125,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "operating_expenses": {
        "x": 1810.1220703125,
        "y": 677.16796875,
        "width": 71.62353515625,
        "height": 106.7841796875
      },
      "rnd": {
        "x": 2232.0498046875,
        "y": 803.48583984375,
        "width": 71.62353515625,
        "height": 50.78759765625
      },
      "sm": {
        "x": 2232.0498046875,
        "y": 1022.26318359375,
        "width": 71.62353515625,
        "height": 40.36962890625
      },
      "ga": {
        "x": 2229.4453125,
        "y": 1239.73828125,
        "width": 71.62353515625,
        "height": 15.626953125
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 451.87939453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 967.56884765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 868.59814453125,
            "top": 522.20068359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1333.5,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "25% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "Flat Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1333.5,
            "top": 1108.21142578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1683.80419921875,
            "top": 1009.24072265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(5%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1846.5849609375,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 790.46337890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1002.7294921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1207.18212890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & Admin",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "5% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"188.82568359375\" y=\"701.91064453125\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">Premium</text><text x=\"188.82568359375\" y=\"743.58251953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#818181\">29% gross margin</text><text x=\"188.82568359375\" y=\"1089.97998046875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">Ad-supported</text><text x=\"188.82568359375\" y=\"1131.65185546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#818181\">(3%) gross margin</text><rect x=\"29.95166015625\" y=\"1201.97314453125\" width=\"210.9638671875\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#000\"/><text x=\"135.43359375\" y=\"1254.06298828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ddd\" >MAU</text><text x=\"135.43359375\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#ddd\" data-operating-metric=\"mau\">515M</text><text x=\"135.43359375\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ddd\" >+22% Y/Y</text><rect x=\"253.93798828125\" y=\"1201.97314453125\" width=\"330.7705078125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#000\"/><text x=\"419.3232421875\" y=\"1254.06298828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ddd\" >Premium Subs</text><text x=\"419.3232421875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#ddd\" data-operating-metric=\"premium_subs\">210M</text><text x=\"419.3232421875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ddd\" >+15% Y/Y</text><rect x=\"597.73095703125\" y=\"1201.97314453125\" width=\"380.255859375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#000\"/><text x=\"787.85888671875\" y=\"1254.06298828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ddd\" >Ad-supported Subs</text><text x=\"787.85888671875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#ddd\" data-operating-metric=\"ad_supported_subs\">317M</text><text x=\"787.85888671875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ddd\" >+26% Y/Y</text><text x=\"424.5322265625\" y=\"1389.49658203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#818181\">MAU = Monthly Active Users</text><text x=\"429.7412109375\" y=\"1437.6796875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "mau",
      "label": "MAU",
      "value": "515000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "515M",
      "basis": "unspecified",
      "notes": [
        "+22% Y/Y"
      ],
      "quote": "MAU\n515M\n+22% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          30,
          1202,
          211,
          150
        ]
      }
    },
    {
      "id": "premium_subs",
      "label": "Premium Subs",
      "value": "210000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "210M",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y"
      ],
      "quote": "Premium Subs\n210M\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          254,
          1202,
          331,
          150
        ]
      }
    },
    {
      "id": "ad_supported_subs",
      "label": "Ad-supported Subs",
      "value": "317000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "317M",
      "basis": "unspecified",
      "notes": [
        "+26% Y/Y"
      ],
      "quote": "Ad-supported Subs\n317M\n+26% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          598,
          1202,
          380,
          150
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Spotify · 2023 财年第一季度",
      "meta": {
        "title": "Spotify 2023 财年第一季度利润表",
        "period": "2023 财年第一季度"
      },
      "nodes": {
        "premium": {
          "label": "付费订阅"
        },
        "advertising": {
          "label": "广告支持"
        },
        "revenue": {
          "label": "收入"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "operating_loss": {
          "label": "营业亏损"
        },
        "rnd": {
          "label": "研发"
        },
        "sm": {
          "label": "销售与市场"
        },
        "ga": {
          "label": "一般及行政"
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 451.87939453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 967.56884765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 868.59814453125,
                "top": 522.20068359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1333.5,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比持平",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1333.5,
                "top": 1108.21142578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1683.80419921875,
                "top": 1009.24072265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1846.5849609375,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 790.46337890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1002.7294921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1207.18212890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"188.82568359375\" y=\"701.91064453125\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">付费订阅</text><text x=\"188.82568359375\" y=\"743.58251953125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#818181\">毛利率 29%</text><text x=\"188.82568359375\" y=\"1089.97998046875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">广告支持</text><text x=\"188.82568359375\" y=\"1131.65185546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#818181\">毛利率 (3%)</text><rect x=\"29.95166015625\" y=\"1201.97314453125\" width=\"210.9638671875\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#000\"/><text x=\"135.43359375\" y=\"1254.06298828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ddd\" >MAU</text><text x=\"135.43359375\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#ddd\" data-operating-metric=\"mau\">515M</text><text x=\"135.43359375\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ddd\" >同比 +22%</text><rect x=\"253.93798828125\" y=\"1201.97314453125\" width=\"330.7705078125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#000\"/><text x=\"419.3232421875\" y=\"1254.06298828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ddd\" >付费订阅用户</text><text x=\"419.3232421875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#ddd\" data-operating-metric=\"premium_subs\">210M</text><text x=\"419.3232421875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ddd\" >同比 +15%</text><rect x=\"597.73095703125\" y=\"1201.97314453125\" width=\"380.255859375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#000\"/><text x=\"787.85888671875\" y=\"1254.06298828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ddd\" >广告支持用户</text><text x=\"787.85888671875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#ddd\" data-operating-metric=\"ad_supported_subs\">317M</text><text x=\"787.85888671875\" y=\"1326.98876953125\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ddd\" >同比 +26%</text><text x=\"424.5322265625\" y=\"1389.49658203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#818181\">MAU = 月活跃用户</text><text x=\"429.7412109375\" y=\"1437.6796875\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  }
});})();
