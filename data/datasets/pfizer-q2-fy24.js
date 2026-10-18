window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pfizer-q2-fy24",
  "name": "Pfizer · Q2 FY24",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/pfizer-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
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
    "titleColor": "#15527a",
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
        "label": "#009851"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9c1600"
      }
    },
    "linkTint": {
      "source": "#89c6f4",
      "hub": "#89c6f4",
      "profit": "#9acd99",
      "cost": "#df8688"
    },
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "primary_care",
      "value": 5,
      "label": "Primary Care",
      "notes": [
        "(16%) Y/Y"
      ],
      "type": "source",
      "valueText": "$5.0B",
      "col": 0,
      "order": 0
    },
    {
      "id": "specialty_care",
      "value": 4.1,
      "label": "Specialty Care",
      "notes": [
        "+12% Y/Y"
      ],
      "type": "source",
      "valueText": "$4.1B",
      "col": 0,
      "order": 1
    },
    {
      "id": "oncology",
      "value": 4,
      "label": "Oncology",
      "notes": [
        "+26% Y/Y"
      ],
      "type": "source",
      "valueText": "$4.0B",
      "col": 0,
      "order": 2
    },
    {
      "id": "biopharma",
      "value": 13,
      "label": "Biopharma",
      "notes": [
        "+2% Y/Y"
      ],
      "type": "hub",
      "valueText": "$13.0B",
      "col": 1,
      "order": 3
    },
    {
      "id": "business_innovation",
      "value": 0.3,
      "label": "Business innovation",
      "notes": [
        "(8%) Y/Y"
      ],
      "type": "source",
      "valueText": "$0.3B",
      "col": 1,
      "order": 4
    },
    {
      "id": "revenue",
      "value": 13.3,
      "label": "Revenue",
      "notes": [
        "+2% Y/Y"
      ],
      "type": "hub",
      "valueText": "$13.3B",
      "col": 2,
      "order": 5
    },
    {
      "id": "gross_profit",
      "value": 10,
      "label": "Gross profit",
      "notes": [
        "75% margin",
        "+0pp Y/Y"
      ],
      "type": "profit",
      "valueText": "$10.0B",
      "col": 3,
      "order": 6
    },
    {
      "id": "cost_of_sales",
      "value": 3.3,
      "label": "Cost of sales",
      "notes": [],
      "type": "cost",
      "valueText": "($3.3B)",
      "col": 3,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "value": 10.1,
      "label": "Operating expenses",
      "notes": [],
      "type": "cost",
      "valueText": "($10.1B)",
      "col": 4,
      "order": 8
    },
    {
      "id": "sga",
      "value": 3.7,
      "label": "SG&A",
      "notes": [
        "28% of revenue",
        "+1pp Y/Y"
      ],
      "type": "cost",
      "valueText": "($3.7B)",
      "col": 5,
      "order": 9
    },
    {
      "id": "other",
      "value": 3.7,
      "label": "Other",
      "notes": [
        "28% of revenue",
        "+17pp Y/Y"
      ],
      "type": "cost",
      "valueText": "($3.7B)",
      "col": 5,
      "order": 10
    },
    {
      "id": "rnd",
      "value": 2.7,
      "label": "R&D",
      "notes": [
        "20% of revenue",
        "(0pp) Y/Y"
      ],
      "type": "cost",
      "valueText": "($2.7B)",
      "col": 5,
      "order": 11
    },
    {
      "id": "operating_loss",
      "value": -0.1,
      "valueText": "($0.1B)",
      "label": "Operating loss",
      "type": "cost",
      "notes": [
        "(1%) margin",
        "(18pp) Y/Y"
      ],
      "col": 3,
      "order": 8
    }
  ],
  "layout": {
    "nodes": {
      "primary_care": {
        "x": 459,
        "y": 489,
        "width": 73,
        "height": 117
      },
      "specialty_care": {
        "x": 459,
        "y": 779,
        "width": 73,
        "height": 96
      },
      "oncology": {
        "x": 459,
        "y": 1054,
        "width": 73,
        "height": 94
      },
      "biopharma": {
        "x": 832,
        "y": 651,
        "width": 73,
        "height": 307
      },
      "business_innovation": {
        "x": 828,
        "y": 1269,
        "width": 73,
        "height": 7
      },
      "revenue": {
        "x": 1206,
        "y": 744,
        "width": 73,
        "height": 313
      },
      "gross_profit": {
        "x": 1582,
        "y": 650,
        "width": 73,
        "height": 235
      },
      "cost_of_sales": {
        "x": 1585,
        "y": 1089,
        "width": 73,
        "height": 79
      },
      "operating_expenses": {
        "x": 1951,
        "y": 741,
        "width": 73,
        "height": 237
      },
      "sga": {
        "x": 2327,
        "y": 529,
        "width": 73,
        "height": 88
      },
      "other": {
        "x": 2327,
        "y": 835,
        "width": 73,
        "height": 88
      },
      "rnd": {
        "x": 2327,
        "y": 1123,
        "width": 73,
        "height": 64
      },
      "operating_loss": {
        "x": 1773,
        "y": 1078.75,
        "width": 84,
        "height": 3
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 494.853515625,
            "top": 393.2783203125,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "(16%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 497.4580078125,
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
            "x": 494.853515625,
            "top": 684.9814453125,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 778.7431640625,
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
            "x": 494.853515625,
            "top": 961.0576171875,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 332.07275390625,
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 9,
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
            "x": 865.99365234375,
            "top": 497.4580078125,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "+2% Y/Y",
                "size": 27,
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
            "x": 865.99365234375,
            "top": 1062.6328125,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "(8%) Y/Y",
                "size": 27,
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
            "x": 1239.73828125,
            "top": 593.82421875,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "+2% Y/Y",
                "size": 27,
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
            "x": 1614.78515625,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "75% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
            "x": 1619.994140625,
            "top": 1175.92822265625,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost",
                "size": 38,
                "weight": 800
              },
              {
                "text": "of sales",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1985.92529296875,
            "top": 584.70849609375,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2515.939453125,
            "top": 533.9208984375,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "28% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
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
            "x": 2515.939453125,
            "top": 836.0419921875,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "28% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+17pp Y/Y",
                "size": 27,
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
            "x": 2515.939453125,
            "top": 1116.02490234375,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "20% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1815,
            "top": 1097,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800,
                "color": "#9c1600"
              }
            ]
          },
          {
            "x": 1815,
            "top": 1144,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "loss",
                "size": 39,
                "weight": 800,
                "color": "#9c1600"
              }
            ]
          },
          {
            "x": 1815,
            "top": 1191,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#9c1600"
              }
            ]
          },
          {
            "x": 1815,
            "top": 1249,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(1%) margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1815,
            "top": 1296,
            "anchor": "middle",
            "lineGap": 0,
            "lines": [
              {
                "text": "(18pp) Y/Y",
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
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 5,
      "sourceWidth": 117,
      "targetWidth": 117,
      "y0": 547.5,
      "y1": 709.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#89c6f4"
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 4.1,
      "sourceWidth": 96,
      "targetWidth": 96,
      "y0": 827,
      "y1": 816,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#89c6f4"
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 4,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 1101,
      "y1": 911,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#89c6f4"
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 13,
      "sourceWidth": 307,
      "targetWidth": 306,
      "y0": 804.5,
      "y1": 897,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#89c6f4"
    },
    {
      "source": "business_innovation",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 1272.5,
      "y1": 1053.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#89c6f4"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 10,
      "sourceWidth": 235,
      "targetWidth": 235,
      "y0": 861.5,
      "y1": 767.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 3.3,
      "sourceWidth": 78,
      "targetWidth": 79,
      "y0": 1018,
      "y1": 1128.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 10,
      "sourceWidth": 235,
      "targetWidth": 234,
      "y0": 767.5,
      "y1": 858,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.7,
      "sourceWidth": 88,
      "targetWidth": 88,
      "y0": 785,
      "y1": 573,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 3.7,
      "sourceWidth": 86,
      "targetWidth": 88,
      "y0": 872,
      "y1": 879,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.7,
      "sourceWidth": 63,
      "targetWidth": 64,
      "y0": 946.5,
      "y1": 1155,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.1,
      "width": 3,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 1080.25,
      "y1": 976.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8688",
      "curve": {
        "x0": 1857,
        "x1": 1951,
        "c1x": 1897,
        "c1y": 1080.25,
        "c2x": 1887,
        "c2y": 976.5
      }
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/pfizer/company-wordmark.png",
      "x": 823,
      "y": 239,
      "width": 618,
      "height": 253
    },
    {
      "key": "primary-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 29,
      "y": 419,
      "width": 190,
      "height": 216
    },
    {
      "key": "specialty-product",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 18,
      "y": 784,
      "width": 184,
      "height": 73
    },
    {
      "key": "oncology-product",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance-tight.png",
      "x": 17,
      "y": 1066,
      "width": 207,
      "height": 75
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2024 财年第二季度",
      "meta": {
        "title": "辉瑞 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "titleSize": 116
      },
      "nodes": {
        "primary_care": {
          "label": "初级医疗",
          "notes": [
            "同比 (16%)"
          ]
        },
        "specialty_care": {
          "label": "专科医疗",
          "notes": [
            "同比 +12%"
          ]
        },
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +26%"
          ]
        },
        "biopharma": {
          "label": "生物制药",
          "notes": [
            "同比 +2%"
          ]
        },
        "business_innovation": {
          "label": "业务创新",
          "notes": [
            "同比 (8%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 75%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sga": {
          "label": "销售及行政费用",
          "notes": [
            "占收入 28%",
            "同比 +1 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "占收入 28%",
            "同比 +17 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 20%",
            "同比 (0 个百分点)"
          ]
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 (18 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 494.853515625,
                "top": 393.2783203125,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 (16%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 497.4580078125,
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
                "x": 494.853515625,
                "top": 684.9814453125,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 778.7431640625,
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
                "x": 494.853515625,
                "top": 961.0576171875,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 332.07275390625,
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 9,
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
                "x": 865.99365234375,
                "top": 497.4580078125,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 +2%",
                    "size": 27,
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
                "x": 865.99365234375,
                "top": 1062.6328125,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 (8%)",
                    "size": 27,
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
                "x": 1239.73828125,
                "top": 593.82421875,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 +2%",
                    "size": 27,
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
                "x": 1614.78515625,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 75%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
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
                "x": 1619.994140625,
                "top": 1175.92822265625,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1985.92529296875,
                "top": 584.70849609375,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2515.939453125,
                "top": 533.9208984375,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售及行政费用",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 28%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
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
                "x": 2515.939453125,
                "top": 836.0419921875,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "占收入 28%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +17 个百分点",
                    "size": 27,
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
                "x": 2515.939453125,
                "top": 1116.02490234375,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "占收入 20%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1815,
                "top": 1097,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39,
                    "weight": 800,
                    "color": "#9c1600"
                  }
                ]
              },
              {
                "x": 1815,
                "top": 1144,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "亏损",
                    "size": 39,
                    "weight": 800,
                    "color": "#9c1600"
                  }
                ]
              },
              {
                "x": 1815,
                "top": 1191,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#9c1600"
                  }
                ]
              },
              {
                "x": 1815,
                "top": 1249,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "利润率 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1815,
                "top": 1296,
                "anchor": "middle",
                "lineGap": 0,
                "lines": [
                  {
                    "text": "同比 (18 个百分点)",
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
});
