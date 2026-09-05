window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "digitalocean-q2-fy26",
  "name": "DigitalOcean · Q2 FY26",
  "company": "DigitalOcean",
  "meta": {
    "company": "DigitalOcean",
    "title": "DigitalOcean Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/digitalocean-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.91837398373985,
    "titleSize": 121.0081300813008,
    "titleWeight": 800,
    "titleTextLength": 2457
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "cost_of_revenue:left",
        "ga:left",
        "rd:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#85bff7",
      "hub": "#85bff7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 131,
      "valueText": "$131M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#0080ff",
      "labelColor": "#0080ff",
      "notes": [
        "+65% Y/Y"
      ]
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 62,
      "valueText": "$62M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#0080ff",
      "labelColor": "#0080ff",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "asia",
      "label": "Asia",
      "value": 62,
      "valueText": "$62M",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#0080ff",
      "labelColor": "#0080ff",
      "notes": [
        "(9%) Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 26,
      "valueText": "$26M",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#0080ff",
      "labelColor": "#0080ff",
      "notes": [
        "(9%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 281,
      "valueText": "$281M",
      "type": "hub",
      "col": 1,
      "order": 4,
      "color": "#0080ff",
      "labelColor": "#0080ff",
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 155,
      "valueText": "$155M",
      "type": "profit",
      "col": 2,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "55% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 127,
      "valueText": "($127M)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 29,
      "valueText": "$29M",
      "type": "profit",
      "col": 3,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "10% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 125,
      "valueText": "($125M)",
      "type": "cost",
      "col": 3,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "tax_benefit",
      "label": "Tax",
      "value": 8,
      "valueText": "$8M",
      "type": "profit",
      "col": 4,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 35,
      "valueText": "$35M",
      "type": "profit",
      "col": 5,
      "order": 10,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "13% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 2,
      "valueText": "($2M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#c32b2b",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "rd",
      "label": "R&D",
      "value": 58,
      "valueText": "($58M)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "20% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 45,
      "valueText": "($45M)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "16% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 23,
      "valueText": "($23M)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "8% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 131,
      "sourceWidth": 159,
      "y0": 473.5,
      "sourceOrder": 0,
      "targetWidth": 157.613,
      "y1": 755.807,
      "targetOrder": 0,
      "linkTint": "#85bff7"
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 62,
      "sourceWidth": 76,
      "y0": 720,
      "sourceOrder": 0,
      "targetWidth": 75.337,
      "y1": 872.282,
      "targetOrder": 1,
      "linkTint": "#85bff7"
    },
    {
      "source": "asia",
      "target": "revenue",
      "value": 62,
      "sourceWidth": 76,
      "y0": 910,
      "sourceOrder": 0,
      "targetWidth": 75.337,
      "y1": 947.619,
      "targetOrder": 2,
      "linkTint": "#85bff7"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 26,
      "sourceWidth": 33,
      "y0": 1085.5,
      "sourceOrder": 0,
      "targetWidth": 32.712,
      "y1": 1001.644,
      "targetOrder": 3,
      "linkTint": "#85bff7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 155,
      "sourceWidth": 187,
      "y0": 770.5,
      "sourceOrder": 0,
      "targetWidth": 188,
      "y1": 668,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 127,
      "sourceWidth": 153,
      "y0": 941.5,
      "sourceOrder": 1,
      "targetWidth": 154,
      "y1": 1031,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 29,
      "sourceWidth": 36,
      "y0": 592,
      "sourceOrder": 0,
      "targetWidth": 35,
      "y1": 490.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 125,
      "sourceWidth": 152,
      "y0": 686,
      "sourceOrder": 1,
      "targetWidth": 152,
      "y1": 750,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 29,
      "sourceWidth": 32,
      "y0": 489,
      "sourceOrder": 0,
      "targetWidth": 32.717,
      "y1": 420.359,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 2,
      "sourceWidth": 2,
      "y0": 507,
      "sourceOrder": 1,
      "targetWidth": 3,
      "y1": 591.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 8,
      "sourceWidth": 11,
      "y0": 478.5,
      "sourceOrder": 0,
      "targetWidth": 10.283,
      "y1": 441.859,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 58,
      "sourceWidth": 69.626,
      "y0": 708.813,
      "sourceOrder": 0,
      "targetWidth": 71,
      "y1": 750.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 45,
      "sourceWidth": 54.916,
      "y0": 771.084,
      "sourceOrder": 1,
      "targetWidth": 56,
      "y1": 972,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 23,
      "sourceWidth": 27.458,
      "y0": 812.271,
      "sourceOrder": 2,
      "targetWidth": 28,
      "y1": 1189,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 357,
        "y": 394,
        "width": 71,
        "height": 159
      },
      "europe": {
        "x": 357,
        "y": 682,
        "width": 71,
        "height": 76
      },
      "asia": {
        "x": 357,
        "y": 872,
        "width": 71,
        "height": 76
      },
      "other_revenue": {
        "x": 357,
        "y": 1069,
        "width": 71,
        "height": 33
      },
      "revenue": {
        "x": 824,
        "y": 677,
        "width": 70,
        "height": 341
      },
      "gross_profit": {
        "x": 1291,
        "y": 574,
        "width": 71,
        "height": 188
      },
      "cost_of_revenue": {
        "x": 1291,
        "y": 954,
        "width": 71,
        "height": 154
      },
      "operating_profit": {
        "x": 1759,
        "y": 473,
        "width": 70,
        "height": 35
      },
      "operating_expenses": {
        "x": 1759,
        "y": 674,
        "width": 70,
        "height": 152
      },
      "tax_benefit": {
        "x": 2111,
        "y": 473,
        "width": 70,
        "height": 11
      },
      "net_profit": {
        "x": 2225,
        "y": 404,
        "width": 71,
        "height": 44
      },
      "interest": {
        "x": 2225,
        "y": 590,
        "width": 71,
        "height": 3
      },
      "rd": {
        "x": 2225,
        "y": 715,
        "width": 71,
        "height": 71
      },
      "ga": {
        "x": 2225,
        "y": 944,
        "width": 71,
        "height": 56
      },
      "sm": {
        "x": 2225,
        "y": 1175,
        "width": 71,
        "height": 28
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 389.4417872576853,
            "top": 295.6715508798368,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.768449120163211,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0080ff",
                "textLength": 127.92295926335693
              },
              {
                "text": "+65% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 227.11075465202345,
            "top": 419.1560979242015,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.938170312791613,
            "lines": [
              {
                "text": "North",
                "size": 40,
                "weight": 800,
                "color": "#0080ff",
                "textLength": 116.45830197884762
              },
              {
                "text": "America",
                "size": 40,
                "weight": 800,
                "color": "#0080ff",
                "textLength": 163.06475862677487
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 234.52543748079938,
            "top": 698.5023256445502,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Europe",
                "size": 40,
                "weight": 800,
                "color": "#0080ff",
                "textLength": 143.4287801339351
              }
            ]
          },
          {
            "x": 391.0417874267015,
            "top": 582.3681154486234,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.071884551376684,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0080ff",
                "textLength": 104.7566882538116
              },
              {
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 101
              }
            ]
          }
        ]
      },
      "asia": {
        "blocks": [
          {
            "x": 393.26090048506904,
            "top": 768.0685421266172,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 17.371457873382838,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0080ff",
                "textLength": 108.8399884454135
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 102
              }
            ]
          },
          {
            "x": 251.96947603350296,
            "top": 885.5000171467942,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Asia",
                "size": 40,
                "weight": 800,
                "color": "#0080ff",
                "textLength": 85.28197284223795
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 240.34011711171473,
            "top": 1060.9999965679303,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#0080ff",
                "textLength": 116.80203753504261
              }
            ]
          },
          {
            "x": 394.23001490868455,
            "top": 970.0901551111028,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.349844888897223,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0080ff",
                "textLength": 104.66423939729201
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 102
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 858.2768894809548,
            "top": 523.6223760416743,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.908811979162863,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#0080ff",
                "textLength": 174.64315042681605
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#0080ff",
                "textLength": 124.04651357888099
              },
              {
                "text": "+29% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1325.125,
            "top": 382.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000021,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 225
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "55% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1327.1666666666667,
            "top": 1118.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 16.284999999999968,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 114
              },
              {
                "text": "revenue",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 132
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 123
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1796.375,
            "top": 281.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 312
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 95
              },
              {
                "text": "10% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 149
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1794,
            "top": 837.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.134999999999991,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 193
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 176
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 143
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2144.75,
            "top": 492.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#038f51",
                "textLength": 52
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#038f51",
                "textLength": 57
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2419.375,
            "top": 353.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 186
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 95
              },
              {
                "text": "13% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 149
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2425,
            "top": 559.7,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 6.57000000000005,
            "lines": [
              {
                "text": "Interest",
                "size": 30,
                "weight": 800,
                "color": "#941001",
                "textLength": 117
              },
              {
                "text": "$value",
                "size": 29.96,
                "weight": 400,
                "color": "#941001"
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2424.75,
            "top": 727.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.846666666666692,
            "lines": [
              {
                "text": "R&D",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 60
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "20% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2419.5,
            "top": 938.8,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333359,
            "lines": [
              {
                "text": "G&A",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 64
              },
              {
                "text": "$value",
                "size": 29.927,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "16% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2419,
            "top": 1154.8,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333321,
            "lines": [
              {
                "text": "S&M",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 63
              },
              {
                "text": "$value",
                "size": 29.927,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 182
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"118\" y=\"1144\" width=\"165\" height=\"163\" rx=\"31\" fill=\"#0080ff\"/><rect x=\"290\" y=\"1144\" width=\"274\" height=\"163\" rx=\"31\" fill=\"#0080ff\"/><text x=\"200\" y=\"1201.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARR</text><text x=\"199.5\" y=\"1240.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$1,125M</text><text x=\"200\" y=\"1283.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+29% Y/Y</text><text x=\"427.5\" y=\"1200.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Customers</text><text x=\"427\" y=\"1240.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">&gt;$100K ARR</text><text x=\"427\" y=\"1283.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y</text><text x=\"342\" y=\"1353.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">ARR = Annual Run-Rate Revenue</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "ARPAM",
      "GMV",
      "Clover GPV",
      "USDC",
      "Klarna Checkout (KCO)",
      "monday"
    ],
    "zh": {
      "name": "DigitalOcean · 2026 财年第二季度",
      "meta": {
        "title": "DigitalOcean 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleTextLength": 2200,
        "titleSize": 108
      },
      "nodes": {
        "north_america": {
          "label": "北美洲",
          "notes": [
            "同比 +65%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +9%"
          ]
        },
        "asia": {
          "label": "亚洲",
          "notes": [
            "同比 (9%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (9%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +29%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 55%",
            "同比 (5 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 10%",
            "同比 (6 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "tax_benefit": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 13%",
            "同比 (4 个百分点)"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "rd": {
          "label": "研发",
          "notes": [
            "占收入 20%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 16%",
            "同比 (1 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 8%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 389.4417872576853,
                "top": 295.6715508798368,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.768449120163211,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0080ff",
                    "textLength": 127.92295926335693
                  },
                  {
                    "text": "同比 +65%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 227.11075465202345,
                "top": 419.1560979242015,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.938170312791613,
                "lines": [
                  {
                    "text": "北",
                    "size": 40,
                    "weight": 800,
                    "color": "#0080ff"
                  },
                  {
                    "text": "美洲",
                    "size": 40,
                    "weight": 800,
                    "color": "#0080ff"
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 234.52543748079938,
                "top": 698.5023256445502,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 40,
                    "weight": 800,
                    "color": "#0080ff"
                  }
                ]
              },
              {
                "x": 391.0417874267015,
                "top": 582.3681154486234,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.071884551376684,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0080ff",
                    "textLength": 104.7566882538116
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "asia": {
            "blocks": [
              {
                "x": 393.26090048506904,
                "top": 768.0685421266172,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 17.371457873382838,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0080ff",
                    "textLength": 108.8399884454135
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 251.96947603350296,
                "top": 885.5000171467942,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "亚洲",
                    "size": 40,
                    "weight": 800,
                    "color": "#0080ff"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 240.34011711171473,
                "top": 1060.9999965679303,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#0080ff"
                  }
                ]
              },
              {
                "x": 394.23001490868455,
                "top": 970.0901551111028,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.349844888897223,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0080ff",
                    "textLength": 104.66423939729201
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 858.2768894809548,
                "top": 523.6223760416743,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.908811979162863,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#0080ff"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#0080ff",
                    "textLength": 124.04651357888099
                  },
                  {
                    "text": "同比 +29%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1325.125,
                "top": 382.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000021,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 117
                  },
                  {
                    "text": "利润率 55%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
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
                "x": 1327.1666666666667,
                "top": 1118.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 16.284999999999968,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "收入",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 123
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1796.375,
                "top": 281.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 95
                  },
                  {
                    "text": "利润率 10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 28,
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
                "x": 1794,
                "top": 837.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.134999999999991,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 143
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2144.75,
                "top": 492.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#038f51"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#038f51",
                    "textLength": 57
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2419.375,
                "top": 353.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
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
                    "color": "#008f51",
                    "textLength": 95
                  },
                  {
                    "text": "利润率 13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2425,
                "top": 559.7,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 6.57000000000005,
                "lines": [
                  {
                    "text": "利息",
                    "size": 30,
                    "weight": 800,
                    "color": "#941001"
                  },
                  {
                    "text": "$value",
                    "size": 29.96,
                    "weight": 400,
                    "color": "#941001"
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2424.75,
                "top": 727.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.846666666666692,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 20%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 2419.5,
                "top": 938.8,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333359,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.927,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2419,
                "top": 1154.8,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333321,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.927,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"118\" y=\"1144\" width=\"165\" height=\"163\" rx=\"31\" fill=\"#0080ff\"/><rect x=\"290\" y=\"1144\" width=\"274\" height=\"163\" rx=\"31\" fill=\"#0080ff\"/><text x=\"200\" y=\"1201.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARR</text><text x=\"199.5\" y=\"1240.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$1,125M</text><text x=\"200\" y=\"1283.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +29%</text><text x=\"427.5\" y=\"1200.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">客户</text><text x=\"427\" y=\"1240.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">ARR 超过 $100K</text><text x=\"427\" y=\"1283.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%</text><text x=\"342\" y=\"1353.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">ARR = 年化收入运行率</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/digitalocean/company-logo-digitalocean-q2-fy26.png",
      "x": 673,
      "y": 226,
      "width": 392,
      "height": 295
    }
  ]
});
