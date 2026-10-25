window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "sap-q1-fy24",
  "name": "SAP · Q1 FY24",
  "company": "SAP",
  "meta": {
    "company": "SAP",
    "title": "SAP Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sap-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 127.6201171875,
    "titleWeight": 800,
    "titleTextLength": 1963.787109375,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#344a62",
        "label": "#344a62"
      },
      "hub": {
        "node": "#344a62",
        "label": "#344a62"
      },
      "profit": {
        "node": "#24a324",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d90000",
        "label": "#981600"
      }
    },
    "type": {
      "name": 39.0673828125,
      "value": 36.462890625,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g data-typography-role=\"brand\" transform=\"translate(824 207)\"><defs><linearGradient id=\"sap61\" x2=\"0\" y2=\"1\"><stop stop-color=\"#00b8e6\"/><stop offset=\"1\" stop-color=\"#2260b9\"/></linearGradient></defs><path d=\"M0 0H260L130 130H0Z\" fill=\"url(#sap61)\"/><text x=\"2\" y=\"104\" fill=\"white\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"112\" font-weight=\"900\" textLength=\"190\" lengthAdjust=\"spacingAndGlyphs\">SAP</text><text x=\"160\" y=\"130\" fill=\"#2260b9\" font-size=\"22\">®</text></g><g fill=\"#777777\" font-family=\"Arial,sans-serif\" font-size=\"17\"><text x=\"56\" y=\"1006\">SaaS = Software as a Service</text><text x=\"56\" y=\"1030\">PaaS = Platform as a Service</text><text x=\"39\" y=\"1053\">IaaS = Infrastructure as a Service</text></g><text x=\"130\" y=\"1105\" font-size=\"32\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "layout": {
    "scale": 40.760302734375,
    "nodes": {
      "saas_paas": {
        "x": 434.9501953125,
        "y": 420.62548828125,
        "width": 72.92578125,
        "height": 152.36279296875
      },
      "iaas": {
        "x": 434.9501953125,
        "y": 739.67578125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "software_licenses": {
        "x": 434.9501953125,
        "y": 899.85205078125,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "software_support": {
        "x": 434.9501953125,
        "y": 1067.841796875,
        "width": 72.92578125,
        "height": 115.89990234375
      },
      "cloud": {
        "x": 808.69482421875,
        "y": 557.361328125,
        "width": 72.92578125,
        "height": 158.8740234375
      },
      "licenses_support": {
        "x": 808.69482421875,
        "y": 924.5947265625,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "services": {
        "x": 808.69482421875,
        "y": 1246.24951171875,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "revenue": {
        "x": 1182.439453125,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 326.86376953125
      },
      "gross_profit": {
        "x": 1553.57958984375,
        "y": 566.47705078125,
        "width": 72.92578125,
        "height": 233.10205078125
      },
      "cost_of_revenue": {
        "x": 1558.78857421875,
        "y": 1005.333984375,
        "width": 72.92578125,
        "height": 92.45947265625
      },
      "operating_loss": {
        "x": 1763.2412109375,
        "y": 997.5205078125,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "operating_expenses": {
        "x": 1927.32421875,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 264.35595703125
      },
      "sm": {
        "x": 2303.67333984375,
        "y": 433.64794921875,
        "width": 72.92578125,
        "height": 92.45947265625
      },
      "rnd": {
        "x": 2303.67333984375,
        "y": 682.376953125,
        "width": 72.92578125,
        "height": 91.1572265625
      },
      "restructuring": {
        "x": 2303.67333984375,
        "y": 958.453125,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "ga": {
        "x": 2303.67333984375,
        "y": 1225.41357421875,
        "width": 72.92578125,
        "height": 14.32470703125
      }
    },
    "labels": {
      "saas_paas": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 325.5615234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+26% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 478.184765625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Saas/Paas",
                "size": 36.462890625,
                "weight": 800,
                "color": "#344a62"
              }
            ]
          }
        ]
      },
      "iaas": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 640.705078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "(17%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 720.4025390625001,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Iaas",
                "size": 36.462890625,
                "weight": 800,
                "color": "#344a62"
              }
            ]
          }
        ]
      },
      "software_licenses": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 800.88134765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "(26%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 882.9228515625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Software Licenses",
                "size": 36.462890625,
                "weight": 800,
                "color": "#1e6fbe"
              }
            ]
          }
        ]
      },
      "software_support": {
        "blocks": [
          {
            "x": 471.4130859375,
            "top": 976.6845703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.6962890625,
            "top": 1106.9091796875,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Software Support",
                "size": 36.462890625,
                "weight": 800,
                "color": "#1e6fbe"
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 845.15771484375,
            "top": 410.20751953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#344a62"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+24% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "licenses_support": {
        "blocks": [
          {
            "x": 845.15771484375,
            "top": 726.6533203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Licenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#1e6fbe"
              },
              {
                "text": "& Support",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 845.15771484375,
            "top": 1151.185546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#00b5e5"
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 776.138671875,
            "top": 1247.5517578125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#00b5e5"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1218.90234375,
            "top": 516.99169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#344a62"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+8% Y/Y",
                "size": 27.34716796875,
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
            "x": 1590.04248046875,
            "top": 378.95361328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
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
                "text": "72% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 1595.25146484375,
            "top": 1118.62939453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1799.7041015625,
            "top": 1047.005859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "loss",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1963.787109375,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "expenses",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 447.97265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 688.88818359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 958.453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2491.19677734375,
            "top": 1195.4619140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#981600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#981600"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "saas_paas",
      "label": "Saas/Paas",
      "value": 3.8,
      "valueText": "€3.8B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#344a62",
      "labelColor": "#344a62",
      "linkTint": "#9da6ae",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "iaas",
      "label": "Iaas",
      "value": 0.2,
      "valueText": "€0.2B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#344a62",
      "labelColor": "#344a62",
      "linkTint": "#9da6ae",
      "notes": [
        "(17%) Y/Y"
      ]
    },
    {
      "id": "software_licenses",
      "label": "Software Licenses",
      "value": 0.2,
      "valueText": "€0.2B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#1e6fbe",
      "labelColor": "#1e6fbe",
      "linkTint": "#91b6dc",
      "notes": [
        "(26%) Y/Y"
      ]
    },
    {
      "id": "software_support",
      "label": "Software Support",
      "value": 2.8,
      "valueText": "€2.8B",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#1e6fbe",
      "labelColor": "#1e6fbe",
      "linkTint": "#91b6dc",
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "cloud",
      "label": "Cloud",
      "value": 3.9,
      "valueText": "€3.9B",
      "type": "source",
      "col": 1,
      "order": 4,
      "color": "#344a62",
      "labelColor": "#344a62",
      "linkTint": "#9da6ae",
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "licenses_support",
      "label": [
        "Licenses",
        "& Support"
      ],
      "value": 3.0,
      "valueText": "€3.0B",
      "type": "source",
      "col": 1,
      "order": 5,
      "color": "#1e6fbe",
      "labelColor": "#1e6fbe",
      "linkTint": "#91b6dc",
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 1.1,
      "valueText": "€1.1B",
      "type": "source",
      "col": 1,
      "order": 6,
      "color": "#00b5e5",
      "labelColor": "#00b5e5",
      "linkTint": "#83d7ee",
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 8.0,
      "valueText": "€8.0B",
      "type": "hub",
      "col": 2,
      "order": 7,
      "color": "#344a62",
      "labelColor": "#344a62",
      "linkTint": "#9da6ae",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 5.8,
      "valueText": "€5.8B",
      "type": "profit",
      "col": 3,
      "order": 8,
      "color": "#24a324",
      "labelColor": "#008f47",
      "linkTint": "#98cc96",
      "notes": [
        "72% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2.3,
      "valueText": "(€2.3B)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 0.8,
      "valueText": "(€0.8B)",
      "type": "cost",
      "col": 3,
      "order": 10,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 6.5,
      "valueText": "(€6.5B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 2.3,
      "valueText": "(€2.3B)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1.7,
      "valueText": "(€1.7B)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 2.2,
      "valueText": "(€2.2B)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "type": "cost",
      "col": 5,
      "order": 15,
      "color": "#d90000",
      "labelColor": "#981600",
      "linkTint": "#e58383",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "saas_paas",
      "target": "cloud",
      "value": 3.8,
      "sourceWidth": 152.36279296875,
      "targetWidth": 152.36279296875,
      "y0": 496.806884765625,
      "y1": 633.542724609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#9da6ae",
        "right": "#9da6ae"
      }
    },
    {
      "source": "iaas",
      "target": "cloud",
      "value": 0.2,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 742.931396484375,
      "y1": 712.979736328125,
      "sourceOrder": 1,
      "targetOrder": 1,
      "linkTint": {
        "left": "#9da6ae",
        "right": "#9da6ae"
      }
    },
    {
      "source": "software_licenses",
      "target": "licenses_support",
      "value": 0.2,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "y0": 903.7587890625,
      "y1": 928.50146484375,
      "sourceOrder": 2,
      "targetOrder": 2,
      "linkTint": {
        "left": "#91b6dc",
        "right": "#91b6dc"
      }
    },
    {
      "source": "software_support",
      "target": "licenses_support",
      "value": 2.8,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "y0": 1125.791748046875,
      "y1": 990.358154296875,
      "sourceOrder": 3,
      "targetOrder": 3,
      "linkTint": {
        "left": "#91b6dc",
        "right": "#91b6dc"
      }
    },
    {
      "source": "cloud",
      "target": "revenue",
      "value": 3.9,
      "sourceWidth": 158.8740234375,
      "targetWidth": 158.8740234375,
      "y0": 636.79833984375,
      "y1": 744.884765625,
      "sourceOrder": 4,
      "targetOrder": 4,
      "linkTint": {
        "left": "#9da6ae",
        "right": "#9da6ae"
      }
    },
    {
      "source": "licenses_support",
      "target": "revenue",
      "value": 3.0,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "y0": 986.451416015625,
      "y1": 886.178466796875,
      "sourceOrder": 5,
      "targetOrder": 5,
      "linkTint": {
        "left": "#91b6dc",
        "right": "#9da6ae"
      }
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 1.1,
      "sourceWidth": 42.97412109375,
      "targetWidth": 44.2763671875,
      "y0": 1267.736572265625,
      "y1": 970.17333984375,
      "sourceOrder": 6,
      "targetOrder": 6,
      "linkTint": {
        "left": "#83d7ee",
        "right": "#9da6ae"
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 5.8,
      "sourceWidth": 234.404296875,
      "targetWidth": 233.10205078125,
      "y0": 782.64990234375,
      "y1": 683.028076171875,
      "sourceOrder": 7,
      "targetOrder": 7,
      "linkTint": {
        "left": "#98cc96",
        "right": "#98cc96"
      }
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.3,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "y0": 946.081787109375,
      "y1": 1051.563720703125,
      "sourceOrder": 8,
      "targetOrder": 8,
      "linkTint": {
        "left": "#e58383",
        "right": "#e58383"
      }
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.8,
      "sourceWidth": 233.10205078125,
      "targetWidth": 233.10205078125,
      "y0": 683.028076171875,
      "y1": 781.998779296875,
      "sourceOrder": 9,
      "targetOrder": 9,
      "linkTint": {
        "left": "#98cc96",
        "right": "#e58383"
      }
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.8,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "y0": 1013.1474609375,
      "y1": 914.1767578125,
      "sourceOrder": 10,
      "targetOrder": 10,
      "linkTint": {
        "left": "#e58383",
        "right": "#e58383"
      }
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.3,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "y0": 711.677490234375,
      "y1": 479.877685546875,
      "sourceOrder": 11,
      "targetOrder": 11,
      "linkTint": {
        "left": "#e58383",
        "right": "#e58383"
      }
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.7,
      "sourceWidth": 91.1572265625,
      "targetWidth": 91.1572265625,
      "y0": 803.48583984375,
      "y1": 727.95556640625,
      "sourceOrder": 12,
      "targetOrder": 12,
      "linkTint": {
        "left": "#e58383",
        "right": "#e58383"
      }
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 2.2,
      "sourceWidth": 67.716796875,
      "targetWidth": 67.716796875,
      "y0": 882.9228515625,
      "y1": 992.3115234375,
      "sourceOrder": 13,
      "targetOrder": 13,
      "linkTint": {
        "left": "#e58383",
        "right": "#e58383"
      }
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.4,
      "sourceWidth": 13.0224609375,
      "targetWidth": 14.32470703125,
      "y0": 923.29248046875,
      "y1": 1232.575927734375,
      "sourceOrder": 14,
      "targetOrder": 14,
      "linkTint": {
        "left": "#e58383",
        "right": "#e58383"
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "SAP · 2024 财年第一季度",
      "meta": {
        "title": "SAP 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月"
      },
      "nodes": {
        "saas_paas": {
          "label": "SaaS/PaaS",
          "notes": [
            "同比 +26%"
          ]
        },
        "iaas": {
          "label": "IaaS",
          "notes": [
            "同比 (17%)"
          ]
        },
        "software_licenses": {
          "label": "软件许可证",
          "notes": [
            "同比 (26%)"
          ]
        },
        "software_support": {
          "label": "软件支持",
          "notes": [
            "同比 (3%)"
          ]
        },
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +24%"
          ]
        },
        "licenses_support": {
          "label": "许可证与支持",
          "notes": [
            "同比 (5%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 (0%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 72%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": []
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "saas_paas": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 325.5615234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#344a62"
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 478.184765625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "SaaS/PaaS",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#344a62"
                  }
                ]
              }
            ]
          },
          "iaas": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 640.705078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#344a62"
                  },
                  {
                    "text": "同比 (17%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 720.4025390625001,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "IaaS",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#344a62"
                  }
                ]
              }
            ]
          },
          "software_licenses": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 800.88134765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#1e6fbe"
                  },
                  {
                    "text": "同比 (26%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 882.9228515625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "软件许可证",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#1e6fbe"
                  }
                ]
              }
            ]
          },
          "software_support": {
            "blocks": [
              {
                "x": 471.4130859375,
                "top": 976.6845703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#1e6fbe"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.6962890625,
                "top": 1106.9091796875,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "软件支持",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#1e6fbe"
                  }
                ]
              }
            ]
          },
          "cloud": {
            "blocks": [
              {
                "x": 845.15771484375,
                "top": 410.20751953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "云",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#344a62"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#344a62"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "licenses_support": {
            "blocks": [
              {
                "x": 845.15771484375,
                "top": 726.6533203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "许可证与支持",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#1e6fbe"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#1e6fbe"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#1e6fbe"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 845.15771484375,
                "top": 1151.185546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#00b5e5"
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 776.138671875,
                "top": 1247.5517578125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#00b5e5"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1218.90234375,
                "top": 516.99169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#344a62"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#344a62"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27.34716796875,
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
                "x": 1590.04248046875,
                "top": 378.95361328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
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
                    "text": "毛利率 72%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1595.25146484375,
                "top": 1118.62939453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1799.7041015625,
                "top": 1047.005859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1963.787109375,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 36.462890625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 447.97265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 688.88818359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 958.453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2491.19677734375,
                "top": 1195.4619140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#981600"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#981600"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g data-typography-role=\"brand\" transform=\"translate(824 207)\"><defs><linearGradient id=\"sap61\" x2=\"0\" y2=\"1\"><stop stop-color=\"#00b8e6\"/><stop offset=\"1\" stop-color=\"#2260b9\"/></linearGradient></defs><path d=\"M0 0H260L130 130H0Z\" fill=\"url(#sap61)\"/><text x=\"2\" y=\"104\" fill=\"white\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"112\" font-weight=\"900\" textLength=\"190\" lengthAdjust=\"spacingAndGlyphs\">SAP</text><text x=\"160\" y=\"130\" fill=\"#2260b9\" font-size=\"22\">®</text></g><g fill=\"#777777\" font-family=\"Arial,sans-serif\" font-size=\"17\"><text x=\"56\" y=\"1006\">SaaS = 软件即服务</text><text x=\"56\" y=\"1030\">PaaS = 平台即服务</text><text x=\"39\" y=\"1053\">IaaS = 基础设施即服务</text></g><text x=\"130\" y=\"1105\" font-size=\"32\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
