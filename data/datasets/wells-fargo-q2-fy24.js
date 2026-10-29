/* Wells Fargo Q2 FY26 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BG = '#f2f2f2';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY = '#666666';
  const GRAY_LINK = '#b3b3b3';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';

  const line = (text, size, weight = 400, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const wellsFargoLogo = [
    '<rect width="234" height="252" fill="#d71e28"/>',
    '<rect y="233" width="234" height="19" fill="#ffcd41"/>',
    '<text x="18" y="105" fill="#ffffff" font-family="Georgia,Times New Roman,serif" font-size="49" font-weight="700" textLength="197" lengthAdjust="spacingAndGlyphs">WELLS</text>',
    '<text x="18" y="162" fill="#ffffff" font-family="Georgia,Times New Roman,serif" font-size="49" font-weight="700" textLength="197" lengthAdjust="spacingAndGlyphs">FARGO</text>',
  ].join('');

window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "wells-fargo-q2-fy24",
  "name": "Wells Fargo · Q2 FY24",
  "company": "Wells Fargo",
  "meta": {
    "company": "Wells Fargo",
    "title": "Wells Fargo Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/wells-fargo-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 116,
    "titleWeight": 800,
    "titleTextLength": 2450,
    "hidePeriodStamp": true,
    "logoX": 782,
    "logoY": 240,
    "logoWidth": 234,
    "logoHeight": 252,
    "logoViewBox": "0 0 234 252",
    "logoSvg": wellsFargoLogo
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
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "11.0",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "11.0%"
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><rect x=\"25\" y=\"1191\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"145.5\" y=\"1244\" font-size=\"28\" font-weight=\"800\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"145.5\" y=\"1283\" font-size=\"28\">11.0%</text><text x=\"145.5\" y=\"1316\" font-size=\"23\">+0.3pp Y/Y</text></g><rect x=\"275\" y=\"1191\" width=\"373\" height=\"149\" rx=\"29\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"461.5\" y=\"1244\" font-size=\"28\" font-weight=\"800\">Average deposits</text><text data-operating-metric=\"deposits\" x=\"461.5\" y=\"1283\" font-size=\"28\">$1.4T</text><text x=\"461.5\" y=\"1316\" font-size=\"23\">Flat Y/Y</text></g><rect x=\"657\" y=\"1191\" width=\"429\" height=\"149\" rx=\"29\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"871.5\" y=\"1244\" font-size=\"28\" font-weight=\"800\">Average loans and leases</text><text data-operating-metric=\"loans\" x=\"871.5\" y=\"1283\" font-size=\"28\">$0.9T</text><text x=\"871.5\" y=\"1316\" font-size=\"23\">(3%) Y/Y</text></g><text x=\"430\" y=\"1388\" text-anchor=\"middle\" font-size=\"27\" fill=\"#666666\">CET1 = Common Equity Tier 1</text></g>",
  "layout": {
    "scale": 14.7,
    "nodes": {
      "consumer_banking": {
        "x": 389,
        "y": 365,
        "width": 73,
        "height": 133
      },
      "commercial_banking": {
        "x": 389,
        "y": 632,
        "width": 73,
        "height": 46
      },
      "corporate_investment_banking": {
        "x": 389,
        "y": 826,
        "width": 73,
        "height": 73
      },
      "wealth_investment_management": {
        "x": 389,
        "y": 1046,
        "width": 73,
        "height": 58
      },
      "revenue": {
        "x": 1323,
        "y": 612,
        "width": 73,
        "height": 307
      },
      "other": {
        "x": 1306,
        "y": 1005,
        "width": 73,
        "height": 2
      },
      "pretax_income": {
        "x": 1798,
        "y": 454,
        "width": 73,
        "height": 92
      },
      "noninterest_expenses": {
        "x": 1796,
        "y": 851,
        "width": 73,
        "height": 197
      },
      "operating_expenses": {
        "x": 1791,
        "y": 1246,
        "width": 73,
        "height": 19
      },
      "net_income": {
        "x": 2257,
        "y": 252,
        "width": 73,
        "height": 72
      },
      "tax": {
        "x": 2257,
        "y": 394,
        "width": 73,
        "height": 19
      },
      "personnel": {
        "x": 2257,
        "y": 503,
        "width": 73,
        "height": 128
      },
      "technology": {
        "x": 2257,
        "y": 698,
        "width": 73,
        "height": 18
      },
      "occupancy": {
        "x": 2257,
        "y": 815,
        "width": 73,
        "height": 12
      },
      "operating_losses": {
        "x": 2257,
        "y": 920,
        "width": 73,
        "height": 8
      },
      "leases": {
        "x": 2257,
        "y": 1025,
        "width": 73,
        "height": 18
      },
      "advertising": {
        "x": 2257,
        "y": 1147,
        "width": 73,
        "height": 2
      },
      "professional_fees": {
        "x": 2257,
        "y": 1258,
        "width": 73,
        "height": 2
      },
      "other_expenses": {
        "x": 2257,
        "y": 1367,
        "width": 73,
        "height": 13
      },
      "segment_revenue": {
        "x": 854,
        "y": 547,
        "width": 73,
        "height": 310
      }
    },
    "labels": {
      "consumer_banking": {
        "blocks": [
          {
            "x": 425,
            "top": 270,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 350,
            "top": 373,
            "lines": [
              {
                "text": "Consumer",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "20% net margin",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 10
          }
        ]
      },
      "commercial_banking": {
        "blocks": [
          {
            "x": 425,
            "top": 535,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 350,
            "top": 570,
            "lines": [
              {
                "text": "Commercial",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "38% net margin",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 10
          }
        ]
      },
      "corporate_investment_banking": {
        "blocks": [
          {
            "x": 425,
            "top": 729,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 350,
            "top": 758,
            "lines": [
              {
                "text": "Corporate &",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "37% net margin",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 10
          }
        ]
      },
      "wealth_investment_management": {
        "blocks": [
          {
            "x": 425,
            "top": 951,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 350,
            "top": 978,
            "lines": [
              {
                "text": "Wealth &",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Investment",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 40,
                "weight": 800
              },
              {
                "text": "13% net margin",
                "size": 28,
                "weight": 400
              }
            ],
            "anchor": "end",
            "lineGap": 10
          }
        ]
      },
      "segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1357,
            "top": 461,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 1342.5,
            "top": 1020,
            "lines": [
              {
                "text": "All Other",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1834,
            "top": 344,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "noninterest_expenses": {
        "blocks": [
          {
            "x": 1830,
            "top": 1063,
            "lines": [
              {
                "text": "Noninterest",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1830,
            "top": 1281,
            "lines": [
              {
                "text": "Provision for",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2485,
            "top": 226,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
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
                "text": "+0% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2480,
            "top": 376,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2485,
            "top": 522,
            "lines": [
              {
                "text": "Personnel",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2485,
            "top": 674,
            "lines": [
              {
                "text": "Technology",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2485,
            "top": 781,
            "lines": [
              {
                "text": "Occupancy",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "operating_losses": {
        "blocks": [
          {
            "x": 2495,
            "top": 886,
            "lines": [
              {
                "text": "Operating losses",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "leases": {
        "blocks": [
          {
            "x": 2500,
            "top": 1016,
            "lines": [
              {
                "text": "Leases ($0.2B)",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 2500,
            "top": 1129,
            "lines": [
              {
                "text": "Advertising ($0.2B)",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2490,
            "top": 1222,
            "lines": [
              {
                "text": "Professional fees",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2500,
            "top": 1355,
            "lines": [
              {
                "text": "Other ($0.8B)",
                "size": 30,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
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
      "value": 9,
      "notes": [
        "(5%) Y/Y",
        "20% net margin"
      ]
    },
    {
      "id": "commercial_banking",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Commercial Banking",
      "value": 3.1,
      "notes": [
        "(7%) Y/Y",
        "38% net margin"
      ]
    },
    {
      "id": "corporate_investment_banking",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate & Investment Banking",
      "value": 4.8,
      "notes": [
        "+4% Y/Y",
        "37% net margin"
      ]
    },
    {
      "id": "wealth_investment_management",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Wealth & Investment Management",
      "value": 3.9,
      "notes": [
        "+6% Y/Y",
        "13% net margin"
      ]
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 20.8
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 20.7,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "other",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "All Other",
      "value": -0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Pretax income",
      "value": 6.2
    },
    {
      "id": "noninterest_expenses",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Noninterest expenses",
      "value": 13.3
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Provision for credit losses",
      "value": 1.2
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Net income",
      "value": 4.9,
      "notes": [
        "+0% Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Tax",
      "value": 1.3
    },
    {
      "id": "personnel",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Personnel",
      "value": 8.6
    },
    {
      "id": "technology",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "Technology",
      "value": 1.1
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "Occupancy",
      "value": 0.8
    },
    {
      "id": "operating_losses",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": "Operating losses",
      "value": 0.5
    },
    {
      "id": "leases",
      "col": 4,
      "order": 15,
      "type": "cost",
      "label": "Leases",
      "value": 0.2
    },
    {
      "id": "advertising",
      "col": 4,
      "order": 16,
      "type": "cost",
      "label": "Advertising",
      "value": 0.2
    },
    {
      "id": "professional_fees",
      "col": 4,
      "order": 17,
      "type": "cost",
      "label": "Professional fees",
      "value": 1.1
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 18,
      "type": "cost",
      "label": "Other",
      "value": 0.8
    }
  ],
  "links": [
    {
      "source": "consumer_banking",
      "target": "segment_revenue",
      "value": 9,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 133,
      "targetWidth": 133
    },
    {
      "source": "commercial_banking",
      "target": "segment_revenue",
      "value": 3.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 46,
      "targetWidth": 46
    },
    {
      "source": "corporate_investment_banking",
      "target": "segment_revenue",
      "value": 4.8,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 73,
      "targetWidth": 73
    },
    {
      "source": "wealth_investment_management",
      "target": "segment_revenue",
      "value": 3.9,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 58,
      "targetWidth": 58
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 20.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 700.5,
      "sourceWidth": 307,
      "targetWidth": 307
    },
    {
      "source": "segment_revenue",
      "target": "other",
      "value": 0.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 855,
      "sourceWidth": 2,
      "targetWidth": 2,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 6.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 92,
      "targetWidth": 92,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "noninterest_expenses",
      "value": 13.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 197,
      "targetWidth": 197,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 1.2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 18,
      "targetWidth": 19,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.9,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 73,
      "targetWidth": 72,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 19,
      "targetWidth": 19,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "personnel",
      "value": 8.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 128,
      "targetWidth": 128,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "technology",
      "value": 1.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 17,
      "targetWidth": 18,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "occupancy",
      "value": 0.8,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 11,
      "targetWidth": 12,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "operating_losses",
      "value": 0.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 8,
      "targetWidth": 8,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "leases",
      "value": 0.2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 18,
      "targetWidth": 18,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "advertising",
      "value": 0.2,
      "sourceOrder": 5,
      "targetOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "professional_fees",
      "value": 1.1,
      "sourceOrder": 6,
      "targetOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2,
      "linkTint": "#e08585"
    },
    {
      "source": "noninterest_expenses",
      "target": "other_expenses",
      "value": 0.8,
      "sourceOrder": 7,
      "targetOrder": 0,
      "sourceWidth": 11,
      "targetWidth": 13,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "$1.4T",
      "$0.9T"
    ],
    "zh": {
      "name": "富国银行 · 2024 财年第二季度",
      "meta": {
        "title": "富国银行 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "titleTextLength": 2060
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"122\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><rect x=\"25\" y=\"1191\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"145.5\" y=\"1244\" font-size=\"28\" font-weight=\"800\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"145.5\" y=\"1283\" font-size=\"28\">11.0%</text><text x=\"145.5\" y=\"1316\" font-size=\"23\">同比 +0.3 个百分点</text></g><rect x=\"275\" y=\"1191\" width=\"373\" height=\"149\" rx=\"29\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"461.5\" y=\"1244\" font-size=\"28\" font-weight=\"800\">平均存款</text><text data-operating-metric=\"deposits\" x=\"461.5\" y=\"1283\" font-size=\"28\">$1.4T</text><text x=\"461.5\" y=\"1316\" font-size=\"23\">同比持平</text></g><rect x=\"657\" y=\"1191\" width=\"429\" height=\"149\" rx=\"29\" fill=\"#666666\"/><g text-anchor=\"middle\" fill=\"#ffffff\"><text x=\"871.5\" y=\"1244\" font-size=\"28\" font-weight=\"800\">平均贷款与租赁</text><text data-operating-metric=\"loans\" x=\"871.5\" y=\"1283\" font-size=\"28\">$0.9T</text><text x=\"871.5\" y=\"1316\" font-size=\"23\">同比 (3%)</text></g><text x=\"430\" y=\"1388\" text-anchor=\"middle\" font-size=\"27\" fill=\"#666666\">CET1 = 普通股一级资本</text></g>",
      "nodes": {
        "consumer_banking": {
          "label": "消费者银行",
          "notes": [
            "同比 (5%)",
            "净利率 20%"
          ]
        },
        "commercial_banking": {
          "label": "商业银行",
          "notes": [
            "同比 (7%)",
            "净利率 38%"
          ]
        },
        "corporate_investment_banking": {
          "label": "企业与投资银行",
          "notes": [
            "同比 +4%",
            "净利率 37%"
          ]
        },
        "wealth_investment_management": {
          "label": "财富与投资管理",
          "notes": [
            "同比 +6%",
            "净利率 13%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "other": {
          "label": "所有其他"
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
            "同比 +0%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "personnel": {
          "label": "人员费用"
        },
        "technology": {
          "label": "技术"
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
          "consumer_banking": {
            "blocks": [
              {
                "x": 425,
                "top": 270,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 350,
                "top": 373,
                "lines": [
                  {
                    "text": "消费者",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "银行",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 20%",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 10
              }
            ]
          },
          "commercial_banking": {
            "blocks": [
              {
                "x": 425,
                "top": 535,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 350,
                "top": 570,
                "lines": [
                  {
                    "text": "商业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "银行",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 38%",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 10
              }
            ]
          },
          "corporate_investment_banking": {
            "blocks": [
              {
                "x": 425,
                "top": 729,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 350,
                "top": 758,
                "lines": [
                  {
                    "text": "企业与",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "投资银行",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 37%",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 10
              }
            ]
          },
          "wealth_investment_management": {
            "blocks": [
              {
                "x": 425,
                "top": 951,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 350,
                "top": 978,
                "lines": [
                  {
                    "text": "财富与",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "投资管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 13%",
                    "size": 28,
                    "weight": 400
                  }
                ],
                "anchor": "end",
                "lineGap": 10
              }
            ]
          },
          "segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1357,
                "top": 461,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 1342.5,
                "top": 1020,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1834,
                "top": 344,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "noninterest_expenses": {
            "blocks": [
              {
                "x": 1830,
                "top": 1063,
                "lines": [
                  {
                    "text": "非利息费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1830,
                "top": 1281,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2485,
                "top": 226,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
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
                    "text": "同比 +0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2480,
                "top": 376,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2485,
                "top": 522,
                "lines": [
                  {
                    "text": "人员费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2485,
                "top": 674,
                "lines": [
                  {
                    "text": "技术",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2485,
                "top": 781,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "operating_losses": {
            "blocks": [
              {
                "x": 2495,
                "top": 886,
                "lines": [
                  {
                    "text": "经营损失",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "leases": {
            "blocks": [
              {
                "x": 2500,
                "top": 1016,
                "lines": [
                  {
                    "text": "租赁 ($0.2B)",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 2500,
                "top": 1129,
                "lines": [
                  {
                    "text": "广告 ($0.2B)",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2490,
                "top": 1222,
                "lines": [
                  {
                    "text": "专业服务费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2500,
                "top": 1355,
                "lines": [
                  {
                    "text": "其他 ($0.8B)",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          }
        }
      }
    }
  }
});
})();
