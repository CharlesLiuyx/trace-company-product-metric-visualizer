/* MercadoLibre Q2 FY26 Sankey View Adapter; geometry measured from the Q2 source. */
(function () {
  'use strict';
  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
  "key": "mercadolibre-q2-fy26",
  "name": "MercadoLibre Q2 FY26 Income Statement",
  "company": "MercadoLibre",
  "meta": {
    "company": "MercadoLibre",
    "title": "MercadoLibre Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/mercadolibre-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 197,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2460,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#696969",
    "noteColor": "#696969",
    "palette": {
      "source": {
        "node": "#edc949",
        "label": "#929000"
      },
      "hub": {
        "node": "#2b3780",
        "label": "#2b3780"
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
      "source": "#efdfa6",
      "hub": "#2b3780",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    }
  },
  "annotationsSvg": "\n      <g font-family=\"Noto Sans,Arial,sans-serif\" font-weight=\"400\" fill=\"#696969\">\n        <text x=\"285\" y=\"535\" text-anchor=\"middle\" font-size=\"24\">Intermediation services,</text>\n        <text x=\"285\" y=\"565\" text-anchor=\"middle\" font-size=\"24\">advertising sales</text>\n        <text x=\"318\" y=\"766\" text-anchor=\"middle\" font-size=\"24\">Product sales</text>\n        <text x=\"318\" y=\"796\" text-anchor=\"middle\" font-size=\"24\">+ shipping fees</text>\n        <text x=\"300\" y=\"995\" text-anchor=\"middle\" font-size=\"23\">Payment solution, installments, credit</text>\n        <text x=\"300\" y=\"1025\" text-anchor=\"middle\" font-size=\"23\">&amp; debit card fees, insurtech fees</text>\n        <text x=\"286\" y=\"1292\" text-anchor=\"middle\" font-size=\"24\">Interest earned on loans</text>\n        <text x=\"286\" y=\"1322\" text-anchor=\"middle\" font-size=\"24\">+ credit card transactions</text>\n      </g>",
  "rasterAnnotations": [
    {
      "key": "corporate-handshake",
      "href": "data/assets/raster-annotations/mercadolibre/q2-fy26/corporate-handshake.png",
      "x": 1144,
      "y": 242,
      "width": 256,
      "height": 176
    },
    {
      "key": "commerce-brand",
      "href": "data/assets/raster-annotations/mercadolibre/q2-fy26/commerce-brand.png",
      "x": 64,
      "y": 394,
      "width": 412,
      "height": 110
    },
    {
      "key": "ads-brand",
      "href": "data/assets/raster-annotations/mercadolibre/q2-fy26/ads-brand.png",
      "x": 230,
      "y": 577,
      "width": 170,
      "height": 56
    },
    {
      "key": "envios-brand",
      "href": "data/assets/raster-annotations/mercadolibre/q2-fy26/envios-brand.png",
      "x": 212,
      "y": 666,
      "width": 290,
      "height": 80
    },
    {
      "key": "pago-brand",
      "href": "data/assets/raster-annotations/mercadolibre/q2-fy26/pago-brand.png",
      "x": 60,
      "y": 854,
      "width": 445,
      "height": 114
    },
    {
      "key": "credito-brand",
      "href": "data/assets/raster-annotations/mercadolibre/q2-fy26/credito-brand.png",
      "x": 60,
      "y": 1154,
      "width": 438,
      "height": 120
    }
  ],
  "layout": {
    "scale": 34,
    "nodes": {
      "marketplace": {
        "x": 533,
        "y": 450,
        "width": 67,
        "height": 146
      },
      "shipping": {
        "x": 533,
        "y": 717,
        "width": 67,
        "height": 47
      },
      "payments": {
        "x": 533,
        "y": 894,
        "width": 67,
        "height": 71
      },
      "pos": {
        "x": 533,
        "y": 1076,
        "width": 67,
        "height": 2
      },
      "credit": {
        "x": 533,
        "y": 1174,
        "width": 67,
        "height": 75
      },
      "commerce": {
        "x": 886,
        "y": 548,
        "width": 66,
        "height": 196
      },
      "fintech": {
        "x": 886,
        "y": 935,
        "width": 66,
        "height": 150
      },
      "revenue": {
        "x": 1239,
        "y": 638,
        "width": 66,
        "height": 347
      },
      "gross_profit": {
        "x": 1591,
        "y": 554,
        "width": 67,
        "height": 140
      },
      "cost_of_revenue": {
        "x": 1591,
        "y": 879,
        "width": 67,
        "height": 205
      },
      "operating_profit": {
        "x": 1942,
        "y": 470,
        "width": 66,
        "height": 21
      },
      "operating_expenses": {
        "x": 1944,
        "y": 643,
        "width": 66,
        "height": 117
      },
      "net_profit": {
        "x": 2296,
        "y": 373,
        "width": 67,
        "height": 14
      },
      "tax": {
        "x": 2296,
        "y": 531,
        "width": 67,
        "height": 3
      },
      "other": {
        "x": 2296,
        "y": 605,
        "width": 67,
        "height": 1
      },
      "sm": {
        "x": 2296,
        "y": 700,
        "width": 67,
        "height": 43
      },
      "product_development": {
        "x": 2296,
        "y": 895,
        "width": 67,
        "height": 37
      },
      "ga": {
        "x": 2296,
        "y": 1085,
        "width": 67,
        "height": 23
      },
      "provision_doubtful": {
        "x": 2296,
        "y": 1276,
        "width": 67,
        "height": 10
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 566,
            "top": 359,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#929000"
              },
              {
                "text": "+42% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "shipping": {
        "blocks": [
          {
            "x": 566,
            "top": 625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#80bd01"
              },
              {
                "text": "+80% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "payments": {
        "blocks": [
          {
            "x": 566,
            "top": 801,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#009ee0"
              },
              {
                "text": "+31% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "pos": {
        "blocks": [
          {
            "x": 566,
            "top": 986,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#009ee0"
              },
              {
                "text": "+7% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          },
          {
            "x": 375,
            "top": 1071,
            "anchor": "middle",
            "semanticRole": "source-positioned-name",
            "lines": [
              {
                "text": "Point of sales devices",
                "size": 24,
                "weight": 400,
                "color": "#696969",
                "font": "Noto Sans,Arial,sans-serif"
              }
            ]
          }
        ]
      },
      "credit": {
        "blocks": [
          {
            "x": 566,
            "top": 1087,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00c8a1"
              },
              {
                "text": "+72% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "commerce": {
        "blocks": [
          {
            "x": 914,
            "top": 404,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Commerce",
                "size": 40,
                "weight": 800,
                "color": "#929000"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#929000"
              },
              {
                "text": "+50% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "fintech": {
        "blocks": [
          {
            "x": 921,
            "top": 1108,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Fintech",
                "size": 40,
                "weight": 800,
                "color": "#009ee0"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#009ee0"
              },
              {
                "text": "+49% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1290,
            "top": 494,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net Revenue",
                "size": 40,
                "weight": 800,
                "color": "#2b3780"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2b3780"
              },
              {
                "text": "+50% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1656,
            "top": 368,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "41% margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1623,
            "top": 1106,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37,
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
            "x": 1984,
            "top": 288,
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
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1974,
            "top": 781,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
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
            "x": 2388,
            "top": 315,
            "anchor": "start",
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
                "text": "5% margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2432,
            "top": 504,
            "anchor": "start",
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
      "other": {
        "blocks": [
          {
            "x": 2435,
            "top": 593,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
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
      "sm": {
        "blocks": [
          {
            "x": 2404,
            "top": 700,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sales &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Marketing",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "product_development": {
        "blocks": [
          {
            "x": 2383,
            "top": 875,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Product",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Development",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
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
            "x": 2407,
            "top": 1041,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "General &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Admin",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "provision_doubtful": {
        "blocks": [
          {
            "x": 2380,
            "top": 1194,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Provision",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "doubtful",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "Interest margin",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "after losses 21%",
                "size": 29,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "marketplace",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Intermediation services and advertising sales",
      "value": 4.3,
      "valueText": "$4.3B",
      "color": "#edc949",
      "labelColor": "#929000",
      "linkTint": "#efdfa6",
      "notes": [
        "+42% Y/Y"
      ]
    },
    {
      "id": "shipping",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Product sales and shipping fees",
      "value": 1.5,
      "valueText": "$1.5B",
      "color": "#80bd01",
      "labelColor": "#80bd01",
      "linkTint": "#bfd985",
      "notes": [
        "+80% Y/Y"
      ]
    },
    {
      "id": "payments",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Payment solution, installments, credit & debit card fees, insurtech fees",
      "value": 2.1,
      "valueText": "$2.1B",
      "color": "#009ee0",
      "labelColor": "#009ee0",
      "linkTint": "#85cbe9",
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "pos",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Point of sales devices",
      "value": 0.016,
      "valueText": "$16M",
      "color": "#009ee0",
      "labelColor": "#009ee0",
      "linkTint": "#85cbe9",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "credit",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Interest earned on loans and credit card transactions",
      "value": 2.3,
      "valueText": "$2.3B",
      "color": "#00c8a1",
      "labelColor": "#00c8a1",
      "linkTint": "#85dfcd",
      "notes": [
        "+72% Y/Y"
      ]
    },
    {
      "id": "commerce",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Commerce",
      "value": 5.8,
      "valueText": "$5.8B",
      "color": "#edc949",
      "labelColor": "#929000",
      "linkTint": "#efdfa6",
      "notes": [
        "+50% Y/Y"
      ]
    },
    {
      "id": "fintech",
      "col": 1,
      "order": 1,
      "type": "hub",
      "label": "Fintech",
      "value": 4.4,
      "valueText": "$4.4B",
      "color": "#009ee0",
      "labelColor": "#009ee0",
      "linkTint": "#85cbe9",
      "notes": [
        "+49% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Net Revenue",
      "value": 10.2,
      "valueText": "$10.2B",
      "color": "#2b3780",
      "labelColor": "#2b3780",
      "linkTint": "#2b3780",
      "notes": [
        "+50% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 4.2,
      "valueText": "$4.2B",
      "notes": [
        "41% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
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
      "value": 6,
      "valueText": "($6.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.7,
      "valueText": "$0.7B",
      "notes": [
        "7% margin",
        "(5pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 3.5,
      "valueText": "($3.5B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.5,
      "valueText": "$0.5B",
      "notes": [
        "5% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "valueText": "($0.1B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": [
        "Sales &",
        "Marketing"
      ],
      "value": 1.1,
      "valueText": "($1.1B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "product_development",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": [
        "Product",
        "Development"
      ],
      "value": 0.7,
      "valueText": "($0.7B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": [
        "General &",
        "Admin"
      ],
      "value": 0.3,
      "valueText": "($0.3B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "provision_doubtful",
      "col": 5,
      "order": 6,
      "type": "cost",
      "label": [
        "Provision",
        "doubtful"
      ],
      "value": 1.3,
      "valueText": "($1.3B)",
      "notes": [
        "Interest margin after losses 21%"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "commerce",
      "value": 4.3,
      "width": 146,
      "sourceWidth": 146,
      "targetWidth": 146,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#efdfa6"
    },
    {
      "source": "shipping",
      "target": "commerce",
      "value": 1.5,
      "width": 47,
      "sourceWidth": 47,
      "targetWidth": 50,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#bfd985"
    },
    {
      "source": "payments",
      "target": "fintech",
      "value": 2.1,
      "width": 71,
      "sourceWidth": 71,
      "targetWidth": 70,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cbe9"
    },
    {
      "source": "pos",
      "target": "fintech",
      "value": 0.016,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cbe9"
    },
    {
      "source": "credit",
      "target": "fintech",
      "value": 2.3,
      "width": 75,
      "sourceWidth": 75,
      "targetWidth": 79,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85dfcd"
    },
    {
      "source": "commerce",
      "target": "revenue",
      "value": 5.8,
      "width": 196,
      "sourceWidth": 196,
      "targetWidth": 196,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#efdfa6"
    },
    {
      "source": "fintech",
      "target": "revenue",
      "value": 4.4,
      "width": 150,
      "sourceWidth": 150,
      "targetWidth": 151,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cbe9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.2,
      "width": 140,
      "sourceWidth": 140,
      "targetWidth": 140,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 6,
      "width": 207,
      "sourceWidth": 207,
      "targetWidth": 205,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.7,
      "width": 21,
      "sourceWidth": 21,
      "targetWidth": 21,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.5,
      "width": 119,
      "sourceWidth": 119,
      "targetWidth": 117,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.5,
      "width": 14,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "width": 4,
      "sourceWidth": 4,
      "targetWidth": 3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "width": 3,
      "sourceWidth": 3,
      "targetWidth": 1,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1.1,
      "width": 43,
      "sourceWidth": 43,
      "targetWidth": 43,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product_development",
      "value": 0.7,
      "width": 37,
      "sourceWidth": 37,
      "targetWidth": 37,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "width": 23,
      "sourceWidth": 23,
      "targetWidth": 23,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "provision_doubtful",
      "value": 1.3,
      "width": 14,
      "sourceWidth": 14,
      "targetWidth": 10,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "美客多 · 2026 财年第二季度",
      "meta": {
        "title": "美客多 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 112,
        "titleTextLength": 1500
      },
      "annotationsSvg": "\n      <g font-family=\"Noto Sans,Arial,sans-serif\" font-weight=\"400\" fill=\"#696969\">\n        <text x=\"285\" y=\"535\" text-anchor=\"middle\" font-size=\"24\">撮合服务、</text>\n        <text x=\"285\" y=\"565\" text-anchor=\"middle\" font-size=\"24\">广告销售</text>\n        <text x=\"318\" y=\"766\" text-anchor=\"middle\" font-size=\"24\">商品销售</text>\n        <text x=\"318\" y=\"796\" text-anchor=\"middle\" font-size=\"24\">+ 配送费</text>\n        <text x=\"300\" y=\"995\" text-anchor=\"middle\" font-size=\"21\">支付解决方案、分期、信用卡</text>\n        <text x=\"300\" y=\"1025\" text-anchor=\"middle\" font-size=\"21\">及借记卡手续费、保险科技费</text>\n        <text x=\"286\" y=\"1292\" text-anchor=\"middle\" font-size=\"24\">贷款利息收入</text>\n        <text x=\"286\" y=\"1322\" text-anchor=\"middle\" font-size=\"24\">+ 信用卡交易</text>\n      </g>",
      "nodes": {
        "marketplace": {
          "label": "撮合服务与广告销售",
          "notes": [
            "同比 +42%"
          ]
        },
        "shipping": {
          "label": "商品销售与配送费",
          "notes": [
            "同比 +80%"
          ]
        },
        "payments": {
          "label": "支付解决方案、分期、信用卡及借记卡手续费、保险科技费",
          "notes": [
            "同比 +31%"
          ]
        },
        "pos": {
          "label": "销售点设备",
          "notes": [
            "同比 +7%"
          ]
        },
        "credit": {
          "label": "贷款与信用卡交易利息收入",
          "notes": [
            "同比 +72%"
          ]
        },
        "commerce": {
          "label": "电商",
          "notes": [
            "同比 +50%"
          ]
        },
        "fintech": {
          "label": "金融科技",
          "notes": [
            "同比 +49%"
          ]
        },
        "revenue": {
          "label": "净收入",
          "notes": [
            "同比 +50%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 41%",
            "同比 (4 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 (5 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 5%",
            "同比 (3 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        },
        "sm": {
          "label": "销售与营销"
        },
        "product_development": {
          "label": "产品开发"
        },
        "ga": {
          "label": "管理费用"
        },
        "provision_doubtful": {
          "label": "坏账准备",
          "notes": [
            "损失后利息利润率 21%"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 566,
                "top": 359,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#929000"
                  },
                  {
                    "text": "同比 +42%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "shipping": {
            "blocks": [
              {
                "x": 566,
                "top": 625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#80bd01"
                  },
                  {
                    "text": "同比 +80%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "payments": {
            "blocks": [
              {
                "x": 566,
                "top": 801,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#009ee0"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "pos": {
            "blocks": [
              {
                "x": 566,
                "top": 986,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#009ee0"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              },
              {
                "x": 375,
                "top": 1071,
                "anchor": "middle",
                "semanticRole": "source-positioned-name",
                "lines": [
                  {
                    "text": "销售点设备",
                    "size": 24,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "credit": {
            "blocks": [
              {
                "x": 566,
                "top": 1087,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00c8a1"
                  },
                  {
                    "text": "同比 +72%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "commerce": {
            "blocks": [
              {
                "x": 914,
                "top": 404,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "电商",
                    "size": 40,
                    "weight": 800,
                    "color": "#929000"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#929000"
                  },
                  {
                    "text": "同比 +50%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "fintech": {
            "blocks": [
              {
                "x": 921,
                "top": 1108,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "金融科技",
                    "size": 40,
                    "weight": 800,
                    "color": "#009ee0"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#009ee0"
                  },
                  {
                    "text": "同比 +49%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1290,
                "top": 494,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#2b3780"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2b3780"
                  },
                  {
                    "text": "同比 +50%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1656,
                "top": 368,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 41%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (4) 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1623,
                "top": 1106,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37,
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
                "x": 1984,
                "top": 288,
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
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (5) 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1974,
                "top": 781,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
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
                "x": 2388,
                "top": 315,
                "anchor": "start",
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
                    "text": "利润率 5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (3) 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2432,
                "top": 504,
                "anchor": "start",
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
          "other": {
            "blocks": [
              {
                "x": 2435,
                "top": 593,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
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
          "sm": {
            "blocks": [
              {
                "x": 2404,
                "top": 700,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "营销",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "product_development": {
            "blocks": [
              {
                "x": 2383,
                "top": 875,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
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
                "x": 2407,
                "top": 1041,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "provision_doubtful": {
            "blocks": [
              {
                "x": 2380,
                "top": 1194,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "坏账",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "准备",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "损失后利息",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "利润率 21%",
                    "size": 29,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}
);
})();
