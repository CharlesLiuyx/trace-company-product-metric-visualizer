window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "datadog-q2-fy26",
  "name": "Datadog · Q2 FY26",
  "company": "Datadog",
  "meta": {
    "company": "Datadog",
    "title": "Datadog Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/datadog-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2260,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155277",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#632ca6",
        "label": "#6730ad"
      },
      "hub": {
        "node": "#632ca6",
        "label": "#6730ad"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00964a"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#971100"
      }
    },
    "linkTint": {
      "source": "#b39acf",
      "hub": "#9acc9a",
      "profit": "#9acc9a",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"101\" y=\"1142\" width=\"207\" height=\"168\" rx=\"34\" fill=\"#6730ad\"/>\n      <text x=\"205\" y=\"1217\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text>\n      <text x=\"205\" y=\"1262\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"500\" fill=\"#ffffff\">&gt;120%</text>\n\n      <rect x=\"320\" y=\"1142\" width=\"518\" height=\"168\" rx=\"34\" fill=\"#6730ad\"/>\n      <text x=\"579\" y=\"1217\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">Customers</tspan><tspan font-weight=\"500\"> 33,400 +6% Y/Y</tspan>\n      </text>\n      <text x=\"579\" y=\"1262\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">&gt; $100K 4,720</tspan><tspan font-weight=\"500\"> +23% Y/Y</tspan>\n      </text>\n\n      <text x=\"210\" y=\"1348\" font-size=\"29\" font-weight=\"500\" fill=\"#707070\">DBNR = Dollar Based Net Retention</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/datadog/company-wordmark.png",
      "x": 540,
      "y": 286,
      "width": 620,
      "height": 169
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "north_america": {
        "x": 386,
        "y": 529,
        "width": 73,
        "height": 247
      },
      "international": {
        "x": 386,
        "y": 973,
        "width": 73,
        "height": 88
      },
      "revenue": {
        "x": 853,
        "y": 618,
        "width": 73,
        "height": 336
      },
      "gross_profit": {
        "x": 1323,
        "y": 529,
        "width": 72,
        "height": 263
      },
      "cost_of_revenue": {
        "x": 1320,
        "y": 987,
        "width": 73,
        "height": 72
      },
      "operating_profit": {
        "x": 1787,
        "y": 473,
        "width": 73,
        "height": 2
      },
      "operating_expenses": {
        "x": 1787,
        "y": 635,
        "width": 73,
        "height": 263
      },
      "other": {
        "x": 2120,
        "y": 458,
        "width": 73,
        "height": 12
      },
      "net_profit": {
        "x": 2254,
        "y": 399,
        "width": 73,
        "height": 13
      },
      "rnd": {
        "x": 2254,
        "y": 672,
        "width": 73,
        "height": 143
      },
      "sm": {
        "x": 2254,
        "y": 938,
        "width": 73,
        "height": 94
      },
      "ga": {
        "x": 2254,
        "y": 1154,
        "width": 73,
        "height": 26
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 420.5,
            "top": 430,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+41% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 215.5,
            "top": 606,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "North",
                "size": 40,
                "weight": 800
              },
              {
                "text": "America",
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
            "x": 426.5,
            "top": 877,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 217.5,
            "top": 994,
            "anchor": "middle",
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
            "x": 890.5,
            "top": 476,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1359.5,
            "top": 347,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "79% margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1354,
            "top": 1082,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 37,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1826,
            "top": 290,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "0% margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1821,
            "top": 920,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2159,
            "top": 487,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 2452.5,
            "top": 340,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "4% margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2454,
            "top": 680,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "43% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2451.5,
            "top": 923,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "28% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2451.5,
            "top": 1134,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "North America",
      "value": 825,
      "notes": [
        "+41% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#6730ad",
      "linkTint": "#b39acf"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 297,
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#6730ad",
      "linkTint": "#b39acf"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1121,
      "valueText": "$1,121M",
      "notes": [
        "+36% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#6730ad",
      "linkTint": "#b39acf"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 881,
      "notes": [
        "79% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 240
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 5,
      "notes": [
        "0% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 876
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 39
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 45,
      "notes": [
        "4% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "R&D",
      "value": 478,
      "notes": [
        "43% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "S&M",
      "value": 312,
      "notes": [
        "28% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 86,
      "notes": [
        "8% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 825,
      "width": 247,
      "sourceWidth": 247,
      "targetWidth": 247,
      "y0": 652.5,
      "y1": 741.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 297,
      "width": 88,
      "sourceWidth": 88,
      "targetWidth": 89,
      "y0": 1017,
      "y1": 909.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 881,
      "width": 264,
      "sourceWidth": 264,
      "targetWidth": 263,
      "y0": 750,
      "y1": 660.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc9a"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 240,
      "width": 72,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 918,
      "y1": 1023,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 5,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 530,
      "y1": 474,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 876,
      "width": 261,
      "sourceWidth": 261,
      "targetWidth": 263,
      "y0": 661.5,
      "y1": 766.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 5,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 474,
      "y1": 400,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 39,
      "width": 12,
      "sourceWidth": 12,
      "targetWidth": 11,
      "y0": 464,
      "y1": 406.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 478,
      "width": 143,
      "sourceWidth": 143,
      "targetWidth": 143,
      "y0": 706.5,
      "y1": 743.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 312,
      "width": 94,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 825,
      "y1": 985,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 86,
      "width": 26,
      "sourceWidth": 26,
      "targetWidth": 26,
      "y0": 885,
      "y1": 1167,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Datadog · 2026 财年第二季度",
      "meta": {
        "title": "Datadog 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "titleSize": 112,
        "titleTextLength": 1900
      },
      "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"101\" y=\"1142\" width=\"207\" height=\"168\" rx=\"34\" fill=\"#6730ad\"/>\n      <text x=\"205\" y=\"1217\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text>\n      <text x=\"205\" y=\"1262\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"500\" fill=\"#ffffff\">&gt;120%</text>\n\n      <rect x=\"320\" y=\"1142\" width=\"518\" height=\"168\" rx=\"34\" fill=\"#6730ad\"/>\n      <text x=\"579\" y=\"1217\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">客户数</tspan><tspan font-weight=\"500\"> 33,400 同比 +6%</tspan>\n      </text>\n      <text x=\"579\" y=\"1262\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">&gt;$100K 客户 4,720</tspan><tspan font-weight=\"500\"> 同比 +23%</tspan>\n      </text>\n\n      <text x=\"210\" y=\"1348\" font-size=\"29\" font-weight=\"500\" fill=\"#707070\">DBNR = 美元净留存率</text>\n    </g>",
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +41%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +24%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +36%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 0%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 +4 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 43%",
            "同比 (4 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 28%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 8%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 420.5,
                "top": 430,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +41%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 215.5,
                "top": 628,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "北美",
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
                "x": 426.5,
                "top": 877,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 217.5,
                "top": 994,
                "anchor": "middle",
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
                "x": 890.5,
                "top": 476,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1359.5,
                "top": 347,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1354,
                "top": 1082,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1826,
                "top": 290,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 0%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1821,
                "top": 920,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2159,
                "top": 487,
                "anchor": "middle",
                "lineGap": 8,
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
                "x": 2452.5,
                "top": 340,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2454,
                "top": 680,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 43%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2451.5,
                "top": 923,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 28%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2451.5,
                "top": 1134,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
