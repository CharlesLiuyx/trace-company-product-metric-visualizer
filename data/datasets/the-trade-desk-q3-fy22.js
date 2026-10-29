window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "the-trade-desk-q3-fy22",
  "name": "The Trade Desk · Q3 FY22",
  "company": "The Trade Desk",
  "meta": {
    "company": "The Trade Desk",
    "title": "The Trade Desk Q3 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/the-trade-desk-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195,
    "titleSize": 116,
    "titleWeight": 800,
    "titleTextLength": 2480,
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
    "titleColor": "#155077",
    "subtitleColor": "#666",
    "noteColor": "#666",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#0099fa",
        "label": "#0099fa"
      },
      "hub": {
        "node": "#0099fa",
        "label": "#0099fa"
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
      "source": "#85caf6",
      "hub": "#85caf6",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    }
  },
  "layout": {
    "scale": 0.765,
    "nodes": {
      "united_states": {
        "x": 363,
        "y": 588,
        "width": 73,
        "height": 270
      },
      "international": {
        "x": 363,
        "y": 1050,
        "width": 73,
        "height": 33
      },
      "revenue": {
        "x": 830,
        "y": 643,
        "width": 73,
        "height": 302
      },
      "gross_profit": {
        "x": 1297,
        "y": 595,
        "width": 73,
        "height": 249
      },
      "platform_operations": {
        "x": 1297,
        "y": 996,
        "width": 73,
        "height": 54
      },
      "operating_profit": {
        "x": 1784,
        "y": 517,
        "width": 73,
        "height": 22
      },
      "operating_expenses": {
        "x": 1784,
        "y": 736,
        "width": 73,
        "height": 227
      },
      "other_income": {
        "x": 2110,
        "y": 512,
        "width": 73,
        "height": 2
      },
      "net_profit": {
        "x": 2231,
        "y": 438,
        "width": 73,
        "height": 12
      },
      "tax": {
        "x": 2231,
        "y": 645,
        "width": 73,
        "height": 11
      },
      "sales_marketing": {
        "x": 2231,
        "y": 797,
        "width": 73,
        "height": 61
      },
      "technology_development": {
        "x": 2231,
        "y": 970,
        "width": 73,
        "height": 66
      },
      "general_admin": {
        "x": 2231,
        "y": 1169,
        "width": 73,
        "height": 101
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 399.5,
            "top": 494,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 800
              },
              {
                "text": "+34% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 326,
            "top": 698.5,
            "anchor": "end",
            "lineGap": 9,
            "semanticRole": "name",
            "lines": [
              {
                "text": "United States",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 399.5,
            "top": 956,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 800
              },
              {
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 326,
            "top": 1042.0,
            "anchor": "end",
            "lineGap": 9,
            "semanticRole": "name",
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 867,
            "top": 501,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 29,
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
            "x": 1334,
            "top": 412,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "82% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "Unchanged",
                "size": 29,
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
            "x": 1334,
            "top": 1073,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Platform",
                "size": 36,
                "weight": 800
              },
              {
                "text": "operations",
                "size": 36,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 1821,
            "top": 335,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(20pp) Y/Y",
                "size": 29,
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
            "x": 1821,
            "top": 985,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 36,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2146,
            "top": 530,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2446,
            "top": 384,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "4% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(16pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2450,
            "top": 621,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2455,
            "top": 798,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
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
            "x": 2455,
            "top": 970,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "20% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
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
            "x": 2455,
            "top": 1180,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              },
              {
                "text": "Includes $66M SBC",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "for long-term",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "CEO performance",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "value": 351,
      "label": "United States",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+34% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "international",
      "value": 43,
      "label": "International",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "revenue",
      "value": 395,
      "label": "Revenue",
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+31% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "gross_profit",
      "value": 325,
      "label": "Gross profit",
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "82% margin",
        "Unchanged"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "platform_operations",
      "value": 70,
      "label": "Platform operations",
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "value": 29,
      "label": "Operating profit",
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [
        "7% margin",
        "(20pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "value": 296,
      "label": "Operating Expenses",
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "value": 2,
      "label": "Other",
      "type": "profit",
      "col": 4,
      "order": 7,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "value": 16,
      "label": "Net profit",
      "type": "profit",
      "col": 5,
      "order": 8,
      "notes": [
        "4% margin",
        "(16pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "value": 15,
      "label": "Tax",
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sales_marketing",
      "value": 85,
      "label": "Sales & marketing",
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "22% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "technology_development",
      "value": 80,
      "label": "Technology & development",
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "20% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "general_admin",
      "value": 131,
      "label": "General & Admin",
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": [
        "Includes $66M SBC for long-term CEO performance"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 351,
      "sourceWidth": 270,
      "targetWidth": 270,
      "y0": 723,
      "y1": 778,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85caf6"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 43,
      "sourceWidth": 33,
      "targetWidth": 32,
      "y0": 1066.5,
      "y1": 929,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85caf6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 325,
      "sourceWidth": 249,
      "targetWidth": 249,
      "y0": 767.5,
      "y1": 719.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "platform_operations",
      "value": 70,
      "sourceWidth": 53,
      "targetWidth": 54,
      "y0": 918.5,
      "y1": 1023,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 29,
      "sourceWidth": 22,
      "targetWidth": 22,
      "y0": 606,
      "y1": 528,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 296,
      "sourceWidth": 227,
      "targetWidth": 227,
      "y0": 730.5,
      "y1": 849.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 14,
      "sourceWidth": 11,
      "targetWidth": 10,
      "y0": 522.5,
      "y1": 443,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 15,
      "sourceWidth": 11,
      "targetWidth": 11,
      "y0": 533.5,
      "y1": 650.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 513,
      "y1": 449,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99",
      "curve": {
        "c1x": 2200,
        "c1y": 513,
        "c2x": 2200,
        "c2y": 449
      }
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 85,
      "sourceWidth": 61,
      "targetWidth": 61,
      "y0": 766.5,
      "y1": 827.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 80,
      "sourceWidth": 66,
      "targetWidth": 66,
      "y0": 830,
      "y1": 1003,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 131,
      "sourceWidth": 100,
      "targetWidth": 101,
      "y0": 913,
      "y1": 1219.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "The Trade Desk · 2022 财年第三季度",
      "meta": {
        "title": "The Trade Desk 2022 财年第三季度利润表",
        "titleSize": 112,
        "titleTextLength": 1970
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +34%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +11%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +31%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比持平"
          ]
        },
        "platform_operations": {
          "label": "平台运营",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 (20 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 (16 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与营销",
          "notes": [
            "占收入 22%",
            "同比 +2 个百分点"
          ]
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 20%",
            "同比 +2 个百分点"
          ]
        },
        "general_admin": {
          "label": "一般与行政",
          "notes": [
            "包含长期 CEO 绩效相关股权激励 $66M"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 399.5,
                "top": 494,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "同比 +34%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 326,
                "top": 698.5,
                "anchor": "end",
                "lineGap": 9,
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 399.5,
                "top": 956,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 326,
                "top": 1042.0,
                "anchor": "end",
                "lineGap": 9,
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 867,
                "top": 501,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 29,
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
                "x": 1334,
                "top": 412,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 82%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比持平",
                    "size": 29,
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
                "x": 1334,
                "top": 1073,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "平台",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 1821,
                "top": 335,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (20 个百分点)",
                    "size": 29,
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
                "x": 1821,
                "top": 985,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2146,
                "top": 530,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2446,
                "top": 384,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (16 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2450,
                "top": 621,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2455,
                "top": 798,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 2455,
                "top": 970,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "占收入 20%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 2455,
                "top": 1180,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "一般与行政",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "包含 $66M 股权激励",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "用于长期",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "CEO 绩效",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g data-typography-role=\"brand\" transform=\"translate(490 55) scale(.33)\" fill=\"#0099fa\"><path d=\"M110 699H191V846H151V741H110Z\"/><path d=\"M210 720A123 123 0 0 1 151 957V916A82 82 0 0 0 210 765Z\"/><path d=\"M131 954A123 123 0 0 1 88 764H130A82 82 0 0 0 131 910Z\"/></g><g data-typography-role=\"brand\"><text x=\"604\" y=\"361\" font-family=\"Arial, sans-serif\" font-size=\"94\" letter-spacing=\"-5\" font-weight=\"700\" fill=\"#000\">theTradeDesk</text><text x=\"1181\" y=\"312\" font-size=\"14\" fill=\"#777\">®</text></g><g><rect x=\"166\" y=\"1265\" width=\"542\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"480\" y=\"1314\" text-anchor=\"end\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">客户留存率</text><text data-operating-metric=\"customer_retention\" x=\"493\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text></g><text x=\"77\" y=\"1152\" font-size=\"23\" fill=\"#777\">地理细分</text><text x=\"77\" y=\"1182\" font-size=\"23\" fill=\"#777\">基于总账单额</text>"
    },
    "preservedAnnotationText": [
      "theTradeDesk"
    ]
  },
  "operatingMetrics": [
    {
      "id": "customer_retention",
      "literal": "> 95%",
      "value": "95",
      "unit": "%",
      "currency": null,
      "comparison": "gt"
    }
  ],
  "annotationsSvg": "<g data-typography-role=\"brand\" transform=\"translate(490 55) scale(.33)\" fill=\"#0099fa\"><path d=\"M110 699H191V846H151V741H110Z\"/><path d=\"M210 720A123 123 0 0 1 151 957V916A82 82 0 0 0 210 765Z\"/><path d=\"M131 954A123 123 0 0 1 88 764H130A82 82 0 0 0 131 910Z\"/></g><g data-typography-role=\"brand\"><text x=\"604\" y=\"361\" font-family=\"Arial, sans-serif\" font-size=\"94\" letter-spacing=\"-5\" font-weight=\"700\" fill=\"#000\">theTradeDesk</text><text x=\"1181\" y=\"312\" font-size=\"14\" fill=\"#777\">®</text></g><g><rect x=\"166\" y=\"1265\" width=\"542\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"480\" y=\"1314\" text-anchor=\"end\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Customer retention</text><text data-operating-metric=\"customer_retention\" x=\"493\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text></g><text x=\"77\" y=\"1152\" font-size=\"23\" fill=\"#777\">Geographic breakdown</text><text x=\"77\" y=\"1182\" font-size=\"23\" fill=\"#777\">based on Gross Billings</text>"
});
