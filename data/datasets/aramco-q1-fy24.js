/* Financial amounts and Source geometry preserved. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "aramco-q1-fy24",
  "name": "Saudi Aramco · Q1 FY24",
  "company": "Saudi Aramco",
  "meta": {
    "company": "Saudi Aramco",
    "title": "Aramco Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/aramco-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2213.818359375,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#175478",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#0084ad",
        "label": "#0084ad"
      },
      "hub": {
        "node": "#0084ad",
        "label": "#0084ad"
      },
      "profit": {
        "node": "#279f26",
        "label": "#009652"
      },
      "cost": {
        "node": "#cf0000",
        "label": "#a21b00"
      }
    },
    "linkTint": {
      "source": "#83bdd0",
      "hub": "#83bdd0",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 9.11572265625
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "rasterAnnotations": [
    {
      "key": "aramco-company-lockup",
      "href": "data/assets/raster-annotations/aramco/company-lockup.png",
      "x": 755.302734375,
      "y": 216.1728515625,
      "width": 724.048828125,
      "height": 197.94140625
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><text x=\"179\" y=\"216\" font-size=\"30\" font-weight=\"800\" fill=\"#075c92\">In SAR billion</text></g><g class=\"sankey-interactive-annotation\" data-node=\"finance\" data-link-numerator=\"finance\" data-link-denominator=\"net_profit\"><path d=\"M1668 323 H1724 Q1735 323 1745 294 L1751 283\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"1696\" y=\"351\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#009652\">Finance</text><text x=\"1696\" y=\"383\" text-anchor=\"middle\" font-size=\"24\" fill=\"#009652\">4B</text></g></g>",
  "nonNodeMetrics": [
    {
      "id": "finance",
      "representation": "annotation",
      "value": 4,
      "type": "profit",
      "label": "Finance",
      "valueText": "4B"
    }
  ],
  "nodes": [
    {
      "id": "crude_oil",
      "label": "Crude Oil",
      "value": 200,
      "valueText": "200B",
      "notes": [
        "(6%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "refined_chemical_products",
      "label": "Refined & Chemical products",
      "value": 182,
      "valueText": "182B",
      "notes": [
        "(3%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "natural_gas_ngls",
      "label": "Natural gas & NGLs",
      "value": 12,
      "valueText": "12B",
      "notes": [
        "+7% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "metal_products",
      "label": "Metal products",
      "value": 3,
      "valueText": "3B",
      "notes": [
        "+1% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "other",
      "label": "Other",
      "value": 5,
      "valueText": "5B",
      "notes": [
        "+212% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 4
    },
    {
      "id": "reported_revenue",
      "label": "Revenue",
      "value": 402,
      "valueText": "402B",
      "notes": [
        "(4%) Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 5
    },
    {
      "id": "other_income_related_sales",
      "label": "Other income related to sales",
      "value": 36,
      "valueText": "36B",
      "notes": [
        "(15%) Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 6
    },
    {
      "id": "revenue",
      "label": "Revenue & Other income",
      "value": 438,
      "valueText": "438B",
      "notes": [
        "(5%) Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 7
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 202,
      "valueText": "202B",
      "notes": [
        "46% margin",
        "(2pp) Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 8
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 236,
      "valueText": "(236B)",
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 102,
      "valueText": "102B",
      "notes": [
        "23% margin",
        "(3pp) Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 10
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 102,
      "valueText": "(102B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 11
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 1,
      "valueText": "(1B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 12
    },
    {
      "id": "purchases",
      "label": "Purchases",
      "value": 110,
      "valueText": "(110B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 13
    },
    {
      "id": "royalties",
      "label": "Royalties",
      "value": 52,
      "valueText": "(52B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 14
    },
    {
      "id": "producing_manufacturing",
      "label": "Producing & Manufacturing",
      "value": 24,
      "valueText": "(24B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 15
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 23,
      "valueText": "(23B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 16
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 22,
      "valueText": "(22B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 17
    },
    {
      "id": "exploration",
      "label": "Exploration",
      "value": 3,
      "valueText": "(3B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 18
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1,
      "valueText": "(1B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 19
    }
  ],
  "links": [
    {
      "source": "crude_oil",
      "target": "reported_revenue",
      "value": 200,
      "sourceWidth": 126.31787109375,
      "targetWidth": 126.31787109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "refined_chemical_products",
      "target": "reported_revenue",
      "value": 182,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "natural_gas_ngls",
      "target": "reported_revenue",
      "value": 12,
      "sourceWidth": 6.51123046875,
      "targetWidth": 7.8134765625,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "metal_products",
      "target": "reported_revenue",
      "value": 3,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.953369140625,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "other",
      "target": "reported_revenue",
      "value": 5,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.255615234375,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "reported_revenue",
      "target": "revenue",
      "value": 402,
      "sourceWidth": 255.240234375,
      "targetWidth": 255.240234375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_income_related_sales",
      "target": "revenue",
      "value": 36,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 202,
      "sourceWidth": 127.6201171875,
      "targetWidth": 127.6201171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 236,
      "sourceWidth": 149.75830078125,
      "targetWidth": 149.75830078125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 102,
      "sourceWidth": 61.20556640625,
      "targetWidth": 63.81005859375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 102,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "purchases",
      "value": 110,
      "sourceWidth": 70.3212890625,
      "targetWidth": 69.01904296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "royalties",
      "value": 52,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "producing_manufacturing",
      "value": 24,
      "sourceWidth": 15.626953125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 23,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 22,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 3,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.6381005859375,
    "nodes": {
      "crude_oil": {
        "x": 416.71875,
        "y": 397.18505859375,
        "width": 72.92578125,
        "height": 126.31787109375
      },
      "refined_chemical_products": {
        "x": 416.71875,
        "y": 679.7724609375,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "natural_gas_ngls": {
        "x": 416.71875,
        "y": 937.6171875,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "metal_products": {
        "x": 416.71875,
        "y": 1078.259765625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "other": {
        "x": 416.71875,
        "y": 1226.7158203125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "reported_revenue": {
        "x": 881.62060546875,
        "y": 599.033203125,
        "width": 72.92578125,
        "height": 255.240234375
      },
      "other_income_related_sales": {
        "x": 881.62060546875,
        "y": 1073.05078125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "revenue": {
        "x": 1351.7314453125,
        "y": 704.51513671875,
        "width": 72.92578125,
        "height": 277.37841796875
      },
      "operating_profit": {
        "x": 1819.23779296875,
        "y": 458.390625,
        "width": 71.62353515625,
        "height": 127.6201171875
      },
      "operating_expenses": {
        "x": 1814.02880859375,
        "y": 1001.42724609375,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "net_profit": {
        "x": 2285.44189453125,
        "y": 304.7255859375,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "tax": {
        "x": 2285.44189453125,
        "y": 509.17822265625,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "other_expense": {
        "x": 2285.44189453125,
        "y": 668.05224609375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "purchases": {
        "x": 2285.44189453125,
        "y": 759.20947265625,
        "width": 72.92578125,
        "height": 69.01904296875
      },
      "royalties": {
        "x": 2285.44189453125,
        "y": 899.85205078125,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "producing_manufacturing": {
        "x": 2285.44189453125,
        "y": 1010.54296875,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "da": {
        "x": 2285.44189453125,
        "y": 1104.3046875,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "sga": {
        "x": 2285.44189453125,
        "y": 1198.06640625,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "exploration": {
        "x": 2285.44189453125,
        "y": 1297.037109375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "rnd": {
        "x": 2285.44189453125,
        "y": 1373.86962890625,
        "width": 72.92578125,
        "height": 1.30224609375
      }
    },
    "labels": {
      "crude_oil": {
        "blocks": [
          {
            "x": 453.181640625,
            "top": 299.5166015625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 393.2783203125,
            "top": 436.25244140625,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625
          }
        ]
      },
      "refined_chemical_products": {
        "blocks": [
          {
            "x": 453.181640625,
            "top": 579.49951171875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 393.2783203125,
            "top": 689.99716796875,
            "lines": [
              {
                "text": "Refined &",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Chemical products",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625
          }
        ]
      },
      "natural_gas_ngls": {
        "blocks": [
          {
            "x": 453.181640625,
            "top": 838.646484375,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 393.2783203125,
            "top": 893.22060546875,
            "lines": [
              {
                "text": "Natural gas",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& NGLs",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625
          }
        ]
      },
      "metal_products": {
        "blocks": [
          {
            "x": 453.181640625,
            "top": 979.2890625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 393.2783203125,
            "top": 1052.21484375,
            "lines": [
              {
                "text": "Metal products",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 453.181640625,
            "top": 1127.7451171875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+212% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          },
          {
            "x": 393.2783203125,
            "top": 1204.46640625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 9.11572265625
          }
        ]
      },
      "reported_revenue": {
        "blocks": [
          {
            "x": 918.08349609375,
            "top": 447.97265625,
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
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "other_income_related_sales": {
        "blocks": [
          {
            "x": 918.08349609375,
            "top": 1108.21142578125,
            "lines": [
              {
                "text": "Other income",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "related to sales",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(15%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1388.1943359375,
            "top": 498.76025390625,
            "lines": [
              {
                "text": "Revenue &",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Other income",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1854.3984375,
            "top": 272.16943359375,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "46% margin",
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1850.49169921875,
            "top": 1164.2080078125,
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 277.37841796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "23% margin",
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
            ],
            "anchor": "middle",
            "lineGap": 9.11572265625
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 522.20068359375,
            "lines": [
              {
                "text": "Tax (102B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 648.5185546875,
            "lines": [
              {
                "text": "Other (1B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "purchases": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 776.138671875,
            "lines": [
              {
                "text": "Purchases (110B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "royalties": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 893.3408203125,
            "lines": [
              {
                "text": "Royalties (52B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "producing_manufacturing": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 957.15087890625,
            "lines": [
              {
                "text": "Producing &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "Manufacturing",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "(24B)",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 1087.37548828125,
            "lines": [
              {
                "text": "D&A (23B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 1185.0439453125,
            "lines": [
              {
                "text": "SG&A (22B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 1273.5966796875,
            "lines": [
              {
                "text": "Exploration (3B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2389.62158203125,
            "top": 1355.63818359375,
            "lines": [
              {
                "text": "R&D (1B)",
                "size": 31.25390625,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 6.51123046875
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "沙特阿美 · 2024 财年第一季度",
      "meta": {
        "title": "沙特阿美 2024 财年第一季度利润表",
        "titleSize": 104.1796875,
        "titleTextLength": 1797.099609375
      },
      "nodes": {
        "crude_oil": {
          "label": "原油",
          "notes": [
            "同比 -6%"
          ]
        },
        "refined_chemical_products": {
          "label": "炼油及化工产品",
          "notes": [
            "同比 -3%"
          ]
        },
        "natural_gas_ngls": {
          "label": "天然气及天然气液",
          "notes": [
            "同比 +7%"
          ]
        },
        "metal_products": {
          "label": "金属产品",
          "notes": [
            "同比 +1%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +212%"
          ]
        },
        "reported_revenue": {
          "label": "收入",
          "notes": [
            "同比 -4%"
          ]
        },
        "other_income_related_sales": {
          "label": "销售相关其他收入",
          "notes": [
            "同比 -15%"
          ]
        },
        "revenue": {
          "label": "收入及其他收入",
          "notes": [
            "同比 -5%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 46%",
            "同比 -2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 -3 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
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
        "producing_manufacturing": {
          "label": "生产及制造",
          "notes": []
        },
        "da": {
          "label": "折旧及摊销",
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
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><text x=\"179\" y=\"216\" font-size=\"30\" font-weight=\"800\" fill=\"#075c92\">单位：十亿沙特里亚尔</text></g><g class=\"sankey-interactive-annotation\" data-node=\"finance\" data-link-numerator=\"finance\" data-link-denominator=\"net_profit\"><path d=\"M1668 323 H1724 Q1735 323 1745 294 L1751 283\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"1696\" y=\"351\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#009652\">财务收益</text><text x=\"1696\" y=\"383\" text-anchor=\"middle\" font-size=\"24\" fill=\"#009652\">4B</text></g></g>",
      "layout": {
        "labels": {
          "crude_oil": {
            "blocks": [
              {
                "x": 453.181640625,
                "top": 299.5166015625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 -6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 393.2783203125,
                "top": 436.25244140625,
                "lines": [
                  {
                    "text": "原油",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625
              }
            ]
          },
          "refined_chemical_products": {
            "blocks": [
              {
                "x": 453.181640625,
                "top": 579.49951171875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 -3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 393.2783203125,
                "top": 689.99716796875,
                "lines": [
                  {
                    "text": "炼油及",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "化工产品",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625
              }
            ]
          },
          "natural_gas_ngls": {
            "blocks": [
              {
                "x": 453.181640625,
                "top": 838.646484375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 393.2783203125,
                "top": 893.22060546875,
                "lines": [
                  {
                    "text": "天然气及",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "天然气液",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625
              }
            ]
          },
          "metal_products": {
            "blocks": [
              {
                "x": 453.181640625,
                "top": 979.2890625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 393.2783203125,
                "top": 1052.21484375,
                "lines": [
                  {
                    "text": "金属产品",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 453.181640625,
                "top": 1127.7451171875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +212%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              },
              {
                "x": 393.2783203125,
                "top": 1204.46640625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 9.11572265625
              }
            ]
          },
          "reported_revenue": {
            "blocks": [
              {
                "x": 918.08349609375,
                "top": 447.97265625,
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
                    "text": "同比 -4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "other_income_related_sales": {
            "blocks": [
              {
                "x": 918.08349609375,
                "top": 1108.21142578125,
                "lines": [
                  {
                    "text": "销售相关",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 -15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1388.1943359375,
                "top": 498.76025390625,
                "lines": [
                  {
                    "text": "收入及",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 -5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1854.3984375,
                "top": 272.16943359375,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 46%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1850.49169921875,
                "top": 1164.2080078125,
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
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 277.37841796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.11572265625
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 522.20068359375,
                "lines": [
                  {
                    "text": "税费 (102B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 648.5185546875,
                "lines": [
                  {
                    "text": "其他 (1B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "purchases": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 776.138671875,
                "lines": [
                  {
                    "text": "采购 (110B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "royalties": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 893.3408203125,
                "lines": [
                  {
                    "text": "特许权使用费",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "(52B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "producing_manufacturing": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 957.15087890625,
                "lines": [
                  {
                    "text": "生产及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "制造",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "(24B)",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 1087.37548828125,
                "lines": [
                  {
                    "text": "折旧及摊销 (23B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 1185.0439453125,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "行政费用 (22B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 1273.5966796875,
                "lines": [
                  {
                    "text": "勘探 (3B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2389.62158203125,
                "top": 1355.63818359375,
                "lines": [
                  {
                    "text": "研发 (1B)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 6.51123046875
              }
            ]
          }
        }
      }
    }
  }
});
