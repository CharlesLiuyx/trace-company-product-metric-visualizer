(function(){const ICONS=window.SANKEY_BUSINESS_ICONS||{};window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "samsung-q3-fy26",
  "name": "Samsung · Q3 FY26",
  "company": "Samsung",
  "meta": {
    "company": "Samsung",
    "title": "Samsung Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "",
    "unit": "T",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/samsung-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 130.224609375,
    "titleWeight": 800,
    "titleTextLength": 2297.162109375,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2029a5",
        "label": "#2029a5"
      },
      "hub": {
        "node": "#2029a5",
        "label": "#2029a5"
      },
      "profit": {
        "node": "#25a126",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d60000",
        "label": "#971100"
      }
    },
    "linkTint": {
      "source": "#8f98cf",
      "hub": "#8f98cf",
      "profit": "#99cc98",
      "cost": "#e38283"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 7.8134765625
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": `<g transform="scale(1.30224609375)"><text x="151" y="217" font-size="30" font-weight="800" fill="#15527a">In KRW trillion</text><g transform="translate(490 254) scale(0.814)" data-typography-role="brand">${ICONS.samsungCompanyWordmark||''}</g><g transform="translate(41 255) scale(0.79)" data-typography-role="brand">${ICONS.samsungDeviceExperienceCluster||''}</g><g transform="translate(165 534) scale(0.806)" data-typography-role="brand">${ICONS.samsungDeviceSolutionsChipCluster||''}</g><g transform="translate(74 833) scale(0.737)" data-typography-role="brand">${ICONS.samsungDisplayWordmark||''}</g><g transform="translate(74 897) scale(0.676)" data-typography-role="brand">${ICONS.samsungHarmanWordmark||''}</g></g>`,
"layout": {
    "scale": 1.692919921875,
    "nodes": {
      "device_experience": {
        "x": 434.9501953125,
        "y": 466.2041015625,
        "width": 72.92578125,
        "height": 88.552734375
      },
      "device_solutions": {
        "x": 434.9501953125,
        "y": 701.91064453125,
        "width": 72.92578125,
        "height": 247.4267578125
      },
      "samsung_display": {
        "x": 434.9501953125,
        "y": 1097.79345703125,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "harman": {
        "x": 434.9501953125,
        "y": 1259.27197265625,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "segment_sales": {
        "x": 808.69482421875,
        "y": 648.5185546875,
        "width": 72.92578125,
        "height": 356.8154296875
      },
      "revenue": {
        "x": 1182.439453125,
        "y": 724.048828125,
        "width": 72.92578125,
        "height": 329.46826171875
      },
      "eliminations": {
        "x": 1182.439453125,
        "y": 1209.78662109375,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "gross_profit": {
        "x": 1556.18408203125,
        "y": 648.5185546875,
        "width": 72.92578125,
        "height": 227.89306640625
      },
      "cost_of_revenue": {
        "x": 1556.18408203125,
        "y": 1044.4013671875,
        "width": 72.92578125,
        "height": 101.5751953125
      },
      "operating_profit": {
        "x": 1929.9287109375,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 182.314453125
      },
      "operating_expenses": {
        "x": 1929.9287109375,
        "y": 915.47900390625,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "other": {
        "x": 2303.67333984375,
        "y": 862.0869140625,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "net_profit": {
        "x": 2303.67333984375,
        "y": 446.67041015625,
        "width": 72.92578125,
        "height": 126.31787109375
      },
      "tax": {
        "x": 2303.67333984375,
        "y": 724.048828125,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "rnd": {
        "x": 2303.67333984375,
        "y": 1023.5654296875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "sga": {
        "x": 2303.67333984375,
        "y": 1211.0888671875,
        "width": 72.92578125,
        "height": 22.13818359375
      }
    },
    "labels": {
      "device_experience": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 371.14013671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#2029a5"
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 412.81201171875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Device eXperience",
                "size": 36.462890625,
                "weight": 800,
                "color": "#2029a5"
              },
              {
                "text": "Digital TVs",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Refrigerators",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Mobile phones",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Communication systems",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "side-description"
          }
        ]
      },
      "device_solutions": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 605.54443359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#2029a5"
              },
              {
                "text": "+344% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 411.509765625,
            "top": 812.6015625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Device Solutions",
                "size": 36.462890625,
                "weight": 800,
                "color": "#2029a5"
              },
              {
                "text": "Memory, Foundry,",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "& System LSI",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "side-description"
          }
        ]
      },
      "samsung_display": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 1000.125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#2029a5"
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "harman": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 1161.603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#2029a5"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "segment_sales": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1218.90234375,
            "top": 576.89501953125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Sales",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#2029a5"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#2029a5"
              },
              {
                "text": "+127% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1218.90234375,
            "top": 1254.06298828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 35.16064453125,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#971100"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1592.64697265625,
            "top": 460.9951171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "69% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+30pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1966.3916015625,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "55% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+41pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 432.345703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "39% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+24pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1592.64697265625,
            "top": 1161.603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.16064453125,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "revenue",
                "size": 33.8583984375,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#971100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1966.3916015625,
            "top": 979.2890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16064453125,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "expenses",
                "size": 33.8583984375,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#971100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 703.212890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#971100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 832.13525390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#971100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 974.080078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "development",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#971100"
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2492.4990234375,
            "top": 1177.23046875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Sales, general",
                "size": 31.25390625,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "& admin",
                "size": 29.95166015625,
                "weight": 800,
                "color": "#971100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#971100"
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "device_experience",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Device eXperience",
      "value": 52.1,
      "color": "#2029a5",
      "labelColor": "#2029a5",
      "linkTint": "#8f98cf",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "device_solutions",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Device Solutions",
      "value": 147.1,
      "color": "#2029a5",
      "labelColor": "#2029a5",
      "linkTint": "#8f98cf",
      "notes": [
        "+344% Y/Y"
      ]
    },
    {
      "id": "samsung_display",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Samsung Display",
      "value": 8,
      "color": "#2029a5",
      "labelColor": "#2029a5",
      "linkTint": "#8f98cf",
      "notes": [
        "(1%) Y/Y"
      ],
      "valueText": "8.0T"
    },
    {
      "id": "harman",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Harman",
      "value": 4.3,
      "color": "#2029a5",
      "labelColor": "#2029a5",
      "linkTint": "#8f98cf",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "segment_sales",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 211.5,
      "color": "#2029a5",
      "labelColor": "#2029a5",
      "linkTint": "#8f98cf",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Sales",
      "value": 195.3,
      "notes": [
        "+127% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": -16.2,
      "notes": [],
      "valueText": "(16.2T)"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 135.3,
      "notes": [
        "69% margin",
        "+30pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 60,
      "notes": [],
      "valueText": "(60.0T)"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 107.5,
      "notes": [
        "55% margin",
        "+41pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 27.8,
      "notes": [],
      "valueText": "(27.8T)"
    },
    {
      "id": "other",
      "col": 6,
      "order": 0,
      "type": "cost",
      "label": "Other",
      "value": 8.9,
      "notes": [],
      "valueText": "(8.9T)"
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 75.2,
      "notes": [
        "39% margin",
        "+24pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 23.4,
      "notes": [],
      "valueText": "(23.4T)"
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": [
        "Research &",
        "development"
      ],
      "value": 14.4,
      "notes": [
        "7% of revenue",
        "(3pp) Y/Y"
      ],
      "valueText": "(14.4T)"
    },
    {
      "id": "sga",
      "col": 6,
      "order": 3,
      "type": "cost",
      "label": [
        "Sales, general",
        "& admin"
      ],
      "value": 13.4,
      "notes": [
        "7% of revenue",
        "(8pp) Y/Y"
      ],
      "valueText": "(13.4T)"
    }
  ],
  "links": [
    {
      "source": "device_experience",
      "target": "segment_sales",
      "value": 52.1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#8f98cf",
        "right": "#8f98cf"
      },
      "sourceWidth": 88.552734375,
      "targetWidth": 87.89637771498228
    },
    {
      "source": "device_solutions",
      "target": "segment_sales",
      "value": 147.1,
      "targetOrder": 1,
      "linkTint": {
        "left": "#8f98cf",
        "right": "#8f98cf"
      },
      "sourceWidth": 247.4267578125,
      "targetWidth": 248.16808372118794
    },
    {
      "source": "samsung_display",
      "target": "segment_sales",
      "value": 8,
      "targetOrder": 2,
      "linkTint": {
        "left": "#8f98cf",
        "right": "#8f98cf"
      },
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.496564716312056
    },
    {
      "source": "harman",
      "target": "segment_sales",
      "value": 4.3,
      "targetOrder": 3,
      "linkTint": {
        "left": "#8f98cf",
        "right": "#8f98cf"
      },
      "sourceWidth": 7.813476562499999,
      "targetWidth": 7.2544035350177305
    },
    {
      "source": "segment_sales",
      "target": "revenue",
      "value": 195.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#8f98cf",
        "right": "#8f98cf"
      },
      "sourceWidth": 329.4848861369681,
      "targetWidth": 329.46826171875
    },
    {
      "source": "segment_sales",
      "target": "eliminations",
      "value": 16.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 27.330543550531914,
      "targetWidth": 27.34716796875
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 135.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 228.24913369455646,
      "targetWidth": 227.89306640625,
      "linkTint": {
        "left": "#99cc98",
        "right": "#99cc98"
      }
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 60,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 101.21912802419354,
      "targetWidth": 101.5751953125
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 107.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 181.06803132795176,
      "targetWidth": 182.314453125
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 27.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 46.82503507829822,
      "targetWidth": 46.880859375
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 75.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 127.53531976744186,
      "targetWidth": 126.31787109375
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 23.4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 39.6851925872093,
      "targetWidth": 39.0673828125
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 14.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 24.28361061151079,
      "targetWidth": 23.4404296875
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 13.4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 22.59724876348921,
      "targetWidth": 22.13818359375
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 8.9,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 15.093940770348837,
      "targetWidth": 14.32470703125
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "In KRW trillion",
      "SAMSUNG DISPLAY",
      "A SAMSUNG COMPANY"
    ],
    "zh": {
      "name": "Samsung · 2026 财年第三季度",
      "meta": {
        "title": "Samsung 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月"
      },
      "nodes": {
        "device_experience": {
          "label": "设备体验",
          "notes": [
            "同比 +8%"
          ]
        },
        "device_solutions": {
          "label": "设备解决方案",
          "notes": [
            "同比 +344%"
          ]
        },
        "samsung_display": {
          "label": "三星显示",
          "notes": [
            "同比 (1%)"
          ]
        },
        "harman": {
          "label": "哈曼",
          "notes": [
            "同比 +9%"
          ]
        },
        "segment_sales": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 +127%"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 69%",
            "同比 +30 个百分点"
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
            "利润率 55%",
            "同比 +41 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 39%",
            "同比 +24 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": [
            "研究与",
            "开发"
          ],
          "notes": [
            "占收入 7%",
            "同比 (3 个百分点)"
          ]
        },
        "sga": {
          "label": [
            "销售、一般",
            "及行政"
          ],
          "notes": [
            "占收入 7%",
            "同比 (8 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "device_experience": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 371.14013671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#2029a5"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 412.81201171875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "设备体验",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#2029a5"
                  },
                  {
                    "text": "数字电视",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "冰箱",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "手机",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "通信系统",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "side-description"
              }
            ]
          },
          "device_solutions": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 605.54443359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#2029a5"
                  },
                  {
                    "text": "同比 +344%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 411.509765625,
                "top": 812.6015625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "设备解决方案",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#2029a5"
                  },
                  {
                    "text": "存储器、晶圆代工、",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "系统大规模集成电路",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "side-description"
              }
            ]
          },
          "samsung_display": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 1000.125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#2029a5"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "harman": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 1161.603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#2029a5"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "segment_sales": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1218.90234375,
                "top": 576.89501953125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售额",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#2029a5"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#2029a5"
                  },
                  {
                    "text": "同比 +127%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1218.90234375,
                "top": 1254.06298828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 35.16064453125,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#971100"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1592.64697265625,
                "top": 460.9951171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 69%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +30 个百分点",
                    "size": 27.34716796875,
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
                "x": 1966.3916015625,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 55%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +41 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 432.345703125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 39%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +24 个百分点",
                    "size": 27.34716796875,
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
                "x": 1592.64697265625,
                "top": 1161.603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35.16064453125,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "成本",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#971100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1966.3916015625,
                "top": 979.2890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35.16064453125,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "费用",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#971100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 703.212890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#971100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 832.13525390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#971100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 974.080078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "开发",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#971100"
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2492.4990234375,
                "top": 1177.23046875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售、一般",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "及行政",
                    "size": 29.95166015625,
                    "weight": 800,
                    "color": "#971100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#971100"
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
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
