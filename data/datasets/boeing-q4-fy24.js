(function(){
const LOGO_BLUE="#0033a1";
  const boeingLogo = `<g transform="translate(95,-12) scale(0.96)">
    <g data-typography-role="brand">
      <g fill="${LOGO_BLUE}">
        <circle cx="748" cy="368" r="43" fill="none" stroke="${LOGO_BLUE}" stroke-width="6.5"/>
        <path d="M700 416 L744 372 L808 316 L800 330 L742 392 L714 420 Z"/>
        <path d="M726 366 C752 385 778 402 806 409 C832 415 856 415 878 411 C852 419 824 424 800 421 C784 419 774 412 764 405 C760 415 754 423 745 429 C752 415 754 401 749 392 C741 384 733 375 726 366 Z"/>
      </g>
      <text x="880" y="391" font-family="Montserrat,Arial,sans-serif" font-size="72" font-weight="800" font-style="italic" textLength="460" lengthAdjust="spacingAndGlyphs" letter-spacing="1" fill="${LOGO_BLUE}">BOEING</text>
    </g></g>`;


const d={
  "key": "boeing-q4-fy24",
  "name": "Boeing · Q4 FY24",
  "company": "Boeing",
  "meta": {
    "company": "Boeing",
    "title": "Boeing Q4 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/boeing-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 122,
    "titleWeight": 800
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155577",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "allowRasterAnnotations": true
  },
  "layout": {
    "scale": 18.2314453125,
    "nodes": {
      "commercial_airplanes": {
        "x": 418.02099609375,
        "y": 464.90185546875,
        "width": 72.92578125,
        "height": 88.552734375
      },
      "defense": {
        "x": 418.02099609375,
        "y": 756.60498046875,
        "width": 72.92578125,
        "height": 100.27294921875
      },
      "global_services": {
        "x": 420.62548828125,
        "y": 1033.9833984375,
        "width": 71.62353515625,
        "height": 93.76171875
      },
      "seg_hub": {
        "x": 888.1318359375,
        "y": 632.8916015625,
        "width": 72.92578125,
        "height": 281.28515625
      },
      "revenue": {
        "x": 1356.9404296875,
        "y": 712.32861328125,
        "width": 72.92578125,
        "height": 279.98291015625
      },
      "unallocated": {
        "x": 1356.9404296875,
        "y": 1144.67431640625,
        "width": 70.3212890625,
        "height": 1.30224609375
      },
      "costs_expenses": {
        "x": 1816.63330078125,
        "y": 625.078125,
        "width": 72.92578125,
        "height": 350.30419921875
      },
      "operating_loss": {
        "x": 1666.875,
        "y": 1079.56201171875,
        "width": 72.92578125,
        "height": 69.01904296875
      },
      "cost_of_sales": {
        "x": 2286.744140625,
        "y": 543.03662109375,
        "width": 72.92578125,
        "height": 308.63232421875
      },
      "ga": {
        "x": 2286.744140625,
        "y": 1023.5654296875,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "rnd": {
        "x": 2286.744140625,
        "y": 1199.36865234375,
        "width": 72.92578125,
        "height": 23.4404296875
      }
    },
    "labels": {
      "commercial_airplanes": {
        "blocks": [
          {
            "x": 462.29736328125,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0033a1"
              },
              {
                "text": "(55%) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 253.93798828125,
            "top": 462.29736328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Commercial",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#0033a1"
              },
              {
                "text": "Airplanes",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#0033a1"
              }
            ]
          },
          {
            "x": 253.93798828125,
            "top": 566.47705078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "(44%) segment margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "defense": {
        "blocks": [
          {
            "x": 455.7861328125,
            "top": 656.33203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0033a1"
              },
              {
                "text": "(20%) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 253.93798828125,
            "top": 760.602734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Defense, Space",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#0033a1"
              },
              {
                "text": "& Security",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#0033a1"
              }
            ]
          },
          {
            "x": 253.93798828125,
            "top": 859.482421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "(42%) segment margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "global_services": {
        "blocks": [
          {
            "x": 458.390625,
            "top": 931.10595703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0033a1"
              },
              {
                "text": "+6% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 253.93798828125,
            "top": 1035.28564453125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Global Services",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#0033a1"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 253.93798828125,
            "top": 1088.677734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "19% segment margin",
                "size": 26.044921875,
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
            "top": 559.9658203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#0033a1"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0033a1"
              },
              {
                "text": "(31%) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "unallocated": {
        "blocks": [
          {
            "x": 1392.10107421875,
            "top": 1164.2080078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Unallocated",
                "size": 33.8583984375,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#991600"
              }
            ]
          }
        ]
      },
      "costs_expenses": {
        "blocks": [
          {
            "x": 1853.09619140625,
            "top": 462.29736328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Costs &",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#991600"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1703.337890625,
            "top": 1166.8125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "loss",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#991600"
              },
              {
                "text": "(25%) margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(26pp) Y/Y",
                "size": 26.044921875,
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
            "x": 2478.17431640625,
            "top": 582.10400390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "products &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "services",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#991600"
              },
              {
                "text": "110% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+23pp Y/Y",
                "size": 26.044921875,
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
            "x": 2478.17431640625,
            "top": 979.2890625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A & Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#991600"
              },
              {
                "text": "9% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.044921875,
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
            "x": 2478.17431640625,
            "top": 1165.51025390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700,
                "color": "#991600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#991600"
              },
              {
                "text": "5% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "seg_hub": {
        "blocks": []
      }
    }
  },
  "nodes": [
    {
      "id": "commercial_airplanes",
      "type": "source",
      "col": 0,
      "order": 0,
      "value": 4.8,
      "label": "",
      "color": "#0033a1",
      "labelColor": "#0033a1",
      "linkTint": "#859acb",
      "valueText": "$4.8B"
    },
    {
      "id": "defense",
      "type": "source",
      "col": 0,
      "order": 1,
      "value": 5.4,
      "label": "",
      "color": "#0033a1",
      "labelColor": "#0033a1",
      "linkTint": "#859acb",
      "valueText": "$5.4B"
    },
    {
      "id": "global_services",
      "type": "source",
      "col": 0,
      "order": 2,
      "value": 5.1,
      "label": "",
      "color": "#0033a1",
      "labelColor": "#0033a1",
      "linkTint": "#859acb",
      "valueText": "$5.1B"
    },
    {
      "id": "seg_hub",
      "type": "hub",
      "col": 1,
      "order": 3,
      "value": 15.3,
      "label": "",
      "color": "#0033a1",
      "labelColor": "#0033a1",
      "linkTint": "#859acb",
      "valueText": "$15.3B"
    },
    {
      "id": "revenue",
      "type": "hub",
      "col": 2,
      "order": 4,
      "value": 15.2,
      "label": "",
      "color": "#0033a1",
      "labelColor": "#0033a1",
      "linkTint": "#859acb",
      "valueText": "$15.2B"
    },
    {
      "id": "unallocated",
      "type": "cost",
      "col": 2,
      "order": 5,
      "value": -0.1,
      "label": "",
      "color": "#e08585",
      "labelColor": "#991600",
      "linkTint": "#e08585",
      "valueText": "($0.1B)"
    },
    {
      "id": "costs_expenses",
      "type": "cost",
      "col": 3,
      "order": 6,
      "value": 19,
      "label": "",
      "color": "#ce0000",
      "labelColor": "#991600",
      "linkTint": "#e08585",
      "valueText": "($19.0B)"
    },
    {
      "id": "operating_loss",
      "type": "cost",
      "col": 3,
      "order": 7,
      "value": -3.8,
      "label": "",
      "color": "#ce0000",
      "labelColor": "#991600",
      "linkTint": "#e08585",
      "valueText": "($3.8B)"
    },
    {
      "id": "cost_of_sales",
      "type": "cost",
      "col": 4,
      "order": 8,
      "value": 16.8,
      "label": "",
      "color": "#ce0000",
      "labelColor": "#991600",
      "linkTint": "#e08585",
      "valueText": "($16.8B)"
    },
    {
      "id": "ga",
      "type": "cost",
      "col": 4,
      "order": 9,
      "value": 1.3,
      "label": "",
      "color": "#ce0000",
      "labelColor": "#991600",
      "linkTint": "#e08585",
      "valueText": "($1.3B)"
    },
    {
      "id": "rnd",
      "type": "cost",
      "col": 4,
      "order": 10,
      "value": 0.8,
      "label": "",
      "color": "#ce0000",
      "labelColor": "#991600",
      "linkTint": "#e08585",
      "valueText": "($0.8B)"
    }
  ],
  "links": [
    {
      "source": "commercial_airplanes",
      "target": "seg_hub",
      "value": 4.8,
      "width": 88.552734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "defense",
      "target": "seg_hub",
      "value": 5.4,
      "width": 100.27294921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "global_services",
      "target": "seg_hub",
      "value": 5.1,
      "width": 92.45947265625,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "seg_hub",
      "target": "revenue",
      "value": 15.2,
      "width": 279.98291015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "seg_hub",
      "target": "unallocated",
      "value": 0.1,
      "width": 1.30224609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "costs_expenses",
      "value": 15.2,
      "width": 279.98291015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "costs_expenses",
      "value": 3.8,
      "width": 70.3212890625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 69.01904296875,
      "targetWidth": 70.3212890625
    },
    {
      "source": "costs_expenses",
      "target": "cost_of_sales",
      "value": 16.8,
      "width": 308.63232421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "costs_expenses",
      "target": "ga",
      "value": 1.3,
      "width": 16.92919921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 14.32470703125
    },
    {
      "source": "costs_expenses",
      "target": "rnd",
      "value": 0.8,
      "width": 24.74267578125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "targetWidth": 23.4404296875
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "combined_result",
      "representation": "data-only"
    },
    {
      "id": "operating_expenses",
      "representation": "data-only"
    }
  ],
  "operatingMetrics": [
    {
      "id": "deliveries",
      "value": "57",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "57"
    },
    {
      "id": "backlog",
      "value": "521",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$521B"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "boeing-commercial",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-commercial-airplanes-737.png",
      "x": 110.69091796875,
      "y": 363.32666015625,
      "width": 270.8671875,
      "height": 89.85498046875
    },
    {
      "key": "boeing-defense",
      "href": "data/assets/raster-annotations/boeing/boeing-q4-defense-starliner.png",
      "x": 183.61669921875,
      "y": 648.5185546875,
      "width": 126.31787109375,
      "height": 119.806640625
    }
  ],
  "i18n": {
    "zh": {
      "name": "波音 · 2024 财年第四季度",
      "meta": {
        "title": "波音 2024 财年第四季度利润表"
      },
      "layout": {
        "labels": {
          "commercial_airplanes": {
            "blocks": [
              {
                "x": 462.29736328125,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0033a1"
                  },
                  {
                    "text": "同比 (55%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 253.93798828125,
                "top": 462.29736328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "商用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#0033a1"
                  },
                  {
                    "text": "飞机",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#0033a1"
                  }
                ]
              },
              {
                "x": 253.93798828125,
                "top": 566.47705078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "分部利润率 (44%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "defense": {
            "blocks": [
              {
                "x": 455.7861328125,
                "top": 656.33203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0033a1"
                  },
                  {
                    "text": "同比 (20%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 253.93798828125,
                "top": 760.602734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "国防、太空",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#0033a1"
                  },
                  {
                    "text": "与安全",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#0033a1"
                  }
                ]
              },
              {
                "x": 253.93798828125,
                "top": 859.482421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "分部利润率 (42%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "global_services": {
            "blocks": [
              {
                "x": 458.390625,
                "top": 931.10595703125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0033a1"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 253.93798828125,
                "top": 1035.28564453125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "全球服务",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#0033a1"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 253.93798828125,
                "top": 1088.677734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "分部利润率 19%",
                    "size": 26.044921875,
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
                "top": 559.9658203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#0033a1"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0033a1"
                  },
                  {
                    "text": "同比 (31%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "unallocated": {
            "blocks": [
              {
                "x": 1392.10107421875,
                "top": 1164.2080078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "未分配项",
                    "size": 33.8583984375,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#991600"
                  }
                ]
              }
            ]
          },
          "costs_expenses": {
            "blocks": [
              {
                "x": 1853.09619140625,
                "top": 462.29736328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "成本及",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#991600"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1703.337890625,
                "top": 1166.8125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "亏损",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#991600"
                  },
                  {
                    "text": "利润率 (25%)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (26 个百分点)",
                    "size": 26.044921875,
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
                "x": 2478.17431640625,
                "top": 582.10400390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "服务",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "成本",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#991600"
                  },
                  {
                    "text": "占收入 110%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +23 个百分点",
                    "size": 26.044921875,
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
                "x": 2478.17431640625,
                "top": 979.2890625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "管理费用及其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#991600"
                  },
                  {
                    "text": "占收入 9%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 26.044921875,
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
                "x": 2478.17431640625,
                "top": 1165.51025390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#991600"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#991600"
                  },
                  {
                    "text": "占收入 5%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "seg_hub": {
            "blocks": []
          }
        }
      }
    }
  }
};
d.annotationsSvg=`<g font-family="Noto Sans,sans-serif">${boeingLogo}<rect data-annotation-clearance="true" x="72.92578125" y="1172.021484375" width="446.67041015625" height="157.57177734375" rx="33.8583984375" fill="#0033a1"/><text  x="296.260986328125" y="1221.5068359375" text-anchor="middle" font-size="32.55615234375" font-weight="700" fill="white">Deliveries</text><text data-operating-metric="deliveries" x="123.71337890625" y="1265.783203125" font-size="31.25390625" fill="white">57</text><text x="166.6875" y="1265.783203125" font-size="31.25390625" fill="white">commercial airplanes</text><text  x="296.260986328125" y="1304.8505859375" text-anchor="middle" font-size="26.044921875" font-weight="400" fill="white">(64%) Y/Y</text><rect data-annotation-clearance="true" x="531.31640625" y="1172.021484375" width="239.61328125" height="157.57177734375" rx="33.8583984375" fill="#0033a1"/><text  x="651.123046875" y="1221.5068359375" text-anchor="middle" font-size="32.55615234375" font-weight="700" fill="white">Backlog</text><text data-operating-metric="backlog" x="651.123046875" y="1265.783203125" text-anchor="middle" font-size="31.25390625" font-weight="400" fill="white">$521B</text><text  x="651.123046875" y="1304.8505859375" text-anchor="middle" font-size="26.044921875" font-weight="400" fill="white">+0% Y/Y</text></g>`;
d.i18n.zh.annotationsSvg=`<g font-family="Noto Sans,sans-serif">${boeingLogo}<rect data-annotation-clearance="true" x="72.92578125" y="1172.021484375" width="446.67041015625" height="157.57177734375" rx="33.8583984375" fill="#0033a1"/><text  x="296.260986328125" y="1221.5068359375" text-anchor="middle" font-size="32.55615234375" font-weight="700" fill="white">交付</text><text data-operating-metric="deliveries" x="123.71337890625" y="1265.783203125" font-size="31.25390625" fill="white">57</text><text x="166.6875" y="1265.783203125" font-size="31.25390625" fill="white">架商用飞机</text><text  x="296.260986328125" y="1304.8505859375" text-anchor="middle" font-size="26.044921875" font-weight="400" fill="white">同比 (64%)</text><rect data-annotation-clearance="true" x="531.31640625" y="1172.021484375" width="239.61328125" height="157.57177734375" rx="33.8583984375" fill="#0033a1"/><text  x="651.123046875" y="1221.5068359375" text-anchor="middle" font-size="32.55615234375" font-weight="700" fill="white">订单储备</text><text data-operating-metric="backlog" x="651.123046875" y="1265.783203125" text-anchor="middle" font-size="31.25390625" font-weight="400" fill="white">$521B</text><text  x="651.123046875" y="1304.8505859375" text-anchor="middle" font-size="26.044921875" font-weight="400" fill="white">同比 +0%</text></g>`;
window.DATASETS=window.DATASETS||[];window.DATASETS.push(d);
})();
