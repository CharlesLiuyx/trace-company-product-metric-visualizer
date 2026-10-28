window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "crowdstrike-q4-fy24",
  "name": "CrowdStrike · Q4 FY24",
  "company": "CrowdStrike",
  "meta": {
    "company": "CrowdStrike",
    "title": "CrowdStrike Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/crowdstrike-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 203.15,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2466.454,
    "periodX": 214.871,
    "periodY": 338.584,
    "periodNoteY": 380.256
  },
  "render": {
    "width": 2667.0,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155278",
    "noteColor": "#676767",
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "cost_of_revenue:left",
        "rnd:left",
        "revenue:left"
      ]
    },
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/crowdstrike/company-wordmark-q2-fy27.png",
      "x": 363.327,
      "y": 287.796,
      "width": 839.949,
      "height": 151.061
    }
  ],
  "annotationsSvg": "<g><rect x=\"87.25\" y=\"1173.324\" width=\"148.456\" height=\"164.083\" rx=\"39.067\" fill=\"#000000\"/><rect x=\"248.729\" y=\"1173.324\" width=\"518.294\" height=\"164.083\" rx=\"39.067\" fill=\"#000000\"/><text x=\"161.479\" y=\"1222.809\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"161.479\" y=\"1267.085\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">$3.44B</text><text x=\"161.479\" y=\"1307.455\" text-anchor=\"middle\" font-size=\"27.347\" fill=\"white\">+34% Y/Y</text><text x=\"507.876\" y=\"1226.716\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">Customers with</text><text x=\"322.957\" y=\"1268.388\" font-size=\"29.952\" fill=\"white\">5+ modules</text><text data-operating-metric=\"modules_5_plus\" x=\"498.76\" y=\"1268.388\" font-size=\"29.952\" fill=\"white\">64%</text><text x=\"569.082\" y=\"1268.388\" font-size=\"27.347\" fill=\"white\">+2pp Y/Y</text><text x=\"322.957\" y=\"1308.757\" font-size=\"29.952\" fill=\"white\">6+ modules</text><text data-operating-metric=\"modules_6_plus\" x=\"498.76\" y=\"1308.757\" font-size=\"29.952\" fill=\"white\">43%</text><text x=\"569.082\" y=\"1308.757\" font-size=\"27.347\" fill=\"white\">+4pp Y/Y</text><text x=\"216.173\" y=\"1381.683\" font-size=\"28.649\" fill=\"#676767\">ARR = Annual Recurring Revenue</text></g>",
  "operatingMetrics": [
    {
      "id": "arr",
      "value": "3.44",
      "unit": "B",
      "literal": "$3.44B",
      "currency": "USD",
      "comparison": "eq"
    },
    {
      "id": "modules_5_plus",
      "value": "64",
      "unit": "%",
      "literal": "64%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "modules_6_plus",
      "value": "43",
      "unit": "%",
      "literal": "43%",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "layout": {
    "scale": 0.34,
    "nodes": {
      "subscription": {
        "x": 393.278,
        "y": 592.522,
        "width": 72.926,
        "height": 270.867
      },
      "professional_services": {
        "x": 393.278,
        "y": 1053.517,
        "width": 72.926,
        "height": 16.929
      },
      "revenue": {
        "x": 860.785,
        "y": 675.866,
        "width": 72.926,
        "height": 286.494
      },
      "gross_profit": {
        "x": 1334.802,
        "y": 592.522,
        "width": 72.926,
        "height": 216.173
      },
      "cost_of_revenue": {
        "x": 1334.802,
        "y": 994.916,
        "width": 72.926,
        "height": 71.624
      },
      "operating_profit": {
        "x": 1797.1,
        "y": 501.365,
        "width": 72.926,
        "height": 10.418
      },
      "operating_expenses": {
        "x": 1797.1,
        "y": 720.142,
        "width": 72.926,
        "height": 205.755
      },
      "interest": {
        "x": 2112.243,
        "y": 408.905,
        "width": 72.926,
        "height": 11.72
      },
      "other": {
        "x": 2104.43,
        "y": 506.574,
        "width": 72.926,
        "height": 1.563
      },
      "net_profit": {
        "x": 2262.001,
        "y": 431.043,
        "width": 72.926,
        "height": 18.752
      },
      "tax": {
        "x": 2262.001,
        "y": 658.937,
        "width": 72.926,
        "height": 4.688
      },
      "sm": {
        "x": 2262.001,
        "y": 804.788,
        "width": 72.926,
        "height": 98.971
      },
      "rnd": {
        "x": 2262.001,
        "y": 1017.054,
        "width": 72.926,
        "height": 72.665
      },
      "ga": {
        "x": 2262.001,
        "y": 1220.205,
        "width": 72.926,
        "height": 35.161
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 429.741,
            "top": 494.854,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+33% Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          },
          {
            "x": 220.08,
            "top": 703.213,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.067,
                "weight": 700,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 429.741,
            "top": 957.151,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+26% Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          },
          {
            "x": 220.08,
            "top": 1013.147,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Professional",
                "size": 39.067,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "services",
                "size": 39.067,
                "weight": 700,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 897.248,
            "top": 530.014,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+33% Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1371.265,
            "top": 407.603,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "75% margin",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1371.265,
            "top": 1080.864,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1836.167,
            "top": 313.841,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "4% margin",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+13pp Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1836.167,
            "top": 937.617,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2148.706,
            "top": 320.353,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Interest",
                "size": 31.254,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2142.195,
            "top": 520.898,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 384.163,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "6% margin",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "+14pp Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 621.171,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 804.788,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "34% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 996.218,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "25% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 1194.16,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "12% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#676767"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 796,
      "valueText": "$796M",
      "col": 0,
      "order": 0,
      "type": "source",
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 50,
      "valueText": "$50M",
      "col": 0,
      "order": 1,
      "type": "source",
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 845,
      "valueText": "$845M",
      "col": 1,
      "order": 2,
      "type": "hub",
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 637,
      "valueText": "$637M",
      "col": 2,
      "order": 3,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "75% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 209,
      "valueText": "($209M)",
      "col": 2,
      "order": 4,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 30,
      "valueText": "$30M",
      "col": 3,
      "order": 5,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "4% margin",
        "+13pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 607,
      "valueText": "($607M)",
      "col": 3,
      "order": 6,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 35,
      "valueText": "$35M",
      "col": 4,
      "order": 7,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 4,
      "valueText": "$4M",
      "col": 4,
      "order": 8,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 55,
      "valueText": "$55M",
      "col": 5,
      "order": 9,
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "6% margin",
        "+14pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 14,
      "valueText": "($14M)",
      "col": 5,
      "order": 10,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 290,
      "valueText": "($290M)",
      "col": 5,
      "order": 11,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "34% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 214,
      "valueText": "($214M)",
      "col": 5,
      "order": 12,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "25% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 103,
      "valueText": "($103M)",
      "col": 5,
      "order": 13,
      "type": "cost",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 796,
      "width": 270.867,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 270.867,
      "targetWidth": 269.565
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 50,
      "width": 16.929,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 637,
      "width": 216.173,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 209,
      "width": 70.321,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 70.321,
      "targetWidth": 71.624
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 30,
      "width": 10.418,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 607,
      "width": 205.755,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 16,
      "width": 5.469,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 14,
      "width": 4.688,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 35,
      "width": 11.72,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 4,
      "width": 1.563,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 290,
      "width": 98.971,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 214,
      "width": 71.624,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 71.624,
      "targetWidth": 72.665
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 103,
      "width": 35.161,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ARR"
    ],
    "zh": {
      "name": "CrowdStrike · 2024 财年第四季度",
      "meta": {
        "title": "CrowdStrike 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 1 月",
        "titleTextLength": 1953.369
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +33%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务"
          ],
          "notes": [
            "同比 +26%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +33%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 75%",
            "同比 +3 个百分点"
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
            "利润率 4%",
            "同比 +13 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 +14 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 34%",
            "同比 (4 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 (5 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 429.741,
                "top": 494.854,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +33%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              },
              {
                "x": 220.08,
                "top": 703.213,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 429.741,
                "top": 957.151,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +26%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              },
              {
                "x": 220.08,
                "top": 1013.147,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "专业",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "服务",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 897.248,
                "top": 530.014,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +33%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1371.265,
                "top": 407.603,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 75%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1371.265,
                "top": 1080.864,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1836.167,
                "top": 313.841,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 4%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +13 个百分点",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1836.167,
                "top": 937.617,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2148.706,
                "top": 320.353,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2142.195,
                "top": 520.898,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 384.163,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 6%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 621.171,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 804.788,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 34%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 996.218,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 1194.16,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#676767"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"87.25\" y=\"1173.324\" width=\"148.456\" height=\"164.083\" rx=\"39.067\" fill=\"#000000\"/><rect x=\"248.729\" y=\"1173.324\" width=\"518.294\" height=\"164.083\" rx=\"39.067\" fill=\"#000000\"/><text x=\"161.479\" y=\"1222.809\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"161.479\" y=\"1267.085\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">$3.44B</text><text x=\"161.479\" y=\"1307.455\" text-anchor=\"middle\" font-size=\"23.439\" fill=\"white\">同比 +34%</text><text x=\"507.876\" y=\"1226.716\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">客户中</text><text x=\"322.957\" y=\"1268.388\" font-size=\"29.952\" fill=\"white\">5+ 模块</text><text data-operating-metric=\"modules_5_plus\" x=\"498.76\" y=\"1268.388\" font-size=\"29.952\" fill=\"white\">64%</text><text x=\"569.082\" y=\"1268.388\" font-size=\"23.439\" fill=\"white\">同比 +2 个百分点</text><text x=\"322.957\" y=\"1308.757\" font-size=\"29.952\" fill=\"white\">6+ 模块</text><text data-operating-metric=\"modules_6_plus\" x=\"498.76\" y=\"1308.757\" font-size=\"29.952\" fill=\"white\">43%</text><text x=\"569.082\" y=\"1308.757\" font-size=\"23.439\" fill=\"white\">同比 +4 个百分点</text><text x=\"216.173\" y=\"1381.683\" font-size=\"28.649\" fill=\"#676767\">ARR = 年度经常性收入</text></g>"
    }
  }
});
