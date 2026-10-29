(function(){
const wellsFargoLogo=[
    '<rect width="234" height="252" fill="#d71e28"/>',
    '<rect y="233" width="234" height="19" fill="#ffcd41"/>',
    '<text x="18" y="105" fill="#ffffff" font-family="Georgia,Times New Roman,serif" font-size="49" font-weight="700" textLength="197" lengthAdjust="spacingAndGlyphs">WELLS</text>',
    '<text x="18" y="162" fill="#ffffff" font-family="Georgia,Times New Roman,serif" font-size="49" font-weight="700" textLength="197" lengthAdjust="spacingAndGlyphs">FARGO</text>',
  ].join('');
window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "wells-fargo-q4-fy22",
  "name": "Wells Fargo · Q4 FY22",
  "company": "Wells Fargo",
  "meta": {
    "company": "Wells Fargo",
    "title": "Wells Fargo Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/wells-fargo-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.639,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2448.223,
    "hidePeriodStamp": true,
    "logoX": 781.348,
    "logoY": 239.613,
    "logoWidth": 234.404,
    "logoHeight": 252.636,
    "logoSvg": wellsFargoLogo,
    "logoViewBox": "0 0 234 252"
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
        "node": "#666666",
        "label": "#666666"
      },
      "hub": {
        "node": "#666666",
        "label": "#666666"
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
      "source": "#b3b3b3",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.067,
      "value": 39.067,
      "note": 27.347,
      "lineGap": 9.116
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"94\" y=\"197\" font-size=\"30\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><rect x=\"20\" y=\"915\" width=\"185\" height=\"114\" rx=\"24\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"112.5\" y=\"955\" font-size=\"22\" font-weight=\"800\">CET1 ratio</text><text x=\"112.5\" y=\"986\" font-size=\"21\" data-operating-metric=\"cet1\">10.6%</text><text x=\"112.5\" y=\"1012\" font-size=\"18\">(0.8pp) Y/Y</text></g><rect x=\"211\" y=\"915\" width=\"286\" height=\"114\" rx=\"24\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"354.0\" y=\"955\" font-size=\"22\" font-weight=\"800\">Average deposits</text><text x=\"354.0\" y=\"986\" font-size=\"21\" data-operating-metric=\"deposits\">$1.4T</text><text x=\"354.0\" y=\"1012\" font-size=\"18\">(6%) Y/Y</text></g><rect x=\"503\" y=\"915\" width=\"331\" height=\"114\" rx=\"24\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"668.5\" y=\"955\" font-size=\"22\" font-weight=\"800\">Average loans and leases</text><text x=\"668.5\" y=\"986\" font-size=\"21\" data-operating-metric=\"loans\">$0.9T</text><text x=\"668.5\" y=\"1012\" font-size=\"18\">+8% Y/Y</text></g><text x=\"330\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#666666\">CET1 = Common Equity Tier 1</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"800\">Source: Quarterly results</text></g></g>",
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "10.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "10.6%"
    },
    {
      "id": "deposits",
      "value": "1.4",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.4T"
    },
    {
      "id": "loans",
      "value": "0.9",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.9T"
    }
  ],
  "layout": {
    "scale": 15.887,
    "nodes": {
      "consumer_banking": {
        "x": 395.883,
        "y": 384,
        "width": 72.926,
        "height": 151
      },
      "commercial_banking": {
        "x": 395.883,
        "y": 680,
        "width": 72.926,
        "height": 51
      },
      "corporate_investment_banking": {
        "x": 395.883,
        "y": 875,
        "width": 72.926,
        "height": 67
      },
      "wealth_investment_management": {
        "x": 395.883,
        "y": 1088,
        "width": 72.926,
        "height": 60
      },
      "segment_revenue": {
        "x": 863.389,
        "y": 546,
        "width": 72.926,
        "height": 325
      },
      "revenue": {
        "x": 1325.687,
        "y": 577,
        "width": 72.926,
        "height": 313
      },
      "other": {
        "x": 1325.687,
        "y": 991,
        "width": 72.926,
        "height": 13
      },
      "pretax_income": {
        "x": 1785.379,
        "y": 454,
        "width": 72.926,
        "height": 41
      },
      "noninterest_expenses": {
        "x": 1785.379,
        "y": 718,
        "width": 72.926,
        "height": 258
      },
      "operating_expenses": {
        "x": 1803.611,
        "y": 1273,
        "width": 72.926,
        "height": 15
      },
      "net_income": {
        "x": 2264.606,
        "y": 319,
        "width": 72.926,
        "height": 42
      },
      "tax": {
        "x": 2158,
        "y": 415,
        "width": 73,
        "height": 2
      },
      "personnel": {
        "x": 2264.606,
        "y": 520,
        "width": 72.926,
        "height": 135
      },
      "information_processing": {
        "x": 2264.606,
        "y": 736,
        "width": 72.926,
        "height": 15
      },
      "occupancy": {
        "x": 2264.606,
        "y": 838,
        "width": 72.926,
        "height": 12
      },
      "operating_losses": {
        "x": 2264.606,
        "y": 923,
        "width": 72.926,
        "height": 57
      },
      "leases": {
        "x": 2264.606,
        "y": 1068,
        "width": 72.926,
        "height": 3
      },
      "advertising": {
        "x": 2264.606,
        "y": 1158,
        "width": 72.926,
        "height": 3
      },
      "professional_fees": {
        "x": 2264.606,
        "y": 1242,
        "width": 72.926,
        "height": 22
      },
      "other_expenses": {
        "x": 2264.606,
        "y": 1354,
        "width": 72.926,
        "height": 15
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "consumer_banking": {
        "blocks": [
          {
            "x": 432.346,
            "top": 293.005,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          },
          {
            "x": 355.513,
            "top": 398.487,
            "lines": [
              {
                "text": "Consumer",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "11% net margin",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 9.116
          }
        ]
      },
      "commercial_banking": {
        "blocks": [
          {
            "x": 432.346,
            "top": 579.5,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+38% Y/Y",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          },
          {
            "x": 355.513,
            "top": 605.544,
            "lines": [
              {
                "text": "Commercial",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "39% net margin",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 9.116
          }
        ]
      },
      "corporate_investment_banking": {
        "blocks": [
          {
            "x": 432.346,
            "top": 776.139,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          },
          {
            "x": 355.513,
            "top": 776.139,
            "lines": [
              {
                "text": "Corporate &",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "41% net margin",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 9.116
          }
        ]
      },
      "wealth_investment_management": {
        "blocks": [
          {
            "x": 432.346,
            "top": 989.707,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          },
          {
            "x": 355.513,
            "top": 989.707,
            "lines": [
              {
                "text": "Wealth &",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "19% net margin",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 9.116
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1362.149,
            "top": 429.741,
            "lines": [
              {
                "text": "Revenue",
                "size": 40.37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 27.347,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 1351.731,
            "top": 1017.054,
            "lines": [
              {
                "text": "All Other",
                "size": 36.463,
                "weight": 800
              },
              {
                "text": "(noninterest loss)",
                "size": 36.463,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.463,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1821.842,
            "top": 345.095,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "noninterest_expenses": {
        "blocks": [
          {
            "x": 1821.842,
            "top": 987.103,
            "lines": [
              {
                "text": "Noninterest",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.463,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1840.074,
            "top": 1295.735,
            "lines": [
              {
                "text": "Provision for",
                "size": 36.463,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 36.463,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35.161,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2484.686,
            "top": 266.96,
            "lines": [
              {
                "text": "Net income",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(59%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "$0.67 EPS",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2191.68,
            "top": 427.137,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 514.387,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "information_processing": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 729.258,
            "lines": [
              {
                "text": "Information",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "processing",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 830.833,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "operating_losses": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 916.781,
            "lines": [
              {
                "text": "Operating losses",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "leases": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 1061.331,
            "lines": [
              {
                "text": "Leases",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 1151.186,
            "lines": [
              {
                "text": "Advertising",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 1235.832,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2495.104,
            "top": 1347.825,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.952,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9.116
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "consumer_banking",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Consumer Banking",
      "value": 9.5,
      "valueText": "$9.5B",
      "notes": [
        "+8% Y/Y",
        "11% net margin"
      ]
    },
    {
      "id": "commercial_banking",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Commercial Banking",
      "value": 3.1,
      "valueText": "$3.1B",
      "notes": [
        "+38% Y/Y",
        "39% net margin"
      ]
    },
    {
      "id": "corporate_investment_banking",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate & Investment Banking",
      "value": 4.1,
      "valueText": "$4.1B",
      "notes": [
        "+18% Y/Y",
        "41% net margin"
      ]
    },
    {
      "id": "wealth_investment_management",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Wealth & Investment Management",
      "value": 3.7,
      "valueText": "$3.7B",
      "notes": [
        "+1% Y/Y",
        "19% net margin"
      ]
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 20.4
    },
    {
      "id": "other",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "All Other (noninterest loss)",
      "value": -0.8,
      "valueText": "($0.8B)"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 19.7,
      "valueText": "$19.7B",
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Pretax income",
      "value": 2.5,
      "valueText": "$2.5B"
    },
    {
      "id": "noninterest_expenses",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Noninterest expenses",
      "value": 16.2,
      "valueText": "($16.2B)"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Provision for credit losses",
      "value": 1.0,
      "valueText": "($1.0B)"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Net income",
      "value": 2.6,
      "valueText": "$2.6B",
      "notes": [
        "(59%) Y/Y",
        "$0.67 EPS"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 10,
      "type": "profit",
      "label": "Tax benefit",
      "value": 0.1,
      "valueText": "$0.1B"
    },
    {
      "id": "personnel",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Personnel",
      "value": 8.4,
      "valueText": "($8.4B)"
    },
    {
      "id": "information_processing",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "Information processing",
      "value": 0.9,
      "valueText": "($0.9B)"
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "Occupancy",
      "value": 0.7,
      "valueText": "($0.7B)"
    },
    {
      "id": "operating_losses",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": "Operating losses",
      "value": 3.5,
      "valueText": "($3.5B)"
    },
    {
      "id": "leases",
      "col": 4,
      "order": 15,
      "type": "cost",
      "label": "Leases",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "advertising",
      "col": 4,
      "order": 16,
      "type": "cost",
      "label": "Advertising",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "professional_fees",
      "col": 4,
      "order": 17,
      "type": "cost",
      "label": "Professional fees",
      "value": 1.4,
      "valueText": "($1.4B)"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 18,
      "type": "cost",
      "label": "Other",
      "value": 0.9,
      "valueText": "($0.9B)"
    }
  ],
  "links": [
    {
      "source": "consumer_banking",
      "target": "segment_revenue",
      "value": 9.5,
      "sourceWidth": 151,
      "targetWidth": 150,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "commercial_banking",
      "target": "segment_revenue",
      "value": 3.1,
      "sourceWidth": 51,
      "targetWidth": 50,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "corporate_investment_banking",
      "target": "segment_revenue",
      "value": 4.1,
      "sourceWidth": 67,
      "targetWidth": 66,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "wealth_investment_management",
      "target": "segment_revenue",
      "value": 3.7,
      "sourceWidth": 60,
      "targetWidth": 59,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 19.7,
      "sourceWidth": 312,
      "targetWidth": 313,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "segment_revenue",
      "target": "other",
      "value": 0.8,
      "sourceWidth": 13,
      "targetWidth": 13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 2.5,
      "sourceWidth": 41,
      "targetWidth": 41,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "noninterest_expenses",
      "value": 16.2,
      "sourceWidth": 257,
      "targetWidth": 258,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 1,
      "sourceWidth": 15,
      "targetWidth": 15,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.5,
      "sourceWidth": 41,
      "targetWidth": 40,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y1": 339
    },
    {
      "source": "tax",
      "target": "net_income",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99",
      "y1": 360
    },
    {
      "source": "noninterest_expenses",
      "target": "personnel",
      "value": 8.4,
      "sourceWidth": 133,
      "targetWidth": 135,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "information_processing",
      "value": 0.9,
      "sourceWidth": 14,
      "targetWidth": 15,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "occupancy",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 12,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "operating_losses",
      "value": 3.5,
      "sourceWidth": 56,
      "targetWidth": 57,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "leases",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "advertising",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "professional_fees",
      "value": 1.4,
      "sourceWidth": 22,
      "targetWidth": 22,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "other_expenses",
      "value": 0.9,
      "sourceWidth": 16,
      "targetWidth": 15,
      "sourceOrder": 7,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "富国银行 · 2022 财年第四季度",
      "meta": {
        "title": "富国银行 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月",
        "titleTextLength": 2057.549
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"94\" y=\"197\" font-size=\"30\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><rect x=\"20\" y=\"915\" width=\"185\" height=\"114\" rx=\"24\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"112.5\" y=\"955\" font-size=\"22\" font-weight=\"800\">CET1 比率</text><text x=\"112.5\" y=\"986\" font-size=\"21\" data-operating-metric=\"cet1\">10.6%</text><text x=\"112.5\" y=\"1012\" font-size=\"18\">同比 (0.8 个百分点)</text></g><rect x=\"211\" y=\"915\" width=\"286\" height=\"114\" rx=\"24\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"354.0\" y=\"955\" font-size=\"22\" font-weight=\"800\">平均存款</text><text x=\"354.0\" y=\"986\" font-size=\"21\" data-operating-metric=\"deposits\">$1.4T</text><text x=\"354.0\" y=\"1012\" font-size=\"18\">同比 (6%)</text></g><rect x=\"503\" y=\"915\" width=\"331\" height=\"114\" rx=\"24\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"668.5\" y=\"955\" font-size=\"22\" font-weight=\"800\">平均贷款与租赁</text><text x=\"668.5\" y=\"986\" font-size=\"21\" data-operating-metric=\"loans\">$0.9T</text><text x=\"668.5\" y=\"1012\" font-size=\"18\">同比 +8%</text></g><text x=\"330\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#666666\">CET1 = 核心一级资本</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"800\">来源：季度业绩</text></g></g>",
      "nodes": {
        "consumer_banking": {
          "label": "消费者银行",
          "notes": [
            "同比 +8%",
            "净利率 11%"
          ]
        },
        "commercial_banking": {
          "label": "商业银行",
          "notes": [
            "同比 +38%",
            "净利率 39%"
          ]
        },
        "corporate_investment_banking": {
          "label": "企业与投资银行",
          "notes": [
            "同比 +18%",
            "净利率 41%"
          ]
        },
        "wealth_investment_management": {
          "label": "财富与投资管理",
          "notes": [
            "同比 +1%",
            "净利率 19%"
          ]
        },
        "other": {
          "label": "其他（非利息亏损）"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (6%)"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "noninterest_expenses": {
          "label": "非利息费用"
        },
        "operating_expenses": {
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 (59%)",
            "每股收益 $0.67"
          ]
        },
        "tax": {
          "label": "税收收益"
        },
        "personnel": {
          "label": "人员费用"
        },
        "information_processing": {
          "label": "信息处理"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "operating_losses": {
          "label": "经营损失"
        },
        "leases": {
          "label": "租赁"
        },
        "advertising": {
          "label": "广告"
        },
        "professional_fees": {
          "label": "专业服务费"
        },
        "other_expenses": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "segment_revenue": {
            "blocks": []
          },
          "consumer_banking": {
            "blocks": [
              {
                "x": 432.346,
                "top": 293.005,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              },
              {
                "x": 355.513,
                "top": 398.487,
                "lines": [
                  {
                    "text": "消费者银行",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "净利率 11%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 9.116
              }
            ]
          },
          "commercial_banking": {
            "blocks": [
              {
                "x": 432.346,
                "top": 579.5,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +38%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              },
              {
                "x": 355.513,
                "top": 605.544,
                "lines": [
                  {
                    "text": "商业银行",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "净利率 39%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 9.116
              }
            ]
          },
          "corporate_investment_banking": {
            "blocks": [
              {
                "x": 432.346,
                "top": 776.139,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              },
              {
                "x": 355.513,
                "top": 776.139,
                "lines": [
                  {
                    "text": "企业与投资银行",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "净利率 41%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 9.116
              }
            ]
          },
          "wealth_investment_management": {
            "blocks": [
              {
                "x": 432.346,
                "top": 989.707,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              },
              {
                "x": 355.513,
                "top": 989.707,
                "lines": [
                  {
                    "text": "财富与投资管理",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "净利率 19%",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 9.116
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1362.149,
                "top": 429.741,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40.37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27.347,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 1351.731,
                "top": 1017.054,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "（非利息亏损）",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.463,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1821.842,
                "top": 345.095,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "noninterest_expenses": {
            "blocks": [
              {
                "x": 1821.842,
                "top": 987.103,
                "lines": [
                  {
                    "text": "非利息费用",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.463,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1840.074,
                "top": 1295.735,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "拨备",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.161,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2484.686,
                "top": 266.96,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 (59%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "每股收益 $0.67",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2191.68,
                "top": 427.137,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 514.387,
                "lines": [
                  {
                    "text": "人员费用",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "information_processing": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 729.258,
                "lines": [
                  {
                    "text": "信息处理",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 830.833,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "operating_losses": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 916.781,
                "lines": [
                  {
                    "text": "经营损失",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "leases": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 1061.331,
                "lines": [
                  {
                    "text": "租赁",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 1151.186,
                "lines": [
                  {
                    "text": "广告",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 1235.832,
                "lines": [
                  {
                    "text": "专业服务费",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2495.104,
                "top": 1347.825,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.952,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9.116
              }
            ]
          }
        }
      }
    },
    "preservedAnnotationText": [
      "$1.4T",
      "$0.9T"
    ]
  }
});})();
