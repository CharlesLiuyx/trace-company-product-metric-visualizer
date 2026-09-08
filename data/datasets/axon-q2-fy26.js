window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "axon-q2-fy26",
  "name": "Axon · Q2 FY26",
  "company": "Axon",
  "meta": {
    "company": "Axon",
    "title": "AXON Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/axon-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 2100,
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
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
      "source": "#000000",
      "hub": "#000000",
      "profit": "#2ca02c",
      "cost": "#cc0000"
    },
    "linkOpacity": 0.45,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    }
  },
  "rasterAnnotations": [
    {
      "key": "axon-business-personal-sensors-taser-cluster-q4-fy25",
      "href": "data/assets/raster-annotations/axon/business-personal-sensors-taser-cluster-q4-fy25.png",
      "x": 65,
      "y": 471.5,
      "width": 330,
      "height": 128,
      "pairedNode": "taser"
    },
    {
      "key": "axon-company-mark-q4-fy25",
      "href": "data/assets/raster-annotations/axon/company-mark-q4-fy25.png",
      "x": 1098,
      "y": 306,
      "width": 219,
      "height": 193
    },
    {
      "key": "axon-business-platform-solutions-evidence-wordmark-q4-fy25",
      "href": "data/assets/raster-annotations/axon/business-platform-solutions-evidence-wordmark-q4-fy25.png",
      "x": 420,
      "y": 968,
      "width": 340,
      "height": 29
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "taser": {
        "x": 427,
        "y": 484,
        "width": 73,
        "height": 103
      },
      "personal_sensors": {
        "x": 427,
        "y": 693,
        "width": 73,
        "height": 38
      },
      "platform_solutions": {
        "x": 427,
        "y": 839,
        "width": 73,
        "height": 59
      },
      "connected_devices": {
        "x": 801,
        "y": 588,
        "width": 72,
        "height": 200
      },
      "software_services": {
        "x": 801,
        "y": 981,
        "width": 72,
        "height": 156
      },
      "revenue": {
        "x": 1175,
        "y": 684,
        "width": 72,
        "height": 355
      },
      "gross_profit": {
        "x": 1548,
        "y": 590,
        "width": 73,
        "height": 216
      },
      "cost_of_revenue": {
        "x": 1548,
        "y": 995,
        "width": 73,
        "height": 140
      },
      "operating_profit": {
        "x": 1922,
        "y": 514,
        "width": 73,
        "height": 18
      },
      "operating_expenses": {
        "x": 1922,
        "y": 693,
        "width": 73,
        "height": 197
      },
      "products": {
        "x": 1772,
        "y": 1081,
        "width": 72,
        "height": 96
      },
      "services": {
        "x": 1772,
        "y": 1248,
        "width": 72,
        "height": 45
      },
      "net_profit": {
        "x": 2295,
        "y": 404,
        "width": 73,
        "height": 12
      },
      "other": {
        "x": 2295,
        "y": 620,
        "width": 73,
        "height": 6
      },
      "tax": {
        "x": 2295,
        "y": 727,
        "width": 73,
        "height": 1
      },
      "sga": {
        "x": 2295,
        "y": 829,
        "width": 73,
        "height": 115
      },
      "rnd": {
        "x": 2295,
        "y": 1069,
        "width": 73,
        "height": 82
      }
    },
    "labels": {
      "taser": {
        "blocks": [
          {
            "x": 466.5,
            "top": 391,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "personal_sensors": {
        "blocks": [
          {
            "x": 464.5,
            "top": 600,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 224,
            "top": 687.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Personal Sensors",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 464.5,
            "top": 745,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+123% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 285.5,
            "top": 823,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Plateform",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "connected_devices": {
        "blocks": [
          {
            "x": 836,
            "top": 384,
            "anchor": "middle",
            "lines": [
              {
                "text": "Connected",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 836,
            "top": 437,
            "anchor": "middle",
            "lines": [
              {
                "text": "Devices",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 836,
            "top": 490,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 836,
            "top": 545,
            "anchor": "middle",
            "lines": [
              {
                "text": "+35% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "software_services": {
        "blocks": [
          {
            "x": 590,
            "top": 1010,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Software & Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
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
            "x": 1211,
            "top": 540,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+35% Y/Y",
                "size": 29,
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
            "x": 1592,
            "top": 408,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "60% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
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
            "x": 1584.5,
            "top": 1148,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1964.5,
            "top": 330,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2485.5,
            "top": 586,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2486.5,
            "top": 356,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "3% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1966.5,
            "top": 903,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2485.5,
            "top": 821,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "32% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
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
            "x": 2485.5,
            "top": 1076,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "products": {
        "blocks": [
          {
            "x": 1966,
            "top": 1078,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Products",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "52% gross margin",
                "size": 29,
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
            "x": 1965.5,
            "top": 1238,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Services",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "71% gross margin",
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
            "x": 2485.5,
            "top": 693,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "taser",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "TASER",
      "value": 261,
      "notes": [
        "+21% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#000000"
    },
    {
      "id": "personal_sensors",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Personal Sensors",
      "value": 95,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#000000"
    },
    {
      "id": "platform_solutions",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Plateform",
        "Solutions"
      ],
      "value": 150,
      "notes": [
        "+123% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#000000"
    },
    {
      "id": "connected_devices",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": [
        "Connected",
        "Devices"
      ],
      "value": 507,
      "notes": [
        "+35% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#000000"
    },
    {
      "id": "software_services",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Software & Services",
      "value": 398,
      "notes": [
        "+36% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#000000"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 904,
      "notes": [
        "+35% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#000000"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 546,
      "notes": [
        "60% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#2ca02c"
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 358,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000",
      "notes": []
    },
    {
      "id": "products",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Products",
      "value": 244,
      "notes": [
        "52% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000"
    },
    {
      "id": "services",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Services",
      "value": 114,
      "notes": [
        "71% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000"
    },
    {
      "id": "operating_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 47,
      "notes": [
        "5% margin",
        "+5pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#2ca02c"
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 500,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000",
      "notes": []
    },
    {
      "id": "other",
      "col": 7,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 7,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 29,
      "notes": [
        "3% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#2ca02c"
    },
    {
      "id": "sga",
      "col": 7,
      "order": 1,
      "type": "cost",
      "label": "SG&A",
      "value": 291,
      "notes": [
        "32% of revenue",
        "(4pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000"
    },
    {
      "id": "rnd",
      "col": 7,
      "order": 2,
      "type": "cost",
      "label": "R&D",
      "value": 209,
      "notes": [
        "23% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000"
    },
    {
      "id": "tax",
      "col": 7,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 3,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#cc0000"
    }
  ],
  "links": [
    {
      "source": "taser",
      "target": "connected_devices",
      "value": 261,
      "y0": 535.5,
      "y1": 639.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#000000",
      "width": 103
    },
    {
      "source": "personal_sensors",
      "target": "connected_devices",
      "value": 95,
      "y0": 712,
      "y1": 710,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#000000",
      "width": 38
    },
    {
      "source": "platform_solutions",
      "target": "connected_devices",
      "value": 150,
      "y0": 868.5,
      "y1": 758.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#000000",
      "width": 59
    },
    {
      "source": "connected_devices",
      "target": "revenue",
      "value": 507,
      "y0": 688,
      "y1": 784,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#000000",
      "width": 200
    },
    {
      "source": "software_services",
      "target": "revenue",
      "value": 398,
      "y0": 1059,
      "y1": 961.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#000000",
      "width": 155
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 546,
      "y0": 791.5,
      "y1": 698,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2ca02c",
      "width": 215
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 358,
      "y0": 969,
      "y1": 1065,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 140
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 47,
      "y0": 599,
      "y1": 523,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2ca02c",
      "width": 18
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 500,
      "y0": 707,
      "y1": 791.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 197
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 29,
      "y0": 519.5,
      "y1": 410,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2ca02c",
      "width": 11
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 14,
      "y0": 528,
      "y1": 623,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 6
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 3,
      "y0": 531.5,
      "y1": 727.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 291,
      "y0": 750.5,
      "y1": 886.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 115
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 209,
      "y0": 849,
      "y1": 1110,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 82
    },
    {
      "source": "cost_of_revenue",
      "target": "products",
      "value": 244,
      "y0": 1042.5,
      "y1": 1129,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 95
    },
    {
      "source": "cost_of_revenue",
      "target": "services",
      "value": 114,
      "y0": 1112.5,
      "y1": 1270.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 45
    }
  ],
  "i18n": {
    "zh": {
      "name": "Axon · 2026 财年第二季度",
      "meta": {
        "title": "Axon 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 108,
        "titleTextLength": 1670
      },
      "nodes": {
        "taser": {
          "label": "TASER",
          "notes": [
            "同比 +21%"
          ]
        },
        "personal_sensors": {
          "label": "个人传感器",
          "notes": [
            "同比 +3%"
          ]
        },
        "platform_solutions": {
          "label": "平台解决方案",
          "notes": [
            "同比 +123%"
          ]
        },
        "connected_devices": {
          "label": "联网设备",
          "notes": [
            "同比 +35%"
          ]
        },
        "software_services": {
          "label": "软件与服务",
          "notes": [
            "同比 +36%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +35%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 60%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "products": {
          "label": "产品",
          "notes": [
            "毛利率 52%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "毛利率 71%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 5%",
            "同比 +5 个百分点"
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
        "tax": {
          "label": "税费",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 +3 个百分点"
          ]
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": [
            "占收入 32%",
            "同比 (4 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 23%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "taser": {
            "blocks": [
              {
                "x": 466.5,
                "top": 391,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "personal_sensors": {
            "blocks": [
              {
                "x": 464.5,
                "top": 600,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 224,
                "top": 688,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "个人传感器",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 464.5,
                "top": 745,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +123%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 285.5,
                "top": 847,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "平台解决方案",
                    "size": 36,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "connected_devices": {
            "blocks": [
              {
                "x": 831,
                "top": 390,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "联网设备",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "software_services": {
            "blocks": [
              {
                "x": 590,
                "top": 1010,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "软件与服务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
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
                "x": 1211,
                "top": 540,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 29,
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
                "x": 1592,
                "top": 408,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 60%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
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
                "x": 1584.5,
                "top": 1148,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "products": {
            "blocks": [
              {
                "x": 1966,
                "top": 1078,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 52%",
                    "size": 29,
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
                "x": 1965.5,
                "top": 1238,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 71%",
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
                "x": 1964.5,
                "top": 330,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
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
                "x": 1966.5,
                "top": 903,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2485.5,
                "top": 586,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2485.5,
                "top": 693,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2486.5,
                "top": 356,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2485.5,
                "top": 821,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 32%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 29,
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
                "x": 2485.5,
                "top": 1076,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
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
