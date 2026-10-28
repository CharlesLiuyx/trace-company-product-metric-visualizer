(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "okta-q1-fy25",
  "name": "Okta · Q1 FY25",
  "company": "Okta",
  "meta": {
    "company": "Okta",
    "title": "Okta Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Apr. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/okta-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 203.150390625,
    "titleSize": 127.6201171875,
    "titleWeight": 1041.796875,
    "titleTextLength": 2038.01513671875,
    "periodX": 1341.3134765625,
    "periodY": 1299.6416015625,
    "periodNoteY": 1342.61572265625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155278",
    "noteColor": "#777777",
    "subtitleColor": "#777777",
    "palette": {
      "source": {
        "node": "#00297a",
        "label": "#00297a"
      },
      "hub": {
        "node": "#00297a",
        "label": "#00297a"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#961600"
      }
    },
    "linkTint": {
      "source": "#8598bd",
      "hub": "#8598bd",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 603,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": [
        "Professional",
        "services"
      ],
      "value": 14,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(7%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 617,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 469,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "76% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 148,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 47,
      "type": "cost",
      "col": 3,
      "order": 5,
      "notes": [
        "(8%) margin",
        "+23pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 516,
      "type": "cost",
      "col": 4,
      "order": 6,
      "notes": []
    },
    {
      "id": "sm",
      "label": [
        "Sales &",
        "marketing"
      ],
      "value": 236,
      "type": "cost",
      "col": 5,
      "order": 7,
      "notes": [
        "38% of revenue",
        "(11pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": [
        "Research &",
        "development"
      ],
      "value": 163,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "26% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": [
        "General &",
        "admin"
      ],
      "value": 117,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "19% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 603,
      "width": 317.748046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8598bd"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 14,
      "width": 6.51123046875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8598bd"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 469,
      "width": 247.4267578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 148,
      "width": 76.83251953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 469,
      "width": 247.4267578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 246.12451171875,
      "y1": 733.815673828125,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 47,
      "width": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "targetWidth": 24.74267578125,
      "y1": 869.249267578125,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 236,
      "width": 123.71337890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 163,
      "width": 85.9482421875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 117,
      "width": 61.20556640625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "layout": {
    "scale": 0.52740966796875,
    "nodes": {
      "subscription": {
        "x": 375.046875,
        "y": 453.181640625,
        "width": 71.62353515625,
        "height": 317.748046875
      },
      "professional_services": {
        "x": 375.046875,
        "y": 1026.169921875,
        "width": 71.62353515625,
        "height": 6.51123046875
      },
      "revenue": {
        "x": 842.55322265625,
        "y": 612.0556640625,
        "width": 71.62353515625,
        "height": 324.25927734375
      },
      "gross_profit": {
        "x": 1304.8505859375,
        "y": 453.181640625,
        "width": 71.62353515625,
        "height": 247.4267578125
      },
      "cost_of_revenue": {
        "x": 1310.0595703125,
        "y": 955.8486328125,
        "width": 71.62353515625,
        "height": 78.134765625
      },
      "operating_loss": {
        "x": 1560.0908203125,
        "y": 988.40478515625,
        "width": 71.62353515625,
        "height": 24.74267578125
      },
      "operating_expenses": {
        "x": 1777.56591796875,
        "y": 610.75341796875,
        "width": 71.62353515625,
        "height": 270.8671875
      },
      "sm": {
        "x": 2243.77001953125,
        "y": 436.25244140625,
        "width": 71.62353515625,
        "height": 123.71337890625
      },
      "rnd": {
        "x": 2243.77001953125,
        "y": 737.0712890625,
        "width": 71.62353515625,
        "height": 85.9482421875
      },
      "ga": {
        "x": 2243.77001953125,
        "y": 1009.24072265625,
        "width": 71.62353515625,
        "height": 61.20556640625
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 220.07958984375,
            "top": 588.48828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#00297a"
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 356.8154296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00297a"
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
      "professional_services": {
        "blocks": [
          {
            "x": 218.77734375,
            "top": 981.75986328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#00297a"
              },
              {
                "text": "services",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#00297a"
              }
            ]
          },
          {
            "x": 410.858642578125,
            "top": 927.19921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00297a"
              },
              {
                "text": "(7%) Y/Y",
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
            "x": 879.01611328125,
            "top": 463.599609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#00297a"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00297a"
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
            "x": 1341.3134765625,
            "top": 264.35595703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "76% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1343.91796875,
            "top": 1047.005859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#961600"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1593.94921875,
            "top": 1030.07666015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#961600"
              },
              {
                "text": "(8%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+23pp Y/Y",
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
            "x": 1814.02880859375,
            "top": 444.06591796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#961600"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2448.22265625,
            "top": 438.85693359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "marketing",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#961600"
              },
              {
                "text": "38% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(11pp) Y/Y",
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
            "x": 2448.22265625,
            "top": 735.76904296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "development",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#961600"
              },
              {
                "text": "26% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
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
            "x": 2448.22265625,
            "top": 993.61376953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "admin",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#961600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#961600"
              },
              {
                "text": "19% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
  "annotationsSvg": "<g><rect x=\"31.25390625\" y=\"1084.77099609375\" width=\"148.4560546875\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00297a\"/><rect x=\"186.22119140625\" y=\"1084.77099609375\" width=\"196.63916015625\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00297a\"/><rect x=\"388.0693359375\" y=\"1084.77099609375\" width=\"487.0400390625\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00297a\"/><g fill=\"#ffffff\"><text x=\"105.48193359375\" y=\"1177.23046875\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"crpo\">$1.95B</text><text x=\"283.8896484375\" y=\"1177.23046875\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"dbnr\">&gt; 111%</text><text x=\"647.21630859375\" y=\"1160.30126953125\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"customers\">19,500</text><text x=\"647.21630859375\" y=\"1204.57763671875\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"large_customers\">4,550</text><text x=\"105.48193359375\" y=\"1134.25634765625\" font-size=\"29.95166015625\" font-weight=\"800\" text-anchor=\"middle\" >cRPO</text><text x=\"105.48193359375\" y=\"1216.2978515625\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >+15% Y/Y</text><text x=\"283.8896484375\" y=\"1134.25634765625\" font-size=\"29.95166015625\" font-weight=\"800\" text-anchor=\"middle\" >DBNR</text><text x=\"283.8896484375\" y=\"1216.2978515625\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >Flat Q/Q</text><text x=\"485.73779296875\" y=\"1160.30126953125\" font-size=\"28.6494140625\" font-weight=\"800\" text-anchor=\"middle\" >Customers</text><text x=\"785.25439453125\" y=\"1160.30126953125\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >+6% Y/Y</text><text x=\"497.4580078125\" y=\"1204.57763671875\" font-size=\"26.044921875\" font-weight=\"800\" text-anchor=\"middle\" >&gt; $100K ACV</text><text x=\"786.556640625\" y=\"1204.57763671875\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >+12% Y/Y</text></g><g fill=\"#777777\"><text x=\"436.25244140625\" y=\"1291.828125\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >cRPO = CurrentRemaining Performance Obligation</text><text x=\"436.25244140625\" y=\"1341.3134765625\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >DBNR = Dollar Based Net Retention (TTM)</text><text x=\"436.25244140625\" y=\"1388.1943359375\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >ACV = Annual Contract Value</text></g><g fill=\"#000000\"><text x=\"431.04345703125\" y=\"1436.37744140625\" font-size=\"37.76513671875\" font-weight=\"800\" text-anchor=\"middle\" >Source: Quarterly results</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/okta/company-logo-wordmark-q2-fy27.png",
      "x": 606.8466796875,
      "y": 253.93798828125,
      "width": 523.5029296875,
      "height": 200.5458984375
    }
  ],
  "operatingMetrics": [
    {
      "id": "crpo",
      "value": "1.95",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.95B"
    },
    {
      "id": "dbnr",
      "value": "111",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 111%"
    },
    {
      "id": "customers",
      "value": "19500",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "19,500"
    },
    {
      "id": "large_customers",
      "value": "4550",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "4,550"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Okta · 2025 财年第一季度",
      "meta": {
        "title": "Okta 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 4 月",
        "titleTextLength": 1823.14453125
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +20%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务"
          ],
          "notes": [
            "同比 (7%)"
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
            "利润率 76%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (8%)",
            "同比 +23 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sm": {
          "label": [
            "销售与",
            "市场"
          ],
          "notes": [
            "占收入 38%",
            "同比 (11 个百分点)"
          ]
        },
        "rnd": {
          "label": [
            "研究与",
            "开发"
          ],
          "notes": [
            "占收入 26%",
            "同比 (5 个百分点)"
          ]
        },
        "ga": {
          "label": [
            "一般及",
            "行政"
          ],
          "notes": [
            "占收入 19%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 220.07958984375,
                "top": 588.48828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#00297a"
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 356.8154296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00297a"
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
          "professional_services": {
            "blocks": [
              {
                "x": 218.77734375,
                "top": 981.75986328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#00297a"
                  },
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#00297a"
                  }
                ]
              },
              {
                "x": 410.858642578125,
                "top": 927.19921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00297a"
                  },
                  {
                    "text": "同比 (7%)",
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
                "x": 879.01611328125,
                "top": 463.599609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#00297a"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00297a"
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
                "x": 1341.3134765625,
                "top": 264.35595703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 76%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1343.91796875,
                "top": 1047.005859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#961600"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1593.94921875,
                "top": 1030.07666015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#961600"
                  },
                  {
                    "text": "利润率 (8%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +23 个百分点",
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
                "x": 1814.02880859375,
                "top": 444.06591796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#961600"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2448.22265625,
                "top": 438.85693359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "市场",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#961600"
                  },
                  {
                    "text": "占收入 38%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (11 个百分点)",
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
                "x": 2448.22265625,
                "top": 735.76904296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "开发",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#961600"
                  },
                  {
                    "text": "占收入 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
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
                "x": 2448.22265625,
                "top": 993.61376953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "行政",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#961600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#961600"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
      "annotationsSvg": "<g><rect x=\"31.25390625\" y=\"1084.77099609375\" width=\"148.4560546875\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00297a\"/><rect x=\"186.22119140625\" y=\"1084.77099609375\" width=\"196.63916015625\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00297a\"/><rect x=\"388.0693359375\" y=\"1084.77099609375\" width=\"487.0400390625\" height=\"161.478515625\" rx=\"36.462890625\" fill=\"#00297a\"/><g fill=\"#ffffff\"><text x=\"105.48193359375\" y=\"1177.23046875\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"crpo\">$1.95B</text><text x=\"283.8896484375\" y=\"1177.23046875\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"dbnr\">&gt; 111%</text><text x=\"647.21630859375\" y=\"1160.30126953125\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"customers\">19,500</text><text x=\"647.21630859375\" y=\"1204.57763671875\" font-size=\"29.95166015625\" font-weight=\"400\" text-anchor=\"middle\" data-operating-metric=\"large_customers\">4,550</text><text x=\"105.48193359375\" y=\"1134.25634765625\" font-size=\"29.95166015625\" font-weight=\"800\" text-anchor=\"middle\" >当前RPO</text><text x=\"105.48193359375\" y=\"1216.2978515625\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >同比+15%</text><text x=\"283.8896484375\" y=\"1134.25634765625\" font-size=\"29.95166015625\" font-weight=\"800\" text-anchor=\"middle\" >净留存率</text><text x=\"283.8896484375\" y=\"1216.2978515625\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >环比持平</text><text x=\"485.73779296875\" y=\"1160.30126953125\" font-size=\"28.6494140625\" font-weight=\"800\" text-anchor=\"middle\" >客户数</text><text x=\"785.25439453125\" y=\"1160.30126953125\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >同比+6%</text><text x=\"497.4580078125\" y=\"1204.57763671875\" font-size=\"26.044921875\" font-weight=\"800\" text-anchor=\"middle\" >&gt; $100K 客户</text><text x=\"786.556640625\" y=\"1204.57763671875\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >同比+12%</text></g><g fill=\"#777777\"><text x=\"436.25244140625\" y=\"1291.828125\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >cRPO = 当前剩余履约义务</text><text x=\"436.25244140625\" y=\"1341.3134765625\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >DBNR = 美元口径净留存率（过去12个月）</text><text x=\"436.25244140625\" y=\"1388.1943359375\" font-size=\"27.34716796875\" font-weight=\"400\" text-anchor=\"middle\" >ACV = 年度合同价值</text></g><g fill=\"#000000\"><text x=\"431.04345703125\" y=\"1436.37744140625\" font-size=\"37.76513671875\" font-weight=\"800\" text-anchor=\"middle\" >来源：季度业绩</text></g></g>"
    }
  }
});})();
