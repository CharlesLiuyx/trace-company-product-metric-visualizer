/* Disney Q3 FY26 by Segment — source-stated rounded amounts and measured fixed geometry. */
(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "disney-q3-fy26-by-segment",
  "name": "Disney · Q3 FY26 by Segment",
  "company": "Disney",
  "meta": {
    "company": "Disney",
    "title": "Disney Q3 FY26 by Segment",
    "period": "Q3 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/disney-q3-fy26-by-segment.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 122,
    "titleWeight": 800,
    "titleTextLength": 1715,
    "periodX": 2395,
    "periodY": 155,
    "periodNoteY": 197
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#15527a",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#237eb6",
        "label": "#177aba"
      },
      "hub": {
        "node": "#050505",
        "label": "#050505"
      },
      "profit": {
        "node": "#2aa42a",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d90000",
        "label": "#941000"
      }
    },
    "linkTint": {
      "source": "#91bdd7",
      "hub": "#8c8c89",
      "profit": "#9aca99",
      "cost": "#e58384"
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
  "annotationsSvg": "<g fill=\"none\" stroke=\"#177aba\" stroke-width=\"3\"><path d=\"M2310 500 L2356 474 Q2356 451 2378 451 H2624 Q2646 451 2646 474 V524 Q2646 547 2624 547 H2378 Q2356 547 2356 524 Z\" fill=\"#f2f2f2\"/><path d=\"M2316 1148 L2358 1123 Q2358 1100 2380 1100 H2624 Q2646 1100 2646 1123 V1174 Q2646 1198 2624 1198 H2380 Q2358 1198 2358 1174 Z\" fill=\"#f2f2f2\" stroke=\"#16b6c5\"/></g><g data-node=\"svod_profit\" font-size=\"30\"><text x=\"2520\" y=\"490\" text-anchor=\"end\" font-weight=\"800\" fill=\"#177aba\">SVOD</text><text x=\"2542\" y=\"490\" fill=\"#008f47\">$0.7B</text></g><g data-node=\"entertainment_other_profit\" font-size=\"30\"><text x=\"2520\" y=\"532\" text-anchor=\"end\" font-weight=\"800\" fill=\"#177aba\">Other</text><text x=\"2542\" y=\"532\" fill=\"#008f47\">$1.0B</text></g><g data-node=\"parks_profit\" font-size=\"30\"><text x=\"2520\" y=\"1139\" text-anchor=\"end\" font-weight=\"800\" fill=\"#16b6c5\">Parks</text><text x=\"2542\" y=\"1139\" fill=\"#008f47\">$2.5B</text></g><g data-node=\"experiences_other_profit\" font-size=\"30\"><text x=\"2520\" y=\"1181\" text-anchor=\"end\" font-weight=\"800\" fill=\"#16b6c5\">Other</text><text x=\"2542\" y=\"1181\" fill=\"#008f47\">$0.6B</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/disney/company-wordmark.png",
      "x": 1190,
      "y": 245,
      "width": 505,
      "height": 269
    },
    {
      "key": "business-entertainment-streaming-tv-cluster",
      "href": "data/assets/raster-annotations/disney/business-entertainment-streaming-tv-cluster.png",
      "x": 3,
      "y": 357,
      "width": 209,
      "height": 240
    },
    {
      "key": "business-entertainment-content-cluster",
      "href": "data/assets/raster-annotations/disney/business-entertainment-content-cluster.png",
      "x": 25,
      "y": 646,
      "width": 181,
      "height": 130
    },
    {
      "key": "business-sports-espn-cluster",
      "href": "data/assets/raster-annotations/disney/business-sports-espn-cluster.png",
      "x": 677,
      "y": 816,
      "width": 161,
      "height": 102
    },
    {
      "key": "business-experiences-parks-cluster",
      "href": "data/assets/raster-annotations/disney/business-experiences-parks-cluster.png",
      "x": 85,
      "y": 939,
      "width": 147,
      "height": 195
    },
    {
      "key": "business-experiences-consumer-products-cluster",
      "href": "data/assets/raster-annotations/disney/business-experiences-consumer-products-cluster.png",
      "x": 120,
      "y": 1185,
      "width": 137,
      "height": 80
    }
  ],
  "layout": {
    "scale": 14.5,
    "nodes": {
      "subscription": {
        "x": 505,
        "y": 347,
        "width": 66,
        "height": 110
      },
      "advertising": {
        "x": 505,
        "y": 573,
        "width": 66,
        "height": 23
      },
      "content_sales_licensing": {
        "x": 505,
        "y": 709,
        "width": 66,
        "height": 23
      },
      "entertainment_other": {
        "x": 505,
        "y": 852,
        "width": 66,
        "height": 8
      },
      "entertainment_total": {
        "x": 849,
        "y": 506,
        "width": 66,
        "height": 167
      },
      "sports": {
        "x": 849,
        "y": 837,
        "width": 66,
        "height": 65
      },
      "parks_experiences": {
        "x": 505,
        "y": 992,
        "width": 66,
        "height": 130
      },
      "consumer_products": {
        "x": 505,
        "y": 1233,
        "width": 66,
        "height": 15
      },
      "experiences_total": {
        "x": 849,
        "y": 1038,
        "width": 66,
        "height": 145
      },
      "gross_segment_revenue": {
        "x": 1193,
        "y": 622,
        "width": 65,
        "height": 379
      },
      "eliminations": {
        "x": 1536,
        "y": 1155,
        "width": 67,
        "height": 8
      },
      "revenue": {
        "x": 1537,
        "y": 682,
        "width": 65,
        "height": 371
      },
      "segment_operating_profit": {
        "x": 1881,
        "y": 620,
        "width": 66,
        "height": 80
      },
      "operating_expenses": {
        "x": 1881,
        "y": 833,
        "width": 66,
        "height": 289
      },
      "entertainment_profit": {
        "x": 2224,
        "y": 486,
        "width": 66,
        "height": 24
      },
      "sports_profit": {
        "x": 2224,
        "y": 836,
        "width": 66,
        "height": 12
      },
      "experiences_profit": {
        "x": 2224,
        "y": 1128,
        "width": 66,
        "height": 44
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 538,
            "top": 242,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#177aba"
              },
              {
                "text": "+12% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 232,
            "top": 377.5,
            "anchor": "start",
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800,
                "color": "#177aba"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 538,
            "top": 480,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#177aba"
              },
              {
                "text": "(1%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 248,
            "top": 560,
            "anchor": "start",
            "lines": [
              {
                "text": "Advertising",
                "size": 40,
                "weight": 800,
                "color": "#177aba"
              }
            ]
          }
        ]
      },
      "content_sales_licensing": {
        "blocks": [
          {
            "x": 538,
            "top": 617,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#177aba"
              },
              {
                "text": "(6%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 477,
            "top": 676,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Content Sales",
                "size": 36,
                "weight": 800,
                "color": "#177aba"
              },
              {
                "text": "Licensing",
                "size": 36,
                "weight": 800,
                "color": "#177aba"
              }
            ]
          }
        ]
      },
      "entertainment_other": {
        "blocks": [
          {
            "x": 538,
            "top": 760,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#177aba"
              },
              {
                "text": "(4%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 468,
            "top": 830,
            "anchor": "end",
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#177aba"
              }
            ]
          }
        ]
      },
      "entertainment_total": {
        "blocks": [
          {
            "x": 882,
            "top": 352,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Entertainment",
                "size": 40,
                "weight": 800,
                "color": "#177aba"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#177aba"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sports": {
        "blocks": [
          {
            "x": 882,
            "top": 697,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sports",
                "size": 40,
                "weight": 800,
                "color": "#050505"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#050505"
              },
              {
                "text": "+4% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "parks_experiences": {
        "blocks": [
          {
            "x": 538,
            "top": 896,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#16b6c5"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 477,
            "top": 1015,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Parks &",
                "size": 36,
                "weight": 800,
                "color": "#16b6c5"
              },
              {
                "text": "Experiences",
                "size": 36,
                "weight": 800,
                "color": "#16b6c5"
              }
            ]
          }
        ]
      },
      "consumer_products": {
        "blocks": [
          {
            "x": 538,
            "top": 1140,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#16b6c5"
              },
              {
                "text": "+7% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 469,
            "top": 1194,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Consumer",
                "size": 36,
                "weight": 800,
                "color": "#16b6c5"
              },
              {
                "text": "Products",
                "size": 36,
                "weight": 800,
                "color": "#16b6c5"
              }
            ]
          }
        ]
      },
      "experiences_total": {
        "blocks": [
          {
            "x": 882,
            "top": 1207,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Experiences",
                "size": 40,
                "weight": 800,
                "color": "#16b6c5"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#16b6c5"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1555,
            "top": 533,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#050505"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#050505"
              },
              {
                "text": "+7% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1569.5,
            "top": 1182,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 32,
                "weight": 800,
                "color": "#941000"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941000"
              }
            ]
          }
        ]
      },
      "segment_operating_profit": {
        "blocks": [
          {
            "x": 1920,
            "top": 320,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Segment",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "operating",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "profit",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "22% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
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
            "x": 1915,
            "top": 1145,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Segment",
                "size": 40,
                "weight": 800,
                "color": "#941000"
              },
              {
                "text": "Costs &",
                "size": 40,
                "weight": 800,
                "color": "#941000"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941000"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#941000"
              }
            ]
          }
        ]
      },
      "entertainment_profit": {
        "blocks": [
          {
            "x": 2242,
            "top": 289,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Entertainment",
                "size": 40,
                "weight": 800,
                "color": "#177aba"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "15% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sports_profit": {
        "blocks": [
          {
            "x": 2384,
            "top": 774,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sports",
                "size": 40,
                "weight": 800,
                "color": "#050505"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "19% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "experiences_profit": {
        "blocks": [
          {
            "x": 2230,
            "top": 1192,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Experiences",
                "size": 40,
                "weight": 800,
                "color": "#16b6c5"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "30% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 7.5,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#237eb6",
      "labelColor": "#177aba",
      "linkTint": "#91bdd7"
    },
    {
      "id": "advertising",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Advertising",
      "value": 1.6,
      "notes": [
        "(1%) Y/Y"
      ],
      "color": "#237eb6",
      "labelColor": "#177aba",
      "linkTint": "#91bdd7"
    },
    {
      "id": "content_sales_licensing",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Content Sales",
        "Licensing"
      ],
      "value": 1.6,
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#237eb6",
      "labelColor": "#177aba",
      "linkTint": "#91bdd7"
    },
    {
      "id": "entertainment_other",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other",
      "value": 0.6,
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#237eb6",
      "labelColor": "#177aba",
      "linkTint": "#91bdd7"
    },
    {
      "id": "entertainment_total",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": "Entertainment",
      "value": 11.3,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#237eb6",
      "labelColor": "#177aba",
      "linkTint": "#91bdd7"
    },
    {
      "id": "sports",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Sports",
      "value": 4.5,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#050505",
      "labelColor": "#050505",
      "linkTint": "#8c8c89"
    },
    {
      "id": "parks_experiences",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Parks & Experiences",
      "value": 8.9,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#22b7c5",
      "labelColor": "#16b6c5",
      "linkTint": "#85d5da"
    },
    {
      "id": "consumer_products",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Consumer Products",
      "value": 1.1,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#22b7c5",
      "labelColor": "#16b6c5",
      "linkTint": "#85d5da"
    },
    {
      "id": "experiences_total",
      "col": 1,
      "order": 2,
      "type": "source",
      "label": "Experiences",
      "value": 10,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#22b7c5",
      "labelColor": "#16b6c5",
      "linkTint": "#85d5da",
      "valueText": "$10.0B"
    },
    {
      "id": "gross_segment_revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Company segment revenue before eliminations",
      "value": 25.8,
      "color": "#050505",
      "labelColor": "#050505",
      "linkTint": "#8c8c89"
    },
    {
      "id": "eliminations",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.6,
      "color": "#d90000",
      "labelColor": "#941000",
      "linkTint": "#e58384"
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 25.2,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#050505",
      "labelColor": "#050505",
      "linkTint": "#8c8c89"
    },
    {
      "id": "segment_operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Segment operating profit",
      "value": 5.6,
      "notes": [
        "22% margin",
        "+3pp Y/Y"
      ],
      "color": "#2aa42a",
      "labelColor": "#008f47",
      "linkTint": "#9aca99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Segment Costs & expenses",
      "value": 19.7,
      "color": "#d90000",
      "labelColor": "#941000",
      "linkTint": "#e58384"
    },
    {
      "id": "entertainment_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Entertainment",
      "value": 1.7,
      "notes": [
        "15% margin",
        "+5pp Y/Y"
      ],
      "color": "#2aa42a",
      "labelColor": "#177aba",
      "linkTint": "#9aca99"
    },
    {
      "id": "sports_profit",
      "col": 5,
      "order": 1,
      "type": "profit",
      "label": "Sports",
      "value": 0.9,
      "notes": [
        "19% margin",
        "(5pp) Y/Y"
      ],
      "color": "#2aa42a",
      "labelColor": "#050505",
      "linkTint": "#9aca99"
    },
    {
      "id": "experiences_profit",
      "col": 5,
      "order": 2,
      "type": "profit",
      "label": "Experiences",
      "value": 3,
      "notes": [
        "30% margin",
        "+3pp Y/Y"
      ],
      "color": "#2aa42a",
      "labelColor": "#16b6c5",
      "linkTint": "#9aca99",
      "valueText": "$3.0B"
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "entertainment_total",
      "value": 7.5,
      "width": 110,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "entertainment_total",
      "value": 1.6,
      "width": 23,
      "targetOrder": 1
    },
    {
      "source": "content_sales_licensing",
      "target": "entertainment_total",
      "value": 1.6,
      "width": 23,
      "targetOrder": 2
    },
    {
      "source": "entertainment_other",
      "target": "entertainment_total",
      "value": 0.6,
      "width": 8,
      "targetOrder": 3,
      "targetWidth": 11
    },
    {
      "source": "parks_experiences",
      "target": "experiences_total",
      "value": 8.9,
      "width": 130,
      "targetOrder": 0,
      "linkTint": {
        "left": "#85d5da",
        "right": "#85d5da"
      }
    },
    {
      "source": "consumer_products",
      "target": "experiences_total",
      "value": 1.1,
      "width": 15,
      "targetOrder": 1,
      "linkTint": {
        "left": "#85d5da",
        "right": "#85d5da"
      }
    },
    {
      "source": "entertainment_total",
      "target": "gross_segment_revenue",
      "value": 11.3,
      "width": 167,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#91bdd7",
        "right": "#91bdd7"
      }
    },
    {
      "source": "sports",
      "target": "gross_segment_revenue",
      "value": 4.5,
      "width": 65,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#8c8c89",
        "right": "#8c8c89"
      }
    },
    {
      "source": "experiences_total",
      "target": "gross_segment_revenue",
      "value": 10,
      "width": 147,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": {
        "left": "#85d5da",
        "right": "#85d5da"
      },
      "sourceWidth": 145,
      "targetWidth": 147
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 25.2,
      "width": 371,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#8c8c89",
        "right": "#8c8c89"
      }
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 0.6,
      "width": 8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#e58384",
        "right": "#e58384"
      }
    },
    {
      "source": "revenue",
      "target": "segment_operating_profit",
      "value": 5.6,
      "width": 82,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#9aca99",
        "right": "#9aca99"
      },
      "sourceWidth": 82,
      "targetWidth": 80
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 19.7,
      "width": 289,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "segment_operating_profit",
      "target": "entertainment_profit",
      "value": 1.7,
      "width": 24,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_operating_profit",
      "target": "sports_profit",
      "value": 0.9,
      "width": 12,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "segment_operating_profit",
      "target": "experiences_profit",
      "value": 3,
      "width": 44,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Disney · 2026 财年第三季度（按分部）",
      "meta": {
        "title": "Disney 2026 财年第三季度分部",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 6 月"
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +12%"
          ]
        },
        "advertising": {
          "label": "广告",
          "notes": [
            "同比 (1%)"
          ]
        },
        "content_sales_licensing": {
          "label": "内容销售授权",
          "notes": [
            "同比 (6%)"
          ]
        },
        "entertainment_other": {
          "label": "其他",
          "notes": [
            "同比 (4%)"
          ]
        },
        "entertainment_total": {
          "label": "娱乐",
          "notes": [
            "同比 +6%"
          ]
        },
        "sports": {
          "label": "体育",
          "notes": [
            "同比 +4%"
          ]
        },
        "parks_experiences": {
          "label": "乐园及体验",
          "notes": [
            "同比 +10%"
          ]
        },
        "consumer_products": {
          "label": "消费品",
          "notes": [
            "同比 +7%"
          ]
        },
        "experiences_total": {
          "label": "体验",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_segment_revenue": {
          "label": "分部抵销前收入"
        },
        "eliminations": {
          "label": "抵销"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "segment_operating_profit": {
          "label": "分部营业利润",
          "notes": [
            "利润率 22%",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "分部成本及费用"
        },
        "entertainment_profit": {
          "label": "娱乐",
          "notes": [
            "利润率 15%",
            "同比 +5 个百分点"
          ]
        },
        "sports_profit": {
          "label": "体育",
          "notes": [
            "利润率 19%",
            "同比 (5 个百分点)"
          ]
        },
        "experiences_profit": {
          "label": "体验",
          "notes": [
            "利润率 30%",
            "同比 +3 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 538,
                "top": 242,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#177aba"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 232,
                "top": 377.5,
                "anchor": "start",
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 538,
                "top": 480,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#177aba"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 248,
                "top": 560,
                "anchor": "start",
                "lines": [
                  {
                    "text": "广告",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  }
                ]
              }
            ]
          },
          "content_sales_licensing": {
            "blocks": [
              {
                "x": 538,
                "top": 617,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#177aba"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 248,
                "top": 671,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "内容销售",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  },
                  {
                    "text": "授权",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  }
                ]
              }
            ]
          },
          "entertainment_other": {
            "blocks": [
              {
                "x": 538,
                "top": 760,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#177aba"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 248,
                "top": 830,
                "anchor": "start",
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  }
                ]
              }
            ]
          },
          "entertainment_total": {
            "blocks": [
              {
                "x": 882,
                "top": 352,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "娱乐",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#177aba"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sports": {
            "blocks": [
              {
                "x": 882,
                "top": 697,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "体育",
                    "size": 40,
                    "weight": 800,
                    "color": "#050505"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#050505"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "parks_experiences": {
            "blocks": [
              {
                "x": 538,
                "top": 896,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#16b6c5"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 248,
                "top": 1007.5,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "乐园及",
                    "size": 40,
                    "weight": 800,
                    "color": "#16b6c5"
                  },
                  {
                    "text": "体验",
                    "size": 40,
                    "weight": 800,
                    "color": "#16b6c5"
                  }
                ]
              }
            ]
          },
          "consumer_products": {
            "blocks": [
              {
                "x": 538,
                "top": 1140,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#16b6c5"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 248,
                "top": 1216,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "消费品",
                    "size": 40,
                    "weight": 800,
                    "color": "#16b6c5"
                  }
                ]
              }
            ]
          },
          "experiences_total": {
            "blocks": [
              {
                "x": 882,
                "top": 1207,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "体验",
                    "size": 40,
                    "weight": 800,
                    "color": "#16b6c5"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#16b6c5"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1555,
                "top": 533,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#050505"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#050505"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1569.5,
                "top": 1182,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 32,
                    "weight": 800,
                    "color": "#941000"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941000"
                  }
                ]
              }
            ]
          },
          "segment_operating_profit": {
            "blocks": [
              {
                "x": 1920,
                "top": 320,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "分部",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
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
                "x": 1915,
                "top": 1145,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "分部",
                    "size": 40,
                    "weight": 800,
                    "color": "#941000"
                  },
                  {
                    "text": "成本及",
                    "size": 40,
                    "weight": 800,
                    "color": "#941000"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941000"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#941000"
                  }
                ]
              }
            ]
          },
          "entertainment_profit": {
            "blocks": [
              {
                "x": 2242,
                "top": 289,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "娱乐",
                    "size": 40,
                    "weight": 800,
                    "color": "#177aba"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sports_profit": {
            "blocks": [
              {
                "x": 2425,
                "top": 774,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "体育",
                    "size": 40,
                    "weight": 800,
                    "color": "#050505"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 19%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "experiences_profit": {
            "blocks": [
              {
                "x": 2230,
                "top": 1192,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "体验",
                    "size": 40,
                    "weight": 800,
                    "color": "#16b6c5"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 30%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g fill=\"none\" stroke=\"#177aba\" stroke-width=\"3\"><path d=\"M2310 500 L2356 474 Q2356 451 2378 451 H2624 Q2646 451 2646 474 V524 Q2646 547 2624 547 H2378 Q2356 547 2356 524 Z\" fill=\"#f2f2f2\"/><path d=\"M2316 1148 L2358 1123 Q2358 1100 2380 1100 H2624 Q2646 1100 2646 1123 V1174 Q2646 1198 2624 1198 H2380 Q2358 1198 2358 1174 Z\" fill=\"#f2f2f2\" stroke=\"#16b6c5\"/></g><g data-node=\"svod_profit\" font-size=\"30\"><text x=\"2520\" y=\"490\" text-anchor=\"end\" font-weight=\"800\" fill=\"#177aba\">订阅视频</text><text x=\"2542\" y=\"490\" fill=\"#008f47\">$0.7B</text></g><g data-node=\"entertainment_other_profit\" font-size=\"30\"><text x=\"2520\" y=\"532\" text-anchor=\"end\" font-weight=\"800\" fill=\"#177aba\">其他</text><text x=\"2542\" y=\"532\" fill=\"#008f47\">$1.0B</text></g><g data-node=\"parks_profit\" font-size=\"30\"><text x=\"2520\" y=\"1139\" text-anchor=\"end\" font-weight=\"800\" fill=\"#16b6c5\">乐园</text><text x=\"2542\" y=\"1139\" fill=\"#008f47\">$2.5B</text></g><g data-node=\"experiences_other_profit\" font-size=\"30\"><text x=\"2520\" y=\"1181\" text-anchor=\"end\" font-weight=\"800\" fill=\"#16b6c5\">其他</text><text x=\"2542\" y=\"1181\" fill=\"#008f47\">$0.6B</text></g>",
      "nonNodeMetrics": {
        "svod_profit": {
          "label": "订阅视频"
        },
        "entertainment_other_profit": {
          "label": "其他"
        },
        "parks_profit": {
          "label": "乐园"
        },
        "experiences_other_profit": {
          "label": "其他"
        }
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "svod_profit",
      "label": "SVOD",
      "value": 0.7,
      "type": "profit",
      "representation": "annotation",
      "valueText": "$0.7B"
    },
    {
      "id": "entertainment_other_profit",
      "label": "Other",
      "value": 1,
      "type": "profit",
      "representation": "annotation",
      "valueText": "$1.0B"
    },
    {
      "id": "parks_profit",
      "label": "Parks",
      "value": 2.5,
      "type": "profit",
      "representation": "annotation",
      "valueText": "$2.5B"
    },
    {
      "id": "experiences_other_profit",
      "label": "Other",
      "value": 0.6,
      "type": "profit",
      "representation": "annotation",
      "valueText": "$0.6B"
    }
  ]
}); })();
