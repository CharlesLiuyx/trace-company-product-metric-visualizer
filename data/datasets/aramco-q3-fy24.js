window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "aramco-q3-fy24",
  "name": "Saudi Aramco · Q3 FY24",
  "company": "Saudi Aramco",
  "meta": {
    "company": "Saudi Aramco",
    "title": "Aramco Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/aramco-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2213.818,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#007eac",
        "label": "#007eac"
      },
      "hub": {
        "node": "#007eac",
        "label": "#007eac"
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
      "source": "#85bdd2",
      "hub": "#85bdd2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g><text x=\"233.102\" y=\"281.285\" font-size=\"37.765\" font-weight=\"800\" fill=\"#155077\">In SAR billion</text><path d=\"M 2148.706 377.651 H 2220.33\" stroke=\"#99cd99\" stroke-width=\"1.302\" fill=\"none\"/><g class=\"sankey-interactive-annotation\" data-node=\"finance\" data-link-numerator=\"finance\" data-link-denominator=\"net_profit\"><text x=\"2181.262\" y=\"317.748\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"800\" fill=\"#008f51\">Finance</text><text x=\"2181.262\" y=\"360.722\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"#008f51\">3B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_expense\"><text x=\"2483.383\" y=\"699.306\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"#941100\">Other (1B)</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "aramco-company-lockup-q3-fy24",
      "href": "data/assets/raster-annotations/aramco/company-lockup-q3-fy24.png",
      "x": 759.209,
      "y": 217.475,
      "width": 720.142,
      "height": 196.639
    }
  ],
  "nodes": [
    {
      "id": "crude_oil",
      "label": "Crude Oil",
      "value": 205,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+0% Y/Y"
      ]
    },
    {
      "id": "refined_chemical_products",
      "label": [
        "Refined &",
        "Chemical products"
      ],
      "value": 198,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "natural_gas_ngls",
      "label": [
        "Natural gas",
        "& NGLs"
      ],
      "value": 14,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 1,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(85%) Y/Y"
      ]
    },
    {
      "id": "reported_revenue",
      "label": "Revenue",
      "value": 417,
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "other_income_related_sales",
      "label": [
        "Other income",
        "related to sales"
      ],
      "value": 48,
      "type": "source",
      "col": 1,
      "order": 5,
      "notes": [
        "(26%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": [
        "Revenue &",
        "Other income"
      ],
      "value": 465,
      "type": "hub",
      "col": 2,
      "order": 6,
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 193,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "41% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 272,
      "type": "cost",
      "col": 3,
      "order": 8,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 103,
      "type": "profit",
      "col": 4,
      "order": 9,
      "notes": [
        "22% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 92,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": []
    },
    {
      "id": "purchases",
      "label": "Purchases",
      "value": 144,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "royalties",
      "label": "Royalties",
      "value": 51,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 28,
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": []
    },
    {
      "id": "producing_manufacturing",
      "label": [
        "Producing &",
        "Manufacturing"
      ],
      "value": 27,
      "type": "cost",
      "col": 4,
      "order": 14,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 17,
      "type": "cost",
      "col": 4,
      "order": 15,
      "notes": []
    },
    {
      "id": "exploration",
      "label": "Exploration",
      "value": 3,
      "type": "cost",
      "col": 4,
      "order": 16,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 17,
      "notes": []
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "finance",
      "label": "Finance",
      "value": 3,
      "type": "profit",
      "notes": [],
      "representation": "flow"
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 1,
      "type": "cost",
      "notes": [],
      "representation": "flow"
    }
  ],
  "links": [
    {
      "source": "crude_oil",
      "target": "reported_revenue",
      "value": 205,
      "sourceWidth": 122.411,
      "targetWidth": 122.411,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "refined_chemical_products",
      "target": "reported_revenue",
      "value": 198,
      "sourceWidth": 118.504,
      "targetWidth": 118.504,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "natural_gas_ngls",
      "target": "reported_revenue",
      "value": 14,
      "sourceWidth": 9.116,
      "targetWidth": 7.813,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other",
      "target": "reported_revenue",
      "value": 1,
      "sourceWidth": 1.302,
      "targetWidth": 1.302,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "reported_revenue",
      "target": "revenue",
      "value": 417,
      "sourceWidth": 250.031,
      "targetWidth": 250.031,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_income_related_sales",
      "target": "revenue",
      "value": 48,
      "sourceWidth": 28.649,
      "targetWidth": 28.649,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 193,
      "sourceWidth": 115.9,
      "targetWidth": 114.598,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 272,
      "sourceWidth": 162.781,
      "targetWidth": 161.479,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 100,
      "sourceWidth": 58.601,
      "targetWidth": 61.206,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 92,
      "sourceWidth": 55.215,
      "targetWidth": 54.694,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "targetRoute": "other_expense",
      "value": 1,
      "sourceWidth": 0.781,
      "targetWidth": 0.781,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "sourceRoute": "finance",
      "target": "net_profit",
      "value": 3,
      "sourceWidth": 1.302,
      "targetWidth": 1.302,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 377.651,
      "y1": 413.463
    },
    {
      "source": "operating_expenses",
      "target": "purchases",
      "value": 144,
      "sourceWidth": 85.948,
      "targetWidth": 84.646,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "royalties",
      "value": 51,
      "sourceWidth": 30.473,
      "targetWidth": 29.952,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 28,
      "sourceWidth": 16.669,
      "targetWidth": 16.929,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "producing_manufacturing",
      "value": 27,
      "sourceWidth": 16.148,
      "targetWidth": 15.627,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 17,
      "sourceWidth": 10.158,
      "targetWidth": 10.418,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 3,
      "sourceWidth": 1.563,
      "targetWidth": 1.823,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1,
      "sourceWidth": 0.521,
      "targetWidth": 0.912,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.599,
    "nodes": {
      "crude_oil": {
        "x": 419.323,
        "y": 445.368,
        "width": 72.926,
        "height": 122.411
      },
      "refined_chemical_products": {
        "x": 419.323,
        "y": 688.888,
        "width": 72.926,
        "height": 118.504
      },
      "natural_gas_ngls": {
        "x": 419.323,
        "y": 935.013,
        "width": 72.926,
        "height": 9.116
      },
      "other": {
        "x": 419.323,
        "y": 1069.144,
        "width": 72.926,
        "height": 1.302
      },
      "reported_revenue": {
        "x": 886.83,
        "y": 628.985,
        "width": 72.926,
        "height": 250.031
      },
      "other_income_related_sales": {
        "x": 889.434,
        "y": 1095.189,
        "width": 72.926,
        "height": 28.649
      },
      "revenue": {
        "x": 1354.336,
        "y": 727.956,
        "width": 72.926,
        "height": 278.681
      },
      "operating_profit": {
        "x": 1816.633,
        "y": 566.477,
        "width": 72.926,
        "height": 114.598
      },
      "operating_expenses": {
        "x": 1821.842,
        "y": 961.058,
        "width": 72.926,
        "height": 161.479
      },
      "net_profit": {
        "x": 2288.046,
        "y": 412.812,
        "width": 72.926,
        "height": 62.508
      },
      "tax": {
        "x": 2288.046,
        "y": 552.152,
        "width": 72.926,
        "height": 54.694
      },
      "purchases": {
        "x": 2288.046,
        "y": 737.071,
        "width": 72.926,
        "height": 84.646
      },
      "royalties": {
        "x": 2288.046,
        "y": 899.852,
        "width": 72.926,
        "height": 29.952
      },
      "da": {
        "x": 2288.046,
        "y": 1005.334,
        "width": 72.926,
        "height": 16.929
      },
      "producing_manufacturing": {
        "x": 2288.046,
        "y": 1099.096,
        "width": 72.926,
        "height": 15.627
      },
      "sga": {
        "x": 2288.046,
        "y": 1199.369,
        "width": 72.926,
        "height": 10.418
      },
      "exploration": {
        "x": 2288.046,
        "y": 1287.921,
        "width": 72.926,
        "height": 1.823
      },
      "rnd": {
        "x": 2288.046,
        "y": 1372.567,
        "width": 72.926,
        "height": 0.912
      }
    },
    "routes": {
      "finance": {
        "x": 2220.33,
        "y": 377.651,
        "width": 0,
        "height": 1.302
      },
      "other_expense": {
        "x": 2360.972,
        "y": 690.19,
        "width": 0,
        "height": 0.781
      }
    },
    "labels": {
      "crude_oil": {
        "blocks": [
          {
            "x": 455.786,
            "top": 346.397,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.487,
            "top": 483.39348046875,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 37.765,
                "weight": 800
              }
            ]
          }
        ]
      },
      "refined_chemical_products": {
        "blocks": [
          {
            "x": 455.786,
            "top": 593.824,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(0%) Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.487,
            "top": 699.306,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Refined &",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "Chemical products",
                "size": 37.765,
                "weight": 800
              }
            ]
          }
        ]
      },
      "natural_gas_ngls": {
        "blocks": [
          {
            "x": 455.786,
            "top": 841.251,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.487,
            "top": 893.471423828125,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Natural gas",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "& NGLs",
                "size": 37.765,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 455.786,
            "top": 975.382,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(85%) Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.487,
            "top": 1046.4850859375001,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Other",
                "size": 37.765,
                "weight": 800
              }
            ]
          }
        ]
      },
      "reported_revenue": {
        "blocks": [
          {
            "x": 923.292,
            "top": 480.529,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 26.045,
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
            "x": 925.897,
            "top": 1139.465,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Other income",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "related to sales",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(26%) Y/Y",
                "size": 26.045,
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
            "x": 1390.799,
            "top": 527.41,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Revenue &",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "Other income",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 26.045,
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
            "x": 1853.096,
            "top": 377.651,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "41% margin",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 26.045,
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
            "x": 1858.305,
            "top": 1139.465,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 362.024,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              },
              {
                "text": "22% margin",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 26.045,
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
            "x": 2513.335,
            "top": 561.268,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Tax (92B)",
                "size": 29.952,
                "weight": 800
              }
            ]
          }
        ]
      },
      "purchases": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 761.814,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Purchases (144B)",
                "size": 29.952,
                "weight": 800
              }
            ]
          }
        ]
      },
      "royalties": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 894.643,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Royalties (51B)",
                "size": 29.952,
                "weight": 800
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 993.614,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "D&A (28B)",
                "size": 29.952,
                "weight": 800
              }
            ]
          }
        ]
      },
      "producing_manufacturing": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 1056.122,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Producing &",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "Manufacturing",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2500.312,
            "top": 1182.439,
            "anchor": "middle",
            "lineGap": 6.511,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ]
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 1268.388,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Exploration (3B)",
                "size": 29.952,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2513.335,
            "top": 1353.034,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "R&D (1B)",
                "size": 29.952,
                "weight": 800
              }
            ]
          }
        ]
      },
      "finance": {
        "blocks": []
      },
      "other_expense": {
        "blocks": []
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "沙特阿美 · 2024 财年第三季度",
      "meta": {
        "title": "沙特阿美 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "titleTextLength": 1823.145,
        "titleSize": 104.18
      },
      "nodes": {
        "crude_oil": {
          "label": "原油",
          "notes": [
            "同比 +0%"
          ]
        },
        "refined_chemical_products": {
          "label": [
            "炼油及",
            "化工产品"
          ],
          "notes": [
            "同比 -0%"
          ]
        },
        "natural_gas_ngls": {
          "label": [
            "天然气及",
            "天然气液"
          ],
          "notes": [
            "同比 +24%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 -85%"
          ]
        },
        "reported_revenue": {
          "label": "收入",
          "notes": [
            "同比 -2%"
          ]
        },
        "other_income_related_sales": {
          "label": [
            "销售相关",
            "其他收入"
          ],
          "notes": [
            "同比 -26%"
          ]
        },
        "revenue": {
          "label": [
            "收入及",
            "其他收入"
          ],
          "notes": [
            "同比 -5%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 41%",
            "同比 -6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 22%",
            "同比 -3 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "purchases": {
          "label": "采购",
          "notes": []
        },
        "royalties": {
          "label": "特许权使用费",
          "notes": []
        },
        "da": {
          "label": "折旧及摊销",
          "notes": []
        },
        "producing_manufacturing": {
          "label": [
            "生产及",
            "制造"
          ],
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": []
        },
        "exploration": {
          "label": "勘探",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        }
      },
      "nonNodeMetrics": {
        "finance": {
          "label": "财务收益"
        },
        "other_expense": {
          "label": "其他"
        }
      },
      "annotationsSvg": "<g><text x=\"233.102\" y=\"281.285\" font-size=\"37.765\" font-weight=\"800\" fill=\"#155077\">单位：十亿沙特里亚尔</text><path d=\"M 2148.706 377.651 H 2220.33\" stroke=\"#99cd99\" stroke-width=\"1.302\" fill=\"none\"/><g class=\"sankey-interactive-annotation\" data-node=\"finance\" data-link-numerator=\"finance\" data-link-denominator=\"net_profit\"><text x=\"2181.262\" y=\"317.748\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"800\" fill=\"#008f51\">财务收益</text><text x=\"2181.262\" y=\"360.722\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"#008f51\">3B</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_expense\"><text x=\"2483.383\" y=\"699.306\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"#941100\">其他 (1B)</text></g></g>",
      "layout": {
        "labels": {
          "crude_oil": {
            "blocks": [
              {
                "x": 455.786,
                "top": 346.397,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.487,
                "top": 483.39348046875,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "原油",
                    "size": 37.765,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "refined_chemical_products": {
            "blocks": [
              {
                "x": 455.786,
                "top": 593.824,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -0%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.487,
                "top": 699.306,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "炼油及",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "化工产品",
                    "size": 37.765,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "natural_gas_ngls": {
            "blocks": [
              {
                "x": 455.786,
                "top": 841.251,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.487,
                "top": 893.471423828125,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "天然气及",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "天然气液",
                    "size": 37.765,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 455.786,
                "top": 975.382,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -85%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.487,
                "top": 1046.4850859375001,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.765,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "reported_revenue": {
            "blocks": [
              {
                "x": 923.292,
                "top": 480.529,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -2%",
                    "size": 26.045,
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
                "x": 925.897,
                "top": 1139.465,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售相关",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -26%",
                    "size": 26.045,
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
                "x": 1390.799,
                "top": 527.41,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "收入及",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "同比 -5%",
                    "size": 26.045,
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
                "x": 1853.096,
                "top": 377.651,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "利润率 41%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -6 个百分点",
                    "size": 26.045,
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
                "x": 1858.305,
                "top": 1139.465,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 362.024,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  },
                  {
                    "text": "利润率 22%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -3 个百分点",
                    "size": 26.045,
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
                "x": 2513.335,
                "top": 561.268,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "税费 (92B)",
                    "size": 29.952,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "purchases": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 761.814,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "采购 (144B)",
                    "size": 29.952,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "royalties": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 894.643,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "特许权使用费 (51B)",
                    "size": 29.952,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 993.614,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "折旧及摊销 (28B)",
                    "size": 29.952,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "producing_manufacturing": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 1056.122,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "生产及",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "制造",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2500.312,
                "top": 1182.439,
                "anchor": "middle",
                "lineGap": 6.511,
                "lines": [
                  {
                    "text": "销售、一般及行政费用",
                    "size": 26.045,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 1268.388,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "勘探 (3B)",
                    "size": 29.952,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2513.335,
                "top": 1353.034,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "研发 (1B)",
                    "size": 29.952,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "finance": {
            "blocks": []
          },
          "other_expense": {
            "blocks": []
          }
        }
      }
    }
  }
});
