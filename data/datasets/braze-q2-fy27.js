(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "braze-q2-fy27",
  "name": "Braze · Q2 FY27",
  "company": "Braze",
  "meta": {
    "title": "Braze Q2 FY27 Income Statement",
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2077.08251953125,
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "periodX": 2457.33837890625,
    "periodY": 298.21435546875,
    "periodNoteY": 339.88623046875,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/braze-q2-fy27.png",
      "width": 2667,
      "height": 1500
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 208.0,
      "type": "source",
      "valueText": "$208M",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Professional services & others",
      "value": 20.0,
      "type": "source",
      "valueText": "$20M",
      "notes": [
        "+135% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 227.0,
      "type": "hub",
      "valueText": "$227M",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 152.0,
      "type": "profit",
      "valueText": "$152M",
      "notes": [
        "67% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 75.0,
      "type": "cost",
      "valueText": "($75M)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 18.0,
      "type": "cost",
      "valueText": "($18M)",
      "notes": [
        "(8%) margin",
        "+14pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 170.0,
      "type": "cost",
      "valueText": "($170M)",
      "notes": []
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 93.0,
      "type": "cost",
      "valueText": "($93M)",
      "notes": [
        "41% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 45.0,
      "type": "cost",
      "valueText": "($45M)",
      "notes": [
        "20% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 32.0,
      "type": "cost",
      "valueText": "($32M)",
      "notes": [
        "14% of revenue",
        "(6pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 208,
      "y0": 689.539306640625,
      "y1": 815.857177734375,
      "sourceWidth": 321.65478515625,
      "targetWidth": 321.65478515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 20,
      "y0": 1080.213134765625,
      "y1": 991.660400390625,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 152,
      "y0": 772.23193359375,
      "y1": 650.471923828125,
      "sourceWidth": 234.404296875,
      "targetWidth": 233.10205078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 75,
      "y0": 948.03515625,
      "y1": 1035.936767578125,
      "sourceWidth": 117.2021484375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 152,
      "y0": 650.471923828125,
      "y1": 768.976318359375,
      "sourceWidth": 233.10205078125,
      "targetWidth": 233.10205078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 18,
      "y0": 998.82275390625,
      "y1": 899.85205078125,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 93,
      "y0": 724.048828125,
      "y1": 565.1748046875,
      "sourceWidth": 143.2470703125,
      "targetWidth": 143.2470703125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 45,
      "y0": 830.8330078125,
      "y1": 830.8330078125,
      "sourceWidth": 70.3212890625,
      "targetWidth": 70.3212890625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 32,
      "y0": 890.085205078125,
      "y1": 1063.93505859375,
      "sourceWidth": 48.18310546875,
      "targetWidth": 49.4853515625,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 1.54316162109375,
    "nodes": {
      "subscription": {
        "x": 354.2109375,
        "y": 528.7119140625,
        "width": 72.92578125,
        "height": 321.65478515625
      },
      "services": {
        "x": 354.2109375,
        "y": 1065.2373046875,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "revenue": {
        "x": 821.71728515625,
        "y": 655.02978515625,
        "width": 72.92578125,
        "height": 351.6064453125
      },
      "gross_profit": {
        "x": 1289.2236328125,
        "y": 533.9208984375,
        "width": 72.92578125,
        "height": 233.10205078125
      },
      "cost_of_revenue": {
        "x": 1289.2236328125,
        "y": 977.98681640625,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "operating_loss": {
        "x": 1549.6728515625,
        "y": 984.498046875,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "operating_expenses": {
        "x": 1756.72998046875,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 261.75146484375
      },
      "sm": {
        "x": 2222.93408203125,
        "y": 493.55126953125,
        "width": 72.92578125,
        "height": 143.2470703125
      },
      "rnd": {
        "x": 2222.93408203125,
        "y": 795.67236328125,
        "width": 72.92578125,
        "height": 70.3212890625
      },
      "ga": {
        "x": 2222.93408203125,
        "y": 1039.1923828125,
        "width": 72.92578125,
        "height": 49.4853515625
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 389.37158203125,
            "top": 432.345703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 184.9189453125,
            "top": 665.9567382812501,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 389.37158203125,
            "top": 964.96435546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+135% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 191.43017578125,
            "top": 1008.4890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "& others",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 858.18017578125,
            "top": 502.6669921875,
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
                "text": "+26% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1325.6865234375,
            "top": 345.09521484375,
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
                "text": "67% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1325.6865234375,
            "top": 1106.9091796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1586.1357421875,
            "top": 1026.169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(8%) margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+14pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1793.19287109375,
            "top": 487.0400390625,
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
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 487.0400390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "41% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 773.5341796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "development",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "20% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 1022.26318359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "& admin",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<rect x=\"63.81005859375\" y=\"1177.23046875\" width=\"240.91552734375\" height=\"147.15380859375\" rx=\"28.6494140625\" fill=\"#8618d5\"/><rect x=\"315.1435546875\" y=\"1170.71923828125\" width=\"559.9658203125\" height=\"161.478515625\" rx=\"28.6494140625\" fill=\"#8618d5\"/><g fill=\"white\"><text x=\"184.9189453125\" y=\"1229.3203125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" >DBNR</text><text x=\"184.9189453125\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" data-operating-metric=\"dbnr\">110%</text><text x=\"184.9189453125\" y=\"1300.94384765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" >+2pp Y/Y</text><text x=\"468.80859375\" y=\"1242.3427734375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" >Customers</text><text x=\"606.8466796875\" y=\"1242.3427734375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"customers\">2,789</text><text x=\"742.2802734375\" y=\"1242.3427734375\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" >(+15% Y/Y)</text><text x=\"487.0400390625\" y=\"1285.31689453125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" >Customers &gt; $500K</text><text x=\"664.1455078125\" y=\"1285.31689453125\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"large_customers\">361</text><text x=\"772.23193359375\" y=\"1285.31689453125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" >(+28% Y/Y)</text></g><g fill=\"#707070\"><text x=\"337.28173828125\" y=\"1364.75390625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" >DBNR = Dollar Based Net Retention</text></g>",
  "operatingMetrics": [
    {
      "id": "dbnr",
      "value": "110",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "110%"
    },
    {
      "id": "customers",
      "value": "2789",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "2,789"
    },
    {
      "id": "large_customers",
      "value": "361",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "361"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/braze/company-q2-fy27.png",
      "x": 599.033203125,
      "y": 244.822265625,
      "width": 507.8759765625,
      "height": 239.61328125,
      "clearance": true
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#606060",
    "noteColor": "#707070",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#8022cd",
        "label": "#8022cd"
      },
      "hub": {
        "node": "#8022cd",
        "label": "#8022cd"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00964a"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#981100"
      }
    },
    "linkTint": {
      "source": "#b996dc",
      "hub": "#b996dc",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 28.6494140625,
      "lineGap": 9.11572265625
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "i18n": {
    "zh": {
      "name": "Braze · 2027 财年第二季度",
      "meta": {
        "title": "Braze 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月"
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +21%"
          ]
        },
        "services": {
          "label": "专业服务及其他",
          "notes": [
            "同比 +135%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +26%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 67%",
            "同比 (1pp)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (8%)",
            "同比 +14pp"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 41%",
            "同比 (5pp)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 20%",
            "同比 (3pp)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 14%",
            "同比 (6pp)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 389.37158203125,
                "top": 432.345703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 184.9189453125,
                "top": 665.9567382812501,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 389.37158203125,
                "top": 964.96435546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +135%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 191.43017578125,
                "top": 1008.4890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "及其他",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 858.18017578125,
                "top": 502.6669921875,
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
                    "text": "同比 +26%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1325.6865234375,
                "top": 345.09521484375,
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
                    "text": "毛利率 67%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1pp)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1325.6865234375,
                "top": 1106.9091796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1586.1357421875,
                "top": 1026.169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (8%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +14pp",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1793.19287109375,
                "top": 487.0400390625,
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
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 487.0400390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "营销",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 41%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (5pp)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 773.5341796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 20%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (3pp)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 1022.26318359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "及行政",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (6pp)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<rect x=\"63.81005859375\" y=\"1177.23046875\" width=\"240.91552734375\" height=\"147.15380859375\" rx=\"28.6494140625\" fill=\"#8618d5\"/><rect x=\"315.1435546875\" y=\"1170.71923828125\" width=\"559.9658203125\" height=\"161.478515625\" rx=\"28.6494140625\" fill=\"#8618d5\"/><g fill=\"white\"><text x=\"184.9189453125\" y=\"1229.3203125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" >DBNR</text><text x=\"184.9189453125\" y=\"1268.3876953125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" data-operating-metric=\"dbnr\">110%</text><text x=\"184.9189453125\" y=\"1300.94384765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" font-weight=\"400\" >同比 +2pp</text><text x=\"468.80859375\" y=\"1242.3427734375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"800\" >客户数</text><text x=\"606.8466796875\" y=\"1242.3427734375\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"customers\">2,789</text><text x=\"742.2802734375\" y=\"1242.3427734375\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" >(同比 +15%)</text><text x=\"487.0400390625\" y=\"1285.31689453125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"800\" >客户 &gt; $500K</text><text x=\"664.1455078125\" y=\"1285.31689453125\" text-anchor=\"middle\" font-size=\"31.25390625\" font-weight=\"400\" data-operating-metric=\"large_customers\">361</text><text x=\"772.23193359375\" y=\"1285.31689453125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" >(同比 +28%)</text></g><g fill=\"#707070\"><text x=\"337.28173828125\" y=\"1364.75390625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" >DBNR = 按金额计算的净留存率</text></g>"
    },
    "preservedAnnotationText": [
      "DBNR"
    ]
  }
});})();