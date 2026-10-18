window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pfizer-q2-fy25",
  "name": "Pfizer · Q2 FY25",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Source-stated Q2 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/pfizer-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.333,
    "titleY": 199.219,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2083.333,
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
    "noteColor": "#777777",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#2b00be",
        "label": "#2b00be"
      },
      "hub": {
        "node": "#2b00be",
        "label": "#2b00be"
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
      "source": "#85c5f7",
      "hub": "#85c5f7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/pfizer/company-wordmark.png",
      "x": 824.322,
      "y": 240.916,
      "width": 614.66,
      "height": 251.333
    },
    {
      "key": "primary-care-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 31.254,
      "y": 446.67,
      "width": 183.617,
      "height": 212.266
    },
    {
      "key": "specialty-care-vyndaqel",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 18.231,
      "y": 821.717,
      "width": 183.617,
      "height": 65.112
    },
    {
      "key": "oncology-ibrance",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance.png",
      "x": 18.231,
      "y": 1065.237,
      "width": 207.057,
      "height": 71.624
    }
  ],
  "layout": {
    "nodes": {
      "primary_care": {
        "x": 465,
        "y": 513,
        "width": 72,
        "height": 121
      },
      "specialty_care": {
        "x": 465,
        "y": 812,
        "width": 72,
        "height": 96
      },
      "oncology": {
        "x": 465,
        "y": 1057,
        "width": 72,
        "height": 96
      },
      "biopharma": {
        "x": 839,
        "y": 659,
        "width": 72,
        "height": 312
      },
      "business_innovation": {
        "x": 839,
        "y": 1240,
        "width": 72,
        "height": 7
      },
      "revenue": {
        "x": 1213,
        "y": 753,
        "width": 72,
        "height": 319
      },
      "gross_profit": {
        "x": 1586,
        "y": 667,
        "width": 72,
        "height": 237
      },
      "cost_of_sales": {
        "x": 1586,
        "y": 1096,
        "width": 72,
        "height": 83
      },
      "operating_profit": {
        "x": 1960,
        "y": 570,
        "width": 72,
        "height": 66
      },
      "operating_expenses": {
        "x": 1960,
        "y": 832,
        "width": 72,
        "height": 171
      },
      "net_profit": {
        "x": 2333,
        "y": 473,
        "width": 72,
        "height": 63
      },
      "tax": {
        "x": 2333,
        "y": 684,
        "width": 72,
        "height": 2
      },
      "sga": {
        "x": 2333,
        "y": 758,
        "width": 72,
        "height": 75
      },
      "rnd": {
        "x": 2333,
        "y": 969,
        "width": 72,
        "height": 55
      },
      "amortization": {
        "x": 2333,
        "y": 1168,
        "width": 72,
        "height": 27
      },
      "other": {
        "x": 2333,
        "y": 1337,
        "width": 72,
        "height": 16
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 501.365,
            "top": 418.021,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 326.864,
            "top": 524.805,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Primary",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "specialty_care": {
        "blocks": [
          {
            "x": 501.365,
            "top": 717.538,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 326.864,
            "top": 813.022,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Specialty",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "oncology": {
        "blocks": [
          {
            "x": 501.365,
            "top": 968.87109375,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 326.864,
            "top": 1078.26,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Oncology",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "biopharma": {
        "blocks": [
          {
            "x": 876.412,
            "top": 506.574,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Biopharma",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "business_innovation": {
        "blocks": [
          {
            "x": 876.412,
            "top": 1037.89,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Business",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "innovation",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 26.045,
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
            "x": 1248.854,
            "top": 602.94,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 26.045,
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
            "x": 1621.296,
            "top": 480.529,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "74% margin",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1621.296,
            "top": 1195.462,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1995.041,
            "top": 382.86,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "21% margin",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+22pp Y/Y",
                "size": 26.045,
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
            "x": 1995.041,
            "top": 1019.659,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2525.055,
            "top": 438.857,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "20% Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+20pp Y/Y",
                "size": 26.045,
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
            "x": 2525.055,
            "top": 644.612,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2525.055,
            "top": 750.094,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2525.055,
            "top": 948.035,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2525.055,
            "top": 1136.861,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 26.045,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 26.045,
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
            "x": 2525.055,
            "top": 1304.851,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
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
      "id": "primary_care",
      "label": "Primary Care",
      "value": 5.5,
      "notes": [
        "+12% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$5.5B"
    },
    {
      "id": "specialty_care",
      "label": "Specialty Care",
      "value": 4.4,
      "notes": [
        "+7% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.4B"
    },
    {
      "id": "oncology",
      "label": "Oncology",
      "value": 4.4,
      "notes": [
        "+11% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$4.4B"
    },
    {
      "id": "biopharma",
      "label": "Biopharma",
      "value": 14.3,
      "notes": [
        "+10% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 3,
      "valueText": "$14.3B"
    },
    {
      "id": "business_innovation",
      "label": "Business innovation",
      "value": 0.3,
      "notes": [
        "+19% Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 4,
      "valueText": "$0.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 14.7,
      "notes": [
        "+10% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$14.7B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 10.9,
      "notes": [
        "74% margin",
        "(1pp) Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 6,
      "valueText": "$10.9B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 3.8,
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($3.8B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 3,
      "notes": [
        "21% margin",
        "+22pp Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 8,
      "valueText": "$3.0B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 7.8,
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 9,
      "valueText": "($7.8B)"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "notes": [],
      "type": "cost",
      "col": 6,
      "order": 10,
      "valueText": "($0.1B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2.9,
      "notes": [
        "20% Y/Y",
        "+20pp Y/Y"
      ],
      "type": "profit",
      "col": 6,
      "order": 11,
      "valueText": "$2.9B"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 3.4,
      "notes": [
        "23% of revenue",
        "(5pp) Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 12,
      "valueText": "($3.4B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 2.5,
      "notes": [
        "17% of revenue",
        "(3pp) Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 13,
      "valueText": "($2.5B)"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 1.2,
      "notes": [
        "8% of revenue",
        "(2pp) Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 14,
      "valueText": "($1.2B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.7,
      "notes": [],
      "type": "cost",
      "col": 6,
      "order": 16,
      "valueText": "($0.7B)"
    }
  ],
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 5.5,
      "sourceWidth": 121,
      "targetWidth": 121,
      "y0": 573.5,
      "y1": 719.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c5f7"
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 4.4,
      "sourceWidth": 96,
      "targetWidth": 96,
      "y0": 860,
      "y1": 828,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c5f7"
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 4.4,
      "sourceWidth": 96,
      "targetWidth": 95,
      "y0": 1105,
      "y1": 923.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85c5f7"
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 14.3,
      "sourceWidth": 312,
      "targetWidth": 312,
      "y0": 815,
      "y1": 909,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c5f7"
    },
    {
      "source": "business_innovation",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 1243.5,
      "y1": 1068.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c5f7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 10.9,
      "sourceWidth": 237,
      "targetWidth": 237,
      "y0": 871.5,
      "y1": 785.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 3.8,
      "sourceWidth": 82,
      "targetWidth": 83,
      "y0": 1031,
      "y1": 1137.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3,
      "sourceWidth": 66,
      "targetWidth": 66,
      "y0": 700,
      "y1": 603,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 7.8,
      "sourceWidth": 171,
      "targetWidth": 171,
      "y0": 818.5,
      "y1": 917.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.9,
      "sourceWidth": 64,
      "targetWidth": 63,
      "y0": 602,
      "y1": 504.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 635,
      "y1": 685,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.4,
      "sourceWidth": 75,
      "targetWidth": 75,
      "y0": 869.5,
      "y1": 795.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.5,
      "sourceWidth": 55,
      "targetWidth": 55,
      "y0": 934.5,
      "y1": 996.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.2,
      "sourceWidth": 26,
      "targetWidth": 27,
      "y0": 975,
      "y1": 1181.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.7,
      "sourceWidth": 15,
      "targetWidth": 16,
      "y0": 995.5,
      "y1": 1345,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2025 财年第二季度",
      "meta": {
        "title": "辉瑞 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "原图标示 2025 财年第二季度",
        "titleSize": 116,
        "titleTextLength": 1860
      },
      "nodes": {
        "primary_care": {
          "label": [
            "初级",
            "医疗"
          ],
          "notes": [
            "同比 +12%"
          ]
        },
        "specialty_care": {
          "label": [
            "专科",
            "医疗"
          ],
          "notes": [
            "同比 +7%"
          ]
        },
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +11%"
          ]
        },
        "biopharma": {
          "label": "生物制药",
          "notes": [
            "同比 +10%"
          ]
        },
        "business_innovation": {
          "label": [
            "业务",
            "创新"
          ],
          "notes": [
            "同比 +19%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 74%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 21%",
            "同比 +22 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "同比 20%",
            "同比 +20 个百分点"
          ]
        },
        "sga": {
          "label": "销售及管理费用（SG&A）",
          "notes": [
            "占收入 23%",
            "同比 (5 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发（R&D）",
          "notes": [
            "占收入 17%",
            "同比 (3 个百分点)"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 8%",
            "同比 (2 个百分点)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 501.365,
                "top": 418.021,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 326.864,
                "top": 524.805,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "初级",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "specialty_care": {
            "blocks": [
              {
                "x": 501.365,
                "top": 717.538,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 326.864,
                "top": 813.022,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "专科",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "oncology": {
            "blocks": [
              {
                "x": 501.365,
                "top": 968.87109375,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 326.864,
                "top": 1078.26,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "biopharma": {
            "blocks": [
              {
                "x": 876.412,
                "top": 506.574,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "生物制药",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "business_innovation": {
            "blocks": [
              {
                "x": 876.412,
                "top": 1037.89,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "业务",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "创新",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 26.045,
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
                "x": 1248.854,
                "top": 602.94,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 26.045,
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
                "x": 1621.296,
                "top": 480.529,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 74%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1621.296,
                "top": 1195.462,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1995.041,
                "top": 382.86,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 21%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +22 个百分点",
                    "size": 26.045,
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
                "x": 1995.041,
                "top": 1019.659,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2525.055,
                "top": 438.857,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 20%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +20 个百分点",
                    "size": 26.045,
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
                "x": 2525.055,
                "top": 644.612,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2525.055,
                "top": 750.094,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售管理（SG&A）",
                    "size": 27,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2525.055,
                "top": 948.035,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "研发（R&D）",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2525.055,
                "top": 1136.861,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 26.045,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 26.045,
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
                "x": 2525.055,
                "top": 1304.851,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
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
