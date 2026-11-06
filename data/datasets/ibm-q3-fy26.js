window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "ibm-q3-fy26",
  "name": "IBM · Q3 FY26",
  "company": "IBM",
  "meta": {
    "company": "IBM",
    "title": "IBM Q3 FY26 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/ibm-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1958,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 430,
    "logoHeight": 183,
    "logoY": 300,
    "logoViewBox": "0 0 460 210",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).ibmLogo || '',
    "hidePeriodStamp": true,
    "logoX": 675
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#1f70c1",
        "label": "#2074c7"
      },
      "hub": {
        "node": "#1f70c1",
        "label": "#2074c7"
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
      "source": "#93b7db",
      "hub": "#93b7db",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 38,
      "note": 28,
      "lineGap": 8
    }
  },
  "layout": {
    "scale": 1,
    "nodes": {
      "software": {
        "x": 390,
        "y": 383,
        "width": 72,
        "height": 168
      },
      "consulting": {
        "x": 390,
        "y": 670,
        "width": 72,
        "height": 114
      },
      "infrastructure": {
        "x": 390,
        "y": 901,
        "width": 72,
        "height": 78
      },
      "financing": {
        "x": 390,
        "y": 1099,
        "width": 72,
        "height": 3
      },
      "other_revenue": {
        "x": 390,
        "y": 1215,
        "width": 72,
        "height": 1
      },
      "revenue": {
        "x": 858,
        "y": 732,
        "width": 71,
        "height": 369
      },
      "gross_profit": {
        "x": 1324,
        "y": 584,
        "width": 72,
        "height": 209
      },
      "cost_of_revenue": {
        "x": 1324,
        "y": 1042,
        "width": 72,
        "height": 159
      },
      "intellectual_property": {
        "x": 1525,
        "y": 967,
        "width": 72,
        "height": 3
      },
      "other_income": {
        "x": 1527,
        "y": 1116,
        "width": 72,
        "height": 2
      },
      "operating_profit": {
        "x": 1792,
        "y": 485,
        "width": 72,
        "height": 63
      },
      "operating_expenses": {
        "x": 1792,
        "y": 782,
        "width": 72,
        "height": 151
      },
      "net_profit": {
        "x": 2259,
        "y": 357,
        "width": 72,
        "height": 47
      },
      "interest": {
        "x": 2259,
        "y": 633,
        "width": 72,
        "height": 9
      },
      "tax": {
        "x": 2259,
        "y": 757,
        "width": 72,
        "height": 5
      },
      "sga": {
        "x": 2259,
        "y": 962,
        "width": 72,
        "height": 99
      },
      "rnd": {
        "x": 2259,
        "y": 1218,
        "width": 72,
        "height": 50
      }
    },
    "labels": {
      "software": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 286.4583333333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 429.6875,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Software",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "83% gross margin",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "consulting": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 572.9166666666666,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 690.1041666666666,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Consulting",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "27% gross margin",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "infrastructure": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 802.0833333333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 901.0416666666666,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Infrastructure",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "57% gross margin",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "financing": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 1001.3020833333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 1061.1979166666665,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Financing",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "41% gross margin",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 428.43896484375,
            "top": 1153.6458333333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 260.44921875,
            "top": 1192.19375,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 893.3408203125,
            "top": 582.03125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
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
            "x": 1360.84716796875,
            "top": 394.53125,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "57% margin",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1360.84716796875,
            "top": 1217.4479166666665,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.16064453125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33.8583984375,
                "weight": 400
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
      "intellectual_property": {
        "blocks": [
          {
            "x": 1562.6953125,
            "top": 983.0729166666666,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Intellectual",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "property",
                "size": 29.95166015625,
                "weight": 400
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
      "other_income": {
        "blocks": [
          {
            "x": 1562.6953125,
            "top": 1131.5104166666665,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "income",
                "size": 29.95166015625,
                "weight": 400
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1827.05126953125,
            "top": 289.875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "17% margin",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1828.353515625,
            "top": 949.21875,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2445.6181640625,
            "top": 317.7083333333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+2pp Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2446.92041015625,
            "top": 597.65625,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25390625,
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
      "tax": {
        "blocks": [
          {
            "x": 2446.92041015625,
            "top": 717.4479166666666,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
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
      "sga": {
        "blocks": [
          {
            "x": 2446.92041015625,
            "top": 958.3333333333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "27% of revenue",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 2446.92041015625,
            "top": 1200.5208333333333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "14% of revenue",
                "size": 29.95166015625,
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
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
      "id": "software",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Software",
      "value": 7.8,
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#1f70c1",
      "labelColor": "#2074c7",
      "linkTint": "#93b7db"
    },
    {
      "id": "consulting",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Consulting",
      "value": 5.3,
      "notes": [
        "+0% Y/Y"
      ],
      "color": "#1f70c1",
      "labelColor": "#2074c7",
      "linkTint": "#93b7db"
    },
    {
      "id": "infrastructure",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Infrastructure",
      "value": 3.7,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#1f70c1",
      "labelColor": "#2074c7",
      "linkTint": "#93b7db"
    },
    {
      "id": "financing",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Financing",
      "value": 0.2,
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#1f70c1",
      "labelColor": "#2074c7",
      "linkTint": "#93b7db"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Other",
      "value": 0.1,
      "notes": [],
      "color": "#1f70c1",
      "labelColor": "#2074c7",
      "linkTint": "#93b7db"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 17.1,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#1f70c1",
      "labelColor": "#2074c7"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.7,
      "notes": [
        "57% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 7.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "intellectual_property",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": [
        "Intellectual",
        "property"
      ],
      "value": 0.2,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other_income",
      "col": 3,
      "order": 1,
      "type": "profit",
      "label": "Other income",
      "value": 0.1,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 3,
      "notes": [
        "17% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$3.0B"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($6.7B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 2.2,
      "notes": [
        "13% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "interest",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Interest",
      "value": 0.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sga",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 4.6,
      "notes": [
        "27% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "R&D",
      "value": 2.4,
      "notes": [
        "14% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "software",
      "target": "revenue",
      "value": 7.8,
      "sourceWidth": 168,
      "targetWidth": 169,
      "y0": 467,
      "y1": 816.5,
      "linkTint": "#93b7db"
    },
    {
      "source": "consulting",
      "target": "revenue",
      "value": 5.3,
      "sourceWidth": 114,
      "targetWidth": 115,
      "y0": 727,
      "y1": 958.5,
      "linkTint": "#93b7db"
    },
    {
      "source": "infrastructure",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 78,
      "targetWidth": 79,
      "y0": 940,
      "y1": 1055.5,
      "linkTint": "#93b7db"
    },
    {
      "source": "financing",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 4,
      "y0": 1100.5,
      "y1": 1097,
      "linkTint": "#93b7db"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 2,
      "y0": 1215.5,
      "y1": 1100,
      "linkTint": "#93b7db"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.7,
      "sourceWidth": 209,
      "targetWidth": 209,
      "y0": 836.5,
      "y1": 688.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 7.4,
      "sourceWidth": 160,
      "targetWidth": 159,
      "y0": 1021,
      "y1": 1121.5,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3,
      "sourceWidth": 64,
      "targetWidth": 63,
      "y0": 616,
      "y1": 516.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.7,
      "sourceWidth": 145,
      "targetWidth": 145,
      "y0": 720.5,
      "y1": 854.5,
      "linkTint": "#e08585"
    },
    {
      "source": "intellectual_property",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 968.5,
      "y1": 928.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "other_income",
      "target": "operating_expenses",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 3,
      "y0": 1117,
      "y1": 931.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.2,
      "sourceWidth": 47,
      "targetWidth": 47,
      "y0": 508.5,
      "y1": 380.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.5,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 536.5,
      "y1": 637.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 7,
      "targetWidth": 5,
      "y0": 544.5,
      "y1": 759.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 4.6,
      "sourceWidth": 99,
      "targetWidth": 99,
      "y0": 831.5,
      "y1": 1011.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.4,
      "sourceWidth": 52,
      "targetWidth": 50,
      "y0": 907,
      "y1": 1243,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "IBM · 2026 财年第三季度",
      "meta": {
        "title": "IBM 2026 财年第三季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1958
      },
      "nodes": {
        "software": {
          "label": "软件",
          "notes": [
            "同比 +8%"
          ]
        },
        "consulting": {
          "label": "咨询",
          "notes": [
            "同比 +0%"
          ]
        },
        "infrastructure": {
          "label": "基础设施",
          "notes": [
            "同比 +4%"
          ]
        },
        "financing": {
          "label": "融资",
          "notes": [
            "同比 (4%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 57%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入"
        },
        "intellectual_property": {
          "label": "知识产权"
        },
        "other_income": {
          "label": "其他收入"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 (0 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 13%",
            "同比 +2 个百分点"
          ]
        },
        "interest": {
          "label": "利息"
        },
        "tax": {
          "label": "税费"
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 27%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 14%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "software": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 286.4583333333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 429.6875,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "软件",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 83%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "consulting": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 572.9166666666666,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 690.1041666666666,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "咨询",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 27%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "infrastructure": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 802.0833333333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 901.0416666666666,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "基础设施",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 57%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "financing": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 1001.3020833333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 1061.1979166666665,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "融资",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 41%",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 428.43896484375,
                "top": 1153.6458333333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 260.44921875,
                "top": 1192.19375,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 893.3408203125,
                "top": 582.03125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
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
                "x": 1360.84716796875,
                "top": 394.53125,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 57%",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1360.84716796875,
                "top": 1217.4479166666665,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35.16064453125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33.8583984375,
                    "weight": 400
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
          "intellectual_property": {
            "blocks": [
              {
                "x": 1562.6953125,
                "top": 983.0729166666666,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "知识产权",
                    "size": 31.25390625,
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
          "other_income": {
            "blocks": [
              {
                "x": 1562.6953125,
                "top": 1131.5104166666665,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 31.25390625,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1827.05126953125,
                "top": 289.875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 17%",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1828.353515625,
                "top": 949.21875,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2485.6181640625,
                "top": 317.7083333333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2446.92041015625,
                "top": 597.65625,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25390625,
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
          "tax": {
            "blocks": [
              {
                "x": 2446.92041015625,
                "top": 717.4479166666666,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
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
          "sga": {
            "blocks": [
              {
                "x": 2471.92041015625,
                "top": 958.3333333333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 27%",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 2446.92041015625,
                "top": 1200.5208333333333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "占收入 14%",
                    "size": 29.95166015625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
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
});
