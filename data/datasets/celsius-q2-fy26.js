window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "celsius-q2-fy26",
  "name": "Celsius · Q2 FY26",
  "company": "Celsius",
  "meta": {
    "company": "Celsius",
    "title": "Celsius Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/celsius-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2160,
    "hidePeriodStamp": true
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#f6780d",
        "label": "#f6780d"
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
      "source": "#f3bb8b",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 10
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/celsius-q2-fy26/company-logo.png",
      "x": 574,
      "y": 254,
      "width": 694,
      "height": 245
    },
    {
      "key": "celsius-product-cluster",
      "href": "data/assets/raster-annotations/celsius-q2-fy26/celsius-product-cluster.png",
      "x": 23,
      "y": 434,
      "width": 314,
      "height": 216
    },
    {
      "key": "pepsico-wordmark",
      "href": "data/assets/raster-annotations/celsius-q2-fy26/pepsico-wordmark.png",
      "x": 23,
      "y": 732,
      "width": 335,
      "height": 59
    },
    {
      "key": "costco-wordmark",
      "href": "data/assets/raster-annotations/celsius-q2-fy26/costco-wordmark.png",
      "x": 20,
      "y": 977,
      "width": 346,
      "height": 107
    }
  ],
  "annotationsSvg": "",
  "layout": {
    "scale": 0.4,
    "nodes": {
      "pepsico": {
        "x": 389,
        "y": 650,
        "width": 72,
        "height": 225
      },
      "costco": {
        "x": 389,
        "y": 1012,
        "width": 72,
        "height": 32
      },
      "all_others": {
        "x": 389,
        "y": 1185,
        "width": 72,
        "height": 115
      },
      "revenue_by_customer": {
        "x": 700,
        "y": 758,
        "width": 72,
        "height": 373
      },
      "north_america": {
        "x": 1011,
        "y": 657,
        "width": 72,
        "height": 361
      },
      "international": {
        "x": 1011,
        "y": 1233,
        "width": 72,
        "height": 12
      },
      "revenue": {
        "x": 1323,
        "y": 762,
        "width": 72,
        "height": 373
      },
      "gross_profit": {
        "x": 1634,
        "y": 674,
        "width": 72,
        "height": 180
      },
      "cost_of_revenue": {
        "x": 1634,
        "y": 1056,
        "width": 72,
        "height": 193
      },
      "operating_profit": {
        "x": 1945,
        "y": 592,
        "width": 72,
        "height": 34
      },
      "operating_expenses": {
        "x": 1945,
        "y": 788,
        "width": 72,
        "height": 145
      },
      "net_profit": {
        "x": 2257,
        "y": 518,
        "width": 72,
        "height": 25
      },
      "tax": {
        "x": 2257,
        "y": 681,
        "width": 72,
        "height": 6
      },
      "other_nonoperating": {
        "x": 2257,
        "y": 790,
        "width": 72,
        "height": 4
      },
      "sga": {
        "x": 2257,
        "y": 868,
        "width": 72,
        "height": 108
      },
      "distributor_termination_fees": {
        "x": 2257,
        "y": 1155,
        "width": 72,
        "height": 36
      }
    },
    "labels": {
      "pepsico": {
        "blocks": [
          {
            "x": 424,
            "top": 554.9658203125,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#f6780d"
              },
              {
                "text": "+100% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "costco": {
        "blocks": [
          {
            "x": 424,
            "top": 918.990234375,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#f6780d"
              },
              {
                "text": "(18%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "all_others": {
        "blocks": [
          {
            "x": 424,
            "top": 1086.08447265625,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#f6780d"
              },
              {
                "text": "(37%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 280,
            "top": 1218.0,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "All Others",
                "size": 40,
                "weight": 800,
                "color": "#f6780d"
              }
            ]
          }
        ]
      },
      "revenue_by_customer": {
        "blocks": [
          {
            "x": 731.211181640625,
            "top": 602.54443359375,
            "anchor": "middle",
            "lineGap": 12,
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
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "north_america": {
        "blocks": [
          {
            "x": 1051.563720703125,
            "top": 506.17822265625,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "North America",
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
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 1050,
            "top": 1262.283203125,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "International",
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
                "text": "+10% Y/Y",
                "size": 29,
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
            "x": 1366.05615234375,
            "top": 607.75341796875,
            "anchor": "middle",
            "lineGap": 12,
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
                "text": "+11% Y/Y",
                "size": 29,
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
            "x": 1670.130615234375,
            "top": 487.2490234375,
            "anchor": "middle",
            "lineGap": 12,
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
                "text": "48% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
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
            "x": 1672.083984375,
            "top": 1257.29443359375,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
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
            "x": 1983.971923828125,
            "top": 406.70751953125,
            "anchor": "middle",
            "lineGap": 12,
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
                "text": "9% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 29,
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
            "x": 1981.367431640625,
            "top": 940.244140625,
            "anchor": "middle",
            "lineGap": 12,
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
            "x": 2482.0810546875,
            "top": 460.40185546875,
            "anchor": "middle",
            "lineGap": 12,
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
              },
              {
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2482.0810546875,
            "top": 654.041015625,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Tax",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 746.00048828125,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Other",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 2488.59228515625,
            "top": 880.1318359375,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "SG&A expenses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "29% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+9pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "distributor_termination_fees": {
        "blocks": [
          {
            "x": 2485.336669921875,
            "top": 1103.9091796875,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Distributor",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "termination fees",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "10% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
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
      "id": "pepsico",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "PepsiCo",
      "value": 492,
      "notes": [
        "+100% Y/Y"
      ],
      "color": "#f6780d",
      "labelColor": "#f6780d"
    },
    {
      "id": "costco",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Costco",
      "value": 71,
      "notes": [
        "(18%) Y/Y"
      ],
      "color": "#f6780d",
      "labelColor": "#f6780d"
    },
    {
      "id": "all_others",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "All Others",
      "value": 254,
      "notes": [
        "(37%) Y/Y"
      ],
      "color": "#f6780d",
      "labelColor": "#f6780d"
    },
    {
      "id": "revenue_by_customer",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Revenue",
      "value": 818,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "north_america",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "North America",
      "value": 791,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "international",
      "col": 2,
      "order": 5,
      "type": "hub",
      "label": "International",
      "value": 27,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 818,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 394,
      "notes": [
        "48% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 424,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_profit",
      "col": 5,
      "order": 9,
      "type": "profit",
      "label": "Operating profit",
      "value": 75,
      "notes": [
        "9% margin",
        "(10pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "Operating expenses",
      "value": 319,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 11,
      "type": "profit",
      "label": "Net profit",
      "value": 55,
      "notes": [
        "7% margin",
        "(7pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "tax",
      "col": 6,
      "order": 12,
      "type": "cost",
      "label": "Tax",
      "value": 14,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "other_nonoperating",
      "col": 6,
      "order": 13,
      "type": "cost",
      "label": "Other",
      "value": 6,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sga",
      "col": 6,
      "order": 14,
      "type": "cost",
      "label": "SG&A expenses",
      "value": 238,
      "notes": [
        "29% of revenue",
        "+9pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "distributor_termination_fees",
      "col": 6,
      "order": 15,
      "type": "cost",
      "label": "Distributor termination fees",
      "value": 81,
      "notes": [
        "10% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "pepsico",
      "target": "revenue_by_customer",
      "value": 492,
      "sourceWidth": 225,
      "targetWidth": 225,
      "y0": 762.5,
      "y1": 870.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f3bb8b"
    },
    {
      "source": "costco",
      "target": "revenue_by_customer",
      "value": 71,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 1028,
      "y1": 999,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f3bb8b"
    },
    {
      "source": "all_others",
      "target": "revenue_by_customer",
      "value": 254,
      "sourceWidth": 115,
      "targetWidth": 115,
      "y0": 1242.5,
      "y1": 1073.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f3bb8b"
    },
    {
      "source": "revenue_by_customer",
      "target": "north_america",
      "value": 791,
      "sourceWidth": 361,
      "targetWidth": 361,
      "y0": 938.5,
      "y1": 837.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "revenue_by_customer",
      "target": "international",
      "value": 27,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 1125,
      "y1": 1239,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "north_america",
      "target": "revenue",
      "value": 791,
      "sourceWidth": 361,
      "targetWidth": 361,
      "y0": 837.5,
      "y1": 942.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 27,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 1239,
      "y1": 1129,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 394,
      "sourceWidth": 181,
      "targetWidth": 180,
      "y0": 852.5,
      "y1": 764,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 424,
      "sourceWidth": 192,
      "targetWidth": 193,
      "y0": 1039,
      "y1": 1152.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 75,
      "sourceWidth": 34,
      "targetWidth": 34,
      "y0": 691,
      "y1": 609,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 319,
      "sourceWidth": 146,
      "targetWidth": 145,
      "y0": 781,
      "y1": 860.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 55,
      "sourceWidth": 25,
      "targetWidth": 25,
      "y0": 604.5,
      "y1": 530.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 14,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 620,
      "y1": 684,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_nonoperating",
      "value": 6,
      "sourceWidth": 3,
      "targetWidth": 4,
      "y0": 624.5,
      "y1": 792,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 238,
      "sourceWidth": 108,
      "targetWidth": 108,
      "y0": 842,
      "y1": 922,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "distributor_termination_fees",
      "value": 81,
      "sourceWidth": 37,
      "targetWidth": 36,
      "y0": 914.5,
      "y1": 1173,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Celsius · 2026 财年第二季度",
      "meta": {
        "title": "Celsius 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 112,
        "titleTextLength": 1730
      },
      "nodes": {
        "pepsico": {
          "label": "百事公司",
          "notes": [
            "同比 +100%"
          ]
        },
        "costco": {
          "label": "开市客",
          "notes": [
            "同比 (18%)"
          ]
        },
        "all_others": {
          "label": "其他所有客户",
          "notes": [
            "同比 (37%)"
          ]
        },
        "revenue_by_customer": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +11%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 48%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 9%",
            "同比 (10 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (7 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_nonoperating": {
          "label": "其他",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": [
            "占收入 29%",
            "同比 +9 个百分点"
          ]
        },
        "distributor_termination_fees": {
          "label": "经销商终止费",
          "notes": [
            "占收入 10%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "pepsico": {
            "blocks": [
              {
                "x": 424,
                "top": 554.9658203125,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#f6780d"
                  },
                  {
                    "text": "同比 +100%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "costco": {
            "blocks": [
              {
                "x": 424,
                "top": 918.990234375,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#f6780d"
                  },
                  {
                    "text": "同比 (18%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "all_others": {
            "blocks": [
              {
                "x": 424,
                "top": 1086.08447265625,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#f6780d"
                  },
                  {
                    "text": "同比 (37%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 280,
                "top": 1224.5,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "其他所有客户",
                    "size": 35,
                    "weight": 800,
                    "color": "#f6780d"
                  }
                ]
              }
            ]
          },
          "revenue_by_customer": {
            "blocks": [
              {
                "x": 731.211181640625,
                "top": 602.54443359375,
                "anchor": "middle",
                "lineGap": 12,
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
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "north_america": {
            "blocks": [
              {
                "x": 1051.563720703125,
                "top": 506.17822265625,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "北美",
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
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 1050,
                "top": 1262.283203125,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "国际",
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
                    "text": "同比 +10%",
                    "size": 29,
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
                "x": 1366.05615234375,
                "top": 607.75341796875,
                "anchor": "middle",
                "lineGap": 12,
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
                    "text": "同比 +11%",
                    "size": 29,
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
                "x": 1670.130615234375,
                "top": 487.2490234375,
                "anchor": "middle",
                "lineGap": 12,
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
                    "text": "利润率 48%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
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
                "x": 1672.083984375,
                "top": 1257.29443359375,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
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
                "x": 1983.971923828125,
                "top": 406.70751953125,
                "anchor": "middle",
                "lineGap": 12,
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
                    "text": "利润率 9%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (10 个百分点)",
                    "size": 29,
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
                "x": 1981.367431640625,
                "top": 940.244140625,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "营业费用",
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
                "x": 2482.0810546875,
                "top": 460.40185546875,
                "anchor": "middle",
                "lineGap": 12,
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
                  },
                  {
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2482.0810546875,
                "top": 654.041015625,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "税费",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 746.00048828125,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 2488.59228515625,
                "top": 880.1318359375,
                "anchor": "middle",
                "lineGap": 3,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 29%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "distributor_termination_fees": {
            "blocks": [
              {
                "x": 2485.336669921875,
                "top": 1103.9091796875,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "经销商",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "终止费",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": ""
    }
  }
});
