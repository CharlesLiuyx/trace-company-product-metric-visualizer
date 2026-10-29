(function () {
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "block-q1-fy23",
  "name": "Block · Q1 FY23",
  "company": "Block",
  "meta": {
    "company": "Block",
    "title": "Block Q1 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/block-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 123,
    "titleWeight": 800,
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
      "x": 728,
      "y": 215,
      "width": 258,
      "height": 330
    },
    {
      "key": "block-square-wordmark",
      "href": "data/assets/raster-annotations/block/square-wordmark-q3-fy25.png",
      "x": 1086,
      "y": 278,
      "width": 245,
      "height": 58
    },
    {
      "key": "block-cash-app-icon",
      "href": "data/assets/raster-annotations/block/financial-solutions-icon-fy25.png",
      "x": 1088,
      "y": 746,
      "width": 58,
      "height": 58
    },
    {
      "key": "block-bitcoin-wordmark",
      "href": "data/assets/raster-annotations/block/bitcoin-wordmark-q3-fy25.png",
      "x": 150,
      "y": 468,
      "width": 280,
      "height": 69
    },
    {
      "key": "block-hardware-icon",
      "href": "data/assets/raster-annotations/block/hardware-icon-q3-fy25.png",
      "x": 97,
      "y": 1238,
      "width": 80,
      "height": 80
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "bitcoin_revenue": {
        "x": 438,
        "y": 458,
        "width": 72,
        "height": 133
      },
      "transaction_revenue": {
        "x": 438,
        "y": 761,
        "width": 72,
        "height": 87
      },
      "subscription_services": {
        "x": 438,
        "y": 1046,
        "width": 72,
        "height": 83
      },
      "hardware_revenue": {
        "x": 438,
        "y": 1317,
        "width": 72,
        "height": 2
      },
      "revenue": {
        "x": 812,
        "y": 714,
        "width": 71,
        "height": 307
      },
      "square_gross_profit": {
        "x": 1188,
        "y": 457,
        "width": 72,
        "height": 46
      },
      "cash_app_gross_profit": {
        "x": 1183,
        "y": 670,
        "width": 72,
        "height": 57
      },
      "gross_profit": {
        "x": 1565,
        "y": 435,
        "width": 71,
        "height": 105
      },
      "cost_of_revenue": {
        "x": 1188,
        "y": 888,
        "width": 72,
        "height": 202
      },
      "bitcoin_cost": {
        "x": 1567,
        "y": 917,
        "width": 72,
        "height": 130
      },
      "transaction_cost": {
        "x": 1567,
        "y": 1098,
        "width": 72,
        "height": 50
      },
      "subscription_cost": {
        "x": 1567,
        "y": 1207,
        "width": 72,
        "height": 15
      },
      "hardware_cost": {
        "x": 1567,
        "y": 1292,
        "width": 72,
        "height": 2
      },
      "amortization": {
        "x": 1567,
        "y": 1375,
        "width": 72,
        "height": 2
      },
      "operating_loss": {
        "x": 1752,
        "y": 749,
        "width": 72,
        "height": 2
      },
      "operating_expenses": {
        "x": 1930,
        "y": 552,
        "width": 73,
        "height": 105
      },
      "product_development": {
        "x": 2307,
        "y": 290,
        "width": 72,
        "height": 37
      },
      "sales_marketing": {
        "x": 2307,
        "y": 484,
        "width": 72,
        "height": 30
      },
      "ga": {
        "x": 2302,
        "y": 649,
        "width": 72,
        "height": 26
      },
      "loan_losses": {
        "x": 2307,
        "y": 801,
        "width": 72,
        "height": 7
      },
      "other_operating": {
        "x": 2307,
        "y": 929,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "bitcoin_revenue": {
        "blocks": [
          {
            "x": 474,
            "top": 367,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 474,
            "top": 418,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "+25% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 289,
            "top": 543,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "2% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "transaction_revenue": {
        "blocks": [
          {
            "x": 474,
            "top": 665,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 474,
            "top": 716,
            "anchor": "middle",
            "lineGap": 13,
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
            "top": 765,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Transaction",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "42% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "subscription_services": {
        "blocks": [
          {
            "x": 474,
            "top": 950,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 474,
            "top": 1001,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "+42% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 289,
            "top": 1038,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "and services",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "81% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "hardware_revenue": {
        "blocks": [
          {
            "x": 474,
            "top": 1220,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 474,
            "top": 1271,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "+0% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 294,
            "top": 1270,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Hardware",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "(57%) gross margin",
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
            "x": 848,
            "top": 554,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 848,
            "top": 610,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 848,
            "top": 663,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "+26% Y/Y",
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
            "x": 1600,
            "top": 275,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 1600,
            "top": 331,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1600,
            "top": 384,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "+32% Y/Y",
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
            "x": 1224,
            "top": 1111,
            "anchor": "middle",
            "lineGap": 10,
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
              }
            ]
          },
          {
            "x": 1224,
            "top": 1209,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1610,
            "top": 709,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating loss",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1610,
            "top": 761,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1966,
            "top": 377,
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
              }
            ]
          },
          {
            "x": 1966,
            "top": 483,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
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
      "product_development": {
        "blocks": [
          {
            "x": 2491,
            "top": 254,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Product",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Development",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2491,
            "top": 342,
            "anchor": "middle",
            "lineGap": 13,
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
            "x": 2491,
            "top": 474,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2491,
            "top": 521,
            "anchor": "middle",
            "lineGap": 13,
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
            "x": 2491,
            "top": 632,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2491,
            "top": 679,
            "anchor": "middle",
            "lineGap": 13,
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
            "x": 2491,
            "top": 775,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2491,
            "top": 822,
            "anchor": "middle",
            "lineGap": 13,
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
            "x": 2491,
            "top": 896,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2491,
            "top": 943,
            "anchor": "middle",
            "lineGap": 13,
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
      "bitcoin_cost": {
        "blocks": [
          {
            "x": 1768,
            "top": 943,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Bitcoin",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1768,
            "top": 990,
            "anchor": "middle",
            "lineGap": 13,
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
      "transaction_cost": {
        "blocks": [
          {
            "x": 1772,
            "top": 1095,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Transaction",
                "size": 26,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1772,
            "top": 1137,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 26,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "subscription_cost": {
        "blocks": [
          {
            "x": 1770,
            "top": 1181,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Subscription",
                "size": 26,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1770,
            "top": 1223,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 26,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "hardware_cost": {
        "blocks": [
          {
            "x": 1770,
            "top": 1264,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Hardware",
                "size": 26,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1770,
            "top": 1306,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 26,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 1770,
            "top": 1345,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Amortization",
                "size": 26,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1770,
            "top": 1387,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 26,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "square_gross_profit": {
        "blocks": [
          {
            "x": 1220,
            "top": 356,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008e00"
              }
            ]
          },
          {
            "x": 1220,
            "top": 407,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
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
      "cash_app_gross_profit": {
        "blocks": [
          {
            "x": 1216,
            "top": 569,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008e00"
              }
            ]
          },
          {
            "x": 1216,
            "top": 620,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "+49% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 1164,
            "top": 760,
            "anchor": "start",
            "lineGap": 13,
            "lines": [
              {
                "text": "Cash App",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "bitcoin_revenue",
      "label": "Bitcoin",
      "value": 2.2,
      "valueText": "$2.2B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+25% Y/Y",
        "2% gross margin"
      ]
    },
    {
      "id": "transaction_revenue",
      "label": "Transaction",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+15% Y/Y",
        "42% gross margin"
      ]
    },
    {
      "id": "subscription_services",
      "label": "Subscription and services",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+42% Y/Y",
        "81% gross margin"
      ]
    },
    {
      "id": "hardware_revenue",
      "label": "Hardware",
      "value": 0.037,
      "valueText": "$37M",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+0% Y/Y",
        "(57%) gross margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 5,
      "valueText": "$5.0B",
      "type": "hub",
      "col": 1,
      "order": 0,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "square_gross_profit",
      "label": "Square",
      "value": 0.8,
      "valueText": "$0.8B",
      "type": "profit",
      "col": 2,
      "order": 0,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "cash_app_gross_profit",
      "label": "Cash App",
      "value": 0.9,
      "valueText": "$0.9B",
      "type": "profit",
      "col": 2,
      "order": 1,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "+49% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.7,
      "valueText": "$1.7B",
      "type": "profit",
      "col": 3,
      "order": 0,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "+32% Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 3.3,
      "valueText": "($3.3B)",
      "type": "cost",
      "col": 2,
      "order": 2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "bitcoin_cost",
      "label": "Bitcoin",
      "value": 2.1,
      "valueText": "($2.1B)",
      "type": "cost",
      "col": 3,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "transaction_cost",
      "label": "Transaction",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 3,
      "order": 2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "subscription_cost",
      "label": "Subscription",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 3,
      "order": 3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "hardware_cost",
      "label": "Hardware",
      "value": 0.059,
      "valueText": "($59M)",
      "type": "cost",
      "col": 3,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.019,
      "valueText": "($19M)",
      "type": "cost",
      "col": 3,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -0.006,
      "valueText": "($6M)",
      "type": "cost",
      "col": 4,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.7,
      "valueText": "($1.7B)",
      "type": "cost",
      "col": 5,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "product_development",
      "label": "Product Development",
      "value": 0.6,
      "valueText": "($0.6B)",
      "type": "cost",
      "col": 6,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sales_marketing",
      "label": "S&M",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 6,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.4,
      "valueText": "($0.4B)",
      "type": "cost",
      "col": 6,
      "order": 2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "loan_losses",
      "label": "Loan losses",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 6,
      "order": 3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_operating",
      "label": "Other",
      "value": 0.037,
      "valueText": "($37M)",
      "type": "cost",
      "col": 6,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "bitcoin_revenue",
      "target": "revenue",
      "value": 2.2,
      "y0": 524.5,
      "sourceWidth": 133,
      "y1": 780.5,
      "targetWidth": 133,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "transaction_revenue",
      "target": "revenue",
      "value": 1.4,
      "y0": 804.5,
      "sourceWidth": 87,
      "y1": 891.0,
      "targetWidth": 88,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "subscription_services",
      "target": "revenue",
      "value": 1.4,
      "y0": 1087.5,
      "sourceWidth": 83,
      "y1": 977.0,
      "targetWidth": 84,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "hardware_revenue",
      "target": "revenue",
      "value": 0.037,
      "y0": 1318.0,
      "sourceWidth": 2,
      "y1": 1020.0,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "square_gross_profit",
      "value": 0.8,
      "y0": 737.5,
      "sourceWidth": 47,
      "y1": 480.0,
      "targetWidth": 46,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cash_app_gross_profit",
      "value": 0.9,
      "y0": 790.5,
      "sourceWidth": 59,
      "y1": 698.5,
      "targetWidth": 57,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 3.3,
      "y0": 920.5,
      "sourceWidth": 201,
      "y1": 989.0,
      "targetWidth": 202,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "square_gross_profit",
      "target": "gross_profit",
      "value": 0.8,
      "y0": 480.0,
      "sourceWidth": 46,
      "y1": 458.5,
      "targetWidth": 47,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "cash_app_gross_profit",
      "target": "gross_profit",
      "value": 0.9,
      "y0": 698.5,
      "sourceWidth": 57,
      "y1": 511.0,
      "targetWidth": 58,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.7,
      "y0": 487.5,
      "sourceWidth": 105,
      "y1": 604.0,
      "targetWidth": 104,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.006,
      "y0": 750.0,
      "sourceWidth": 2,
      "y1": 656.5,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585",
      "curve": {
        "x0": 1824,
        "x1": 1930,
        "c1x": 1868,
        "c1y": 750,
        "c2x": 1867,
        "c2y": 656.5
      }
    },
    {
      "source": "cost_of_revenue",
      "target": "bitcoin_cost",
      "value": 2.1,
      "y0": 953.5,
      "sourceWidth": 131,
      "y1": 982.0,
      "targetWidth": 130,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "transaction_cost",
      "value": 0.8,
      "y0": 1044.5,
      "sourceWidth": 51,
      "y1": 1123.0,
      "targetWidth": 50,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "subscription_cost",
      "value": 0.3,
      "y0": 1078.0,
      "sourceWidth": 16,
      "y1": 1214.5,
      "targetWidth": 15,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "hardware_cost",
      "value": 0.059,
      "y0": 1087.5,
      "sourceWidth": 3,
      "y1": 1293.0,
      "targetWidth": 2,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "amortization",
      "value": 0.019,
      "y0": 1089.5,
      "sourceWidth": 1,
      "y1": 1376.0,
      "targetWidth": 2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product_development",
      "value": 0.6,
      "y0": 571.0,
      "sourceWidth": 38,
      "y1": 308.5,
      "targetWidth": 37,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 0.5,
      "y0": 605.5,
      "sourceWidth": 31,
      "y1": 499.0,
      "targetWidth": 30,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.4,
      "y0": 634.0,
      "sourceWidth": 26,
      "y1": 662.0,
      "targetWidth": 26,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "loan_losses",
      "value": 0.1,
      "y0": 651.0,
      "sourceWidth": 8,
      "y1": 804.5,
      "targetWidth": 7,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 0.037,
      "y0": 656.0,
      "sourceWidth": 2,
      "y1": 930.0,
      "targetWidth": 2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Block · 2023 财年第一季度",
      "meta": {
        "title": "Block 2023 财年第一季度利润表",
        "period": "",
        "periodNote": ""
      },
      "nodes": {
        "bitcoin_revenue": {
          "label": "比特币",
          "notes": [
            "同比 +25%",
            "毛利率 2%"
          ]
        },
        "transaction_revenue": {
          "label": "交易",
          "notes": [
            "同比 +15%",
            "毛利率 42%"
          ]
        },
        "subscription_services": {
          "label": "订阅与服务",
          "notes": [
            "同比 +42%",
            "毛利率 81%"
          ]
        },
        "hardware_revenue": {
          "label": "硬件",
          "notes": [
            "同比 +0%",
            "毛利率 (57%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +26%"
          ]
        },
        "square_gross_profit": {
          "label": "Square 商户生态",
          "notes": [
            "同比 +16%"
          ]
        },
        "cash_app_gross_profit": {
          "label": "Cash App 消费者生态",
          "notes": [
            "同比 +49%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "同比 +32%"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "bitcoin_cost": {
          "label": "比特币"
        },
        "transaction_cost": {
          "label": "交易"
        },
        "subscription_cost": {
          "label": "订阅"
        },
        "hardware_cost": {
          "label": "硬件"
        },
        "amortization": {
          "label": "摊销"
        },
        "operating_loss": {
          "label": "营业亏损"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "product_development": {
          "label": "产品开发"
        },
        "sales_marketing": {
          "label": "销售与营销"
        },
        "ga": {
          "label": "一般及行政"
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
          "bitcoin_revenue": {
            "blocks": [
              {
                "x": 474,
                "top": 367,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 474,
                "top": 418,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "同比 +25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 289,
                "top": 543,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "毛利率 2%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "transaction_revenue": {
            "blocks": [
              {
                "x": 474,
                "top": 665,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 474,
                "top": 716,
                "anchor": "middle",
                "lineGap": 13,
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
                "top": 765,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "交易",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 42%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "subscription_services": {
            "blocks": [
              {
                "x": 474,
                "top": 950,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 474,
                "top": 1001,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "同比 +42%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 289,
                "top": 1038,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "与服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 81%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "hardware_revenue": {
            "blocks": [
              {
                "x": 474,
                "top": 1220,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 474,
                "top": 1271,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "同比 +0%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 294,
                "top": 1270,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "硬件",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "毛利率 (57%)",
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
                "x": 848,
                "top": 554,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 848,
                "top": 610,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 848,
                "top": 663,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "同比 +26%",
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
                "x": 1600,
                "top": 275,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 1600,
                "top": 331,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1600,
                "top": 384,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "同比 +32%",
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
                "x": 1224,
                "top": 1111,
                "anchor": "middle",
                "lineGap": 10,
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
                  }
                ]
              },
              {
                "x": 1224,
                "top": 1209,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1610,
                "top": 709,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1610,
                "top": 761,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1966,
                "top": 377,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1966,
                "top": 483,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
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
          "product_development": {
            "blocks": [
              {
                "x": 2491,
                "top": 254,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "产品",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2491,
                "top": 342,
                "anchor": "middle",
                "lineGap": 13,
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
                "x": 2491,
                "top": 474,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 2491,
                "top": 521,
                "anchor": "middle",
                "lineGap": 13,
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
                "x": 2491,
                "top": 632,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 2491,
                "top": 679,
                "anchor": "middle",
                "lineGap": 13,
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
                "x": 2491,
                "top": 775,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 2491,
                "top": 822,
                "anchor": "middle",
                "lineGap": 13,
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
                "x": 2491,
                "top": 896,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 2491,
                "top": 943,
                "anchor": "middle",
                "lineGap": 13,
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
          "bitcoin_cost": {
            "blocks": [
              {
                "x": 1768,
                "top": 943,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "比特币",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1768,
                "top": 990,
                "anchor": "middle",
                "lineGap": 13,
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
          "transaction_cost": {
            "blocks": [
              {
                "x": 1772,
                "top": 1095,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "交易",
                    "size": 26,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1772,
                "top": 1137,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 26,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "subscription_cost": {
            "blocks": [
              {
                "x": 1770,
                "top": 1181,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 26,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1770,
                "top": 1223,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 26,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "hardware_cost": {
            "blocks": [
              {
                "x": 1770,
                "top": 1264,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "硬件",
                    "size": 26,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1770,
                "top": 1306,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 26,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 1770,
                "top": 1345,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 26,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1770,
                "top": 1387,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 26,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "square_gross_profit": {
            "blocks": [
              {
                "x": 1220,
                "top": 356,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008e00"
                  }
                ]
              },
              {
                "x": 1220,
                "top": 407,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
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
          "cash_app_gross_profit": {
            "blocks": [
              {
                "x": 1216,
                "top": 569,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008e00"
                  }
                ]
              },
              {
                "x": 1216,
                "top": 620,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "同比 +49%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 1164,
                "top": 760,
                "anchor": "start",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "Cash App 应用",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
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
})();
