/* Original operating profit $4.7M corrected to $4.7B by operator 2026-10-18; original literal retained in source facts. */
(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "pfizer-q3-fy24",
  "name": "Pfizer · Q3 FY24",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Source-stated Q3 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/pfizer-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2070,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "biopharma:left",
        "revenue:left",
        "revenue:right",
        "gross_profit:right",
        "operating_profit:right",
        "operating_expenses:right",
        "net_profit:left"
      ]
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
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
      "href": "data/assets/raster-annotations/pfizer/company-wordmark.png",
      "x": 805,
      "y": 220,
      "width": 655,
      "height": 275
    },
    {
      "key": "primary-care-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 0,
      "y": 455,
      "width": 230,
      "height": 245
    },
    {
      "key": "specialty-care-vyndaqel",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 0,
      "y": 805,
      "width": 230,
      "height": 108
    },
    {
      "key": "oncology-ibrance",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance.png",
      "x": 0,
      "y": 1038,
      "width": 235,
      "height": 115
    }
  ],
  "layout": {
    "scale": 17.25,
    "nodes": {
      "primary_care": {
        "x": 463,
        "y": 524,
        "width": 72,
        "height": 150
      },
      "specialty_care": {
        "x": 463,
        "y": 822,
        "width": 72,
        "height": 72
      },
      "oncology": {
        "x": 463,
        "y": 1061,
        "width": 72,
        "height": 68
      },
      "biopharma": {
        "x": 835,
        "y": 641,
        "width": 71,
        "height": 290
      },
      "business_innovation": {
        "x": 837,
        "y": 1256,
        "width": 72,
        "height": 4
      },
      "revenue": {
        "x": 1211,
        "y": 746,
        "width": 71,
        "height": 294
      },
      "gross_profit": {
        "x": 1580,
        "y": 643,
        "width": 71,
        "height": 206
      },
      "cost_of_sales": {
        "x": 1588,
        "y": 1071,
        "width": 72,
        "height": 88
      },
      "operating_profit": {
        "x": 1966,
        "y": 536,
        "width": 71,
        "height": 78
      },
      "operating_expenses": {
        "x": 1964,
        "y": 796,
        "width": 72,
        "height": 128
      },
      "net_profit": {
        "x": 2332,
        "y": 440,
        "width": 72,
        "height": 74
      },
      "tax": {
        "x": 2332,
        "y": 708,
        "width": 72,
        "height": 4
      },
      "sga": {
        "x": 2332,
        "y": 882,
        "width": 72,
        "height": 54
      },
      "rnd": {
        "x": 2332,
        "y": 1074,
        "width": 72,
        "height": 43
      },
      "other": {
        "x": 2332,
        "y": 1264,
        "width": 72,
        "height": 31
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 499,
            "top": 429,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+44% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325,
            "top": 552.5,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Primary",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "specialty_care": {
        "blocks": [
          {
            "x": 499,
            "top": 728,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325,
            "top": 810,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Specialty",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Care",
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
            "x": 499,
            "top": 966,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 335,
            "top": 1070,
            "anchor": "middle",
            "lineGap": 7,
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
      "biopharma": {
        "blocks": [
          {
            "x": 870.5,
            "top": 493,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Biopharma",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+32% Y/Y",
                "size": 28,
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
            "x": 873,
            "top": 1055,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Business",
                "size": 39,
                "weight": 800
              },
              {
                "text": "innovation",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
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
            "x": 1246.5,
            "top": 594,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1615.5,
            "top": 458,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "70% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+39pp Y/Y",
                "size": 28,
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
            "x": 1624,
            "top": 1175,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Cost",
                "size": 39,
                "weight": 800
              },
              {
                "text": "of sales",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 2001.5,
            "top": 348,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "27% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+51pp Y/Y",
                "size": 28,
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
            "x": 2000,
            "top": 940,
            "anchor": "middle",
            "lineGap": 7,
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
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2515,
            "top": 415,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Net profit",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "25% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+43pp Y/Y",
                "size": 28,
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
            "x": 2515,
            "top": 674,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2515,
            "top": 878,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "18% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28,
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
            "x": 2515,
            "top": 1062,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "15% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
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
            "x": 2515,
            "top": 1235,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "11% of revenue",
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
      }
    }
  },
  "nodes": [
    {
      "id": "primary_care",
      "value": 9.1,
      "label": [
        "Primary",
        "Care"
      ],
      "notes": [
        "+44% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source"
    },
    {
      "id": "specialty_care",
      "value": 4.3,
      "label": [
        "Specialty",
        "Care"
      ],
      "notes": [
        "+14% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source"
    },
    {
      "id": "oncology",
      "value": 4,
      "label": [
        "Oncology"
      ],
      "notes": [
        "+30% Y/Y"
      ],
      "col": 0,
      "order": 2,
      "type": "source",
      "valueText": "$4.0B"
    },
    {
      "id": "biopharma",
      "value": 17.4,
      "label": [
        "Biopharma"
      ],
      "notes": [
        "+32% Y/Y"
      ],
      "col": 1,
      "order": 0,
      "type": "hub"
    },
    {
      "id": "business_innovation",
      "value": 0.3,
      "label": [
        "Business",
        "innovation"
      ],
      "notes": [
        "+2% Y/Y"
      ],
      "col": 1,
      "order": 1,
      "type": "source"
    },
    {
      "id": "revenue",
      "value": 17.7,
      "label": [
        "Revenue"
      ],
      "notes": [
        "+31% Y/Y"
      ],
      "col": 2,
      "order": 0,
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "value": 12.4,
      "label": [
        "Gross profit"
      ],
      "notes": [
        "70% margin",
        "+39pp Y/Y"
      ],
      "col": 3,
      "order": 0,
      "type": "profit"
    },
    {
      "id": "cost_of_sales",
      "value": 5.3,
      "label": [
        "Cost",
        "of sales"
      ],
      "notes": [],
      "col": 3,
      "order": 1,
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "value": 4.7,
      "label": [
        "Operating profit"
      ],
      "notes": [
        "27% margin",
        "+51pp Y/Y"
      ],
      "col": 4,
      "order": 0,
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "value": 7.7,
      "label": [
        "Operating",
        "expenses"
      ],
      "notes": [],
      "col": 4,
      "order": 1,
      "type": "cost"
    },
    {
      "id": "net_profit",
      "value": 4.5,
      "label": [
        "Net profit"
      ],
      "notes": [
        "25% Y/Y",
        "+43pp Y/Y"
      ],
      "col": 5,
      "order": 0,
      "type": "profit"
    },
    {
      "id": "tax",
      "value": 0.2,
      "label": [
        "Tax"
      ],
      "notes": [],
      "col": 5,
      "order": 1,
      "type": "cost"
    },
    {
      "id": "sga",
      "value": 3.2,
      "label": [
        "SG&A"
      ],
      "notes": [
        "18% of revenue",
        "(6pp) Y/Y"
      ],
      "col": 5,
      "order": 2,
      "type": "cost"
    },
    {
      "id": "rnd",
      "value": 2.6,
      "label": [
        "R&D"
      ],
      "notes": [
        "15% of revenue",
        "(5pp) Y/Y"
      ],
      "col": 5,
      "order": 3,
      "type": "cost"
    },
    {
      "id": "other",
      "value": 1.9,
      "label": [
        "Other"
      ],
      "notes": [
        "11% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 4,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 9.1,
      "sourceWidth": 150,
      "targetWidth": 150,
      "y0": 599,
      "y1": 716,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c5f7"
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 4.3,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 858,
      "y1": 827,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c5f7"
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 4,
      "sourceWidth": 68,
      "targetWidth": 68,
      "y0": 1095,
      "y1": 897,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85c5f7"
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 17.4,
      "sourceWidth": 290,
      "targetWidth": 290,
      "y0": 786,
      "y1": 891,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c5f7"
    },
    {
      "source": "business_innovation",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 1258,
      "y1": 1038,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c5f7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 12.4,
      "sourceWidth": 206,
      "targetWidth": 206,
      "y0": 849,
      "y1": 746,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 5.3,
      "sourceWidth": 88,
      "targetWidth": 88,
      "y0": 996,
      "y1": 1115,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4.7,
      "sourceWidth": 78,
      "targetWidth": 78,
      "y0": 682,
      "y1": 575,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 7.7,
      "sourceWidth": 128,
      "targetWidth": 128,
      "y0": 785,
      "y1": 860,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.5,
      "sourceWidth": 74,
      "targetWidth": 74,
      "y0": 573,
      "y1": 477,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 612,
      "y1": 710,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.2,
      "sourceWidth": 54,
      "targetWidth": 54,
      "y0": 823,
      "y1": 909,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.6,
      "sourceWidth": 43,
      "targetWidth": 43,
      "y0": 871.5,
      "y1": 1095.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 1.9,
      "sourceWidth": 31,
      "targetWidth": 31,
      "y0": 908.5,
      "y1": 1279.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2024 财年第三季度",
      "meta": {
        "title": "辉瑞 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "来源标注为 2024 财年第三季度",
        "titleSize": 116,
        "titleTextLength": 1860,
        "hidePeriodStamp": true
      },
      "nodes": {
        "primary_care": {
          "label": [
            "初级",
            "医疗"
          ],
          "notes": [
            "同比 +44%"
          ]
        },
        "specialty_care": {
          "label": [
            "专科",
            "医疗"
          ],
          "notes": [
            "同比 +14%"
          ]
        },
        "oncology": {
          "label": [
            "肿瘤"
          ],
          "notes": [
            "同比 +30%"
          ]
        },
        "biopharma": {
          "label": [
            "生物制药"
          ],
          "notes": [
            "同比 +32%"
          ]
        },
        "business_innovation": {
          "label": [
            "业务",
            "创新"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +31%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "利润率 70%",
            "同比 +39 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": [
            "销售",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": [
            "营业利润"
          ],
          "notes": [
            "利润率 27%",
            "同比 +51 个百分点"
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
          "label": [
            "净利润"
          ],
          "notes": [
            "同比 25%",
            "同比 +43 个百分点"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ],
          "notes": []
        },
        "sga": {
          "label": [
            "销售、一般及",
            "行政费用"
          ],
          "notes": [
            "占收入 18%",
            "同比 (6 个百分点)"
          ]
        },
        "rnd": {
          "label": [
            "研发"
          ],
          "notes": [
            "占收入 15%",
            "同比 (5 个百分点)"
          ]
        },
        "other": {
          "label": [
            "其他"
          ],
          "notes": [
            "占收入 11%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 499,
                "top": 429,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +44%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325,
                "top": 552.5,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "初级",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "specialty_care": {
            "blocks": [
              {
                "x": 499,
                "top": 728,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325,
                "top": 810,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "专科",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
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
                "x": 499,
                "top": 966,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 335,
                "top": 1070,
                "anchor": "middle",
                "lineGap": 7,
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
          "biopharma": {
            "blocks": [
              {
                "x": 870.5,
                "top": 493,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "生物制药",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +32%",
                    "size": 28,
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
                "x": 873,
                "top": 1055,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "业务",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "创新",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
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
                "x": 1246.5,
                "top": 594,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1615.5,
                "top": 458,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 70%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +39 个百分点",
                    "size": 28,
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
                "x": 1624,
                "top": 1175,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售",
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 2001.5,
                "top": 348,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +51 个百分点",
                    "size": 28,
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
                "x": 2000,
                "top": 940,
                "anchor": "middle",
                "lineGap": 7,
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2530,
                "top": 415,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "同比 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +43 个百分点",
                    "size": 28,
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
                "x": 2515,
                "top": 674,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2515,
                "top": 878,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28,
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
                "x": 2515,
                "top": 1062,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
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
                "x": 2515,
                "top": 1235,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
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
          }
        }
      }
    }
  }
});})();
