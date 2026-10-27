window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "paramount-q1-fy24",
  "name": "Paramount · Q1 FY24",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2435.2001953125,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#15577a",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "linkTint": {
      "source": "#87b0f3",
      "hub": "#87b0f3",
      "profit": "#9acc98",
      "cost": "#de8585"
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "filmed_entertainment",
      "label": "Filmed Entertainment",
      "value": 0.6,
      "valueText": "$0.6B",
      "col": 0,
      "order": 0,
      "type": "source",
      "color": "#0066ff",
      "labelColor": "#0066ff"
    },
    {
      "id": "tv_media",
      "label": "TV Media",
      "value": 5.2,
      "valueText": "$5.2B",
      "col": 0,
      "order": 1,
      "type": "source",
      "color": "#0066ff",
      "labelColor": "#0066ff"
    },
    {
      "id": "direct_to_consumer",
      "label": "Direct to consumer",
      "value": 1.9,
      "valueText": "$1.9B",
      "col": 0,
      "order": 2,
      "type": "source",
      "color": "#0066ff",
      "labelColor": "#0066ff"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.03,
      "valueText": "($30M)",
      "col": 1,
      "order": 3,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 7.7,
      "valueText": "$7.7B",
      "col": 2,
      "order": 4,
      "type": "hub",
      "color": "#0066ff",
      "labelColor": "#0066ff"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.5,
      "valueText": "$1.5B",
      "col": 2,
      "order": 5,
      "type": "profit",
      "color": "#269d25",
      "labelColor": "#008f4d"
    },
    {
      "id": "operating",
      "label": "Operating",
      "value": 5.0,
      "valueText": "($5.0B)",
      "col": 2,
      "order": 6,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "programming",
      "label": "Programming",
      "value": 1.1,
      "valueText": "($1.1B)",
      "col": 2,
      "order": 7,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.9,
      "valueText": "($1.9B)",
      "col": 2,
      "order": 8,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.4,
      "valueText": "($0.4B)",
      "col": 2,
      "order": 9,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 1.6,
      "valueText": "($1.6B)",
      "col": 2,
      "order": 10,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.2,
      "valueText": "($0.2B)",
      "col": 2,
      "order": 11,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.1,
      "valueText": "($0.1B)",
      "col": 2,
      "order": 12,
      "type": "cost",
      "color": "#d00000",
      "labelColor": "#981900"
    },
    {
      "id": "segment_revenue",
      "label": "",
      "value": 7.7,
      "col": 1,
      "order": 0,
      "type": "hub",
      "color": "#0066ff"
    }
  ],
  "links": [
    {
      "source": "filmed_entertainment",
      "target": "segment_revenue",
      "value": 0.6,
      "width": 26.044921875,
      "y0": 428.43896484375,
      "y1": 707.11962890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "color": "#87b0f3"
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 5.2,
      "width": 214.87060546875,
      "y0": 771.580810546875,
      "y1": 826.275146484375,
      "sourceOrder": 1,
      "targetOrder": 1,
      "color": "#87b0f3",
      "targetWidth": 212.26611328125
    },
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 1.9,
      "width": 76.83251953125,
      "y0": 1107.560302734375,
      "y1": 970.824462890625,
      "sourceOrder": 2,
      "targetOrder": 2,
      "color": "#87b0f3"
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 7.7,
      "width": 315.1435546875,
      "y0": 851.6689453125,
      "y1": 905.06103515625,
      "sourceOrder": 3,
      "targetOrder": 3,
      "color": "#87b0f3"
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.03,
      "width": 2.6044921875,
      "y0": 1007.9384765625,
      "y1": 1186.34619140625,
      "sourceOrder": 4,
      "targetOrder": 4,
      "color": "#de8585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.5,
      "width": 62.5078125,
      "y0": 778.7431640625,
      "y1": 647.21630859375,
      "sourceOrder": 5,
      "targetOrder": 5,
      "color": "#9acc98",
      "linkTint": "#9acc98"
    },
    {
      "source": "revenue",
      "target": "operating",
      "value": 5,
      "width": 205.7548828125,
      "y0": 912.87451171875,
      "y1": 975.38232421875,
      "sourceOrder": 6,
      "targetOrder": 6,
      "color": "#de8585"
    },
    {
      "source": "revenue",
      "target": "programming",
      "value": 1.1,
      "width": 45.57861328125,
      "y0": 1039.1923828125,
      "y1": 1220.855712890625,
      "sourceOrder": 7,
      "targetOrder": 7,
      "color": "#de8585",
      "sourceWidth": 46.880859375,
      "targetWidth": 45.57861328125
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.5,
      "width": 62.5078125,
      "y0": 647.21630859375,
      "y1": 778.7431640625,
      "sourceOrder": 8,
      "targetOrder": 8,
      "color": "#de8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.4,
      "width": 15.626953125,
      "y0": 893.3408203125,
      "y1": 817.810546875,
      "sourceOrder": 9,
      "targetOrder": 9,
      "color": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.6,
      "width": 67.716796875,
      "y0": 781.34765625,
      "y1": 587.31298828125,
      "sourceOrder": 10,
      "targetOrder": 10,
      "color": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.2,
      "width": 7.8134765625,
      "y0": 819.11279296875,
      "y1": 819.11279296875,
      "sourceOrder": 11,
      "targetOrder": 11,
      "color": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "width": 2.6044921875,
      "y0": 824.32177734375,
      "y1": 1033.9833984375,
      "sourceOrder": 12,
      "targetOrder": 12,
      "color": "#de8585"
    }
  ],
  "layout": {
    "scale": 31.5,
    "nodes": {
      "filmed_entertainment": {
        "x": 447.97265625,
        "y": 415.41650390625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "tv_media": {
        "x": 447.97265625,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 214.87060546875
      },
      "direct_to_consumer": {
        "x": 447.97265625,
        "y": 1069.14404296875,
        "width": 72.92578125,
        "height": 76.83251953125
      },
      "segment_revenue": {
        "x": 821.71728515625,
        "y": 694.09716796875,
        "width": 72.92578125,
        "height": 315.1435546875
      },
      "revenue": {
        "x": 1190.2529296875,
        "y": 747.4892578125,
        "width": 72.92578125,
        "height": 315.1435546875
      },
      "eliminations": {
        "x": 1192.857421875,
        "y": 1185.0439453125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "gross_profit": {
        "x": 1571.81103515625,
        "y": 615.96240234375,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "operating": {
        "x": 1571.81103515625,
        "y": 872.5048828125,
        "width": 72.92578125,
        "height": 205.7548828125
      },
      "programming": {
        "x": 1569.20654296875,
        "y": 1198.06640625,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "operating_loss": {
        "x": 1764.54345703125,
        "y": 884.22509765625,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "operating_expenses": {
        "x": 1945.5556640625,
        "y": 747.4892578125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "sga": {
        "x": 2316.69580078125,
        "y": 553.45458984375,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "restructuring": {
        "x": 2316.69580078125,
        "y": 815.2060546875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "amortization": {
        "x": 2316.69580078125,
        "y": 1032.68115234375,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "filmed_entertainment": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 316.44580078125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 383.4693359375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Filmed",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "Entertainment",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 492.2490234375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "0% adj. margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tv_media": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 569.08154296875,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 749.184765625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "TV Media",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 800.88134765625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "28% adj. margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 972.77783203125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1062.70810546875,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Direct to",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "consumer",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1157.69677734375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(15%) adj. margin",
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
            "x": 1226.7158203125,
            "top": 596.4287109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
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
            "x": 1606.9716796875,
            "top": 431.04345703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "20% margin",
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
      "eliminations": {
        "blocks": [
          {
            "x": 1229.3203125,
            "top": 1204.57763671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36.462890625,
                "weight": 700
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
      "operating": {
        "blocks": [
          {
            "x": 1606.9716796875,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700
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
      "programming": {
        "blocks": [
          {
            "x": 1606.9716796875,
            "top": 1263.1787109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Programming",
                "size": 36.462890625,
                "weight": 700
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1801.00634765625,
            "top": 919.3857421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "(5%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+12pp Y/Y",
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
            "x": 1982.0185546875,
            "top": 584.70849609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 700
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
      "sga": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 548.24560546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 765.720703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Restructuring",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "2% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 988.40478515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Amortization",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "segment_revenue": {
        "blocks": []
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/paramount/q1-fy24-company-wordmark.png",
      "x": 760,
      "y": 300,
      "width": 588,
      "height": 174
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 23.4404296875,
      "y": 300.81884765625,
      "width": 177.10546875,
      "height": 127.6201171875
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 13.0224609375,
      "y": 705.8173828125,
      "width": 178.40771484375,
      "height": 149.75830078125
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 20.8359375,
      "y": 954.54638671875,
      "width": 187.5234375,
      "height": 190.1279296875
    }
  ],
  "annotationsSvg": "<g><rect x=\"194.035\" y=\"1225.414\" width=\"466.204\" height=\"164.083\" rx=\"31.254\" fill=\"#0066ff\"/><text x=\"427.137\" y=\"1276.201\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">Paramount+ subscribers</text><text data-operating-metric=\"subscribers\" x=\"338.584\" y=\"1317.873\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">71M</text><text x=\"494.854\" y=\"1317.873\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">(+18% Y/Y)</text><text x=\"427.137\" y=\"1359.545\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">+3.7M Q/Q</text><text x=\"169.292\" y=\"1437.68\" font-size=\"36.463\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "subscribers",
      "label": "Paramount+ subscribers",
      "literal": "71M",
      "value": "71000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+18% Y/Y",
        "+3.7M Q/Q"
      ],
      "quote": "Paramount+ subscribers\n71M (+18% Y/Y)\n+3.7M Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          194,
          1225,
          466,
          164
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Paramount · 2024 财年第一季度",
      "meta": {
        "title": "Paramount 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度"
      },
      "nodes": {
        "filmed_entertainment": {
          "label": [
            "影视",
            "娱乐"
          ]
        },
        "tv_media": {
          "label": "电视媒体"
        },
        "direct_to_consumer": {
          "label": [
            "直接面向",
            "消费者"
          ]
        },
        "segment_revenue": {
          "label": ""
        },
        "revenue": {
          "label": "收入"
        },
        "eliminations": {
          "label": "抵销"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "operating": {
          "label": "运营成本"
        },
        "programming": {
          "label": "节目制作"
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "sga": {
          "label": "销售、一般及行政"
        },
        "restructuring": {
          "label": "重组"
        },
        "amortization": {
          "label": "摊销"
        }
      },
      "layout": {
        "labels": {
          "filmed_entertainment": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 316.44580078125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 383.4693359375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "影视",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "娱乐",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 492.2490234375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "调整后利润率 0%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tv_media": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 569.08154296875,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 749.184765625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 800.88134765625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "调整后利润率 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 972.77783203125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1062.70810546875,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "消费者",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1157.69677734375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "调整后利润率 (15%)",
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
                "x": 1226.7158203125,
                "top": 596.4287109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
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
                "x": 1606.9716796875,
                "top": 431.04345703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 20%",
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
          "eliminations": {
            "blocks": [
              {
                "x": 1229.3203125,
                "top": 1204.57763671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36.462890625,
                    "weight": 700
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
          "operating": {
            "blocks": [
              {
                "x": 1606.9716796875,
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营成本",
                    "size": 36.462890625,
                    "weight": 700
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
          "programming": {
            "blocks": [
              {
                "x": 1606.9716796875,
                "top": 1263.1787109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "节目制作",
                    "size": 36.462890625,
                    "weight": 700
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1801.00634765625,
                "top": 919.3857421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +12 个百分点",
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
                "x": 1982.0185546875,
                "top": 584.70849609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 700
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
          "sga": {
            "blocks": [
              {
                "x": 2518.3125,
                "top": 548.24560546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 27.34716796875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 765.720703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "重组",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 2%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 988.40478515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "segment_revenue": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"194.035\" y=\"1225.414\" width=\"466.204\" height=\"164.083\" rx=\"31.254\" fill=\"#0066ff\"/><text x=\"427.137\" y=\"1276.201\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">Paramount+ 订阅用户</text><text data-operating-metric=\"subscribers\" x=\"338.584\" y=\"1317.873\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">71M</text><text x=\"494.854\" y=\"1317.873\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">（同比 +18%）</text><text x=\"427.137\" y=\"1359.545\" text-anchor=\"middle\" font-size=\"29.952\" font-weight=\"700\" fill=\"white\">环比 +3.7M</text><text x=\"169.292\" y=\"1437.68\" font-size=\"36.463\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
