window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q1-fy24",
  "name": "Etsy · Q1 FY24",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 1987.2275390625,
    "hidePeriodStamp": true
  },
  "nodes": [
    {
      "id": "marketplace",
      "label": "Marketplace",
      "value": 467,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 179,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 646,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 459,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "71% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 187,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 68,
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [
        "11% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 391,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 12,
      "type": "profit",
      "col": 4,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 63,
      "type": "profit",
      "col": 5,
      "order": 8,
      "notes": [
        "10% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 17,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 192,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "30% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 110,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "17% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 89,
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": [
        "14% of revenue",
        "+1pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 467,
      "sourceWidth": 234.404296875,
      "targetWidth": 234.404296875,
      "y0": 666.75,
      "y1": 787.85888671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 179,
      "sourceWidth": 89.85498046875,
      "targetWidth": 88.552734375,
      "y0": 1050.261474609375,
      "y1": 949.33740234375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 459,
      "sourceWidth": 230.49755859375,
      "targetWidth": 230.49755859375,
      "y0": 785.905517578125,
      "y1": 675.214599609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 187,
      "sourceWidth": 92.45947265625,
      "targetWidth": 93.76171875,
      "y0": 947.384033203125,
      "y1": 1045.70361328125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 68,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 576.89501953125,
      "y1": 493.55126953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 391,
      "sourceWidth": 196.63916015625,
      "targetWidth": 195.3369140625,
      "y0": 692.143798828125,
      "y1": 793.06787109375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 51,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "y0": 489.64453125,
      "y1": 421.927734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 17,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "y0": 506.57373046875,
      "y1": 649.82080078125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 12,
      "sourceWidth": 5.208984375,
      "targetWidth": 6.51123046875,
      "y0": 484.435546875,
      "y1": 438.205810546875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#2ca02c",
        "right": "#99cd99"
      },
      "curve": {
        "c1x": 2226.8408203125,
        "c1y": 484.435546875,
        "c2x": 2213.818359375,
        "c2y": 438.205810546875
      }
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 192,
      "sourceWidth": 96.3662109375,
      "targetWidth": 95.06396484375,
      "y0": 743.58251953125,
      "y1": 854.924560546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 110,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "y0": 819.11279296875,
      "y1": 1089.97998046875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 89,
      "sourceWidth": 44.2763671875,
      "targetWidth": 44.2763671875,
      "y0": 868.59814453125,
      "y1": 1312.6640625,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.49993348490712075,
    "nodes": {
      "marketplace": {
        "x": 390.673828125,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 234.404296875
      },
      "services": {
        "x": 389.37158203125,
        "y": 1005.333984375,
        "width": 72.92578125,
        "height": 89.85498046875
      },
      "revenue": {
        "x": 855.57568359375,
        "y": 670.65673828125,
        "width": 72.92578125,
        "height": 322.95703125
      },
      "gross_profit": {
        "x": 1320.4775390625,
        "y": 559.9658203125,
        "width": 72.92578125,
        "height": 230.49755859375
      },
      "cost_of_revenue": {
        "x": 1323.08203125,
        "y": 998.82275390625,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "operating_profit": {
        "x": 1785.37939453125,
        "y": 476.6220703125,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "operating_expenses": {
        "x": 1790.58837890625,
        "y": 695.3994140625,
        "width": 72.92578125,
        "height": 195.3369140625
      },
      "other": {
        "x": 2138.2880859375,
        "y": 481.8310546875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "net_profit": {
        "x": 2258.0947265625,
        "y": 408.9052734375,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "tax": {
        "x": 2258.0947265625,
        "y": 645.9140625,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "marketing": {
        "x": 2258.0947265625,
        "y": 807.392578125,
        "width": 72.92578125,
        "height": 95.06396484375
      },
      "rnd": {
        "x": 2258.0947265625,
        "y": 1062.6328125,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "ga": {
        "x": 2258.0947265625,
        "y": 1290.52587890625,
        "width": 72.92578125,
        "height": 44.2763671875
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 451.87939453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": null
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 906.36328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": null
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 225.28857421875,
            "top": 1026.76318359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#eb6d20"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 892.03857421875,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": null
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1358.24267578125,
            "top": 369.837890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": null
              },
              {
                "text": "71% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1358.24267578125,
            "top": 1109.513671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "revenue",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1820.5400390625,
            "top": 283.8896484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": null
              },
              {
                "text": "11% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1827.05126953125,
            "top": 906.36328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "Expenses",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2176.05322265625,
            "top": 498.76025390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2471.6630859375,
            "top": 369.837890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": null
              },
              {
                "text": "10% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2476.8720703125,
            "top": 605.54443359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 794.3701171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Marketing",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              },
              {
                "text": "30% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 1032.68115234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              },
              {
                "text": "17% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2479.4765625,
            "top": 1218.90234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 32.55615234375,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": null
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      }
    }
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeWidth": 72.92578125,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#eb6d20",
        "label": "#eb6d20"
      },
      "hub": {
        "node": "#eb6d20",
        "label": "#eb6d20"
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
      "source": "#eeb693",
      "hub": "#eeb693",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "allowRasterAnnotations": true
  },
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/etsy/company-logo-q1-fy24.png",
      "x": 757.9072265625,
      "y": 240.91552734375,
      "width": 265.658203125,
      "height": 265.658203125,
      "clearance": true
    },
    {
      "key": "marketplace-brands",
      "href": "data/assets/raster-annotations/etsy/marketplace-brands-q1-fy24.png",
      "x": 54.6943359375,
      "y": 645.9140625,
      "width": 325.5615234375,
      "height": 148.4560546875
    }
  ],
  "annotationsSvg": "<rect x=\"79.43701171875\" y=\"1153.7900390625\" width=\"164.0830078125\" height=\"164.0830078125\" rx=\"37.76513671875\" fill=\"#f27124\"/><text x=\"161.478515625\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.478515625\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#fff\">$3.0B</text><text x=\"161.478515625\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">(4%) Y/Y</text><rect x=\"250.03125\" y=\"1153.7900390625\" width=\"333.375\" height=\"164.0830078125\" rx=\"37.76513671875\" fill=\"#f27124\"/><text x=\"416.71875\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active_sellers\" x=\"416.71875\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#fff\">9.1M</text><text x=\"416.71875\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">+15% Y/Y</text><rect x=\"588.615234375\" y=\"1153.7900390625\" width=\"330.7705078125\" height=\"164.0830078125\" rx=\"37.76513671875\" fill=\"#f27124\"/><text x=\"754.00048828125\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active_buyers\" x=\"754.00048828125\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#fff\">96M</text><text x=\"754.00048828125\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">+1% Y/Y</text><text x=\"421.927734375\" y=\"1375.171875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#666666\">GMV = Gross Merchandise Sales</text><g class=\"sankey-interactive-annotation\" data-node=\"marketplace\"><text x=\"225.28857421875\" y=\"622.4736328125\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#eb6d20\">Marketplace</text></g>",
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "3.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.0B"
    },
    {
      "id": "active_sellers",
      "value": "9100000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "9.1M"
    },
    {
      "id": "active_buyers",
      "value": "96000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "96M"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "GMS"
    ],
    "zh": {
      "name": "Etsy · 2024 财年第一季度",
      "meta": {
        "title": "Etsy 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "titleSize": 117.2021484375,
        "titleTextLength": 1953.369140625
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 0%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +3%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 71%",
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
            "利润率 11%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 30%",
            "同比 +3 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 (1 个百分点)"
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
          "marketplace": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 451.87939453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 0%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 906.36328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 225.28857421875,
                "top": 1026.76318359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#eb6d20"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 892.03857421875,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1358.24267578125,
                "top": 369.837890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 71%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 1358.24267578125,
                "top": 1109.513671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "成本",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1820.5400390625,
                "top": 283.8896484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1827.05126953125,
                "top": 906.36328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2176.05322265625,
                "top": 498.76025390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2471.6630859375,
                "top": 369.837890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2476.8720703125,
                "top": 605.54443359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 794.3701171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营销",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 30%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 1032.68115234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2479.4765625,
                "top": 1218.90234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<rect x=\"79.43701171875\" y=\"1153.7900390625\" width=\"164.0830078125\" height=\"164.0830078125\" rx=\"37.76513671875\" fill=\"#f27124\"/><text x=\"161.478515625\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.478515625\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#fff\">$3.0B</text><text x=\"161.478515625\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">同比 (4%)</text><rect x=\"250.03125\" y=\"1153.7900390625\" width=\"333.375\" height=\"164.0830078125\" rx=\"37.76513671875\" fill=\"#f27124\"/><text x=\"416.71875\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active_sellers\" x=\"416.71875\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#fff\">9.1M</text><text x=\"416.71875\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">同比 +15%</text><rect x=\"588.615234375\" y=\"1153.7900390625\" width=\"330.7705078125\" height=\"164.0830078125\" rx=\"37.76513671875\" fill=\"#f27124\"/><text x=\"754.00048828125\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active_buyers\" x=\"754.00048828125\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"29.95166015625\" font-weight=\"400\" fill=\"#fff\">96M</text><text x=\"754.00048828125\" y=\"1291.828125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">同比 +1%</text><text x=\"421.927734375\" y=\"1375.171875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#666666\">GMV = 商品交易总额</text><g class=\"sankey-interactive-annotation\" data-node=\"marketplace\"><text x=\"225.28857421875\" y=\"622.4736328125\" text-anchor=\"middle\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#eb6d20\">交易市场</text></g>"
    }
  }
});
