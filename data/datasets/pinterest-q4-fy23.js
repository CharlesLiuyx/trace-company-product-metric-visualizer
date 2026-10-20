window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pinterest-q4-fy23",
  "name": "Pinterest · Q4 FY23",
  "company": "Pinterest",
  "meta": {
    "company": "Pinterest",
    "title": "Pinterest Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/pinterest-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2304.9755859375,
    "hidePeriodStamp": true,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 213.568359375,
    "logoHeight": 213.568359375,
    "logoY": 237.0087890625,
    "logoViewBox": "0 0 208 208",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).pinterestLogo || ""
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#165577",
    "noteColor": "#777777",
    "linkOpacity": 1
  },
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"33.8583984375\" y=\"226.5908203125\" width=\"187.5234375\" height=\"167.98974609375\" rx=\"28.6494140625\" fill=\"#cf0009\"/><path d=\"M126.31787109375 412.81201171875L156.26953125 459.69287109375H97.66845703125Z\" fill=\"#cf0009\"/><rect x=\"58.60107421875\" y=\"459.69287109375\" width=\"134.13134765625\" height=\"711.0263671875\" rx=\"15.626953125\" fill=\"#cf0009\"/><rect x=\"320.3525390625\" y=\"1165.51025390625\" width=\"209.66162109375\" height=\"152.36279296875\" rx=\"28.6494140625\" fill=\"#cf0009\"/><text x=\"126.31787109375\" y=\"282.58740234375\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">MAU</text><text data-operating-metric=\"mau\" x=\"126.31787109375\" y=\"329.46826171875\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">498M</text><text x=\"126.31787109375\" y=\"369.837890625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+11% Y/Y</text><text data-operating-metric=\"mau_us_canada\" x=\"126.31787109375\" y=\"589.91748046875\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">97M</text><text x=\"126.31787109375\" y=\"630.287109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+2% Y/Y</text><text data-operating-metric=\"mau_europe\" x=\"126.31787109375\" y=\"899.85205078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">135M</text><text x=\"126.31787109375\" y=\"940.2216796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+8% Y/Y</text><text data-operating-metric=\"mau_rest_of_world\" x=\"126.31787109375\" y=\"1073.05078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">266M</text><text x=\"126.31787109375\" y=\"1113.42041015625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+15% Y/Y</text><text x=\"425.83447265625\" y=\"1212.39111328125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"425.83447265625\" y=\"1259.27197265625\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">$2.00</text><text x=\"425.83447265625\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">+2% Y/Y</text><text x=\"424.5322265625\" y=\"1353.03369140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">MAU = Monthly Active Users</text><text x=\"424.5322265625\" y=\"1393.4033203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">ARPU = Average Revenue Per User</text></g>",
  "operatingMetrics": [
    {
      "id": "mau",
      "label": "MAU",
      "value": "498000000",
      "literal": "498M",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+11% Y/Y"
      ],
      "quote": "MAU\n498M\n+11% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          34,
          227,
          188,
          168
        ]
      }
    },
    {
      "id": "mau_us_canada",
      "label": "US & Canada MAU",
      "value": "97000000",
      "literal": "97M",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+2% Y/Y"
      ],
      "quote": "US & Canada MAU\n97M\n+2% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          59,
          460,
          134,
          236
        ]
      }
    },
    {
      "id": "mau_europe",
      "label": "Europe MAU",
      "value": "135000000",
      "literal": "135M",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+8% Y/Y"
      ],
      "quote": "Europe MAU\n135M\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          59,
          807,
          134,
          152
        ]
      }
    },
    {
      "id": "mau_rest_of_world",
      "label": "Rest of the world MAU",
      "value": "266000000",
      "literal": "266M",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y"
      ],
      "quote": "Rest of the world MAU\n266M\n+15% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          59,
          996,
          134,
          173
        ]
      }
    },
    {
      "id": "arpu",
      "label": "ARPU",
      "value": "0.002",
      "literal": "$2.00",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+2% Y/Y"
      ],
      "quote": "ARPU\n$2.00\n+2% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          320,
          1166,
          210,
          152
        ]
      }
    }
  ],
  "layout": {
    "scale": 0.3491240801796636,
    "nodes": {
      "us_canada": {
        "x": 415.41650390625,
        "y": 464.90185546875,
        "width": 71.62353515625,
        "height": 272.16943359375
      },
      "europe": {
        "x": 415.41650390625,
        "y": 893.3408203125,
        "width": 71.62353515625,
        "height": 55.99658203125
      },
      "rest_of_world": {
        "x": 415.41650390625,
        "y": 1099.095703125,
        "width": 71.62353515625,
        "height": 14.32470703125
      },
      "revenue": {
        "x": 882.9228515625,
        "y": 623.77587890625,
        "width": 71.62353515625,
        "height": 342.49072265625
      },
      "gross_profit": {
        "x": 1351.7314453125,
        "y": 530.01416015625,
        "width": 72.92578125,
        "height": 279.98291015625
      },
      "cost_of_revenue": {
        "x": 1349.126953125,
        "y": 991.00927734375,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "operating_profit": {
        "x": 1816.63330078125,
        "y": 433.64794921875,
        "width": 71.62353515625,
        "height": 67.716796875
      },
      "operating_expenses": {
        "x": 1816.63330078125,
        "y": 701.91064453125,
        "width": 71.62353515625,
        "height": 209.66162109375
      },
      "other": {
        "x": 2148.7060546875,
        "y": 460.9951171875,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "net_profit": {
        "x": 2284.1396484375,
        "y": 346.3974609375,
        "width": 71.62353515625,
        "height": 69.01904296875
      },
      "tax": {
        "x": 2284.1396484375,
        "y": 651.123046875,
        "width": 71.62353515625,
        "height": 10.41796875
      },
      "rnd": {
        "x": 2284.1396484375,
        "y": 770.9296875,
        "width": 71.62353515625,
        "height": 93.76171875
      },
      "sm": {
        "x": 2284.1396484375,
        "y": 993.61376953125,
        "width": 71.62353515625,
        "height": 83.34375
      },
      "ga": {
        "x": 2284.1396484375,
        "y": 1221.5068359375,
        "width": 71.62353515625,
        "height": 33.8583984375
      }
    },
    "labels": {
      "us_canada": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#233e87"
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
            "x": 299.5166015625,
            "top": 553.6478515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "US &",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#233e87"
              },
              {
                "text": "Canada",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#233e87"
              }
            ]
          }
        ]
      },
      "europe": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 790.46337890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#233e87"
              },
              {
                "text": "+32% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 299.5166015625,
            "top": 898.02509765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Europe",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#233e87"
              }
            ]
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 449.27490234375,
            "top": 1001.42724609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#233e87"
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
            "x": 299.5166015625,
            "top": 1058.98564453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Rest of",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#233e87"
              },
              {
                "text": "the world",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#233e87"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 918.08349609375,
            "top": 472.71533203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#233e87"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#233e87"
              },
              {
                "text": "+12% Y/Y",
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
            "x": 1388.1943359375,
            "top": 341.1884765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#009654"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009654"
              },
              {
                "text": "82% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1386.89208984375,
            "top": 1066.53955078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#9f1600"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1851.7939453125,
            "top": 242.2177734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#009654"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009654"
              },
              {
                "text": "20% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+19pp Y/Y",
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
            "x": 1851.7939453125,
            "top": 921.990234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#9f1600"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2185.1689453125,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Interest & Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#009654"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#009654"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 290.40087890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#009654"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#009654"
              },
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+19pp Y/Y",
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
            "x": 2489.89453125,
            "top": 612.0556640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#9f1600"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 767.02294921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#9f1600"
              },
              {
                "text": "27% of revenue",
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
      "sm": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 992.3115234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#9f1600"
              },
              {
                "text": "25% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(12pp) Y/Y",
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
            "x": 2489.89453125,
            "top": 1201.97314453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9f1600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#9f1600"
              },
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
      "id": "us_canada",
      "label": "US & Canada",
      "value": 779,
      "notes": [
        "+8% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#1c3174",
      "labelColor": "#233e87"
    },
    {
      "id": "europe",
      "label": "Europe",
      "value": 162,
      "notes": [
        "+32% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#1c3174",
      "labelColor": "#233e87"
    },
    {
      "id": "rest_of_world",
      "label": "Rest of the world",
      "value": 41,
      "notes": [
        "+27% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#1c3174",
      "labelColor": "#233e87"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 981,
      "notes": [
        "+12% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#1c3174",
      "labelColor": "#233e87"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 803,
      "notes": [
        "82% margin",
        "+3pp Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#2a9f28",
      "labelColor": "#009654"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 178,
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#ce0000",
      "labelColor": "#9f1600"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 196,
      "notes": [
        "20% margin",
        "+19pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#2a9f28",
      "labelColor": "#009654"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 607,
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#ce0000",
      "labelColor": "#9f1600"
    },
    {
      "id": "other",
      "label": "Interest & Other",
      "value": 35,
      "notes": [],
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#2a9f28",
      "labelColor": "#009654"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 201,
      "notes": [
        "21% margin",
        "+19pp Y/Y"
      ],
      "type": "profit",
      "col": 5,
      "order": 9,
      "color": "#2a9f28",
      "labelColor": "#009654"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 30,
      "notes": [],
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#ce0000",
      "labelColor": "#9f1600"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 268,
      "notes": [
        "27% of revenue",
        "(3pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#ce0000",
      "labelColor": "#9f1600"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 241,
      "notes": [
        "25% of revenue",
        "(12pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#ce0000",
      "labelColor": "#9f1600"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 98,
      "notes": [
        "10% of revenue",
        "(2pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#ce0000",
      "labelColor": "#9f1600"
    }
  ],
  "links": [
    {
      "source": "us_canada",
      "target": "revenue",
      "value": 779,
      "sourceWidth": 272.16943359375,
      "targetWidth": 270.8671875,
      "y0": 600.986572265625,
      "y1": 759.20947265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#939cbb"
    },
    {
      "source": "europe",
      "target": "revenue",
      "value": 162,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "y0": 921.339111328125,
      "y1": 922.641357421875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#939cbb"
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 41,
      "sourceWidth": 14.32470703125,
      "targetWidth": 15.626953125,
      "y0": 1106.258056640625,
      "y1": 958.453125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#939cbb"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 803,
      "sourceWidth": 279.98291015625,
      "targetWidth": 279.98291015625,
      "y0": 763.767333984375,
      "y1": 670.005615234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 178,
      "sourceWidth": 62.5078125,
      "targetWidth": 62.5078125,
      "y0": 935.0126953125,
      "y1": 1022.26318359375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 196,
      "sourceWidth": 67.716796875,
      "targetWidth": 67.716796875,
      "y0": 563.87255859375,
      "y1": 467.50634765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 607,
      "sourceWidth": 212.26611328125,
      "targetWidth": 209.66162109375,
      "y0": 703.864013671875,
      "y1": 806.741455078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 166,
      "sourceWidth": 57.298828125,
      "targetWidth": 58.60107421875,
      "y0": 462.29736328125,
      "y1": 375.697998046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 30,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 496.15576171875,
      "y1": 656.33203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 35,
      "sourceWidth": 11.72021484375,
      "targetWidth": 10.41796875,
      "y0": 466.855224609375,
      "y1": 410.20751953125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cc99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 268,
      "sourceWidth": 93.76171875,
      "targetWidth": 93.76171875,
      "y0": 748.79150390625,
      "y1": 817.810546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 241,
      "sourceWidth": 83.34375,
      "targetWidth": 83.34375,
      "y0": 837.34423828125,
      "y1": 1035.28564453125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 98,
      "sourceWidth": 32.55615234375,
      "targetWidth": 33.8583984375,
      "y0": 895.294189453125,
      "y1": 1238.43603515625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18484"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Pinterest · 2023 财年第四季度",
      "meta": {
        "title": "Pinterest 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "titleSize": 111.9931640625,
        "titleTextLength": 1953.369140625
      },
      "nodes": {
        "us_canada": {
          "label": "美国和加拿大",
          "notes": [
            "同比 +8%"
          ]
        },
        "europe": {
          "label": "欧洲",
          "notes": [
            "同比 +32%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +27%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 20%",
            "同比 +19 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "利息及其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
            "同比 +19 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 27%",
            "同比 (3 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 25%",
            "同比 (12 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 10%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "us_canada": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#233e87"
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
                "x": 299.5166015625,
                "top": 553.6478515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "美国和",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#233e87"
                  },
                  {
                    "text": "加拿大",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#233e87"
                  }
                ]
              }
            ]
          },
          "europe": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 790.46337890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#233e87"
                  },
                  {
                    "text": "同比 +32%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 299.5166015625,
                "top": 898.02509765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "欧洲",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#233e87"
                  }
                ]
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 449.27490234375,
                "top": 1001.42724609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#233e87"
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
                "x": 299.5166015625,
                "top": 1058.98564453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "世界",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#233e87"
                  },
                  {
                    "text": "其他地区",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#233e87"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 918.08349609375,
                "top": 472.71533203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#233e87"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#233e87"
                  },
                  {
                    "text": "同比 +12%",
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
                "x": 1388.1943359375,
                "top": 341.1884765625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#009654"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009654"
                  },
                  {
                    "text": "利润率 82%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1386.89208984375,
                "top": 1066.53955078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#9f1600"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1851.7939453125,
                "top": 242.2177734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#009654"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009654"
                  },
                  {
                    "text": "利润率 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +19 个百分点",
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
                "x": 1851.7939453125,
                "top": 921.990234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#9f1600"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2185.1689453125,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利息及其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#009654"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#009654"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 290.40087890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#009654"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#009654"
                  },
                  {
                    "text": "利润率 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +19 个百分点",
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
                "x": 2489.89453125,
                "top": 612.0556640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#9f1600"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 767.02294921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#9f1600"
                  },
                  {
                    "text": "占收入 27%",
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
          "sm": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 992.3115234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#9f1600"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (12 个百分点)",
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
                "x": 2489.89453125,
                "top": 1201.97314453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#9f1600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#9f1600"
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"33.8583984375\" y=\"226.5908203125\" width=\"187.5234375\" height=\"167.98974609375\" rx=\"28.6494140625\" fill=\"#cf0009\"/><path d=\"M126.31787109375 412.81201171875L156.26953125 459.69287109375H97.66845703125Z\" fill=\"#cf0009\"/><rect x=\"58.60107421875\" y=\"459.69287109375\" width=\"134.13134765625\" height=\"711.0263671875\" rx=\"15.626953125\" fill=\"#cf0009\"/><rect x=\"320.3525390625\" y=\"1165.51025390625\" width=\"209.66162109375\" height=\"152.36279296875\" rx=\"28.6494140625\" fill=\"#cf0009\"/><text x=\"126.31787109375\" y=\"282.58740234375\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">MAU</text><text data-operating-metric=\"mau\" x=\"126.31787109375\" y=\"329.46826171875\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">498M</text><text x=\"126.31787109375\" y=\"369.837890625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +11%</text><text data-operating-metric=\"mau_us_canada\" x=\"126.31787109375\" y=\"589.91748046875\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">97M</text><text x=\"126.31787109375\" y=\"630.287109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +2%</text><text data-operating-metric=\"mau_europe\" x=\"126.31787109375\" y=\"899.85205078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">135M</text><text x=\"126.31787109375\" y=\"940.2216796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +8%</text><text data-operating-metric=\"mau_rest_of_world\" x=\"126.31787109375\" y=\"1073.05078125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">266M</text><text x=\"126.31787109375\" y=\"1113.42041015625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +15%</text><text x=\"425.83447265625\" y=\"1212.39111328125\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"425.83447265625\" y=\"1259.27197265625\" text-anchor=\"middle\" font-size=\"32.55615234375\" font-weight=\"700\" fill=\"white\">$2.00</text><text x=\"425.83447265625\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"white\">同比 +2%</text><text x=\"424.5322265625\" y=\"1353.03369140625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">MAU = 月活跃用户</text><text x=\"424.5322265625\" y=\"1393.4033203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">ARPU = 每用户平均收入</text></g>"
    }
  }
});
