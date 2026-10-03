(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "snap-q2-fy26",
  "name": "Snap · Q2 FY26",
  "company": "Snap",
  "meta": {
    "company": "Snap",
    "title": "Snap Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/snap-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 238,
    "logoHeight": 238,
    "logoY": 241,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS||{}).snapLogo||"",
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#154f79",
    "subtitleColor": "#6f7073",
    "noteColor": "#6f7073",
    "palette": {
      "source": {
        "node": "#fff900",
        "label": "#000000"
      },
      "hub": {
        "node": "#fff900",
        "label": "#000000"
      },
      "profit": {
        "node": "#279f26",
        "label": "#078f43"
      },
      "cost": {
        "node": "#d90000",
        "label": "#921000"
      }
    },
    "linkTint": {
      "source": "#f6f57f",
      "hub": "#f6f57f",
      "profit": "#98ca96",
      "cost": "#e18484"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"34\" y=\"226\" width=\"187\" height=\"168\" rx=\"31\" fill=\"black\"/><text x=\"128\" y=\"283\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" >DAU</text><text x=\"128\" y=\"329\" font-size=\"32\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau\">493M</text><text x=\"128\" y=\"367\" font-size=\"24\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >+5% Y/Y</text><path d=\"M128 417L157 461H100Z\" fill=\"black\"/><rect x=\"60\" y=\"461\" width=\"132\" height=\"695\" rx=\"11\" fill=\"black\"/><text x=\"126\" y=\"576\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau_north_america\">92M</text><text x=\"126\" y=\"615\" font-size=\"25\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >(7%) Y/Y</text><text x=\"126\" y=\"824\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau_europe\">98M</text><text x=\"126\" y=\"865\" font-size=\"25\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >(2%) Y/Y</text><text x=\"126\" y=\"1013\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau_rest_of_world\">303M</text><text x=\"126\" y=\"1055\" font-size=\"25\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >+12% Y/Y</text><rect x=\"332\" y=\"1130\" width=\"209\" height=\"151\" rx=\"29\" fill=\"black\"/><text x=\"437\" y=\"1184\" font-size=\"29\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" >ARPU</text><text x=\"437\" y=\"1222\" font-size=\"27\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"arpu\">$3.25</text><text x=\"437\" y=\"1255\" font-size=\"21\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >+13% Y/Y</text><text x=\"250\" y=\"1316\" font-size=\"28\" fill=\"#6f7073\">DAU = Daily Active Users</text><text x=\"208\" y=\"1356\" font-size=\"28\" fill=\"#6f7073\">ARPU = Average Revenue Per User</text></g>",
  "layout": {
    "scale": 0.19637273295809882,
    "nodes": {
      "north_america": {
        "x": 402,
        "y": 455,
        "width": 73,
        "height": 185
      },
      "europe": {
        "x": 402,
        "y": 804,
        "width": 73,
        "height": 69
      },
      "rest_of_world": {
        "x": 402,
        "y": 1037,
        "width": 73,
        "height": 60
      },
      "revenue": {
        "x": 869,
        "y": 651,
        "width": 73,
        "height": 314
      },
      "gross_profit": {
        "x": 1336,
        "y": 508,
        "width": 73,
        "height": 183
      },
      "cost_of_revenue": {
        "x": 1336,
        "y": 909,
        "width": 73,
        "height": 131
      },
      "operating_loss": {
        "x": 1572,
        "y": 882,
        "width": 73,
        "height": 34
      },
      "operating_expenses": {
        "x": 1803,
        "y": 645,
        "width": 73,
        "height": 217
      },
      "rnd": {
        "x": 2271,
        "y": 507,
        "width": 73,
        "height": 106
      },
      "sm": {
        "x": 2271,
        "y": 844,
        "width": 73,
        "height": 59
      },
      "ga": {
        "x": 2271,
        "y": 1129,
        "width": 73,
        "height": 51
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 439,
            "top": 357,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 378,
            "top": 498,
            "anchor": "end",
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
      "europe": {
        "blocks": [
          {
            "x": 439,
            "top": 705,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+33% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 368,
            "top": 818,
            "anchor": "end",
            "lines": [
              {
                "text": "Europe",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 439,
            "top": 940,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 378,
            "top": 1017.5,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Rest",
                "size": 40,
                "weight": 800
              },
              {
                "text": "of world",
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
            "x": 905,
            "top": 500,
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
                "text": "+19% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1373,
            "top": 322,
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
                "text": "58% margin",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+7pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1373,
            "top": 1053,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 33,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1610,
            "top": 929,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "(11%) margin",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+30pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1835,
            "top": 477,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36,
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
      "rnd": {
        "blocks": [
          {
            "x": 2480,
            "top": 504,
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
                "size": 29,
                "weight": 400
              },
              {
                "text": "34% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2480,
            "top": 800,
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
                "size": 29,
                "weight": 400
              },
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2480,
            "top": 1096,
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
                "size": 29,
                "weight": 400
              },
              {
                "text": "16% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "tax",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "North",
        "America"
      ],
      "value": 943,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#fff900",
      "labelColor": "#000000",
      "linkTint": "#f6f57f"
    },
    {
      "id": "europe",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Europe",
      "value": 354,
      "notes": [
        "+33% Y/Y"
      ],
      "color": "#fff900",
      "labelColor": "#000000",
      "linkTint": "#f6f57f"
    },
    {
      "id": "rest_of_world",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Rest of world",
      "value": 302,
      "notes": [
        "+17% Y/Y"
      ],
      "color": "#fff900",
      "labelColor": "#000000",
      "linkTint": "#f6f57f"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1599,
      "notes": [
        "+19% Y/Y"
      ],
      "color": "#fff900",
      "labelColor": "#000000",
      "linkTint": "#f6f57f"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 931,
      "notes": [
        "58% margin",
        "+7pp Y/Y"
      ],
      "color": "#279f26",
      "labelColor": "#078f43",
      "linkTint": "#98ca96"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 668,
      "color": "#d90000",
      "labelColor": "#921000",
      "linkTint": "#e18484",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -171,
      "notes": [
        "(11%) margin",
        "+30pp Y/Y"
      ],
      "color": "#d90000",
      "labelColor": "#921000",
      "linkTint": "#e18484"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1102,
      "color": "#d90000",
      "labelColor": "#921000",
      "linkTint": "#e18484",
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 542,
      "notes": [
        "34% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#d90000",
      "labelColor": "#921000",
      "linkTint": "#e18484"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 298,
      "notes": [
        "19% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#d90000",
      "labelColor": "#921000",
      "linkTint": "#e18484"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 261,
      "notes": [
        "16% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#d90000",
      "labelColor": "#921000",
      "linkTint": "#e18484"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 943,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 185,
      "targetWidth": 185.17948717948718
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 354,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 69,
      "targetWidth": 69.51594746716698
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 302,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 60,
      "targetWidth": 59.30456535334584
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 931,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98ca96",
      "sourceWidth": 182.82301438399,
      "targetWidth": 183
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 668,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 131.17698561601,
      "targetWidth": 131
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 931,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 183,
      "targetWidth": 183.32758620689654
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 171,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 34,
      "targetWidth": 33.672413793103445
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 542,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 106.82470481380562,
      "targetWidth": 106
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 298,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 58.7338782924614,
      "targetWidth": 59
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 261,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 51.44141689373297,
      "targetWidth": 51
    }
  ],
  "i18n": {
    "zh": {
      "name": "Snap · 2026 财年第二季度",
      "meta": {
        "title": "Snap 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 112
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"34\" y=\"226\" width=\"187\" height=\"168\" rx=\"31\" fill=\"black\"/><text x=\"128\" y=\"283\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" >DAU</text><text x=\"128\" y=\"329\" font-size=\"32\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau\">493M</text><text x=\"128\" y=\"367\" font-size=\"24\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比 +5%</text><path d=\"M128 417L157 461H100Z\" fill=\"black\"/><rect x=\"60\" y=\"461\" width=\"132\" height=\"695\" rx=\"11\" fill=\"black\"/><text x=\"126\" y=\"576\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau_north_america\">92M</text><text x=\"126\" y=\"615\" font-size=\"25\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比 (7%)</text><text x=\"126\" y=\"824\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau_europe\">98M</text><text x=\"126\" y=\"865\" font-size=\"25\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比 (2%)</text><text x=\"126\" y=\"1013\" font-size=\"35\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dau_rest_of_world\">303M</text><text x=\"126\" y=\"1055\" font-size=\"25\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比 +12%</text><rect x=\"332\" y=\"1130\" width=\"209\" height=\"151\" rx=\"29\" fill=\"black\"/><text x=\"437\" y=\"1184\" font-size=\"29\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" >ARPU</text><text x=\"437\" y=\"1222\" font-size=\"27\" font-weight=\"800\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"arpu\">$3.25</text><text x=\"437\" y=\"1255\" font-size=\"21\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比 +13%</text><text x=\"250\" y=\"1316\" font-size=\"28\" fill=\"#6f7073\">DAU = 日活跃用户</text><text x=\"208\" y=\"1356\" font-size=\"28\" fill=\"#6f7073\">ARPU = 每用户平均收入</text></g>",
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +15%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +33%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +17%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 58%",
            "同比 +7 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (11%)",
            "同比 +30 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 34%",
            "同比 +1 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 19%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 16%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 439,
                "top": 357,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 344,
                "top": 523,
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
          "europe": {
            "blocks": [
              {
                "x": 439,
                "top": 705,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +33%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 368,
                "top": 818,
                "anchor": "end",
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 439,
                "top": 940,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 378,
                "top": 1017.5,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "世界",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "其他地区",
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
                "x": 905,
                "top": 500,
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
                    "text": "同比 +19%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1373,
                "top": 322,
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
                    "text": "利润率 58%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1373,
                "top": 1053,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1610,
                "top": 929,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (11%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +30 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1835,
                "top": 477,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36,
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
          "rnd": {
            "blocks": [
              {
                "x": 2480,
                "top": 504,
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
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2480,
                "top": 800,
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
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2480,
                "top": 1096,
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
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
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
      "id": "dau",
      "value": "493000000",
      "unit": "count",
      "currency": null,
      "literal": "493M",
      "comparison": "eq"
    },
    {
      "id": "dau_north_america",
      "value": "92000000",
      "unit": "count",
      "currency": null,
      "literal": "92M",
      "comparison": "eq"
    },
    {
      "id": "dau_europe",
      "value": "98000000",
      "unit": "count",
      "currency": null,
      "literal": "98M",
      "comparison": "eq"
    },
    {
      "id": "dau_rest_of_world",
      "value": "303000000",
      "unit": "count",
      "currency": null,
      "literal": "303M",
      "comparison": "eq"
    },
    {
      "id": "arpu",
      "value": "0.00325",
      "unit": "K",
      "currency": "USD",
      "literal": "$3.25",
      "comparison": "eq"
    }
  ]
});})();
