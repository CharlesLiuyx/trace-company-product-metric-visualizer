(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spacex-q2-fy26",
  "name": "SpaceX · Q2 FY26",
  "company": "SpaceX",
  "meta": {
    "company": "SpaceX",
    "title": "",
    "period": "Q2 FY26",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/spacex-q2-fy26.png",
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
      "type": "source",
      "col": 0,
      "order": 0,
      "label": "Space",
      "value": 0.9,
      "notes": [
        "+29% Y/Y",
        "(56%) operating margin",
        "(7pp) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "connectivity",
      "type": "source",
      "col": 0,
      "order": 1,
      "label": "Connectivity",
      "value": 4.3,
      "notes": [
        "+66% Y/Y",
        "39% operating margin",
        "+3pp Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "ai",
      "type": "source",
      "col": 0,
      "order": 2,
      "label": "AI",
      "value": 2.6,
      "notes": [
        "+247% Y/Y",
        "(49%) operating margin",
        "+158pp Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "revenue",
      "type": "hub",
      "col": 1,
      "order": 3,
      "label": "Revenue",
      "value": 7.8,
      "notes": [
        "+92% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000"
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "col": 2,
      "order": 4,
      "label": "Gross profit",
      "value": 4.3,
      "notes": [
        "55% margin",
        "+11pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00964f"
    },
    {
      "id": "cost_of_revenue",
      "type": "cost",
      "col": 2,
      "order": 5,
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 3.5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a31b00"
    },
    {
      "id": "operating_loss",
      "type": "cost",
      "col": 3,
      "order": 6,
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.2,
      "notes": [
        "(2%) margin",
        "+22pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a31b00"
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "col": 4,
      "order": 7,
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a31b00"
    },
    {
      "id": "rnd",
      "type": "cost",
      "col": 5,
      "order": 8,
      "label": "R&D",
      "value": 3.5,
      "notes": [
        "45% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a31b00"
    },
    {
      "id": "sga",
      "type": "cost",
      "col": 5,
      "order": 9,
      "label": "SG&A",
      "value": 0.9,
      "notes": [
        "12% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a31b00"
    }
  ],
  "links": [
    {
      "source": "space",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 52,
      "targetWidth": 52,
      "y0": 512,
      "y1": 686,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#888888"
    },
    {
      "source": "connectivity",
      "target": "revenue",
      "value": 4.3,
      "sourceWidth": 229,
      "targetWidth": 229,
      "y0": 820.5,
      "y1": 826.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#888888"
    },
    {
      "source": "ai",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 138,
      "targetWidth": 136,
      "y0": 1165,
      "y1": 1009,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#888888"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.3,
      "sourceWidth": 231,
      "targetWidth": 231,
      "y0": 775.5,
      "y1": 667.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 3.5,
      "sourceWidth": 186,
      "targetWidth": 187,
      "y0": 984,
      "y1": 1090.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.3,
      "sourceWidth": 231,
      "targetWidth": 231,
      "y0": 667.5,
      "y1": 775.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceWidth": 9,
      "targetWidth": 8,
      "y0": 948.5,
      "y1": 895,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.5,
      "sourceWidth": 189,
      "targetWidth": 189,
      "y0": 754.5,
      "y1": 631.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.9,
      "sourceWidth": 50,
      "targetWidth": 50,
      "y0": 874,
      "y1": 994,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "layout": {
    "nodes": {
      "space": {
        "x": 427,
        "y": 486,
        "width": 71,
        "height": 52
      },
      "connectivity": {
        "x": 427,
        "y": 706,
        "width": 71,
        "height": 229
      },
      "ai": {
        "x": 427,
        "y": 1096,
        "width": 71,
        "height": 138
      },
      "revenue": {
        "x": 894,
        "y": 660,
        "width": 70,
        "height": 417
      },
      "gross_profit": {
        "x": 1361,
        "y": 552,
        "width": 71,
        "height": 231
      },
      "cost_of_revenue": {
        "x": 1361,
        "y": 997,
        "width": 71,
        "height": 187
      },
      "operating_loss": {
        "x": 1641,
        "y": 944,
        "width": 71,
        "height": 9
      },
      "operating_expenses": {
        "x": 1829,
        "y": 660,
        "width": 70,
        "height": 239
      },
      "rnd": {
        "x": 2295,
        "y": 537,
        "width": 71,
        "height": 189
      },
      "sga": {
        "x": 2295,
        "y": 969,
        "width": 71,
        "height": 50
      }
    },
    "labels": {
      "space": {
        "blocks": [
          {
            "x": 462.29736328125,
            "top": 388.0693359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 203.150390625,
            "top": 483.13330078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Space",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "(56%) operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(7pp) Y/Y",
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
            "top": 609.451171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+66% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 203.150390625,
            "top": 833.4375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Connectivity",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "39% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "top": 1002.7294921875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+247% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 212.26611328125,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "AI",
                "size": 49.4853515625,
                "weight": 800
              },
              {
                "text": "(49%) operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+158pp Y/Y",
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
            "top": 510.48046875,
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
                "text": "+92% Y/Y",
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
            "top": 363.32666015625,
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
                "text": "55% margin",
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
            "top": 1196.76416015625,
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1675.99072265625,
            "top": 966.2666015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400
              },
              {
                "text": "(2%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+22pp Y/Y",
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
            "x": 1863.51416015625,
            "top": 510.48046875,
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
            "x": 2502.9169921875,
            "top": 554.7568359375,
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
                "text": "45% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 2502.9169921875,
            "top": 951.94189453125,
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
                "text": "(3pp) Y/Y",
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
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"1024\" y=\"152\" text-anchor=\"middle\" font-size=\"94\" font-weight=\"800\" fill=\"#155578\">SpaceX Q2 FY26 Income Statement</text><rect x=\"1364\" y=\"906\" width=\"336\" height=\"125\" rx=\"32\" fill=\"#000\"/><rect x=\"1708\" y=\"906\" width=\"290\" height=\"125\" rx=\"32\" fill=\"#000\"/><text x=\"1532\" y=\"945\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >Starlink</text><text x=\"1468\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >Subscribers</text><text x=\"1550\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_subscribers\">12M</text><text x=\"1638\" y=\"977\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >(+100% Y/Y)</text><text x=\"1460\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >ARPU</text><text x=\"1531\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_arpu\">$66</text><text x=\"1620\" y=\"1009\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" >(-22% Y/Y)</text><text x=\"1853\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >Space Launches</text><text x=\"1800\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"space_launches\">38</text><text x=\"1891\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >(-26% Y/Y)</text></g>",
  "operatingMetrics": [
    {
      "id": "starlink_subscribers",
      "value": "12000000",
      "unit": "count",
      "currency": null,
      "literal": "12M",
      "comparison": "eq"
    },
    {
      "id": "starlink_arpu",
      "value": "0.066",
      "unit": "K",
      "currency": "USD",
      "literal": "$66",
      "comparison": "eq"
    },
    {
      "id": "space_launches",
      "value": "38",
      "unit": "count",
      "currency": null,
      "literal": "38",
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-symbol-body",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-company-symbol-body.png",
      "x": 810,
      "y": 280,
      "width": 400,
      "height": 205,
      "clearance": true
    },
    {
      "key": "company-symbol-tail",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-company-symbol-tail.png",
      "x": 1210,
      "y": 280,
      "width": 110,
      "height": 32,
      "clearance": true
    },
    {
      "key": "business-space-rocket",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-business-space-rocket.png",
      "x": 110,
      "y": 275,
      "width": 185,
      "height": 200,
      "clearance": true
    },
    {
      "key": "business-connectivity-starlink",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-business-connectivity-starlink.png",
      "x": 150,
      "y": 696,
      "width": 244,
      "height": 123,
      "clearance": true
    },
    {
      "key": "business-ai-cluster",
      "href": "data/assets/raster-annotations/spacex/q2-fy26-business-ai-cluster.png",
      "x": 80,
      "y": 1048,
      "width": 283,
      "height": 102,
      "clearance": true
    }
  ],
  "i18n": {
    "zh": {
      "name": "SpaceX · 2026 财年第二季度",
      "meta": {
        "period": "2026 财年第二季度"
      },
      "nodes": {
        "space": {
          "label": "航天",
          "notes": [
            "同比 +29%",
            "营业利润率 (56%)",
            "同比 (7 个百分点)"
          ]
        },
        "connectivity": {
          "label": "连接服务",
          "notes": [
            "同比 +66%",
            "营业利润率 39%",
            "同比 +3 个百分点"
          ]
        },
        "ai": {
          "label": "AI",
          "notes": [
            "同比 +247%",
            "营业利润率 (49%)",
            "同比 +158 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +92%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 55%",
            "同比 +11 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (2%)",
            "同比 +22 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "rnd": {
          "label": "研发 (R&D)",
          "notes": [
            "占收入 45%",
            "同比 (3 个百分点)"
          ]
        },
        "sga": {
          "label": "销售及行政 (SG&A)",
          "notes": [
            "占收入 12%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "space": {
            "blocks": [
              {
                "x": 462.29736328125,
                "top": 388.0693359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 203.150390625,
                "top": 483.13330078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "航天",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 (56%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (7 个百分点)",
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
                "top": 609.451171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +66%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 203.150390625,
                "top": 833.4375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "连接服务",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 39%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "top": 1002.7294921875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +247%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 212.26611328125,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "AI",
                    "size": 49.4853515625,
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 (49%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +158 个百分点",
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
                "top": 510.48046875,
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
                    "text": "同比 +92%",
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
                "top": 363.32666015625,
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
                    "text": "利润率 55%",
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
                "top": 1196.76416015625,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1675.99072265625,
                "top": 966.2666015625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (2%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +22 个百分点",
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
                "x": 1863.51416015625,
                "top": 510.48046875,
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
                "x": 2502.9169921875,
                "top": 554.7568359375,
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
                    "text": "占收入 45%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "x": 2502.9169921875,
                "top": 951.94189453125,
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
                    "text": "同比 (3 个百分点)",
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"1024\" y=\"152\" text-anchor=\"middle\" font-size=\"94\" font-weight=\"800\" fill=\"#155578\">SpaceX 2026 财年第二季度利润表</text><rect x=\"1364\" y=\"906\" width=\"336\" height=\"125\" rx=\"32\" fill=\"#000\"/><rect x=\"1708\" y=\"906\" width=\"290\" height=\"125\" rx=\"32\" fill=\"#000\"/><text x=\"1532\" y=\"945\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >Starlink 卫星网络</text><text x=\"1468\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >订阅用户</text><text x=\"1550\" y=\"977\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_subscribers\">12M</text><text x=\"1638\" y=\"977\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"400\" fill=\"#fff\" >(同比 +100%)</text><text x=\"1460\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >ARPU</text><text x=\"1531\" y=\"1009\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"starlink_arpu\">$66</text><text x=\"1620\" y=\"1009\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#fff\" >(同比 -22%)</text><text x=\"1853\" y=\"962\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" >航天发射次数</text><text x=\"1800\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" data-operating-metric=\"space_launches\">38</text><text x=\"1891\" y=\"994\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#fff\" >(同比 -26%)</text></g>"
    }
  }
});})();
