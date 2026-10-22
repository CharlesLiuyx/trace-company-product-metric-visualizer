window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "jd-com-q4-fy24",
  "name": "JD.com · Q4 FY24",
  "company": "JD.com",
  "meta": {
    "company": "JD.com",
    "title": "JD.com Q4 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/jd-com-q4-fy24.png",
      "width": 2667.0,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 200.546,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2161.729,
    "periodX": -1302.246,
    "periodY": -1302.246,
    "periodNoteY": -1302.246
  },
  "render": {
    "width": 2667.0,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#15527a",
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#666666",
        "label": "#606060"
      },
      "hub": {
        "node": "#666666",
        "label": "#606060"
      },
      "profit": {
        "node": "#29a329",
        "label": "#009650"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51800"
      }
    },
    "linkTint": {
      "source": "#b2b2b2",
      "hub": "#b2b2b2",
      "profit": "#9bcd9b",
      "cost": "#e18485"
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/jd-com/company-wordmark.png",
      "x": 692.795,
      "y": 247.427,
      "width": 253.938,
      "height": 200.546
    },
    {
      "key": "business-retail-jdcom",
      "href": "data/assets/raster-annotations/jd-com/business-retail-jdcom.png",
      "x": 199.244,
      "y": 617.265,
      "width": 177.105,
      "height": 74.228
    },
    {
      "key": "business-jd-health",
      "href": "data/assets/raster-annotations/jd-com/business-jd-health.png",
      "x": 145.852,
      "y": 726.653,
      "width": 223.986,
      "height": 63.81
    },
    {
      "key": "business-logistics",
      "href": "data/assets/raster-annotations/jd-com/business-logistics.png",
      "x": 82.042,
      "y": 962.36,
      "width": 290.401,
      "height": 74.228
    },
    {
      "key": "business-new-businesses-cluster",
      "href": "data/assets/raster-annotations/jd-com/business-new-businesses-cluster.png",
      "x": 45.579,
      "y": 1101.7,
      "width": 329.468,
      "height": 85.948
    }
  ],
  "nodes": [
    {
      "id": "jd_retail",
      "value": 42.1,
      "type": "source",
      "label": "JD Retail",
      "col": 0,
      "order": 0,
      "color": "#666666",
      "labelColor": "#606060",
      "linkTint": "#b2b2b2",
      "notes": [
        "+15% Y/Y",
        "3% operating margin"
      ]
    },
    {
      "id": "jd_logistics",
      "value": 7.1,
      "type": "source",
      "label": "JD Logistics",
      "col": 0,
      "order": 1,
      "color": "#666666",
      "labelColor": "#606060",
      "linkTint": "#b2b2b2",
      "notes": [
        "+10% Y/Y",
        "4% operating margin"
      ]
    },
    {
      "id": "new_businesses",
      "value": 0.6,
      "type": "source",
      "label": "New businesses",
      "col": 0,
      "order": 2,
      "color": "#666666",
      "labelColor": "#606060",
      "linkTint": "#b2b2b2",
      "notes": [
        "(31%) Y/Y",
        "(19%) operating margin"
      ]
    },
    {
      "id": "gross_revenue",
      "value": 49.8,
      "type": "hub",
      "label": "",
      "col": 1,
      "order": 3,
      "color": "#666666",
      "labelColor": "#606060",
      "linkTint": "#b2b2b2",
      "notes": []
    },
    {
      "id": "revenue",
      "value": 47.5,
      "type": "hub",
      "label": "Revenue",
      "col": 2,
      "order": 4,
      "color": "#666666",
      "labelColor": "#606060",
      "linkTint": "#b2b2b2",
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "intersegment_eliminations",
      "value": -2.3,
      "type": "cost",
      "label": [
        "Intrasegment",
        "eliminations"
      ],
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "gross_profit",
      "value": 7.3,
      "type": "profit",
      "label": "Gross profit",
      "col": 3,
      "order": 6,
      "color": "#29a329",
      "labelColor": "#009650",
      "linkTint": "#9bcd9b",
      "notes": [
        "15% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "value": 40.3,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "operating_profit",
      "value": 1.2,
      "type": "profit",
      "label": "Operating profit",
      "col": 4,
      "order": 8,
      "color": "#29a329",
      "labelColor": "#009650",
      "linkTint": "#9bcd9b",
      "notes": [
        "2% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "value": 6.1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "other_gains",
      "value": 0.4,
      "type": "profit",
      "label": "Other gains",
      "col": 4,
      "order": 10,
      "color": "#29a329",
      "labelColor": "#009650",
      "linkTint": "#9bcd9b",
      "notes": []
    },
    {
      "id": "net_profit",
      "value": 1.5,
      "type": "profit",
      "label": "Net profit",
      "col": 5,
      "order": 11,
      "color": "#29a329",
      "labelColor": "#009650",
      "linkTint": "#9bcd9b",
      "notes": [
        "3% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "value": 0.1,
      "type": "cost",
      "label": "Tax",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "fulfillment",
      "value": 2.8,
      "type": "cost",
      "label": "Fulfillment",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "marketing",
      "value": 2.3,
      "type": "cost",
      "label": "Marketing",
      "col": 5,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "rnd",
      "value": 0.6,
      "type": "cost",
      "label": "R&D",
      "col": 5,
      "order": 15,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "ga",
      "value": 0.3,
      "type": "cost",
      "label": [
        "General &",
        "admin"
      ],
      "col": 5,
      "order": 16,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    },
    {
      "id": "other",
      "value": 0.1,
      "type": "cost",
      "label": "Other",
      "col": 5,
      "order": 17,
      "color": "#cc0000",
      "labelColor": "#a51800",
      "linkTint": "#e18485",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "jd_retail",
      "target": "gross_revenue",
      "value": 42.1,
      "sourceWidth": 393.278,
      "targetWidth": 393.278,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "jd_logistics",
      "target": "gross_revenue",
      "value": 7.1,
      "sourceWidth": 66.415,
      "targetWidth": 66.415,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "new_businesses",
      "target": "gross_revenue",
      "value": 0.6,
      "sourceWidth": 6.511,
      "targetWidth": 6.511,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 47.5,
      "sourceWidth": 445.368,
      "targetWidth": 444.066,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "intersegment_eliminations",
      "value": 2.3,
      "sourceWidth": 20.836,
      "targetWidth": 20.836,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.3,
      "sourceWidth": 67.717,
      "targetWidth": 67.717,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd9b"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 40.3,
      "sourceWidth": 376.349,
      "targetWidth": 376.349,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "sourceWidth": 10.418,
      "targetWidth": 11.72,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.1,
      "sourceWidth": 57.299,
      "targetWidth": 57.299,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.1,
      "sourceWidth": 10.418,
      "targetWidth": 10.418,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 1.302,
      "targetWidth": 1.693,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_gains",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 3.907,
      "targetWidth": 3.907,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "fulfillment",
      "value": 2.8,
      "sourceWidth": 24.743,
      "targetWidth": 24.743,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 2.3,
      "sourceWidth": 20.836,
      "targetWidth": 20.836,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.6,
      "sourceWidth": 5.209,
      "targetWidth": 5.209,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 2.995,
      "targetWidth": 2.995,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.1,
      "sourceWidth": 2.866,
      "targetWidth": 1.302,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "jd_retail": {
        "x": 412.812,
        "y": 433.648,
        "width": 72.926,
        "height": 393.278
      },
      "jd_logistics": {
        "x": 412.812,
        "y": 996.218,
        "width": 72.926,
        "height": 66.415
      },
      "new_businesses": {
        "x": 412.812,
        "y": 1204.578,
        "width": 72.926,
        "height": 6.511
      },
      "gross_revenue": {
        "x": 786.557,
        "y": 531.316,
        "width": 72.926,
        "height": 466.204
      },
      "revenue": {
        "x": 1160.301,
        "y": 630.287,
        "width": 72.926,
        "height": 444.066
      },
      "intersegment_eliminations": {
        "x": 1160.301,
        "y": 1190.253,
        "width": 72.926,
        "height": 20.836
      },
      "gross_profit": {
        "x": 1539.255,
        "y": 530.014,
        "width": 71.624,
        "height": 67.717
      },
      "cost_of_revenue": {
        "x": 1536.65,
        "y": 829.531,
        "width": 72.926,
        "height": 376.349
      },
      "operating_profit": {
        "x": 1919.511,
        "y": 447.973,
        "width": 72.926,
        "height": 11.72
      },
      "operating_expenses": {
        "x": 1919.511,
        "y": 617.265,
        "width": 72.926,
        "height": 57.299
      },
      "other_gains": {
        "x": 2170.844,
        "y": 404.999,
        "width": 72.926,
        "height": 3.907
      },
      "net_profit": {
        "x": 2281.535,
        "y": 346.397,
        "width": 72.926,
        "height": 14.325
      },
      "tax": {
        "x": 2281.535,
        "y": 549.548,
        "width": 72.926,
        "height": 1.693
      },
      "fulfillment": {
        "x": 2281.535,
        "y": 696.702,
        "width": 72.926,
        "height": 24.743
      },
      "marketing": {
        "x": 2281.535,
        "y": 859.482,
        "width": 72.926,
        "height": 20.836
      },
      "rnd": {
        "x": 2281.535,
        "y": 1019.659,
        "width": 72.926,
        "height": 5.209
      },
      "ga": {
        "x": 2281.535,
        "y": 1173.324,
        "width": 72.926,
        "height": 2.995
      },
      "other": {
        "x": 2281.535,
        "y": 1311.362,
        "width": 72.926,
        "height": 1.302
      }
    },
    "labels": {
      "jd_retail": {
        "blocks": [
          {
            "x": 450.577,
            "top": 338.584,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "+15% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 286.494,
            "top": 485.738,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "JD Retail",
                "size": 39.067,
                "weight": 800,
                "color": "#606060"
              },
              {
                "text": "3% operating margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "jd_logistics": {
        "blocks": [
          {
            "x": 446.67,
            "top": 902.457,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "+10% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 212.266,
            "top": 1037.89,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "4% operating margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "new_businesses": {
        "blocks": [
          {
            "x": 446.67,
            "top": 1113.42,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#606060"
              },
              {
                "text": "(31%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226.591,
            "top": 1185.044,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "New businesses",
                "size": 39.067,
                "weight": 800,
                "color": "#606060"
              },
              {
                "text": "(19%) operating margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1196.764,
            "top": 481.831,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800,
                "color": "#606060"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#606060"
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
      "intersegment_eliminations": {
        "blocks": [
          {
            "x": 1196.764,
            "top": 1224.111,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Intrasegment",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "eliminations",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1574.416,
            "top": 343.793,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 800,
                "color": "#009650"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#009650"
              },
              {
                "text": "15% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1573.113,
            "top": 1224.111,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1955.974,
            "top": 263.054,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800,
                "color": "#009650"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#009650"
              },
              {
                "text": "2% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1950.765,
            "top": 688.888,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "expenses",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "other_gains": {
        "blocks": [
          {
            "x": 2207.307,
            "top": 421.928,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other gains",
                "size": 32.556,
                "weight": 800,
                "color": "#009650"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#009650"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 285.192,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800,
                "color": "#009650"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#009650"
              },
              {
                "text": "3% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 2474.268,
            "top": 515.689,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Tax",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "fulfillment": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 670.657,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Fulfillment",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 830.833,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Marketing",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 983.196,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "R&D",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 1117.327,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "General &",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "admin",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2474.268,
            "top": 1273.597,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 32.556,
                "weight": 800,
                "color": "#a51800"
              },
              {
                "text": "$value",
                "size": 32.556,
                "weight": 400,
                "color": "#a51800"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "JD.com · 2024 财年第四季度",
      "meta": {
        "title": "JD.com 2024 财年第四季度利润表",
        "period": ""
      },
      "nodes": {
        "jd_retail": {
          "label": "京东零售",
          "notes": [
            "同比 +15%",
            "营业利润率 3%"
          ]
        },
        "jd_logistics": {
          "label": "京东物流",
          "notes": [
            "同比 +10%",
            "营业利润率 4%"
          ]
        },
        "new_businesses": {
          "label": "新业务",
          "notes": [
            "同比 (31%)",
            "营业利润率 (19%)"
          ]
        },
        "gross_revenue": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "intersegment_eliminations": {
          "label": [
            "分部间",
            "抵销"
          ],
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 15%",
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
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "other_gains": {
          "label": "其他收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 +3 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "fulfillment": {
          "label": "履约",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "ga": {
          "label": [
            "管理",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "jd_retail": {
            "blocks": [
              {
                "x": 450.577,
                "top": 338.584,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 286.494,
                "top": 485.738,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "京东零售",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#606060"
                  },
                  {
                    "text": "营业利润率 3%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "jd_logistics": {
            "blocks": [
              {
                "x": 446.67,
                "top": 902.457,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 212.266,
                "top": 1037.89,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润率 4%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "new_businesses": {
            "blocks": [
              {
                "x": 446.67,
                "top": 1113.42,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 (31%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 226.591,
                "top": 1185.044,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "新业务",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#606060"
                  },
                  {
                    "text": "营业利润率 (19%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1196.764,
                "top": 481.831,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#606060"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#606060"
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "intersegment_eliminations": {
            "blocks": [
              {
                "x": 1196.764,
                "top": 1224.111,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "分部间",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "抵销",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1574.416,
                "top": 343.793,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#009650"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#009650"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1573.113,
                "top": 1224.111,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1955.974,
                "top": 263.054,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#009650"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#009650"
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 1950.765,
                "top": 688.888,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "费用",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "other_gains": {
            "blocks": [
              {
                "x": 2207.307,
                "top": 421.928,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他收益",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#009650"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#009650"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 285.192,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#009650"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#009650"
                  },
                  {
                    "text": "利润率 3%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 2474.268,
                "top": 515.689,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "fulfillment": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 670.657,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "履约",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 830.833,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营销",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 983.196,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 1117.327,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "管理",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "费用",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2474.268,
                "top": 1273.597,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#a51800"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
                    "weight": 400,
                    "color": "#a51800"
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
