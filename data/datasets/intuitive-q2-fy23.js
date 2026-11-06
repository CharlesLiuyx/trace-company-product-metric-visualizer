(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "intuitive-q2-fy23",
  "name": "Intuitive · Q2 FY23",
  "company": "Intuitive",
  "meta": {
    "company": "Intuitive",
    "title": "Intuitive Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/intuitive-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2265.908203125,
    "hidePeriodStamp": true
  },
  "nodes": [
    {
      "id": "instruments_accessories",
      "label": "Instruments & Accessories",
      "value": 1076,
      "valueText": "$1,076M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "systems",
      "label": "Systems",
      "value": 393,
      "valueText": "$393M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 287,
      "valueText": "$287M",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1756,
      "valueText": "$1,756M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1172,
      "valueText": "$1,172M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "67% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 584,
      "valueText": "($584M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 463,
      "valueText": "$463M",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "26% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 709,
      "valueText": "($709M)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 36,
      "valueText": "$36M",
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 426,
      "valueText": "$426M",
      "type": "profit",
      "col": 5,
      "order": 9,
      "notes": [
        "24% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 73,
      "valueText": "($73M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 464,
      "valueText": "($464M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 244,
      "valueText": "($244M)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": []
    },
    {
      "id": "product",
      "label": "Product",
      "value": 498,
      "valueText": "($498M)",
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": []
    },
    {
      "id": "service",
      "label": "Service",
      "value": 86,
      "valueText": "($86M)",
      "type": "cost",
      "col": 3,
      "order": 14,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "instruments_accessories",
      "target": "revenue",
      "value": 1076,
      "sourceWidth": 183.61669921875,
      "targetWidth": 183.61669921875,
      "y0": 587.964111328125,
      "y1": 808.043701171875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "systems",
      "target": "revenue",
      "value": 393,
      "sourceWidth": 67.716796875,
      "targetWidth": 66.41455078125,
      "y0": 946.73291015625,
      "y1": 933.059326171875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 287,
      "sourceWidth": 49.4853515625,
      "targetWidth": 49.4853515625,
      "y0": 1238.43603515625,
      "y1": 991.00927734375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1172,
      "sourceWidth": 199.24365234375,
      "targetWidth": 199.24365234375,
      "y0": 815.857177734375,
      "y1": 711.677490234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 584,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "y0": 965.615478515625,
      "y1": 1061.981689453125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 463,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "y0": 651.774169921875,
      "y1": 550.198974609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 709,
      "sourceWidth": 119.806640625,
      "targetWidth": 119.806640625,
      "y0": 751.39599609375,
      "y1": 826.92626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 390,
      "sourceWidth": 66.41455078125,
      "targetWidth": 66.41455078125,
      "y0": 543.687744140625,
      "y1": 447.321533203125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 73,
      "sourceWidth": 13.0224609375,
      "targetWidth": 11.72021484375,
      "y0": 583.40625,
      "y1": 726.002197265625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 36,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 544.989990234375,
      "y1": 483.784423828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 464,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "y0": 806.741455078125,
      "y1": 964.313232421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 244,
      "sourceWidth": 40.36962890625,
      "targetWidth": 41.671875,
      "y0": 866.644775390625,
      "y1": 1199.36865234375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "product",
      "value": 498,
      "sourceWidth": 85.9482421875,
      "targetWidth": 85.9482421875,
      "y0": 1054.8193359375,
      "y1": 1110.81591796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "service",
      "value": 86,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "y0": 1104.955810546875,
      "y1": 1239.087158203125,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.17059423828125,
    "nodes": {
      "instruments_accessories": {
        "x": 444.06591796875,
        "y": 496.15576171875,
        "width": 72.92578125,
        "height": 183.61669921875
      },
      "systems": {
        "x": 444.06591796875,
        "y": 912.87451171875,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "services": {
        "x": 444.06591796875,
        "y": 1213.693359375,
        "width": 72.92578125,
        "height": 49.4853515625
      },
      "revenue": {
        "x": 914.1767578125,
        "y": 716.2353515625,
        "width": 71.62353515625,
        "height": 299.5166015625
      },
      "gross_profit": {
        "x": 1376.47412109375,
        "y": 612.0556640625,
        "width": 72.92578125,
        "height": 199.24365234375
      },
      "cost_of_revenue": {
        "x": 1377.7763671875,
        "y": 1011.84521484375,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "operating_profit": {
        "x": 1846.5849609375,
        "y": 510.48046875,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "operating_expenses": {
        "x": 1847.88720703125,
        "y": 767.02294921875,
        "width": 72.92578125,
        "height": 119.806640625
      },
      "other_income": {
        "x": 2160.42626953125,
        "y": 541.734375,
        "width": 71.62353515625,
        "height": 6.51123046875
      },
      "net_profit": {
        "x": 2312.7890625,
        "y": 414.1142578125,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "tax": {
        "x": 2312.7890625,
        "y": 720.14208984375,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "sga": {
        "x": 2312.7890625,
        "y": 924.5947265625,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "rnd": {
        "x": 2312.7890625,
        "y": 1178.53271484375,
        "width": 72.92578125,
        "height": 41.671875
      },
      "product": {
        "x": 1655.15478515625,
        "y": 1067.841796875,
        "width": 72.92578125,
        "height": 85.9482421875
      },
      "service": {
        "x": 1655.15478515625,
        "y": 1231.9248046875,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "instruments_accessories": {
        "blocks": [
          {
            "x": 479.2265625,
            "top": 399.78955078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 274.77392578125,
            "top": 541.734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Instruments",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Accessories",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "systems": {
        "blocks": [
          {
            "x": 479.2265625,
            "top": 817.810546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 923.108203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Systems",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 480.52880859375,
            "top": 1116.02490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.5615234375,
            "top": 1214.80458984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 954.54638671875,
            "top": 566.47705078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+15% Y/Y",
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
            "x": 1411.634765625,
            "top": 424.5322265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "67% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 1414.2392578125,
            "top": 1126.44287109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 1885.65234375,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "26% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 1883.0478515625,
            "top": 894.64306640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2194.28466796875,
            "top": 558.66357421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2508.1259765625,
            "top": 414.1142578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "24% margin",
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
      "tax": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 688.88818359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 925.89697265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 1164.2080078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 1073.05078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 1829.65576171875,
            "top": 1204.57763671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Service",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
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
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "rasterAnnotations": [
    {
      "key": "intuitive-company-wordmark",
      "href": "data/assets/raster-annotations/intuitive/intuitive-company-wordmark.png",
      "x": 677.16796875,
      "y": 322.95703125,
      "width": 546.943359375,
      "height": 174.5009765625
    },
    {
      "key": "intuitive-instruments-accessories-cluster",
      "href": "data/assets/raster-annotations/intuitive/intuitive-instruments-accessories-cluster.png",
      "x": 0,
      "y": 501.36474609375,
      "width": 149.75830078125,
      "height": 144.54931640625
    },
    {
      "key": "intuitive-systems-cluster",
      "href": "data/assets/raster-annotations/intuitive/intuitive-systems-cluster.png",
      "x": 0,
      "y": 828.228515625,
      "width": 230.49755859375,
      "height": 250.03125
    }
  ],
  "i18n": {
    "zh": {
      "name": "直觉外科 · 2023 财年第二季度",
      "meta": {
        "title": "直觉外科 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "titleTextLength": 1758.0322265625,
        "titleSize": 106.7841796875
      },
      "nodes": {
        "instruments_accessories": {
          "label": "器械与配件",
          "notes": [
            "同比 +20%"
          ]
        },
        "systems": {
          "label": "系统",
          "notes": [
            "同比 +5%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +14%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +15%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 67%",
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
            "利润率 26%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 24%",
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sga": {
          "label": "销售及行政费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "product": {
          "label": "产品",
          "notes": []
        },
        "service": {
          "label": "服务",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "instruments_accessories": {
            "blocks": [
              {
                "x": 479.2265625,
                "top": 399.78955078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 274.77392578125,
                "top": 541.734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "器械与",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "配件",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "systems": {
            "blocks": [
              {
                "x": 479.2265625,
                "top": 817.810546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 923.108203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "系统",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 480.52880859375,
                "top": 1116.02490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.5615234375,
                "top": 1214.80458984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 954.54638671875,
                "top": 566.47705078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +15%",
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
                "x": 1411.634765625,
                "top": 424.5322265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 67%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "x": 1414.2392578125,
                "top": 1126.44287109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 1885.65234375,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "x": 1883.0478515625,
                "top": 894.64306640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2194.28466796875,
                "top": 558.66357421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2508.1259765625,
                "top": 414.1142578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 24%",
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
          "tax": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 688.88818359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 925.89697265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售及行政费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 1164.2080078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 1073.05078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 1829.65576171875,
                "top": 1204.57763671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "服务",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
  }
});})();
