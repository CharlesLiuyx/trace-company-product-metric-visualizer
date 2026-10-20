(function () {
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pinterest-q3-fy23",
  "name": "Pinterest · Q3 FY23",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195,
    "titleSize": 122,
    "titleWeight": 800,
    "titleTextLength": 2300,
    "hidePeriodStamp": true,
    "logoWidth": 212,
    "logoHeight": 212,
    "logoY": 237,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || ""
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#175576",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 39,
      "value": 38,
      "note": 27,
      "lineGap": 12
    }
  },
  "layout": {
    "scale": 0.4113254372133027,
    "nodes": {
      "us_canada": {
        "x": 414.765,
        "y": 468.809,
        "width": 72.926,
        "height": 253.938
      },
      "europe": {
        "x": 414.765,
        "y": 886.178,
        "width": 72.926,
        "height": 46.881
      },
      "rest_of_world": {
        "x": 414.765,
        "y": 1099.096,
        "width": 72.926,
        "height": 13.022
      },
      "revenue": {
        "x": 882.272,
        "y": 632.892,
        "width": 72.926,
        "height": 313.841
      },
      "gross_profit": {
        "x": 1346.522,
        "y": 544.339,
        "width": 72.926,
        "height": 243.52
      },
      "cost_of_revenue": {
        "x": 1346.522,
        "y": 1013.799,
        "width": 72.926,
        "height": 70.321
      },
      "operating_loss": {
        "x": 1618.692,
        "y": 1060.028,
        "width": 72.926,
        "height": 2.604
      },
      "operating_expenses": {
        "x": 1810.773,
        "y": 645.263,
        "width": 72.926,
        "height": 244.822
      },
      "rnd": {
        "x": 2283.489,
        "y": 475.971,
        "width": 72.926,
        "height": 109.389
      },
      "sm": {
        "x": 2283.489,
        "y": 836.042,
        "width": 72.926,
        "height": 92.459
      },
      "ga": {
        "x": 2283.489,
        "y": 1163.557,
        "width": 72.926,
        "height": 43.625
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 918.083,
            "top": 488.342,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "+11% Y/Y",
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
            "x": 1382.985,
            "top": 354.211,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "78% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 1382.985,
            "top": 1100.398,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1657.759,
            "top": 1080.864,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "(1%) margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+9pp Y/Y",
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
            "x": 1846.585,
            "top": 476.622,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2491.197,
            "top": 485.738,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "R&D",
                "size": 29.952,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "35% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2491.197,
            "top": 841.251,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "S&M",
                "size": 29.952,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "30% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 2491.197,
            "top": 1145.977,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "G&A",
                "size": 29.952,
                "weight": 700,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "14% of revenue",
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
      "us_canada": {
        "blocks": [
          {
            "x": 447.973,
            "top": 375.047,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "+8% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 367.233,
            "top": 549.548,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "US &",
                "size": 37.765,
                "weight": 700,
                "color": null
              },
              {
                "text": "Canada",
                "size": 37.765,
                "weight": 700,
                "color": null
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 447.973,
            "top": 789.161,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "+33% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 367.233,
            "top": 884.225,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Europe",
                "size": 37.765,
                "weight": 700,
                "color": null
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 447.973,
            "top": 1001.427,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400,
                "color": null
              },
              {
                "text": "+29% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 367.233,
            "top": 1057.6104609375,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Rest of",
                "size": 37.765,
                "weight": 700,
                "color": null
              },
              {
                "text": "the world",
                "size": 37.765,
                "weight": 700,
                "color": null
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "us_canada",
      "label": "US & Canada",
      "value": 618,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#939ebd"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 114,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+33% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#939ebd"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of the world",
      "value": 31,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+29% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#939ebd"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 763,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#1b3077",
      "labelColor": "#1b3077",
      "linkTint": "#939ebd"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 592,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "78% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009751",
      "linkTint": "#9bcd9b"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 171,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#df8585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 5,
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": [
        "(1%) margin",
        "+9pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#df8585"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 597,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#df8585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 265,
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [
        "35% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#df8585"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 226,
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [
        "30% of revenue",
        "(4pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#df8585"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 107,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [
        "14% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#9a1800",
      "linkTint": "#df8585"
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 618,
      "width": 253.93798828125,
      "sourceWidth": 253.93798828125,
      "targetWidth": 253.93798828125,
      "y0": 595.777587890625,
      "y1": 759.860595703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#939ebd"
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 114,
      "width": 46.880859375,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 909.618896484375,
      "y1": 910.27001953125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#939ebd"
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 31,
      "width": 13.0224609375,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "y0": 1105.60693359375,
      "y1": 940.2216796875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#939ebd"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 592,
      "width": 243.52001953125,
      "sourceWidth": 243.52001953125,
      "targetWidth": 243.52001953125,
      "y0": 754.651611328125,
      "y1": 666.098876953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd9b"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 171,
      "width": 70.3212890625,
      "sourceWidth": 70.3212890625,
      "targetWidth": 70.3212890625,
      "y0": 911.572265625,
      "y1": 1048.959228515625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 592,
      "width": 243.52001953125,
      "sourceWidth": 243.52001953125,
      "targetWidth": 243.52001953125,
      "y0": 666.098876953125,
      "y1": 767.02294921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 5,
      "width": 2.6044921875,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.08359375,
      "y0": 1061.33056640625,
      "y1": 889.0434082031251,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 265,
      "width": 108.737548828125,
      "sourceWidth": 108.737548828125,
      "targetWidth": 109.388671875,
      "y0": 699.6317138671875,
      "y1": 530.665283203125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 226,
      "width": 92.45947265625,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "y0": 800.230224609375,
      "y1": 882.271728515625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 107,
      "width": 43.625244140625,
      "sourceWidth": 43.625244140625,
      "targetWidth": 43.625244140625,
      "y0": 868.2725830078125,
      "y1": 1185.3695068359375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "482000000",
      "literal": "482M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_us_canada",
      "value": "96000000",
      "literal": "96M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_europe",
      "value": "128000000",
      "literal": "128M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_rest_of_world",
      "value": "258000000",
      "literal": "258M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "mau_summary",
      "value": "482000000",
      "literal": "482M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "arpu",
      "value": "0.00161",
      "literal": "$1.61",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq"
    }
  ],
  "annotationsSvg": "<g><rect x=\"33.8583984375\" y=\"226.5908203125\" width=\"187.5234375\" height=\"169.2919921875\" rx=\"31.25390625\" fill=\"#cc0000\"/><text x=\"127.6201171875\" y=\"282.58740234375\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\">MAU</text><text x=\"127.6201171875\" y=\"330.7705078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau\">482M</text><text x=\"127.6201171875\" y=\"369.837890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">+8% Y/Y</text><rect x=\"58.60107421875\" y=\"459.69287109375\" width=\"134.13134765625\" height=\"711.0263671875\" rx=\"15.626953125\" fill=\"#cc0000\"/><path d=\"M 100.27294921875 459.69287109375 L 127.6201171875 414.1142578125 L 154.96728515625 459.69287109375 Z\" fill=\"#cc0000\"/><text x=\"125.015625\" y=\"589.91748046875\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau_us_canada\">96M</text><text x=\"125.015625\" y=\"630.287109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">+1% Y/Y</text><text x=\"125.015625\" y=\"899.85205078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau_europe\">128M</text><text x=\"125.015625\" y=\"940.2216796875\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">+7% Y/Y</text><text x=\"125.015625\" y=\"1074.35302734375\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau_rest_of_world\">258M</text><text x=\"125.015625\" y=\"1114.72265625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">+12% Y/Y</text><rect x=\"226.5908203125\" y=\"1170.71923828125\" width=\"208.359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#1b3077\"/><text x=\"330.7705078125\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">MAU</text><text x=\"330.7705078125\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau_summary\">482M</text><text x=\"330.7705078125\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#ffffff\">+8% Y/Y</text><rect x=\"442.763671875\" y=\"1170.71923828125\" width=\"208.359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#1b3077\"/><text x=\"546.943359375\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">ARPU</text><text x=\"546.943359375\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"arpu\">$1.61</text><text x=\"546.943359375\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#ffffff\">+3% Y/Y</text><text x=\"429.7412109375\" y=\"1354.3359375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#777777\">MAU = Monthly Active Users</text><text x=\"429.7412109375\" y=\"1393.4033203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"429.7412109375\" y=\"1438.98193359375\" text-anchor=\"middle\" font-size=\"36.462890625\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Pinterest · 2023 财年第三季度",
      "meta": {
        "title": "Pinterest 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "titleSize": 110,
        "titleTextLength": 1800
      },
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +8%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +33%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +29%"
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
            "利润率 78%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +9 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 35%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 30%",
            "同比 (4 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 14%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 918.083,
                "top": 488.342,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +11%",
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
                "x": 1382.985,
                "top": 354.211,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 78%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 1382.985,
                "top": 1100.398,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1657.759,
                "top": 1080.864,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.067,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +9 个百分点",
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
                "x": 1846.585,
                "top": 476.622,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.067,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2491.197,
                "top": 485.738,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "研发",
                    "size": 29.952,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 35%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2491.197,
                "top": 841.251,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 29.952,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 30%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 2491.197,
                "top": 1145.977,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 29.952,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 14%",
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
          "us_canada": {
            "blocks": [
              {
                "x": 447.973,
                "top": 375.047,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 367.233,
                "top": 549.548,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 35.161,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "加拿大",
                    "size": 35.161,
                    "weight": 700,
                    "color": null
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 447.973,
                "top": 789.161,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +33%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 367.233,
                "top": 888.4250000000001,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 35.161,
                    "weight": 700,
                    "color": null
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 447.973,
                "top": 1001.427,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 367.233,
                "top": 1057.6104609375,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "世界",
                    "size": 35.161,
                    "weight": 700,
                    "color": null
                  },
                  {
                    "text": "其他地区",
                    "size": 35.161,
                    "weight": 700,
                    "color": null
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"33.8583984375\" y=\"226.5908203125\" width=\"187.5234375\" height=\"169.2919921875\" rx=\"31.25390625\" fill=\"#cc0000\"/><text x=\"127.6201171875\" y=\"282.58740234375\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\">月活</text><text x=\"127.6201171875\" y=\"330.7705078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau\">482M</text><text x=\"127.6201171875\" y=\"369.837890625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">同比 +8%</text><rect x=\"58.60107421875\" y=\"459.69287109375\" width=\"134.13134765625\" height=\"711.0263671875\" rx=\"15.626953125\" fill=\"#cc0000\"/><path d=\"M 100.27294921875 459.69287109375 L 127.6201171875 414.1142578125 L 154.96728515625 459.69287109375 Z\" fill=\"#cc0000\"/><text x=\"125.015625\" y=\"589.91748046875\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau_us_canada\">96M</text><text x=\"125.015625\" y=\"630.287109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">同比 +1%</text><text x=\"125.015625\" y=\"899.85205078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau_europe\">128M</text><text x=\"125.015625\" y=\"940.2216796875\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">同比 +7%</text><text x=\"125.015625\" y=\"1074.35302734375\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"mau_rest_of_world\">258M</text><text x=\"125.015625\" y=\"1114.72265625\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\">同比 +12%</text><rect x=\"226.5908203125\" y=\"1170.71923828125\" width=\"208.359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#1b3077\"/><text x=\"330.7705078125\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">月活</text><text x=\"330.7705078125\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau_summary\">482M</text><text x=\"330.7705078125\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#ffffff\">同比 +8%</text><rect x=\"442.763671875\" y=\"1170.71923828125\" width=\"208.359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#1b3077\"/><text x=\"546.943359375\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#ffffff\">每用户收入</text><text x=\"546.943359375\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"arpu\">$1.61</text><text x=\"546.943359375\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#ffffff\">同比 +3%</text><text x=\"429.7412109375\" y=\"1354.3359375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#777777\">MAU = 月活跃用户</text><text x=\"429.7412109375\" y=\"1393.4033203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"429.7412109375\" y=\"1438.98193359375\" text-anchor=\"middle\" font-size=\"36.462890625\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  }
});
})();
