window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q3-fy22",
  "name": "Etsy · Q3 FY22",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155477",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#ef6b19",
        "label": "#f87521"
      },
      "hub": {
        "node": "#ef6b19",
        "label": "#f87521"
      },
      "profit": {
        "node": "#299e24",
        "label": "#00984c"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51c08"
      }
    },
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "marketplace",
      "label": "Marketplace",
      "value": 443,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 151,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 594,
      "type": "hub",
      "col": 0,
      "order": 0,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 420,
      "type": "profit",
      "col": 0,
      "order": 0,
      "notes": [
        "71% margin",
        "Unchanged"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 174,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 955,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [],
      "valueText": "($955M)"
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 1375,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [],
      "valueText": "($1,375M)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 147,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "25% of revenue",
        "Unchanged"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 108,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "18% of revenue",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 75,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "13% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "goodwill",
      "label": "Goodwill impairment",
      "value": 1045,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "Non-recurring"
      ],
      "valueText": "($1,045M)"
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 443,
      "sourceWidth": 112.146484375,
      "targetWidth": 113.29541015625,
      "y0": 550.9267578125,
      "y1": 714.281982421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#edb592"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 151,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "y0": 966.2666015625,
      "y1": 790.46337890625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#edb592"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 420,
      "sourceWidth": 106.7841796875,
      "targetWidth": 106.7841796875,
      "y0": 711.0263671875,
      "y1": 634.19384765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 174,
      "sourceWidth": 45.57861328125,
      "targetWidth": 44.2763671875,
      "y0": 787.207763671875,
      "y1": 881.62060546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 420,
      "sourceWidth": 106.7841796875,
      "targetWidth": 106.7841796875,
      "y0": 634.19384765625,
      "y1": 767.02294921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 955,
      "sourceWidth": 243.52001953125,
      "targetWidth": 243.52001953125,
      "y0": 1202.624267578125,
      "y1": 942.175048828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 147,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "y0": 732.513427734375,
      "y1": 589.266357421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 108,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "y0": 765.069580078125,
      "y1": 779.394287109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 75,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 788.510009765625,
      "y1": 925.245849609375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "goodwill",
      "value": 1045,
      "sourceWidth": 265.658203125,
      "targetWidth": 265.658203125,
      "y0": 931.10595703125,
      "y1": 1213.693359375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "layout": {
    "scale": 0.255240234375,
    "nodes": {
      "marketplace": {
        "x": 395.8828125,
        "y": 494.853515625,
        "width": 72.92578125,
        "height": 112.146484375
      },
      "services": {
        "x": 395.8828125,
        "y": 946.73291015625,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "revenue": {
        "x": 859.482421875,
        "y": 657.63427734375,
        "width": 72.92578125,
        "height": 152.36279296875
      },
      "gross_profit": {
        "x": 1328.291015625,
        "y": 580.8017578125,
        "width": 72.92578125,
        "height": 106.7841796875
      },
      "cost_of_revenue": {
        "x": 1328.291015625,
        "y": 859.482421875,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "operating_loss": {
        "x": 1468.93359375,
        "y": 1080.8642578125,
        "width": 72.92578125,
        "height": 243.52001953125
      },
      "operating_expenses": {
        "x": 1843.98046875,
        "y": 713.630859375,
        "width": 72.92578125,
        "height": 350.30419921875
      },
      "marketing": {
        "x": 2250.28125,
        "y": 570.3837890625,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "rnd": {
        "x": 2250.28125,
        "y": 765.720703125,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "ga": {
        "x": 2250.28125,
        "y": 915.47900390625,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "goodwill": {
        "x": 2250.28125,
        "y": 1080.8642578125,
        "width": 72.92578125,
        "height": 265.658203125
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 429.7412109375,
            "top": 395.8828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#f87521"
              },
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 332.07275390625,
            "top": 428.43896484375,
            "anchor": "end",
            "lines": [
              {
                "text": "Marketplace",
                "size": 36.462890625,
                "weight": 800,
                "color": "#f87521"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 434.9501953125,
            "top": 850.36669921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#f87521"
              },
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 296.912109375,
            "top": 940.2216796875,
            "anchor": "end",
            "lines": [
              {
                "text": "Services",
                "size": 36.462890625,
                "weight": 800,
                "color": "#f87521"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 895.9453125,
            "top": 509.17822265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 800,
                "color": "#f87521"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#f87521"
              },
              {
                "text": "+12% Y/Y",
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
            "x": 1363.45166015625,
            "top": 393.2783203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 800,
                "color": "#00984c"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#00984c"
              },
              {
                "text": "71% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Unchanged",
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
            "x": 1359.544921875,
            "top": 920.68798828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "revenue",
                "size": 36.462890625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1302.24609375,
            "top": 1169.4169921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 36.462890625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1884.35009765625,
            "top": 554.7568359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "Expenses",
                "size": 36.462890625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2443.013671875,
            "top": 546.943359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              },
              {
                "text": "25% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Unchanged",
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
            "x": 2443.013671875,
            "top": 725.35107421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              },
              {
                "text": "18% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2443.013671875,
            "top": 899.85205078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              },
              {
                "text": "13% of revenue",
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
      "goodwill": {
        "blocks": [
          {
            "x": 2443.013671875,
            "top": 1113.42041015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Goodwill",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "impairment",
                "size": 31.25390625,
                "weight": 800,
                "color": "#a51c08"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#a51c08"
              },
              {
                "text": "Non-recurring",
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
  "annotationsSvg": "<rect x=\"79.43701171875\" y=\"1153.7900390625\" width=\"164.0830078125\" height=\"165.38525390625\" rx=\"37.76513671875\" fill=\"#f77120\"/><text x=\"161.478515625\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.478515625\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"400\" fill=\"#fff\">$3.0B</text><text x=\"161.478515625\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#fff\">(3%) Y/Y</text><rect x=\"250.03125\" y=\"1153.7900390625\" width=\"335.9794921875\" height=\"165.38525390625\" rx=\"37.76513671875\" fill=\"#f77120\"/><text x=\"418.02099609375\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"418.02099609375\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"400\" fill=\"#fff\">7.4M</text><text x=\"418.02099609375\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#fff\">(1%) Y/Y</text><rect x=\"588.615234375\" y=\"1153.7900390625\" width=\"332.07275390625\" height=\"165.38525390625\" rx=\"37.76513671875\" fill=\"#f77120\"/><text x=\"754.651611328125\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"754.651611328125\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"400\" fill=\"#fff\">94.1M</text><text x=\"754.651611328125\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#fff\">(2%) Y/Y</text><text x=\"421.927734375\" y=\"1375.171875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">GMV = Gross Merchandise Sales</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#000\">Source: Quarterly results</text>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/etsy/company-logo-q3-fy22.png",
      "x": 757.9072265625,
      "y": 230.49755859375,
      "width": 265.658203125,
      "height": 265.658203125
    },
    {
      "key": "brand-cluster",
      "href": "data/assets/raster-annotations/etsy/brand-cluster-q3-fy22.png",
      "x": 23.4404296875,
      "y": 493.55126953125,
      "width": 343.79296875,
      "height": 149.75830078125
    }
  ],
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "3.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.0B"
    },
    {
      "id": "active-sellers",
      "value": "7400000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "7.4M"
    },
    {
      "id": "active-buyers",
      "value": "94100000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "94.1M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Etsy · 2022 财年第三季度",
      "meta": {
        "title": "Etsy 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "titleSize": 110
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 +12%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 71%",
            "保持不变"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": []
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 25%",
            "保持不变"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 (4 个百分点)"
          ]
        },
        "goodwill": {
          "label": "商誉减值",
          "notes": [
            "非经常性"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 429.7412109375,
                "top": 395.8828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#f87521"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 332.07275390625,
                "top": 428.43896484375,
                "anchor": "end",
                "lines": [
                  {
                    "text": "交易市场",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#f87521"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 434.9501953125,
                "top": 850.36669921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#f87521"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 296.912109375,
                "top": 940.2216796875,
                "anchor": "end",
                "lines": [
                  {
                    "text": "服务",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#f87521"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 895.9453125,
                "top": 509.17822265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#f87521"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#f87521"
                  },
                  {
                    "text": "同比 +12%",
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
                "x": 1363.45166015625,
                "top": 393.2783203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#00984c"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#00984c"
                  },
                  {
                    "text": "毛利率 71%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "保持不变",
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
                "x": 1359.544921875,
                "top": 920.68798828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1302.24609375,
                "top": 1169.4169921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1884.35009765625,
                "top": 554.7568359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2443.013671875,
                "top": 546.943359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "保持不变",
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
                "x": 2443.013671875,
                "top": 725.35107421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
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
                "x": 2443.013671875,
                "top": 899.85205078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  },
                  {
                    "text": "占收入 13%",
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
          "goodwill": {
            "blocks": [
              {
                "x": 2443.013671875,
                "top": 1113.42041015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "商誉",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "减值",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#a51c08"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a51c08"
                  },
                  {
                    "text": "非经常性",
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
      "annotationsSvg": "<rect x=\"79.43701171875\" y=\"1153.7900390625\" width=\"164.0830078125\" height=\"165.38525390625\" rx=\"37.76513671875\" fill=\"#f77120\"/><text x=\"161.478515625\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.478515625\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"400\" fill=\"#fff\">$3.0B</text><text x=\"161.478515625\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#fff\">同比 (3%)</text><rect x=\"250.03125\" y=\"1153.7900390625\" width=\"335.9794921875\" height=\"165.38525390625\" rx=\"37.76513671875\" fill=\"#f77120\"/><text x=\"418.02099609375\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"418.02099609375\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"400\" fill=\"#fff\">7.4M</text><text x=\"418.02099609375\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#fff\">同比 (1%)</text><rect x=\"588.615234375\" y=\"1153.7900390625\" width=\"332.07275390625\" height=\"165.38525390625\" rx=\"37.76513671875\" fill=\"#f77120\"/><text x=\"754.651611328125\" y=\"1207.18212890625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"754.651611328125\" y=\"1248.85400390625\" text-anchor=\"middle\" font-size=\"33.8583984375\" font-weight=\"400\" fill=\"#fff\">94.1M</text><text x=\"754.651611328125\" y=\"1290.52587890625\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"400\" fill=\"#fff\">同比 (2%)</text><text x=\"421.927734375\" y=\"1375.171875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">GMV = 商品交易总额</text><text x=\"170.59423828125\" y=\"1437.6796875\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#000\">来源：季度业绩</text>"
    }
  }
});
