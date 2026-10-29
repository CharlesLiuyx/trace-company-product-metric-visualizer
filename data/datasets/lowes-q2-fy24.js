window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lowes-q2-fy24",
  "name": "Lowe's · Q2 FY24",
  "company": "Lowe's",
  "meta": {
    "company": "Lowe's",
    "title": "Lowe’s Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/lowes-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "periodX": 1315,
    "periodY": 1318,
    "periodNoteY": 1360,
    "logoWidth": 445,
    "logoHeight": 205,
    "logoY": 240,
    "logoViewBox": "0 0 500 220",
    "logoSvg": "\n    <path d=\"M18 51H73L250 4L427 51H482V207H18Z\" fill=\"#004990\"/>\n    <path d=\"M61 51L250 0L439 51\" fill=\"none\" stroke=\"#004990\" stroke-width=\"13\" stroke-linejoin=\"round\"/>\n    <text x=\"250\" y=\"164\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"106\" font-weight=\"800\" letter-spacing=\"-7\" textLength=\"384\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#ffffff\">LOWE'S</text>\n    <text x=\"423\" y=\"105\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"17\" font-weight=\"700\" fill=\"#ffffff\">®</text>",
    "hidePeriodStamp": false,
    "logoX": 714
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#074f96",
        "label": "#074f96"
      },
      "hub": {
        "node": "#074f96",
        "label": "#074f96"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#dc0000",
        "label": "#9f1906"
      }
    },
    "linkTint": {
      "source": "#88a9c8",
      "hub": "#88a9c8",
      "profit": "#99cd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g class=\"sankey-interactive-annotation\" data-node=\"home_decor\"><text x=\"225\" y=\"540\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">Appliances, Décor, Flooring,</text><text x=\"225\" y=\"571\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">Kitchen &amp; Bath, and Paint</text></g><g class=\"sankey-interactive-annotation\" data-node=\"building_products\"><text x=\"225\" y=\"791\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">Electrical/Lighting, Lumber,</text><text x=\"225\" y=\"822\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">Millwork, and Plumbing</text></g><g class=\"sankey-interactive-annotation\" data-node=\"hardlines\"><text x=\"225\" y=\"1025\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">Hardware, Indoor Garden,</text><text x=\"225\" y=\"1056\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">Outdoor Garden, and Tools</text></g><g><rect x=\"33\" y=\"1233\" width=\"275\" height=\"149\" rx=\"31\" fill=\"#004990\"/><text x=\"170.5\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Comparable sales</text><text x=\"170.5\" y=\"1334\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">(5%) Y/Y</text></g><g><rect x=\"319\" y=\"1233\" width=\"275\" height=\"149\" rx=\"31\" fill=\"#004990\"/><text x=\"456.5\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Customer</text><text x=\"456.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">transactions</text><text x=\"456.5\" y=\"1356\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">(6%) Y/Y</text></g><g><rect x=\"606\" y=\"1233\" width=\"275\" height=\"149\" rx=\"31\" fill=\"#004990\"/><text x=\"743.5\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Average ticket</text><text x=\"743.5\" y=\"1334\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">+1% Y/Y</text></g></g>",
  "layout": {
    "scale": 13.65,
    "nodes": {
      "home_decor": {
        "x": 435,
        "y": 450,
        "width": 73,
        "height": 108
      },
      "building_products": {
        "x": 435,
        "y": 684,
        "width": 73,
        "height": 101
      },
      "hardlines": {
        "x": 435,
        "y": 924,
        "width": 73,
        "height": 94
      },
      "other": {
        "x": 435,
        "y": 1166,
        "width": 73,
        "height": 8
      },
      "revenue": {
        "x": 902,
        "y": 652,
        "width": 73,
        "height": 309
      },
      "gross_profit": {
        "x": 1371,
        "y": 545,
        "width": 73,
        "height": 104
      },
      "cost_of_sales": {
        "x": 1369,
        "y": 858,
        "width": 73,
        "height": 206
      },
      "operating_profit": {
        "x": 1842,
        "y": 446,
        "width": 73,
        "height": 46
      },
      "operating_expenses": {
        "x": 1842,
        "y": 730,
        "width": 73,
        "height": 59
      },
      "net_profit": {
        "x": 2303,
        "y": 346,
        "width": 73,
        "height": 32
      },
      "tax": {
        "x": 2303,
        "y": 599,
        "width": 73,
        "height": 10
      },
      "interest": {
        "x": 2303,
        "y": 715,
        "width": 73,
        "height": 5
      },
      "sga": {
        "x": 2303,
        "y": 883,
        "width": 73,
        "height": 55
      },
      "depreciation_amortization": {
        "x": 2296,
        "y": 1148,
        "width": 73,
        "height": 7
      }
    },
    "labels": {
      "home_decor": {
        "blocks": [
          {
            "x": 475,
            "top": 360,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 219,
            "top": 479.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Home Décor",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "building_products": {
        "blocks": [
          {
            "x": 475,
            "top": 590,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 219,
            "top": 710,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Building Products",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "hardlines": {
        "blocks": [
          {
            "x": 475,
            "top": 829,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 219,
            "top": 946.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Hardlines",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 475,
            "top": 1065,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 230,
            "top": 1145.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 938,
            "top": 510,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net Sales",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
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
            "x": 1407,
            "top": 360,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "33% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1405,
            "top": 1084,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1878,
            "top": 264,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "15% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1878,
            "top": 803,
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
      "net_profit": {
        "blocks": [
          {
            "x": 2498,
            "top": 311,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "10% margin",
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
      "tax": {
        "blocks": [
          {
            "x": 2498,
            "top": 565,
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
      },
      "interest": {
        "blocks": [
          {
            "x": 2498,
            "top": 687,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
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
      "sga": {
        "blocks": [
          {
            "x": 2498,
            "top": 879,
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
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2500,
            "top": 1089,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "amortization",
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
      "id": "home_decor",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Home Décor",
      "value": 8.2,
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#004990",
      "labelColor": "#074f96",
      "linkTint": "#88a9c8",
      "valueText": "$8.2B"
    },
    {
      "id": "building_products",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Building Products",
      "value": 7.7,
      "notes": [
        "(7%) Y/Y"
      ],
      "color": "#004990",
      "labelColor": "#074f96",
      "linkTint": "#88a9c8",
      "valueText": "$7.7B"
    },
    {
      "id": "hardlines",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Hardlines",
      "value": 7.1,
      "notes": [
        "(3%) Y/Y"
      ],
      "color": "#004990",
      "labelColor": "#074f96",
      "linkTint": "#88a9c8",
      "valueText": "$7.1B"
    },
    {
      "id": "other",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other",
      "value": 0.6,
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#004990",
      "labelColor": "#074f96",
      "linkTint": "#88a9c8",
      "valueText": "$0.6B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Net Sales",
      "value": 23.6,
      "notes": [
        "(5%) Y/Y"
      ],
      "color": "#004990",
      "labelColor": "#074f96",
      "linkTint": "#88a9c8",
      "valueText": "$23.6B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 7.9,
      "notes": [
        "33% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$7.9B"
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 15.7,
      "color": "#cc0000",
      "labelColor": "#9f1906",
      "linkTint": "#df8585",
      "valueText": "($15.7B)"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.4,
      "notes": [
        "15% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$3.4B"
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
      "value": 4.4,
      "color": "#cc0000",
      "labelColor": "#9f1906",
      "linkTint": "#df8585",
      "valueText": "($4.4B)"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 2.4,
      "notes": [
        "10% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$2.4B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#9f1906",
      "linkTint": "#df8585",
      "valueText": "($0.7B)"
    },
    {
      "id": "interest",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Interest",
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#9f1906",
      "linkTint": "#df8585",
      "valueText": "($0.3B)"
    },
    {
      "id": "sga",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 4,
      "color": "#cc0000",
      "labelColor": "#9f1906",
      "linkTint": "#df8585",
      "valueText": "($4.0B)"
    },
    {
      "id": "depreciation_amortization",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#9f1906",
      "linkTint": "#df8585",
      "valueText": "($0.4B)"
    }
  ],
  "links": [
    {
      "source": "home_decor",
      "target": "revenue",
      "value": 8.2,
      "sourceWidth": 108,
      "targetWidth": 108,
      "y0": 504,
      "y1": 706,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85a6c5"
    },
    {
      "source": "building_products",
      "target": "revenue",
      "value": 7.7,
      "sourceWidth": 101,
      "targetWidth": 101,
      "y0": 734.5,
      "y1": 810.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85a6c5"
    },
    {
      "source": "hardlines",
      "target": "revenue",
      "value": 7.1,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 971,
      "y1": 908,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85a6c5"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 8,
      "targetWidth": 6,
      "y0": 1170,
      "y1": 958,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85a6c5"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.9,
      "sourceWidth": 104,
      "targetWidth": 104,
      "y0": 704,
      "y1": 597,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 15.7,
      "sourceWidth": 205,
      "targetWidth": 206,
      "y0": 858.5,
      "y1": 961,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.4,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 568,
      "y1": 469,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.4,
      "sourceWidth": 58,
      "targetWidth": 59,
      "y0": 620,
      "y1": 759.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.4,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 462,
      "y1": 362,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 483,
      "y1": 604,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 5,
      "y0": 490,
      "y1": 717.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 4,
      "sourceWidth": 54,
      "targetWidth": 55,
      "y0": 757,
      "y1": 910.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.4,
      "sourceWidth": 5,
      "targetWidth": 7,
      "y0": 786.5,
      "y1": 1151.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "劳氏 · 2024 财年第二季度",
      "meta": {
        "title": "劳氏 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "titleSize": 108,
        "periodX": 1315
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g class=\"sankey-interactive-annotation\" data-node=\"home_decor\"><text x=\"225\" y=\"540\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">家电、装饰、地板、</text><text x=\"225\" y=\"571\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">厨卫及涂料</text></g><g class=\"sankey-interactive-annotation\" data-node=\"building_products\"><text x=\"225\" y=\"791\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">电气及照明、木材、</text><text x=\"225\" y=\"822\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">木制品及管道</text></g><g class=\"sankey-interactive-annotation\" data-node=\"hardlines\"><text x=\"225\" y=\"1025\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">五金、室内园艺、</text><text x=\"225\" y=\"1056\" text-anchor=\"middle\" font-size=\"24\" fill=\"#777777\">户外园艺及工具</text></g><g><rect x=\"33\" y=\"1233\" width=\"275\" height=\"149\" rx=\"31\" fill=\"#004990\"/><text x=\"170.5\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">可比销售额</text><text x=\"170.5\" y=\"1334\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">同比 (5%)</text></g><g><rect x=\"319\" y=\"1233\" width=\"275\" height=\"149\" rx=\"31\" fill=\"#004990\"/><text x=\"456.5\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">客户</text><text x=\"456.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">交易次数</text><text x=\"456.5\" y=\"1356\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">同比 (6%)</text></g><g><rect x=\"606\" y=\"1233\" width=\"275\" height=\"149\" rx=\"31\" fill=\"#004990\"/><text x=\"743.5\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">平均客单价</text><text x=\"743.5\" y=\"1334\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">同比 +1%</text></g></g>",
      "nodes": {
        "home_decor": {
          "label": "家居装饰",
          "notes": [
            "同比 (6%)"
          ]
        },
        "building_products": {
          "label": "建筑产品",
          "notes": [
            "同比 (7%)"
          ]
        },
        "hardlines": {
          "label": "耐用品",
          "notes": [
            "同比 (3%)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 (4%)"
          ]
        },
        "revenue": {
          "label": "净销售额",
          "notes": [
            "同比 (5%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 33%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 15%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "interest": {
          "label": "利息"
        },
        "sga": {
          "label": "销售、一般及行政费用"
        },
        "depreciation_amortization": {
          "label": "折旧及摊销"
        }
      },
      "layout": {
        "labels": {
          "home_decor": {
            "blocks": [
              {
                "x": 475,
                "top": 360,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 219,
                "top": 479.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "家居装饰",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "building_products": {
            "blocks": [
              {
                "x": 475,
                "top": 590,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 219,
                "top": 710,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "建筑产品",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "hardlines": {
            "blocks": [
              {
                "x": 475,
                "top": 829,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 219,
                "top": 946.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "耐用品",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 475,
                "top": 1065,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 230,
                "top": 1145.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 938,
                "top": 510,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净销售额",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
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
                "x": 1407,
                "top": 360,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 33%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1405,
                "top": 1084,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1878,
                "top": 264,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 15%",
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
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1878,
                "top": 803,
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
          "net_profit": {
            "blocks": [
              {
                "x": 2498,
                "top": 311,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 10%",
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
          },
          "tax": {
            "blocks": [
              {
                "x": 2498,
                "top": 565,
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
          "interest": {
            "blocks": [
              {
                "x": 2498,
                "top": 687,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息",
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
          "sga": {
            "blocks": [
              {
                "x": 2498,
                "top": 862,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 28,
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 28,
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2500,
                "top": 1089,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧及摊销",
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
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "lowes-home-decor-icons",
      "href": "data/assets/raster-annotations/lowes/home-decor.png",
      "x": 79,
      "y": 366,
      "width": 283,
      "height": 96
    },
    {
      "key": "lowes-building-products-icons",
      "href": "data/assets/raster-annotations/lowes/building-products.png",
      "x": 30,
      "y": 608,
      "width": 360,
      "height": 105
    },
    {
      "key": "lowes-hardlines-icons",
      "href": "data/assets/raster-annotations/lowes/hardlines.png",
      "x": 116,
      "y": 850,
      "width": 224,
      "height": 97
    }
  ]
});
