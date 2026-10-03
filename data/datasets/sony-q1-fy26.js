(function () {
function annotations(unit) { return `<g font-family="Noto Sans,Arial,sans-serif"><text x="58" y="260" font-size="40" font-weight="800" fill="#155077">${unit}</text><g transform="translate(798 327)" data-typography-role="brand">${(window.SANKEY_BUSINESS_ICONS || {}).sonyCompanyWordmark || ''}</g></g>`; }
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "sony-q1-fy26",
  "name": "Sony · Q1 FY26",
  "company": "Sony",
  "meta": {
    "company": "Sony",
    "title": "Sony Q1 FY26 Income Statement",
    "period": "Q1 FY26",
    "periodNote": "Ending June 2026",
    "currency": "¥",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processing/sony-q1-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 198,
    "titleSize": 132,
    "titleWeight": 800,
    "titleTextLength": 2024,
    "periodX": 2480,
    "periodY": 251,
    "periodNoteY": 293
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#5e5e5e",
    "noteColor": "#797979",
    "interfaceAudit": {
      "mode": "error"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "layout": {
    "nodes": {
      "game_network": {
        "x": 438,
        "y": 396,
        "width": 71,
        "height": 98
      },
      "music": {
        "x": 438,
        "y": 625,
        "width": 71,
        "height": 58
      },
      "pictures": {
        "x": 438,
        "y": 807,
        "width": 71,
        "height": 31
      },
      "technology": {
        "x": 438,
        "y": 967,
        "width": 71,
        "height": 56
      },
      "imaging_sensing": {
        "x": 438,
        "y": 1143,
        "width": 71,
        "height": 53
      },
      "other_revenue": {
        "x": 438,
        "y": 1309,
        "width": 71,
        "height": 2
      },
      "eliminations": {
        "x": 1186,
        "y": 1067,
        "width": 70,
        "height": 3
      },
      "revenue": {
        "x": 1186,
        "y": 668,
        "width": 70,
        "height": 300
      },
      "gross_profit": {
        "x": 1559,
        "y": 575,
        "width": 71,
        "height": 109
      },
      "cost_of_sales": {
        "x": 1559,
        "y": 860,
        "width": 71,
        "height": 189
      },
      "operating_profit": {
        "x": 1933,
        "y": 499,
        "width": 71,
        "height": 49
      },
      "operating_expenses": {
        "x": 1933,
        "y": 710,
        "width": 71,
        "height": 59
      },
      "net_profit": {
        "x": 2306,
        "y": 435,
        "width": 71,
        "height": 35
      },
      "tax": {
        "x": 2306,
        "y": 625,
        "width": 71,
        "height": 13
      },
      "sga": {
        "x": 2306,
        "y": 805,
        "width": 71,
        "height": 59
      },
      "segment_sales": {
        "x": 812,
        "y": 594,
        "width": 70,
        "height": 306
      }
    },
    "labels": {
      "segment_sales": {
        "blocks": []
      },
      "game_network": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 303.84130859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#d95f02",
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 404.63037109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Game & Network",
                "size": 39.0673828125,
                "color": "#d95f02",
                "weight": 800
              },
              {
                "text": "22% operating margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "music": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 531.734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#e7298a",
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 613.63037109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Music",
                "size": 39.0673828125,
                "color": "#e7298a",
                "weight": 800
              },
              {
                "text": "19% operating margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "pictures": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 714.048828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#bf9b30",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 782.13037109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Pictures",
                "size": 39.0673828125,
                "color": "#bf9b30",
                "weight": 800
              },
              {
                "text": "8% operating margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 874.22509765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#27445c",
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 954.63037109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Technology",
                "size": 39.0673828125,
                "color": "#27445c",
                "weight": 800
              },
              {
                "text": "8% operating margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "imaging_sensing": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 1051.12158203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#023020",
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 1129.13037109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Imaging & Sensing",
                "size": 37.76513671875,
                "color": "#023020",
                "weight": 800
              },
              {
                "text": "24% operating margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 1217.80908203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#7f7f7f",
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          },
          {
            "x": 384.16259765625,
            "top": 1289.1640625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "color": "#7f7f7f",
                "weight": 800
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1221.5068359375,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Elimination",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1218.90234375,
            "top": 523.5029296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Sales",
                "size": 39.0673828125,
                "color": "#000000",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#000000",
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1595.25146484375,
            "top": 394.58056640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "37% margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1593.94921875,
            "top": 1075.6552734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1966.3916015625,
            "top": 317.748046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "17% margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1966.3916015625,
            "top": 795.67236328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2488.77880859375,
            "top": 385.46484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "color": "#797979",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480.77880859375,
            "top": 593.82421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
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
            "top": 809.9970703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
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
      "id": "game_network",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Game & Network",
      "value": 937,
      "valueText": "¥937B",
      "notes": [
        "+0% Y/Y",
        "22% operating margin"
      ],
      "color": "#d95f02",
      "labelColor": "#d95f02",
      "linkTint": "#e6af86"
    },
    {
      "id": "music",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Music",
      "value": 562,
      "valueText": "¥562B",
      "notes": [
        "+21% Y/Y",
        "19% operating margin"
      ],
      "color": "#e7298a",
      "labelColor": "#e7298a",
      "linkTint": "#ed97c2"
    },
    {
      "id": "pictures",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Pictures",
      "value": 315,
      "valueText": "¥315B",
      "notes": [
        "(4%) Y/Y",
        "8% operating margin"
      ],
      "color": "#bf9b30",
      "labelColor": "#bf9b30",
      "linkTint": "#dbca9b"
    },
    {
      "id": "technology",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Technology",
      "value": 544,
      "valueText": "¥544B",
      "notes": [
        "+2% Y/Y",
        "8% operating margin"
      ],
      "color": "#27445c",
      "labelColor": "#27445c",
      "linkTint": "#97a4ae"
    },
    {
      "id": "imaging_sensing",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Imaging & Sensing",
      "value": 513,
      "valueText": "¥513B",
      "notes": [
        "+26% Y/Y",
        "24% operating margin"
      ],
      "color": "#023020",
      "labelColor": "#023020",
      "linkTint": "#869b93"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Other",
      "value": 22,
      "valueText": "¥22B",
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#7f7f7f",
      "labelColor": "#7f7f7f",
      "linkTint": "#cfcfcf"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 6,
      "type": "cost",
      "label": "Elimination",
      "value": 55,
      "valueText": "(¥55B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 7,
      "type": "hub",
      "label": "Sales",
      "value": 2838,
      "valueText": "¥2,838B",
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Gross profit",
      "value": 1042,
      "valueText": "¥1,042B",
      "notes": [
        "37% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Cost of sales",
      "value": 1796,
      "valueText": "(¥1,796B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 10,
      "type": "profit",
      "label": "Operating profit",
      "value": 477,
      "valueText": "¥477B",
      "notes": [
        "17% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Operating expenses",
      "value": 565,
      "valueText": "(¥565B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 12,
      "type": "profit",
      "label": "Net profit",
      "value": 350,
      "valueText": "¥350B",
      "notes": [
        "12% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 13,
      "type": "cost",
      "label": "Tax & Other",
      "value": 127,
      "valueText": "(¥127B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sga",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": "SG&A & Other",
      "value": 565,
      "valueText": "(¥565B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "segment_sales",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 2893,
      "color": "#000000",
      "linkTint": "#858585"
    }
  ],
  "links": [
    {
      "source": "game_network",
      "target": "segment_sales",
      "value": 937,
      "sourceWidth": 98,
      "targetWidth": 100,
      "targetOrder": 0,
      "linkTint": "#e6af86"
    },
    {
      "source": "music",
      "target": "segment_sales",
      "value": 562,
      "sourceWidth": 58,
      "targetWidth": 59,
      "targetOrder": 1,
      "linkTint": "#ed97c2"
    },
    {
      "source": "pictures",
      "target": "segment_sales",
      "value": 315,
      "sourceWidth": 31,
      "targetWidth": 33,
      "targetOrder": 2,
      "linkTint": "#dbca9b"
    },
    {
      "source": "technology",
      "target": "segment_sales",
      "value": 544,
      "sourceWidth": 56,
      "targetWidth": 58,
      "targetOrder": 3,
      "linkTint": "#97a4ae"
    },
    {
      "source": "imaging_sensing",
      "target": "segment_sales",
      "value": 513,
      "sourceWidth": 53,
      "targetWidth": 54,
      "targetOrder": 4,
      "linkTint": "#869b93"
    },
    {
      "source": "other_revenue",
      "target": "segment_sales",
      "value": 22,
      "sourceWidth": 2,
      "targetWidth": 2,
      "targetOrder": 5,
      "linkTint": "#cfcfcf"
    },
    {
      "source": "segment_sales",
      "target": "revenue",
      "value": 2838,
      "sourceWidth": 300,
      "targetWidth": 300,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "segment_sales",
      "target": "eliminations",
      "value": 55,
      "sourceWidth": 6,
      "targetWidth": 3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1042,
      "sourceWidth": 109,
      "targetWidth": 109,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 1796,
      "sourceWidth": 191,
      "targetWidth": 189,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 477,
      "sourceWidth": 50,
      "targetWidth": 49,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 565,
      "sourceWidth": 59,
      "targetWidth": 59,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 350,
      "sourceWidth": 36,
      "targetWidth": 35,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 127,
      "sourceWidth": 13,
      "targetWidth": 13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 565,
      "sourceWidth": 59,
      "targetWidth": 59,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "annotationsSvg": annotations("以日元计"),
      "name": "Sony · 2026 财年第一季度",
      "meta": {
        "title": "Sony 2026 财年第一季度利润表",
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 6 月",
        "titleTextLength": 1660
      },
      "nodes": {
        "game_network": {
          "label": "游戏与网络",
          "notes": [
            "同比 +0%",
            "营业利润率 22%"
          ]
        },
        "music": {
          "label": "音乐",
          "notes": [
            "同比 +21%",
            "营业利润率 19%"
          ]
        },
        "pictures": {
          "label": "影视",
          "notes": [
            "同比 (4%)",
            "营业利润率 8%"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "同比 +2%",
            "营业利润率 8%"
          ]
        },
        "imaging_sensing": {
          "label": "成像与传感",
          "notes": [
            "同比 +26%",
            "营业利润率 24%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +15%"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 +8%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 37%",
            "同比 +4 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 12%",
            "同比 +2 个百分点"
          ]
        },
        "tax": {
          "label": "税费及其他",
          "notes": []
        },
        "sga": {
          "label": "销管费用（SG&A）及其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "segment_sales": {
            "blocks": []
          },
          "game_network": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 303.84130859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#d95f02",
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 404.63037109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "游戏与网络",
                    "size": 39.0673828125,
                    "color": "#d95f02",
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 22%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "music": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 531.734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#e7298a",
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 613.63037109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "音乐",
                    "size": 39.0673828125,
                    "color": "#e7298a",
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 19%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "pictures": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 714.048828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#bf9b30",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 782.13037109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "影视",
                    "size": 39.0673828125,
                    "color": "#bf9b30",
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 8%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 874.22509765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#27445c",
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 954.63037109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "技术",
                    "size": 39.0673828125,
                    "color": "#27445c",
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 8%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "imaging_sensing": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 1051.12158203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#023020",
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 1129.13037109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "成像与传感",
                    "size": 37.76513671875,
                    "color": "#023020",
                    "weight": 800
                  },
                  {
                    "text": "营业利润率 24%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 1217.80908203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#7f7f7f",
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 384.16259765625,
                "top": 1289.1640625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "color": "#7f7f7f",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1221.5068359375,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1218.90234375,
                "top": 523.5029296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售额",
                    "size": 39.0673828125,
                    "color": "#000000",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#000000",
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1595.25146484375,
                "top": 394.58056640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 37%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1593.94921875,
                "top": 1075.6552734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1966.3916015625,
                "top": 317.748046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 17%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1966.3916015625,
                "top": 795.67236328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2488.77880859375,
                "top": 385.46484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "color": "#797979",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2480.77880859375,
                "top": 593.82421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费及其他",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
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
                "top": 809.9970703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销管费用",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "SG&A 及其他",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "annotationsSvg": annotations("in yen")
});
})();
