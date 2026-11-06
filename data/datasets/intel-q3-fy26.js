(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "intel-q3-fy26",
  "name": "Intel \u00b7 Q3 FY26",
  "company": "Intel",
  "meta": {
    "company": "Intel",
    "title": "Intel Q3 FY26 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/intel-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "hidePeriodStamp": true,
    "titleX": 1333.5,
    "titleY": 171.896484375,
    "titleSize": 122.4111328125,
    "titleTextLength": 2015.876953125
  },
  "nodes": [
    {
      "id": "client_computing",
      "label": "Client Computing",
      "value": 8.1,
      "type": "source",
      "notes": [
        "(5%) Y/Y",
        "28% operating margin"
      ]
    },
    {
      "id": "datacenter_ai",
      "label": "Datacenter & AI",
      "value": 7.3,
      "type": "source",
      "notes": [
        "+78% Y/Y",
        "42% operating margin"
      ]
    },
    {
      "id": "intel_products",
      "label": "Intel Products",
      "value": 15.4,
      "type": "source",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "intel_foundry",
      "label": "Intel Foundry",
      "value": 6.7,
      "type": "source",
      "notes": [
        "+58% Y/Y",
        "(28%) operating margin"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.7,
      "type": "source",
      "notes": [
        "(30%) Y/Y",
        "26% operating margin"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 6.3,
      "type": "cost",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Net Revenue",
      "value": 16.5,
      "type": "source",
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 7.1,
      "type": "profit",
      "notes": [
        "43% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 9.4,
      "type": "cost",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.5,
      "type": "profit",
      "notes": [
        "15% margin",
        "+10pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 4.6,
      "type": "cost",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 3.5,
      "type": "profit",
      "notes": [
        "21% margin",
        "(10pp) Y/Y"
      ]
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 1.5,
      "type": "profit",
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.5,
      "type": "cost",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "Research & Development",
      "value": 3.5,
      "type": "cost",
      "notes": [
        "21% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "marketing_ga",
      "label": "Marketing, G&A",
      "value": 1,
      "type": "cost",
      "notes": [
        "6% of revenue",
        "(2pp) Y/Y"
      ],
      "valueText": "($1.0B)"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.1,
      "type": "cost",
      "notes": [
        "0% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "seg_hub",
      "label": "",
      "value": 22.8,
      "type": "hub"
    }
  ],
  "links": [
    {
      "source": "client_computing",
      "target": "intel_products",
      "value": 8.1,
      "y0": 520.8984375,
      "y1": 627.6826171875,
      "sourceWidth": 127.6201171875,
      "targetWidth": 127.6201171875
    },
    {
      "source": "datacenter_ai",
      "target": "intel_products",
      "value": 7.3,
      "y0": 860.78466796875,
      "y1": 748.79150390625,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625
    },
    {
      "source": "intel_products",
      "target": "seg_hub",
      "value": 15.4,
      "y0": 684.9814453125,
      "y1": 761.81396484375,
      "sourceWidth": 242.2177734375,
      "targetWidth": 242.2177734375
    },
    {
      "source": "intel_foundry",
      "target": "seg_hub",
      "value": 6.7,
      "y0": 987.1025390625,
      "y1": 888.1318359375,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875
    },
    {
      "source": "other",
      "target": "seg_hub",
      "value": 0.7,
      "y0": 1210.437744140625,
      "y1": 946.081787109375,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 16.5,
      "y0": 770.278564453125,
      "y1": 696.050537109375,
      "sourceWidth": 259.14697265625,
      "targetWidth": 259.14697265625
    },
    {
      "source": "seg_hub",
      "target": "eliminations",
      "value": 6.3,
      "y0": 949.33740234375,
      "y1": 1045.70361328125,
      "sourceWidth": 98.970703125,
      "targetWidth": 98.970703125
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.1,
      "y0": 622.4736328125,
      "y1": 541.734375,
      "sourceWidth": 111.9931640625,
      "targetWidth": 111.9931640625,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 9.4,
      "y0": 751.39599609375,
      "y1": 828.228515625,
      "sourceWidth": 148.4560546875,
      "targetWidth": 148.4560546875
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.5,
      "y0": 505.271484375,
      "y1": 427.13671875,
      "sourceWidth": 39.0673828125,
      "targetWidth": 39.0673828125,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.6,
      "y0": 561.26806640625,
      "y1": 666.75,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2,
      "y0": 423.22998046875,
      "y1": 326.86376953125,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "y0": 442.763671875,
      "y1": 569.08154296875,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 1.5,
      "y0": 403.6962890625,
      "y1": 354.2109375,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.5,
      "y0": 657.63427734375,
      "y1": 746.18701171875,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375
    },
    {
      "source": "operating_expenses",
      "target": "marketing_ga",
      "value": 1,
      "y0": 692.794921875,
      "y1": 949.33740234375,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "y0": 701.91064453125,
      "y1": 1125.791748046875,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375
    }
  ],
  "layout": {
    "nodes": {
      "client_computing": {
        "x": 394.58056640625,
        "y": 457.08837890625,
        "width": 72.92578125,
        "height": 127.6201171875
      },
      "datacenter_ai": {
        "x": 394.58056640625,
        "y": 803.48583984375,
        "width": 72.92578125,
        "height": 114.59765625
      },
      "intel_products": {
        "x": 705.8173828125,
        "y": 563.87255859375,
        "width": 72.92578125,
        "height": 242.2177734375
      },
      "intel_foundry": {
        "x": 705.8173828125,
        "y": 981.8935546875,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "other": {
        "x": 705.8173828125,
        "y": 1157.69677734375,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "seg_hub": {
        "x": 1017.05419921875,
        "y": 640.705078125,
        "width": 72.92578125,
        "height": 358.11767578125
      },
      "revenue": {
        "x": 1328.291015625,
        "y": 566.47705078125,
        "width": 72.92578125,
        "height": 259.14697265625
      },
      "eliminations": {
        "x": 1328.291015625,
        "y": 996.21826171875,
        "width": 72.92578125,
        "height": 98.970703125
      },
      "gross_profit": {
        "x": 1640.830078125,
        "y": 485.73779296875,
        "width": 72.92578125,
        "height": 111.9931640625
      },
      "cost_of_sales": {
        "x": 1640.830078125,
        "y": 754.00048828125,
        "width": 72.92578125,
        "height": 148.4560546875
      },
      "operating_profit": {
        "x": 1952.06689453125,
        "y": 407.60302734375,
        "width": 72.92578125,
        "height": 39.0673828125
      },
      "operating_expenses": {
        "x": 1954.67138671875,
        "y": 630.287109375,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "net_profit": {
        "x": 2263.3037109375,
        "y": 311.23681640625,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "other_income": {
        "x": 2155.21728515625,
        "y": 391.97607421875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "tax": {
        "x": 2263.3037109375,
        "y": 565.1748046875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "rnd": {
        "x": 2263.3037109375,
        "y": 718.83984375,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "marketing_ga": {
        "x": 2263.3037109375,
        "y": 941.52392578125,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "restructuring": {
        "x": 2263.3037109375,
        "y": 1125.140625,
        "width": 72.92578125,
        "height": 1.30224609375
      }
    },
    "labels": {
      "seg_hub": {
        "blocks": []
      },
      "client_computing": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 363.32666015625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 431.04345703125,
            "top": 414.1142578125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 468.80859375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Client",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "Computing",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "28% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "datacenter_ai": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 711.0263671875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 431.04345703125,
            "top": 761.81396484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "+78% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 213.568359375,
            "top": 828.228515625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Datacenter & AI",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "42% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "intel_foundry": {
        "blocks": [
          {
            "x": 742.2802734375,
            "top": 888.1318359375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 742.2802734375,
            "top": 938.91943359375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "+58% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 530.01416015625,
            "top": 954.54638671875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Intel Foundry",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "(28%) operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 737.0712890625,
            "top": 1063.93505859375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 737.0712890625,
            "top": 1114.72265625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "(30%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 531.31640625,
            "top": 1177.23046875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "26% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "intel_products": {
        "blocks": [
          {
            "x": 737.0712890625,
            "top": 416.71875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Intel Products",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 737.0712890625,
            "top": 460.9951171875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 737.0712890625,
            "top": 511.78271484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "+22% Y/Y",
                "size": 27.34716796875,
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
            "x": 1364.75390625,
            "top": 419.3232421875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Net Revenue",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1364.75390625,
            "top": 463.599609375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1364.75390625,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
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
      "eliminations": {
        "blocks": [
          {
            "x": 1364.75390625,
            "top": 1113.42041015625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Eliminations",
                "size": 32.55615234375,
                "weight": 800
              }
            ]
          },
          {
            "x": 1364.75390625,
            "top": 1152.48779296875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1677.29296875,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1677.29296875,
            "top": 346.3974609375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1677.29296875,
            "top": 397.18505859375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "43% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1677.29296875,
            "top": 921.990234375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Cost",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "of sales",
                "size": 32.55615234375,
                "weight": 800
              }
            ]
          },
          {
            "x": 1677.29296875,
            "top": 1000.125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1988.52978515625,
            "top": 223.986328125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1988.52978515625,
            "top": 268.2626953125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1988.52978515625,
            "top": 319.05029296875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+10pp Y/Y",
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
            "x": 1991.13427734375,
            "top": 726.6533203125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 800
              }
            ]
          },
          {
            "x": 1991.13427734375,
            "top": 804.7880859375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 283.8896484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 328.166015625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 378.95361328125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2191.68017578125,
            "top": 431.04345703125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2191.68017578125,
            "top": 468.80859375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 528.7119140625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 566.47705078125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 664.1455078125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "Development",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 739.67578125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 790.46337890625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "21% of revenue",
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
      "marketing_ga": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 869.900390625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Marketing,",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 945.4306640625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 996.21826171875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "6% of revenue",
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
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1083.46875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 1121.23388671875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 1172.021484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "0% of revenue",
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
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "intel-logo-q3-fy26",
      "href": "data/assets/raster-annotations/intel/company-logo-q3-fy26.png",
      "x": 807,
      "y": 215,
      "width": 469,
      "height": 195,
      "clearance": true
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#0068b5",
        "label": "#1685c4"
      },
      "hub": {
        "node": "#0068b5",
        "label": "#1685c4"
      },
      "profit": {
        "node": "#279f27",
        "label": "#009650"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a31b00"
      }
    },
    "linkTint": {
      "source": "#85b4d6",
      "hub": "#85b4d6",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 38,
      "note": 27,
      "lineGap": 6
    }
  },
  "i18n": {
    "zh": {
      "name": "Intel \u00b7 2026 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6",
      "meta": {
        "title": "\u82f1\u7279\u5c14 2026 \u8d22\u5e74\u7b2c\u4e09\u5b63\u5ea6\u5229\u6da6\u8868",
        "titleTextLength": 1888.2568359375
      },
      "nodes": {
        "client_computing": {
          "label": "\u5ba2\u6237\u7aef\u8ba1\u7b97",
          "notes": [
            "\u540c\u6bd4 (5%)",
            "\u8425\u4e1a\u5229\u6da6\u7387 28%"
          ]
        },
        "datacenter_ai": {
          "label": "\u6570\u636e\u4e2d\u5fc3\u4e0e AI",
          "notes": [
            "\u540c\u6bd4 +78%",
            "\u8425\u4e1a\u5229\u6da6\u7387 42%"
          ]
        },
        "intel_products": {
          "label": "\u82f1\u7279\u5c14\u4ea7\u54c1",
          "notes": [
            "\u540c\u6bd4 +22%"
          ]
        },
        "intel_foundry": {
          "label": "\u82f1\u7279\u5c14\u4ee3\u5de5",
          "notes": [
            "\u540c\u6bd4 +58%",
            "\u8425\u4e1a\u5229\u6da6\u7387 (28%)"
          ]
        },
        "other": {
          "label": "\u5176\u4ed6",
          "notes": [
            "\u540c\u6bd4 (30%)",
            "\u8425\u4e1a\u5229\u6da6\u7387 26%"
          ]
        },
        "eliminations": {
          "label": "\u5185\u90e8\u62b5\u9500",
          "notes": []
        },
        "revenue": {
          "label": "\u51c0\u6536\u5165",
          "notes": [
            "\u540c\u6bd4 +21%"
          ]
        },
        "gross_profit": {
          "label": "\u6bdb\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 43%",
            "\u540c\u6bd4 +5 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "cost_of_sales": {
          "label": "\u9500\u552e\u6210\u672c",
          "notes": []
        },
        "operating_profit": {
          "label": "\u8425\u4e1a\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 15%",
            "\u540c\u6bd4 +10 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "operating_expenses": {
          "label": "\u8425\u4e1a\u8d39\u7528",
          "notes": []
        },
        "net_profit": {
          "label": "\u51c0\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 21%",
            "\u540c\u6bd4 (10 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "other_income": {
          "label": "\u5176\u4ed6",
          "notes": []
        },
        "tax": {
          "label": "\u7a0e\u8d39",
          "notes": []
        },
        "rnd": {
          "label": "\u7814\u53d1",
          "notes": [
            "\u5360\u6536\u5165 21%",
            "\u540c\u6bd4 (3 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "marketing_ga": {
          "label": "\u8425\u9500\u53ca\u4e00\u822c\u884c\u653f",
          "notes": [
            "\u5360\u6536\u5165 6%",
            "\u540c\u6bd4 (2 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "restructuring": {
          "label": "\u91cd\u7ec4",
          "notes": [
            "\u5360\u6536\u5165 0%",
            "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)"
          ]
        }
      },
      "layout": {
        "labels": {
          "seg_hub": {
            "blocks": []
          },
          "client_computing": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 363.32666015625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 431.04345703125,
                "top": 414.1142578125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u540c\u6bd4 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 223.986328125,
                "top": 468.80859375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5ba2\u6237\u7aef\u8ba1\u7b97",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6\u7387 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "datacenter_ai": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 711.0263671875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 431.04345703125,
                "top": 761.81396484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +78%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 213.568359375,
                "top": 828.228515625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u6570\u636e\u4e2d\u5fc3\u4e0e AI",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6\u7387 42%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "intel_foundry": {
            "blocks": [
              {
                "x": 742.2802734375,
                "top": 888.1318359375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 742.2802734375,
                "top": 938.91943359375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +58%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 530.01416015625,
                "top": 954.54638671875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u82f1\u7279\u5c14\u4ee3\u5de5",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6\u7387 (28%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 737.0712890625,
                "top": 1063.93505859375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 737.0712890625,
                "top": 1114.72265625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u540c\u6bd4 (30%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 531.31640625,
                "top": 1177.23046875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5176\u4ed6",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6\u7387 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "intel_products": {
            "blocks": [
              {
                "x": 737.0712890625,
                "top": 416.71875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u82f1\u7279\u5c14\u4ea7\u54c1",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 737.0712890625,
                "top": 460.9951171875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 737.0712890625,
                "top": 511.78271484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +22%",
                    "size": 27.34716796875,
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
                "x": 1364.75390625,
                "top": 419.3232421875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u51c0\u6536\u5165",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1364.75390625,
                "top": 463.599609375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1364.75390625,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +21%",
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
                "x": 1364.75390625,
                "top": 1113.42041015625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5185\u90e8\u62b5\u9500",
                    "size": 32.55615234375,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1364.75390625,
                "top": 1152.48779296875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1677.29296875,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u6bdb\u5229\u6da6",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1677.29296875,
                "top": 346.3974609375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1677.29296875,
                "top": 397.18505859375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5229\u6da6\u7387 43%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +5 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1677.29296875,
                "top": 921.990234375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u9500\u552e",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "\u6210\u672c",
                    "size": 32.55615234375,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1677.29296875,
                "top": 1000.125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1988.52978515625,
                "top": 223.986328125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1988.52978515625,
                "top": 268.2626953125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1988.52978515625,
                "top": 319.05029296875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5229\u6da6\u7387 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +10 \u4e2a\u767e\u5206\u70b9",
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
                "x": 1991.13427734375,
                "top": 726.6533203125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u8425\u4e1a",
                    "size": 32.55615234375,
                    "weight": 800
                  },
                  {
                    "text": "\u8d39\u7528",
                    "size": 32.55615234375,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1991.13427734375,
                "top": 804.7880859375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 283.8896484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u51c0\u5229\u6da6",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 328.166015625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 378.95361328125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5229\u6da6\u7387 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (10 \u4e2a\u767e\u5206\u70b9)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2191.68017578125,
                "top": 431.04345703125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5176\u4ed6",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2191.68017578125,
                "top": 468.80859375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 528.7119140625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u7a0e\u8d39",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 566.47705078125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 664.1455078125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u7814\u53d1",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 701.91064453125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 752.6982421875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (3 \u4e2a\u767e\u5206\u70b9)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "marketing_ga": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 869.900390625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u8425\u9500\u53ca\u4e00\u822c\u884c\u653f",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 907.66552734375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 958.453125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (2 \u4e2a\u767e\u5206\u70b9)",
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
                "x": 2466.4541015625,
                "top": 1083.46875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u91cd\u7ec4",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 1121.23388671875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 1172.021484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 0%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)",
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
