window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "mcdonald-s-q2-fy26",
  "name": "McDonald's · Q2 FY26",
  "company": "McDonald's",
  "meta": {
    "company": "McDonald's",
    "title": "McDonald’s Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/mcdonald-s-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 126,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoWidth": 230,
    "logoHeight": 203,
    "logoY": 278,
    "logoViewBox": "0 0 230 203",
    "logoSvg": "<path fill=\"#ffc000\" d=\"M0 203C0 86 26 0 65 0C87 0 103 27 115 67C126 27 142 0 164 0C203 0 230 86 230 203H201C201 91 185 15 164 15C143 15 130 89 130 188H101C101 89 86 15 65 15C44 15 29 91 29 203Z\"/>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666",
    "noteColor": "#666",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#ffc72c",
        "label": "#050505"
      },
      "hub": {
        "node": "#ffc72c",
        "label": "#050505"
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
      "source": "#f7df99",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"150\" y=\"1199\" width=\"272\" height=\"149\" rx=\"30\" fill=\"#000\"/><text x=\"286\" y=\"1250\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#fff\">Global</text><text x=\"286\" y=\"1287\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#fff\">comparable sales</text><text data-operating-metric=\"global_comparable_sales_growth\" x=\"266\" y=\"1323\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1%</text><text x=\"314\" y=\"1323\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">Y/Y</text></g><g><rect x=\"436\" y=\"1199\" width=\"273\" height=\"149\" rx=\"30\" fill=\"#000\"/><text x=\"572.5\" y=\"1270\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#fff\">Systemwide sales</text><text data-operating-metric=\"systemwide_sales_growth\" x=\"552.5\" y=\"1302\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+5%</text><text x=\"600.5\" y=\"1302\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">Y/Y</text></g></g>",
  "nodes": [
    {
      "id": "company_owned_restaurants",
      "type": "source",
      "label": [
        "Sales from",
        "company-owned",
        "restaurants"
      ],
      "value": 2.5,
      "notes": [
        "+3% Y/Y",
        "15% gross margin"
      ]
    },
    {
      "id": "franchised_restaurants",
      "type": "source",
      "label": [
        "Franchised",
        "restaurants"
      ],
      "value": 4.4,
      "notes": [
        "+4% Y/Y",
        "85% gross margin"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other revenue",
      "value": 0.2,
      "notes": [
        "+6% Y/Y",
        "Other restaurants"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 7.1,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 4.1,
      "notes": [
        "58% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "restaurant_expenses",
      "type": "cost",
      "label": [
        "Restaurant",
        "expenses"
      ],
      "value": 3,
      "valueText": "($3.0B)"
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 3.3,
      "notes": [
        "47% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 0.8
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 2.4,
      "notes": [
        "33% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.6
    },
    {
      "id": "interest",
      "type": "cost",
      "label": "Interest",
      "value": 0.4
    },
    {
      "id": "other_sga",
      "type": "cost",
      "label": "Other SG&A",
      "value": 0.7
    },
    {
      "id": "depreciation_amortization",
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.1
    }
  ],
  "links": [
    {
      "source": "company_owned_restaurants",
      "target": "revenue",
      "value": 2.5,
      "sourceWidth": 139,
      "targetWidth": 139,
      "y0": 514.5,
      "y1": 719.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "franchised_restaurants",
      "target": "revenue",
      "value": 4.4,
      "sourceWidth": 244,
      "targetWidth": 245,
      "y0": 854,
      "y1": 911.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 8,
      "targetWidth": 10,
      "y0": 1139,
      "y1": 1039,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.1,
      "sourceWidth": 229,
      "targetWidth": 228,
      "y0": 764.5,
      "y1": 650,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "restaurant_expenses",
      "value": 3,
      "sourceWidth": 165,
      "targetWidth": 165,
      "y0": 961.5,
      "y1": 1060.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.3,
      "sourceWidth": 185,
      "targetWidth": 185,
      "y0": 628.5,
      "y1": 547.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.8,
      "sourceWidth": 43,
      "targetWidth": 41,
      "y0": 742.5,
      "y1": 844.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.4,
      "sourceWidth": 131,
      "targetWidth": 131,
      "y0": 520.5,
      "y1": 420.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 32,
      "targetWidth": 31,
      "y0": 602,
      "y1": 662.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.4,
      "sourceWidth": 22,
      "targetWidth": 20,
      "y0": 629,
      "y1": 799,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_sga",
      "value": 0.7,
      "sourceWidth": 36,
      "targetWidth": 35,
      "y0": 842,
      "y1": 951.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 862.5,
      "y1": 1160.5,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 55.5,
    "nodes": {
      "company_owned_restaurants": {
        "x": 382,
        "y": 445,
        "width": 71,
        "height": 139
      },
      "franchised_restaurants": {
        "x": 382,
        "y": 732,
        "width": 71,
        "height": 244
      },
      "other_revenue": {
        "x": 382,
        "y": 1135,
        "width": 71,
        "height": 8
      },
      "revenue": {
        "x": 849,
        "y": 650,
        "width": 71,
        "height": 394
      },
      "gross_profit": {
        "x": 1316,
        "y": 536,
        "width": 71,
        "height": 228
      },
      "restaurant_expenses": {
        "x": 1316,
        "y": 978,
        "width": 71,
        "height": 165
      },
      "operating_profit": {
        "x": 1784,
        "y": 455,
        "width": 70,
        "height": 185
      },
      "operating_expenses": {
        "x": 1784,
        "y": 824,
        "width": 70,
        "height": 41
      },
      "net_profit": {
        "x": 2250,
        "y": 355,
        "width": 71,
        "height": 131
      },
      "tax": {
        "x": 2250,
        "y": 647,
        "width": 71,
        "height": 31
      },
      "interest": {
        "x": 2250,
        "y": 789,
        "width": 71,
        "height": 20
      },
      "other_sga": {
        "x": 2250,
        "y": 934,
        "width": 71,
        "height": 35
      },
      "depreciation_amortization": {
        "x": 2250,
        "y": 1158,
        "width": 71,
        "height": 5
      }
    },
    "labels": {
      "company_owned_restaurants": {
        "blocks": [
          {
            "x": 418.5,
            "top": 353,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          },
          {
            "x": 200,
            "top": 438,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sales from",
                "size": 39,
                "weight": 800
              },
              {
                "text": "company-owned",
                "size": 39,
                "weight": 800
              },
              {
                "text": "restaurants",
                "size": 39,
                "weight": 800
              },
              {
                "text": "15% gross margin",
                "size": 27,
                "color": "#666"
              }
            ]
          }
        ]
      },
      "franchised_restaurants": {
        "blocks": [
          {
            "x": 418.5,
            "top": 641,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          },
          {
            "x": 200,
            "top": 786,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Franchised",
                "size": 39,
                "weight": 800
              },
              {
                "text": "restaurants",
                "size": 39,
                "weight": 800
              },
              {
                "text": "85% gross margin",
                "size": 27,
                "color": "#666"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 421,
            "top": 1040,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          },
          {
            "x": 203.5,
            "top": 1074,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Other restaurants",
                "size": 27,
                "color": "#666"
              }
            ],
            "semanticRole": "grouped-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 879.5,
            "top": 507,
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
                "size": 38
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1354.5,
            "top": 353,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "color": "#008f51"
              },
              {
                "text": "58% margin",
                "size": 28,
                "color": "#666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          }
        ]
      },
      "restaurant_expenses": {
        "blocks": [
          {
            "x": 1355,
            "top": 1164,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restaurant",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1822,
            "top": 273,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "color": "#008f51"
              },
              {
                "text": "47% margin",
                "size": 28,
                "color": "#666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1819.5,
            "top": 888,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2443.5,
            "top": 345,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "color": "#008f51"
              },
              {
                "text": "33% margin",
                "size": 28,
                "color": "#666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "color": "#666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2448.5,
            "top": 631,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2451.5,
            "top": 763,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_sga": {
        "blocks": [
          {
            "x": 2449,
            "top": 915,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other SG&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2449,
            "top": 1126,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "amortization",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "麦当劳 · 2026 财年第二季度",
      "meta": {
        "title": "麦当劳 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "",
        "titleSize": 114
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"150\" y=\"1199\" width=\"272\" height=\"149\" rx=\"30\" fill=\"#000\"/><text x=\"286\" y=\"1250\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#fff\">全球</text><text x=\"286\" y=\"1287\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#fff\">可比销售额</text><text data-operating-metric=\"global_comparable_sales_growth\" x=\"306\" y=\"1323\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1%</text><text x=\"258\" y=\"1323\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比</text></g><g><rect x=\"436\" y=\"1199\" width=\"273\" height=\"149\" rx=\"30\" fill=\"#000\"/><text x=\"572.5\" y=\"1270\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#fff\">系统销售额</text><text data-operating-metric=\"systemwide_sales_growth\" x=\"592.5\" y=\"1302\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+5%</text><text x=\"544.5\" y=\"1302\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比</text></g></g>",
      "nodes": {
        "company_owned_restaurants": {
          "label": [
            "自营餐厅",
            "销售额"
          ],
          "notes": [
            "同比 +3%",
            "毛利率 15%"
          ]
        },
        "franchised_restaurants": {
          "label": "加盟餐厅",
          "notes": [
            "同比 +4%",
            "毛利率 85%"
          ]
        },
        "other_revenue": {
          "label": "其他收入",
          "notes": [
            "同比 +6%",
            "其他餐厅"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 58%",
            "同比 +0 个百分点"
          ]
        },
        "restaurant_expenses": {
          "label": "餐厅费用"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 47%",
            "同比 (0 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 33%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "interest": {
          "label": "利息"
        },
        "other_sga": {
          "label": "其他销售、一般及行政费用"
        },
        "depreciation_amortization": {
          "label": "折旧及摊销"
        }
      },
      "layout": {
        "labels": {
          "company_owned_restaurants": {
            "blocks": [
              {
                "x": 418.5,
                "top": 353,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              },
              {
                "x": 200,
                "top": 438,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "自营餐厅",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "销售额",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 15%",
                    "size": 27,
                    "color": "#666"
                  }
                ]
              }
            ]
          },
          "franchised_restaurants": {
            "blocks": [
              {
                "x": 418.5,
                "top": 641,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              },
              {
                "x": 200,
                "top": 786,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "加盟餐厅",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 85%",
                    "size": 27,
                    "color": "#666"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 421,
                "top": 1040,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              },
              {
                "x": 203.5,
                "top": 1074,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "其他餐厅",
                    "size": 27,
                    "color": "#666"
                  }
                ],
                "semanticRole": "grouped-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 879.5,
                "top": 507,
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
                    "size": 38
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1354.5,
                "top": 353,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 58%",
                    "size": 28,
                    "color": "#666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              }
            ]
          },
          "restaurant_expenses": {
            "blocks": [
              {
                "x": 1355,
                "top": 1164,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "餐厅费用",
                    "size": 37,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1822,
                "top": 273,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 47%",
                    "size": 28,
                    "color": "#666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1819.5,
                "top": 888,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2443.5,
                "top": 345,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 33%",
                    "size": 28,
                    "color": "#666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "color": "#666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2448.5,
                "top": 631,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2451.5,
                "top": 763,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_sga": {
            "blocks": [
              {
                "x": 2449,
                "top": 915,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他销售、一般及",
                    "size": 27,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 27,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2449,
                "top": 1126,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧及摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "global_comparable_sales_growth",
      "value": "1",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+1%"
    },
    {
      "id": "systemwide_sales_growth",
      "value": "5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+5%"
    }
  ]
});
