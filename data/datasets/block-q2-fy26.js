window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "block-q2-fy26",
  "name": "Block · Q2 FY26",
  "company": "Block",
  "meta": {
    "company": "Block",
    "title": "Block Q2 FY26 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/block-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 176,
    "titleSize": 110,
    "titleWeight": 800,
    "titleTextLength": 2060,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "labelWeight": 600,
    "valueWeight": 300,
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
      "source": "#858585",
      "hub": null,
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
      "key": "block-company-logo",
      "href": "data/assets/raster-annotations/block/company-logo-fy25.png",
      "x": 810,
      "y": 206,
      "width": 230,
      "height": 293
    },
    {
      "key": "block-commerce-enablement-icon",
      "href": "data/assets/raster-annotations/block/commerce-enablement-icon-fy25.png",
      "x": 76,
      "y": 544,
      "width": 78,
      "height": 78
    },
    {
      "key": "block-financial-solutions-icon",
      "href": "data/assets/raster-annotations/block/financial-solutions-icon-fy25.png",
      "x": 77,
      "y": 838,
      "width": 78,
      "height": 78
    },
    {
      "key": "block-bitcoin-ecosystem-icon",
      "href": "data/assets/raster-annotations/block/bitcoin-ecosystem-icon-fy25.png",
      "x": 79,
      "y": 1088,
      "width": 78,
      "height": 78
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "commerce_enablement": {
        "x": 432,
        "y": 502,
        "width": 71,
        "height": 174
      },
      "financial_solutions": {
        "x": 432,
        "y": 844,
        "width": 71,
        "height": 73
      },
      "bitcoin_ecosystem": {
        "x": 432,
        "y": 1074,
        "width": 71,
        "height": 100
      },
      "revenue": {
        "x": 899,
        "y": 665,
        "width": 70,
        "height": 346
      },
      "gross_profit": {
        "x": 1366,
        "y": 555,
        "width": 71,
        "height": 166
      },
      "cost_of_revenue": {
        "x": 1366,
        "y": 927,
        "width": 71,
        "height": 181
      },
      "operating_profit": {
        "x": 1834,
        "y": 490,
        "width": 70,
        "height": 23
      },
      "operating_expenses": {
        "x": 1834,
        "y": 685,
        "width": 70,
        "height": 142
      },
      "net_profit": {
        "x": 2300,
        "y": 406,
        "width": 71,
        "height": 5
      },
      "tax": {
        "x": 2300,
        "y": 568,
        "width": 71,
        "height": 10
      },
      "other_non_operating": {
        "x": 2300,
        "y": 682,
        "width": 71,
        "height": 7
      },
      "ga": {
        "x": 2300,
        "y": 776,
        "width": 71,
        "height": 43
      },
      "sales_marketing": {
        "x": 2300,
        "y": 902,
        "width": 71,
        "height": 34
      },
      "product_development": {
        "x": 2300,
        "y": 1023,
        "width": 71,
        "height": 31
      },
      "loan_losses": {
        "x": 2300,
        "y": 1139,
        "width": 71,
        "height": 32
      },
      "other_operating": {
        "x": 2300,
        "y": 1256,
        "width": 71,
        "height": 2
      }
    },
    "labels": {
      "commerce_enablement": {
        "blocks": [
          {
            "x": 470,
            "top": 403,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 470,
            "top": 455,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 289,
            "top": 538,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Commerce",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Enablement",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ],
            "lineGap": 12
          },
          {
            "x": 289,
            "top": 641,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "54% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "financial_solutions": {
        "blocks": [
          {
            "x": 470,
            "top": 746,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 470,
            "top": 798,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+40% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 289,
            "top": 830,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Financial",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ],
            "lineGap": 12
          },
          {
            "x": 289,
            "top": 933,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "93% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "bitcoin_ecosystem": {
        "blocks": [
          {
            "x": 470,
            "top": 974,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 470,
            "top": 1026,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(13%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 289,
            "top": 1075,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Bitcoin",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Ecosystem",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ],
            "lineGap": 14
          },
          {
            "x": 289,
            "top": 1179,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "4% gross margin",
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
            "x": 932,
            "top": 514,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 932,
            "top": 565,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 932,
            "top": 617,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+9% Y/Y",
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
            "x": 1401,
            "top": 403,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1401,
            "top": 456,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1401,
            "top": 508,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+25% Y/Y",
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
            "x": 1401,
            "top": 1122,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Cost of",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1401,
            "top": 1176,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "revenue",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1401,
            "top": 1216,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1869,
            "top": 301,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1869,
            "top": 353,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1869,
            "top": 405,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 1869,
            "top": 445,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
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
            "x": 1869,
            "top": 843,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1869,
            "top": 892,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "expenses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1869,
            "top": 934,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 2493,
            "top": 334,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2493,
            "top": 387,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2493,
            "top": 438,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+1% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 2493,
            "top": 478,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(8pp) Y/Y",
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
            "x": 2493,
            "top": 536,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 576,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "other_non_operating": {
        "blocks": [
          {
            "x": 2493,
            "top": 632,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 674,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 2493,
            "top": 757,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 797,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "sales_marketing": {
        "blocks": [
          {
            "x": 2493,
            "top": 881,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 921,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "product_development": {
        "blocks": [
          {
            "x": 2493,
            "top": 975,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Product",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 1017,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Development",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 1058,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "loan_losses": {
        "blocks": [
          {
            "x": 2493,
            "top": 1119,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Loan losses",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 1161,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "other_operating": {
        "blocks": [
          {
            "x": 2493,
            "top": 1214,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2493,
            "top": 1255,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
      "id": "commerce_enablement",
      "value": 3.3,
      "label": "Commerce Enablement",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+15% Y/Y",
        "54% gross margin"
      ]
    },
    {
      "id": "financial_solutions",
      "value": 1.4,
      "label": "Financial Solutions",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+40% Y/Y",
        "93% gross margin"
      ]
    },
    {
      "id": "bitcoin_ecosystem",
      "value": 1.9,
      "label": "Bitcoin Ecosystem",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(13%) Y/Y",
        "4% gross margin"
      ]
    },
    {
      "id": "revenue",
      "value": 6.6,
      "label": "Revenue",
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "value": 3.2,
      "label": "Gross profit",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "value": 3.5,
      "label": "Cost of revenue",
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "value": 0.4,
      "label": "Operating profit",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "7% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "value": 2.7,
      "label": "Operating expenses",
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": []
    },
    {
      "id": "net_profit",
      "value": 0.1,
      "label": "Net profit",
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "+1% margin",
        "(8pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "value": 0.2,
      "label": "Tax",
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": []
    },
    {
      "id": "other_non_operating",
      "value": 0.1,
      "label": "Other",
      "type": "cost",
      "col": 4,
      "order": 2,
      "notes": []
    },
    {
      "id": "ga",
      "value": 0.8,
      "label": "G&A",
      "type": "cost",
      "col": 4,
      "order": 3,
      "notes": []
    },
    {
      "id": "sales_marketing",
      "value": 0.7,
      "label": "S&M",
      "type": "cost",
      "col": 4,
      "order": 4,
      "notes": []
    },
    {
      "id": "product_development",
      "value": 0.6,
      "label": "Product Development",
      "type": "cost",
      "col": 4,
      "order": 5,
      "notes": []
    },
    {
      "id": "loan_losses",
      "value": 0.5,
      "label": "Loan losses",
      "type": "cost",
      "col": 4,
      "order": 6,
      "notes": []
    },
    {
      "id": "other_operating",
      "value": 0.034,
      "label": "Other",
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": [],
      "valueText": "($34M)"
    }
  ],
  "links": [
    {
      "source": "commerce_enablement",
      "target": "revenue",
      "value": 3.3,
      "sourceWidth": 174,
      "targetWidth": 174,
      "y0": 589,
      "y1": 752,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "financial_solutions",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 73,
      "targetWidth": 73,
      "y0": 880.5,
      "y1": 875.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "bitcoin_ecosystem",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 100,
      "targetWidth": 99,
      "y0": 1124,
      "y1": 961.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.2,
      "sourceWidth": 166,
      "targetWidth": 166,
      "y0": 748,
      "y1": 638,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 3.5,
      "sourceWidth": 180,
      "targetWidth": 181,
      "y0": 921,
      "y1": 1017.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.4,
      "sourceWidth": 23,
      "targetWidth": 23,
      "y0": 566.5,
      "y1": 501.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.7,
      "sourceWidth": 142,
      "targetWidth": 142,
      "y0": 650,
      "y1": 756,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 492.5,
      "y1": 408.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 500,
      "y1": 573,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_non_operating",
      "value": 0.1,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 508.5,
      "y1": 685.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.8,
      "sourceWidth": 43,
      "targetWidth": 43,
      "y0": 706.5,
      "y1": 797.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 0.7,
      "sourceWidth": 34,
      "targetWidth": 34,
      "y0": 745,
      "y1": 919,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product_development",
      "value": 0.6,
      "sourceWidth": 31,
      "targetWidth": 31,
      "y0": 777.5,
      "y1": 1038.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "loan_losses",
      "value": 0.5,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 809,
      "y1": 1155,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 0.034,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 826,
      "y1": 1257,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Block · 2026 财年第二季度",
      "meta": {
        "title": "Block 2026 财年第二季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1550
      },
      "nodes": {
        "commerce_enablement": {
          "label": "商业赋能",
          "notes": [
            "同比 +15%",
            "毛利率 54%"
          ]
        },
        "financial_solutions": {
          "label": "金融解决方案",
          "notes": [
            "同比 +40%",
            "毛利率 93%"
          ]
        },
        "bitcoin_ecosystem": {
          "label": "比特币生态",
          "notes": [
            "同比 (13%)",
            "毛利率 4%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "同比 +25%"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 +1%",
            "同比 (8 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_non_operating": {
          "label": "其他"
        },
        "ga": {
          "label": "一般及行政"
        },
        "sales_marketing": {
          "label": "销售与营销"
        },
        "product_development": {
          "label": "产品开发"
        },
        "loan_losses": {
          "label": "贷款损失"
        },
        "other_operating": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "commerce_enablement": {
            "blocks": [
              {
                "x": 470,
                "top": 403,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 470,
                "top": 455,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 289,
                "top": 538,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "商业",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "赋能",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "lineGap": 12
              },
              {
                "x": 289,
                "top": 641,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "毛利率 54%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "financial_solutions": {
            "blocks": [
              {
                "x": 470,
                "top": 746,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 470,
                "top": 798,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +40%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 289,
                "top": 830,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "金融",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "解决方案",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "lineGap": 12
              },
              {
                "x": 289,
                "top": 933,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "毛利率 93%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "bitcoin_ecosystem": {
            "blocks": [
              {
                "x": 470,
                "top": 974,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 470,
                "top": 1026,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (13%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 289,
                "top": 1075,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "比特币",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "生态",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "lineGap": 14
              },
              {
                "x": 289,
                "top": 1179,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "毛利率 4%",
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
                "x": 932,
                "top": 514,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 932,
                "top": 565,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 932,
                "top": 617,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +9%",
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
                "x": 1401,
                "top": 403,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1401,
                "top": 456,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1401,
                "top": 508,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +25%",
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
                "x": 1401,
                "top": 1122,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1401,
                "top": 1176,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "成本",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1401,
                "top": 1216,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1869,
                "top": 301,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1869,
                "top": 353,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1869,
                "top": 405,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 1869,
                "top": 445,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
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
                "x": 1869,
                "top": 843,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1869,
                "top": 892,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1869,
                "top": 934,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 2493,
                "top": 334,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 387,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 438,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 +1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 478,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (8 个百分点)",
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
                "x": 2493,
                "top": 536,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 576,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
          "other_non_operating": {
            "blocks": [
              {
                "x": 2493,
                "top": 632,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 674,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 2493,
                "top": 757,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 797,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
          "sales_marketing": {
            "blocks": [
              {
                "x": 2493,
                "top": 881,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 921,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
          "product_development": {
            "blocks": [
              {
                "x": 2493,
                "top": 975,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "产品",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 1017,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 1058,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
          "loan_losses": {
            "blocks": [
              {
                "x": 2493,
                "top": 1119,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "贷款损失",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 1161,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
          "other_operating": {
            "blocks": [
              {
                "x": 2493,
                "top": 1214,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2493,
                "top": 1255,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
      }
    }
  },
  "annotationsSvg": "<g data-annotation-clearance=\"block-company-logo\"><rect x=\"830\" y=\"213\" width=\"189\" height=\"279\" fill=\"transparent\"/></g><g data-annotation-clearance=\"block-commerce-enablement-icon\"><rect x=\"76\" y=\"544\" width=\"78\" height=\"78\" fill=\"transparent\"/></g><g data-annotation-clearance=\"block-financial-solutions-icon\"><rect x=\"77\" y=\"838\" width=\"78\" height=\"78\" fill=\"transparent\"/></g><g data-annotation-clearance=\"block-bitcoin-ecosystem-icon\"><rect x=\"79\" y=\"1088\" width=\"78\" height=\"78\" fill=\"transparent\"/></g>"
});
