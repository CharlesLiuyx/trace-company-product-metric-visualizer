/* Source-measured Aramco Q2 FY26 View Adapter. */
(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "aramco-q2-fy26",
  "name": "Saudi Aramco · Q2 FY26",
  "company": "Saudi Aramco",
  "meta": {
    "company": "Saudi Aramco",
    "title": "Aramco Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/aramco-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 2208,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#68686a",
    "noteColor": "#68686a",
    "palette": {
      "source": {
        "node": "#007eac",
        "label": "#007dac"
      },
      "hub": {
        "node": "#007eac",
        "label": "#007dac"
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
    "type": {
      "name": 42,
      "value": 42,
      "note": 29,
      "lineGap": 8
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "\n    <g>\n      <text x=\"234\" y=\"280\" font-size=\"40\" font-weight=\"800\" fill=\"#155077\">In SAR billion</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "aramco-company-lockup-q2-fy26",
      "href": "data/assets/raster-annotations/aramco/company-lockup-q2-fy26.png",
      "x": 755,
      "y": 215,
      "width": 730,
      "height": 205
    }
  ],
  "nodes": [
    {
      "id": "crude_oil",
      "label": "Crude Oil",
      "value": 188,
      "notes": [
        "+8% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "188B"
    },
    {
      "id": "refined_chemical_products",
      "label": [
        "Refined &",
        "Chemical products"
      ],
      "value": 246,
      "notes": [
        "+32% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "246B"
    },
    {
      "id": "natural_gas_ngls",
      "label": [
        "Natural gas",
        "& NGLs"
      ],
      "value": 16,
      "notes": [
        "(2%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "16B"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.5,
      "notes": [
        "(79%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "0.5B",
      "color": "#ced9dd"
    },
    {
      "id": "reported_revenue",
      "label": "Revenue",
      "value": 451,
      "notes": [
        "+19% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "451B"
    },
    {
      "id": "other_income_related_sales",
      "label": [
        "Other income",
        "related to sales"
      ],
      "value": 71,
      "notes": [
        "+151% Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 1,
      "valueText": "71B"
    },
    {
      "id": "revenue",
      "label": [
        "Revenue &",
        "Other income"
      ],
      "value": 522,
      "notes": [
        "+28% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0,
      "valueText": "522B"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 216,
      "notes": [
        "48% margin",
        "+0pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 0,
      "valueText": "216B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 306,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "(306B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 123,
      "notes": [
        "23% margin",
        "+3pp Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 0,
      "valueText": "123B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 92,
      "type": "cost",
      "col": 4,
      "order": 1,
      "valueText": "(92B)"
    },
    {
      "id": "purchases",
      "label": "Purchases",
      "value": 175,
      "type": "cost",
      "col": 4,
      "order": 2,
      "valueText": "(175B)"
    },
    {
      "id": "royalties",
      "label": "Royalties",
      "value": 52,
      "type": "cost",
      "col": 4,
      "order": 3,
      "valueText": "(52B)"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 25,
      "type": "cost",
      "col": 4,
      "order": 4,
      "valueText": "(25B)"
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
      "order": 5,
      "valueText": "(27B)"
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 24,
      "type": "cost",
      "col": 4,
      "order": 6,
      "valueText": "(24B)"
    },
    {
      "id": "exploration",
      "label": "Exploration",
      "value": 2,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "(2B)",
      "color": "#dca9a9"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1,
      "type": "cost",
      "col": 4,
      "order": 8,
      "valueText": "(1B)",
      "color": "#c08686"
    }
  ],
  "links": [
    {
      "source": "crude_oil",
      "target": "reported_revenue",
      "value": 188,
      "sourceWidth": 115,
      "targetWidth": 114,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85bdd2"
    },
    {
      "source": "refined_chemical_products",
      "target": "reported_revenue",
      "value": 246,
      "sourceWidth": 150,
      "targetWidth": 149,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85bdd2"
    },
    {
      "source": "natural_gas_ngls",
      "target": "reported_revenue",
      "value": 16,
      "sourceWidth": 11,
      "targetWidth": 9,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85bdd2"
    },
    {
      "source": "other",
      "target": "reported_revenue",
      "value": 0.5,
      "sourceWidth": 2,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85bdd2"
    },
    {
      "source": "reported_revenue",
      "target": "revenue",
      "value": 451,
      "sourceWidth": 273,
      "targetWidth": 272,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85bdd2"
    },
    {
      "source": "other_income_related_sales",
      "target": "revenue",
      "value": 71,
      "sourceWidth": 44,
      "targetWidth": 43,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85bdd2"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 216,
      "sourceWidth": 131,
      "targetWidth": 131,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 306,
      "sourceWidth": 184,
      "targetWidth": 186,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 123,
      "sourceWidth": 76,
      "targetWidth": 77,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 92,
      "sourceWidth": 55,
      "targetWidth": 57,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "purchases",
      "value": 175,
      "sourceWidth": 108,
      "targetWidth": 106,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "royalties",
      "value": 52,
      "sourceWidth": 32,
      "targetWidth": 33,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 25,
      "sourceWidth": 17,
      "targetWidth": 19,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "producing_manufacturing",
      "value": 27,
      "sourceWidth": 14,
      "targetWidth": 17,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 24,
      "sourceWidth": 12,
      "targetWidth": 17,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 2,
      "sourceWidth": 2,
      "targetWidth": 3,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1,
      "sourceWidth": 1,
      "targetWidth": 2,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 0.603448275862069,
    "nodes": {
      "crude_oil": {
        "x": 420,
        "y": 492,
        "width": 72,
        "height": 115
      },
      "refined_chemical_products": {
        "x": 420,
        "y": 720,
        "width": 72,
        "height": 150
      },
      "natural_gas_ngls": {
        "x": 420,
        "y": 978,
        "width": 72,
        "height": 11
      },
      "other": {
        "x": 420,
        "y": 1109,
        "width": 72,
        "height": 2
      },
      "reported_revenue": {
        "x": 887,
        "y": 612,
        "width": 72,
        "height": 273
      },
      "other_income_related_sales": {
        "x": 887,
        "y": 1086,
        "width": 72,
        "height": 44
      },
      "revenue": {
        "x": 1354,
        "y": 720,
        "width": 73,
        "height": 315
      },
      "operating_profit": {
        "x": 1821,
        "y": 612,
        "width": 73,
        "height": 131
      },
      "operating_expenses": {
        "x": 1821,
        "y": 954,
        "width": 73,
        "height": 186
      },
      "net_profit": {
        "x": 2288,
        "y": 427,
        "width": 72,
        "height": 77
      },
      "tax": {
        "x": 2288,
        "y": 580,
        "width": 72,
        "height": 57
      },
      "purchases": {
        "x": 2288,
        "y": 714,
        "width": 72,
        "height": 106
      },
      "royalties": {
        "x": 2288,
        "y": 895,
        "width": 72,
        "height": 33
      },
      "sga": {
        "x": 2288,
        "y": 1000,
        "width": 72,
        "height": 19
      },
      "producing_manufacturing": {
        "x": 2288,
        "y": 1092,
        "width": 72,
        "height": 17
      },
      "da": {
        "x": 2288,
        "y": 1180,
        "width": 72,
        "height": 17
      },
      "exploration": {
        "x": 2288,
        "y": 1279,
        "width": 72,
        "height": 3
      },
      "rnd": {
        "x": 2288,
        "y": 1369,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "crude_oil": {
        "blocks": [
          {
            "x": 456,
            "top": 395,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 396,
            "top": 526,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              }
            ]
          }
        ]
      },
      "refined_chemical_products": {
        "blocks": [
          {
            "x": 456,
            "top": 626.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "+32% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 392,
            "top": 745.5,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Refined &",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "Chemical products",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              }
            ]
          }
        ]
      },
      "natural_gas_ngls": {
        "blocks": [
          {
            "x": 456,
            "top": 880.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "(2%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 386,
            "top": 928.5,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Natural gas",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "& NGLs",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              }
            ],
            "semanticRole": "source-offset-label"
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 456,
            "top": 1010,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "(79%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 373,
            "top": 1075,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              }
            ],
            "semanticRole": "source-offset-label"
          }
        ]
      },
      "reported_revenue": {
        "blocks": [
          {
            "x": 927,
            "top": 466.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "+19% Y/Y",
                "size": 28,
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
            "x": 921,
            "top": 1145.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other income",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "related to sales",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "+151% Y/Y",
                "size": 28,
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
            "x": 1391.5,
            "top": 524.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue &",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "Other income",
                "size": 40,
                "weight": 800,
                "color": "#007dac"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#007dac"
              },
              {
                "text": "+28% Y/Y",
                "size": 28,
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
            "x": 1865,
            "top": 430,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "48% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
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
            "x": 1851,
            "top": 1147.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
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
            "x": 2477,
            "top": 401,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "23% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28,
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
            "x": 2405.075263977051,
            "top": 597,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2467.924736022949,
            "top": 597,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(92B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "purchases": {
        "blocks": [
          {
            "x": 2379.2510833740234,
            "top": 747,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Purchases",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2551.7645416259766,
            "top": 747,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(175B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "royalties": {
        "blocks": [
          {
            "x": 2393.535285949707,
            "top": 894.5,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Royalties",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2550.464714050293,
            "top": 894.5,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(52B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2430.63126373291,
            "top": 988,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "SG&A",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2527.36873626709,
            "top": 988,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(25B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "producing_manufacturing": {
        "blocks": [
          {
            "x": 2513.5,
            "top": 1040,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Producing &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Manufacturing",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2432.607261657715,
            "top": 1172,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "D&A",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2511.392738342285,
            "top": 1172,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(24B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2383.307487487793,
            "top": 1255.5,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Exploration",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2577.676887512207,
            "top": 1255.5,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(2B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2416.2874450683594,
            "top": 1346,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493.6969299316406,
            "top": 1346,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "(1B)",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "沙特阿美 · 2026 财年第二季度",
      "meta": {
        "title": "沙特阿美 2026 财年第二季度利润表",
        "titleSize": 105,
        "titleTextLength": 1600
      },
      "annotationsSvg": "\n    <g>\n      <text x=\"234\" y=\"280\" font-size=\"40\" font-weight=\"800\" fill=\"#155077\">单位：十亿沙特里亚尔</text>\n    </g>",
      "nodes": {
        "crude_oil": {
          "label": "原油",
          "notes": [
            "同比 +8%"
          ]
        },
        "refined_chemical_products": {
          "label": [
            "炼油及",
            "化工产品"
          ],
          "notes": [
            "同比 +32%"
          ]
        },
        "natural_gas_ngls": {
          "label": [
            "天然气及",
            "天然气液"
          ],
          "notes": [
            "同比 -2%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 -79%"
          ]
        },
        "reported_revenue": {
          "label": "收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "other_income_related_sales": {
          "label": [
            "销售相关",
            "其他收入"
          ],
          "notes": [
            "同比 +151%"
          ]
        },
        "revenue": {
          "label": [
            "收入及",
            "其他收入"
          ],
          "notes": [
            "同比 +28%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 48%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 +3 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "purchases": {
          "label": "采购"
        },
        "royalties": {
          "label": "特许权使用费"
        },
        "sga": {
          "label": "销售、一般及行政费用"
        },
        "producing_manufacturing": {
          "label": [
            "生产及",
            "制造"
          ]
        },
        "da": {
          "label": "折旧及摊销"
        },
        "exploration": {
          "label": "勘探"
        },
        "rnd": {
          "label": "研发"
        }
      },
      "layout": {
        "labels": {
          "crude_oil": {
            "blocks": [
              {
                "x": 456,
                "top": 395,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 396,
                "top": 526,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "原油",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  }
                ]
              }
            ]
          },
          "refined_chemical_products": {
            "blocks": [
              {
                "x": 456,
                "top": 626.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 +32%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 392,
                "top": 745.5,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "炼油及",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "化工产品",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  }
                ]
              }
            ]
          },
          "natural_gas_ngls": {
            "blocks": [
              {
                "x": 456,
                "top": 880.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 -2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 386,
                "top": 928.5,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "天然气及",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "天然气液",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  }
                ],
                "semanticRole": "source-offset-label"
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 456,
                "top": 1010,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 -79%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 373,
                "top": 1075,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  }
                ],
                "semanticRole": "source-offset-label"
              }
            ]
          },
          "reported_revenue": {
            "blocks": [
              {
                "x": 927,
                "top": 466.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 28,
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
                "x": 921,
                "top": 1145.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售相关",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "其他收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 +151%",
                    "size": 28,
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
                "x": 1391.5,
                "top": 524.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入及",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "其他收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#007dac"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#007dac"
                  },
                  {
                    "text": "同比 +28%",
                    "size": 28,
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
                "x": 1865,
                "top": 430,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 48%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
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
                "x": 1851,
                "top": 1147.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业",
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
                    "size": 40,
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
                "x": 2477,
                "top": 401,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28,
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
                "x": 2400.53125,
                "top": 597,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2472.46875,
                "top": 597,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "(92B)",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "purchases": {
            "blocks": [
              {
                "x": 2429.5390625,
                "top": 747,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "采购",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2501.4765625,
                "top": 747,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "(175B)",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "royalties": {
            "blocks": [
              {
                "x": 2372.03125,
                "top": 894.5,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "特许权使用费",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2571.96875,
                "top": 894.5,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "(52B)",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2415,
                "top": 970,
                "anchor": "start",
                "lineGap": 3,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 24,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 24,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2520,
                "top": 997,
                "anchor": "start",
                "lines": [
                  {
                    "text": "(25B)",
                    "size": 24,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "producing_manufacturing": {
            "blocks": [
              {
                "x": 2513.5,
                "top": 1040,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "生产及",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "制造",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2388.03125,
                "top": 1172,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "折旧及摊销",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2555.96875,
                "top": 1172,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "(24B)",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2444.5234375,
                "top": 1255.5,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "勘探",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2516.4609375,
                "top": 1255.5,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "(2B)",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2419.0234375,
                "top": 1346,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490.9609375,
                "top": 1346,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "(1B)",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}); })();
