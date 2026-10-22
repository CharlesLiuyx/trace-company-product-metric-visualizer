window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "atlassian-q4-fy25",
  "name": "Atlassian · Q4 FY25",
  "company": "Atlassian",
  "meta": {
    "company": "Atlassian",
    "title": "Atlassian Q4 FY25 Income Statement",
    "period": "Q4 FY25",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/atlassian-q4-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 203.150390625,
    "titleSize": 125.015625,
    "titleTextLength": 2304.9755859375,
    "periodX": 2452.12939453125,
    "periodY": 274.77392578125,
    "periodNoteY": 316.44580078125,
    "logoWidth": 231.7998046875,
    "logoHeight": 233.10205078125,
    "logoY": 244.822265625,
    "logoViewBox": "0 0 270 245",
    "logoSvg": "\n    <g fill=\"#2684ff\">\n      <path d=\"M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z\"/>\n    </g>\n    <g fill=\"#0052cc\">\n      <path d=\"M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z\"/>\n    </g>\n    <text x=\"136\" y=\"230\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"31\" font-weight=\"800\" fill=\"#0052cc\">ATLASSIAN</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#6f7073",
    "noteColor": "#6f7073",
    "palette": {
      "source": {
        "node": "#0052cc",
        "label": "#0052cc"
      },
      "hub": {
        "node": "#0052cc",
        "label": "#0052cc"
      },
      "profit": {
        "node": "#28a026",
        "label": "#00944c"
      },
      "cost": {
        "node": "#d40000",
        "label": "#8d1300"
      }
    },
    "linkTint": {
      "source": "#80a6dc",
      "hub": "#80a6dc",
      "profit": "#9acd97",
      "cost": "#e48283"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29.000000000000004,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"72.92578125\" y=\"1192.857421875\" width=\"544.3388671875\" height=\"164.0830078125\" rx=\"41.671875\" fill=\"#0052cc\"/><text x=\"345.09521484375\" y=\"1267.08544921875\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"#ffffff\">Customers &gt; $10K Cloud ARR</text><text data-operating-metric=\"cloud_customers\" x=\"287.79638671875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"#ffffff\">52K</text><text x=\"399.78955078125\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"#ffffff\">+13% Y/Y</text></g>",
  "layout": {
    "scale": 0.17200000000000001,
    "nodes": {
      "cloud": {
        "x": 384.16259765625,
        "y": 506.57373046875,
        "width": 72.92578125,
        "height": 191.43017578125
      },
      "data_center": {
        "x": 384.16259765625,
        "y": 890.736328125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "marketplace_services": {
        "x": 384.16259765625,
        "y": 1131.65185546875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "revenue": {
        "x": 851.6689453125,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 285.19189453125
      },
      "gross_profit": {
        "x": 1317.873046875,
        "y": 561.26806640625,
        "width": 72.92578125,
        "height": 235.70654296875
      },
      "cost_of_revenue": {
        "x": 1317.873046875,
        "y": 1020.9609375,
        "width": 72.92578125,
        "height": 48.18310546875
      },
      "operating_loss": {
        "x": 1621.29638671875,
        "y": 962.35986328125,
        "width": 72.92578125,
        "height": 5.7298828125000005
      },
      "operating_expenses": {
        "x": 1782.77490234375,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 242.2177734375
      },
      "rnd": {
        "x": 2251.58349609375,
        "y": 572.98828125,
        "width": 72.92578125,
        "height": 144.54931640625
      },
      "sm": {
        "x": 2251.58349609375,
        "y": 895.9453125,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "ga": {
        "x": 2251.58349609375,
        "y": 1132.9541015625,
        "width": 72.92578125,
        "height": 33.467724609375
      }
    },
    "labels": {
      "cloud": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 408.9052734375,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
                "size": 29.000000000000004,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 221.3818359375,
            "top": 577.80625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Cloud",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "data_center": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 795.67236328125,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 29.000000000000004,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 221.3818359375,
            "top": 905.272265625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Data Center",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "marketplace_services": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 1035.28564453125,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 29.000000000000004,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 220.07958984375,
            "top": 1090.5462890625,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketplace",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Services",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 888.1318359375,
            "top": 503.96923828125,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "+23% Y/Y",
                "size": 29.000000000000004,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1354.3359375,
            "top": 373.74462890625,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "83% margin",
                "size": 29.000000000000004,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29.000000000000004,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1354.3359375,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1657.75927734375,
            "top": 985.80029296875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.000000000000004,
                "weight": 400
              },
              {
                "text": "(2%) margin",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+4pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1819.23779296875,
            "top": 502.6669921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 2444.31591796875,
            "top": 576.89501953125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31.000000000000004,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.000000000000004,
                "weight": 400
              },
              {
                "text": "51% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2444.31591796875,
            "top": 877.7138671875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31.000000000000004,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.000000000000004,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2444.31591796875,
            "top": 1112.1181640625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31.000000000000004,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.000000000000004,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [],
  "nodes": [
    {
      "id": "cloud",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Cloud",
      "value": 928,
      "valueText": "$928M",
      "notes": [
        "+26% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "data_center",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Data Center",
      "value": 381,
      "valueText": "$381M",
      "notes": [
        "+17% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "marketplace_services",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Marketplace",
        "& Services"
      ],
      "value": 76,
      "valueText": "$76M",
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1384,
      "valueText": "$1,384M",
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1150,
      "valueText": "$1,150M",
      "notes": [
        "83% margin",
        "+2pp Y/Y"
      ],
      "color": "#28a026",
      "labelColor": "#00944c",
      "linkTint": "#9acd97"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 234,
      "valueText": "($234M)",
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -28,
      "valueText": "($28M)",
      "notes": [
        "(2%) margin",
        "+4pp Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1178,
      "valueText": "($1,178M)",
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283",
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 701,
      "valueText": "($701M)",
      "notes": [
        "51% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 314,
      "valueText": "($314M)",
      "notes": [
        "23% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 163,
      "valueText": "($163M)",
      "notes": [
        "12% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    }
  ],
  "links": [
    {
      "source": "cloud",
      "target": "revenue",
      "value": 928,
      "width": 191.43017578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 191.43017578125,
      "targetWidth": 191.43017578125,
      "y0": 602.288818359375,
      "y1": 748.140380859375
    },
    {
      "source": "data_center",
      "target": "revenue",
      "value": 381,
      "width": 78.134765625,
      "sourceOrder": 1,
      "targetOrder": 1,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "y0": 929.8037109375,
      "y1": 882.9228515625
    },
    {
      "source": "marketplace_services",
      "target": "revenue",
      "value": 76,
      "width": 15.626953125,
      "sourceOrder": 2,
      "targetOrder": 2,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "y0": 1139.46533203125,
      "y1": 929.8037109375
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1150,
      "width": 235.70654296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd97",
      "sourceWidth": 235.70654296875,
      "targetWidth": 235.70654296875,
      "y0": 770.278564453125,
      "y1": 679.121337890625
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 234,
      "width": 48.18310546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 49.4853515625,
      "targetWidth": 48.18310546875,
      "y0": 912.87451171875,
      "y1": 1045.052490234375
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1150,
      "width": 235.70654296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 235.70654296875,
      "targetWidth": 235.70654296875,
      "y0": 679.121337890625,
      "y1": 783.301025390625
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 28,
      "width": 5.7298828125000005,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 5.7298828125000005,
      "targetWidth": 5.7298828125000005,
      "y0": 965.2248046875001,
      "y1": 904.8005859374999
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 701,
      "width": 144.54931640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 737.722412109375,
      "y1": 645.262939453125
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 314,
      "width": 63.81005859375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 841.902099609375,
      "y1": 927.850341796875
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 163,
      "width": 33.467724609375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "y0": 890.9316650390625,
      "y1": 1149.6879638671876
    }
  ],
  "operatingMetrics": [
    {
      "id": "cloud_customers",
      "label": "Customers > $10K Cloud ARR",
      "value": "52000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "52K",
      "basis": "unspecified",
      "notes": [
        "+13% Y/Y"
      ],
      "quote": "Customers > $10K Cloud ARR\n52K +13% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          73,
          1193,
          544,
          164
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Atlassian · 2025 财年第四季度",
      "meta": {
        "title": "Atlassian 2025 财年第四季度利润表",
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 6 月",
        "titleTextLength": 2304.9755859375
      },
      "nodes": {
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +26%"
          ]
        },
        "data_center": {
          "label": "数据中心",
          "notes": [
            "同比 +17%"
          ]
        },
        "marketplace_services": {
          "label": "市场与服务",
          "notes": [
            "同比 +13%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 83%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (2%)",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 51%",
            "同比 (1 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 23%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "cloud": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 408.9052734375,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
                    "size": 29.000000000000004,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 221.3818359375,
                "top": 577.80625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "云",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "data_center": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 795.67236328125,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 29.000000000000004,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 221.3818359375,
                "top": 905.272265625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "数据中心",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "marketplace_services": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 1035.28564453125,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 29.000000000000004,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 220.07958984375,
                "top": 1090.5462890625,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "市场与",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 888.1318359375,
                "top": 503.96923828125,
                "anchor": "middle",
                "lineGap": 10,
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
                    "text": "同比 +23%",
                    "size": 29.000000000000004,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1354.3359375,
                "top": 373.74462890625,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "毛利率 83%",
                    "size": 29.000000000000004,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29.000000000000004,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1354.3359375,
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1657.75927734375,
                "top": 985.80029296875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.000000000000004,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (2%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1819.23779296875,
                "top": 502.6669921875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
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
                "x": 2444.31591796875,
                "top": 576.89501953125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.000000000000004,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.000000000000004,
                    "weight": 400
                  },
                  {
                    "text": "占收入 51%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2444.31591796875,
                "top": 877.7138671875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.000000000000004,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.000000000000004,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2444.31591796875,
                "top": 1112.1181640625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.000000000000004,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.000000000000004,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"72.92578125\" y=\"1192.857421875\" width=\"544.3388671875\" height=\"164.0830078125\" rx=\"41.671875\" fill=\"#0052cc\"/><text x=\"345.09521484375\" y=\"1267.08544921875\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" fill=\"#ffffff\">Cloud ARR &gt; $10K 的客户数</text><text data-operating-metric=\"cloud_customers\" x=\"287.79638671875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"#ffffff\">52K</text><text x=\"399.78955078125\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"31.25390625\" fill=\"#ffffff\">同比 +13%</text></g>"
    }
  }
});
