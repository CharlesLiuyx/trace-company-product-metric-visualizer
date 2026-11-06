(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-fy22",
  "name": "Kering · FY22",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering FY22 Income Statement",
    "hidePeriodStamp": true,
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 197,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1930
  },
  "nodes": [
    {
      "id": "gucci",
      "label": "Gucci",
      "value": 10.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y"
      ],
      "valueText": "€10.5B"
    },
    {
      "id": "saint_laurent",
      "label": "Saint Laurent",
      "value": 3.3,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+31% Y/Y"
      ],
      "valueText": "€3.3B"
    },
    {
      "id": "bottega_veneta",
      "label": "Bottega Veneta",
      "value": 1.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+16% Y/Y"
      ],
      "valueText": "€1.7B"
    },
    {
      "id": "other_houses",
      "label": "Other Houses",
      "value": 3.9,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+18% Y/Y"
      ],
      "valueText": "€3.9B"
    },
    {
      "id": "eyewear_corporate",
      "label": [
        "Kering Eyewear",
        "& Corporate"
      ],
      "value": 1.1,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "+55% Y/Y"
      ],
      "valueText": "€1.1B"
    },
    {
      "id": "segment_hub",
      "label": "",
      "value": 20.5,
      "type": "hub",
      "col": 0,
      "order": 5,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 20.4,
      "type": "hub",
      "col": 0,
      "order": 6,
      "notes": [
        "+15% Y/Y"
      ],
      "valueText": "€20.4B"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.2,
      "type": "cost",
      "col": 0,
      "order": 7,
      "notes": [],
      "valueText": "($0.2B)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 15.2,
      "type": "profit",
      "col": 0,
      "order": 8,
      "notes": [
        "75% of revenue",
        "+1pp Y/Y"
      ],
      "valueText": "€15.2B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 5.1,
      "type": "cost",
      "col": 0,
      "order": 9,
      "notes": [],
      "valueText": "(€5.1B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 5.4,
      "type": "profit",
      "col": 0,
      "order": 10,
      "notes": [
        "27% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "€5.4B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 9.8,
      "type": "cost",
      "col": 0,
      "order": 11,
      "notes": [],
      "valueText": "(€9.8B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 3.7,
      "type": "profit",
      "col": 0,
      "order": 12,
      "notes": [
        "18% of revenue",
        "+0pp Y/Y"
      ],
      "valueText": "€3.7B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.4,
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": [],
      "valueText": "(€1.4B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.3,
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": [],
      "valueText": "(€0.3B)"
    },
    {
      "id": "personnel_expenses",
      "label": [
        "Personnel",
        "expenses"
      ],
      "value": 2.8,
      "type": "cost",
      "col": 0,
      "order": 15,
      "notes": [
        "14% of revenue"
      ],
      "valueText": "(€2.8B)"
    },
    {
      "id": "other_opex",
      "label": "Other opex",
      "value": 7.0,
      "type": "cost",
      "col": 0,
      "order": 16,
      "notes": [
        "34% of revenue"
      ],
      "valueText": "(€7.0B)"
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 10.5,
      "sourceWidth": 142,
      "targetWidth": 142,
      "y0": 479,
      "y1": 657,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 3.3,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 713,
      "y1": 751,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 1.7,
      "sourceWidth": 25,
      "targetWidth": 25,
      "y0": 905.5,
      "y1": 786.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 3.9,
      "sourceWidth": 53,
      "targetWidth": 53,
      "y0": 1084.5,
      "y1": 825.5,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 1.1,
      "sourceWidth": 15,
      "targetWidth": 12,
      "y0": 1274.5,
      "y1": 858,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 20.4,
      "sourceWidth": 276,
      "targetWidth": 276,
      "y0": 724,
      "y1": 760,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 863,
      "y1": 977,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 15.2,
      "sourceWidth": 207,
      "targetWidth": 207,
      "y0": 725.5,
      "y1": 688.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 5.1,
      "sourceWidth": 69,
      "targetWidth": 70,
      "y0": 863.5,
      "y1": 920,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 5.4,
      "sourceWidth": 74,
      "targetWidth": 74,
      "y0": 622,
      "y1": 562,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 9.8,
      "sourceWidth": 133,
      "targetWidth": 133,
      "y0": 725.5,
      "y1": 806.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.7,
      "sourceWidth": 51,
      "targetWidth": 51,
      "y0": 550.5,
      "y1": 459.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.4,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 586,
      "y1": 714,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 597.5,
      "y1": 810.5,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 2.8,
      "sourceWidth": 40,
      "targetWidth": 40,
      "y0": 760,
      "y1": 961,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 7,
      "sourceWidth": 93,
      "targetWidth": 96,
      "y0": 826.5,
      "y1": 1163,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 13.5,
    "nodes": {
      "gucci": {
        "x": 448,
        "y": 408,
        "width": 73,
        "height": 142
      },
      "saint_laurent": {
        "x": 448,
        "y": 690,
        "width": 73,
        "height": 46
      },
      "bottega_veneta": {
        "x": 448,
        "y": 893,
        "width": 73,
        "height": 25
      },
      "other_houses": {
        "x": 448,
        "y": 1058,
        "width": 73,
        "height": 53
      },
      "eyewear_corporate": {
        "x": 448,
        "y": 1267,
        "width": 73,
        "height": 15
      },
      "segment_hub": {
        "x": 847,
        "y": 586,
        "width": 73,
        "height": 278
      },
      "revenue": {
        "x": 1258,
        "y": 622,
        "width": 73,
        "height": 276
      },
      "eliminations": {
        "x": 1263,
        "y": 976,
        "width": 73,
        "height": 2
      },
      "gross_profit": {
        "x": 1637,
        "y": 585,
        "width": 73,
        "height": 207
      },
      "cost_of_sales": {
        "x": 1642,
        "y": 885,
        "width": 73,
        "height": 70
      },
      "operating_profit": {
        "x": 1986,
        "y": 525,
        "width": 73,
        "height": 74
      },
      "operating_expenses": {
        "x": 1988,
        "y": 740,
        "width": 73,
        "height": 133
      },
      "net_profit": {
        "x": 2316,
        "y": 434,
        "width": 73,
        "height": 51
      },
      "tax": {
        "x": 2316,
        "y": 704,
        "width": 73,
        "height": 20
      },
      "other": {
        "x": 2316,
        "y": 809,
        "width": 73,
        "height": 3
      },
      "personnel_expenses": {
        "x": 2316,
        "y": 941,
        "width": 73,
        "height": 40
      },
      "other_opex": {
        "x": 2316,
        "y": 1115,
        "width": 73,
        "height": 96
      }
    },
    "labels": {
      "segment_hub": {
        "blocks": []
      },
      "gucci": {
        "blocks": [
          {
            "x": 485,
            "top": 312,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "saint_laurent": {
        "blocks": [
          {
            "x": 485,
            "top": 599,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+31% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "bottega_veneta": {
        "blocks": [
          {
            "x": 485,
            "top": 803,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_houses": {
        "blocks": [
          {
            "x": 485,
            "top": 966,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+18% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 365,
            "top": 1060,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other Houses",
                "size": 38,
                "weight": 800,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "eyewear_corporate": {
        "blocks": [
          {
            "x": 485,
            "top": 1174,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+55% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 380,
            "top": 1225,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Kering Eyewear",
                "size": 38,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "& Corporate",
                "size": 38,
                "weight": 800,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1285,
            "top": 475,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
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
            "x": 1670,
            "top": 399,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "75% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
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
            "x": 2022,
            "top": 338,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "27% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2520,
            "top": 411,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "18% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
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
            "x": 1299.5,
            "top": 999,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1678,
            "top": 976,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 2010,
            "top": 903,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2520,
            "top": 667,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2520,
            "top": 770,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "personnel_expenses": {
        "blocks": [
          {
            "x": 2520,
            "top": 901,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Personnel",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "14% of revenue",
                "size": 28,
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
            "x": 2520,
            "top": 1107,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other opex",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "34% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "kering-fy22",
      "href": "data/assets/raster-annotations/kering/kering-fy22.png",
      "x": 680,
      "y": 310,
      "width": 620,
      "height": 214
    },
    {
      "key": "gucci-fy22",
      "href": "data/assets/raster-annotations/kering/gucci-fy22.png",
      "x": 57,
      "y": 457,
      "width": 333,
      "height": 69
    },
    {
      "key": "saint-laurent-fy22",
      "href": "data/assets/raster-annotations/kering/saint-laurent-fy22.png",
      "x": 23,
      "y": 694,
      "width": 397,
      "height": 53
    },
    {
      "key": "bottega-fy22",
      "href": "data/assets/raster-annotations/kering/bottega-fy22.png",
      "x": 45,
      "y": 884,
      "width": 363,
      "height": 49
    }
  ],
  "annotationsSvg": "<text x=\"55\" y=\"242\" fill=\"#155077\" font-size=\"40\" font-weight=\"700\">in euros</text><text x=\"170\" y=\"1435\" font-size=\"40\" font-weight=\"700\">Source: Financial results</text>",
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2d575e",
        "label": "#2d575e"
      },
      "hub": {
        "node": "#2d575e",
        "label": "#2d575e"
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
      "source": "#99abaf",
      "hub": "#99abaf",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "i18n": {
    "zh": {
      "name": "开云集团 · 2022 财年",
      "meta": {
        "title": "开云集团 2022 财年利润表",
        "titleTextLength": 1750
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 +8%"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 +31%"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 +16%"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 +18%"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +55%"
          ]
        },
        "segment_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +15%"
          ]
        },
        "eliminations": {
          "label": "抵销项",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 75%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 27%",
            "同比 (1 个百分点)"
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
          "label": "净利润",
          "notes": [
            "占收入 18%",
            "同比 +0 个百分点"
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
        "personnel_expenses": {
          "label": [
            "人员",
            "费用"
          ],
          "notes": [
            "占收入 14%"
          ]
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": [
            "占收入 34%"
          ]
        }
      },
      "layout": {
        "labels": {
          "segment_hub": {
            "blocks": []
          },
          "gucci": {
            "blocks": [
              {
                "x": 485,
                "top": 312,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "saint_laurent": {
            "blocks": [
              {
                "x": 485,
                "top": 599,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "bottega_veneta": {
            "blocks": [
              {
                "x": 485,
                "top": 803,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_houses": {
            "blocks": [
              {
                "x": 485,
                "top": 966,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 365,
                "top": 1060,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他品牌",
                    "size": 38,
                    "weight": 800,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "eyewear_corporate": {
            "blocks": [
              {
                "x": 485,
                "top": 1174,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +55%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 380,
                "top": 1225,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "开云眼镜",
                    "size": 38,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "及公司业务",
                    "size": 38,
                    "weight": 800,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1285,
                "top": 475,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
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
                "x": 1670,
                "top": 399,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 75%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
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
                "x": 2022,
                "top": 338,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2520,
                "top": 411,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
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
                "x": 1299.5,
                "top": 999,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1678,
                "top": 976,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 2010,
                "top": 903,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2520,
                "top": 667,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2520,
                "top": 770,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "personnel_expenses": {
            "blocks": [
              {
                "x": 2520,
                "top": 901,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "人员",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 14%",
                    "size": 28,
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
                "x": 2520,
                "top": 1107,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"55\" y=\"242\" fill=\"#155077\" font-size=\"40\" font-weight=\"700\">单位：欧元</text><text x=\"170\" y=\"1435\" font-size=\"40\" font-weight=\"700\">来源：财务业绩</text>"
    }
  }
});})();
