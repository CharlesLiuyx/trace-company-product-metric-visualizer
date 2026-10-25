(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sap-q1-fy23",
  "name": "SAP · Q1 FY23",
  "company": "SAP",
  "meta": {
    "company": "SAP",
    "title": "SAP Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sap-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333,
    "titleY": 197.9167,
    "titleSize": 122.3958,
    "titleWeight": 800,
    "titleTextLength": 1959.6354,
    "periodX": -1302.0833,
    "periodY": -1302.0833,
    "periodNoteY": -1236.9792,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "linkTint": {
      "source": "#9ca6af",
      "hub": "#9ca6af",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "saas",
      "label": "Saas",
      "value": 2.5,
      "valueText": "€2.5B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#34495e",
      "labelColor": "#34495e"
    },
    {
      "id": "paas",
      "label": "Paas",
      "value": 0.5,
      "valueText": "€0.5B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+47% Y/Y"
      ],
      "color": "#34495e",
      "labelColor": "#34495e"
    },
    {
      "id": "iaas",
      "label": "Iaas",
      "value": 0.2,
      "valueText": "€0.2B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(12%) Y/Y"
      ],
      "color": "#34495e",
      "labelColor": "#34495e"
    },
    {
      "id": "software_licenses",
      "label": "Software Licenses",
      "value": 0.3,
      "valueText": "€0.3B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(13%) Y/Y"
      ],
      "color": "#1d68ba",
      "labelColor": "#1d68ba"
    },
    {
      "id": "software_support",
      "label": "Software Support",
      "value": 2.9,
      "valueText": "€2.9B",
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "(1%) Y/Y"
      ],
      "color": "#1d68ba",
      "labelColor": "#1d68ba"
    },
    {
      "id": "cloud",
      "label": "Cloud",
      "value": 3.2,
      "valueText": "€3.2B",
      "type": "source",
      "col": 1,
      "order": 5,
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#34495e",
      "labelColor": "#34495e"
    },
    {
      "id": "licenses_support",
      "label": "Licenses & Support",
      "value": 3.2,
      "valueText": "€3.2B",
      "type": "source",
      "col": 1,
      "order": 6,
      "notes": [
        "(2%) Y/Y"
      ],
      "color": "#1d68ba",
      "labelColor": "#1d68ba"
    },
    {
      "id": "services",
      "label": "Services",
      "value": 1.1,
      "valueText": "€1.1B",
      "type": "source",
      "col": 1,
      "order": 7,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#00b3df",
      "labelColor": "#00b3df"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 7.4,
      "valueText": "€7.4B",
      "type": "hub",
      "col": 2,
      "order": 8,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#34495e",
      "labelColor": "#34495e"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 5.3,
      "valueText": "€5.3B",
      "type": "profit",
      "col": 3,
      "order": 9,
      "notes": [
        "72% margin",
        "(1pp) Y/Y"
      ],
      "color": "#269e27",
      "labelColor": "#008e4a"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.2,
      "valueText": "(€2.2B)",
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.8,
      "valueText": "€0.8B",
      "type": "profit",
      "col": 4,
      "order": 11,
      "notes": [
        "11% margin",
        "(11pp) Y/Y"
      ],
      "color": "#269e27",
      "labelColor": "#008e4a"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.5,
      "valueText": "(€4.5B)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.4,
      "valueText": "€0.4B",
      "type": "profit",
      "col": 5,
      "order": 13,
      "notes": [
        "5% margin",
        "(10pp) Y/Y"
      ],
      "color": "#269e27",
      "labelColor": "#008e4a"
    },
    {
      "id": "financial",
      "label": "Financial",
      "value": 0.1,
      "valueText": "(€0.1B)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "type": "cost",
      "col": 5,
      "order": 15,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.014,
      "valueText": "(€14M)",
      "type": "cost",
      "col": 5,
      "order": 16,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 2.3,
      "valueText": "(€2.3B)",
      "type": "cost",
      "col": 5,
      "order": 17,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1.6,
      "valueText": "(€1.6B)",
      "type": "cost",
      "col": 5,
      "order": 18,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "type": "cost",
      "col": 5,
      "order": 19,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "type": "cost",
      "col": 5,
      "order": 20,
      "notes": [],
      "color": "#d40000",
      "labelColor": "#971700"
    }
  ],
  "links": [
    {
      "source": "saas",
      "target": "cloud",
      "value": 2.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 109.375,
      "targetWidth": 109.375,
      "y0": 388.0208,
      "y1": 583.3333,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      }
    },
    {
      "source": "paas",
      "target": "cloud",
      "value": 0.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 20.8333,
      "targetWidth": 20.8333,
      "y0": 600.2604,
      "y1": 648.4375,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      }
    },
    {
      "source": "iaas",
      "target": "cloud",
      "value": 0.2,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 9.1146,
      "targetWidth": 6.510416666666666,
      "y0": 763.6719,
      "y1": 662.109375,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      }
    },
    {
      "source": "software_licenses",
      "target": "licenses_support",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 13.0208,
      "targetWidth": 13.0208,
      "y0": 920.5729,
      "y1": 903.6458,
      "linkTint": {
        "left": "#92b4d7",
        "right": "#92b4d7"
      }
    },
    {
      "source": "software_support",
      "target": "licenses_support",
      "value": 2.9,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 125.0,
      "targetWidth": 125.0,
      "y0": 1138.0208,
      "y1": 972.6562,
      "linkTint": {
        "left": "#92b4d7",
        "right": "#92b4d7"
      }
    },
    {
      "source": "cloud",
      "target": "revenue",
      "value": 3.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 136.7188,
      "targetWidth": 136.7188,
      "y0": 597.0052,
      "y1": 750.651,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      }
    },
    {
      "source": "licenses_support",
      "target": "revenue",
      "value": 3.2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 138.0208,
      "targetWidth": 138.0208,
      "y0": 966.1458,
      "y1": 888.0208,
      "linkTint": {
        "left": "#92b4d7",
        "right": "#92b4d7"
      }
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 1.1,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 46.875,
      "targetWidth": 46.875,
      "y0": 1308.5938,
      "y1": 980.4688,
      "linkTint": {
        "left": "#85d2e8",
        "right": "#85d2e8"
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 5.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 229.1667,
      "targetWidth": 229.1667,
      "y0": 796.875,
      "y1": 710.9375
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 92.4479,
      "targetWidth": 92.4479,
      "y0": 957.6823,
      "y1": 1048.8281
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 35.15625,
      "targetWidth": 36.4583,
      "y0": 613.9322916666666,
      "y1": 511.7187
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 194.0104,
      "targetWidth": 194.0104,
      "y0": 728.515625,
      "y1": 813.151
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 18.2292,
      "targetWidth": 18.2292,
      "y0": 502.6042,
      "y1": 313.8021
    },
    {
      "source": "operating_profit",
      "target": "financial",
      "value": 0.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 11.7188,
      "targetWidth": 11.7188,
      "y0": 517.5781,
      "y1": 449.8698
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 3.9062,
      "targetWidth": 3.9062,
      "y0": 525.3906,
      "y1": 557.9427
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.014,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 2.6042,
      "targetWidth": 2.6042,
      "y0": 528.6458,
      "y1": 654.9479
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 98.9583,
      "targetWidth": 98.9583,
      "y0": 765.625,
      "y1": 826.8229
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 67.7083,
      "targetWidth": 67.7083,
      "y0": 848.9583,
      "y1": 1007.8125
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "y0": 890.625,
      "y1": 1158.8542
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.3,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 11.7188,
      "targetWidth": 11.7188,
      "y0": 904.2969,
      "y1": 1324.8698
    }
  ],
  "layout": {
    "scale": 43.4896,
    "nodes": {
      "saas": {
        "x": 381.5104,
        "y": 333.3333,
        "width": 72.9167,
        "height": 109.375
      },
      "paas": {
        "x": 381.5104,
        "y": 589.8438,
        "width": 72.9167,
        "height": 20.8333
      },
      "iaas": {
        "x": 381.5104,
        "y": 759.1146,
        "width": 72.9167,
        "height": 9.1146
      },
      "software_licenses": {
        "x": 381.5104,
        "y": 914.0625,
        "width": 72.9167,
        "height": 13.0208
      },
      "software_support": {
        "x": 381.5104,
        "y": 1075.5208,
        "width": 72.9167,
        "height": 125.0
      },
      "cloud": {
        "x": 755.2083,
        "y": 528.6458,
        "width": 72.9167,
        "height": 136.7188
      },
      "licenses_support": {
        "x": 755.2083,
        "y": 897.1354,
        "width": 72.9167,
        "height": 138.0208
      },
      "services": {
        "x": 750.0,
        "y": 1285.1562,
        "width": 72.9167,
        "height": 46.875
      },
      "revenue": {
        "x": 1128.9062,
        "y": 682.2917,
        "width": 72.9167,
        "height": 321.6146
      },
      "gross_profit": {
        "x": 1502.6042,
        "y": 596.3542,
        "width": 72.9167,
        "height": 229.1667
      },
      "cost_of_revenue": {
        "x": 1502.6042,
        "y": 1002.6042,
        "width": 72.9167,
        "height": 92.4479
      },
      "operating_profit": {
        "x": 1873.6979,
        "y": 493.4896,
        "width": 72.9167,
        "height": 36.4583
      },
      "operating_expenses": {
        "x": 1871.0938,
        "y": 716.1458,
        "width": 72.9167,
        "height": 194.0104
      },
      "net_profit": {
        "x": 2250.0,
        "y": 304.6875,
        "width": 72.9167,
        "height": 18.2292
      },
      "financial": {
        "x": 2250.0,
        "y": 444.0104,
        "width": 72.9167,
        "height": 11.7188
      },
      "tax": {
        "x": 2250.0,
        "y": 555.9896,
        "width": 72.9167,
        "height": 3.9062
      },
      "other": {
        "x": 2250.0,
        "y": 653.6458,
        "width": 72.9167,
        "height": 2.6042
      },
      "sm": {
        "x": 2250.0,
        "y": 777.3438,
        "width": 72.9167,
        "height": 98.9583
      },
      "rnd": {
        "x": 2250.0,
        "y": 973.9583,
        "width": 72.9167,
        "height": 67.7083
      },
      "ga": {
        "x": 2250.0,
        "y": 1151.0417,
        "width": 72.9167,
        "height": 15.625
      },
      "restructuring": {
        "x": 2250.0,
        "y": 1319.0104,
        "width": 72.9167,
        "height": 11.7188
      }
    },
    "labels": {
      "saas": {
        "blocks": [
          {
            "x": 417.9688,
            "top": 243.4896,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#34495e"
              },
              {
                "text": "+24% Y/Y",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 346.3542,
            "top": 355.4688,
            "anchor": "end",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Saas",
                "size": 35.1562,
                "weight": 700,
                "color": "#34495e"
              },
              {
                "text": "72% gross margin",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "paas": {
        "blocks": [
          {
            "x": 417.9688,
            "top": 496.0938,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#34495e"
              },
              {
                "text": "+47% Y/Y",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 346.3542,
            "top": 548.1771,
            "anchor": "end",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Paas",
                "size": 35.1562,
                "weight": 700,
                "color": "#34495e"
              },
              {
                "text": "84% gross margin",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "iaas": {
        "blocks": [
          {
            "x": 417.9688,
            "top": 665.3646,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#34495e"
              },
              {
                "text": "(12%) Y/Y",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 346.3542,
            "top": 704.4271,
            "anchor": "end",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Iaas",
                "size": 35.1562,
                "weight": 700,
                "color": "#34495e"
              },
              {
                "text": "34% gross margin",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "software_licenses": {
        "blocks": [
          {
            "x": 417.9688,
            "top": 819.0104,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#1d68ba"
              },
              {
                "text": "(13%) Y/Y",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 346.3542,
            "top": 901.0417,
            "anchor": "end",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Software Licenses",
                "size": 35.1562,
                "weight": 700,
                "color": "#1d68ba"
              }
            ]
          }
        ]
      },
      "software_support": {
        "blocks": [
          {
            "x": 417.9688,
            "top": 977.8646,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#1d68ba"
              },
              {
                "text": "(1%) Y/Y",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 346.3542,
            "top": 1096.3542,
            "anchor": "end",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Software Support",
                "size": 35.1562,
                "weight": 700,
                "color": "#1d68ba"
              },
              {
                "text": "87% gross margin",
                "size": 26.0417,
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
            "x": 786.4583,
            "top": 1184.8958,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#00b3df"
              },
              {
                "text": "+12% Y/Y",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 742.1875,
            "top": 1266.9271,
            "anchor": "end",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Services",
                "size": 35.1562,
                "weight": 700,
                "color": "#00b3df"
              },
              {
                "text": "30% gross margin",
                "size": 26.0417,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 791.6667,
            "top": 378.9062,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Cloud",
                "size": 37.7604,
                "weight": 700,
                "color": "#34495e"
              },
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#34495e"
              },
              {
                "text": "+24% Y/Y",
                "size": 27.3438,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "licenses_support": {
        "blocks": [
          {
            "x": 791.6667,
            "top": 696.6146,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Licenses",
                "size": 37.7604,
                "weight": 700,
                "color": "#1d68ba"
              },
              {
                "text": "& Support",
                "size": 37.7604,
                "weight": 700,
                "color": "#1d68ba"
              },
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#1d68ba"
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.3438,
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
            "x": 1165.3646,
            "top": 536.4583,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.7604,
                "weight": 700,
                "color": "#34495e"
              },
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#34495e"
              },
              {
                "text": "+10% Y/Y",
                "size": 27.3438,
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
            "x": 1539.0625,
            "top": 406.25,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.7604,
                "weight": 700,
                "color": "#008e4a"
              },
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#008e4a"
              },
              {
                "text": "72% margin",
                "size": 27.3438,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.3438,
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
            "x": 1910.1562,
            "top": 304.6875,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.7604,
                "weight": 700,
                "color": "#008e4a"
              },
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#008e4a"
              },
              {
                "text": "11% margin",
                "size": 27.3438,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(11pp) Y/Y",
                "size": 27.3438,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2442.9896,
            "top": 243.4896,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.7604,
                "weight": 700,
                "color": "#008e4a"
              },
              {
                "text": "$value",
                "size": 37.7604,
                "weight": 400,
                "color": "#008e4a"
              },
              {
                "text": "5% margin",
                "size": 27.3438,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 27.3438,
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
            "x": 1539.0625,
            "top": 1109.375,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Cost of",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "revenue",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1910.1562,
            "top": 927.0833,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Operating",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "expenses",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "financial": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 429.6875,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Financial",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 522.1354,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Tax",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 623.6979,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Other",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 787.7604,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "S&M",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 968.75,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "R&D",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 1121.0938,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "G&A",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2436.1979,
            "top": 1277.3438,
            "anchor": "middle",
            "lineGap": 9.1146,
            "lines": [
              {
                "text": "Restructuring",
                "size": 32.5521,
                "weight": 700,
                "color": "#971700"
              },
              {
                "text": "$value",
                "size": 32.5521,
                "weight": 400,
                "color": "#971700"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g data-typography-role=\"brand\" transform=\"translate(783 237)\"><path fill=\"#00aee0\" d=\"M0 0H260L130 130H0Z\"/><path fill=\"#1c65b4\" d=\"M0 100H160L130 130H0Z\"/><text x=\"3\" y=\"104\" fill=\"white\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"112\" font-weight=\"900\" textLength=\"195\" lengthAdjust=\"spacingAndGlyphs\">SAP</text><text x=\"160\" y=\"130\" fill=\"#1c65b4\" font-size=\"20\">®</text></g><g fill=\"#777777\" font-size=\"18\"><text x=\"55\" y=\"1006\">SaaS = Software as a Service</text><text x=\"55\" y=\"1030\">PaaS = Platform as a Service</text><text x=\"39\" y=\"1054\">IaaS = Infrastructure as a Service</text></g><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "SAP · 2023 财年第一季度",
      "meta": {
        "title": "SAP 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月"
      },
      "nodes": {
        "saas": {
          "label": "SaaS",
          "notes": [
            "同比 +24%"
          ]
        },
        "paas": {
          "label": "PaaS",
          "notes": [
            "同比 +47%"
          ]
        },
        "iaas": {
          "label": "IaaS",
          "notes": [
            "同比 (12%)"
          ]
        },
        "software_licenses": {
          "label": "软件许可证",
          "notes": [
            "同比 (13%)"
          ]
        },
        "software_support": {
          "label": "软件支持",
          "notes": [
            "同比 (1%)"
          ]
        },
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +24%"
          ]
        },
        "licenses_support": {
          "label": "许可证与支持",
          "notes": [
            "同比 (2%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +12%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 72%",
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
            "利润率 11%",
            "同比 (11 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 5%",
            "同比 (10 个百分点)"
          ]
        },
        "financial": {
          "label": "财务净费用",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "saas": {
            "blocks": [
              {
                "x": 417.9688,
                "top": 243.4896,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#34495e"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 346.3542,
                "top": 355.4688,
                "anchor": "end",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "SaaS",
                    "size": 35.1562,
                    "weight": 700,
                    "color": "#34495e"
                  },
                  {
                    "text": "毛利率 72%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "paas": {
            "blocks": [
              {
                "x": 417.9688,
                "top": 496.0938,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#34495e"
                  },
                  {
                    "text": "同比 +47%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 346.3542,
                "top": 548.1771,
                "anchor": "end",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "PaaS",
                    "size": 35.1562,
                    "weight": 700,
                    "color": "#34495e"
                  },
                  {
                    "text": "毛利率 84%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "iaas": {
            "blocks": [
              {
                "x": 417.9688,
                "top": 665.3646,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#34495e"
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 346.3542,
                "top": 704.4271,
                "anchor": "end",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "IaaS",
                    "size": 35.1562,
                    "weight": 700,
                    "color": "#34495e"
                  },
                  {
                    "text": "毛利率 34%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "software_licenses": {
            "blocks": [
              {
                "x": 417.9688,
                "top": 819.0104,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#1d68ba"
                  },
                  {
                    "text": "同比 (13%)",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 346.3542,
                "top": 901.0417,
                "anchor": "end",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "软件许可证",
                    "size": 35.1562,
                    "weight": 700,
                    "color": "#1d68ba"
                  }
                ]
              }
            ]
          },
          "software_support": {
            "blocks": [
              {
                "x": 417.9688,
                "top": 977.8646,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#1d68ba"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 346.3542,
                "top": 1096.3542,
                "anchor": "end",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "软件支持",
                    "size": 35.1562,
                    "weight": 700,
                    "color": "#1d68ba"
                  },
                  {
                    "text": "毛利率 87%",
                    "size": 26.0417,
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
                "x": 786.4583,
                "top": 1184.8958,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#00b3df"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 742.1875,
                "top": 1266.9271,
                "anchor": "end",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "服务",
                    "size": 35.1562,
                    "weight": 700,
                    "color": "#00b3df"
                  },
                  {
                    "text": "毛利率 30%",
                    "size": 26.0417,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cloud": {
            "blocks": [
              {
                "x": 791.6667,
                "top": 378.9062,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "云",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#34495e"
                  },
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#34495e"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.3438,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "licenses_support": {
            "blocks": [
              {
                "x": 791.6667,
                "top": 696.6146,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "许可证",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#1d68ba"
                  },
                  {
                    "text": "与支持",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#1d68ba"
                  },
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#1d68ba"
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.3438,
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
                "x": 1165.3646,
                "top": 536.4583,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#34495e"
                  },
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#34495e"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.3438,
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
                "x": 1539.0625,
                "top": 406.25,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#008e4a"
                  },
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#008e4a"
                  },
                  {
                    "text": "利润率 72%",
                    "size": 27.3438,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.3438,
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
                "x": 1910.1562,
                "top": 304.6875,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#008e4a"
                  },
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#008e4a"
                  },
                  {
                    "text": "利润率 11%",
                    "size": 27.3438,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (11 个百分点)",
                    "size": 27.3438,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2442.9896,
                "top": 243.4896,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.7604,
                    "weight": 700,
                    "color": "#008e4a"
                  },
                  {
                    "text": "$value",
                    "size": 37.7604,
                    "weight": 400,
                    "color": "#008e4a"
                  },
                  {
                    "text": "利润率 5%",
                    "size": 27.3438,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (10 个百分点)",
                    "size": 27.3438,
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
                "x": 1539.0625,
                "top": 1109.375,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "收入",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "成本",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1910.1562,
                "top": 927.0833,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "费用",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "financial": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 429.6875,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "财务净费用",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 522.1354,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 623.6979,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 787.7604,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 968.75,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 1121.0938,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2436.1979,
                "top": 1277.3438,
                "anchor": "middle",
                "lineGap": 9.1146,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 32.5521,
                    "weight": 700,
                    "color": "#971700"
                  },
                  {
                    "text": "$value",
                    "size": 32.5521,
                    "weight": 400,
                    "color": "#971700"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g data-typography-role=\"brand\" transform=\"translate(783 237)\"><path fill=\"#00aee0\" d=\"M0 0H260L130 130H0Z\"/><path fill=\"#1c65b4\" d=\"M0 100H160L130 130H0Z\"/><text x=\"3\" y=\"104\" fill=\"white\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"112\" font-weight=\"900\" textLength=\"195\" lengthAdjust=\"spacingAndGlyphs\">SAP</text><text x=\"160\" y=\"130\" fill=\"#1c65b4\" font-size=\"20\">®</text></g><g fill=\"#777777\" font-size=\"18\"><text x=\"55\" y=\"1006\">SaaS = 软件即服务</text><text x=\"55\" y=\"1030\">PaaS = 平台即服务</text><text x=\"39\" y=\"1054\">IaaS = 基础设施即服务</text></g><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});})();
