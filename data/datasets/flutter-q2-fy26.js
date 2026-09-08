window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "flutter-q2-fy26",
  "name": "Flutter Entertainment · Q2 FY26",
  "company": "Flutter Entertainment",
  "meta": {
    "company": "Flutter Entertainment",
    "title": "Flutter Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/flutter-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2160,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#009cde",
        "label": "#0098df"
      },
      "hub": {
        "node": "#031338",
        "label": "#031338"
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
      "source": "#85cae9",
      "hub": "#868e9d",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"us\"><text x=\"402\" y=\"708\" font-size=\"39\" font-weight=\"700\" fill=\"#009cde\">US</text><text x=\"338\" y=\"708\" font-size=\"39\">🇺🇸</text></g><g class=\"sankey-interactive-annotation\" data-node=\"international\"><text x=\"327\" y=\"987\" text-anchor=\"middle\" font-size=\"39\" font-weight=\"700\" fill=\"#009cde\">International</text></g>",
  "rasterAnnotations": [
    {
      "key": "flutter-company-wordmark",
      "href": "data/assets/raster-annotations/flutter/company-wordmark.png",
      "x": 808,
      "y": 254,
      "width": 650,
      "height": 166
    },
    {
      "key": "fanduel-us-brand",
      "href": "data/assets/raster-annotations/flutter/fanduel-us-brand.png",
      "x": 14,
      "y": 655,
      "width": 300,
      "height": 76
    },
    {
      "key": "flutter-international-brand-cluster",
      "href": "data/assets/raster-annotations/flutter/international-brand-cluster.png",
      "x": 78,
      "y": 1008,
      "width": 364,
      "height": 204
    }
  ],
  "layout": {
    "scale": 82,
    "nodes": {
      "us": {
        "x": 463,
        "y": 612,
        "width": 71,
        "height": 130
      },
      "international": {
        "x": 463,
        "y": 943,
        "width": 71,
        "height": 205
      },
      "revenue_geo": {
        "x": 774,
        "y": 747,
        "width": 72,
        "height": 336
      },
      "sportsbook": {
        "x": 1085,
        "y": 615,
        "width": 72,
        "height": 172
      },
      "igaming": {
        "x": 1085,
        "y": 1001,
        "width": 72,
        "height": 149
      },
      "other_revenue": {
        "x": 1085,
        "y": 1343,
        "width": 72,
        "height": 11
      },
      "revenue": {
        "x": 1397,
        "y": 751,
        "width": 71,
        "height": 336
      },
      "gross_profit": {
        "x": 1708,
        "y": 611,
        "width": 72,
        "height": 133
      },
      "cost_of_sales": {
        "x": 1708,
        "y": 967,
        "width": 72,
        "height": 203
      },
      "operating_loss": {
        "x": 1883,
        "y": 938,
        "width": 72,
        "height": 10
      },
      "operating_expenses": {
        "x": 2020,
        "y": 744,
        "width": 71,
        "height": 143
      },
      "sm": {
        "x": 2331,
        "y": 605,
        "width": 72,
        "height": 77
      },
      "ga": {
        "x": 2331,
        "y": 896,
        "width": 72,
        "height": 40
      },
      "rnd": {
        "x": 2331,
        "y": 1165,
        "width": 72,
        "height": 22
      }
    },
    "labels": {
      "us": {
        "blocks": [
          {
            "x": 501,
            "top": 520,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0098df"
              },
              {
                "text": "(6%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 498.5,
            "top": 851,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0098df"
              },
              {
                "text": "+10% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "revenue_geo": {
        "blocks": [
          {
            "x": 810.5,
            "top": 601,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 700,
                "color": "#031338"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#031338"
              },
              {
                "text": "+3% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "sportsbook": {
        "blocks": [
          {
            "x": 1121.5,
            "top": 467,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sportsbook",
                "size": 40,
                "weight": 700,
                "color": "#031338"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#031338"
              },
              {
                "text": "(1%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "igaming": {
        "blocks": [
          {
            "x": 1122.5,
            "top": 855,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "iGaming",
                "size": 40,
                "weight": 700,
                "color": "#031338"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#031338"
              },
              {
                "text": "+9% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 1121.5,
            "top": 1194,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 700,
                "color": "#031338"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#031338"
              },
              {
                "text": "+7% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1433,
            "top": 605,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 700,
                "color": "#031338"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#031338"
              },
              {
                "text": "+3% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1745.5,
            "top": 427,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "40% margin",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1746,
            "top": 1185,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "sales",
                "size": 36,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1919,
            "top": 968,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(3%) margin",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 2052,
            "top": 601,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
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
            "x": 2521,
            "top": 610,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "23% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2526.5,
            "top": 886,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "13% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2525.5,
            "top": 1147,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "7% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "us",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "US",
      "value": 1.7,
      "notes": [
        "(6%) Y/Y"
      ],
      "valueText": "$1.7B"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 2.6,
      "notes": [
        "+10% Y/Y"
      ],
      "valueText": "$2.6B"
    },
    {
      "id": "revenue_geo",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 4.3,
      "notes": [
        "+3% Y/Y"
      ],
      "valueText": "$4.3B"
    },
    {
      "id": "sportsbook",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Sportsbook",
      "value": 2.2,
      "notes": [
        "(1%) Y/Y"
      ],
      "valueText": "$2.2B"
    },
    {
      "id": "igaming",
      "col": 2,
      "order": 1,
      "type": "hub",
      "label": "iGaming",
      "value": 1.9,
      "notes": [
        "+9% Y/Y"
      ],
      "valueText": "$1.9B"
    },
    {
      "id": "other_revenue",
      "col": 2,
      "order": 2,
      "type": "hub",
      "label": "Other",
      "value": 0.2,
      "notes": [
        "+7% Y/Y"
      ],
      "valueText": "$0.2B"
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 4.3,
      "notes": [
        "+3% Y/Y"
      ],
      "valueText": "$4.3B"
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1.7,
      "notes": [
        "40% margin",
        "(7pp) Y/Y"
      ],
      "valueText": "$1.7B"
    },
    {
      "id": "cost_of_sales",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "sales"
      ],
      "value": 2.6,
      "valueText": "($2.6B)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.1,
      "valueText": "($0.1B)",
      "notes": [
        "(3%) margin",
        "(13pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 6,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.9,
      "valueText": "($1.9B)",
      "notes": []
    },
    {
      "id": "sm",
      "col": 7,
      "order": 0,
      "type": "cost",
      "label": "S&M",
      "value": 1,
      "valueText": "($1.0B)",
      "notes": [
        "23% of revenue",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 7,
      "order": 1,
      "type": "cost",
      "label": "G&A",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": [
        "13% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 7,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "7% of revenue",
        "+1pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "us",
      "target": "revenue_geo",
      "value": 1.7,
      "sourceWidth": 130,
      "targetWidth": 130,
      "y0": 677,
      "y1": 812,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cae9"
    },
    {
      "source": "international",
      "target": "revenue_geo",
      "value": 2.6,
      "sourceWidth": 205,
      "targetWidth": 206,
      "y0": 1045.5,
      "y1": 980,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cae9"
    },
    {
      "source": "revenue_geo",
      "target": "sportsbook",
      "value": 2.2,
      "sourceWidth": 172,
      "targetWidth": 172,
      "y0": 833,
      "y1": 701,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#868e9d"
    },
    {
      "source": "revenue_geo",
      "target": "igaming",
      "value": 1.9,
      "sourceWidth": 152,
      "targetWidth": 149,
      "y0": 995,
      "y1": 1075.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#868e9d"
    },
    {
      "source": "revenue_geo",
      "target": "other_revenue",
      "value": 0.2,
      "sourceWidth": 12,
      "targetWidth": 11,
      "y0": 1077,
      "y1": 1348.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#868e9d"
    },
    {
      "source": "sportsbook",
      "target": "revenue",
      "value": 2.2,
      "sourceWidth": 172,
      "targetWidth": 172,
      "y0": 701,
      "y1": 837,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#868e9d"
    },
    {
      "source": "igaming",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 149,
      "targetWidth": 152,
      "y0": 1075.5,
      "y1": 999,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#868e9d"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 11,
      "targetWidth": 12,
      "y0": 1348.5,
      "y1": 1081,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#868e9d"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.7,
      "sourceWidth": 133,
      "targetWidth": 133,
      "y0": 817.5,
      "y1": 677.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.6,
      "sourceWidth": 203,
      "targetWidth": 203,
      "y0": 985.5,
      "y1": 1068.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.7,
      "sourceWidth": 133,
      "targetWidth": 133,
      "y0": 677.5,
      "y1": 810.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.1,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 943,
      "y1": 882,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1,
      "sourceWidth": 78,
      "targetWidth": 77,
      "y0": 783,
      "y1": 643.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.5,
      "sourceWidth": 42,
      "targetWidth": 40,
      "y0": 843,
      "y1": 916,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "sourceWidth": 23,
      "targetWidth": 22,
      "y0": 875.5,
      "y1": 1176,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Flutter Entertainment · 2026 财年第二季度",
      "meta": {
        "title": "Flutter 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "",
        "titleSize": 115,
        "titleTextLength": 2160
      },
      "nodes": {
        "us": {
          "label": "美国",
          "notes": [
            "同比 (6%)"
          ]
        },
        "international": {
          "label": "国际业务",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue_geo": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "sportsbook": {
          "label": "体育博彩",
          "notes": [
            "同比 (1%)"
          ]
        },
        "igaming": {
          "label": "在线博彩",
          "notes": [
            "同比 +9%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 40%",
            "同比 (7 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": [
            "销售",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (3%)",
            "同比 (13 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 23%",
            "同比 +5 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 13%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 7%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "us": {
            "blocks": [
              {
                "x": 501,
                "top": 520,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0098df"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 498.5,
                "top": 851,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0098df"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "revenue_geo": {
            "blocks": [
              {
                "x": 810.5,
                "top": 601,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 700,
                    "color": "#031338"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#031338"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "sportsbook": {
            "blocks": [
              {
                "x": 1121.5,
                "top": 467,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "体育博彩",
                    "size": 40,
                    "weight": 700,
                    "color": "#031338"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#031338"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "igaming": {
            "blocks": [
              {
                "x": 1122.5,
                "top": 855,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "在线博彩",
                    "size": 40,
                    "weight": 700,
                    "color": "#031338"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#031338"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 1121.5,
                "top": 1194,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 700,
                    "color": "#031338"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#031338"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1433,
                "top": 605,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 700,
                    "color": "#031338"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#031338"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1745.5,
                "top": 427,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "毛利率 40%",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1746,
                "top": 1185,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售",
                    "size": 36,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1919,
                "top": 968,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (3%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 2052,
                "top": 601,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
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
                "x": 2521,
                "top": 610,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2526.5,
                "top": 886,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2525.5,
                "top": 1147,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"us\"><text x=\"452\" y=\"708\" text-anchor=\"end\" font-size=\"32\" font-weight=\"700\" fill=\"#009cde\">美国</text><text x=\"338\" y=\"708\" font-size=\"39\">🇺🇸</text></g><g class=\"sankey-interactive-annotation\" data-node=\"international\"><text x=\"327\" y=\"987\" text-anchor=\"middle\" font-size=\"39\" font-weight=\"700\" fill=\"#009cde\">国际业务</text></g>"
    }
  }
});
