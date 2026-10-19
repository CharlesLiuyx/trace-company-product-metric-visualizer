(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "snap-q3-fy22",
  "name": "Snap · Q3 FY22",
  "company": "Snap",
  "meta": {
    "company": "Snap",
    "title": "Snap Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/snap-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.33,
    "titleY": 199.22,
    "titleSize": 122.4,
    "titleWeight": 800,
    "titleTextLength": 2031.25,
    "hidePeriodStamp": true,
    "logoWidth": 272.14,
    "logoHeight": 272.14,
    "logoY": 239.58,
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).snapLogo || "",
    "logoViewBox": "0 0 208 208"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#fffc00",
        "label": "#000000"
      },
      "hub": {
        "node": "#fffc00",
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
      "source": "#f7f685",
      "hub": "#f7f685",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 10.42
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 812,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 161,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "rest_of_world",
      "label": "Rest of world",
      "value": 155,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1128,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 662,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "59% margin",
        "+0.2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 467,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -435,
      "type": "cost",
      "col": 3,
      "order": 0,
      "notes": [
        "(39%) margin",
        "(22pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1097,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 564,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "50% of revenue",
        "+11pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 270,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [
        "24% of revenue",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 262,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "23% of revenue",
        "+7pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 812,
      "sourceWidth": 188.8,
      "targetWidth": 188.8,
      "y0": 641.28,
      "y1": 762.37,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 161,
      "sourceWidth": 37.76,
      "targetWidth": 37.76,
      "y0": 883.46,
      "y1": 875.65,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 155,
      "sourceWidth": 36.46,
      "targetWidth": 35.16,
      "y0": 1049.48,
      "y1": 912.11,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 662,
      "sourceWidth": 153.65,
      "targetWidth": 153.65,
      "y0": 744.79,
      "y1": 636.72,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 467,
      "sourceWidth": 108.07,
      "targetWidth": 108.07,
      "y0": 875.65,
      "y1": 985.03,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 662,
      "sourceWidth": 153.65,
      "targetWidth": 153.65,
      "y0": 636.72,
      "y1": 729.17,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 435,
      "sourceWidth": 100.26,
      "targetWidth": 100.26,
      "y0": 1087.89,
      "y1": 856.12,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 564,
      "sourceWidth": 130.21,
      "targetWidth": 130.21,
      "y0": 717.45,
      "y1": 766.93,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 270,
      "sourceWidth": 62.5,
      "targetWidth": 62.5,
      "y0": 813.8,
      "y1": 953.13,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 262,
      "sourceWidth": 61.2,
      "targetWidth": 59.9,
      "y0": 875.65,
      "y1": 1135.42,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 373.7,
        "y": 546.88,
        "width": 72.92,
        "height": 188.8
      },
      "europe": {
        "x": 373.7,
        "y": 864.58,
        "width": 72.92,
        "height": 37.76
      },
      "rest_of_world": {
        "x": 373.7,
        "y": 1031.25,
        "width": 72.92,
        "height": 36.46
      },
      "revenue": {
        "x": 924.48,
        "y": 667.97,
        "width": 72.92,
        "height": 261.72
      },
      "gross_profit": {
        "x": 1402.34,
        "y": 559.9,
        "width": 72.92,
        "height": 153.65
      },
      "cost_of_revenue": {
        "x": 1404.95,
        "y": 930.99,
        "width": 72.92,
        "height": 108.07
      },
      "operating_loss": {
        "x": 1665.36,
        "y": 1037.76,
        "width": 72.92,
        "height": 100.26
      },
      "operating_expenses": {
        "x": 1835.94,
        "y": 652.34,
        "width": 72.92,
        "height": 253.91
      },
      "rnd": {
        "x": 2226.56,
        "y": 701.82,
        "width": 72.92,
        "height": 130.21
      },
      "sm": {
        "x": 2226.56,
        "y": 921.88,
        "width": 72.92,
        "height": 62.5
      },
      "ga": {
        "x": 2221.35,
        "y": 1105.47,
        "width": 72.92,
        "height": 59.9
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 410.16,
            "top": 453.13,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 341.15,
            "top": 617.7199999999999,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "North America",
                "size": 39.06,
                "weight": 800
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 410.16,
            "top": 776.04,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 341.15,
            "top": 861.98,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Europe",
                "size": 39.06,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 410.16,
            "top": 941.41,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 341.15,
            "top": 1025.9599999999998,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Rest of world",
                "size": 39.06,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 960.94,
            "top": 526.04,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.06,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34,
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
            "x": 1438.8,
            "top": 378.91,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.06,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "59% margin",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0.2pp Y/Y",
                "size": 27.34,
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
            "x": 1441.41,
            "top": 1057.29,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 37.76,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 37.76,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1701.82,
            "top": 1162.76,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.06,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "(39%) margin",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(22pp) Y/Y",
                "size": 27.34,
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
            "x": 1872.4,
            "top": 494.79,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating",
                "size": 39.06,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.06,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.06,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2444.01,
            "top": 718.75,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "50% of revenue",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+11pp Y/Y",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2454.43,
            "top": 932.29,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34,
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
            "x": 2454.43,
            "top": 1117.19,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
                "size": 27.34,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g><rect x=\"203.13\" y=\"1170.57\" width=\"210.94\" height=\"149.74\" rx=\"29.95\" fill=\"#000000\"/><text x=\"308.59\" y=\"1223.96\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\" font-weight=\"700\">DAU</text><text data-operating-metric=\"dau\" x=\"308.59\" y=\"1263.02\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\">363M</text><text x=\"308.59\" y=\"1294.27\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"22.14\">+19% Y/Y</text><rect x=\"420.57\" y=\"1170.57\" width=\"210.94\" height=\"149.74\" rx=\"29.95\" fill=\"#000000\"/><text x=\"526.04\" y=\"1223.96\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\" font-weight=\"700\">ARPU</text><text data-operating-metric=\"arpu\" x=\"526.04\" y=\"1263.02\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\">$3.11</text><text x=\"526.04\" y=\"1294.27\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"22.14\">(11%) Y/Y</text><text x=\"429.69\" y=\"1354.17\" text-anchor=\"middle\" font-size=\"27.34\" fill=\"#777777\">DAU = Daily Active Users</text><text x=\"429.69\" y=\"1393.23\" text-anchor=\"middle\" font-size=\"27.34\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"170.57\" y=\"1437.5\" font-size=\"39.06\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "dau",
      "value": "363000000",
      "unit": "count",
      "currency": null,
      "literal": "363M",
      "comparison": "eq"
    },
    {
      "id": "arpu",
      "value": "0.00311",
      "unit": "K",
      "currency": "USD",
      "literal": "$3.11",
      "comparison": "eq"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Snap · 2022 财年第三季度",
      "meta": {
        "title": "Snap 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "titleTextLength": 1822.92
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +3%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +5%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +22%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 59%",
            "同比 +0.2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (39%)",
            "同比 (22 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 50%",
            "同比 +11 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 24%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 23%",
            "同比 +7 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 410.16,
                "top": 453.13,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 341.15,
                "top": 617.7199999999999,
                "anchor": "end",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.06,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 410.16,
                "top": 776.04,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 341.15,
                "top": 861.98,
                "anchor": "end",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 39.06,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 410.16,
                "top": 941.41,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 341.15,
                "top": 1025.9599999999998,
                "anchor": "end",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 39.06,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 960.94,
                "top": 526.04,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.06,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34,
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
                "x": 1438.8,
                "top": 378.91,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.06,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "利润率 59%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0.2 个百分点",
                    "size": 27.34,
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
                "x": 1441.41,
                "top": 1057.29,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 37.76,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 37.76,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1701.82,
                "top": 1162.76,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.06,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (39%)",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (22 个百分点)",
                    "size": 27.34,
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
                "x": 1872.4,
                "top": 494.79,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.06,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.06,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.06,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2444.01,
                "top": 718.75,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 50%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +11 个百分点",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2454.43,
                "top": 932.29,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34,
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
                "x": 2454.43,
                "top": 1117.19,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 27.34,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"203.13\" y=\"1170.57\" width=\"210.94\" height=\"149.74\" rx=\"29.95\" fill=\"#000000\"/><text x=\"308.59\" y=\"1223.96\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\" font-weight=\"700\">DAU</text><text data-operating-metric=\"dau\" x=\"308.59\" y=\"1263.02\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\">363M</text><text x=\"308.59\" y=\"1294.27\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"22.14\">同比 +19%</text><rect x=\"420.57\" y=\"1170.57\" width=\"210.94\" height=\"149.74\" rx=\"29.95\" fill=\"#000000\"/><text x=\"526.04\" y=\"1223.96\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\" font-weight=\"700\">ARPU</text><text data-operating-metric=\"arpu\" x=\"526.04\" y=\"1263.02\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"28.65\">$3.11</text><text x=\"526.04\" y=\"1294.27\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"22.14\">同比 (11%)</text><text x=\"429.69\" y=\"1354.17\" text-anchor=\"middle\" font-size=\"27.34\" fill=\"#777777\">DAU = 日活跃用户</text><text x=\"429.69\" y=\"1393.23\" text-anchor=\"middle\" font-size=\"27.34\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"170.57\" y=\"1437.5\" font-size=\"39.06\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});})();
