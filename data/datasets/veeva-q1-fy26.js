(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "veeva-q1-fy26",
  "name": "Veeva Systems · Q1 FY26",
  "company": "Veeva Systems",
  "meta": {
    "company": "Veeva Systems",
    "title": "Veeva Q1 FY26 Income Statement",
    "period": "Q1 FY26",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/veeva-q1-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2109.639,
    "periodX": 2435.2,
    "periodY": 257.845,
    "periodNoteY": 300.819
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "subtitleColor": "#59595b",
    "noteColor": "#898b8d",
    "palette": {
      "source": {
        "node": "#fa9917",
        "label": "#898b8d"
      },
      "hub": {
        "node": "#fa9917",
        "label": "#898b8d"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      }
    },
    "linkTint": {
      "source": "#f5ce98",
      "hub": "#f5ce98",
      "cost": "#df8585",
      "profit": "#99cc99"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.067,
      "value": 39.067,
      "note": 27.347,
      "lineGap": 15.627
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "commercial",
      "label": [
        "Commercial",
        "solutions"
      ],
      "value": 305,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "rnd_solutions",
      "label": [
        "R&D",
        "solutions"
      ],
      "value": 329,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "subscription",
      "label": [
        "Subscription"
      ],
      "value": 635,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": [
        "Services"
      ],
      "value": 124,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 759,
      "type": "hub",
      "col": 0,
      "order": 4,
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": [
        "Gross profit"
      ],
      "value": 585,
      "type": "profit",
      "col": 0,
      "order": 5,
      "notes": [
        "77% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 174,
      "type": "cost",
      "col": 0,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": [
        "Operating profit"
      ],
      "value": 234,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "31% margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 351,
      "type": "cost",
      "col": 0,
      "order": 8,
      "notes": []
    },
    {
      "id": "other",
      "label": [
        "Other"
      ],
      "value": 65,
      "type": "profit",
      "col": 0,
      "order": 9,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": [
        "Net profit"
      ],
      "value": 228,
      "type": "profit",
      "col": 0,
      "order": 10,
      "notes": [
        "30% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 71,
      "type": "cost",
      "col": 0,
      "order": 11,
      "notes": []
    },
    {
      "id": "rnd",
      "label": [
        "R&D"
      ],
      "value": 184,
      "type": "cost",
      "col": 0,
      "order": 12,
      "notes": [
        "24% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": [
        "S&M"
      ],
      "value": 99,
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": [
        "13% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": [
        "G&A"
      ],
      "value": 69,
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": [
        "9% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "commercial",
      "target": "subscription",
      "value": 305,
      "sourceWidth": 152.363,
      "targetWidth": 152.363,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f5ce98"
    },
    {
      "source": "rnd_solutions",
      "target": "subscription",
      "value": 329,
      "sourceWidth": 165.385,
      "targetWidth": 166.688,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f5ce98"
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 635,
      "sourceWidth": 319.05,
      "targetWidth": 317.748,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f5ce98"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 124,
      "sourceWidth": 63.81,
      "targetWidth": 62.508,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f5ce98"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 585,
      "sourceWidth": 293.005,
      "targetWidth": 294.308,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 174,
      "sourceWidth": 87.25,
      "targetWidth": 87.25,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 234,
      "sourceWidth": 117.202,
      "targetWidth": 117.202,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 351,
      "sourceWidth": 177.105,
      "targetWidth": 175.803,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 163,
      "sourceWidth": 82.042,
      "targetWidth": 82.042,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 71,
      "sourceWidth": 35.161,
      "targetWidth": 35.161,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 65,
      "sourceWidth": 32.556,
      "targetWidth": 32.556,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 184,
      "sourceWidth": 92.459,
      "targetWidth": 92.459,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 99,
      "sourceWidth": 49.485,
      "targetWidth": 49.485,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 69,
      "sourceWidth": 33.858,
      "targetWidth": 35.161,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "layout": {
    "scale": 0.501,
    "nodes": {
      "commercial": {
        "x": 371.14,
        "y": 506.574,
        "width": 72.926,
        "height": 152.363
      },
      "rnd_solutions": {
        "x": 371.14,
        "y": 859.482,
        "width": 72.926,
        "height": 165.385
      },
      "subscription": {
        "x": 746.187,
        "y": 627.683,
        "width": 72.926,
        "height": 319.05
      },
      "services": {
        "x": 747.489,
        "y": 1121.234,
        "width": 72.926,
        "height": 63.81
      },
      "revenue": {
        "x": 1118.629,
        "y": 721.444,
        "width": 72.926,
        "height": 380.256
      },
      "gross_profit": {
        "x": 1492.374,
        "y": 628.985,
        "width": 72.926,
        "height": 294.308
      },
      "cost_of_revenue": {
        "x": 1488.467,
        "y": 1101.7,
        "width": 72.926,
        "height": 87.25
      },
      "operating_profit": {
        "x": 1884.35,
        "y": 514.387,
        "width": 72.926,
        "height": 117.202
      },
      "operating_expenses": {
        "x": 1884.35,
        "y": 823.02,
        "width": 72.926,
        "height": 175.803
      },
      "other": {
        "x": 2107.034,
        "y": 338.584,
        "width": 72.926,
        "height": 32.556
      },
      "net_profit": {
        "x": 2239.863,
        "y": 368.536,
        "width": 72.926,
        "height": 114.598
      },
      "tax": {
        "x": 2239.863,
        "y": 699.306,
        "width": 72.926,
        "height": 35.161
      },
      "rnd": {
        "x": 2239.863,
        "y": 868.598,
        "width": 72.926,
        "height": 92.459
      },
      "sm": {
        "x": 2239.863,
        "y": 1071.749,
        "width": 72.926,
        "height": 49.485
      },
      "ga": {
        "x": 2239.863,
        "y": 1242.343,
        "width": 72.926,
        "height": 35.161
      }
    },
    "labels": {
      "commercial": {
        "blocks": [
          {
            "x": 408.905,
            "top": 408.905,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359,
            "top": 487.178,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 39.067,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "rnd_solutions": {
        "blocks": [
          {
            "x": 408.905,
            "top": 761.814,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359,
            "top": 854.412,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "R&D",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 39.067,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 781.348,
            "top": 479.227,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 781.348,
            "top": 1196.764,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Services",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.347,
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
            "x": 1155.092,
            "top": 572.988,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 27.347,
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
            "x": 1528.837,
            "top": 433.461,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "77% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.347,
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
            "x": 1528.837,
            "top": 1201.973,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "Cost of",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1920.813,
            "top": 320.166,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "31% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
                "size": 27.347,
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
            "x": 1920.813,
            "top": 1014.45,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "Operating",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2143.497,
            "top": 247.427,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2436.502,
            "top": 347.7,
            "anchor": "middle",
            "lineGap": 15.627,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "30% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2436.502,
            "top": 678.47,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2436.502,
            "top": 847.762,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.347,
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
            "x": 2436.502,
            "top": 1036.588,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "13% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
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
            "x": 2436.502,
            "top": 1217.6,
            "anchor": "middle",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "weight": 800
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
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "logo",
      "href": "data/assets/raster-annotations/veeva/logo-q1-fy26.png",
      "x": 843.855,
      "y": 274.774,
      "width": 562.57,
      "height": 144.549,
      "clearance": true
    },
    {
      "key": "crm",
      "href": "data/assets/raster-annotations/veeva/crm-q1-fy26.png",
      "x": 70.321,
      "y": 610.753,
      "width": 270.867,
      "height": 50.788,
      "clearance": true
    },
    {
      "key": "vault",
      "href": "data/assets/raster-annotations/veeva/vault-q1-fy26.png",
      "x": 62.508,
      "y": 977.987,
      "width": 283.89,
      "height": 55.997,
      "clearance": true
    }
  ],
  "i18n": {
    "zh": {
      "name": "Veeva Systems · 2026 财年第一季度",
      "meta": {
        "title": "Veeva 2026 财年第一季度利润表",
        "period": "2026 财年第一季度",
        "periodNote": "截至 2025 年 4 月",
        "titleTextLength": 1888.257
      },
      "nodes": {
        "commercial": {
          "label": [
            "商业化",
            "解决方案"
          ],
          "notes": [
            "同比 +17%"
          ]
        },
        "rnd_solutions": {
          "label": [
            "研发",
            "解决方案"
          ],
          "notes": [
            "同比 +21%"
          ]
        },
        "subscription": {
          "label": [
            "订阅"
          ],
          "notes": [
            "同比 +19%"
          ]
        },
        "services": {
          "label": [
            "服务"
          ],
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +17%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "毛利率 77%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": [
            "营业利润"
          ],
          "notes": [
            "营业利润率 31%",
            "同比 +7 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": [
            "其他"
          ],
          "notes": []
        },
        "net_profit": {
          "label": [
            "净利润"
          ],
          "notes": [
            "净利率 30%",
            "同比 +5 个百分点"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ],
          "notes": []
        },
        "rnd": {
          "label": [
            "研发"
          ],
          "notes": [
            "占收入 24%",
            "同比 (1 个百分点)"
          ]
        },
        "sm": {
          "label": [
            "销售与市场"
          ],
          "notes": [
            "占收入 13%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": [
            "管理费用"
          ],
          "notes": [
            "占收入 9%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial": {
            "blocks": [
              {
                "x": 408.905,
                "top": 408.905,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359,
                "top": 487.178,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "商业化",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.067,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "rnd_solutions": {
            "blocks": [
              {
                "x": 408.905,
                "top": 761.814,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359,
                "top": 854.412,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "研发",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.067,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 781.348,
                "top": 479.227,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 781.348,
                "top": 1196.764,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.347,
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
                "x": 1155.092,
                "top": 572.988,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.347,
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
                "x": 1528.837,
                "top": 433.461,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 77%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.347,
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
                "x": 1528.837,
                "top": 1201.973,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "收入",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1920.813,
                "top": 320.166,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "营业利润率 31%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 27.347,
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
                "x": 1920.813,
                "top": 1014.45,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "营业",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2143.497,
                "top": 247.427,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2436.502,
                "top": 347.7,
                "anchor": "middle",
                "lineGap": 15.627,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "净利率 30%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2436.502,
                "top": 678.47,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2436.502,
                "top": 847.762,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.347,
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
                "x": 2436.502,
                "top": 1036.588,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.347,
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
                "x": 2436.502,
                "top": 1217.6,
                "anchor": "middle",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.254,
                    "weight": 800
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
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
