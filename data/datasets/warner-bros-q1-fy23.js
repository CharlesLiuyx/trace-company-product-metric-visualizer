window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "warner-bros-q1-fy23",
  "name": "Warner Bros. Discovery · Q1 FY23",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.3369140625,
    "titleSize": 117.2021484375,
    "titleWeight": 800,
    "titleTextLength": 2454.73388671875,
    "periodX": -1302.24609375,
    "periodY": -1302.24609375,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#737373",
    "linkOpacity": 1,
    "palette": {
      "source": {
        "node": "#001aac",
        "label": "#001aac"
      },
      "hub": {
        "node": "#001aac",
        "label": "#001aac"
      },
      "cost": {
        "node": "#cf0000",
        "label": "#991800"
      },
      "profit": {
        "node": "#28a029",
        "label": "#009957"
      }
    },
    "linkTint": {
      "source": "#8995d3",
      "hub": "#8995d3",
      "cost": "#e08585",
      "profit": "#99cd99"
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "scale": 29.560986328125,
    "nodes": {
      "studios": {
        "x": 431.04345703125,
        "y": 418.02099609375,
        "width": 72.92578125,
        "height": 95.06396484375
      },
      "networks": {
        "x": 431.04345703125,
        "y": 714.93310546875,
        "width": 72.92578125,
        "height": 166.6875
      },
      "streaming": {
        "x": 431.04345703125,
        "y": 1075.6552734375,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "gross_revenue": {
        "x": 804.7880859375,
        "y": 595.12646484375,
        "width": 72.92578125,
        "height": 333.375
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 648.5185546875,
        "width": 72.92578125,
        "height": 316.44580078125
      },
      "eliminations": {
        "x": 1178.53271484375,
        "y": 1074.35302734375,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "gross_profit": {
        "x": 1582.22900390625,
        "y": 540.43212890625,
        "width": 72.92578125,
        "height": 119.806640625
      },
      "cost_of_revenue": {
        "x": 1582.22900390625,
        "y": 890.736328125,
        "width": 72.92578125,
        "height": 197.94140625
      },
      "operating_loss": {
        "x": 1791.890625,
        "y": 957.15087890625,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "operating_expenses": {
        "x": 1940.3466796875,
        "y": 644.61181640625,
        "width": 72.92578125,
        "height": 135.43359375
      },
      "sga": {
        "x": 2299.7666015625,
        "y": 372.4423828125,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "amortization": {
        "x": 2299.7666015625,
        "y": 609.451171875,
        "width": 72.92578125,
        "height": 61.20556640625
      },
      "restructuring": {
        "x": 2299.7666015625,
        "y": 867.2958984375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "asset_impairment": {
        "x": 2299.7666015625,
        "y": 1065.2373046875,
        "width": 72.92578125,
        "height": 1.953369140625
      }
    },
    "labels": {
      "studios": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 317.748046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#001aac"
              },
              {
                "text": "(8%) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 415.41650390625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Studios",
                "size": 36.462890625,
                "weight": 700,
                "color": "#001aac"
              },
              {
                "text": "19% adj. margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 617.2646484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#001aac"
              },
              {
                "text": "(12%) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 761.81396484375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Networks",
                "size": 36.462890625,
                "weight": 700,
                "color": "#001aac"
              },
              {
                "text": "41% adj. margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "streaming": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 977.98681640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#001aac"
              },
              {
                "text": "(2%) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1054.8193359375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Direct to",
                "size": 36.462890625,
                "weight": 700,
                "color": "#001aac"
              },
              {
                "text": "consumer",
                "size": 36.462890625,
                "weight": 700,
                "color": "#001aac"
              },
              {
                "text": "2% adj. margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 498.76025390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#001aac"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#001aac"
              },
              {
                "text": "(6%) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1214.99560546875,
            "top": 1106.9091796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Eliminations",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#991800"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1618.69189453125,
            "top": 393.2783203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#009957"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009957"
              },
              {
                "text": "38% margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1618.69189453125,
            "top": 1103.00244140625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#991800"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 987.1025390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "(5%) margin",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1976.8095703125,
            "top": 483.13330078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#991800"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 363.32666015625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "22% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 612.0556640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "19% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 833.4375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "1% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "asset_impairment": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 1026.169921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Asset",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991800"
              },
              {
                "text": "impairment",
                "size": 31.25390625,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#991800"
              },
              {
                "text": "0% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      }
    }
  },
  "nodes": [
    {
      "id": "studios",
      "label": "Studios",
      "value": 3.2,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$3.2B",
      "notes": [
        "(8%) Y/Y",
        "19% adj. margin"
      ]
    },
    {
      "id": "networks",
      "label": "Networks",
      "value": 5.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$5.6B",
      "notes": [
        "(12%) Y/Y",
        "41% adj. margin"
      ]
    },
    {
      "id": "streaming",
      "label": "Direct to consumer",
      "value": 2.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.5B",
      "notes": [
        "(2%) Y/Y",
        "2% adj. margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 10.7,
      "type": "hub",
      "col": 2,
      "order": 3,
      "valueText": "$10.7B",
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.5,
      "type": "cost",
      "col": 2,
      "order": 4,
      "valueText": "($0.5B)",
      "notes": []
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 4,
      "type": "profit",
      "col": 3,
      "order": 5,
      "valueText": "$4.0B",
      "notes": [
        "38% margin"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 6.7,
      "type": "cost",
      "col": 3,
      "order": 6,
      "valueText": "($6.7B)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 7,
      "valueText": "($0.6B)",
      "notes": [
        "(5%) margin"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.6,
      "type": "cost",
      "col": 5,
      "order": 8,
      "valueText": "($4.6B)",
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.4,
      "type": "cost",
      "col": 6,
      "order": 9,
      "valueText": "($2.4B)",
      "notes": [
        "22% of revenue"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 2.1,
      "type": "cost",
      "col": 6,
      "order": 10,
      "valueText": "($2.1B)",
      "notes": [
        "19% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.1,
      "type": "cost",
      "col": 6,
      "order": 11,
      "valueText": "($0.1B)",
      "notes": [
        "1% of revenue"
      ]
    },
    {
      "id": "asset_impairment",
      "label": "Asset impairment",
      "value": 0.031,
      "type": "cost",
      "col": 6,
      "order": 12,
      "valueText": "($31M)",
      "notes": [
        "0% of revenue"
      ]
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "type": "hub",
      "value": 11.3,
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 3.2,
      "y0": 465.552978515625,
      "y1": 642.658447265625,
      "sourceWidth": 95.06396484375,
      "targetWidth": 95.06396484375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5.6,
      "y0": 798.27685546875,
      "y1": 773.5341796875,
      "sourceWidth": 166.6875,
      "targetWidth": 166.6875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 2.5,
      "y0": 1112.769287109375,
      "y1": 892.03857421875,
      "sourceWidth": 74.22802734375,
      "targetWidth": 72.92578125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 10.7,
      "y0": 754.00048828125,
      "y1": 806.741455078125,
      "sourceWidth": 317.748046875,
      "targetWidth": 316.44580078125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.5,
      "y0": 920.68798828125,
      "y1": 1082.16650390625,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4,
      "y0": 708.421875,
      "y1": 600.33544921875,
      "sourceWidth": 119.806640625,
      "targetWidth": 119.806640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 6.7,
      "y0": 865.99365234375,
      "y1": 989.70703125,
      "sourceWidth": 197.94140625,
      "targetWidth": 197.94140625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4,
      "y0": 600.33544921875,
      "y1": 704.51513671875,
      "sourceWidth": 119.806640625,
      "targetWidth": 119.806640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.6,
      "y0": 965.615478515625,
      "y1": 772.23193359375,
      "sourceWidth": 16.92919921875,
      "targetWidth": 15.626953125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.4,
      "y0": 680.423583984375,
      "y1": 408.254150390625,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 2.1,
      "y0": 746.838134765625,
      "y1": 640.053955078125,
      "sourceWidth": 61.20556640625,
      "targetWidth": 61.20556640625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "y0": 778.7431640625,
      "y1": 868.59814453125,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "asset_impairment",
      "value": 0.031,
      "y0": 779.394287109375,
      "y1": 1066.2139892578125,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.953369140625,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC subscribers",
      "literal": "97.6M",
      "value": "97600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+8% Y/Y"
      ],
      "quote": "DTC subscribers 97.6M (+8% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          182,
          1250,
          482,
          39
        ]
      }
    },
    {
      "id": "global_arpu",
      "label": "Global ARPU",
      "literal": "$7.58",
      "value": "0.00758",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+1% Q/Q"
      ],
      "quote": "Global ARPU $7.58 (+1% Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          207,
          1293,
          462,
          39
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><rect x=\"98\" y=\"945\" width=\"450\" height=\"92\" rx=\"24\" fill=\"#001aac\"/><text x=\"140\" y=\"985\" font-size=\"22\" fill=\"#ffffff\" fill-opacity=\"1\">DTC subscribers</text><text x=\"333\" y=\"985\" font-size=\"22\" fill=\"#ffffff\" data-operating-metric=\"dtc_subscribers\">97.6M</text><text x=\"402\" y=\"985\" font-size=\"22\" fill=\"#ffffff\" >(+8% Y/Y)</text><text x=\"159\" y=\"1018\" font-size=\"22\" fill=\"#ffffff\" >Global ARPU</text><text x=\"310\" y=\"1018\" font-size=\"22\" fill=\"#ffffff\" data-operating-metric=\"global_arpu\">$7.58</text><text x=\"380\" y=\"1018\" font-size=\"22\" fill=\"#ffffff\" >(+1% Q/Q)</text><text x=\"152\" y=\"1066\" font-size=\"21\" fill=\"#737373\" >ARPU = Average Revenue Per User</text><text x=\"130\" y=\"1103\" font-size=\"29\" fill=\"#737373\" >Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 729.2578125,
      "y": 223.986328125,
      "width": 735.76904296875,
      "height": 238.31103515625
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 26.044921875,
      "y": 373.74462890625,
      "width": 169.2919921875,
      "height": 177.10546875
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-networks-cluster.png",
      "x": 28.6494140625,
      "y": 684.9814453125,
      "width": 161.478515625,
      "height": 243.52001953125
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros/q1-fy23-hbo-discovery.png",
      "x": 28.6494140625,
      "y": 1060.0283203125,
      "width": 174.5009765625,
      "height": 85.9482421875
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2023 财年第一季度",
      "meta": {
        "title": "Warner Bros. 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "titleTextLength": 2454.73388671875
      },
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (8%)",
            "调整后利润率 19%"
          ]
        },
        "networks": {
          "label": "电视网络",
          "notes": [
            "同比 (12%)",
            "调整后利润率 41%"
          ]
        },
        "streaming": {
          "label": "直接面向消费者",
          "notes": [
            "同比 (2%)",
            "调整后利润率 2%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (6%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 38%"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (5%)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 22%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 19%"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 1%"
          ]
        },
        "asset_impairment": {
          "label": "资产减值",
          "notes": [
            "占收入 0%"
          ]
        },
        "gross_revenue": {
          "label": "抵销前收入",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "studios": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 317.748046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#001aac"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 415.41650390625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#001aac"
                  },
                  {
                    "text": "调整后利润率 19%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 617.2646484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#001aac"
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 761.81396484375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "电视网络",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#001aac"
                  },
                  {
                    "text": "调整后利润率 41%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "streaming": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 977.98681640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#001aac"
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1054.8193359375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#001aac"
                  },
                  {
                    "text": "消费者",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#001aac"
                  },
                  {
                    "text": "调整后利润率 2%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 498.76025390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#001aac"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#001aac"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1214.99560546875,
                "top": 1106.9091796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#991800"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1618.69189453125,
                "top": 393.2783203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#009957"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#009957"
                  },
                  {
                    "text": "利润率 38%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1618.69189453125,
                "top": 1103.00244140625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#991800"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 987.1025390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "利润率 (5%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1976.8095703125,
                "top": 483.13330078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#991800"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 363.32666015625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 22%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 612.0556640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 833.4375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "asset_impairment": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 1026.169921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "资产",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "减值",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991800"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#991800"
                  },
                  {
                    "text": "占收入 0%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><rect x=\"98\" y=\"945\" width=\"450\" height=\"92\" rx=\"24\" fill=\"#001aac\"/><text x=\"140\" y=\"985\" font-size=\"22\" fill=\"#ffffff\" fill-opacity=\"1\">DTC 订阅用户</text><text x=\"333\" y=\"985\" font-size=\"22\" fill=\"#ffffff\" data-operating-metric=\"dtc_subscribers\">97.6M</text><text x=\"402\" y=\"985\" font-size=\"22\" fill=\"#ffffff\" >(同比 +8%)</text><text x=\"159\" y=\"1018\" font-size=\"22\" fill=\"#ffffff\" >全球 ARPU</text><text x=\"310\" y=\"1018\" font-size=\"22\" fill=\"#ffffff\" data-operating-metric=\"global_arpu\">$7.58</text><text x=\"380\" y=\"1018\" font-size=\"22\" fill=\"#ffffff\" >(环比 +1%)</text><text x=\"152\" y=\"1066\" font-size=\"21\" fill=\"#737373\" >ARPU = 每用户平均收入</text><text x=\"130\" y=\"1103\" font-size=\"29\" fill=\"#737373\" >来源：季度业绩</text></g>"
    }
  }
});
