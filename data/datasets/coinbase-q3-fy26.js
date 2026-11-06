(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "coinbase-q3-fy26",
  "name": "Coinbase · Q3 FY26",
  "company": "Coinbase",
  "meta": {
    "company": "Coinbase",
    "title": "Coinbase Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/coinbase-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196,
    "titleSize": 123,
    "titleWeight": 800,
    "logoX": 1201,
    "logoY": 229,
    "logoWidth": 253,
    "logoHeight": 242,
    "logoViewBox": "0 0 253 242",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).coinbaseLogo || ''
  },
  "nodes": [
    {
      "id": "consumer",
      "label": "Consumer",
      "value": 450,
      "type": "source",
      "notes": [
        "(47%) Y/Y"
      ]
    },
    {
      "id": "institutions",
      "label": "Institutions",
      "value": 92,
      "type": "source",
      "notes": [
        "(32%) Y/Y"
      ]
    },
    {
      "id": "other_transaction",
      "label": "Other",
      "value": 48,
      "type": "source",
      "notes": [
        "(28%) Y/Y"
      ]
    },
    {
      "id": "stablecoin",
      "label": "Stablecoin",
      "value": 307,
      "type": "source",
      "notes": [
        "(13%) Y/Y"
      ]
    },
    {
      "id": "blockchain_rewards",
      "label": "Blockchain rewards",
      "value": 86,
      "type": "source",
      "notes": [
        "(54%) Y/Y"
      ]
    },
    {
      "id": "interest_income",
      "label": "Interest income",
      "value": 69,
      "type": "source",
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "other_subscription",
      "label": "Other sub",
      "value": 109,
      "type": "source",
      "notes": [
        "(24%) Y/Y"
      ]
    },
    {
      "id": "transaction_based",
      "label": "Transaction-based",
      "value": 590,
      "type": "source",
      "notes": [
        "(44%) Y/Y"
      ]
    },
    {
      "id": "subscription_services",
      "label": "Subscription & Services",
      "value": 570,
      "type": "source",
      "notes": [
        "(24%) Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 55,
      "type": "source",
      "notes": [
        "(27%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1216,
      "type": "hub",
      "notes": [
        "(35%) Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 62,
      "type": "profit",
      "notes": [
        "5% margin",
        "(21pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1203,
      "type": "cost",
      "notes": []
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 447,
      "type": "cost",
      "notes": [
        "37% of revenue",
        "+14pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 319,
      "type": "cost",
      "notes": [
        "26% of revenue",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 243,
      "type": "cost",
      "notes": [
        "20% of revenue",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "transaction_costs",
      "label": "Transaction",
      "value": 194,
      "type": "cost",
      "notes": [
        "16% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_other_income",
      "label": "Other",
      "value": 49,
      "type": "profit",
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 657,
      "type": "profit",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 719,
      "type": "profit",
      "notes": [
        "59% margin",
        "+36pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "consumer",
      "target": "transaction_based",
      "value": 450,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#87a9ef"
    },
    {
      "source": "institutions",
      "target": "transaction_based",
      "value": 92,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#87a9ef"
    },
    {
      "source": "other_transaction",
      "target": "transaction_based",
      "value": 48,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#87a9ef"
    },
    {
      "source": "stablecoin",
      "target": "subscription_services",
      "value": 307,
      "sourceWidth": 83.34375,
      "targetWidth": 83.34375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#87a9ef"
    },
    {
      "source": "blockchain_rewards",
      "target": "subscription_services",
      "value": 86,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#87a9ef"
    },
    {
      "source": "interest_income",
      "target": "subscription_services",
      "value": 69,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#87a9ef"
    },
    {
      "source": "other_subscription",
      "target": "subscription_services",
      "value": 109,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#87a9ef"
    },
    {
      "source": "transaction_based",
      "target": "revenue",
      "value": 590,
      "sourceWidth": 160.17626953125,
      "targetWidth": 160.17626953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#87a9ef"
    },
    {
      "source": "subscription_services",
      "target": "revenue",
      "value": 570,
      "sourceWidth": 154.96728515625,
      "targetWidth": 154.96728515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#87a9ef"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 55,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#87a9ef"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 62,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cd98"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 1154,
      "sourceWidth": 313.84130859375,
      "targetWidth": 313.84130859375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_other_income",
      "target": "operating_expenses",
      "value": 49,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#98cd98"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 447,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 319,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 243,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "transaction_costs",
      "value": 194,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 62,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cd98"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 657,
      "sourceWidth": 178.40771484375,
      "targetWidth": 179.7099609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#98cd98"
    }
  ],
  "layout": {
    "scale": 0.27347167968749997,
    "nodes": {
      "consumer": {
        "x": 369.84,
        "y": 346.4,
        "width": 72.93,
        "height": 122.41
      },
      "institutions": {
        "x": 369.84,
        "y": 579.5,
        "width": 72.93,
        "height": 24.74
      },
      "other_transaction": {
        "x": 369.84,
        "y": 705.82,
        "width": 72.93,
        "height": 13.02
      },
      "stablecoin": {
        "x": 369.84,
        "y": 832.14,
        "width": 72.93,
        "height": 83.34
      },
      "blockchain_rewards": {
        "x": 369.84,
        "y": 1028.77,
        "width": 72.93,
        "height": 23.44
      },
      "interest_income": {
        "x": 369.84,
        "y": 1151.19,
        "width": 72.93,
        "height": 18.23
      },
      "other_subscription": {
        "x": 369.84,
        "y": 1277.5,
        "width": 72.93,
        "height": 29.95
      },
      "transaction_based": {
        "x": 837.34,
        "y": 481.83,
        "width": 72.93,
        "height": 160.18
      },
      "subscription_services": {
        "x": 837.34,
        "y": 894.64,
        "width": 72.93,
        "height": 154.97
      },
      "other_revenue": {
        "x": 837.34,
        "y": 1267.09,
        "width": 72.93,
        "height": 15.63
      },
      "revenue": {
        "x": 1304.85,
        "y": 614.66,
        "width": 72.93,
        "height": 330.77
      },
      "operating_profit": {
        "x": 1764.54,
        "y": 475.32,
        "width": 72.93,
        "height": 16.93
      },
      "operating_expenses": {
        "x": 1771.05,
        "y": 712.33,
        "width": 72.93,
        "height": 326.86
      },
      "technology": {
        "x": 2238.56,
        "y": 739.68,
        "width": 72.93,
        "height": 122.41
      },
      "ga": {
        "x": 2238.56,
        "y": 933.71,
        "width": 72.93,
        "height": 87.25
      },
      "sm": {
        "x": 2238.56,
        "y": 1097.79,
        "width": 72.93,
        "height": 65.11
      },
      "transaction_costs": {
        "x": 2238.56,
        "y": 1234.53,
        "width": 72.93,
        "height": 52.09
      },
      "operating_other_income": {
        "x": 1514.51,
        "y": 1054.82,
        "width": 72.93,
        "height": 13.02
      },
      "other_income": {
        "x": 2077.08,
        "y": 447.97,
        "width": 72.93,
        "height": 178.41
      },
      "net_profit": {
        "x": 2238.56,
        "y": 363.33,
        "width": 72.93,
        "height": 196.64
      }
    },
    "labels": {
      "consumer": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 248.72900390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(47%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 291.703125,
            "top": 384.07607421875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Consumer",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "institutions": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 485.73779296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(32%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 312.5390625,
            "top": 568.2927734375,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Institutions",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_transaction": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 612.0556640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(28%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 259.14697265625,
            "top": 688.694921875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "stablecoin": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 739.67578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(13%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 304.7255859375,
            "top": 850.27568359375,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Stablecoin",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "blockchain_rewards": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 933.71044921875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(54%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 993.50478515625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Blockchain",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "rewards",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "interest_income": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 1056.12158203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 337.28173828125,
            "top": 1139.46533203125,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Interest income",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_subscription": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 1182.439453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(24%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 303.42333984375,
            "top": 1267.08544921875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other sub",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 873.80712890625,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Transaction-based",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(44%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "subscription_services": {
        "blocks": [
          {
            "x": 879.01611328125,
            "top": 687.5859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(24%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 879.01611328125,
            "top": 1117.3271484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(27%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1340.01123046875,
            "top": 464.90185546875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(35%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1801.00634765625,
            "top": 285.19189453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(21pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1807.517578125,
            "top": 1053.51708984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_other_income": {
        "blocks": [
          {
            "x": 1550.97509765625,
            "top": 1080.8642578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1998.94775390625,
            "top": 505.271484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2470.36083984375,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "59% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+36pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 760.51171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Technology ($447M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "37% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+14pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 912.87451171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A ($319M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "26% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 1070.4462890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "S&M ($243M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "20% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "transaction_costs": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 1218.90234375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Transaction ($194M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "16% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#707070"
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
    "titleColor": "#155478",
    "noteColor": "#707070",
    "labelYOffset": 0,
    "linkOpacity": 1,
    "nodeWidth": 73,
    "palette": {
      "source": {
        "node": "#0052fe",
        "label": "#0052fe"
      },
      "hub": {
        "node": "#0052fe",
        "label": "#0052fe"
      },
      "profit": {
        "node": "#289f28",
        "label": "#00965b"
      },
      "cost": {
        "node": "#d50000",
        "label": "#a51b06"
      }
    },
    "type": {
      "name": 39,
      "value": 39,
      "note": 27,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "i18n": {
    "zh": {
      "name": "Coinbase · 2026 财年第三季度",
      "meta": {
        "title": "Coinbase 2026 财年第三季度利润表",
        "titleSize": 112
      },
      "nodes": {
        "consumer": {
          "label": "消费者",
          "notes": [
            "同比 (47%)"
          ]
        },
        "institutions": {
          "label": "机构",
          "notes": [
            "同比 (32%)"
          ]
        },
        "other_transaction": {
          "label": "其他",
          "notes": [
            "同比 (28%)"
          ]
        },
        "stablecoin": {
          "label": "稳定币",
          "notes": [
            "同比 (13%)"
          ]
        },
        "blockchain_rewards": {
          "label": "区块链奖励",
          "notes": [
            "同比 (54%)"
          ]
        },
        "interest_income": {
          "label": "利息收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "other_subscription": {
          "label": "其他订阅",
          "notes": [
            "同比 (24%)"
          ]
        },
        "transaction_based": {
          "label": "交易收入",
          "notes": [
            "同比 (44%)"
          ]
        },
        "subscription_services": {
          "label": "订阅与服务",
          "notes": [
            "同比 (24%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (27%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (35%)"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 5%",
            "同比 (21pp)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 37%",
            "同比 +14pp"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 26%",
            "同比 +4pp"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 20%",
            "同比 +6pp"
          ]
        },
        "transaction_costs": {
          "label": "交易",
          "notes": [
            "占收入 16%",
            "同比 +2pp"
          ]
        },
        "operating_other_income": {
          "label": "其他",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 59%",
            "同比 +36pp"
          ]
        }
      },
      "layout": {
        "labels": {
          "consumer": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 248.72900390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (47%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 291.703125,
                "top": 384.07607421875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "消费者",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "institutions": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 485.73779296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (32%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 312.5390625,
                "top": 568.2927734375,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "机构",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_transaction": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 612.0556640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (28%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 259.14697265625,
                "top": 688.694921875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "stablecoin": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 739.67578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (13%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 304.7255859375,
                "top": 850.27568359375,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "稳定币",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "blockchain_rewards": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 933.71044921875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (54%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 993.50478515625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "区块链",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "奖励",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "interest_income": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 1056.12158203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 337.28173828125,
                "top": 1139.46533203125,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利息收入",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_subscription": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 1182.439453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (24%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 303.42333984375,
                "top": 1267.08544921875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 873.80712890625,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "交易收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (44%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "subscription_services": {
            "blocks": [
              {
                "x": 879.01611328125,
                "top": 687.5859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "与服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (24%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 879.01611328125,
                "top": 1117.3271484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (27%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1340.01123046875,
                "top": 464.90185546875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (35%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1801.00634765625,
                "top": 285.19189453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (21pp)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1807.517578125,
                "top": 1053.51708984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_other_income": {
            "blocks": [
              {
                "x": 1550.97509765625,
                "top": 1080.8642578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1998.94775390625,
                "top": 505.271484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2470.36083984375,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 59%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +36pp",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 760.51171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "技术 ($447M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 37%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +14pp",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 912.87451171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "管理费用 ($319M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +4pp",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 1070.4462890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与营销 ($243M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +6pp",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "transaction_costs": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 1218.90234375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "交易 ($194M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +2pp",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});})();
