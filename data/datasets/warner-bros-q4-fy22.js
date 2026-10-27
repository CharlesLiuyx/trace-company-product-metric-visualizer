(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "warner-bros-q4-fy22",
  "name": "Warner Bros. Discovery · Q4 FY22",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q4 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 119.806640625,
    "titleWeight": 800,
    "titleTextLength": 2461.2451171875,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
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
    "subtitleColor": "#777777",
    "palette": {
      "source": {
        "node": "#001bad",
        "label": "#001bad"
      },
      "hub": {
        "node": "#001bad",
        "label": "#001bad"
      },
      "profit": {
        "node": "#269f27",
        "label": "#009657"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a21b04"
      }
    },
    "linkTint": {
      "source": "#8894d2",
      "hub": "#8894d2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 9.11572265625
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"98\" y=\"945\" width=\"450\" height=\"92\" rx=\"24\" fill=\"#001bad\"/><text x=\"132\" y=\"984\" font-size=\"23\" font-weight=\"700\" fill=\"white\">DTC subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"326\" y=\"984\" font-size=\"23\" fill=\"white\">96.1M</text><text x=\"400\" y=\"984\" font-size=\"22\" fill=\"white\">(+11% Y/Y)</text><text x=\"159\" y=\"1017\" font-size=\"23\" font-weight=\"700\" fill=\"white\">Global ARPU</text><text data-operating-metric=\"global_arpu\" x=\"310\" y=\"1017\" font-size=\"23\" fill=\"white\">$7.58</text><text x=\"380\" y=\"1017\" font-size=\"22\" fill=\"white\">(+1% Q/Q)</text><text x=\"323\" y=\"1065\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"130\" y=\"1104\" font-size=\"29\" font-weight=\"800\">Source: Quarterly results</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 712.32861328125,
      "y": 218.77734375,
      "width": 748.79150390625,
      "height": 270.8671875
    },
    {
      "key": "studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 24.74267578125,
      "y": 371.14013671875,
      "width": 171.896484375,
      "height": 179.7099609375
    },
    {
      "key": "networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/q4-fy22-networks-cluster.png",
      "x": 29.95166015625,
      "y": 716.2353515625,
      "width": 149.75830078125,
      "height": 226.5908203125
    },
    {
      "key": "dtc-cluster",
      "href": "data/assets/raster-annotations/warner-bros/q4-fy22-dtc-cluster.png",
      "x": 24.74267578125,
      "y": 1053.51708984375,
      "width": 181.01220703125,
      "height": 95.06396484375
    }
  ],
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC subscribers",
      "literal": "96.1M",
      "value": "96100000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+11% Y/Y"
      ],
      "quote": "DTC subscribers 96.1M (+11% Y/Y)",
      "anchor": {
        "type": "image-box",
        "box": [
          169,
          1245,
          509,
          44
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
          203,
          1294,
          477,
          42
        ]
      }
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 431.04345703125,
        "y": 399.78955078125,
        "width": 72.92578125,
        "height": 114.59765625
      },
      "networks": {
        "x": 431.04345703125,
        "y": 738.37353515625,
        "width": 72.92578125,
        "height": 165.38525390625
      },
      "streaming": {
        "x": 431.04345703125,
        "y": 1112.1181640625,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "gross_revenue": {
        "x": 804.7880859375,
        "y": 583.40625,
        "width": 72.92578125,
        "height": 352.90869140625
      },
      "revenue": {
        "x": 1178.53271484375,
        "y": 643.3095703125,
        "width": 72.92578125,
        "height": 328.166015625
      },
      "eliminations": {
        "x": 1177.23046875,
        "y": 1075.6552734375,
        "width": 71.62353515625,
        "height": 24.74267578125
      },
      "gross_profit": {
        "x": 1621.29638671875,
        "y": 531.31640625,
        "width": 72.92578125,
        "height": 121.10888671875
      },
      "cost_of_revenue": {
        "x": 1623.90087890625,
        "y": 850.36669921875,
        "width": 72.92578125,
        "height": 207.05712890625
      },
      "operating_loss": {
        "x": 1859.607421875,
        "y": 959.75537109375,
        "width": 71.62353515625,
        "height": 57.298828125
      },
      "operating_expenses": {
        "x": 2013.2724609375,
        "y": 657.63427734375,
        "width": 72.92578125,
        "height": 178.40771484375
      },
      "sga": {
        "x": 2299.7666015625,
        "y": 464.90185546875,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "amortization": {
        "x": 2299.7666015625,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "restructuring": {
        "x": 2299.7666015625,
        "y": 942.826171875,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "asset_impairment": {
        "x": 2299.7666015625,
        "y": 1183.74169921875,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "studios": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 308.63232421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(25%) Y/Y",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 433.8232421875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Studios",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 485.9130859375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "20% adj. margin",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 644.61181640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 797.865625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Networks",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 849.95546875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "45% adj. margin",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "streaming": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 1015.751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1101.93056640625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Direct to",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "consumer",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1200.90126953125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(9%) adj. margin",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
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
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#001bad",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(11%) Y/Y",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1213.693359375,
            "top": 1117.3271484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Eliminations",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1657.75927734375,
            "top": 386.76708984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "color": "#009657",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#009657",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "37% margin",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1660.36376953125,
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1905.18603515625,
            "top": 1035.28564453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating loss",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(17%) margin",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 2049.7353515625,
            "top": 500.0625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 475.31982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "23% of revenue",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 700.6083984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Amortization",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "20% of revenue",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 910.27001953125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Restructuring",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "color": "#777777",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "asset_impairment": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 1121.23388671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Asset",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "impairment",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#a21b04",
                "size": 29.95166015625,
                "weight": 400
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
      "value": 3.8,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$3.8B",
      "notes": [
        "(25%) Y/Y",
        "20% adj. margin"
      ]
    },
    {
      "id": "networks",
      "label": "Networks",
      "value": 5.5,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$5.5B",
      "notes": [
        "(9%) Y/Y",
        "45% adj. margin"
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
        "+4% Y/Y",
        "(9%) adj. margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 11.0,
      "type": "hub",
      "col": 2,
      "order": 4,
      "valueText": "$11.0B",
      "notes": [
        "(11%) Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.8,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($0.8B)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 4.1,
      "type": "profit",
      "col": 3,
      "order": 6,
      "valueText": "$4.1B",
      "notes": [
        "37% margin"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 7.0,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($7.0B)"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 1.9,
      "type": "cost",
      "col": 4,
      "order": 8,
      "valueText": "($1.9B)",
      "notes": [
        "(17%) margin"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 5.9,
      "type": "cost",
      "col": 4,
      "order": 9,
      "valueText": "($5.9B)"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.5,
      "type": "cost",
      "col": 5,
      "order": 10,
      "valueText": "($2.5B)",
      "notes": [
        "23% of revenue"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 2.3,
      "type": "cost",
      "col": 5,
      "order": 11,
      "valueText": "($2.3B)",
      "notes": [
        "20% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 1.2,
      "type": "cost",
      "col": 5,
      "order": 12,
      "valueText": "($1.2B)",
      "notes": [
        "11% of revenue"
      ]
    },
    {
      "id": "asset_impairment",
      "label": "Asset impairment",
      "value": 0.07,
      "type": "cost",
      "col": 5,
      "order": 13,
      "valueText": "($70M)"
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 11.8,
      "type": "hub",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 3.8,
      "width": 114.59765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5.5,
      "width": 165.38525390625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 2.5,
      "width": 72.92578125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 11.0,
      "width": 328.166015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.8,
      "width": 24.74267578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.1,
      "width": 121.10888671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 7.0,
      "width": 207.05712890625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.1,
      "width": 121.10888671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 1.9,
      "width": 57.298828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.5,
      "width": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 2.3,
      "width": 65.1123046875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1.2,
      "width": 35.16064453125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "asset_impairment",
      "value": 0.07,
      "width": 2.6044921875,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2022 财年第四季度",
      "meta": {
        "title": "Warner Bros. 2022 财年第四季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 2265.908203125
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"98\" y=\"945\" width=\"450\" height=\"92\" rx=\"24\" fill=\"#001bad\"/><text x=\"132\" y=\"984\" font-size=\"23\" font-weight=\"700\" fill=\"white\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"326\" y=\"984\" font-size=\"23\" fill=\"white\">96.1M</text><text x=\"400\" y=\"984\" font-size=\"22\" fill=\"white\">(同比 +11%)</text><text x=\"159\" y=\"1017\" font-size=\"23\" font-weight=\"700\" fill=\"white\">全球 ARPU</text><text data-operating-metric=\"global_arpu\" x=\"310\" y=\"1017\" font-size=\"23\" fill=\"white\">$7.58</text><text x=\"380\" y=\"1017\" font-size=\"22\" fill=\"white\">(环比 +1%)</text><text x=\"323\" y=\"1065\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"130\" y=\"1104\" font-size=\"29\" font-weight=\"800\">来源：季度业绩</text></g></g>",
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (25%)",
            "调整后利润率 20%"
          ]
        },
        "networks": {
          "label": "线性网络",
          "notes": [
            "同比 (9%)",
            "调整后利润率 45%"
          ]
        },
        "streaming": {
          "label": "直接面向消费者",
          "notes": [
            "同比 +4%",
            "调整后利润率 (9%)"
          ]
        },
        "gross_revenue": {
          "label": "分部总收入"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (11%)"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 37%"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (17%)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "sga": {
          "label": "销售及管理费用",
          "notes": [
            "占收入 23%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 20%"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 11%"
          ]
        },
        "asset_impairment": {
          "label": "资产减值"
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
                "x": 467.50634765625,
                "top": 308.63232421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (25%)",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 433.8232421875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "影视工作室",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 485.9130859375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "调整后利润率 20%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 644.61181640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 797.865625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "线性网络",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 849.95546875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "调整后利润率 45%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "streaming": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 1015.751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1101.93056640625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "直接面向",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "消费者",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1200.90126953125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "调整后利润率 (9%)",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
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
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#001bad",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (11%)",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1213.693359375,
                "top": 1117.3271484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "抵销",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1657.75927734375,
                "top": 386.76708984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "color": "#009657",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#009657",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 37%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1660.36376953125,
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1905.18603515625,
                "top": 1035.28564453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (17%)",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 2049.7353515625,
                "top": 500.0625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 475.31982421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售及管理费用",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 23%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 700.6083984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "摊销",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 20%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 910.27001953125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "重组费用",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "color": "#777777",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "asset_impairment": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 1121.23388671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "资产",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "减值",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#a21b04",
                    "size": 29.95166015625,
                    "weight": 400
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
