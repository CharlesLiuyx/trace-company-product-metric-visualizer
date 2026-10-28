(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "docusign-q4-fy23",
  "name": "DocuSign · Q4 FY23",
  "company": "DocuSign",
  "meta": {
    "company": "DocuSign",
    "title": "DocuSign Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/docusign-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2304.9755859375,
    "periodX": 2419.5732421875,
    "periodY": 264.35595703125,
    "periodNoteY": 307.330078125,
    "logoWidth": 586.0107421875,
    "logoHeight": 130.224609375,
    "logoY": 266.96044921875,
    "logoViewBox": "0 0 450 100",
    "logoSvg": "<text x=\"0\" y=\"83\" font-family=\"Arial,sans-serif\" font-size=\"100\" font-weight=\"700\" textLength=\"450\" lengthAdjust=\"spacingAndGlyphs\" fill=\"black\">DocuSign</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#5e5e5e",
    "noteColor": "#6b6b6b",
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
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 644,
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$644M",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional Services",
      "value": 16,
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$16M",
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 660,
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$660M",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 522,
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$522M",
      "notes": [
        "79% margin",
        "+2pp Y/Y",
        "Revenue less cost of revenue is $523M; Source prints $522M."
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 137,
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($137M)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.3,
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.3M)",
      "notes": [
        "(0%) margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 522,
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($522M)",
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 305,
      "type": "cost",
      "col": 4,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($305M)",
      "notes": [
        "46% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 126,
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($126M)",
      "notes": [
        "19% of revenue",
        "Unchanged"
      ]
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 92,
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($92M)",
      "notes": [
        "14% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.3M)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 644,
      "width": 372.4423828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 16,
      "width": 9.11572265625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 522,
      "width": 303.42333984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 137,
      "width": 79.43701171875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 522,
      "width": 303.42333984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 302.12109375
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.3,
      "width": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 305,
      "width": 177.10546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 175.80322265625
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 126,
      "width": 72.92578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 92,
      "width": 53.39208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.3,
      "width": 1.30224609375,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.5808017578125,
    "nodes": {
      "subscription": {
        "x": 363.32666015625,
        "y": 543.03662109375,
        "width": 71.62353515625,
        "height": 372.4423828125
      },
      "professional_services": {
        "x": 363.32666015625,
        "y": 1089.97998046875,
        "width": 71.62353515625,
        "height": 9.11572265625
      },
      "revenue": {
        "x": 829.53076171875,
        "y": 636.79833984375,
        "width": 72.92578125,
        "height": 382.8603515625
      },
      "gross_profit": {
        "x": 1299.6416015625,
        "y": 523.5029296875,
        "width": 72.92578125,
        "height": 303.42333984375
      },
      "cost_of_revenue": {
        "x": 1299.6416015625,
        "y": 1022.26318359375,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "operating_loss": {
        "x": 1604.3671875,
        "y": 1175.92822265625,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "operating_expenses": {
        "x": 1791.890625,
        "y": 669.3544921875,
        "width": 72.92578125,
        "height": 303.42333984375
      },
      "sm": {
        "x": 2232.0498046875,
        "y": 494.853515625,
        "width": 71.62353515625,
        "height": 177.10546875
      },
      "rnd": {
        "x": 2232.0498046875,
        "y": 803.48583984375,
        "width": 71.62353515625,
        "height": 72.92578125
      },
      "ga": {
        "x": 2232.0498046875,
        "y": 996.21826171875,
        "width": 71.62353515625,
        "height": 53.39208984375
      },
      "restructuring": {
        "x": 2232.0498046875,
        "y": 1222.80908203125,
        "width": 71.62353515625,
        "height": 1.30224609375
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 402.39404296875,
            "top": 442.763671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          },
          {
            "x": 184.9189453125,
            "top": 705.70166015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 402.39404296875,
            "top": 989.70703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          },
          {
            "x": 184.9189453125,
            "top": 1046.18564453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 865.99365234375,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1336.1044921875,
            "top": 333.375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "79% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1336.1044921875,
            "top": 1114.72265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1640.830078125,
            "top": 1192.857421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(0%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 501.36474609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
      "sm": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 500.0625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "46% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 794.3701171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "19% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "Unchanged",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 994.916015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 1185.0439453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
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
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "billings",
      "value": "739",
      "literal": "$739M",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq"
    },
    {
      "id": "nrr",
      "value": "107",
      "literal": "107%",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "customers",
      "value": "1360000",
      "literal": "1.36M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "enterprise",
      "value": "211000",
      "literal": "211K",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"25\" y=\"920\" width=\"160\" height=\"115\" rx=\"24\" fill=\"black\"/><rect x=\"195\" y=\"920\" width=\"162\" height=\"115\" rx=\"24\" fill=\"black\"/><rect x=\"368\" y=\"920\" width=\"357\" height=\"115\" rx=\"24\" fill=\"black\"/><text x=\"105\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">Billings</text><text data-operating-metric=\"billings\" x=\"105\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">$739M</text><text x=\"105\" y=\"1016\" text-anchor=\"middle\" font-size=\"15\" fill=\"white\">+10% Y/Y</text><text x=\"276\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">NRR</text><text data-operating-metric=\"nrr\" x=\"276\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">107%</text><text x=\"276\" y=\"1016\" text-anchor=\"middle\" font-size=\"15\" fill=\"white\">(12pp) Y/Y</text><text x=\"546\" y=\"954\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"546\" y=\"977\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">1.36M</text><text x=\"672\" y=\"977\" text-anchor=\"middle\" font-size=\"14\" fill=\"white\">+16% Y/Y</text><text x=\"546\" y=\"1000\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">Enterprise</text><text data-operating-metric=\"enterprise\" x=\"546\" y=\"1023\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">211K</text><text x=\"672\" y=\"1023\" text-anchor=\"middle\" font-size=\"14\" fill=\"white\">+24% Y/Y</text><text x=\"322\" y=\"1066\" text-anchor=\"middle\" font-size=\"21\" fill=\"#6b6b6b\">NRR = Net Retention Rate</text></g></g>",
  "i18n": {
    "preservedAnnotationText": [
      "NRR"
    ],
    "zh": {
      "name": "DocuSign · 2023 财年第四季度",
      "meta": {
        "title": "DocuSign 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "titleTextLength": 1940.3466796875
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +14%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 (5%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (0%)",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 46%",
            "同比 (5 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
            "同比不变"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 14%",
            "同比 +3 个百分点"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 402.39404296875,
                "top": 442.763671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              },
              {
                "x": 184.9189453125,
                "top": 705.70166015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 402.39404296875,
                "top": 989.70703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              },
              {
                "x": 184.9189453125,
                "top": 1046.18564453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 865.99365234375,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1336.1044921875,
                "top": 333.375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1336.1044921875,
                "top": 1114.72265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1640.830078125,
                "top": 1192.857421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 501.36474609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
          "sm": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 500.0625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "占收入 46%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 794.3701171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比不变",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 994.916015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 1185.0439453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
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
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"25\" y=\"920\" width=\"160\" height=\"115\" rx=\"24\" fill=\"black\"/><rect x=\"195\" y=\"920\" width=\"162\" height=\"115\" rx=\"24\" fill=\"black\"/><rect x=\"368\" y=\"920\" width=\"357\" height=\"115\" rx=\"24\" fill=\"black\"/><text x=\"105\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">账单额</text><text data-operating-metric=\"billings\" x=\"105\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">$739M</text><text x=\"105\" y=\"1016\" text-anchor=\"middle\" font-size=\"15\" fill=\"white\">同比 +10%</text><text x=\"276\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">NRR</text><text data-operating-metric=\"nrr\" x=\"276\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">107%</text><text x=\"276\" y=\"1016\" text-anchor=\"middle\" font-size=\"15\" fill=\"white\">同比 (12 个百分点)</text><text x=\"546\" y=\"954\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">客户</text><text data-operating-metric=\"customers\" x=\"546\" y=\"977\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">1.36M</text><text x=\"672\" y=\"977\" text-anchor=\"middle\" font-size=\"14\" fill=\"white\">同比 +16%</text><text x=\"546\" y=\"1000\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"white\">企业客户</text><text data-operating-metric=\"enterprise\" x=\"546\" y=\"1023\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">211K</text><text x=\"672\" y=\"1023\" text-anchor=\"middle\" font-size=\"14\" fill=\"white\">同比 +24%</text><text x=\"322\" y=\"1066\" text-anchor=\"middle\" font-size=\"21\" fill=\"#6b6b6b\">NRR = 净留存率</text></g></g>"
    }
  }
});})();
