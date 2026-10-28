window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "crowdstrike-q2-fy25",
  "name": "CrowdStrike · Q2 FY25",
  "company": "CrowdStrike",
  "meta": {
    "company": "CrowdStrike",
    "title": "CrowdStrike Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending July 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/crowdstrike-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.333,
    "titleY": 204.427,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2467.448,
    "periodX": 929.688,
    "periodY": 1250.0,
    "periodNoteY": 1292.969
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155278",
    "subtitleColor": "#3a3a3a",
    "noteColor": "#676767",
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
      "name": 39.0625,
      "value": 39.0625,
      "note": 28.645833333333332,
      "lineGap": 11.71875
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "layout": {
    "scale": 0.36067708333333337,
    "nodes": {
      "subscription": {
        "x": 393.229,
        "y": 552.083,
        "width": 72.917,
        "height": 330.729
      },
      "professional_services": {
        "x": 393.229,
        "y": 1105.469,
        "width": 72.917,
        "height": 15.625
      },
      "revenue": {
        "x": 855.469,
        "y": 654.948,
        "width": 72.917,
        "height": 347.656
      },
      "gross_profit": {
        "x": 1325.521,
        "y": 549.479,
        "width": 72.917,
        "height": 261.719
      },
      "cost_of_revenue": {
        "x": 1330.729,
        "y": 1024.74,
        "width": 72.917,
        "height": 85.938
      },
      "operating_profit": {
        "x": 1787.76,
        "y": 446.615,
        "width": 72.917,
        "height": 5.208
      },
      "operating_expenses": {
        "x": 1794.271,
        "y": 664.062,
        "width": 72.917,
        "height": 256.51
      },
      "interest": {
        "x": 2140.625,
        "y": 412.76,
        "width": 72.917,
        "height": 15.625
      },
      "net_profit": {
        "x": 2261.719,
        "y": 360.677,
        "width": 72.917,
        "height": 16.927
      },
      "tax": {
        "x": 2261.719,
        "y": 587.24,
        "width": 72.917,
        "height": 3.906
      },
      "sm": {
        "x": 2261.719,
        "y": 761.719,
        "width": 72.917,
        "height": 127.604
      },
      "rnd": {
        "x": 2261.719,
        "y": 1005.208,
        "width": 72.917,
        "height": 89.844
      },
      "ga": {
        "x": 2261.719,
        "y": 1231.771,
        "width": 72.917,
        "height": 37.76
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 429.688,
            "top": 458.333,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+33% Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          },
          {
            "x": 220.052,
            "top": 693.833,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.062,
                "weight": 700,
                "color": "#000000"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 429.688,
            "top": 1007.812,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+10% Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          },
          {
            "x": 221.354,
            "top": 1064.367,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Professional",
                "size": 39.062,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "services",
                "size": 39.062,
                "weight": 700,
                "color": "#000000"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 895.833,
            "top": 506.51,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.062,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+32% Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1367.188,
            "top": 360.677,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.062,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "75% margin",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1367.188,
            "top": 1127.604,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.458,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 36.458,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
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
            "x": 1824.219,
            "top": 256.51,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.062,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "1% margin",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+4pp Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1830.729,
            "top": 934.896,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Operating",
                "size": 39.062,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.062,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2178.385,
            "top": 444.01,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2464.844,
            "top": 319.01,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.062,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "5% margin",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+4pp Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2464.844,
            "top": 557.292,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
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
            "x": 2464.844,
            "top": 774.74,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "37% of revenue",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2464.844,
            "top": 996.094,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "26% of revenue",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2464.844,
            "top": 1203.125,
            "anchor": "middle",
            "lineGap": 11.719,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "11% of revenue",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.646,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 918,
      "col": 0,
      "order": 0,
      "type": "source",
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 46,
      "col": 0,
      "order": 1,
      "type": "source",
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 964,
      "col": 1,
      "order": 2,
      "type": "hub",
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+32% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 726,
      "col": 2,
      "order": 3,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "75% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 237,
      "col": 2,
      "order": 4,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 14,
      "col": 3,
      "order": 5,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "1% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 713,
      "col": 3,
      "order": 6,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 44,
      "col": 4,
      "order": 7,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 47,
      "col": 5,
      "order": 8,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "5% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 11,
      "col": 5,
      "order": 9,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 355,
      "col": 5,
      "order": 10,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "37% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 251,
      "col": 5,
      "order": 11,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "26% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 106,
      "col": 5,
      "order": 12,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "11% of revenue",
        "(3pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 918,
      "width": 330.729,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 46,
      "width": 15.625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 726,
      "width": 261.719,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 237,
      "width": 85.938,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 14,
      "width": 5.208,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 713,
      "width": 256.51,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3,
      "width": 1.302,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 1.302,
      "y1": 361.328
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 11,
      "width": 3.906,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 44,
      "width": 15.625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "targetWidth": 15.625,
      "y1": 369.792
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 355,
      "width": 127.604,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 251,
      "width": 89.844,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 106,
      "width": 37.76,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "annotationsSvg": "<g><rect x=\"88.542\" y=\"1173.177\" width=\"147.135\" height=\"164.062\" rx=\"41.667\" fill=\"#000\"/><rect x=\"248.698\" y=\"1173.177\" width=\"518.229\" height=\"164.062\" rx=\"41.667\" fill=\"#000\"/><text x=\"161.458\" y=\"1222.656\" text-anchor=\"middle\" font-size=\"31.25\" fill=\"white\">ARR</text><text x=\"161.458\" y=\"1265.625\" text-anchor=\"middle\" font-size=\"31.25\" fill=\"white\" data-operating-metric=\"arr\">$3.86B</text><text x=\"161.458\" y=\"1304.688\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">+32% Y/Y</text><text x=\"507.812\" y=\"1223.958\" text-anchor=\"middle\" font-size=\"31.25\" fill=\"white\">Customers with</text><text x=\"429.688\" y=\"1266.927\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">5+ modules</text><text x=\"541.667\" y=\"1266.927\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\" data-operating-metric=\"customers_5_plus\">65%</text><text x=\"651.042\" y=\"1266.927\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">+2pp Y/Y</text><text x=\"429.688\" y=\"1308.594\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">6+ modules</text><text x=\"541.667\" y=\"1308.594\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\" data-operating-metric=\"customers_6_plus\">45%</text><text x=\"651.042\" y=\"1308.594\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">+4pp Y/Y</text><text x=\"429.688\" y=\"1381.51\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"#676767\">ARR = Annual Recurring Revenue</text></g>",
  "operatingMetrics": [
    {
      "id": "arr",
      "value": "3.86",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.86B"
    },
    {
      "id": "customers_5_plus",
      "value": "65",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "65%"
    },
    {
      "id": "customers_6_plus",
      "value": "45",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "45%"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ARR"
    ],
    "zh": {
      "name": "CrowdStrike · 2025 财年第二季度",
      "meta": {
        "title": "CrowdStrike 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 7 月",
        "titleTextLength": 2031.2499999999998
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +33%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +32%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 75%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 +4 个百分点"
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
            "利润率 5%",
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 37%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 26%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 429.688,
                "top": 458.333,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +33%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              },
              {
                "x": 220.052,
                "top": 693.833,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 429.688,
                "top": 1007.812,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              },
              {
                "x": 221.354,
                "top": 1064.367,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "服务",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 895.833,
                "top": 506.51,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +32%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1367.188,
                "top": 360.677,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 75%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1367.188,
                "top": 1127.604,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.458,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36.458,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
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
                "x": 1824.219,
                "top": 256.51,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 1%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1830.729,
                "top": 934.896,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2178.385,
                "top": 444.01,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2464.844,
                "top": 319.01,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.062,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 5%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2464.844,
                "top": 557.292,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
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
                "x": 2464.844,
                "top": 774.74,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 37%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2464.844,
                "top": 996.094,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 26%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2464.844,
                "top": 1203.125,
                "anchor": "middle",
                "lineGap": 11.719,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.646,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"88.542\" y=\"1173.177\" width=\"147.135\" height=\"164.062\" rx=\"41.667\" fill=\"#000\"/><rect x=\"248.698\" y=\"1173.177\" width=\"518.229\" height=\"164.062\" rx=\"41.667\" fill=\"#000\"/><text x=\"161.458\" y=\"1222.656\" text-anchor=\"middle\" font-size=\"31.25\" fill=\"white\">ARR</text><text x=\"161.458\" y=\"1265.625\" text-anchor=\"middle\" font-size=\"31.25\" fill=\"white\" data-operating-metric=\"arr\">$3.86B</text><text x=\"161.458\" y=\"1304.688\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">同比 +32%</text><text x=\"507.812\" y=\"1223.958\" text-anchor=\"middle\" font-size=\"31.25\" fill=\"white\">客户中</text><text x=\"429.688\" y=\"1266.927\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">5+ 模块</text><text x=\"541.667\" y=\"1266.927\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\" data-operating-metric=\"customers_5_plus\">65%</text><text x=\"651.042\" y=\"1266.927\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">同比 +2pp</text><text x=\"429.688\" y=\"1308.594\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">6+ 模块</text><text x=\"541.667\" y=\"1308.594\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\" data-operating-metric=\"customers_6_plus\">45%</text><text x=\"651.042\" y=\"1308.594\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"white\">同比 +4pp</text><text x=\"429.688\" y=\"1381.51\" text-anchor=\"middle\" font-size=\"28.646\" fill=\"#676767\">ARR = 年度经常性收入</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/crowdstrike/company-wordmark-q2-fy27.png",
      "x": 146,
      "y": 278,
      "width": 860,
      "height": 159,
      "clearance": true
    }
  ]
});
