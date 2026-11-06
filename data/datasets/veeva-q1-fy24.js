(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "veeva-q1-fy24",
  "name": "Veeva Systems · Q1 FY24",
  "company": "Veeva Systems",
  "meta": {
    "company": "Veeva Systems",
    "title": "Veeva Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/veeva-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 122.4111328125,
    "titleTextLength": 2096.6162109375,
    "periodX": 2284.1396484375,
    "periodY": 257.8447265625,
    "periodNoteY": 302.12109375
  },
  "nodes": [
    {
      "id": "commercial",
      "label": "Commercial solutions",
      "value": 239,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "rnd_solutions",
      "label": "R&D solutions",
      "value": 175,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+0% Y/Y"
      ]
    },
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 415,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 112,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 526,
      "type": "hub",
      "col": 0,
      "order": 4,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 360,
      "type": "profit",
      "col": 0,
      "order": 5,
      "notes": [
        "68% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 167,
      "type": "cost",
      "col": 0,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 62,
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "12% margin",
        "(14pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 298,
      "type": "cost",
      "col": 0,
      "order": 8,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 30,
      "type": "profit",
      "col": 0,
      "order": 9,
      "notes": []
    },
    {
      "id": "tax_benefit",
      "label": "Tax benefit",
      "value": 40,
      "type": "profit",
      "col": 0,
      "order": 10,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 132,
      "type": "profit",
      "col": 0,
      "order": 11,
      "notes": [
        "25% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 147,
      "type": "cost",
      "col": 0,
      "order": 12,
      "notes": [
        "28% of revenue",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 89,
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": [
        "17% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 63,
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": [
        "12% of revenue",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "commercial",
      "target": "subscription",
      "value": 239,
      "width": 153.6650390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "rnd_solutions",
      "target": "subscription",
      "value": 175,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 110.69091796875,
      "targetWidth": 113.29541015625
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 415,
      "width": 265.658203125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 112,
      "width": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 360,
      "width": 230.49755859375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 167,
      "width": 106.7841796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 62,
      "width": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 298,
      "width": 191.43017578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 62,
      "width": 39.0673828125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 30,
      "width": 19.53369140625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 40,
      "width": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 147,
      "width": 93.76171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 89,
      "width": 57.298828125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 63,
      "width": 40.36962890625,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.6412259765625,
    "nodes": {
      "commercial": {
        "x": 376.34912109375,
        "y": 500.0625,
        "width": 72.92578125,
        "height": 153.6650390625
      },
      "rnd_solutions": {
        "x": 376.34912109375,
        "y": 886.82958984375,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "subscription": {
        "x": 750.09375,
        "y": 612.0556640625,
        "width": 72.92578125,
        "height": 266.96044921875
      },
      "services": {
        "x": 747.4892578125,
        "y": 1196.76416015625,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "revenue": {
        "x": 1123.83837890625,
        "y": 690.1904296875,
        "width": 72.92578125,
        "height": 337.28173828125
      },
      "gross_profit": {
        "x": 1489.76953125,
        "y": 584.70849609375,
        "width": 72.92578125,
        "height": 230.49755859375
      },
      "cost_of_revenue": {
        "x": 1488.46728515625,
        "y": 1031.37890625,
        "width": 72.92578125,
        "height": 106.7841796875
      },
      "operating_profit": {
        "x": 1851.7939453125,
        "y": 463.599609375,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "operating_expenses": {
        "x": 1851.7939453125,
        "y": 714.93310546875,
        "width": 72.92578125,
        "height": 191.43017578125
      },
      "other": {
        "x": 1998.94775390625,
        "y": 510.48046875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "tax_benefit": {
        "x": 2096.6162109375,
        "y": 627.6826171875,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "net_profit": {
        "x": 2245.072265625,
        "y": 376.34912109375,
        "width": 72.92578125,
        "height": 84.64599609375
      },
      "rnd": {
        "x": 2245.072265625,
        "y": 799.5791015625,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "sm": {
        "x": 2245.072265625,
        "y": 1047.005859375,
        "width": 72.92578125,
        "height": 57.298828125
      },
      "ga": {
        "x": 2245.072265625,
        "y": 1282.71240234375,
        "width": 72.92578125,
        "height": 40.36962890625
      }
    },
    "labels": {
      "commercial": {
        "blocks": [
          {
            "x": 412.81201171875,
            "top": 402.39404296875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+5% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 533.38046875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Commercial",
                "size": 34,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "solutions",
                "size": 34,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "rnd_solutions": {
        "blocks": [
          {
            "x": 412.81201171875,
            "top": 790.46337890625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+0% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 893.5498046875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "R&D",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "solutions",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 786.556640625,
            "top": 466.2041015625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Subscription",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+3% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 786.556640625,
            "top": 1048.30810546875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Services",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+9% Y/Y",
                "size": 28.6494140625,
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
            "x": 1160.30126953125,
            "top": 543.03662109375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+4% Y/Y",
                "size": 28.6494140625,
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
            "x": 1526.232421875,
            "top": 397.18505859375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009653"
              },
              {
                "text": "68% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 1524.93017578125,
            "top": 1153.7900390625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1888.2568359375,
            "top": 277.28515625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009653"
              },
              {
                "text": "12% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(14pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 1888.2568359375,
            "top": 920.68798828125,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#a51b00"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2035.41064453125,
            "top": 543.03662109375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#009653"
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2133.0791015625,
            "top": 662.84326171875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.25390625,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#009653"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 384.16259765625,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009653"
              },
              {
                "text": "25% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28.6494140625,
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
            "x": 2435.2001953125,
            "top": 802.18359375,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "28% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 1017.05419921875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "17% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 1231.9248046875,
            "anchor": "middle",
            "lineGap": 13.0224609375,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51b00"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a51b00"
              },
              {
                "text": "12% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
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
      "href": "data/assets/raster-annotations/veeva/logo-q1-fy24.png",
      "x": 506.57373046875,
      "y": 274.77392578125,
      "width": 545.64111328125,
      "height": 126.31787109375,
      "clearance": true
    },
    {
      "key": "crm",
      "href": "data/assets/raster-annotations/veeva/crm-q1-fy24.png",
      "x": 75.5302734375,
      "y": 626.2646484375,
      "width": 259.14697265625,
      "height": 37.76513671875,
      "clearance": true
    },
    {
      "key": "vault",
      "href": "data/assets/raster-annotations/veeva/vault-q1-fy24.png",
      "x": 67.716796875,
      "y": 1006.63623046875,
      "width": 272.16943359375,
      "height": 40.36962890625,
      "clearance": true
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "subtitleColor": "#606060",
    "noteColor": "#777777",
    "nodeWidth": 72.92578125,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#666666",
        "label": "#000000"
      },
      "hub": {
        "node": "#666666",
        "label": "#000000"
      },
      "profit": {
        "node": "#289f28",
        "label": "#009653"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51b00"
      }
    },
    "linkTint": {
      "source": "#b3b3b3",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 28.6494140625,
      "lineGap": 13.0224609375
    }
  },
  "i18n": {
    "zh": {
      "name": "Veeva Systems · 2024 财年第一季度",
      "meta": {
        "title": "Veeva 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月"
      },
      "nodes": {
        "commercial": {
          "label": "商业化解决方案",
          "notes": [
            "同比 +5%"
          ]
        },
        "rnd_solutions": {
          "label": "研发解决方案",
          "notes": [
            "同比 +0%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +3%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +9%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 68%",
            "同比 (4 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 (14 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "tax_benefit": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 25%",
            "同比 +5 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 28%",
            "同比 +5 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 17%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial": {
            "blocks": [
              {
                "x": 412.81201171875,
                "top": 402.39404296875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 533.38046875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "商业化",
                    "size": 34,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "解决方案",
                    "size": 34,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "rnd_solutions": {
            "blocks": [
              {
                "x": 412.81201171875,
                "top": 790.46337890625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +0%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 893.5498046875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "研发",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "解决方案",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 786.556640625,
                "top": 466.2041015625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 786.556640625,
                "top": 1048.30810546875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "服务",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28.6494140625,
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
                "x": 1160.30126953125,
                "top": 543.03662109375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28.6494140625,
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
                "x": 1526.232421875,
                "top": 397.18505859375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009653"
                  },
                  {
                    "text": "利润率 68%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28.6494140625,
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
                "x": 1524.93017578125,
                "top": 1153.7900390625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1888.2568359375,
                "top": 277.28515625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009653"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (14 个百分点)",
                    "size": 28.6494140625,
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
                "x": 1888.2568359375,
                "top": 920.68798828125,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#a51b00"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2035.41064453125,
                "top": 543.03662109375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#009653"
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2133.0791015625,
                "top": 662.84326171875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#009653"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 384.16259765625,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009653"
                  },
                  {
                    "text": "利润率 25%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28.6494140625,
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
                "x": 2435.2001953125,
                "top": 802.18359375,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "占收入 28%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 1017.05419921875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "占收入 17%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 1231.9248046875,
                "anchor": "middle",
                "lineGap": 13.0224609375,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51b00"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a51b00"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.6494140625,
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
