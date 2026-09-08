window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hims-hers-q2-fy26",
  "name": "Hims & Hers · Q2 FY26",
  "company": "Hims & Hers",
  "meta": {
    "company": "Hims & Hers",
    "title": "Hims & Hers Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Q2 FY26; source does not specify quarter-end date",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hims-hers-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 122,
    "titleWeight": 800,
    "titleTextLength": 2500,
    "hidePeriodStamp": true,
    "logoWidth": 700,
    "logoHeight": 145,
    "logoY": 270,
    "logoViewBox": "0 0 700 145",
    "logoSvg": "\n    <g transform=\"translate(-24 0)\">\n      <text x=\"350\" y=\"119\" text-anchor=\"middle\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"139\" font-weight=\"700\" letter-spacing=\"-6\" textLength=\"665\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#121212\">hims &amp; hers</text>\n    </g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#ca9a5d",
        "label": "#ca9a5d"
      },
      "hub": {
        "node": "#ca9a5d",
        "label": "#ca9a5d"
      },
      "profit": {
        "node": "#26a229",
        "label": "#00964a"
      },
      "cost": {
        "node": "#de0000",
        "label": "#951400"
      }
    },
    "linkTint": {
      "source": "#decbb2",
      "hub": "#decbb2",
      "profit": "#9bcd9b",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 9
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans, Arial, sans-serif\">\n      <g data-typography-role=\"brand\">\n        <rect x=\"44\" y=\"710\" width=\"135\" height=\"136\" rx=\"28\" fill=\"#ffffff\"/>\n        <text x=\"111.5\" y=\"790\" text-anchor=\"middle\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"42\" font-weight=\"700\" letter-spacing=\"-3\" fill=\"#c67552\">hims</text>\n      </g>\n      <g data-typography-role=\"brand\">\n        <rect x=\"191\" y=\"710\" width=\"135\" height=\"136\" rx=\"28\" fill=\"#7cc7b2\"/>\n        <text x=\"258.5\" y=\"790\" text-anchor=\"middle\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"42\" font-weight=\"700\" letter-spacing=\"-3\" fill=\"#ffffff\">hers</text>\n      </g>\n      <g>\n        <rect x=\"72\" y=\"1201\" width=\"240\" height=\"148\" rx=\"27\" fill=\"#ce9754\"/>\n        <text x=\"192\" y=\"1252\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">Subscribers</text>\n        <text x=\"192\" y=\"1291\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">2.9M</text>\n        <text x=\"192\" y=\"1325\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">+19% Y/Y</text>\n      </g>\n      <g>\n        <rect x=\"325\" y=\"1201\" width=\"379\" height=\"148\" rx=\"27\" fill=\"#ce9754\"/>\n        <text x=\"514.5\" y=\"1252\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Monthly Rev. per Sub</text>\n        <text x=\"514.5\" y=\"1291\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$92</text>\n        <text x=\"514.5\" y=\"1325\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">+21% Y/Y</text>\n      </g>\n    </g>",
  "layout": {
    "nodes": {
      "united_states": {
        "x": 353,
        "y": 548,
        "width": 73,
        "height": 319
      },
      "rest_of_world": {
        "x": 353,
        "y": 1049,
        "width": 73,
        "height": 67
      },
      "revenue": {
        "x": 820,
        "y": 655,
        "width": 73,
        "height": 386
      },
      "gross_profit": {
        "x": 1287,
        "y": 548,
        "width": 73,
        "height": 247
      },
      "cost_of_revenue": {
        "x": 1287,
        "y": 979,
        "width": 73,
        "height": 140
      },
      "operating_loss": {
        "x": 1575,
        "y": 1001,
        "width": 73,
        "height": 50
      },
      "operating_expenses": {
        "x": 1754,
        "y": 662,
        "width": 73,
        "height": 296
      },
      "marketing": {
        "x": 2222,
        "y": 441,
        "width": 73,
        "height": 134
      },
      "general_admin": {
        "x": 2222,
        "y": 715,
        "width": 73,
        "height": 85
      },
      "operations_support": {
        "x": 2222,
        "y": 957,
        "width": 73,
        "height": 50
      },
      "tech_development": {
        "x": 2222,
        "y": 1170,
        "width": 73,
        "height": 28
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 389,
            "top": 458,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 120,
            "top": 582,
            "lines": [
              {
                "text": "United",
                "size": 40,
                "weight": 800
              },
              {
                "text": "States",
                "size": 40,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 9,
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 389,
            "top": 961,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+1,641% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 120,
            "top": 1030,
            "lines": [
              {
                "text": "Rest of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "World",
                "size": 40,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 9
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 852,
            "top": 513,
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
                "text": "+38% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1323,
            "top": 369,
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
                "text": "64% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1323,
            "top": 1143,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1610,
            "top": 1074,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(13%) margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(18pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1788,
            "top": 504,
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
                "size": 40,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2473,
            "top": 441,
            "lines": [
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "35% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2473,
            "top": 708,
            "lines": [
              {
                "text": "General & admin",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "22% of revenue",
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operations_support": {
        "blocks": [
          {
            "x": 2473,
            "top": 948,
            "lines": [
              {
                "text": "Operations & support",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "13% of revenue",
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "tech_development": {
        "blocks": [
          {
            "x": 2473,
            "top": 1152,
            "lines": [
              {
                "text": "Tech & Development",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "7% of revenue",
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 622,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#c59661",
      "labelColor": "#000000",
      "linkTint": "#decbb2"
    },
    {
      "id": "rest_of_world",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Rest of World",
      "value": 131,
      "notes": [
        "+1,641% Y/Y"
      ],
      "color": "#c59661",
      "labelColor": "#000000",
      "linkTint": "#decbb2"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 753,
      "notes": [
        "+38% Y/Y"
      ],
      "color": "#c59661",
      "labelColor": "#000000",
      "linkTint": "#decbb2"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 481,
      "notes": [
        "64% margin",
        "(13pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00964a",
      "linkTint": "#9bcd9b"
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
      "value": 272,
      "color": "#cc0000",
      "labelColor": "#951400",
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
      "value": -97,
      "notes": [
        "(13%) margin",
        "(18pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#951400",
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
      "value": 578,
      "color": "#cc0000",
      "labelColor": "#951400",
      "linkTint": "#e08585"
    },
    {
      "id": "marketing",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "Marketing",
      "value": 262,
      "notes": [
        "35% of revenue",
        "(5pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#951400",
      "linkTint": "#e08585"
    },
    {
      "id": "general_admin",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "General & admin",
      "value": 165,
      "notes": [
        "22% of revenue",
        "+10pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#951400",
      "linkTint": "#e08585"
    },
    {
      "id": "operations_support",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Operations & support",
      "value": 95,
      "notes": [
        "13% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#951400",
      "linkTint": "#e08585"
    },
    {
      "id": "tech_development",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Tech & Development",
      "value": 55,
      "notes": [
        "7% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#951400",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 622,
      "sourceWidth": 319,
      "targetWidth": 319,
      "y0": 707.5,
      "y1": 814.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 131,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 1082.5,
      "y1": 1007.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 481,
      "sourceWidth": 247,
      "targetWidth": 247,
      "y0": 778.5,
      "y1": 671.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd9b"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 272,
      "sourceWidth": 139,
      "targetWidth": 140,
      "y0": 971.5,
      "y1": 1049,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 481,
      "sourceWidth": 247,
      "targetWidth": 247,
      "y0": 671.5,
      "y1": 785.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 97,
      "sourceWidth": 50,
      "targetWidth": 49,
      "y0": 1026,
      "y1": 933.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 262,
      "sourceWidth": 134,
      "targetWidth": 134,
      "y0": 729,
      "y1": 508,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 165,
      "sourceWidth": 85,
      "targetWidth": 85,
      "y0": 838.5,
      "y1": 757.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "operations_support",
      "value": 95,
      "sourceWidth": 49,
      "targetWidth": 50,
      "y0": 905.5,
      "y1": 982,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "tech_development",
      "value": 55,
      "sourceWidth": 28,
      "targetWidth": 28,
      "y0": 944,
      "y1": 1184,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "hims",
      "hers"
    ],
    "zh": {
      "name": "Hims & Hers · 2026 财年第二季度",
      "meta": {
        "title": "Hims & Hers 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "2026 财年第二季度；来源未注明季度截止日",
        "titleSize": 108,
        "titleTextLength": 1840
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans, Arial, sans-serif\">\n      <g data-typography-role=\"brand\">\n        <rect x=\"44\" y=\"710\" width=\"135\" height=\"136\" rx=\"28\" fill=\"#ffffff\"/>\n        <text x=\"111.5\" y=\"790\" text-anchor=\"middle\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"42\" font-weight=\"700\" letter-spacing=\"-3\" fill=\"#c67552\">hims</text>\n      </g>\n      <g data-typography-role=\"brand\">\n        <rect x=\"191\" y=\"710\" width=\"135\" height=\"136\" rx=\"28\" fill=\"#7cc7b2\"/>\n        <text x=\"258.5\" y=\"790\" text-anchor=\"middle\" font-family=\"Georgia, 'Times New Roman', serif\" font-size=\"42\" font-weight=\"700\" letter-spacing=\"-3\" fill=\"#ffffff\">hers</text>\n      </g>\n      <g>\n        <rect x=\"72\" y=\"1201\" width=\"240\" height=\"148\" rx=\"27\" fill=\"#ce9754\"/>\n        <text x=\"192\" y=\"1252\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">订阅用户</text>\n        <text x=\"192\" y=\"1291\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">2.9M</text>\n        <text x=\"192\" y=\"1325\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">同比 +19%</text>\n      </g>\n      <g>\n        <rect x=\"325\" y=\"1201\" width=\"379\" height=\"148\" rx=\"27\" fill=\"#ce9754\"/>\n        <text x=\"514.5\" y=\"1252\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">每位订阅用户月收入</text>\n        <text x=\"514.5\" y=\"1291\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$92</text>\n        <text x=\"514.5\" y=\"1325\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">同比 +21%</text>\n      </g>\n    </g>",
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +16%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +1,641%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +38%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 64%",
            "同比 (13 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (13%)",
            "同比 (18 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "marketing": {
          "label": "营销费用",
          "notes": [
            "占收入 35%",
            "同比 (5 个百分点)"
          ]
        },
        "general_admin": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 22%",
            "同比 +10 个百分点"
          ]
        },
        "operations_support": {
          "label": "运营与支持",
          "notes": [
            "占收入 13%",
            "同比 +0 个百分点"
          ]
        },
        "tech_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 7%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 389,
                "top": 458,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 120,
                "top": 610,
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 9,
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 389,
                "top": 961,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1,641%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 120,
                "top": 1060,
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 30,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 9
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 852,
                "top": 513,
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
                    "text": "同比 +38%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1323,
                "top": 369,
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
                    "text": "利润率 64%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1323,
                "top": 1143,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1610,
                "top": 1074,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (13%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (18 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1788,
                "top": 504,
                "lines": [
                  {
                    "text": "营业",
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
                    "size": 40,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2473,
                "top": 441,
                "lines": [
                  {
                    "text": "营销费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 35%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2473,
                "top": 708,
                "lines": [
                  {
                    "text": "一般及行政费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operations_support": {
            "blocks": [
              {
                "x": 2473,
                "top": 948,
                "lines": [
                  {
                    "text": "运营与支持",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 13%",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "tech_development": {
            "blocks": [
              {
                "x": 2473,
                "top": 1152,
                "lines": [
                  {
                    "text": "技术与开发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 7%",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          }
        }
      }
    }
  }
});
