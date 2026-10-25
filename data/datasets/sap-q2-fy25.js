window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "sap-q2-fy25",
  "name": "SAP · Q2 FY25",
  "company": "SAP",
  "meta": {
    "company": "SAP",
    "title": "SAP Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sap-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 1962.48486328125,
    "hidePeriodStamp": true,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#35495f",
        "label": "#35495f"
      },
      "hub": {
        "node": "#35495f",
        "label": "#35495f"
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
      "source": "#9da6af",
      "hub": "#9da6af",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 39.0673828125,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\">\n    <g font-family=\"Arial,sans-serif\">\n      <g transform=\"translate(777 194)\" data-typography-role=\"brand\">\n        <defs>\n          <linearGradient id=\"sap-q2-fy25-logo-gradient\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop offset=\"0\" stop-color=\"#00b7f0\"/>\n            <stop offset=\"0.55\" stop-color=\"#01adeb\"/>\n            <stop offset=\"1\" stop-color=\"#1a68c0\"/>\n          </linearGradient>\n        </defs>\n        <path d=\"M0 0H260L132 129H0Z\" fill=\"url(#sap-q2-fy25-logo-gradient)\"/>\n        <path d=\"M0 65H196L132 129H0Z\" fill=\"#1a68c0\" opacity=\"0.68\"/>\n        <text x=\"14\" y=\"103\" transform=\"skewX(-8)\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"89\" font-weight=\"900\" textLength=\"181\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#ffffff\">SAP</text>\n        <text x=\"161\" y=\"129\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"24\" font-weight=\"700\" fill=\"#1a68c0\">&#174;</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"17\" font-weight=\"400\">\n        <text x=\"56\" y=\"999\">SaaS = Software as a Service</text>\n        <text x=\"56\" y=\"1023\">PaaS = Platform as a Service</text>\n        <text x=\"56\" y=\"1047\">IaaS = Infrastructure as a Service</text>\n      </g>\n    </g></g>",
  "layout": {
    "scale": 32.55615234375,
    "nodes": {
      "saas_paas": {
        "x": 363.32666015625,
        "y": 447.97265625,
        "width": 71.62353515625,
        "height": 164.0830078125
      },
      "iaas": {
        "x": 363.32666015625,
        "y": 799.5791015625,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "software_licenses": {
        "x": 363.32666015625,
        "y": 940.2216796875,
        "width": 71.62353515625,
        "height": 5.208984375
      },
      "software_support": {
        "x": 363.32666015625,
        "y": 1095.18896484375,
        "width": 71.62353515625,
        "height": 85.9482421875
      },
      "cloud": {
        "x": 737.0712890625,
        "y": 550.85009765625,
        "width": 71.62353515625,
        "height": 166.6875
      },
      "licenses_support": {
        "x": 737.0712890625,
        "y": 964.96435546875,
        "width": 71.62353515625,
        "height": 91.1572265625
      },
      "services": {
        "x": 737.0712890625,
        "y": 1251.45849609375,
        "width": 71.62353515625,
        "height": 35.16064453125
      },
      "revenue": {
        "x": 1110.81591796875,
        "y": 660.23876953125,
        "width": 71.62353515625,
        "height": 294.3076171875
      },
      "gross_profit": {
        "x": 1484.560546875,
        "y": 554.7568359375,
        "width": 71.62353515625,
        "height": 214.87060546875
      },
      "cost_of_revenue": {
        "x": 1484.560546875,
        "y": 964.96435546875,
        "width": 71.62353515625,
        "height": 78.134765625
      },
      "operating_profit": {
        "x": 1862.2119140625,
        "y": 471.4130859375,
        "width": 72.92578125,
        "height": 80.7392578125
      },
      "operating_expenses": {
        "x": 1858.30517578125,
        "y": 729.2578125,
        "width": 71.62353515625,
        "height": 135.43359375
      },
      "other_income": {
        "x": 2112.2431640625,
        "y": 490.94677734375,
        "width": 71.62353515625,
        "height": 1.5626953125
      },
      "net_profit": {
        "x": 2232.0498046875,
        "y": 390.673828125,
        "width": 71.62353515625,
        "height": 55.99658203125
      },
      "tax": {
        "x": 2232.0498046875,
        "y": 627.6826171875,
        "width": 71.62353515625,
        "height": 24.74267578125
      },
      "sm": {
        "x": 2232.0498046875,
        "y": 799.5791015625,
        "width": 71.62353515625,
        "height": 70.3212890625
      },
      "rnd": {
        "x": 2232.0498046875,
        "y": 985.80029296875,
        "width": 71.62353515625,
        "height": 52.08984375
      },
      "ga": {
        "x": 2232.0498046875,
        "y": 1155.09228515625,
        "width": 71.62353515625,
        "height": 10.41796875
      },
      "restructuring": {
        "x": 2232.0498046875,
        "y": 1297.037109375,
        "width": 71.62353515625,
        "height": 1.30224609375
      }
    },
    "labels": {
      "saas_paas": {
        "blocks": [
          {
            "x": 401.091796875,
            "top": 358.11767578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#35495f"
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
            "x": 332.07275390625,
            "top": 509.9595703125,
            "anchor": "end",
            "lines": [
              {
                "text": "Saas/Paas",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#35495f"
              }
            ]
          }
        ]
      },
      "iaas": {
        "blocks": [
          {
            "x": 401.091796875,
            "top": 707.11962890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "(37%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 332.07275390625,
            "top": 780.8267578125,
            "anchor": "end",
            "lines": [
              {
                "text": "Iaas",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#35495f"
              }
            ]
          }
        ]
      },
      "software_licenses": {
        "blocks": [
          {
            "x": 401.091796875,
            "top": 849.064453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "(15%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 332.07275390625,
            "top": 922.77158203125,
            "anchor": "end",
            "lines": [
              {
                "text": "Software Licenses",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#1a68c0"
              }
            ]
          }
        ]
      },
      "software_support": {
        "blocks": [
          {
            "x": 401.091796875,
            "top": 1004.03173828125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 332.07275390625,
            "top": 1118.10849609375,
            "anchor": "end",
            "lines": [
              {
                "text": "Software Support",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#1a68c0"
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 772.23193359375,
            "top": 404.99853515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cloud",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#35495f"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#35495f"
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
            "x": 772.23193359375,
            "top": 772.23193359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Licenses & Support",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#1a68c0"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "(6%) Y/Y",
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
            "x": 772.23193359375,
            "top": 1160.30126953125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#02afeb"
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 709.72412109375,
            "top": 1248.984228515625,
            "anchor": "end",
            "lines": [
              {
                "text": "Services",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#02afeb"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1147.27880859375,
            "top": 518.2939453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#35495f"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#35495f"
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
      "gross_profit": {
        "blocks": [
          {
            "x": 1521.0234375,
            "top": 369.837890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "73% margin",
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
            "x": 1521.0234375,
            "top": 1061.33056640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
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
            "x": 1893.4658203125,
            "top": 290.40087890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "27% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+12pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1893.4658203125,
            "top": 886.82958984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating expenses",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2150.00830078125,
            "top": 511.78271484375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 355.51318359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "19% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+8pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2422.177734375,
            "top": 606.8466796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
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
            "x": 2422.177734375,
            "top": 781.34765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "S&M",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "24% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2422.177734375,
            "top": 954.54638671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "R&D",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "18% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2422.177734375,
            "top": 1103.00244140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "4% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2422.177734375,
            "top": 1235.83154296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "0% of revenue",
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
      "id": "saas_paas",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Saas/Paas",
      "value": 5.0,
      "valueText": "€5.0B",
      "notes": [
        "+26% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "iaas",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Iaas",
      "value": 0.1,
      "valueText": "€0.1B",
      "notes": [
        "(37%) Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "software_licenses",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Software Licenses",
      "value": 0.2,
      "valueText": "€0.2B",
      "notes": [
        "(15%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0",
      "linkTint": "#91b4db"
    },
    {
      "id": "software_support",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Software Support",
      "value": 2.6,
      "valueText": "€2.6B",
      "notes": [
        "(5%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0",
      "linkTint": "#91b4db"
    },
    {
      "id": "cloud",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": "Cloud",
      "value": 5.1,
      "valueText": "€5.1B",
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f",
      "linkTint": "#9da6af"
    },
    {
      "id": "licenses_support",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Licenses & Support",
      "value": 2.8,
      "valueText": "€2.8B",
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0",
      "linkTint": "#91b4db"
    },
    {
      "id": "services",
      "col": 1,
      "order": 2,
      "type": "source",
      "label": "Services",
      "value": 1.1,
      "valueText": "€1.1B",
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#02afeb",
      "labelColor": "#02afeb",
      "linkTint": "#86d3ee"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 9.0,
      "valueText": "€9.0B",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 6.6,
      "valueText": "€6.6B",
      "notes": [
        "73% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 2.4,
      "valueText": "(€2.4B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.5,
      "valueText": "€2.5B",
      "notes": [
        "27% margin",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 4.3,
      "valueText": "(€4.3B)",
      "notes": []
    },
    {
      "id": "other_income",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.046,
      "valueText": "€46M",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.7,
      "valueText": "€1.7B",
      "notes": [
        "19% margin",
        "+8pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.8,
      "valueText": "(€0.8B)",
      "notes": []
    },
    {
      "id": "sm",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": "S&M",
      "value": 2.2,
      "valueText": "(€2.2B)",
      "notes": [
        "24% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 1.6,
      "valueText": "(€1.6B)",
      "notes": [
        "18% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 6,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "4% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "col": 6,
      "order": 5,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.029,
      "valueText": "(€29M)",
      "notes": [
        "0% of revenue",
        "(8pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "saas_paas",
      "target": "cloud",
      "value": 5.0,
      "sourceWidth": 164.0830078125,
      "targetWidth": 164.0830078125,
      "y0": 530.01416015625,
      "y1": 632.8916015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9da6af"
    },
    {
      "source": "iaas",
      "target": "cloud",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 800.88134765625,
      "y1": 716.2353515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9da6af"
    },
    {
      "source": "software_licenses",
      "target": "licenses_support",
      "value": 0.2,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "y0": 942.826171875,
      "y1": 967.56884765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#91b4db"
    },
    {
      "source": "software_support",
      "target": "licenses_support",
      "value": 2.6,
      "sourceWidth": 85.9482421875,
      "targetWidth": 85.9482421875,
      "y0": 1138.1630859375,
      "y1": 1013.1474609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#91b4db"
    },
    {
      "source": "cloud",
      "target": "revenue",
      "value": 5.1,
      "sourceWidth": 166.6875,
      "targetWidth": 166.6875,
      "y0": 634.19384765625,
      "y1": 743.58251953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9da6af"
    },
    {
      "source": "licenses_support",
      "target": "revenue",
      "value": 2.8,
      "sourceWidth": 91.1572265625,
      "targetWidth": 91.1572265625,
      "y0": 1010.54296875,
      "y1": 872.5048828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#91b4db"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 1.1,
      "sourceWidth": 35.16064453125,
      "targetWidth": 36.462890625,
      "y0": 1269.038818359375,
      "y1": 936.31494140625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#86d3ee"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6.6,
      "sourceWidth": 214.87060546875,
      "targetWidth": 214.87060546875,
      "y0": 767.674072265625,
      "y1": 662.192138671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.4,
      "sourceWidth": 79.43701171875,
      "targetWidth": 78.134765625,
      "y0": 914.827880859375,
      "y1": 1004.03173828125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.5,
      "sourceWidth": 79.43701171875,
      "targetWidth": 80.7392578125,
      "y0": 594.475341796875,
      "y1": 511.78271484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.3,
      "sourceWidth": 135.43359375,
      "targetWidth": 135.43359375,
      "y0": 701.91064453125,
      "y1": 796.974609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.654,
      "sourceWidth": 55.99658203125,
      "targetWidth": 54.6943359375,
      "y0": 499.411376953125,
      "y1": 418.02099609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.8,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "y0": 539.781005859375,
      "y1": 640.053955078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.046,
      "sourceWidth": 1.5626953124999852,
      "targetWidth": 1.30224609375,
      "y0": 491.72812500000003,
      "y1": 446.019287109375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.2,
      "sourceWidth": 70.3212890625,
      "targetWidth": 70.3212890625,
      "y0": 764.41845703125,
      "y1": 834.73974609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.6,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 825.6240234375,
      "y1": 1011.84521484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.4,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 856.8779296875,
      "y1": 1160.30126953125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.029,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "y0": 863.38916015625,
      "y1": 1297.688232421875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "SAP · 2025 财年第二季度",
      "meta": {
        "title": "SAP 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月"
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
            "同比 (37%)"
          ]
        },
        "software_licenses": {
          "label": "软件许可证",
          "notes": [
            "同比 (15%)"
          ]
        },
        "software_support": {
          "label": "软件支持",
          "notes": [
            "同比 (5%)"
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
            "同比 (6%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 (4%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 73%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 27%",
            "同比 +12 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 19%",
            "同比 +8 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 24%",
            "同比 (3 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 4%",
            "同比 (0 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 0%",
            "同比 (8 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "saas_paas": {
            "blocks": [
              {
                "x": 401.091796875,
                "top": 358.11767578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#35495f"
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
                "x": 332.07275390625,
                "top": 509.9595703125,
                "anchor": "end",
                "lines": [
                  {
                    "text": "SaaS/PaaS",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#35495f"
                  }
                ]
              }
            ]
          },
          "iaas": {
            "blocks": [
              {
                "x": 401.091796875,
                "top": 707.11962890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 (37%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 332.07275390625,
                "top": 780.8267578125,
                "anchor": "end",
                "lines": [
                  {
                    "text": "IaaS",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#35495f"
                  }
                ]
              }
            ]
          },
          "software_licenses": {
            "blocks": [
              {
                "x": 401.091796875,
                "top": 849.064453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 (15%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 332.07275390625,
                "top": 922.77158203125,
                "anchor": "end",
                "lines": [
                  {
                    "text": "软件许可证",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#1a68c0"
                  }
                ]
              }
            ]
          },
          "software_support": {
            "blocks": [
              {
                "x": 401.091796875,
                "top": 1004.03173828125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 332.07275390625,
                "top": 1118.10849609375,
                "anchor": "end",
                "lines": [
                  {
                    "text": "软件支持",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#1a68c0"
                  }
                ]
              }
            ]
          },
          "cloud": {
            "blocks": [
              {
                "x": 772.23193359375,
                "top": 404.99853515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "云",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#35495f"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#35495f"
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
                "x": 772.23193359375,
                "top": 772.23193359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "许可证与支持",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 (6%)",
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
                "x": 772.23193359375,
                "top": 1160.30126953125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#02afeb"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 709.72412109375,
                "top": 1248.984228515625,
                "anchor": "end",
                "lines": [
                  {
                    "text": "服务",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#02afeb"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1147.27880859375,
                "top": 518.2939453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#35495f"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#35495f"
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
          "gross_profit": {
            "blocks": [
              {
                "x": 1521.0234375,
                "top": 369.837890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 73%",
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
                "x": 1521.0234375,
                "top": 1061.33056640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
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
                "x": 1893.4658203125,
                "top": 290.40087890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 27%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 27.34716796875,
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
                "x": 1893.4658203125,
                "top": 886.82958984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2150.00830078125,
                "top": 511.78271484375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 355.51318359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 19%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 27.34716796875,
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
                "x": 2422.177734375,
                "top": 606.8466796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
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
                "x": 2422.177734375,
                "top": 781.34765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 24%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2422.177734375,
                "top": 954.54638671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2422.177734375,
                "top": 1103.00244140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2422.177734375,
                "top": 1235.83154296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 0%",
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
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\">\n    <g font-family=\"Arial,sans-serif\">\n      <g transform=\"translate(777 194)\" data-typography-role=\"brand\">\n        <defs>\n          <linearGradient id=\"sap-q2-fy25-logo-gradient\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop offset=\"0\" stop-color=\"#00b7f0\"/>\n            <stop offset=\"0.55\" stop-color=\"#01adeb\"/>\n            <stop offset=\"1\" stop-color=\"#1a68c0\"/>\n          </linearGradient>\n        </defs>\n        <path d=\"M0 0H260L132 129H0Z\" fill=\"url(#sap-q2-fy25-logo-gradient)\"/>\n        <path d=\"M0 65H196L132 129H0Z\" fill=\"#1a68c0\" opacity=\"0.68\"/>\n        <text x=\"14\" y=\"103\" transform=\"skewX(-8)\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"89\" font-weight=\"900\" textLength=\"181\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#ffffff\">SAP</text>\n        <text x=\"161\" y=\"129\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"24\" font-weight=\"700\" fill=\"#1a68c0\">&#174;</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"17\" font-weight=\"400\">\n        <text x=\"56\" y=\"999\">SaaS = 软件即服务</text>\n        <text x=\"56\" y=\"1023\">PaaS = 平台即服务</text>\n        <text x=\"56\" y=\"1047\">IaaS = 基础设施即服务</text>\n      </g>\n    </g></g>"
    }
  }
});
