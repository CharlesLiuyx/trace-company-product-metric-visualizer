window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hubspot-q3-fy22",
  "name": "HubSpot · Q3 FY22",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2265.908,
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
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#33475b",
        "label": "#33475b"
      },
      "hub": {
        "node": "#33475b",
        "label": "#33475b"
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
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 9.116
    }
  },
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"145.852\" y=\"1226.716\" width=\"572.988\" height=\"113.295\" rx=\"35.161\" fill=\"#33475b\"/><text x=\"175.803\" y=\"1273.597\" font-size=\"28.649\" fill=\"white\">Customers</text><text x=\"345.095\" y=\"1273.597\" font-size=\"28.649\" fill=\"white\" data-operating-metric=\"customers\">158,905</text><text x=\"485.738\" y=\"1273.597\" font-size=\"28.649\" fill=\"white\">+24% Y/Y</text><text x=\"175.803\" y=\"1316.571\" font-size=\"28.649\" fill=\"white\">Average Revenue</text><text x=\"394.581\" y=\"1316.571\" font-size=\"28.649\" fill=\"white\" data-operating-metric=\"average_revenue\">$11,233</text><text x=\"532.619\" y=\"1316.571\" font-size=\"28.649\" fill=\"white\">+7% Y/Y</text><text x=\"170\" y=\"1437\" font-size=\"39\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "customers",
      "label": "Customers",
      "value": "158905",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "158,905",
      "quote": "Customers 158,905 +24% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+24% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          112,
          942,
          440,
          87
        ]
      }
    },
    {
      "id": "average_revenue",
      "label": "Average Revenue",
      "value": "11.233",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,233",
      "quote": "Average Revenue $11,233 +7% Y/Y",
      "basis": "unspecified",
      "notes": [
        "+7% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          112,
          942,
          440,
          87
        ]
      }
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 586.011,
      "y": 247.427,
      "width": 599.033,
      "height": 169.292
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "subscription": {
        "x": 394.581,
        "y": 533.921,
        "width": 72.926,
        "height": 266.96
      },
      "professional_services": {
        "x": 394.581,
        "y": 977.987,
        "width": 72.926,
        "height": 5.209
      },
      "revenue": {
        "x": 858.18,
        "y": 606.847,
        "width": 72.926,
        "height": 270.867
      },
      "gross_profit": {
        "x": 1316.571,
        "y": 530.014,
        "width": 72.926,
        "height": 221.382
      },
      "cost_of_revenue": {
        "x": 1313.966,
        "y": 916.781,
        "width": 72.926,
        "height": 50.788
      },
      "operating_profit": {
        "x": 1536.65,
        "y": 1131.652,
        "width": 72.926,
        "height": 19.534
      },
      "operating_expenses": {
        "x": 1798.402,
        "y": 608.149,
        "width": 72.926,
        "height": 240.916
      },
      "sm": {
        "x": 2243.77,
        "y": 725.351,
        "width": 72.926,
        "height": 140.643
      },
      "rnd": {
        "x": 2248.979,
        "y": 989.707,
        "width": 72.926,
        "height": 69.019
      },
      "ga": {
        "x": 2248.979,
        "y": 1212.391,
        "width": 72.926,
        "height": 29.952
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 431.043,
            "top": 428.555,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#33475b"
              },
              {
                "text": "+32% Y/Y",
                "size": 39.067,
                "weight": 400
              }
            ]
          },
          {
            "x": 334.677,
            "top": 643.865,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.067,
                "weight": 700
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 431.043,
            "top": 871.318,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#ff7a59"
              },
              {
                "text": "+13% Y/Y",
                "size": 39.067,
                "weight": 400
              }
            ]
          },
          {
            "x": 334.677,
            "top": 933.4879999999999,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Professional",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "services",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 894.643,
            "top": 453.182,
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
                "weight": 400,
                "color": "#33475b"
              },
              {
                "text": "+31% Y/Y",
                "size": 28.649,
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
            "x": 1354.336,
            "top": 345.095,
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
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "82% margin",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.649,
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
            "x": 1350.429,
            "top": 980.591,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.067,
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
            "x": 1573.113,
            "top": 1166.812,
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
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(7%) margin",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.649,
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
            "x": 1834.865,
            "top": 445.368,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2435.2,
            "top": 717.538,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Sales &",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "marketing",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "52% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2435.2,
            "top": 964.964,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Research &",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "development",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "26% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.649,
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
            "x": 2435.2,
            "top": 1179.835,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "General &",
                "size": 32.556,
                "weight": 700
              },
              {
                "text": "admin",
                "size": 32.556,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "11% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 435.0,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+32% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 9.0,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#ff7a59",
      "labelColor": "#ff7a59"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 444.0,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 362.0,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "82% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 82.0,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating loss",
      "value": 32.0,
      "type": "cost",
      "col": 3,
      "order": 5,
      "notes": [
        "(7%) margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 394.0,
      "type": "cost",
      "col": 4,
      "order": 6,
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 230.0,
      "type": "cost",
      "col": 5,
      "order": 7,
      "notes": [
        "52% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 114.0,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "26% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 50.0,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "11% of revenue",
        "+1pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 435,
      "sourceWidth": 266.96,
      "targetWidth": 265.658,
      "y0": 667.401,
      "y1": 739.676,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ca5ae"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 9,
      "sourceWidth": 5.209,
      "targetWidth": 5.209,
      "y0": 980.591,
      "y1": 875.109,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7bcad"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 362,
      "sourceWidth": 221.382,
      "targetWidth": 221.382,
      "y0": 717.538,
      "y1": 640.705,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 82,
      "sourceWidth": 49.485,
      "targetWidth": 50.788,
      "y0": 852.971,
      "y1": 942.175,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 362,
      "sourceWidth": 221.382,
      "targetWidth": 221.382,
      "y0": 640.705,
      "y1": 718.84,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "operating_expenses",
      "value": 32,
      "sourceWidth": 19.534,
      "targetWidth": 19.534,
      "y0": 1141.419,
      "y1": 839.298,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 230,
      "sourceWidth": 140.643,
      "targetWidth": 140.643,
      "y0": 678.47,
      "y1": 795.672,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 114,
      "sourceWidth": 70.321,
      "targetWidth": 69.019,
      "y0": 783.952,
      "y1": 1024.217,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 50,
      "sourceWidth": 29.952,
      "targetWidth": 29.952,
      "y0": 834.089,
      "y1": 1227.367,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2022 财年第三季度",
      "meta": {
        "title": "HubSpot 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "titleSize": 114.598,
        "titleTextLength": 2018.481
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"145.852\" y=\"1226.716\" width=\"572.988\" height=\"113.295\" rx=\"35.161\" fill=\"#33475b\"/><text x=\"175.803\" y=\"1273.597\" font-size=\"28.649\" fill=\"white\">客户数</text><text x=\"345.095\" y=\"1273.597\" font-size=\"28.649\" fill=\"white\" data-operating-metric=\"customers\">158,905</text><text x=\"485.738\" y=\"1273.597\" font-size=\"28.649\" fill=\"white\">同比 +24%</text><text x=\"175.803\" y=\"1316.571\" font-size=\"28.649\" fill=\"white\">平均收入</text><text x=\"394.581\" y=\"1316.571\" font-size=\"28.649\" fill=\"white\" data-operating-metric=\"average_revenue\">$11,233</text><text x=\"532.619\" y=\"1316.571\" font-size=\"28.649\" fill=\"white\">同比 +7%</text><text x=\"170\" y=\"1437\" font-size=\"39\" font-weight=\"700\">来源：季度业绩</text></g>",
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +32%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +13%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +31%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业亏损",
          "notes": [
            "利润率 (7%)",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 52%",
            "同比 +2 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 26%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 431.043,
                "top": 428.555,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#33475b"
                  },
                  {
                    "text": "同比 +32%",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 334.677,
                "top": 643.865,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.067,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 431.043,
                "top": 871.318,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#ff7a59"
                  },
                  {
                    "text": "同比 +13%",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 334.677,
                "top": 933.4879999999999,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "服务",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 894.643,
                "top": 453.182,
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
                    "weight": 400,
                    "color": "#33475b"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28.649,
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
                "x": 1354.336,
                "top": 345.095,
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
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 82%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.649,
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
                "x": 1350.429,
                "top": 980.591,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
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
                "x": 1573.113,
                "top": 1166.812,
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
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (7%)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.649,
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
                "x": 1834.865,
                "top": 445.368,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2435.2,
                "top": 717.538,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 52%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2435.2,
                "top": 964.964,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 26%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.649,
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
                "x": 2435.2,
                "top": 1179.835,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.556,
                    "weight": 700
                  },
                  {
                    "text": "",
                    "size": 32.556,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28.649,
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
});
