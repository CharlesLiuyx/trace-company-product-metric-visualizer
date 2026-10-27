window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "tripadvisor-q1-fy25",
  "name": "Tripadvisor · Q1 FY25",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2450,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#696969",
    "palette": {
      "source": {
        "node": "#34e0a1",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
    "linkOpacity": 1
  },
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 605.54443359375,
      "y": 295.60986328125,
      "width": 748.79150390625,
      "height": 158.8740234375
    },
    {
      "key": "tripadvisor-hotel-other-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 23.4404296875,
      "y": 429.7412109375,
      "width": 109.388671875,
      "height": 108.08642578125
    },
    {
      "key": "tripadvisor-experiences-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 16.92919921875,
      "y": 750.09375,
      "width": 110.69091796875,
      "height": 111.9931640625
    },
    {
      "key": "tripadvisor-thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 18.2314453125,
      "y": 1031.37890625,
      "width": 109.388671875,
      "height": 109.388671875
    }
  ],
  "layout": {
    "scale": 0.703212890625,
    "nodes": {
      "tripadvisor": {
        "x": 386.767,
        "y": 464.902,
        "width": 72.926,
        "height": 153.665
      },
      "viator": {
        "x": 386.767,
        "y": 789.161,
        "width": 72.926,
        "height": 109.389
      },
      "thefork": {
        "x": 386.767,
        "y": 1069.144,
        "width": 72.926,
        "height": 32.556
      },
      "gross_segment_revenue": {
        "x": 760.512,
        "y": 565.175,
        "width": 72.926,
        "height": 296.912
      },
      "revenue": {
        "x": 1134.256,
        "y": 643.31,
        "width": 72.926,
        "height": 279.983
      },
      "eliminations": {
        "x": 1134.256,
        "y": 1060.028,
        "width": 72.926,
        "height": 15.627
      },
      "gross_profit": {
        "x": 1508.001,
        "y": 569.082,
        "width": 72.926,
        "height": 260.449
      },
      "cost_of_revenue": {
        "x": 1508.001,
        "y": 1062.633,
        "width": 72.926,
        "height": 18.231
      },
      "operating_loss": {
        "x": 1746.312,
        "y": 987.103,
        "width": 72.926,
        "height": 10.418
      },
      "operating_expenses": {
        "x": 1881.746,
        "y": 640.705,
        "width": 72.926,
        "height": 270.867
      },
      "sm": {
        "x": 2255.49,
        "y": 342.491,
        "width": 72.926,
        "height": 121.109
      },
      "personnel": {
        "x": 2255.49,
        "y": 552.152,
        "width": 72.926,
        "height": 101.575
      },
      "technology": {
        "x": 2255.49,
        "y": 744.885,
        "width": 72.926,
        "height": 15.627
      },
      "da": {
        "x": 2255.49,
        "y": 882.923,
        "width": 72.926,
        "height": 14.325
      },
      "ga": {
        "x": 2255.49,
        "y": 1017.054,
        "width": 72.926,
        "height": 11.72
      },
      "restructuring": {
        "x": 2255.49,
        "y": 1157.697,
        "width": 72.926,
        "height": 6.511
      }
    },
    "labels": {
      "tripadvisor": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 468.80859375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tripadvisor",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 367.2333984375,
            "top": 520.8984375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "display & platform,",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "experiences & dining",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "30% adjusted margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 688.88818359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 790.46337890625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Viator",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 367.2333984375,
            "top": 841.2509765625,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "& attractions",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(12%) adjusted margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 962.77783203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 367.2333984375,
            "top": 1066.53955078125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "TheFork",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 367.2333984375,
            "top": 1116.02490234375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restaurant",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "reservations",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(7%) adjusted margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "gross_segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1169.4169921875,
            "top": 494.853515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1169.4169921875,
            "top": 543.03662109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1169.4169921875,
            "top": 591.2197265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+1% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1169.4169921875,
            "top": 1097.79345703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1169.4169921875,
            "top": 1145.9765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 1543.16162109375,
            "top": 385.46484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1543.16162109375,
            "top": 433.64794921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1543.16162109375,
            "top": 481.8310546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "93% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1543.16162109375,
            "top": 1101.7001953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1543.16162109375,
            "top": 1198.06640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1782.77490234375,
            "top": 1018.3564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1782.77490234375,
            "top": 1114.72265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1782.77490234375,
            "top": 1162.90576171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(4%) margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1918.20849609375,
            "top": 482.0625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
              }
            ]
          },
          {
            "x": 1918.20849609375,
            "top": 578.4287109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "sm": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 350.30419921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M ($172M)",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2487.2900390625,
            "top": 394.58056640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "43% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 558.66357421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Personnel ($144M)",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2487.2900390625,
            "top": 602.93994140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "36% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 735.76904296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Technology ($22M)",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2487.2900390625,
            "top": 780.04541015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "6% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 875.109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "D&A ($21M)",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2487.2900390625,
            "top": 919.3857421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "5% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 1005.333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A ($17M)",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2487.2900390625,
            "top": 1049.6103515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "4% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 1145.9765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2487.2900390625,
            "top": 1234.529296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "3% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#696969"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "tripadvisor",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Tripadvisor",
      "value": 219,
      "notes": [
        "(9%) Y/Y",
        "Branded hotels, display & platform, experiences & dining",
        "30% adjusted margin"
      ]
    },
    {
      "id": "viator",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Viator",
      "value": 156,
      "notes": [
        "+11% Y/Y",
        "Tours, activities & attractions",
        "(12%) adjusted margin"
      ]
    },
    {
      "id": "thefork",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "TheFork",
      "value": 46,
      "notes": [
        "+12% Y/Y",
        "Restaurant reservations",
        "(7%) adjusted margin"
      ]
    },
    {
      "id": "gross_segment_revenue",
      "col": 1,
      "order": 3,
      "type": "source",
      "label": "Company revenue before eliminations",
      "value": 421,
      "notes": []
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 398,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Eliminations",
      "value": 23,
      "notes": []
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 371,
      "notes": [
        "93% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 27,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Operating loss",
      "value": -15,
      "notes": [
        "(4%) margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "Operating expenses",
      "value": 386,
      "notes": []
    },
    {
      "id": "sm",
      "col": 6,
      "order": 10,
      "type": "cost",
      "label": "S&M",
      "value": 172,
      "notes": [
        "43% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "personnel",
      "col": 6,
      "order": 11,
      "type": "cost",
      "label": "Personnel",
      "value": 144,
      "notes": [
        "36% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "technology",
      "col": 6,
      "order": 12,
      "type": "cost",
      "label": "Technology",
      "value": 22,
      "notes": [
        "6% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "da",
      "col": 6,
      "order": 13,
      "type": "cost",
      "label": "D&A",
      "value": 21,
      "notes": [
        "5% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 6,
      "order": 14,
      "type": "cost",
      "label": "G&A",
      "value": 17,
      "notes": [
        "4% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "col": 6,
      "order": 15,
      "type": "cost",
      "label": "Restructuring",
      "value": 10,
      "notes": [
        "3% of revenue",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "tripadvisor",
      "target": "gross_segment_revenue",
      "value": 219,
      "sourceWidth": 153.6650390625,
      "targetWidth": 153.6650390625,
      "y0": 541.734375,
      "y1": 642.00732421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 156,
      "sourceWidth": 109.388671875,
      "targetWidth": 110.69091796875,
      "y0": 843.85546875,
      "y1": 774.185302734375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 46,
      "sourceWidth": 32.55615234375,
      "targetWidth": 32.55615234375,
      "y0": 1085.422119140625,
      "y1": 845.808837890625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 398,
      "sourceWidth": 279.98291015625,
      "targetWidth": 279.98291015625,
      "y0": 705.166259765625,
      "y1": 783.301025390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 23,
      "sourceWidth": 16.92919921875,
      "targetWidth": 15.626953125,
      "y0": 853.622314453125,
      "y1": 1067.841796875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 371,
      "sourceWidth": 260.44921875,
      "targetWidth": 260.44921875,
      "y0": 773.5341796875,
      "y1": 699.30615234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 27,
      "sourceWidth": 19.53369140625,
      "targetWidth": 18.2314453125,
      "y0": 913.525634765625,
      "y1": 1071.74853515625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 371,
      "sourceWidth": 260.44921875,
      "targetWidth": 260.44921875,
      "y0": 699.30615234375,
      "y1": 770.9296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 15,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "y0": 992.3115234375,
      "y1": 906.36328125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 172,
      "sourceWidth": 121.10888671875,
      "targetWidth": 121.10888671875,
      "y0": 701.259521484375,
      "y1": 403.045166015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 144,
      "sourceWidth": 101.5751953125,
      "targetWidth": 101.5751953125,
      "y0": 812.6015625,
      "y1": 602.93994140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 22,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "y0": 871.20263671875,
      "y1": 752.6982421875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 21,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "y0": 886.178466796875,
      "y1": 890.085205078125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 17,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "y0": 899.200927734375,
      "y1": 1022.914306640625,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 10,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "y0": 908.316650390625,
      "y1": 1160.952392578125,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2025 财年第一季度",
      "meta": {
        "title": "猫途鹰 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "titleTextLength": 2120
      },
      "nodes": {
        "tripadvisor": {
          "label": "猫途鹰",
          "notes": [
            "同比 (9%)",
            "品牌酒店、展示平台、体验活动及餐饮",
            "调整后利润率 30%"
          ]
        },
        "viator": {
          "label": "Viator（体验预订）",
          "notes": [
            "同比 +11%",
            "观光、活动与景点",
            "调整后利润率 (12%)"
          ]
        },
        "thefork": {
          "label": "TheFork（餐厅预订）",
          "notes": [
            "同比 +12%",
            "餐厅预订",
            "调整后利润率 (7%)"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前公司收入",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 93%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (4%)",
            "同比 (0 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 43%",
            "同比 +2 个百分点"
          ]
        },
        "personnel": {
          "label": "人员",
          "notes": [
            "占收入 36%",
            "同比 (2 个百分点)"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 6%",
            "同比 (0 个百分点)"
          ]
        },
        "da": {
          "label": "折旧与摊销",
          "notes": [
            "占收入 5%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 4%",
            "同比 (3 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 3%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "tripadvisor": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 468.80859375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "猫途鹰",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 367.2333984375,
                "top": 520.8984375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "品牌酒店、展示平台",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "体验活动及餐饮",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "调整后利润率 30%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 688.88818359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 790.46337890625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "Viator（体验预订）",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 367.2333984375,
                "top": 841.2509765625,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "观光、活动与景点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "调整后利润率 (12%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 962.77783203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 367.2333984375,
                "top": 1066.53955078125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 367.2333984375,
                "top": 1116.02490234375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "调整后利润率 (7%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "gross_segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1169.4169921875,
                "top": 494.853515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1169.4169921875,
                "top": 543.03662109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1169.4169921875,
                "top": 591.2197265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +1%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1169.4169921875,
                "top": 1097.79345703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1169.4169921875,
                "top": 1145.9765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 1543.16162109375,
                "top": 385.46484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1543.16162109375,
                "top": 433.64794921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1543.16162109375,
                "top": 481.8310546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 93%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1543.16162109375,
                "top": 1101.7001953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1543.16162109375,
                "top": 1149.88330078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1782.77490234375,
                "top": 1018.3564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1782.77490234375,
                "top": 1066.53955078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1782.77490234375,
                "top": 1114.72265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 (4%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1918.20849609375,
                "top": 482.0625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1918.20849609375,
                "top": 530.24560546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
          "sm": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 350.30419921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销 ($172M)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2487.2900390625,
                "top": 394.58056640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 43%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 558.66357421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "人员 ($144M)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2487.2900390625,
                "top": 602.93994140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 36%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 735.76904296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "技术 ($22M)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2487.2900390625,
                "top": 780.04541015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 6%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 875.109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与摊销 ($21M)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2487.2900390625,
                "top": 919.3857421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 5%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 1005.333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用 ($17M)",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2487.2900390625,
                "top": 1049.6103515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 4%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 1145.9765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2487.2900390625,
                "top": 1234.529296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 3%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#696969"
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
