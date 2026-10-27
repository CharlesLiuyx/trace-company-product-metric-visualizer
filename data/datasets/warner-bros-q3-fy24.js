(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "warner-bros-q3-fy24",
  "name": "Warner Bros. Discovery · Q3 FY24",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.61458333333331,
    "titleSize": 119.79166666666666,
    "titleWeight": 800,
    "titleTextLength": 2454.73388671875,
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
    "titleColor": "#155477",
    "palette": {
      "source": {
        "node": "#0019ae",
        "label": "#0019ae"
      },
      "hub": {
        "node": "#0019ae",
        "label": "#0019ae"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009653"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a31700"
      }
    },
    "linkTint": {
      "source": "#8994d2",
      "hub": "#8994d2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 29,
      "note": 21,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"37\" y=\"919\" width=\"643\" height=\"92\" rx=\"24\" fill=\"#0019ae\"/><text x=\"99\" y=\"958\" font-size=\"23\" font-weight=\"800\" fill=\"white\">DTC Subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"291\" y=\"958\" font-size=\"23\" fill=\"white\">110.5M</text><text x=\"379\" y=\"958\" font-size=\"23\" fill=\"white\">(+15% Y/Y &amp; +7% Q/Q)</text><text x=\"141\" y=\"991\" font-size=\"23\" font-weight=\"800\" fill=\"white\">Global ARPU</text><text data-operating-metric=\"global_arpu\" x=\"293\" y=\"991\" font-size=\"23\" fill=\"white\">$7.84</text><text x=\"359\" y=\"991\" font-size=\"23\" fill=\"white\">(-1% Y/Y &amp; -2% Q/Q)</text><text x=\"324\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g></g>",
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC Subscribers",
      "value": "110500000",
      "unit": "count",
      "currency": null,
      "literal": "110.5M",
      "notes": [
        "+15% Y/Y",
        "+7% Q/Q"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "DTC Subscribers 110.5M (+15% Y/Y & +7% Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          125,
          1220,
          690,
          40
        ]
      }
    },
    {
      "id": "global_arpu",
      "label": "Global ARPU",
      "value": "0.00784",
      "unit": "K",
      "currency": "USD",
      "literal": "$7.84",
      "notes": [
        "-1% Y/Y",
        "-2% Q/Q"
      ],
      "comparison": "eq",
      "basis": "unspecified",
      "quote": "Global ARPU $8.00 (-1% Y/Y & -2% Q/Q); official Q3 correction: Global ARPU $7.84",
      "anchor": {
        "type": "image-box",
        "box": [
          180,
          1262,
          620,
          40
        ]
      }
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 559.9658203125,
      "y": 218.75,
      "width": 748.79150390625,
      "height": 269.53125
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 31.25390625,
      "y": 360.6770833333333,
      "width": 160.17626953125,
      "height": 167.96875
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-networks-cluster.png",
      "x": 33.8583984375,
      "y": 634.1145833333333,
      "width": 143.2470703125,
      "height": 222.65625
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-streaming-cluster.png",
      "x": 45.57861328125,
      "y": 964.84375,
      "width": 110.69091796875,
      "height": 197.91666666666666
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 428.43896484375,
        "y": 419.2708333333333,
        "width": 72.92578125,
        "height": 79.42708333333333
      },
      "networks": {
        "x": 428.43896484375,
        "y": 696.6145833333333,
        "width": 72.92578125,
        "height": 148.4375
      },
      "streaming": {
        "x": 428.43896484375,
        "y": 1022.1354166666666,
        "width": 72.92578125,
        "height": 76.82291666666666
      },
      "gross_revenue": {
        "x": 802.18359375,
        "y": 617.1875,
        "width": 72.92578125,
        "height": 304.6875
      },
      "revenue": {
        "x": 1175.92822265625,
        "y": 656.25,
        "width": 72.92578125,
        "height": 285.15625
      },
      "eliminations": {
        "x": 1170.71923828125,
        "y": 1054.6875,
        "width": 72.92578125,
        "height": 20.833333333333332
      },
      "gross_profit": {
        "x": 1549.6728515625,
        "y": 565.1041666666666,
        "width": 72.92578125,
        "height": 130.20833333333331
      },
      "cost_of_revenue": {
        "x": 1552.27734375,
        "y": 875.0,
        "width": 72.92578125,
        "height": 152.34375
      },
      "operating_profit": {
        "x": 1933.83544921875,
        "y": 485.6770833333333,
        "width": 72.92578125,
        "height": 7.8125
      },
      "operating_expenses": {
        "x": 1933.83544921875,
        "y": 695.3125,
        "width": 72.92578125,
        "height": 123.69791666666666
      },
      "net_profit": {
        "x": 2297.162109375,
        "y": 417.96875,
        "width": 72.92578125,
        "height": 3.90625
      },
      "other_nonoperating": {
        "x": 2297.162109375,
        "y": 598.9583333333333,
        "width": 72.92578125,
        "height": 3.90625
      },
      "sga": {
        "x": 2297.162109375,
        "y": 809.8958333333333,
        "width": 72.92578125,
        "height": 70.3125
      },
      "amortization": {
        "x": 2297.162109375,
        "y": 1006.5104166666666,
        "width": 72.92578125,
        "height": 52.08333333333333
      },
      "other_operating_expense": {
        "x": 2297.162109375,
        "y": 1209.6354166666665,
        "width": 72.92578125,
        "height": 1.3020833333333333
      }
    },
    "labels": {
      "studios": {
        "blocks": [
          {
            "x": 464.90185546875,
            "top": 326.82291666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#0019ae",
                "weight": 400
              },
              {
                "text": "(17%) Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 414.0625,
            "anchor": "end",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Studios",
                "size": 39.0625,
                "color": "#0019ae",
                "weight": 800
              },
              {
                "text": "11% adj. margin",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(12pp) Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 464.90185546875,
            "top": 602.8645833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#0019ae",
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 713.5416666666666,
            "anchor": "end",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Networks",
                "size": 39.0625,
                "color": "#0019ae",
                "weight": 800
              },
              {
                "text": "42% adj. margin",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(7pp) Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "streaming": {
        "blocks": [
          {
            "x": 464.90185546875,
            "top": 928.3854166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#0019ae",
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1006.5104166666666,
            "anchor": "end",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Direct to",
                "size": 39.0625,
                "color": "#0019ae",
                "weight": 800
              },
              {
                "text": "consumer",
                "size": 39.0625,
                "color": "#0019ae",
                "weight": 800
              },
              {
                "text": "11% adj. margin",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1212.39111328125,
            "top": 510.41666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "color": "#0019ae",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#0019ae",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1212.39111328125,
            "top": 1093.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Eliminations",
                "size": 39.0625,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#a31700",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1586.1357421875,
            "top": 377.60416666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#009653",
                "weight": 400
              },
              {
                "text": "46% margin",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1588.740234375,
            "top": 1045.5729166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#a31700",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1970.29833984375,
            "top": 299.47916666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#009653",
                "weight": 400
              },
              {
                "text": "3% margin",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
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
            "x": 1970.29833984375,
            "top": 835.9375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#a31700",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 351.5625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "color": "#009653",
                "weight": 400
              },
              {
                "text": "1% margin",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 555.9895833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 32.55208333333333,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "color": "#a31700",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 792.96875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "SG&A",
                "size": 32.55208333333333,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "color": "#a31700",
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 985.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Amortization",
                "size": 32.55208333333333,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "color": "#a31700",
                "weight": 400
              },
              {
                "text": "18% of revenue",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34375,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_operating_expense": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1174.4791666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 32.55208333333333,
                "color": "#a31700",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "color": "#a31700",
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
      "id": "studios",
      "label": "Studios",
      "value": 2.7,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(17%) Y/Y",
        "11% adj. margin",
        "(12pp) Y/Y"
      ],
      "valueText": "$2.7B"
    },
    {
      "id": "networks",
      "label": "Networks",
      "value": 5,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+3% Y/Y",
        "42% adj. margin",
        "(7pp) Y/Y"
      ],
      "valueText": "$5.0B"
    },
    {
      "id": "streaming",
      "label": "Direct to consumer",
      "value": 2.6,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+8% Y/Y",
        "11% adj. margin",
        "+6pp Y/Y"
      ],
      "valueText": "$2.6B"
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 10.3,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 9.6,
      "type": "hub",
      "col": 2,
      "order": 4,
      "notes": [
        "(4%) Y/Y"
      ],
      "valueText": "$9.6B"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -0.7,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "valueText": "($0.7B)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 4.4,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "46% margin",
        "(1pp) Y/Y"
      ],
      "valueText": "$4.4B"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 5.2,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "valueText": "($5.2B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.3,
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "3% margin",
        "+2pp Y/Y"
      ],
      "valueText": "$0.3B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.2,
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [],
      "valueText": "($4.2B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.1,
      "type": "profit",
      "col": 5,
      "order": 10,
      "notes": [
        "1% margin",
        "+6pp Y/Y"
      ],
      "valueText": "$0.1B"
    },
    {
      "id": "other_nonoperating",
      "label": "Other",
      "value": 0.146,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [],
      "valueText": "($146M)"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.4,
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": [
        "25% of revenue",
        "+2pp Y/Y"
      ],
      "valueText": "($2.4B)"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 1.8,
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": [
        "18% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($1.8B)"
    },
    {
      "id": "other_operating_expense",
      "label": "Other",
      "value": 0.014,
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": [],
      "valueText": "($14M)"
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 2.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 79.42708333333333
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "width": 148.4375
    },
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 2.6,
      "sourceOrder": 0,
      "targetOrder": 2,
      "width": 76.82291666666666
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 9.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 283.85416666666663,
      "targetWidth": 285.15625
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 20.833333333333332
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 131.51041666666666,
      "targetWidth": 130.20833333333331,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 153.64583333333331,
      "targetWidth": 152.34375
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 7.8125,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 122.39583333333333,
      "targetWidth": 123.69791666666666
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 3.90625,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other_nonoperating",
      "value": 0.146,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 3.90625
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 70.3125
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 52.08333333333333
    },
    {
      "source": "operating_expenses",
      "target": "other_operating_expense",
      "value": 0.014,
      "sourceOrder": 2,
      "targetOrder": 0,
      "width": 1.3020833333333333
    }
  ],
  "i18n": {
    "zh": {
      "name": "华纳兄弟探索 · 2024 财年第三季度",
      "meta": {
        "title": "Warner Bros. 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "titleTextLength": 2161.728515625
      },
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (17%)",
            "调整后利润率 11%",
            "同比 (12 个百分点)"
          ]
        },
        "networks": {
          "label": "电视网络",
          "notes": [
            "同比 +3%",
            "调整后利润率 42%",
            "同比 (7 个百分点)"
          ]
        },
        "streaming": {
          "label": "直接面向消费者",
          "notes": [
            "同比 +8%",
            "调整后利润率 11%",
            "同比 +6 个百分点"
          ]
        },
        "gross_revenue": {
          "label": "分部总收入",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (4%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 46%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 +6 个百分点"
          ]
        },
        "other_nonoperating": {
          "label": "其他",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 25%",
            "同比 +2 个百分点"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 18%",
            "同比 (2 个百分点)"
          ]
        },
        "other_operating_expense": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "studios": {
            "blocks": [
              {
                "x": 464.90185546875,
                "top": 326.82291666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#0019ae",
                    "weight": 400
                  },
                  {
                    "text": "同比 (17%)",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 414.0625,
                "anchor": "end",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 39.0625,
                    "color": "#0019ae",
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 11%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (12 个百分点)",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 464.90185546875,
                "top": 602.8645833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#0019ae",
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 713.5416666666666,
                "anchor": "end",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "电视网络",
                    "size": 39.0625,
                    "color": "#0019ae",
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 42%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "streaming": {
            "blocks": [
              {
                "x": 464.90185546875,
                "top": 928.3854166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#0019ae",
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1006.5104166666666,
                "anchor": "end",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 39.0625,
                    "color": "#0019ae",
                    "weight": 800
                  },
                  {
                    "text": "消费者",
                    "size": 39.0625,
                    "color": "#0019ae",
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 11%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1212.39111328125,
                "top": 510.41666666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "color": "#0019ae",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#0019ae",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1212.39111328125,
                "top": 1093.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 39.0625,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#a31700",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1586.1357421875,
                "top": 377.60416666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#009653",
                    "weight": 400
                  },
                  {
                    "text": "利润率 46%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1588.740234375,
                "top": 1045.5729166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#a31700",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1970.29833984375,
                "top": 299.47916666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#009653",
                    "weight": 400
                  },
                  {
                    "text": "利润率 3%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
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
                "x": 1970.29833984375,
                "top": 835.9375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0625,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#a31700",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 351.5625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "color": "#009653",
                    "weight": 400
                  },
                  {
                    "text": "利润率 1%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 555.9895833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55208333333333,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#a31700",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 792.96875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 29.947916666666664,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#a31700",
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 985.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 32.55208333333333,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#a31700",
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34375,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_operating_expense": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1174.4791666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55208333333333,
                    "color": "#a31700",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#a31700",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"37\" y=\"919\" width=\"643\" height=\"92\" rx=\"24\" fill=\"#0019ae\"/><text x=\"99\" y=\"958\" font-size=\"23\" font-weight=\"800\" fill=\"white\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"291\" y=\"958\" font-size=\"23\" fill=\"white\">110.5M</text><text x=\"379\" y=\"958\" font-size=\"23\" fill=\"white\">（同比 +15%，环比 +7%）</text><text x=\"141\" y=\"991\" font-size=\"23\" font-weight=\"800\" fill=\"white\">全球 ARPU</text><text data-operating-metric=\"global_arpu\" x=\"293\" y=\"991\" font-size=\"23\" fill=\"white\">$7.84</text><text x=\"359\" y=\"991\" font-size=\"23\" fill=\"white\">（同比 -1%，环比 -2%）</text><text x=\"324\" y=\"1037\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">ARPU = 每用户平均收入</text></g></g>"
    }
  }
});})();
