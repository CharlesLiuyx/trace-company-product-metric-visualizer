(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "uipath-q3-fy23",
  "name": "UiPath · Q3 FY23",
  "company": "UiPath",
  "meta": {
    "company": "UiPath",
    "title": "UiPath Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/uipath-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2148.7060546875,
    "periodX": 2317.998046875,
    "periodY": 256.54248046875,
    "periodNoteY": 299.5166015625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155579",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "linkTint": {
      "source": "#f7a58e",
      "hub": "#df8587",
      "profit": "#99cb96",
      "cost": "#df8587"
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 37.76513671875,
      "value": 36.462890625,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "licenses",
      "label": "Licenses",
      "value": 118.0,
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#ff4818",
      "labelColor": "#ff4818",
      "notes": [
        "+6% Y/Y",
        "97% gross margin"
      ]
    },
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 130.0,
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#ff4818",
      "labelColor": "#ff4818",
      "notes": [
        "+33% Y/Y",
        "84% gross margin"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 14.0,
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#ff4818",
      "labelColor": "#ff4818",
      "notes": [
        "+28% Y/Y",
        "(31%) gross margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 263.0,
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#ff4818",
      "labelColor": "#ff4818",
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 220.0,
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#299f27",
      "labelColor": "#009450",
      "notes": [
        "84% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 43.0,
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cf0000",
      "labelColor": "#941900",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 67.0,
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cf0000",
      "labelColor": "#941900",
      "notes": [
        "(25%) margin",
        "+27pp Y/Y"
      ],
      "valueText": "($67M)"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 287.0,
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cf0000",
      "labelColor": "#941900",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 156.0,
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cf0000",
      "labelColor": "#941900",
      "notes": [
        "60% of revenue",
        "(19pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 67.0,
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cf0000",
      "labelColor": "#941900",
      "notes": [
        "26% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 63.0,
      "type": "cost",
      "col": 4,
      "order": 10,
      "color": "#cf0000",
      "labelColor": "#941900",
      "notes": [
        "24% of revenue",
        "(3pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "licenses",
      "target": "revenue",
      "value": 118,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "y0": 535.874267578125,
      "y1": 651.774169921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 130,
      "sourceWidth": 102.87744140625,
      "targetWidth": 102.87744140625,
      "y0": 800.230224609375,
      "y1": 749.442626953125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 14,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "y0": 1042.447998046875,
      "y1": 806.741455078125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 220,
      "sourceWidth": 173.19873046875,
      "targetWidth": 173.19873046875,
      "y0": 692.143798828125,
      "y1": 619.218017578125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cb96"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 43,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 795.67236328125,
      "y1": 872.5048828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 220,
      "sourceWidth": 173.19873046875,
      "targetWidth": 173.19873046875,
      "y0": 619.218017578125,
      "y1": 693.446044921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8587"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 67,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 1096.4912109375,
      "y1": 806.09033203125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 156,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "y0": 668.703369140625,
      "y1": 778.092041015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 67,
      "sourceWidth": 53.39208984375,
      "targetWidth": 53.39208984375,
      "y0": 757.256103515625,
      "y1": 1007.287353515625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 63,
      "sourceWidth": 48.18310546875,
      "targetWidth": 49.4853515625,
      "y0": 808.043701171875,
      "y1": 1205.8798828125,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "licenses": {
        "x": 389.37,
        "y": 489.64,
        "width": 72.93,
        "height": 92.46
      },
      "subscription": {
        "x": 389.37,
        "y": 748.79,
        "width": 72.93,
        "height": 102.88
      },
      "professional_services": {
        "x": 389.37,
        "y": 1036.59,
        "width": 72.93,
        "height": 11.72
      },
      "revenue": {
        "x": 856.88,
        "y": 605.54,
        "width": 72.93,
        "height": 207.06
      },
      "gross_profit": {
        "x": 1325.69,
        "y": 532.62,
        "width": 72.93,
        "height": 173.2
      },
      "cost_of_revenue": {
        "x": 1325.69,
        "y": 855.58,
        "width": 72.93,
        "height": 33.86
      },
      "operating_loss": {
        "x": 1535.35,
        "y": 1070.45,
        "width": 72.93,
        "height": 52.09
      },
      "operating_expenses": {
        "x": 1812.73,
        "y": 606.85,
        "width": 72.93,
        "height": 225.29
      },
      "sm": {
        "x": 2258.09,
        "y": 716.24,
        "width": 72.93,
        "height": 123.71
      },
      "rnd": {
        "x": 2258.09,
        "y": 980.59,
        "width": 72.93,
        "height": 53.39
      },
      "ga": {
        "x": 2258.09,
        "y": 1181.14,
        "width": 72.93,
        "height": 49.49
      }
    },
    "labels": {
      "licenses": {
        "blocks": [
          {
            "x": 230.49755859375,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Licenses",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "97% gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 425.83447265625,
            "top": 393.2783203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 230.49755859375,
            "top": 786.556640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Subscription",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "84% gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 425.83447265625,
            "top": 655.02978515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+33% Y/Y",
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
            "x": 230.49755859375,
            "top": 989.70703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Professional",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "services",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(31%) gross margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 425.83447265625,
            "top": 942.826171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
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
            "top": 462.29736328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700
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
            "x": 1362.1494140625,
            "top": 349.001953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700
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
            "x": 1362.1494140625,
            "top": 914.1767578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 700
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
            "x": 1573.11328125,
            "top": 1145.9765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating loss",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(25%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+27pp Y/Y",
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
            "x": 1849.189453125,
            "top": 449.27490234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700
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
            "x": 2448.22265625,
            "top": 720.14208984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "60% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(19pp) Y/Y",
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
            "top": 957.15087890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "26% of revenue",
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
      },
      "ga": {
        "blocks": [
          {
            "x": 2448.22265625,
            "top": 1164.2080078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
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
      "id": "arr",
      "value": "1.110",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.110B"
    },
    {
      "id": "dbnr",
      "value": "126",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "126%"
    },
    {
      "id": "customers",
      "value": "10650",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "10,650"
    },
    {
      "id": "customers_100k",
      "value": "1711",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,711"
    },
    {
      "id": "customers_1m",
      "value": "201",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "201"
    }
  ],
  "annotationsSvg": "<g><g data-typography-role=\"brand\" fill=\"#ff4818\"><rect x=\"658.9365234375\" y=\"261.75146484375\" width=\"151.060546875\" height=\"151.060546875\"/><rect x=\"674.5634765625\" y=\"277.37841796875\" width=\"119.806640625\" height=\"119.806640625\" fill=\"#f2f2f2\"/><text x=\"683.67919921875\" y=\"377.6513671875\" font-size=\"104.1796875\" font-weight=\"800\">Ui</text><text x=\"820.4150390625\" y=\"377.6513671875\" font-size=\"104.1796875\" font-weight=\"800\">Path</text></g><rect x=\"85.9482421875\" y=\"1145.9765625\" width=\"147.15380859375\" height=\"158.8740234375\" rx=\"36.462890625\" fill=\"#ff4818\"/><rect x=\"239.61328125\" y=\"1145.9765625\" width=\"169.2919921875\" height=\"158.8740234375\" rx=\"36.462890625\" fill=\"#ff4818\"/><rect x=\"414.1142578125\" y=\"1145.9765625\" width=\"506.57373046875\" height=\"158.8740234375\" rx=\"36.462890625\" fill=\"#ff4818\"/><text x=\"158.8740234375\" y=\"1194.15966796875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" font-weight=\"700\">ARR</text><text x=\"158.8740234375\" y=\"1234.529296875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"arr\">$1.110B</text><text x=\"158.8740234375\" y=\"1274.89892578125\" font-size=\"27.34716796875\" fill=\"white\" text-anchor=\"middle\">+36% Y/Y</text><text x=\"324.25927734375\" y=\"1194.15966796875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" font-weight=\"700\">DBNR</text><text x=\"324.25927734375\" y=\"1234.529296875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dbnr\">126%</text><text x=\"324.25927734375\" y=\"1274.89892578125\" font-size=\"27.34716796875\" fill=\"white\" text-anchor=\"middle\">-18pp Y/Y</text><text x=\"433.64794921875\" y=\"1195.4619140625\" font-size=\"28.6494140625\" fill=\"white\" font-weight=\"700\">Customers</text><text x=\"632.8916015625\" y=\"1195.4619140625\" font-size=\"28.6494140625\" fill=\"white\" data-operating-metric=\"customers\">10,650</text><text x=\"737.0712890625\" y=\"1195.4619140625\" font-size=\"27.34716796875\" fill=\"white\">+11% Y/Y</text><text x=\"433.64794921875\" y=\"1237.1337890625\" font-size=\"28.6494140625\" fill=\"white\" font-weight=\"700\">&gt; $100K</text><text x=\"622.4736328125\" y=\"1237.1337890625\" font-size=\"28.6494140625\" fill=\"white\" data-operating-metric=\"customers_100k\">1,711</text><text x=\"707.11962890625\" y=\"1237.1337890625\" font-size=\"27.34716796875\" fill=\"white\">+26% Y/Y</text><text x=\"433.64794921875\" y=\"1278.8056640625\" font-size=\"28.6494140625\" fill=\"white\" font-weight=\"700\">&gt; $1M</text><text x=\"622.4736328125\" y=\"1278.8056640625\" font-size=\"28.6494140625\" fill=\"white\" data-operating-metric=\"customers_1m\">201</text><text x=\"707.11962890625\" y=\"1278.8056640625\" font-size=\"27.34716796875\" fill=\"white\">+49% Y/Y</text><text x=\"220.07958984375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><text x=\"220.07958984375\" y=\"1380.380859375\" font-size=\"27.34716796875\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text><text x=\"169.2919921875\" y=\"1437.6796875\" font-size=\"37.76513671875\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "UiPath · 2023 财年第三季度",
      "meta": {
        "title": "UiPath 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2022 年 10 月"
      },
      "nodes": {
        "licenses": {
          "label": "许可证",
          "notes": [
            "同比 +6%",
            "毛利率 97%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +33%",
            "毛利率 84%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +28%",
            "毛利率 (31%)"
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
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (25%)",
            "同比 +27 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 60%",
            "同比 (19 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 26%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 24%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "licenses": {
            "blocks": [
              {
                "x": 230.49755859375,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "许可证",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "毛利率 97%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 425.83447265625,
                "top": 393.2783203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 230.49755859375,
                "top": 786.556640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "毛利率 84%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 425.83447265625,
                "top": 655.02978515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +33%",
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
                "x": 230.49755859375,
                "top": 989.70703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "毛利率 (31%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 425.83447265625,
                "top": 942.826171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
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
                "top": 462.29736328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
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
                "x": 1362.1494140625,
                "top": 349.001953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700
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
                "x": 1362.1494140625,
                "top": 914.1767578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 700
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
                "x": 1573.11328125,
                "top": 1145.9765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (25%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +27 个百分点",
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
                "x": 1849.189453125,
                "top": 449.27490234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 37.76513671875,
                    "weight": 700
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
                "x": 2448.22265625,
                "top": 720.14208984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 60%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (19 个百分点)",
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
                "top": 957.15087890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 26%",
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
          },
          "ga": {
            "blocks": [
              {
                "x": 2448.22265625,
                "top": 1164.2080078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
      "annotationsSvg": "<g><g data-typography-role=\"brand\" fill=\"#ff4818\"><rect x=\"658.9365234375\" y=\"261.75146484375\" width=\"151.060546875\" height=\"151.060546875\"/><rect x=\"674.5634765625\" y=\"277.37841796875\" width=\"119.806640625\" height=\"119.806640625\" fill=\"#f2f2f2\"/><text x=\"683.67919921875\" y=\"377.6513671875\" font-size=\"104.1796875\" font-weight=\"800\">Ui</text><text x=\"820.4150390625\" y=\"377.6513671875\" font-size=\"104.1796875\" font-weight=\"800\">Path</text></g><rect x=\"85.9482421875\" y=\"1145.9765625\" width=\"147.15380859375\" height=\"158.8740234375\" rx=\"36.462890625\" fill=\"#ff4818\"/><rect x=\"239.61328125\" y=\"1145.9765625\" width=\"169.2919921875\" height=\"158.8740234375\" rx=\"36.462890625\" fill=\"#ff4818\"/><rect x=\"414.1142578125\" y=\"1145.9765625\" width=\"506.57373046875\" height=\"158.8740234375\" rx=\"36.462890625\" fill=\"#ff4818\"/><text x=\"158.8740234375\" y=\"1194.15966796875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" font-weight=\"700\">ARR</text><text x=\"158.8740234375\" y=\"1234.529296875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"arr\">$1.110B</text><text x=\"158.8740234375\" y=\"1274.89892578125\" font-size=\"26.044921875\" fill=\"white\" text-anchor=\"middle\">同比 +36%</text><text x=\"324.25927734375\" y=\"1194.15966796875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" font-weight=\"700\">DBNR</text><text x=\"324.25927734375\" y=\"1234.529296875\" font-size=\"29.95166015625\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"dbnr\">126%</text><text x=\"324.25927734375\" y=\"1274.89892578125\" font-size=\"26.044921875\" fill=\"white\" text-anchor=\"middle\">同比 -18 个百分点</text><text x=\"433.64794921875\" y=\"1195.4619140625\" font-size=\"28.6494140625\" fill=\"white\" font-weight=\"700\">客户</text><text x=\"632.8916015625\" y=\"1195.4619140625\" font-size=\"28.6494140625\" fill=\"white\" data-operating-metric=\"customers\">10,650</text><text x=\"737.0712890625\" y=\"1195.4619140625\" font-size=\"27.34716796875\" fill=\"white\">同比 +11%</text><text x=\"433.64794921875\" y=\"1237.1337890625\" font-size=\"28.6494140625\" fill=\"white\" font-weight=\"700\">客户 &gt; $100K</text><text x=\"622.4736328125\" y=\"1237.1337890625\" font-size=\"28.6494140625\" fill=\"white\" data-operating-metric=\"customers_100k\">1,711</text><text x=\"707.11962890625\" y=\"1237.1337890625\" font-size=\"27.34716796875\" fill=\"white\">同比 +26%</text><text x=\"433.64794921875\" y=\"1278.8056640625\" font-size=\"28.6494140625\" fill=\"white\" font-weight=\"700\">客户 &gt; $1M</text><text x=\"622.4736328125\" y=\"1278.8056640625\" font-size=\"28.6494140625\" fill=\"white\" data-operating-metric=\"customers_1m\">201</text><text x=\"707.11962890625\" y=\"1278.8056640625\" font-size=\"27.34716796875\" fill=\"white\">同比 +49%</text><text x=\"220.07958984375\" y=\"1341.3134765625\" font-size=\"27.34716796875\" fill=\"#777777\">ARR = 年度经常性收入</text><text x=\"220.07958984375\" y=\"1380.380859375\" font-size=\"27.34716796875\" fill=\"#777777\">DBNR = 美元净留存率</text><text x=\"169.2919921875\" y=\"1437.6796875\" font-size=\"37.76513671875\" font-weight=\"700\">来源：季度业绩</text></g>"
    },
    "preservedAnnotationText": [
      "Ui",
      "Path"
    ]
  }
});})();
