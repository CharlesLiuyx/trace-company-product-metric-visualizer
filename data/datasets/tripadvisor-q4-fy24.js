window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "tripadvisor-q4-fy24",
  "name": "Tripadvisor · Q4 FY24",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2450,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2bd8a2",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#d00000",
        "label": "#941100"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 27,
      "lineGap": 8
    }
  },
  "layout": {
    "scale": 0.77,
    "nodes": {
      "tripadvisor": {
        "x": 384.16,
        "y": 489.64,
        "width": 72.93,
        "height": 157.57
      },
      "viator": {
        "x": 384.16,
        "y": 780.05,
        "width": 72.93,
        "height": 143.25
      },
      "thefork": {
        "x": 384.16,
        "y": 1057.42,
        "width": 72.93,
        "height": 36.46
      },
      "gross_segment_revenue": {
        "x": 759.21,
        "y": 575.59,
        "width": 71.62,
        "height": 337.28
      },
      "revenue": {
        "x": 1134.26,
        "y": 669.35,
        "width": 72.93,
        "height": 316.45
      },
      "eliminations": {
        "x": 1134.26,
        "y": 1074.35,
        "width": 72.93,
        "height": 20.84
      },
      "gross_profit": {
        "x": 1509.3,
        "y": 576.9,
        "width": 71.62,
        "height": 294.31
      },
      "cost_of_revenue": {
        "x": 1506.7,
        "y": 1070.45,
        "width": 72.93,
        "height": 20.84
      },
      "operating_expenses": {
        "x": 1879.14,
        "y": 574.29,
        "width": 72.93,
        "height": 295.61
      },
      "sm": {
        "x": 2252.89,
        "y": 394.58,
        "width": 72.93,
        "height": 115.9
      },
      "personnel": {
        "x": 2252.89,
        "y": 614.66,
        "width": 72.93,
        "height": 111.99
      },
      "other": {
        "x": 2252.89,
        "y": 838.65,
        "width": 72.93,
        "height": 32.56
      },
      "technology": {
        "x": 2252.89,
        "y": 976.68,
        "width": 72.93,
        "height": 18.23
      },
      "ga": {
        "x": 2252.89,
        "y": 1106.91,
        "width": 72.93,
        "height": 14.32
      }
    },
    "labels": {
      "gross_segment_revenue": {
        "blocks": []
      },
      "tripadvisor": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 401.091796875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": null
              },
              {
                "text": "(6%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 476.6220703125,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tripadvisor",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 364.62890625,
            "top": 528.7119140625,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "display & platform,",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "experiences & dining",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "26% adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 692.794921875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": null
              },
              {
                "text": "+16% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 786.556640625,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Viator",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 364.62890625,
            "top": 833.4375,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "& attractions",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "11% adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 968.87109375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": null
              },
              {
                "text": "+23% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 364.62890625,
            "top": 1056.12158203125,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "TheFork",
                "size": 39.0673828125,
                "weight": 800,
                "color": null
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 364.62890625,
            "top": 1101.7001953125,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restaurant",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "reservations",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "0% adjusted margin",
                "size": 27,
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
            "x": 1170.71923828125,
            "top": 527.40966796875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": null
              },
              {
                "text": "+5% Y/Y",
                "size": 27,
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
            "x": 1540.55712890625,
            "top": 399.78955078125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": null
              },
              {
                "text": "93% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
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
            "x": 1910.39501953125,
            "top": 424.5322265625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800,
                "color": null
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 400,
                "color": null
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 1540.55712890625,
            "top": 1112.1181640625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 800,
                "color": null
              },
              {
                "text": "revenue",
                "size": 36.462890625,
                "weight": 400,
                "color": null
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1170.71923828125,
            "top": 1117.3271484375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36.462890625,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 407.60302734375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M ($152M)",
                "size": 29.95166015625,
                "weight": 800,
                "color": null
              },
              {
                "text": "37% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 619.869140625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Personnel ($146M)",
                "size": 29.95166015625,
                "weight": 800,
                "color": null
              },
              {
                "text": "36% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
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
            "x": 2495.103515625,
            "top": 796.974609375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other ($43M)",
                "size": 29.95166015625,
                "weight": 800,
                "color": null
              },
              {
                "text": "10% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2495.103515625,
            "top": 953.244140625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Technology ($24M)",
                "size": 29.95166015625,
                "weight": 800,
                "color": null
              },
              {
                "text": "6% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
            "x": 2495.103515625,
            "top": 1104.3046875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A ($19M)",
                "size": 29.95166015625,
                "weight": 800,
                "color": null
              },
              {
                "text": "5% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
      "id": "tripadvisor",
      "label": "Tripadvisor",
      "value": 204,
      "notes": [
        "(6%) Y/Y",
        "Branded hotels, display & platform, experiences & dining",
        "26% adjusted margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "viator",
      "label": "Viator",
      "value": 186,
      "notes": [
        "+16% Y/Y",
        "Tours, activities & attractions",
        "11% adjusted margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "thefork",
      "label": "TheFork",
      "value": 48,
      "notes": [
        "+23% Y/Y",
        "Restaurant reservations",
        "0% adjusted margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "gross_segment_revenue",
      "label": "Company revenue before eliminations",
      "value": 438,
      "type": "source",
      "col": 1,
      "order": 3
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 411,
      "notes": [
        "+5% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 4
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 27,
      "type": "cost",
      "col": 2,
      "order": 5
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 384,
      "notes": [
        "93% margin",
        "+1pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 6
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 27,
      "type": "cost",
      "col": 3,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 384,
      "type": "cost",
      "col": 4,
      "order": 8
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 152,
      "notes": [
        "37% of revenue",
        "+5pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 9
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 146,
      "notes": [
        "36% of revenue",
        "+1pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 10
    },
    {
      "id": "other",
      "label": "Other",
      "value": 43,
      "notes": [
        "10% of revenue",
        "+3pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 11
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 24,
      "notes": [
        "6% of revenue",
        "+0pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 12
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 19,
      "notes": [
        "5% of revenue",
        "+0pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 13
    }
  ],
  "links": [
    {
      "source": "tripadvisor",
      "target": "gross_segment_revenue",
      "value": 204,
      "y0": 568.430419921875,
      "y1": 654.378662109375,
      "sourceWidth": 157.57177734375,
      "targetWidth": 157.57177734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 186,
      "y0": 851.6689453125,
      "y1": 804.7880859375,
      "sourceWidth": 143.2470703125,
      "targetWidth": 143.2470703125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 48,
      "y0": 1075.6552734375,
      "y1": 894.64306640625,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 411,
      "y0": 733.815673828125,
      "y1": 827.577392578125,
      "sourceWidth": 316.44580078125,
      "targetWidth": 316.44580078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 27,
      "y0": 902.45654296875,
      "y1": 1084.77099609375,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 384,
      "y0": 817.159423828125,
      "y1": 724.048828125,
      "sourceWidth": 295.60986328125,
      "targetWidth": 294.3076171875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 27,
      "y0": 975.38232421875,
      "y1": 1080.8642578125,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 384,
      "y0": 724.048828125,
      "y1": 722.095458984375,
      "sourceWidth": 294.3076171875,
      "targetWidth": 295.60986328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 152,
      "y0": 632.240478515625,
      "y1": 452.530517578125,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 146,
      "y0": 746.18701171875,
      "y1": 670.65673828125,
      "sourceWidth": 111.9931640625,
      "targetWidth": 111.9931640625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 43,
      "y0": 818.461669921875,
      "y1": 854.924560546875,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 24,
      "y0": 843.85546875,
      "y1": 985.80029296875,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 19,
      "y0": 861.435791015625,
      "y1": 1114.071533203125,
      "sourceWidth": 16.92919921875,
      "targetWidth": 14.32470703125,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e18484"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 592.52197265625,
      "y": 285.19189453125,
      "width": 773.5341796875,
      "height": 188.82568359375
    },
    {
      "key": "tripadvisor-hotel-other-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 3.90673828125,
      "y": 424.5322265625,
      "width": 145.8515625,
      "height": 136.73583984375
    },
    {
      "key": "tripadvisor-experiences-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 2.6044921875,
      "y": 734.466796875,
      "width": 131.52685546875,
      "height": 139.34033203125
    },
    {
      "key": "tripadvisor-thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 1.30224609375,
      "y": 1009.24072265625,
      "width": 148.4560546875,
      "height": 140.642578125
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2024 财年第四季度",
      "meta": {
        "title": "猫途鹰 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "titleTextLength": 2120
      },
      "nodes": {
        "tripadvisor": {
          "label": "猫途鹰",
          "notes": [
            "同比 (6%)",
            "品牌酒店、展示及平台、体验活动与餐饮",
            "调整后利润率 26%"
          ]
        },
        "viator": {
          "label": "Viator（体验预订）",
          "notes": [
            "同比 +16%",
            "观光、活动及景点",
            "调整后利润率 11%"
          ]
        },
        "thefork": {
          "label": "TheFork（餐厅预订）",
          "notes": [
            "同比 +23%",
            "餐厅预订",
            "调整后利润率 0%"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前公司收入"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 93%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 37%",
            "同比 +5 个百分点"
          ]
        },
        "personnel": {
          "label": "人员",
          "notes": [
            "占收入 36%",
            "同比 +1 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "占收入 10%",
            "同比 +3 个百分点"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 6%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 5%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "gross_segment_revenue": {
            "blocks": []
          },
          "tripadvisor": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 401.091796875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 476.6220703125,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "猫途鹰",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 364.62890625,
                "top": 528.7119140625,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "品牌酒店、展示及平台、",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "体验活动与餐饮",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 26%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 692.794921875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 786.556640625,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "体验预订",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 364.62890625,
                "top": 833.4375,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "观光、活动及景点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 11%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 968.87109375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +23%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 364.62890625,
                "top": 1056.12158203125,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": null
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 364.62890625,
                "top": 1101.7001953125,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 0%",
                    "size": 27,
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
                "x": 1170.71923828125,
                "top": 527.40966796875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27,
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
                "x": 1540.55712890625,
                "top": 399.78955078125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 93%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
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
                "x": 1910.39501953125,
                "top": 424.5322265625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 1540.55712890625,
                "top": 1112.1181640625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1170.71923828125,
                "top": 1117.3271484375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 407.60302734375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与营销 ($152M)",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "占收入 37%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 619.869140625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "人员 ($146M)",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "占收入 36%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
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
                "x": 2495.103515625,
                "top": 796.974609375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他 ($43M)",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2495.103515625,
                "top": 953.244140625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "技术 ($24M)",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "占收入 6%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
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
                "x": 2495.103515625,
                "top": 1104.3046875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用 ($19M)",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
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
