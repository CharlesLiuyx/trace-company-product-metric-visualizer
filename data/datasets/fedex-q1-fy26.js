/* FedEx Q1 FY26 — source-authored Sankey. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "fedex-q1-fy26",
  "name": "FedEx · Q1 FY26",
  "company": "FedEx",
  "meta": {
    "company": "FedEx",
    "title": "FedEx Q1 FY26 Income Statement",
    "period": "Q1 FY26",
    "periodNote": "Ending Aug. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/fedex-q1-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1338,
    "titleY": 200,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2078,
    "periodX": 1313,
    "periodY": 1327,
    "periodNoteY": 1369
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
        "node": "#4d148c",
        "label": "#4d148c"
      },
      "hub": {
        "node": "#4d148c",
        "label": "#4d148c"
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
      "source": "#a88ec4",
      "hub": "#a88ec4",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 34,
      "value": 38,
      "note": 28,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "\n    \n    <g data-typography-role=\"brand\">\n      <g transform=\"translate(742 440) scale(0.895 0.85) translate(-742 -440)\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-7\">\n        <text x=\"742\" y=\"440\" font-size=\"190\" fill=\"#4d148c\">Fed</text>\n        <text x=\"1080.2\" y=\"440\" font-size=\"190\" fill=\"#ff6600\">Ex</text>\n      </g>\n      \n    </g>\n    \n    <g data-typography-role=\"brand\">\n      <g transform=\"translate(83 630) scale(1.13 1.35) translate(-83 -630)\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-7\">\n        <text x=\"83\" y=\"630\" font-size=\"62\" fill=\"#4d148c\">Fed</text>\n        <text x=\"193.36\" y=\"630\" font-size=\"62\" fill=\"#ff6600\">Ex</text>\n      </g>\n      <text x=\"207\" y=\"663\" font-size=\"32\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Express</text>\n    </g>\n    \n    <g data-typography-role=\"brand\">\n      <g transform=\"translate(88 940) scale(1.22 1.37) translate(-88 -940)\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-7\">\n        <text x=\"88\" y=\"940\" font-size=\"62\" fill=\"#4d148c\">Fed</text>\n        <text x=\"198.36\" y=\"940\" font-size=\"62\" fill=\"#ff6600\">Ex</text>\n      </g>\n      <text x=\"214\" y=\"973\" font-size=\"31\" font-family=\"Georgia,serif\" font-weight=\"400\" fill=\"#4d148c\">Freight</text>\n    </g>",
  "layout": {
    "scale": 1,
    "nodes": {
      "express": {
        "x": 354,
        "y": 543,
        "width": 73,
        "height": 238
      },
      "freight": {
        "x": 354,
        "y": 949,
        "width": 73,
        "height": 28
      },
      "other_revenue": {
        "x": 354,
        "y": 1137,
        "width": 73,
        "height": 10
      },
      "revenue": {
        "x": 977,
        "y": 710,
        "width": 73,
        "height": 276
      },
      "operating_profit": {
        "x": 1600,
        "y": 549,
        "width": 73,
        "height": 14
      },
      "operating_expenses": {
        "x": 1600,
        "y": 861,
        "width": 73,
        "height": 260
      },
      "net_profit": {
        "x": 2223,
        "y": 365,
        "width": 73,
        "height": 9
      },
      "tax": {
        "x": 2223,
        "y": 473,
        "width": 73,
        "height": 3
      },
      "other_expense": {
        "x": 2223,
        "y": 558,
        "width": 73,
        "height": 1
      },
      "salaries_benefits": {
        "x": 2223,
        "y": 609,
        "width": 73,
        "height": 99
      },
      "purchased_transportation": {
        "x": 2223,
        "y": 761,
        "width": 73,
        "height": 68
      },
      "rentals": {
        "x": 2223,
        "y": 892,
        "width": 73,
        "height": 14
      },
      "depreciation_amortization": {
        "x": 2223,
        "y": 971,
        "width": 73,
        "height": 14
      },
      "fuel": {
        "x": 2223,
        "y": 1063,
        "width": 73,
        "height": 10
      },
      "maintenance": {
        "x": 2223,
        "y": 1153,
        "width": 73,
        "height": 10
      },
      "business_realignment": {
        "x": 2223,
        "y": 1240,
        "width": 73,
        "height": 1
      },
      "other_operating": {
        "x": 2223,
        "y": 1317,
        "width": 73,
        "height": 42
      }
    },
    "labels": {
      "express": {
        "blocks": [
          {
            "x": 390,
            "top": 440,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 190,
            "top": 677,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "6% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "freight": {
        "blocks": [
          {
            "x": 393,
            "top": 849,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 190,
            "top": 991,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "16% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 393,
            "top": 1037,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 248,
            "top": 1118,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 34,
                "weight": 800,
                "color": "#4d148c"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1013,
            "top": 555,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1641,
            "top": 357,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "5% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 1638,
            "top": 1138,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 2466,
            "top": 260,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "4% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2386,
            "top": 452,
            "anchor": "start",
            "lineGap": 8,
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
            "x": 2444,
            "top": 452,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "other_expense": {
        "blocks": [
          {
            "x": 2369,
            "top": 535,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2466,
            "top": 535,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "salaries_benefits": {
        "blocks": [
          {
            "x": 2465,
            "top": 620,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Salaries & benefits",
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
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2465,
            "top": 737,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Purchased",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "transportation",
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
      "rentals": {
        "blocks": [
          {
            "x": 2355,
            "top": 878,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Rentals",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2479,
            "top": 878,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2465,
            "top": 937,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2316,
            "top": 979,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2521,
            "top": 979,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "fuel": {
        "blocks": [
          {
            "x": 2376,
            "top": 1042,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Fuel",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2450,
            "top": 1042,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "maintenance": {
        "blocks": [
          {
            "x": 2325,
            "top": 1132,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Maintenance",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2524,
            "top": 1132,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "business_realignment": {
        "blocks": [
          {
            "x": 2465,
            "top": 1201,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Business",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2321,
            "top": 1243,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "realignment",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2510,
            "top": 1243,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
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
      "other_operating": {
        "blocks": [
          {
            "x": 2369,
            "top": 1315,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2466,
            "top": 1315,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
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
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "express",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "FedEx Express",
      "value": 19.1,
      "notes": [
        "+4% Y/Y",
        "6% operating margin",
        "+1pp Y/Y"
      ],
      "color": "#4d148c",
      "labelColor": "#4d148c",
      "linkTint": "#a88ec4"
    },
    {
      "id": "freight",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "FedEx Freight",
      "value": 2.3,
      "notes": [
        "(3%) Y/Y",
        "16% operating margin",
        "(3pp) Y/Y"
      ],
      "color": "#4d148c",
      "labelColor": "#4d148c",
      "linkTint": "#a88ec4"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Other",
      "value": 0.9,
      "notes": [
        "(8%) Y/Y"
      ],
      "color": "#4d148c",
      "labelColor": "#4d148c",
      "linkTint": "#a88ec4"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 22.2,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#4d148c",
      "labelColor": "#4d148c",
      "linkTint": "#a88ec4"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.2,
      "notes": [
        "5% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 21.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.8,
      "notes": [
        "4% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_expense",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "salaries_benefits",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Salaries & benefits",
      "value": 8.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "purchased_transportation",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": [
        "Purchased",
        "transportation"
      ],
      "value": 5.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rentals",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Rentals",
      "value": 1.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "depreciation_amortization",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Depreciation &",
        "Amortization"
      ],
      "value": 1.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "fuel",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Fuel",
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "maintenance",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "business_realignment",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": [
        "Business",
        "realignment"
      ],
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_operating",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Other",
      "value": 3.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "express",
      "target": "revenue",
      "value": 19.1,
      "sourceWidth": 238,
      "targetWidth": 238,
      "y0": 662,
      "y1": 829,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#a88ec4"
    },
    {
      "source": "freight",
      "target": "revenue",
      "value": 2.3,
      "sourceWidth": 28,
      "targetWidth": 28,
      "y0": 963,
      "y1": 962,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a88ec4"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 1142,
      "y1": 981,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#a88ec4"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.2,
      "sourceWidth": 14,
      "targetWidth": 14,
      "y0": 717,
      "y1": 556,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 21.1,
      "sourceWidth": 262,
      "targetWidth": 260,
      "y0": 855,
      "y1": 991,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 553.5,
      "y1": 369.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 3,
      "y0": 560,
      "y1": 474.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 562.5,
      "y1": 558.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "salaries_benefits",
      "value": 8.1,
      "sourceWidth": 99,
      "targetWidth": 99,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y1": 658.5,
      "linkTint": "#e08585",
      "y0": 910.5
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 5.5,
      "sourceWidth": 68,
      "targetWidth": 68,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y1": 795,
      "linkTint": "#e08585",
      "y0": 994
    },
    {
      "source": "operating_expenses",
      "target": "rentals",
      "value": 1.2,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 2,
      "targetOrder": 0,
      "y1": 899,
      "linkTint": "#e08585",
      "y0": 1035
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 1.1,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 3,
      "targetOrder": 0,
      "y1": 978,
      "linkTint": "#e08585",
      "y0": 1049
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 0.9,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 4,
      "targetOrder": 0,
      "y1": 1068,
      "linkTint": "#e08585",
      "y0": 1061
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.8,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 5,
      "targetOrder": 0,
      "y1": 1158,
      "linkTint": "#e08585",
      "y0": 1071
    },
    {
      "source": "operating_expenses",
      "target": "business_realignment",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 6,
      "targetOrder": 0,
      "y1": 1240.5,
      "linkTint": "#e08585",
      "y0": 1076.5
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 3.4,
      "sourceWidth": 44,
      "targetWidth": 42,
      "sourceOrder": 7,
      "targetOrder": 0,
      "y1": 1338,
      "linkTint": "#e08585",
      "y0": 1099
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Fed",
      "Ex",
      "Express",
      "Freight"
    ],
    "zh": {
      "name": "联邦快递 · 2026 财年第一季度",
      "meta": {
        "title": "联邦快递 2026 财年第一季度利润表",
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 8 月",
        "titleTextLength": 1740
      },
      "nodes": {
        "express": {
          "label": "FedEx Express",
          "notes": [
            "同比 +4%",
            "营业利润率 6%",
            "同比 +1 个百分点"
          ]
        },
        "freight": {
          "label": "FedEx Freight",
          "notes": [
            "同比 (3%)",
            "营业利润率 16%",
            "同比 (3 个百分点)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (8%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 5%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "salaries_benefits": {
          "label": "薪酬与福利"
        },
        "purchased_transportation": {
          "label": [
            "外购",
            "运输"
          ]
        },
        "rentals": {
          "label": "租赁费用"
        },
        "depreciation_amortization": {
          "label": "折旧与摊销"
        },
        "fuel": {
          "label": "燃油"
        },
        "maintenance": {
          "label": "维修"
        },
        "business_realignment": {
          "label": "业务重组"
        },
        "other_operating": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "express": {
            "blocks": [
              {
                "x": 390,
                "top": 440,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 190,
                "top": 677,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "freight": {
            "blocks": [
              {
                "x": 393,
                "top": 849,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 190,
                "top": 991,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 16%",
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
          "other_revenue": {
            "blocks": [
              {
                "x": 393,
                "top": 1037,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 248,
                "top": 1118,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 34,
                    "weight": 800,
                    "color": "#4d148c"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1013,
                "top": 555,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1641,
                "top": 357,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 5%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1638,
                "top": 1138,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 2466,
                "top": 260,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 4%",
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
          "tax": {
            "blocks": [
              {
                "x": 2398,
                "top": 452,
                "anchor": "start",
                "lineGap": 8,
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
                "x": 2462,
                "top": 452,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "other_expense": {
            "blocks": [
              {
                "x": 2388,
                "top": 535,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2471,
                "top": 535,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "salaries_benefits": {
            "blocks": [
              {
                "x": 2465,
                "top": 620,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
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
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2465,
                "top": 737,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "外购",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运输",
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
          "rentals": {
            "blocks": [
              {
                "x": 2358,
                "top": 878,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "租赁费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2490,
                "top": 878,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2325,
                "top": 937,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2515,
                "top": 979,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "fuel": {
            "blocks": [
              {
                "x": 2398,
                "top": 1042,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "燃油",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2465,
                "top": 1042,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "maintenance": {
            "blocks": [
              {
                "x": 2375,
                "top": 1132,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "维修",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2470,
                "top": 1132,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "business_realignment": {
            "blocks": [
              {
                "x": 2345,
                "top": 1201,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "业务重组",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2480,
                "top": 1243,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
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
          "other_operating": {
            "blocks": [
              {
                "x": 2388,
                "top": 1315,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2471,
                "top": 1315,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
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
});
