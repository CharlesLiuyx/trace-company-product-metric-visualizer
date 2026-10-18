(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "boeing-9m-fy25",
  "name": "Boeing · 9M FY25",
  "company": "Boeing",
  "meta": {
    "company": "Boeing",
    "title": "Boeing 9M FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/boeing-9m-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "commercial_airplanes",
      "label": [
        "Commercial",
        "Airplanes"
      ],
      "value": 30.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+66% Y/Y",
        "(21%) segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "defense",
      "label": [
        "Defense, Space",
        "& Security"
      ],
      "value": 19.8,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+7% Y/Y",
        "2% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "global_services",
      "label": "Global Services",
      "value": 15.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+6% Y/Y",
        "19% segment margin"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "seg_hub",
      "label": "",
      "value": 65.6,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 65.5,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+27% Y/Y"
      ],
      "color": "#0030a2",
      "labelColor": "#0030a2",
      "linkTint": "#8296c8"
    },
    {
      "id": "unallocated",
      "label": "Unallocated",
      "value": -0.1,
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#e08585",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($0.1B)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.5,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "4% margin",
        "+5pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#96c896"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 63,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 7.1,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 4.4,
      "type": "cost",
      "col": 6,
      "order": 1,
      "notes": [
        "7% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 2.7,
      "type": "cost",
      "col": 6,
      "order": 2,
      "notes": [
        "4% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -4.5,
      "type": "cost",
      "col": 4,
      "order": 0,
      "notes": [
        "(7%) margin",
        "+7pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "commercial_airplanes",
      "target": "seg_hub",
      "value": 30.1,
      "width": 149.75830078125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "defense",
      "target": "seg_hub",
      "value": 19.8,
      "width": 97.66845703125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "global_services",
      "target": "seg_hub",
      "value": 15.7,
      "width": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 65.5,
      "width": 325.5615234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 325.5615234375
    },
    {
      "source": "seg_hub",
      "target": "unallocated",
      "value": 0.1,
      "width": 1.30224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 867.947021484375,
      "y1": 1071.097412109375,
      "curve": {
        "c1x": 1015.751953125,
        "c1y": 867.947021484375,
        "c2x": 1028.7744140625,
        "c2y": 1071.097412109375
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.5,
      "width": 11.72021484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#96c896"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 63,
      "width": 313.84130859375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 312.5390625,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.5,
      "width": 11.72021484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 4.5,
      "width": 22.13818359375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 4.4,
      "width": 22.13818359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.7,
      "width": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 13.0224609375,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "commercial_airplanes": {
        "x": 431.04345703125,
        "y": 384.16259765625,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "defense": {
        "x": 431.04345703125,
        "y": 737.0712890625,
        "width": 72.92578125,
        "height": 97.66845703125
      },
      "global_services": {
        "x": 431.04345703125,
        "y": 1035.28564453125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "seg_hub": {
        "x": 804.7880859375,
        "y": 543.03662109375,
        "width": 72.92578125,
        "height": 325.5615234375
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 618.56689453125,
        "width": 72.92578125,
        "height": 325.5615234375
      },
      "unallocated": {
        "x": 1178.53271484375,
        "y": 1070.4462890625,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gross_profit": {
        "x": 1552.27734375,
        "y": 540.43212890625,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "cost_of_sales": {
        "x": 1552.27734375,
        "y": 731.8623046875,
        "width": 72.92578125,
        "height": 312.5390625
      },
      "operating_loss": {
        "x": 1812.7265625,
        "y": 714.93310546875,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "operating_expenses": {
        "x": 1926.02197265625,
        "y": 623.77587890625,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 759.20947265625,
        "width": 72.92578125,
        "height": 13.0224609375
      }
    },
    "labels": {
      "commercial_airplanes": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 286.494140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 263.0537109375,
            "top": 398.4873046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Airplanes",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 263.0537109375,
            "top": 503.96923828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(21%) segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "defense": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 639.40283203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 264.35595703125,
            "top": 725.35107421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Defense, Space",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Security",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 264.35595703125,
            "top": 828.228515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "2% segment margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "global_services": {
        "blocks": [
          {
            "x": 466.2041015625,
            "top": 938.91943359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 269.56494140625,
            "top": 1026.169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Global Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 269.56494140625,
            "top": 1076.95751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "19% segment margin",
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
            "x": 1214.99560546875,
            "top": 467.50634765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "+27% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "unallocated": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Unallocated",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1588.740234375,
            "top": 351.6064453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "4% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1588.740234375,
            "top": 1058.72607421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 33.8583984375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1849.189453125,
            "top": 752.6982421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(7%) margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1962.48486328125,
            "top": 457.08837890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "ga": {
        "blocks": [
          {
            "x": 2493.80126953125,
            "top": 507.8759765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2493.80126953125,
            "top": 725.35107421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "4% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "seg_hub": {
        "blocks": []
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "deliveries",
      "value": "440",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "440"
    },
    {
      "id": "backlog",
      "value": "636",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$636B"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"904\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Deliveries</text><text x=\"88\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">440</text><text x=\"132\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">commercial airplanes</text><text x=\"227.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+51% Y/Y</text></g><g><rect x=\"408\" y=\"904\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Backlog</text><text x=\"500.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$636B</text><text x=\"500.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">+22% Y/Y</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "boeing-q4-737-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png",
      "x": 104.1796875,
      "y": 302.12109375,
      "width": 279.98291015625,
      "height": 92.45947265625
    },
    {
      "key": "boeing-q4-starliner-tile",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png",
      "x": 203.150390625,
      "y": 613.35791015625,
      "width": 122.4111328125,
      "height": 115.89990234375
    }
  ],
  "i18n": {
    "zh": {
      "name": "波音 · 2025 财年前 9 个月",
      "meta": {
        "title": "波音 2025 财年前 9 个月利润表",
        "period": "",
        "periodNote": ""
      },
      "nodes": {
        "commercial_airplanes": {
          "label": [
            "商用",
            "飞机"
          ],
          "notes": [
            "同比 +66%",
            "分部利润率 (21%)"
          ]
        },
        "defense": {
          "label": [
            "国防、太空",
            "与安全"
          ],
          "notes": [
            "同比 +7%",
            "分部利润率 2%"
          ]
        },
        "global_services": {
          "label": "全球服务",
          "notes": [
            "同比 +6%",
            "分部利润率 19%"
          ]
        },
        "seg_hub": {
          "label": ""
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +27%"
          ]
        },
        "unallocated": {
          "label": "未分配项"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 4%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 7%",
            "同比 (0 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 4%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (7%)",
            "同比 +7 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "commercial_airplanes": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 286.494140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 263.0537109375,
                "top": 398.4873046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "商用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "飞机",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 263.0537109375,
                "top": 503.96923828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部利润率 (21%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "defense": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 639.40283203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 264.35595703125,
                "top": 725.35107421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "国防、太空",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "与安全",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 264.35595703125,
                "top": 828.228515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部利润率 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "global_services": {
            "blocks": [
              {
                "x": 466.2041015625,
                "top": 938.91943359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 269.56494140625,
                "top": 1026.169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "全球服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 269.56494140625,
                "top": 1076.95751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "分部利润率 19%",
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
                "x": 1214.99560546875,
                "top": 467.50634765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "同比 +27%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "unallocated": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "未分配项",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1588.740234375,
                "top": 351.6064453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "利润率 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
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
                "x": 1588.740234375,
                "top": 1058.72607421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 33.8583984375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1849.189453125,
                "top": 752.6982421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (7%)",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1962.48486328125,
                "top": 457.08837890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "ga": {
            "blocks": [
              {
                "x": 2493.80126953125,
                "top": 507.8759765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2493.80126953125,
                "top": 725.35107421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "seg_hub": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g transform=\"scale(0.768)\">\n    <g data-typography-role=\"brand\">\n      <g fill=\"#0030a2\">\n        <circle cx=\"748\" cy=\"368\" r=\"43\" fill=\"none\" stroke=\"#0030a2\" stroke-width=\"6.5\"/>\n        <path d=\"M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z\"/>\n        <path d=\"M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z\"/>\n      </g>\n      <text x=\"880\" y=\"391\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"72\" font-weight=\"800\" font-style=\"italic\" textLength=\"460\" lengthAdjust=\"spacingAndGlyphs\" letter-spacing=\"1\" fill=\"#0030a2\">BOEING</text>\n    </g></g><g><rect x=\"56\" y=\"904\" width=\"343\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"227.5\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">交付</text><text x=\"140\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\" data-operating-metric=\"deliveries\">440</text><text x=\"185\" y=\"974\" text-anchor=\"start\" font-size=\"24\" fill=\"white\">架商用飞机</text><text x=\"227.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +51%</text></g><g><rect x=\"408\" y=\"904\" width=\"184\" height=\"122\" rx=\"27\" fill=\"#0030a2\"/><text x=\"500.0\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">订单储备</text><text x=\"500.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"white\" data-operating-metric=\"backlog\">$636B</text><text x=\"500.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"white\">同比 +22%</text></g></g>"
    }
  }
});})();
