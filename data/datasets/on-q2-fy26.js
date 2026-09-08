(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "on-q2-fy26",
  "name": "On · Q2 FY26",
  "company": "On",
  "meta": {
    "company": "On",
    "title": "On Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "CHF",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/on-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1910,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "revenue_by_product:left",
        "revenue_by_product:right",
        "revenue:left",
        "revenue:right"
      ]
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
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
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <text x=\"112\" y=\"297\" fill=\"#155077\" font-size=\"42\" font-weight=\"800\">in CHF (₣)</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "on-company-logo",
      "href": "data/assets/raster-annotations/on/company-logo.png",
      "x": 1279.14,
      "y": 225.04,
      "width": 177.71,
      "height": 289.93
    },
    {
      "key": "on-shoes-product",
      "href": "data/assets/raster-annotations/on/shoes-product.png",
      "x": 136.12,
      "y": 577,
      "width": 233.74,
      "height": 180
    },
    {
      "key": "on-apparel-product",
      "href": "data/assets/raster-annotations/on/apparel-product.png",
      "x": 165.11,
      "y": 870.06,
      "width": 171.78,
      "height": 188.9
    },
    {
      "key": "on-accessories-product",
      "href": "data/assets/raster-annotations/on/accessories-product.png",
      "x": 128,
      "y": 1158,
      "width": 225,
      "height": 110
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "shoes": {
        "x": 398,
        "y": 598,
        "width": 73,
        "height": 272
      },
      "apparel": {
        "x": 398,
        "y": 1077,
        "width": 73,
        "height": 19
      },
      "accessories": {
        "x": 398,
        "y": 1294,
        "width": 73,
        "height": 4
      },
      "revenue_by_product": {
        "x": 710,
        "y": 670,
        "width": 73,
        "height": 295
      },
      "wholesale": {
        "x": 1021,
        "y": 604,
        "width": 73,
        "height": 160
      },
      "direct_to_consumer": {
        "x": 1021,
        "y": 940,
        "width": 73,
        "height": 135
      },
      "revenue": {
        "x": 1332,
        "y": 669,
        "width": 73,
        "height": 295
      },
      "gross_profit": {
        "x": 1644,
        "y": 603,
        "width": 73,
        "height": 194
      },
      "cost_of_sales": {
        "x": 1644,
        "y": 966,
        "width": 73,
        "height": 103
      },
      "operating_profit": {
        "x": 1955,
        "y": 504,
        "width": 73,
        "height": 42
      },
      "operating_expenses": {
        "x": 1955,
        "y": 713,
        "width": 73,
        "height": 152
      },
      "net_profit": {
        "x": 2267,
        "y": 405,
        "width": 73,
        "height": 37
      },
      "other": {
        "x": 2152,
        "y": 513,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2267,
        "y": 641,
        "width": 73,
        "height": 7
      }
    },
    "labels": {
      "shoes": {
        "blocks": [
          {
            "x": 434.5,
            "top": 504,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 241,
            "top": 775,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Shoes",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "apparel": {
        "blocks": [
          {
            "x": 433,
            "top": 984,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+48% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 255,
            "top": 1064,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Apparel",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "accessories": {
        "blocks": [
          {
            "x": 434.5,
            "top": 1200,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+88% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 210,
            "top": 1275,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Accessories",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue_by_product": {
        "blocks": [
          {
            "x": 748.5,
            "top": 524,
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
                "text": "+13% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "wholesale": {
        "blocks": [
          {
            "x": 1062.5,
            "top": 456,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Wholesale",
                "size": 40,
                "weight": 800
              },
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
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 1059,
            "top": 1091,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Direct To Consumer",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
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
            "x": 1373.5,
            "top": 523,
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
                "text": "+13% Y/Y",
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
            "x": 1681.5,
            "top": 421,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "65% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1679,
            "top": 1086,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35,
                "weight": 800,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1997.5,
            "top": 322,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "14% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1989,
            "top": 881,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 35,
                "weight": 800,
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
            "x": 2461,
            "top": 386,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "12% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+18pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2185.5,
            "top": 526,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 35,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2460,
            "top": 602,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
                "size": 35,
                "weight": 800,
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
      }
    }
  },
  "nodes": [
    {
      "id": "shoes",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Shoes",
      "value": 782,
      "valueText": "₣782M",
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "apparel",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Apparel",
      "value": 54,
      "valueText": "₣54M",
      "notes": [
        "+48% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "accessories",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Accessories",
      "value": 15,
      "valueText": "₣15M",
      "notes": [
        "+88% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue_by_product",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 850,
      "valueText": "₣850M",
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "wholesale",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Wholesale",
      "value": 462,
      "valueText": "₣462M",
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "direct_to_consumer",
      "col": 2,
      "order": 1,
      "type": "hub",
      "label": "Direct To Consumer",
      "value": 388,
      "valueText": "₣388M",
      "notes": [
        "+26% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 850,
      "valueText": "₣850M",
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 556,
      "valueText": "₣556M",
      "notes": [
        "65% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 295,
      "valueText": "(₣295M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 119,
      "valueText": "₣119M",
      "notes": [
        "14% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 436,
      "valueText": "(₣436M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 105,
      "valueText": "₣105M",
      "notes": [
        "12% margin",
        "+18pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other",
      "col": 5.5,
      "order": 1,
      "type": "profit",
      "label": "Other",
      "value": 6,
      "valueText": "₣6M",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 21,
      "valueText": "(₣21M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "shoes",
      "target": "revenue_by_product",
      "value": 782,
      "width": 272,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "apparel",
      "target": "revenue_by_product",
      "value": 54,
      "width": 19,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "accessories",
      "target": "revenue_by_product",
      "value": 15,
      "width": 4,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "revenue_by_product",
      "target": "wholesale",
      "value": 462,
      "width": 160,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "revenue_by_product",
      "target": "direct_to_consumer",
      "value": 388,
      "width": 135,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "wholesale",
      "target": "revenue",
      "value": 462,
      "width": 160,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "direct_to_consumer",
      "target": "revenue",
      "value": 388,
      "width": 135,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 556,
      "width": 194,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 295,
      "width": 101,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y1": 1017.5
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 119,
      "width": 42,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 436,
      "width": 152,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 98,
      "width": 35,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 21,
      "width": 7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 6,
      "width": 2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    }
  ],
  "i18n": {
    "zh": {
      "name": "昂跑 · 2026 财年第二季度",
      "meta": {
        "title": "昂跑 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleTextLength": 1820
      },
      "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <text x=\"112\" y=\"297\" fill=\"#155077\" font-size=\"38\" font-weight=\"800\">单位：瑞士法郎</text>\n    </g>",
      "nodes": {
        "shoes": {
          "label": "鞋类",
          "notes": [
            "同比 +11%"
          ]
        },
        "apparel": {
          "label": "服装",
          "notes": [
            "同比 +48%"
          ]
        },
        "accessories": {
          "label": "配饰",
          "notes": [
            "同比 +88%"
          ]
        },
        "revenue_by_product": {
          "label": "收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "wholesale": {
          "label": "批发",
          "notes": [
            "同比 +5%"
          ]
        },
        "direct_to_consumer": {
          "label": "直营消费者业务",
          "notes": [
            "同比 +26%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 65%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 12%",
            "同比 +18 个百分点"
          ]
        },
        "other": {
          "label": "其他"
        },
        "tax": {
          "label": "所得税"
        }
      },
      "layout": {
        "labels": {
          "shoes": {
            "blocks": [
              {
                "x": 434.5,
                "top": 504,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 241,
                "top": 775,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "鞋类",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "apparel": {
            "blocks": [
              {
                "x": 433,
                "top": 984,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +48%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 255,
                "top": 1064,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "服装",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "accessories": {
            "blocks": [
              {
                "x": 434.5,
                "top": 1200,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +88%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 210,
                "top": 1275,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "配饰",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue_by_product": {
            "blocks": [
              {
                "x": 748.5,
                "top": 524,
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
                    "text": "同比 +13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "wholesale": {
            "blocks": [
              {
                "x": 1062.5,
                "top": 456,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "批发",
                    "size": 40,
                    "weight": 800
                  },
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
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 1059,
                "top": 1091,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "直营消费者业务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
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
                "x": 1373.5,
                "top": 523,
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
                    "text": "同比 +13%",
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
                "x": 1681.5,
                "top": 421,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 65%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1679,
                "top": 1086,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35,
                    "weight": 800,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1997.5,
                "top": 322,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 14%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1989,
                "top": 881,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 35,
                    "weight": 800,
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
                "x": 2461,
                "top": 386,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +18 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2185.5,
                "top": 526,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 35,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2460,
                "top": 602,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "所得税",
                    "size": 35,
                    "weight": 800,
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
          }
        }
      }
    }
  }
});})();
