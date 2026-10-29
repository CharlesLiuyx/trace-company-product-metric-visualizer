window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "monday-com-h1-fy24",
  "name": "Monday.com · H1 FY24",
  "company": "Monday.com",
  "meta": {
    "company": "Monday.com",
    "title": "Monday.com H1 FY24 Income Statement",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/monday-com-h1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 128,
    "titleWeight": 700,
    "titleTextLength": 2460,
    "logoSvg": "\n    <g  data-typography-role=\"brand\">\n      <rect x=\"53.25\" y=\"55\" width=\"82.5\" height=\"189\" rx=\"41.25\" transform=\"rotate(32 94.5 149.5)\" fill=\"#f62b54\"/>\n      <rect x=\"165.75\" y=\"55\" width=\"82.5\" height=\"189\" rx=\"41.25\" transform=\"rotate(32 207 149.5)\" fill=\"#ffcc00\"/>\n      <circle cx=\"283.5\" cy=\"204.5\" r=\"32.5\" fill=\"#00ca72\"/>\n      <text x=\"24\" y=\"300\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"64\" font-weight=\"800\" fill=\"#333333\"\n        textLength=\"230\" lengthAdjust=\"spacingAndGlyphs\">monday</text>\n      <text x=\"232\" y=\"318\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"34\" font-weight=\"700\" fill=\"#333333\">.com</text>\n    </g>",
    "logoViewBox": "0 20 345 320",
    "logoWidth": 320,
    "logoHeight": 250,
    "logoX": 741,
    "logoY": 230
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155277",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#333333",
        "label": "#333333"
      },
      "hub": {
        "node": "#333333",
        "label": "#333333"
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
      "source": "#999999",
      "hub": "#99cd99",
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
  "annotationsSvg": "<g><rect x=\"90\" y=\"1205\" width=\"293\" height=\"150\" rx=\"35\" fill=\"#333333\"/><rect x=\"395\" y=\"1205\" width=\"347\" height=\"150\" rx=\"35\" fill=\"#333333\"/><g fill=\"#ffffff\" font-size=\"29\"><text x=\"115\" y=\"1272\" font-size=\"24\">NDR</text><text data-operating-metric=\"ndr\" x=\"246\" y=\"1272\">&gt; 110%</text><text x=\"122\" y=\"1311\">10+ users</text><text data-operating-metric=\"ndr10\" x=\"268\" y=\"1311\">&gt; 114%</text><text x=\"417\" y=\"1272\" font-size=\"23\">Customers&gt; $50K+</text><text data-operating-metric=\"customers\" x=\"460\" y=\"1315\">2,713</text><text x=\"549\" y=\"1315\">+44% Y/Y</text></g><text x=\"240\" y=\"1391\" font-size=\"27\" fill=\"#777777\">NDR = Net Dollar Retention</text><text x=\"170\" y=\"1436\" font-size=\"38\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "ndr",
      "value": "110",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 110%"
    },
    {
      "id": "ndr10",
      "value": "114",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 114%"
    },
    {
      "id": "customers",
      "value": "2713",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,713"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "na": {
        "x": 400,
        "y": 424,
        "width": 72,
        "height": 162
      },
      "emea": {
        "x": 400,
        "y": 727,
        "width": 72,
        "height": 66
      },
      "uk": {
        "x": 400,
        "y": 956,
        "width": 72,
        "height": 31
      },
      "rest": {
        "x": 400,
        "y": 1150,
        "width": 72,
        "height": 43
      },
      "revenue": {
        "x": 867,
        "y": 661,
        "width": 72,
        "height": 303
      },
      "gross_profit": {
        "x": 1334,
        "y": 548,
        "width": 72,
        "height": 272
      },
      "cost_of_revenue": {
        "x": 1331,
        "y": 1087,
        "width": 72,
        "height": 31
      },
      "operating_loss": {
        "x": 1609,
        "y": 1005,
        "width": 72,
        "height": 2
      },
      "operating_expenses": {
        "x": 1799,
        "y": 662,
        "width": 72,
        "height": 274
      },
      "sm": {
        "x": 2268,
        "y": 424,
        "width": 72,
        "height": 173
      },
      "rnd": {
        "x": 2268,
        "y": 845,
        "width": 72,
        "height": 63
      },
      "ga": {
        "x": 2268,
        "y": 1164,
        "width": 72,
        "height": 36
      }
    },
    "labels": {
      "na": {
        "blocks": [
          {
            "x": 351,
            "top": 482,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "North America",
                "size": 38,
                "weight": 700
              }
            ]
          },
          {
            "x": 436,
            "top": 319,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 700
              },
              {
                "text": "+33% Y/Y",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 351,
            "top": 734,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "EMEA",
                "size": 38,
                "weight": 700
              }
            ]
          },
          {
            "x": 436,
            "top": 619,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 700
              },
              {
                "text": "+36% Y/Y",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "uk": {
        "blocks": [
          {
            "x": 351,
            "top": 948.5,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "United Kingdom",
                "size": 38,
                "weight": 700
              }
            ]
          },
          {
            "x": 436,
            "top": 850,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 700
              },
              {
                "text": "+40% Y/Y",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rest": {
        "blocks": [
          {
            "x": 351,
            "top": 1148.5,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Rest of the world",
                "size": 38,
                "weight": 700
              }
            ]
          },
          {
            "x": 436,
            "top": 1049,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 700
              },
              {
                "text": "+31% Y/Y",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 900,
            "top": 505,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 38,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1370,
            "top": 353,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 38,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "90% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1366,
            "top": 1132,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 38,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 38,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1645,
            "top": 1022,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "(1%) margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+10pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1835,
            "top": 482,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2459,
            "top": 427,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sales &",
                "size": 32,
                "weight": 700
              },
              {
                "text": "marketing",
                "size": 32,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "57% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2459,
            "top": 801,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Research &",
                "size": 32,
                "weight": 700
              },
              {
                "text": "development",
                "size": 32,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "21% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2459,
            "top": 1125,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "General &",
                "size": 32,
                "weight": 700
              },
              {
                "text": "admin",
                "size": 32,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "na",
      "col": 0,
      "order": 0,
      "type": "hub",
      "label": "North America",
      "value": 242,
      "color": "#333333",
      "labelColor": "#333333",
      "linkTint": "#999999",
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "emea",
      "col": 0,
      "order": 1,
      "type": "hub",
      "label": "EMEA",
      "value": 98,
      "color": "#333333",
      "labelColor": "#333333",
      "linkTint": "#999999",
      "notes": [
        "+36% Y/Y"
      ]
    },
    {
      "id": "uk",
      "col": 0,
      "order": 2,
      "type": "hub",
      "label": "United Kingdom",
      "value": 47,
      "color": "#333333",
      "labelColor": "#333333",
      "linkTint": "#999999",
      "notes": [
        "+40% Y/Y"
      ]
    },
    {
      "id": "rest",
      "col": 0,
      "order": 3,
      "type": "hub",
      "label": "Rest of the world",
      "value": 66,
      "color": "#333333",
      "labelColor": "#333333",
      "linkTint": "#999999",
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 453,
      "color": "#333333",
      "labelColor": "#333333",
      "linkTint": "#99cd99",
      "notes": [
        "+34% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 5,
      "type": "profit",
      "label": "Gross profit",
      "value": 406,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "90% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 6,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 47,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Operating loss",
      "value": -3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "(1%) margin",
        "+10pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Operating expenses",
      "value": 409,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "sm",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 260,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "57% of revenue",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "Research & development",
      "value": 95,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "21% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "General & admin",
      "value": 55,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "na",
      "target": "revenue",
      "value": 242,
      "sourceWidth": 162,
      "targetWidth": 162,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#999999"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 98,
      "sourceWidth": 66,
      "targetWidth": 66,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#999999"
    },
    {
      "source": "uk",
      "target": "revenue",
      "value": 47,
      "sourceWidth": 31,
      "targetWidth": 31,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#999999"
    },
    {
      "source": "rest",
      "target": "revenue",
      "value": 66,
      "sourceWidth": 43,
      "targetWidth": 43,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#999999"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 406,
      "sourceWidth": 272,
      "targetWidth": 272,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 47,
      "sourceWidth": 31,
      "targetWidth": 31,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 406,
      "sourceWidth": 272,
      "targetWidth": 272,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 3,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 1006,
      "y1": 935,
      "linkTint": "#e08585",
      "curve": {
        "x0": 1681,
        "x1": 1799,
        "c1x": 1737,
        "c1y": 1006,
        "c2x": 1747,
        "c2y": 935
      }
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 260,
      "sourceWidth": 173,
      "targetWidth": 173,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 95,
      "sourceWidth": 64,
      "targetWidth": 63,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 55,
      "sourceWidth": 37,
      "targetWidth": 36,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Monday.com · 2024 财年上半年",
      "meta": {
        "title": "Monday.com 2024 财年上半年利润表",
        "titleTextLength": 2300
      },
      "annotationsSvg": "<g><rect x=\"90\" y=\"1205\" width=\"293\" height=\"150\" rx=\"35\" fill=\"#333333\"/><rect x=\"395\" y=\"1205\" width=\"347\" height=\"150\" rx=\"35\" fill=\"#333333\"/><g fill=\"#ffffff\" font-size=\"29\"><text x=\"115\" y=\"1272\" font-size=\"24\">净留存率</text><text data-operating-metric=\"ndr\" x=\"246\" y=\"1272\">&gt; 110%</text><text x=\"122\" y=\"1311\">10+ 用户</text><text data-operating-metric=\"ndr10\" x=\"268\" y=\"1311\">&gt; 114%</text><text x=\"417\" y=\"1272\" font-size=\"23\">ARR 超 $50K+ 客户</text><text data-operating-metric=\"customers\" x=\"460\" y=\"1315\">2,713</text><text x=\"549\" y=\"1315\">同比 +44%</text></g><text x=\"240\" y=\"1391\" font-size=\"27\" fill=\"#777777\">NDR = 净美元留存率</text><text x=\"170\" y=\"1436\" font-size=\"38\" font-weight=\"700\">来源：季度业绩</text></g>",
      "nodes": {
        "na": {
          "label": "北美",
          "notes": [
            "同比 +33%"
          ]
        },
        "emea": {
          "label": "欧洲、中东及非洲",
          "notes": [
            "同比 +36%"
          ]
        },
        "uk": {
          "label": "英国",
          "notes": [
            "同比 +40%"
          ]
        },
        "rest": {
          "label": "世界其他地区",
          "notes": [
            "同比 +31%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +34%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 90%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +10 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 57%",
            "同比 (6 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 21%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "na": {
            "blocks": [
              {
                "x": 351,
                "top": 482,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "北美",
                    "size": 38,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 436,
                "top": 319,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "同比 +33%",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 351,
                "top": 734,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "欧洲、中东及非洲",
                    "size": 38,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 436,
                "top": 619,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "同比 +36%",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "uk": {
            "blocks": [
              {
                "x": 351,
                "top": 948.5,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "英国",
                    "size": 38,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 436,
                "top": 850,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "同比 +40%",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rest": {
            "blocks": [
              {
                "x": 351,
                "top": 1148.5,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 38,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 436,
                "top": 1049,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "同比 +31%",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 900,
                "top": 505,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1370,
                "top": 353,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 90%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1366,
                "top": 1132,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 38,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1645,
                "top": 1022,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +10 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1835,
                "top": 482,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2459,
                "top": 427,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32,
                    "weight": 700
                  },
                  {
                    "text": "市场",
                    "size": 32,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 57%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2459,
                "top": 801,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 32,
                    "weight": 700
                  },
                  {
                    "text": "开发",
                    "size": 32,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2459,
                "top": 1125,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 32,
                    "weight": 700
                  },
                  {
                    "text": "行政",
                    "size": 32,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
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
