window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "snap-q4-fy22",
  "name": "Snap · Q4 FY22",
  "company": "Snap",
  "meta": {
    "company": "Snap",
    "title": "Snap Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/snap-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2030,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 235,
    "logoHeight": 235,
    "logoY": 248,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).snapLogo || "",
    "hidePeriodStamp": true
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
    "linkOpacity": 1,
    "labelYOffset": 0
  },
  "layout": {
    "scale": 0.2173749248798077,
    "nodes": {
      "north_america": {
        "x": 365.93,
        "y": 498.76,
        "width": 71.62,
        "height": 191.43
      },
      "europe": {
        "x": 365.93,
        "y": 876.41,
        "width": 71.62,
        "height": 48.18
      },
      "rest_of_world": {
        "x": 365.93,
        "y": 1110.82,
        "width": 71.62,
        "height": 44.28
      },
      "revenue": {
        "x": 833.44,
        "y": 643.31,
        "width": 71.62,
        "height": 282.59
      },
      "gross_profit": {
        "x": 1300.94,
        "y": 554.76,
        "width": 71.62,
        "height": 178.41
      },
      "cost_of_revenue": {
        "x": 1304.85,
        "y": 889.43,
        "width": 72.93,
        "height": 104.18
      },
      "operating_loss": {
        "x": 1578.32,
        "y": 935.01,
        "width": 71.62,
        "height": 62.51
      },
      "operating_expenses": {
        "x": 1777.57,
        "y": 631.59,
        "width": 71.62,
        "height": 239.61
      },
      "rnd": {
        "x": 2234.65,
        "y": 510.48,
        "width": 71.62,
        "height": 126.32
      },
      "sm": {
        "x": 2234.65,
        "y": 862.09,
        "width": 71.62,
        "height": 63.81
      },
      "ga": {
        "x": 2234.65,
        "y": 1139.47,
        "width": 71.62,
        "height": 49.49
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 402.39,
            "top": 403.7,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 329.47,
            "top": 570.9300000000001,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "North America",
                "size": 39.07,
                "weight": 700
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 402.39,
            "top": 780.05,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 329.47,
            "top": 877.71,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Europe",
                "size": 39.07,
                "weight": 700
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 402.39,
            "top": 1018.36,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 329.47,
            "top": 1108.21,
            "anchor": "end",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Rest of world",
                "size": 39.07,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 869.9,
            "top": 493.55,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.07,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+0.1% Y/Y",
                "size": 27.35,
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
            "x": 1337.41,
            "top": 363.33,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.07,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "63% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.35,
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
            "x": 1338.71,
            "top": 1009.24,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.07,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.07,
                "weight": 700
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
            "x": 1614.79,
            "top": 1014.45,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.07,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "(22%) margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(20pp) Y/Y",
                "size": 27.35,
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
            "x": 1814.03,
            "top": 468.81,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating",
                "size": 39.07,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.07,
                "weight": 700
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
      "rnd": {
        "blocks": [
          {
            "x": 2452.13,
            "top": 498.76,
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
                "text": "45% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+12pp Y/Y",
                "size": 27.35,
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
            "x": 2462.55,
            "top": 863.39,
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
                "text": "23% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.35,
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
            "x": 2462.55,
            "top": 1127.75,
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
                "text": "15% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.35,
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
      "id": "north_america",
      "label": "North America",
      "value": 880,
      "valueText": "$880M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#fffc00",
      "labelColor": "#000000",
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 219,
      "valueText": "$219M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#fffc00",
      "labelColor": "#000000",
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "rest_of_world",
      "label": "Rest of world",
      "value": 201,
      "valueText": "$201M",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#fffc00",
      "labelColor": "#000000",
      "notes": [
        "+28% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1300,
      "valueText": "$1,300M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#fffc00",
      "labelColor": "#000000",
      "notes": [
        "+0.1% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 818,
      "valueText": "$818M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "63% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 481,
      "valueText": "($481M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 288,
      "valueText": "($288M)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "(22%) margin",
        "(20pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1106,
      "valueText": "($1,106M)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 585,
      "valueText": "($585M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "45% of revenue",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 295,
      "valueText": "($295M)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "23% of revenue",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 226,
      "valueText": "($226M)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "15% of revenue",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 880,
      "width": 191.29,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f7f685",
      "sourceWidth": 191.43,
      "targetWidth": 191.2916923076923
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 219,
      "width": 47.61,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7f685",
      "sourceWidth": 48.18,
      "targetWidth": 47.60554615384615
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 201,
      "width": 43.69,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f7f685",
      "sourceWidth": 44.28,
      "targetWidth": 43.69276153846154
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 818,
      "width": 177.81,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 177.9512086220169,
      "targetWidth": 178.41
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 481,
      "width": 104.56,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 104.63879137798305,
      "targetWidth": 104.18
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 818,
      "width": 177.81,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 178.41,
      "targetWidth": 177.2160759493671
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 288,
      "width": 62.6,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585",
      "sourceWidth": 62.510000000000005,
      "targetWidth": 62.39392405063292
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 585,
      "width": 127.16,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 126.7376582278481,
      "targetWidth": 126.32
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 295,
      "width": 64.13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 63.91044303797468,
      "targetWidth": 63.81
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 226,
      "width": 49.13,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 48.96189873417722,
      "targetWidth": 49.49
    }
  ],
  "operatingMetrics": [
    {
      "id": "dau",
      "label": "DAU",
      "value": "375000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "375M",
      "basis": "unspecified",
      "notes": [
        "+17% Y/Y"
      ],
      "quote": "DAU\n375M\n+17% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          203,
          1169,
          211,
          151
        ]
      }
    },
    {
      "id": "arpu",
      "label": "ARPU",
      "value": "0.00347",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.47",
      "basis": "unspecified",
      "notes": [
        "(15%) Y/Y"
      ],
      "quote": "ARPU\n$3.47\n(15%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          421,
          1169,
          211,
          151
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"203.150390625\" y=\"1170.71923828125\" width=\"210.9638671875\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#000000\"/><text x=\"308.63232421875\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">DAU</text><text x=\"308.63232421875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"dau\">375M</text><text x=\"308.63232421875\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ffffff\">+17% Y/Y</text><rect x=\"420.62548828125\" y=\"1170.71923828125\" width=\"210.9638671875\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#000000\"/><text x=\"526.107421875\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">ARPU</text><text x=\"526.107421875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"arpu\">$3.47</text><text x=\"526.107421875\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ffffff\">(15%) Y/Y</text><text x=\"421.927734375\" y=\"1353.03369140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">DAU = Daily Average Users</text><text x=\"428.43896484375\" y=\"1393.4033203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"429.7412109375\" y=\"1437.6796875\" text-anchor=\"middle\" font-size=\"39.0673828125\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Snap · 2022 财年第四季度",
      "meta": {
        "title": "Snap 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "titleTextLength": 1900
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 (6%)"
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
            "同比 +28%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +0.1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 63%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (22%)",
            "同比 (20 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 45%",
            "同比 +12 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 23%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 15%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 402.39,
                "top": 403.7,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 329.47,
                "top": 570.9300000000001,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.07,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 402.39,
                "top": 780.05,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 329.47,
                "top": 877.71,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 39.07,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 402.39,
                "top": 1018.36,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 329.47,
                "top": 1108.21,
                "anchor": "end",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 39.07,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 869.9,
                "top": 493.55,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.07,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0.1%",
                    "size": 27.35,
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
                "x": 1337.41,
                "top": 363.33,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.07,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 63%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.35,
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
                "x": 1338.71,
                "top": 1009.24,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.07,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.07,
                    "weight": 700
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
                "x": 1614.79,
                "top": 1014.45,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.07,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (22%)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (20 个百分点)",
                    "size": 27.35,
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
                "x": 1814.03,
                "top": 468.81,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.07,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.07,
                    "weight": 700
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
          "rnd": {
            "blocks": [
              {
                "x": 2452.13,
                "top": 498.76,
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
                    "text": "占收入 45%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 27.35,
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
                "x": 2462.55,
                "top": 863.39,
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
                    "text": "占收入 23%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.35,
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
                "x": 2462.55,
                "top": 1127.75,
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
                    "text": "占收入 15%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"203.150390625\" y=\"1170.71923828125\" width=\"210.9638671875\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#000000\"/><text x=\"308.63232421875\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">DAU</text><text x=\"308.63232421875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"dau\">375M</text><text x=\"308.63232421875\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ffffff\">同比 +17%</text><rect x=\"420.62548828125\" y=\"1170.71923828125\" width=\"210.9638671875\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#000000\"/><text x=\"526.107421875\" y=\"1222.80908203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">ARPU</text><text x=\"526.107421875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"arpu\">$3.47</text><text x=\"526.107421875\" y=\"1294.4326171875\" text-anchor=\"middle\" font-size=\"20.8359375\" fill=\"#ffffff\">同比 (15%)</text><text x=\"421.927734375\" y=\"1353.03369140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">DAU = 日均活跃用户</text><text x=\"428.43896484375\" y=\"1393.4033203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"429.7412109375\" y=\"1437.6796875\" text-anchor=\"middle\" font-size=\"39.0673828125\" fill=\"#000000\">来源：季度财报</text></g>"
    }
  }
});
