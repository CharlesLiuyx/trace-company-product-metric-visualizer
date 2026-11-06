window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-h1-fy24",
  "name": "Kering · H1 FY24",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering H1 FY24 Income Statement",
    "period": "H1 FY24",
    "periodNote": "Ending June 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-h1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleTextLength": 2135.68359375,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#2d575e",
        "label": "#2d575e"
      },
      "hub": {
        "node": "#2d575e",
        "label": "#2d575e"
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
    "linkOpacity": 1,
    "type": {
      "name": 38,
      "value": 38,
      "note": 28,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "gucci",
      "label": "Gucci",
      "value": 4.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(20%) Y/Y"
      ],
      "valueText": "€4.1B"
    },
    {
      "id": "saint_laurent",
      "label": "Saint Laurent",
      "value": 1.4,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(9%) Y/Y"
      ],
      "valueText": "€1.4B"
    },
    {
      "id": "bottega_veneta",
      "label": "Bottega Veneta",
      "value": 0.8,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+0% Y/Y"
      ],
      "valueText": "€0.8B"
    },
    {
      "id": "other_houses",
      "label": "Other Houses",
      "value": 1.7,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(7%) Y/Y"
      ],
      "valueText": "€1.7B"
    },
    {
      "id": "eyewear_corporate",
      "label": [
        "Kering Eyewear",
        "& Corporate"
      ],
      "value": 1.1,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "+23% Y/Y"
      ],
      "valueText": "€1.1B"
    },
    {
      "id": "segment_hub",
      "label": "",
      "value": 9.1,
      "type": "hub",
      "col": 1,
      "order": 5,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 9,
      "type": "hub",
      "col": 2,
      "order": 6,
      "notes": [
        "(11%) Y/Y"
      ],
      "valueText": "€9.0B"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.1,
      "type": "cost",
      "col": 2,
      "order": 7,
      "notes": [],
      "valueText": "($0.1B)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 6.7,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "74% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "€6.7B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 2.3,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": [],
      "valueText": "(€2.3B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.6,
      "type": "profit",
      "col": 4,
      "order": 10,
      "notes": [
        "17% of revenue",
        "(10pp) Y/Y"
      ],
      "valueText": "€1.6B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 5.1,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [],
      "valueText": "(€5.1B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.9,
      "type": "profit",
      "col": 5,
      "order": 12,
      "notes": [
        "10% of revenue",
        "(8pp) Y/Y"
      ],
      "valueText": "€0.9B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": [],
      "valueText": "(€0.3B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": [],
      "valueText": "(€0.3B)"
    },
    {
      "id": "personnel_expenses",
      "label": [
        "Personnel",
        "expenses"
      ],
      "value": 1.5,
      "type": "cost",
      "col": 5,
      "order": 15,
      "notes": [
        "17% of revenue",
        "+2pp Y/Y"
      ],
      "valueText": "(€1.5B)"
    },
    {
      "id": "other_opex",
      "label": "Other opex",
      "value": 3.6,
      "type": "cost",
      "col": 5,
      "order": 16,
      "notes": [
        "40% of revenue",
        "+5pp Y/Y"
      ],
      "valueText": "(€3.6B)"
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 4.1,
      "sourceWidth": 126.31787109375,
      "targetWidth": 126.31787109375,
      "y0": 488.993408203125,
      "y1": 654.378662109375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99abaf"
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 1.4,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "y0": 688.237060546875,
      "y1": 740.326904296875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99abaf"
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 0.8,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "y0": 838.646484375,
      "y1": 776.138671875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99abaf"
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 1.7,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 993.61376953125,
      "y1": 815.2060546875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#99abaf"
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 1.1,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 1172.021484375,
      "y1": 858.18017578125,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#99abaf"
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 9,
      "sourceWidth": 281.28515625,
      "targetWidth": 279.98291015625,
      "y0": 731.8623046875,
      "y1": 835.390869140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99abaf"
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 873.80712890625,
      "y1": 1105.60693359375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.7,
      "sourceWidth": 208.359375,
      "targetWidth": 208.359375,
      "y0": 799.5791015625,
      "y1": 698.00390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.3,
      "sourceWidth": 71.62353515625,
      "targetWidth": 71.62353515625,
      "y0": 939.570556640625,
      "y1": 1043.750244140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.6,
      "sourceWidth": 48.18310546875,
      "targetWidth": 48.18310546875,
      "y0": 617.915771484375,
      "y1": 537.176513671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.1,
      "sourceWidth": 160.17626953125,
      "targetWidth": 160.17626953125,
      "y0": 722.095458984375,
      "y1": 796.323486328125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "y0": 527.40966796875,
      "y1": 416.71875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 10.41796875,
      "targetWidth": 9.11572265625,
      "y0": 546.943359375,
      "y1": 640.053955078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 9.11572265625,
      "targetWidth": 7.8134765625,
      "y0": 556.710205078125,
      "y1": 763.1162109375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 1.5,
      "sourceWidth": 111.9931640625,
      "targetWidth": 111.9931640625,
      "y0": 772.23193359375,
      "y1": 920.68798828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 3.6,
      "sourceWidth": 48.18310546875,
      "targetWidth": 48.18310546875,
      "y0": 852.320068359375,
      "y1": 1206.531005859375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 31,
    "nodes": {
      "gucci": {
        "x": 440.159,
        "y": 425.834,
        "width": 72.926,
        "height": 126.318
      },
      "saint_laurent": {
        "x": 440.159,
        "y": 665.448,
        "width": 72.926,
        "height": 45.579
      },
      "bottega_veneta": {
        "x": 440.159,
        "y": 825.624,
        "width": 72.926,
        "height": 26.045
      },
      "other_houses": {
        "x": 440.159,
        "y": 967.569,
        "width": 72.926,
        "height": 52.09
      },
      "eyewear_corporate": {
        "x": 440.159,
        "y": 1155.092,
        "width": 72.926,
        "height": 33.858
      },
      "segment_hub": {
        "x": 813.904,
        "y": 591.22,
        "width": 72.926,
        "height": 283.89
      },
      "revenue": {
        "x": 1187.648,
        "y": 695.399,
        "width": 72.926,
        "height": 279.983
      },
      "eliminations": {
        "x": 1190.253,
        "y": 1104.305,
        "width": 72.926,
        "height": 2.604
      },
      "gross_profit": {
        "x": 1557.486,
        "y": 593.824,
        "width": 72.926,
        "height": 208.359
      },
      "cost_of_sales": {
        "x": 1560.091,
        "y": 1007.938,
        "width": 72.926,
        "height": 71.624
      },
      "operating_profit": {
        "x": 1946.858,
        "y": 513.085,
        "width": 72.926,
        "height": 48.183
      },
      "operating_expenses": {
        "x": 1945.556,
        "y": 716.235,
        "width": 72.926,
        "height": 160.176
      },
      "net_profit": {
        "x": 2308.882,
        "y": 402.394,
        "width": 72.926,
        "height": 28.649
      },
      "tax": {
        "x": 2308.882,
        "y": 635.496,
        "width": 72.926,
        "height": 9.116
      },
      "other": {
        "x": 2308.882,
        "y": 759.209,
        "width": 72.926,
        "height": 7.813
      },
      "personnel_expenses": {
        "x": 2308.882,
        "y": 864.691,
        "width": 72.926,
        "height": 111.993
      },
      "other_opex": {
        "x": 2308.882,
        "y": 1182.439,
        "width": 72.926,
        "height": 48.183
      }
    },
    "labels": {
      "gucci": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 332.07275390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(20%) Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "saint_laurent": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 570.3837890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(9%) Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "bottega_veneta": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 729.2578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+0% Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "other_houses": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 872.5048828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(7%) Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              }
            ]
          },
          {
            "x": 222.68408203125,
            "top": 971.4755859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other Houses",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "eyewear_corporate": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 1063.93505859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+23% Y/Y",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#2d575e"
              }
            ]
          },
          {
            "x": 222.68408203125,
            "top": 1126.92265625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Kering Eyewear",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "& Corporate",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "segment_hub": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1222.80908203125,
            "top": 545.64111328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(11%) Y/Y",
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
            "x": 1226.7158203125,
            "top": 1125.140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1592.64697265625,
            "top": 404.99853515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "74% of revenue",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1593.94921875,
            "top": 1095.18896484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
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
            "x": 1984.623046875,
            "top": 320.3525390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "17% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(10pp) Y/Y",
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
            "x": 1984.623046875,
            "top": 893.3408203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 342.49072265625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
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
            "x": 2509.42822265625,
            "top": 599.033203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2509.42822265625,
            "top": 721.4443359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "personnel_expenses": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 864.69140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Personnel",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "17% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2513.3349609375,
            "top": 1161.603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other opex",
                "size": 32.55615234375,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "40% of revenue",
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
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "company",
      "href": "data/assets/raster-annotations/kering/company-h1-fy24.png",
      "x": 682,
      "y": 307,
      "width": 619,
      "height": 78
    },
    {
      "key": "gucci",
      "href": "data/assets/raster-annotations/kering/gucci-h1-fy24.png",
      "x": 60,
      "y": 464,
      "width": 327,
      "height": 60
    },
    {
      "key": "saint-laurent",
      "href": "data/assets/raster-annotations/kering/saint-laurent-h1-fy24.png",
      "x": 26,
      "y": 658,
      "width": 392,
      "height": 53
    },
    {
      "key": "bottega-veneta",
      "href": "data/assets/raster-annotations/kering/bottega-veneta-h1-fy24.png",
      "x": 48,
      "y": 815,
      "width": 353,
      "height": 47
    },
    {
      "key": "owl",
      "href": "data/assets/raster-annotations/kering/owl-h1-fy24.png",
      "x": 900,
      "y": 410,
      "width": 191,
      "height": 104
    }
  ],
  "annotationsSvg": "<text x=\"279\" y=\"256\" font-size=\"39\" font-weight=\"700\" fill=\"#155077\">in euros</text>",
  "i18n": {
    "zh": {
      "name": "开云集团 · 2024 财年上半年",
      "meta": {
        "title": "开云集团 2024 财年上半年利润表",
        "period": "2024 财年上半年",
        "periodNote": "截至 2024 年 6 月",
        "titleTextLength": 1950
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 (20%)"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 (9%)"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 +0%"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 (7%)"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +23%"
          ]
        },
        "segment_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (11%)"
          ]
        },
        "eliminations": {
          "label": "抵销项",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 74%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 17%",
            "同比 (10 个百分点)"
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
            "占收入 10%",
            "同比 (8 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "personnel_expenses": {
          "label": [
            "人员",
            "费用"
          ],
          "notes": [
            "占收入 17%",
            "同比 +2 个百分点"
          ]
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": [
            "占收入 40%",
            "同比 +5 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "gucci": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 332.07275390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (20%)",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "saint_laurent": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 570.3837890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "bottega_veneta": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 729.2578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +0%",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "other_houses": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 872.5048828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  }
                ]
              },
              {
                "x": 222.68408203125,
                "top": 971.4755859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他品牌",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "eyewear_corporate": {
            "blocks": [
              {
                "x": 476.6220703125,
                "top": 1063.93505859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +23%",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#2d575e"
                  }
                ]
              },
              {
                "x": 222.68408203125,
                "top": 1126.92265625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "开云眼镜",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "及公司业务",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "segment_hub": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1222.80908203125,
                "top": 545.64111328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (11%)",
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
                "x": 1226.7158203125,
                "top": 1125.140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1592.64697265625,
                "top": 404.99853515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 74%",
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
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1593.94921875,
                "top": 1095.18896484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
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
                "x": 1984.623046875,
                "top": 320.3525390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (10 个百分点)",
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
                "x": 1984.623046875,
                "top": 893.3408203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 342.49072265625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (8 个百分点)",
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
                "x": 2509.42822265625,
                "top": 599.033203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2509.42822265625,
                "top": 721.4443359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "personnel_expenses": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 864.69140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "人员",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 2513.3349609375,
                "top": 1161.603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 32.55615234375,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 40%",
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
          }
        }
      },
      "annotationsSvg": "<text x=\"279\" y=\"256\" font-size=\"39\" font-weight=\"700\" fill=\"#155077\">单位：欧元</text>"
    }
  }
});
