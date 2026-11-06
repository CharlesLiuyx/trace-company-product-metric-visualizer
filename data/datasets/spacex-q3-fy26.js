(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spacex-q3-fy26",
  "name": "SpaceX · Q3 FY26",
  "company": "SpaceX",
  "meta": {
    "company": "SpaceX",
    "title": "",
    "period": "Q3 FY26",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/spacex-q3-fy26.png",
      "width": 2667,
      "height": 1500
    }
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "noteColor": "#777777",
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
        "label": "#00964f"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a31b00"
      }
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 36,
      "value": 36,
      "note": 27,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "space",
      "label": "Space",
      "value": 1.8,
      "type": "source",
      "notes": [
        "+6% Y/Y",
        "(0%) operating margin",
        "(16pp) Y/Y"
      ]
    },
    {
      "id": "connectivity",
      "label": "Connectivity",
      "value": 5.2,
      "type": "source",
      "notes": [
        "+69% Y/Y",
        "45% operating margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "ai",
      "label": "Super Intelligence",
      "value": 7.6,
      "type": "source",
      "notes": [
        "+830% Y/Y",
        "6% operating margin",
        "+218pp Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 14.6,
      "type": "hub",
      "notes": [
        "+161% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 9.1,
      "type": "profit",
      "notes": [
        "62% margin",
        "+11pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 5.5,
      "type": "cost",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.8,
      "type": "profit",
      "notes": [
        "19% margin",
        "+24pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 6.3,
      "type": "cost",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 4.6,
      "type": "cost",
      "notes": [
        "32% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 1.7,
      "type": "cost",
      "notes": [
        "12% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "interest_other",
      "label": "Interest & other",
      "value": 1.2,
      "type": "profit",
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax benefit",
      "value": 0.4,
      "type": "profit",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.4,
      "type": "profit",
      "notes": [
        "30% margin",
        "+49pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "space",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 480.52880859375,
      "y1": 668.05224609375,
      "linkTint": "#888888"
    },
    {
      "source": "connectivity",
      "target": "revenue",
      "value": 5.2,
      "sourceWidth": 153.6650390625,
      "targetWidth": 153.6650390625,
      "y0": 769.62744140625,
      "y1": 770.9296875,
      "linkTint": "#888888"
    },
    {
      "source": "ai",
      "target": "revenue",
      "value": 7.6,
      "sourceWidth": 220.07958984375,
      "targetWidth": 220.07958984375,
      "y0": 1102.351318359375,
      "y1": 957.802001953125,
      "linkTint": "#888888"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.1,
      "sourceWidth": 265.658203125,
      "targetWidth": 265.658203125,
      "y0": 774.83642578125,
      "y1": 687.5859375,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.5,
      "sourceWidth": 160.17626953125,
      "targetWidth": 160.17626953125,
      "y0": 987.753662109375,
      "y1": 1091.933349609375,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.8,
      "sourceWidth": 80.7392578125,
      "targetWidth": 82.04150390625,
      "y0": 595.12646484375,
      "y1": 504.620361328125,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.3,
      "sourceWidth": 184.9189453125,
      "targetWidth": 184.9189453125,
      "y0": 727.95556640625,
      "y1": 812.6015625,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 4.6,
      "sourceWidth": 135.43359375,
      "targetWidth": 134.13134765625,
      "y0": 787.85888671875,
      "y1": 837.995361328125,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.7,
      "sourceWidth": 49.4853515625,
      "targetWidth": 49.4853515625,
      "y0": 880.318359375,
      "y1": 1052.21484375,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.8,
      "sourceWidth": 82.04150390625,
      "targetWidth": 82.04150390625,
      "y0": 504.620361328125,
      "y1": 449.926025390625,
      "linkTint": "#99cc99"
    },
    {
      "source": "interest_other",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 36.462890625,
      "targetWidth": 35.16064453125,
      "y0": 380.255859375,
      "y1": 391.324951171875,
      "linkTint": "#99cc99"
    },
    {
      "source": "tax",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "y0": 543.687744140625,
      "y1": 496.806884765625,
      "linkTint": "#99cc99"
    }
  ],
  "layout": {
    "nodes": {
      "space": {
        "x": 425.83447265625,
        "y": 454.48388671875,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "connectivity": {
        "x": 425.83447265625,
        "y": 692.794921875,
        "width": 72.92578125,
        "height": 153.6650390625
      },
      "ai": {
        "x": 425.83447265625,
        "y": 992.3115234375,
        "width": 72.92578125,
        "height": 220.07958984375
      },
      "revenue": {
        "x": 893.3408203125,
        "y": 642.00732421875,
        "width": 72.92578125,
        "height": 425.83447265625
      },
      "gross_profit": {
        "x": 1360.84716796875,
        "y": 554.7568359375,
        "width": 71.62353515625,
        "height": 265.658203125
      },
      "cost_of_revenue": {
        "x": 1360.84716796875,
        "y": 1011.84521484375,
        "width": 71.62353515625,
        "height": 160.17626953125
      },
      "operating_profit": {
        "x": 1827.05126953125,
        "y": 463.599609375,
        "width": 72.92578125,
        "height": 82.04150390625
      },
      "operating_expenses": {
        "x": 1827.05126953125,
        "y": 720.14208984375,
        "width": 72.92578125,
        "height": 184.9189453125
      },
      "rnd": {
        "x": 2294.5576171875,
        "y": 770.9296875,
        "width": 72.92578125,
        "height": 134.13134765625
      },
      "sga": {
        "x": 2294.5576171875,
        "y": 1027.47216796875,
        "width": 72.92578125,
        "height": 49.4853515625
      },
      "interest_other": {
        "x": 2130.474609375,
        "y": 362.0244140625,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "tax": {
        "x": 2142.19482421875,
        "y": 537.82763671875,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "net_profit": {
        "x": 2294.5576171875,
        "y": 373.74462890625,
        "width": 72.92578125,
        "height": 128.92236328125
      }
    },
    "labels": {
      "space": {
        "blocks": [
          {
            "x": 462.29736328125,
            "top": 356.8154296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 204.45263671875,
            "top": 450.5771484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Space",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "(0%) operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(16pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "connectivity": {
        "blocks": [
          {
            "x": 462.29736328125,
            "top": 596.4287109375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+69% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 204.45263671875,
            "top": 730.56005859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Connectivity",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "45% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ai": {
        "blocks": [
          {
            "x": 462.29736328125,
            "top": 893.3408203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+830% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 213.568359375,
            "top": 1061.33056640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Super",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "Intelligence",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "6% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+218pp Y/Y",
                "size": 27.34716796875,
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
            "x": 929.8037109375,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
                "text": "+161% Y/Y",
                "size": 27.34716796875,
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
            "x": 1396.0078125,
            "top": 362.0244140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
                "text": "62% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+11pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1396.0078125,
            "top": 1186.34619140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33.8583984375,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1864.81640625,
            "top": 273.4716796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "19% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+24pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1864.81640625,
            "top": 919.3857421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
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
      "rnd": {
        "blocks": [
          {
            "x": 2501.61474609375,
            "top": 777.44091796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "32% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2501.61474609375,
            "top": 1002.7294921875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "interest_other": {
        "blocks": [
          {
            "x": 2165.63525390625,
            "top": 237.2998046875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Interest &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2177.35546875,
            "top": 561.26806640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2483.38330078125,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "30% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+49pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"1024\" y=\"152\" text-anchor=\"middle\" font-size=\"94\" font-weight=\"800\" fill=\"#155578\">SpaceX Q3 FY26 Income Statement</text><rect x=\"1364\" y=\"906\" width=\"336\" height=\"125\" rx=\"32\" fill=\"#000\"/><rect x=\"1708\" y=\"906\" width=\"290\" height=\"125\" rx=\"32\" fill=\"#000\"/><text x=\"1532\" y=\"945\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >Starlink</text><text x=\"1438\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >Subscribers</text><text x=\"1540\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_subscribers\">13.6M</text><text x=\"1638\" y=\"977\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >(+89% Y/Y)</text><text x=\"1460\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >ARPU</text><text x=\"1531\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_arpu\">$69</text><text x=\"1620\" y=\"1009\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" >(-17% Y/Y)</text><text x=\"1853\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >Space Launches</text><text x=\"1800\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"space_launches\">35</text><text x=\"1891\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >(-20% Y/Y)</text></g>",
  "operatingMetrics": [
    {
      "id": "starlink_subscribers",
      "value": "13600000",
      "unit": "count",
      "currency": null,
      "literal": "13.6M",
      "comparison": "eq"
    },
    {
      "id": "starlink_arpu",
      "value": "0.069",
      "unit": "K",
      "currency": "USD",
      "literal": "$69",
      "comparison": "eq"
    },
    {
      "id": "space_launches",
      "value": "35",
      "unit": "count",
      "currency": null,
      "literal": "35",
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-symbol-body",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-company-symbol-body.png",
      "x": 810,
      "y": 265,
      "width": 400,
      "height": 205,
      "clearance": true
    },
    {
      "key": "company-symbol-tail",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-company-symbol-tail.png",
      "x": 1210,
      "y": 265,
      "width": 110,
      "height": 32,
      "clearance": true
    },
    {
      "key": "business-space-rocket",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-business-space-rocket.png",
      "x": 110,
      "y": 245,
      "width": 185,
      "height": 200,
      "clearance": true
    },
    {
      "key": "business-connectivity-starlink",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-business-connectivity-starlink.png",
      "x": 150,
      "y": 590,
      "width": 244,
      "height": 123,
      "clearance": true
    },
    {
      "key": "business-ai-cluster",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-business-ai-cluster.png",
      "x": 80,
      "y": 940,
      "width": 283,
      "height": 102,
      "clearance": true
    }
  ],
  "i18n": {
    "zh": {
      "name": "SpaceX · 2026 财年第三季度",
      "meta": {
        "period": "2026 财年第三季度"
      },
      "nodes": {
        "space": {
          "label": "航天",
          "notes": [
            "同比 +6%",
            "营业利润率 (0%)",
            "同比 (16 个百分点)"
          ]
        },
        "connectivity": {
          "label": "连接服务",
          "notes": [
            "同比 +69%",
            "营业利润率 45%",
            "同比 +7 个百分点"
          ]
        },
        "ai": {
          "label": "超级智能",
          "notes": [
            "同比 +830%",
            "营业利润率 6%",
            "同比 +218 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +161%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 62%",
            "同比 +11 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 19%",
            "同比 +24 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发 (R&D)",
          "notes": [
            "占收入 32%",
            "同比 (4 个百分点)"
          ]
        },
        "sga": {
          "label": "销售及行政 (SG&A)",
          "notes": [
            "占收入 12%",
            "同比 +1 个百分点"
          ]
        },
        "interest_other": {
          "label": "利息及其他",
          "notes": []
        },
        "tax": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 30%",
            "同比 +49 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "space": {
            "blocks": [
              {
                "x": 462.29736328125,
                "top": 356.8154296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 204.45263671875,
                "top": 450.5771484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "航天",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (16 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "connectivity": {
            "blocks": [
              {
                "x": 462.29736328125,
                "top": 596.4287109375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +69%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 204.45263671875,
                "top": 730.56005859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "连接服务",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 45%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ai": {
            "blocks": [
              {
                "x": 462.29736328125,
                "top": 893.3408203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +830%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 213.568359375,
                "top": 1061.33056640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "超级",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "智能",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +218 个百分点",
                    "size": 27.34716796875,
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
                "x": 929.8037109375,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
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
                    "text": "同比 +161%",
                    "size": 27.34716796875,
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
                "x": 1396.0078125,
                "top": 362.0244140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
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
                    "text": "利润率 62%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +11 个百分点",
                    "size": 27.34716796875,
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
                "x": 1396.0078125,
                "top": 1186.34619140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33.8583984375,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1864.81640625,
                "top": 273.4716796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +24 个百分点",
                    "size": 27.34716796875,
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
                "x": 1864.81640625,
                "top": 919.3857421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33.8583984375,
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
          "rnd": {
            "blocks": [
              {
                "x": 2501.61474609375,
                "top": 777.44091796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研发 (R&D)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 32%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2501.61474609375,
                "top": 1002.7294921875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售及行政 (SG&A)",
                    "size": 28.6494140625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "interest_other": {
            "blocks": [
              {
                "x": 2165.63525390625,
                "top": 237.2998046875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利息及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2177.35546875,
                "top": 561.26806640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2483.38330078125,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 30%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +49 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"1024\" y=\"152\" text-anchor=\"middle\" font-size=\"94\" font-weight=\"800\" fill=\"#155578\">SpaceX 2026 财年第三季度利润表</text><rect x=\"1364\" y=\"906\" width=\"336\" height=\"125\" rx=\"32\" fill=\"#000\"/><rect x=\"1708\" y=\"906\" width=\"290\" height=\"125\" rx=\"32\" fill=\"#000\"/><text x=\"1532\" y=\"945\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >Starlink 卫星网络</text><text x=\"1438\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >订阅用户</text><text x=\"1540\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_subscribers\">13.6M</text><text x=\"1638\" y=\"977\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >(同比 +89%)</text><text x=\"1460\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >ARPU</text><text x=\"1531\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_arpu\">$69</text><text x=\"1620\" y=\"1009\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" >(同比 -17%)</text><text x=\"1853\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >航天发射次数</text><text x=\"1800\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"space_launches\">35</text><text x=\"1891\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >(同比 -20%)</text></g>"
    }
  }
});})();
