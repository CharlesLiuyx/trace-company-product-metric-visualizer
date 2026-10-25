window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hubspot-q2-fy24",
  "name": "HubSpot · Q2 FY24",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
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
      "name": 39.0673828125,
      "value": 36.462890625,
      "note": 27.34716796875,
      "lineGap": 10.41796875
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 624,
      "type": "source",
      "col": 0,
      "notes": [
        "+20% Y/Y",
        "87% gross margin"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 13,
      "type": "source",
      "col": 0,
      "notes": [
        "+18% Y/Y",
        "(3%) gross margin"
      ],
      "color": "#ff7a59",
      "labelColor": "#ff7a59"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 637,
      "type": "hub",
      "col": 1,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 542,
      "type": "profit",
      "col": 2,
      "notes": [
        "85% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 96,
      "type": "cost",
      "col": 2,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 24,
      "type": "cost",
      "col": 3,
      "notes": [
        "(4%) margin",
        "+18pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 566,
      "type": "cost",
      "col": 3,
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 294,
      "type": "cost",
      "col": 4,
      "notes": [
        "46% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 198,
      "type": "cost",
      "col": 4,
      "notes": [
        "31% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 73,
      "type": "cost",
      "col": 4,
      "notes": [
        "11% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 1,
      "type": "cost",
      "col": 4,
      "notes": [
        "0% of revenue",
        "(12pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 624,
      "sourceWidth": 295.60986328125,
      "targetWidth": 296.912109375,
      "y0": 723.397705078125,
      "y1": 834.73974609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ca5ae"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 13,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 1091.933349609375,
      "y1": 986.451416015625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7bcad"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 542,
      "sourceWidth": 257.8447265625,
      "targetWidth": 256.54248046875,
      "y0": 815.2060546875,
      "y1": 703.864013671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 96,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "y0": 966.917724609375,
      "y1": 1077.608642578125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 542,
      "sourceWidth": 256.54248046875,
      "targetWidth": 256.54248046875,
      "y0": 703.864013671875,
      "y1": 814.554931640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 24,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "y0": 1007.287353515625,
      "y1": 948.686279296875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 294,
      "sourceWidth": 139.34033203125,
      "targetWidth": 139.34033203125,
      "y0": 755.953857421875,
      "y1": 597.079833984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 198,
      "sourceWidth": 95.06396484375,
      "targetWidth": 93.76171875,
      "y0": 873.156005859375,
      "y1": 876.41162109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 73,
      "sourceWidth": 33.207275390625,
      "targetWidth": 33.8583984375,
      "y0": 937.2916259765625,
      "y1": 1123.83837890625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1,
      "sourceWidth": 0.651123046875,
      "targetWidth": 0.651123046875,
      "y0": 954.2208251953125,
      "y1": 1323.0169189453125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "customers",
      "value": "228000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "228K"
    },
    {
      "id": "average_revenue",
      "value": "11.215",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,215"
    }
  ],
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"147.154\" y=\"1228.018\" width=\"569.082\" height=\"110.691\" rx=\"33.858\" fill=\"#33475b\"/><text x=\"240.916\" y=\"1272.294\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"411.51\" y=\"1272.294\" font-size=\"31.254\" fill=\"white\">228K</text><text x=\"493.551\" y=\"1272.294\" font-size=\"31.254\" fill=\"white\">+23% Y/Y</text><text x=\"178.408\" y=\"1313.966\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">Average Revenue</text><text data-operating-metric=\"average_revenue\" x=\"449.275\" y=\"1313.966\" font-size=\"31.254\" fill=\"white\">$11,215</text><text x=\"576.895\" y=\"1313.966\" font-size=\"31.254\" fill=\"white\">(2%) Y/Y</text><text x=\"171.896\" y=\"1435.075\" font-size=\"39.067\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 586.0107421875,
      "y": 244.822265625,
      "width": 596.4287109375,
      "height": 173.19873046875
    }
  ],
  "layout": {
    "nodes": {
      "subscription": {
        "x": 385.46484375,
        "y": 575.5927734375,
        "width": 72.92578125,
        "height": 295.60986328125
      },
      "professional_services": {
        "x": 385.46484375,
        "y": 1088.677734375,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "revenue": {
        "x": 852.97119140625,
        "y": 686.28369140625,
        "width": 72.92578125,
        "height": 303.42333984375
      },
      "gross_profit": {
        "x": 1317.873046875,
        "y": 575.5927734375,
        "width": 72.92578125,
        "height": 256.54248046875
      },
      "cost_of_revenue": {
        "x": 1320.4775390625,
        "y": 1054.8193359375,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "operating_loss": {
        "x": 1582.22900390625,
        "y": 1001.42724609375,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "operating_expenses": {
        "x": 1789.2861328125,
        "y": 686.28369140625,
        "width": 72.92578125,
        "height": 268.2626953125
      },
      "sm": {
        "x": 2254.18798828125,
        "y": 527.40966796875,
        "width": 72.92578125,
        "height": 139.34033203125
      },
      "rnd": {
        "x": 2254.18798828125,
        "y": 829.53076171875,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "ga": {
        "x": 2254.18798828125,
        "y": 1106.9091796875,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "restructuring": {
        "x": 2254.18798828125,
        "y": 1322.691357421875,
        "width": 72.92578125,
        "height": 0.651123046875
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 481.8310546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "top": 688.88818359375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "87% gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 997.5205078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 335.9794921875,
            "top": 1011.84521484375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "(3%) gross margin",
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
            "x": 889.43408203125,
            "top": 537.82763671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 1354.3359375,
            "top": 385.46484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 1356.9404296875,
            "top": 1119.931640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1618.69189453125,
            "top": 1031.37890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "(4%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+18pp Y/Y",
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
            "x": 1825.7490234375,
            "top": 524.80517578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2446.92041015625,
            "top": 532.61865234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
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
            "x": 2446.92041015625,
            "top": 780.04541015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "31% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 2446.92041015625,
            "top": 1017.05419921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 2446.92041015625,
            "top": 1237.1337890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(12pp) Y/Y",
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
  "i18n": {
    "zh": {
      "name": "HubSpot · 2024 财年第二季度",
      "meta": {
        "title": "HubSpot 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "titleTextLength": 2057.548828125
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
            "同比 +18%",
            "毛利率 (3%)"
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
            "利润率 (4%)",
            "同比 +18 个百分点"
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
            "占收入 31%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (0 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 0%",
            "同比 (12 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 481.8310546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "top": 688.88818359375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 87%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 997.5205078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 335.9794921875,
                "top": 1011.84521484375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 (3%)",
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
                "x": 889.43408203125,
                "top": 537.82763671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 1354.3359375,
                "top": 385.46484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 1356.9404296875,
                "top": 1119.931640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1618.69189453125,
                "top": 1031.37890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +18 个百分点",
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
                "x": 1825.7490234375,
                "top": 524.80517578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2446.92041015625,
                "top": 532.61865234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "size": 36.462890625,
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
                "x": 2446.92041015625,
                "top": 780.04541015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 2446.92041015625,
                "top": 1017.05419921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
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
                "x": 2446.92041015625,
                "top": 1237.1337890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (12 个百分点)",
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
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"147.154\" y=\"1228.018\" width=\"569.082\" height=\"110.691\" rx=\"33.858\" fill=\"#33475b\"/><text x=\"240.916\" y=\"1272.294\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"411.51\" y=\"1272.294\" font-size=\"31.254\" fill=\"white\">228K</text><text x=\"493.551\" y=\"1272.294\" font-size=\"31.254\" fill=\"white\">同比 +23%</text><text x=\"178.408\" y=\"1313.966\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">平均收入</text><text data-operating-metric=\"average_revenue\" x=\"449.275\" y=\"1313.966\" font-size=\"31.254\" fill=\"white\">$11,215</text><text x=\"576.895\" y=\"1313.966\" font-size=\"31.254\" fill=\"white\">同比 (2%)</text><text x=\"171.896\" y=\"1435.075\" font-size=\"39.067\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  }
});
