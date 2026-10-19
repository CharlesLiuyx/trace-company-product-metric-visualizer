(function () {
const SHOP_LOGO_GREEN='#93bd46',SHOP_LOGO_DARK_GREEN='#5f8d3d';
const shopifyBagLogo=`
    <g transform="translate(-14 8)">
      <path d="M68 33C71 10 88 -1 104 3C112 5 119 12 123 24C131 19 140 20 148 27C159 36 164 53 166 74L143 77C142 57 138 43 130 36C127 33 124 32 121 34C122 43 122 54 120 67L100 69C103 51 103 37 100 26C98 18 95 14 91 13C83 11 74 21 72 36L68 33Z" fill="${SHOP_LOGO_GREEN}"/>
      <path d="M55 68L153 82L175 291L84 322L17 270L55 68Z" fill="${SHOP_LOGO_GREEN}"/>
      <path d="M153 82L205 91L230 274L175 291L153 82Z" fill="${SHOP_LOGO_DARK_GREEN}"/>
      <path d="M113 128C96 119 75 122 63 137C50 154 52 179 68 192C80 202 97 206 108 215C119 224 117 239 105 247C91 257 70 253 53 242L44 274C63 287 91 292 114 282C142 270 151 238 134 216C124 203 109 197 96 191C82 185 77 175 82 165C88 154 104 154 123 164L113 128Z" fill="#ffffff"/>
    </g>`;
window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "shopify-q4-fy22",
  "name": "Shopify · Q4 FY22",
  "company": "Shopify",
  "meta": {
    "company": "Shopify",
    "title": "Shopify Q4 FY22 Income Statement",
    "period": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/shopify-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2200.7958984375,
    "periodX": -1302.0833333333333,
    "periodY": -1302.0833333333333,
    "periodNoteY": -1302.0833333333333,
    "logoSvg": shopifyBagLogo, "logoWidth": 234.404296875,
    "logoHeight": 253.90624999999997,
    "logoY": 227.86458333333331,
    "logoViewBox": "0 0 240 330"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#96bf48",
        "label": "#96bf48"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009b58"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 28.645833333333332,
      "lineGap": 10.416666666666666
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g data-typography-role=\"brand\"><rect x=\"129\" y=\"344\" width=\"436\" height=\"219\" rx=\"109\" fill=\"#96bf48\" stroke=\"#64943e\" stroke-width=\"2\"/><text x=\"160\" y=\"475\" font-size=\"60\" textLength=\"190\" lengthAdjust=\"spacingAndGlyphs\" font-style=\"italic\" font-weight=\"800\" fill=\"white\">shopify</text><g font-size=\"28\" font-style=\"italic\" fill=\"white\"><text x=\"384\" y=\"378\">Capital</text><text x=\"384\" y=\"412\">App Store</text><text x=\"384\" y=\"446\">Payments</text><text x=\"384\" y=\"480\">Fulfillment</text><text x=\"384\" y=\"514\">Balance</text><text x=\"384\" y=\"548\">Markets</text></g></g><g data-typography-role=\"brand\"><text x=\"107\" y=\"869\" font-size=\"35\" textLength=\"220\" lengthAdjust=\"spacingAndGlyphs\" font-style=\"italic\" font-weight=\"800\">shopifyplus</text></g><text x=\"129\" y=\"1105\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "layout": {
    "scale": 0.1796875,
    "nodes": {
      "merchant_solutions": {
        "x": 803.48583984375,
        "y": 467.44791666666663,
        "width": 72.92578125,
        "height": 239.58333333333331
      },
      "mrr_core": {
        "x": 441.46142578125,
        "y": 884.1145833333333,
        "width": 72.92578125,
        "height": 41.666666666666664
      },
      "shopify_plus": {
        "x": 441.46142578125,
        "y": 1105.46875,
        "width": 72.92578125,
        "height": 19.53125
      },
      "platform_fee": {
        "x": 441.46142578125,
        "y": 1291.6666666666665,
        "width": 72.92578125,
        "height": 11.71875
      },
      "subscription_solutions": {
        "x": 808.69482421875,
        "y": 1016.9270833333333,
        "width": 72.92578125,
        "height": 71.61458333333333
      },
      "revenue": {
        "x": 1188.95068359375,
        "y": 658.8541666666666,
        "width": 72.92578125,
        "height": 312.5
      },
      "gross_profit": {
        "x": 1565.2998046875,
        "y": 515.625,
        "width": 72.92578125,
        "height": 143.22916666666666
      },
      "operating_profit": {
        "x": 1752.8232421875,
        "y": 832.03125,
        "width": 72.92578125,
        "height": 33.854166666666664
      },
      "operating_expenses": {
        "x": 1952.06689453125,
        "y": 585.9375,
        "width": 72.92578125,
        "height": 177.08333333333331
      },
      "cost_of_revenue": {
        "x": 1567.904296875,
        "y": 985.6770833333333,
        "width": 72.92578125,
        "height": 169.27083333333331
      },
      "merchant_cost": {
        "x": 1791.890625,
        "y": 1027.34375,
        "width": 72.92578125,
        "height": 152.34375
      },
      "subscription_cost": {
        "x": 1799.7041015625,
        "y": 1253.90625,
        "width": 72.92578125,
        "height": 14.322916666666666
      },
      "rnd": {
        "x": 2310.1845703125,
        "y": 634.1145833333333,
        "width": 72.92578125,
        "height": 79.42708333333333
      },
      "sm": {
        "x": 2310.1845703125,
        "y": 852.8645833333333,
        "width": 72.92578125,
        "height": 53.385416666666664
      },
      "ga": {
        "x": 2310.1845703125,
        "y": 1048.1770833333333,
        "width": 72.92578125,
        "height": 37.760416666666664
      },
      "loan_losses": {
        "x": 2310.1845703125,
        "y": 1256.5104166666665,
        "width": 72.92578125,
        "height": 6.510416666666666
      }
    },
    "labels": {
      "merchant_solutions": {
        "blocks": [
          {
            "x": 839.94873046875,
            "top": 272.13541666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Merchant",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "mrr_core": {
        "blocks": [
          {
            "x": 477.92431640625,
            "top": 790.3645833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 410.20751953125,
            "top": 881.325,
            "anchor": "end",
            "lines": [
              {
                "text": "MRR Core",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "shopify_plus": {
        "blocks": [
          {
            "x": 477.92431640625,
            "top": 1005.6249999999999,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "platform_fee": {
        "blocks": [
          {
            "x": 477.92431640625,
            "top": 1200.5208333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 410.20751953125,
            "top": 1273.9458333333332,
            "anchor": "end",
            "lines": [
              {
                "text": "Platform Fee",
                "size": 39.0625,
                "weight": 800
              }
            ]
          }
        ]
      },
      "subscription_solutions": {
        "blocks": [
          {
            "x": 843.85546875,
            "top": 819.0104166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Subscription",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "solutions",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1225.41357421875,
            "top": 514.3229166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+26% Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1603.06494140625,
            "top": 332.03125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "46% margin",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1585.203125,
            "top": 782.5520833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(11%) margin",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(12pp) Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1987.2275390625,
            "top": 428.10416666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1604.3671875,
            "top": 1177.0833333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "merchant_cost": {
        "blocks": [
          {
            "x": 1997.6455078125,
            "top": 1052.0833333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Merchant",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "36% gross margin",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "subscription_cost": {
        "blocks": [
          {
            "x": 1997.6455078125,
            "top": 1227.8645833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Subscription",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "79% gross margin",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 643.2291666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+6pp Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 852.8645833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1042.96875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+5pp Y/Y",
                "size": 28.645833333333332,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "loan_losses": {
        "blocks": [
          {
            "x": 2489.89453125,
            "top": 1236.9791666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Loan losses",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "merchant_solutions",
      "label": "Merchant Solutions",
      "value": 1334,
      "valueText": "$1,334M",
      "type": "source",
      "col": 2,
      "order": 0,
      "color": "#96bf48",
      "labelColor": "#96bf48",
      "notes": [
        "+30% Y/Y"
      ]
    },
    {
      "id": "mrr_core",
      "label": "MRR Core",
      "value": 232,
      "valueText": "$232M",
      "type": "source",
      "col": 1,
      "order": 1,
      "color": "#64943e",
      "labelColor": "#64943e",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "shopify_plus",
      "label": "Shopify Plus",
      "value": 108,
      "valueText": "$108M",
      "type": "source",
      "col": 1,
      "order": 2,
      "color": "#64943e",
      "labelColor": "#64943e",
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "platform_fee",
      "label": "Platform Fee",
      "value": 60,
      "valueText": "$60M",
      "type": "source",
      "col": 1,
      "order": 3,
      "color": "#64943e",
      "labelColor": "#64943e",
      "notes": [
        "+20% Y/Y"
      ]
    },
    {
      "id": "subscription_solutions",
      "label": "Subscription solutions",
      "value": 400,
      "valueText": "$400M",
      "type": "source",
      "col": 2,
      "order": 4,
      "color": "#64943e",
      "labelColor": "#64943e",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1735,
      "valueText": "$1,735M",
      "type": "hub",
      "col": 3,
      "order": 5,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 799,
      "valueText": "$799M",
      "type": "profit",
      "col": 4,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#009b58",
      "notes": [
        "46% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating loss",
      "value": 189,
      "valueText": "($189M)",
      "type": "cost",
      "col": 5,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "(11%) margin",
        "(12pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 987,
      "valueText": "($987M)",
      "type": "cost",
      "col": 5,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 936,
      "valueText": "($936M)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "merchant_cost",
      "label": "Merchant",
      "value": 851,
      "valueText": "($851M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "36% gross margin"
      ]
    },
    {
      "id": "subscription_cost",
      "label": "Subscription",
      "value": 86,
      "valueText": "($86M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "79% gross margin"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 441,
      "valueText": "($441M)",
      "type": "cost",
      "col": 6,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "25% of revenue",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 298,
      "valueText": "($298M)",
      "type": "cost",
      "col": 6,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "17% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 215,
      "valueText": "($215M)",
      "type": "cost",
      "col": 6,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "12% of revenue",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "loan_losses",
      "label": "Loan losses",
      "value": 34,
      "valueText": "($34M)",
      "type": "cost",
      "col": 6,
      "order": 15,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "merchant_solutions",
      "target": "revenue",
      "value": 1334,
      "width": 239.58333333333331,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#c9dba5"
    },
    {
      "source": "mrr_core",
      "target": "subscription_solutions",
      "value": 232,
      "width": 41.666666666666664,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b2c79f"
    },
    {
      "source": "shopify_plus",
      "target": "subscription_solutions",
      "value": 108,
      "width": 19.53125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b2c79f"
    },
    {
      "source": "platform_fee",
      "target": "subscription_solutions",
      "value": 60,
      "width": 10.416666666666666,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#b2c79f"
    },
    {
      "source": "subscription_solutions",
      "target": "revenue",
      "value": 400,
      "width": 71.61458333333333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b2c79f",
      "targetWidth": 72.91666666666667
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 799,
      "width": 143.22916666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 936,
      "width": 169.27083333333331,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 799,
      "width": 143.22916666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "operating_expenses",
      "value": 189,
      "width": 33.854166666666664,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "merchant_cost",
      "value": 851,
      "width": 152.34375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "subscription_cost",
      "value": 86,
      "width": 16.927083333333332,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 14.322916666666666,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 441,
      "width": 79.42708333333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 298,
      "width": 53.385416666666664,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 215,
      "width": 37.760416666666664,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "loan_losses",
      "value": 34,
      "width": 6.510416666666666,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Shopify · 2022 财年第四季度",
      "meta": {
        "title": "Shopify 2022 财年第四季度利润表",
        "period": "",
        "titleSize": 114.58333333333333,
        "titleTextLength": 1966.3916015625
      },
      "nodes": {
        "merchant_solutions": {
          "label": "商家解决方案",
          "notes": [
            "同比 +30%"
          ]
        },
        "mrr_core": {
          "label": "核心月度经常性收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "shopify_plus": {
          "label": "Shopify Plus 方案",
          "notes": [
            "同比 +27%"
          ]
        },
        "platform_fee": {
          "label": "平台费用",
          "notes": [
            "同比 +20%"
          ]
        },
        "subscription_solutions": {
          "label": "订阅解决方案",
          "notes": [
            "同比 +14%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +26%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 46%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_profit": {
          "label": "营业亏损",
          "notes": [
            "利润率 (11%)",
            "同比 (12 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "merchant_cost": {
          "label": "商家",
          "notes": [
            "毛利率 36%"
          ]
        },
        "subscription_cost": {
          "label": "订阅",
          "notes": [
            "毛利率 79%"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 +6 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 17%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 +5 个百分点"
          ]
        },
        "loan_losses": {
          "label": "贷款损失",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "merchant_solutions": {
            "blocks": [
              {
                "x": 839.94873046875,
                "top": 272.13541666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "商家",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "mrr_core": {
            "blocks": [
              {
                "x": 477.92431640625,
                "top": 790.3645833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 410.20751953125,
                "top": 881.325,
                "anchor": "end",
                "lines": [
                  {
                    "text": "核心月度经常性收入",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "shopify_plus": {
            "blocks": [
              {
                "x": 477.92431640625,
                "top": 1005.6249999999999,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "platform_fee": {
            "blocks": [
              {
                "x": 477.92431640625,
                "top": 1200.5208333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 410.20751953125,
                "top": 1273.9458333333332,
                "anchor": "end",
                "lines": [
                  {
                    "text": "平台费用",
                    "size": 39.0625,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "subscription_solutions": {
            "blocks": [
              {
                "x": 843.85546875,
                "top": 819.0104166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1225.41357421875,
                "top": 514.3229166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +26%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1603.06494140625,
                "top": 332.03125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 46%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1585.203125,
                "top": 782.5520833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (11%)",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (12 个百分点)",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1987.2275390625,
                "top": 428.10416666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1604.3671875,
                "top": 1177.0833333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "merchant_cost": {
            "blocks": [
              {
                "x": 1997.6455078125,
                "top": 1052.0833333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "商家",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 36%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "subscription_cost": {
            "blocks": [
              {
                "x": 1997.6455078125,
                "top": 1227.8645833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 79%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2507.89453125,
                "top": 643.2291666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2507.89453125,
                "top": 852.8645833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2507.89453125,
                "top": 1042.96875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28.645833333333332,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "loan_losses": {
            "blocks": [
              {
                "x": 2489.89453125,
                "top": 1236.9791666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "贷款损失",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g data-typography-role=\"brand\"><rect x=\"129\" y=\"344\" width=\"436\" height=\"219\" rx=\"109\" fill=\"#96bf48\" stroke=\"#64943e\" stroke-width=\"2\"/><text x=\"160\" y=\"475\" font-size=\"60\" textLength=\"190\" lengthAdjust=\"spacingAndGlyphs\" font-style=\"italic\" font-weight=\"800\" fill=\"white\">shopify</text><g font-size=\"28\" font-style=\"italic\" fill=\"white\"><text x=\"384\" y=\"378\">资金</text><text x=\"384\" y=\"412\">应用商店</text><text x=\"384\" y=\"446\">支付</text><text x=\"384\" y=\"480\">履约</text><text x=\"384\" y=\"514\">余额</text><text x=\"384\" y=\"548\">市场</text></g></g><g data-typography-role=\"brand\"><text x=\"107\" y=\"869\" font-size=\"35\" textLength=\"220\" lengthAdjust=\"spacingAndGlyphs\" font-style=\"italic\" font-weight=\"800\">Shopify Plus</text></g><text x=\"129\" y=\"1105\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
})();
