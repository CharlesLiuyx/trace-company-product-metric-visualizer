window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lockheed-martin-q3-fy26",
  "name": "Lockheed Martin · Q3 FY26",
  "company": "Lockheed Martin",
  "meta": {
    "company": "Lockheed Martin",
    "title": "Lockheed Martin Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "referenceImage": {
      "src": "input/processed/lockheed-martin-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1336,
    "titleY": 196,
    "titleSize": 115,
    "titleWeight": 800,
    "titleTextLength": 2431,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#00377e",
        "label": "#00377e"
      },
      "hub": {
        "node": "#00377e",
        "label": "#00377e"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#12975d"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#859dbd",
      "hub": "#859dbd",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 12
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    \n      \n    <g>\n      <rect x=\"73\" y=\"1194\" width=\"449\" height=\"158\" rx=\"30\" fill=\"#00377e\"/>\n      <text x=\"297.5\" y=\"1244\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">Aircraft Deliveries</text><text x=\"297.5\" y=\"1285\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"aircraft_deliveries\">72</text><text x=\"297.5\" y=\"1324\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"400\" fill=\"#ffffff\">-8 Y/Y</text>\n    </g>\n      \n    <g>\n      <rect x=\"531\" y=\"1194\" width=\"241\" height=\"158\" rx=\"30\" fill=\"#00377e\"/>\n      <text x=\"651.5\" y=\"1244\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">Backlog</text><text x=\"651.5\" y=\"1285\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"backlog\">$292B</text><text x=\"651.5\" y=\"1324\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"400\" fill=\"#ffffff\">+51% Y/Y</text>\n    </g>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "lockheed-q2-aeronautics-jet",
      "href": "data/assets/raster-annotations/lockheed-martin/aeronautics-jet-q1-fy26.png",
      "x": 118,
      "y": 293,
      "width": 285,
      "height": 140
    },
    {
      "key": "lockheed-q2-missile-fire-control",
      "href": "data/assets/raster-annotations/lockheed-martin/missile-fire-control-q1-fy26.png",
      "x": 172,
      "y": 535,
      "width": 171,
      "height": 106
    },
    {
      "key": "lockheed-q2-rotary-mission-systems",
      "href": "data/assets/raster-annotations/lockheed-martin/rotary-mission-systems-q1-fy26.png",
      "x": 147,
      "y": 785,
      "width": 196,
      "height": 84
    },
    {
      "key": "lockheed-q2-space-spacecraft",
      "href": "data/assets/raster-annotations/lockheed-martin/space-spacecraft-q1-fy26.png",
      "x": 198,
      "y": 1006,
      "width": 118,
      "height": 89
    },
    {
      "key": "lockheed-logo-q3-fy26",
      "href": "data/assets/raster-annotations/lockheed-martin/logo-q3-fy26.png",
      "x": 625,
      "y": 290,
      "width": 620,
      "height": 99
    }
  ],
  "layout": {
    "scale": 16.52,
    "nodes": {
      "aeronautics": {
        "x": 438,
        "y": 395,
        "width": 72,
        "height": 127
      },
      "missile_fire_control": {
        "x": 438,
        "y": 670,
        "width": 72,
        "height": 70
      },
      "rotary_mission_systems": {
        "x": 438,
        "y": 876,
        "width": 72,
        "height": 70
      },
      "space": {
        "x": 438,
        "y": 1087,
        "width": 72,
        "height": 54
      },
      "revenue": {
        "x": 905,
        "y": 631,
        "width": 72,
        "height": 319
      },
      "gross_profit": {
        "x": 1372,
        "y": 528,
        "width": 72,
        "height": 38
      },
      "cost_of_sales": {
        "x": 1372,
        "y": 765,
        "width": 72,
        "height": 282
      },
      "other_operating": {
        "x": 1657,
        "y": 632,
        "width": 72,
        "height": 1
      },
      "operating_profit": {
        "x": 1839,
        "y": 419,
        "width": 72,
        "height": 38
      },
      "net_profit": {
        "x": 2306,
        "y": 321,
        "width": 72,
        "height": 29
      },
      "tax": {
        "x": 2306,
        "y": 682,
        "width": 72,
        "height": 4
      },
      "other_nonoperating": {
        "x": 2306,
        "y": 862,
        "width": 72,
        "height": 4
      }
    },
    "labels": {
      "aeronautics": {
        "blocks": [
          {
            "x": 470,
            "top": 295,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 256,
            "top": 429,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Aeronautics",
                "size": 40,
                "weight": 800
              },
              {
                "text": "9% segment margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "missile_fire_control": {
        "blocks": [
          {
            "x": 470,
            "top": 578,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 256,
            "top": 629,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Missile and",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Fire Control",
                "size": 40,
                "weight": 800
              },
              {
                "text": "14% segment margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rotary_mission_systems": {
        "blocks": [
          {
            "x": 470,
            "top": 781,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 258,
            "top": 851,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Rotary &",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Mission Systems",
                "size": 40,
                "weight": 800
              },
              {
                "text": "12% segment margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "space": {
        "blocks": [
          {
            "x": 470,
            "top": 980,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 256,
            "top": 1097,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Space",
                "size": 40,
                "weight": 800
              },
              {
                "text": "9% segment margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 936,
            "top": 478,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1408,
            "top": 340,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#12975d"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#12975d"
              },
              {
                "text": "12% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1882,
            "top": 233,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#12975d"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#12975d"
              },
              {
                "text": "12% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2496,
            "top": 272,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#12975d"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#12975d"
              },
              {
                "text": "9% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2495,
            "top": 648,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2496,
            "top": 807,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Interest",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& other",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 1693,
            "top": 650,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#12975d"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#12975d"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": []
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1409,
            "top": 1070,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "operating_expenses",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "aeronautics",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Aeronautics",
      "value": 8.2,
      "valueText": "$8.2B",
      "notes": [
        "+13% Y/Y",
        "9% segment margin"
      ]
    },
    {
      "id": "missile_fire_control",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Missile and",
        "Fire Control"
      ],
      "value": 4.5,
      "valueText": "$4.5B",
      "notes": [
        "+24% Y/Y",
        "14% segment margin"
      ]
    },
    {
      "id": "rotary_mission_systems",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Rotary &",
        "Mission Systems"
      ],
      "value": 4.5,
      "valueText": "$4.5B",
      "notes": [
        "+3% Y/Y",
        "12% segment margin"
      ]
    },
    {
      "id": "space",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Space",
      "value": 3.5,
      "valueText": "$3.5B",
      "notes": [
        "+4% Y/Y",
        "9% segment margin"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 20.7,
      "valueText": "$20.7B",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 2.4,
      "valueText": "$2.4B",
      "notes": [
        "12% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 18.3,
      "valueText": "($18.3B)"
    },
    {
      "id": "other_operating",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.007,
      "valueText": "$7M",
      "color": "#99cd99",
      "labelColor": "#12975d",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.4,
      "valueText": "$2.4B",
      "notes": [
        "12% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.8,
      "valueText": "$1.8B",
      "notes": [
        "9% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "valueText": "($0.3B)"
    },
    {
      "id": "other_nonoperating",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": [
        "Interest",
        "& other"
      ],
      "value": 0.3,
      "valueText": "($0.3B)"
    }
  ],
  "links": [
    {
      "source": "aeronautics",
      "target": "revenue",
      "value": 8.2,
      "sourceWidth": 127,
      "targetWidth": 127,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "missile_fire_control",
      "target": "revenue",
      "value": 4.5,
      "sourceWidth": 70,
      "targetWidth": 70,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "rotary_mission_systems",
      "target": "revenue",
      "value": 4.5,
      "sourceWidth": 70,
      "targetWidth": 70,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "space",
      "target": "revenue",
      "value": 3.5,
      "sourceWidth": 54,
      "targetWidth": 52,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.4,
      "sourceWidth": 38,
      "targetWidth": 38,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 18.3,
      "sourceWidth": 281,
      "targetWidth": 282,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.4,
      "sourceWidth": 38,
      "targetWidth": 37,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_operating",
      "target": "operating_profit",
      "value": 0.007,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 1775,
        "c1y": 632,
        "c2x": 1782,
        "c2y": 457
      },
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.8,
      "sourceWidth": 29,
      "targetWidth": 29,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_nonoperating",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "洛克希德·马丁 · 2026 财年第三季度",
      "meta": {
        "title": "洛克希德·马丁 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 2100
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    \n      \n    <g>\n      <rect x=\"73\" y=\"1194\" width=\"449\" height=\"158\" rx=\"30\" fill=\"#00377e\"/>\n      <text x=\"297.5\" y=\"1244\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">飞机交付</text><text x=\"297.5\" y=\"1285\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"aircraft_deliveries\">72</text><text x=\"297.5\" y=\"1324\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"400\" fill=\"#ffffff\">同比 -8</text>\n    </g>\n      \n    <g>\n      <rect x=\"531\" y=\"1194\" width=\"241\" height=\"158\" rx=\"30\" fill=\"#00377e\"/>\n      <text x=\"651.5\" y=\"1244\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">订单储备</text><text x=\"651.5\" y=\"1285\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"backlog\">$292B</text><text x=\"651.5\" y=\"1324\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"400\" fill=\"#ffffff\">同比 +51%</text>\n    </g>\n    </g>",
      "nodes": {
        "aeronautics": {
          "label": "航空",
          "notes": [
            "同比 +13%",
            "分部利润率 9%"
          ]
        },
        "missile_fire_control": {
          "label": "导弹与火控",
          "notes": [
            "同比 +24%",
            "分部利润率 14%"
          ]
        },
        "rotary_mission_systems": {
          "label": "旋翼与任务系统",
          "notes": [
            "同比 +3%",
            "分部利润率 12%"
          ]
        },
        "space": {
          "label": "太空",
          "notes": [
            "同比 +4%",
            "分部利润率 9%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 12%",
            "同比 0 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "other_operating": {
          "label": "其他"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 0 个百分点"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 9%",
            "同比 0 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_nonoperating": {
          "label": "利息及其他"
        }
      },
      "layout": {
        "labels": {
          "aeronautics": {
            "blocks": [
              {
                "x": 470,
                "top": 295,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 256,
                "top": 429,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "航空",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "missile_fire_control": {
            "blocks": [
              {
                "x": 470,
                "top": 578,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 256,
                "top": 655,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "导弹与火控",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rotary_mission_systems": {
            "blocks": [
              {
                "x": 470,
                "top": 781,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 258,
                "top": 877,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "旋翼与任务系统",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "space": {
            "blocks": [
              {
                "x": 470,
                "top": 980,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 256,
                "top": 1097,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "太空",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "分部利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 936,
                "top": 478,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1408,
                "top": 340,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#12975d"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#12975d"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1882,
                "top": 233,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#12975d"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#12975d"
                  },
                  {
                    "text": "利润率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2496,
                "top": 272,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#12975d"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#12975d"
                  },
                  {
                    "text": "利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2495,
                "top": 648,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2496,
                "top": 807,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "利息及其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 1693,
                "top": 650,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#12975d"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#12975d"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": []
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1409,
                "top": 1070,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "aircraft_deliveries",
      "value": "72",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "72"
    },
    {
      "id": "backlog",
      "value": "292",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$292B"
    }
  ]
});
