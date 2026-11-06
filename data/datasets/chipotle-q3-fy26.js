(function(){ window.DATASETS=window.DATASETS||[]; window.DATASETS.push({
  "key": "chipotle-q3-fy26",
  "name": "Chipotle · Q3 FY26",
  "company": "Chipotle",
  "meta": {
    "company": "Chipotle",
    "title": "Chipotle Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Quarter ended September 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/chipotle-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 132,
    "titleWeight": 800,
    "titleTextLength": 2240,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#4f0c00",
        "label": "#4e0b00"
      },
      "hub": {
        "node": "#4f0c00",
        "label": "#4e0b00"
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
      "source": "#a98a85",
      "hub": "#a98a85",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g><rect x=\"105\" y=\"1165\" width=\"313\" height=\"150\" rx=\"28\" fill=\"#4f0c00\"/><text x=\"261.5\" y=\"1213\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Comparable</text><text x=\"261.5\" y=\"1252\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">restaurant sales</text><text data-operating-metric=\"comparable_sales\" x=\"229\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">+2.1%</text><text x=\"329\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">Y/Y</text></g><g><rect x=\"429\" y=\"1165\" width=\"313\" height=\"150\" rx=\"28\" fill=\"#4f0c00\"/><text x=\"585.5\" y=\"1213\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Average</text><text x=\"585.5\" y=\"1252\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">restaurant sales</text><text data-operating-metric=\"average_sales\" x=\"536\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">$3.1M</text><text x=\"656\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">+0% Y/Y</text></g><g class=\"sankey-interactive-annotation\" data-node=\"in_restaurant\"><text x=\"210\" y=\"551\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#4e0b00\">In-restaurant</text></g><g class=\"sankey-interactive-annotation\" data-node=\"digital_sales\"><text x=\"210\" y=\"910\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#4e0b00\">Digital sales</text></g>",
  "rasterAnnotations": [
    {
      "key": "chipotle-company-logo",
      "href": "data/assets/raster-annotations/chipotle/company-logo.png",
      "x": 1204,
      "y": 218,
      "width": 259,
      "height": 259
    },
    {
      "key": "chipotle-in-restaurant",
      "href": "data/assets/raster-annotations/chipotle/business-in-restaurant.png",
      "x": 72,
      "y": 405,
      "width": 277,
      "height": 99
    },
    {
      "key": "chipotle-digital-sales",
      "href": "data/assets/raster-annotations/chipotle/business-digital-sales.png",
      "x": 134,
      "y": 634,
      "width": 151,
      "height": 205
    }
  ],
  "layout": {
    "scale": 103.083,
    "nodes": {
      "in_restaurant": {
        "x": 378,
        "y": 378,
        "width": 72,
        "height": 204
      },
      "digital_sales": {
        "x": 378,
        "y": 791,
        "width": 72,
        "height": 130
      },
      "food_beverage": {
        "x": 845,
        "y": 496,
        "width": 71,
        "height": 333
      },
      "delivery": {
        "x": 845,
        "y": 1063,
        "width": 71,
        "height": 1.5
      },
      "revenue": {
        "x": 1312,
        "y": 631,
        "width": 72,
        "height": 335
      },
      "operating_profit": {
        "x": 1780,
        "y": 501,
        "width": 71,
        "height": 47
      },
      "operating_expenses": {
        "x": 1780,
        "y": 782,
        "width": 71,
        "height": 289
      },
      "other_income": {
        "x": 2084,
        "y": 290,
        "width": 71,
        "height": 1.4
      },
      "net_profit": {
        "x": 2246,
        "y": 295,
        "width": 72,
        "height": 35
      },
      "tax": {
        "x": 2246,
        "y": 438,
        "width": 72,
        "height": 12
      },
      "food_beverage_packaging": {
        "x": 2246,
        "y": 563,
        "width": 72,
        "height": 99
      },
      "labor": {
        "x": 2246,
        "y": 721,
        "width": 72,
        "height": 86
      },
      "other_opex": {
        "x": 2246,
        "y": 870,
        "width": 72,
        "height": 53
      },
      "occupancy": {
        "x": 2246,
        "y": 992,
        "width": 72,
        "height": 18
      },
      "ga": {
        "x": 2246,
        "y": 1082,
        "width": 72,
        "height": 18
      },
      "da": {
        "x": 2246,
        "y": 1177,
        "width": 72,
        "height": 10
      },
      "pre_opening": {
        "x": 2246,
        "y": 1274,
        "width": 72,
        "height": 1.6
      },
      "impairment": {
        "x": 2246,
        "y": 1357,
        "width": 72,
        "height": 1.6
      }
    },
    "labels": {
      "in_restaurant": {
        "blocks": [
          {
            "x": 410,
            "top": 286,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4e0b00"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "digital_sales": {
        "blocks": [
          {
            "x": 413,
            "top": 699,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4e0b00"
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "food_beverage": {
        "blocks": [
          {
            "x": 880,
            "top": 351,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Food & Beverage",
                "size": 40,
                "weight": 800,
                "color": "#4e0b00"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4e0b00"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "delivery": {
        "blocks": [
          {
            "x": 880,
            "top": 917,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Delivery",
                "size": 40,
                "weight": 800,
                "color": "#4e0b00"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4e0b00"
              },
              {
                "text": "+7% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1349,
            "top": 484,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#4e0b00"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4e0b00"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
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
            "x": 1812,
            "top": 320,
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
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "14% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
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
            "x": 1812,
            "top": 1093,
            "anchor": "middle",
            "lineGap": 8,
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
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2119.5,
            "top": 201,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 34,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 2458,
            "top": 234,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 31,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "10% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
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
            "x": 2458,
            "top": 410,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "food_beverage_packaging": {
        "blocks": [
          {
            "x": 2466,
            "top": 550,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Food, beverage &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "packaging",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "labor": {
        "blocks": [
          {
            "x": 2466,
            "top": 730,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Labor",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2466,
            "top": 865,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other opex",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2466,
            "top": 1058,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2466,
            "top": 965,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2466,
            "top": 1148,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "D&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "pre_opening": {
        "blocks": [
          {
            "x": 2466,
            "top": 1240,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Pre-opening",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2466,
            "top": 1323,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Impairment",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
      "id": "gross_profit",
      "representation": "data-only",
      "label": "",
      "value": 3.3,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "representation": "data-only",
      "label": "",
      "value": 0,
      "type": "cost"
    }
  ],
  "nodes": [
    {
      "id": "in_restaurant",
      "type": "source",
      "label": "In-restaurant",
      "value": 2,
      "notes": [
        "+6% Y/Y"
      ],
      "valueText": "$2.0B"
    },
    {
      "id": "digital_sales",
      "type": "source",
      "label": "Digital sales",
      "value": 1.3,
      "notes": [
        "+16% Y/Y"
      ],
      "valueText": "$1.3B"
    },
    {
      "id": "food_beverage",
      "type": "hub",
      "label": "Food & Beverage",
      "value": 3.3,
      "notes": [
        "+10% Y/Y"
      ],
      "valueText": "$3.3B"
    },
    {
      "id": "delivery",
      "type": "source",
      "label": "Delivery",
      "value": 0.015,
      "valueText": "$15M",
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#a98a85",
      "linkTint": "#a98a85"
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 3.3,
      "notes": [
        "+10% Y/Y"
      ],
      "valueText": "$3.3B"
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 0.5,
      "notes": [
        "14% margin",
        "(2pp) Y/Y"
      ],
      "valueText": "$0.5B"
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 2.8,
      "valueText": "($2.8B)"
    },
    {
      "id": "other_income",
      "type": "profit",
      "label": "Other",
      "value": 0.005,
      "valueText": "$5M",
      "color": "#99cd99",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 0.3,
      "notes": [
        "10% margin",
        "(2pp) Y/Y"
      ],
      "valueText": "$0.3B"
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "food_beverage_packaging",
      "type": "cost",
      "label": [
        "Food, beverage &",
        "packaging"
      ],
      "value": 1,
      "valueText": "($1.0B)"
    },
    {
      "id": "labor",
      "type": "cost",
      "label": "Labor",
      "value": 0.8,
      "valueText": "($0.8B)"
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.5,
      "valueText": "($0.5B)"
    },
    {
      "id": "ga",
      "type": "cost",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "occupancy",
      "type": "cost",
      "label": "Occupancy",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "da",
      "type": "cost",
      "label": "D&A",
      "value": 0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "pre_opening",
      "type": "cost",
      "label": "Pre-opening",
      "value": 0.013,
      "valueText": "($13M)",
      "color": "#e08585",
      "linkTint": "#e08585"
    },
    {
      "id": "impairment",
      "type": "cost",
      "label": "Impairment",
      "value": 0.015,
      "valueText": "($15M)",
      "color": "#e08585",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "in_restaurant",
      "target": "food_beverage",
      "value": 2,
      "sourceWidth": 204,
      "targetWidth": 204,
      "y0": 480,
      "y1": 598,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "digital_sales",
      "target": "food_beverage",
      "value": 1.3,
      "sourceWidth": 130,
      "targetWidth": 129,
      "y0": 856,
      "y1": 764.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "food_beverage",
      "target": "revenue",
      "value": 3.3,
      "sourceWidth": 333,
      "targetWidth": 333,
      "y0": 662.5,
      "y1": 797.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "delivery",
      "target": "revenue",
      "value": 0.015,
      "sourceWidth": 1.5,
      "targetWidth": 2,
      "y0": 1063.75,
      "y1": 965,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a98a85"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 47,
      "targetWidth": 47,
      "y0": 654.5,
      "y1": 524.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 2.8,
      "sourceWidth": 288,
      "targetWidth": 289,
      "y0": 822,
      "y1": 926.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 35,
      "targetWidth": 34,
      "y0": 518.5,
      "y1": 313,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 542,
      "y1": 444,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.005,
      "sourceWidth": 1.4,
      "targetWidth": 1,
      "y0": 290.7,
      "y1": 295.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "food_beverage_packaging",
      "value": 1,
      "sourceWidth": 99,
      "targetWidth": 99,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 831.5,
      "y1": 612.5
    },
    {
      "source": "operating_expenses",
      "target": "labor",
      "value": 0.8,
      "sourceWidth": 86,
      "targetWidth": 86,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 924,
      "y1": 764
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.5,
      "sourceWidth": 53,
      "targetWidth": 53,
      "sourceOrder": 2,
      "targetOrder": 0,
      "y0": 993.5,
      "y1": 896.5
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 18,
      "targetWidth": 18,
      "sourceOrder": 4,
      "targetOrder": 0,
      "y0": 1047,
      "y1": 1091
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.2,
      "sourceWidth": 18,
      "targetWidth": 18,
      "sourceOrder": 3,
      "targetOrder": 0,
      "y0": 1029,
      "y1": 1001
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.1,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 5,
      "targetOrder": 0,
      "y0": 1061,
      "y1": 1182
    },
    {
      "source": "operating_expenses",
      "target": "pre_opening",
      "value": 0.013,
      "sourceWidth": 2.5,
      "targetWidth": 1.6,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1067.25,
      "y1": 1274.8
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 0.015,
      "sourceWidth": 2,
      "targetWidth": 1.6,
      "sourceOrder": 7,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 1069.5,
      "y1": 1357.8
    }
  ],
  "i18n": {
    "zh": {
      "name": "Chipotle · 2026 财年第三季度",
      "meta": {
        "title": "Chipotle 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月 30 日的季度",
        "titleTextLength": 2200
      },
      "nodes": {
        "in_restaurant": {
          "label": "餐厅内销售",
          "notes": [
            "同比 +6%"
          ]
        },
        "digital_sales": {
          "label": "数字销售",
          "notes": [
            "同比 +16%"
          ]
        },
        "food_beverage": {
          "label": "餐饮收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "delivery": {
          "label": "配送服务",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other_income": {
          "label": "其他收入"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "food_beverage_packaging": {
          "label": "食品、饮料及包装"
        },
        "labor": {
          "label": "人工"
        },
        "other_opex": {
          "label": "其他运营费用"
        },
        "ga": {
          "label": "一般及行政"
        },
        "occupancy": {
          "label": "占用成本"
        },
        "da": {
          "label": "折旧与摊销"
        },
        "pre_opening": {
          "label": "开业前费用"
        },
        "impairment": {
          "label": "减值"
        }
      },
      "layout": {
        "labels": {
          "in_restaurant": {
            "blocks": [
              {
                "x": 410,
                "top": 286,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "digital_sales": {
            "blocks": [
              {
                "x": 413,
                "top": 699,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "food_beverage": {
            "blocks": [
              {
                "x": 880,
                "top": 351,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "餐饮收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "delivery": {
            "blocks": [
              {
                "x": 880,
                "top": 917,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "配送服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1349,
                "top": 484,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4e0b00"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
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
                "x": 1812,
                "top": 320,
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
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 14%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
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
                "x": 1812,
                "top": 1093,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2119.5,
                "top": 201,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 34,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 2458,
                "top": 234,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 31,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
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
                "x": 2458,
                "top": 410,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "food_beverage_packaging": {
            "blocks": [
              {
                "x": 2466,
                "top": 550,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "食品、饮料及",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "包装",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "labor": {
            "blocks": [
              {
                "x": 2466,
                "top": 730,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "人工",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2466,
                "top": 865,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2466,
                "top": 1058,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2466,
                "top": 965,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "占用成本",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2466,
                "top": 1148,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "pre_opening": {
            "blocks": [
              {
                "x": 2466,
                "top": 1240,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "开业前费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2466,
                "top": 1323,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "减值",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"105\" y=\"1165\" width=\"313\" height=\"150\" rx=\"28\" fill=\"#4f0c00\"/><text x=\"261.5\" y=\"1213\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">同店</text><text x=\"261.5\" y=\"1252\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">餐厅销售额</text><text data-operating-metric=\"comparable_sales\" x=\"229\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">+2.1%</text><text x=\"329\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">同比</text></g><g><rect x=\"429\" y=\"1165\" width=\"313\" height=\"150\" rx=\"28\" fill=\"#4f0c00\"/><text x=\"585.5\" y=\"1213\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">平均</text><text x=\"585.5\" y=\"1252\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">餐厅销售额</text><text data-operating-metric=\"average_sales\" x=\"536\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">$3.1M</text><text x=\"656\" y=\"1290\" text-anchor=\"middle\" font-size=\"25\" fill=\"#fff\">同比 +0%</text></g><g class=\"sankey-interactive-annotation\" data-node=\"in_restaurant\"><text x=\"210\" y=\"551\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#4e0b00\">餐厅内销售</text></g><g class=\"sankey-interactive-annotation\" data-node=\"digital_sales\"><text x=\"210\" y=\"910\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#4e0b00\">数字销售</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "comparable_sales",
      "value": "2.1",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+2.1%"
    },
    {
      "id": "average_sales",
      "value": "3.1",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.1M"
    }
  ]
}); })();
