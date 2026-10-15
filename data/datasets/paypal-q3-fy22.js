window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "paypal-q3-fy22",
  "name": "PayPal · Q3 FY22",
  "company": "PayPal",
  "meta": {
    "company": "PayPal",
    "title": "PayPal Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paypal-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "hidePeriodStamp": true
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
    "titleColor": "#155077",
    "palette": {
      "source": {
        "node": "#169bd7",
        "label": "#169bd7"
      },
      "hub": {
        "node": "#222d65",
        "label": "#0a216b"
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
      "source": "#8fcae5",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 11.72021484375
    }
  },
  "nodes": [
    {
      "id": "transaction_revenues",
      "label": "Transaction revenues",
      "value": 6.2,
      "valueText": "$6.2B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "other_value_added_services",
      "label": "Other value-added services",
      "value": 0.6,
      "valueText": "$0.6B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#293e80",
      "linkTint": "#97a1bf"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 6.8,
      "valueText": "$6.8B",
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 3.9,
      "valueText": "$3.9B",
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "56% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "transaction_expense",
      "label": "Transaction expense",
      "value": 3,
      "valueText": "($3.0B)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.1,
      "valueText": "$1.1B",
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [
        "16% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 2.7,
      "valueText": "($2.7B)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "profit",
      "col": 4,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.3,
      "valueText": "$1.3B",
      "type": "profit",
      "col": 5,
      "order": 8,
      "notes": [
        "19% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": []
    },
    {
      "id": "technology_development",
      "label": "Technology & Development",
      "value": 0.8,
      "valueText": "($0.8B)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": []
    },
    {
      "id": "sales_marketing",
      "label": "S&M",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": []
    },
    {
      "id": "general_administrative",
      "label": "G&A",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": []
    },
    {
      "id": "customer_support",
      "label": "Customer support",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": []
    },
    {
      "id": "transaction_credit_losses",
      "label": "Transaction & credit",
      "value": 0.4,
      "valueText": "($0.4B)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": []
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 5,
      "order": 15,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "transaction_revenues",
      "target": "revenue",
      "value": 6.2,
      "sourceWidth": 312.5390625,
      "targetWidth": 313.84130859375,
      "y0": 673.26123046875,
      "y1": 746.838134765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8fcae5"
    },
    {
      "source": "other_value_added_services",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "y0": 1019.007568359375,
      "y1": 918.734619140625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#97a1bf"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.9,
      "sourceWidth": 194.03466796875,
      "targetWidth": 194.03466796875,
      "y0": 686.934814453125,
      "y1": 629.635986328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "transaction_expense",
      "value": 3,
      "sourceWidth": 149.75830078125,
      "targetWidth": 149.75830078125,
      "y0": 858.831298828125,
      "y1": 933.059326171875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.1,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "y0": 560.616943359375,
      "y1": 475.970947265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.7,
      "sourceWidth": 138.0380859375,
      "targetWidth": 136.73583984375,
      "y0": 657.63427734375,
      "y1": 722.095458984375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 44.2763671875,
      "targetWidth": 42.97412109375,
      "y0": 470.11083984375,
      "y1": 380.906982421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 11.72021484375,
      "targetWidth": 13.0224609375,
      "y0": 498.109130859375,
      "y1": 660.23876953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 22.13818359375,
      "targetWidth": 23.4404296875,
      "y0": 496.806884765625,
      "y1": 414.1142578125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 0.8,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "y0": 673.912353515625,
      "y1": 763.767333984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 0.5,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "y0": 707.770751953125,
      "y1": 879.667236328125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_administrative",
      "value": 0.5,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "y0": 734.466796875,
      "y1": 985.80029296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "customer_support",
      "value": 0.5,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "y0": 759.20947265625,
      "y1": 1105.60693359375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "transaction_credit_losses",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 19.53369140625,
      "y0": 779.394287109375,
      "y1": 1215.646728515625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 789.1611328125,
      "y1": 1310.0595703125,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "transaction_revenues": {
        "x": 464.90185546875,
        "y": 516.99169921875,
        "width": 72.92578125,
        "height": 312.5390625
      },
      "other_value_added_services": {
        "x": 464.90185546875,
        "y": 1004.03173828125,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "revenue": {
        "x": 928.50146484375,
        "y": 589.91748046875,
        "width": 72.92578125,
        "height": 343.79296875
      },
      "gross_profit": {
        "x": 1381.68310546875,
        "y": 532.61865234375,
        "width": 72.92578125,
        "height": 194.03466796875
      },
      "transaction_expense": {
        "x": 1384.28759765625,
        "y": 858.18017578125,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "operating_profit": {
        "x": 1815.3310546875,
        "y": 447.97265625,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "operating_expenses": {
        "x": 1815.3310546875,
        "y": 653.7275390625,
        "width": 72.92578125,
        "height": 136.73583984375
      },
      "other": {
        "x": 2178.65771484375,
        "y": 485.73779296875,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "net_profit": {
        "x": 2317.998046875,
        "y": 359.419921875,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "tax": {
        "x": 2316.69580078125,
        "y": 653.7275390625,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "technology_development": {
        "x": 2317.998046875,
        "y": 743.58251953125,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "sales_marketing": {
        "x": 2317.998046875,
        "y": 865.99365234375,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "general_administrative": {
        "x": 2317.998046875,
        "y": 972.77783203125,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "customer_support": {
        "x": 2317.998046875,
        "y": 1093.88671875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "transaction_credit_losses": {
        "x": 2317.998046875,
        "y": 1205.8798828125,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "restructuring": {
        "x": 2317.998046875,
        "y": 1308.75732421875,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "transaction_revenues": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 421.927734375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#169bd7"
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 227.89306640625,
            "top": 609.451171875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Transaction",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#169bd7"
              },
              {
                "text": "revenues",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#169bd7"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 227.89306640625,
            "top": 720.14208984375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Transaction fee, for payments,",
                "size": 22.13818359375,
                "weight": 800,
                "color": "#777"
              },
              {
                "text": "conversion cross-border,",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "transfer of funds",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "other_value_added_services": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 907.66552734375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#293e80"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 227.89306640625,
            "top": 886.82958984375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#293e80"
              },
              {
                "text": "value-added",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#293e80"
              },
              {
                "text": "services",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 227.89306640625,
            "top": 1058.72607421875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Partnerships, referral,",
                "size": 22.13818359375,
                "weight": 800,
                "color": "#777"
              },
              {
                "text": "subscription, gateway fees,",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "interest",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 964.96435546875,
            "top": 438.85693359375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#0a216b"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#0a216b"
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1416.84375,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "56% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1851.7939453125,
            "top": 261.75146484375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "16% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2505.521484375,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "19% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "transaction_expense": {
        "blocks": [
          {
            "x": 1420.75048828125,
            "top": 1020.9609375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Transaction",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expense",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1851.7939453125,
            "top": 804.7880859375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2215.12060546875,
            "top": 519.59619140625,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#008900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#008900"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 615.96240234375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Tax",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 720.14208984375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Technology &",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Development",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 856.8779296875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "S&M",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "general_administrative": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 946.73291015625,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "G&A",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "customer_support": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 1045.70361328125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Customer",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "support",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "transaction_credit_losses": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 1177.23046875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Transaction &",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 1315.2685546875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Restructuring",
                "size": 27.34716796875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "tpv",
      "literal": "$337B",
      "value": "337",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq"
    },
    {
      "id": "active-accounts",
      "literal": "432M",
      "value": "432000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "tpa",
      "literal": "50.1",
      "value": "50.1",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "paypal-company-wordmark",
      "href": "data/assets/raster-annotations/paypal/company-wordmark-q4-fy25.png",
      "x": 691.49267578125,
      "y": 286.494140625,
      "width": 479.2265625,
      "height": 118.50439453125
    },
    {
      "key": "paypal-venmo",
      "href": "data/assets/raster-annotations/paypal/transaction-revenues-paypal-venmo-icons-q4-fy25.png",
      "x": 58.60107421875,
      "y": 418.02099609375,
      "width": 351.6064453125,
      "height": 169.2919921875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"29.95166015625\" y=\"1156.39453125\" width=\"203.150390625\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#019fdf\"/><text x=\"131.52685546875\" y=\"1211.0888671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"800\">TPV</text><text x=\"131.52685546875\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" data-operating-metric=\"tpv\">$337B</text><text x=\"131.52685546875\" y=\"1281.41015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+9% Y/Y</text></g><g><rect x=\"246.12451171875\" y=\"1156.39453125\" width=\"380.255859375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#019fdf\"/><text x=\"436.25244140625\" y=\"1211.0888671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"800\">Active accounts</text><text x=\"436.25244140625\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" data-operating-metric=\"active-accounts\">432M</text><text x=\"436.25244140625\" y=\"1281.41015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+4% Y/Y</text></g><g><rect x=\"636.79833984375\" y=\"1156.39453125\" width=\"190.1279296875\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#019fdf\"/><text x=\"731.8623046875\" y=\"1211.0888671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"800\">TPA</text><text x=\"731.8623046875\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" data-operating-metric=\"tpa\">50.1</text><text x=\"731.8623046875\" y=\"1281.41015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">+13% Y/Y</text></g><text x=\"440.1591796875\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">TPV = Total Payment Volume</text><text x=\"440.1591796875\" y=\"1385.58984375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">TPA = Transactions per active account (TTM)</text></g>",
  "i18n": {
    "zh": {
      "name": "PayPal · FY22 第三季度",
      "meta": {
        "title": "PayPal FY22 第三季度利润表"
      },
      "nodes": {
        "transaction_revenues": {
          "label": "交易收入"
        },
        "other_value_added_services": {
          "label": "其他增值服务"
        },
        "revenue": {
          "label": "收入"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "transaction_expense": {
          "label": "交易费用"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "technology_development": {
          "label": "技术与开发"
        },
        "sales_marketing": {
          "label": "销售与营销"
        },
        "general_administrative": {
          "label": "一般及行政"
        },
        "customer_support": {
          "label": "客户支持"
        },
        "transaction_credit_losses": {
          "label": "交易与信用损失"
        },
        "restructuring": {
          "label": "重组"
        }
      },
      "layout": {
        "labels": {
          "transaction_revenues": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 421.927734375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#169bd7"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 227.89306640625,
                "top": 609.451171875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "交易收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#169bd7"
                  },
                  {
                    "text": "",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#169bd7"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 227.89306640625,
                "top": 720.14208984375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "支付交易手续费、",
                    "size": 22.13818359375,
                    "weight": 800,
                    "color": "#777"
                  },
                  {
                    "text": "货币兑换与跨境交易、",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "资金转账",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "other_value_added_services": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 907.66552734375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#293e80"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 227.89306640625,
                "top": 886.82958984375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "其他增值服务",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#293e80"
                  },
                  {
                    "text": "",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#293e80"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 227.89306640625,
                "top": 1058.72607421875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "合作伙伴、推荐、",
                    "size": 22.13818359375,
                    "weight": 800,
                    "color": "#777"
                  },
                  {
                    "text": "订阅、网关费、",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "利息",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 964.96435546875,
                "top": 438.85693359375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#0a216b"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#0a216b"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1416.84375,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 56%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1851.7939453125,
                "top": 261.75146484375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2505.521484375,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "transaction_expense": {
            "blocks": [
              {
                "x": 1420.75048828125,
                "top": 1020.9609375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "交易费用",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1851.7939453125,
                "top": 804.7880859375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2215.12060546875,
                "top": 519.59619140625,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#008900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#008900"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 615.96240234375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "税费",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 720.14208984375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "技术与开发",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 856.8779296875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "销售营销（S&M）",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "general_administrative": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 946.73291015625,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "一般行政（G&A）",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "customer_support": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 1045.70361328125,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "客户支持",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "transaction_credit_losses": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 1177.23046875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "交易与信用损失",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 1315.2685546875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "重组",
                    "size": 27.34716796875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"29.95166015625\" y=\"1156.39453125\" width=\"203.150390625\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#019fdf\"/><text x=\"131.52685546875\" y=\"1211.0888671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"800\">TPV</text><text x=\"131.52685546875\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" data-operating-metric=\"tpv\">$337B</text><text x=\"131.52685546875\" y=\"1281.41015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 +9%</text></g><g><rect x=\"246.12451171875\" y=\"1156.39453125\" width=\"380.255859375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#019fdf\"/><text x=\"436.25244140625\" y=\"1211.0888671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"800\">活跃账户</text><text x=\"436.25244140625\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" data-operating-metric=\"active-accounts\">432M</text><text x=\"436.25244140625\" y=\"1281.41015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 +4%</text></g><g><rect x=\"636.79833984375\" y=\"1156.39453125\" width=\"190.1279296875\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#019fdf\"/><text x=\"731.8623046875\" y=\"1211.0888671875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" font-weight=\"800\">TPA</text><text x=\"731.8623046875\" y=\"1250.15625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\" data-operating-metric=\"tpa\">50.1</text><text x=\"731.8623046875\" y=\"1281.41015625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"white\">同比 +13%</text></g><text x=\"440.1591796875\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">TPV = 总支付额</text><text x=\"440.1591796875\" y=\"1385.58984375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">TPA = 每个活跃账户交易次数（TTM）</text></g>"
    }
  }
});
