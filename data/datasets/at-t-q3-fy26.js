window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "at-t-q3-fy26",
  "name": "AT&T · Q3 FY26",
  "company": "AT&T",
  "meta": {
    "company": "AT&T",
    "title": "AT&T Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/at-t-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2050,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "service:left",
        "revenue:left",
        "revenue:right",
        "operating_profit:right",
        "operating_expenses:right",
        "net_profit:left"
      ]
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#0099dc",
        "label": "#0099dc"
      },
      "hub": {
        "node": "#0099dc",
        "label": "#0099dc"
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
      "source": "#85cae8",
      "hub": "#85cae8",
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
  "rasterAnnotations": [
    {
      "key": "at-t-company-logo",
      "href": "data/assets/raster-annotations/at-t/company-logo.png",
      "x": 1100,
      "y": 260,
      "width": 469,
      "height": 191
    }
  ],
  "annotationsSvg": "<g><rect x=\"53\" y=\"1187\" width=\"351\" height=\"151\" rx=\"30\" fill=\"#0099dc\"/><text x=\"228.5\" y=\"1241\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Postpaid Phones</text><text data-operating-metric=\"phones\" x=\"108\" y=\"1278\" font-size=\"28\" fill=\"#fff\">75.3M</text><text x=\"204\" y=\"1278\" font-size=\"28\" fill=\"#fff\">Subscribers</text><text x=\"121\" y=\"1311\" font-size=\"22\" fill=\"#fff\">Net Adds</text><text data-operating-metric=\"phones_adds\" x=\"216\" y=\"1311\" font-size=\"22\" fill=\"#fff\">+379K</text><text x=\"293\" y=\"1311\" font-size=\"22\" fill=\"#fff\">Y/Y</text></g><g><rect x=\"416\" y=\"1187\" width=\"330\" height=\"151\" rx=\"30\" fill=\"#0099dc\"/><text x=\"581\" y=\"1241\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">AT&T Fiber</text><text data-operating-metric=\"fiber\" x=\"471\" y=\"1278\" font-size=\"28\" fill=\"#fff\">12.6M</text><text x=\"567\" y=\"1278\" font-size=\"28\" fill=\"#fff\">Subscribers</text><text x=\"484\" y=\"1311\" font-size=\"22\" fill=\"#fff\">Net Adds</text><text data-operating-metric=\"fiber_adds\" x=\"579\" y=\"1311\" font-size=\"22\" fill=\"#fff\">+416K</text><text x=\"656\" y=\"1311\" font-size=\"22\" fill=\"#fff\">Y/Y</text></g>",
  "layout": {
    "scale": 1,
    "nodes": {
      "wireless_services": {
        "x": 401,
        "y": 321,
        "width": 72,
        "height": 208
      },
      "advanced_home_internet": {
        "x": 401,
        "y": 640,
        "width": 72,
        "height": 33
      },
      "business_fiber": {
        "x": 401,
        "y": 786,
        "width": 72,
        "height": 21
      },
      "business_transitional": {
        "x": 401,
        "y": 917,
        "width": 72,
        "height": 11
      },
      "other": {
        "x": 401,
        "y": 1031,
        "width": 72,
        "height": 18
      },
      "service": {
        "x": 869,
        "y": 527,
        "width": 71,
        "height": 296
      },
      "equipment": {
        "x": 869,
        "y": 1089,
        "width": 71,
        "height": 67
      },
      "revenue": {
        "x": 1336,
        "y": 627,
        "width": 71,
        "height": 364
      },
      "operating_profit": {
        "x": 1803,
        "y": 474,
        "width": 72,
        "height": 45
      },
      "operating_expenses": {
        "x": 1803,
        "y": 781,
        "width": 72,
        "height": 317
      },
      "other_income": {
        "x": 2159,
        "y": 397,
        "width": 70,
        "height": 4
      },
      "net_profit": {
        "x": 2270,
        "y": 343,
        "width": 72,
        "height": 14
      },
      "interest": {
        "x": 2270,
        "y": 597,
        "width": 72,
        "height": 22
      },
      "tax": {
        "x": 2270,
        "y": 702,
        "width": 72,
        "height": 15
      },
      "sga": {
        "x": 2270,
        "y": 1038,
        "width": 72,
        "height": 83
      },
      "other_cost_of_revenue": {
        "x": 2270,
        "y": 872,
        "width": 72,
        "height": 109
      },
      "equipment_cost": {
        "x": 2270,
        "y": 1179,
        "width": 72,
        "height": 68
      },
      "depreciation_amortization": {
        "x": 2270,
        "y": 1307,
        "width": 72,
        "height": 55
      }
    },
    "labels": {
      "wireless_services": {
        "blocks": [
          {
            "x": 438,
            "top": 226,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 205,
            "top": 400.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Wireless services",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              }
            ]
          }
        ]
      },
      "advanced_home_internet": {
        "blocks": [
          {
            "x": 438,
            "top": 545,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+23% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 205,
            "top": 609,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Advanced home",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              },
              {
                "text": "Internet",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              }
            ]
          }
        ]
      },
      "business_fiber": {
        "blocks": [
          {
            "x": 438,
            "top": 691,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+62% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 205,
            "top": 774,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Business fiber",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              }
            ]
          }
        ]
      },
      "business_transitional": {
        "blocks": [
          {
            "x": 438,
            "top": 822,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+66% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 205,
            "top": 877,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Business",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              },
              {
                "text": "transitional",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 438,
            "top": 936,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "(55%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 205,
            "top": 1015.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 898,
            "top": 376,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Service",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+4% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "equipment": {
        "blocks": [
          {
            "x": 897,
            "top": 939,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Equipment",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+12% Y/Y",
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
            "x": 1368,
            "top": 479,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#0099dc"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0099dc"
              },
              {
                "text": "+5% Y/Y",
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
            "x": 1840,
            "top": 285,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "(6pp) Y/Y",
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
            "x": 1843,
            "top": 1117,
            "anchor": "middle",
            "lineGap": 9,
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
                "size": 36,
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
            "x": 2194,
            "top": 416,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other income",
                "size": 32,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 32,
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
            "x": 2494,
            "top": 294,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "4% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(27pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2494,
            "top": 567,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
                "size": 32,
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
      "tax": {
        "blocks": [
          {
            "x": 2494,
            "top": 673,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
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
      "sga": {
        "blocks": [
          {
            "x": 2494,
            "top": 1042,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 32,
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
      "other_cost_of_revenue": {
        "blocks": [
          {
            "x": 2494,
            "top": 868,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other cost",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "of revenue",
                "size": 32,
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
      "equipment_cost": {
        "blocks": [
          {
            "x": 2494,
            "top": 1177,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Equipment",
                "size": 32,
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
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2494,
            "top": 1275,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Amortization",
                "size": 32,
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
  "nodes": [
    {
      "id": "wireless_services",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Wireless services",
      "value": 18.6,
      "valueText": "$18.6B",
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "advanced_home_internet",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Advanced home",
        "Internet"
      ],
      "value": 3,
      "valueText": "$3.0B",
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "business_fiber",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Business fiber",
      "value": 2,
      "valueText": "$2.0B",
      "notes": [
        "+62% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "business_transitional",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Business",
        "transitional"
      ],
      "value": 1,
      "valueText": "$1.0B",
      "notes": [
        "+66% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "other",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Other",
      "value": 1.7,
      "valueText": "$1.7B",
      "notes": [
        "(55%) Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "service",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Service",
      "value": 26.3,
      "valueText": "$26.3B",
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "equipment",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Equipment",
      "value": 6,
      "valueText": "$6.0B",
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 32.3,
      "valueText": "$32.3B",
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#0099dc",
      "labelColor": "#0099dc",
      "linkTint": "#85cae8"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 4.1,
      "valueText": "$4.1B",
      "notes": [
        "14% margin",
        "(6pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 28.2,
      "valueText": "($28.2B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other income",
      "value": 0.6,
      "valueText": "$0.6B",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 1,
      "type": "profit",
      "label": "Net profit",
      "value": 1.3,
      "valueText": "$1.3B",
      "notes": [
        "4% margin",
        "(27pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "interest",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Interest",
      "value": 2,
      "valueText": "($2.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Tax",
      "value": 1.4,
      "valueText": "($1.4B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sga",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "SG&A",
      "value": 7.4,
      "valueText": "($7.4B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_cost_of_revenue",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": [
        "Other cost",
        "of revenue"
      ],
      "value": 9.7,
      "valueText": "($9.7B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "equipment_cost",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Equipment",
      "value": 6.1,
      "valueText": "($6.1B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "depreciation_amortization",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": [
        "Depreciation &",
        "Amortization"
      ],
      "value": 5,
      "valueText": "($5.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "wireless_services",
      "target": "service",
      "value": 18.6,
      "sourceWidth": 208,
      "targetWidth": 209,
      "y0": 425,
      "y1": 631.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cae8"
    },
    {
      "source": "advanced_home_internet",
      "target": "service",
      "value": 3,
      "sourceWidth": 33,
      "targetWidth": 34,
      "y0": 656.5,
      "y1": 753,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cae8"
    },
    {
      "source": "business_fiber",
      "target": "service",
      "value": 2,
      "sourceWidth": 21,
      "targetWidth": 22,
      "y0": 796.5,
      "y1": 781,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85cae8"
    },
    {
      "source": "business_transitional",
      "target": "service",
      "value": 1,
      "sourceWidth": 11,
      "targetWidth": 12,
      "y0": 922.5,
      "y1": 798,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85cae8"
    },
    {
      "source": "other",
      "target": "service",
      "value": 1.7,
      "sourceWidth": 18,
      "targetWidth": 19,
      "y0": 1040,
      "y1": 813.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#85cae8"
    },
    {
      "source": "service",
      "target": "revenue",
      "value": 26.3,
      "sourceWidth": 296,
      "targetWidth": 297,
      "y0": 675,
      "y1": 775.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cae8"
    },
    {
      "source": "equipment",
      "target": "revenue",
      "value": 6,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 1122.5,
      "y1": 957.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cae8"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 4.1,
      "sourceWidth": 46,
      "targetWidth": 45,
      "y0": 650,
      "y1": 496.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 28.2,
      "sourceWidth": 318,
      "targetWidth": 317,
      "y0": 832,
      "y1": 939.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.7,
      "sourceWidth": 8,
      "targetWidth": 10,
      "y0": 478,
      "y1": 348,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 2,
      "sourceWidth": 22,
      "targetWidth": 22,
      "y0": 493,
      "y1": 608,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.4,
      "sourceWidth": 15,
      "targetWidth": 15,
      "y0": 511.5,
      "y1": 709.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.6,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 399,
      "y1": 355,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "other_cost_of_revenue",
      "value": 9.7,
      "sourceWidth": 108,
      "targetWidth": 109,
      "y0": 835,
      "y1": 926.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 7.4,
      "sourceWidth": 84,
      "targetWidth": 83,
      "y0": 931,
      "y1": 1079.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "equipment_cost",
      "value": 6.1,
      "sourceWidth": 68,
      "targetWidth": 68,
      "y0": 1007,
      "y1": 1213,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 5,
      "sourceWidth": 57,
      "targetWidth": 55,
      "y0": 1069.5,
      "y1": 1334.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "AT&T · 2026 财年第三季度",
      "meta": {
        "title": "AT&T 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "",
        "titleTextLength": 1900
      },
      "nodes": {
        "wireless_services": {
          "label": "无线服务",
          "notes": [
            "同比 +5%"
          ]
        },
        "advanced_home_internet": {
          "label": [
            "高级家庭",
            "互联网"
          ],
          "notes": [
            "同比 +23%"
          ]
        },
        "business_fiber": {
          "label": "企业光纤",
          "notes": [
            "同比 +62%"
          ]
        },
        "business_transitional": {
          "label": [
            "企业",
            "过渡业务"
          ],
          "notes": [
            "同比 +66%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 (55%)"
          ]
        },
        "service": {
          "label": "服务",
          "notes": [
            "同比 +4%"
          ]
        },
        "equipment": {
          "label": "设备",
          "notes": [
            "同比 +12%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 (6 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "other_income": {
          "label": "其他收入"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 (27 个百分点)"
          ]
        },
        "interest": {
          "label": "利息"
        },
        "tax": {
          "label": "税费"
        },
        "sga": {
          "label": "销售、一般及管理费用"
        },
        "other_cost_of_revenue": {
          "label": [
            "其他收入",
            "成本"
          ]
        },
        "equipment_cost": {
          "label": "设备"
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ]
        }
      },
      "layout": {
        "labels": {
          "wireless_services": {
            "blocks": [
              {
                "x": 438,
                "top": 226,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 205,
                "top": 400.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "无线服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  }
                ]
              }
            ]
          },
          "advanced_home_internet": {
            "blocks": [
              {
                "x": 438,
                "top": 545,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 205,
                "top": 609,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "高级家庭",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  },
                  {
                    "text": "互联网",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  }
                ]
              }
            ]
          },
          "business_fiber": {
            "blocks": [
              {
                "x": 438,
                "top": 691,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +62%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 205,
                "top": 774,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "企业光纤",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  }
                ]
              }
            ]
          },
          "business_transitional": {
            "blocks": [
              {
                "x": 438,
                "top": 822,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +66%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 205,
                "top": 877,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "企业",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  },
                  {
                    "text": "过渡业务",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 438,
                "top": 936,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 (55%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 205,
                "top": 1015.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 898,
                "top": 376,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "equipment": {
            "blocks": [
              {
                "x": 897,
                "top": 939,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "设备",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +12%",
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
                "x": 1368,
                "top": 479,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#0099dc"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0099dc"
                  },
                  {
                    "text": "同比 +5%",
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
                "x": 1840,
                "top": 285,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 (6 个百分点)",
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
                "x": 1843,
                "top": 1117,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
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
                    "size": 36,
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
                "x": 2194,
                "top": 416,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 32,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 32,
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
                "x": 2494,
                "top": 294,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "利润率 4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (27 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2494,
                "top": 567,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息",
                    "size": 32,
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
          "tax": {
            "blocks": [
              {
                "x": 2494,
                "top": 673,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
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
          "sga": {
            "blocks": [
              {
                "x": 2505,
                "top": 1042,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及管理费用",
                    "size": 30,
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
          "other_cost_of_revenue": {
            "blocks": [
              {
                "x": 2494,
                "top": 868,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 32,
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
          "equipment_cost": {
            "blocks": [
              {
                "x": 2494,
                "top": 1177,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "设备",
                    "size": 32,
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2494,
                "top": 1275,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "摊销",
                    "size": 32,
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
      "annotationsSvg": "<g><rect x=\"53\" y=\"1187\" width=\"351\" height=\"151\" rx=\"30\" fill=\"#0099dc\"/><text x=\"228.5\" y=\"1241\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">后付费手机</text><text data-operating-metric=\"phones\" x=\"108\" y=\"1278\" font-size=\"28\" fill=\"#fff\">75.3M</text><text x=\"204\" y=\"1278\" font-size=\"28\" fill=\"#fff\">用户</text><text x=\"121\" y=\"1311\" font-size=\"22\" fill=\"#fff\">净增</text><text data-operating-metric=\"phones_adds\" x=\"216\" y=\"1311\" font-size=\"22\" fill=\"#fff\">+379K</text><text x=\"293\" y=\"1311\" font-size=\"22\" fill=\"#fff\">同比</text></g><g><rect x=\"416\" y=\"1187\" width=\"330\" height=\"151\" rx=\"30\" fill=\"#0099dc\"/><text x=\"581\" y=\"1241\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">AT&T 光纤</text><text data-operating-metric=\"fiber\" x=\"471\" y=\"1278\" font-size=\"28\" fill=\"#fff\">12.6M</text><text x=\"567\" y=\"1278\" font-size=\"28\" fill=\"#fff\">用户</text><text x=\"484\" y=\"1311\" font-size=\"22\" fill=\"#fff\">净增</text><text data-operating-metric=\"fiber_adds\" x=\"579\" y=\"1311\" font-size=\"22\" fill=\"#fff\">+416K</text><text x=\"656\" y=\"1311\" font-size=\"22\" fill=\"#fff\">同比</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "phones",
      "value": "75300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "75.3M"
    },
    {
      "id": "phones_adds",
      "value": "379000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "+379K"
    },
    {
      "id": "fiber",
      "value": "12600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "12.6M"
    },
    {
      "id": "fiber_adds",
      "value": "416000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "+416K"
    }
  ]
});
