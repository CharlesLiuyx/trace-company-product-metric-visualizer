(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "snap-q1-fy23",
  "name": "Snap · Q1 FY23",
  "company": "Snap",
  "meta": {
    "company": "Snap",
    "title": "Snap Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/snap-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 196.61458333333331,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2033.8541666666665,
    "hidePeriodStamp": true,
    "logoWidth": 235.67708333333331,
    "logoHeight": 235.67708333333331,
    "logoY": 236.97916666666666,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).snapLogo || ''
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
    "labelYOffset": 0,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 28.645833333333332,
      "lineGap": 10.416666666666666
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 640,
      "notes": [
        "(16%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#fffc00",
      "labelColor": "#000000",
      "linkTint": "#f7f685"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 158,
      "notes": [
        "(2%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#fffc00",
      "labelColor": "#000000",
      "linkTint": "#f7f685"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of world",
      "value": 191,
      "notes": [
        "+35% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#fffc00",
      "labelColor": "#000000",
      "linkTint": "#f7f685"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 989,
      "notes": [
        "(7%) Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0,
      "color": "#fffc00",
      "labelColor": "#000000",
      "linkTint": "#f7f685"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 549,
      "notes": [
        "56% margin",
        "(5pp) Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 0,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 440,
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -365,
      "notes": [
        "(37%) margin",
        "(11pp) Y/Y"
      ],
      "type": "cost",
      "col": 3,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 914,
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 455,
      "notes": [
        "46% of revenue",
        "+3pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 268,
      "notes": [
        "27% of revenue",
        "+4pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 190,
      "notes": [
        "19% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 640,
      "width": 195.48365352207614,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 158,
      "width": 48.260026963262554,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 191,
      "width": 58.33965284799461,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 549,
      "width": 167.68832153690596,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 440,
      "width": 134.39501179642738,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 549,
      "width": 167.68832153690596,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 365,
      "width": 111.48677114930906,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 455,
      "width": 138.976659925851,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 268,
      "width": 81.85877991236939,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 190,
      "width": 58.03420963936637,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.30544320862824403,
    "nodes": {
      "north_america": {
        "x": 363.28125,
        "y": 476.5625,
        "width": 72.91666666666666,
        "height": 195.48365352207614
      },
      "europe": {
        "x": 363.28125,
        "y": 873.6979166666666,
        "width": 72.91666666666666,
        "height": 48.260026963262554
      },
      "rest_of_world": {
        "x": 363.28125,
        "y": 1102.8645833333333,
        "width": 72.91666666666666,
        "height": 58.33965284799461
      },
      "revenue": {
        "x": 830.7291666666666,
        "y": 644.53125,
        "width": 72.91666666666666,
        "height": 302.0833333333333
      },
      "gross_profit": {
        "x": 1277.34375,
        "y": 542.96875,
        "width": 72.91666666666666,
        "height": 167.68832153690596
      },
      "cost_of_revenue": {
        "x": 1274.7395833333333,
        "y": 886.71875,
        "width": 72.91666666666666,
        "height": 134.39501179642738
      },
      "operating_loss": {
        "x": 1540.3645833333333,
        "y": 1096.3541666666665,
        "width": 72.91666666666666,
        "height": 111.48677114930906
      },
      "operating_expenses": {
        "x": 1819.0104166666665,
        "y": 645.8333333333333,
        "width": 72.91666666666666,
        "height": 279.175092686215
      },
      "rnd": {
        "x": 2231.770833333333,
        "y": 503.90624999999994,
        "width": 72.91666666666666,
        "height": 138.976659925851
      },
      "sm": {
        "x": 2231.770833333333,
        "y": 848.9583333333333,
        "width": 72.91666666666666,
        "height": 81.85877991236939
      },
      "ga": {
        "x": 2231.770833333333,
        "y": 1148.4375,
        "width": 72.91666666666666,
        "height": 58.03420963936637
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 404.94791666666663,
            "top": 376.3020833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(16%) Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.63541666666663,
            "top": 554.6875,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "North America",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 404.94791666666663,
            "top": 776.0416666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.63541666666663,
            "top": 877.6041666666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Europe",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 404.94791666666663,
            "top": 1011.7187499999999,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+35% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.63541666666663,
            "top": 1108.4833333333333,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Rest of world",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 867.1875,
            "top": 492.1875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 28.645833333333332,
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
            "x": 1312.5,
            "top": 356.7708333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "56% margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28.645833333333332,
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
            "x": 1311.1979166666665,
            "top": 1037.7604166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1576.8229166666665,
            "top": 1222.65625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(37%) margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(11pp) Y/Y",
                "size": 28.645833333333332,
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
            "x": 1855.46875,
            "top": 483.07291666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2447.9166666666665,
            "top": 509.1145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "46% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.645833333333332,
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
            "x": 2460.9375,
            "top": 848.9583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "27% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 28.645833333333332,
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
            "x": 2460.9375,
            "top": 1131.5104166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "19% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><rect x=\"156\" y=\"899\" width=\"162\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"237\" y=\"939\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"white\">DAU</text><text data-operating-metric=\"dau\" x=\"237\" y=\"970\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">383M</text><text x=\"237\" y=\"994\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+15% Y/Y</text><rect x=\"323\" y=\"899\" width=\"162\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"404\" y=\"939\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"404\" y=\"970\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">$2.58</text><text x=\"404\" y=\"994\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">(19%) Y/Y</text><text x=\"324\" y=\"1039\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">DAU = Daily Average Users</text><text x=\"324\" y=\"1070\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"132\" y=\"1104\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "dau",
      "label": "DAU",
      "value": "383000000",
      "unit": "count",
      "currency": null,
      "literal": "383M",
      "notes": [
        "+15% Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "DAU\n383M\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          203,
          1171,
          211,
          150
        ]
      }
    },
    {
      "id": "arpu",
      "label": "ARPU",
      "value": "0.00258",
      "unit": "K",
      "currency": "USD",
      "literal": "$2.58",
      "notes": [
        "(19%) Y/Y"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "ARPU\n$2.58\n(19%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          421,
          1171,
          211,
          150
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Snap · 2023 财年第一季度",
      "meta": {
        "title": "Snap 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "titleSize": 110.67708333333333,
        "titleTextLength": 1822.9166666666665
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 (16%)"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 (2%)"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +35%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (7%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 56%",
            "同比 (5 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (37%)",
            "同比 (11 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 46%",
            "同比 +3 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 27%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 19%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 404.94791666666663,
                "top": 376.3020833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (16%)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.63541666666663,
                "top": 554.6875,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 404.94791666666663,
                "top": 776.0416666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.63541666666663,
                "top": 877.6041666666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 404.94791666666663,
                "top": 1011.7187499999999,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.63541666666663,
                "top": 1108.4833333333333,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 867.1875,
                "top": 492.1875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 28.645833333333332,
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
                "x": 1312.5,
                "top": 356.7708333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 56%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28.645833333333332,
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
                "x": 1311.1979166666665,
                "top": 1037.7604166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1576.8229166666665,
                "top": 1222.65625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (37%)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (11 个百分点)",
                    "size": 28.645833333333332,
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
                "x": 1855.46875,
                "top": 483.07291666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2447.9166666666665,
                "top": 509.1145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "占收入 46%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.645833333333332,
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
                "x": 2460.9375,
                "top": 848.9583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "占收入 27%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28.645833333333332,
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
                "x": 2460.9375,
                "top": 1131.5104166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "占收入 19%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><rect x=\"156\" y=\"899\" width=\"162\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"237\" y=\"939\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"white\">DAU</text><text data-operating-metric=\"dau\" x=\"237\" y=\"970\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">383M</text><text x=\"237\" y=\"994\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +15%</text><rect x=\"323\" y=\"899\" width=\"162\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"404\" y=\"939\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"404\" y=\"970\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">$2.58</text><text x=\"404\" y=\"994\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 (19%)</text><text x=\"324\" y=\"1039\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">DAU = 日均用户数</text><text x=\"324\" y=\"1070\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"132\" y=\"1104\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});})();
