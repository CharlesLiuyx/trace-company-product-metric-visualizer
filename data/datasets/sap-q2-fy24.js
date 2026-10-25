window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "sap-q2-fy24",
  "name": "SAP · Q2 FY24",
  "company": "SAP",
  "meta": {
    "company": "SAP",
    "title": "SAP Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sap-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 1959.6354166666665,
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
      "name": 39.0625,
      "value": 39.0625,
      "note": 27.34375,
      "lineGap": 10.416666666666666
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\">\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <g transform=\"translate(783 207) scale(0.765)\" data-typography-role=\"brand\">\n        <defs>\n          <linearGradient id=\"sap-q2-fy24-logo-gradient\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop offset=\"0\" stop-color=\"#00b7f0\"/>\n            <stop offset=\"0.55\" stop-color=\"#01adeb\"/>\n            <stop offset=\"1\" stop-color=\"#1a68c0\"/>\n          </linearGradient>\n        </defs>\n        <path d=\"M0 0H340L172 168H0Z\" fill=\"url(#sap-q2-fy24-logo-gradient)\"/>\n        <path d=\"M0 84H256L172 168H0Z\" fill=\"#1a68c0\" opacity=\"0.68\"/>\n        <text x=\"18\" y=\"134\" transform=\"skewX(-8)\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"116\" font-weight=\"900\" textLength=\"236\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#ffffff\">SAP</text>\n        <text x=\"210\" y=\"168\" font-family=\"Arial,Helvetica,sans-serif\" font-size=\"31\" font-weight=\"700\" fill=\"#1a68c0\">&#174;</text>\n      </g>\n      <g fill=\"#666666\" font-size=\"18\" font-weight=\"400\">\n        <text x=\"56\" y=\"1006\">SaaS = Software as a Service</text>\n        <text x=\"56\" y=\"1030\">PaaS = Platform as a Service</text>\n        <text x=\"39\" y=\"1054\">IaaS = Infrastructure as a Service</text>\n      </g>\n    </g></g>",
  "layout": {
    "scale": 38.1,
    "nodes": {
      "saas_paas": {
        "x": 381.51041666666663,
        "y": 421.875,
        "width": 72.91666666666666,
        "height": 199.21875
      },
      "iaas": {
        "x": 381.51041666666663,
        "y": 786.4583333333333,
        "width": 72.91666666666666,
        "height": 6.510416666666666
      },
      "software_licenses": {
        "x": 381.51041666666663,
        "y": 980.46875,
        "width": 72.91666666666666,
        "height": 11.71875
      },
      "software_support": {
        "x": 381.51041666666663,
        "y": 1134.1145833333333,
        "width": 72.91666666666666,
        "height": 139.32291666666666
      },
      "cloud": {
        "x": 755.2083333333333,
        "y": 533.8541666666666,
        "width": 72.91666666666666,
        "height": 207.03125
      },
      "licenses_support": {
        "x": 755.2083333333333,
        "y": 959.6354166666666,
        "width": 72.91666666666666,
        "height": 151.04166666666666
      },
      "services": {
        "x": 755.2083333333333,
        "y": 1261.71875,
        "width": 72.91666666666666,
        "height": 55.98958333333333
      },
      "revenue": {
        "x": 1128.90625,
        "y": 665.3645833333333,
        "width": 72.91666666666666,
        "height": 411.4583333333333
      },
      "gross_profit": {
        "x": 1502.6041666666665,
        "y": 567.7083333333333,
        "width": 72.91666666666666,
        "height": 298.1770833333333
      },
      "cost_of_revenue": {
        "x": 1502.6041666666665,
        "y": 1084.6354166666665,
        "width": 72.91666666666666,
        "height": 111.97916666666666
      },
      "operating_profit": {
        "x": 1876.3020833333333,
        "y": 459.63541666666663,
        "width": 72.91666666666666,
        "height": 61.197916666666664
      },
      "operating_expenses": {
        "x": 1876.3020833333333,
        "y": 726.5625,
        "width": 72.91666666666666,
        "height": 236.97916666666666
      },
      "financial": {
        "x": 2141.927083333333,
        "y": 458.3333333333333,
        "width": 72.91666666666666,
        "height": 7.8125
      },
      "net_profit": {
        "x": 2250,
        "y": 368.4895833333333,
        "width": 72.91666666666666,
        "height": 45.572916666666664
      },
      "tax": {
        "x": 2250,
        "y": 632.8125,
        "width": 72.91666666666666,
        "height": 23.4375
      },
      "sm": {
        "x": 2250,
        "y": 776.0416666666666,
        "width": 72.91666666666666,
        "height": 109.375
      },
      "rnd": {
        "x": 2250,
        "y": 954.4270833333333,
        "width": 72.91666666666666,
        "height": 78.125
      },
      "ga": {
        "x": 2250,
        "y": 1136.71875,
        "width": 72.91666666666666,
        "height": 15.625
      },
      "restructuring": {
        "x": 2250,
        "y": 1260.4166666666665,
        "width": 72.91666666666666,
        "height": 29.947916666666664
      }
    },
    "labels": {
      "saas_paas": {
        "blocks": [
          {
            "x": 417.96875,
            "top": 333.3333333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "+28% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 351.5625,
            "top": 499.0229166666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Saas/PaaS",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#35495f"
              }
            ]
          }
        ]
      },
      "iaas": {
        "blocks": [
          {
            "x": 417.96875,
            "top": 696.6145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "(27%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 351.5625,
            "top": 767.2375,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Iaas",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#35495f"
              }
            ]
          }
        ]
      },
      "software_licenses": {
        "blocks": [
          {
            "x": 417.96875,
            "top": 888.0208333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "(28%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 351.5625,
            "top": 963.8520833333332,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Software Licenses",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#1a68c0"
              }
            ]
          }
        ]
      },
      "software_support": {
        "blocks": [
          {
            "x": 417.96875,
            "top": 1044.2708333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 351.5625,
            "top": 1181.3041666666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Software Support",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#1a68c0"
              }
            ]
          }
        ]
      },
      "cloud": {
        "blocks": [
          {
            "x": 791.6666666666666,
            "top": 386.71875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.0625,
                "weight": 800,
                "color": "#35495f"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "+25% Y/Y",
                "size": 27.34375,
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
            "x": 791.6666666666666,
            "top": 768.2291666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Licenses",
                "size": 39.0625,
                "weight": 800,
                "color": "#1a68c0"
              },
              {
                "text": "& Support",
                "size": 39.0625,
                "weight": 800,
                "color": "#1a68c0"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#1a68c0"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34375,
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
            "x": 791.6666666666666,
            "top": 1166.6666666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#02afeb"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 723.9583333333333,
            "top": 1267.24375,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Services",
                "size": 36.45833333333333,
                "weight": 800,
                "color": "#02afeb"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1165.3645833333333,
            "top": 523.4375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#35495f"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#35495f"
              },
              {
                "text": "+10% Y/Y",
                "size": 27.34375,
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
            "x": 1539.0625,
            "top": 384.1145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "73% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
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
            "x": 1539.0625,
            "top": 1216.1458333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0625,
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
            "x": 1912.7604166666665,
            "top": 276.04166666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "15% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34375,
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
            "x": 1912.7604166666665,
            "top": 986.9791666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "financial": {
        "blocks": [
          {
            "x": 2179.6875,
            "top": 485.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Financial",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 32.55208333333333,
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
            "x": 2438.802083333333,
            "top": 295.57291666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "11% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
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
            "x": 2438.802083333333,
            "top": 610.6770833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55208333333333,
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
            "x": 2441.40625,
            "top": 786.4583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M (€2.2B)",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "27% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34375,
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
            "x": 2441.40625,
            "top": 950.5208333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D (€1.6B)",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "19% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
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
            "x": 2441.40625,
            "top": 1106.7708333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A (€0.3B)",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "4% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34375,
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
            "x": 2441.40625,
            "top": 1240.8854166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Restructuring",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55208333333333,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+8pp Y/Y",
                "size": 27.34375,
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
      "label": "Saas/PaaS",
      "value": 4,
      "valueText": "€4.0B",
      "notes": [
        "+28% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f"
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
        "(27%) Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f"
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
        "(28%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0"
    },
    {
      "id": "software_support",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Software Support",
      "value": 2.8,
      "valueText": "€2.8B",
      "notes": [
        "(3%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0"
    },
    {
      "id": "cloud",
      "col": 1,
      "order": 4,
      "type": "source",
      "label": "Cloud",
      "value": 4.2,
      "valueText": "€4.2B",
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f"
    },
    {
      "id": "licenses_support",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Licenses & Support",
      "value": 3,
      "valueText": "€3.0B",
      "notes": [
        "(5%) Y/Y"
      ],
      "color": "#1a68c0",
      "labelColor": "#1a68c0"
    },
    {
      "id": "services",
      "col": 1,
      "order": 6,
      "type": "source",
      "label": "Services",
      "value": 1.1,
      "valueText": "€1.1B",
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#02afeb",
      "labelColor": "#02afeb"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 7,
      "type": "hub",
      "label": "Revenue",
      "value": 8.3,
      "valueText": "€8.3B",
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#35495f",
      "labelColor": "#35495f"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Gross profit",
      "value": 6,
      "valueText": "€6.0B",
      "notes": [
        "73% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 2.3,
      "valueText": "(€2.3B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 10,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.2,
      "valueText": "€1.2B",
      "notes": [
        "15% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Operating expenses",
      "value": 4.8,
      "valueText": "(€4.8B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "financial",
      "col": 5,
      "order": 12,
      "type": "profit",
      "label": "Financial",
      "value": 0.2,
      "valueText": "€0.2B",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 0.9,
      "valueText": "€0.9B",
      "notes": [
        "11% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "tax",
      "col": 6,
      "order": 14,
      "type": "cost",
      "label": "Tax",
      "value": 0.5,
      "valueText": "(€0.5B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "sm",
      "col": 6,
      "order": 15,
      "type": "cost",
      "label": "S&M",
      "value": 2.2,
      "valueText": "(€2.2B)",
      "notes": [
        "27% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 16,
      "type": "cost",
      "label": "R&D",
      "value": 1.6,
      "valueText": "(€1.6B)",
      "notes": [
        "19% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "ga",
      "col": 6,
      "order": 17,
      "type": "cost",
      "label": "G&A",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "notes": [
        "4% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "restructuring",
      "col": 6,
      "order": 18,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.6,
      "valueText": "(€0.6B)",
      "notes": [
        "8% of revenue",
        "+8pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100"
    }
  ],
  "links": [
    {
      "source": "saas_paas",
      "target": "cloud",
      "value": 4,
      "y0": 521.484375,
      "y1": 634.1145833333333,
      "sourceWidth": 199.21875,
      "targetWidth": 200.52083333333331,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9da6af"
    },
    {
      "source": "iaas",
      "target": "cloud",
      "value": 0.1,
      "y0": 789.7135416666666,
      "y1": 737.6302083333333,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 6.510416666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9da6af"
    },
    {
      "source": "software_licenses",
      "target": "licenses_support",
      "value": 0.2,
      "y0": 986.328125,
      "y1": 965.4947916666666,
      "sourceWidth": 11.71875,
      "targetWidth": 11.71875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#91b4db"
    },
    {
      "source": "software_support",
      "target": "licenses_support",
      "value": 2.8,
      "y0": 1203.7760416666665,
      "y1": 1041.015625,
      "sourceWidth": 139.32291666666666,
      "targetWidth": 139.32291666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#91b4db"
    },
    {
      "source": "cloud",
      "target": "revenue",
      "value": 4.2,
      "y0": 637.3697916666666,
      "y1": 768.8802083333333,
      "sourceWidth": 207.03125,
      "targetWidth": 207.03125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9da6af"
    },
    {
      "source": "licenses_support",
      "target": "revenue",
      "value": 3,
      "y0": 1035.15625,
      "y1": 947.9166666666666,
      "sourceWidth": 151.04166666666666,
      "targetWidth": 151.04166666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#91b4db"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 1.1,
      "y0": 1289.7135416666665,
      "y1": 1048.828125,
      "sourceWidth": 55.98958333333333,
      "targetWidth": 55.98958333333333,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#86d3ee"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 6,
      "y0": 815.1041666666666,
      "y1": 716.796875,
      "sourceWidth": 299.47916666666663,
      "targetWidth": 298.1770833333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.3,
      "y0": 1020.8333333333333,
      "y1": 1140.625,
      "sourceWidth": 111.97916666666666,
      "targetWidth": 111.97916666666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "y0": 597.65625,
      "y1": 490.234375,
      "sourceWidth": 59.89583333333333,
      "targetWidth": 61.197916666666664,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.8,
      "y0": 746.7447916666666,
      "y1": 845.0520833333333,
      "sourceWidth": 238.28125,
      "targetWidth": 236.97916666666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.7,
      "y0": 478.515625,
      "y1": 387.36979166666663,
      "sourceWidth": 37.760416666666664,
      "targetWidth": 37.760416666666664,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "y0": 509.1145833333333,
      "y1": 644.53125,
      "sourceWidth": 23.4375,
      "targetWidth": 23.4375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "financial",
      "target": "net_profit",
      "value": 0.2,
      "y0": 462.2395833333333,
      "y1": 410.15625,
      "sourceWidth": 7.8125,
      "targetWidth": 7.8125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.2,
      "y0": 781.25,
      "y1": 830.7291666666666,
      "sourceWidth": 109.375,
      "targetWidth": 109.375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.6,
      "y0": 875,
      "y1": 993.4895833333333,
      "sourceWidth": 78.125,
      "targetWidth": 78.125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "y0": 921.875,
      "y1": 1144.53125,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.6,
      "y0": 946.6145833333333,
      "y1": 1275.390625,
      "sourceWidth": 33.854166666666664,
      "targetWidth": 29.947916666666664,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "SAP · 2024 财年第二季度",
      "meta": {
        "title": "SAP 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月"
      },
      "nodes": {
        "saas_paas": {
          "label": "SaaS/PaaS",
          "notes": [
            "同比 +28%"
          ]
        },
        "iaas": {
          "label": "IaaS",
          "notes": [
            "同比 (27%)"
          ]
        },
        "software_licenses": {
          "label": "软件许可证",
          "notes": [
            "同比 (28%)"
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
            "同比 +25%"
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
            "同比 +6%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
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
            "利润率 15%",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "financial": {
          "label": "财务收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 11%",
            "同比 +1 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 27%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
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
          "label": "重组费用",
          "notes": [
            "占收入 8%",
            "同比 +8 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "saas_paas": {
            "blocks": [
              {
                "x": 417.96875,
                "top": 333.3333333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 351.5625,
                "top": 499.0229166666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "SaaS/PaaS",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#35495f"
                  }
                ]
              }
            ]
          },
          "iaas": {
            "blocks": [
              {
                "x": 417.96875,
                "top": 696.6145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 (27%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 351.5625,
                "top": 767.2375,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "IaaS",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#35495f"
                  }
                ]
              }
            ]
          },
          "software_licenses": {
            "blocks": [
              {
                "x": 417.96875,
                "top": 888.0208333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 (28%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 351.5625,
                "top": 963.8520833333332,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "软件许可证",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#1a68c0"
                  }
                ]
              }
            ]
          },
          "software_support": {
            "blocks": [
              {
                "x": 417.96875,
                "top": 1044.2708333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 351.5625,
                "top": 1181.3041666666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "软件支持",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#1a68c0"
                  }
                ]
              }
            ]
          },
          "cloud": {
            "blocks": [
              {
                "x": 791.6666666666666,
                "top": 386.71875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "云",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#35495f"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.34375,
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
                "x": 791.6666666666666,
                "top": 768.2291666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "许可证",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "与支持",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#1a68c0"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34375,
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
                "x": 791.6666666666666,
                "top": 1166.6666666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#02afeb"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 723.9583333333333,
                "top": 1267.24375,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "服务",
                    "size": 36.45833333333333,
                    "weight": 800,
                    "color": "#02afeb"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1165.3645833333333,
                "top": 523.4375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#35495f"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#35495f"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.34375,
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
                "x": 1539.0625,
                "top": 384.1145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 73%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
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
                "x": 1539.0625,
                "top": 1216.1458333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
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
                "x": 1912.7604166666665,
                "top": 276.04166666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34375,
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
                "x": 1912.7604166666665,
                "top": 986.9791666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "financial": {
            "blocks": [
              {
                "x": 2179.6875,
                "top": 485.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "财务收益",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 32.55208333333333,
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
                "x": 2438.802083333333,
                "top": 295.57291666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
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
                "x": 2438.802083333333,
                "top": 610.6770833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55208333333333,
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
                "x": 2473.40625,
                "top": 786.4583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场 (€2.2B)",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 27%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34375,
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
                "x": 2441.40625,
                "top": 950.5208333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发 (€1.6B)",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
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
                "x": 2457.40625,
                "top": 1106.7708333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "管理费用 (€0.3B)",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34375,
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
                "x": 2441.40625,
                "top": 1240.8854166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55208333333333,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 27.34375,
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
