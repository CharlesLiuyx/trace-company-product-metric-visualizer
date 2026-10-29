window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "comcast-q3-fy24",
  "name": "Comcast · Q3 FY24",
  "company": "Comcast",
  "meta": {
    "company": "Comcast",
    "title": "Comcast Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/comcast-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 194,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2300,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "residential_connectivity:right",
        "comcast_business:right",
        "media:right",
        "studios:right",
        "parks:right",
        "connectivity:left",
        "connectivity:right",
        "corporate:right",
        "content_experiences:left",
        "content_experiences:right",
        "gross_revenue:left",
        "gross_revenue:right",
        "eliminations_content:left",
        "eliminations_gross:left",
        "revenue:left",
        "revenue:right",
        "gross_profit:left",
        "gross_profit:right",
        "programming_production:left",
        "operating_profit:left",
        "operating_profit:right",
        "operating_expenses:left",
        "operating_expenses:right",
        "net_profit:left",
        "interest:left",
        "tax:left",
        "other_operating_administrative:left",
        "depreciation:left",
        "advertising:left",
        "amortization:left"
      ]
    },
    "titleColor": "#15527a",
    "subtitleColor": "#6b6b6b",
    "noteColor": "#6b6b6b",
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
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#8b8b8b",
      "hub": "#8b8b8b",
      "profit": "#9bce99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/comcast/company-wordmark-v2.png",
      "x": 965,
      "y": 222,
      "width": 500,
      "height": 185
    },
    {
      "key": "connectivity-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/connectivity-icon-cluster.png",
      "x": 42,
      "y": 366,
      "width": 335,
      "height": 220
    },
    {
      "key": "comcast-business-wordmark",
      "href": "data/assets/raster-annotations/comcast/comcast-business-wordmark.png",
      "x": 107,
      "y": 692,
      "width": 244,
      "height": 118
    },
    {
      "key": "media-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/media-icon-cluster.png",
      "x": 116,
      "y": 810,
      "width": 242,
      "height": 188
    },
    {
      "key": "studios-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/studios-icon-cluster.png",
      "x": 110,
      "y": 1026,
      "width": 250,
      "height": 167
    },
    {
      "key": "parks-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/parks-icon-cluster.png",
      "x": 106,
      "y": 1199,
      "width": 254,
      "height": 185
    }
  ],
  "layout": {
    "scale": 11,
    "nodes": {
      "residential_connectivity": {
        "x": 396,
        "y": 406,
        "width": 72,
        "height": 156
      },
      "comcast_business": {
        "x": 396,
        "y": 741,
        "width": 72,
        "height": 21
      },
      "media": {
        "x": 396,
        "y": 914,
        "width": 72,
        "height": 72
      },
      "studios": {
        "x": 396,
        "y": 1138,
        "width": 72,
        "height": 25
      },
      "parks": {
        "x": 396,
        "y": 1315,
        "width": 72,
        "height": 20
      },
      "connectivity": {
        "x": 707,
        "y": 492,
        "width": 72,
        "height": 178
      },
      "corporate": {
        "x": 707,
        "y": 804,
        "width": 72,
        "height": 6
      },
      "content_experiences": {
        "x": 707,
        "y": 962,
        "width": 72,
        "height": 117
      },
      "gross_revenue": {
        "x": 1021,
        "y": 572,
        "width": 72,
        "height": 294
      },
      "eliminations_content": {
        "x": 1016,
        "y": 1144,
        "width": 72,
        "height": 7
      },
      "revenue": {
        "x": 1330,
        "y": 640,
        "width": 72,
        "height": 282
      },
      "eliminations_gross": {
        "x": 1330,
        "y": 1063,
        "width": 72,
        "height": 13
      },
      "gross_profit": {
        "x": 1632,
        "y": 568,
        "width": 72,
        "height": 192
      },
      "programming_production": {
        "x": 1641,
        "y": 918,
        "width": 72,
        "height": 90
      },
      "operating_profit": {
        "x": 1956,
        "y": 483,
        "width": 72,
        "height": 52
      },
      "operating_expenses": {
        "x": 1958,
        "y": 705,
        "width": 72,
        "height": 141
      },
      "net_profit": {
        "x": 2264,
        "y": 388,
        "width": 73,
        "height": 32
      },
      "tax": {
        "x": 2264,
        "y": 584,
        "width": 73,
        "height": 9
      },
      "interest": {
        "x": 2264,
        "y": 678,
        "width": 73,
        "height": 11
      },
      "other_operating_administrative": {
        "x": 2264,
        "y": 759,
        "width": 73,
        "height": 89
      },
      "depreciation": {
        "x": 2264,
        "y": 986,
        "width": 73,
        "height": 20
      },
      "advertising": {
        "x": 2264,
        "y": 1157,
        "width": 73,
        "height": 18
      },
      "amortization": {
        "x": 2264,
        "y": 1332,
        "width": 73,
        "height": 15
      }
    },
    "labels": {
      "residential_connectivity": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 316.44580078125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(0%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "comcast_business": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 642.00732421875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "media": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 820.4150390625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+37% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "studios": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 1036.587890625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+12% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "parks": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 1213.693359375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(5%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "connectivity": {
        "blocks": [
          {
            "x": 738.37353515625,
            "top": 342.49072265625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Connectivity",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+0% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1364.75390625,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1674.6884765625,
            "top": 378.95361328125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "68% margin",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1992.4365234375,
            "top": 291.703125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
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
                "text": "18% margin",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2470.36083984375,
            "top": 343.79296875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "11% margin",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          }
        ]
      },
      "programming_production": {
        "blocks": [
          {
            "x": 1677.29296875,
            "top": 1023.5654296875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Programming",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& production",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1975.50732421875,
            "top": 863.38916015625,
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
      "corporate": {
        "blocks": [
          {
            "x": 739.67578125,
            "top": 713.630859375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          },
          {
            "x": 688.88818359375,
            "top": 782.64990234375,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Corporate",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "content_experiences": {
        "blocks": [
          {
            "x": 739.67578125,
            "top": 1096.4912109375,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+22% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6b6b6b"
              }
            ]
          },
          {
            "x": 739.67578125,
            "top": 1195.4619140625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Content &",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "Experiences",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      },
      "eliminations_content": {
        "blocks": [
          {
            "x": 1050.91259765625,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
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
      "eliminations_gross": {
        "blocks": [
          {
            "x": 1363.45166015625,
            "top": 1089.97998046875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
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
      "tax": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 545.64111328125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 648.5185546875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_operating_administrative": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 768.3251953125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other operating &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "depreciation": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 955.8486328125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Depreciation",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 1131.65185546875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Advertising",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2479.4765625,
            "top": 1295.73486328125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "residential_connectivity",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Residential Connectivity",
      "value": 17.9,
      "valueText": "$17.9B",
      "notes": [
        "(0%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "comcast_business",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Comcast Business",
      "value": 2.4,
      "valueText": "$2.4B",
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "connectivity",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Connectivity",
      "value": 20.3,
      "valueText": "$20.3B",
      "notes": [
        "+0% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "corporate",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Corporate",
      "value": 0.7,
      "valueText": "$0.7B",
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "media",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Media",
      "value": 8.2,
      "valueText": "$8.2B",
      "notes": [
        "+37% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "studios",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Studio",
      "value": 2.8,
      "valueText": "$2.8B",
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "parks",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Parks",
      "value": 2.3,
      "valueText": "$2.3B",
      "notes": [
        "(5%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "content_experiences",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": [
        "Content &",
        "Experiences"
      ],
      "value": 13.3,
      "valueText": "$13.3B",
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "gross_revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 33.5,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b",
      "notes": []
    },
    {
      "id": "eliminations_content",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.7,
      "valueText": "($0.7B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 32,
      "valueText": "$32.0B",
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#8b8b8b"
    },
    {
      "id": "eliminations_gross",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 1.5,
      "valueText": "($1.5B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": [
        "Gross",
        "profit"
      ],
      "value": 21.9,
      "valueText": "$21.9B",
      "notes": [
        "68% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9bce99"
    },
    {
      "id": "programming_production",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Programming",
        "& production"
      ],
      "value": 10.2,
      "valueText": "($10.2B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 5.9,
      "valueText": "$5.9B",
      "notes": [
        "18% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9bce99"
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 16,
      "valueText": "($16.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 7,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 3.6,
      "valueText": "$3.6B",
      "notes": [
        "11% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#9bce99"
    },
    {
      "id": "interest",
      "col": 7,
      "order": 1,
      "type": "cost",
      "label": "Interest",
      "value": 1,
      "valueText": "($1.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "tax",
      "col": 7,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 1.2,
      "valueText": "($1.2B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "other_operating_administrative",
      "col": 7,
      "order": 3,
      "type": "cost",
      "label": [
        "Other operating &",
        "administrative"
      ],
      "value": 10.1,
      "valueText": "($10.1B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "depreciation",
      "col": 7,
      "order": 4,
      "type": "cost",
      "label": "Depreciation",
      "value": 2.3,
      "valueText": "($2.3B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "advertising",
      "col": 7,
      "order": 5,
      "type": "cost",
      "label": "Advertising",
      "value": 2,
      "valueText": "($2.0B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "amortization",
      "col": 7,
      "order": 6,
      "type": "cost",
      "label": "Amortization",
      "value": 1.7,
      "valueText": "($1.7B)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "residential_connectivity",
      "target": "connectivity",
      "value": 17.9,
      "sourceWidth": 156,
      "targetWidth": 157,
      "y0": 484,
      "y1": 570.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "comcast_business",
      "target": "connectivity",
      "value": 2.4,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 751.5,
      "y1": 659.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "media",
      "target": "content_experiences",
      "value": 8.2,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 950,
      "y1": 998,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "studios",
      "target": "content_experiences",
      "value": 2.8,
      "sourceWidth": 25,
      "targetWidth": 25,
      "y0": 1150.5,
      "y1": 1046.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "parks",
      "target": "content_experiences",
      "value": 2.3,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 1325,
      "y1": 1069,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "connectivity",
      "target": "gross_revenue",
      "value": 20.3,
      "sourceWidth": 178,
      "targetWidth": 178,
      "y0": 581,
      "y1": 661,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "corporate",
      "target": "gross_revenue",
      "value": 0.7,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 807,
      "y1": 753,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "content_experiences",
      "target": "gross_revenue",
      "value": 12.6,
      "sourceWidth": 111,
      "targetWidth": 110,
      "y0": 1017.5,
      "y1": 811,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "content_experiences",
      "target": "eliminations_content",
      "value": 0.7,
      "sourceWidth": 6,
      "targetWidth": 7,
      "y0": 1076,
      "y1": 1147.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 32,
      "sourceWidth": 281,
      "targetWidth": 282,
      "y0": 712.5,
      "y1": 781,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "eliminations_gross",
      "value": 1.5,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 859.5,
      "y1": 1069.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 21.9,
      "sourceWidth": 191,
      "targetWidth": 192,
      "y0": 735.5,
      "y1": 664,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "programming_production",
      "value": 10.2,
      "sourceWidth": 91,
      "targetWidth": 90,
      "y0": 876.5,
      "y1": 963,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 5.9,
      "sourceWidth": 52,
      "targetWidth": 52,
      "y0": 594,
      "y1": 509,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 16,
      "sourceWidth": 140,
      "targetWidth": 141,
      "y0": 690,
      "y1": 775.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.6,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 499,
      "y1": 404,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.2,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 519.5,
      "y1": 588.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 1,
      "sourceWidth": 11,
      "targetWidth": 11,
      "y0": 529.5,
      "y1": 683.5,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_operating_administrative",
      "value": 10.1,
      "sourceWidth": 89,
      "targetWidth": 89,
      "y0": 749.5,
      "y1": 803.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation",
      "value": 2.3,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 804,
      "y1": 996,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 2,
      "sourceWidth": 18,
      "targetWidth": 18,
      "y0": 823,
      "y1": 1166,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.7,
      "sourceWidth": 14,
      "targetWidth": 15,
      "y0": 839,
      "y1": 1339.5,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "康卡斯特 · 2024 财年第三季度",
      "meta": {
        "title": "康卡斯特 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度",
        "titleTextLength": 2300
      },
      "nodes": {
        "residential_connectivity": {
          "label": "住宅连接业务",
          "notes": [
            "同比 (0%)"
          ]
        },
        "comcast_business": {
          "label": "Comcast 商务",
          "notes": [
            "同比 +5%"
          ]
        },
        "connectivity": {
          "label": "连接业务",
          "notes": [
            "同比 +0%"
          ]
        },
        "corporate": {
          "label": "企业及其他",
          "notes": [
            "同比 +5%"
          ]
        },
        "media": {
          "label": "媒体",
          "notes": [
            "同比 +37%"
          ]
        },
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 +12%"
          ]
        },
        "parks": {
          "label": "主题公园",
          "notes": [
            "同比 (5%)"
          ]
        },
        "content_experiences": {
          "label": [
            "内容与",
            "体验"
          ],
          "notes": [
            "同比 +22%"
          ]
        },
        "eliminations_content": {
          "label": "抵销",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "eliminations_gross": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": [
            "毛",
            "利润"
          ],
          "notes": [
            "利润率 68%",
            "同比 (3 个百分点)"
          ]
        },
        "programming_production": {
          "label": [
            "节目",
            "制作"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": [
            "营业",
            "利润"
          ],
          "notes": [
            "利润率 18%",
            "同比 (3 个百分点)"
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
            "利润率 11%",
            "同比 (2 个百分点)"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_operating_administrative": {
          "label": [
            "其他运营",
            "及管理"
          ],
          "notes": []
        },
        "depreciation": {
          "label": "折旧",
          "notes": []
        },
        "advertising": {
          "label": "广告",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "residential_connectivity": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 316.44580078125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "comcast_business": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 642.00732421875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "media": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 820.4150390625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +37%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "studios": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 1036.587890625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "parks": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 1213.693359375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "connectivity": {
            "blocks": [
              {
                "x": 738.37353515625,
                "top": 342.49072265625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "连接业务",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +0%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1364.75390625,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1674.6884765625,
                "top": 378.95361328125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 68%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1992.4365234375,
                "top": 291.703125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
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
                    "text": "利润率 18%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2470.36083984375,
                "top": 343.79296875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "利润率 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              }
            ]
          },
          "programming_production": {
            "blocks": [
              {
                "x": 1677.29296875,
                "top": 1023.5654296875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "节目",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "制作",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1975.50732421875,
                "top": 863.38916015625,
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
          "corporate": {
            "blocks": [
              {
                "x": 739.67578125,
                "top": 713.630859375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              },
              {
                "x": 688.88818359375,
                "top": 782.64990234375,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "企业及其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "content_experiences": {
            "blocks": [
              {
                "x": 739.67578125,
                "top": 1096.4912109375,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6b6b6b"
                  }
                ]
              },
              {
                "x": 739.67578125,
                "top": 1195.4619140625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "内容与",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "体验",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          },
          "eliminations_content": {
            "blocks": [
              {
                "x": 1050.91259765625,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 34,
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
          "eliminations_gross": {
            "blocks": [
              {
                "x": 1363.45166015625,
                "top": 1089.97998046875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 34,
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
          "tax": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 545.64111328125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 648.5185546875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_operating_administrative": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 768.3251953125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他运营",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "及管理",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "depreciation": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 955.8486328125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 1131.65185546875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "广告",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2479.4765625,
                "top": 1295.73486328125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
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
