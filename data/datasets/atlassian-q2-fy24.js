(function(){ window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "atlassian-q2-fy24",
  "name": "Atlassian · Q2 FY24",
  "company": "Atlassian",
  "meta": {
    "company": "Atlassian",
    "title": "Atlassian Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/atlassian-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 203.150390625,
    "titleSize": 125.015625,
    "titleTextLength": 2304.9755859375,
    "periodX": 2453.431640625,
    "periodY": 274.77392578125,
    "periodNoteY": 317.748046875,
    "logoX": 767.02294921875,
    "logoY": 244.822265625,
    "logoWidth": 247.4267578125,
    "logoHeight": 257.8447265625,
    "logoViewBox": "0 0 270 245",
    "logoSvg": "\n    <g fill=\"#2681ff\">\n      <path d=\"M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z\"/>\n    </g>\n    <g fill=\"#0053ce\">\n      <path d=\"M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z\"/>\n    </g>\n    <text x=\"136\" y=\"230\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"31\" font-weight=\"800\" fill=\"#0053ce\">ATLASSIAN</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#0053ce",
        "label": "#0053ce"
      },
      "hub": {
        "node": "#0053ce",
        "label": "#0053ce"
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
      "source": "#85aae1",
      "hub": "#85aae1",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "cloud",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Cloud",
      "value": 653,
      "valueText": "$653M",
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "data_center",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Data Center",
      "value": 275,
      "valueText": "$275M",
      "notes": [
        "+41% Y/Y"
      ]
    },
    {
      "id": "server",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Server",
      "value": 69,
      "valueText": "$69M",
      "notes": [
        "(35%) Y/Y"
      ]
    },
    {
      "id": "marketplace_services",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Marketplace & Services",
      "value": 63,
      "valueText": "$63M",
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 1060,
      "valueText": "$1,060M",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 5,
      "type": "profit",
      "label": "Gross profit",
      "value": 866,
      "valueText": "$866M",
      "notes": [
        "82% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 6,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 195,
      "valueText": "($195M)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Operating loss",
      "value": -49,
      "valueText": "($49M)",
      "notes": [
        "(5%) margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Operating expenses",
      "value": 915,
      "valueText": "($915M)",
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "Research & development",
      "value": 537,
      "valueText": "($537M)",
      "notes": [
        "51% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 221,
      "valueText": "($221M)",
      "notes": [
        "21% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "General & admin",
      "value": 157,
      "valueText": "($157M)",
      "notes": [
        "15% of revenue",
        "(3pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "cloud",
      "target": "revenue",
      "value": 653,
      "width": 195.3369140625,
      "sourceWidth": 195.3369140625,
      "targetWidth": 195.3369140625,
      "y0": 569.08154296875,
      "y1": 808.69482421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85aae1"
    },
    {
      "source": "data_center",
      "target": "revenue",
      "value": 275,
      "width": 82.04150390625,
      "sourceWidth": 82.04150390625,
      "targetWidth": 82.04150390625,
      "y0": 827.577392578125,
      "y1": 947.384033203125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85aae1"
    },
    {
      "source": "server",
      "target": "revenue",
      "value": 69,
      "width": 20.8359375,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "y0": 998.82275390625,
      "y1": 998.82275390625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85aae1"
    },
    {
      "source": "marketplace_services",
      "target": "revenue",
      "value": 63,
      "width": 18.2314453125,
      "sourceWidth": 18.2314453125,
      "targetWidth": 19.53369140625,
      "y0": 1143.3720703125,
      "y1": 1019.007568359375,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85aae1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 866,
      "width": 259.14697265625,
      "sourceWidth": 259.14697265625,
      "targetWidth": 259.14697265625,
      "y0": 840.599853515625,
      "y1": 739.024658203125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 195,
      "width": 58.60107421875,
      "sourceWidth": 58.60107421875,
      "targetWidth": 58.60107421875,
      "y0": 999.473876953125,
      "y1": 1101.049072265625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 866,
      "width": 259.14697265625,
      "sourceWidth": 259.14697265625,
      "targetWidth": 257.8447265625,
      "y0": 739.024658203125,
      "y1": 837.34423828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 49,
      "width": 15.626953125,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "y0": 1092.58447265625,
      "y1": 974.080078125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 537,
      "width": 160.17626953125,
      "sourceWidth": 160.17626953125,
      "targetWidth": 160.17626953125,
      "y0": 788.510009765625,
      "y1": 581.452880859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 221,
      "width": 66.41455078125,
      "sourceWidth": 66.41455078125,
      "targetWidth": 66.41455078125,
      "y0": 901.805419921875,
      "y1": 904.409912109375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 157,
      "width": 46.880859375,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 958.453125,
      "y1": 1178.53271484375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 0.29951660156250004,
    "nodes": {
      "cloud": {
        "x": 384.16259765625,
        "y": 471.4130859375,
        "width": 72.92578125,
        "height": 195.3369140625
      },
      "data_center": {
        "x": 384.16259765625,
        "y": 786.556640625,
        "width": 72.92578125,
        "height": 82.04150390625
      },
      "server": {
        "x": 384.16259765625,
        "y": 988.40478515625,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "marketplace_services": {
        "x": 384.16259765625,
        "y": 1134.25634765625,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "revenue": {
        "x": 851.6689453125,
        "y": 711.0263671875,
        "width": 72.92578125,
        "height": 317.748046875
      },
      "gross_profit": {
        "x": 1317.873046875,
        "y": 609.451171875,
        "width": 72.92578125,
        "height": 259.14697265625
      },
      "cost_of_revenue": {
        "x": 1317.873046875,
        "y": 1071.74853515625,
        "width": 72.92578125,
        "height": 58.60107421875
      },
      "operating_loss": {
        "x": 1565.2998046875,
        "y": 1084.77099609375,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "operating_expenses": {
        "x": 1785.37939453125,
        "y": 708.421875,
        "width": 72.92578125,
        "height": 273.4716796875
      },
      "rnd": {
        "x": 2252.8857421875,
        "y": 501.36474609375,
        "width": 72.92578125,
        "height": 160.17626953125
      },
      "sm": {
        "x": 2252.8857421875,
        "y": 871.20263671875,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "ga": {
        "x": 2252.8857421875,
        "y": 1155.09228515625,
        "width": 72.92578125,
        "height": 46.880859375
      }
    },
    "labels": {
      "cloud": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 375.046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 221.3818359375,
            "top": 545.5760009765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "data_center": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 694.09716796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+41% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226.5908203125,
            "top": 804.0718505859376,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Data Center",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "server": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 898.5498046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(35%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 221.3818359375,
            "top": 975.3172119140626,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Server",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "marketplace_services": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 1039.1923828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 221.3818359375,
            "top": 1095.7804931640626,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Marketplace",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 888.1318359375,
            "top": 562.5703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
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
            "x": 1354.3359375,
            "top": 423.22998046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "82% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1354.3359375,
            "top": 1143.3720703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1601.7626953125,
            "top": 1117.3271484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(5%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
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
            "x": 1821.84228515625,
            "top": 543.03662109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2452.12939453125,
            "top": 493.55126953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "development",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "51% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2452.12939453125,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "21% of revenue",
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
            "x": 2452.12939453125,
            "top": 1130.349609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "15% of revenue",
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
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "customers",
      "value": "302000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "302K"
    },
    {
      "id": "large_cloud_customers",
      "value": "43000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "43K"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"33\" y=\"941\" width=\"213\" height=\"125\" rx=\"32\" fill=\"#0053ce\"/><text x=\"139.5\" y=\"981\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"139.5\" y=\"1013\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">302K</text><text x=\"139.5\" y=\"1045\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">+19% Y/Y</text></g><g><rect x=\"258\" y=\"941\" width=\"419\" height=\"125\" rx=\"32\" fill=\"#0053ce\"/><text x=\"467.5\" y=\"981\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Customers &gt; $10K Cloud ARR</text><text data-operating-metric=\"large_cloud_customers\" x=\"467.5\" y=\"1013\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">43K</text><text x=\"467.5\" y=\"1045\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">+18% Y/Y</text></g><text x=\"130\" y=\"1105\" font-size=\"29\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Atlassian · 2024 财年第二季度",
      "meta": {
        "title": "Atlassian 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 12 月"
      },
      "nodes": {
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +27%"
          ]
        },
        "data_center": {
          "label": "数据中心",
          "notes": [
            "同比 +41%"
          ]
        },
        "server": {
          "label": "服务器",
          "notes": [
            "同比 (35%)"
          ]
        },
        "marketplace_services": {
          "label": "市场与服务",
          "notes": [
            "同比 +5%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "运营亏损",
          "notes": [
            "利润率 (5%)",
            "同比 +7 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 51%",
            "同比 (4 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 21%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 15%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "cloud": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 375.046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 221.3818359375,
                "top": 545.5760009765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场与服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "data_center": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 694.09716796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +41%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 226.5908203125,
                "top": 804.0718505859376,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场与服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "server": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 898.5498046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (35%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 221.3818359375,
                "top": 975.3172119140626,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场与服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "marketplace_services": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 1039.1923828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 221.3818359375,
                "top": 1119.8665283203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "市场与服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 888.1318359375,
                "top": 562.5703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
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
                "x": 1354.3359375,
                "top": 423.22998046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 82%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1354.3359375,
                "top": 1143.3720703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1601.7626953125,
                "top": 1117.3271484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "x": 1821.84228515625,
                "top": 543.03662109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2452.12939453125,
                "top": 493.55126953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "发",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 51%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2452.12939453125,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
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
                "x": 2452.12939453125,
                "top": 1130.349609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "占收入 15%",
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
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"33\" y=\"941\" width=\"213\" height=\"125\" rx=\"32\" fill=\"#0053ce\"/><text x=\"139.5\" y=\"981\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"139.5\" y=\"1013\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">302K</text><text x=\"139.5\" y=\"1045\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">同比 +19%</text></g><g><rect x=\"258\" y=\"941\" width=\"419\" height=\"125\" rx=\"32\" fill=\"#0053ce\"/><text x=\"467.5\" y=\"981\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">云 ARR 超过 $10K 的客户</text><text data-operating-metric=\"large_cloud_customers\" x=\"467.5\" y=\"1013\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">43K</text><text x=\"467.5\" y=\"1045\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">同比 +18%</text></g><text x=\"130\" y=\"1105\" font-size=\"29\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
}); })();
