window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pfizer-q1-fy24",
  "name": "Pfizer · Q1 FY24",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Source-stated Q1 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/pfizer-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.333,
    "titleY": 199.219,
    "titleSize": 125,
    "titleWeight": 800,
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
      "x": 822.917,
      "y": 240.885,
      "width": 617.188,
      "height": 251.302
    },
    {
      "key": "primary-care-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 31.25,
      "y": 421.875,
      "width": 188.802,
      "height": 210.938
    },
    {
      "key": "specialty-care-vyndaqel",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 18.229,
      "y": 822.917,
      "width": 188.802,
      "height": 71.615
    },
    {
      "key": "oncology-ibrance",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance.png",
      "x": 18.229,
      "y": 1082.031,
      "width": 208.333,
      "height": 80.729
    }
  ],
  "layout": {
    "nodes": {
      "primary_care": {
        "x": 460.938,
        "y": 488.281,
        "width": 72.917,
        "height": 122.396
      },
      "specialty_care": {
        "x": 460.938,
        "y": 837.24,
        "width": 72.917,
        "height": 65.104
      },
      "oncology": {
        "x": 460.938,
        "y": 1096.354,
        "width": 72.917,
        "height": 59.896
      },
      "biopharma": {
        "x": 834.635,
        "y": 660.156,
        "width": 72.917,
        "height": 244.792
      },
      "business_innovation": {
        "x": 834.635,
        "y": 1160.156,
        "width": 72.917,
        "height": 3.906
      },
      "revenue": {
        "x": 1203.125,
        "y": 770.833,
        "width": 72.917,
        "height": 250
      },
      "gross_profit": {
        "x": 1579.427,
        "y": 661.458,
        "width": 72.917,
        "height": 192.708
      },
      "cost_of_sales": {
        "x": 1582.031,
        "y": 1097.656,
        "width": 72.917,
        "height": 57.292
      },
      "operating_profit": {
        "x": 1945.313,
        "y": 562.5,
        "width": 72.917,
        "height": 57.292
      },
      "operating_expenses": {
        "x": 1947.917,
        "y": 825.521,
        "width": 72.917,
        "height": 135.417
      },
      "tax": {
        "x": 2329.427,
        "y": 748.698,
        "width": 72.917,
        "height": 3.906
      },
      "net_profit": {
        "x": 2329.427,
        "y": 457.031,
        "width": 72.917,
        "height": 52.083
      },
      "sga": {
        "x": 2329.427,
        "y": 886.719,
        "width": 72.917,
        "height": 58.594
      },
      "rnd": {
        "x": 2329.427,
        "y": 1066.406,
        "width": 72.917,
        "height": 41.667
      },
      "other": {
        "x": 2329.427,
        "y": 1250,
        "width": 72.917,
        "height": 35.156
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 497.396,
            "top": 394.531,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "(38%) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.521,
            "top": 498.698,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Primary",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39.063,
                "weight": 800
              }
            ]
          }
        ]
      },
      "specialty_care": {
        "blocks": [
          {
            "x": 497.396,
            "top": 742.188,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.521,
            "top": 822.756,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Specialty",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39.063,
                "weight": 800
              }
            ]
          }
        ]
      },
      "oncology": {
        "blocks": [
          {
            "x": 497.396,
            "top": 1001.302,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.521,
            "top": 1106.771,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Oncology",
                "size": 39.063,
                "weight": 800
              }
            ]
          }
        ]
      },
      "biopharma": {
        "blocks": [
          {
            "x": 871.094,
            "top": 507.812,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Biopharma",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "(20%) Y/Y",
                "size": 26.042,
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
            "x": 871.094,
            "top": 1174.479,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Business",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "innovation",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "(12%) Y/Y",
                "size": 26.042,
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
            "x": 1239.583,
            "top": 618.49,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "(20%) Y/Y",
                "size": 26.042,
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
            "x": 1615.885,
            "top": 468.75,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "77% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 26.042,
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
            "x": 1618.49,
            "top": 1166.667,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1981.771,
            "top": 372.396,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "23% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(11pp) Y/Y",
                "size": 26.042,
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
            "x": 1984.375,
            "top": 973.958,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2518.229,
            "top": 705.729,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2518.229,
            "top": 427.083,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.063,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "21% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2518.229,
            "top": 871.094,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 26.042,
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
            "x": 2518.229,
            "top": 1050.781,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 26.042,
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
            "x": 2518.229,
            "top": 1229.167,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.063,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 26.042,
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
      "label": "Primary Care",
      "value": 7.2,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$7.2B",
      "notes": [
        "(38%) Y/Y"
      ]
    },
    {
      "id": "specialty_care",
      "label": "Specialty Care",
      "value": 3.8,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$3.8B",
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "oncology",
      "label": "Oncology",
      "value": 3.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.5B",
      "notes": [
        "+18% Y/Y"
      ]
    },
    {
      "id": "biopharma",
      "label": "Biopharma",
      "value": 14.6,
      "type": "hub",
      "col": 1,
      "order": 3,
      "valueText": "$14.6B",
      "notes": [
        "(20%) Y/Y"
      ]
    },
    {
      "id": "business_innovation",
      "label": "Business innovation",
      "value": 0.3,
      "type": "source",
      "col": 1,
      "order": 4,
      "valueText": "$0.3B",
      "notes": [
        "(12%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 14.9,
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$14.9B",
      "notes": [
        "(20%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 11.5,
      "type": "profit",
      "col": 3,
      "order": 6,
      "valueText": "$11.5B",
      "notes": [
        "77% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 3.4,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($3.4B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 3.4,
      "type": "profit",
      "col": 4,
      "order": 8,
      "valueText": "$3.4B",
      "notes": [
        "23% margin",
        "(11pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 8.1,
      "type": "cost",
      "col": 4,
      "order": 9,
      "valueText": "($8.1B)",
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 10,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 3.1,
      "type": "profit",
      "col": 5,
      "order": 11,
      "valueText": "$3.1B",
      "notes": [
        "21% margin",
        "(9pp) Y/Y"
      ]
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 3.5,
      "type": "cost",
      "col": 5,
      "order": 12,
      "valueText": "($3.5B)",
      "notes": [
        "23% of revenue",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 2.5,
      "type": "cost",
      "col": 5,
      "order": 13,
      "valueText": "($2.5B)",
      "notes": [
        "17% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.1,
      "type": "cost",
      "col": 5,
      "order": 14,
      "valueText": "($2.1B)",
      "notes": [
        "14% of revenue",
        "+6pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 7.2,
      "sourceWidth": 122.396,
      "targetWidth": 122.396,
      "y0": 549.479,
      "y1": 721.354,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 3.8,
      "sourceWidth": 65.104,
      "targetWidth": 65.104,
      "y0": 869.792,
      "y1": 815.104,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 3.5,
      "sourceWidth": 59.896,
      "targetWidth": 57.292,
      "y0": 1126.302,
      "y1": 876.302,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 14.6,
      "sourceWidth": 244.792,
      "targetWidth": 244.792,
      "y0": 782.552,
      "y1": 893.229,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "business_innovation",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 3.906,
      "targetWidth": 5.208,
      "y0": 1162.109,
      "y1": 1018.229,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 11.5,
      "sourceWidth": 192.708,
      "targetWidth": 192.708,
      "y0": 867.188,
      "y1": 757.813,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 3.4,
      "sourceWidth": 57.292,
      "targetWidth": 57.292,
      "y0": 992.188,
      "y1": 1126.302,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.4,
      "sourceWidth": 57.292,
      "targetWidth": 57.292,
      "y0": 690.104,
      "y1": 591.146,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 8.1,
      "sourceWidth": 135.417,
      "targetWidth": 135.417,
      "y0": 786.458,
      "y1": 893.229,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.1,
      "sourceWidth": 52.083,
      "targetWidth": 52.083,
      "y0": 588.542,
      "y1": 483.073,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 5.208,
      "targetWidth": 3.906,
      "y0": 617.188,
      "y1": 750.651,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.5,
      "sourceWidth": 58.594,
      "targetWidth": 58.594,
      "y0": 854.818,
      "y1": 916.016,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.5,
      "sourceWidth": 41.667,
      "targetWidth": 41.667,
      "y0": 904.948,
      "y1": 1087.24,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.1,
      "sourceWidth": 35.156,
      "targetWidth": 35.156,
      "y0": 943.359,
      "y1": 1267.578,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2024 财年第一季度",
      "meta": {
        "title": "辉瑞 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "来源标注为 2024 财年第一季度"
      },
      "nodes": {
        "primary_care": {
          "label": "初级医疗",
          "notes": [
            "同比 (38%)"
          ]
        },
        "specialty_care": {
          "label": "专科医疗",
          "notes": [
            "同比 +6%"
          ]
        },
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +18%"
          ]
        },
        "biopharma": {
          "label": "生物制药",
          "notes": [
            "同比 (20%)"
          ]
        },
        "business_innovation": {
          "label": "业务创新",
          "notes": [
            "同比 (12%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (20%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 23%",
            "同比 (11 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
            "同比 (9 个百分点)"
          ]
        },
        "sga": {
          "label": "销售及行政费用",
          "notes": [
            "占收入 23%",
            "同比 +5 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 +3 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "占收入 14%",
            "同比 +6 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 497.396,
                "top": 394.531,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "同比 (38%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.521,
                "top": 525.898,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "初级医疗",
                    "size": 39.063,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "specialty_care": {
            "blocks": [
              {
                "x": 497.396,
                "top": 742.188,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.521,
                "top": 847.656,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "专科医疗",
                    "size": 39.063,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "oncology": {
            "blocks": [
              {
                "x": 497.396,
                "top": 1001.302,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.521,
                "top": 1106.771,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 39.063,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "biopharma": {
            "blocks": [
              {
                "x": 871.094,
                "top": 507.812,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "生物制药",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "同比 (20%)",
                    "size": 26.042,
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
                "x": 871.094,
                "top": 1174.479,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "业务创新",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 26.042,
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
                "x": 1239.583,
                "top": 618.49,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "同比 (20%)",
                    "size": 26.042,
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
                "x": 1615.885,
                "top": 468.75,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "利润率 77%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 26.042,
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
                "x": 1618.49,
                "top": 1166.667,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1981.771,
                "top": 372.396,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "利润率 23%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (11 个百分点)",
                    "size": 26.042,
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
                "x": 1984.375,
                "top": 973.958,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2518.229,
                "top": 705.729,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2518.229,
                "top": 427.083,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.063,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "利润率 21%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2518.229,
                "top": 871.094,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售及行政费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 26.042,
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
                "x": 2518.229,
                "top": 1050.781,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 26.042,
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
                "x": 2518.229,
                "top": 1229.167,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.063,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 26.042,
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
