window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "aramco-q3-fy23",
  "name": "Saudi Aramco · Q3 FY23",
  "company": "Saudi Aramco",
  "meta": {
    "company": "Saudi Aramco",
    "title": "Aramco Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "",
    "unit": "B",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/aramco-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#0083ac",
        "label": "#0083ac"
      },
      "hub": {
        "node": "#0083ac",
        "label": "#0083ac"
      },
      "profit": {
        "node": "#279f27",
        "label": "#009451"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a01600"
      }
    },
    "linkTint": {
      "source": "#84bcd0",
      "hub": "#84bcd0",
      "profit": "#99ce97",
      "cost": "#e18585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 37.76513671875,
      "value": 37.76513671875,
      "note": 27.34716796875,
      "lineGap": 7.8134765625
    },
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g><text x=\"179\" y=\"216\" font-size=\"29\" font-weight=\"800\" fill=\"#005b91\">In SAR billion</text><text x=\"131\" y=\"1104\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "aramco-company-lockup",
      "href": "data/assets/raster-annotations/aramco/company-lockup-q3-fy23.png",
      "x": 757.9072265625,
      "y": 216.1728515625,
      "width": 721.4443359375,
      "height": 199.24365234375
    }
  ],
  "nodes": [
    {
      "id": "crude_oil",
      "label": "Crude Oil",
      "value": 204,
      "valueText": "204B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(31%) Y/Y"
      ]
    },
    {
      "id": "refined_chemical_products",
      "label": "Refined & Chemical products",
      "value": 197,
      "valueText": "197B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(12%) Y/Y"
      ]
    },
    {
      "id": "natural_gas_ngls",
      "label": "Natural gas & NGLs",
      "value": 11,
      "valueText": "11B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(43%) Y/Y"
      ]
    },
    {
      "id": "metal_products",
      "label": "Metal products",
      "value": 3,
      "valueText": "3B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 8,
      "valueText": "8B",
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "(471%) Y/Y"
      ]
    },
    {
      "id": "reported_revenue",
      "label": "Revenue",
      "value": 424,
      "valueText": "424B",
      "type": "hub",
      "col": 1,
      "order": 5,
      "notes": [
        "(22%) Y/Y"
      ]
    },
    {
      "id": "other_income_related_sales",
      "label": "Other income related to sales",
      "value": 65,
      "valueText": "65B",
      "type": "source",
      "col": 1,
      "order": 6,
      "notes": [
        "(8%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue & Other income",
      "value": 489,
      "valueText": "489B",
      "type": "hub",
      "col": 2,
      "order": 7,
      "notes": [
        "(20%) Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 234,
      "valueText": "234B",
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "48% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 254,
      "valueText": "(254B)",
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "finance",
      "label": "Finance",
      "value": 5,
      "valueText": "5B",
      "type": "profit",
      "col": 3.7,
      "order": 10
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 122,
      "valueText": "122B",
      "type": "profit",
      "col": 4,
      "order": 11,
      "notes": [
        "25% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 116,
      "valueText": "(116B)",
      "type": "cost",
      "col": 4,
      "order": 12
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 1,
      "valueText": "(1B)",
      "type": "cost",
      "col": 4,
      "order": 13
    },
    {
      "id": "royalties",
      "label": "Royalties",
      "value": 55,
      "valueText": "(55B)",
      "type": "cost",
      "col": 4,
      "order": 14
    },
    {
      "id": "purchases",
      "label": "Purchases",
      "value": 121,
      "valueText": "(121B)",
      "type": "cost",
      "col": 4,
      "order": 15
    },
    {
      "id": "producing_manufacturing",
      "label": "Producing & Manufacturing",
      "value": 23,
      "valueText": "(23B)",
      "type": "cost",
      "col": 4,
      "order": 16
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 28,
      "valueText": "(28B)",
      "type": "cost",
      "col": 4,
      "order": 17
    },
    {
      "id": "exploration",
      "label": "Exploration",
      "value": 2,
      "valueText": "(2B)",
      "type": "cost",
      "col": 4,
      "order": 18
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 1,
      "valueText": "(1B)",
      "type": "cost",
      "col": 4,
      "order": 19
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 24,
      "valueText": "(24B)",
      "type": "cost",
      "col": 4,
      "order": 20
    }
  ],
  "links": [
    {
      "source": "crude_oil",
      "target": "reported_revenue",
      "value": 204,
      "sourceWidth": 113.29541015625,
      "targetWidth": 111.9931640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "refined_chemical_products",
      "target": "reported_revenue",
      "value": 197,
      "sourceWidth": 109.388671875,
      "targetWidth": 109.388671875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "natural_gas_ngls",
      "target": "reported_revenue",
      "value": 11,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "metal_products",
      "target": "reported_revenue",
      "value": 3,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "other",
      "target": "reported_revenue",
      "value": 8,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "reported_revenue",
      "target": "revenue",
      "value": 424,
      "sourceWidth": 234.404296875,
      "targetWidth": 234.404296875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "other_income_related_sales",
      "target": "revenue",
      "value": 65,
      "sourceWidth": 35.16064453125,
      "targetWidth": 36.462890625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 234,
      "sourceWidth": 130.224609375,
      "targetWidth": 130.224609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 254,
      "sourceWidth": 140.642578125,
      "targetWidth": 140.642578125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 122,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 116,
      "sourceWidth": 63.81005859375,
      "targetWidth": 63.81005859375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "finance",
      "target": "net_profit",
      "value": 5,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "royalties",
      "value": 55,
      "sourceWidth": 30.4541015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "purchases",
      "value": 121,
      "sourceWidth": 66.9990234375,
      "targetWidth": 67.716796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "producing_manufacturing",
      "value": 23,
      "sourceWidth": 12.7353515625,
      "targetWidth": 11.72021484375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 28,
      "sourceWidth": 15.50390625,
      "targetWidth": 15.626953125,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 2,
      "sourceWidth": 1.107421875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1,
      "sourceWidth": 0.5537109375,
      "targetWidth": 2.6044921875,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 24,
      "sourceWidth": 13.2890625,
      "targetWidth": 13.0224609375,
      "sourceOrder": 6,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.55345458984375,
    "nodes": {
      "crude_oil": {
        "x": 419.3232421875,
        "y": 410.20751953125,
        "width": 72.92578125,
        "height": 113.29541015625
      },
      "refined_chemical_products": {
        "x": 419.3232421875,
        "y": 656.33203125,
        "width": 72.92578125,
        "height": 109.388671875
      },
      "natural_gas_ngls": {
        "x": 419.3232421875,
        "y": 906.36328125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "metal_products": {
        "x": 419.3232421875,
        "y": 1060.0283203125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "other": {
        "x": 419.3232421875,
        "y": 1204.57763671875,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "reported_revenue": {
        "x": 886.82958984375,
        "y": 621.17138671875,
        "width": 72.92578125,
        "height": 234.404296875
      },
      "other_income_related_sales": {
        "x": 892.03857421875,
        "y": 1096.4912109375,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "revenue": {
        "x": 1354.3359375,
        "y": 698.00390625,
        "width": 72.92578125,
        "height": 270.8671875
      },
      "operating_profit": {
        "x": 1821.84228515625,
        "y": 520.8984375,
        "width": 72.92578125,
        "height": 130.224609375
      },
      "operating_expenses": {
        "x": 1823.14453125,
        "y": 950.6396484375,
        "width": 72.92578125,
        "height": 140.642578125
      },
      "finance": {
        "x": 2183.86669921875,
        "y": 442.763671875,
        "width": 71.62353515625,
        "height": 2.6044921875
      },
      "net_profit": {
        "x": 2288.04638671875,
        "y": 313.84130859375,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "tax": {
        "x": 2288.04638671875,
        "y": 546.943359375,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "other_expense": {
        "x": 2288.04638671875,
        "y": 679.7724609375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "royalties": {
        "x": 2288.04638671875,
        "y": 746.18701171875,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "purchases": {
        "x": 2288.04638671875,
        "y": 851.6689453125,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "producing_manufacturing": {
        "x": 2288.04638671875,
        "y": 981.8935546875,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "sga": {
        "x": 2288.04638671875,
        "y": 1075.6552734375,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "exploration": {
        "x": 2288.04638671875,
        "y": 1174.6259765625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "rnd": {
        "x": 2288.04638671875,
        "y": 1267.08544921875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "da": {
        "x": 2288.04638671875,
        "y": 1354.3359375,
        "width": 72.92578125,
        "height": 13.0224609375
      }
    },
    "labels": {
      "crude_oil": {
        "blocks": [
          {
            "x": 455.7861328125,
            "top": 312.5390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(31%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.18505859375,
            "top": 443.67265625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "refined_chemical_products": {
        "blocks": [
          {
            "x": 455.7861328125,
            "top": 557.361328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(12%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397.18505859375,
            "top": 662.84326171875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Refined &",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Chemical products",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "natural_gas_ngls": {
        "blocks": [
          {
            "x": 455.7861328125,
            "top": 812.6015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(43%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 388.0693359375,
            "top": 863.58017578125,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Natural gas",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "& NGLs",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "metal_products": {
        "blocks": [
          {
            "x": 455.7861328125,
            "top": 962.35986328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
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
            "x": 388.0693359375,
            "top": 1039.1923828125,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Metal products",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 455.7861328125,
            "top": 1104.3046875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(471%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 371.14013671875,
            "top": 1185.0439453125,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          }
        ]
      },
      "reported_revenue": {
        "blocks": [
          {
            "x": 923.29248046875,
            "top": 471.4130859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(22%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income_related_sales": {
        "blocks": [
          {
            "x": 928.50146484375,
            "top": 895.9453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other income",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "related to sales",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
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
            "x": 1390.798828125,
            "top": 497.4580078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue &",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "Other income",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(20%) Y/Y",
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
            "x": 1858.30517578125,
            "top": 333.375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "48% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1859.607421875,
            "top": 1105.60693359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800
              },
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
            "x": 2485.98779296875,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "25% margin",
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
      "finance": {
        "blocks": [
          {
            "x": 2219.02734375,
            "top": 457.08837890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Finance",
                "size": 37.76513671875,
                "weight": 800
              },
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
            "x": 2517.24169921875,
            "top": 554.7568359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax (116B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 655.02978515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other (1B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "royalties": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 744.884765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Royalties (55B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "purchases": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 867.2958984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Purchases (121B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 1066.53955078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "SG&A (28B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 1157.69677734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Exploration (2B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 1250.15625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "R&D (1B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2517.24169921875,
            "top": 1342.61572265625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "D&A (24B)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "producing_manufacturing": {
        "blocks": [
          {
            "x": 2514.63720703125,
            "top": 924.5947265625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Producing &",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "Manufacturing",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "(23B)",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "沙特阿美 · 2023 财年第三季度",
      "meta": {
        "title": "沙特阿美 2023 财年第三季度利润表",
        "titleSize": 104.1796875
      },
      "annotationsSvg": "<g><text x=\"179\" y=\"216\" font-size=\"29\" font-weight=\"800\" fill=\"#005b91\">单位：十亿沙特里亚尔</text><text x=\"131\" y=\"1104\" font-size=\"29\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>",
      "nodes": {
        "crude_oil": {
          "label": "原油",
          "notes": [
            "同比 -31%"
          ]
        },
        "refined_chemical_products": {
          "label": "炼油及化工产品",
          "notes": [
            "同比 -12%"
          ]
        },
        "natural_gas_ngls": {
          "label": "天然气及天然气液",
          "notes": [
            "同比 -43%"
          ]
        },
        "metal_products": {
          "label": "金属产品",
          "notes": [
            "同比 -3%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 -471%"
          ]
        },
        "reported_revenue": {
          "label": "收入",
          "notes": [
            "同比 -22%"
          ]
        },
        "other_income_related_sales": {
          "label": "销售相关其他收入",
          "notes": [
            "同比 -8%"
          ]
        },
        "revenue": {
          "label": "收入及其他收入",
          "notes": [
            "同比 -20%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 48%",
            "同比 -1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "finance": {
          "label": "财务收益"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 25%",
            "同比 -1 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "royalties": {
          "label": "特许权使用费"
        },
        "purchases": {
          "label": "采购"
        },
        "producing_manufacturing": {
          "label": "生产及制造"
        },
        "sga": {
          "label": "销售、一般及行政费用"
        },
        "exploration": {
          "label": "勘探"
        },
        "rnd": {
          "label": "研发"
        },
        "da": {
          "label": "折旧及摊销"
        }
      },
      "layout": {
        "labels": {
          "crude_oil": {
            "blocks": [
              {
                "x": 455.7861328125,
                "top": 312.5390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -31%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.18505859375,
                "top": 443.67265625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "原油",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "refined_chemical_products": {
            "blocks": [
              {
                "x": 455.7861328125,
                "top": 557.361328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397.18505859375,
                "top": 662.84326171875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "炼油及",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "化工产品",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "natural_gas_ngls": {
            "blocks": [
              {
                "x": 455.7861328125,
                "top": 812.6015625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -43%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 388.0693359375,
                "top": 863.58017578125,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "天然气及",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "天然气液",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "metal_products": {
            "blocks": [
              {
                "x": 455.7861328125,
                "top": 962.35986328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 388.0693359375,
                "top": 1039.1923828125,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "金属产品",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 455.7861328125,
                "top": 1104.3046875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -471%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 371.14013671875,
                "top": 1185.0439453125,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "reported_revenue": {
            "blocks": [
              {
                "x": 923.29248046875,
                "top": 471.4130859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income_related_sales": {
            "blocks": [
              {
                "x": 928.50146484375,
                "top": 895.9453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售相关",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -8%",
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
                "x": 1390.798828125,
                "top": 497.4580078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入及",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "其他收入",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 -20%",
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
                "x": 1858.30517578125,
                "top": 333.375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 48%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -1 个百分点",
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
                "x": 1859.607421875,
                "top": 1105.60693359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800
                  },
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
                "x": 2485.98779296875,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 -1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "finance": {
            "blocks": [
              {
                "x": 2219.02734375,
                "top": 457.08837890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "财务收益",
                    "size": 37.76513671875,
                    "weight": 800
                  },
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
                "x": 2517.24169921875,
                "top": 554.7568359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费 (116B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 655.02978515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他 (1B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "royalties": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 744.884765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "特许权使用费 (55B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "purchases": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 867.2958984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "采购 (121B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 1066.53955078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售、一般及行政费用 (28B)",
                    "size": 23.4404296875,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 1157.69677734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "勘探 (2B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 1250.15625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研发 (1B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2517.24169921875,
                "top": 1342.61572265625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "折旧及摊销 (24B)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "producing_manufacturing": {
            "blocks": [
              {
                "x": 2514.63720703125,
                "top": 924.5947265625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "生产及",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "制造",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "(23B)",
                    "size": 29.95166015625,
                    "weight": 400
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
