window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "datadog-q3-fy22",
  "name": "Datadog · Q3 FY22",
  "company": "Datadog",
  "meta": {
    "company": "Datadog",
    "title": "Datadog Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/datadog-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2252.886,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#737373",
    "palette": {
      "source": {
        "node": "#632ca6",
        "label": "#632ca6"
      },
      "hub": {
        "node": "#632ca6",
        "label": "#632ca6"
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
      "source": "#b299cf",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 9.116
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 312,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+63% Y/Y"
      ]
    },
    {
      "id": "international",
      "label": "International",
      "value": 124,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+58% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 437,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+61% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 342,
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "79% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 94,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -31,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [
        "(7%) margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 374,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 205,
      "type": "cost",
      "col": 5,
      "order": 0,
      "notes": [
        "47% of revenue",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 129,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [
        "30% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 39,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "9% of revenue",
        "Unchanged"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 312,
      "sourceWidth": 174.501,
      "targetWidth": 174.501,
      "y0": 602.94,
      "y1": 707.12,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 124,
      "sourceWidth": 69.019,
      "targetWidth": 67.717,
      "y0": 949.989,
      "y1": 828.229,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 342,
      "sourceWidth": 190.128,
      "targetWidth": 190.128,
      "y0": 714.933,
      "y1": 615.962,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 94,
      "sourceWidth": 52.09,
      "targetWidth": 50.788,
      "y0": 836.042,
      "y1": 925.246,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 342,
      "sourceWidth": 190.128,
      "targetWidth": 190.128,
      "y0": 615.962,
      "y1": 717.538,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 31,
      "sourceWidth": 16.929,
      "targetWidth": 16.929,
      "y0": 1104.956,
      "y1": 821.066,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 205,
      "sourceWidth": 113.295,
      "targetWidth": 113.295,
      "y0": 679.121,
      "y1": 791.115,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 129,
      "sourceWidth": 71.624,
      "targetWidth": 71.624,
      "y0": 771.581,
      "y1": 1056.773,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 39,
      "sourceWidth": 22.138,
      "targetWidth": 22.138,
      "y0": 818.462,
      "y1": 1295.084,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "north_america": {
        "x": 375.047,
        "y": 515.689,
        "width": 72.926,
        "height": 174.501
      },
      "international": {
        "x": 375.047,
        "y": 915.479,
        "width": 72.926,
        "height": 69.019
      },
      "revenue": {
        "x": 842.553,
        "y": 619.869,
        "width": 72.926,
        "height": 242.218
      },
      "gross_profit": {
        "x": 1308.757,
        "y": 520.898,
        "width": 72.926,
        "height": 190.128
      },
      "cost_of_revenue": {
        "x": 1313.966,
        "y": 899.852,
        "width": 72.926,
        "height": 50.788
      },
      "operating_loss": {
        "x": 1539.255,
        "y": 1096.491,
        "width": 72.926,
        "height": 16.929
      },
      "operating_expenses": {
        "x": 1786.682,
        "y": 622.474,
        "width": 72.926,
        "height": 207.057
      },
      "rnd": {
        "x": 2243.77,
        "y": 734.467,
        "width": 72.926,
        "height": 113.295
      },
      "sm": {
        "x": 2243.77,
        "y": 1020.961,
        "width": 72.926,
        "height": 71.624
      },
      "ga": {
        "x": 2243.77,
        "y": 1284.015,
        "width": 72.926,
        "height": 22.138
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 411.51,
            "top": 419.323,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+63% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 214.871,
            "top": 555.2860000000001,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "North",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "America",
                "size": 39.067,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 411.51,
            "top": 819.113,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+58% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 214.871,
            "top": 926.419,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "International",
                "size": 39.067,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 879.016,
            "top": 476.622,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+61% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1345.22,
            "top": 338.584,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "79% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1350.429,
            "top": 968.871,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.765,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 37.765,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1575.718,
            "top": 1131.652,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(7%) margin",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1823.145,
            "top": 472.715,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 36.463,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.463,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.463,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2432.596,
            "top": 716.235,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "47% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2432.596,
            "top": 996.218,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "30% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2432.596,
            "top": 1229.32,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "Unchanged",
                "size": 27.347,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "dbnr",
      "label": "DBNR",
      "value": "130",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 130%",
      "basis": "unspecified",
      "notes": [
        "Unchanged"
      ],
      "quote": "DBNR\n> 130%\nUnchanged",
      "anchor": {
        "type": "image-box",
        "box": [
          124,
          1179,
          185,
          167
        ]
      }
    },
    {
      "id": "customers",
      "label": "Customers",
      "value": "22200",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "22,200",
      "basis": "unspecified",
      "notes": [
        "+27% Y/Y"
      ],
      "quote": "Customers 22,200 +27% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          320,
          1179,
          434,
          90
        ]
      }
    },
    {
      "id": "large_customers",
      "label": "> $100K",
      "value": "2600",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,600",
      "basis": "unspecified",
      "notes": [
        "+44% Y/Y"
      ],
      "quote": "> $100K 2,600 +44% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          320,
          1268,
          434,
          77
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"123.713\" y=\"1178.533\" width=\"184.919\" height=\"166.688\" rx=\"44.276\" fill=\"#632ca6\"/><rect x=\"320.353\" y=\"1178.533\" width=\"433.648\" height=\"166.688\" rx=\"44.276\" fill=\"#632ca6\"/>\n<text x=\"216.173\" y=\"1234.529\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">DBNR</text>\n<text data-operating-metric=\"dbnr\" x=\"216.173\" y=\"1276.201\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">&gt; 130%</text>\n<text x=\"216.173\" y=\"1316.571\" text-anchor=\"middle\" font-size=\"28.649\" fill=\"white\">Unchanged</text>\n<text x=\"334.677\" y=\"1254.063\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"506.574\" y=\"1254.063\" font-size=\"29.952\" fill=\"white\">22,200</text><text x=\"608.149\" y=\"1254.063\" font-size=\"27.347\" fill=\"white\">+27% Y/Y</text>\n<text x=\"338.584\" y=\"1295.735\" font-size=\"25\" font-weight=\"700\" fill=\"white\">&gt; $100K</text><text data-operating-metric=\"large_customers\" x=\"490.947\" y=\"1295.735\" font-size=\"29.952\" fill=\"white\">2,600</text><text x=\"575.593\" y=\"1295.735\" font-size=\"27.347\" fill=\"white\">+44% Y/Y</text>\n<text x=\"209.662\" y=\"1385.59\" font-size=\"27.347\" fill=\"#737373\">DBNR = Dollar Based Net Retention</text><text x=\"170.594\" y=\"1438.982\" font-size=\"39.067\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/datadog/company-wordmark.png",
      "x": 539.13,
      "y": 293.005,
      "width": 596.429,
      "height": 152.363
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "DBNR"
    ],
    "zh": {
      "name": "Datadog · 2022 财年第三季度",
      "meta": {
        "title": "Datadog 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "titleSize": 111.993,
        "titleTextLength": 2018.481
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +63%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +58%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +61%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
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
            "利润率 (7%)",
            "同比 (5 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 47%",
            "同比 +5 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 30%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "保持不变"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 411.51,
                "top": 419.323,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +63%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 214.871,
                "top": 578.2860000000001,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.067,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 411.51,
                "top": 819.113,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +58%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 214.871,
                "top": 926.419,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.067,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 879.016,
                "top": 476.622,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +61%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1345.22,
                "top": 338.584,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1350.429,
                "top": 968.871,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.765,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 37.765,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1575.718,
                "top": 1131.652,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (7%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1823.145,
                "top": 472.715,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.463,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.463,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.463,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2432.596,
                "top": 716.235,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 47%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2432.596,
                "top": 996.218,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 30%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2432.596,
                "top": 1229.32,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "保持不变",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"123.713\" y=\"1178.533\" width=\"184.919\" height=\"166.688\" rx=\"44.276\" fill=\"#632ca6\"/><rect x=\"320.353\" y=\"1178.533\" width=\"433.648\" height=\"166.688\" rx=\"44.276\" fill=\"#632ca6\"/>\n<text x=\"216.173\" y=\"1234.529\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">DBNR</text>\n<text data-operating-metric=\"dbnr\" x=\"216.173\" y=\"1276.201\" text-anchor=\"middle\" font-size=\"31.254\" fill=\"white\">&gt; 130%</text>\n<text x=\"216.173\" y=\"1316.571\" text-anchor=\"middle\" font-size=\"28.649\" fill=\"white\">保持不变</text>\n<text x=\"334.677\" y=\"1254.063\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"506.574\" y=\"1254.063\" font-size=\"29.952\" fill=\"white\">22,200</text><text x=\"608.149\" y=\"1254.063\" font-size=\"27.347\" fill=\"white\">同比 +27%</text>\n<text x=\"338.584\" y=\"1295.735\" font-size=\"25\" font-weight=\"700\" fill=\"white\">&gt; $100K 客户</text><text data-operating-metric=\"large_customers\" x=\"490.947\" y=\"1295.735\" font-size=\"29.952\" fill=\"white\">2,600</text><text x=\"575.593\" y=\"1295.735\" font-size=\"27.347\" fill=\"white\">同比 +44%</text>\n<text x=\"209.662\" y=\"1385.59\" font-size=\"27.347\" fill=\"#737373\">DBNR = 美元净留存率</text><text x=\"170.594\" y=\"1438.982\" font-size=\"39.067\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
