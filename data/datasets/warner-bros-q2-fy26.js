/* Source-measured Q2 FY26 Sankey View Adapter. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "warner-bros-q2-fy26",
  "name": "Warner Bros. Discovery · Q2 FY26",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 195,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 2458,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#727272",
    "noteColor": "#727272",
    "palette": {
      "source": {
        "node": "#0020af",
        "label": "#0020af"
      },
      "hub": {
        "node": "#0020af",
        "label": "#0020af"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#11955c"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#8d1400"
      }
    },
    "linkTint": {
      "source": "#8593d3",
      "hub": "#8593d3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros-q2-fy26/company-wordmark.png",
      "x": 586,
      "y": 268,
      "width": 710,
      "height": 227
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros-q2-fy26/business-streaming-cluster.png",
      "x": 59,
      "y": 469,
      "width": 87,
      "height": 165
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros-q2-fy26/business-studios-cluster.png",
      "x": 22,
      "y": 704,
      "width": 164,
      "height": 164
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros-q2-fy26/business-networks-cluster.png",
      "x": 22,
      "y": 988,
      "width": 145,
      "height": 226
    }
  ],
  "layout": {
    "scale": 40.804597701149426,
    "nodes": {
      "streaming": {
        "x": 433,
        "y": 489,
        "width": 73,
        "height": 126
      },
      "studios": {
        "x": 433,
        "y": 768,
        "width": 73,
        "height": 95
      },
      "networks": {
        "x": 433,
        "y": 1009,
        "width": 73,
        "height": 164
      },
      "gross_revenue": {
        "x": 807,
        "y": 616,
        "width": 72,
        "height": 383
      },
      "revenue": {
        "x": 1181,
        "y": 685,
        "width": 72,
        "height": 355
      },
      "eliminations": {
        "x": 1181,
        "y": 1146,
        "width": 72,
        "height": 27
      },
      "gross_profit": {
        "x": 1554,
        "y": 610,
        "width": 73,
        "height": 168
      },
      "cost_of_revenue": {
        "x": 1554,
        "y": 964,
        "width": 73,
        "height": 190
      },
      "operating_profit": {
        "x": 1928,
        "y": 540,
        "width": 73,
        "height": 10
      },
      "operating_expenses": {
        "x": 1928,
        "y": 707,
        "width": 73,
        "height": 156
      },
      "net_profit": {
        "x": 2301,
        "y": 480,
        "width": 73,
        "height": 6
      },
      "other_nonoperating": {
        "x": 2301,
        "y": 628,
        "width": 73,
        "height": 4
      },
      "sga": {
        "x": 2301,
        "y": 744,
        "width": 73,
        "height": 105
      },
      "amortization": {
        "x": 2301,
        "y": 978,
        "width": 73,
        "height": 48
      },
      "other_operating_expense": {
        "x": 2301,
        "y": 1176,
        "width": 73,
        "height": 4
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "streaming": {
        "blocks": [
          {
            "x": 469,
            "top": 392,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#0020af"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          },
          {
            "x": 402,
            "top": 493,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Streaming",
                "size": 40,
                "weight": 800,
                "color": "#0020af"
              },
              {
                "text": "17% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "studios": {
        "blocks": [
          {
            "x": 469,
            "top": 672,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#0020af"
              },
              {
                "text": "(39%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          },
          {
            "x": 402,
            "top": 748,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Studios",
                "size": 40,
                "weight": 800,
                "color": "#0020af"
              },
              {
                "text": "4% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "(19pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 469,
            "top": 914,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#0020af"
              },
              {
                "text": "(17%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          },
          {
            "x": 402,
            "top": 1063,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Networks",
                "size": 40,
                "weight": 800,
                "color": "#0020af"
              },
              {
                "text": "36% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1223.5,
            "top": 537,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#0020af"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#0020af"
              },
              {
                "text": "(11%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1215,
            "top": 1192,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1599,
            "top": 433,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "47% margin",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+8pp Y/Y",
                "size": 29,
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
            "x": 1586.5,
            "top": 1171,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1968,
            "top": 362,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "3% margin",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
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
            "x": 1971,
            "top": 880,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2487.5,
            "top": 432,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2489.5,
            "top": 603,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2489.5,
            "top": 764,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "29% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2488.5,
            "top": 952,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "13% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "other_operating_expense": {
        "blocks": [
          {
            "x": 2490,
            "top": 1133,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "1% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
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
      "id": "streaming",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Streaming"
      ],
      "value": 3.1,
      "valueText": "$3.1B",
      "notes": [
        "+10% Y/Y",
        "17% adj. margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "studios",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Studios"
      ],
      "value": 2.3,
      "valueText": "$2.3B",
      "notes": [
        "(39%) Y/Y",
        "4% adj. margin",
        "(19pp) Y/Y"
      ]
    },
    {
      "id": "networks",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Networks"
      ],
      "value": 4,
      "valueText": "$4.0B",
      "notes": [
        "(17%) Y/Y",
        "36% adj. margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "gross_revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": [
        "Gross revenue"
      ],
      "value": 9.4,
      "valueText": "$9.4B",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": [
        "Revenue"
      ],
      "value": 8.7,
      "valueText": "$8.7B",
      "notes": [
        "(11%) Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": [
        "Eliminations"
      ],
      "value": -0.7,
      "valueText": "($0.7B)",
      "notes": []
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": [
        "Gross profit"
      ],
      "value": 4.1,
      "valueText": "$4.1B",
      "notes": [
        "47% margin",
        "+8pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 4.6,
      "valueText": "($4.6B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 8,
      "type": "profit",
      "label": [
        "Operating profit"
      ],
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [
        "3% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 3.9,
      "valueText": "($3.9B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 10,
      "type": "profit",
      "label": [
        "Net profit"
      ],
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": []
    },
    {
      "id": "other_nonoperating",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": [
        "Other"
      ],
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": []
    },
    {
      "id": "sga",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": [
        "SG&A"
      ],
      "value": 2.5,
      "valueText": "($2.5B)",
      "notes": [
        "29% of revenue",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 13,
      "type": "cost",
      "label": [
        "Amortization"
      ],
      "value": 1.2,
      "valueText": "($1.2B)",
      "notes": [
        "13% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "other_operating_expense",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": [
        "Other"
      ],
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": [
        "1% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 3.1,
      "sourceWidth": 126,
      "targetWidth": 126,
      "y0": 552,
      "y1": 679,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8593d3"
    },
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 2.3,
      "sourceWidth": 95,
      "targetWidth": 95,
      "y0": 815.5,
      "y1": 789.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8593d3"
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 4,
      "sourceWidth": 164,
      "targetWidth": 162,
      "y0": 1091,
      "y1": 918,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8593d3"
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 8.7,
      "sourceWidth": 356,
      "targetWidth": 355,
      "y0": 794,
      "y1": 862.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8593d3"
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.7,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 985.5,
      "y1": 1159.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.1,
      "sourceWidth": 168,
      "targetWidth": 168,
      "y0": 769,
      "y1": 694,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.6,
      "sourceWidth": 187,
      "targetWidth": 190,
      "y0": 946.5,
      "y1": 1059,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.2,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 615,
      "y1": 545,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.9,
      "sourceWidth": 158,
      "targetWidth": 156,
      "y0": 699,
      "y1": 785,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 543,
      "y1": 483,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other_nonoperating",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 548,
      "y1": 630,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.5,
      "sourceWidth": 105,
      "targetWidth": 105,
      "y0": 759.5,
      "y1": 796.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.2,
      "sourceWidth": 47,
      "targetWidth": 48,
      "y0": 835.5,
      "y1": 1002,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating_expense",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 861,
      "y1": 1178,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2026 财年第二季度",
      "meta": {
        "title": "Warner Bros. 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "",
        "titleTextLength": 2160
      },
      "nodes": {
        "streaming": {
          "label": [
            "流媒体"
          ],
          "notes": [
            "同比 +10%",
            "调整后利润率 17%",
            "同比 +6 个百分点"
          ]
        },
        "studios": {
          "label": [
            "影视工作室"
          ],
          "notes": [
            "同比 (39%)",
            "调整后利润率 4%",
            "同比 (19 个百分点)"
          ]
        },
        "networks": {
          "label": [
            "线性网络"
          ],
          "notes": [
            "同比 (17%)",
            "调整后利润率 36%",
            "同比 +5 个百分点"
          ]
        },
        "gross_revenue": {
          "label": [
            "总收入"
          ],
          "notes": []
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 (11%)"
          ]
        },
        "eliminations": {
          "label": [
            "抵销"
          ],
          "notes": []
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "利润率 47%",
            "同比 +8 个百分点"
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
          "label": [
            "营业利润"
          ],
          "notes": [
            "利润率 3%",
            "同比 +5 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": [
            "净利润"
          ],
          "notes": []
        },
        "other_nonoperating": {
          "label": [
            "其他"
          ],
          "notes": []
        },
        "sga": {
          "label": [
            "销售及管理费用"
          ],
          "notes": [
            "占收入 29%",
            "同比 +4 个百分点"
          ]
        },
        "amortization": {
          "label": [
            "摊销"
          ],
          "notes": [
            "占收入 13%",
            "同比 (1 个百分点)"
          ]
        },
        "other_operating_expense": {
          "label": [
            "其他"
          ],
          "notes": [
            "占收入 1%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "streaming": {
            "blocks": [
              {
                "x": 469,
                "top": 392,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#0020af"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              },
              {
                "x": 402,
                "top": 493,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "流媒体",
                    "size": 40,
                    "weight": 800,
                    "color": "#0020af"
                  },
                  {
                    "text": "调整后利润率 17%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "studios": {
            "blocks": [
              {
                "x": 469,
                "top": 672,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#0020af"
                  },
                  {
                    "text": "同比 (39%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              },
              {
                "x": 402,
                "top": 748,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 40,
                    "weight": 800,
                    "color": "#0020af"
                  },
                  {
                    "text": "调整后利润率 4%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 (19 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 469,
                "top": 914,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#0020af"
                  },
                  {
                    "text": "同比 (17%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              },
              {
                "x": 402,
                "top": 1063,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "线性网络",
                    "size": 40,
                    "weight": 800,
                    "color": "#0020af"
                  },
                  {
                    "text": "调整后利润率 36%",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1223.5,
                "top": 537,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#0020af"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#0020af"
                  },
                  {
                    "text": "同比 (11%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1215,
                "top": 1192,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1599,
                "top": 433,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 47%",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 29,
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
                "x": 1586.5,
                "top": 1171,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1968,
                "top": 362,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 29,
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
                "x": 1971,
                "top": 880,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2487.5,
                "top": 432,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2489.5,
                "top": 603,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2489.5,
                "top": 764,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售及管理费用",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 29%",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2488.5,
                "top": 952,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "other_operating_expense": {
            "blocks": [
              {
                "x": 2490,
                "top": 1133,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
