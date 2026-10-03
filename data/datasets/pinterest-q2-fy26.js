window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "pinterest-q2-fy26",
  "name": "Pinterest · Q2 FY26",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q2-fy26.png",
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
    "logoWidth": 220,
    "logoHeight": 220,
    "logoY": 220,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || "",
    "logoX": 930,
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    <g>\n      <rect x=\"34\" y=\"226\" width=\"187\" height=\"168\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"127.5\" y=\"283\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text data-operating-metric=\"mau\" x=\"127.5\" y=\"329\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"#ffffff\">640M</text><text x=\"127.5\" y=\"367\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"#ffffff\">+11% Y/Y</text>\n    </g>\n      \n    <g>\n      <path d=\"M128 417L157 461H100Z\" fill=\"#cc0000\"/>\n      <rect x=\"60\" y=\"461\" width=\"132\" height=\"707\" rx=\"11\" fill=\"#cc0000\"/>\n      <text data-operating-metric=\"mau_us_canada\" x=\"126\" y=\"578\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">106M</text><text x=\"126\" y=\"618\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">+11% Y/Y</text><text data-operating-metric=\"mau_europe\" x=\"126\" y=\"867\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">157M</text><text x=\"126\" y=\"907\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">+8% Y/Y</text><text data-operating-metric=\"mau_rest_of_world\" x=\"126\" y=\"1038\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">377M</text><text x=\"126\" y=\"1078\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">+15% Y/Y</text>\n    </g>\n      \n    <g>\n      <rect x=\"321\" y=\"1128\" width=\"209\" height=\"151\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"425.5\" y=\"1192\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARPU</text><text data-operating-metric=\"arpu\" x=\"425.5\" y=\"1226\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"500\" fill=\"#ffffff\">$1.86</text><text x=\"425.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"500\" fill=\"#ffffff\">+7% Y/Y</text>\n    </g>\n      <text x=\"250\" y=\"1316\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">MAU = Monthly Active Users</text>\n      <text x=\"278\" y=\"1356\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">ARPU = Average Revenue Per User</text>\n    </g>",
  "layout": {
    "scale": 0.29067796610169494,
    "nodes": {
      "us_canada": {
        "x": 434,
        "y": 428,
        "width": 73,
        "height": 256
      },
      "europe": {
        "x": 434,
        "y": 829,
        "width": 73,
        "height": 62
      },
      "rest_of_world": {
        "x": 434,
        "y": 1017,
        "width": 73,
        "height": 25
      },
      "revenue": {
        "x": 901,
        "y": 590,
        "width": 73,
        "height": 343
      },
      "gross_profit": {
        "x": 1368,
        "y": 503,
        "width": 73,
        "height": 268
      },
      "cost_of_revenue": {
        "x": 1368,
        "y": 1001,
        "width": 73,
        "height": 74
      },
      "operating_loss": {
        "x": 1696,
        "y": 968,
        "width": 73,
        "height": 16
      },
      "operating_expenses": {
        "x": 1835,
        "y": 604,
        "width": 73,
        "height": 283
      },
      "rnd": {
        "x": 2302,
        "y": 383,
        "width": 73,
        "height": 131
      },
      "sm": {
        "x": 2302,
        "y": 729,
        "width": 73,
        "height": 109
      },
      "ga": {
        "x": 2302,
        "y": 1042,
        "width": 73,
        "height": 40
      },
      "restructuring": {
        "x": 2302,
        "y": 1292,
        "width": 73,
        "height": 3
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 468,
            "top": 332,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 392,
            "top": 506.5,
            "anchor": "end",
            "lineGap": 10,
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
            "top": 733,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
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
          },
          {
            "x": 392,
            "top": 837,
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
            "x": 468,
            "top": 920,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+38% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 392,
            "top": 980,
            "anchor": "end",
            "lineGap": 10,
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
            "top": 440,
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
                "text": "+18% Y/Y",
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
            "top": 314,
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
                "text": "(1pp) Y/Y",
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
            "top": 1093,
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
            "x": 1733,
            "top": 1002,
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
                "text": "(5%) of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(4pp) Y/Y",
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
            "top": 438,
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
            "x": 2510,
            "top": 369,
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
                "text": "38% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 2510,
            "top": 705,
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
                "text": "32% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 2510,
            "top": 984,
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
                "text": "12% of revenue",
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
      "restructuring": {
        "blocks": [
          {
            "x": 2510,
            "top": 1234,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29,
                "weight": 400
              },
              {
                "text": "1% of revenue",
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
      "id": "us_canada",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "US &",
        "Canada"
      ],
      "value": 880,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#183078",
      "labelColor": "#183078",
      "linkTint": "#909bbb"
    },
    {
      "id": "europe",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Europe",
      "value": 213,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#183078",
      "labelColor": "#183078",
      "linkTint": "#909bbb"
    },
    {
      "id": "rest_of_world",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Rest of",
        "the world"
      ],
      "value": 87,
      "notes": [
        "+38% Y/Y"
      ],
      "color": "#183078",
      "labelColor": "#183078",
      "linkTint": "#909bbb"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1180,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#183078",
      "labelColor": "#183078",
      "linkTint": "#909bbb",
      "valueText": "$1,180M"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 923,
      "notes": [
        "78% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#078f43",
      "linkTint": "#99cd99"
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
      "value": 257,
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
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
      "value": -55,
      "notes": [
        "(5%) of revenue",
        "(4pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
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
      "value": 978,
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 451,
      "notes": [
        "38% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 374,
      "notes": [
        "32% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 138,
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Restructuring",
      "value": 14,
      "notes": [
        "1% of revenue"
      ],
      "color": "#cc0000",
      "labelColor": "#901000",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 880,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 256,
      "targetWidth": 256,
      "width": 256,
      "y0": 556,
      "y1": 718
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 213,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 62,
      "targetWidth": 62,
      "width": 62,
      "y0": 860,
      "y1": 877
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 87,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 25,
      "targetWidth": 25,
      "width": 25,
      "y0": 1029.5,
      "y1": 920.5
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 923,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 268,
      "targetWidth": 268,
      "width": 268,
      "y0": 724,
      "y1": 637
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 257,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 75,
      "targetWidth": 74,
      "width": 75,
      "y0": 895.5,
      "y1": 1038
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 923,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 268,
      "targetWidth": 267,
      "width": 268,
      "y0": 637,
      "y1": 737.5
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 55,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 16,
      "targetWidth": 16,
      "width": 16,
      "y0": 976,
      "y1": 879
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 451,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 131,
      "targetWidth": 131,
      "width": 131,
      "y0": 669.5,
      "y1": 448.5
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 374,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 109,
      "targetWidth": 109,
      "width": 109,
      "y0": 789.5,
      "y1": 783.5
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 138,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 40,
      "targetWidth": 40,
      "width": 40,
      "y0": 864,
      "y1": 1062
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 14,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 3,
      "targetWidth": 3,
      "width": 3,
      "y0": 885.5,
      "y1": 1293.5
    }
  ],
  "i18n": {
    "zh": {
      "name": "Pinterest · 2026 财年第二季度",
      "meta": {
        "title": "Pinterest 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 112
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    <g>\n      <rect x=\"34\" y=\"226\" width=\"187\" height=\"168\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"127.5\" y=\"283\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text data-operating-metric=\"mau\" x=\"127.5\" y=\"329\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"#ffffff\">640M</text><text x=\"127.5\" y=\"367\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"500\" fill=\"#ffffff\">同比 +11%</text>\n    </g>\n      \n    <g>\n      <path d=\"M128 417L157 461H100Z\" fill=\"#cc0000\"/>\n      <rect x=\"60\" y=\"461\" width=\"132\" height=\"707\" rx=\"11\" fill=\"#cc0000\"/>\n      <text data-operating-metric=\"mau_us_canada\" x=\"126\" y=\"578\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">106M</text><text x=\"126\" y=\"618\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">同比 +11%</text><text data-operating-metric=\"mau_europe\" x=\"126\" y=\"867\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">157M</text><text x=\"126\" y=\"907\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">同比 +8%</text><text data-operating-metric=\"mau_rest_of_world\" x=\"126\" y=\"1038\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"800\" fill=\"#ffffff\">377M</text><text x=\"126\" y=\"1078\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"500\" fill=\"#ffffff\">同比 +15%</text>\n    </g>\n      \n    <g>\n      <rect x=\"321\" y=\"1128\" width=\"209\" height=\"151\" rx=\"31\" fill=\"#cc0000\"/>\n      <text x=\"425.5\" y=\"1192\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARPU</text><text data-operating-metric=\"arpu\" x=\"425.5\" y=\"1226\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"500\" fill=\"#ffffff\">$1.86</text><text x=\"425.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"500\" fill=\"#ffffff\">同比 +7%</text>\n    </g>\n      <text x=\"250\" y=\"1316\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">MAU = 月活跃用户</text>\n      <text x=\"278\" y=\"1356\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#6f7073\">ARPU = 每用户平均收入</text>\n    </g>",
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +18%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +12%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +38%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 78%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "占收入 (5%)",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 38%",
            "同比 +2 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 32%",
            "同比 0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 1%"
          ]
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 468,
                "top": 332,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 392,
                "top": 506.5,
                "anchor": "end",
                "lineGap": 10,
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
                "top": 733,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
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
              },
              {
                "x": 392,
                "top": 837,
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
                "x": 468,
                "top": 920,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +38%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 392,
                "top": 980,
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
                "x": 935,
                "top": 440,
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
                    "text": "同比 +18%",
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
                "top": 314,
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
                    "text": "同比 (1 个百分点)",
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
                "top": 1093,
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
                "x": 1733,
                "top": 1002,
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
                    "text": "占收入 (5%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "top": 438,
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
                "x": 2510,
                "top": 369,
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
                    "text": "占收入 38%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 2510,
                "top": 705,
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
                    "text": "占收入 32%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 0 个百分点",
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
                "x": 2510,
                "top": 984,
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
                    "text": "占收入 12%",
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
          "restructuring": {
            "blocks": [
              {
                "x": 2510,
                "top": 1234,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
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
      "id": "mau",
      "value": "640000000",
      "unit": "count",
      "currency": null,
      "literal": "640M",
      "comparison": "eq"
    },
    {
      "id": "mau_us_canada",
      "value": "106000000",
      "unit": "count",
      "currency": null,
      "literal": "106M",
      "comparison": "eq"
    },
    {
      "id": "mau_europe",
      "value": "157000000",
      "unit": "count",
      "currency": null,
      "literal": "157M",
      "comparison": "eq"
    },
    {
      "id": "mau_rest_of_world",
      "value": "377000000",
      "unit": "count",
      "currency": null,
      "literal": "377M",
      "comparison": "eq"
    },
    {
      "id": "arpu",
      "value": "0.00186",
      "unit": "K",
      "currency": "USD",
      "literal": "$1.86",
      "comparison": "eq"
    }
  ]
});
