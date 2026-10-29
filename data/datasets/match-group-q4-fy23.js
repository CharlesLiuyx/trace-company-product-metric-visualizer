window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "match-group-q4-fy23",
  "name": "Match Group · Q4 FY23",
  "company": "Match Group",
  "meta": {
    "company": "Match Group",
    "title": "Match Group Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/match-group-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 117,
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
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#0065ff",
        "label": "#0065ff"
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
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "match-group-company-logo",
      "href": "data/assets/raster-annotations/match-group/company-logo-q4-fy25.png",
      "x": 775,
      "y": 230,
      "width": 320,
      "height": 205
    },
    {
      "key": "match-group-brand-tinder",
      "href": "data/assets/raster-annotations/match-group/brand-tinder-q4-fy25.png",
      "x": 96,
      "y": 395,
      "width": 182,
      "height": 190
    },
    {
      "key": "match-group-brand-hinge",
      "href": "data/assets/raster-annotations/match-group/brand-hinge-q4-fy25.png",
      "x": 119,
      "y": 710,
      "width": 134,
      "height": 134
    },
    {
      "key": "match-group-brand-asia-cluster",
      "href": "data/assets/raster-annotations/match-group/brand-asia-cluster-q4-fy25.png",
      "x": 31,
      "y": 906,
      "width": 280,
      "height": 135
    },
    {
      "key": "match-group-brand-evergreen-emerging-cluster",
      "href": "data/assets/raster-annotations/match-group/brand-evergreen-emerging-cluster-q4-fy25.png",
      "x": 4,
      "y": 1088,
      "width": 190,
      "height": 150
    }
  ],
  "layout": {
    "scale": 0.4,
    "nodes": {
      "tinder": {
        "x": 431,
        "y": 392,
        "width": 72,
        "height": 198
      },
      "hinge": {
        "x": 431,
        "y": 756,
        "width": 72,
        "height": 46
      },
      "asia": {
        "x": 431,
        "y": 958,
        "width": 72,
        "height": 30
      },
      "evergreen_emerging": {
        "x": 431,
        "y": 1139,
        "width": 72,
        "height": 67
      },
      "indirect": {
        "x": 431,
        "y": 1352,
        "width": 72,
        "height": 6
      },
      "revenue": {
        "x": 898,
        "y": 648,
        "width": 73,
        "height": 347
      },
      "gross_profit": {
        "x": 1370,
        "y": 553,
        "width": 73,
        "height": 265
      },
      "cost_of_revenue": {
        "x": 1375,
        "y": 989,
        "width": 73,
        "height": 83
      },
      "operating_profit": {
        "x": 1835,
        "y": 448,
        "width": 73,
        "height": 105
      },
      "operating_expenses": {
        "x": 1838,
        "y": 777,
        "width": 73,
        "height": 161
      },
      "net_profit": {
        "x": 2299,
        "y": 355,
        "width": 73,
        "height": 93
      },
      "tax_benefit": {
        "x": 2165,
        "y": 495,
        "width": 73,
        "height": 2
      },
      "other_non_operating": {
        "x": 2299,
        "y": 651,
        "width": 73,
        "height": 15
      },
      "sm": {
        "x": 2299,
        "y": 833,
        "width": 73,
        "height": 65
      },
      "ga": {
        "x": 2299,
        "y": 1007,
        "width": 73,
        "height": 44
      },
      "product": {
        "x": 2299,
        "y": 1176,
        "width": 73,
        "height": 40
      },
      "da": {
        "x": 2299,
        "y": 1343,
        "width": 73,
        "height": 15
      }
    },
    "labels": {
      "tinder": {
        "blocks": [
          {
            "x": 465,
            "top": 300,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#fd3776"
              },
              {
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 471,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tinder",
                "size": 39,
                "weight": 800,
                "color": "#fd3776"
              }
            ]
          }
        ]
      },
      "hinge": {
        "blocks": [
          {
            "x": 465,
            "top": 663,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+50% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 759,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Hinge",
                "size": 39,
                "weight": 800,
                "color": "#000000"
              }
            ]
          }
        ]
      },
      "asia": {
        "blocks": [
          {
            "x": 465,
            "top": 866,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4de0e7"
              },
              {
                "text": "(1%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 953,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Asia",
                "size": 39,
                "weight": 800,
                "color": "#4de0e7"
              }
            ]
          }
        ]
      },
      "evergreen_emerging": {
        "blocks": [
          {
            "x": 465,
            "top": 1043,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#ff740f"
              },
              {
                "text": "(4%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 1125.0,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Evergreen",
                "size": 39,
                "weight": 800,
                "color": "#ff740f"
              },
              {
                "text": "& Emerging",
                "size": 39,
                "weight": 400,
                "color": "#ff740f"
              }
            ]
          }
        ]
      },
      "indirect": {
        "blocks": [
          {
            "x": 465,
            "top": 1258,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#9467bd"
              },
              {
                "text": "+3% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 1335,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Indirect",
                "size": 39,
                "weight": 800,
                "color": "#9467bd"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 935,
            "top": 502,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#0065ff"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0065ff"
              },
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1407,
            "top": 368,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "76% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1407,
            "top": 1095,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
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
            "x": 1871,
            "top": 264,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "30% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+16pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1875,
            "top": 957,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
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
            "x": 2508,
            "top": 296,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "27% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+16pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2199,
            "top": 515,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 32,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "other_non_operating": {
        "blocks": [
          {
            "x": 2508,
            "top": 624,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
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
            "x": 2508,
            "top": 834,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "18% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2508,
            "top": 984,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "12% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2508,
            "top": 1123,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Product",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "11% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2508,
            "top": 1272,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Amortization &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Depreciation",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "tinder",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Tinder",
      "value": 493,
      "valueText": "$493M",
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#fd3776",
      "labelColor": "#fd3776",
      "linkTint": "#f69dba"
    },
    {
      "id": "hinge",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Hinge",
      "value": 116,
      "valueText": "$116M",
      "notes": [
        "+50% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "asia",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Asia",
      "value": 74,
      "valueText": "$74M",
      "notes": [
        "(1%) Y/Y"
      ],
      "color": "#4de0e7",
      "labelColor": "#4de0e7",
      "linkTint": "#a8e9ed"
    },
    {
      "id": "evergreen_emerging",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Evergreen",
        "& Emerging"
      ],
      "value": 168,
      "valueText": "$168M",
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#ff740f",
      "labelColor": "#ff740f",
      "linkTint": "#f7b88c"
    },
    {
      "id": "indirect",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Indirect",
      "value": 16,
      "valueText": "$16M",
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#9467bd",
      "labelColor": "#9467bd",
      "linkTint": "#c8b3d9"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 866,
      "valueText": "$866M",
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#0065ff",
      "labelColor": "#0065ff"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 658,
      "valueText": "$658M",
      "notes": [
        "76% margin",
        "+6pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 7,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 208,
      "valueText": "($208M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Operating profit",
      "value": 260,
      "valueText": "$260M",
      "notes": [
        "30% margin",
        "+16pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Operating expenses",
      "value": 398,
      "valueText": "($398M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 10,
      "type": "profit",
      "label": "Net profit",
      "value": 230,
      "valueText": "$230M",
      "notes": [
        "27% margin",
        "+16pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax_benefit",
      "col": 3,
      "order": 11,
      "type": "profit",
      "label": "Tax benefit",
      "value": 5,
      "valueText": "$5M",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "other_non_operating",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "Other",
      "value": 35,
      "valueText": "($35M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "sm",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "S&M",
      "value": 159,
      "valueText": "($159M)",
      "notes": [
        "18% of revenue"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": "G&A",
      "value": 108,
      "valueText": "($108M)",
      "notes": [
        "12% of revenue"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "product",
      "col": 4,
      "order": 15,
      "type": "cost",
      "label": "Product",
      "value": 98,
      "valueText": "($98M)",
      "notes": [
        "11% of revenue"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "da",
      "col": 4,
      "order": 16,
      "type": "cost",
      "label": "Amortization & Depreciation",
      "value": 33,
      "valueText": "($33M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "tinder",
      "target": "revenue",
      "value": 493,
      "sourceWidth": 198,
      "targetWidth": 198,
      "y0": 491,
      "y1": 747,
      "linkTint": "#f69dba"
    },
    {
      "source": "hinge",
      "target": "revenue",
      "value": 116,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 779,
      "y1": 869,
      "linkTint": "#858585"
    },
    {
      "source": "asia",
      "target": "revenue",
      "value": 74,
      "sourceWidth": 30,
      "targetWidth": 30,
      "y0": 973,
      "y1": 907,
      "linkTint": "#a8e9ed"
    },
    {
      "source": "evergreen_emerging",
      "target": "revenue",
      "value": 168,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 1172.5,
      "y1": 955.5,
      "linkTint": "#f7b88c"
    },
    {
      "source": "indirect",
      "target": "revenue",
      "value": 16,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 1355,
      "y1": 992,
      "linkTint": "#c8b3d9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 658,
      "sourceWidth": 265,
      "targetWidth": 265,
      "y0": 780.5,
      "y1": 685.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 208,
      "sourceWidth": 82,
      "targetWidth": 83,
      "y0": 954,
      "y1": 1030.5,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 260,
      "sourceWidth": 105,
      "targetWidth": 105,
      "y0": 605.5,
      "y1": 500.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 398,
      "sourceWidth": 160,
      "targetWidth": 161,
      "y0": 738,
      "y1": 857.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 225,
      "sourceWidth": 91,
      "targetWidth": 91,
      "y0": 493.5,
      "y1": 400.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other_non_operating",
      "value": 35,
      "sourceWidth": 14,
      "targetWidth": 15,
      "y0": 546,
      "y1": 658.5,
      "linkTint": "#e08585"
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 5,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 496,
      "y1": 447,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 159,
      "sourceWidth": 65,
      "targetWidth": 65,
      "y0": 809.5,
      "y1": 865.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 108,
      "sourceWidth": 44,
      "targetWidth": 44,
      "y0": 864,
      "y1": 1029,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 98,
      "sourceWidth": 40,
      "targetWidth": 40,
      "y0": 906,
      "y1": 1196,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 33,
      "sourceWidth": 12,
      "targetWidth": 15,
      "y0": 932,
      "y1": 1350.5,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Match Group · 2023 财年第四季度",
      "meta": {
        "title": "Match Group 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月"
      },
      "nodes": {
        "tinder": {
          "label": [
            "Tinder"
          ],
          "notes": [
            "同比 +11%"
          ]
        },
        "hinge": {
          "label": [
            "Hinge"
          ],
          "notes": [
            "同比 +50%"
          ]
        },
        "asia": {
          "label": [
            "亚洲"
          ],
          "notes": [
            "同比 (1%)"
          ]
        },
        "evergreen_emerging": {
          "label": [
            "常青与",
            "新兴品牌"
          ],
          "notes": [
            "同比 (4%)"
          ]
        },
        "indirect": {
          "label": [
            "间接收入"
          ],
          "notes": [
            "同比 +3%"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "利润率 76%",
            "同比 +6 个百分点"
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
          "label": [
            "营业利润"
          ],
          "notes": [
            "利润率 30%",
            "同比 +16 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": [
            "净利润"
          ],
          "notes": [
            "利润率 27%",
            "同比 +16 个百分点"
          ]
        },
        "tax_benefit": {
          "label": [
            "税收收益"
          ],
          "notes": []
        },
        "other_non_operating": {
          "label": [
            "其他"
          ],
          "notes": []
        },
        "sm": {
          "label": [
            "销售与市场"
          ],
          "notes": [
            "占收入 18%"
          ]
        },
        "ga": {
          "label": [
            "管理费用"
          ],
          "notes": [
            "占收入 12%"
          ]
        },
        "product": {
          "label": [
            "产品开发"
          ],
          "notes": [
            "占收入 11%"
          ]
        },
        "da": {
          "label": [
            "摊销与",
            "折旧"
          ],
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "tinder": {
            "blocks": [
              {
                "x": 465,
                "top": 300,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#fd3776"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 471,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "Tinder",
                    "size": 39,
                    "weight": 800,
                    "color": "#fd3776"
                  }
                ]
              }
            ]
          },
          "hinge": {
            "blocks": [
              {
                "x": 465,
                "top": 663,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +50%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 759,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "Hinge",
                    "size": 39,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "asia": {
            "blocks": [
              {
                "x": 465,
                "top": 866,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4de0e7"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 953,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "亚洲",
                    "size": 39,
                    "weight": 800,
                    "color": "#4de0e7"
                  }
                ]
              }
            ]
          },
          "evergreen_emerging": {
            "blocks": [
              {
                "x": 465,
                "top": 1043,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#ff740f"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 1125.0,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "常青与",
                    "size": 39,
                    "weight": 800,
                    "color": "#ff740f"
                  },
                  {
                    "text": "新兴品牌",
                    "size": 39,
                    "weight": 400,
                    "color": "#ff740f"
                  }
                ]
              }
            ]
          },
          "indirect": {
            "blocks": [
              {
                "x": 465,
                "top": 1258,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#9467bd"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 1335,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "间接收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#9467bd"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 935,
                "top": 502,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#0065ff"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0065ff"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1407,
                "top": 368,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 76%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1407,
                "top": 1095,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
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
                "x": 1871,
                "top": 264,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 30%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +16 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1875,
                "top": 957,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
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
                "x": 2508,
                "top": 296,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 27%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +16 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2199,
                "top": 515,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 32,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "other_non_operating": {
            "blocks": [
              {
                "x": 2508,
                "top": 624,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
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
                "x": 2508,
                "top": 834,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2508,
                "top": 984,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2508,
                "top": 1123,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "产品开发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2508,
                "top": 1272,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "摊销与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "折旧",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
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
