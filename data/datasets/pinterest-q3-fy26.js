window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "pinterest-q3-fy26",
  "name": "Pinterest · Q3 FY26",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q3-fy26.png",
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
    "logoWidth": 212,
    "logoHeight": 212,
    "logoY": 225,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || "",
    "logoX": 823,
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
        "node": "#183078",
        "label": "#183078"
      },
      "hub": {
        "node": "#183078",
        "label": "#183078"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#078f43"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#901000"
      }
    },
    "linkTint": {
      "source": "#909bbb",
      "hub": "#909bbb",
      "profit": "#99cd99",
      "cost": "#e08585"
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    <g>\n      <rect x=\"34\" y=\"226\" width=\"187\" height=\"168\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"127.5\" y=\"283\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text data-operating-metric=\"mau\" x=\"127.5\" y=\"329\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"#ffffff\">661M</text><text x=\"127.5\" y=\"367\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"#ffffff\">+10% Y/Y</text>\n    </g>\n      \n    <g>\n      <path d=\"M128 417L157 461H100Z\" fill=\"#cc0000\"/>\n      <rect x=\"60\" y=\"461\" width=\"132\" height=\"707\" rx=\"11\" fill=\"#cc0000\"/>\n      <text data-operating-metric=\"mau_us_canada\" x=\"126\" y=\"578\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">107M</text><text x=\"126\" y=\"618\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">+4% Y/Y</text><text data-operating-metric=\"mau_europe\" x=\"126\" y=\"867\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">161M</text><text x=\"126\" y=\"907\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">+7% Y/Y</text><text data-operating-metric=\"mau_rest_of_world\" x=\"126\" y=\"1038\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">394M</text><text x=\"126\" y=\"1078\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">+13% Y/Y</text>\n    </g>\n      \n    <g>\n      <rect x=\"321\" y=\"1128\" width=\"209\" height=\"151\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"425.5\" y=\"1192\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARPU</text><text data-operating-metric=\"arpu\" x=\"425.5\" y=\"1226\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"500\" fill=\"#ffffff\">$1.80</text><text x=\"425.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"500\" fill=\"#ffffff\">+1% Y/Y</text>\n    </g>\n      <text x=\"250\" y=\"1316\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">MAU = Monthly Active Users</text>\n      <text x=\"278\" y=\"1356\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">ARPU = Average Revenue Per User</text>\n    </g>",
  "layout": {
    "scale": 0.3040885860306644,
    "nodes": {
      "us_canada": {
        "x": 432,
        "y": 435,
        "width": 73,
        "height": 272
      },
      "europe": {
        "x": 432,
        "y": 853,
        "width": 73,
        "height": 59
      },
      "rest_of_world": {
        "x": 432,
        "y": 1016,
        "width": 73,
        "height": 27
      },
      "revenue": {
        "x": 899,
        "y": 587,
        "width": 73,
        "height": 357
      },
      "gross_profit": {
        "x": 1366,
        "y": 513,
        "width": 73,
        "height": 278
      },
      "cost_of_revenue": {
        "x": 1366,
        "y": 995,
        "width": 73,
        "height": 80
      },
      "operating_profit": {
        "x": 1833,
        "y": 430,
        "width": 73,
        "height": 9
      },
      "operating_expenses": {
        "x": 1833,
        "y": 599,
        "width": 73,
        "height": 269
      },
      "rnd": {
        "x": 2300,
        "y": 659,
        "width": 73,
        "height": 130
      },
      "sm": {
        "x": 2300,
        "y": 892,
        "width": 73,
        "height": 102
      },
      "ga": {
        "x": 2300,
        "y": 1118,
        "width": 73,
        "height": 35
      },
      "restructuring": {
        "x": 2300,
        "y": 1296,
        "width": 73,
        "height": 1.3
      },
      "net_profit": {
        "x": 2300,
        "y": 342,
        "width": 73,
        "height": 6
      },
      "tax": {
        "x": 2300,
        "y": 554,
        "width": 73,
        "height": 4
      },
      "other": {
        "x": 2180,
        "y": 406,
        "width": 73,
        "height": 3
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 468,
            "top": 335,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 315,
            "top": 525,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "US &",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Canada",
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
            "x": 468,
            "top": 753,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "Flat Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 315,
            "top": 858,
            "anchor": "middle",
            "lineGap": 9,
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
            "x": 468,
            "top": 916,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 315,
            "top": 980.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Rest of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "the world",
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
            "x": 935,
            "top": 439,
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
                "text": "+12% Y/Y",
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
            "x": 1403,
            "top": 326,
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
                "text": "78% margin",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1403,
            "top": 1092,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1870,
            "top": 242,
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
                "text": "3% margin",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 1870,
            "top": 887,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2510,
            "top": 647,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "36% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
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
            "x": 2510,
            "top": 850,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "S&M",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "29% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
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
            "x": 2510,
            "top": 1053,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "G&A",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "10% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2510,
            "top": 1243,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Restructuring",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2500,
            "top": 290,
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
                "text": "2% margin",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(7%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2500,
            "top": 517,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2220,
            "top": 423,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [],
  "nodes": [
    {
      "id": "us_canada",
      "label": "US & Canada",
      "value": 894,
      "type": "source",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 193,
      "type": "source",
      "notes": [
        "Flat Y/Y"
      ]
    },
    {
      "id": "rest_of_world",
      "label": "Rest of the world",
      "value": 87,
      "type": "source",
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1174,
      "type": "hub",
      "notes": [
        "+12% Y/Y"
      ],
      "valueText": "$1,174M"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 912,
      "type": "profit",
      "notes": [
        "78% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 262,
      "type": "cost",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 30,
      "type": "profit",
      "notes": [
        "3% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 882,
      "type": "cost",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 428,
      "type": "cost",
      "notes": [
        "36% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 337,
      "type": "cost",
      "notes": [
        "29% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 113,
      "type": "cost",
      "notes": [
        "10% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 4,
      "type": "cost",
      "notes": [
        "0% of revenue"
      ]
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 22,
      "type": "profit",
      "notes": [
        "2% margin",
        "(7%) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 14,
      "type": "cost",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 5,
      "type": "profit",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 894,
      "sourceWidth": 272,
      "targetWidth": 272,
      "y0": 571,
      "y1": 723,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 193,
      "sourceWidth": 59,
      "targetWidth": 59,
      "y0": 882.5,
      "y1": 888.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 87,
      "sourceWidth": 27,
      "targetWidth": 26,
      "y0": 1029.5,
      "y1": 931,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 912,
      "sourceWidth": 278,
      "targetWidth": 278,
      "y0": 726,
      "y1": 652,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 262,
      "sourceWidth": 79,
      "targetWidth": 80,
      "y0": 904.5,
      "y1": 1035,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 30,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 517.5,
      "y1": 434.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 882,
      "sourceWidth": 269,
      "targetWidth": 269,
      "y0": 656.5,
      "y1": 733.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 428,
      "sourceWidth": 130,
      "targetWidth": 130,
      "y0": 664,
      "y1": 724,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 337,
      "sourceWidth": 102,
      "targetWidth": 102,
      "y0": 780,
      "y1": 943,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 113,
      "sourceWidth": 35,
      "targetWidth": 35,
      "y0": 848.5,
      "y1": 1135.5,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 4,
      "sourceWidth": 2,
      "targetWidth": 1.3,
      "y0": 867,
      "y1": 1296.65,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 16,
      "sourceWidth": 5,
      "targetWidth": 4,
      "y0": 432.5,
      "y1": 344,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 14,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 437,
      "y1": 556,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 5,
      "sourceWidth": 3,
      "targetWidth": 2,
      "y0": 407.5,
      "y1": 347,
      "sourceOrder": 0,
      "targetOrder": 1
    }
  ],
  "i18n": {
    "zh": {
      "name": "Pinterest · 2026 财年第三季度",
      "meta": {
        "title": "Pinterest 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "",
        "titleSize": 112
      },
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +14%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比持平"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +24%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 78%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 36%",
            "同比 +1 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 29%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 10%",
            "同比 (1 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 0%"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 (7%)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 468,
                "top": 335,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 315,
                "top": 525,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "加拿大",
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
                "x": 468,
                "top": 753,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比持平",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 315,
                "top": 858,
                "anchor": "middle",
                "lineGap": 9,
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
                "x": 468,
                "top": 916,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 315,
                "top": 980.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "世界其他",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "地区",
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
                "x": 935,
                "top": 439,
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
                    "text": "同比 +12%",
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
                "x": 1403,
                "top": 326,
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
                    "text": "利润率 78%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1403,
                "top": 1092,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1870,
                "top": 242,
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
                    "text": "利润率 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "x": 1870,
                "top": 887,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2510,
                "top": 647,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 36%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
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
                "x": 2510,
                "top": 850,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 29%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
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
                "x": 2510,
                "top": 1053,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2510,
                "top": 1243,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "重组",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2500,
                "top": 290,
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
                    "text": "利润率 2%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2500,
                "top": 517,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2220,
                "top": 423,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    <g>\n      <rect x=\"34\" y=\"226\" width=\"187\" height=\"168\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"127.5\" y=\"283\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text data-operating-metric=\"mau\" x=\"127.5\" y=\"329\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"#ffffff\">661M</text><text x=\"127.5\" y=\"367\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"#ffffff\">同比 +10%</text>\n    </g>\n      \n    <g>\n      <path d=\"M128 417L157 461H100Z\" fill=\"#cc0000\"/>\n      <rect x=\"60\" y=\"461\" width=\"132\" height=\"707\" rx=\"11\" fill=\"#cc0000\"/>\n      <text data-operating-metric=\"mau_us_canada\" x=\"126\" y=\"578\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">107M</text><text x=\"126\" y=\"618\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">同比 +4%</text><text data-operating-metric=\"mau_europe\" x=\"126\" y=\"867\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">161M</text><text x=\"126\" y=\"907\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">同比 +7%</text><text data-operating-metric=\"mau_rest_of_world\" x=\"126\" y=\"1038\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">394M</text><text x=\"126\" y=\"1078\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">同比 +13%</text>\n    </g>\n      \n    <g>\n      <rect x=\"321\" y=\"1128\" width=\"209\" height=\"151\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"425.5\" y=\"1192\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARPU</text><text data-operating-metric=\"arpu\" x=\"425.5\" y=\"1226\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"500\" fill=\"#ffffff\">$1.80</text><text x=\"425.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"500\" fill=\"#ffffff\">同比 +1%</text>\n    </g>\n      <text x=\"250\" y=\"1316\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">MAU = 月活跃用户</text>\n      <text x=\"278\" y=\"1356\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">ARPU = 每用户平均收入</text>\n    </g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "661000000",
      "unit": "count",
      "currency": null,
      "literal": "661M",
      "comparison": "eq"
    },
    {
      "id": "mau_us_canada",
      "value": "107000000",
      "unit": "count",
      "currency": null,
      "literal": "107M",
      "comparison": "eq"
    },
    {
      "id": "mau_europe",
      "value": "161000000",
      "unit": "count",
      "currency": null,
      "literal": "161M",
      "comparison": "eq"
    },
    {
      "id": "mau_rest_of_world",
      "value": "394000000",
      "unit": "count",
      "currency": null,
      "literal": "394M",
      "comparison": "eq"
    },
    {
      "id": "arpu",
      "value": "0.00180",
      "unit": "K",
      "currency": "USD",
      "literal": "$1.80",
      "comparison": "eq"
    }
  ]
});
