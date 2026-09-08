(function(){ window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "marriott-q2-fy26",
  "name": "Marriott · Q2 FY26",
  "company": "Marriott",
  "meta": {
    "company": "Marriott",
    "title": "Marriott Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/marriott-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#988d87",
        "label": "#988d87"
      },
      "hub": {
        "node": "#988d87",
        "label": "#988d87"
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
      "source": "#c9c4c1",
      "hub": "#c9c4c1",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><rect x=\"99\" y=\"1164\" width=\"305\" height=\"149\" rx=\"28\" fill=\"#000000\"/><rect x=\"414\" y=\"1164\" width=\"331\" height=\"149\" rx=\"28\" fill=\"#000000\"/>\n<text x=\"251\" y=\"1216\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">Comparable</text>\n<text x=\"251\" y=\"1255\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">Systemwide RevPAR</text>\n<text x=\"205\" y=\"1288\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">+</text><text x=\"232\" y=\"1288\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\" data-operating-metric=\"revpar_yoy\">3%</text><text x=\"280\" y=\"1288\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">Y/Y</text>\n<text x=\"540\" y=\"1233\" text-anchor=\"end\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"properties\">10,082</text><text x=\"549\" y=\"1233\" text-anchor=\"start\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">properties</text>\n<text x=\"580\" y=\"1273\" text-anchor=\"end\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"rooms\">1.8M</text><text x=\"589\" y=\"1273\" text-anchor=\"start\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">rooms</text>\n<text x=\"430\" y=\"1346\" text-anchor=\"middle\" font-size=\"27\" fill=\"#777777\">RevPAR = Revenue Per Available Room</text></g>",
  "layout": {
    "scale": 44,
    "nodes": {
      "base_management_fees": {
        "x": 365,
        "y": 351,
        "width": 71,
        "height": 12
      },
      "franchise_fees": {
        "x": 365,
        "y": 518,
        "width": 71,
        "height": 42
      },
      "incentive_management_fees": {
        "x": 365,
        "y": 717,
        "width": 71,
        "height": 8
      },
      "gross_fee_revenue": {
        "x": 832,
        "y": 542,
        "width": 70,
        "height": 66
      },
      "owned_leased_and_other_revenue": {
        "x": 832,
        "y": 749,
        "width": 70,
        "height": 17
      },
      "cost_reimbursement": {
        "x": 832,
        "y": 906,
        "width": 70,
        "height": 214
      },
      "revenue": {
        "x": 1299,
        "y": 736,
        "width": 71,
        "height": 300
      },
      "operating_profit": {
        "x": 1767,
        "y": 588,
        "width": 70,
        "height": 50
      },
      "operating_expenses": {
        "x": 1767,
        "y": 866,
        "width": 70,
        "height": 248
      },
      "net_profit": {
        "x": 2233,
        "y": 367,
        "width": 71,
        "height": 31
      },
      "tax": {
        "x": 2233,
        "y": 573,
        "width": 71,
        "height": 10
      },
      "other_nonoperating": {
        "x": 2233,
        "y": 691,
        "width": 71,
        "height": 5
      },
      "owned_leased_other_direct_costs": {
        "x": 2233,
        "y": 832,
        "width": 71,
        "height": 15
      },
      "ga": {
        "x": 2233,
        "y": 950,
        "width": 71,
        "height": 7
      },
      "da": {
        "x": 2233,
        "y": 1060,
        "width": 71,
        "height": 3
      },
      "reimbursed_expenses": {
        "x": 2233,
        "y": 1161,
        "width": 71,
        "height": 217
      },
      "contract_investment_amortization": {
        "x": 1029.5,
        "y": 538,
        "width": 70,
        "height": 2
      }
    },
    "labels": {
      "base_management_fees": {
        "blocks": [
          {
            "x": 210.5,
            "top": 280,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Base",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "management",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "fees",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              }
            ]
          },
          {
            "x": 404.5,
            "top": 253,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+1% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "franchise_fees": {
        "blocks": [
          {
            "x": 210.5,
            "top": 489,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Franchise",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "fees",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              }
            ]
          },
          {
            "x": 408.5,
            "top": 419,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+19% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "incentive_management_fees": {
        "blocks": [
          {
            "x": 206.5,
            "top": 641,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Incentive",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "management",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "fees",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              }
            ]
          },
          {
            "x": 404.5,
            "top": 618,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_fee_revenue": {
        "blocks": [
          {
            "x": 863,
            "top": 339,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Gross fee",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+13% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "contract_investment_amortization": {
        "blocks": [
          {
            "x": 1060.5,
            "top": 461,
            "anchor": "middle",
            "lineGap": 4,
            "lines": [
              {
                "text": "Amortization",
                "size": 28,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 28,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "owned_leased_and_other_revenue": {
        "blocks": [
          {
            "x": 667.5,
            "top": 679,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Owned,",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "leased",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "and other",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              }
            ]
          },
          {
            "x": 863,
            "top": 648,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_reimbursement": {
        "blocks": [
          {
            "x": 668,
            "top": 962,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Cost",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "reimbursement",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              }
            ]
          },
          {
            "x": 863,
            "top": 807,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+3% Y/Y",
                "size": 29,
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
            "x": 1329,
            "top": 588,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#988d87"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#988d87"
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1804,
            "top": 405,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "17% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
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
            "x": 1813.5,
            "top": 1131,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 2456,
            "top": 329,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "11% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
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
            "x": 2455.5,
            "top": 538,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2457.5,
            "top": 652,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "owned_leased_other_direct_costs": {
        "blocks": [
          {
            "x": 2460,
            "top": 779,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Owned, lease and",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "other direct costs",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2460.5,
            "top": 932,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A ($0.2B)",
                "size": 31,
                "weight": 600,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2455.5,
            "top": 1022,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "D&A & other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "reimbursed_expenses": {
        "blocks": [
          {
            "x": 2457.5,
            "top": 1215,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Reimbursed",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "base_management_fees",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Base management fees",
      "value": 0.343,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1"
    },
    {
      "id": "franchise_fees",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Franchise fees",
      "value": 1.023,
      "notes": [
        "+19% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1"
    },
    {
      "id": "incentive_management_fees",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Incentive management fees",
      "value": 0.212,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1"
    },
    {
      "id": "gross_fee_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Gross fee Revenue",
      "value": 1.578,
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1",
      "valueText": "$1.578B"
    },
    {
      "id": "contract_investment_amortization",
      "col": 2,
      "order": 0,
      "type": "cost",
      "label": "Amortization",
      "value": 0.031,
      "valueText": "($31M)",
      "color": "#d74c4c",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "owned_leased_and_other_revenue",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Owned, leased and other",
      "value": 0.466,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1"
    },
    {
      "id": "cost_reimbursement",
      "col": 1,
      "order": 2,
      "type": "source",
      "label": "Cost reimbursement",
      "value": 5.058,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1"
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 7.071,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#988d87",
      "labelColor": "#988d87",
      "linkTint": "#c9c4c1"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 1,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.229,
      "notes": [
        "17% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Operating expenses",
      "value": 5.842,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.766,
      "notes": [
        "11% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.278,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "other_nonoperating",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.185,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "owned_leased_other_direct_costs",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Owned, lease and other direct costs",
      "value": 0.417,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 0.22,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "da",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "D&A & other",
      "value": 0.105,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "reimbursed_expenses",
      "col": 5,
      "order": 6,
      "type": "cost",
      "label": "Reimbursed expenses",
      "value": 5.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "base_management_fees",
      "target": "gross_fee_revenue",
      "value": 0.343,
      "targetOrder": 0,
      "sourceWidth": 12,
      "targetWidth": 14,
      "linkTint": "#c9c4c1"
    },
    {
      "source": "franchise_fees",
      "target": "gross_fee_revenue",
      "value": 1.023,
      "targetOrder": 1,
      "sourceWidth": 42,
      "targetWidth": 44,
      "linkTint": "#c9c4c1"
    },
    {
      "source": "incentive_management_fees",
      "target": "gross_fee_revenue",
      "value": 0.212,
      "targetOrder": 2,
      "sourceWidth": 8,
      "targetWidth": 8,
      "linkTint": "#c9c4c1"
    },
    {
      "source": "gross_fee_revenue",
      "target": "contract_investment_amortization",
      "value": 0.031,
      "sourceOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_fee_revenue",
      "target": "revenue",
      "value": 1.547,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 64,
      "targetWidth": 66,
      "linkTint": "#c9c4c1"
    },
    {
      "source": "owned_leased_and_other_revenue",
      "target": "revenue",
      "value": 0.466,
      "targetOrder": 1,
      "sourceWidth": 17,
      "targetWidth": 20,
      "linkTint": "#c9c4c1"
    },
    {
      "source": "cost_reimbursement",
      "target": "revenue",
      "value": 5.058,
      "targetOrder": 2,
      "sourceWidth": 214,
      "targetWidth": 214,
      "linkTint": "#c9c4c1"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.229,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 52,
      "targetWidth": 50,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 5.842,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 248,
      "targetWidth": 248,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.766,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 31,
      "targetWidth": 31,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.278,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 12,
      "targetWidth": 10,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_nonoperating",
      "value": 0.185,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 7,
      "targetWidth": 5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "owned_leased_other_direct_costs",
      "value": 0.417,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 18,
      "targetWidth": 15,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.22,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 10,
      "targetWidth": 7,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.105,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 4,
      "targetWidth": 3,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "reimbursed_expenses",
      "value": 5.1,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 216,
      "targetWidth": 217,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Marriott · 2026 财年第二季度",
      "meta": {
        "title": "Marriott 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "titleSize": 112
      },
      "annotationsSvg": "<g><rect x=\"99\" y=\"1164\" width=\"305\" height=\"149\" rx=\"28\" fill=\"#000000\"/><rect x=\"414\" y=\"1164\" width=\"331\" height=\"149\" rx=\"28\" fill=\"#000000\"/>\n<text x=\"251\" y=\"1216\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">可比</text>\n<text x=\"251\" y=\"1255\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">全系统 RevPAR</text>\n<text x=\"205\" y=\"1288\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">+</text><text x=\"232\" y=\"1288\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\" data-operating-metric=\"revpar_yoy\">3%</text><text x=\"280\" y=\"1288\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">同比</text>\n<text x=\"540\" y=\"1233\" text-anchor=\"end\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"properties\">10,082</text><text x=\"549\" y=\"1233\" text-anchor=\"start\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">处物业</text>\n<text x=\"580\" y=\"1273\" text-anchor=\"end\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\" data-operating-metric=\"rooms\">1.8M</text><text x=\"589\" y=\"1273\" text-anchor=\"start\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">间客房</text>\n<text x=\"430\" y=\"1346\" text-anchor=\"middle\" font-size=\"27\" fill=\"#777777\">RevPAR = 每间可售客房收入</text></g>",
      "nodes": {
        "base_management_fees": {
          "label": "基础管理费",
          "notes": [
            "同比 +1%"
          ]
        },
        "franchise_fees": {
          "label": "特许经营费",
          "notes": [
            "同比 +19%"
          ]
        },
        "incentive_management_fees": {
          "label": "激励管理费",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_fee_revenue": {
          "label": "总费用收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "contract_investment_amortization": {
          "label": "摊销",
          "notes": []
        },
        "owned_leased_and_other_revenue": {
          "label": "自有、租赁及其他收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "cost_reimbursement": {
          "label": "成本报销收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 11%",
            "同比 (0 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_nonoperating": {
          "label": "其他",
          "notes": []
        },
        "owned_leased_other_direct_costs": {
          "label": "自有、租赁及其他直接成本",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "da": {
          "label": "折旧摊销及其他",
          "notes": []
        },
        "reimbursed_expenses": {
          "label": "报销费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "base_management_fees": {
            "blocks": [
              {
                "x": 210.5,
                "top": 280,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "基础",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "管理",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  }
                ]
              },
              {
                "x": 404.5,
                "top": 253,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "franchise_fees": {
            "blocks": [
              {
                "x": 210.5,
                "top": 489,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "特许经营",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  }
                ]
              },
              {
                "x": 408.5,
                "top": 419,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "incentive_management_fees": {
            "blocks": [
              {
                "x": 206.5,
                "top": 641,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "激励",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "管理",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  }
                ]
              },
              {
                "x": 404.5,
                "top": 618,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_fee_revenue": {
            "blocks": [
              {
                "x": 863,
                "top": 339,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "总费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "contract_investment_amortization": {
            "blocks": [
              {
                "x": 1060.5,
                "top": 461,
                "anchor": "middle",
                "lineGap": 4,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 28,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 28,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "owned_leased_and_other_revenue": {
            "blocks": [
              {
                "x": 667.5,
                "top": 679,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "自有、",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "租赁及",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  }
                ]
              },
              {
                "x": 863,
                "top": 648,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_reimbursement": {
            "blocks": [
              {
                "x": 668,
                "top": 962,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "报销",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  }
                ]
              },
              {
                "x": 863,
                "top": 807,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 29,
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
                "x": 1329,
                "top": 588,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#988d87"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#988d87"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1804,
                "top": 405,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 17%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
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
                "x": 1813.5,
                "top": 1131,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 2456,
                "top": 329,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
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
                "x": 2455.5,
                "top": 538,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2457.5,
                "top": 652,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "owned_leased_other_direct_costs": {
            "blocks": [
              {
                "x": 2460,
                "top": 779,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "自有、租赁及",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "其他直接成本",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2460.5,
                "top": 932,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用 ($0.2B)",
                    "size": 31,
                    "weight": 600,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2455.5,
                "top": 1022,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "折旧摊销及其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "reimbursed_expenses": {
            "blocks": [
              {
                "x": 2457.5,
                "top": 1215,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "报销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
  },
  "operatingMetrics": [
    {
      "id": "revpar_yoy",
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "3%"
    },
    {
      "id": "properties",
      "value": "10082",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "10,082"
    },
    {
      "id": "rooms",
      "value": "1800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1.8M"
    }
  ],
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/marriott/q2-fy26-logo.png",
      "x": 1003,
      "y": 240,
      "width": 625,
      "height": 215,
      "key": "q2-fy26-logo"
    }
  ]
}); })();
