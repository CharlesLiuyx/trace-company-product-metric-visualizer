(function(){
  const airbnbLogo = `
    <rect x="0" y="0" width="244" height="244" rx="38" fill="#ff385c"/>
    <path d="M122 48 C103 80 83 116 68 145 C56 169 73 193 99 183 C113 178 121 162 122 145 C123 162 131 178 145 183 C171 193 188 169 176 145 C161 116 141 80 122 48 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M122 145 C99 126 101 96 122 96 C143 96 145 126 122 145 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`;

  const strokeIcon = (x, y, body, width = 96, height = 96) => `
    <g transform="translate(${x} ${y})" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <svg width="${width}" height="${height}" viewBox="0 0 96 96" overflow="visible">${body}</svg>
    </g>`;

  const northAmericaIcon = strokeIcon(87, 447, `
    <path d="M8 48 L8 26 L28 10 L48 26 L48 48"/>
    <path d="M19 48 L19 32 L37 32 L37 48"/>
    <path d="M50 47 L74 47"/>
    <path d="M66 47 L66 12"/>
    <path d="M53 26 L66 16 L82 26"/>
    <path d="M53 38 L66 29 L82 38"/>
    <path d="M6 64 C18 56 30 72 42 64 C54 56 66 72 84 64"/>
    <path d="M6 82 C18 74 30 90 42 82 C54 74 66 90 84 82"/>
  `);

  const emeaIcon = strokeIcon(90, 738, `
    <path d="M8 75 L82 75"/>
    <path d="M30 75 L30 16"/>
    <path d="M16 32 L30 20 L46 32"/>
    <path d="M16 49 L30 38 L46 49"/>
    <path d="M42 75 L76 30 L92 46"/>
    <path d="M62 48 L76 30"/>
    <path d="M44 88 L78 88"/>
  `);

  const latamIcon = strokeIcon(100, 931, `
    <path d="M12 36 C26 10 70 10 84 36"/>
    <path d="M12 36 C32 41 45 41 84 36"/>
    <path d="M48 19 L48 82"/>
    <path d="M48 38 C41 60 36 72 31 82"/>
    <path d="M25 80 A11 11 0 1 0 25 58 A11 11 0 1 0 25 80"/>
    <path d="M29 36 C32 23 37 16 48 16"/>
    <path d="M64 36 C62 23 56 16 48 16"/>
  `, 82, 96);

  const apacIcon = strokeIcon(94, 1052, `
    <path d="M48 17 C36 10 22 13 15 24"/>
    <path d="M48 17 C60 9 76 12 84 24"/>
    <path d="M48 17 C42 29 39 43 44 57"/>
    <path d="M48 17 C56 31 59 43 54 58"/>
    <path d="M44 57 C30 54 18 61 10 74"/>
    <path d="M54 58 C68 54 80 61 88 74"/>
    <path d="M10 76 C22 68 34 84 46 76 C58 68 70 84 88 76"/>
    <path d="M10 91 C22 83 34 99 46 91 C58 83 70 99 88 91"/>
  `);

function annotations(zh){return `<g transform="translate(-5 32) scale(.75)">${northAmericaIcon}</g><g transform="translate(-7 17) scale(.75)">${emeaIcon}</g><g transform="translate(0 24) scale(.75)">${latamIcon}</g><g transform="translate(4 43) scale(.75)">${apacIcon}</g>`+[ [19,235,'nights_booked',zh?'预订间夜数':'Nights booked','113.2M',zh?'同比 +14%':'+14% Y/Y'],[261,111,'gbv','GBV','$18.3B',zh?'同比 +17%':'+17% Y/Y'],[379,320,'long_term_stays',zh?'长期住宿（28+ 天）':'Long-term stays (28+ days)','18%',zh?'占预订间夜数':'of nights booked'] ].map(([x,w,id,label,value,note])=>`<g><rect x="${x}" y="923" width="${w}" height="115" rx="22" fill="#ff385c"/><text x="${x+w/2}" y="963" text-anchor="middle" font-size="21" font-weight="700" fill="white">${label}</text><text data-operating-metric="${id}" x="${x+w/2}" y="993" text-anchor="middle" font-size="22" fill="white">${value}</text><text x="${x+w/2}" y="1020" text-anchor="middle" font-size="17" fill="white">${note}</text></g>`).join('')+`<text x="325" y="1064" text-anchor="middle" font-size="21" fill="#777777">${zh?'GBV = 总预订价值':'GBV = Gross Booking Value'}</text>`;}
const d={
  "key": "airbnb-q3-fy23",
  "name": "Airbnb · Q3 FY23",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/airbnb-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "logoWidth": 261.75146484375,
    "logoHeight": 261.75146484375,
    "logoY": 261.75146484375,
    "logoViewBox": "0 0 244 244"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#ff385c",
        "label": "#ff385c"
      },
      "hub": {
        "node": "#ff385c",
        "label": "#ff385c"
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
      "source": "#f79dae",
      "hub": "#f79dae",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "nodes": {
      "north_america": {
        "x": 395.8828125,
        "y": 488.34228515625,
        "width": 72.92578125,
        "height": 113.29541015625
      },
      "emea": {
        "x": 395.8828125,
        "y": 716.2353515625,
        "width": 72.92578125,
        "height": 117.2021484375
      },
      "latam": {
        "x": 395.8828125,
        "y": 970.17333984375,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "apac": {
        "x": 395.8828125,
        "y": 1143.3720703125,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "revenue": {
        "x": 868.59814453125,
        "y": 724.048828125,
        "width": 71.62353515625,
        "height": 260.44921875
      },
      "gross_profit": {
        "x": 1323.08203125,
        "y": 636.79833984375,
        "width": 71.62353515625,
        "height": 225.28857421875
      },
      "cost_of_revenue": {
        "x": 1328.291015625,
        "y": 1035.28564453125,
        "width": 71.62353515625,
        "height": 35.16064453125
      },
      "operating_profit": {
        "x": 1785.37939453125,
        "y": 532.61865234375,
        "width": 71.62353515625,
        "height": 114.59765625
      },
      "operating_expenses": {
        "x": 1785.37939453125,
        "y": 1053.51708984375,
        "width": 71.62353515625,
        "height": 110.69091796875
      },
      "other_income": {
        "x": 2079.68701171875,
        "y": 369.837890625,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "tax_benefit": {
        "x": 1984.623046875,
        "y": 696.70166015625,
        "width": 72.92578125,
        "height": 207.05712890625
      },
      "net_profit": {
        "x": 2264.60595703125,
        "y": 428.43896484375,
        "width": 72.92578125,
        "height": 334.67724609375
      },
      "sm": {
        "x": 2264.60595703125,
        "y": 901.154296875,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "product": {
        "x": 2264.60595703125,
        "y": 1047.005859375,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "support": {
        "x": 2264.60595703125,
        "y": 1194.15966796875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "ga": {
        "x": 2264.60595703125,
        "y": 1323.08203125,
        "width": 72.92578125,
        "height": 24.74267578125
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 384.16259765625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 286.494140625,
            "top": 512.6580078125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "North",
                "size": 26.044921875,
                "weight": 700
              },
              {
                "text": "America",
                "size": 26.044921875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 617.2646484375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 286.494140625,
            "top": 752.6982421875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "EMEA",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 871.20263671875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 286.494140625,
            "top": 955.197509765625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "LATAM",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 1035.28564453125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+33% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 286.494140625,
            "top": 1129.04736328125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "APAC",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 903.7587890625,
            "top": 567.779296875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
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
            "x": 1359.544921875,
            "top": 440.1591796875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "86% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
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
            "x": 1363.45166015625,
            "top": 1084.77099609375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 37.76513671875,
                "weight": 700
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1820.5400390625,
            "top": 335.9794921875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "44% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 1820.5400390625,
            "top": 1174.6259765625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 700
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
      "other_income": {
        "blocks": [
          {
            "x": 2116.14990234375,
            "top": 274.77392578125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 1849.189453125,
            "top": 769.62744140625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2465.15185546875,
            "top": 514.38720703125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "129% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+87pp Y/Y",
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
            "x": 2467.75634765625,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "S&M ($0.4B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 1006.63623046875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Product ($0.4B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "12% of revenue",
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
      "support": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 1135.55859375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Support ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "9% of revenue",
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
            "x": 2467.75634765625,
            "top": 1263.1787109375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "G&A ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              },
              {
                "text": "9% of revenue",
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
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 1.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 1.5,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.2,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+28% Y/Y"
      ]
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.2,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+33% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.4,
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+18% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.9,
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": [
        "86% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.4,
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": [],
      "valueText": "($0.4B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1.5,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "44% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.4,
      "type": "cost",
      "col": 3,
      "order": 8,
      "notes": [],
      "valueText": "($1.4B)"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.2,
      "type": "profit",
      "col": 4,
      "order": 9,
      "notes": []
    },
    {
      "id": "tax_benefit",
      "label": "Tax benefit",
      "value": 2.7,
      "type": "profit",
      "col": 4,
      "order": 10,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.4,
      "type": "profit",
      "col": 4,
      "order": 11,
      "notes": [
        "129% margin",
        "+87pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [
        "12% of revenue",
        "(0pp) Y/Y"
      ],
      "valueText": "($0.4B)"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.4B)"
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 14,
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.3B)"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "type": "cost",
      "col": 4,
      "order": 15,
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ],
      "valueText": "($0.3B)"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 1.5,
      "sourceWidth": 113.29541015625,
      "targetWidth": 113.29541015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 1.5,
      "sourceWidth": 117.2021484375,
      "targetWidth": 117.2021484375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.9,
      "sourceWidth": 225.28857421875,
      "targetWidth": 225.28857421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.4,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.4,
      "sourceWidth": 110.69091796875,
      "targetWidth": 110.69091796875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 14.32470703125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.5,
      "sourceWidth": 114.59765625,
      "targetWidth": 114.59765625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 2.7,
      "sourceWidth": 207.05712890625,
      "targetWidth": 205.7548828125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.4,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.4,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "113200000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "113.2M"
    },
    {
      "id": "gbv",
      "value": "18.3",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$18.3B"
    },
    {
      "id": "long_term_stays",
      "value": "18",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "18%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2023 财年第三季度",
      "meta": {
        "title": "Airbnb 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": ""
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +11%"
          ]
        },
        "emea": {
          "label": "欧洲、中东和非洲",
          "notes": [
            "同比 +21%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +28%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +33%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 86%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 44%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "tax_benefit": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 129%",
            "同比 +87 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 12%",
            "同比 (0) 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 12%",
            "同比 (1) 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 9%",
            "同比 (1) 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 (1) 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 384.16259765625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 286.494140625,
                "top": 522.851806640625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "北美",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 617.2646484375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 286.494140625,
                "top": 730.804443359375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "欧洲、中东",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "和非洲",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 871.20263671875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 286.494140625,
                "top": 955.197509765625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "拉美",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 1035.28564453125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +33%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 286.494140625,
                "top": 1129.04736328125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "亚太",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 903.7587890625,
                "top": 567.779296875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
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
                "x": 1359.544921875,
                "top": 440.1591796875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 86%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "x": 1363.45166015625,
                "top": 1084.77099609375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 37.76513671875,
                    "weight": 700
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1820.5400390625,
                "top": 335.9794921875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 44%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 1820.5400390625,
                "top": 1174.6259765625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 700
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
          "other_income": {
            "blocks": [
              {
                "x": 2116.14990234375,
                "top": 274.77392578125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 1849.189453125,
                "top": 769.62744140625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2465.15185546875,
                "top": 514.38720703125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 129%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +87 个百分点",
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
                "x": 2467.75634765625,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "销售与市场 ($0.4B)",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0) 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 1006.63623046875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "产品 ($0.4B)",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1) 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 1135.55859375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "客服支持 ($0.3B)",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1) 个百分点",
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
                "x": 2467.75634765625,
                "top": 1263.1787109375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "管理费用 ($0.3B)",
                    "size": 29.95166015625,
                    "weight": 700
                  },
                  {
                    "text": "占收入 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1) 个百分点",
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
};
d.meta.logoSvg=airbnbLogo;d.annotationsSvg=`<g transform="scale(1.30224609375)">`+annotations(false)+`</g>`;d.i18n.zh.annotationsSvg=`<g transform="scale(1.30224609375)">`+annotations(true)+`</g>`;window.DATASETS=window.DATASETS||[];window.DATASETS.push(d);})();
