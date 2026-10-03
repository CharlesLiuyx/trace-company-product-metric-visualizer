window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q4-fy24",
  "name": "J&J · Q4 FY24",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/j-j-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "linkOpacity": 1
  },
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-company-logo.png",
      "x": 840,
      "y": 287,
      "width": 255,
      "height": 237
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medicine-icon.png",
      "x": 20,
      "y": 620,
      "width": 155,
      "height": 176
    },
    {
      "key": "medtech-wordmark",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medtech-wordmark.png",
      "x": 91,
      "y": 1082,
      "width": 330,
      "height": 125
    }
  ],
  "layout": {
    "nodes": {
      "innovative_medicine": {
        "x": 458,
        "y": 602,
        "width": 73,
        "height": 235
      },
      "medtech": {
        "x": 458,
        "y": 1082,
        "width": 73,
        "height": 135
      },
      "revenue": {
        "x": 925,
        "y": 739,
        "width": 72,
        "height": 368
      },
      "gross_profit": {
        "x": 1394,
        "y": 598,
        "width": 74,
        "height": 251
      },
      "cost_of_products_sold": {
        "x": 1394,
        "y": 1093,
        "width": 74,
        "height": 117
      },
      "interest": {
        "x": 1677,
        "y": 411,
        "width": 73,
        "height": 5
      },
      "pretax_income": {
        "x": 1860,
        "y": 465,
        "width": 72,
        "height": 65
      },
      "operating_expenses": {
        "x": 1857,
        "y": 804,
        "width": 72,
        "height": 195
      },
      "net_profit": {
        "x": 2326,
        "y": 350,
        "width": 73,
        "height": 57
      },
      "tax": {
        "x": 2326,
        "y": 648,
        "width": 73,
        "height": 8
      },
      "sga": {
        "x": 2326,
        "y": 890,
        "width": 73,
        "height": 106
      },
      "rnd": {
        "x": 2326,
        "y": 1091,
        "width": 73,
        "height": 88
      },
      "other_opex": {
        "x": 2326,
        "y": 1288,
        "width": 73,
        "height": 1.5
      }
    },
    "labels": {
      "innovative_medicine": {
        "blocks": [
          {
            "x": 494.5,
            "top": 505,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 310,
            "top": 673,
            "anchor": "middle",
            "lineGap": 6,
            "lines": [
              {
                "text": "Innovative",
                "size": 40,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "Medicine",
                "size": 40,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "medtech": {
        "blocks": [
          {
            "x": 494.5,
            "top": 986,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7% Y/Y",
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
            "x": 961,
            "top": 587,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Sales",
                "size": 39,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5% Y/Y",
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
            "x": 1431,
            "top": 410,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "68% margin",
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
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1896,
            "top": 278,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "23% margin",
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
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 1713.5,
            "top": 323,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1893,
            "top": 1007,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Expenses",
                "size": 34,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2526,
            "top": 290,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Net income",
                "size": 39,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "19% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28,
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
            "x": 2526,
            "top": 611,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2526,
            "top": 1098,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2526,
            "top": 1248,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "cost_of_products_sold": {
        "blocks": [
          {
            "x": 1431,
            "top": 1224,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Cost of",
                "size": 34,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "products sold",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2526,
            "top": 861,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Sales,",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "marketing &",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "innovative_medicine",
      "label": "Innovative Medicine",
      "value": 14.3,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$14.3B"
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 8.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$8.2B"
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 22.5,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$22.5B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 15.4,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "68% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$15.4B"
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 7.1,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($7.1B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.9,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "23% margin",
        "(5pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$3.9B"
    },
    {
      "id": "operating_expenses",
      "label": "Expenses",
      "value": 11.9,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($11.9B)"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.3,
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [],
      "color": "#2ca02c",
      "valueText": "$0.3B"
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 3.4,
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "19% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$3.4B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.5,
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.5B)"
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 6.5,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($6.5B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 5.3,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($5.3B)"
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#d797c3",
      "valueText": "($0.1B)"
    }
  ],
  "links": [
    {
      "source": "innovative_medicine",
      "target": "revenue",
      "value": 14.3,
      "sourceWidth": 235,
      "targetWidth": 235,
      "y0": 719.5,
      "y1": 856.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#ababab"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 8.2,
      "sourceWidth": 135,
      "targetWidth": 133,
      "y0": 1149.5,
      "y1": 1040.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#ababab"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 15.4,
      "sourceWidth": 251,
      "targetWidth": 251,
      "y0": 864.5,
      "y1": 723.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ec88e"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 7.1,
      "sourceWidth": 117,
      "targetWidth": 117,
      "y0": 1048.5,
      "y1": 1151.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 3.9,
      "sourceWidth": 58,
      "targetWidth": 61,
      "y0": 627.0,
      "y1": 499.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8ec88e"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 11.9,
      "sourceWidth": 193,
      "targetWidth": 195,
      "y0": 752.5,
      "y1": 901.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "interest",
      "target": "pretax_income",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 4,
      "y0": 413.5,
      "y1": 467.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ec88e"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 3.4,
      "sourceWidth": 57,
      "targetWidth": 57,
      "y0": 493.5,
      "y1": 378.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ec88e"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 8,
      "targetWidth": 8,
      "y0": 526.0,
      "y1": 652.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 6.5,
      "sourceWidth": 107,
      "targetWidth": 106,
      "y0": 857.5,
      "y1": 943.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 5.3,
      "sourceWidth": 86,
      "targetWidth": 88,
      "y0": 954.0,
      "y1": 1135.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 1.5,
      "y0": 998.0,
      "y1": 1288.75,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#de7878"
    }
  ],
  "i18n": {
    "zh": {
      "name": "强生 · 2024 财年第四季度",
      "meta": {
        "title": "强生 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "titleSize": 112
      },
      "nodes": {
        "innovative_medicine": {
          "label": "创新制药",
          "notes": [
            "同比 +4%"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 68%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_products_sold": {
          "label": "产品销售成本",
          "notes": []
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": [
            "利润率 23%",
            "同比 (5 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "费用",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 19%",
            "同比 (4 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sga": {
          "label": "销售、市场及行政费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "innovative_medicine": {
            "blocks": [
              {
                "x": 494.5,
                "top": 505,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 310,
                "top": 673,
                "anchor": "middle",
                "lineGap": 6,
                "lines": [
                  {
                    "text": "创新",
                    "size": 40,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "制药",
                    "size": 40,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "medtech": {
            "blocks": [
              {
                "x": 494.5,
                "top": 986,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7%",
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
                "x": 961,
                "top": 587,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售额",
                    "size": 39,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5%",
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
                "x": 1431,
                "top": 410,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 68%",
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
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1896,
                "top": 278,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 23%",
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
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 1713.5,
                "top": 323,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1893,
                "top": 1007,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2526,
                "top": 290,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28,
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
                "x": 2526,
                "top": 611,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2526,
                "top": 1098,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2526,
                "top": 1248,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "cost_of_products_sold": {
            "blocks": [
              {
                "x": 1431,
                "top": 1224,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2526,
                "top": 861,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售、市场及",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
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
