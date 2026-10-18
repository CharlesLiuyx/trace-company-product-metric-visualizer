(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "ferrari-h1-fy24",
  "name": "Ferrari · H1 FY24",
  "company": "Ferrari",
  "meta": {
    "company": "Ferrari",
    "title": "Ferrari H1 FY24 Income Statement",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/ferrari-h1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
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
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36.462890625,
      "value": 36.462890625,
      "note": 26.044921875,
      "lineGap": 9.11572265625
    }
  },
  "layout": {
    "scale": 200,
    "nodes": {
      "cars_and_spare_parts": {
        "x": 488.34228515625,
        "y": 550.85009765625,
        "width": 71.62353515625,
        "height": 265.658203125
      },
      "sponsorships_commercial_brands": {
        "x": 488.34228515625,
        "y": 993.61376953125,
        "width": 71.62353515625,
        "height": 29.95166015625
      },
      "other": {
        "x": 488.34228515625,
        "y": 1186.34619140625,
        "width": 71.62353515625,
        "height": 11.72021484375
      },
      "revenue": {
        "x": 955.8486328125,
        "y": 729.2578125,
        "width": 71.62353515625,
        "height": 306.02783203125
      },
      "gross_profit": {
        "x": 1419.4482421875,
        "y": 606.8466796875,
        "width": 71.62353515625,
        "height": 153.6650390625
      },
      "cost_of_sales": {
        "x": 1424.6572265625,
        "y": 997.5205078125,
        "width": 71.62353515625,
        "height": 152.36279296875
      },
      "operating_profit": {
        "x": 1885.65234375,
        "y": 510.48046875,
        "width": 71.62353515625,
        "height": 88.552734375
      },
      "operating_expenses": {
        "x": 1888.2568359375,
        "y": 806.09033203125,
        "width": 71.62353515625,
        "height": 65.1123046875
      },
      "net_profit": {
        "x": 2357.0654296875,
        "y": 401.091796875,
        "width": 71.62353515625,
        "height": 71.62353515625
      },
      "tax": {
        "x": 2357.0654296875,
        "y": 668.05224609375,
        "width": 71.62353515625,
        "height": 16.92919921875
      },
      "rnd": {
        "x": 2357.0654296875,
        "y": 914.1767578125,
        "width": 71.62353515625,
        "height": 40.36962890625
      },
      "sga": {
        "x": 2357.0654296875,
        "y": 1074.35302734375,
        "width": 71.62353515625,
        "height": 24.74267578125
      },
      "other_opex": {
        "x": 2357.0654296875,
        "y": 1225.41357421875,
        "width": 71.62353515625,
        "height": 1.30224609375
      },
      "finance": {
        "x": 2357.0654296875,
        "y": 792.8701171875,
        "width": 71.62353515625,
        "height": 3
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 988.40478515625,
            "top": 575.5927734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 26.044921875,
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
            "x": 1454.60888671875,
            "top": 412.81201171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "50% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.044921875,
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
            "x": 1461.1201171875,
            "top": 1164.2080078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1922.115234375,
            "top": 319.05029296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "29% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.044921875,
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
            "x": 1924.7197265625,
            "top": 886.82958984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2545.89111328125,
            "top": 371.14013671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "23% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.044921875,
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
            "x": 2549.7978515625,
            "top": 632.8916015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2549.7978515625,
            "top": 881.62060546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "13% of revenue",
                "size": 26.044921875,
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
            "x": 2549.7978515625,
            "top": 1032.68115234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "8% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2549.7978515625,
            "top": 1178.53271484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cars_and_spare_parts": {
        "blocks": [
          {
            "x": 520.8984375,
            "top": 447.97265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 328.166015625,
            "top": 671.958984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cars and",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "spare parts",
                "size": 36.462890625,
                "weight": 400
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "sponsorships_commercial_brands": {
        "blocks": [
          {
            "x": 520.8984375,
            "top": 892.03857421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 240.91552734375,
            "top": 946.73291015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sponsorships,",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "commercial & brands",
                "size": 36.462890625,
                "weight": 400
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 520.8984375,
            "top": 1080.8642578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 26.044921875,
                "weight": 400
              }
            ]
          },
          {
            "x": 380.255859375,
            "top": 1168.11474609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 36.462890625,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "finance": {
        "blocks": [
          {
            "x": 2549.7978515625,
            "top": 744.884765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Finance",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "cars_and_spare_parts",
      "label": "Cars and spare parts",
      "value": 2.9,
      "valueText": "€2.9B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "sponsorships_commercial_brands",
      "label": "Sponsorships, commercial & brands",
      "value": 0.3,
      "valueText": "€0.3B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.1,
      "valueText": "€0.1B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.3,
      "valueText": "€3.3B",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.7,
      "valueText": "€1.7B",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "50% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 1.6,
      "valueText": "(€1.6B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1,
      "valueText": "€1.0B",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "29% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 0.7,
      "valueText": "(€0.7B)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.8,
      "valueText": "€0.8B",
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "23% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [
        "13% of revenue"
      ]
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [
        "8% of revenue"
      ]
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 0.006,
      "valueText": "(€6M)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#e0b8b8"
    },
    {
      "id": "finance",
      "label": "Finance",
      "value": 0.001,
      "valueText": "(€1M)",
      "type": "cost",
      "col": 4,
      "order": 10.5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "cars_and_spare_parts",
      "target": "revenue",
      "value": 2.9,
      "sourceWidth": 265.658203125,
      "targetWidth": 265.658203125,
      "y0": 683.67919921875,
      "y1": 862.0869140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "sponsorships_commercial_brands",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "y0": 1008.589599609375,
      "y1": 1009.891845703125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 11.72021484375,
      "targetWidth": 10.41796875,
      "y0": 1192.206298828125,
      "y1": 1030.07666015625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.7,
      "sourceWidth": 153.6650390625,
      "targetWidth": 153.6650390625,
      "y0": 806.09033203125,
      "y1": 683.67919921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 1.6,
      "sourceWidth": 152.36279296875,
      "targetWidth": 152.36279296875,
      "y0": 959.104248046875,
      "y1": 1073.701904296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1,
      "sourceWidth": 88.552734375,
      "targetWidth": 88.552734375,
      "y0": 651.123046875,
      "y1": 554.7568359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.7,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "y0": 727.95556640625,
      "y1": 838.646484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "y0": 546.292236328125,
      "y1": 436.903564453125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 13.92919921875,
      "targetWidth": 16.92919921875,
      "y0": 589.068603515625,
      "y1": 676.516845703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.4,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "y0": 826.275146484375,
      "y1": 934.361572265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.3,
      "sourceWidth": 23.4404296875,
      "targetWidth": 24.74267578125,
      "y0": 858.18017578125,
      "y1": 1086.724365234375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.006,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "y0": 870.551513671875,
      "y1": 1226.064697265625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "finance",
      "value": 0.001,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 597.533203125,
      "y1": 794.3701171875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-crest-and-wordmark",
      "href": "data/assets/raster-annotations/ferrari/company-crest-and-wordmark-q4-fy25.png",
      "x": 839.94873046875,
      "y": 235.70654296875,
      "width": 293.00537109375,
      "height": 317.748046875
    },
    {
      "key": "cars-and-spare-parts",
      "href": "data/assets/raster-annotations/ferrari/cars-and-spare-parts-q4-fy25.png",
      "x": 203.150390625,
      "y": 559.9658203125,
      "width": 223.986328125,
      "height": 84.64599609375
    },
    {
      "key": "sponsorships-commercial-brands",
      "href": "data/assets/raster-annotations/ferrari/sponsorships-commercial-brands-q4-fy25.png",
      "x": 186.22119140625,
      "y": 855.57568359375,
      "width": 223.986328125,
      "height": 78.134765625
    },
    {
      "key": "other-engine",
      "href": "data/assets/raster-annotations/ferrari/other-engine-q4-fy25.png",
      "x": 114.59765625,
      "y": 1127.7451171875,
      "width": 114.59765625,
      "height": 101.5751953125
    }
  ],
  "i18n": {
    "zh": {
      "name": "法拉利 · 2024 财年上半年",
      "meta": {
        "title": "法拉利 2024 财年上半年利润表",
        "titleSize": 117.2021484375
      },
      "nodes": {
        "cars_and_spare_parts": {
          "label": [
            "汽车及",
            "零部件"
          ],
          "notes": [
            "同比 +14%"
          ]
        },
        "sponsorships_commercial_brands": {
          "label": [
            "赞助、商业",
            "与品牌"
          ],
          "notes": [
            "同比 +13%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +2%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 50%",
            "同比（0 个百分点）"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 29%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 +1 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发 R&D",
          "notes": [
            "占收入 13%"
          ]
        },
        "sga": {
          "label": "销管 SG&A",
          "notes": [
            "占收入 8%"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        },
        "finance": {
          "label": "财务费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "cars_and_spare_parts": {
            "blocks": [
              {
                "x": 520.8984375,
                "top": 447.97265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 328.166015625,
                "top": 671.958984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "汽车及",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "零部件",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "sponsorships_commercial_brands": {
            "blocks": [
              {
                "x": 520.8984375,
                "top": 892.03857421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 240.91552734375,
                "top": 946.73291015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "赞助、商业",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "与品牌",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 520.8984375,
                "top": 1080.8642578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 26.044921875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 380.255859375,
                "top": 1168.11474609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.462890625,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 988.40478515625,
                "top": 575.5927734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 26.044921875,
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
                "x": 1454.60888671875,
                "top": 412.81201171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 50%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比（0 个百分点）",
                    "size": 26.044921875,
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
                "x": 1461.1201171875,
                "top": 1164.2080078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1922.115234375,
                "top": 319.05029296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 29%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.044921875,
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
                "x": 1924.7197265625,
                "top": 886.82958984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2545.89111328125,
                "top": 371.14013671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 23%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.044921875,
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
                "x": 2549.7978515625,
                "top": 632.8916015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2549.7978515625,
                "top": 881.62060546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发 R&D",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 13%",
                    "size": 26.044921875,
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
                "x": 2549.7978515625,
                "top": 1032.68115234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销管 SG&A",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 8%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2549.7978515625,
                "top": 1178.53271484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "finance": {
            "blocks": [
              {
                "x": 2549.7978515625,
                "top": 744.884765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "财务费用",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
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
