window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "chime-q2-fy26",
  "name": "Chime · Q2 FY26",
  "company": "Chime",
  "meta": {
    "company": "Chime",
    "title": "Chime Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/chime-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1331.5,
    "titleY": 199.6898245614035,
    "titleSize": 124.14035087719299,
    "titleWeight": 800,
    "titleTextLength": 2112
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "cost_of_revenue:left",
        "gross_profit:left",
        "interest:right",
        "marketing:left",
        "operating_profit:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#afdfbf",
      "hub": "#afdfbf",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "payment_revenue",
      "label": "Payment revenue",
      "value": 430,
      "valueText": "$430M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#5fc781",
      "labelColor": "#5fc781",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "platform_related_revenue",
      "label": "Platform-related revenue",
      "value": 240,
      "valueText": "$240M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#5fc781",
      "labelColor": "#5fc781",
      "notes": [
        "+48% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 670,
      "valueText": "$670M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#5fc781",
      "labelColor": "#5fc781",
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 595,
      "valueText": "$595M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "89% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 75,
      "valueText": "($75M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 22,
      "valueText": "$22M",
      "type": "profit",
      "col": 3,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "3% margin",
        "+179pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 573,
      "valueText": "($573M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 7,
      "valueText": "$7M",
      "type": "profit",
      "col": 4,
      "order": 7,
      "color": "#6ab36a",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 28,
      "valueText": "$28M",
      "type": "profit",
      "col": 5,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "4% margin",
        "+179pp Y/Y"
      ]
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 164,
      "valueText": "($164M)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "Marketing ($164M)",
        "25% of revenue",
        "(11pp) Y/Y"
      ]
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 112,
      "valueText": "($112M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "Technology ($112M)",
        "17% of revenue",
        "(101pp) Y/Y"
      ]
    },
    {
      "id": "operations",
      "label": "Operations",
      "value": 110,
      "valueText": "($110M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "Operations ($110M)",
        "16% of revenue",
        "(22pp) Y/Y"
      ]
    },
    {
      "id": "transaction_risk_losses",
      "label": "Transaction and risk losses",
      "value": 103,
      "valueText": "($103M)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "15% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 80,
      "valueText": "($80M)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "G&A ($80M)",
        "12% of revenue",
        "(41pp) Y/Y"
      ]
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 4,
      "valueText": "($4M)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "color": "#d85454",
      "labelColor": "#941100",
      "notes": [
        "D&A ($4M)",
        "1% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "payment_revenue",
      "target": "revenue",
      "value": 430,
      "sourceWidth": 186,
      "y0": 632,
      "sourceOrder": 0,
      "targetWidth": 186,
      "y1": 771,
      "targetOrder": 0,
      "linkTint": "#afdfbf"
    },
    {
      "source": "platform_related_revenue",
      "target": "revenue",
      "value": 240,
      "sourceWidth": 104,
      "y0": 1035,
      "sourceOrder": 0,
      "targetWidth": 104,
      "y1": 916,
      "targetOrder": 1,
      "linkTint": "#afdfbf"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 595,
      "sourceWidth": 257,
      "y0": 806.5,
      "sourceOrder": 0,
      "targetWidth": 258,
      "y1": 674,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 75,
      "sourceWidth": 32,
      "y0": 952,
      "sourceOrder": 1,
      "targetWidth": 34,
      "y1": 1067,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 22,
      "sourceWidth": 8,
      "y0": 550,
      "sourceOrder": 0,
      "targetWidth": 10,
      "y1": 463,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 573,
      "sourceWidth": 248,
      "y0": 679,
      "sourceOrder": 1,
      "targetWidth": 249,
      "y1": 825.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 22,
      "sourceWidth": 10,
      "y0": 463,
      "sourceOrder": 0,
      "targetWidth": 9.286,
      "y1": 358.643,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 7,
      "sourceWidth": 4,
      "y0": 447,
      "sourceOrder": 0,
      "targetWidth": 3.714,
      "y1": 365.143,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 164,
      "sourceWidth": 71.143,
      "y0": 736.571,
      "sourceOrder": 0,
      "targetWidth": 72,
      "y1": 621,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 112,
      "sourceWidth": 47.429,
      "y0": 795.857,
      "sourceOrder": 1,
      "targetWidth": 48,
      "y1": 767,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "operations",
      "value": 110,
      "sourceWidth": 48.417,
      "y0": 843.78,
      "sourceOrder": 2,
      "targetWidth": 49,
      "y1": 899.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "transaction_risk_losses",
      "value": 103,
      "sourceWidth": 45.452,
      "y0": 890.714,
      "sourceOrder": 3,
      "targetWidth": 46,
      "y1": 1040,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 80,
      "sourceWidth": 34.583,
      "y0": 930.732,
      "sourceOrder": 4,
      "targetWidth": 35,
      "y1": 1179.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 4,
      "sourceWidth": 1.976,
      "y0": 949.012,
      "sourceOrder": 5,
      "targetWidth": 2,
      "y1": 1306,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "payment_revenue": {
        "x": 406,
        "y": 539,
        "width": 71,
        "height": 186
      },
      "platform_related_revenue": {
        "x": 406,
        "y": 983,
        "width": 71,
        "height": 104
      },
      "revenue": {
        "x": 873,
        "y": 678,
        "width": 70,
        "height": 290
      },
      "gross_profit": {
        "x": 1340,
        "y": 545,
        "width": 71,
        "height": 258
      },
      "cost_of_revenue": {
        "x": 1340,
        "y": 1050,
        "width": 71,
        "height": 34
      },
      "operating_profit": {
        "x": 1808,
        "y": 458,
        "width": 70,
        "height": 10
      },
      "operating_expenses": {
        "x": 1808,
        "y": 701,
        "width": 70,
        "height": 249
      },
      "interest": {
        "x": 2143,
        "y": 445,
        "width": 70,
        "height": 4
      },
      "net_profit": {
        "x": 2274,
        "y": 354,
        "width": 71,
        "height": 13
      },
      "marketing": {
        "x": 2274,
        "y": 585,
        "width": 71,
        "height": 72
      },
      "technology": {
        "x": 2274,
        "y": 743,
        "width": 71,
        "height": 48
      },
      "operations": {
        "x": 2274,
        "y": 875,
        "width": 71,
        "height": 49
      },
      "transaction_risk_losses": {
        "x": 2274,
        "y": 1017,
        "width": 71,
        "height": 46
      },
      "ga": {
        "x": 2274,
        "y": 1162,
        "width": 71,
        "height": 35
      },
      "da": {
        "x": 2274,
        "y": 1305,
        "width": 71,
        "height": 2
      }
    },
    "labels": {
      "payment_revenue": {
        "blocks": [
          {
            "x": 445.5,
            "top": 440.97,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#17ca7a",
                "textLength": 117
              }
            ]
          },
          {
            "x": 446.5,
            "top": 494.94,
            "anchor": "middle",
            "semanticRole": "description",
            "lineGap": 5,
            "lines": [
              {
                "text": "+21% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 202.75,
            "top": 581.7,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 18,
            "lines": [
              {
                "text": "Payment",
                "size": 40,
                "weight": 800,
                "color": "#1ec576",
                "textLength": 168
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800,
                "color": "#1ec576",
                "textLength": 155
              }
            ]
          },
          {
            "x": 200.5,
            "top": 688.94,
            "anchor": "middle",
            "semanticRole": "description",
            "lineGap": 5,
            "lines": [
              {
                "text": "Interchange-based fees",
                "size": 28,
                "weight": 400,
                "color": "#5e5e5e",
                "textLength": 299
              }
            ]
          }
        ]
      },
      "platform_related_revenue": {
        "blocks": [
          {
            "x": 445.5,
            "top": 883.97,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#16c979",
                "textLength": 117
              }
            ]
          },
          {
            "x": 446.5,
            "top": 938.94,
            "anchor": "middle",
            "semanticRole": "description",
            "lineGap": 5,
            "lines": [
              {
                "text": "+48% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 202.25,
            "top": 978.7,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 21,
            "lines": [
              {
                "text": "Platform-related",
                "size": 40,
                "weight": 800,
                "color": "#1ec576",
                "textLength": 318
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800,
                "color": "#1ec576",
                "textLength": 155
              }
            ]
          },
          {
            "x": 199,
            "top": 1092.94,
            "anchor": "middle",
            "semanticRole": "description",
            "lineGap": 5,
            "lines": [
              {
                "text": "Credit Builder, MyPay, SpotMe",
                "size": 28,
                "weight": 400,
                "color": "#5e5e5e",
                "textLength": 388
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 902.1666666666666,
            "top": 527.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000005,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#19c878",
                "textLength": 162
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#19c878",
                "textLength": 118
              },
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1380.375,
            "top": 356.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 224
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "89% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1375.8333333333333,
            "top": 1098.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 16.284999999999968,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 114
              },
              {
                "text": "revenue",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 133
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 104
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1845.25,
            "top": 269.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 312
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 95
              },
              {
                "text": "3% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 135
              },
              {
                "text": "+179pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 144
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1840,
            "top": 961.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.634999999999991,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 193
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 176
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 143
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2178,
            "top": 462.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 10,
            "lines": [
              {
                "text": "Interest",
                "size": 30,
                "weight": 800,
                "color": "#008e00",
                "textLength": 117
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#008e00",
                "textLength": 57
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2504.375,
            "top": 301.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 187
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 95
              },
              {
                "text": "4% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 135
              },
              {
                "text": "+179pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 144
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2505,
            "top": 581.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.90500000000003,
            "lines": [
              {
                "text": "Marketing ($164M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 277
              },
              {
                "text": "25% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "(11pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 130
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2504.6666666666665,
            "top": 707.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.90500000000003,
            "lines": [
              {
                "text": "Technology ($112M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 294
              },
              {
                "text": "17% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "(101pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 146
              }
            ]
          }
        ]
      },
      "operations": {
        "blocks": [
          {
            "x": 2505,
            "top": 830.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.40500000000003,
            "lines": [
              {
                "text": "Operations ($110M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 290
              },
              {
                "text": "16% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "(22pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 130
              }
            ]
          }
        ]
      },
      "transaction_risk_losses": {
        "blocks": [
          {
            "x": 2504.7,
            "top": 966.5,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 9.63500000000002,
            "lines": [
              {
                "text": "Transaction and",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 243
              },
              {
                "text": "risk losses",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 153
              },
              {
                "text": "$value",
                "size": 30.439,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "15% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2505,
            "top": 1162.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.904999999999973,
            "lines": [
              {
                "text": "G&A ($80M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 168
              },
              {
                "text": "12% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "(41pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 130
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2505,
            "top": 1283.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.904999999999973,
            "lines": [
              {
                "text": "D&A ($4M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 150
              },
              {
                "text": "1% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 180
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"36\" y=\"1164\" width=\"379\" height=\"149\" rx=\"31\" fill=\"#16c979\"/><rect x=\"428\" y=\"1164\" width=\"346\" height=\"149\" rx=\"31\" fill=\"#16c979\"/><rect x=\"787\" y=\"1164\" width=\"146\" height=\"149\" rx=\"31\" fill=\"#16c979\"/><text x=\"225\" y=\"1221.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Transaction Margin</text><text x=\"225.5\" y=\"1261.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">73%</text><text x=\"226\" y=\"1297.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+4pp Y/Y</text><text x=\"600.5\" y=\"1221.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Active Members</text><text x=\"600.5\" y=\"1261.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">10.4M</text><text x=\"603\" y=\"1297.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+20% Y/Y</text><text x=\"858.5\" y=\"1223.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARPAM</text><text x=\"860\" y=\"1260.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$260</text><text x=\"862\" y=\"1297.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"397\" y=\"1353.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">ARPAM = Average Revenue per Active Member</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "ARPAM",
      "GMV",
      "Clover GPV",
      "USDC",
      "Klarna Checkout (KCO)",
      "monday"
    ],
    "zh": {
      "name": "Chime · 2026 财年第二季度",
      "meta": {
        "title": "Chime 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1624.328
      },
      "nodes": {
        "payment_revenue": {
          "label": "支付收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "platform_related_revenue": {
          "label": "平台相关收入",
          "notes": [
            "同比 +48%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +27%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 89%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 +179 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 +179 个百分点"
          ]
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "市场营销 ($164M)",
            "占收入 25%",
            "同比 (11 个百分点)"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "技术 ($112M)",
            "占收入 17%",
            "同比 (101 个百分点)"
          ]
        },
        "operations": {
          "label": "运营",
          "notes": [
            "运营 ($110M)",
            "占收入 16%",
            "同比 (22 个百分点)"
          ]
        },
        "transaction_risk_losses": {
          "label": "交易与风险损失",
          "notes": [
            "占收入 15%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "管理费用 ($80M)",
            "占收入 12%",
            "同比 (41 个百分点)"
          ]
        },
        "da": {
          "label": "折旧与摊销",
          "notes": [
            "折旧与摊销 ($4M)",
            "占收入 1%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "payment_revenue": {
            "blocks": [
              {
                "x": 445.5,
                "top": 440.97,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#17ca7a",
                    "textLength": 117
                  }
                ]
              },
              {
                "x": 446.5,
                "top": 494.94,
                "anchor": "middle",
                "semanticRole": "description",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "同比 +21%",
                    "size": 25,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 202.75,
                "top": 581.7,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 18,
                "lines": [
                  {
                    "text": "支付",
                    "size": 40,
                    "weight": 800,
                    "color": "#1ec576"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#1ec576"
                  }
                ]
              },
              {
                "x": 200.5,
                "top": 688.94,
                "anchor": "middle",
                "semanticRole": "description",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "基于交换费",
                    "size": 25,
                    "weight": 400,
                    "color": "#5e5e5e"
                  }
                ]
              }
            ]
          },
          "platform_related_revenue": {
            "blocks": [
              {
                "x": 445.5,
                "top": 883.97,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#16c979",
                    "textLength": 117
                  }
                ]
              },
              {
                "x": 446.5,
                "top": 938.94,
                "anchor": "middle",
                "semanticRole": "description",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "同比 +48%",
                    "size": 25,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 202.25,
                "top": 978.7,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 21,
                "lines": [
                  {
                    "text": "平台相关",
                    "size": 40,
                    "weight": 800,
                    "color": "#1ec576"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#1ec576"
                  }
                ]
              },
              {
                "x": 199,
                "top": 1092.94,
                "anchor": "middle",
                "semanticRole": "description",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "Credit Builder、MyPay、SpotMe",
                    "size": 25,
                    "weight": 400,
                    "color": "#5e5e5e"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 902.1666666666666,
                "top": 527.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000005,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#19c878"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#19c878",
                    "textLength": 118
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28,
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
                "x": 1380.375,
                "top": 356.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
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
                    "color": "#008f51",
                    "textLength": 117
                  },
                  {
                    "text": "利润率 89%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 1375.8333333333333,
                "top": 1098.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 16.284999999999968,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "收入",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 104
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1845.25,
                "top": 269.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
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
                    "color": "#008f51",
                    "textLength": 95
                  },
                  {
                    "text": "利润率 3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +179 个百分点",
                    "size": 28,
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
                "x": 1840,
                "top": 961.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.634999999999991,
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
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 143
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2178,
                "top": 462.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "利息",
                    "size": 30,
                    "weight": 800,
                    "color": "#008e00"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#008e00",
                    "textLength": 57
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2504.375,
                "top": 301.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
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
                    "color": "#008f51",
                    "textLength": 95
                  },
                  {
                    "text": "利润率 4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +179 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2505,
                "top": 581.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.90500000000003,
                "lines": [
                  {
                    "text": "市场营销 ($164M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (11 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2504.6666666666665,
                "top": 707.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.90500000000003,
                "lines": [
                  {
                    "text": "技术 ($112M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (101 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operations": {
            "blocks": [
              {
                "x": 2505,
                "top": 830.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.40500000000003,
                "lines": [
                  {
                    "text": "运营 ($110M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (22 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "transaction_risk_losses": {
            "blocks": [
              {
                "x": 2504.7,
                "top": 966.5,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 9.63500000000002,
                "lines": [
                  {
                    "text": "交易及",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "风险损失",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.439,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2505,
                "top": 1162.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.904999999999973,
                "lines": [
                  {
                    "text": "管理费用 ($80M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (41 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2505,
                "top": 1283.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.904999999999973,
                "lines": [
                  {
                    "text": "折旧与摊销 ($4M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"36\" y=\"1164\" width=\"379\" height=\"149\" rx=\"31\" fill=\"#16c979\"/><rect x=\"428\" y=\"1164\" width=\"346\" height=\"149\" rx=\"31\" fill=\"#16c979\"/><rect x=\"787\" y=\"1164\" width=\"146\" height=\"149\" rx=\"31\" fill=\"#16c979\"/><text x=\"225\" y=\"1221.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">交易利润率</text><text x=\"225.5\" y=\"1261.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">73%</text><text x=\"226\" y=\"1297.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +4 个百分点</text><text x=\"600.5\" y=\"1221.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">活跃会员</text><text x=\"600.5\" y=\"1261.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">10.4M</text><text x=\"603\" y=\"1297.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +20%</text><text x=\"858.5\" y=\"1223.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARPAM</text><text x=\"860\" y=\"1260.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$260</text><text x=\"862\" y=\"1297.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +6%</text><text x=\"397\" y=\"1353.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">ARPAM = 每名活跃会员平均收入</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "chime-payment-revenue-card",
      "href": "data/assets/raster-annotations/chime/payment-revenue-card-q1-fy26.png",
      "x": 105,
      "y": 446,
      "width": 190,
      "height": 140
    },
    {
      "key": "chime-platform-related-revenue-phone",
      "href": "data/assets/raster-annotations/chime/platform-related-revenue-phone-q1-fy26.png",
      "x": 95,
      "y": 830,
      "width": 200,
      "height": 155
    },
    {
      "src": "data/assets/raster-annotations/chime/company-logo-chime-q2-fy26.png",
      "x": 657,
      "y": 292,
      "width": 495,
      "height": 144
    }
  ]
});
