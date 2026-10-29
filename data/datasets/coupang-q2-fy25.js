(function(){ const BROWN="#894f24"; const coupangLogo=`
    <g transform="translate(0 0) scale(1.1 1.2)" font-family="Montserrat,Arial,sans-serif" font-size="126" font-weight="700">
      <text x="0" y="116" fill="#894f24">cou</text>
      <text x="208" y="116" fill="#e94b22">p</text>
      <text x="276" y="116" fill="#fac000">a</text>
      <text x="344" y="116" fill="#80bc27">n</text>
      <text x="421" y="116" fill="#3dacdc">g</text>
    </g>`; const kpiCard=(isZh)=>`
    <g  fill="#ffffff">
      <rect x="64" y="1249" width="736" height="111" rx="30" fill="${BROWN}"/>
      <text x="181" y="1294" font-size="29" font-weight="800">${isZh ? '活跃客户' : 'Active Customers'}</text>
      <text data-operating-metric="active_customers" x="456" y="1294" font-size="29">23.9M</text>
      <text x="558" y="1294" font-size="29">${isZh ? '同比 +10%' : '(+10% Y/Y)'}</text>
      <text x="95" y="1337" font-size="29" font-weight="800">${isZh ? '每位活跃客户收入' : 'Revenue per Active Customers'}</text>
      <text data-operating-metric="revenue_per_active_customer" x="568" y="1337" font-size="29">$307</text>
      <text x="641" y="1337" font-size="29">${isZh ? '同比 +4%' : '(+4% Y/Y)'}</text>
    </g>`; window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "coupang-q2-fy25",
  "name": "Coupang · Q2 FY25",
  "company": "Coupang",
  "meta": {
    "company": "Coupang",
    "title": "Coupang Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/coupang-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2270,
    "hidePeriodStamp": true,
    "logoX": 565,
    "logoY": 245,
    "logoWidth": 580,
    "logoHeight": 142,
    "logoViewBox": "0 0 580 142",
    "logoSvg": coupangLogo
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
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#894f24",
        "label": "#894f24"
      },
      "hub": {
        "node": "#894f24",
        "label": "#894f24"
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
      "source": "#c2a995",
      "hub": "#c2a995",
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
  "operatingMetrics": [
    {
      "id": "active_customers",
      "value": "23900000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "23.9M"
    },
    {
      "id": "revenue_per_active_customer",
      "value": "0.307",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$307"
    }
  ],
  "annotationsSvg": kpiCard(false),
  "rasterAnnotations": [
    {
      "key": "coupang-developing-offerings-brands",
      "href": "data/assets/raster-annotations/coupang/developing-offerings-brands.png",
      "x": 145,
      "y": 964,
      "width": 225,
      "height": 90
    }
  ],
  "layout": {
    "scale": 45,
    "nodes": {
      "product_commerce": {
        "x": 440,
        "y": 537,
        "width": 72,
        "height": 330
      },
      "developing_offerings": {
        "x": 440,
        "y": 1106,
        "width": 72,
        "height": 53
      },
      "revenue": {
        "x": 906,
        "y": 656,
        "width": 73,
        "height": 384
      },
      "gross_profit": {
        "x": 1371,
        "y": 535,
        "width": 73,
        "height": 116
      },
      "cost_of_revenue": {
        "x": 1371,
        "y": 893,
        "width": 73,
        "height": 267
      },
      "operating_profit": {
        "x": 1840,
        "y": 422,
        "width": 73,
        "height": 8
      },
      "operating_expenses": {
        "x": 1840,
        "y": 666,
        "width": 73,
        "height": 109
      },
      "other": {
        "x": 2194,
        "y": 369,
        "width": 73,
        "height": 2
      },
      "net_profit": {
        "x": 2307,
        "y": 321,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2307,
        "y": 538,
        "width": 73,
        "height": 7
      }
    },
    "labels": {
      "product_commerce": {
        "blocks": [
          {
            "x": 479,
            "top": 442,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": null
              },
              {
                "text": "+14% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 253,
            "top": 551,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Product",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "Commerce",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "9% adjusted margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 253,
            "top": 759,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "note",
            "lines": [
              {
                "text": "Core retail",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Marketplace",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Rocket Fresh",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "developing_offerings": {
        "blocks": [
          {
            "x": 479,
            "top": 1012,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": null
              },
              {
                "text": "+33% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 254,
            "top": 1058,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Developing",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "Offerings",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "(20%) adjusted margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 943,
            "top": 474,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+19% Y/Y fxn",
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
            "x": 1407,
            "top": 351,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "30% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1876,
            "top": 237,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "2% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2507,
            "top": 261,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "0% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2231,
            "top": 385,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2507,
            "top": 502,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Tax",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1407,
            "top": 1177,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Cost of",
                "size": 35,
                "weight": 800,
                "color": null
              },
              {
                "text": "revenue",
                "size": 35,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1876,
            "top": 787,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "",
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "product_commerce",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Product Commerce",
      "value": 7.3,
      "valueText": "$7.3B",
      "notes": [
        "+14% Y/Y",
        "9% adjusted margin",
        "+1pp Y/Y",
        "Core retail",
        "Marketplace",
        "Rocket Fresh"
      ]
    },
    {
      "id": "developing_offerings",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Developing Offerings",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "+33% Y/Y",
        "(20%) adjusted margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 8.5,
      "valueText": "$8.5B",
      "notes": [
        "+16% Y/Y",
        "+19% Y/Y fxn"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 2.6,
      "valueText": "$2.6B",
      "notes": [
        "30% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 6.0,
      "valueText": "($6.0B)",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 2.4,
      "valueText": "($2.4B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.149,
      "valueText": "$149M",
      "notes": [
        "2% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.045,
      "valueText": "$45M",
      "notes": []
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.163,
      "valueText": "($163M)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.031,
      "valueText": "$31M",
      "notes": [
        "0% margin",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "product_commerce",
      "target": "revenue",
      "value": 7.3,
      "sourceWidth": 330,
      "targetWidth": 330,
      "y0": 702,
      "y1": 821,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#c2a995"
    },
    {
      "source": "developing_offerings",
      "target": "revenue",
      "value": 1.2,
      "sourceWidth": 53,
      "targetWidth": 54,
      "y0": 1132.5,
      "y1": 1013,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#c2a995"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.6,
      "sourceWidth": 116,
      "targetWidth": 116,
      "y0": 714,
      "y1": 593,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 6,
      "sourceWidth": 268,
      "targetWidth": 267,
      "y0": 906,
      "y1": 1026.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.149,
      "sourceWidth": 7,
      "targetWidth": 8,
      "y0": 538.5,
      "y1": 426,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.4,
      "sourceWidth": 109,
      "targetWidth": 109,
      "y0": 596.5,
      "y1": 720.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.031,
      "sourceWidth": 2,
      "targetWidth": 1,
      "y0": 423,
      "y1": 321.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.163,
      "sourceWidth": 6,
      "targetWidth": 7,
      "y0": 427,
      "y1": 541.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.045,
      "sourceWidth": 2,
      "targetWidth": 1,
      "y0": 370,
      "y1": 322.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    }
  ],
  "i18n": {
    "zh": {
      "name": "酷澎 · 2025 财年第二季度",
      "meta": {
        "title": "酷澎 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "titleSize": 112,
        "titleTextLength": 1540
      },
      "annotationsSvg": kpiCard(true),
      "nodes": {
        "product_commerce": {
          "label": "产品商业",
          "notes": [
            "同比 +14%",
            "调整后利润率 9%",
            "同比 +1 个百分点",
            "核心零售",
            "平台业务",
            "火箭生鲜"
          ]
        },
        "developing_offerings": {
          "label": "培育中业务",
          "notes": [
            "同比 +33%",
            "调整后利润率 (20%)",
            "同比 +3 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%",
            "按固定汇率同比 +19%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 30%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +2 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税项",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 0%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "product_commerce": {
            "blocks": [
              {
                "x": 479,
                "top": 442,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 253,
                "top": 551,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "产品",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "商业",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "调整后利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 253,
                "top": 759,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "核心零售",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "平台业务",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "火箭生鲜",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "developing_offerings": {
            "blocks": [
              {
                "x": 479,
                "top": 1012,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +33%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 254,
                "top": 1058,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "培育中",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "业务",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "调整后利润率 (20%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 943,
                "top": 474,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "按固定汇率同比 +19%",
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
                "x": 1407,
                "top": 351,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 30%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1876,
                "top": 237,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2507,
                "top": 261,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2231,
                "top": 385,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2507,
                "top": 502,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "税项",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1407,
                "top": 1177,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "收入",
                    "size": 35,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "成本",
                    "size": 35,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1876,
                "top": 787,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "",
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});})();
