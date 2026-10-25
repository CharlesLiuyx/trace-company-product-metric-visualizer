window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hubspot-q3-fy24",
  "name": "HubSpot · Q3 FY24",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2265.908203125,
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
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 654,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+20% Y/Y",
        "87% gross margin"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 15,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+28% Y/Y",
        "5% gross margin"
      ],
      "color": "#ff7a59",
      "labelColor": "#ff7a59"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 670,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 570,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "85% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 99,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 10,
      "type": "cost",
      "col": 3,
      "order": 5,
      "notes": [
        "(1%) margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 580,
      "type": "cost",
      "col": 4,
      "order": 6,
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 310,
      "type": "cost",
      "col": 5,
      "order": 7,
      "notes": [
        "46% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 191,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "29% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 78,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "12% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 1,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "0% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 654,
      "sourceWidth": 309.9345703125,
      "targetWidth": 309.9345703125,
      "y0": 739.67578125,
      "y1": 839.94873046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ca5ae"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 15,
      "sourceWidth": 6.51123046875,
      "targetWidth": 7.8134765625,
      "y0": 1115.373779296875,
      "y1": 998.82275390625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7bcad"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 570,
      "sourceWidth": 270.8671875,
      "targetWidth": 272.16943359375,
      "y0": 820.4150390625,
      "y1": 720.793212890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 99,
      "sourceWidth": 46.880859375,
      "targetWidth": 45.57861328125,
      "y0": 979.2890625,
      "y1": 1097.142333984375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 570,
      "sourceWidth": 272.16943359375,
      "targetWidth": 270.8671875,
      "y0": 720.793212890625,
      "y1": 821.71728515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 10,
      "sourceWidth": 3.90673828125,
      "targetWidth": 5.208984375,
      "y0": 1073.701904296875,
      "y1": 959.75537109375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 310,
      "sourceWidth": 147.15380859375,
      "targetWidth": 145.8515625,
      "y0": 759.860595703125,
      "y1": 544.3388671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 191,
      "sourceWidth": 91.1572265625,
      "targetWidth": 89.85498046875,
      "y0": 879.01611328125,
      "y1": 796.323486328125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 78,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "y0": 942.826171875,
      "y1": 1030.07666015625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 0.9115722656249999,
      "y0": 961.708740234375,
      "y1": 1228.4738525390626,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "subscription": {
        "x": 389.37158203125,
        "y": 584.70849609375,
        "width": 72.92578125,
        "height": 309.9345703125
      },
      "professional_services": {
        "x": 389.37158203125,
        "y": 1112.1181640625,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "revenue": {
        "x": 856.8779296875,
        "y": 684.9814453125,
        "width": 71.62353515625,
        "height": 317.748046875
      },
      "gross_profit": {
        "x": 1323.08203125,
        "y": 584.70849609375,
        "width": 72.92578125,
        "height": 272.16943359375
      },
      "cost_of_revenue": {
        "x": 1321.77978515625,
        "y": 1074.35302734375,
        "width": 71.62353515625,
        "height": 45.57861328125
      },
      "operating_loss": {
        "x": 1580.9267578125,
        "y": 1071.74853515625,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "operating_expenses": {
        "x": 1790.58837890625,
        "y": 686.28369140625,
        "width": 72.92578125,
        "height": 276.076171875
      },
      "sm": {
        "x": 2258.0947265625,
        "y": 471.4130859375,
        "width": 71.62353515625,
        "height": 145.8515625
      },
      "rnd": {
        "x": 2256.79248046875,
        "y": 751.39599609375,
        "width": 71.62353515625,
        "height": 89.85498046875
      },
      "ga": {
        "x": 2258.0947265625,
        "y": 1011.84521484375,
        "width": 71.62353515625,
        "height": 36.462890625
      },
      "restructuring": {
        "x": 2258.0947265625,
        "y": 1228.01806640625,
        "width": 71.62353515625,
        "height": 0.9115722656249999
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 335.9794921875,
            "top": 690.1904296875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Subscription",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "87% gross margin",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 1014.44970703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.67724609375,
            "top": 1015.751953125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "services",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "5% gross margin",
                "size": 27.34716796875,
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
            "x": 892.03857421875,
            "top": 541.734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 27.34716796875,
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
            "x": 1359.544921875,
            "top": 399.78955078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "85% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1358.24267578125,
            "top": 1139.46533203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1617.3896484375,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1827.05126953125,
            "top": 527.40966796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
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
            "x": 2445.6181640625,
            "top": 485.73779296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "46% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2445.6181640625,
            "top": 737.0712890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "29% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2445.6181640625,
            "top": 981.8935546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 1212.39111328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "customers",
      "value": "238000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "238K"
    },
    {
      "id": "average_revenue",
      "value": "11.235",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,235"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"white\"><rect x=\"113\" y=\"943\" width=\"438\" height=\"85\" rx=\"27\" fill=\"#33475b\"/><text x=\"135\" y=\"978\" font-weight=\"700\">Customers</text><text x=\"319\" y=\"978\" data-operating-metric=\"customers\">238K</text><text x=\"394\" y=\"978\">+23% Y/Y</text><text x=\"135\" y=\"1010\" font-weight=\"700\">Average Revenue</text><text x=\"341\" y=\"1010\" data-operating-metric=\"average_revenue\">$11,235</text><text x=\"437\" y=\"1010\">(2%) Y/Y</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 579.49951171875,
      "y": 247.4267578125,
      "width": 612.0556640625,
      "height": 178.40771484375
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2024 财年第三季度",
      "meta": {
        "title": "HubSpot 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "titleSize": 111.9931640625,
        "titleTextLength": 1940.3466796875
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +20%",
            "毛利率 87%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +28%",
            "毛利率 5%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +20%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 85%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 46%",
            "同比 (4 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 29%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 +1 个百分点"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 0%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 425.83447265625,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 335.9794921875,
                "top": 690.1904296875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 87%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 425.83447265625,
                "top": 1014.44970703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.67724609375,
                "top": 1015.751953125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 5%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 892.03857421875,
                "top": 541.734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 27.34716796875,
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
                "x": 1359.544921875,
                "top": 399.78955078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 85%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
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
                "x": 1358.24267578125,
                "top": 1139.46533203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1617.3896484375,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 1827.05126953125,
                "top": 527.40966796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 485.73779296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 46%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2445.6181640625,
                "top": 737.0712890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 29%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
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
                "x": 2445.6181640625,
                "top": 981.8935546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 1212.39111328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Arial,sans-serif\" font-size=\"23\" fill=\"white\"><rect x=\"113\" y=\"943\" width=\"438\" height=\"85\" rx=\"27\" fill=\"#33475b\"/><text x=\"135\" y=\"978\" font-weight=\"700\">客户数</text><text x=\"319\" y=\"978\" data-operating-metric=\"customers\">238K</text><text x=\"394\" y=\"978\">同比 +23%</text><text x=\"135\" y=\"1010\" font-weight=\"700\">平均收入</text><text x=\"341\" y=\"1010\" data-operating-metric=\"average_revenue\">$11,235</text><text x=\"437\" y=\"1010\">同比 (2%)</text></g></g>"
    }
  }
});
