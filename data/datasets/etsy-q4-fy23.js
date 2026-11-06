window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q4-fy23",
  "name": "Etsy · Q4 FY23",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#eb6d20",
        "label": "#eb6d20"
      },
      "hub": {
        "node": "#eb6d20",
        "label": "#eb6d20"
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
      "source": "#eeb693",
      "hub": "#eeb693",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><rect x=\"79\" y=\"1154\" width=\"164\" height=\"164\" rx=\"36\" fill=\"#f27124\"/><text x=\"161.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.0\" y=\"1250\" text-anchor=\"middle\" font-size=\"30\" fill=\"#fff\">$4.0B</text><text x=\"161.0\" y=\"1290\" text-anchor=\"middle\" font-size=\"26\" fill=\"#fff\">(1)% Y/Y</text></g><g><rect x=\"251\" y=\"1154\" width=\"333\" height=\"164\" rx=\"36\" fill=\"#f27124\"/><text x=\"417.5\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417.5\" y=\"1250\" text-anchor=\"middle\" font-size=\"30\" fill=\"#fff\">9.0M</text><text x=\"417.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"26\" fill=\"#fff\">+21% Y/Y</text></g><g><rect x=\"590\" y=\"1154\" width=\"329\" height=\"164\" rx=\"36\" fill=\"#f27124\"/><text x=\"754.5\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"754.5\" y=\"1250\" text-anchor=\"middle\" font-size=\"30\" fill=\"#fff\">96.5M</text><text x=\"754.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"26\" fill=\"#fff\">+2% Y/Y</text></g><text x=\"423.22998046875\" y=\"1373.86962890625\" text-anchor=\"middle\" font-size=\"27\" fill=\"#727272\">GMV = Gross Merchandise Sales</text>",
  "layout": {
    "scale": 0.41758485191508316,
    "nodes": {
      "marketplace": {
        "x": 389.37,
        "y": 516.99,
        "width": 71.62,
        "height": 257.84
      },
      "services": {
        "x": 389.37,
        "y": 998.82,
        "width": 71.62,
        "height": 95.06
      },
      "revenue": {
        "x": 856.88,
        "y": 668.05,
        "width": 71.62,
        "height": 351.61
      },
      "gross_profit": {
        "x": 1323.08,
        "y": 563.87,
        "width": 71.62,
        "height": 244.82
      },
      "cost_of_revenue": {
        "x": 1323.08,
        "y": 988.4,
        "width": 71.62,
        "height": 106.78
      },
      "operating_profit": {
        "x": 1790.59,
        "y": 425.83,
        "width": 71.62,
        "height": 48.18
      },
      "operating_expenses": {
        "x": 1790.59,
        "y": 716.24,
        "width": 71.62,
        "height": 196.64
      },
      "net_profit": {
        "x": 2258.09,
        "y": 313.84,
        "width": 71.62,
        "height": 35.16
      },
      "tax": {
        "x": 2258.09,
        "y": 530.01,
        "width": 71.62,
        "height": 10.42
      },
      "other": {
        "x": 2258.09,
        "y": 652.43,
        "width": 71.62,
        "height": 2.6
      },
      "marketing": {
        "x": 2258.09,
        "y": 759.21,
        "width": 71.62,
        "height": 109.39
      },
      "rnd": {
        "x": 2258.09,
        "y": 985.8,
        "width": 71.62,
        "height": 48.18
      },
      "ga": {
        "x": 2258.09,
        "y": 1139.47,
        "width": 71.62,
        "height": 37.77
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 420.62548828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 425.83447265625,
            "top": 470.04345703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+3% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 223.986328125,
            "top": 582.10400390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketplace",
                "size": 39,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 425.83447265625,
            "top": 902.45654296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 1022.26318359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Services",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 892.03857421875,
            "top": 519.59619140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1359.544921875,
            "top": 376.34912109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "70% margin",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1359.544921875,
            "top": 1108.21142578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 33,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1825.7490234375,
            "top": 239.61328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "14% margin",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1825.7490234375,
            "top": 927.19921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 33,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 269.56494140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "10% margin",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 489.64453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 602.93994140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 752.6982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "31% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 938.91943359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 1116.02490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "marketplace",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Marketplace",
      "value": 616.0,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#eb6d20",
      "labelColor": "#eb6d20",
      "linkTint": "#eeb693"
    },
    {
      "id": "services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Services",
      "value": 227.0,
      "notes": [
        "+9% Y/Y"
      ],
      "color": "#eb6d20",
      "labelColor": "#eb6d20",
      "linkTint": "#eeb693"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 842.0,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#eb6d20",
      "labelColor": "#eb6d20",
      "linkTint": "#eeb693"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 587.0,
      "notes": [
        "70% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 256.0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 115.0,
      "notes": [
        "14% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating Expenses",
      "value": 471.0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Other",
      "value": 6.0,
      "color": "#cc0000",
      "labelColor": "#9a1405",
      "linkTint": "#df8182",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 83.0,
      "notes": [
        "10% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 26.0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "marketing",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Marketing",
      "value": 261.0,
      "notes": [
        "31% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 118.0,
      "notes": [
        "14% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 93.0,
      "notes": [
        "11% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 616,
      "y0": 645.9140625,
      "sourceWidth": 257.8447265625,
      "y1": 796.323486328125,
      "targetWidth": 256.54248046875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 227,
      "y0": 1046.354736328125,
      "sourceWidth": 95.06396484375,
      "y1": 972.126708984375,
      "targetWidth": 95.06396484375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 587,
      "y0": 790.46337890625,
      "sourceWidth": 244.822265625,
      "y1": 686.28369140625,
      "targetWidth": 244.822265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 256,
      "y0": 966.2666015625,
      "sourceWidth": 106.7841796875,
      "y1": 1041.796875,
      "targetWidth": 106.7841796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 115,
      "y0": 587.964111328125,
      "sourceWidth": 48.18310546875,
      "y1": 449.926025390625,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 471,
      "y0": 710.375244140625,
      "sourceWidth": 196.63916015625,
      "y1": 814.554931640625,
      "targetWidth": 196.63916015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 83,
      "y0": 443.414794921875,
      "sourceWidth": 35.16064453125,
      "y1": 331.421630859375,
      "targetWidth": 35.16064453125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 26,
      "y0": 466.2041015625,
      "sourceWidth": 10.41796875,
      "y1": 535.22314453125,
      "targetWidth": 10.41796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 6,
      "y0": 472.71533203125,
      "sourceWidth": 2.6044921875,
      "y1": 653.7275390625,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 261,
      "y0": 770.9296875,
      "sourceWidth": 109.388671875,
      "y1": 813.90380859375,
      "targetWidth": 109.388671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 118,
      "y0": 849.715576171875,
      "sourceWidth": 48.18310546875,
      "y1": 1009.891845703125,
      "targetWidth": 48.18310546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 93,
      "y0": 893.3408203125,
      "sourceWidth": 39.0673828125,
      "y1": 1158.347900390625,
      "targetWidth": 37.76513671875,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "GMS"
    ],
    "zh": {
      "name": "Etsy · 2023 财年第四季度",
      "meta": {
        "title": "Etsy 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "titleSize": 112
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 +3%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +9%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 70%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (4 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 31%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 14%",
            "同比 +0 个百分点"
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
          "marketplace": {
            "blocks": [
              {
                "x": 425.83447265625,
                "top": 420.62548828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 425.83447265625,
                "top": 470.04345703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +3%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 223.986328125,
                "top": 582.10400390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "交易市场",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 425.83447265625,
                "top": 902.45654296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              },
              {
                "x": 223.986328125,
                "top": 1022.26318359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 892.03857421875,
                "top": 519.59619140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1359.544921875,
                "top": 376.34912109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 70%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1359.544921875,
                "top": 1108.21142578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1825.7490234375,
                "top": 239.61328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 14%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1825.7490234375,
                "top": 927.19921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 269.56494140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 10%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 489.64453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 602.93994140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 752.6982421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营销",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 938.91943359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 1116.02490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"79\" y=\"1154\" width=\"164\" height=\"164\" rx=\"36\" fill=\"#f27124\"/><text x=\"161.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.0\" y=\"1250\" text-anchor=\"middle\" font-size=\"30\" fill=\"#fff\">$4.0B</text><text x=\"161.0\" y=\"1290\" text-anchor=\"middle\" font-size=\"26\" fill=\"#fff\">同比 (1)%</text></g><g><rect x=\"251\" y=\"1154\" width=\"333\" height=\"164\" rx=\"36\" fill=\"#f27124\"/><text x=\"417.5\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417.5\" y=\"1250\" text-anchor=\"middle\" font-size=\"30\" fill=\"#fff\">9.0M</text><text x=\"417.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"26\" fill=\"#fff\">同比 +21%</text></g><g><rect x=\"590\" y=\"1154\" width=\"329\" height=\"164\" rx=\"36\" fill=\"#f27124\"/><text x=\"754.5\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"754.5\" y=\"1250\" text-anchor=\"middle\" font-size=\"30\" fill=\"#fff\">96.5M</text><text x=\"754.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"26\" fill=\"#fff\">同比 +2%</text></g><text x=\"423.22998046875\" y=\"1373.86962890625\" text-anchor=\"middle\" font-size=\"27\" fill=\"#727272\">GMV = 商品交易总额</text>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "4.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$4.0B"
    },
    {
      "id": "active-sellers",
      "value": "9000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "9.0M"
    },
    {
      "id": "active-buyers",
      "value": "96500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "96.5M"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "logo",
      "href": "data/assets/raster-annotations/etsy/logo-q4-fy23.png",
      "x": 762,
      "y": 245,
      "width": 258,
      "height": 258
    },
    {
      "key": "brands",
      "href": "data/assets/raster-annotations/etsy/brands-q4-fy23.png",
      "x": 60,
      "y": 649,
      "width": 318,
      "height": 146
    }
  ]
});
