(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "comcast-q4-fy22",
  "name": "Comcast · Q4 FY22",
  "company": "Comcast",
  "meta": {
    "company": "Comcast",
    "title": "Comcast Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/comcast-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2265,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
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
        "label": "#00984c"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#858585",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#e08585"
    }
  },
  "layout": {
    "scale": 10.8,
    "nodes": {
      "cable": {
        "x": 679,
        "y": 410,
        "width": 73,
        "height": 180
      },
      "media": {
        "x": 397,
        "y": 739,
        "width": 73,
        "height": 65
      },
      "studios": {
        "x": 397,
        "y": 935,
        "width": 73,
        "height": 30
      },
      "parks": {
        "x": 397,
        "y": 1095,
        "width": 73,
        "height": 23
      },
      "nbcu": {
        "x": 676,
        "y": 822,
        "width": 73,
        "height": 118
      },
      "eliminations_nbcu": {
        "x": 779,
        "y": 980,
        "width": 73,
        "height": 10
      },
      "sky": {
        "x": 674,
        "y": 1259,
        "width": 73,
        "height": 48
      },
      "gross_revenue": {
        "x": 1042,
        "y": 659,
        "width": 73,
        "height": 335
      },
      "revenue": {
        "x": 1327,
        "y": 685,
        "width": 73,
        "height": 331
      },
      "eliminations_gross": {
        "x": 1327,
        "y": 1076,
        "width": 73,
        "height": 4
      },
      "gross_profit": {
        "x": 1642,
        "y": 626,
        "width": 73,
        "height": 224
      },
      "programming_production": {
        "x": 1645,
        "y": 993,
        "width": 73,
        "height": 106
      },
      "operating_profit": {
        "x": 1976,
        "y": 511,
        "width": 73,
        "height": 49
      },
      "operating_expenses": {
        "x": 1974,
        "y": 762,
        "width": 73,
        "height": 176
      },
      "net_profit": {
        "x": 2265,
        "y": 407,
        "width": 73,
        "height": 31
      },
      "other_income": {
        "x": 2180,
        "y": 507,
        "width": 73,
        "height": 2
      },
      "interest": {
        "x": 2265,
        "y": 662,
        "width": 73,
        "height": 10
      },
      "tax": {
        "x": 2265,
        "y": 758,
        "width": 73,
        "height": 8
      },
      "other_operating_administrative": {
        "x": 2265,
        "y": 844,
        "width": 73,
        "height": 114
      },
      "advertising": {
        "x": 2265,
        "y": 1038,
        "width": 73,
        "height": 24
      },
      "depreciation": {
        "x": 2265,
        "y": 1145,
        "width": 73,
        "height": 24
      },
      "amortization": {
        "x": 2265,
        "y": 1252,
        "width": 73,
        "height": 14
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "cable": {
        "blocks": [
          {
            "x": 714,
            "top": 314,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+1% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "media": {
        "blocks": [
          {
            "x": 431,
            "top": 648,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#400094"
              },
              {
                "text": "+3% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "studios": {
        "blocks": [
          {
            "x": 431,
            "top": 844,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#400094"
              },
              {
                "text": "+13% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "parks": {
        "blocks": [
          {
            "x": 431,
            "top": 1001,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#400094"
              },
              {
                "text": "+12% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "nbcu": {
        "blocks": [
          {
            "x": 711,
            "top": 660,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "NBCU",
                "size": 64,
                "weight": 800,
                "color": "#400094"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#400094"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "sky": {
        "blocks": [
          {
            "x": 713,
            "top": 1164,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(13%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "eliminations_nbcu": {
        "blocks": [
          {
            "x": 815.5,
            "top": 997,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Eliminations",
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
      "revenue": {
        "blocks": [
          {
            "x": 1363,
            "top": 536,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "+1% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "eliminations_gross": {
        "blocks": [
          {
            "x": 1362,
            "top": 1097,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Eliminations",
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1681,
            "top": 439,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#00984c"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#00984c"
              },
              {
                "text": "67% margin",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "programming_production": {
        "blocks": [
          {
            "x": 1674,
            "top": 1110,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Programming &",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "production",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 2020,
            "top": 322,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#00984c"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#00984c"
              },
              {
                "text": "16% margin",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 2010,
            "top": 950,
            "anchor": "middle",
            "lineGap": 9,
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
            "x": 2462,
            "top": 377,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#00984c"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#00984c"
              },
              {
                "text": "9% margin",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2216.5,
            "top": 520,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#00984c"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#00984c"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2463,
            "top": 627,
            "anchor": "middle",
            "lineGap": 9,
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
      "tax": {
        "blocks": [
          {
            "x": 2463,
            "top": 737,
            "anchor": "middle",
            "lineGap": 9,
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
      "other_operating_administrative": {
        "blocks": [
          {
            "x": 2479,
            "top": 848,
            "anchor": "middle",
            "lineGap": 9,
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
      "advertising": {
        "blocks": [
          {
            "x": 2463,
            "top": 1023,
            "anchor": "middle",
            "lineGap": 9,
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
      "depreciation": {
        "blocks": [
          {
            "x": 2463,
            "top": 1127,
            "anchor": "middle",
            "lineGap": 9,
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
      "amortization": {
        "blocks": [
          {
            "x": 2463,
            "top": 1228,
            "anchor": "middle",
            "lineGap": 9,
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
      "id": "cable",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": "Cable Communications",
      "value": 16.6,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$16.6B",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "media",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Media",
      "value": 6.0,
      "color": "#400094",
      "labelColor": "#400094",
      "linkTint": "#a285c8",
      "valueText": "$6.0B",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "studios",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Studios",
      "value": 2.7,
      "color": "#400094",
      "labelColor": "#400094",
      "linkTint": "#a285c8",
      "valueText": "$2.7B",
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "parks",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Theme Parks",
      "value": 2.1,
      "color": "#400094",
      "labelColor": "#400094",
      "linkTint": "#a285c8",
      "valueText": "$2.1B",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "nbcu",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": "NBCU",
      "value": 9.9,
      "color": "#400094",
      "labelColor": "#400094",
      "linkTint": "#858585",
      "valueText": "$9.9B",
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "eliminations_nbcu",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.9B)"
    },
    {
      "id": "sky",
      "col": 1,
      "order": 6,
      "type": "source",
      "label": "Sky",
      "value": 4.4,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$4.4B",
      "notes": [
        "(13%) Y/Y"
      ]
    },
    {
      "id": "gross_revenue",
      "col": 2,
      "order": 7,
      "type": "hub",
      "label": "",
      "value": 30.9,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 8,
      "type": "hub",
      "label": "Revenue",
      "value": 30.6,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "valueText": "$30.6B",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "eliminations_gross",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.4B)"
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 10,
      "type": "profit",
      "label": "Gross profit",
      "value": 20.7,
      "color": "#2ca02c",
      "labelColor": "#00984c",
      "linkTint": "#99cd99",
      "valueText": "$20.7B",
      "notes": [
        "67% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "programming_production",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Programming & production",
      "value": 9.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($9.8B)"
    },
    {
      "id": "operating_profit",
      "col": 5,
      "order": 12,
      "type": "profit",
      "label": "Operating profit",
      "value": 4.5,
      "color": "#2ca02c",
      "labelColor": "#00984c",
      "linkTint": "#99cd99",
      "valueText": "$4.5B",
      "notes": [
        "16% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 13,
      "type": "cost",
      "label": "Operating expenses",
      "value": 16.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($16.2B)"
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 14,
      "type": "profit",
      "label": "Net profit",
      "value": 2.9,
      "color": "#2ca02c",
      "labelColor": "#00984c",
      "linkTint": "#99cd99",
      "valueText": "$2.9B",
      "notes": [
        "9% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "other_income",
      "col": 5,
      "order": 15,
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "color": "#2ca02c",
      "labelColor": "#00984c",
      "linkTint": "#99cd99",
      "valueText": "$0.1B"
    },
    {
      "id": "interest",
      "col": 6,
      "order": 16,
      "type": "cost",
      "label": "Interest",
      "value": 1.0,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.0B)"
    },
    {
      "id": "tax",
      "col": 6,
      "order": 17,
      "type": "cost",
      "label": "Tax",
      "value": 0.8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.8B)"
    },
    {
      "id": "other_operating_administrative",
      "col": 6,
      "order": 18,
      "type": "cost",
      "label": "Other operating & administrative",
      "value": 10.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($10.6B)"
    },
    {
      "id": "advertising",
      "col": 6,
      "order": 19,
      "type": "cost",
      "label": "Advertising",
      "value": 2.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($2.2B)"
    },
    {
      "id": "depreciation",
      "col": 6,
      "order": 20,
      "type": "cost",
      "label": "Depreciation",
      "value": 2.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($2.2B)"
    },
    {
      "id": "amortization",
      "col": 6,
      "order": 21,
      "type": "cost",
      "label": "Amortization",
      "value": 1.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($1.3B)"
    }
  ],
  "links": [
    {
      "source": "media",
      "target": "nbcu",
      "value": 6,
      "width": 65,
      "sourceWidth": 65,
      "targetWidth": 65,
      "y0": 771.5,
      "y1": 854.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#a285c8"
    },
    {
      "source": "studios",
      "target": "nbcu",
      "value": 2.7,
      "width": 30,
      "sourceWidth": 30,
      "targetWidth": 30,
      "y0": 950.0,
      "y1": 902.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "color": "#a285c8"
    },
    {
      "source": "parks",
      "target": "nbcu",
      "value": 2.1,
      "width": 23,
      "sourceWidth": 23,
      "targetWidth": 23,
      "y0": 1106.5,
      "y1": 928.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "color": "#a285c8"
    },
    {
      "source": "nbcu",
      "target": "eliminations_nbcu",
      "value": 0.9,
      "width": 10,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 935.0,
      "y1": 985.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "cable",
      "target": "gross_revenue",
      "value": 16.6,
      "width": 180,
      "sourceWidth": 180,
      "targetWidth": 180,
      "y0": 500.0,
      "y1": 749.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#858585"
    },
    {
      "source": "nbcu",
      "target": "gross_revenue",
      "value": 9.9,
      "width": 108,
      "sourceWidth": 108,
      "targetWidth": 108,
      "y0": 876.0,
      "y1": 893.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "color": "#858585"
    },
    {
      "source": "sky",
      "target": "gross_revenue",
      "value": 4.4,
      "width": 48,
      "sourceWidth": 48,
      "targetWidth": 47,
      "y0": 1283.0,
      "y1": 970.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "color": "#858585"
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 30.6,
      "width": 331,
      "sourceWidth": 331,
      "targetWidth": 331,
      "y0": 824.5,
      "y1": 850.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#b3b3b3"
    },
    {
      "source": "gross_revenue",
      "target": "eliminations_gross",
      "value": 0.4,
      "width": 4,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 992.0,
      "y1": 1078.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 20.7,
      "width": 224,
      "sourceWidth": 224,
      "targetWidth": 224,
      "y0": 797.0,
      "y1": 738.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "programming_production",
      "value": 9.8,
      "width": 107,
      "sourceWidth": 107,
      "targetWidth": 106,
      "y0": 962.5,
      "y1": 1046.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4.5,
      "width": 49,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 650.5,
      "y1": 535.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 16.2,
      "width": 175,
      "sourceWidth": 175,
      "targetWidth": 176,
      "y0": 762.5,
      "y1": 850.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.9,
      "width": 30,
      "sourceWidth": 30,
      "targetWidth": 30,
      "y0": 526.0,
      "y1": 422.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 1,
      "y0": 508,
      "y1": 437.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "x0": 2253,
        "x1": 2265,
        "c1x": 2266,
        "c1y": 508,
        "c2x": 2262,
        "c2y": 437.5
      },
      "color": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 1,
      "width": 10,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 546.0,
      "y1": 667.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.8,
      "width": 9,
      "sourceWidth": 9,
      "targetWidth": 8,
      "y0": 555.5,
      "y1": 762.0,
      "sourceOrder": 2,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating_administrative",
      "value": 10.6,
      "width": 114,
      "sourceWidth": 114,
      "targetWidth": 114,
      "y0": 819.0,
      "y1": 901.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "advertising",
      "value": 2.2,
      "width": 24,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 888.0,
      "y1": 1050.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation",
      "value": 2.2,
      "width": 24,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 912.0,
      "y1": 1157.0,
      "sourceOrder": 2,
      "targetOrder": 0,
      "color": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.3,
      "width": 14,
      "sourceWidth": 14,
      "targetWidth": 14,
      "y0": 931.0,
      "y1": 1259.0,
      "sourceOrder": 3,
      "targetOrder": 0,
      "color": "#e08585"
    }
  ],
  "annotationsSvg": "<g><text x=\"171\" y=\"1438\" font-size=\"40\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/comcast/company-wordmark-v2.png",
      "x": 913,
      "y": 251.19642857142858,
      "width": 627,
      "height": 240.72321428571428
    },
    {
      "key": "comcast-business-wordmark",
      "href": "data/assets/raster-annotations/comcast/comcast-business-wordmark.png",
      "x": 369,
      "y": 415,
      "width": 332,
      "height": 160
    },
    {
      "key": "media-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/media-icon-cluster.png",
      "x": 96,
      "y": 624,
      "width": 281,
      "height": 219
    },
    {
      "key": "studios-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/studios-icon-cluster.png",
      "x": 103,
      "y": 852,
      "width": 265,
      "height": 177
    },
    {
      "key": "parks-icon-cluster",
      "href": "data/assets/raster-annotations/comcast/parks-icon-cluster.png",
      "x": 102,
      "y": 1013,
      "width": 298,
      "height": 217
    },
    {
      "key": "xfinity",
      "href": "data/assets/raster-annotations/comcast/xfinity-q4-fy22.png",
      "x": 26,
      "y": 392,
      "width": 390,
      "height": 161
    },
    {
      "key": "sky",
      "href": "data/assets/raster-annotations/comcast/sky-clean-q4-fy22.png",
      "x": 251,
      "y": 1222.2,
      "width": 442,
      "height": 130
    }
  ],
  "i18n": {
    "zh": {
      "name": "康卡斯特 · 2022 财年第四季度",
      "meta": {
        "title": "康卡斯特 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度"
      },
      "nodes": {
        "cable": {
          "label": "有线通信",
          "notes": [
            "同比 +1%"
          ]
        },
        "media": {
          "label": "媒体",
          "notes": [
            "同比 +3%"
          ]
        },
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 +13%"
          ]
        },
        "parks": {
          "label": "主题公园",
          "notes": [
            "同比 +12%"
          ]
        },
        "nbcu": {
          "label": "NBCU",
          "notes": [
            "同比 +6%"
          ]
        },
        "sky": {
          "label": "天空集团",
          "notes": [
            "同比 (13%)"
          ]
        },
        "eliminations_nbcu": {
          "label": "抵销"
        },
        "eliminations_gross": {
          "label": "抵销"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 67%",
            "同比 +0 个百分点"
          ]
        },
        "programming_production": {
          "label": [
            "节目与",
            "内容制作"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 16%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 9%",
            "同比 (1 个百分点)"
          ]
        },
        "other_income": {
          "label": "其他"
        },
        "interest": {
          "label": "利息"
        },
        "tax": {
          "label": "税费"
        },
        "other_operating_administrative": {
          "label": [
            "其他运营及",
            "管理"
          ]
        },
        "advertising": {
          "label": "广告"
        },
        "depreciation": {
          "label": "折旧"
        },
        "amortization": {
          "label": "摊销"
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "cable": {
            "blocks": [
              {
                "x": 714,
                "top": 314,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "media": {
            "blocks": [
              {
                "x": 431,
                "top": 648,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#400094"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "studios": {
            "blocks": [
              {
                "x": 431,
                "top": 844,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#400094"
                  },
                  {
                    "text": "同比 +13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "parks": {
            "blocks": [
              {
                "x": 431,
                "top": 1001,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#400094"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "nbcu": {
            "blocks": [
              {
                "x": 711,
                "top": 660,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "NBCU",
                    "size": 64,
                    "weight": 800,
                    "color": "#400094"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#400094"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "sky": {
            "blocks": [
              {
                "x": 713,
                "top": 1164,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 (13%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "eliminations_nbcu": {
            "blocks": [
              {
                "x": 815.5,
                "top": 997,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "抵销",
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
          "revenue": {
            "blocks": [
              {
                "x": 1363,
                "top": 536,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 +1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "eliminations_gross": {
            "blocks": [
              {
                "x": 1362,
                "top": 1097,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "抵销",
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1681,
                "top": 439,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#00984c"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#00984c"
                  },
                  {
                    "text": "利润率 67%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "programming_production": {
            "blocks": [
              {
                "x": 1674,
                "top": 1110,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "节目与",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "内容制作",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 2020,
                "top": 322,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#00984c"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#00984c"
                  },
                  {
                    "text": "利润率 16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 2010,
                "top": 950,
                "anchor": "middle",
                "lineGap": 9,
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
                "x": 2462,
                "top": 377,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#00984c"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#00984c"
                  },
                  {
                    "text": "利润率 9%",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2216.5,
                "top": 520,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#00984c"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#00984c"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2463,
                "top": 627,
                "anchor": "middle",
                "lineGap": 9,
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
          "tax": {
            "blocks": [
              {
                "x": 2463,
                "top": 737,
                "anchor": "middle",
                "lineGap": 9,
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
          "other_operating_administrative": {
            "blocks": [
              {
                "x": 2479,
                "top": 848,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他运营及",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "管理",
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
                "x": 2463,
                "top": 1023,
                "anchor": "middle",
                "lineGap": 9,
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
          "depreciation": {
            "blocks": [
              {
                "x": 2463,
                "top": 1127,
                "anchor": "middle",
                "lineGap": 9,
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
          "amortization": {
            "blocks": [
              {
                "x": 2463,
                "top": 1228,
                "anchor": "middle",
                "lineGap": 9,
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
      },
      "annotationsSvg": "<g><text x=\"171\" y=\"1438\" font-size=\"40\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  }
}); })();
