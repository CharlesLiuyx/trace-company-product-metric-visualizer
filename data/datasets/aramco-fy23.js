(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "aramco-fy23",
  "name": "Saudi Aramco · FY23",
  "company": "Saudi Aramco",
  "meta": {
    "company": "Saudi Aramco",
    "title": "Aramco FY23 Income Statement",
    "period": "FY23",
    "periodNote": "Year ended Dec. 2023",
    "currency": "",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/aramco-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.2,
    "titleSize": 125,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#0085aa",
        "label": "#0085aa"
      },
      "hub": {
        "node": "#0085aa",
        "label": "#0085aa"
      },
      "profit": {
        "node": "#289e28",
        "label": "#009553"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51900"
      }
    },
    "linkTint": {
      "source": "#85bdd0",
      "hub": "#85bdd0",
      "profit": "#99cd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 9.1
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "crude_oil",
      "label": "Crude Oil",
      "value": 839,
      "valueText": "839B",
      "notes": [
        "(22%) Y/Y"
      ],
      "type": "source",
      "col": 0
    },
    {
      "id": "refined_chemical_products",
      "label": [
        "Refined &",
        "Chemical products"
      ],
      "value": 750,
      "valueText": "750B",
      "notes": [
        "(10%) Y/Y"
      ],
      "type": "source",
      "col": 0
    },
    {
      "id": "natural_gas_ngls",
      "label": [
        "Natural gas",
        "& NGLs"
      ],
      "value": 42,
      "valueText": "42B",
      "notes": [
        "(44%) Y/Y"
      ],
      "type": "source",
      "col": 0
    },
    {
      "id": "metal_products",
      "label": "Metal products",
      "value": 13,
      "valueText": "13B",
      "notes": [
        "(15%) Y/Y"
      ],
      "type": "source",
      "col": 0
    },
    {
      "id": "other",
      "label": "Other",
      "value": 9,
      "valueText": "9B",
      "notes": [
        "+154% Y/Y"
      ],
      "type": "source",
      "col": 0
    },
    {
      "id": "reported_revenue",
      "label": "Revenue",
      "value": 1653,
      "valueText": "1,653B",
      "notes": [
        "(18%) Y/Y"
      ],
      "type": "hub",
      "col": 1
    },
    {
      "id": "other_income_related_sales",
      "label": [
        "Other income",
        "related to sales"
      ],
      "value": 203,
      "valueText": "203B",
      "notes": [
        "(22%) Y/Y"
      ],
      "type": "source",
      "col": 1
    },
    {
      "id": "revenue",
      "label": [
        "Revenue &",
        "Other income"
      ],
      "value": 1856,
      "valueText": "1,856B",
      "notes": [
        "(18%) Y/Y"
      ],
      "type": "hub",
      "col": 2
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 868,
      "valueText": "868B",
      "notes": [
        "47% margin",
        "(4pp) Y/Y"
      ],
      "type": "profit",
      "col": 3
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 988,
      "valueText": "(988B)",
      "type": "cost",
      "col": 3
    },
    {
      "id": "finance",
      "label": "Finance",
      "value": 24,
      "valueText": "24B",
      "type": "profit",
      "col": 3
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 455,
      "valueText": "455B",
      "notes": [
        "24% margin",
        "(2pp) Y/Y"
      ],
      "type": "profit",
      "col": 4
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 433,
      "valueText": "(433B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 4,
      "valueText": "(4B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "royalties",
      "label": "Royalties",
      "value": 231,
      "valueText": "(231B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "purchases",
      "label": "Purchases",
      "value": 471,
      "valueText": "(471B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "producing_manufacturing",
      "label": [
        "Producing &",
        "Manufacturing"
      ],
      "value": 97,
      "valueText": "(97B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 77,
      "valueText": "(77B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "exploration",
      "label": "Exploration",
      "value": 9,
      "valueText": "(9B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 5,
      "valueText": "(5B)",
      "type": "cost",
      "col": 4
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 97,
      "valueText": "(97B)",
      "type": "cost",
      "col": 4
    }
  ],
  "links": [
    {
      "source": "crude_oil",
      "target": "reported_revenue",
      "value": 839,
      "sourceWidth": 128.9,
      "targetWidth": 127.6,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "refined_chemical_products",
      "target": "reported_revenue",
      "value": 750,
      "sourceWidth": 114.6,
      "targetWidth": 114.6,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "natural_gas_ngls",
      "target": "reported_revenue",
      "value": 42,
      "sourceWidth": 6.5,
      "targetWidth": 6.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "metal_products",
      "target": "reported_revenue",
      "value": 13,
      "sourceWidth": 2.6,
      "targetWidth": 2.6,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "other",
      "target": "reported_revenue",
      "value": 9,
      "sourceWidth": 2.6,
      "targetWidth": 1.3,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "reported_revenue",
      "target": "revenue",
      "value": 1653,
      "sourceWidth": 252.6,
      "targetWidth": 253.9,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_income_related_sales",
      "target": "revenue",
      "value": 203,
      "sourceWidth": 31.3,
      "targetWidth": 31.3,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 868,
      "sourceWidth": 132.8,
      "targetWidth": 132.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 988,
      "sourceWidth": 152.4,
      "targetWidth": 151.1,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 431,
      "sourceWidth": 66.4,
      "targetWidth": 66.4,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "finance",
      "target": "net_profit",
      "value": 24,
      "sourceWidth": 2.6,
      "targetWidth": 2.6,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 433,
      "sourceWidth": 65.1,
      "targetWidth": 66.4,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 4,
      "sourceWidth": 1.3,
      "targetWidth": 2.6,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "royalties",
      "value": 231,
      "sourceWidth": 35.2,
      "targetWidth": 35.2,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "purchases",
      "value": 471,
      "sourceWidth": 71.6,
      "targetWidth": 71.6,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "producing_manufacturing",
      "value": 97,
      "sourceWidth": 15.6,
      "targetWidth": 15.6,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 77,
      "sourceWidth": 11.7,
      "targetWidth": 11.7,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 9,
      "sourceWidth": 1.3,
      "targetWidth": 2.6,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 5,
      "sourceWidth": 1.3,
      "targetWidth": 2.6,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 97,
      "sourceWidth": 14.3,
      "targetWidth": 15.6,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.15366503906249998,
    "nodes": {
      "crude_oil": {
        "x": 419.3,
        "y": 398.5,
        "width": 72.9,
        "height": 128.9
      },
      "refined_chemical_products": {
        "x": 419.3,
        "y": 673.3,
        "width": 72.9,
        "height": 114.6
      },
      "natural_gas_ngls": {
        "x": 419.3,
        "y": 932.4,
        "width": 72.9,
        "height": 6.5
      },
      "metal_products": {
        "x": 419.3,
        "y": 1078.3,
        "width": 72.9,
        "height": 2.6
      },
      "other": {
        "x": 419.3,
        "y": 1218.9,
        "width": 72.9,
        "height": 2.6
      },
      "reported_revenue": {
        "x": 886.8,
        "y": 600.3,
        "width": 72.9,
        "height": 252.6
      },
      "other_income_related_sales": {
        "x": 889.4,
        "y": 1061.3,
        "width": 72.9,
        "height": 31.3
      },
      "revenue": {
        "x": 1354.3,
        "y": 701.9,
        "width": 72.9,
        "height": 285.2
      },
      "operating_profit": {
        "x": 1846.6,
        "y": 505.3,
        "width": 72.9,
        "height": 132.8
      },
      "operating_expenses": {
        "x": 1849.2,
        "y": 991,
        "width": 72.9,
        "height": 151.1
      },
      "finance": {
        "x": 2181.3,
        "y": 440.2,
        "width": 72.9,
        "height": 2.6
      },
      "net_profit": {
        "x": 2288,
        "y": 313.8,
        "width": 72.9,
        "height": 69
      },
      "tax": {
        "x": 2288,
        "y": 540.4,
        "width": 72.9,
        "height": 66.4
      },
      "other_expense": {
        "x": 2288,
        "y": 683.7,
        "width": 72.9,
        "height": 2.6
      },
      "royalties": {
        "x": 2288,
        "y": 765.7,
        "width": 72.9,
        "height": 35.2
      },
      "purchases": {
        "x": 2288,
        "y": 855.6,
        "width": 72.9,
        "height": 71.6
      },
      "producing_manufacturing": {
        "x": 2288,
        "y": 988.4,
        "width": 72.9,
        "height": 15.6
      },
      "sga": {
        "x": 2288,
        "y": 1074.4,
        "width": 72.9,
        "height": 11.7
      },
      "exploration": {
        "x": 2288,
        "y": 1168.1,
        "width": 72.9,
        "height": 2.6
      },
      "rnd": {
        "x": 2288,
        "y": 1261.9,
        "width": 72.9,
        "height": 2.6
      },
      "da": {
        "x": 2288,
        "y": 1347.8,
        "width": 72.9,
        "height": 15.6
      }
    },
    "labels": {
      "crude_oil": {
        "blocks": [
          {
            "x": 455.8,
            "top": 302.1,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(22%) Y/Y",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.2,
            "top": 439.29999999999995,
            "anchor": "end",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 39.1,
                "weight": 700
              }
            ]
          }
        ]
      },
      "refined_chemical_products": {
        "blocks": [
          {
            "x": 455.8,
            "top": 570.4,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(10%) Y/Y",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.2,
            "top": 686.9,
            "anchor": "end",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Refined &",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "Chemical products",
                "size": 39.1,
                "weight": 700
              }
            ]
          }
        ]
      },
      "natural_gas_ngls": {
        "blocks": [
          {
            "x": 455.8,
            "top": 836,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(44%) Y/Y",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 388.1,
            "top": 892,
            "anchor": "end",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Natural gas",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "& NGLs",
                "size": 39.1,
                "weight": 700
              }
            ]
          }
        ]
      },
      "metal_products": {
        "blocks": [
          {
            "x": 455.8,
            "top": 974.1,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(15%) Y/Y",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.2,
            "top": 1060,
            "anchor": "end",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Metal products",
                "size": 39.1,
                "weight": 700
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 455.8,
            "top": 1116,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "+154% Y/Y",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.2,
            "top": 1196.6000000000001,
            "anchor": "end",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Other",
                "size": 39.1,
                "weight": 700
              }
            ]
          }
        ]
      },
      "reported_revenue": {
        "blocks": [
          {
            "x": 923.3,
            "top": 446.7,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(18%) Y/Y",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income_related_sales": {
        "blocks": [
          {
            "x": 923.3,
            "top": 1105.6,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Other income",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "related to sales",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(22%) Y/Y",
                "size": 27.3,
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
            "x": 1390.8,
            "top": 496.2,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Revenue &",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "Other income",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "(18%) Y/Y",
                "size": 27.3,
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
            "x": 1881.7,
            "top": 311.2,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "47% margin",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.3,
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
            "x": 1884.4,
            "top": 1155.1,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Operating",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              }
            ]
          }
        ]
      },
      "finance": {
        "blocks": [
          {
            "x": 2217.7,
            "top": 455.8,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Finance",
                "size": 31.3,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.3,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2476.9,
            "top": 293,
            "anchor": "middle",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.1,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.1,
                "weight": 400
              },
              {
                "text": "24% margin",
                "size": 27.3,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.3,
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
            "x": 2381.8,
            "top": 552.2,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Tax (433B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 665.4,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Other (4B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "royalties": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 760.5,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Royalties (231B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "purchases": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 863.4,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Purchases (471B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 1058.7,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "SG&A (77B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 1144.7,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "Exploration (9B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 1238.4,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "R&D (5B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2381.8,
            "top": 1327,
            "anchor": "start",
            "lineGap": 9.1,
            "lines": [
              {
                "text": "D&A (97B)",
                "size": 31.3,
                "weight": 700
              }
            ]
          }
        ]
      },
      "producing_manufacturing": {
        "blocks": [
          {
            "x": 2509.4,
            "top": 927.2,
            "anchor": "middle",
            "lineGap": 7.8,
            "lines": [
              {
                "text": "Producing &",
                "size": 31.3,
                "weight": 700
              },
              {
                "text": "Manufacturing",
                "size": 31.3,
                "weight": 700
              },
              {
                "text": "(97B)",
                "size": 31.3,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "aramco-company-lockup-fy23",
      "href": "data/assets/raster-annotations/aramco/company-lockup-fy23.png",
      "x": 755.3,
      "y": 216.2,
      "width": 725.4,
      "height": 201.8
    }
  ],
  "annotationsSvg": "<text x=\"233\" y=\"281\" font-size=\"39\" font-weight=\"700\" fill=\"#005e94\">In SAR billion</text><text x=\"171\" y=\"1438\" font-size=\"39\" font-weight=\"700\" fill=\"#000\">Source: Quarterly results</text>",
  "i18n": {
    "zh": {
      "name": "沙特阿美 · 2023 财年",
      "meta": {
        "title": "沙特阿美 2023 财年利润表",
        "periodNote": "截至 2023 年 12 月",
        "titleSize": 108.1
      },
      "nodes": {
        "crude_oil": {
          "label": "原油",
          "notes": [
            "同比 -22%"
          ]
        },
        "refined_chemical_products": {
          "label": [
            "炼油及",
            "化工产品"
          ],
          "notes": [
            "同比 -10%"
          ]
        },
        "natural_gas_ngls": {
          "label": [
            "天然气及",
            "天然气液"
          ],
          "notes": [
            "同比 -44%"
          ]
        },
        "metal_products": {
          "label": "金属产品",
          "notes": [
            "同比 -15%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +154%"
          ]
        },
        "reported_revenue": {
          "label": "收入",
          "notes": [
            "同比 -18%"
          ]
        },
        "other_income_related_sales": {
          "label": [
            "销售相关",
            "其他收入"
          ],
          "notes": [
            "同比 -22%"
          ]
        },
        "revenue": {
          "label": [
            "收入及",
            "其他收入"
          ],
          "notes": [
            "同比 -18%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 47%",
            "同比 -4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "finance": {
          "label": "财务收益"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 24%",
            "同比 -2 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "royalties": {
          "label": "特许权使用费"
        },
        "purchases": {
          "label": "采购"
        },
        "producing_manufacturing": {
          "label": [
            "生产及",
            "制造"
          ]
        },
        "sga": {
          "label": "销售、一般及行政费用"
        },
        "exploration": {
          "label": "勘探"
        },
        "rnd": {
          "label": "研发"
        },
        "da": {
          "label": "折旧及摊销"
        }
      },
      "layout": {
        "labels": {
          "crude_oil": {
            "blocks": [
              {
                "x": 455.8,
                "top": 302.1,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -22%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.2,
                "top": 439.29999999999995,
                "anchor": "end",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "原油",
                    "size": 39.1,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "refined_chemical_products": {
            "blocks": [
              {
                "x": 455.8,
                "top": 570.4,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -10%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.2,
                "top": 682.8,
                "anchor": "end",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "炼油及",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "化工产品",
                    "size": 39.1,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "natural_gas_ngls": {
            "blocks": [
              {
                "x": 455.8,
                "top": 836,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -44%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 388.1,
                "top": 887.9,
                "anchor": "end",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "天然气及",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "天然气液",
                    "size": 39.1,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "metal_products": {
            "blocks": [
              {
                "x": 455.8,
                "top": 974.1,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -15%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.2,
                "top": 1055.9,
                "anchor": "end",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "金属产品",
                    "size": 39.1,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 455.8,
                "top": 1116,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 +154%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.2,
                "top": 1196.6000000000001,
                "anchor": "end",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.1,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "reported_revenue": {
            "blocks": [
              {
                "x": 923.3,
                "top": 446.7,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -18%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income_related_sales": {
            "blocks": [
              {
                "x": 923.3,
                "top": 1105.6,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "销售相关",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "其他收入",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -22%",
                    "size": 27.3,
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
                "x": 1390.8,
                "top": 496.2,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "收入及",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "其他收入",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "同比 -18%",
                    "size": 27.3,
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
                "x": 1881.7,
                "top": 311.2,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "利润率 47%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -4 个百分点",
                    "size": 27.3,
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
                "x": 1884.4,
                "top": 1155.1,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "finance": {
            "blocks": [
              {
                "x": 2217.7,
                "top": 455.8,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "财务收益",
                    "size": 31.3,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.3,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2476.9,
                "top": 293,
                "anchor": "middle",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.1,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.1,
                    "weight": 400
                  },
                  {
                    "text": "利润率 24%",
                    "size": 27.3,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -2 个百分点",
                    "size": 27.3,
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
                "x": 2381.8,
                "top": 552.2,
                "anchor": "start",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "税费 (433B)",
                    "size": 31.3,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 665.4,
                "anchor": "start",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "其他 (4B)",
                    "size": 31.3,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "royalties": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 760.5,
                "anchor": "start",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "特许权使用费",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "(231B)",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "purchases": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 863.4,
                "anchor": "start",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "采购 (471B)",
                    "size": 31.3,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 1058.7,
                "anchor": "start",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 28.6494140625,
                    "weight": 700
                  },
                  {
                    "text": "行政费用 (77B)",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 1144.7,
                "anchor": "start",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "勘探 (9B)",
                    "size": 31.3,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 1238.4,
                "anchor": "start",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "研发 (5B)",
                    "size": 31.3,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2381.8,
                "top": 1327,
                "anchor": "start",
                "lineGap": 9.1,
                "lines": [
                  {
                    "text": "折旧及摊销 (97B)",
                    "size": 31.3,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "producing_manufacturing": {
            "blocks": [
              {
                "x": 2509.4,
                "top": 927.2,
                "anchor": "middle",
                "lineGap": 7.8,
                "lines": [
                  {
                    "text": "生产及",
                    "size": 31.3,
                    "weight": 700
                  },
                  {
                    "text": "制造",
                    "size": 31.3,
                    "weight": 700
                  },
                  {
                    "text": "(97B)",
                    "size": 31.3,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"233\" y=\"281\" font-size=\"39\" font-weight=\"700\" fill=\"#005e94\">单位：十亿沙特里亚尔</text><text x=\"171\" y=\"1438\" font-size=\"39\" font-weight=\"700\" fill=\"#000\">来源：季度业绩</text>"
    }
  }
});})();
