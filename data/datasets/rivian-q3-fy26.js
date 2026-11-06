window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "rivian-q3-fy26",
  "name": "Rivian · Q3 FY26",
  "company": "Rivian",
  "meta": {
    "company": "Rivian",
    "title": "Rivian Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/rivian-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2102,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#f3af3d",
        "label": "#000000"
      },
      "hub": {
        "node": "#f3af3d",
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
      "source": "#f2d3a0",
      "hub": "#f2d3a0",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g><rect x=\"2060\" y=\"1193\" width=\"190\" height=\"148\" rx=\"30\" fill=\"#f3ae3b\"/><text x=\"2155\" y=\"1248\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\">Production</text><text data-operating-metric=\"production\" x=\"2155\" y=\"1287\" text-anchor=\"middle\" font-size=\"27\">19.8K</text><text x=\"2155\" y=\"1320\" text-anchor=\"middle\" font-size=\"22\">+84% Y/Y</text></g><g><rect x=\"2255\" y=\"1193\" width=\"190\" height=\"148\" rx=\"30\" fill=\"#f3ae3b\"/><text x=\"2350\" y=\"1248\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\">Deliveries</text><text data-operating-metric=\"deliveries\" x=\"2350\" y=\"1287\" text-anchor=\"middle\" font-size=\"27\">19.2K</text><text x=\"2350\" y=\"1320\" text-anchor=\"middle\" font-size=\"22\">+46% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "rivian-automotive-vehicles",
      "href": "data/assets/raster-annotations/rivian/automotive-vehicles.png",
      "x": 50,
      "y": 725,
      "width": 320,
      "height": 180
    },
    {
      "key": "rivian-logo-q3-fy26",
      "href": "data/assets/raster-annotations/rivian/logo-q3-fy26.png",
      "x": 710,
      "y": 242,
      "width": 375,
      "height": 255,
      "clearance": true
    }
  ],
  "layout": {
    "scale": 244,
    "nodes": {
      "automotive": {
        "x": 390,
        "y": 588,
        "width": 71,
        "height": 240
      },
      "software_services": {
        "x": 390,
        "y": 1011,
        "width": 71,
        "height": 94
      },
      "revenue": {
        "x": 857,
        "y": 693,
        "width": 71,
        "height": 333
      },
      "gross_profit": {
        "x": 1324,
        "y": 590,
        "width": 71,
        "height": 27
      },
      "cost_of_revenue": {
        "x": 1324,
        "y": 806,
        "width": 71,
        "height": 305
      },
      "operating_loss": {
        "x": 1584,
        "y": 803,
        "width": 71,
        "height": 136
      },
      "operating_expenses": {
        "x": 1791,
        "y": 698,
        "width": 71,
        "height": 163
      },
      "rnd": {
        "x": 2258,
        "y": 578,
        "width": 71,
        "height": 75
      },
      "sga": {
        "x": 2258,
        "y": 872,
        "width": 71,
        "height": 89
      }
    },
    "labels": {
      "automotive": {
        "blocks": [
          {
            "x": 428,
            "top": 486,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 110,
            "top": 590,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Automotive",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(5%) gross margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "software_services": {
        "blocks": [
          {
            "x": 428,
            "top": 910,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+45% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 110,
            "top": 1015,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Software",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "42% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28,
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
            "x": 893,
            "top": 543,
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
                "text": "+38% Y/Y",
                "size": 28,
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
            "x": 1360,
            "top": 398,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "8% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7pp Y/Y",
                "size": 28,
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
            "x": 1360,
            "top": 1127,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 37,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1620,
            "top": 954,
            "anchor": "middle",
            "lineGap": 8,
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
                "size": 36,
                "weight": 400
              },
              {
                "text": "(41%) margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+22pp Y/Y",
                "size": 28,
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
            "x": 1827,
            "top": 531,
            "anchor": "middle",
            "lineGap": 8,
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
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2460,
            "top": 554,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Research &",
                "size": 34,
                "weight": 800
              },
              {
                "text": "development",
                "size": 34,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2470,
            "top": 858,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Selling, general,",
                "size": 30,
                "weight": 800
              },
              {
                "text": "& admin",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "27% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "automotive",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Automotive",
      "value": 1.6,
      "valueText": "$1.6B",
      "notes": [
        "+36% Y/Y",
        "(5%) gross margin",
        "+6pp Y/Y"
      ],
      "color": "#f3af3d",
      "labelColor": "#000000",
      "linkTint": "#f2d3a0"
    },
    {
      "id": "software_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Software & Services",
      "value": 0.6,
      "valueText": "$0.6B",
      "notes": [
        "+45% Y/Y",
        "42% gross margin",
        "+5pp Y/Y"
      ],
      "color": "#f3af3d",
      "labelColor": "#000000",
      "linkTint": "#f2d3a0"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 2.2,
      "valueText": "$2.2B",
      "notes": [
        "+38% Y/Y"
      ],
      "color": "#f3af3d",
      "labelColor": "#000000",
      "linkTint": "#f2d3a0"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [
        "8% margin",
        "+7pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 2,
      "valueText": "($2.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 0,
      "type": "cost",
      "label": "Operating loss",
      "value": -0.9,
      "valueText": "($0.9B)",
      "notes": [
        "(41%) margin",
        "+22pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Operating expenses",
      "value": 1.1,
      "valueText": "($1.1B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "Research & development",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": [
        "23% of revenue",
        "(7pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sga",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Selling, general, & admin",
      "value": 0.6,
      "valueText": "($0.6B)",
      "notes": [
        "27% of revenue",
        "(9pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "automotive",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 240,
      "targetWidth": 239,
      "y0": 708,
      "y1": 812.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "software_services",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 1058,
      "y1": 979,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 0.2,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 706.5,
      "y1": 603.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2,
      "sourceWidth": 306,
      "targetWidth": 305,
      "y0": 873,
      "y1": 958.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 603.5,
      "y1": 711.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.9,
      "sourceWidth": 136,
      "targetWidth": 136,
      "y0": 871,
      "y1": 793,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.5,
      "sourceWidth": 75,
      "targetWidth": 75,
      "y0": 735.5,
      "y1": 615.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.6,
      "sourceWidth": 88,
      "targetWidth": 89,
      "y0": 817,
      "y1": 916.5,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Rivian · 2026 财年第三季度",
      "meta": {
        "title": "Rivian 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "",
        "titleTextLength": 1950
      },
      "annotationsSvg": "<g><rect x=\"2060\" y=\"1193\" width=\"190\" height=\"148\" rx=\"30\" fill=\"#f3ae3b\"/><text x=\"2155\" y=\"1248\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\">产量</text><text data-operating-metric=\"production\" x=\"2155\" y=\"1287\" text-anchor=\"middle\" font-size=\"27\">19.8K</text><text x=\"2155\" y=\"1320\" text-anchor=\"middle\" font-size=\"22\">同比 +84%</text></g><g><rect x=\"2255\" y=\"1193\" width=\"190\" height=\"148\" rx=\"30\" fill=\"#f3ae3b\"/><text x=\"2350\" y=\"1248\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\">交付量</text><text data-operating-metric=\"deliveries\" x=\"2350\" y=\"1287\" text-anchor=\"middle\" font-size=\"27\">19.2K</text><text x=\"2350\" y=\"1320\" text-anchor=\"middle\" font-size=\"22\">同比 +46%</text></g>",
      "nodes": {
        "automotive": {
          "label": "汽车业务",
          "notes": [
            "同比 +36%",
            "毛利率 (5%)",
            "同比 +6 个百分点"
          ]
        },
        "software_services": {
          "label": "软件与服务",
          "notes": [
            "同比 +45%",
            "毛利率 42%",
            "同比 +5 个百分点"
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
            "利润率 8%",
            "同比 +7 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (41%)",
            "同比 +22 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 23%",
            "同比 (7 个百分点)"
          ]
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": [
            "占收入 27%",
            "同比 (9 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "automotive": {
            "blocks": [
              {
                "x": 428,
                "top": 486,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 110,
                "top": 590,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 (5%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "software_services": {
            "blocks": [
              {
                "x": 428,
                "top": 910,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +45%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 110,
                "top": 1015,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "软件与服务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 42%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
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
                "x": 893,
                "top": 543,
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
                    "text": "同比 +38%",
                    "size": 28,
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
                "x": 1360,
                "top": 398,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 28,
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
                "x": 1360,
                "top": 1127,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1620,
                "top": 954,
                "anchor": "middle",
                "lineGap": 8,
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
                    "size": 36,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (41%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +22 个百分点",
                    "size": 28,
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
                "x": 1827,
                "top": 531,
                "anchor": "middle",
                "lineGap": 8,
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
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2460,
                "top": 554,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2470,
                "top": 858,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "占收入 27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
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
      "id": "production",
      "value": "19800",
      "literal": "19.8K",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "deliveries",
      "value": "19200",
      "literal": "19.2K",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ]
});
