(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "didi-q2-fy26",
  "name": "DiDi · Q2 FY26",
  "company": "DiDi",
  "meta": {
    "company": "DiDi",
    "title": "Didi Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "currency": "",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/didi-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 125,
    "titleWeight": 800,
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
    "titleColor": "#155077",
    "noteColor": "#818181",
    "palette": {
      "source": {
        "node": "#ff7d41",
        "label": "#5a5a5a"
      },
      "hub": {
        "node": "#ff7d41",
        "label": "#5a5a5a"
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
      "source": "#f7bca2",
      "hub": "#f7bca2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36,
      "value": 34,
      "note": 26,
      "lineGap": 10
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "china_mobility",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "China Mobility",
      "value": 54.8,
      "valueText": "54.8B",
      "notes": [
        "+9% Y/Y",
        "8% adjusted margin",
        "+0pp Y/Y"
      ],
      "color": "#ff7d41",
      "labelColor": "#5a5a5a",
      "linkTint": "#f7bca2"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 5.1,
      "valueText": "5.1B",
      "notes": [
        "+50% Y/Y",
        "(56%) adjusted margin",
        "(34pp) Y/Y"
      ],
      "color": "#ff7d41",
      "labelColor": "#5a5a5a",
      "linkTint": "#f7bca2"
    },
    {
      "id": "other_initiatives",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Other initiatives",
      "value": 2.6,
      "valueText": "2.6B",
      "notes": [
        "(2%) Y/Y",
        "(28%) adjusted margin",
        "(14pp) Y/Y"
      ],
      "color": "#ff7d41",
      "labelColor": "#5a5a5a",
      "linkTint": "#f7bca2"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Revenue",
      "value": 62.5,
      "valueText": "62.5B",
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#ff7d41",
      "labelColor": "#5a5a5a",
      "linkTint": "#f7bca2"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 4,
      "type": "profit",
      "label": "Gross profit",
      "value": 12.6,
      "valueText": "12.6B",
      "notes": [
        "20% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 49.9,
      "valueText": "(49.9B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 6,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.0,
      "valueText": "1.0B",
      "notes": [
        "2% margin",
        "+7pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 12.8,
      "valueText": "(12.8B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_other",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Other",
      "value": 1.2,
      "valueText": "1.2B",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other_income",
      "col": 3,
      "order": 9,
      "type": "profit",
      "label": "Other",
      "value": 0.6,
      "valueText": "0.6B",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 10,
      "type": "profit",
      "label": "Net profit",
      "value": 0.9,
      "valueText": "0.9B",
      "notes": [
        "1% margin",
        "+6pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "Tax",
      "value": 0.7,
      "valueText": "(0.7B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "S&M",
      "value": 5.4,
      "valueText": "(5.4B)",
      "notes": [
        "9% of revenue",
        "+5pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operations",
      "col": 5,
      "order": 13,
      "type": "cost",
      "label": "Operations",
      "value": 2.5,
      "valueText": "(2.5B)",
      "notes": [
        "4% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": "R&D",
      "value": 2.4,
      "valueText": "(2.4B)",
      "notes": [
        "4% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 15,
      "type": "cost",
      "label": "G&A",
      "value": 2.4,
      "valueText": "(2.4B)",
      "notes": [
        "4% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "china_mobility",
      "target": "revenue",
      "value": 54.8,
      "width": 296,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f7bca2",
      "targetWidth": 293
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 5.1,
      "width": 29,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f7bca2",
      "targetWidth": 29
    },
    {
      "source": "other_initiatives",
      "target": "revenue",
      "value": 2.6,
      "width": 15,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f7bca2",
      "targetWidth": 15
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 12.6,
      "width": 69,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 49.9,
      "width": 268,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 269
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1,
      "width": 6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 11.6,
      "width": 63,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_other",
      "target": "operating_expenses",
      "value": 1.2,
      "width": 6,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 5.4,
      "width": 29,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 29
    },
    {
      "source": "operating_expenses",
      "target": "operations",
      "value": 2.5,
      "width": 13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 13
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.4,
      "width": 13,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 13
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 2.4,
      "width": 14,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 13
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.3,
      "width": 2.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "targetWidth": 2
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.7,
      "width": 3.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 5
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.6,
      "width": 3,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    }
  ],
  "layout": {
    "nodes": {
      "china_mobility": {
        "x": 397,
        "y": 501,
        "width": 72,
        "height": 296
      },
      "international": {
        "x": 397,
        "y": 940,
        "width": 72,
        "height": 29
      },
      "other_initiatives": {
        "x": 397,
        "y": 1105,
        "width": 72,
        "height": 15
      },
      "revenue": {
        "x": 864,
        "y": 648,
        "width": 72,
        "height": 337
      },
      "gross_profit": {
        "x": 1331,
        "y": 519,
        "width": 72,
        "height": 69
      },
      "cost_of_revenue": {
        "x": 1331,
        "y": 844,
        "width": 72,
        "height": 269
      },
      "operating_profit": {
        "x": 1799,
        "y": 440,
        "width": 72,
        "height": 6
      },
      "operating_expenses": {
        "x": 1799,
        "y": 631,
        "width": 72,
        "height": 69
      },
      "operating_other": {
        "x": 1574,
        "y": 734,
        "width": 72,
        "height": 6
      },
      "other_income": {
        "x": 2154,
        "y": 399,
        "width": 72,
        "height": 3
      },
      "net_profit": {
        "x": 2265,
        "y": 354,
        "width": 72,
        "height": 5
      },
      "tax": {
        "x": 2265,
        "y": 580,
        "width": 72,
        "height": 5
      },
      "sm": {
        "x": 2265,
        "y": 752,
        "width": 72,
        "height": 29
      },
      "operations": {
        "x": 2265,
        "y": 943,
        "width": 72,
        "height": 13
      },
      "rnd": {
        "x": 2265,
        "y": 1111,
        "width": 72,
        "height": 13
      },
      "ga": {
        "x": 2265,
        "y": 1278,
        "width": 72,
        "height": 13
      }
    },
    "labels": {
      "china_mobility": {
        "blocks": [
          {
            "x": 436.25,
            "top": 402.39,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "54.8B",
                "size": 36.46,
                "weight": 400,
                "color": "#5a5a5a"
              },
              {
                "text": "+9% Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          },
          {
            "x": 221.38,
            "top": 649.82,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "China Mobility",
                "size": 36.46,
                "weight": 800,
                "color": "#5a5a5a"
              },
              {
                "text": "8% adjusted margin",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 438.86,
            "top": 841.25,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "5.1B",
                "size": 36.46,
                "weight": 400,
                "color": "#5a5a5a"
              },
              {
                "text": "+50% Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          },
          {
            "x": 213.57,
            "top": 892.04,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "International",
                "size": 36.46,
                "weight": 800,
                "color": "#5a5a5a"
              },
              {
                "text": "(56%) adjusted margin",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(34pp) Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "other_initiatives": {
        "blocks": [
          {
            "x": 438.86,
            "top": 1005.33,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "2.6B",
                "size": 36.46,
                "weight": 400,
                "color": "#5a5a5a"
              },
              {
                "text": "(2%) Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          },
          {
            "x": 207.06,
            "top": 1045.7,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Other initiatives",
                "size": 36.46,
                "weight": 800,
                "color": "#5a5a5a"
              },
              {
                "text": "(28%) adjusted margin",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(14pp) Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 899.85,
            "top": 493.55,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.46,
                "weight": 800,
                "color": "#5a5a5a"
              },
              {
                "text": "62.5B",
                "size": 33.86,
                "weight": 400,
                "color": "#5a5a5a"
              },
              {
                "text": "+11% Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1367.36,
            "top": 325.56,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.46,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "12.6B",
                "size": 33.86,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "20% margin",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1367.36,
            "top": 1125.14,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.86,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 33.86,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "(49.9B)",
                "size": 33.86,
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
            "x": 1834.86,
            "top": 247.43,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.46,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "1.0B",
                "size": 33.86,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "2% margin",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+7pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1834.86,
            "top": 713.63,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating",
                "size": 36.46,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36.46,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "(12.8B)",
                "size": 36.46,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_other": {
        "blocks": [
          {
            "x": 1609.58,
            "top": 752.7,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Other",
                "size": 29.95,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "1.2B",
                "size": 29.95,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2191.68,
            "top": 416.72,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Other",
                "size": 29.95,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "0.6B",
                "size": 29.95,
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
            "x": 2491.2,
            "top": 295.61,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.46,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "0.9B",
                "size": 33.86,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "1% margin",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+6pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2491.2,
            "top": 541.73,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Tax",
                "size": 33.86,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "(0.7B)",
                "size": 33.86,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2491.2,
            "top": 747.49,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "S&M (5.4B)",
                "size": 29.95,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "9% of revenue",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+5pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "operations": {
        "blocks": [
          {
            "x": 2491.2,
            "top": 928.5,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operations (2.5B)",
                "size": 29.95,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "4% of revenue",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2491.2,
            "top": 1097.79,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "R&D (2.4B)",
                "size": 29.95,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "4% of revenue",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2491.2,
            "top": 1263.18,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "G&A (2.4B)",
                "size": 29.95,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "4% of revenue",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.04,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "transactions",
      "value": "5100000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "5.1B"
    },
    {
      "id": "core_gtv",
      "value": "133.9",
      "unit": "B",
      "currency": "CNY",
      "comparison": "eq",
      "literal": "RMB 133.9B"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"328\" y=\"276\" font-size=\"39\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#155077\">in RMB</text><rect x=\"154\" y=\"1196\" width=\"260\" height=\"150\" rx=\"30\" fill=\"#ff7d41\"/><text x=\"284.0\" y=\"1249\" font-size=\"28\" font-weight=\"800\" text-anchor=\"middle\" fill=\"white\">Transactions</text><text data-operating-metric=\"transactions\" x=\"284.0\" y=\"1289\" font-size=\"27\" text-anchor=\"middle\" fill=\"white\">5.1B</text><text x=\"284.0\" y=\"1320\" font-size=\"22\" text-anchor=\"middle\" fill=\"white\">+13% Y/Y</text><rect x=\"426\" y=\"1196\" width=\"241\" height=\"150\" rx=\"30\" fill=\"#ff7d41\"/><text x=\"546.5\" y=\"1249\" font-size=\"28\" font-weight=\"800\" text-anchor=\"middle\" fill=\"white\">Core GTV</text><text data-operating-metric=\"core_gtv\" x=\"546.5\" y=\"1289\" font-size=\"27\" text-anchor=\"middle\" fill=\"white\">RMB 133.9B</text><text x=\"546.5\" y=\"1320\" font-size=\"22\" text-anchor=\"middle\" fill=\"white\">+22% Y/Y</text><text x=\"677\" y=\"1283\" font-size=\"27\" fill=\"#818181\">GTV = Gross Transaction Value</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/didi/company-logo.png",
      "x": 565,
      "y": 262,
      "width": 530,
      "height": 172
    },
    {
      "key": "china-mobility-tile",
      "href": "data/assets/raster-annotations/didi/china-mobility-tile.png",
      "x": 150,
      "y": 497,
      "width": 154,
      "height": 154
    }
  ],
  "i18n": {
    "zh": {
      "name": "滴滴 · 2026 财年第二季度",
      "meta": {
        "title": "Didi 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 109
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"328\" y=\"276\" font-size=\"39\" font-weight=\"800\" text-anchor=\"middle\" fill=\"#155077\">单位：人民币</text><rect x=\"154\" y=\"1196\" width=\"260\" height=\"150\" rx=\"30\" fill=\"#ff7d41\"/><text x=\"284.0\" y=\"1249\" font-size=\"28\" font-weight=\"800\" text-anchor=\"middle\" fill=\"white\">交易笔数</text><text data-operating-metric=\"transactions\" x=\"284.0\" y=\"1289\" font-size=\"27\" text-anchor=\"middle\" fill=\"white\">5.1B</text><text x=\"284.0\" y=\"1320\" font-size=\"22\" text-anchor=\"middle\" fill=\"white\">同比 +13%</text><rect x=\"426\" y=\"1196\" width=\"241\" height=\"150\" rx=\"30\" fill=\"#ff7d41\"/><text x=\"546.5\" y=\"1249\" font-size=\"28\" font-weight=\"800\" text-anchor=\"middle\" fill=\"white\">核心 GTV</text><text data-operating-metric=\"core_gtv\" x=\"546.5\" y=\"1289\" font-size=\"27\" text-anchor=\"middle\" fill=\"white\">RMB 133.9B</text><text x=\"546.5\" y=\"1320\" font-size=\"22\" text-anchor=\"middle\" fill=\"white\">同比 +22%</text><text x=\"677\" y=\"1283\" font-size=\"27\" fill=\"#818181\">GTV = 交易总额</text></g>",
      "nodes": {
        "china_mobility": {
          "label": "中国出行",
          "notes": [
            "同比 +9%",
            "经调整利润率 8%",
            "同比 +0 个百分点"
          ]
        },
        "international": {
          "label": "国际业务",
          "notes": [
            "同比 +50%",
            "经调整利润率 (56%)",
            "同比 (34 个百分点)"
          ]
        },
        "other_initiatives": {
          "label": "其他新业务",
          "notes": [
            "同比 (2%)",
            "经调整利润率 (28%)",
            "同比 (14 个百分点)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 20%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +7 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "operating_other": {
          "label": "其他",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 +6 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售营销 S&M",
          "notes": [
            "占收入 9%",
            "同比 +5 个百分点"
          ]
        },
        "operations": {
          "label": "运营",
          "notes": [
            "占收入 4%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发 R&D",
          "notes": [
            "占收入 4%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "行政 G&A",
          "notes": [
            "占收入 4%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "china_mobility": {
            "blocks": [
              {
                "x": 436.25,
                "top": 402.39,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "54.8B",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              },
              {
                "x": 221.38,
                "top": 649.82,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "中国出行",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "经调整利润率 8%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 438.86,
                "top": 841.25,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "5.1B",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "同比 +50%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              },
              {
                "x": 213.57,
                "top": 892.04,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "国际业务",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "经调整利润率 (56%)",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (34 个百分点)",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "other_initiatives": {
            "blocks": [
              {
                "x": 438.86,
                "top": 1005.33,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "2.6B",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              },
              {
                "x": 207.06,
                "top": 1045.7,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "其他新业务",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "经调整利润率 (28%)",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (14 个百分点)",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 899.85,
                "top": 493.55,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "62.5B",
                    "size": 33.86,
                    "weight": 400,
                    "color": "#5a5a5a"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1367.36,
                "top": 325.56,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "12.6B",
                    "size": 33.86,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 20%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1367.36,
                "top": 1125.14,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33.86,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 33.86,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "(49.9B)",
                    "size": 33.86,
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
                "x": 1834.86,
                "top": 247.43,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "1.0B",
                    "size": 33.86,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 2%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1834.86,
                "top": 713.63,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "(12.8B)",
                    "size": 36.46,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_other": {
            "blocks": [
              {
                "x": 1609.58,
                "top": 752.7,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "1.2B",
                    "size": 29.95,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2191.68,
                "top": 416.72,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "0.6B",
                    "size": 29.95,
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
                "x": 2491.2,
                "top": 295.61,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.46,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "0.9B",
                    "size": 33.86,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 1%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2491.2,
                "top": 541.73,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "税费",
                    "size": 33.86,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "(0.7B)",
                    "size": 33.86,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2491.2,
                "top": 747.49,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "销售营销 S&M (5.4B)",
                    "size": 29.95,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 9%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "operations": {
            "blocks": [
              {
                "x": 2491.2,
                "top": 928.5,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "运营 (2.5B)",
                    "size": 29.95,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2491.2,
                "top": 1097.79,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "研发 R&D (2.4B)",
                    "size": 29.95,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2491.2,
                "top": 1263.18,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "行政 G&A (2.4B)",
                    "size": 29.95,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#818181"
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
