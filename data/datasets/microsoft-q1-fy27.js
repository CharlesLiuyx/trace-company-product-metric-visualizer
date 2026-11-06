(function () {
const ICONS = window.SANKEY_BUSINESS_ICONS || {};
const icon=(name,x,y,s)=>`<g data-typography-role="brand" transform="translate(${x} ${y}) scale(${s})">${ICONS[name]||''}</g>`;
const annotations=`${icon('microsoftAzure',323,318,.76)}${icon('microsoft365Commercial',330,537,.88)}${icon('microsoftBing',355,828,.58)}${icon('microsoftWindows',331,1185,.79)}<svg data-typography-role="brand" x="344" y="961" width="85" height="77" viewBox="20 0 80 82">${(ICONS.microsoftXbox||'').replace(/<text[\s\S]*?<\/text>/g,'')}</svg>`;
window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "microsoft-q1-fy27",
  "name": "Microsoft · Q1 FY27",
  "company": "Microsoft",
  "meta": {
    "company": "Microsoft",
    "title": "Microsoft Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/microsoft-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 2320,
    "periodX": 978,
    "periodY": 1245,
    "periodNoteY": 1288,
    "logoX": 875,
    "logoY": 261,
    "logoWidth": 190,
    "logoHeight": 190,
    "logoViewBox": "0 0 193 193",
    "logoSvg": ICONS.microsoftLogo || ''
  },
  "nodes": [
    {
      "id": "azure",
      "type": "source",
      "label": "Azure",
      "value": 33.2,
      "valueText": "$33.2B",
      "col": 0,
      "order": 0,
      "color": "#00a5f2",
      "labelColor": "#5e5e5e",
      "linkTint": "#85cef2",
      "notes": [
        "+48% Y/Y"
      ]
    },
    {
      "id": "microsoft_365_cloud",
      "type": "source",
      "label": "Microsoft 365 Cloud",
      "value": 27.8,
      "valueText": "$27.8B",
      "col": 0,
      "order": 1,
      "color": "#8a64b9",
      "labelColor": "#5e5e5e",
      "linkTint": "#c2b2d7",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "productivity_server_licensing",
      "type": "source",
      "label": "Productivity & Server licensing",
      "value": 8.4,
      "valueText": "$8.4B",
      "col": 0,
      "order": 2,
      "color": "#ff4f18",
      "labelColor": "#5e5e5e",
      "linkTint": "#f7ac91",
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "search",
      "type": "source",
      "label": "Search & Advertising",
      "value": 6.6,
      "valueText": "$6.6B",
      "col": 0,
      "order": 3,
      "color": "#299c9b",
      "labelColor": "#5e5e5e",
      "linkTint": "#98cbca",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "gaming",
      "type": "source",
      "label": "XBOX",
      "value": 5.4,
      "valueText": "$5.4B",
      "col": 0,
      "order": 4,
      "color": "#59bb00",
      "labelColor": "#5e5e5e",
      "linkTint": "#add885",
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "industry_solutions",
      "type": "source",
      "label": "Industry Solutions",
      "value": 5.3,
      "valueText": "$5.3B",
      "col": 0,
      "order": 5,
      "color": "#2e578c",
      "labelColor": "#5e5e5e",
      "linkTint": "#9aabc4",
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "windows_devices",
      "type": "source",
      "label": "Windows OEM & Devices",
      "value": 3.6,
      "valueText": "$3.6B",
      "col": 0,
      "order": 6,
      "color": "#ffba00",
      "labelColor": "#5e5e5e",
      "linkTint": "#f7d885",
      "notes": [
        "(22%) Y/Y"
      ]
    },
    {
      "id": "frontier_support",
      "type": "source",
      "label": "Frontier & Support",
      "value": 2.1,
      "valueText": "$2.1B",
      "col": 0,
      "order": 7,
      "color": "#000000",
      "labelColor": "#5e5e5e",
      "linkTint": "#858585",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 92.3,
      "valueText": "$92.3B",
      "col": 1,
      "order": 8
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 62.6,
      "valueText": "$62.6B",
      "col": 2,
      "order": 9
    },
    {
      "id": "cost_of_revenue",
      "type": "cost",
      "label": "Cost of revenue",
      "value": 29.7,
      "valueText": "($29.7B)",
      "col": 2,
      "order": 10
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 45.9,
      "valueText": "$45.9B",
      "col": 3,
      "order": 11
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": "Operating expenses",
      "value": 16.6,
      "valueText": "($16.6B)",
      "col": 3,
      "order": 12
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 36.6,
      "valueText": "$36.6B",
      "col": 4,
      "order": 13
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 9.3,
      "valueText": "($9.3B)",
      "col": 4,
      "order": 14
    },
    {
      "id": "rnd",
      "type": "cost",
      "label": "R&D",
      "value": 9.0,
      "valueText": "($9.0B)",
      "col": 4,
      "order": 15
    },
    {
      "id": "sm",
      "type": "cost",
      "label": "S&M",
      "value": 5.7,
      "valueText": "($5.7B)",
      "col": 4,
      "order": 16
    },
    {
      "id": "ga",
      "type": "cost",
      "label": "G&A",
      "value": 1.9,
      "valueText": "($1.9B)",
      "col": 4,
      "order": 17
    }
  ],
  "links": [
    {
      "source": "azure",
      "target": "revenue",
      "value": 33.2,
      "y0": 368.0,
      "y1": 713.0,
      "sourceWidth": 130,
      "targetWidth": 130,
      "targetOrder": 0
    },
    {
      "source": "microsoft_365_cloud",
      "target": "revenue",
      "value": 27.8,
      "y0": 591.5,
      "y1": 832.5,
      "sourceWidth": 109,
      "targetWidth": 109,
      "targetOrder": 1
    },
    {
      "source": "productivity_server_licensing",
      "target": "revenue",
      "value": 8.4,
      "y0": 761.5,
      "y1": 903.5,
      "sourceWidth": 33,
      "targetWidth": 33,
      "targetOrder": 2
    },
    {
      "source": "search",
      "target": "revenue",
      "value": 6.6,
      "y0": 885.5,
      "y1": 933.5,
      "sourceWidth": 27,
      "targetWidth": 27,
      "targetOrder": 3
    },
    {
      "source": "gaming",
      "target": "revenue",
      "value": 5.4,
      "y0": 1008.5,
      "y1": 957.5,
      "sourceWidth": 21,
      "targetWidth": 21,
      "targetOrder": 4
    },
    {
      "source": "industry_solutions",
      "target": "revenue",
      "value": 5.3,
      "y0": 1121.0,
      "y1": 979.0,
      "sourceWidth": 22,
      "targetWidth": 22,
      "targetOrder": 5
    },
    {
      "source": "windows_devices",
      "target": "revenue",
      "value": 3.6,
      "y0": 1233.5,
      "y1": 997.5,
      "sourceWidth": 15,
      "targetWidth": 15,
      "targetOrder": 6
    },
    {
      "source": "frontier_support",
      "target": "revenue",
      "value": 2.1,
      "y0": 1343.5,
      "y1": 1006.5,
      "sourceWidth": 9,
      "targetWidth": 3,
      "targetOrder": 7
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 62.6,
      "y0": 770,
      "y1": 646,
      "sourceWidth": 244,
      "targetWidth": 244,
      "sourceOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 29.7,
      "y0": 950,
      "y1": 1046,
      "sourceWidth": 116,
      "targetWidth": 116,
      "sourceOrder": 1
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 45.9,
      "y0": 613.5,
      "y1": 534.5,
      "sourceWidth": 179,
      "targetWidth": 179,
      "sourceOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 16.6,
      "y0": 735.5,
      "y1": 828.5,
      "sourceWidth": 65,
      "targetWidth": 65,
      "sourceOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 36.6,
      "y0": 516.5,
      "y1": 416.5,
      "sourceWidth": 143,
      "targetWidth": 143,
      "sourceOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 9.3,
      "y0": 606,
      "y1": 703,
      "sourceWidth": 36,
      "targetWidth": 36,
      "sourceOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 9,
      "y0": 814,
      "y1": 877,
      "sourceWidth": 36,
      "targetWidth": 36,
      "sourceOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 5.7,
      "y0": 843,
      "y1": 1066,
      "sourceWidth": 22,
      "targetWidth": 22,
      "sourceOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 1.9,
      "y0": 857,
      "y1": 1251,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 2
    }
  ],
  "layout": {
    "scale": 3.9,
    "nodes": {
      "azure": {
        "x": 471,
        "y": 303,
        "width": 72,
        "height": 130
      },
      "microsoft_365_cloud": {
        "x": 471,
        "y": 537,
        "width": 72,
        "height": 109
      },
      "productivity_server_licensing": {
        "x": 471,
        "y": 745,
        "width": 72,
        "height": 33
      },
      "search": {
        "x": 471,
        "y": 872,
        "width": 72,
        "height": 27
      },
      "gaming": {
        "x": 471,
        "y": 998,
        "width": 72,
        "height": 21
      },
      "industry_solutions": {
        "x": 471,
        "y": 1110,
        "width": 72,
        "height": 22
      },
      "windows_devices": {
        "x": 471,
        "y": 1226,
        "width": 72,
        "height": 15
      },
      "frontier_support": {
        "x": 471,
        "y": 1339,
        "width": 72,
        "height": 9
      },
      "revenue": {
        "x": 938,
        "y": 648,
        "width": 72,
        "height": 360
      },
      "gross_profit": {
        "x": 1405,
        "y": 524,
        "width": 72,
        "height": 244
      },
      "cost_of_revenue": {
        "x": 1405,
        "y": 988,
        "width": 72,
        "height": 116
      },
      "operating_profit": {
        "x": 1872,
        "y": 445,
        "width": 72,
        "height": 179
      },
      "operating_expenses": {
        "x": 1872,
        "y": 796,
        "width": 72,
        "height": 65
      },
      "net_profit": {
        "x": 2339,
        "y": 345,
        "width": 73,
        "height": 143
      },
      "tax": {
        "x": 2339,
        "y": 685,
        "width": 73,
        "height": 36
      },
      "rnd": {
        "x": 2339,
        "y": 859,
        "width": 73,
        "height": 36
      },
      "sm": {
        "x": 2339,
        "y": 1055,
        "width": 73,
        "height": 22
      },
      "ga": {
        "x": 2339,
        "y": 1247,
        "width": 73,
        "height": 8
      }
    },
    "labels": {
      "azure": {
        "blocks": [
          {
            "x": 166,
            "top": 345,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Azure",
                "size": 38,
                "weight": 800
              }
            ]
          },
          {
            "x": 508,
            "top": 210,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+48% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "microsoft_365_cloud": {
        "blocks": [
          {
            "x": 166,
            "top": 545.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Microsoft 365",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Cloud",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 508,
            "top": 441,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "productivity_server_licensing": {
        "blocks": [
          {
            "x": 164,
            "top": 715.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Productivity &",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Server licensing",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 508,
            "top": 648,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "search": {
        "blocks": [
          {
            "x": 165,
            "top": 836,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Search &",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Advertising",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 508,
            "top": 780,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gaming": {
        "blocks": [
          {
            "x": 167,
            "top": 984,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "XBOX",
                "size": 38,
                "weight": 800
              }
            ]
          },
          {
            "x": 508,
            "top": 902,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "industry_solutions": {
        "blocks": [
          {
            "x": 170,
            "top": 1075,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Industry",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 524,
            "top": 1019,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "windows_devices": {
        "blocks": [
          {
            "x": 167,
            "top": 1188,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Windows OEM",
                "size": 38,
                "weight": 800
              },
              {
                "text": "& Devices",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 508,
            "top": 1134,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(22%) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "frontier_support": {
        "blocks": [
          {
            "x": 241,
            "top": 1320.5,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Frontier & Support",
                "size": 38,
                "weight": 800
              }
            ]
          },
          {
            "x": 508,
            "top": 1243,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 975,
            "top": 495,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1441,
            "top": 337,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "68% margin",
                "size": 28,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1441,
            "top": 1117,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1908,
            "top": 260,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "50% margin",
                "size": 28,
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1908,
            "top": 878,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2533,
            "top": 341,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "40% margin",
                "size": 28,
                "weight": 400
              },
              {
                "text": "+4pp Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2531,
            "top": 669,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2531,
            "top": 834,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "R&D",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "10% of revenue",
                "size": 28,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2531,
            "top": 1024,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "S&M",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "6% of revenue",
                "size": 28,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2531,
            "top": 1203,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "2% of revenue",
                "size": 28,
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#5e5e5e",
    "noteColor": "#666666",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#00a5f2",
        "label": "#5e5e5e"
      },
      "hub": {
        "node": "#666666",
        "label": "#5e5e5e"
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
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 40,
      "value": 40,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": annotations,
  "rasterAnnotations": [
    {
      "key": "office-q1-fy27",
      "href": "data/assets/raster-annotations/microsoft/office-q1-fy27.png",
      "x": 335,
      "y": 706,
      "width": 94,
      "height": 111,
      "pairedNode": "productivity_server_licensing"
    },
    {
      "key": "industry-q1-fy27",
      "href": "data/assets/raster-annotations/microsoft/industry-q1-fy27.png",
      "x": 276,
      "y": 1071.5,
      "width": 169,
      "height": 99,
      "pairedNode": "industry_solutions"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Microsoft · 2027 财年第一季度",
      "meta": {
        "title": "Microsoft 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 9 月"
      },
      "nodes": {
        "azure": {
          "label": "Azure 云服务"
        },
        "microsoft_365_cloud": {
          "label": "Microsoft 365 云服务"
        },
        "productivity_server_licensing": {
          "label": "生产力与服务器许可"
        },
        "search": {
          "label": "搜索与广告"
        },
        "gaming": {
          "label": "XBOX"
        },
        "industry_solutions": {
          "label": "行业解决方案"
        },
        "windows_devices": {
          "label": "Windows OEM 与设备"
        },
        "frontier_support": {
          "label": "前沿业务与支持"
        },
        "revenue": {
          "label": "收入"
        },
        "gross_profit": {
          "label": "毛利润"
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "rnd": {
          "label": "研发"
        },
        "sm": {
          "label": "销售与市场"
        },
        "ga": {
          "label": "管理费用"
        }
      },
      "layout": {
        "labels": {
          "azure": {
            "blocks": [
              {
                "x": 166,
                "top": 348.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "Azure 云服务",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 210,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +48%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "microsoft_365_cloud": {
            "blocks": [
              {
                "x": 166,
                "top": 572.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "Microsoft 365 云服务",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 441,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "productivity_server_licensing": {
            "blocks": [
              {
                "x": 164,
                "top": 742.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "生产力与服务器许可",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 648,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "search": {
            "blocks": [
              {
                "x": 165,
                "top": 866.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "搜索与广告",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 780,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gaming": {
            "blocks": [
              {
                "x": 167,
                "top": 989.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "XBOX",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 902,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "industry_solutions": {
            "blocks": [
              {
                "x": 170,
                "top": 1101.5,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "行业解决方案",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 524,
                "top": 1019,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "windows_devices": {
            "blocks": [
              {
                "x": 167,
                "top": 1214.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "Windows OEM 与设备",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 1134,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (22%)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "frontier_support": {
            "blocks": [
              {
                "x": 241,
                "top": 1324.0,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "前沿业务与支持",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 508,
                "top": 1243,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 975,
                "top": 495,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1441,
                "top": 337,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 68%",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1441,
                "top": 1117,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1908,
                "top": 260,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "营业利润率 50%",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1908,
                "top": 878,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2533,
                "top": 341,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "净利率 40%",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2531,
                "top": 669,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2531,
                "top": 834,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 10%",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2531,
                "top": 1024,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 6%",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2531,
                "top": 1203,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 2%",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
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
})();
