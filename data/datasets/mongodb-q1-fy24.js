(function(){ window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "mongodb-q1-fy24",
  "name": "MongoDB · Q1 FY24",
  "company": "MongoDB",
  "meta": {
    "company": "MongoDB",
    "title": "MongoDB Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/mongodb-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2331.0205078125,
    "periodX": 2396.1328125,
    "periodY": 263.0537109375,
    "periodNoteY": 307.330078125,
    "logoX": 679.7724609375,
    "logoY": 272.16943359375,
    "logoWidth": 599.033203125,
    "logoHeight": 143.2470703125,
    "logoViewBox": "0 0 460 110",
    "logoSvg": "<g fill=\"#06232e\"><path d=\"M25 0 C7 24 0 40 0 55 C0 80 16 94 23 97 L25 108 L27 97 C42 87 50 72 50 55 C50 33 34 12 25 0Z\"/><path d=\"M25 35 L23 93 L25 105 L27 93Z\" fill=\"#f2f2f2\"/><text x=\"70\" y=\"94\" font-family=\"Georgia,serif\" font-size=\"82\">MongoDB</text><text x=\"447\" y=\"94\" font-family=\"Arial,sans-serif\" font-size=\"13\">®</text></g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#06232e",
        "label": "#06232e"
      },
      "hub": {
        "node": "#06232e",
        "label": "#06232e"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00964a"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#981100"
      }
    },
    "linkTint": {
      "source": "#88959a",
      "hub": "#88959a",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 28.6494140625,
      "lineGap": 10.41796875
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "atlas",
      "label": "Atlas",
      "value": 239,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+40% Y/Y",
        "65% of revenue",
        "+5pp Y/Y"
      ],
      "valueText": "$239M"
    },
    {
      "id": "other_subscription",
      "label": "Other subscription",
      "value": 116,
      "type": "source",
      "col": 1,
      "order": 0,
      "notes": [
        "+11% Y/Y"
      ],
      "valueText": "$116M"
    },
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 355,
      "type": "source",
      "col": 2,
      "order": 0,
      "notes": [
        "+29% Y/Y"
      ],
      "valueText": "$355M"
    },
    {
      "id": "services",
      "label": "Services",
      "value": 14,
      "type": "source",
      "col": 3,
      "order": 0,
      "notes": [
        "+25% Y/Y"
      ],
      "valueText": "$14M"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 368,
      "type": "hub",
      "col": 4,
      "order": 0,
      "notes": [
        "+29% Y/Y"
      ],
      "valueText": "$368M"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 271,
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "74% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$271M"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 97,
      "type": "cost",
      "col": 6,
      "order": 0,
      "notes": [],
      "valueText": "($97M)"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 69,
      "type": "cost",
      "col": 7,
      "order": 0,
      "notes": [
        "(19%) margin",
        "+8pp Y/Y"
      ],
      "valueText": "($69M)"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 339,
      "type": "cost",
      "col": 8,
      "order": 0,
      "notes": [],
      "valueText": "($339M)"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 183,
      "type": "cost",
      "col": 9,
      "order": 0,
      "notes": [
        "50% of revenue",
        "(3pp) Y/Y"
      ],
      "valueText": "($183M)"
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 117,
      "type": "cost",
      "col": 10,
      "order": 0,
      "notes": [
        "32% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($117M)"
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 40,
      "type": "cost",
      "col": 11,
      "order": 0,
      "notes": [
        "11% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($40M)"
    }
  ],
  "layout": {
    "nodes": {
      "atlas": {
        "x": 393.2783203125,
        "y": 507.8759765625,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "other_subscription": {
        "x": 393.2783203125,
        "y": 884.22509765625,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "subscription": {
        "x": 754.00048828125,
        "y": 621.17138671875,
        "width": 72.92578125,
        "height": 222.68408203125
      },
      "services": {
        "x": 759.20947265625,
        "y": 1121.23388671875,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "revenue": {
        "x": 1140.767578125,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 230.49755859375
      },
      "gross_profit": {
        "x": 1509.30322265625,
        "y": 635.49609375,
        "width": 72.92578125,
        "height": 169.2919921875
      },
      "cost_of_revenue": {
        "x": 1506.69873046875,
        "y": 935.0126953125,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "operating_loss": {
        "x": 1704.64013671875,
        "y": 1071.74853515625,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "operating_expenses": {
        "x": 1870.025390625,
        "y": 724.048828125,
        "width": 72.92578125,
        "height": 212.26611328125
      },
      "sm": {
        "x": 2262.00146484375,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 114.59765625
      },
      "rnd": {
        "x": 2259.39697265625,
        "y": 856.8779296875,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "ga": {
        "x": 2262.00146484375,
        "y": 1152.48779296875,
        "width": 72.92578125,
        "height": 24.74267578125
      }
    },
    "labels": {
      "atlas": {
        "blocks": [
          {
            "x": 246.12451171875,
            "top": 543.03662109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Atlas",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "65% of revenue",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+5pp Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 429.7412109375,
            "top": 411.509765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+40% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "other_subscription": {
        "blocks": [
          {
            "x": 247.4267578125,
            "top": 871.6408203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "subscription",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          },
          {
            "x": 429.7412109375,
            "top": 786.556640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "subscription": {
        "blocks": [
          {
            "x": 790.46337890625,
            "top": 474.017578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "+29% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 625.078125,
            "top": 1103.00244140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          },
          {
            "x": 794.3701171875,
            "top": 1026.169921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1177.23046875,
            "top": 548.24560546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "+29% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1545.76611328125,
            "top": 449.27490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "74% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1543.16162109375,
            "top": 1011.84521484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1910.39501953125,
            "top": 558.66357421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1739.80078125,
            "top": 1131.65185546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(19%) margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+8pp Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 546.943359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales &",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "50% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Research &",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "development",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "32% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 1125.140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      }
    }
  },
  "links": [
    {
      "source": "atlas",
      "target": "subscription",
      "value": 239,
      "sourceWidth": 149.75830078125,
      "targetWidth": 149.75830078125,
      "y0": 582.755126953125,
      "y1": 696.050537109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_subscription",
      "target": "subscription",
      "value": 116,
      "sourceWidth": 71.62353515625,
      "targetWidth": 72.92578125,
      "y0": 920.036865234375,
      "y1": 807.392578125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "subscription",
      "target": "revenue",
      "value": 355,
      "sourceWidth": 222.68408203125,
      "targetWidth": 221.3818359375,
      "y0": 732.513427734375,
      "y1": 811.29931640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 14,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "y0": 1125.791748046875,
      "y1": 926.548095703125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 271,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "y0": 785.25439453125,
      "y1": 720.14208984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 97,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "y0": 900.503173828125,
      "y1": 965.615478515625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 271,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "y0": 720.14208984375,
      "y1": 808.69482421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 69,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "y0": 1093.235595703125,
      "y1": 914.827880859375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 183,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625,
      "y0": 781.34765625,
      "y1": 596.4287109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 117,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "y0": 875.109375,
      "y1": 893.3408203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 40,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "y0": 923.943603515625,
      "y1": 1164.859130859375,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "customers",
      "label": "Customers",
      "value": "43100",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "43,100",
      "basis": "unspecified",
      "notes": [
        "+22% Y/Y"
      ],
      "quote": "Customers 43,100 +22% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          168,
          1240,
          527,
          126
        ]
      }
    },
    {
      "id": "large-customers",
      "label": "> $100K",
      "value": "1761",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,761",
      "basis": "unspecified",
      "notes": [
        "+28% Y/Y"
      ],
      "quote": "> $100K 1,761 +28% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          168,
          1240,
          527,
          126
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"167.98975\" y=\"1239.73828\" width=\"527.40967\" height=\"126.31787\" rx=\"36.46289\" fill=\"#06232e\"/><text x=\"229.19531\" y=\"1293.13037\" font-size=\"29.95166\" font-weight=\"800\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"401.09180\" y=\"1293.13037\" font-size=\"29.95166\" fill=\"white\">43,100</text><text x=\"502.66699\" y=\"1293.13037\" font-size=\"29.95166\" fill=\"white\">+22% Y/Y</text><text x=\"261.75146\" y=\"1334.80225\" font-size=\"29.95166\" fill=\"white\">&gt; $100K</text><text data-operating-metric=\"large-customers\" x=\"389.37158\" y=\"1334.80225\" font-size=\"29.95166\" fill=\"white\">1,761</text><text x=\"481.83105\" y=\"1334.80225\" font-size=\"29.95166\" fill=\"white\">+28% Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "MongoDB · 2024 财年第一季度",
      "meta": {
        "title": "MongoDB 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 4 月"
      },
      "nodes": {
        "atlas": {
          "label": "Atlas",
          "notes": [
            "同比 +40%",
            "占收入 65%",
            "同比 +5 个百分点"
          ]
        },
        "other_subscription": {
          "label": "其他订阅",
          "notes": [
            "同比 +11%"
          ]
        },
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +29%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +25%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +29%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 74%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (19%)",
            "同比 +8 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 50%",
            "同比 (3 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 32%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 11%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "atlas": {
            "blocks": [
              {
                "x": 246.12451171875,
                "top": 543.03662109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "Atlas",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "占收入 65%",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 429.7412109375,
                "top": 411.509765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +40%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "other_subscription": {
            "blocks": [
              {
                "x": 247.4267578125,
                "top": 871.6408203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "订阅",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 429.7412109375,
                "top": 786.556640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "subscription": {
            "blocks": [
              {
                "x": 790.46337890625,
                "top": 474.017578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "同比 +29%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 625.078125,
                "top": 1103.00244140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 794.3701171875,
                "top": 1026.169921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1177.23046875,
                "top": 548.24560546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "同比 +29%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1545.76611328125,
                "top": 449.27490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 74%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1543.16162109375,
                "top": 1011.84521484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1910.39501953125,
                "top": 558.66357421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1739.80078125,
                "top": 1131.65185546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (19%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 546.943359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 50%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 32%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2445.6181640625,
                "top": 1125.140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "行政",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"167.98975\" y=\"1239.73828\" width=\"527.40967\" height=\"126.31787\" rx=\"36.46289\" fill=\"#06232e\"/><text x=\"229.19531\" y=\"1293.13037\" font-size=\"29.95166\" font-weight=\"800\" fill=\"white\">客户</text><text data-operating-metric=\"customers\" x=\"401.09180\" y=\"1293.13037\" font-size=\"29.95166\" fill=\"white\">43,100</text><text x=\"502.66699\" y=\"1293.13037\" font-size=\"29.95166\" fill=\"white\">同比 +22%</text><text x=\"261.75146\" y=\"1334.80225\" font-size=\"29.95166\" fill=\"white\">超过 $100K</text><text data-operating-metric=\"large-customers\" x=\"389.37158\" y=\"1334.80225\" font-size=\"29.95166\" fill=\"white\">1,761</text><text x=\"481.83105\" y=\"1334.80225\" font-size=\"29.95166\" fill=\"white\">同比 +28%</text></g>"
    }
  }
}); })();
