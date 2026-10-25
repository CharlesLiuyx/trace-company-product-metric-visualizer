window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hubspot-q2-fy25",
  "name": "HubSpot · Q2 FY25",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2200,
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
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
    "linkTint": {
      "source": "#9ca5ae",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g><rect x=\"147.15380859375\" y=\"1228.01806640625\" width=\"570.3837890625\" height=\"111.9931640625\" rx=\"35.16064453125\" fill=\"#33475b\"/><text x=\"240.91552734375\" y=\"1274.89892578125\" font-size=\"29.95166015625\" fill=\"#ffffff\">Customers</text><text data-operating-metric=\"customers\" x=\"412.81201171875\" y=\"1274.89892578125\" font-size=\"29.95166015625\" fill=\"#ffffff\">268K</text><text x=\"494.853515625\" y=\"1274.89892578125\" font-size=\"29.95166015625\" fill=\"#ffffff\">+18% Y/Y</text><text x=\"178.40771484375\" y=\"1316.57080078125\" font-size=\"29.95166015625\" fill=\"#ffffff\">Average Revenue</text><text data-operating-metric=\"average_revenue\" x=\"449.27490234375\" y=\"1316.57080078125\" font-size=\"29.95166015625\" fill=\"#ffffff\">$11,310</text><text x=\"571.68603515625\" y=\"1316.57080078125\" font-size=\"29.95166015625\" fill=\"#ffffff\">+1% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 597.73095703125,
      "y": 251.33349609375,
      "width": 575.5927734375,
      "height": 164.0830078125
    }
  ],
  "layout": {
    "scale": 0.45708837890625,
    "nodes": {
      "subscription": {
        "x": 393.278,
        "y": 592.522,
        "width": 72.926,
        "height": 341.188
      },
      "professional_services": {
        "x": 393.278,
        "y": 1144.674,
        "width": 72.926,
        "height": 7.813
      },
      "revenue": {
        "x": 860.785,
        "y": 705.817,
        "width": 72.926,
        "height": 347.7
      },
      "gross_profit": {
        "x": 1328.291,
        "y": 588.615,
        "width": 72.926,
        "height": 293.005
      },
      "cost_of_revenue": {
        "x": 1328.291,
        "y": 1099.096,
        "width": 72.926,
        "height": 55.997
      },
      "operating_loss": {
        "x": 1603.065,
        "y": 1039.192,
        "width": 72.926,
        "height": 11.72
      },
      "operating_expenses": {
        "x": 1795.797,
        "y": 695.399,
        "width": 72.926,
        "height": 302.121
      },
      "sm": {
        "x": 2262.001,
        "y": 312.539,
        "width": 72.926,
        "height": 154.967
      },
      "rnd": {
        "x": 2262.001,
        "y": 642.007,
        "width": 72.926,
        "height": 108.086
      },
      "ga": {
        "x": 2262.001,
        "y": 962.36,
        "width": 72.926,
        "height": 39.067
      },
      "restructuring": {
        "x": 2262.001,
        "y": 1234.529,
        "width": 72.926,
        "height": 1.302
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 498.76025390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 333.375,
            "top": 726.6533203125,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Subscription",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "86% gross margin",
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
            "x": 429.7412109375,
            "top": 1049.6103515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.67724609375,
            "top": 1079.56201171875,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Professional",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "services",
                "size": 37.76513671875,
                "weight": 800
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
            "x": 897.24755859375,
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "+19% Y/Y",
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
            "x": 1364.75390625,
            "top": 407.60302734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "84% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1364.75390625,
            "top": 1178.53271484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1639.52783203125,
            "top": 1071.74853515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(3%) margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1832.26025390625,
            "top": 536.525390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
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
            "x": 2463.849609375,
            "top": 308.63232421875,
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
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "45% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2463.849609375,
            "top": 632.8916015625,
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
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "31% of revenue",
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
            "x": 2463.849609375,
            "top": 918.08349609375,
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
                "size": 31.25390625,
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
            "x": 2463.849609375,
            "top": 1186.34619140625,
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
                "text": "(0pp) Y/Y",
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
  "nodes": [
    {
      "id": "subscription",
      "value": 745,
      "label": "Subscription",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+19% Y/Y",
        "86% gross margin"
      ]
    },
    {
      "id": "professional_services",
      "value": 16,
      "label": "Professional services",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+21% Y/Y",
        "5% gross margin"
      ],
      "color": "#ff7a59",
      "labelColor": "#ff7a59",
      "linkTint": "#f7bcad"
    },
    {
      "id": "revenue",
      "value": 761,
      "label": "Revenue",
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "value": 639,
      "label": "Gross profit",
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "84% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "value": 122,
      "label": "Cost of revenue",
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_loss",
      "value": 25,
      "label": "Operating loss",
      "type": "cost",
      "col": 2.6,
      "order": 5,
      "notes": [
        "(3%) margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "value": 663,
      "label": "Operating expenses",
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": []
    },
    {
      "id": "sm",
      "value": 340,
      "label": "Sales & marketing",
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": [
        "45% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "value": 237,
      "label": "Research & development",
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [
        "31% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "value": 85,
      "label": "General & admin",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [
        "11% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "value": 1,
      "label": "Restructuring",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [
        "0% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 745,
      "sourceWidth": 341.1884765625,
      "targetWidth": 339.88623046875,
      "y0": 763.1162109375,
      "y1": 875.760498046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ca5ae"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 16,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "y0": 1148.5810546875,
      "y1": 1049.6103515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7bcad"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 639,
      "sourceWidth": 291.703125,
      "targetWidth": 293.00537109375,
      "y0": 851.6689453125,
      "y1": 735.117919921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 122,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "y0": 1025.518798828125,
      "y1": 1127.093994140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 639,
      "sourceWidth": 293.00537109375,
      "targetWidth": 291.703125,
      "y0": 735.117919921875,
      "y1": 841.2509765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 25,
      "sourceWidth": 11.72021484375,
      "targetWidth": 10.41796875,
      "y0": 1045.052490234375,
      "y1": 992.3115234375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 340,
      "sourceWidth": 154.96728515625,
      "targetWidth": 154.96728515625,
      "y0": 772.883056640625,
      "y1": 390.022705078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 237,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125,
      "y0": 904.409912109375,
      "y1": 696.050537109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 85,
      "sourceWidth": 37.76513671875,
      "targetWidth": 39.0673828125,
      "y0": 977.335693359375,
      "y1": 981.8935546875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "y0": 996.869384765625,
      "y1": 1235.180419921875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2025 财年第二季度",
      "meta": {
        "title": "HubSpot 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "titleSize": 116,
        "titleTextLength": 1880
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +19%",
            "毛利率 86%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +21%",
            "毛利率 5%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 84%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (3%)",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 45%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 31%",
            "同比 +0 个百分点"
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
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 498.76025390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 333.375,
                "top": 726.6533203125,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 86%",
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
                "x": 429.7412109375,
                "top": 1049.6103515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.67724609375,
                "top": 1079.56201171875,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 5%",
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
                "x": 897.24755859375,
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "同比 +19%",
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
                "x": 1364.75390625,
                "top": 407.60302734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 84%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1364.75390625,
                "top": 1178.53271484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1639.52783203125,
                "top": 1071.74853515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (3%)",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1832.26025390625,
                "top": 536.525390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业费用",
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
                "x": 2463.849609375,
                "top": 308.63232421875,
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
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 45%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2463.849609375,
                "top": 632.8916015625,
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
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
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
                "x": 2463.849609375,
                "top": 918.08349609375,
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
                    "size": 31.25390625,
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
                "x": 2463.849609375,
                "top": 1186.34619140625,
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
                    "text": "同比 (0 个百分点)",
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
      "annotationsSvg": "<g><rect x=\"147.15380859375\" y=\"1228.01806640625\" width=\"570.3837890625\" height=\"111.9931640625\" rx=\"35.16064453125\" fill=\"#33475b\"/><text x=\"240.91552734375\" y=\"1274.89892578125\" font-size=\"29.95166015625\" fill=\"#ffffff\">客户数</text><text data-operating-metric=\"customers\" x=\"412.81201171875\" y=\"1274.89892578125\" font-size=\"29.95166015625\" fill=\"#ffffff\">268K</text><text x=\"494.853515625\" y=\"1274.89892578125\" font-size=\"29.95166015625\" fill=\"#ffffff\">同比 +18%</text><text x=\"178.40771484375\" y=\"1316.57080078125\" font-size=\"29.95166015625\" fill=\"#ffffff\">平均收入</text><text data-operating-metric=\"average_revenue\" x=\"449.27490234375\" y=\"1316.57080078125\" font-size=\"29.95166015625\" fill=\"#ffffff\">$11,310</text><text x=\"571.68603515625\" y=\"1316.57080078125\" font-size=\"29.95166015625\" fill=\"#ffffff\">同比 +1%</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "customers",
      "value": "268000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "268K"
    },
    {
      "id": "average_revenue",
      "value": "11.310",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,310"
    }
  ]
});
