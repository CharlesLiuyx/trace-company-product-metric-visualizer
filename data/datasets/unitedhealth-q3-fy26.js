(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "unitedhealth-q3-fy26",
  "name": "UnitedHealth Group \u00b7 Q3 FY26",
  "company": "UnitedHealth Group",
  "meta": {
    "company": "UnitedHealth Group",
    "title": "UnitedHealth Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/unitedhealth-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1324,
    "titleY": 200,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2431,
    "hidePeriodStamp": true
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
        "node": "#1e3d6a",
        "label": "#1e3d6a"
      },
      "hub": {
        "node": "#1e3d6a",
        "label": "#1e3d6a"
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
      "source": "#93a0b4",
      "hub": "#93a0b4",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 30,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><rect x=\"28\" y=\"1230\" width=\"466\" height=\"106\" rx=\"29\" fill=\"#002577\"/><text x=\"50\" y=\"1273\" font-size=\"27\" fill=\"white\">Revenue:</text><text data-operating-metric=\"uhc_revenue\" x=\"178\" y=\"1273\" font-size=\"27\" fill=\"white\">$86.3B</text><text x=\"288\" y=\"1273\" font-size=\"27\" fill=\"white\">(-1% Y/Y)</text><text x=\"73\" y=\"1310\" font-size=\"27\" fill=\"white\">Operating margin</text><text data-operating-metric=\"uhc_margin\" x=\"368\" y=\"1310\" font-size=\"27\" fill=\"white\">3.3%</text></g><g><rect x=\"500\" y=\"1230\" width=\"466\" height=\"106\" rx=\"29\" fill=\"#ff612b\"/><text x=\"522\" y=\"1273\" font-size=\"27\" fill=\"white\">Revenue:</text><text data-operating-metric=\"optum_revenue\" x=\"650\" y=\"1273\" font-size=\"27\" fill=\"white\">$66.9B</text><text x=\"760\" y=\"1273\" font-size=\"27\" fill=\"white\">(-3% Y/Y)</text><text x=\"545\" y=\"1310\" font-size=\"27\" fill=\"white\">Operating margin</text><text data-operating-metric=\"optum_margin\" x=\"840\" y=\"1310\" font-size=\"27\" fill=\"white\">3.2%</text></g>",
  "layout": {
    "scale": 3.53,
    "nodes": {
      "premiums": {
        "x": 360,
        "y": 329,
        "width": 72,
        "height": 308
      },
      "products": {
        "x": 360,
        "y": 771,
        "width": 72,
        "height": 50
      },
      "services": {
        "x": 360,
        "y": 930,
        "width": 72,
        "height": 36
      },
      "investments_other": {
        "x": 360,
        "y": 1087,
        "width": 72,
        "height": 4
      },
      "revenue": {
        "x": 983,
        "y": 557,
        "width": 72,
        "height": 398
      },
      "operating_profit": {
        "x": 1605,
        "y": 431,
        "width": 72,
        "height": 23
      },
      "operating_expenses": {
        "x": 1605,
        "y": 703,
        "width": 72,
        "height": 375
      },
      "net_profit": {
        "x": 2229,
        "y": 284,
        "width": 72,
        "height": 14
      },
      "tax": {
        "x": 2229,
        "y": 516,
        "width": 72,
        "height": 4
      },
      "other": {
        "x": 2229,
        "y": 634,
        "width": 72,
        "height": 4
      },
      "medical_costs": {
        "x": 2229,
        "y": 712,
        "width": 72,
        "height": 273
      },
      "operational_costs": {
        "x": 2229,
        "y": 1073,
        "width": 72,
        "height": 51
      },
      "cost_of_product_sold": {
        "x": 2229,
        "y": 1201,
        "width": 72,
        "height": 48
      },
      "da": {
        "x": 2229,
        "y": 1330,
        "width": 72,
        "height": 4
      }
    },
    "labels": {
      "premiums": {
        "blocks": [
          {
            "x": 396,
            "top": 235,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "(2%) Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 316,
            "top": 456,
            "anchor": "end",
            "lines": [
              {
                "text": "Premiums",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "products": {
        "blocks": [
          {
            "x": 396,
            "top": 679,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "+7% Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 316,
            "top": 771.5,
            "anchor": "end",
            "lines": [
              {
                "text": "Products",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 396,
            "top": 837,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "+5% Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 316,
            "top": 923.5,
            "anchor": "end",
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "investments_other": {
        "blocks": [
          {
            "x": 396,
            "top": 994,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "(5%) Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 316,
            "top": 1040.0,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Investments",
                "size": 40,
                "weight": 700
              },
              {
                "text": "& Other",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1020,
            "top": 412,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "(0%) Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1641,
            "top": 247,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "6% margin",
                "size": 30,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1641,
            "top": 1101,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 40
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2471,
            "top": 230,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 40
              },
              {
                "text": "4% margin",
                "size": 30,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 30,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2471,
            "top": 486,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2471,
            "top": 603,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30
              }
            ]
          }
        ]
      },
      "medical_costs": {
        "blocks": [
          {
            "x": 2471,
            "top": 816,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Medical costs",
                "size": 30,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30
              }
            ]
          }
        ]
      },
      "operational_costs": {
        "blocks": [
          {
            "x": 2471,
            "top": 1063,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operational costs",
                "size": 30,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30
              }
            ]
          }
        ]
      },
      "cost_of_product_sold": {
        "blocks": [
          {
            "x": 2471,
            "top": 1190,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of product sold",
                "size": 30,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2471,
            "top": 1296,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "D&A",
                "size": 30,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 30
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "nodes": [
    {
      "id": "premiums",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Premiums",
      "value": 87.1,
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "products",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Products",
      "value": 14.3,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "services",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Services",
      "value": 10.2,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "investments_other",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Investments",
        "& Other"
      ],
      "value": 1.1,
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 112.7,
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 6.6,
      "notes": [
        "6% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 106.1
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 4.1,
      "notes": [
        "4% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 1.2
    },
    {
      "id": "other",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 1.2
    },
    {
      "id": "medical_costs",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Medical costs",
      "value": 76.9
    },
    {
      "id": "operational_costs",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": "Operational costs",
      "value": 14.4
    },
    {
      "id": "cost_of_product_sold",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Cost of product sold",
      "value": 13.7
    },
    {
      "id": "da",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": "D&A",
      "value": 1.1
    }
  ],
  "links": [
    {
      "source": "premiums",
      "target": "revenue",
      "value": 87.1,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 14.3,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 10.2,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "investments_other",
      "target": "revenue",
      "value": 1.1,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 6.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 106.1,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.1,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.2,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 1.2,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "medical_costs",
      "value": 76.9,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "operational_costs",
      "value": 14.4,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "cost_of_product_sold",
      "value": 13.7,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 1.1,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "\u8054\u5408\u5065\u5eb7\u96c6\u56e2 \u00b7 2026 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
      "meta": {
        "title": "\u8054\u5408\u5065\u5eb7\u96c6\u56e2 2026 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6\u5229\u6da6\u8868",
        "period": "2026 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2026 \u5e74 9 \u6708",
        "titleSize": 112,
        "titleTextLength": 1900
      },
      "annotationsSvg": "<g><rect x=\"28\" y=\"1230\" width=\"466\" height=\"106\" rx=\"29\" fill=\"#002577\"/><text x=\"50\" y=\"1273\" font-size=\"27\" fill=\"white\">\u6536\u5165:</text><text data-operating-metric=\"uhc_revenue\" x=\"178\" y=\"1273\" font-size=\"27\" fill=\"white\">$86.3B</text><text x=\"288\" y=\"1273\" font-size=\"27\" fill=\"white\">(\u540c\u6bd4 -1%)</text><text x=\"73\" y=\"1310\" font-size=\"27\" fill=\"white\">\u8425\u4e1a\u5229\u6da6\u7387</text><text data-operating-metric=\"uhc_margin\" x=\"368\" y=\"1310\" font-size=\"27\" fill=\"white\">3.3%</text></g><g><rect x=\"500\" y=\"1230\" width=\"466\" height=\"106\" rx=\"29\" fill=\"#ff612b\"/><text x=\"522\" y=\"1273\" font-size=\"27\" fill=\"white\">\u6536\u5165:</text><text data-operating-metric=\"optum_revenue\" x=\"650\" y=\"1273\" font-size=\"27\" fill=\"white\">$66.9B</text><text x=\"760\" y=\"1273\" font-size=\"27\" fill=\"white\">(\u540c\u6bd4 -3%)</text><text x=\"545\" y=\"1310\" font-size=\"27\" fill=\"white\">\u8425\u4e1a\u5229\u6da6\u7387</text><text data-operating-metric=\"optum_margin\" x=\"840\" y=\"1310\" font-size=\"27\" fill=\"white\">3.2%</text></g>",
      "nodes": {
        "premiums": {
          "label": "\u4fdd\u8d39",
          "notes": [
            "\u540c\u6bd4 (2%)"
          ]
        },
        "products": {
          "label": "\u4ea7\u54c1",
          "notes": [
            "\u540c\u6bd4 +7%"
          ]
        },
        "services": {
          "label": "\u670d\u52a1",
          "notes": [
            "\u540c\u6bd4 +5%"
          ]
        },
        "investments_other": {
          "label": [
            "\u6295\u8d44",
            "\u53ca\u5176\u4ed6"
          ],
          "notes": [
            "\u540c\u6bd4 (5%)"
          ]
        },
        "revenue": {
          "label": "\u6536\u5165",
          "notes": [
            "\u540c\u6bd4 (0%)"
          ]
        },
        "operating_profit": {
          "label": "\u8425\u4e1a\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 6%",
            "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "operating_expenses": {
          "label": [
            "\u8425\u4e1a",
            "\u8d39\u7528"
          ]
        },
        "net_profit": {
          "label": "\u51c0\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 4%",
            "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "tax": {
          "label": "\u7a0e\u8d39"
        },
        "other": {
          "label": "\u5176\u4ed6"
        },
        "medical_costs": {
          "label": "\u533b\u7597\u6210\u672c"
        },
        "operational_costs": {
          "label": "\u8fd0\u8425\u6210\u672c"
        },
        "cost_of_product_sold": {
          "label": "\u4ea7\u54c1\u9500\u552e\u6210\u672c"
        },
        "da": {
          "label": "\u6298\u65e7\u644a\u9500"
        }
      },
      "nonNodeMetrics": {
        "cost_of_revenue": {
          "label": "\u6536\u5165\u6210\u672c"
        },
        "gross_profit": {
          "label": "\u6bdb\u5229\u6da6"
        }
      },
      "layout": {
        "labels": {
          "premiums": {
            "blocks": [
              {
                "x": 396,
                "top": 235,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u540c\u6bd4 (2%)",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 316,
                "top": 456,
                "anchor": "end",
                "lines": [
                  {
                    "text": "\u4fdd\u8d39",
                    "size": 40,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "products": {
            "blocks": [
              {
                "x": 396,
                "top": 679,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u540c\u6bd4 +7%",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 316,
                "top": 771.5,
                "anchor": "end",
                "lines": [
                  {
                    "text": "\u4ea7\u54c1",
                    "size": 40,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 396,
                "top": 837,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u540c\u6bd4 +5%",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 316,
                "top": 923.5,
                "anchor": "end",
                "lines": [
                  {
                    "text": "\u670d\u52a1",
                    "size": 40,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "investments_other": {
            "blocks": [
              {
                "x": 396,
                "top": 994,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u540c\u6bd4 (5%)",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 316,
                "top": 1040.0,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "\u6295\u8d44",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "\u53ca\u5176\u4ed6",
                    "size": 40,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1020,
                "top": 412,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u540c\u6bd4 (0%)",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1641,
                "top": 247,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u5229\u6da6\u7387 6%",
                    "size": 30,
                    "color": "#666666"
                  },
                  {
                    "text": "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1641,
                "top": 1101,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u8d39\u7528",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 40
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2471,
                "top": 230,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "\u51c0\u5229\u6da6",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 40
                  },
                  {
                    "text": "\u5229\u6da6\u7387 4%",
                    "size": 30,
                    "color": "#666666"
                  },
                  {
                    "text": "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9",
                    "size": 30,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2471,
                "top": 486,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u7a0e\u8d39",
                    "size": 30,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2471,
                "top": 603,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u5176\u4ed6",
                    "size": 30,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30
                  }
                ]
              }
            ]
          },
          "medical_costs": {
            "blocks": [
              {
                "x": 2471,
                "top": 816,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u533b\u7597\u6210\u672c",
                    "size": 30,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30
                  }
                ]
              }
            ]
          },
          "operational_costs": {
            "blocks": [
              {
                "x": 2471,
                "top": 1063,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u8fd0\u8425\u6210\u672c",
                    "size": 30,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30
                  }
                ]
              }
            ]
          },
          "cost_of_product_sold": {
            "blocks": [
              {
                "x": 2471,
                "top": 1190,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u4ea7\u54c1\u9500\u552e\u6210\u672c",
                    "size": 30,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2471,
                "top": 1296,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u6298\u65e7\u644a\u9500",
                    "size": 30,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 30
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "uhc_revenue",
      "value": "86.3",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$86.3B"
    },
    {
      "id": "uhc_margin",
      "value": "3.3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "3.3%"
    },
    {
      "id": "optum_revenue",
      "value": "66.9",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$66.9B"
    },
    {
      "id": "optum_margin",
      "value": "3.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "3.2%"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/unitedhealth/company-wordmark-q3-fy26.png",
      "x": 620,
      "y": 238,
      "width": 740,
      "height": 95
    },
    {
      "key": "uhc-logo",
      "href": "data/assets/raster-annotations/unitedhealth/uhc-logo-q3-fy26.png",
      "x": 37,
      "y": 1155,
      "width": 222,
      "height": 74
    },
    {
      "key": "optum-logo",
      "href": "data/assets/raster-annotations/unitedhealth/optum-logo-q3-fy26.png",
      "x": 512,
      "y": 1166,
      "width": 190,
      "height": 63
    }
  ]
});})();
