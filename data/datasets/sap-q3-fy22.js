window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "sap-q3-fy22",
  "name": "SAP · Q3 FY22",
  "company": "SAP",
  "meta": {
    "company": "SAP",
    "title": "SAP Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sap-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1958,
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
        "node": "#239f29",
        "label": "#00934d"
      },
      "cost": {
        "node": "#d90000",
        "label": "#a71b00"
      }
    }
  },
  "annotationsSvg": "<g transform=\"translate(1019 277)\" data-typography-role=\"brand\">\n        <defs>\n          <linearGradient id=\"sap-logo-gradient\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop offset=\"0\" stop-color=\"#12b7e7\"/>\n            <stop offset=\"0.55\" stop-color=\"#13a9df\"/>\n            <stop offset=\"1\" stop-color=\"#226bc0\"/>\n          </linearGradient>\n        </defs>\n        <path d=\"M0 0H338L172 168H0Z\" fill=\"url(#sap-logo-gradient)\"/>\n        <path d=\"M0 84H256L172 168H0Z\" fill=\"#226bc0\" opacity=\"0.68\"/>\n        <text x=\"18\" y=\"134\" transform=\"skewX(-8)\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"116\" font-weight=\"900\" textLength=\"236\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#ffffff\">SAP</text>\n        <text x=\"210\" y=\"168\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"31\" font-weight=\"700\" fill=\"#2272c2\">&#174;</text>\n      </g><g fill=\"#777777\" font-size=\"23\"><text x=\"73\" y=\"1310\">SaaS = Software as a Service</text><text x=\"73\" y=\"1341\">PaaS = Platform as a Service</text><text x=\"73\" y=\"1372\">IaaS = Infrastructure as a Service</text></g>",
  "nodes": [
    {
      "id": "saas",
      "label": "SaaS",
      "value": 2.6,
      "valueText": "€2.6B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#344a62",
      "labelColor": "#344a62",
      "notes": [
        "+39% Y/Y",
        "76% gross margin"
      ]
    },
    {
      "id": "paas",
      "label": "PaaS",
      "value": 0.4,
      "valueText": "€0.4B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#344a62",
      "labelColor": "#344a62",
      "notes": [
        "+56% Y/Y",
        "78% gross margin"
      ]
    },
    {
      "id": "iaas",
      "label": "Iaas",
      "value": 0.3,
      "valueText": "€0.3B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#344a62",
      "labelColor": "#344a62",
      "notes": [
        "+5% Y/Y",
        "21% gross margin"
      ]
    },
    {
      "id": "software_licenses",
      "label": "Software Licenses",
      "value": 0.4,
      "valueText": "€0.4B",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#1e6fbe",
      "labelColor": "#1e6fbe",
      "notes": [
        "(38%) Y/Y"
      ]
    },
    {
      "id": "software_support",
      "label": "Software Support",
      "value": 3.0,
      "valueText": "€3.0B",
      "type": "source",
      "col": 0,
      "order": 4,
      "color": "#1e6fbe",
      "labelColor": "#1e6fbe",
      "notes": [
        "+5% Y/Y",
        "87% gross margin"
      ]
    },
    {
      "id": "cloud",
      "label": "Cloud",
      "value": 3.3,
      "valueText": "€3.3B",
      "type": "source",
      "col": 1,
      "order": 5,
      "color": "#344a62",
      "labelColor": "#344a62",
      "notes": [
        "+38% Y/Y"
      ]
    },
    {
      "id": "licenses_support",
      "label": "Licenses & Support",
      "value": 3.4,
      "valueText": "€3.4B",
      "type": "source",
      "col": 1,
      "order": 6,
      "color": "#1e6fbe",
      "labelColor": "#1e6fbe",
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 1.1,
      "valueText": "€1.1B",
      "type": "source",
      "col": 1,
      "order": 7,
      "color": "#00b4e5",
      "labelColor": "#00b4e5",
      "notes": [
        "+21% Y/Y",
        "24% gross margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 7.8,
      "valueText": "€7.8B",
      "type": "hub",
      "col": 2,
      "order": 8,
      "color": "#344a62",
      "labelColor": "#344a62",
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 5.6,
      "valueText": "€5.6B",
      "type": "profit",
      "col": 3,
      "order": 9,
      "color": "#239f29",
      "labelColor": "#00934d",
      "notes": [
        "71% margin",
        "Unchanged"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2.3,
      "valueText": "(€2.3B)",
      "type": "cost",
      "col": 3,
      "order": 10,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.2,
      "valueText": "€1.2B",
      "type": "profit",
      "col": 4,
      "order": 11,
      "color": "#239f29",
      "labelColor": "#00934d",
      "notes": [
        "16% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.4,
      "valueText": "(€4.4B)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.5,
      "valueText": "€0.5B",
      "type": "profit",
      "col": 5,
      "order": 13,
      "color": "#239f29",
      "labelColor": "#00934d",
      "notes": [
        "7% margin",
        "(19pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "financial",
      "label": "Financial",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "type": "cost",
      "col": 5,
      "order": 15,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.1,
      "valueText": "(€0.1B)",
      "type": "cost",
      "col": 5,
      "order": 16,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 2.3,
      "valueText": "(€2.3B)",
      "type": "cost",
      "col": 5,
      "order": 17,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1.6,
      "valueText": "(€1.6B)",
      "type": "cost",
      "col": 5,
      "order": 18,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.5,
      "valueText": "(€0.5B)",
      "type": "cost",
      "col": 5,
      "order": 19,
      "color": "#d90000",
      "labelColor": "#a71b00",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "saas",
      "target": "cloud",
      "value": 2.6,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      },
      "sourceWidth": 93.762,
      "y0": 472.715,
      "sourceOrder": 0,
      "targetWidth": 91.315,
      "y1": 571.765,
      "targetOrder": 0
    },
    {
      "source": "paas",
      "target": "cloud",
      "value": 0.4,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      },
      "sourceWidth": 15.627,
      "y0": 636.798,
      "sourceOrder": 0,
      "targetWidth": 14.048,
      "y1": 624.447,
      "targetOrder": 1
    },
    {
      "source": "iaas",
      "target": "cloud",
      "value": 0.3,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      },
      "sourceWidth": 9.116,
      "y0": 761.163,
      "sourceOrder": 0,
      "targetWidth": 10.536,
      "y1": 636.739,
      "targetOrder": 2
    },
    {
      "source": "software_licenses",
      "target": "licenses_support",
      "value": 0.4,
      "linkTint": {
        "left": "#91b5d9",
        "right": "#91b5d9"
      },
      "sourceWidth": 14.325,
      "y0": 927.85,
      "sourceOrder": 0,
      "targetWidth": 14.401,
      "y1": 907.053,
      "targetOrder": 0
    },
    {
      "source": "software_support",
      "target": "licenses_support",
      "value": 3.0,
      "linkTint": {
        "left": "#91b5d9",
        "right": "#91b5d9"
      },
      "sourceWidth": 106.784,
      "y0": 1116.025,
      "sourceOrder": 0,
      "targetWidth": 108.01,
      "y1": 968.258,
      "targetOrder": 1
    },
    {
      "source": "cloud",
      "target": "revenue",
      "value": 3.3,
      "linkTint": {
        "left": "#9ca6af",
        "right": "#9ca6af"
      },
      "sourceWidth": 115.9,
      "y0": 584.057,
      "sourceOrder": 0,
      "targetWidth": 117.352,
      "y1": 690.266,
      "targetOrder": 0
    },
    {
      "source": "licenses_support",
      "target": "revenue",
      "value": 3.4,
      "linkTint": {
        "left": "#91b5d9",
        "right": "#91b5d9"
      },
      "sourceWidth": 122.411,
      "y0": 961.058,
      "sourceOrder": 0,
      "targetWidth": 120.909,
      "y1": 809.396,
      "targetOrder": 1
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 1.1,
      "linkTint": {
        "left": "#84d3e9",
        "right": "#84d3e9"
      },
      "sourceWidth": 40.37,
      "y0": 1262.528,
      "sourceOrder": 0,
      "targetWidth": 39.117,
      "y1": 889.409,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 5.6,
      "linkTint": {
        "left": "#99cd98",
        "right": "#99cd98"
      },
      "sourceWidth": 196.623,
      "y0": 729.901,
      "sourceOrder": 0,
      "targetWidth": 197.941,
      "y1": 671.959,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.3,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 80.756,
      "y0": 868.59,
      "sourceOrder": 1,
      "targetWidth": 80.739,
      "y1": 931.106,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "linkTint": {
        "left": "#99cd98",
        "right": "#99cd98"
      },
      "sourceWidth": 42.416,
      "y0": 594.196,
      "sourceOrder": 0,
      "targetWidth": 44.276,
      "y1": 520.898,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.4,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 155.525,
      "y0": 693.167,
      "sourceOrder": 1,
      "targetWidth": 154.967,
      "y1": 772.883,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.5,
      "linkTint": {
        "left": "#99cd98",
        "right": "#99cd98"
      },
      "sourceWidth": 18.448,
      "y0": 507.984,
      "sourceOrder": 0,
      "targetWidth": 19.534,
      "y1": 438.206,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 11.069,
      "y0": 522.743,
      "sourceOrder": 1,
      "targetWidth": 11.72,
      "y1": 559.315,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "financial",
      "value": 0.3,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 11.069,
      "y0": 533.812,
      "sourceOrder": 2,
      "targetWidth": 11.72,
      "y1": 655.681,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 3.69,
      "y0": 541.192,
      "sourceOrder": 3,
      "targetWidth": 2.604,
      "y1": 740.978,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.3,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 81.006,
      "y0": 735.902,
      "sourceOrder": 0,
      "targetWidth": 80.739,
      "y1": 873.807,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.6,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 56.352,
      "y0": 804.581,
      "sourceOrder": 1,
      "targetWidth": 55.997,
      "y1": 1058.075,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.5,
      "linkTint": {
        "left": "#e28686",
        "right": "#e28686"
      },
      "sourceWidth": 17.61,
      "y0": 841.562,
      "sourceOrder": 2,
      "targetWidth": 18.231,
      "y1": 1238.436,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 35.811767578125,
    "nodes": {
      "saas": {
        "x": 406.301,
        "y": 425.834,
        "width": 72.926,
        "height": 93.762
      },
      "paas": {
        "x": 406.301,
        "y": 628.985,
        "width": 72.926,
        "height": 15.627
      },
      "iaas": {
        "x": 406.301,
        "y": 756.605,
        "width": 72.926,
        "height": 9.116
      },
      "software_licenses": {
        "x": 406.301,
        "y": 920.688,
        "width": 72.926,
        "height": 14.325
      },
      "software_support": {
        "x": 406.301,
        "y": 1062.633,
        "width": 72.926,
        "height": 106.784
      },
      "cloud": {
        "x": 773.534,
        "y": 526.107,
        "width": 72.926,
        "height": 115.9
      },
      "licenses_support": {
        "x": 773.534,
        "y": 899.852,
        "width": 72.926,
        "height": 122.411
      },
      "services": {
        "x": 773.534,
        "y": 1242.343,
        "width": 72.926,
        "height": 40.37
      },
      "revenue": {
        "x": 1153.79,
        "y": 631.589,
        "width": 72.926,
        "height": 277.378
      },
      "gross_profit": {
        "x": 1530.139,
        "y": 572.988,
        "width": 72.926,
        "height": 197.941
      },
      "cost_of_revenue": {
        "x": 1535.348,
        "y": 890.736,
        "width": 72.926,
        "height": 80.739
      },
      "operating_profit": {
        "x": 1897.373,
        "y": 498.76,
        "width": 72.926,
        "height": 44.276
      },
      "operating_expenses": {
        "x": 1898.675,
        "y": 695.399,
        "width": 72.926,
        "height": 154.967
      },
      "net_profit": {
        "x": 2275.024,
        "y": 428.439,
        "width": 72.926,
        "height": 19.534
      },
      "tax": {
        "x": 2275.024,
        "y": 553.455,
        "width": 72.926,
        "height": 11.72
      },
      "financial": {
        "x": 2275.024,
        "y": 649.821,
        "width": 72.926,
        "height": 11.72
      },
      "other": {
        "x": 2275.024,
        "y": 739.676,
        "width": 72.926,
        "height": 2.604
      },
      "sm": {
        "x": 2275.024,
        "y": 833.438,
        "width": 72.926,
        "height": 80.739
      },
      "rnd": {
        "x": 2275.024,
        "y": 1030.077,
        "width": 72.926,
        "height": 55.997
      },
      "ga": {
        "x": 2275.024,
        "y": 1229.32,
        "width": 72.926,
        "height": 18.231
      }
    },
    "labels": {
      "saas": {
        "blocks": [
          {
            "x": 444.07,
            "top": 333.38,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+39% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14,
            "top": 440.16,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "SaaS",
                "size": 36.46,
                "weight": 700,
                "color": "#344a62"
              },
              {
                "text": "76% gross margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "paas": {
        "blocks": [
          {
            "x": 444.07,
            "top": 539.13,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+56% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14,
            "top": 597.73,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "PaaS",
                "size": 36.46,
                "weight": 700,
                "color": "#344a62"
              },
              {
                "text": "78% gross margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "iaas": {
        "blocks": [
          {
            "x": 444.07,
            "top": 668.05,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14,
            "top": 722.75,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Iaas",
                "size": 36.46,
                "weight": 700,
                "color": "#344a62"
              },
              {
                "text": "21% gross margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "software_licenses": {
        "blocks": [
          {
            "x": 444.07,
            "top": 825.62,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "(38%) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14,
            "top": 907.67,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Software Licenses",
                "size": 36.46,
                "weight": 700,
                "color": "#1e6fbe"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "software_support": {
        "blocks": [
          {
            "x": 444.07,
            "top": 968.87,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14,
            "top": 1079.56,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Software Support",
                "size": 36.46,
                "weight": 700,
                "color": "#1e6fbe"
              },
              {
                "text": "87% gross margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 810.0,
            "top": 375.05,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.07,
                "weight": 700,
                "color": "#344a62"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+38% Y/Y",
                "size": 27.35,
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
            "x": 810.0,
            "top": 698.0,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Licenses",
                "size": 39.07,
                "weight": 700,
                "color": "#1e6fbe"
              },
              {
                "text": "& Support",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#1e6fbe"
              },
              {
                "text": "(3%) Y/Y",
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
            "x": 1190.25,
            "top": 480.53,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.07,
                "weight": 700,
                "color": "#344a62"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#344a62"
              },
              {
                "text": "+15% Y/Y",
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
            "x": 1565.3,
            "top": 385.46,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.07,
                "weight": 700,
                "color": "#00934d"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#00934d"
              },
              {
                "text": "71% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Unchanged",
                "size": 27.35,
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
            "x": 1933.84,
            "top": 312.54,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.07,
                "weight": 700,
                "color": "#00934d"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#00934d"
              },
              {
                "text": "16% margin",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2475.62,
            "top": 339.89,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.07,
                "weight": 700,
                "color": "#00934d"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#00934d"
              },
              {
                "text": "7% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(19pp) Y/Y",
                "size": 27.35,
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
            "x": 1569.21,
            "top": 987.1,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.07,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "revenue",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1931.23,
            "top": 865.99,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Operating",
                "size": 39.07,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "expenses",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2445.62,
            "top": 527.41,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "financial": {
        "blocks": [
          {
            "x": 2445.62,
            "top": 618.57,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Financial",
                "size": 31.25,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2445.62,
            "top": 708.42,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2448.22,
            "top": 833.44,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2448.22,
            "top": 1018.36,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2448.22,
            "top": 1199.37,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700,
                "color": "#a71b00"
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#a71b00"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 810.0,
            "top": 1145.98,
            "anchor": "middle",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400,
                "color": "#00b4e5"
              },
              {
                "text": "+21% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 726.65,
            "top": 1243.65,
            "anchor": "end",
            "lineGap": 10.42,
            "lines": [
              {
                "text": "Services",
                "size": 37.77,
                "weight": 700,
                "color": "#00b4e5"
              },
              {
                "text": "24% gross margin",
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
  "i18n": {
    "zh": {
      "name": "SAP · 2022 财年第三季度",
      "meta": {
        "title": "SAP 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月"
      },
      "nodes": {
        "saas": {
          "label": "软件即服务",
          "notes": [
            "同比 +39%",
            "毛利率 76%"
          ]
        },
        "paas": {
          "label": "平台即服务",
          "notes": [
            "同比 +56%",
            "毛利率 78%"
          ]
        },
        "iaas": {
          "label": "IaaS",
          "notes": [
            "同比 +5%",
            "毛利率 21%"
          ]
        },
        "software_licenses": {
          "label": "软件许可证",
          "notes": [
            "同比 (38%)"
          ]
        },
        "software_support": {
          "label": "软件支持",
          "notes": [
            "同比 +5%",
            "毛利率 87%"
          ]
        },
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +38%"
          ]
        },
        "licenses_support": {
          "label": "许可证与支持",
          "notes": [
            "同比 (3%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +21%",
            "毛利率 24%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +15%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 71%",
            "同比持平"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 16%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (19 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "financial": {
          "label": "财务费用",
          "notes": []
        },
        "other": {
          "label": "其他",
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
        "ga": {
          "label": "管理费用",
          "notes": []
        }
      },
      "annotationsSvg": "<g transform=\"translate(1019 277)\" data-typography-role=\"brand\">\n        <defs>\n          <linearGradient id=\"sap-logo-gradient\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop offset=\"0\" stop-color=\"#12b7e7\"/>\n            <stop offset=\"0.55\" stop-color=\"#13a9df\"/>\n            <stop offset=\"1\" stop-color=\"#226bc0\"/>\n          </linearGradient>\n        </defs>\n        <path d=\"M0 0H338L172 168H0Z\" fill=\"url(#sap-logo-gradient)\"/>\n        <path d=\"M0 84H256L172 168H0Z\" fill=\"#226bc0\" opacity=\"0.68\"/>\n        <text x=\"18\" y=\"134\" transform=\"skewX(-8)\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"116\" font-weight=\"900\" textLength=\"236\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#ffffff\">SAP</text>\n        <text x=\"210\" y=\"168\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"31\" font-weight=\"700\" fill=\"#2272c2\">&#174;</text>\n      </g><g fill=\"#777777\" font-size=\"23\"><text x=\"73\" y=\"1310\">SaaS = 软件即服务</text><text x=\"73\" y=\"1341\">PaaS = 平台即服务</text><text x=\"73\" y=\"1372\">IaaS = 基础设施即服务</text></g>",
      "layout": {
        "labels": {
          "saas": {
            "blocks": [
              {
                "x": 444.07,
                "top": 333.38,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 400,
                    "color": "#344a62"
                  },
                  {
                    "text": "同比 +39%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14,
                "top": 440.16,
                "anchor": "end",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "软件即服务",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#344a62"
                  },
                  {
                    "text": "毛利率 76%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "paas": {
            "blocks": [
              {
                "x": 444.07,
                "top": 539.13,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 400,
                    "color": "#344a62"
                  },
                  {
                    "text": "同比 +56%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14,
                "top": 597.73,
                "anchor": "end",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "平台即服务",
                    "size": 36.46,
                    "weight": 700,
                    "color": "#344a62"
                  },
                  {
                    "text": "毛利率 78%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1565.3,
                "top": 385.46,
                "anchor": "middle",
                "lineGap": 10.42,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.07,
                    "weight": 700,
                    "color": "#00934d"
                  },
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 400,
                    "color": "#00934d"
                  },
                  {
                    "text": "利润率 71%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比持平",
                    "size": 27.35,
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
});
