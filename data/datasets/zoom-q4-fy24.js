window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "zoom-q4-fy24",
  "name": "Zoom · Q4 FY24",
  "company": "Zoom",
  "meta": {
    "company": "Zoom",
    "title": "Zoom Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/zoom-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2083.59375,
    "periodX": 2526.357421875,
    "periodY": 231.7998046875,
    "periodNoteY": 274.77392578125
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2d8cff",
        "label": "#1464da"
      },
      "hub": {
        "node": "#2d8cff",
        "label": "#1464da"
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
      "source": "#99c4f7",
      "hub": "#99c4f7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "layout": {
    "scale": 0.2890986328125,
    "nodes": {
      "enterprise": {
        "x": 333.375,
        "y": 584.70849609375,
        "width": 72.92578125,
        "height": 192.732421875
      },
      "online": {
        "x": 333.375,
        "y": 968.87109375,
        "width": 72.92578125,
        "height": 139.34033203125
      },
      "revenue": {
        "x": 800.88134765625,
        "y": 677.16796875,
        "width": 72.92578125,
        "height": 332.07275390625
      },
      "gross_profit": {
        "x": 1268.3876953125,
        "y": 586.0107421875,
        "width": 72.92578125,
        "height": 252.6357421875
      },
      "cost_of_revenue": {
        "x": 1269.68994140625,
        "y": 1030.07666015625,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "operating_profit": {
        "x": 1735.89404296875,
        "y": 480.52880859375,
        "width": 71.62353515625,
        "height": 48.18310546875
      },
      "operating_expenses": {
        "x": 1735.89404296875,
        "y": 729.2578125,
        "width": 71.62353515625,
        "height": 203.150390625
      },
      "investments": {
        "x": 2056.24658203125,
        "y": 312.5390625,
        "width": 71.62353515625,
        "height": 28.6494140625
      },
      "other": {
        "x": 2083.59375,
        "y": 470.11083984375,
        "width": 71.62353515625,
        "height": 23.4404296875
      },
      "net_profit": {
        "x": 2202.09814453125,
        "y": 341.1884765625,
        "width": 72.92578125,
        "height": 85.9482421875
      },
      "tax": {
        "x": 2202.09814453125,
        "y": 677.16796875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "sm": {
        "x": 2202.09814453125,
        "y": 811.29931640625,
        "width": 72.92578125,
        "height": 106.7841796875
      },
      "rnd": {
        "x": 2202.09814453125,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 59.9033203125
      },
      "ga": {
        "x": 2202.09814453125,
        "y": 1225.41357421875,
        "width": 72.92578125,
        "height": 35.16064453125
      }
    },
    "labels": {
      "enterprise": {
        "blocks": [
          {
            "x": 369.837890625,
            "top": 487.0400390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#1464da"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 212.26611328125,
            "top": 656.33203125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Enterprise",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#1464da"
              }
            ]
          }
        ]
      },
      "online": {
        "blocks": [
          {
            "x": 369.837890625,
            "top": 869.900390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#1464da"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 212.26611328125,
            "top": 1017.05419921875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Online",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#1464da"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 838.646484375,
            "top": 527.40966796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#1464da"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#1464da"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1304.8505859375,
            "top": 398.4873046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "76% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1306.15283203125,
            "top": 1119.931640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1771.0546875,
            "top": 290.40087890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+26pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1771.0546875,
            "top": 944.12841796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "investments": {
        "blocks": [
          {
            "x": 2092.70947265625,
            "top": 212.26611328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Investments",
                "size": 31.25390625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2118.75439453125,
            "top": 507.8759765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2392.22607421875,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "26% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+35pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2407.85302734375,
            "top": 635.49609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2407.85302734375,
            "top": 816.50830078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "32% of revenue",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2407.85302734375,
            "top": 1019.65869140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "18% of revenue",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2407.85302734375,
            "top": 1212.39111328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 27.34716796875,
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
      "id": "enterprise",
      "label": "Enterprise",
      "value": 667,
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#2d8cff",
      "labelColor": "#1464da",
      "linkTint": "#99c4f7",
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "online",
      "label": "Online",
      "value": 479,
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#2d8cff",
      "labelColor": "#1464da",
      "linkTint": "#99c4f7",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1147,
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#2d8cff",
      "labelColor": "#1464da",
      "linkTint": "#99c4f7",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 870,
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "76% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 276,
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 169,
      "type": "profit",
      "col": 3,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "15% margin",
        "+26pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 702,
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "investments",
      "label": "Investments",
      "value": 101,
      "type": "profit",
      "col": 4,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 83,
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 299,
      "type": "profit",
      "col": 5,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "26% margin",
        "+35pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 54,
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 371,
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "32% of revenue",
        "(13pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 205,
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "18% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 125,
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "11% of revenue",
        "(6pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "enterprise",
      "target": "revenue",
      "value": 667,
      "width": 192.732421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "online",
      "target": "revenue",
      "value": 479,
      "width": 139.34033203125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 870,
      "width": 252.6357421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 276,
      "width": 79.43701171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 169,
      "width": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 702,
      "width": 203.150390625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 115,
      "width": 32.55615234375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 54,
      "width": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "investments",
      "target": "net_profit",
      "value": 101,
      "width": 28.6494140625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 83,
      "width": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 23.4404296875,
      "targetWidth": 24.74267578125
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 371,
      "width": 106.7841796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 205,
      "width": 59.9033203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 125,
      "width": 36.462890625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 36.462890625,
      "targetWidth": 35.16064453125
    }
  ],
  "operatingMetrics": [
    {
      "id": "rpo",
      "label": "RPO",
      "value": "3.6",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.6B",
      "notes": [
        "+4% Y/Y"
      ],
      "basis": "unspecified",
      "quote": "RPO\n$3.6B\n+4% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          52,
          1137,
          143,
          167
        ]
      }
    },
    {
      "id": "dbne",
      "label": "DBNE",
      "value": "101",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "101%",
      "notes": [
        "TTM"
      ],
      "basis": "unspecified",
      "quote": "DBNE\n101%\nTTM",
      "anchor": {
        "type": "image-box",
        "box": [
          202,
          1139,
          142,
          163
        ]
      }
    },
    {
      "id": "enterprise_customers",
      "label": "Enterprise Customers",
      "value": "220000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "220K",
      "notes": [
        "+3% Y/Y"
      ],
      "basis": "unspecified",
      "quote": "Enterprise Customers\n220K\n+3% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          352,
          1139,
          645,
          81
        ]
      }
    },
    {
      "id": "large_customers",
      "label": "Customers > $100K",
      "value": "3810",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "3,810",
      "notes": [
        "+10% Y/Y"
      ],
      "basis": "unspecified",
      "quote": "Customers > $100K\n3,810\n+10% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          352,
          1220,
          645,
          82
        ]
      }
    }
  ],
  "annotationsSvg": "<g><rect x=\"52.08984375\" y=\"1138.1630859375\" width=\"143.2470703125\" height=\"164.0830078125\" rx=\"35.16064453125\" fill=\"#2d8cff\"/><rect x=\"201.84814453125\" y=\"1138.1630859375\" width=\"141.94482421875\" height=\"164.0830078125\" rx=\"35.16064453125\" fill=\"#2d8cff\"/><rect x=\"351.6064453125\" y=\"1138.1630859375\" width=\"644.61181640625\" height=\"164.0830078125\" rx=\"35.16064453125\" fill=\"#2d8cff\"/><text x=\"123.71337890625\" y=\"1191.55517578125\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">RPO</text><text x=\"123.71337890625\" y=\"1233.22705078125\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"rpo\">$3.6B</text><text x=\"123.71337890625\" y=\"1272.29443359375\" font-size=\"26.044921875\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\">+4% Y/Y</text><text x=\"273.4716796875\" y=\"1191.55517578125\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">DBNE</text><text x=\"273.4716796875\" y=\"1233.22705078125\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"dbne\">101%</text><text x=\"273.4716796875\" y=\"1272.29443359375\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\">TTM</text><text x=\"390.673828125\" y=\"1211.0888671875\" font-size=\"28.6494140625\" font-weight=\"600\" fill=\"#ffffff\" >Enterprise Customers +3% Y/Y to</text><text x=\"901.154296875\" y=\"1211.0888671875\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"enterprise_customers\">220K</text><text x=\"390.673828125\" y=\"1254.06298828125\" font-size=\"27.34716796875\" font-weight=\"600\" fill=\"#ffffff\" >Customers &gt; $100K +10% Y/Y to</text><text x=\"890.736328125\" y=\"1254.06298828125\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"large_customers\">3,810</text><text x=\"161.478515625\" y=\"1342.61572265625\" font-size=\"27.34716796875\" fill=\"#777777\">RPO = Remaining Performance Obligation</text><text x=\"210.9638671875\" y=\"1385.58984375\" font-size=\"27.34716796875\" fill=\"#777777\">DBNE = Dollar Based Net Expansion</text><text x=\"171.896484375\" y=\"1436.37744140625\" font-size=\"27.34716796875\" fill=\"#777777\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/zoom/company-logo-zoom-q2-fy27.png",
      "x": 587.31298828125,
      "y": 287.79638671875,
      "width": 474.017578125,
      "height": 117.2021484375
    }
  ],
  "i18n": {
    "zh": {
      "name": "Zoom · 2024 财年第四季度",
      "meta": {
        "title": "Zoom 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "titleTextLength": 1823.14453125,
        "periodX": 2420
      },
      "nodes": {
        "enterprise": {
          "label": "企业",
          "notes": [
            "同比 +5%"
          ]
        },
        "online": {
          "label": "线上",
          "notes": [
            "同比 +1%"
          ]
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
            "利润率 76%",
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
            "利润率 15%",
            "同比 +26 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "investments": {
          "label": "投资",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 26%",
            "同比 +35 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 32%",
            "同比 (13 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 (5 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (6 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "enterprise": {
            "blocks": [
              {
                "x": 369.837890625,
                "top": 487.0400390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#1464da"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 212.26611328125,
                "top": 656.33203125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "企业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#1464da"
                  }
                ]
              }
            ]
          },
          "online": {
            "blocks": [
              {
                "x": 369.837890625,
                "top": 869.900390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#1464da"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 212.26611328125,
                "top": 1017.05419921875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "线上",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#1464da"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 838.646484375,
                "top": 527.40966796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#1464da"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#1464da"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1304.8505859375,
                "top": 398.4873046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 76%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1306.15283203125,
                "top": 1119.931640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1771.0546875,
                "top": 290.40087890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +26 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1771.0546875,
                "top": 944.12841796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "investments": {
            "blocks": [
              {
                "x": 2092.70947265625,
                "top": 212.26611328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "投资",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2118.75439453125,
                "top": 507.8759765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2392.22607421875,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 26%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +35 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2407.85302734375,
                "top": 635.49609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2407.85302734375,
                "top": 816.50830078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 32%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2407.85302734375,
                "top": 1019.65869140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2407.85302734375,
                "top": 1212.39111328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"52.08984375\" y=\"1138.1630859375\" width=\"143.2470703125\" height=\"164.0830078125\" rx=\"35.16064453125\" fill=\"#2d8cff\"/><rect x=\"201.84814453125\" y=\"1138.1630859375\" width=\"141.94482421875\" height=\"164.0830078125\" rx=\"35.16064453125\" fill=\"#2d8cff\"/><rect x=\"351.6064453125\" y=\"1138.1630859375\" width=\"644.61181640625\" height=\"164.0830078125\" rx=\"35.16064453125\" fill=\"#2d8cff\"/><text x=\"123.71337890625\" y=\"1191.55517578125\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">RPO</text><text x=\"123.71337890625\" y=\"1233.22705078125\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"rpo\">$3.6B</text><text x=\"123.71337890625\" y=\"1272.29443359375\" font-size=\"26.044921875\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\">同比 +4%</text><text x=\"273.4716796875\" y=\"1191.55517578125\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">DBNE</text><text x=\"273.4716796875\" y=\"1233.22705078125\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\" data-operating-metric=\"dbne\">101%</text><text x=\"273.4716796875\" y=\"1272.29443359375\" font-size=\"23.4404296875\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"middle\">过去 12 个月</text><text x=\"390.673828125\" y=\"1211.0888671875\" font-size=\"28.6494140625\" font-weight=\"600\" fill=\"#ffffff\" >企业客户 同比 +3% 至</text><text x=\"901.154296875\" y=\"1211.0888671875\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"enterprise_customers\">220K</text><text x=\"390.673828125\" y=\"1254.06298828125\" font-size=\"27.34716796875\" font-weight=\"600\" fill=\"#ffffff\" >年收入 &gt; $100K 客户 同比 +10% 至</text><text x=\"890.736328125\" y=\"1254.06298828125\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"large_customers\">3,810</text><text x=\"161.478515625\" y=\"1342.61572265625\" font-size=\"27.34716796875\" fill=\"#777777\">RPO = 剩余履约义务</text><text x=\"210.9638671875\" y=\"1385.58984375\" font-size=\"27.34716796875\" fill=\"#777777\">DBNE = 美元口径净扩张率</text><text x=\"171.896484375\" y=\"1436.37744140625\" font-size=\"27.34716796875\" fill=\"#777777\">来源：季度业绩</text></g>"
    }
  }
});
