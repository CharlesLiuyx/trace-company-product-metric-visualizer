window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q4-fy24",
  "name": "Spotify · Q4 FY24",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/spotify-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2167.96875,
    "periodX": -3000,
    "periodY": -3000,
    "logoWidth": 242.1875,
    "logoHeight": 242.1875,
    "logoY": 240.88541666666666,
    "logoViewBox": "0 0 231 231",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"231\" height=\"231\" rx=\"52\" fill=\"#0a0a0a\"/>\n    <circle cx=\"115.5\" cy=\"115.5\" r=\"90\" fill=\"#1ed760\"/>\n    \n    <path d=\"M 59.7 120.2 Q 115.5 89.6 171.3 120.2\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"12.15\" stroke-linecap=\"round\"/>\n    <path d=\"M 70.5 137.3 Q 115.5 110.3 160.5 137.3\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"10.35\" stroke-linecap=\"round\"/>\n    <path d=\"M 82.2 152.6 Q 115.5 131.9 148.8 152.6\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"8.55\" stroke-linecap=\"round\"/>",
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#818181",
    "noteColor": "#818181",
    "palette": {
      "source": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
      },
      "hub": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
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
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "premium",
      "label": "Spotify Premium",
      "value": 3.7,
      "valueText": "€3.7B",
      "notes": [
        "+17% Y/Y",
        "35% gross margin",
        "+6pp Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source"
    },
    {
      "id": "advertising",
      "label": "Spotify Advertising",
      "value": 0.5,
      "valueText": "€0.5B",
      "notes": [
        "+7% Y/Y",
        "15% gross margin",
        "+4pp Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 4.2,
      "valueText": "€4.2B",
      "notes": [
        "+16% Y/Y"
      ],
      "col": 1,
      "order": 2,
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.4,
      "valueText": "€1.4B",
      "notes": [
        "32% margin",
        "+6pp Y/Y"
      ],
      "col": 2,
      "order": 3,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 2.9,
      "valueText": "(€2.9B)",
      "notes": [],
      "col": 2,
      "order": 4,
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.5,
      "valueText": "€0.5B",
      "notes": [
        "11% margin",
        "+13pp Y/Y"
      ],
      "col": 3,
      "order": 5,
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 0.9,
      "valueText": "(€0.9B)",
      "notes": [],
      "col": 3,
      "order": 6,
      "type": "cost"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.4,
      "valueText": "€0.4B",
      "notes": [
        "9% margin",
        "+11pp Y/Y"
      ],
      "col": 4,
      "order": 7,
      "type": "profit"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": [],
      "col": 4,
      "order": 8,
      "type": "cost"
    },
    {
      "id": "sm",
      "label": [
        "Sales &",
        "Marketing"
      ],
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "9% of revenue",
        "(3pp) Y/Y"
      ],
      "col": 4,
      "order": 9,
      "type": "cost"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 0.4,
      "valueText": "(€0.4B)",
      "notes": [
        "9% of revenue",
        "(4pp) Y/Y"
      ],
      "col": 4,
      "order": 10,
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 0.1,
      "valueText": "(€0.1B)",
      "notes": [
        "3% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 4,
      "order": 11,
      "type": "cost"
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.022,
      "valueText": "$22M",
      "type": "profit",
      "representation": "annotation"
    }
  ],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "675000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "675M"
    },
    {
      "id": "premium_subscribers",
      "value": "263000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "263M"
    },
    {
      "id": "ad_supported_mau",
      "value": "425000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "425M"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\"><circle cx=\"91\" cy=\"535\" r=\"35\" fill=\"#0a0a0a\"/><path d=\"M 70 530.1 Q 91 520.3 112 530.8 M 73.5 539.2 Q 91 530.8 108.5 539.9 M 77 547.6 Q 91 539.2 105 547.95\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"4.9\" stroke-linecap=\"round\"/><text x=\"134\" y=\"533\" font-size=\"35\" font-weight=\"800\">Spotify</text><text x=\"134\" y=\"566\" font-size=\"35\" font-weight=\"800\">Premium</text></g><text x=\"179\" y=\"598\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">35% gross margin</text><text x=\"179\" y=\"626\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">+6pp Y/Y</text><g data-typography-role=\"brand\"><circle cx=\"55\" cy=\"799\" r=\"20\" fill=\"#0a0a0a\"/><path d=\"M 43 796.2 Q 55 790.6 67 796.6 M 45 801.4 Q 55 796.6 65 801.8 M 47 806.2 Q 55 801.4 63 806.4\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"2.8000000000000003\" stroke-linecap=\"round\"/><text x=\"81\" y=\"809\" font-size=\"25\" font-weight=\"800\">Spotify</text><text x=\"163\" y=\"809\" font-size=\"25\">Advertising</text></g><text x=\"179\" y=\"838\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">15% gross margin</text><text x=\"179\" y=\"866\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">+4pp Y/Y</text><g><rect x=\"23\" y=\"893\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" fill=\"#ffffff\" data-operating-metric=\"mau\">675M</text><text x=\"103.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">+12% Y/Y</text></g><g><rect x=\"194\" y=\"893\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">Premium Subs</text><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">263M</text><text x=\"321.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">+11% Y/Y</text></g><g><rect x=\"459\" y=\"893\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">Ad-supported MAUs</text><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_mau\">425M</text><text x=\"604.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">+12% Y/Y</text></g><text x=\"231\" y=\"1044\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#818181\">MAU = Monthly Active Users</text><g class=\"sankey-interactive-annotation\" data-node=\"interest\" data-link-numerator=\"interest\" data-link-denominator=\"net_profit\" data-link-anchor-x=\"2220\" data-link-anchor-y=\"427.0833333333333\"><path d=\"M 1648 328 L 1703 328 C 1730 328 1729 281 1756 281\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"1680\" y=\"359\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#008f51\">Interest</text><text x=\"1680\" y=\"391\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#008f51\">$22M</text></g></g></g>",
  "layout": {
    "nodes": {
      "premium": {
        "x": 417.96875,
        "y": 549.4791666666666,
        "width": 72.91666666666666,
        "height": 330.72916666666663
      },
      "advertising": {
        "x": 417.96875,
        "y": 1080.7291666666665,
        "width": 72.91666666666666,
        "height": 48.17708333333333
      },
      "revenue": {
        "x": 885.4166666666666,
        "y": 664.0625,
        "width": 72.91666666666666,
        "height": 378.90625
      },
      "gross_profit": {
        "x": 1348.9583333333333,
        "y": 546.875,
        "width": 72.91666666666666,
        "height": 122.39583333333333
      },
      "cost_of_revenue": {
        "x": 1356.7708333333333,
        "y": 871.09375,
        "width": 72.91666666666666,
        "height": 256.51041666666663
      },
      "operating_profit": {
        "x": 1816.40625,
        "y": 434.8958333333333,
        "width": 72.91666666666666,
        "height": 42.96875
      },
      "operating_expenses": {
        "x": 1819.0104166666665,
        "y": 690.1041666666666,
        "width": 72.91666666666666,
        "height": 79.42708333333333
      },
      "net_profit": {
        "x": 2286.458333333333,
        "y": 333.3333333333333,
        "width": 72.91666666666666,
        "height": 32.55208333333333
      },
      "tax": {
        "x": 2286.458333333333,
        "y": 597.65625,
        "width": 72.91666666666666,
        "height": 11.71875
      },
      "sm": {
        "x": 2286.458333333333,
        "y": 782.5520833333333,
        "width": 72.91666666666666,
        "height": 35.15625
      },
      "rnd": {
        "x": 2286.458333333333,
        "y": 1007.8124999999999,
        "width": 72.91666666666666,
        "height": 33.854166666666664
      },
      "ga": {
        "x": 2286.458333333333,
        "y": 1240.8854166666665,
        "width": 72.91666666666666,
        "height": 11.71875
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 453.125,
            "top": 445.3125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0a0a0a"
              },
              {
                "text": "+17% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 453.125,
            "top": 979.1666666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0a0a0a"
              },
              {
                "text": "+7% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 921.875,
            "top": 507.81249999999994,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800,
                "color": "#0a0a0a"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0a0a0a"
              },
              {
                "text": "+16% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1385.4166666666665,
            "top": 351.5625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "32% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+6pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1393.2291666666665,
            "top": 1135.4166666666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
            "x": 1852.8645833333333,
            "top": 240.88541666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "11% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+13pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1855.46875,
            "top": 784.0416666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
      "net_profit": {
        "blocks": [
          {
            "x": 2493.489583333333,
            "top": 292.96875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "9% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "+11pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2493.489583333333,
            "top": 559.8958333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
            "x": 2501.302083333333,
            "top": 731.7708333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Sales &",
                "size": 32.55208333333333,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Marketing",
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
                "text": "9% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2501.302083333333,
            "top": 981.7708333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "R&D",
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
                "text": "9% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2501.302083333333,
            "top": 1188.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "General & Admin",
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
                "text": "3% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#818181"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": []
      }
    },
    "routes": {
      "interest": {
        "x": 2145.833333333333,
        "y": 425.78125,
        "width": 0,
        "height": 2.6041666666666665
      }
    }
  },
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 330.72916666666663,
      "targetWidth": 330.72916666666663,
      "y0": 714.84375,
      "y1": 829.4270833333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 48.17708333333333,
      "targetWidth": 48.17708333333333,
      "y0": 1104.8177083333333,
      "y1": 1018.8802083333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 122.39583333333333,
      "targetWidth": 122.39583333333333,
      "y0": 725.2604166666666,
      "y1": 608.0729166666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2.9,
      "sourceWidth": 256.51041666666663,
      "targetWidth": 256.51041666666663,
      "y0": 914.7135416666666,
      "y1": 999.3489583333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 42.96875,
      "targetWidth": 42.96875,
      "y0": 568.359375,
      "y1": 456.3802083333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.9,
      "sourceWidth": 79.42708333333333,
      "targetWidth": 79.42708333333333,
      "y0": 629.5572916666666,
      "y1": 729.8177083333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.4,
      "sourceWidth": 31.25,
      "targetWidth": 32.55208333333333,
      "y0": 450.5208333333333,
      "y1": 349.609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 11.71875,
      "targetWidth": 11.71875,
      "y0": 472.0052083333333,
      "y1": 603.515625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "sourceRoute": "interest",
      "target": "net_profit",
      "value": 0.022,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 1.3020833333333333,
      "y0": 427.0833333333333,
      "y1": 365.234375,
      "targetOrder": 1,
      "interactionOnly": true,
      "curve": {
        "x0": 2145.833333333333,
        "c1x": 2252.6041666666665,
        "c1y": 427.0833333333333,
        "c2x": 2252.6041666666665,
        "c2y": 365.234375
      }
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.4,
      "sourceWidth": 35.15625,
      "targetWidth": 35.15625,
      "y0": 707.6822916666666,
      "y1": 800.1302083333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.4,
      "sourceWidth": 33.854166666666664,
      "targetWidth": 33.854166666666664,
      "y0": 742.1875,
      "y1": 1024.7395833333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.1,
      "sourceWidth": 10.416666666666666,
      "targetWidth": 11.71875,
      "y0": 764.3229166666666,
      "y1": 1246.7447916666665,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Premium",
      "Advertising",
      "MAU"
    ],
    "zh": {
      "name": "Spotify · 2024 财年第四季度",
      "meta": {
        "title": "Spotify 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "",
        "titleTextLength": 1888.0208333333333
      },
      "nodes": {
        "premium": {
          "label": "Spotify Premium",
          "notes": [
            "同比 +17%",
            "毛利率 35%",
            "同比 +6 个百分点"
          ]
        },
        "advertising": {
          "label": "Spotify Advertising",
          "notes": [
            "同比 +7%",
            "毛利率 15%",
            "同比 +4 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 32%",
            "同比 +6 个百分点"
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
            "利润率 11%",
            "同比 +13 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 9%",
            "同比 +11 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": [
            "销售与",
            "市场营销"
          ],
          "notes": [
            "占收入 9%",
            "同比 (3 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 9%",
            "同比 (4 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 3%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "nonNodeMetrics": {
        "interest": {
          "label": "利息"
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 453.125,
                "top": 445.3125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 453.125,
                "top": 979.1666666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 921.875,
                "top": 507.81249999999994,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0a0a0a"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1385.4166666666665,
                "top": 351.5625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 32%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1393.2291666666665,
                "top": 1135.4166666666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                "x": 1852.8645833333333,
                "top": 240.88541666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +13 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1855.46875,
                "top": 784.0416666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
          "net_profit": {
            "blocks": [
              {
                "x": 2493.489583333333,
                "top": 292.96875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 +11 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2493.489583333333,
                "top": 559.8958333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                "x": 2501.302083333333,
                "top": 731.7708333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32.55208333333333,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场营销",
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
                    "text": "占收入 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2501.302083333333,
                "top": 981.7708333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "研发",
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
                    "text": "占收入 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2501.302083333333,
                "top": 1188.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "一般及行政",
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
                    "text": "占收入 3%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#818181"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\"><circle cx=\"91\" cy=\"535\" r=\"35\" fill=\"#0a0a0a\"/><path d=\"M 70 530.1 Q 91 520.3 112 530.8 M 73.5 539.2 Q 91 530.8 108.5 539.9 M 77 547.6 Q 91 539.2 105 547.95\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"4.9\" stroke-linecap=\"round\"/><text x=\"134\" y=\"533\" font-size=\"35\" font-weight=\"800\">Spotify</text><text x=\"134\" y=\"566\" font-size=\"35\" font-weight=\"800\">Premium</text></g><text x=\"179\" y=\"598\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">毛利率 35%</text><text x=\"179\" y=\"626\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">同比 +6 个百分点</text><g data-typography-role=\"brand\"><circle cx=\"55\" cy=\"799\" r=\"20\" fill=\"#0a0a0a\"/><path d=\"M 43 796.2 Q 55 790.6 67 796.6 M 45 801.4 Q 55 796.6 65 801.8 M 47 806.2 Q 55 801.4 63 806.4\" fill=\"none\" stroke=\"#1ed760\" stroke-width=\"2.8000000000000003\" stroke-linecap=\"round\"/><text x=\"81\" y=\"809\" font-size=\"25\" font-weight=\"800\">Spotify</text><text x=\"163\" y=\"809\" font-size=\"25\">Advertising</text></g><text x=\"179\" y=\"838\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">毛利率 15%</text><text x=\"179\" y=\"866\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#818181\">同比 +4 个百分点</text><g><rect x=\"23\" y=\"893\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">MAU</text><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" fill=\"#ffffff\" data-operating-metric=\"mau\">675M</text><text x=\"103.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">同比 +12%</text></g><g><rect x=\"194\" y=\"893\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">付费订阅</text><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">263M</text><text x=\"321.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">同比 +11%</text></g><g><rect x=\"459\" y=\"893\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"934\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"800\" fill=\"#ffffff\">广告支持 MAU</text><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"23\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_mau\">425M</text><text x=\"604.5\" y=\"990\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\">同比 +12%</text></g><text x=\"231\" y=\"1044\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"400\" fill=\"#818181\">MAU = 月活跃用户</text><g class=\"sankey-interactive-annotation\" data-node=\"interest\" data-link-numerator=\"interest\" data-link-denominator=\"net_profit\" data-link-anchor-x=\"2220\" data-link-anchor-y=\"427.0833333333333\"><path d=\"M 1648 328 L 1703 328 C 1730 328 1729 281 1756 281\" fill=\"none\" stroke=\"#99cd99\" stroke-width=\"2\"/><text x=\"1680\" y=\"359\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#008f51\">利息</text><text x=\"1680\" y=\"391\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"400\" fill=\"#008f51\">$22M</text></g></g></g>"
    }
  }
});
