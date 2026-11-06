(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "astrazeneca-q3-fy26",
  "name": "AstraZeneca · Q3 FY26",
  "company": "AstraZeneca",
  "meta": {
    "company": "AstraZeneca",
    "title": "AstraZeneca Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/astrazeneca-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2475,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#8d044c",
        "label": "#8d044c"
      },
      "hub": {
        "node": "#8d044c",
        "label": "#8d044c"
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
      "source": "#c487a6",
      "hub": "#c487a6",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "i18n": {
    "zh": {
      "name": "阿斯利康 · 2026 财年第三季度",
      "meta": {
        "title": "阿斯利康 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 2240
      },
      "nodes": {
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +17%"
          ]
        },
        "cvrm": {
          "label": [
            "心血管、肾脏",
            "与代谢"
          ],
          "notes": [
            "同比 (19%)"
          ]
        },
        "respiratory_immunology": {
          "label": [
            "呼吸与",
            "免疫"
          ],
          "notes": [
            "同比 +11%"
          ]
        },
        "vaccines_immuno_oncology": {
          "label": [
            "疫苗与",
            "免疫肿瘤"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "rare_disease": {
          "label": "罕见病",
          "notes": [
            "同比 +9%"
          ]
        },
        "other_medicines": {
          "label": "其他药品",
          "notes": [
            "同比 (5%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 27%",
            "同比 +3 个百分点"
          ]
        },
        "operating_other_income": {
          "label": "其他",
          "notes": []
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 19%",
            "同比 +3%"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expenses": {
          "label": "其他",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": [
            "占收入 32%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 24%",
            "同比 (0 个百分点)"
          ]
        },
        "opex_other": {
          "label": "其他",
          "notes": [
            "占收入 1%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "oncology": {
            "blocks": [
              {
                "x": 479,
                "top": 283,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 340,
                "top": 409,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "cvrm": {
            "blocks": [
              {
                "x": 479,
                "top": 562,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (19%)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421,
                "top": 631,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "心血管、肾脏",
                    "size": 39,
                    "weight": 800,
                    "color": "#8d044c"
                  },
                  {
                    "text": "与代谢",
                    "size": 39,
                    "weight": 800,
                    "color": "#8d044c"
                  }
                ]
              }
            ]
          },
          "respiratory_immunology": {
            "blocks": [
              {
                "x": 479,
                "top": 735,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 360,
                "top": 799,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "呼吸与",
                    "size": 39,
                    "weight": 800,
                    "color": "#8d044c"
                  },
                  {
                    "text": "免疫",
                    "size": 39,
                    "weight": 800,
                    "color": "#8d044c"
                  }
                ]
              }
            ]
          },
          "vaccines_immuno_oncology": {
            "blocks": [
              {
                "x": 479,
                "top": 918,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 400,
                "top": 967,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "疫苗与",
                    "size": 39,
                    "weight": 800,
                    "color": "#8d044c"
                  },
                  {
                    "text": "免疫肿瘤",
                    "size": 39,
                    "weight": 800,
                    "color": "#8d044c"
                  }
                ]
              }
            ]
          },
          "rare_disease": {
            "blocks": [
              {
                "x": 479,
                "top": 1040,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 400,
                "top": 1134,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "罕见病",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_medicines": {
            "blocks": [
              {
                "x": 479,
                "top": 1218,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 402,
                "top": 1288,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他药品",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 946,
                "top": 470,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1412,
                "top": 335,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 82%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1412,
                "top": 1092,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
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
                "x": 1880,
                "top": 236,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 27%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_other_income": {
            "blocks": [
              {
                "x": 1763,
                "top": 591,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1880,
                "top": 932,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业费用",
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
                "x": 2500,
                "top": 294,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39
                  },
                  {
                    "text": "利润率 19%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2495,
                "top": 547,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2495,
                "top": 655,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2404,
                "top": 827,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  },
                  {
                    "text": "占收入 32%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2418,
                "top": 1032,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  },
                  {
                    "text": "占收入 24%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "opex_other": {
            "blocks": [
              {
                "x": 2406,
                "top": 1238,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "layout": {
    "scale": 1,
    "nodes": {
      "oncology": {
        "x": 443,
        "y": 373,
        "width": 71,
        "height": 153
      },
      "cvrm": {
        "x": 443,
        "y": 653,
        "width": 71,
        "height": 50
      },
      "respiratory_immunology": {
        "x": 443,
        "y": 825,
        "width": 71,
        "height": 49
      },
      "vaccines_immuno_oncology": {
        "x": 443,
        "y": 1011,
        "width": 71,
        "height": 6
      },
      "rare_disease": {
        "x": 443,
        "y": 1132,
        "width": 71,
        "height": 51
      },
      "other_medicines": {
        "x": 443,
        "y": 1310,
        "width": 71,
        "height": 3
      },
      "revenue": {
        "x": 910,
        "y": 616,
        "width": 71,
        "height": 322
      },
      "gross_profit": {
        "x": 1376,
        "y": 520,
        "width": 72,
        "height": 264
      },
      "cost_of_sales": {
        "x": 1376,
        "y": 1011,
        "width": 72,
        "height": 58
      },
      "operating_profit": {
        "x": 1844,
        "y": 420,
        "width": 72,
        "height": 86
      },
      "operating_other_income": {
        "x": 1727,
        "y": 569,
        "width": 72,
        "height": 4
      },
      "operating_expenses": {
        "x": 1844,
        "y": 727,
        "width": 72,
        "height": 182
      },
      "net_profit": {
        "x": 2311,
        "y": 318,
        "width": 72,
        "height": 62
      },
      "other_expenses": {
        "x": 2311,
        "y": 688,
        "width": 72,
        "height": 8
      },
      "tax": {
        "x": 2311,
        "y": 575,
        "width": 72,
        "height": 16
      },
      "sga": {
        "x": 2311,
        "y": 821,
        "width": 72,
        "height": 100
      },
      "rnd": {
        "x": 2311,
        "y": 1039,
        "width": 72,
        "height": 77
      },
      "opex_other": {
        "x": 2311,
        "y": 1255,
        "width": 72,
        "height": 3
      }
    },
    "labels": {
      "oncology": {
        "blocks": [
          {
            "x": 479,
            "top": 283,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+17% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 340,
            "top": 409,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Oncology",
                "size": 39,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "cvrm": {
        "blocks": [
          {
            "x": 479,
            "top": 562,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(19%) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421,
            "top": 631,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cardiovascular,",
                "size": 39,
                "weight": 800,
                "color": "#8d044c"
              },
              {
                "text": "Renal & Metabolism",
                "size": 39,
                "weight": 800,
                "color": "#8d044c"
              }
            ]
          }
        ]
      },
      "respiratory_immunology": {
        "blocks": [
          {
            "x": 479,
            "top": 735,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+11% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 360,
            "top": 799,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Respiratory &",
                "size": 39,
                "weight": 800,
                "color": "#8d044c"
              },
              {
                "text": "Immunology",
                "size": 39,
                "weight": 800,
                "color": "#8d044c"
              }
            ]
          }
        ]
      },
      "vaccines_immuno_oncology": {
        "blocks": [
          {
            "x": 479,
            "top": 918,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 400,
            "top": 967,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Vaccines &",
                "size": 39,
                "weight": 800,
                "color": "#8d044c"
              },
              {
                "text": "Immuno-Oncology",
                "size": 39,
                "weight": 800,
                "color": "#8d044c"
              }
            ]
          }
        ]
      },
      "rare_disease": {
        "blocks": [
          {
            "x": 479,
            "top": 1040,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+9% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 400,
            "top": 1134,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Rare Disease",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_medicines": {
        "blocks": [
          {
            "x": 479,
            "top": 1218,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "(5%) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 402,
            "top": 1288,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other medicines",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 946,
            "top": 470,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1412,
            "top": 335,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "82% margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1412,
            "top": 1092,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
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
            "x": 1880,
            "top": 236,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "27% margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_other_income": {
        "blocks": [
          {
            "x": 1763,
            "top": 591,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1880,
            "top": 932,
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
            "x": 2500,
            "top": 294,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39
              },
              {
                "text": "19% margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2495,
            "top": 547,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2495,
            "top": 655,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2404,
            "top": 827,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 32,
                "weight": 800
              }
            ]
          },
          {
            "x": 2502,
            "top": 827,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          },
          {
            "x": 2404,
            "top": 869,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "32% of revenue",
                "size": 28,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2418,
            "top": 1032,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800
              }
            ]
          },
          {
            "x": 2490,
            "top": 1032,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          },
          {
            "x": 2418,
            "top": 1074,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "24% of revenue",
                "size": 28,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "opex_other": {
        "blocks": [
          {
            "x": 2406,
            "top": 1238,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              }
            ]
          },
          {
            "x": 2504,
            "top": 1238,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          },
          {
            "x": 2406,
            "top": 1280,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "1% of revenue",
                "size": 28,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "color": "#777777",
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
      "id": "oncology",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Oncology",
      "value": 7.8,
      "notes": [
        "+17% Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "linkTint": "#c487a6",
      "valueText": "$7.8B"
    },
    {
      "id": "cvrm",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Cardiovascular,",
        "Renal & Metabolism"
      ],
      "value": 2.6,
      "notes": [
        "(19%) Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "linkTint": "#c487a6",
      "valueText": "$2.6B"
    },
    {
      "id": "respiratory_immunology",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Respiratory &",
        "Immunology"
      ],
      "value": 2.5,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "linkTint": "#c487a6",
      "valueText": "$2.5B"
    },
    {
      "id": "vaccines_immuno_oncology",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Vaccines &",
        "Immuno-Oncology"
      ],
      "value": 0.4,
      "notes": [
        "+2% Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "linkTint": "#c487a6",
      "valueText": "$0.4B"
    },
    {
      "id": "rare_disease",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Rare Disease",
      "value": 2.6,
      "notes": [
        "+9% Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "linkTint": "#c487a6",
      "valueText": "$2.6B"
    },
    {
      "id": "other_medicines",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Other medicines",
      "value": 0.2,
      "notes": [
        "(5%) Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "linkTint": "#c487a6",
      "valueText": "$0.2B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 16.2,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#8d044c",
      "labelColor": "#8d044c",
      "valueText": "$16.2B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 13.3,
      "notes": [
        "82% margin",
        "+0pp Y/Y"
      ],
      "valueText": "$13.3B"
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 2.9,
      "valueText": "($2.9B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 4.4,
      "notes": [
        "27% margin",
        "+3pp Y/Y"
      ],
      "valueText": "$4.4B"
    },
    {
      "id": "operating_other_income",
      "col": 3,
      "order": 1,
      "type": "profit",
      "label": "Other",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Operating expenses",
      "value": 9.2,
      "valueText": "($9.2B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 3.1,
      "notes": [
        "19% margin",
        "+3% Y/Y"
      ],
      "valueText": "$3.1B"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": []
    },
    {
      "id": "tax",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.8,
      "valueText": "($0.8B)",
      "notes": []
    },
    {
      "id": "sga",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 5.1,
      "notes": [
        "32% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($5.1B)"
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "R&D",
      "value": 3.9,
      "notes": [
        "24% of revenue",
        "(0pp) Y/Y"
      ],
      "valueText": "($3.9B)"
    },
    {
      "id": "opex_other",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Other",
      "value": 0.2,
      "notes": [
        "1% of revenue",
        "(0pp) Y/Y"
      ],
      "valueText": "($0.2B)"
    }
  ],
  "links": [
    {
      "source": "oncology",
      "target": "revenue",
      "value": 7.8,
      "sourceWidth": 153,
      "targetWidth": 155,
      "y0": 449.5,
      "y1": 693.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#c487a6"
    },
    {
      "source": "cvrm",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 50,
      "targetWidth": 51,
      "y0": 678,
      "y1": 796.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#c487a6"
    },
    {
      "source": "respiratory_immunology",
      "target": "revenue",
      "value": 2.5,
      "sourceWidth": 49,
      "targetWidth": 50,
      "y0": 849.5,
      "y1": 847.0,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#c487a6"
    },
    {
      "source": "vaccines_immuno_oncology",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 6,
      "targetWidth": 7,
      "y0": 1014,
      "y1": 875.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#c487a6"
    },
    {
      "source": "rare_disease",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 51,
      "targetWidth": 55,
      "y0": 1157.5,
      "y1": 906.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#c487a6"
    },
    {
      "source": "other_medicines",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 4,
      "y0": 1311.5,
      "y1": 936.0,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#c487a6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 13.3,
      "sourceWidth": 264,
      "targetWidth": 264,
      "y0": 748,
      "y1": 652,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.9,
      "sourceWidth": 58,
      "targetWidth": 58,
      "y0": 909,
      "y1": 1040,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4.1,
      "sourceWidth": 82,
      "targetWidth": 82,
      "y0": 561,
      "y1": 461,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 9.2,
      "sourceWidth": 182,
      "targetWidth": 182,
      "y0": 693,
      "y1": 818,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_other_income",
      "target": "operating_profit",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 571,
      "y1": 504,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99",
      "curve": {
        "x0": 1799,
        "x1": 1844,
        "c1x": 1819,
        "c1y": 571,
        "c2x": 1826,
        "c2y": 504
      }
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.1,
      "sourceWidth": 62,
      "targetWidth": 62,
      "y0": 451,
      "y1": 349,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.8,
      "sourceWidth": 16,
      "targetWidth": 16,
      "y0": 490,
      "y1": 583,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expenses",
      "value": 0.4,
      "sourceWidth": 8,
      "targetWidth": 8,
      "y0": 502,
      "y1": 692,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 5.1,
      "sourceWidth": 102,
      "targetWidth": 100,
      "y0": 778,
      "y1": 871,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.9,
      "sourceWidth": 77,
      "targetWidth": 77,
      "y0": 867.5,
      "y1": 1077.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "opex_other",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 907.5,
      "y1": 1256.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/astrazeneca/company-logo-q3-fy26.png",
      "x": 610,
      "y": 240,
      "width": 674.5,
      "height": 180.5,
      "clearance": true
    },
    {
      "key": "tagrisso",
      "href": "data/assets/raster-annotations/astrazeneca/tagrisso-q3-fy26.png",
      "x": 182,
      "y": 461,
      "width": 140,
      "height": 37,
      "clearance": true
    },
    {
      "key": "forxiga",
      "href": "data/assets/raster-annotations/astrazeneca/forxiga-q3-fy26.png",
      "x": 210,
      "y": 730,
      "width": 79,
      "height": 48,
      "clearance": true
    },
    {
      "key": "symbicort",
      "href": "data/assets/raster-annotations/astrazeneca/symbicort-q3-fy26.png",
      "x": 190,
      "y": 898,
      "width": 112,
      "height": 49,
      "clearance": true
    },
    {
      "key": "synagis",
      "href": "data/assets/raster-annotations/astrazeneca/synagis-q3-fy26.png",
      "x": 191,
      "y": 1068,
      "width": 106,
      "height": 48,
      "clearance": true
    }
  ]
});})();
