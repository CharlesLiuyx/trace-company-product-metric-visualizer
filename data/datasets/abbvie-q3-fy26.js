window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "abbvie-q3-fy26",
  "name": "AbbVie · Q3 FY26",
  "company": "AbbVie",
  "meta": {
    "company": "AbbVie",
    "title": "Abbvie Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Quarter ended Sep. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/abbvie-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334.5,
    "titleY": 202,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2165,
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
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#071d49",
        "label": "#071d48"
      },
      "hub": {
        "node": "#071d49",
        "label": "#071d48"
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
      "source": "#8892a6",
      "hub": "#8892a6",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/abbvie/company-wordmark.png",
      "x": 650,
      "y": 246,
      "width": 580,
      "height": 105
    },
    {
      "key": "immunology-products",
      "href": "data/assets/raster-annotations/abbvie/immunology-products-q2-fy26.png",
      "x": 9,
      "y": 374,
      "width": 133,
      "height": 140
    },
    {
      "key": "oncology-imbruvica",
      "href": "data/assets/raster-annotations/abbvie/oncology-imbruvica.png",
      "x": 0,
      "y": 645,
      "width": 183,
      "height": 75
    },
    {
      "key": "aesthetics-botox-cosmetic",
      "href": "data/assets/raster-annotations/abbvie/aesthetics-botox-cosmetic.png",
      "x": 10,
      "y": 825,
      "width": 155,
      "height": 75
    },
    {
      "key": "neuroscience-botox",
      "href": "data/assets/raster-annotations/abbvie/neuroscience-botox.png",
      "x": 5,
      "y": 1006,
      "width": 165,
      "height": 63
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "immunology": {
        "x": 473,
        "y": 356,
        "width": 73,
        "height": 182
      },
      "oncology": {
        "x": 473,
        "y": 668,
        "width": 73,
        "height": 34
      },
      "aesthetics": {
        "x": 473,
        "y": 840,
        "width": 73,
        "height": 24
      },
      "neuroscience": {
        "x": 473,
        "y": 1007,
        "width": 73,
        "height": 67
      },
      "other_revenue": {
        "x": 473,
        "y": 1214,
        "width": 73,
        "height": 40
      },
      "revenue": {
        "x": 940,
        "y": 585,
        "width": 73,
        "height": 346
      },
      "gross_profit": {
        "x": 1407,
        "y": 505,
        "width": 73,
        "height": 260
      },
      "cost_of_products_sold": {
        "x": 1407,
        "y": 968,
        "width": 73,
        "height": 86
      },
      "operating_profit": {
        "x": 1875,
        "y": 415,
        "width": 73,
        "height": 125
      },
      "operating_expenses": {
        "x": 1875,
        "y": 731,
        "width": 73,
        "height": 137
      },
      "net_profit": {
        "x": 2341,
        "y": 314,
        "width": 73,
        "height": 84
      },
      "other_expense": {
        "x": 2341,
        "y": 556,
        "width": 73,
        "height": 16
      },
      "interest": {
        "x": 2341,
        "y": 661,
        "width": 73,
        "height": 16
      },
      "tax": {
        "x": 2341,
        "y": 754,
        "width": 73,
        "height": 14
      },
      "sga": {
        "x": 2341,
        "y": 825,
        "width": 73,
        "height": 82
      },
      "rnd": {
        "x": 2341,
        "y": 1059,
        "width": 73,
        "height": 52
      },
      "other_opex": {
        "x": 2341,
        "y": 1278,
        "width": 73,
        "height": 4
      }
    },
    "labels": {
      "immunology": {
        "blocks": [
          {
            "x": 513,
            "top": 270,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 436,
            "top": 423,
            "anchor": "end",
            "lines": [
              {
                "text": "Immunology",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "oncology": {
        "blocks": [
          {
            "x": 513,
            "top": 579,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+1% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 428,
            "top": 661,
            "anchor": "end",
            "lines": [
              {
                "text": "Oncology",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "aesthetics": {
        "blocks": [
          {
            "x": 513,
            "top": 751,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(1%) Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 439,
            "top": 828,
            "anchor": "end",
            "lines": [
              {
                "text": "Aesthetics",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "neuroscience": {
        "blocks": [
          {
            "x": 513,
            "top": 921,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+19% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 442,
            "top": 1016.5,
            "anchor": "end",
            "lines": [
              {
                "text": "Neuroscience",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 513,
            "top": 1127,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 427,
            "top": 1210,
            "anchor": "end",
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 970,
            "top": 432,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+10% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1443,
            "top": 313,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "75% margin",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+9pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_products_sold": {
        "blocks": [
          {
            "x": 1443,
            "top": 1070,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 39,
                "weight": 800
              },
              {
                "text": "products sold",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1910,
            "top": 223,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "36% margin",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+24pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1905,
            "top": 880,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2430,
            "top": 286,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "24% margin",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+23% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2478,
            "top": 515,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2467,
            "top": 611,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480,
            "top": 704,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2425,
            "top": 824,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              },
              {
                "text": "23% of revenue",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2425,
            "top": 1042,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              },
              {
                "text": "15% of revenue",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2425,
            "top": 1235,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31
              },
              {
                "text": "1% of revenue",
                "size": 28,
                "color": "#666666"
              },
              {
                "text": "(16pp) Y/Y",
                "size": 28,
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
      "id": "immunology",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Immunology",
      "value": 9.2,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#071d49",
      "labelColor": "#071d48",
      "linkTint": "#8892a6"
    },
    {
      "id": "oncology",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Oncology",
      "value": 1.7,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#071d49",
      "labelColor": "#071d48",
      "linkTint": "#8892a6"
    },
    {
      "id": "aesthetics",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Aesthetics",
      "value": 1.2,
      "notes": [
        "(1%) Y/Y"
      ],
      "color": "#071d49",
      "labelColor": "#071d48",
      "linkTint": "#8892a6"
    },
    {
      "id": "neuroscience",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Neuroscience",
      "value": 3.4,
      "notes": [
        "+19% Y/Y"
      ],
      "color": "#071d49",
      "labelColor": "#071d48",
      "linkTint": "#8892a6"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Other",
      "value": 2,
      "notes": [
        "(9%) Y/Y"
      ],
      "color": "#071d49",
      "labelColor": "#071d48",
      "linkTint": "#8892a6",
      "valueText": "$2.0B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 17.4,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#071d49",
      "labelColor": "#071d48",
      "linkTint": "#8892a6"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 13.1,
      "notes": [
        "75% margin",
        "+9pp Y/Y"
      ]
    },
    {
      "id": "cost_of_products_sold",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "products sold"
      ],
      "value": 4.3
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 6.3,
      "notes": [
        "36% margin",
        "+24pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 6.9
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 4.2,
      "notes": [
        "24% margin",
        "+23% Y/Y"
      ]
    },
    {
      "id": "other_expense",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.7
    },
    {
      "id": "interest",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Interest",
      "value": 0.7
    },
    {
      "id": "tax",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Tax",
      "value": 0.6
    },
    {
      "id": "sga",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "SG&A",
      "value": 4.1,
      "notes": [
        "23% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "R&D",
      "value": 2.6,
      "notes": [
        "15% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "other_opex",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Other",
      "value": 0.2,
      "notes": [
        "1% of revenue",
        "(16pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "immunology",
      "target": "revenue",
      "value": 9.2,
      "sourceWidth": 182,
      "targetWidth": 182,
      "y0": 447,
      "y1": 676,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8892a6"
    },
    {
      "source": "oncology",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 34,
      "targetWidth": 34,
      "y0": 685,
      "y1": 784,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8892a6"
    },
    {
      "source": "aesthetics",
      "target": "revenue",
      "value": 1.2,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 852,
      "y1": 813,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8892a6"
    },
    {
      "source": "neuroscience",
      "target": "revenue",
      "value": 3.4,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 1040.5,
      "y1": 858.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#8892a6"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 40,
      "targetWidth": 39,
      "y0": 1234,
      "y1": 911.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#8892a6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 13.1,
      "sourceWidth": 260,
      "targetWidth": 260,
      "y0": 715,
      "y1": 635,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 4.3,
      "sourceWidth": 86,
      "targetWidth": 86,
      "y0": 888,
      "y1": 1011,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 6.3,
      "sourceWidth": 125,
      "targetWidth": 125,
      "y0": 567.5,
      "y1": 477.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.9,
      "sourceWidth": 135,
      "targetWidth": 137,
      "y0": 697.5,
      "y1": 799.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.2,
      "sourceWidth": 84,
      "targetWidth": 84,
      "y0": 457,
      "y1": 356,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.7,
      "sourceWidth": 14,
      "targetWidth": 16,
      "y0": 506,
      "y1": 564,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.7,
      "sourceWidth": 14,
      "targetWidth": 16,
      "y0": 520,
      "y1": 669,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 13,
      "targetWidth": 14,
      "y0": 533.5,
      "y1": 761,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 4.1,
      "sourceWidth": 82,
      "targetWidth": 82,
      "y0": 772,
      "y1": 866,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.6,
      "sourceWidth": 51,
      "targetWidth": 52,
      "y0": 838.5,
      "y1": 1085,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.2,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 866,
      "y1": 1280,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "艾伯维 · 2026 财年第三季度",
      "meta": {
        "title": "艾伯维 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月 30 日的季度",
        "titleSize": 114,
        "titleTextLength": 1800
      },
      "nodes": {
        "immunology": {
          "label": "免疫",
          "notes": [
            "同比 +16%"
          ]
        },
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +1%"
          ]
        },
        "aesthetics": {
          "label": "美学",
          "notes": [
            "同比 (1%)"
          ]
        },
        "neuroscience": {
          "label": "神经科学",
          "notes": [
            "同比 +19%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (9%)"
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
            "利润率 75%",
            "同比 +9 个百分点"
          ]
        },
        "cost_of_products_sold": {
          "label": "产品销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 36%",
            "同比 +24 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 24%",
            "同比 +23%"
          ]
        },
        "other_expense": {
          "label": "其他"
        },
        "interest": {
          "label": "利息"
        },
        "tax": {
          "label": "税费"
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": [
            "占收入 23%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 15%",
            "同比 +0 个百分点"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": [
            "占收入 1%",
            "同比 (16 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "immunology": {
            "blocks": [
              {
                "x": 513,
                "top": 270,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 436,
                "top": 423,
                "anchor": "end",
                "lines": [
                  {
                    "text": "免疫",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "oncology": {
            "blocks": [
              {
                "x": 513,
                "top": 579,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 428,
                "top": 661,
                "anchor": "end",
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "aesthetics": {
            "blocks": [
              {
                "x": 513,
                "top": 751,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 439,
                "top": 828,
                "anchor": "end",
                "lines": [
                  {
                    "text": "美学",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "neuroscience": {
            "blocks": [
              {
                "x": 513,
                "top": 921,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +19%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 442,
                "top": 1016.5,
                "anchor": "end",
                "lines": [
                  {
                    "text": "神经科学",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 513,
                "top": 1127,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 427,
                "top": 1210,
                "anchor": "end",
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 970,
                "top": 432,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1443,
                "top": 313,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 75%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_products_sold": {
            "blocks": [
              {
                "x": 1443,
                "top": 1070,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1910,
                "top": 223,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 36%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +24 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1905,
                "top": 880,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2418,
                "top": 286,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 24%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2418,
                "top": 515,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2418,
                "top": 611,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2418,
                "top": 704,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2418,
                "top": 824,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及行政费用",
                    "size": 23,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  },
                  {
                    "text": "占收入 23%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2418,
                "top": 1042,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  },
                  {
                    "text": "占收入 15%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2418,
                "top": 1235,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (16 个百分点)",
                    "size": 28,
                    "color": "#666666"
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
