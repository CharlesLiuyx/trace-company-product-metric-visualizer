(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "warner-bros-q3-fy22",
  "name": "Warner Bros. Discovery · Q3 FY22",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2461.2451171875,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155477",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#001caf",
        "label": "#001caf"
      },
      "hub": {
        "node": "#001caf",
        "label": "#001caf"
      },
      "profit": {
        "node": "#269f28",
        "label": "#269f28"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#cc0000"
      }
    },
    "linkTint": {
      "source": "#8895d3",
      "hub": "#8895d3",
      "profit": "#98cd99",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 7
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"107\" y=\"945\" width=\"437\" height=\"92\" rx=\"22\" fill=\"#001caf\"/><text x=\"145\" y=\"985\" font-size=\"24\" fill=\"white\">DTC subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"338\" y=\"985\" font-size=\"24\" fill=\"white\">95M</text><text x=\"390\" y=\"985\" font-size=\"24\" fill=\"white\">(+19% Y/Y)</text><text x=\"169\" y=\"1017\" font-size=\"24\" fill=\"white\">Global ARPU</text><text data-operating-metric=\"global_arpu\" x=\"320\" y=\"1017\" font-size=\"24\" fill=\"white\">$7.52</text><text x=\"387\" y=\"1017\" font-size=\"24\" fill=\"white\">(-2% Y/Y)</text><text x=\"150\" y=\"1065\" font-size=\"21\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"132\" y=\"1104\" font-size=\"29\" font-weight=\"800\">Source: Quarterly results</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 712.32861328125,
      "y": 217.47509765625,
      "width": 754.00048828125,
      "height": 272.16943359375
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 23.4404296875,
      "y": 371.14013671875,
      "width": 177.10546875,
      "height": 177.10546875
    },
    {
      "key": "q3-fy22-networks",
      "href": "data/assets/raster-annotations/warner-bros/q3-fy22-networks.png",
      "x": 26.044921875,
      "y": 677.16796875,
      "width": 162.78076171875,
      "height": 239.61328125
    },
    {
      "key": "q3-fy22-dtc",
      "href": "data/assets/raster-annotations/warner-bros/q3-fy22-dtc.png",
      "x": 22.13818359375,
      "y": 1050.91259765625,
      "width": 190.1279296875,
      "height": 102.87744140625
    }
  ],
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC subscribers",
      "value": "95000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "95M",
      "basis": "unspecified",
      "notes": [
        "+19% Y/Y"
      ],
      "quote": "DTC subscribers 95M (+19% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          140,
          960,
          370,
          34
        ]
      }
    },
    {
      "id": "global_arpu",
      "label": "Global ARPU",
      "value": "0.00752",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$7.52",
      "basis": "unspecified",
      "notes": [
        "-2% Y/Y"
      ],
      "quote": "Global ARPU $7.52 (-2% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          160,
          995,
          350,
          30
        ]
      }
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 432.345703125,
        "y": 403.6962890625,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "networks": {
        "x": 432.345703125,
        "y": 701.91064453125,
        "width": 72.92578125,
        "height": 169.2919921875
      },
      "dtc": {
        "x": 432.345703125,
        "y": 1061.33056640625,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "gross_revenue": {
        "x": 823.01953125,
        "y": 561.26806640625,
        "width": 72.92578125,
        "height": 346.3974609375
      },
      "revenue": {
        "x": 1181.13720703125,
        "y": 597.73095703125,
        "width": 72.92578125,
        "height": 321.65478515625
      },
      "eliminations": {
        "x": 1181.13720703125,
        "y": 998.82275390625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "gross_profit": {
        "x": 1590.04248046875,
        "y": 518.2939453125,
        "width": 71.62353515625,
        "height": 136.73583984375
      },
      "cost_of_revenue": {
        "x": 1590.04248046875,
        "y": 800.88134765625,
        "width": 71.62353515625,
        "height": 183.61669921875
      },
      "operating_loss": {
        "x": 1606.9716796875,
        "y": 1181.13720703125,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "operating_expenses": {
        "x": 1988.52978515625,
        "y": 619.869140625,
        "width": 71.62353515625,
        "height": 208.359375
      },
      "sga": {
        "x": 2285.44189453125,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 84.64599609375
      },
      "amortization": {
        "x": 2285.44189453125,
        "y": 712.32861328125,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "restructuring": {
        "x": 2285.44189453125,
        "y": 945.4306640625,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "asset_impairment": {
        "x": 2285.44189453125,
        "y": 1084.77099609375,
        "width": 72.92578125,
        "height": 1.30224609375
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "studios": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 309.9345703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#001caf"
              },
              {
                "text": "(8%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 419.3232421875,
            "top": 412.81201171875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Studios",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#001caf"
              },
              {
                "text": "25% adj. margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 609.451171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#001caf"
              },
              {
                "text": "(11%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 419.3232421875,
            "top": 748.79150390625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Networks",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#001caf"
              },
              {
                "text": "50% adj. margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "dtc": {
        "blocks": [
          {
            "x": 468.80859375,
            "top": 968.87109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#001caf"
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 419.3232421875,
            "top": 1052.21484375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Direct to",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#001caf"
              },
              {
                "text": "consumer",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#001caf"
              },
              {
                "text": "(27%) adj. margin",
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
            "x": 1217.60009765625,
            "top": 447.97265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#001caf"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#001caf"
              },
              {
                "text": "(10%) Y/Y",
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
            "x": 1217.60009765625,
            "top": 1037.89013671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1625.203125,
            "top": 368.53564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#009352"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009352"
              },
              {
                "text": "43% margin",
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
            "x": 1625.203125,
            "top": 1000.125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1643.4345703125,
            "top": 1265.783203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating loss",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "(22%) margin",
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
            "x": 2024.99267578125,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2475.56982421875,
            "top": 511.78271484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "26% of revenue",
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
            "x": 2475.56982421875,
            "top": 701.91064453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "23% of revenue",
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
            "x": 2475.56982421875,
            "top": 914.1767578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "15% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "asset_impairment": {
        "blocks": [
          {
            "x": 2475.56982421875,
            "top": 1050.91259765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Asset",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "impairment",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "studios",
      "label": "Studios",
      "value": 3.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$3.1B",
      "notes": [
        "(8%) Y/Y",
        "25% adj. margin"
      ]
    },
    {
      "id": "networks",
      "label": "Networks",
      "value": 5.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$5.2B",
      "notes": [
        "(11%) Y/Y",
        "50% adj. margin"
      ]
    },
    {
      "id": "dtc",
      "label": "Direct to consumer",
      "value": 2.3,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.3B",
      "notes": [
        "(7%) Y/Y",
        "(27%) adj. margin"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -0.8,
      "type": "cost",
      "col": 2,
      "order": 3,
      "valueText": "($0.8B)",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 9.8,
      "type": "hub",
      "col": 2,
      "order": 4,
      "valueText": "$9.8B",
      "notes": [
        "(10%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 4.2,
      "type": "profit",
      "col": 3,
      "order": 5,
      "valueText": "$4.2B",
      "notes": [
        "43% margin"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 5.6,
      "type": "cost",
      "col": 3,
      "order": 6,
      "valueText": "($5.6B)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -2.2,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($2.2B)",
      "notes": [
        "(22%) margin"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 6.4,
      "type": "cost",
      "col": 4,
      "order": 8,
      "valueText": "($6.4B)",
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.6,
      "type": "cost",
      "col": 5,
      "order": 9,
      "valueText": "($2.6B)",
      "notes": [
        "26% of revenue"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 2.2,
      "type": "cost",
      "col": 5,
      "order": 10,
      "valueText": "($2.2B)",
      "notes": [
        "23% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 1.5,
      "type": "cost",
      "col": 5,
      "order": 11,
      "valueText": "($1.5B)",
      "notes": [
        "15% of revenue"
      ]
    },
    {
      "id": "asset_impairment",
      "label": "Asset impairment",
      "value": 0.043,
      "type": "cost",
      "col": 5,
      "order": 12,
      "valueText": "($43M)",
      "notes": []
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 10.6,
      "type": "hub",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 3.1,
      "sourceWidth": 100.27294921875,
      "targetWidth": 100.27294921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8895d3"
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5.2,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8895d3"
    },
    {
      "source": "dtc",
      "target": "gross_revenue",
      "value": 2.3,
      "sourceWidth": 75.5302734375,
      "targetWidth": 76.83251953125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#8895d3"
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 9.8,
      "sourceWidth": 320.3525390625,
      "targetWidth": 321.65478515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8895d3"
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.8,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.2,
      "sourceWidth": 138.0380859375,
      "targetWidth": 136.73583984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.6,
      "sourceWidth": 183.61669921875,
      "targetWidth": 183.61669921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.2,
      "sourceWidth": 136.73583984375,
      "targetWidth": 136.73583984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 2.2,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.6,
      "sourceWidth": 84.64599609375,
      "targetWidth": 84.64599609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 2.2,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1.5,
      "sourceWidth": 49.4853515625,
      "targetWidth": 50.78759765625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "asset_impairment",
      "value": 0.043,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2022 财年第三季度",
      "meta": {
        "title": "Warner Bros. 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "titleTextLength": 2213.818359375
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"107\" y=\"945\" width=\"437\" height=\"92\" rx=\"22\" fill=\"#001caf\"/><text x=\"145\" y=\"985\" font-size=\"24\" fill=\"white\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"338\" y=\"985\" font-size=\"24\" fill=\"white\">95M</text><text x=\"390\" y=\"985\" font-size=\"24\" fill=\"white\">（同比 +19%）</text><text x=\"169\" y=\"1017\" font-size=\"24\" fill=\"white\">全球 ARPU</text><text data-operating-metric=\"global_arpu\" x=\"320\" y=\"1017\" font-size=\"24\" fill=\"white\">$7.52</text><text x=\"387\" y=\"1017\" font-size=\"24\" fill=\"white\">（同比 -2%）</text><text x=\"150\" y=\"1065\" font-size=\"21\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"132\" y=\"1104\" font-size=\"29\" font-weight=\"800\">来源：季度业绩</text></g></g>",
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (8%)",
            "调整后利润率 25%"
          ]
        },
        "networks": {
          "label": "线性网络",
          "notes": [
            "同比 (11%)",
            "调整后利润率 50%"
          ]
        },
        "dtc": {
          "label": "直接面向消费者",
          "notes": [
            "同比 (7%)",
            "调整后利润率 (27%)"
          ]
        },
        "gross_revenue": {
          "label": "总收入",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (10%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 43%"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (22%)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sga": {
          "label": "销售及管理费用",
          "notes": [
            "占收入 26%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 23%"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 15%"
          ]
        },
        "asset_impairment": {
          "label": "资产减值",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "studios": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 309.9345703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#001caf"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 419.3232421875,
                "top": 412.81201171875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#001caf"
                  },
                  {
                    "text": "调整后利润率 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 609.451171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#001caf"
                  },
                  {
                    "text": "同比 (11%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 419.3232421875,
                "top": 748.79150390625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "线性网络",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#001caf"
                  },
                  {
                    "text": "调整后利润率 50%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "dtc": {
            "blocks": [
              {
                "x": 468.80859375,
                "top": 968.87109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#001caf"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 419.3232421875,
                "top": 1052.21484375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#001caf"
                  },
                  {
                    "text": "消费者",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#001caf"
                  },
                  {
                    "text": "调整后利润率 (27%)",
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
                "x": 1217.60009765625,
                "top": 447.97265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#001caf"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#001caf"
                  },
                  {
                    "text": "同比 (10%)",
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
                "x": 1217.60009765625,
                "top": 1037.89013671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1625.203125,
                "top": 368.53564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#009352"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009352"
                  },
                  {
                    "text": "利润率 43%",
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
                "x": 1625.203125,
                "top": 1000.125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1643.4345703125,
                "top": 1265.783203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "利润率 (22%)",
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
                "x": 2024.99267578125,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2475.56982421875,
                "top": 511.78271484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售及管理费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "占收入 26%",
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
                "x": 2475.56982421875,
                "top": 701.91064453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "占收入 23%",
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
                "x": 2475.56982421875,
                "top": 914.1767578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "占收入 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "asset_impairment": {
            "blocks": [
              {
                "x": 2475.56982421875,
                "top": 1050.91259765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "资产",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "减值",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#981600"
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