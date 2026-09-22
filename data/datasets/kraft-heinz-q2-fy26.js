window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "kraft-heinz-q2-fy26",
  "name": "Kraft Heinz · Q2 FY26",
  "company": "Kraft Heinz",
  "meta": {
    "company": "Kraft Heinz",
    "title": "Kraft Heinz Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kraft-heinz-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
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
    "noteColor": "#787878",
    "palette": {
      "source": {
        "node": "#1d3c6d",
        "label": "#1d3c6d"
      },
      "hub": {
        "node": "#1d3c6d",
        "label": "#1d3c6d"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009751"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#92a0b6",
      "hub": "#92a0b6",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 10
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "North America",
      "value": 4.6,
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "international_developed_markets",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "International",
        "Developed Markets"
      ],
      "value": 0.9,
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "emerging_markets",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Emerging Markets",
      "value": 0.8,
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Net sales",
      "value": 6.3,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 4,
      "type": "profit",
      "label": "Gross profit",
      "value": 2.0,
      "notes": [
        "32% margin",
        "(2pp) Y/Y"
      ],
      "valueText": "$2.0B"
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": [
        "Cost of",
        "sales"
      ],
      "value": 4.2,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -6.4,
      "notes": [
        "(103%) margin",
        "(23pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 8.5,
      "notes": []
    },
    {
      "id": "sga",
      "col": 5,
      "order": 8,
      "type": "cost",
      "label": "SG&A",
      "value": 1.1,
      "notes": [
        "18% of revenue",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "goodwill",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": [
        "Goodwill",
        "impairment"
      ],
      "value": 2.4,
      "notes": [
        "39% of revenue",
        "(66pp) Y/Y"
      ]
    },
    {
      "id": "intangible",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": [
        "Intangible",
        "asset",
        "impairment"
      ],
      "value": 4.9,
      "notes": [
        "78% of revenue",
        "+38pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 4.6,
      "sourceWidth": 238,
      "targetWidth": 239,
      "y0": 610.0,
      "y1": 757.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international_developed_markets",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 45,
      "targetWidth": 45,
      "y0": 901.5,
      "y1": 899.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "emerging_markets",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 41,
      "targetWidth": 40,
      "y0": 1089.5,
      "y1": 942.0,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2,
      "sourceWidth": 105,
      "targetWidth": 105,
      "y0": 690.5,
      "y1": 589.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.2,
      "sourceWidth": 219,
      "targetWidth": 218,
      "y0": 852.5,
      "y1": 928.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2,
      "sourceWidth": 105,
      "targetWidth": 105,
      "y0": 589.5,
      "y1": 699.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 6.4,
      "sourceWidth": 333,
      "targetWidth": 332,
      "y0": 952.5,
      "y1": 918.0,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.1,
      "sourceWidth": 57,
      "targetWidth": 57,
      "y0": 675.5,
      "y1": 515.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "goodwill",
      "value": 2.4,
      "sourceWidth": 125,
      "targetWidth": 125,
      "y0": 766.5,
      "y1": 774.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "intangible",
      "value": 4.9,
      "sourceWidth": 255,
      "targetWidth": 254,
      "y0": 956.5,
      "y1": 1125.0,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 51.5,
    "nodes": {
      "north_america": {
        "x": 469,
        "y": 491,
        "width": 72,
        "height": 238
      },
      "international_developed_markets": {
        "x": 469,
        "y": 879,
        "width": 72,
        "height": 45
      },
      "emerging_markets": {
        "x": 469,
        "y": 1069,
        "width": 72,
        "height": 41
      },
      "revenue": {
        "x": 936,
        "y": 638,
        "width": 72,
        "height": 324
      },
      "gross_profit": {
        "x": 1418,
        "y": 537,
        "width": 72,
        "height": 105
      },
      "cost_of_sales": {
        "x": 1420,
        "y": 819,
        "width": 73,
        "height": 218
      },
      "operating_loss": {
        "x": 1641,
        "y": 786,
        "width": 72,
        "height": 333
      },
      "operating_expenses": {
        "x": 1871,
        "y": 647,
        "width": 72,
        "height": 437
      },
      "sga": {
        "x": 2337,
        "y": 487,
        "width": 73,
        "height": 57
      },
      "goodwill": {
        "x": 2337,
        "y": 712,
        "width": 73,
        "height": 125
      },
      "intangible": {
        "x": 2337,
        "y": 998,
        "width": 73,
        "height": 254
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 505.5,
            "top": 390,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "color": "#1d3c6d"
              },
              {
                "text": "(3%) Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          },
          {
            "x": 287.5,
            "top": 582,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "North America",
                "size": 40,
                "weight": 800,
                "color": "#1d3c6d"
              }
            ]
          }
        ]
      },
      "international_developed_markets": {
        "blocks": [
          {
            "x": 505.5,
            "top": 781,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "color": "#1d3c6d"
              },
              {
                "text": "(4%) Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          },
          {
            "x": 252.0,
            "top": 852,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800,
                "color": "#1d3c6d"
              },
              {
                "text": "Developed Markets",
                "size": 40,
                "weight": 800,
                "color": "#1d3c6d"
              }
            ]
          }
        ]
      },
      "emerging_markets": {
        "blocks": [
          {
            "x": 505.5,
            "top": 969,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "color": "#1d3c6d"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          },
          {
            "x": 264.0,
            "top": 1064,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Emerging Markets",
                "size": 40,
                "weight": 800,
                "color": "#1d3c6d"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 969.0,
            "top": 495,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net sales",
                "size": 40,
                "weight": 800,
                "color": "#1d3c6d"
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#1d3c6d"
              },
              {
                "text": "(1%) Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1459.0,
            "top": 352,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#009751"
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#009751"
              },
              {
                "text": "32% margin",
                "size": 29,
                "color": "#787878"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1456.0,
            "top": 1048,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "sales",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1675.5,
            "top": 1137,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#941100"
              },
              {
                "text": "(103%) margin",
                "size": 29,
                "color": "#787878"
              },
              {
                "text": "(23pp) Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1909.0,
            "top": 481,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2531.5,
            "top": 476,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "SG&A",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#941100"
              },
              {
                "text": "18% of revenue",
                "size": 29,
                "color": "#787878"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          }
        ]
      },
      "goodwill": {
        "blocks": [
          {
            "x": 2530.5,
            "top": 720,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Goodwill",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "impairment",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#941100"
              },
              {
                "text": "39% of revenue",
                "size": 29,
                "color": "#787878"
              },
              {
                "text": "(66pp) Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          }
        ]
      },
      "intangible": {
        "blocks": [
          {
            "x": 2530.5,
            "top": 1045,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Intangible",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "asset",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "impairment",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#941100"
              },
              {
                "text": "78% of revenue",
                "size": 29,
                "color": "#787878"
              },
              {
                "text": "+38pp Y/Y",
                "size": 29,
                "color": "#787878"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "kraft-heinz-company-logo",
      "href": "data/assets/raster-annotations/kraft-heinz/company-logo.png",
      "x": 646,
      "y": 270,
      "width": 610,
      "height": 140
    },
    {
      "key": "kraft-heinz-north-america-kool-aid",
      "href": "data/assets/raster-annotations/kraft-heinz/north-america-kool-aid.png",
      "x": 35,
      "y": 282,
      "width": 118,
      "height": 158
    },
    {
      "key": "kraft-heinz-north-america-condiments",
      "href": "data/assets/raster-annotations/kraft-heinz/north-america-condiments.png",
      "x": 161,
      "y": 298,
      "width": 145,
      "height": 126
    },
    {
      "key": "kraft-heinz-international-developed-maxwell-house",
      "href": "data/assets/raster-annotations/kraft-heinz/international-developed-maxwell-house.png",
      "x": 78,
      "y": 444,
      "width": 90,
      "height": 124
    },
    {
      "key": "kraft-heinz-emerging-markets-home-bake",
      "href": "data/assets/raster-annotations/kraft-heinz/emerging-markets-home-bake.png",
      "x": 190,
      "y": 435,
      "width": 101,
      "height": 87
    }
  ],
  "i18n": {
    "zh": {
      "name": "卡夫亨氏 · 2026 财年第二季度",
      "meta": {
        "title": "卡夫亨氏 2026 财年第二季度利润表",
        "period": "2026 财年第二季度"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 (3%)"
          ]
        },
        "international_developed_markets": {
          "label": "国际发达市场",
          "notes": [
            "同比 (4%)"
          ]
        },
        "emerging_markets": {
          "label": "新兴市场",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "净销售额",
          "notes": [
            "同比 (1%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 32%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (103%)",
            "同比 (23 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及管理费用",
          "notes": [
            "占收入 18%",
            "同比 +4 个百分点"
          ]
        },
        "goodwill": {
          "label": "商誉减值",
          "notes": [
            "占收入 39%",
            "同比 (66 个百分点)"
          ]
        },
        "intangible": {
          "label": "无形资产减值",
          "notes": [
            "占收入 78%",
            "同比 +38 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 505.5,
                "top": 397.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#1d3c6d"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 29,
                    "color": "#787878"
                  }
                ]
              },
              {
                "x": 287.5,
                "top": 586.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "北美",
                    "size": 40,
                    "weight": 800,
                    "color": "#1d3c6d"
                  }
                ]
              }
            ]
          },
          "international_developed_markets": {
            "blocks": [
              {
                "x": 505.5,
                "top": 788.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#1d3c6d"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 29,
                    "color": "#787878"
                  }
                ]
              },
              {
                "x": 252.0,
                "top": 854.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "国际发达",
                    "size": 40,
                    "weight": 800,
                    "color": "#1d3c6d"
                  },
                  {
                    "text": "市场",
                    "size": 40,
                    "weight": 800,
                    "color": "#1d3c6d"
                  }
                ]
              }
            ]
          },
          "emerging_markets": {
            "blocks": [
              {
                "x": 505.5,
                "top": 974.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#1d3c6d"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "color": "#787878"
                  }
                ]
              },
              {
                "x": 264.0,
                "top": 1065.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "新兴市场",
                    "size": 40,
                    "weight": 800,
                    "color": "#1d3c6d"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 969.0,
                "top": 497.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净销售额",
                    "size": 40,
                    "weight": 800,
                    "color": "#1d3c6d"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#1d3c6d"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 29,
                    "color": "#787878"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1459.0,
                "top": 355.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009751"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#009751"
                  },
                  {
                    "text": "利润率 32%",
                    "size": 29,
                    "color": "#787878"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "color": "#787878"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1456.0,
                "top": 1048,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1675.5,
                "top": 1166.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (103%)",
                    "size": 29,
                    "color": "#787878"
                  },
                  {
                    "text": "同比 (23 个百分点)",
                    "size": 29,
                    "color": "#787878"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1909.0,
                "top": 515.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2531.5,
                "top": 469.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "管理费用",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 25,
                    "color": "#787878"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 25,
                    "color": "#787878"
                  }
                ]
              }
            ]
          },
          "goodwill": {
            "blocks": [
              {
                "x": 2530.5,
                "top": 752.0,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "商誉减值",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 39%",
                    "size": 25,
                    "color": "#787878"
                  },
                  {
                    "text": "同比 (66 个百分点)",
                    "size": 25,
                    "color": "#787878"
                  }
                ]
              }
            ]
          },
          "intangible": {
            "blocks": [
              {
                "x": 2530.5,
                "top": 1077.0,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "无形资产",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "减值",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 78%",
                    "size": 25,
                    "color": "#787878"
                  },
                  {
                    "text": "同比 +38 个百分点",
                    "size": 25,
                    "color": "#787878"
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
