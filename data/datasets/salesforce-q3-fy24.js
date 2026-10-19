(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "salesforce-q3-fy24",
  "name": "Salesforce \u00b7 Q3 FY24",
  "meta": {
    "title": "Salesforce Q3 FY24 Income Statement",
    "titleSize": 122.411,
    "titleY": 188.639,
    "period": "Q3 FY24",
    "periodNote": "Ending Oct. 2023",
    "periodX": 2422.178,
    "periodY": 257.845,
    "periodNoteY": 299.517,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/salesforce-q3-fy24.png",
      "width": 2667.0,
      "height": 1500
    }
  },
  "render": {
    "width": 2667.0,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#165579",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "labelWeight": null,
    "valueWeight": null,
    "linkOpacity": 1,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#00a4d8",
        "label": "#00a4d8"
      },
      "hub": {
        "node": "#00a4d8",
        "label": "#00a4d8"
      },
      "profit": {
        "node": "#289e28",
        "label": "#009951"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51e08"
      }
    },
    "linkTint": {
      "source": "#85cbe1",
      "hub": "#85cbe1",
      "profit": "#9acd98",
      "cost": "#e08586"
    }
  },
  "nodes": [
    {
      "id": "sales",
      "label": "Sales",
      "value": 1.9,
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#12c7bc",
      "labelColor": "#12c7bc",
      "linkTint": "#8edfd7",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "service",
      "label": "Service",
      "value": 2.1,
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#d0649f",
      "labelColor": "#d0649f",
      "linkTint": "#e5b6ce",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "platform_other",
      "label": "Platform & Other",
      "value": 1.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#601a78",
      "labelColor": "#601a78",
      "linkTint": "#ac8fba",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "marketing_commerce",
      "label": "Marketing & Commerce",
      "value": 1.2,
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#f38e25",
      "labelColor": "#f38e25",
      "linkTint": "#f4c89a",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "data",
      "label": "Data",
      "value": 1.2,
      "type": "source",
      "col": 0,
      "order": 4,
      "color": "#00a4d8",
      "labelColor": "#00a4d8",
      "linkTint": "#85cbe1",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "subscription_support",
      "label": "Subscription and support",
      "value": 8.1,
      "type": "source",
      "col": 1,
      "order": 5,
      "color": "#00a4d8",
      "labelColor": "#00a4d8",
      "linkTint": "#85cbe1",
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 0.6,
      "type": "source",
      "col": 1,
      "order": 6,
      "color": "#00a4d8",
      "labelColor": "#00a4d8",
      "linkTint": "#85cbe1",
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 8.7,
      "type": "hub",
      "col": 2,
      "order": 7,
      "color": "#00a4d8",
      "labelColor": "#00a4d8",
      "linkTint": "#85cbe1",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 6.6,
      "type": "profit",
      "col": 3,
      "order": 8,
      "color": "#289e28",
      "labelColor": "#009951",
      "linkTint": "#9acd98",
      "notes": [
        "75% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.2,
      "type": "cost",
      "col": 3,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.5,
      "type": "profit",
      "col": 4,
      "order": 10,
      "color": "#289e28",
      "labelColor": "#009951",
      "linkTint": "#9acd98",
      "notes": [
        "17% margin",
        "+11pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 5.1,
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.2,
      "type": "profit",
      "col": 5,
      "order": 12,
      "color": "#289e28",
      "labelColor": "#009951",
      "linkTint": "#9acd98",
      "notes": [
        "14% margin",
        "+11pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.014,
      "type": "cost",
      "col": 5,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": [],
      "valueText": "($14M)"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 3.2,
      "type": "cost",
      "col": 5,
      "order": 15,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": [
        "36% of revenue",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1.2,
      "type": "cost",
      "col": 5,
      "order": 16,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": [
        "14% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.6,
      "type": "cost",
      "col": 5,
      "order": 17,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": [
        "7% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.055,
      "type": "cost",
      "col": 5,
      "order": 18,
      "color": "#cc0000",
      "labelColor": "#a51e08",
      "linkTint": "#e08586",
      "notes": [
        "1% of revenue"
      ],
      "valueText": "($55M)"
    }
  ],
  "links": [
    {
      "source": "sales",
      "target": "subscription_support",
      "value": 1.9,
      "width": 74.228,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8edfd7"
    },
    {
      "source": "service",
      "target": "subscription_support",
      "value": 2.1,
      "width": 80.739,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e5b6ce"
    },
    {
      "source": "platform_other",
      "target": "subscription_support",
      "value": 1.7,
      "width": 66.415,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#ac8fba"
    },
    {
      "source": "marketing_commerce",
      "target": "subscription_support",
      "value": 1.2,
      "width": 48.183,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f4c89a"
    },
    {
      "source": "data",
      "target": "subscription_support",
      "value": 1.2,
      "width": 48.183,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#85cbe1",
      "targetWidth": 46.881
    },
    {
      "source": "subscription_support",
      "target": "revenue",
      "value": 8.1,
      "width": 316.446,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cbe1"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 0.6,
      "width": 23.44,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cbe1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.6,
      "width": 253.938,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd98",
      "sourceWidth": 256.542
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.2,
      "width": 83.344,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08586"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "width": 58.601,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd98"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.1,
      "width": 196.639,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08586",
      "sourceWidth": 195.337
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.286,
      "width": 46.881,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd98"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "width": 10.418,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08586"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.014,
      "width": 2.604,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08586",
      "sourceWidth": 1.302
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 3.2,
      "width": 122.411,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08586"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.2,
      "width": 46.881,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08586"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "width": 23.44,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08586"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.055,
      "width": 2.604,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08586"
    }
  ],
  "layout": {
    "scale": 39.067,
    "nodes": {
      "sales": {
        "x": 468.809,
        "y": 372.442,
        "width": 69.019,
        "height": 74.228
      },
      "service": {
        "x": 468.809,
        "y": 600.335,
        "width": 69.019,
        "height": 80.739
      },
      "platform_other": {
        "x": 468.809,
        "y": 833.438,
        "width": 69.019,
        "height": 66.415
      },
      "marketing_commerce": {
        "x": 468.809,
        "y": 1052.215,
        "width": 69.019,
        "height": 48.183
      },
      "data": {
        "x": 468.809,
        "y": 1261.876,
        "width": 69.019,
        "height": 48.183
      },
      "subscription_support": {
        "x": 826.926,
        "y": 621.171,
        "width": 69.019,
        "height": 316.446
      },
      "professional_services": {
        "x": 824.322,
        "y": 1086.073,
        "width": 69.019,
        "height": 23.44
      },
      "revenue": {
        "x": 1179.835,
        "y": 686.284,
        "width": 69.019,
        "height": 339.886
      },
      "gross_profit": {
        "x": 1537.953,
        "y": 621.171,
        "width": 69.019,
        "height": 253.938
      },
      "cost_of_revenue": {
        "x": 1536.65,
        "y": 1014.45,
        "width": 69.019,
        "height": 83.344
      },
      "operating_profit": {
        "x": 1889.559,
        "y": 498.76,
        "width": 69.019,
        "height": 58.601
      },
      "operating_expenses": {
        "x": 1889.559,
        "y": 768.325,
        "width": 69.019,
        "height": 196.639
      },
      "net_profit": {
        "x": 2247.677,
        "y": 406.301,
        "width": 69.019,
        "height": 46.881
      },
      "tax": {
        "x": 2247.677,
        "y": 613.358,
        "width": 69.019,
        "height": 10.418
      },
      "other": {
        "x": 2247.677,
        "y": 718.84,
        "width": 69.019,
        "height": 2.604
      },
      "sm": {
        "x": 2247.677,
        "y": 834.74,
        "width": 69.019,
        "height": 122.411
      },
      "rnd": {
        "x": 2247.677,
        "y": 1043.099,
        "width": 69.019,
        "height": 46.881
      },
      "ga": {
        "x": 2247.677,
        "y": 1175.928,
        "width": 69.019,
        "height": 23.44
      },
      "restructuring": {
        "x": 2247.677,
        "y": 1287.921,
        "width": 69.019,
        "height": 2.604
      }
    },
    "labels": {
      "sales": {
        "blocks": [
          {
            "x": 503.969,
            "top": 283.89,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 454.484,
            "top": 386.081,
            "anchor": "end",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Sales",
                "size": 39.067,
                "weight": 700
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 503.969,
            "top": 510.48,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 454.484,
            "top": 617.1740000000001,
            "anchor": "end",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Service",
                "size": 39.067,
                "weight": 700
              }
            ]
          }
        ]
      },
      "platform_other": {
        "blocks": [
          {
            "x": 503.969,
            "top": 739.676,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 454.484,
            "top": 803.3969999999999,
            "anchor": "end",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Platform",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "& Other",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "Slack",
                "size": 23.44,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "marketing_commerce": {
        "blocks": [
          {
            "x": 503.969,
            "top": 958.453,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 454.484,
            "top": 1027.959,
            "anchor": "end",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Marketing &",
                "size": 37,
                "weight": 700
              },
              {
                "text": "Commerce",
                "size": 37,
                "weight": 700
              }
            ]
          }
        ]
      },
      "data": {
        "blocks": [
          {
            "x": 503.969,
            "top": 1165.51,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 454.484,
            "top": 1261.876,
            "anchor": "end",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Data",
                "size": 35,
                "weight": 700
              }
            ]
          },
          {
            "x": 380.024,
            "top": 1316.571,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Mulesoft, Tableau",
                "size": 23.44,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "subscription_support": {
        "blocks": [
          {
            "x": 862.087,
            "top": 423.23,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "and support",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 862.087,
            "top": 1127.745,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Professional",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "services",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.347,
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
            "x": 1213.693,
            "top": 541.734,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.347,
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
            "x": 1571.811,
            "top": 437.555,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "75% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
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
            "x": 1923.417,
            "top": 316.446,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "17% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+11pp Y/Y",
                "size": 27.347,
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
            "x": 1923.417,
            "top": 984.498,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1571.811,
            "top": 1119.932,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.765,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 37.765,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.765,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2427.387,
            "top": 356.815,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "14% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+11pp Y/Y",
                "size": 27.347,
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
            "x": 2427.387,
            "top": 586.011,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2427.387,
            "top": 691.493,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 849.064,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "S&M ($3.2B)",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "36% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 28.649,
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
            "x": 2474.268,
            "top": 1007.938,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "R&D ($1.2B)",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "14% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 1149.883,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "G&A ($0.6B)",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "7% of revenue",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.649,
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
            "x": 2474.268,
            "top": 1272.294,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "Salesforce \u00b7 2024 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
      "meta": {
        "title": "Salesforce 2024 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6\u5229\u6da6\u8868",
        "period": "2024 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2023 \u5e74 10 \u6708"
      },
      "nodes": {
        "sales": {
          "label": "\u9500\u552e",
          "notes": [
            "\u540c\u6bd4 +11%"
          ]
        },
        "service": {
          "label": "\u670d\u52a1",
          "notes": [
            "\u540c\u6bd4 +12%"
          ]
        },
        "platform_other": {
          "label": "\u5e73\u53f0\u4e0e\u5176\u4ed6",
          "notes": [
            "\u540c\u6bd4 +11%"
          ]
        },
        "marketing_commerce": {
          "label": "\u8425\u9500\u4e0e\u5546\u52a1",
          "notes": [
            "\u540c\u6bd4 +9%"
          ]
        },
        "data": {
          "label": "\u6570\u636e",
          "notes": [
            "\u540c\u6bd4 +22%"
          ]
        },
        "subscription_support": {
          "label": "\u8ba2\u9605\u4e0e\u652f\u6301",
          "notes": [
            "\u540c\u6bd4 +13%"
          ]
        },
        "professional_services": {
          "label": "\u4e13\u4e1a\u670d\u52a1",
          "notes": [
            "\u540c\u6bd4 (4%)"
          ]
        },
        "revenue": {
          "label": "\u6536\u5165",
          "notes": [
            "\u540c\u6bd4 +11%"
          ]
        },
        "gross_profit": {
          "label": "\u6bdb\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 75%",
            "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "cost_of_revenue": {
          "label": "\u6536\u5165\u6210\u672c",
          "notes": []
        },
        "operating_profit": {
          "label": "\u8425\u4e1a\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 17%",
            "\u540c\u6bd4 +11 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "operating_expenses": {
          "label": "\u8fd0\u8425\u8d39\u7528",
          "notes": []
        },
        "net_profit": {
          "label": "\u51c0\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 14%",
            "\u540c\u6bd4 +11 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "tax": {
          "label": "\u7a0e\u8d39",
          "notes": []
        },
        "other": {
          "label": "\u5176\u4ed6",
          "notes": []
        },
        "sm": {
          "label": "\u9500\u552e\u4e0e\u5e02\u573a",
          "notes": [
            "\u5360\u6536\u5165 36%",
            "\u540c\u6bd4 (6 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "rnd": {
          "label": "\u7814\u53d1",
          "notes": [
            "\u5360\u6536\u5165 14%",
            "\u540c\u6bd4 (3 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "ga": {
          "label": "\u7ba1\u7406\u8d39\u7528",
          "notes": [
            "\u5360\u6536\u5165 7%",
            "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "restructuring": {
          "label": "\u91cd\u7ec4",
          "notes": [
            "\u5360\u6536\u5165 1%"
          ]
        }
      },
      "layout": {
        "labels": {
          "sales": {
            "blocks": [
              {
                "x": 503.969,
                "top": 283.89,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +11%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 454.484,
                "top": 386.081,
                "anchor": "end",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u9500\u552e",
                    "size": 39.067,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 503.969,
                "top": 510.48,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +12%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 454.484,
                "top": 617.1740000000001,
                "anchor": "end",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u670d\u52a1",
                    "size": 39.067,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "platform_other": {
            "blocks": [
              {
                "x": 503.969,
                "top": 739.676,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +11%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 454.484,
                "top": 803.3969999999999,
                "anchor": "end",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u5e73\u53f0",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "\u4e0e\u5176\u4ed6",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "Slack \u534f\u4f5c",
                    "size": 23.44,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "marketing_commerce": {
            "blocks": [
              {
                "x": 503.969,
                "top": 958.453,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +9%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 454.484,
                "top": 1027.959,
                "anchor": "end",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u8425\u9500\u4e0e",
                    "size": 37,
                    "weight": 700
                  },
                  {
                    "text": "\u5546\u52a1",
                    "size": 37,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "data": {
            "blocks": [
              {
                "x": 503.969,
                "top": 1165.51,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +22%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 454.484,
                "top": 1261.876,
                "anchor": "end",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u6570\u636e",
                    "size": 35,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 380.024,
                "top": 1316.571,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "MuleSoft\u3001Tableau",
                    "size": 23.44,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "subscription_support": {
            "blocks": [
              {
                "x": 862.087,
                "top": 423.23,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u8ba2\u9605",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "\u4e0e\u652f\u6301",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +13%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 862.087,
                "top": 1127.745,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u4e13\u4e1a",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "\u670d\u52a1",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 (4%)",
                    "size": 27.347,
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
                "x": 1213.693,
                "top": 541.734,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +11%",
                    "size": 27.347,
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
                "x": 1571.811,
                "top": 437.555,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u6bdb\u5229\u6da6",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u5229\u6da6\u7387 75%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.347,
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
                "x": 1923.417,
                "top": 316.446,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u5229\u6da6\u7387 17%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +11 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.347,
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
                "x": 1923.417,
                "top": 984.498,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u8fd0\u8425",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "\u8d39\u7528",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1571.811,
                "top": 1119.932,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 37.765,
                    "weight": 700
                  },
                  {
                    "text": "\u6210\u672c",
                    "size": 37.765,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.765,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2441.387,
                "top": 356.815,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u51c0\u5229\u6da6",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "\u5229\u6da6\u7387 14%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +11 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.347,
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
                "x": 2427.387,
                "top": 586.011,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u7a0e\u8d39",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2427.387,
                "top": 691.493,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u5176\u4ed6",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 849.064,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u9500\u552e\u4e0e\u5e02\u573a ($3.2B)",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "\u5360\u6536\u5165 36%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (6 \u4e2a\u767e\u5206\u70b9)",
                    "size": 28.649,
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
                "x": 2474.268,
                "top": 1007.938,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u7814\u53d1 ($1.2B)",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "\u5360\u6536\u5165 14%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (3 \u4e2a\u767e\u5206\u70b9)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 1149.883,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u7ba1\u7406\u8d39\u7528 ($0.6B)",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "\u5360\u6536\u5165 7%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)",
                    "size": 28.649,
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
                "x": 2474.268,
                "top": 1272.294,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "\u91cd\u7ec4",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "\u5360\u6536\u5165 1%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\" fill=\"#000000\">\u6765\u6e90\uff1a\u5b63\u5ea6\u4e1a\u7ee9</text></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-company-logo.png",
      "x": 1026,
      "y": 232,
      "width": 352,
      "height": 247,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-sales-icon.png",
      "x": 219,
      "y": 356,
      "width": 115,
      "height": 116,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-service-icon.png",
      "x": 193,
      "y": 587,
      "width": 111,
      "height": 95,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-slack-icon.png",
      "x": 151,
      "y": 789,
      "width": 130,
      "height": 128,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-marketing-icon.png",
      "x": 100,
      "y": 1027,
      "width": 116,
      "height": 120,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-mulesoft-icon.png",
      "x": 143,
      "y": 1240,
      "width": 120,
      "height": 117,
      "clearance": true
    },
    {
      "href": "data/assets/raster-annotations/salesforce/q3-fy24-tableau-icon.png",
      "x": 250,
      "y": 1166,
      "width": 117,
      "height": 118,
      "clearance": true
    }
  ]
});})();
