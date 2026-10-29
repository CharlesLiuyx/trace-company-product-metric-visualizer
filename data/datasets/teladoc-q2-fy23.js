/* Teladoc Health Q2 FY23 income statement ($M), measured from the processed reference. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const PURPLE = '#351f65';
  const PURPLE_LINK = '#9d93b2';
  const CYAN = '#10b4dd';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2460;

  const line = (text, size, options = {}) => ({
    text,
    size,
    weight: options.weight || 400,
    color: options.color,
  });
  const block = (x, top, lines, options = {}) => ({
    x,
    top,
    anchor: options.anchor || 'middle',
    lineGap: options.lineGap == null ? 9 : options.lineGap,
    lines,
  });

  const teladocLogo = `
    <text x="-28" y="84" font-family="Montserrat,Arial,sans-serif" font-size="99" font-weight="800"
      letter-spacing="-8" textLength="445" lengthAdjust="spacingAndGlyphs" fill="${PURPLE}">Teladoc</text>
    <circle cx="298" cy="55" r="15" fill="${CYAN}"/>
    <text x="214" y="149" font-family="Montserrat,Arial,sans-serif" font-size="47" font-weight="700"
      letter-spacing="2" fill="${CYAN}">HEALTH</text>`;

  const card = (x, width, header, value, note, options = {}) => `
    <g>
      <rect x="${x}" y="1183" width="${width}" height="150" rx="${options.radius || 31}" fill="${PURPLE}"/>
      <text x="${x + width / 2}" y="1236" text-anchor="middle" font-size="${options.headerSize || 29}" font-weight="800" fill="#fff">${header}</text>
      <text data-operating-metric="${options.metricId}" x="${x + width / 2}" y="1276" text-anchor="middle" font-size="29" font-weight="500" fill="#fff">${value}</text>
      <text x="${x + width / 2}" y="1307" text-anchor="middle" font-size="22" font-weight="500" fill="#fff">${note}</text>
    </g>`;

  const annotations = (isZh) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <g data-typography-role="brand">
        <circle cx="181" cy="409" r="75" fill="${CYAN}"/>
        <path d="M181 334A75 75 0 0 0 181 484A47 47 0 0 1 181 390A47 47 0 0 1 181 334Z" fill="${PURPLE}"/>
        <circle cx="181" cy="409" r="42" fill="${BG}"/>
        <text x="181" y="562" text-anchor="middle" font-size="40" font-weight="800" textLength="295" lengthAdjust="spacingAndGlyphs" fill="${PURPLE}">Teladoc Health</text>
      </g>
      <text x="181" y="615" text-anchor="middle" font-size="40" font-weight="800" fill="${PURPLE}">${isZh ? '整合护理' : 'Integrated Care'}</text>
      <text x="181" y="657" text-anchor="middle" font-size="29" font-weight="500" textLength="275" lengthAdjust="spacingAndGlyphs" fill="${NOTE}">${isZh ? '调整后利润率 11%' : '11% adjusted margin'}</text>

      <g data-typography-role="brand">
        <g transform="translate(124 870)" fill="#5ba545">
          <path d="M0 6C21-9 37-5 49 15C26 25 9 20 0 6Z"/>
          <path d="M50 15C62-5 79-9 100 6C91 20 74 25 50 15Z"/>
          <path d="M26 16C35 24 44 29 50 38" fill="none" stroke="#5ba545" stroke-width="5" stroke-linecap="round"/>
          <path d="M74 16C65 24 56 29 50 38" fill="none" stroke="#5ba545" stroke-width="5" stroke-linecap="round"/>
        </g>
        <text x="21" y="976" font-size="56" font-weight="800" letter-spacing="-3" fill="#5ba545">better</text>
        <text x="184" y="976" font-size="56" font-weight="800" letter-spacing="-3" textLength="150" lengthAdjust="spacingAndGlyphs" fill="#666666">help</text>
      </g>
      <text x="181" y="1024" text-anchor="middle" font-size="29" font-weight="500" fill="${NOTE}">${isZh ? '调整后利润率 12%' : '12% adjusted margin'}</text>

      ${card(28, 211, isZh ? '访问量' : 'Visits', '4.7M', isZh ? '同比持平' : 'Flat Y/Y', { metricId: 'visits' })}
      ${card(250, 500, isZh ? '美国整合护理会员' : 'US Integrated Care Members', '85.9M', isZh ? '同比 +7%' : '+7% Y/Y', { headerSize: isZh ? 28 : 29, metricId: 'us_integrated_care_members' })}
      ${card(763, 430, isZh ? 'BetterHelp 付费用户' : 'BetterHelp Paying users', '476K', isZh ? '同比 +17%' : '+17% Y/Y', { headerSize: isZh ? 27 : 29, metricId: 'betterhelp_paying_users' })}
    </g>`;


 window.DATASETS=window.DATASETS||[];
 window.DATASETS.push({
  "key": "teladoc-q2-fy23",
  "name": "Teladoc Health · Q2 FY23",
  "company": "Teladoc Health",
  "meta": {
    "company": "Teladoc Health",
    "title": "Teladoc Q2 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/teladoc-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2202,
    "logoWidth": 500,
    "logoHeight": 160,
    "logoX": 648,
    "logoY": 255,
    "logoViewBox": "0 0 500 160",
    "logoSvg": teladocLogo
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "revenue:left",
        "revenue:right",
        "operating_expenses:left",
        "operating_expenses:right"
      ]
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#351f65",
        "label": "#351f65"
      },
      "hub": {
        "node": "#351f65",
        "label": "#351f65"
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
      "source": "#9d93b2",
      "hub": "#9d93b2",
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
  "annotationsSvg": annotations(false),
  "operatingMetrics": [
    {
      "id": "visits",
      "value": "4700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "4.7M"
    },
    {
      "id": "us_integrated_care_members",
      "value": "85900000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "85.9M"
    },
    {
      "id": "betterhelp_paying_users",
      "value": "476000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "476K"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "integrated_care": {
        "x": 367,
        "y": 491,
        "width": 72,
        "height": 178
      },
      "betterhelp": {
        "x": 367,
        "y": 912,
        "width": 72,
        "height": 144
      },
      "revenue": {
        "x": 834,
        "y": 582,
        "width": 72,
        "height": 323
      },
      "gross_profit": {
        "x": 1298,
        "y": 493,
        "width": 73,
        "height": 228
      },
      "cost_of_revenue": {
        "x": 1296,
        "y": 900,
        "width": 73,
        "height": 95
      },
      "operating_loss": {
        "x": 1547,
        "y": 978,
        "width": 72,
        "height": 36
      },
      "operating_expenses": {
        "x": 1763,
        "y": 582,
        "width": 72,
        "height": 264
      },
      "sales_marketing": {
        "x": 2235,
        "y": 350,
        "width": 73,
        "height": 115
      },
      "ga": {
        "x": 2235,
        "y": 570,
        "width": 73,
        "height": 63
      },
      "technology_development": {
        "x": 2235,
        "y": 785,
        "width": 73,
        "height": 43
      },
      "depreciation_amortization": {
        "x": 2235,
        "y": 1004,
        "width": 73,
        "height": 38
      },
      "integration_costs": {
        "x": 2235,
        "y": 1221,
        "width": 73,
        "height": 6
      }
    },
    "labels": {
      "integrated_care": {
        "blocks": [
          {
            "x": 402,
            "top": 401,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "betterhelp": {
        "blocks": [
          {
            "x": 402,
            "top": 819,
            "anchor": "middle",
            "lineGap": 10,
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
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 870,
            "top": 437,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1333,
            "top": 307,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "71% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1332,
            "top": 1016,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 400
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1583,
            "top": 1034,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(11%) margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+14pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1799,
            "top": 420,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39,
                "weight": 400
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
      "sales_marketing": {
        "blocks": [
          {
            "x": 2460,
            "top": 377,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31,
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
      "ga": {
        "blocks": [
          {
            "x": 2460,
            "top": 574,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
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
      "technology_development": {
        "blocks": [
          {
            "x": 2460,
            "top": 750,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31,
                "weight": 400
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
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2460,
            "top": 987,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "amortization",
                "size": 31,
                "weight": 400
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
      "integration_costs": {
        "blocks": [
          {
            "x": 2460,
            "top": 1210,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Integration costs",
                "size": 31,
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
      }
    }
  },
  "nodes": [
    {
      "id": "integrated_care",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Teladoc Health Integrated Care",
      "value": 360,
      "notes": [
        "+5% Y/Y",
        "11% adjusted margin"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "betterhelp",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "BetterHelp",
      "value": 292,
      "notes": [
        "+18% Y/Y",
        "12% adjusted margin"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 652,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#351f65",
      "labelColor": "#351f65"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 462,
      "notes": [
        "71% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 191,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 0,
      "type": "cost",
      "label": "Operating loss",
      "value": -72,
      "notes": [
        "(11%) margin",
        "+14pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Operating expenses",
      "value": 534,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sales_marketing",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 232,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "G&A",
      "value": 126,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "technology_development",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Technology & development",
      "value": 87,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "depreciation_amortization",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Depreciation & amortization",
      "value": 76,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "integration_costs",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "Integration costs",
      "value": 12,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "integrated_care",
      "target": "revenue",
      "value": 360,
      "sourceWidth": 178,
      "targetWidth": 178,
      "y0": 580.0,
      "y1": 671.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9d93b2"
    },
    {
      "source": "betterhelp",
      "target": "revenue",
      "value": 292,
      "sourceWidth": 144,
      "targetWidth": 145,
      "y0": 984.0,
      "y1": 832.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9d93b2"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 462,
      "sourceWidth": 229,
      "targetWidth": 228,
      "y0": 696.5,
      "y1": 607.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 191,
      "sourceWidth": 94,
      "targetWidth": 95,
      "y0": 858.0,
      "y1": 947.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 462,
      "sourceWidth": 228,
      "targetWidth": 229,
      "y0": 607.0,
      "y1": 696.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 72,
      "sourceWidth": 36,
      "targetWidth": 35,
      "y0": 996.0,
      "y1": 828.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 232,
      "sourceWidth": 115,
      "targetWidth": 115,
      "y0": 639.5,
      "y1": 407.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 126,
      "sourceWidth": 63,
      "targetWidth": 63,
      "y0": 728.5,
      "y1": 601.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 87,
      "sourceWidth": 43,
      "targetWidth": 43,
      "y0": 781.5,
      "y1": 806.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 76,
      "sourceWidth": 37,
      "targetWidth": 38,
      "y0": 821.5,
      "y1": 1023.0,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "integration_costs",
      "value": 12,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 843.0,
      "y1": 1224.0,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "better",
      "help"
    ],
    "zh": {
      "name": "Teladoc Health · 2023 财年第二季度",
      "meta": {
        "title": "Teladoc 2023 财年第二季度利润表",
        "period": "",
        "periodNote": "",
        "titleSize": 110,
        "titleTextLength": 1640
      },
      "annotationsSvg": annotations(true),
      "nodes": {
        "integrated_care": {
          "label": "Teladoc Health 整合护理",
          "notes": [
            "同比 +5%",
            "调整后利润率 11%"
          ]
        },
        "betterhelp": {
          "label": "BetterHelp",
          "notes": [
            "同比 +18%",
            "调整后利润率 12%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 71%",
            "同比 +2 个百分点"
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
            "同比 +14 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与市场",
          "notes": []
        },
        "ga": {
          "label": "一般及行政费用",
          "notes": []
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": []
        },
        "depreciation_amortization": {
          "label": "折旧与摊销",
          "notes": []
        },
        "integration_costs": {
          "label": "整合成本",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "integrated_care": {
            "blocks": [
              {
                "x": 402,
                "top": 401,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "betterhelp": {
            "blocks": [
              {
                "x": 430,
                "top": 819,
                "anchor": "middle",
                "lineGap": 10,
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
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 870,
                "top": 437,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1333,
                "top": 307,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 71%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1332,
                "top": 1016,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 400
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1583,
                "top": 1034,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (11%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1799,
                "top": 420,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39,
                    "weight": 400
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
          "sales_marketing": {
            "blocks": [
              {
                "x": 2460,
                "top": 377,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
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
          "ga": {
            "blocks": [
              {
                "x": 2460,
                "top": 574,
                "anchor": "middle",
                "lineGap": 10,
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
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2460,
                "top": 750,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 400
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2460,
                "top": 987,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "摊销",
                    "size": 31,
                    "weight": 400
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
          "integration_costs": {
            "blocks": [
              {
                "x": 2460,
                "top": 1210,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "整合成本",
                    "size": 31,
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
          }
        }
      }
    }
  }
});
})();
