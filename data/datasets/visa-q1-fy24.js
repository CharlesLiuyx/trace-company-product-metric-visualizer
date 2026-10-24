(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "visa-q1-fy24",
  "name": "Visa · Q1 FY24",
  "company": "Visa",
  "meta": {
    "company": "Visa",
    "title": "Visa Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/visa-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197,
    "titleSize": 123,
    "titleWeight": 800,
    "periodX": 865,
    "periodY": 1218,
    "periodNoteY": 1260,
    "logoWidth": 365,
    "logoHeight": 145,
    "logoY": 319,
    "logoViewBox": "0 0 290 110",
    "logoSvg": "<text x=\"145\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"115\" font-weight=\"900\" font-style=\"italic\" fill=\"#002080\">VISA</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155377",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#00268f",
        "label": "#00268f"
      },
      "hub": {
        "node": "#00268f",
        "label": "#00268f"
      },
      "profit": {
        "node": "#28a028",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#8596c5",
      "hub": "#8596c5",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "service",
      "label": "Service",
      "value": 3.9,
      "valueText": "$3.9B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "data_processing",
      "label": "Data processing",
      "value": 4.4,
      "valueText": "$4.4B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International transaction",
      "value": 3,
      "valueText": "$3.0B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "other_rev",
      "label": "Other",
      "value": 0.7,
      "valueText": "$0.7B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+18% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "",
      "value": 12,
      "type": "hub",
      "col": 1,
      "order": 4,
      "valueText": "$12.0B",
      "notes": []
    },
    {
      "id": "net_revenue",
      "label": "Net revenue",
      "value": 8.6,
      "valueText": "$8.6B",
      "type": "hub",
      "col": 2,
      "order": 4,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "client_incentives",
      "label": "Client incentives",
      "value": 3.3,
      "valueText": "($3.3B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 6,
      "valueText": "$6.0B",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "69% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 2.7,
      "valueText": "($2.7B)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.9,
      "valueText": "$4.9B",
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "57% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B",
      "type": "profit",
      "col": 4,
      "order": 9,
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.2,
      "valueText": "($1.2B)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": []
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1.5,
      "valueText": "($1.5B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 4,
      "order": 14,
      "notes": []
    },
    {
      "id": "network",
      "label": "Network",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 4,
      "order": 15,
      "notes": []
    },
    {
      "id": "professional_fees",
      "label": "Professional fees",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 4,
      "order": 16,
      "notes": []
    },
    {
      "id": "litigation",
      "label": "Litigation",
      "value": 0.009,
      "valueText": "($9M)",
      "type": "cost",
      "col": 4,
      "order": 17,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 3.9,
      "sourceWidth": 134,
      "targetWidth": 134,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_processing",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 147,
      "targetWidth": 147,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 3,
      "sourceWidth": 102,
      "targetWidth": 102,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_rev",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 23,
      "targetWidth": 27,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "net_revenue",
      "value": 8.6,
      "sourceWidth": 296,
      "targetWidth": 295,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "client_incentives",
      "value": 3.3,
      "sourceWidth": 114,
      "targetWidth": 114,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "net_revenue",
      "target": "operating_profit",
      "value": 6,
      "sourceWidth": 203,
      "targetWidth": 203,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "net_revenue",
      "target": "operating_expenses",
      "value": 2.7,
      "sourceWidth": 92,
      "targetWidth": 90,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.9,
      "sourceWidth": 164,
      "targetWidth": 164,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.2,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1.5,
      "sourceWidth": 49,
      "targetWidth": 48,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 0.3,
      "sourceWidth": 12,
      "targetWidth": 10,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceWidth": 10,
      "targetWidth": 9,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 8,
      "targetWidth": 7,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "network",
      "value": 0.2,
      "sourceWidth": 6,
      "targetWidth": 5,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 3,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "litigation",
      "value": 0.009,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 34.2,
    "nodes": {
      "service": {
        "x": 364,
        "y": 392,
        "width": 71,
        "height": 134
      },
      "data_processing": {
        "x": 364,
        "y": 673,
        "width": 71,
        "height": 147
      },
      "international": {
        "x": 364,
        "y": 972,
        "width": 71,
        "height": 102
      },
      "other_rev": {
        "x": 364,
        "y": 1253,
        "width": 71,
        "height": 23
      },
      "revenue": {
        "x": 831,
        "y": 625,
        "width": 70,
        "height": 410
      },
      "net_revenue": {
        "x": 1293,
        "y": 517,
        "width": 71,
        "height": 295
      },
      "client_incentives": {
        "x": 1293,
        "y": 1019,
        "width": 71,
        "height": 114
      },
      "operating_profit": {
        "x": 1773,
        "y": 431,
        "width": 70,
        "height": 203
      },
      "operating_expenses": {
        "x": 1781,
        "y": 833,
        "width": 70,
        "height": 90
      },
      "net_profit": {
        "x": 2232,
        "y": 334,
        "width": 71,
        "height": 166
      },
      "other_income": {
        "x": 2100,
        "y": 567,
        "width": 71,
        "height": 2
      },
      "tax": {
        "x": 2232,
        "y": 700,
        "width": 71,
        "height": 39
      },
      "personnel": {
        "x": 2232,
        "y": 873,
        "width": 71,
        "height": 48
      },
      "general_admin": {
        "x": 2232,
        "y": 995,
        "width": 71,
        "height": 10
      },
      "marketing": {
        "x": 2232,
        "y": 1075,
        "width": 71,
        "height": 9
      },
      "da": {
        "x": 2232,
        "y": 1152,
        "width": 71,
        "height": 7
      },
      "network": {
        "x": 2232,
        "y": 1230,
        "width": 71,
        "height": 5
      },
      "professional_fees": {
        "x": 2232,
        "y": 1306,
        "width": 71,
        "height": 3
      },
      "litigation": {
        "x": 2232,
        "y": 1373,
        "width": 71,
        "height": 1
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 293.029296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 49.4853515625,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 435.5595703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Service",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "data_processing": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 574.0292968750001,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 49.4853515625,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 702.2236328124999,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Data",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "processing",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 873.029296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 49.4853515625,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 978.7236328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "International",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "transaction",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "other_rev": {
        "blocks": [
          {
            "x": 399.78955078125,
            "top": 1154.029296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 49.4853515625,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          },
          {
            "x": 192.732421875,
            "top": 1241.0595703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              }
            ],
            "semanticRole": "centered-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": []
      },
      "net_revenue": {
        "blocks": [
          {
            "x": 1328.291015625,
            "top": 371.14013671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net revenue",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#00268f",
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "client_incentives": {
        "blocks": [
          {
            "x": 1328.291015625,
            "top": 1149.88330078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Client",
                "size": 36.462890625,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "incentives",
                "size": 36.462890625,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1807.517578125,
            "top": 244.822265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "69% margin",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1814.02880859375,
            "top": 942.826171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2419.5732421875,
            "top": 338.583984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "57% margin",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "color": "#777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2415.66650390625,
            "top": 686.28369140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 28.6494140625,
                "color": "#941100",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 28.6494140625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2135.68359375,
            "top": 584.70849609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "color": "#008f51",
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#008f51",
                "weight": 400
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 882.67529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Personnel ($1.5B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 985.67529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & admin ($0.3B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1065.17529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing ($0.3B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1141.17529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "D&A ($0.2B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "network": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1218.17529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Network ($0.2B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1293.17529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional fees ($0.1B)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      },
      "litigation": {
        "blocks": [
          {
            "x": 2316.69580078125,
            "top": 1359.17529296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Litigation ($9M)",
                "size": 26.044921875,
                "color": "#941100",
                "weight": 700
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "meta": {
        "title": "Visa 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 12 月",
        "titleSize": 106
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +11%"
          ]
        },
        "data_processing": {
          "label": "数据处理",
          "notes": [
            "同比 +14%"
          ]
        },
        "international": {
          "label": "国际交易",
          "notes": [
            "同比 +8%"
          ]
        },
        "other_rev": {
          "label": "其他",
          "notes": [
            "同比 +18%"
          ]
        },
        "revenue": {
          "label": "",
          "notes": []
        },
        "net_revenue": {
          "label": "净收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "client_incentives": {
          "label": "客户激励",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 69%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 57%",
            "同比 +4 个百分点"
          ]
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "general_admin": {
          "label": "综合及行政",
          "notes": []
        },
        "marketing": {
          "label": "市场营销",
          "notes": []
        },
        "da": {
          "label": "折旧摊销",
          "notes": []
        },
        "network": {
          "label": "网络",
          "notes": []
        },
        "professional_fees": {
          "label": "专业服务费",
          "notes": []
        },
        "litigation": {
          "label": "诉讼",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 293.029296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 49.4853515625,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 435.5595703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "data_processing": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 574.0292968750001,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 49.4853515625,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 723.0595703124999,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "数据处理",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 873.029296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 49.4853515625,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 999.5595703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "国际交易",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "other_rev": {
            "blocks": [
              {
                "x": 399.78955078125,
                "top": 1154.029296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 49.4853515625,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 192.732421875,
                "top": 1241.0595703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  }
                ],
                "semanticRole": "centered-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": []
          },
          "net_revenue": {
            "blocks": [
              {
                "x": 1328.291015625,
                "top": 371.14013671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净收入",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#00268f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "client_incentives": {
            "blocks": [
              {
                "x": 1328.291015625,
                "top": 1149.88330078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "客户激励",
                    "size": 36.462890625,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1807.517578125,
                "top": 244.822265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 69%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1814.02880859375,
                "top": 942.826171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 36.462890625,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2419.5732421875,
                "top": 338.583984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 57%",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "color": "#777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2415.66650390625,
                "top": 686.28369140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 28.6494140625,
                    "color": "#941100",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2135.68359375,
                "top": 584.70849609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "color": "#008f51",
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#008f51",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 882.67529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "人员 ($1.5B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 985.67529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "综合及行政 ($0.3B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1065.17529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "市场营销 ($0.3B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1141.17529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "折旧摊销 ($0.2B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "network": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1218.17529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "网络 ($0.2B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1293.17529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务费 ($0.1B)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "litigation": {
            "blocks": [
              {
                "x": 2316.69580078125,
                "top": 1359.17529296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "诉讼 ($9M)",
                    "size": 26.044921875,
                    "color": "#941100",
                    "weight": 700
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"170\" y=\"1440\" font-size=\"38\" font-weight=\"700\" fill=\"#000\">来源：季度财报</text>"
    }
  },
  "annotationsSvg": "<text x=\"170\" y=\"1440\" font-size=\"38\" font-weight=\"700\" fill=\"#000\">Source: Quarterly results</text>"
});})();