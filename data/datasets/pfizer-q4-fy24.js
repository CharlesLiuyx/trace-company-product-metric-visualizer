(function () {
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pfizer-q4-fy24",
  "name": "Pfizer · Q4 FY24",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/pfizer-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
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
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#15527a",
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
        "label": "#009851"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9c1600"
      }
    },
    "linkTint": {
      "source": "#89c6f4",
      "hub": "#89c6f4",
      "profit": "#9acd99",
      "cost": "#df8688"
    },
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "primary_care",
      "label": [
        "Primary",
        "Care"
      ],
      "value": 8.9,
      "valueText": "$8.9B",
      "notes": [
        "+27% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "specialty_care",
      "label": [
        "Specialty",
        "Care"
      ],
      "value": 4.4,
      "valueText": "$4.4B",
      "notes": [
        "+12% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "oncology",
      "label": [
        "Oncology"
      ],
      "value": 4.1,
      "valueText": "$4.1B",
      "notes": [
        "+27% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "biopharma",
      "label": [
        "Biopharma"
      ],
      "value": 17.4,
      "valueText": "$17.4B",
      "notes": [
        "+23% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 3
    },
    {
      "id": "business_innovation",
      "label": [
        "Business",
        "innovation"
      ],
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "(9%) Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 4
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 17.8,
      "valueText": "$17.8B",
      "notes": [
        "+22% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 5
    },
    {
      "id": "gross_profit",
      "label": [
        "Gross profit"
      ],
      "value": 11.9,
      "valueText": "$11.9B",
      "notes": [
        "67% margin",
        "+19pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 6
    },
    {
      "id": "cost_of_sales",
      "label": [
        "Cost of sales"
      ],
      "value": 5.9,
      "valueText": "($5.9B)",
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 11.9,
      "valueText": "($11.9B)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 8
    },
    {
      "id": "sga",
      "label": [
        "SG&A"
      ],
      "value": 4.3,
      "valueText": "($4.3B)",
      "notes": [
        "24% of revenue",
        "(7pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 9
    },
    {
      "id": "rnd",
      "label": [
        "R&D"
      ],
      "value": 3.0,
      "valueText": "($3.0B)",
      "notes": [
        "17% of revenue",
        "(2pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 10
    },
    {
      "id": "other",
      "label": [
        "Other"
      ],
      "value": 2.4,
      "valueText": "($2.4B)",
      "notes": [
        "13% of revenue",
        "+14pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 11
    },
    {
      "id": "amortization",
      "label": [
        "Amortization"
      ],
      "value": 1.4,
      "valueText": "($1.4B)",
      "notes": [
        "8% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 12
    },
    {
      "id": "restructuring",
      "label": [
        "Restructuring"
      ],
      "value": 0.7,
      "valueText": "($0.7B)",
      "notes": [
        "4% of revenue",
        "(13pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 13
    },
    {
      "id": "in_process_rnd",
      "label": [
        "In process R&D"
      ],
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": [
        "0% of revenue",
        "(0pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 14
    }
  ],
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 8.9,
      "sourceWidth": 178,
      "targetWidth": 178,
      "y0": 596,
      "y1": 723,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#89c6f4"
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 4.4,
      "sourceWidth": 89,
      "targetWidth": 89,
      "y0": 857.5,
      "y1": 856.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#89c6f4"
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 4.1,
      "sourceWidth": 81,
      "targetWidth": 81,
      "y0": 1070.5,
      "y1": 941.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#89c6f4"
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 17.4,
      "sourceWidth": 348,
      "targetWidth": 348,
      "y0": 808,
      "y1": 916,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#89c6f4"
    },
    {
      "source": "business_innovation",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 1233.5,
      "y1": 1093.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#89c6f4"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 11.9,
      "sourceWidth": 237,
      "targetWidth": 237,
      "y0": 860.5,
      "y1": 748.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 5.9,
      "sourceWidth": 118,
      "targetWidth": 118,
      "y0": 1038,
      "y1": 1171,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 11.9,
      "sourceWidth": 237,
      "targetWidth": 238,
      "y0": 748.5,
      "y1": 677,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 4.3,
      "sourceWidth": 85,
      "targetWidth": 85,
      "y0": 600.5,
      "y1": 360.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.0,
      "sourceWidth": 60,
      "targetWidth": 60,
      "y0": 673.0,
      "y1": 564.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.4,
      "sourceWidth": 47,
      "targetWidth": 47,
      "y0": 726.5,
      "y1": 752.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.4,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 763.5,
      "y1": 932.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.7,
      "sourceWidth": 15,
      "targetWidth": 15,
      "y0": 784.5,
      "y1": 1081.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8688"
    },
    {
      "source": "operating_expenses",
      "target": "in_process_rnd",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 1,
      "y0": 794.0,
      "y1": 1233.5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8688"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "pretax_loss",
      "representation": "annotation",
      "value": -0.009,
      "valueText": "($9M)",
      "type": "cost",
      "label": "Pretax loss",
      "notes": [
        "0% margin",
        "+28pp Y/Y"
      ]
    }
  ],
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"pretax_loss\" data-link-numerator=\"pretax_loss\" data-link-denominator=\"operating_expenses\" data-link-anchor-x=\"1905\" data-link-anchor-y=\"870\"><path d=\"M 1802 943 L 1872 943 C 1905 943 1905 796 1940 795\" fill=\"none\" stroke=\"#df8688\" stroke-width=\"2\"/><text x=\"1833\" y=\"990\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#9c1600\">Pretax loss</text><text x=\"1833\" y=\"1034\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"400\" fill=\"#9c1600\">($9M)</text><text x=\"1833\" y=\"1078\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">0% margin</text><text x=\"1833\" y=\"1122\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">+28pp Y/Y</text></g>",
  "layout": {
    "nodes": {
      "primary_care": {
        "x": 445,
        "y": 507,
        "width": 72,
        "height": 178
      },
      "specialty_care": {
        "x": 445,
        "y": 813,
        "width": 72,
        "height": 89
      },
      "oncology": {
        "x": 445,
        "y": 1030,
        "width": 72,
        "height": 81
      },
      "biopharma": {
        "x": 819,
        "y": 634,
        "width": 72,
        "height": 348
      },
      "business_innovation": {
        "x": 821,
        "y": 1230,
        "width": 72,
        "height": 7
      },
      "revenue": {
        "x": 1192,
        "y": 742,
        "width": 73,
        "height": 355
      },
      "gross_profit": {
        "x": 1569,
        "y": 630,
        "width": 72,
        "height": 237
      },
      "cost_of_sales": {
        "x": 1569,
        "y": 1112,
        "width": 72,
        "height": 118
      },
      "operating_expenses": {
        "x": 1940,
        "y": 558,
        "width": 73,
        "height": 238
      },
      "sga": {
        "x": 2313,
        "y": 318,
        "width": 73,
        "height": 85
      },
      "rnd": {
        "x": 2313,
        "y": 534,
        "width": 73,
        "height": 60
      },
      "other": {
        "x": 2313,
        "y": 729,
        "width": 73,
        "height": 47
      },
      "amortization": {
        "x": 2313,
        "y": 919,
        "width": 73,
        "height": 27
      },
      "restructuring": {
        "x": 2313,
        "y": 1074,
        "width": 73,
        "height": 15
      },
      "in_process_rnd": {
        "x": 2313,
        "y": 1233,
        "width": 73,
        "height": 1
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 480.53,
            "top": 419.32,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "$value",
                "size": 33.86,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 328.17,
            "top": 547.73,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Primary",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 40.37,
                "weight": 800
              }
            ]
          }
        ]
      },
      "specialty_care": {
        "blocks": [
          {
            "x": 480.53,
            "top": 725.35,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "$value",
                "size": 33.86,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 326.86,
            "top": 807.39,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Specialty",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 40.37,
                "weight": 800
              }
            ]
          }
        ]
      },
      "oncology": {
        "blocks": [
          {
            "x": 480.53,
            "top": 942.83,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "$value",
                "size": 33.86,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334.68,
            "top": 1047.01,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Oncology",
                "size": 40.37,
                "weight": 800
              }
            ]
          }
        ]
      },
      "biopharma": {
        "blocks": [
          {
            "x": 854.27,
            "top": 485.74,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Biopharma",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40.37,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 27.35,
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
            "x": 856.88,
            "top": 1032.68,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Business",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "innovation",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40.37,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 27.35,
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
            "x": 1228.02,
            "top": 589.92,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Revenue",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40.37,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.35,
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
            "x": 1603.06,
            "top": 440.16,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40.37,
                "weight": 400
              },
              {
                "text": "67% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+19pp Y/Y",
                "size": 27.35,
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
            "x": 1605.67,
            "top": 1241.04,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.46,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1975.51,
            "top": 395.88,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "Operating",
                "size": 36.46,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.46,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.46,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2517.24,
            "top": 300.82,
            "anchor": "middle",
            "lineGap": 6.51,
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
                "text": "24% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 27.35,
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
            "x": 2517.24,
            "top": 484.44,
            "anchor": "middle",
            "lineGap": 6.51,
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
                "text": "17% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.35,
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
            "x": 2517.24,
            "top": 669.35,
            "anchor": "middle",
            "lineGap": 6.51,
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
              },
              {
                "text": "13% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+14pp Y/Y",
                "size": 27.35,
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
            "x": 2517.24,
            "top": 851.67,
            "anchor": "middle",
            "lineGap": 6.51,
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
                "text": "8% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.35,
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
            "x": 2517.24,
            "top": 1022.26,
            "anchor": "middle",
            "lineGap": 6.51,
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
                "text": "4% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "in_process_rnd": {
        "blocks": [
          {
            "x": 2517.24,
            "top": 1195.46,
            "anchor": "middle",
            "lineGap": 6.51,
            "lines": [
              {
                "text": "In process R&D",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.35,
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
      "key": "company-logo",
      "href": "data/assets/raster-annotations/pfizer/company-wordmark.png",
      "x": 815.21,
      "y": 237.01,
      "width": 625.08,
      "height": 257.84
    },
    {
      "key": "primary-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 13.02,
      "y": 459.69,
      "width": 213.57,
      "height": 226.59
    },
    {
      "key": "specialty-product",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 10.42,
      "y": 806.09,
      "width": 197.94,
      "height": 92.46
    },
    {
      "key": "oncology-product",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance.png",
      "x": 10.42,
      "y": 1027.47,
      "width": 213.57,
      "height": 104.18
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2024 财年第四季度",
      "meta": {
        "title": "辉瑞 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "titleSize": 116
      },
      "nodes": {
        "primary_care": {
          "label": [
            "初级",
            "医疗"
          ],
          "notes": [
            "同比 +27%"
          ]
        },
        "specialty_care": {
          "label": [
            "专科",
            "医疗"
          ],
          "notes": [
            "同比 +12%"
          ]
        },
        "oncology": {
          "label": [
            "肿瘤"
          ],
          "notes": [
            "同比 +27%"
          ]
        },
        "biopharma": {
          "label": [
            "生物制药"
          ],
          "notes": [
            "同比 +23%"
          ]
        },
        "business_innovation": {
          "label": [
            "业务",
            "创新"
          ],
          "notes": [
            "同比 (9%)"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "利润率 67%",
            "同比 +19 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": [
            "销售成本"
          ],
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "sga": {
          "label": [
            "销售及行政费用"
          ],
          "notes": [
            "占收入 24%",
            "同比 (7 个百分点)"
          ]
        },
        "rnd": {
          "label": [
            "研发"
          ],
          "notes": [
            "占收入 17%",
            "同比 (2 个百分点)"
          ]
        },
        "other": {
          "label": [
            "其他"
          ],
          "notes": [
            "占收入 13%",
            "同比 +14 个百分点"
          ]
        },
        "amortization": {
          "label": [
            "摊销"
          ],
          "notes": [
            "占收入 8%",
            "同比 (1 个百分点)"
          ]
        },
        "restructuring": {
          "label": [
            "重组"
          ],
          "notes": [
            "占收入 4%",
            "同比 (13 个百分点)"
          ]
        },
        "in_process_rnd": {
          "label": [
            "在研研发"
          ],
          "notes": [
            "占收入 0%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "nonNodeMetrics": {
        "pretax_loss": {
          "label": "税前亏损",
          "notes": [
            "利润率 0%",
            "同比 +28 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 480.53,
                "top": 419.32,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "$value",
                    "size": 33.86,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 328.17,
                "top": 547.73,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "初级",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 40.37,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "specialty_care": {
            "blocks": [
              {
                "x": 480.53,
                "top": 725.35,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "$value",
                    "size": 33.86,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 326.86,
                "top": 807.39,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "专科",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 40.37,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "oncology": {
            "blocks": [
              {
                "x": 480.53,
                "top": 942.83,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "$value",
                    "size": 33.86,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334.68,
                "top": 1047.01,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 40.37,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "biopharma": {
            "blocks": [
              {
                "x": 854.27,
                "top": 485.74,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "生物制药",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40.37,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 27.35,
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
                "x": 856.88,
                "top": 1032.68,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "业务",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "创新",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40.37,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 27.35,
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
                "x": 1228.02,
                "top": 589.92,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40.37,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27.35,
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
                "x": 1603.06,
                "top": 440.16,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40.37,
                    "weight": 400
                  },
                  {
                    "text": "利润率 67%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +19 个百分点",
                    "size": 27.35,
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
                "x": 1605.67,
                "top": 1241.04,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36.46,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1975.51,
                "top": 395.88,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.46,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.46,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.46,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2517.24,
                "top": 300.82,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "销售及行政费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 27.35,
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
                "x": 2517.24,
                "top": 484.44,
                "anchor": "middle",
                "lineGap": 6.51,
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
                    "text": "占收入 17%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.35,
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
                "x": 2517.24,
                "top": 669.35,
                "anchor": "middle",
                "lineGap": 6.51,
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
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 27.35,
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
                "x": 2517.24,
                "top": 851.67,
                "anchor": "middle",
                "lineGap": 6.51,
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
                    "text": "占收入 8%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.35,
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
                "x": 2517.24,
                "top": 1022.26,
                "anchor": "middle",
                "lineGap": 6.51,
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
                    "text": "占收入 4%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "in_process_rnd": {
            "blocks": [
              {
                "x": 2517.24,
                "top": 1195.46,
                "anchor": "middle",
                "lineGap": 6.51,
                "lines": [
                  {
                    "text": "在研研发",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"pretax_loss\" data-link-numerator=\"pretax_loss\" data-link-denominator=\"operating_expenses\" data-link-anchor-x=\"1905\" data-link-anchor-y=\"870\"><path d=\"M 1802 943 L 1872 943 C 1905 943 1905 796 1940 795\" fill=\"none\" stroke=\"#df8688\" stroke-width=\"2\"/><text x=\"1833\" y=\"990\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\" fill=\"#9c1600\">税前亏损</text><text x=\"1833\" y=\"1034\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"400\" fill=\"#9c1600\">($9M)</text><text x=\"1833\" y=\"1078\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">利润率 0%</text><text x=\"1833\" y=\"1122\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">同比 +28 个百分点</text></g>"
    }
  }
});
})();
