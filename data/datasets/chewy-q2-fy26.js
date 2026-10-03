(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "chewy-q2-fy26",
  "name": "Chewy · Q2 FY26",
  "company": "Chewy",
  "meta": {
    "company": "Chewy",
    "title": "Chewy Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Aug. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/chewy-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#1c49c2",
        "label": "#1c49c2"
      },
      "hub": {
        "node": "#1c49c2",
        "label": "#1c49c2"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009859"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a31700"
      }
    },
    "linkTint": {
      "source": "#92a6db",
      "hub": "#92a6db",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 28,
      "lineGap": 9
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"49\" y=\"1185\" width=\"331\" height=\"165\" rx=\"38\" fill=\"#1c49c2\"/><text x=\"214.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Active customers</text><text data-operating-metric=\"active_customers\" x=\"144.99\" y=\"1301\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">22M</text><text x=\"267.46000000000004\" y=\"1301\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#fff\">(+4% Y/Y)</text></g><g><rect x=\"393\" y=\"1185\" width=\"381\" height=\"165\" rx=\"38\" fill=\"#1c49c2\"/><text x=\"583.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Net sale per customer</text><text data-operating-metric=\"net_sales_per_customer\" x=\"503.49\" y=\"1301\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">$602</text><text x=\"644.46\" y=\"1301\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#fff\">(+2% Y/Y)</text></g><g><rect x=\"787\" y=\"1185\" width=\"304\" height=\"165\" rx=\"38\" fill=\"#1c49c2\"/><text x=\"939.0\" y=\"1260\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Autoship sales</text><text data-operating-metric=\"autoship_sales\" x=\"875.16\" y=\"1301\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">85%</text><text x=\"987.64\" y=\"1301\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#fff\">(+2pp Y/Y)</text></g><g class=\"sankey-period-stamp\"><text x=\"270\" y=\"364\" text-anchor=\"middle\" font-size=\"38\" font-weight=\"800\" fill=\"#666\">Q2 FY26</text><text x=\"270\" y=\"407\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777\">Ending Aug. 2026</text></g></g>",
  "operatingMetrics": [
    {
      "id": "active_customers",
      "label": "Active customers",
      "value": "22000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "22M",
      "quote": "Active customers\n22M (+4% Y/Y)",
      "notes": [
        "+4% Y/Y"
      ],
      "basis": "unspecified",
      "anchor": {
        "type": "image-box",
        "box": [
          48,
          1186,
          332,
          164
        ]
      }
    },
    {
      "id": "net_sales_per_customer",
      "label": "Net sale per customer",
      "value": "0.602",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$602",
      "quote": "Net sale per customer\n$602 (+2% Y/Y)",
      "notes": [
        "+2% Y/Y"
      ],
      "basis": "unspecified",
      "anchor": {
        "type": "image-box",
        "box": [
          393,
          1186,
          380,
          164
        ]
      }
    },
    {
      "id": "autoship_sales",
      "label": "Autoship sales",
      "value": "85",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "85%",
      "quote": "Autoship sales\n85% (+2pp Y/Y)",
      "notes": [
        "+2pp Y/Y"
      ],
      "basis": "unspecified",
      "anchor": {
        "type": "image-box",
        "box": [
          785,
          1186,
          306,
          164
        ]
      }
    }
  ],
  "rasterAnnotations": [
    {
      "key": "chewy-company-wordmark",
      "href": "data/assets/raster-annotations/chewy/company-wordmark-q1-fy26.png",
      "x": 548,
      "y": 248,
      "width": 700,
      "height": 225
    },
    {
      "key": "chewy-dog-box-q2-fy26",
      "href": "data/assets/raster-annotations/chewy/dog-box-q2-fy26.png",
      "x": 1573,
      "y": 1008,
      "width": 500,
      "height": 300
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "consumables": {
        "x": 439,
        "y": 528,
        "width": 72,
        "height": 227
      },
      "hardgoods": {
        "x": 439,
        "y": 910,
        "width": 72,
        "height": 33
      },
      "other": {
        "x": 439,
        "y": 1094,
        "width": 72,
        "height": 60
      },
      "revenue": {
        "x": 906,
        "y": 685,
        "width": 72,
        "height": 319
      },
      "gross_profit": {
        "x": 1375,
        "y": 529,
        "width": 73,
        "height": 94
      },
      "cost_of_revenue": {
        "x": 1375,
        "y": 916,
        "width": 73,
        "height": 226
      },
      "operating_profit": {
        "x": 1838,
        "y": 430,
        "width": 72,
        "height": 3
      },
      "operating_expenses": {
        "x": 1838,
        "y": 632,
        "width": 72,
        "height": 91
      },
      "interest": {
        "x": 2178,
        "y": 321.5,
        "width": 72,
        "height": 1.5
      },
      "net_profit": {
        "x": 2307,
        "y": 356.5,
        "width": 73,
        "height": 1
      },
      "tax": {
        "x": 2307,
        "y": 569,
        "width": 73,
        "height": 4
      },
      "ga": {
        "x": 2307,
        "y": 782,
        "width": 73,
        "height": 70
      },
      "advertising_marketing": {
        "x": 2307,
        "y": 1042,
        "width": 73,
        "height": 22
      }
    },
    "labels": {
      "consumables": {
        "blocks": [
          {
            "x": 475,
            "top": 431,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 400,
            "top": 617,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Consumables",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "hardgoods": {
        "blocks": [
          {
            "x": 475,
            "top": 811,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
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
            "x": 375,
            "top": 902,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Hardgoods",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 475,
            "top": 993,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 342,
            "top": 1099.5,
            "anchor": "end",
            "lineGap": 9,
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
            "x": 938,
            "top": 540,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
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
            "x": 1411,
            "top": 345,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "30% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1874,
            "top": 243,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "3% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2210,
            "top": 233,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Interest",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2493,
            "top": 310,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 2493,
            "top": 538,
            "anchor": "middle",
            "lineGap": 9,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1874,
            "top": 746,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2493,
            "top": 785,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "21% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "advertising_marketing": {
        "blocks": [
          {
            "x": 2493,
            "top": 1017,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Advertising &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "6% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
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
            "x": 1411,
            "top": 1157,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
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
      "id": "consumables",
      "label": "Consumables",
      "value": 2.2,
      "valueText": "$2.2B",
      "notes": [
        "+4% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#1c49c2"
    },
    {
      "id": "hardgoods",
      "label": "Hardgoods",
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "+14% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#1c49c2"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.7,
      "valueText": "$0.7B",
      "notes": [
        "+15% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#1c49c2"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.3,
      "valueText": "$3.3B",
      "notes": [
        "+7% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#1c49c2"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.0,
      "valueText": "$1.0B",
      "notes": [
        "30% margin",
        "+0pp Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#2ca02c"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.3,
      "valueText": "($2.3B)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "3% margin",
        "+1pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#2ca02c"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 0.9,
      "valueText": "($0.9B)",
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cc0000"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.02,
      "valueText": "$20M",
      "notes": [],
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#90c790"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "2% margin",
        "+0pp Y/Y"
      ],
      "type": "profit",
      "col": 5,
      "order": 9,
      "color": "#90c790"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.031,
      "valueText": "($31M)",
      "notes": [],
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.7,
      "valueText": "($0.7B)",
      "notes": [
        "21% of revenue",
        "(0pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000"
    },
    {
      "id": "advertising_marketing",
      "label": "Advertising & Marketing",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": [
        "6% of revenue",
        "(0pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000"
    }
  ],
  "links": [
    {
      "source": "consumables",
      "target": "revenue",
      "value": 2.2,
      "sourceWidth": 227,
      "targetWidth": 227,
      "y0": 641.5,
      "y1": 798.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "hardgoods",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 33,
      "targetWidth": 33,
      "y0": 926.5,
      "y1": 928.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 60,
      "targetWidth": 59,
      "y0": 1124,
      "y1": 974.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 732,
      "y1": 576,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.3,
      "sourceWidth": 225,
      "targetWidth": 226,
      "y0": 891.5,
      "y1": 1029,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 530.5,
      "y1": 431.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.9,
      "sourceWidth": 91,
      "targetWidth": 91,
      "y0": 577.5,
      "y1": 677.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.069,
      "sourceWidth": 1,
      "targetWidth": 0.5,
      "y0": 430.5,
      "y1": 356.75,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.031,
      "sourceWidth": 2,
      "targetWidth": 4,
      "y0": 432,
      "y1": 571,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.02,
      "sourceWidth": 1.5,
      "targetWidth": 0.5,
      "y0": 322.25,
      "y1": 357.25,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceWidth": 70,
      "targetWidth": 70,
      "y0": 667,
      "y1": 817,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "advertising_marketing",
      "value": 0.2,
      "sourceWidth": 21,
      "targetWidth": 22,
      "y0": 712.5,
      "y1": 1053,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Chewy · 2026 财年第二季度",
      "meta": {
        "title": "Chewy 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 8 月",
        "titleSize": 108
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"49\" y=\"1185\" width=\"331\" height=\"165\" rx=\"38\" fill=\"#1c49c2\"/><text x=\"214.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">活跃客户</text><text data-operating-metric=\"active_customers\" x=\"144.99\" y=\"1301\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">22M</text><text x=\"267.46000000000004\" y=\"1301\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#fff\">(同比 +4%)</text></g><g><rect x=\"393\" y=\"1185\" width=\"381\" height=\"165\" rx=\"38\" fill=\"#1c49c2\"/><text x=\"583.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">每位客户净销售额</text><text data-operating-metric=\"net_sales_per_customer\" x=\"503.49\" y=\"1301\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">$602</text><text x=\"644.46\" y=\"1301\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#fff\">(同比 +2%)</text></g><g><rect x=\"787\" y=\"1185\" width=\"304\" height=\"165\" rx=\"38\" fill=\"#1c49c2\"/><text x=\"939.0\" y=\"1260\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Autoship 销售额</text><text data-operating-metric=\"autoship_sales\" x=\"875.16\" y=\"1301\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">85%</text><text x=\"987.64\" y=\"1301\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#fff\">(同比 +2 个百分点)</text></g><g class=\"sankey-period-stamp\"><text x=\"270\" y=\"364\" text-anchor=\"middle\" font-size=\"38\" font-weight=\"800\" fill=\"#666\">2026 财年第二季度</text><text x=\"270\" y=\"407\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777\">截至 2026 年 8 月</text></g></g>",
      "nodes": {
        "consumables": {
          "label": "消耗品",
          "notes": [
            "同比 +4%"
          ]
        },
        "hardgoods": {
          "label": "耐用品",
          "notes": [
            "同比 +14%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +15%"
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
            "利润率 30%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "ga": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 21%",
            "同比 (0 个百分点)"
          ]
        },
        "advertising_marketing": {
          "label": "广告与营销",
          "notes": [
            "占收入 6%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "consumables": {
            "blocks": [
              {
                "x": 475,
                "top": 431,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 400,
                "top": 617,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "消耗品",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "hardgoods": {
            "blocks": [
              {
                "x": 475,
                "top": 811,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
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
                "x": 375,
                "top": 902,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "耐用品",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 475,
                "top": 993,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 342,
                "top": 1099.5,
                "anchor": "end",
                "lineGap": 9,
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
                "x": 938,
                "top": 540,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
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
                "x": 1411,
                "top": 345,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 30%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1874,
                "top": 243,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2210,
                "top": 233,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "利息",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2493,
                "top": 310,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "x": 2493,
                "top": 538,
                "anchor": "middle",
                "lineGap": 9,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1874,
                "top": 746,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2493,
                "top": 785,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "一般及行政费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "advertising_marketing": {
            "blocks": [
              {
                "x": 2493,
                "top": 1017,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "广告与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
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
                "x": 1411,
                "top": 1157,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
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
}); })();
