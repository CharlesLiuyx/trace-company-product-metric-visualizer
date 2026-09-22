/* Source-measured Amgen Q2 FY26 Sankey View Adapter. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "amgen-q2-fy26",
  "name": "Amgen · Q2 FY26",
  "company": "Amgen",
  "meta": {
    "company": "Amgen",
    "title": "Amgen Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/amgen-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2160,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
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
    "titleColor": "#19557f",
    "subtitleColor": "#696969",
    "noteColor": "#696969",
    "palette": {
      "source": {
        "node": "#2162a5",
        "label": "#2161a4"
      },
      "hub": {
        "node": "#2162a5",
        "label": "#2161a4"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#2162a5",
      "hub": "#2162a5",
      "profit": "#2ca02c",
      "cost": "#cc0000"
    },
    "linkOpacity": 0.45,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "amgen-company-logo",
      "href": "data/assets/raster-annotations/amgen/company-logo.png",
      "x": 760,
      "y": 250,
      "width": 556,
      "height": 158
    },
    {
      "key": "amgen-product-repatha",
      "href": "data/assets/raster-annotations/amgen/product-repatha.png",
      "x": 14,
      "y": 308.5,
      "width": 179,
      "height": 83,
      "pairedNode": "repatha",
      "pairedTarget": "node"
    },
    {
      "key": "amgen-product-prolia",
      "href": "data/assets/raster-annotations/amgen/product-prolia.png",
      "x": 14,
      "y": 435,
      "width": 179,
      "height": 91,
      "pairedNode": "prolia",
      "pairedTarget": "node"
    },
    {
      "key": "amgen-product-evenity",
      "href": "data/assets/raster-annotations/amgen/product-evenity.png",
      "x": 14,
      "y": 574,
      "width": 179,
      "height": 56,
      "pairedNode": "evenity",
      "pairedTarget": "node"
    },
    {
      "key": "amgen-product-blincyto",
      "href": "data/assets/raster-annotations/amgen/product-blincyto.png",
      "x": 8,
      "y": 691,
      "width": 191,
      "height": 73,
      "pairedNode": "blincyto",
      "pairedTarget": "node"
    },
    {
      "key": "amgen-product-tezspire",
      "href": "data/assets/raster-annotations/amgen/product-tezspire.png",
      "x": 8,
      "y": 810.5,
      "width": 191,
      "height": 75,
      "pairedNode": "tezspire",
      "pairedTarget": "node"
    },
    {
      "key": "amgen-product-tepezza",
      "href": "data/assets/raster-annotations/amgen/product-tepezza.png",
      "x": 0,
      "y": 910.5,
      "width": 235,
      "height": 118,
      "pairedNode": "tepezza",
      "pairedTarget": "node"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "repatha": {
        "x": 467,
        "y": 338,
        "width": 74,
        "height": 24
      },
      "prolia": {
        "x": 467,
        "y": 471,
        "width": 74,
        "height": 19
      },
      "evenity": {
        "x": 467,
        "y": 593,
        "width": 74,
        "height": 18
      },
      "blincyto": {
        "x": 467,
        "y": 722,
        "width": 74,
        "height": 11
      },
      "tezspire": {
        "x": 467,
        "y": 842,
        "width": 74,
        "height": 12
      },
      "tepezza": {
        "x": 467,
        "y": 962,
        "width": 74,
        "height": 15
      },
      "other_products": {
        "x": 467,
        "y": 1092,
        "width": 74,
        "height": 141
      },
      "product_sales": {
        "x": 841,
        "y": 676,
        "width": 74,
        "height": 239
      },
      "other_revenue": {
        "x": 841,
        "y": 1159,
        "width": 74,
        "height": 13
      },
      "revenue": {
        "x": 1215,
        "y": 779,
        "width": 74,
        "height": 252
      },
      "gross_profit": {
        "x": 1589,
        "y": 679,
        "width": 74,
        "height": 181
      },
      "cost_of_sales": {
        "x": 1589,
        "y": 1104,
        "width": 74,
        "height": 70
      },
      "operating_profit": {
        "x": 1963,
        "y": 581,
        "width": 74,
        "height": 88
      },
      "operating_expenses": {
        "x": 1963,
        "y": 853,
        "width": 74,
        "height": 94
      },
      "net_profit": {
        "x": 2336,
        "y": 464,
        "width": 73,
        "height": 60
      },
      "interest": {
        "x": 2336,
        "y": 677,
        "width": 73,
        "height": 17
      },
      "other_expense": {
        "x": 2336,
        "y": 890,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2336,
        "y": 790,
        "width": 73,
        "height": 10
      },
      "rnd": {
        "x": 2336,
        "y": 988,
        "width": 73,
        "height": 48
      },
      "sga": {
        "x": 2336,
        "y": 1142,
        "width": 73,
        "height": 44
      },
      "other_opex": {
        "x": 2336,
        "y": 1304,
        "width": 73,
        "height": 3
      }
    },
    "labels": {
      "repatha": {
        "blocks": [
          {
            "x": 508.5,
            "top": 248,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 508.5,
            "top": 295,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+37% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 404,
            "top": 328,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Repatha",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "prolia": {
        "blocks": [
          {
            "x": 511,
            "top": 382,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 511,
            "top": 432,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(32%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 380,
            "top": 460,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Prolia",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "evenity": {
        "blocks": [
          {
            "x": 508.5,
            "top": 504,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 508.5,
            "top": 551,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+38% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 406,
            "top": 577,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "EVENITY",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "blincyto": {
        "blocks": [
          {
            "x": 504,
            "top": 632,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 504,
            "top": 679,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+42% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 420,
            "top": 702,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "BLINCYTO",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "tezspire": {
        "blocks": [
          {
            "x": 505.5,
            "top": 753,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 506,
            "top": 799,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+42% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 407,
            "top": 823.5,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tezspire",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "tepezza": {
        "blocks": [
          {
            "x": 503,
            "top": 873,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 503,
            "top": 920,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 400,
            "top": 945,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tepezza",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_products": {
        "blocks": [
          {
            "x": 500,
            "top": 1002,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 500.5,
            "top": 1049,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 1140,
            "anchor": "end",
            "semanticRole": "name",
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
      "product_sales": {
        "blocks": [
          {
            "x": 879,
            "top": 470,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Product",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 877.5,
            "top": 523,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "sales",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 877.5,
            "top": 579,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 878.5,
            "top": 629,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 878.5,
            "top": 1006,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 877.5,
            "top": 1062,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 878.5,
            "top": 1112,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1247,
            "top": 626,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1246,
            "top": 682,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 1246.5,
            "top": 732,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1625.5,
            "top": 434,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1626,
            "top": 496,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "profit",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1624.5,
            "top": 543,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 1624,
            "top": 600,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "72% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1625.5,
            "top": 636,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+5pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1625.5,
            "top": 1187,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35,
                "weight": 800
              }
            ]
          },
          {
            "x": 1624.5,
            "top": 1239,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 1998.5,
            "top": 345,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1999,
            "top": 398,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "profit",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1998.5,
            "top": 445,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 1998,
            "top": 502,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "35% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1999,
            "top": 541,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+6pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1999,
            "top": 964,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1998.5,
            "top": 1011,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1998,
            "top": 1056,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 2527.5,
            "top": 406,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Net",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 2527,
            "top": 467,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "profit",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 2526.5,
            "top": 514,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 2526,
            "top": 571,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "24% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2527,
            "top": 610,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+8pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2522,
            "top": 645,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2521,
            "top": 692,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2521.5,
            "top": 850,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2521,
            "top": 897,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
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
            "x": 2523.5,
            "top": 755,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2523.5,
            "top": 802,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2443,
            "top": 987,
            "anchor": "start",
            "semanticRole": "name",
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2521,
            "top": 987,
            "anchor": "start",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2526.5,
            "top": 1023,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2526.5,
            "top": 1069,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2428,
            "top": 1140,
            "anchor": "start",
            "semanticRole": "name",
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2524,
            "top": 1140,
            "anchor": "start",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2521.5,
            "top": 1176,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "17% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2521.5,
            "top": 1222,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2427,
            "top": 1291,
            "anchor": "start",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2527,
            "top": 1291,
            "anchor": "start",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2524,
            "top": 1328,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "1% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2524,
            "top": 1372,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
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
      "id": "repatha",
      "type": "source",
      "label": "Repatha",
      "value": 1,
      "notes": [
        "+37% Y/Y"
      ],
      "valueText": "$1.0B"
    },
    {
      "id": "prolia",
      "type": "source",
      "label": "Prolia",
      "value": 0.8,
      "notes": [
        "(32%) Y/Y"
      ]
    },
    {
      "id": "evenity",
      "type": "source",
      "label": "EVENITY",
      "value": 0.7,
      "notes": [
        "+38% Y/Y"
      ]
    },
    {
      "id": "blincyto",
      "type": "source",
      "label": "BLINCYTO",
      "value": 0.5,
      "notes": [
        "+42% Y/Y"
      ]
    },
    {
      "id": "tezspire",
      "type": "source",
      "label": "Tezspire",
      "value": 0.5,
      "notes": [
        "+42% Y/Y"
      ]
    },
    {
      "id": "tepezza",
      "type": "source",
      "label": "Tepezza",
      "value": 0.6,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "other_products",
      "type": "source",
      "label": "Other",
      "value": 5.6,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "product_sales",
      "type": "hub",
      "label": [
        "Product",
        "sales"
      ],
      "value": 9.5,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 0.5,
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 10.1,
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": [
        "Gross",
        "profit"
      ],
      "value": 7.2,
      "notes": [
        "72% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "type": "cost",
      "label": "Cost of sales",
      "value": 2.8,
      "notes": []
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 3.5,
      "notes": [
        "35% margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 3.7,
      "notes": []
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": [
        "Net",
        "profit"
      ],
      "value": 2.4,
      "notes": [
        "24% margin",
        "+8pp Y/Y"
      ]
    },
    {
      "id": "interest",
      "type": "cost",
      "label": "Interest",
      "value": 0.7,
      "notes": []
    },
    {
      "id": "other_expense",
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.4,
      "notes": []
    },
    {
      "id": "rnd",
      "type": "cost",
      "label": "R&D",
      "value": 1.9,
      "notes": [
        "19% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "sga",
      "type": "cost",
      "label": "SG&A",
      "value": 1.7,
      "notes": [
        "17% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "notes": [
        "1% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "repatha",
      "target": "product_sales",
      "value": 1,
      "y0": 350,
      "y1": 688,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2162a5",
      "width": 24
    },
    {
      "source": "prolia",
      "target": "product_sales",
      "value": 0.8,
      "y0": 480.5,
      "y1": 709.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#2162a5",
      "width": 19
    },
    {
      "source": "evenity",
      "target": "product_sales",
      "value": 0.7,
      "y0": 602,
      "y1": 728,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#2162a5",
      "width": 18
    },
    {
      "source": "blincyto",
      "target": "product_sales",
      "value": 0.5,
      "y0": 727.5,
      "y1": 742.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#2162a5",
      "width": 11
    },
    {
      "source": "tezspire",
      "target": "product_sales",
      "value": 0.5,
      "y0": 848,
      "y1": 754,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#2162a5",
      "width": 12
    },
    {
      "source": "tepezza",
      "target": "product_sales",
      "value": 0.6,
      "sourceWidth": 15,
      "targetWidth": 14,
      "y0": 969.5,
      "y1": 767,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#2162a5"
    },
    {
      "source": "other_products",
      "target": "product_sales",
      "value": 5.6,
      "y0": 1162.5,
      "y1": 844.5,
      "sourceOrder": 0,
      "targetOrder": 6,
      "linkTint": "#2162a5",
      "width": 141
    },
    {
      "source": "product_sales",
      "target": "revenue",
      "value": 9.5,
      "y0": 795.5,
      "y1": 898.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2162a5",
      "width": 239
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.5,
      "y0": 1165.5,
      "y1": 1024.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#2162a5",
      "width": 13
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.2,
      "y0": 869.5,
      "y1": 769.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2ca02c",
      "width": 181
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.8,
      "sourceWidth": 71,
      "targetWidth": 70,
      "y0": 995.5,
      "y1": 1139,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.5,
      "y0": 723,
      "y1": 625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2ca02c",
      "width": 88
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.7,
      "sourceWidth": 93,
      "targetWidth": 94,
      "y0": 813.5,
      "y1": 900,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.4,
      "y0": 611,
      "y1": 494,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#2ca02c",
      "width": 60
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.7,
      "y0": 649.5,
      "y1": 685.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 17
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 9,
      "targetWidth": 10,
      "y0": 662.5,
      "y1": 795,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#cc0000"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "y0": 668,
      "y1": 891,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 2
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.9,
      "sourceWidth": 47,
      "targetWidth": 48,
      "y0": 876.5,
      "y1": 1012,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#cc0000"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.7,
      "y0": 922,
      "y1": 1164,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 44
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "y0": 945.5,
      "y1": 1305.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#cc0000",
      "width": 3
    }
  ],
  "i18n": {
    "zh": {
      "name": "安进 · 2026 财年第二季度",
      "meta": {
        "title": "安进 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleTextLength": 2160
      },
      "nodes": {
        "repatha": {
          "label": "Repatha",
          "notes": [
            "同比 +37%"
          ]
        },
        "prolia": {
          "label": "Prolia",
          "notes": [
            "同比 (32%)"
          ]
        },
        "evenity": {
          "label": "EVENITY",
          "notes": [
            "同比 +38%"
          ]
        },
        "blincyto": {
          "label": "BLINCYTO",
          "notes": [
            "同比 +42%"
          ]
        },
        "tezspire": {
          "label": "Tezspire",
          "notes": [
            "同比 +42%"
          ]
        },
        "tepezza": {
          "label": "Tepezza",
          "notes": [
            "同比 +14%"
          ]
        },
        "other_products": {
          "label": "其他",
          "notes": [
            "同比 +7%"
          ]
        },
        "product_sales": {
          "label": [
            "产品",
            "销售"
          ],
          "notes": [
            "同比 +9%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +27%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛",
            "利润"
          ],
          "notes": [
            "利润率 72%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": [
            "营业",
            "利润"
          ],
          "notes": [
            "利润率 35%",
            "同比 +6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": [
            "净",
            "利润"
          ],
          "notes": [
            "利润率 24%",
            "同比 +8 个百分点"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
            "同比 (0 个百分点)"
          ]
        },
        "sga": {
          "label": "销售及管理",
          "notes": [
            "占收入 17%",
            "同比 (1 个百分点)"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": [
            "占收入 1%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "repatha": {
            "blocks": [
              {
                "x": 508.5,
                "top": 248,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 508.5,
                "top": 295,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +37%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 404,
                "top": 328,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "Repatha",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "prolia": {
            "blocks": [
              {
                "x": 511,
                "top": 382,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 511,
                "top": 432,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (32%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 380,
                "top": 460,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "Prolia",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "evenity": {
            "blocks": [
              {
                "x": 508.5,
                "top": 504,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 508.5,
                "top": 551,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +38%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 406,
                "top": 577,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "EVENITY",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "blincyto": {
            "blocks": [
              {
                "x": 504,
                "top": 632,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 504,
                "top": 679,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +42%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 420,
                "top": 702,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "BLINCYTO",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "tezspire": {
            "blocks": [
              {
                "x": 505.5,
                "top": 753,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 506,
                "top": 799,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +42%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 407,
                "top": 823.5,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "Tezspire",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "tepezza": {
            "blocks": [
              {
                "x": 503,
                "top": 873,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 503,
                "top": 920,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 400,
                "top": 945,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "Tepezza",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_products": {
            "blocks": [
              {
                "x": 500,
                "top": 1002,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 500.5,
                "top": 1049,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 1140,
                "anchor": "end",
                "semanticRole": "name",
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
          "product_sales": {
            "blocks": [
              {
                "x": 879,
                "top": 470,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "产品",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 877.5,
                "top": 523,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 877.5,
                "top": 579,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 878.5,
                "top": 629,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 878.5,
                "top": 1006,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 877.5,
                "top": 1062,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 878.5,
                "top": 1112,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1247,
                "top": 626,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1246,
                "top": 682,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1246.5,
                "top": 732,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1625.5,
                "top": 434,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "毛",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1626,
                "top": 496,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "利润",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1624.5,
                "top": 543,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1624,
                "top": 600,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 72%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1625.5,
                "top": 636,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1625.5,
                "top": 1187,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1624.5,
                "top": 1239,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 1998.5,
                "top": 345,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1999,
                "top": 398,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "利润",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1998.5,
                "top": 445,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1998,
                "top": 502,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 35%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1999,
                "top": 541,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1999,
                "top": 964,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1998.5,
                "top": 1011,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1998,
                "top": 1056,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 2527.5,
                "top": 406,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "净",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2527,
                "top": 467,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "利润",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2526.5,
                "top": 514,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2526,
                "top": 571,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2527,
                "top": 610,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +8 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2522,
                "top": 645,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2521,
                "top": 692,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2521.5,
                "top": 850,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2521,
                "top": 897,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
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
                "x": 2523.5,
                "top": 755,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2523.5,
                "top": 802,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2443,
                "top": 987,
                "anchor": "start",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2521,
                "top": 987,
                "anchor": "start",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2526.5,
                "top": 1023,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2526.5,
                "top": 1069,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2428,
                "top": 1140,
                "anchor": "start",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售及管理",
                    "size": 27,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2566,
                "top": 1140,
                "anchor": "start",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2521.5,
                "top": 1176,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2521.5,
                "top": 1222,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2427,
                "top": 1291,
                "anchor": "start",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2527,
                "top": 1291,
                "anchor": "start",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2524,
                "top": 1328,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2524,
                "top": 1372,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
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
