(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "the-trade-desk-q1-fy23",
  "name": "The Trade Desk · Q1 FY23",
  "company": "The Trade Desk",
  "meta": {
    "company": "The Trade Desk",
    "title": "The Trade Desk Q1 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/the-trade-desk-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.34,
    "titleSize": 117.2,
    "titleWeight": 800,
    "titleTextLength": 2487.29,
    "periodX": -1000,
    "periodY": -1000,
    "logoSvg": "<g fill=\"#0099fa\"><path d=\"M20 0h20v48H27V12H20z\"/><path d=\"M43 7a30 30 0 0 1-12 57V53A19 19 0 0 0 43 19z\"/><path d=\"M23 62A30 30 0 0 1 17 9v13a19 19 0 0 0 6 28z\"/></g><text x=\"77\" y=\"56\" font-family=\"Arial,sans-serif\" font-weight=\"800\" font-size=\"69\" fill=\"#000\">theTradeDesk</text>",
    "logoX": 506.57,
    "logoY": 286.49,
    "logoWidth": 690.19,
    "logoHeight": 88.55,
    "logoViewBox": "0 0 530 68"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "nodeRadius": 0,
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 7
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "label": "United States",
      "value": 337,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+21% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1"
    },
    {
      "id": "international",
      "label": "International",
      "value": 46,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+21% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 383,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+21% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 298,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "78% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "platform_operations",
      "label": "Platform operations",
      "value": 85,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 23,
      "type": "cost",
      "col": 3,
      "order": 0,
      "notes": [
        "(6%) margin",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 321,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sales_marketing",
      "label": "Sales & marketing",
      "value": 97,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "25% of revenue",
        "+3pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "technology_development",
      "label": "Technology & development",
      "value": 94,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [
        "24% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 130,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 337,
      "sourceWidth": 248,
      "targetWidth": 250,
      "y0": 681.0,
      "y1": 773.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d0f1"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 46,
      "sourceWidth": 33,
      "targetWidth": 33,
      "y0": 1087.5,
      "y1": 914.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d0f1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 298,
      "sourceWidth": 221,
      "targetWidth": 220,
      "y0": 758.5,
      "y1": 669.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "platform_operations",
      "value": 85,
      "sourceWidth": 62,
      "targetWidth": 62,
      "y0": 900.0,
      "y1": 997.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 298,
      "sourceWidth": 220,
      "targetWidth": 220,
      "y0": 669.0,
      "y1": 763.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 23,
      "sourceWidth": 16,
      "targetWidth": 17,
      "y0": 1006.0,
      "y1": 881.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 97,
      "sourceWidth": 72,
      "targetWidth": 71,
      "y0": 689.0,
      "y1": 573.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 94,
      "sourceWidth": 69,
      "targetWidth": 69,
      "y0": 759.5,
      "y1": 857.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 130,
      "sourceWidth": 96,
      "targetWidth": 95,
      "y0": 842.0,
      "y1": 1147.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 0.7422802734374999,
    "nodes": {
      "united_states": {
        "x": 367,
        "y": 557,
        "width": 72,
        "height": 248
      },
      "international": {
        "x": 367,
        "y": 1071,
        "width": 72,
        "height": 33
      },
      "revenue": {
        "x": 835,
        "y": 648,
        "width": 71,
        "height": 283
      },
      "gross_profit": {
        "x": 1292,
        "y": 559,
        "width": 71,
        "height": 220
      },
      "platform_operations": {
        "x": 1292,
        "y": 966,
        "width": 71,
        "height": 62
      },
      "operating_loss": {
        "x": 1564,
        "y": 998,
        "width": 72,
        "height": 16
      },
      "operating_expenses": {
        "x": 1764,
        "y": 653,
        "width": 71,
        "height": 237
      },
      "sales_marketing": {
        "x": 2236,
        "y": 538,
        "width": 72,
        "height": 71
      },
      "technology_development": {
        "x": 2236,
        "y": 823,
        "width": 72,
        "height": 69
      },
      "general_admin": {
        "x": 2236,
        "y": 1100,
        "width": 72,
        "height": 95
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 402.39,
            "top": 461.0,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28.65,
                "weight": 400
              }
            ]
          },
          {
            "x": 326.86,
            "top": 657.63,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "United States",
                "size": 39.07,
                "weight": 800
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 402.39,
            "top": 972.78,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28.65,
                "weight": 400
              }
            ]
          },
          {
            "x": 326.86,
            "top": 1063.94,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "International",
                "size": 39.07,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 873.81,
            "top": 500.06,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28.65,
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
            "x": 1329.59,
            "top": 369.84,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "78% margin",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "platform_operations": {
        "blocks": [
          {
            "x": 1326.99,
            "top": 1040.49,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Platform",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "operations",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1603.06,
            "top": 1028.77,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "(6%) margin",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.65,
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
            "x": 1799.7,
            "top": 494.85,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2474.27,
            "top": 523.5,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 32.56,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.56,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2474.27,
            "top": 769.63,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Technology &",
                "size": 32.56,
                "weight": 800
              },
              {
                "text": "development",
                "size": 32.56,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.56,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.65,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2474.27,
            "top": 1093.89,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "General & admin",
                "size": 32.56,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.56,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"127\" y=\"972\" width=\"417\" height=\"55\" rx=\"28\" fill=\"#009afc\"/><text x=\"285\" y=\"1010\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"white\">Customer retention</text><text data-operating-metric=\"retention\" x=\"480\" y=\"1010\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"white\">&gt; 95%</text></g><g fill=\"#777\" font-size=\"22\" text-anchor=\"middle\"><text x=\"1900\" y=\"927\">Includes SBC for CEO</text><text x=\"1870\" y=\"958\">performance</text><text data-operating-metric=\"ceo_sbc\" x=\"1980\" y=\"958\">$60M</text><text x=\"152\" y=\"885\" font-size=\"18\">Geographic breakdown</text><text x=\"152\" y=\"908\" font-size=\"18\">based on Gross Billings</text></g></g>",
  "operatingMetrics": [
    {
      "id": "retention",
      "value": "95",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 95%"
    },
    {
      "id": "ceo_sbc",
      "value": "60",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$60M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "The Trade Desk · 2023 财年第一季度",
      "meta": {
        "title": "The Trade Desk 2023 财年第一季度利润表",
        "titleSize": 106.7841796875,
        "titleTextLength": 2239.86328125
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +21%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +21%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 78%",
            "同比 (2 个百分点)"
          ]
        },
        "platform_operations": {
          "label": "平台运营",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (6%)",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与营销",
          "notes": [
            "占收入 25%",
            "同比 +3 个百分点"
          ]
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 24%",
            "同比 +2 个百分点"
          ]
        },
        "general_admin": {
          "label": "一般与行政",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 402.39,
                "top": 461.0,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28.65,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 326.86,
                "top": 657.63,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "美国",
                    "size": 39.07,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 402.39,
                "top": 972.78,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28.65,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 326.86,
                "top": 1063.94,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.07,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 873.81,
                "top": 500.06,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28.65,
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
                "x": 1329.59,
                "top": 369.84,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "利润率 78%",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "platform_operations": {
            "blocks": [
              {
                "x": 1326.99,
                "top": 1040.49,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "平台运营",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1603.06,
                "top": 1028.77,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (6%)",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.65,
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
                "x": 1799.7,
                "top": 494.85,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2474.27,
                "top": 523.5,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 32.56,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.56,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2474.27,
                "top": 769.63,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 32.56,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 32.56,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.56,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.65,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2474.27,
                "top": 1093.89,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "一般与行政",
                    "size": 32.56,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.56,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"127\" y=\"972\" width=\"417\" height=\"55\" rx=\"28\" fill=\"#009afc\"/><text x=\"285\" y=\"1010\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"white\">客户留存率</text><text data-operating-metric=\"retention\" x=\"480\" y=\"1010\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"white\">&gt; 95%</text></g><g fill=\"#777\" font-size=\"22\" text-anchor=\"middle\"><text x=\"1900\" y=\"927\">含 CEO 绩效股权激励</text><text x=\"1870\" y=\"958\">绩效</text><text data-operating-metric=\"ceo_sbc\" x=\"1980\" y=\"958\">$60M</text><text x=\"152\" y=\"885\" font-size=\"18\">地域划分基于总账单金额</text><text x=\"152\" y=\"908\" font-size=\"18\"></text></g></g>"
    }
  }
});})();
