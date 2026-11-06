window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q3-fy26",
  "name": "GM · Q3 FY26",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q3 FY26 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/gm-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 1923,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#09a7db",
        "label": "#09a7db"
      },
      "hub": {
        "node": "#09a7db",
        "label": "#09a7db"
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
      "source": "#89cfe8",
      "hub": "#89cfe8",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 38,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"557\" text-anchor=\"start\" font-size=\"40\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>",
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1120,
      "y": 258,
      "width": 206,
      "height": 204
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 30,
      "y": 590,
      "width": 377,
      "height": 201
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 441,
        "y": 469,
        "width": 72,
        "height": 372
      },
      "gm_international": {
        "x": 441,
        "y": 966,
        "width": 72,
        "height": 37
      },
      "corporate": {
        "x": 441,
        "y": 1126,
        "width": 72,
        "height": 2
      },
      "auto": {
        "x": 815,
        "y": 560,
        "width": 72,
        "height": 409
      },
      "gm_financial": {
        "x": 815,
        "y": 1157,
        "width": 72,
        "height": 39
      },
      "revenue": {
        "x": 1189,
        "y": 644,
        "width": 71,
        "height": 448
      },
      "gross_profit": {
        "x": 1563,
        "y": 568,
        "width": 72,
        "height": 83
      },
      "cost_of_sales": {
        "x": 1563,
        "y": 816,
        "width": 72,
        "height": 364
      },
      "operating_profit": {
        "x": 1936,
        "y": 478,
        "width": 72,
        "height": 31
      },
      "operating_expenses": {
        "x": 1936,
        "y": 678,
        "width": 72,
        "height": 50
      },
      "interest": {
        "x": 2204,
        "y": 443,
        "width": 72,
        "height": 3
      },
      "net_profit": {
        "x": 2310,
        "y": 361,
        "width": 72,
        "height": 30
      },
      "tax": {
        "x": 2310,
        "y": 578,
        "width": 72,
        "height": 5
      },
      "other": {
        "x": 2310,
        "y": 891,
        "width": 72,
        "height": 33
      },
      "sga": {
        "x": 2310,
        "y": 1085,
        "width": 72,
        "height": 18
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 475,
            "top": 374,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 482,
            "top": 872,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 63,
            "top": 962,
            "anchor": "start",
            "lineGap": 11,
            "lines": [
              {
                "text": "GM International",
                "size": 38,
                "weight": 800
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 477,
            "top": 1031,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+235% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 133,
            "top": 1105,
            "anchor": "start",
            "lineGap": 11,
            "lines": [
              {
                "text": "Corporate",
                "size": 38,
                "weight": 800
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 850,
            "top": 1061,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(1%) Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 775,
            "top": 1157,
            "anchor": "end",
            "lineGap": 11,
            "lines": [
              {
                "text": "GM Financial",
                "size": 38,
                "weight": 800
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 850,
            "top": 416,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Auto",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1225,
            "top": 500,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1598,
            "top": 386,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "19% margin",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1974,
            "top": 291,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "7% margin",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492,
            "top": 314,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "7% margin",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+4pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1592,
            "top": 1200,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 34,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1974,
            "top": 742,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 34,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2240,
            "top": 458,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2492,
            "top": 540,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2492,
            "top": 864,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2492,
            "top": 1053,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "gm_north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "GM North America",
      "value": 41.4,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 4.1,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "corporate",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate",
      "value": 0.2,
      "notes": [
        "+235% Y/Y"
      ]
    },
    {
      "id": "auto",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": "Auto",
      "value": 45.7,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "gm_financial",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "GM Financial",
      "value": 4.3,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 50,
      "notes": [
        "+3% Y/Y"
      ],
      "valueText": "$50.0B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.3,
      "notes": [
        "19% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 40.7,
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.6,
      "notes": [
        "7% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "Expenses"
      ],
      "value": 5.7,
      "notes": []
    },
    {
      "id": "interest",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Interest",
      "value": 0.3,
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 3.4,
      "notes": [
        "7% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.6,
      "notes": []
    },
    {
      "id": "other",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 3.7,
      "notes": []
    },
    {
      "id": "sga",
      "col": 6,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 2,
      "notes": [],
      "valueText": "($2.0B)"
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 41.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 372,
      "targetWidth": 370
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 4.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 37,
      "targetWidth": 37
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.2,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 2,
      "targetWidth": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 45.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 409,
      "targetWidth": 409
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 4.3,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 39,
      "targetWidth": 39
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 83,
      "targetWidth": 83
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 40.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 365,
      "targetWidth": 364
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 31,
      "targetWidth": 31
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 52,
      "targetWidth": 50
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 26,
      "targetWidth": 27
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 5,
      "targetWidth": 5
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.3,
      "targetOrder": 1,
      "curve": {
        "c1x": 2287,
        "c2x": 2307
      },
      "sourceWidth": 3,
      "targetWidth": 3
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 33,
      "targetWidth": 33
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 17,
      "targetWidth": 18
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2026 财年第三季度",
      "meta": {
        "title": "GM 2026 财年第三季度利润表",
        "titleSize": 124,
        "titleTextLength": 1650
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44\" y=\"557\" text-anchor=\"start\" font-size=\"40\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g>",
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +2%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 +12%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +235%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +3%"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 (1%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 19%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "interest": {
          "label": "利息收入",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "sga": {
          "label": "销售及管理",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 475,
                "top": 374,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 482,
                "top": 872,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 63,
                "top": 962,
                "anchor": "start",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "通用国际",
                    "size": 38,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 477,
                "top": 1031,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +235%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 133,
                "top": 1105,
                "anchor": "start",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 38,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 850,
                "top": 1061,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 775,
                "top": 1157,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "通用金融",
                    "size": 38,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 850,
                "top": 416,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1225,
                "top": 500,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1598,
                "top": 386,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 19%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1974,
                "top": 291,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 7%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492,
                "top": 314,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 7%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1592,
                "top": 1200,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1974,
                "top": 742,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2240,
                "top": 458,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息收入",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2492,
                "top": 540,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2492,
                "top": 864,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2492,
                "top": 1053,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售及管理",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
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
