window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pfizer-q1-fy25",
  "name": "Pfizer · Q1 FY25",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Source-stated Q1 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 4,
    "referenceImage": {
      "src": "input/processed/pfizer-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.333,
    "titleY": 199.219,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2083.333,
    "hidePeriodStamp": true
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
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#2b00be",
        "label": "#2b00be"
      },
      "hub": {
        "node": "#2b00be",
        "label": "#2b00be"
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
      "source": "#85c5f7",
      "hub": "#85c5f7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/pfizer/company-wordmark.png",
      "x": 822.917,
      "y": 240.885,
      "width": 617.188,
      "height": 251.302
    },
    {
      "key": "primary-care-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 19.531,
      "y": 440.104,
      "width": 205.729,
      "height": 221.354
    },
    {
      "key": "specialty-care-vyndaqel",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 15.625,
      "y": 807.292,
      "width": 188.802,
      "height": 88.542
    },
    {
      "key": "oncology-ibrance",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance.png",
      "x": 15.625,
      "y": 1072.917,
      "width": 208.333,
      "height": 80.729
    }
  ],
  "layout": {
    "nodes": {
      "primary_care": {
        "x": 464.844,
        "y": 503.906,
        "width": 72.917,
        "height": 130.208
      },
      "specialty_care": {
        "x": 464.844,
        "y": 807.292,
        "width": 72.917,
        "height": 91.146
      },
      "oncology": {
        "x": 464.844,
        "y": 1070.312,
        "width": 72.917,
        "height": 85.938
      },
      "biopharma": {
        "x": 838.542,
        "y": 652.344,
        "width": 72.917,
        "height": 305.99
      },
      "business_innovation": {
        "x": 838.542,
        "y": 1251.302,
        "width": 72.917,
        "height": 6.51
      },
      "revenue": {
        "x": 1212.24,
        "y": 756.51,
        "width": 72.917,
        "height": 312.5
      },
      "gross_profit": {
        "x": 1584.635,
        "y": 654.948,
        "width": 72.917,
        "height": 247.396
      },
      "cost_of_sales": {
        "x": 1584.635,
        "y": 1135.417,
        "width": 72.917,
        "height": 65.104
      },
      "operating_profit": {
        "x": 1951.823,
        "y": 516.927,
        "width": 72.917,
        "height": 62.5
      },
      "operating_expenses": {
        "x": 1951.823,
        "y": 798.177,
        "width": 72.917,
        "height": 184.896
      },
      "tax": {
        "x": 2229.167,
        "y": 364.583,
        "width": 74.219,
        "height": 3.906
      },
      "net_profit": {
        "x": 2333.333,
        "y": 395.833,
        "width": 72.917,
        "height": 67.708
      },
      "sga": {
        "x": 2333.333,
        "y": 615.885,
        "width": 72.917,
        "height": 69.01
      },
      "rnd": {
        "x": 2333.333,
        "y": 839.844,
        "width": 72.917,
        "height": 50.781
      },
      "amortization": {
        "x": 2333.333,
        "y": 1027.344,
        "width": 72.917,
        "height": 28.646
      },
      "restructuring": {
        "x": 2333.333,
        "y": 1210.938,
        "width": 72.917,
        "height": 15.625
      },
      "other": {
        "x": 2333.333,
        "y": 1348.958,
        "width": 72.917,
        "height": 22.135
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 501.302,
            "top": 414.062,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "(21%) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.521,
            "top": 523.438,
            "anchor": "middle",
            "lineGap": 5.208,
            "lines": [
              {
                "text": "Primary",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39.062,
                "weight": 800
              }
            ]
          }
        ]
      },
      "specialty_care": {
        "blocks": [
          {
            "x": 501.302,
            "top": 716.146,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.521,
            "top": 805.99,
            "anchor": "middle",
            "lineGap": 5.208,
            "lines": [
              {
                "text": "Specialty",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 39.062,
                "weight": 800
              }
            ]
          }
        ]
      },
      "oncology": {
        "blocks": [
          {
            "x": 501.302,
            "top": 980.469,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 325.521,
            "top": 1089.752,
            "anchor": "middle",
            "lineGap": 5.208,
            "lines": [
              {
                "text": "Oncology",
                "size": 39.062,
                "weight": 800
              }
            ]
          }
        ]
      },
      "biopharma": {
        "blocks": [
          {
            "x": 875.0,
            "top": 506.51,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Biopharma",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "business_innovation": {
        "blocks": [
          {
            "x": 875.0,
            "top": 1052.083,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Business",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "innovation",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 26.042,
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
            "x": 1248.698,
            "top": 613.281,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 26.042,
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
            "x": 1621.094,
            "top": 475.26,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "79% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.042,
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
            "x": 1621.094,
            "top": 1218.75,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1988.281,
            "top": 334.635,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "20% margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 26.042,
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
            "x": 1988.281,
            "top": 1002.604,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Operating",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2263.021,
            "top": 281.25,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2523.438,
            "top": 350.26,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.062,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400
              },
              {
                "text": "22% Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.042,
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
            "x": 2523.438,
            "top": 600.26,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2523.438,
            "top": 777.344,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "16% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.042,
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
            "x": 2523.438,
            "top": 963.542,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.042,
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
            "x": 2523.438,
            "top": 1147.135,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "5% of revenue",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2523.438,
            "top": 1325.521,
            "anchor": "middle",
            "lineGap": 7.812,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
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
      "id": "primary_care",
      "label": "Primary Care",
      "value": 5.7,
      "notes": [
        "(21%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$5.7B"
    },
    {
      "id": "specialty_care",
      "label": "Specialty Care",
      "value": 4.0,
      "notes": [
        "+4% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.0B"
    },
    {
      "id": "oncology",
      "label": "Oncology",
      "value": 3.8,
      "notes": [
        "+6% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$3.8B"
    },
    {
      "id": "biopharma",
      "label": "Biopharma",
      "value": 13.4,
      "notes": [
        "(8%) Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 3,
      "valueText": "$13.4B"
    },
    {
      "id": "business_innovation",
      "label": "Business innovation",
      "value": 0.3,
      "notes": [
        "(1%) Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 4,
      "valueText": "$0.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 13.7,
      "notes": [
        "(8%) Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 5,
      "valueText": "$13.7B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 10.9,
      "notes": [
        "79% margin",
        "+2pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 6,
      "valueText": "$10.9B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 2.8,
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($2.8B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.8,
      "notes": [
        "20% margin",
        "(3pp) Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 8,
      "valueText": "$2.8B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 8.1,
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 9,
      "valueText": "($8.1B)"
    },
    {
      "id": "tax",
      "label": "Tax benefit",
      "value": 0.2,
      "notes": [],
      "type": "profit",
      "col": 5,
      "order": 10,
      "valueText": "$0.2B"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 3.0,
      "notes": [
        "22% Y/Y",
        "+1pp Y/Y"
      ],
      "type": "profit",
      "col": 6,
      "order": 11,
      "valueText": "$3.0B"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 3.0,
      "notes": [
        "22% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 12,
      "valueText": "($3.0B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 2.2,
      "notes": [
        "16% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 13,
      "valueText": "($2.2B)"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 1.2,
      "notes": [
        "9% of revenue",
        "+0pp Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 14,
      "valueText": "($1.2B)"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.7,
      "notes": [
        "5% of revenue",
        "+4pp Y/Y"
      ],
      "type": "cost",
      "col": 6,
      "order": 15,
      "valueText": "($0.7B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 1.0,
      "notes": [],
      "type": "cost",
      "col": 6,
      "order": 16,
      "valueText": "($1.0B)"
    }
  ],
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 5.7,
      "sourceWidth": 130.208,
      "targetWidth": 130.208,
      "y0": 569.01,
      "y1": 717.448,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 4,
      "sourceWidth": 91.146,
      "targetWidth": 91.146,
      "y0": 852.865,
      "y1": 828.125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 3.8,
      "sourceWidth": 85.938,
      "targetWidth": 84.635,
      "y0": 1113.281,
      "y1": 916.016,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 13.4,
      "sourceWidth": 305.99,
      "targetWidth": 304.688,
      "y0": 805.339,
      "y1": 908.854,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "business_innovation",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 6.51,
      "targetWidth": 7.812,
      "y0": 1254.557,
      "y1": 1065.104,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 10.9,
      "sourceWidth": 247.396,
      "targetWidth": 247.396,
      "y0": 880.208,
      "y1": 778.646,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.8,
      "sourceWidth": 65.104,
      "targetWidth": 65.104,
      "y0": 1036.458,
      "y1": 1167.969,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.8,
      "sourceWidth": 62.5,
      "targetWidth": 62.5,
      "y0": 686.198,
      "y1": 548.177,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 8.1,
      "sourceWidth": 184.896,
      "targetWidth": 184.896,
      "y0": 809.896,
      "y1": 890.625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.8,
      "sourceWidth": 62.5,
      "targetWidth": 63.802,
      "y0": 548.177,
      "y1": 431.641,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "tax",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 3.906,
      "targetWidth": 3.906,
      "y0": 366.536,
      "y1": 397.786,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3,
      "sourceWidth": 69.01,
      "targetWidth": 69.01,
      "y0": 832.682,
      "y1": 650.391,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.2,
      "sourceWidth": 50.781,
      "targetWidth": 50.781,
      "y0": 892.578,
      "y1": 865.234,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.2,
      "sourceWidth": 28.646,
      "targetWidth": 28.646,
      "y0": 932.292,
      "y1": 1041.667,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.7,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "y0": 954.427,
      "y1": 1218.75,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 1,
      "sourceWidth": 20.833,
      "targetWidth": 22.135,
      "y0": 972.656,
      "y1": 1360.026,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2025 财年第一季度",
      "meta": {
        "title": "辉瑞 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "来源标注为 2025 财年第一季度",
        "titleTextLength": 1822.917
      },
      "nodes": {
        "primary_care": {
          "label": "初级医疗",
          "notes": [
            "同比 (21%)"
          ]
        },
        "specialty_care": {
          "label": "专科医疗",
          "notes": [
            "同比 +4%"
          ]
        },
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +6%"
          ]
        },
        "biopharma": {
          "label": "生物制药",
          "notes": [
            "同比 (8%)"
          ]
        },
        "business_innovation": {
          "label": "业务创新",
          "notes": [
            "同比 (1%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (8%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 20%",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "tax": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "同比 22%",
            "同比 +1 个百分点"
          ]
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": [
            "占收入 22%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 16%",
            "同比 (1 个百分点)"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 9%",
            "同比 +0 个百分点"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 5%",
            "同比 +4 个百分点"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 501.302,
                "top": 414.062,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 (21%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.521,
                "top": 523.438,
                "anchor": "middle",
                "lineGap": 5.208,
                "lines": [
                  {
                    "text": "初级",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 39.062,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "specialty_care": {
            "blocks": [
              {
                "x": 501.302,
                "top": 716.146,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.521,
                "top": 805.99,
                "anchor": "middle",
                "lineGap": 5.208,
                "lines": [
                  {
                    "text": "专科",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 39.062,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "oncology": {
            "blocks": [
              {
                "x": 501.302,
                "top": 980.469,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 325.521,
                "top": 1089.752,
                "anchor": "middle",
                "lineGap": 5.208,
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 39.062,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "biopharma": {
            "blocks": [
              {
                "x": 875.0,
                "top": 506.51,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "生物制药",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "business_innovation": {
            "blocks": [
              {
                "x": 875.0,
                "top": 1052.083,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "业务",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "创新",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 26.042,
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
                "x": 1248.698,
                "top": 613.281,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 26.042,
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
                "x": 1621.094,
                "top": 475.26,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "利润率 79%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 26.042,
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
                "x": 1621.094,
                "top": 1218.75,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1988.281,
                "top": 334.635,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "利润率 20%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 26.042,
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
                "x": 1988.281,
                "top": 1002.604,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2263.021,
                "top": 281.25,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2523.438,
                "top": 350.26,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.062,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400
                  },
                  {
                    "text": "同比 22%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.042,
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
                "x": 2523.438,
                "top": 600.26,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2523.438,
                "top": 777.344,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 16%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.042,
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
                "x": 2523.438,
                "top": 963.542,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.042,
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
                "x": 2523.438,
                "top": 1147.135,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 5%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2523.438,
                "top": 1325.521,
                "anchor": "middle",
                "lineGap": 7.812,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
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
