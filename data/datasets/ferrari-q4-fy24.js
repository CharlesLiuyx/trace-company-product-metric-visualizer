(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "ferrari-q4-fy24",
  "name": "Ferrari · Q4 FY24",
  "company": "Ferrari",
  "meta": {
    "company": "Ferrari",
    "title": "Ferrari Q4 FY24 Income Statement",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/ferrari-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 200,
    "titleSize": 120,
    "titleWeight": 800
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
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#000000",
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
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36,
      "value": 36,
      "note": 26,
      "lineGap": 9
    }
  },
  "rasterAnnotations": [
    {
      "key": "ferrari-company-crest-and-wordmark",
      "href": "data/assets/raster-annotations/ferrari/company-crest-and-wordmark-q4-fy25.png",
      "x": 813.90380859375,
      "y": 234.404296875,
      "width": 306.02783203125,
      "height": 319.05029296875
    },
    {
      "key": "ferrari-cars-and-spare-parts",
      "href": "data/assets/raster-annotations/ferrari/cars-and-spare-parts-q4-fy25.png",
      "x": 184.9189453125,
      "y": 562.5703125,
      "width": 226.5908203125,
      "height": 88.552734375
    },
    {
      "key": "ferrari-sponsorships-commercial-brands",
      "href": "data/assets/raster-annotations/ferrari/sponsorships-commercial-brands-q4-fy25.png",
      "x": 167.98974609375,
      "y": 890.736328125,
      "width": 223.986328125,
      "height": 78.134765625
    }
  ],
  "layout": {
    "scale": 200,
    "nodes": {
      "cars_and_spare_parts": {
        "x": 466,
        "y": 530,
        "width": 72,
        "height": 286
      },
      "sponsorships_commercial_brands": {
        "x": 466,
        "y": 1019,
        "width": 72,
        "height": 35
      },
      "other": {
        "x": 466,
        "y": 1241,
        "width": 72,
        "height": 16
      },
      "revenue": {
        "x": 933,
        "y": 731,
        "width": 72,
        "height": 339
      },
      "gross_profit": {
        "x": 1403,
        "y": 611,
        "width": 72,
        "height": 169
      },
      "cost_of_sales": {
        "x": 1406,
        "y": 1017,
        "width": 72,
        "height": 169
      },
      "operating_profit": {
        "x": 1870,
        "y": 517,
        "width": 72,
        "height": 93
      },
      "operating_expenses": {
        "x": 1870,
        "y": 790,
        "width": 72,
        "height": 79
      },
      "net_profit": {
        "x": 2334,
        "y": 429,
        "width": 73,
        "height": 76
      },
      "tax": {
        "x": 2334,
        "y": 677,
        "width": 73,
        "height": 17
      },
      "rnd": {
        "x": 2334,
        "y": 878,
        "width": 73,
        "height": 48
      },
      "sga": {
        "x": 2334,
        "y": 1058,
        "width": 73,
        "height": 31
      },
      "other_opex": {
        "x": 2334,
        "y": 1222,
        "width": 73,
        "height": 1
      }
    },
    "labels": {
      "cars_and_spare_parts": {
        "blocks": [
          {
            "x": 501.36474609375,
            "top": 433.64794921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 312.5390625,
            "top": 679.7724609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Cars and",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 800
              },
              {
                "text": "spare parts",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 800
              }
            ]
          }
        ]
      },
      "sponsorships_commercial_brands": {
        "blocks": [
          {
            "x": 501.36474609375,
            "top": 919.3857421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 984.498046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Sponsorships,",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 800
              },
              {
                "text": "commercial & brands",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 800
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 501.36474609375,
            "top": 1143.3720703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 350.30419921875,
            "top": 1220.20458984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Other",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 968.87109375,
            "top": 582.10400390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#000000",
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1442.888671875,
            "top": 425.83447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "50% margin",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1445.4931640625,
            "top": 1201.97314453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1910.39501953125,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.462890625,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "27% margin",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+3pp Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1910.39501953125,
            "top": 884.22509765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2538.07763671875,
            "top": 391.97607421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.462890625,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "22% margin",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+3pp Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2544.5888671875,
            "top": 651.123046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2538.07763671875,
            "top": 843.85546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2538.07763671875,
            "top": 1010.54296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.044921875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2540.68212890625,
            "top": 1183.74169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "cars_and_spare_parts",
      "label": [
        "Cars and",
        "spare parts"
      ],
      "value": 1.5,
      "valueText": "€1.5B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+14% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "sponsorships_commercial_brands",
      "label": [
        "Sponsorships,",
        "commercial & brands"
      ],
      "value": 0.2,
      "valueText": "€0.2B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.1,
      "valueText": "€0.1B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1.7,
      "valueText": "€1.7B",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+14% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 0.9,
      "valueText": "€0.9B",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "50% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 0.9,
      "valueText": "(€0.9B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.5,
      "valueText": "€0.5B",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "27% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 0.4,
      "valueText": "(€0.4B)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.4,
      "valueText": "€0.4B",
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "22% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "valueText": "(€0.1B)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [
        "14% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [
        "9% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 0.002,
      "valueText": "(€2M)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#e0c6c6",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "cars_and_spare_parts",
      "target": "revenue",
      "value": 1.5,
      "sourceWidth": 286,
      "targetWidth": 286,
      "y0": 673,
      "y1": 874,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "sponsorships_commercial_brands",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 35,
      "targetWidth": 35,
      "y0": 1036.5,
      "y1": 1034.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 16,
      "targetWidth": 18,
      "y0": 1249,
      "y1": 1061,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 0.9,
      "sourceWidth": 169,
      "targetWidth": 169,
      "y0": 815.5,
      "y1": 695.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 0.9,
      "sourceWidth": 170,
      "targetWidth": 169,
      "y0": 985,
      "y1": 1101.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 91,
      "targetWidth": 93,
      "y0": 656.5,
      "y1": 563.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.4,
      "sourceWidth": 78,
      "targetWidth": 79,
      "y0": 741,
      "y1": 829.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 76,
      "targetWidth": 76,
      "y0": 555,
      "y1": 467,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 17,
      "targetWidth": 17,
      "y0": 601.5,
      "y1": 685.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.2,
      "sourceWidth": 48,
      "targetWidth": 48,
      "y0": 814,
      "y1": 902,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.2,
      "sourceWidth": 30,
      "targetWidth": 31,
      "y0": 853,
      "y1": 1073.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.002,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 868.5,
      "y1": 1222.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"finance\" data-link-numerator=\"finance\" data-link-denominator=\"net_profit\" data-link-anchor-x=\"2300\" data-link-anchor-y=\"549\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><path d=\"M2334 504 C2310 504 2317 549 2298 549 H2230\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"2272\" y=\"590\" font-size=\"31\" font-weight=\"700\" fill=\"#008f51\">Finance</text><text x=\"2272\" y=\"632\" font-size=\"30\" fill=\"#008f51\">€4M</text></g>",
  "nonNodeMetrics": [
    {
      "id": "finance",
      "representation": "annotation",
      "value": 0.004,
      "type": "profit",
      "label": "Finance",
      "valueText": "€4M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "法拉利 · 2024 财年第四季度",
      "meta": {
        "title": "法拉利 2024 财年第四季度利润表",
        "titleSize": 108
      },
      "nodes": {
        "cars_and_spare_parts": {
          "label": [
            "汽车及",
            "零部件"
          ],
          "notes": [
            "同比 +14%"
          ]
        },
        "sponsorships_commercial_brands": {
          "label": [
            "赞助、商业",
            "与品牌"
          ],
          "notes": [
            "同比 +22%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 (4%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 50%",
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
            "利润率 27%",
            "同比 +3 个百分点"
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
            "利润率 22%",
            "同比 +3 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发 R&D",
          "notes": [
            "占收入 14%",
            "同比 (2 个百分点)"
          ]
        },
        "sga": {
          "label": "销管 SG&A",
          "notes": [
            "占收入 9%",
            "同比 +1 个百分点"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        }
      },
      "nonNodeMetrics": {
        "finance": {
          "label": "财务收益"
        }
      },
      "layout": {
        "labels": {
          "cars_and_spare_parts": {
            "blocks": [
              {
                "x": 501.36474609375,
                "top": 433.64794921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 312.5390625,
                "top": 679.7724609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "汽车及",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 800
                  },
                  {
                    "text": "零部件",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "sponsorships_commercial_brands": {
            "blocks": [
              {
                "x": 501.36474609375,
                "top": 919.3857421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 984.498046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "赞助、商业",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 800
                  },
                  {
                    "text": "与品牌",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 501.36474609375,
                "top": 1143.3720703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 350.30419921875,
                "top": 1220.20458984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 968.87109375,
                "top": 582.10400390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#000000",
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1442.888671875,
                "top": 425.83447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 50%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1445.4931640625,
                "top": 1201.97314453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1910.39501953125,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.462890625,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 27%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1910.39501953125,
                "top": 884.22509765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2538.07763671875,
                "top": 391.97607421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 22%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2544.5888671875,
                "top": 651.123046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2538.07763671875,
                "top": 843.85546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发 R&D",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2538.07763671875,
                "top": 1010.54296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销管 SG&A",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.044921875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2540.68212890625,
                "top": 1183.74169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"finance\" data-link-numerator=\"finance\" data-link-denominator=\"net_profit\" data-link-anchor-x=\"2300\" data-link-anchor-y=\"549\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><path d=\"M2334 504 C2310 504 2317 549 2298 549 H2230\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"2272\" y=\"590\" font-size=\"31\" font-weight=\"700\" fill=\"#008f51\">财务收益</text><text x=\"2272\" y=\"632\" font-size=\"30\" fill=\"#008f51\">€4M</text></g>"
    }
  }
});})();
