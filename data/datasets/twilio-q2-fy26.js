(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "twilio-q2-fy26",
  "name": "Twilio · Q2 FY26",
  "company": "Twilio",
  "meta": {
    "company": "Twilio",
    "title": "Twilio Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/twilio-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoX": 574.29052734375,
    "logoY": 272.13541666666663,
    "logoWidth": 612.0556640625,
    "logoHeight": 190.10416666666666,
    "logoViewBox": "0 0 470 146",
    "logoSvg": "<g fill=\"#f22f46\"><circle cx=\"73\" cy=\"73\" r=\"69\"/><circle cx=\"73\" cy=\"73\" r=\"50\" fill=\"#f2f2f2\"/><circle cx=\"56\" cy=\"56\" r=\"14\"/><circle cx=\"90\" cy=\"56\" r=\"14\"/><circle cx=\"56\" cy=\"90\" r=\"14\"/><circle cx=\"90\" cy=\"90\" r=\"14\"/><text x=\"151\" y=\"115\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"112\" font-weight=\"800\" textLength=\"306\" lengthAdjust=\"spacingAndGlyphs\">twilio</text></g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#001489",
        "label": "#001489"
      },
      "hub": {
        "node": "#001489",
        "label": "#001489"
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
      "source": "#858ec2",
      "hub": "#858ec2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 961,
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 538,
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 1499,
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 726,
      "notes": [
        "48% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 773,
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": "Operating profit",
      "value": 85,
      "notes": [
        "6% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 641,
      "notes": []
    },
    {
      "id": "tax_benefit",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Tax benefit",
      "value": 992,
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 8,
      "type": "profit",
      "label": "Net profit",
      "value": 1067,
      "notes": [
        "71% margin",
        "+69pp Y/Y"
      ]
    },
    {
      "id": "other",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "Other",
      "value": 9,
      "notes": []
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "R&D",
      "value": 273,
      "notes": [
        "18% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "S&M",
      "value": 217,
      "notes": [
        "14% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 118,
      "notes": [
        "8% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "other_opex",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 33,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 961,
      "sourceWidth": 218.75,
      "targetWidth": 218.75,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 538,
      "sourceWidth": 122.39583333333333,
      "targetWidth": 122.39583333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 726,
      "sourceWidth": 165.36458333333331,
      "targetWidth": 165.36458333333331,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 773,
      "sourceWidth": 175.78125,
      "targetWidth": 174.47916666666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 85,
      "sourceWidth": 18.229166666666664,
      "targetWidth": 18.229166666666664,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 641,
      "sourceWidth": 147.13541666666666,
      "targetWidth": 145.83333333333331,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 76,
      "sourceWidth": 16.927083333333332,
      "targetWidth": 16.927083333333332,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 9,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 992,
      "sourceWidth": 225.26041666666666,
      "targetWidth": 225.26041666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 273,
      "sourceWidth": 62.5,
      "targetWidth": 61.197916666666664,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 217,
      "sourceWidth": 49.479166666666664,
      "targetWidth": 49.479166666666664,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 118,
      "sourceWidth": 27.34375,
      "targetWidth": 27.34375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 33,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 6.510416666666666,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 0.175,
    "nodes": {
      "united_states": {
        "x": 415.41650390625,
        "y": 589.84375,
        "width": 72.92578125,
        "height": 218.75
      },
      "international": {
        "x": 415.41650390625,
        "y": 1022.1354166666666,
        "width": 72.92578125,
        "height": 122.39583333333333
      },
      "revenue": {
        "x": 882.9228515625,
        "y": 705.7291666666666,
        "width": 72.92578125,
        "height": 341.1458333333333
      },
      "gross_profit": {
        "x": 1350.42919921875,
        "y": 584.6354166666666,
        "width": 72.92578125,
        "height": 165.36458333333331
      },
      "cost_of_revenue": {
        "x": 1350.42919921875,
        "y": 970.0520833333333,
        "width": 72.92578125,
        "height": 174.47916666666666
      },
      "operating_profit": {
        "x": 1817.935546875,
        "y": 516.9270833333333,
        "width": 71.62353515625,
        "height": 18.229166666666664
      },
      "operating_expenses": {
        "x": 1817.935546875,
        "y": 729.1666666666666,
        "width": 71.62353515625,
        "height": 145.83333333333331
      },
      "tax_benefit": {
        "x": 2082.29150390625,
        "y": 294.2708333333333,
        "width": 72.92578125,
        "height": 225.26041666666666
      },
      "net_profit": {
        "x": 2284.1396484375,
        "y": 333.3333333333333,
        "width": 72.92578125,
        "height": 242.1875
      },
      "other": {
        "x": 2284.1396484375,
        "y": 708.3333333333333,
        "width": 72.92578125,
        "height": 1.3020833333333333
      },
      "rnd": {
        "x": 2284.1396484375,
        "y": 813.8020833333333,
        "width": 72.92578125,
        "height": 61.197916666666664
      },
      "sm": {
        "x": 2284.1396484375,
        "y": 993.4895833333333,
        "width": 72.92578125,
        "height": 49.479166666666664
      },
      "ga": {
        "x": 2284.1396484375,
        "y": 1157.5520833333333,
        "width": 72.92578125,
        "height": 27.34375
      },
      "other_opex": {
        "x": 2284.1396484375,
        "y": 1332.03125,
        "width": 72.92578125,
        "height": 6.510416666666666
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 451.87939453125,
            "top": 492.1875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 214.87060546875,
            "top": 675.6583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "United States",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 451.87939453125,
            "top": 924.4791666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 214.87060546875,
            "top": 1061.1979166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "International",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 919.3857421875,
            "top": 557.2916666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.34375,
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
            "x": 1386.89208984375,
            "top": 397.13541666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "48% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1853.09619140625,
            "top": 330.72916666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "6% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2118.75439453125,
            "top": 204.42708333333331,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 369.79166666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "71% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+69pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 670.5729166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 804.6875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "18% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34375,
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
            "x": 2487.2900390625,
            "top": 968.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34375,
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
            "x": 2487.2900390625,
            "top": 1132.8125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 1296.875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1386.89208984375,
            "top": 1160.15625,
            "anchor": "middle",
            "lineGap": 13.020833333333332,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.854166666666664,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 33.854166666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
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
            "x": 1853.09619140625,
            "top": 888.0208333333333,
            "anchor": "middle",
            "lineGap": 13.020833333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 33.854166666666664,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 33.854166666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"143\" y=\"887\" width=\"147\" height=\"122\" rx=\"28\" fill=\"#001489\"/><text x=\"216.5\" y=\"927\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">DBNE</text><text data-operating-metric=\"dbne\" x=\"216.5\" y=\"960\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">116%</text><text x=\"216.5\" y=\"990\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+8pp Y/Y</text><text x=\"46\" y=\"1044\" font-size=\"21\" fill=\"#777777\">DBNE = Dollar Based Net Expansion</text></g></g>",
  "operatingMetrics": [
    {
      "id": "dbne",
      "label": "DBNE",
      "value": "116",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "116%",
      "basis": "unspecified",
      "notes": [
        "+8pp Y/Y"
      ],
      "quote": "DBNE\n116%\n+8pp Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          186,
          1155,
          191,
          159
        ]
      }
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "DBNE"
    ],
    "zh": {
      "name": "Twilio · 2026 财年第二季度",
      "meta": {
        "title": "Twilio 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 114.58333333333333
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +22%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +22%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 48%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "tax_benefit": {
          "label": "税项收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 71%",
            "同比 +69 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "rnd": {
          "label": "研发 (R&D)",
          "notes": [
            "占收入 18%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场 (S&M)",
          "notes": [
            "占收入 14%",
            "同比 (4 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用 (G&A)",
          "notes": [
            "占收入 8%",
            "同比 (0 个百分点)"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 451.87939453125,
                "top": 492.1875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 214.87060546875,
                "top": 675.6583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "美国",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 451.87939453125,
                "top": 924.4791666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 214.87060546875,
                "top": 1061.1979166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "国际",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 919.3857421875,
                "top": 557.2916666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.34375,
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
                "x": 1386.89208984375,
                "top": 397.13541666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 48%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1853.09619140625,
                "top": 330.72916666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2118.75439453125,
                "top": 204.42708333333331,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "税项收益",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 369.79166666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 71%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +69 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 670.5729166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 804.6875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发 (R&D)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34375,
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
                "x": 2487.2900390625,
                "top": 968.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场 (S&M)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34375,
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
                "x": 2487.2900390625,
                "top": 1132.8125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "管理费用 (G&A)",
                    "size": 25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 1296.875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1386.89208984375,
                "top": 1160.15625,
                "anchor": "middle",
                "lineGap": 13.020833333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.854166666666664,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 33.854166666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
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
                "x": 1853.09619140625,
                "top": 888.0208333333333,
                "anchor": "middle",
                "lineGap": 13.020833333333332,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33.854166666666664,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 33.854166666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"143\" y=\"887\" width=\"147\" height=\"122\" rx=\"28\" fill=\"#001489\"/><text x=\"216.5\" y=\"927\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">DBNE</text><text data-operating-metric=\"dbne\" x=\"216.5\" y=\"960\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">116%</text><text x=\"216.5\" y=\"990\" text-anchor=\"middle\" font-size=\"16\" fill=\"white\">同比 +8 个百分点</text><text x=\"46\" y=\"1044\" font-size=\"21\" fill=\"#777777\">DBNE = 基于美元的净扩张率</text></g></g>"
    }
  }
});})();
