window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "datadog-q2-fy23",
  "name": "Datadog · Q2 FY23",
  "company": "Datadog",
  "meta": {
    "company": "Datadog",
    "title": "Datadog Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/datadog-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2252.8857421875,
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
        "node": "#632ca6",
        "label": "#632ca6"
      },
      "hub": {
        "node": "#632ca6",
        "label": "#632ca6"
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
      "source": "#b299cf",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 7
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"123.713\" y=\"1178.533\" width=\"183.617\" height=\"167.99\" rx=\"39.067\" fill=\"#632ca6\"/><rect x=\"319.05\" y=\"1178.533\" width=\"434.95\" height=\"167.99\" rx=\"39.067\" fill=\"#632ca6\"/><text x=\"214.871\" y=\"1234.529\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"214.871\" y=\"1274.899\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"#ffffff\">&gt; 120%</text><text x=\"214.871\" y=\"1316.571\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"#ffffff\">-10pp Q/Q</text><text x=\"337.282\" y=\"1220.205\" font-size=\"28.649\" font-weight=\"800\" fill=\"#ffffff\">Customers</text><text data-operating-metric=\"customers\" x=\"460.995\" y=\"1254.063\" font-size=\"28.649\" fill=\"#ffffff\">26,100</text><text x=\"566.477\" y=\"1254.063\" font-size=\"27.347\" fill=\"#ffffff\">+29% Y/Y</text><text x=\"337.282\" y=\"1298.339\" font-size=\"27.347\" font-weight=\"800\" fill=\"#ffffff\">&gt; $100K</text><text data-operating-metric=\"large_customers\" x=\"460.995\" y=\"1298.339\" font-size=\"28.649\" fill=\"#ffffff\">2,990</text><text x=\"566.477\" y=\"1298.339\" font-size=\"27.347\" fill=\"#ffffff\">+23% Y/Y</text><text x=\"208.359\" y=\"1384.288\" font-size=\"27.347\" fill=\"#666666\">DBNR = Dollar Based Net Retention</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/datadog/company-wordmark.png",
      "x": 536.525390625,
      "y": 291.703125,
      "width": 605.54443359375,
      "height": 156.26953125
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "north_america": {
        "x": 380.255859375,
        "y": 552.15234375,
        "width": 71.62353515625,
        "height": 183.61669921875
      },
      "international": {
        "x": 380.255859375,
        "y": 970.17333984375,
        "width": 71.62353515625,
        "height": 78.134765625
      },
      "revenue": {
        "x": 847.76220703125,
        "y": 698.00390625,
        "width": 71.62353515625,
        "height": 261.75146484375
      },
      "gross_profit": {
        "x": 1310.0595703125,
        "y": 634.19384765625,
        "width": 71.62353515625,
        "height": 208.359375
      },
      "cost_of_revenue": {
        "x": 1311.36181640625,
        "y": 974.080078125,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "operating_loss": {
        "x": 1606.9716796875,
        "y": 1113.42041015625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "operating_expenses": {
        "x": 1781.47265625,
        "y": 708.421875,
        "width": 71.62353515625,
        "height": 220.07958984375
      },
      "rnd": {
        "x": 2248.97900390625,
        "y": 552.15234375,
        "width": 71.62353515625,
        "height": 122.4111328125
      },
      "sm": {
        "x": 2248.97900390625,
        "y": 836.0419921875,
        "width": 71.62353515625,
        "height": 75.5302734375
      },
      "ga": {
        "x": 2248.97900390625,
        "y": 1129.04736328125,
        "width": 71.62353515625,
        "height": 22.13818359375
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 884.22509765625,
            "top": 549.5478515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 27.34716796875,
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
            "x": 1350.42919921875,
            "top": 446.67041015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "80% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "Unchanged",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1350.42919921875,
            "top": 1039.1923828125,
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
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1646.0390625,
            "top": 1135.55859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(4%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1817.935546875,
            "top": 552.15234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2439.10693359375,
            "top": 569.08154296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "47% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2439.10693359375,
            "top": 841.2509765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "29% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2439.10693359375,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "north_america": {
        "blocks": [
          {
            "x": 416.71875,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 214.87060546875,
            "top": 599.033203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "North",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "America",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 416.71875,
            "top": 873.80712890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+33% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 214.87060546875,
            "top": 985.63623046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "International",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "North America",
      "value": 356,
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#632ca6",
      "linkTint": "#b299cf"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 153,
      "notes": [
        "+33% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#632ca6",
      "linkTint": "#b299cf"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 509,
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#632ca6",
      "labelColor": "#632ca6",
      "linkTint": "#b299cf"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 408,
      "notes": [
        "80% margin",
        "Unchanged"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 101,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating loss",
      "value": -22,
      "notes": [
        "(4%) margin",
        "(4pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Operating expenses",
      "value": 430,
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 239,
      "notes": [
        "47% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 147,
      "notes": [
        "29% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 43,
      "notes": [
        "8% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 356,
      "sourceWidth": 183.61669921875,
      "targetWidth": 183.61669921875,
      "y0": 643.960693359375,
      "y1": 789.812255859375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 153,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "y0": 1009.24072265625,
      "y1": 920.68798828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 408,
      "sourceWidth": 209.66162109375,
      "targetWidth": 208.359375,
      "y0": 802.834716796875,
      "y1": 738.37353515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 101,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 933.71044921875,
      "y1": 1000.125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 408,
      "sourceWidth": 208.359375,
      "targetWidth": 208.359375,
      "y0": 738.37353515625,
      "y1": 812.6015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 22,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "y0": 1119.280517578125,
      "y1": 922.641357421875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 239,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "y0": 769.62744140625,
      "y1": 613.35791015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 147,
      "sourceWidth": 76.83251953125,
      "targetWidth": 75.5302734375,
      "y0": 869.249267578125,
      "y1": 873.80712890625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 43,
      "sourceWidth": 20.8359375,
      "targetWidth": 22.13818359375,
      "y0": 918.08349609375,
      "y1": 1140.116455078125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "DBNR"
    ],
    "zh": {
      "name": "Datadog · 2023 财年第二季度",
      "meta": {
        "title": "Datadog 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "",
        "titleSize": 111.9931640625,
        "titleTextLength": 1953.369140625
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"123.713\" y=\"1178.533\" width=\"183.617\" height=\"167.99\" rx=\"39.067\" fill=\"#632ca6\"/><rect x=\"319.05\" y=\"1178.533\" width=\"434.95\" height=\"167.99\" rx=\"39.067\" fill=\"#632ca6\"/><text x=\"214.871\" y=\"1234.529\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"800\" fill=\"#ffffff\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"214.871\" y=\"1274.899\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"#ffffff\">&gt; 120%</text><text x=\"214.871\" y=\"1316.571\" text-anchor=\"middle\" font-size=\"18.231\" fill=\"#ffffff\">环比 -10 个百分点</text><text x=\"337.282\" y=\"1220.205\" font-size=\"28.649\" font-weight=\"800\" fill=\"#ffffff\">客户数</text><text data-operating-metric=\"customers\" x=\"460.995\" y=\"1254.063\" font-size=\"28.649\" fill=\"#ffffff\">26,100</text><text x=\"566.477\" y=\"1254.063\" font-size=\"27.347\" fill=\"#ffffff\">同比 +29%</text><text x=\"337.282\" y=\"1298.339\" font-size=\"27.347\" font-weight=\"800\" fill=\"#ffffff\">&gt; $100K 客户</text><text data-operating-metric=\"large_customers\" x=\"460.995\" y=\"1298.339\" font-size=\"28.649\" fill=\"#ffffff\">2,990</text><text x=\"566.477\" y=\"1298.339\" font-size=\"27.347\" fill=\"#ffffff\">同比 +23%</text><text x=\"208.359\" y=\"1384.288\" font-size=\"27.347\" fill=\"#666666\">DBNR = 美元净留存率</text></g>",
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +22%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +33%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +25%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 80%",
            "保持不变"
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
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 47%",
            "同比 +3 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 29%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 8%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 884.22509765625,
                "top": 549.5478515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.34716796875,
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
                "x": 1350.42919921875,
                "top": 446.67041015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 80%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "保持不变",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1350.42919921875,
                "top": 1039.1923828125,
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
                "x": 1646.0390625,
                "top": 1135.55859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1817.935546875,
                "top": 552.15234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2439.10693359375,
                "top": 569.08154296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 47%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2439.10693359375,
                "top": 841.2509765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销",
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
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2439.10693359375,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "north_america": {
            "blocks": [
              {
                "x": 416.71875,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 214.87060546875,
                "top": 620.380693359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 416.71875,
                "top": 873.80712890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +33%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 214.87060546875,
                "top": 985.63623046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "dbnr",
      "value": "120",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 120%"
    },
    {
      "id": "customers",
      "value": "26100",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "26,100"
    },
    {
      "id": "large_customers",
      "value": "2990",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,990"
    }
  ]
});
