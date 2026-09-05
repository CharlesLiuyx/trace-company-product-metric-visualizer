window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "klarna-q2-fy26",
  "name": "Klarna · Q2 FY26",
  "company": "Klarna",
  "meta": {
    "company": "Klarna",
    "title": "Klarna Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/klarna-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199.51008849557522,
    "titleSize": 125.23893805309736,
    "titleWeight": 800,
    "titleTextLength": 2122
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
        "funding_costs:left",
        "ga:left",
        "other_opex:left",
        "processing_servicing:left",
        "tax:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#efc6d8",
      "hub": "#efc6d8",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "transaction_revenue",
      "label": "Transaction revenue",
      "value": 707,
      "valueText": "$707M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "interest_revenue",
      "label": "Interest",
      "value": 266,
      "valueText": "$266M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "consumer_revenue",
      "label": "Consumer Revenue",
      "value": 69,
      "valueText": "$69M",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1042,
      "valueText": "$1,042M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Transaction margin dollars",
      "value": 446,
      "valueText": "$446M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "+42% Y/Y"
      ]
    },
    {
      "id": "processing_servicing",
      "label": "Processing and servicing costs",
      "value": 233,
      "valueText": "($233M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "credit_losses",
      "label": "Provision for credit losses",
      "value": 192,
      "valueText": "($192M)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "funding_costs",
      "label": "Funding costs",
      "value": 171,
      "valueText": "($171M)",
      "type": "cost",
      "col": 2,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 26,
      "valueText": "$26M",
      "type": "profit",
      "col": 3,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "2% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 420,
      "valueText": "($420M)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 8,
      "valueText": "$8M",
      "type": "profit",
      "col": 4,
      "order": 10,
      "color": "#4aac4a",
      "labelColor": "#008f51",
      "notes": [
        "0% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 18,
      "valueText": "($18M)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "technology_product",
      "label": "Tech & product development",
      "value": 111,
      "valueText": "($111M)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sales_marketing",
      "label": "Sales & marketing",
      "value": 111,
      "valueText": "($111M)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "ga",
      "label": "General & administrative",
      "value": 76,
      "valueText": "($76M)",
      "type": "cost",
      "col": 4,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "customer_service",
      "label": "Customer service & operations",
      "value": 57,
      "valueText": "($57M)",
      "type": "cost",
      "col": 4,
      "order": 15,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 65,
      "valueText": "($65M)",
      "type": "cost",
      "col": 4,
      "order": 16,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "transaction_revenue",
      "target": "revenue",
      "value": 707,
      "sourceWidth": 191,
      "y0": 573.5,
      "sourceOrder": 0,
      "targetWidth": 195.809,
      "y1": 752.905,
      "targetOrder": 0,
      "linkTint": "#efc6d8"
    },
    {
      "source": "interest_revenue",
      "target": "revenue",
      "value": 266,
      "sourceWidth": 71,
      "y0": 850.5,
      "sourceOrder": 0,
      "targetWidth": 72.788,
      "y1": 887.203,
      "targetOrder": 1,
      "linkTint": "#efc6d8"
    },
    {
      "source": "consumer_revenue",
      "target": "revenue",
      "value": 69,
      "sourceWidth": 16,
      "y0": 1040,
      "sourceOrder": 0,
      "targetWidth": 16.403,
      "y1": 931.799,
      "targetOrder": 2,
      "linkTint": "#efc6d8"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 446,
      "sourceWidth": 121,
      "y0": 715.5,
      "sourceOrder": 0,
      "targetWidth": 122,
      "y1": 582,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "processing_servicing",
      "value": 233,
      "sourceWidth": 64.825,
      "y0": 808.4125,
      "sourceOrder": 1,
      "targetWidth": 65,
      "y1": 945.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "credit_losses",
      "value": 192,
      "sourceWidth": 52.042,
      "y0": 866.846,
      "sourceOrder": 2,
      "targetWidth": 53,
      "y1": 1098.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "funding_costs",
      "value": 171,
      "sourceWidth": 47.133,
      "y0": 916.434,
      "sourceOrder": 3,
      "targetWidth": 48,
      "y1": 1244,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 26,
      "sourceWidth": 7,
      "y0": 524.5,
      "sourceOrder": 0,
      "targetWidth": 7,
      "y1": 439.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 420,
      "sourceWidth": 115,
      "y0": 585.5,
      "sourceOrder": 1,
      "targetWidth": 116,
      "y1": 720,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 8,
      "sourceWidth": 2,
      "y0": 437,
      "sourceOrder": 0,
      "targetWidth": 2,
      "y1": 337,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 18,
      "sourceWidth": 5,
      "y0": 440.5,
      "sourceOrder": 1,
      "targetWidth": 6,
      "y1": 537,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_product",
      "value": 111,
      "sourceWidth": 30.218,
      "y0": 677.109,
      "sourceOrder": 0,
      "targetWidth": 31,
      "y1": 647.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 111,
      "sourceWidth": 30.218,
      "y0": 707.328,
      "sourceOrder": 1,
      "targetWidth": 31,
      "y1": 790.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 76,
      "sourceWidth": 21.445,
      "y0": 733.16,
      "sourceOrder": 2,
      "targetWidth": 22,
      "y1": 934,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "customer_service",
      "value": 57,
      "sourceWidth": 15.597,
      "y0": 751.681,
      "sourceOrder": 3,
      "targetWidth": 16,
      "y1": 1074,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 65,
      "sourceWidth": 18.521,
      "y0": 768.739,
      "sourceOrder": 4,
      "targetWidth": 19,
      "y1": 1201.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "transaction_revenue": {
        "x": 372,
        "y": 478,
        "width": 72,
        "height": 191
      },
      "interest_revenue": {
        "x": 372,
        "y": 815,
        "width": 72,
        "height": 71
      },
      "consumer_revenue": {
        "x": 372,
        "y": 1032,
        "width": 72,
        "height": 16
      },
      "revenue": {
        "x": 840,
        "y": 655,
        "width": 70,
        "height": 285
      },
      "gross_profit": {
        "x": 1306,
        "y": 521,
        "width": 71,
        "height": 122
      },
      "processing_servicing": {
        "x": 1306,
        "y": 913,
        "width": 71,
        "height": 65
      },
      "credit_losses": {
        "x": 1306,
        "y": 1072,
        "width": 71,
        "height": 53
      },
      "funding_costs": {
        "x": 1306,
        "y": 1220,
        "width": 71,
        "height": 48
      },
      "operating_profit": {
        "x": 1777,
        "y": 436,
        "width": 72,
        "height": 7
      },
      "operating_expenses": {
        "x": 1774,
        "y": 662,
        "width": 70,
        "height": 116
      },
      "net_profit": {
        "x": 2240,
        "y": 336,
        "width": 71,
        "height": 2
      },
      "tax": {
        "x": 2240,
        "y": 534,
        "width": 71,
        "height": 6
      },
      "technology_product": {
        "x": 2240,
        "y": 632,
        "width": 71,
        "height": 31
      },
      "sales_marketing": {
        "x": 2240,
        "y": 775,
        "width": 71,
        "height": 31
      },
      "ga": {
        "x": 2240,
        "y": 923,
        "width": 71,
        "height": 22
      },
      "customer_service": {
        "x": 2240,
        "y": 1066,
        "width": 71,
        "height": 16
      },
      "other_opex": {
        "x": 2240,
        "y": 1192,
        "width": 71,
        "height": 19
      }
    },
    "labels": {
      "transaction_revenue": {
        "blocks": [
          {
            "x": 215.75,
            "top": 515.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 21,
            "lines": [
              {
                "text": "Transaction",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 226
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 155
              }
            ]
          },
          {
            "x": 409.5,
            "top": 377.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.96999999999997,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 117
              },
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "interest_revenue": {
        "blocks": [
          {
            "x": 214,
            "top": 825.9999877929688,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Interest",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 150
              }
            ]
          },
          {
            "x": 412.5,
            "top": 714.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 117
              },
              {
                "text": "+21% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "consumer_revenue": {
        "blocks": [
          {
            "x": 409.25,
            "top": 930.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 95
              },
              {
                "text": "New",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 54
              }
            ]
          },
          {
            "x": 211,
            "top": 991.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14,
            "lines": [
              {
                "text": "Consumer",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 194
              },
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 162
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 875.5,
            "top": 504.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 162
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 149
              },
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 116
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1339.875,
            "top": 316.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.74666666666667,
            "lines": [
              {
                "text": "Transaction",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 226
              },
              {
                "text": "margin dollars",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 277
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "+42% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "processing_servicing": {
        "blocks": [
          {
            "x": 1507.3333333333333,
            "top": 887.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 17.13499999999999,
            "lines": [
              {
                "text": "Processing and",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 223
              },
              {
                "text": "servicing costs",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 219
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "credit_losses": {
        "blocks": [
          {
            "x": 1507.5,
            "top": 1050.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.284999999999968,
            "lines": [
              {
                "text": "Provision for",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 190
              },
              {
                "text": "credit losses",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 187
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "funding_costs": {
        "blocks": [
          {
            "x": 1507.5,
            "top": 1203.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 22.269999999999982,
            "lines": [
              {
                "text": "Funding costs",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 204
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1815.375,
            "top": 247.39999999999998,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.74666666666667,
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
                "text": "2% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 134
              },
              {
                "text": "+4pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1807.1666666666667,
            "top": 790.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.134999999999991,
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
                "textLength": 144
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492.5,
            "top": 272.4,
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
                "textLength": 73
              },
              {
                "text": "0% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 134
              },
              {
                "text": "+4pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2492.25,
            "top": 499.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 16.57000000000005,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 52
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 95
              }
            ]
          }
        ]
      },
      "technology_product": {
        "blocks": [
          {
            "x": 2492.1666666666665,
            "top": 592.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 17.13499999999999,
            "lines": [
              {
                "text": "Tech & product",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 228
              },
              {
                "text": "development",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 199
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2492.6666666666665,
            "top": 734.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.285000000000025,
            "lines": [
              {
                "text": "Sales &",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 106
              },
              {
                "text": "marketing",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 156
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2483.6666666666665,
            "top": 878.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.285000000000025,
            "lines": [
              {
                "text": "General &",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 148
              },
              {
                "text": "administrative",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 221
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 95
              }
            ]
          }
        ]
      },
      "customer_service": {
        "blocks": [
          {
            "x": 2483.6666666666665,
            "top": 1014.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.285000000000025,
            "lines": [
              {
                "text": "Customer service",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 260
              },
              {
                "text": "& operations",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 193
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 95
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2483.75,
            "top": 1160.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 19.569999999999936,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 86
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#941100",
                "textLength": 95
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"62\" y=\"1144\" width=\"190\" height=\"159\" rx=\"31\" fill=\"#fbb0d0\"/><rect x=\"261\" y=\"1144\" width=\"380\" height=\"159\" rx=\"31\" fill=\"#fbb0d0\"/><rect x=\"650\" y=\"1144\" width=\"249\" height=\"159\" rx=\"31\" fill=\"#fbb0d0\"/><text x=\"159\" y=\"1193.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">GMV</text><text x=\"157.5\" y=\"1233.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">$36.6B</text><text x=\"158\" y=\"1275.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">+15% Y/Y LfL</text><text x=\"451\" y=\"1197.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">Active Consumers</text><text x=\"451.5\" y=\"1240.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">120M</text><text x=\"452\" y=\"1281.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">+8% Y/Y</text><text x=\"774.5\" y=\"1195.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">Merchants</text><text x=\"775\" y=\"1238.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">1,208K</text><text x=\"774.5\" y=\"1279.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">+54% Y/Y</text><text x=\"333.5\" y=\"1353.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">GMV = Gross Merchandise Value</text><text x=\"2248.5\" y=\"1307.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Adjusted for the sale of</text><text x=\"2244\" y=\"1346.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Klarna Checkout (KCO)</text></g>",
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
      "name": "Klarna · 2026 财年第二季度",
      "meta": {
        "title": "Klarna 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1636.422
      },
      "nodes": {
        "transaction_revenue": {
          "label": "交易收入",
          "notes": [
            "同比 +17%"
          ]
        },
        "interest_revenue": {
          "label": "利息收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "consumer_revenue": {
          "label": "消费者收入",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +27%"
          ]
        },
        "gross_profit": {
          "label": "交易利润额",
          "notes": [
            "同比 +42%"
          ]
        },
        "processing_servicing": {
          "label": "处理与服务成本",
          "notes": []
        },
        "credit_losses": {
          "label": "信用损失准备",
          "notes": []
        },
        "funding_costs": {
          "label": "融资成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 0%",
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "technology_product": {
          "label": "技术与产品开发",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与营销",
          "notes": []
        },
        "ga": {
          "label": "一般及行政",
          "notes": []
        },
        "customer_service": {
          "label": "客户服务与运营",
          "notes": []
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "transaction_revenue": {
            "blocks": [
              {
                "x": 215.75,
                "top": 515.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 21,
                "lines": [
                  {
                    "text": "交易",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 409.5,
                "top": 377.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.96999999999997,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 117
                  },
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "interest_revenue": {
            "blocks": [
              {
                "x": 214,
                "top": 825.9999877929688,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "利息",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 412.5,
                "top": 714.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 117
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "consumer_revenue": {
            "blocks": [
              {
                "x": 409.25,
                "top": 930.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 95
                  },
                  {
                    "text": "新增",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 211,
                "top": 991.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "消费者",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 875.5,
                "top": 504.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 149
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1339.875,
                "top": 316.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.74666666666667,
                "lines": [
                  {
                    "text": "交易",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润额",
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
                    "text": "同比 +42%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "processing_servicing": {
            "blocks": [
              {
                "x": 1507.3333333333333,
                "top": 887.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 17.13499999999999,
                "lines": [
                  {
                    "text": "处理及",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "服务成本",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 112
                  }
                ]
              }
            ]
          },
          "credit_losses": {
            "blocks": [
              {
                "x": 1507.5,
                "top": 1050.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.284999999999968,
                "lines": [
                  {
                    "text": "拨备",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "信用损失",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 112
                  }
                ]
              }
            ]
          },
          "funding_costs": {
            "blocks": [
              {
                "x": 1507.5,
                "top": 1203.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 22.269999999999982,
                "lines": [
                  {
                    "text": "融资成本",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 112
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1815.375,
                "top": 247.39999999999998,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.74666666666667,
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
                    "text": "利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 1807.1666666666667,
                "top": 790.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.134999999999991,
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
                    "textLength": 144
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492.5,
                "top": 272.4,
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
                    "textLength": 73
                  },
                  {
                    "text": "利润率 0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28,
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
                "x": 2492.25,
                "top": 499.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 16.57000000000005,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 95
                  }
                ]
              }
            ]
          },
          "technology_product": {
            "blocks": [
              {
                "x": 2492.1666666666665,
                "top": 592.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 17.13499999999999,
                "lines": [
                  {
                    "text": "技术与产品",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 112
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2492.6666666666665,
                "top": 734.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.285000000000025,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场营销",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 112
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2483.6666666666665,
                "top": 878.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.285000000000025,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 95
                  }
                ]
              }
            ]
          },
          "customer_service": {
            "blocks": [
              {
                "x": 2483.6666666666665,
                "top": 1014.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.285000000000025,
                "lines": [
                  {
                    "text": "客户服务",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "及运营",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 95
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2483.75,
                "top": 1160.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 19.569999999999936,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 95
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"62\" y=\"1144\" width=\"190\" height=\"159\" rx=\"31\" fill=\"#fbb0d0\"/><rect x=\"261\" y=\"1144\" width=\"380\" height=\"159\" rx=\"31\" fill=\"#fbb0d0\"/><rect x=\"650\" y=\"1144\" width=\"249\" height=\"159\" rx=\"31\" fill=\"#fbb0d0\"/><text x=\"159\" y=\"1193.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">GMV</text><text x=\"157.5\" y=\"1233.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">$36.6B</text><text x=\"158\" y=\"1275.23\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#000000\">同口径同比 +15%</text><text x=\"451\" y=\"1197.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">活跃消费者</text><text x=\"451.5\" y=\"1240.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">120M</text><text x=\"452\" y=\"1281.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">同比 +8%</text><text x=\"774.5\" y=\"1195.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">商户</text><text x=\"775\" y=\"1238.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">1,208K</text><text x=\"774.5\" y=\"1279.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#000000\">同比 +54%</text><text x=\"333.5\" y=\"1353.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">GMV = 商品交易总额</text><text x=\"2248.5\" y=\"1307.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">已对出售进行调整：</text><text x=\"2244\" y=\"1346.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Klarna Checkout (KCO)</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/klarna/company-logo-klarna-q2-fy26.png",
      "x": 585,
      "y": 243,
      "width": 558,
      "height": 237
    }
  ]
});
