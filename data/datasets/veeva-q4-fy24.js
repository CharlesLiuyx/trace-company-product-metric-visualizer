(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "veeva-q4-fy24",
  "name": "Veeva Systems · Q4 FY24",
  "company": "Veeva Systems",
  "meta": {
    "company": "Veeva Systems",
    "title": "Veeva Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/veeva-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 123.71337890625,
    "titleWeight": 800,
    "titleTextLength": 2109.638671875,
    "periodX": 2435.2001953125,
    "periodY": 269.56494140625,
    "periodNoteY": 312.5390625
  },
  "nodes": [
    {
      "id": "commercial",
      "label": [
        "Commercial",
        "solutions"
      ],
      "value": 262,
      "type": "source",
      "color": "#666666",
      "labelColor": "#000000",
      "linkTint": "#b2b2b2",
      "notes": [
        "+8% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "rnd_solutions",
      "label": [
        "R&D",
        "solutions"
      ],
      "value": 260,
      "type": "source",
      "color": "#666666",
      "labelColor": "#000000",
      "linkTint": "#b2b2b2",
      "notes": [
        "+19% Y/Y"
      ],
      "col": 0,
      "order": 1
    },
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 522,
      "type": "source",
      "color": "#666666",
      "labelColor": "#000000",
      "linkTint": "#b2b2b2",
      "notes": [
        "+13% Y/Y"
      ],
      "col": 1,
      "order": 2
    },
    {
      "id": "services",
      "label": "Services",
      "value": 109,
      "type": "source",
      "color": "#666666",
      "labelColor": "#000000",
      "linkTint": "#b2b2b2",
      "notes": [
        "+6% Y/Y"
      ],
      "col": 1,
      "order": 3
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 631,
      "type": "hub",
      "color": "#666666",
      "labelColor": "#000000",
      "linkTint": "#b2b2b2",
      "notes": [
        "+12% Y/Y"
      ],
      "col": 2,
      "order": 4
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 457,
      "type": "profit",
      "color": "#299f28",
      "labelColor": "#009451",
      "linkTint": "#99cc99",
      "notes": [
        "72% margin",
        "+1pp Y/Y"
      ],
      "col": 3,
      "order": 5
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 174,
      "type": "cost",
      "color": "#cf0000",
      "labelColor": "#a31900",
      "linkTint": "#df8585",
      "notes": [],
      "col": 3,
      "order": 6
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 135,
      "type": "profit",
      "color": "#299f28",
      "labelColor": "#009451",
      "linkTint": "#99cc99",
      "notes": [
        "21% margin",
        "+2pp Y/Y"
      ],
      "col": 4,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 321,
      "type": "cost",
      "color": "#cf0000",
      "labelColor": "#a31900",
      "linkTint": "#df8585",
      "notes": [],
      "col": 4,
      "order": 8
    },
    {
      "id": "other",
      "label": "Other",
      "value": 47,
      "type": "profit",
      "color": "#299f28",
      "labelColor": "#009451",
      "linkTint": "#99cc99",
      "notes": [],
      "col": 5,
      "order": 9
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 147,
      "type": "profit",
      "color": "#299f28",
      "labelColor": "#009451",
      "linkTint": "#99cc99",
      "notes": [
        "23% margin",
        "(10pp) Y/Y"
      ],
      "col": 5,
      "order": 10
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 35,
      "type": "cost",
      "color": "#cf0000",
      "labelColor": "#a31900",
      "linkTint": "#df8585",
      "notes": [],
      "col": 5,
      "order": 11
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 164,
      "type": "cost",
      "color": "#cf0000",
      "labelColor": "#a31900",
      "linkTint": "#df8585",
      "notes": [
        "26% of revenue",
        "+1pp Y/Y"
      ],
      "col": 5,
      "order": 12
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 99,
      "type": "cost",
      "color": "#cf0000",
      "labelColor": "#a31900",
      "linkTint": "#df8585",
      "notes": [
        "16% of revenue",
        "(0pp) Y/Y"
      ],
      "col": 5,
      "order": 13
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 59,
      "type": "cost",
      "color": "#cf0000",
      "labelColor": "#a31900",
      "linkTint": "#df8585",
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 14
    }
  ],
  "links": [
    {
      "source": "commercial",
      "target": "subscription",
      "value": 262,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "rnd_solutions",
      "target": "subscription",
      "value": 260,
      "sourceWidth": 167.98974609375,
      "targetWidth": 167.98974609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 522,
      "sourceWidth": 337.28173828125,
      "targetWidth": 337.28173828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 109,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 457,
      "sourceWidth": 295.60986328125,
      "targetWidth": 295.60986328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 174,
      "sourceWidth": 113.29541015625,
      "targetWidth": 113.29541015625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 135,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 321,
      "sourceWidth": 208.359375,
      "targetWidth": 208.359375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 100,
      "sourceWidth": 63.81005859375,
      "targetWidth": 65.1123046875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 35,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 47,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 164,
      "sourceWidth": 106.7841796875,
      "targetWidth": 106.7841796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 99,
      "sourceWidth": 63.81005859375,
      "targetWidth": 63.81005859375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 59,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.6485185546875,
    "nodes": {
      "commercial": {
        "x": 376.34912109375,
        "y": 429.7412109375,
        "width": 72.92578125,
        "height": 169.2919921875
      },
      "rnd_solutions": {
        "x": 376.34912109375,
        "y": 834.73974609375,
        "width": 72.92578125,
        "height": 167.98974609375
      },
      "subscription": {
        "x": 744.884765625,
        "y": 584.70849609375,
        "width": 72.92578125,
        "height": 337.28173828125
      },
      "services": {
        "x": 738.37353515625,
        "y": 1203.275390625,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "revenue": {
        "x": 1123.83837890625,
        "y": 684.9814453125,
        "width": 72.92578125,
        "height": 408.9052734375
      },
      "gross_profit": {
        "x": 1505.396484375,
        "y": 602.93994140625,
        "width": 72.92578125,
        "height": 295.60986328125
      },
      "cost_of_revenue": {
        "x": 1497.5830078125,
        "y": 1066.53955078125,
        "width": 72.92578125,
        "height": 113.29541015625
      },
      "operating_profit": {
        "x": 1871.32763671875,
        "y": 518.2939453125,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "operating_expenses": {
        "x": 1873.93212890625,
        "y": 799.5791015625,
        "width": 72.92578125,
        "height": 208.359375
      },
      "other": {
        "x": 2108.33642578125,
        "y": 368.53564453125,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "net_profit": {
        "x": 2245.072265625,
        "y": 384.16259765625,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "tax": {
        "x": 2245.072265625,
        "y": 696.70166015625,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "rnd": {
        "x": 2245.072265625,
        "y": 880.318359375,
        "width": 72.92578125,
        "height": 106.7841796875
      },
      "sm": {
        "x": 2245.072265625,
        "y": 1110.81591796875,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "ga": {
        "x": 2245.072265625,
        "y": 1316.57080078125,
        "width": 72.92578125,
        "height": 37.76513671875
      }
    },
    "labels": {
      "commercial": {
        "blocks": [
          {
            "x": 412.81201171875,
            "top": 333.375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 478.38661376953127,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "Commercial",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rnd_solutions": {
        "blocks": [
          {
            "x": 412.81201171875,
            "top": 739.67578125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 879.5340258789063,
            "anchor": "middle",
            "lineGap": 5.208984375,
            "lines": [
              {
                "text": "R&D",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 781.34765625,
            "top": 434.9501953125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 774.83642578125,
            "top": 1053.51708984375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1160.30126953125,
            "top": 533.9208984375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1541.859375,
            "top": 412.81201171875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "72% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1534.0458984375,
            "top": 1190.2529296875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Cost of",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1907.79052734375,
            "top": 324.25927734375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1910.39501953125,
            "top": 1019.65869140625,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2144.79931640625,
            "top": 274.77392578125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2436.50244140625,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "23% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2436.50244140625,
            "top": 670.65673828125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2436.50244140625,
            "top": 880.318359375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "R&D",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "26% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2436.50244140625,
            "top": 1060.0283203125,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "S&M",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "16% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2436.50244140625,
            "top": 1231.9248046875,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "G&A",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "logo",
      "href": "data/assets/raster-annotations/veeva/logo-q4-fy24.png",
      "x": 850.36669921875,
      "y": 248.72900390625,
      "width": 548.24560546875,
      "height": 125.015625,
      "clearance": true
    },
    {
      "key": "crm",
      "href": "data/assets/raster-annotations/veeva/crm-q4-fy24.png",
      "x": 74.22802734375,
      "y": 556.05908203125,
      "width": 256.54248046875,
      "height": 37.76513671875,
      "clearance": true
    },
    {
      "key": "vault",
      "href": "data/assets/raster-annotations/veeva/vault-q4-fy24.png",
      "x": 67.716796875,
      "y": 954.54638671875,
      "width": 270.8671875,
      "height": 46.880859375,
      "clearance": true
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "subtitleColor": "#606060",
    "noteColor": "#808080",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 30,
      "note": 27.34716796875,
      "lineGap": 11.72021484375
    }
  },
  "i18n": {
    "zh": {
      "name": "Veeva Systems · 2024 财年第四季度",
      "meta": {
        "title": "Veeva 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "titleTextLength": 1758.0322265625
      },
      "nodes": {
        "commercial": {
          "label": [
            "商业化",
            "解决方案"
          ],
          "notes": [
            "同比 +8%"
          ]
        },
        "rnd_solutions": {
          "label": [
            "研发",
            "解决方案"
          ],
          "notes": [
            "同比 +19%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +13%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +6%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 72%",
            "同比 +1 个百分点"
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
          "label": "营业利润",
          "notes": [
            "利润率 21%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 (10 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 26%",
            "同比 +1 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 16%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial": {
            "blocks": [
              {
                "x": 412.81201171875,
                "top": 333.375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 478.38661376953127,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "商业化",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rnd_solutions": {
            "blocks": [
              {
                "x": 412.81201171875,
                "top": 739.67578125,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 879.5340258789063,
                "anchor": "middle",
                "lineGap": 5.208984375,
                "lines": [
                  {
                    "text": "研发",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 781.34765625,
                "top": 434.9501953125,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 774.83642578125,
                "top": 1053.51708984375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1160.30126953125,
                "top": 533.9208984375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1541.859375,
                "top": 412.81201171875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 72%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1534.0458984375,
                "top": 1190.2529296875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1907.79052734375,
                "top": 324.25927734375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 1910.39501953125,
                "top": 1019.65869140625,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "营业",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2144.79931640625,
                "top": 274.77392578125,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2436.50244140625,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (10 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2436.50244140625,
                "top": 670.65673828125,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2436.50244140625,
                "top": 880.318359375,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2436.50244140625,
                "top": 1060.0283203125,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2436.50244140625,
                "top": 1231.9248046875,
                "anchor": "middle",
                "lineGap": 11.72021484375,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});})();
