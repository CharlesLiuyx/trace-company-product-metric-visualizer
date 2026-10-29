/* Morgan Stanley Q4 FY25 income statement ($B), reconstructed as a fixed d3-Sankey. */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#666666';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2441;

  const line = (text, size, weight = 800, color) => ({ text, size, weight, ...(color ? { color } : {}) });
  const block = (x, top, lines, anchor = 'middle', lineGap = 8) => ({ x, top, anchor, lineGap, lines });

  const annotations = (zh = false) => `
    <g font-family="Noto Sans,Arial,sans-serif">
      <text x="89" y="280" font-size="38" font-weight="800" fill="${TITLE}">${zh ? '按业务分部' : 'By Business Segment'}</text>
      <text x="608" y="372" font-family="Arial,Helvetica,sans-serif" font-size="122" font-weight="400" textLength="775" lengthAdjust="spacingAndGlyphs" fill="${BLACK}" data-typography-role="brand">Morgan Stanley</text>
      <g fill="${BLACK}"><rect x="134" y="1152" width="241" height="149" rx="30"/><rect x="384" y="1152" width="273" height="149" rx="30"/></g>
      <g fill="#ffffff" text-anchor="middle">
        <text x="254" y="1205" font-size="28" font-weight="800">${zh ? 'CET1 比率' : 'CET1 ratio'}</text>
        <text x="254" y="1245" font-size="28" data-operating-metric="cet1">15.2%</text>
        <text x="254" y="1277" font-size="23">${zh ? '同比 (0.3 个百分点)' : '(0.3pp) Y/Y'}</text>
        <text x="520" y="1205" font-size="28" font-weight="800">ROTCE</text>
        <text x="520" y="1245" font-size="28" data-operating-metric="rotce">17.5%</text>
        <text x="520" y="1277" font-size="23">${zh ? '同比 +5.4 个百分点' : '+5.4pp Y/Y'}</text>
      </g>
      <g fill="${NOTE}"><text x="242" y="1340" font-size="28">${zh ? 'CET1 = 普通股一级资本充足率' : 'CET1 = Common Equity Tier 1'}</text>
      <text x="89" y="1386" font-size="28">${zh ? 'ROTCE = 平均有形普通股权益回报率' : 'ROTCE = Return on average tangible common equity'}</text></g>
    </g>`;
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "morgan-stanley-q2-fy24",
  "name": "Morgan Stanley · Q2 FY24",
  "company": "Morgan Stanley",
  "meta": {
    "company": "Morgan Stanley",
    "title": "Morgan Stanley Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/morgan-stanley-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 195,
    "titleSize": 115,
    "titleWeight": 800,
    "titleTextLength": 2500,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#000000",
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
    "linkTint": {
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": annotations(),
  "layout": {
    "scale": 19,
    "nodes": {
      "institutional_securities": {
        "x": 390,
        "y": 409,
        "width": 73,
        "height": 133
      },
      "wealth_management": {
        "x": 390,
        "y": 711,
        "width": 73,
        "height": 130
      },
      "investment_management": {
        "x": 390,
        "y": 1013,
        "width": 73,
        "height": 27
      },
      "segment_revenue": {
        "x": 857,
        "y": 559,
        "width": 73,
        "height": 289
      },
      "revenue": {
        "x": 1322,
        "y": 604,
        "width": 73,
        "height": 286
      },
      "eliminations": {
        "x": 1322,
        "y": 1030,
        "width": 73,
        "height": 2
      },
      "pretax_income": {
        "x": 1791,
        "y": 444,
        "width": 73,
        "height": 76
      },
      "non_interest_expenses": {
        "x": 1789,
        "y": 814,
        "width": 73,
        "height": 208
      },
      "operating_expenses": {
        "x": 1792,
        "y": 1218,
        "width": 73,
        "height": 2
      },
      "net_income": {
        "x": 2259,
        "y": 287,
        "width": 73,
        "height": 59
      },
      "tax": {
        "x": 2259,
        "y": 453,
        "width": 73,
        "height": 19
      },
      "compensation_benefits": {
        "x": 2259,
        "y": 582,
        "width": 73,
        "height": 123
      },
      "brokerage_clearing_exchange": {
        "x": 2259,
        "y": 804,
        "width": 73,
        "height": 18
      },
      "information_communications": {
        "x": 2259,
        "y": 908,
        "width": 73,
        "height": 19
      },
      "professional_services": {
        "x": 2259,
        "y": 1032,
        "width": 73,
        "height": 14
      },
      "occupancy": {
        "x": 2259,
        "y": 1152,
        "width": 73,
        "height": 9
      },
      "marketing_business_development": {
        "x": 2259,
        "y": 1257,
        "width": 73,
        "height": 5
      },
      "other_expenses": {
        "x": 2259,
        "y": 1353,
        "width": 73,
        "height": 17
      }
    },
    "labels": {
      "institutional_securities": {
        "blocks": [
          {
            "x": 326,
            "top": 405,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Institutional",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Securities",
                "size": 40,
                "weight": 800
              },
              {
                "text": "22% net margin",
                "size": 28,
                "weight": 400
              }
            ]
          },
          {
            "x": 428,
            "top": 312,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "wealth_management": {
        "blocks": [
          {
            "x": 326,
            "top": 710,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 40,
                "weight": 800
              },
              {
                "text": "21% net margin",
                "size": 28,
                "weight": 400
              }
            ]
          },
          {
            "x": 428,
            "top": 614,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "investment_management": {
        "blocks": [
          {
            "x": 326,
            "top": 977,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Investment",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 40,
                "weight": 800
              },
              {
                "text": "12% net margin",
                "size": 28,
                "weight": 400
              }
            ]
          },
          {
            "x": 428,
            "top": 916,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
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
            "x": 1352,
            "top": 451,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1360,
            "top": 1048,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1825,
            "top": 333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "non_interest_expenses": {
        "blocks": [
          {
            "x": 1825,
            "top": 1043,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Non interest",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1832,
            "top": 1233,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Provision for",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2472,
            "top": 235,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "+40% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2472,
            "top": 423,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2482,
            "top": 588,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Compensation",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "brokerage_clearing_exchange": {
        "blocks": [
          {
            "x": 2482,
            "top": 753,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Brokerage, clearing",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& exchange fees",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "information_communications": {
        "blocks": [
          {
            "x": 2482,
            "top": 876,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Information &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "communications",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 2482,
            "top": 1003,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Professional",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "services",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2482,
            "top": 1117,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "marketing_business_development": {
        "blocks": [
          {
            "x": 2482,
            "top": 1214,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Marketing &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "business dev.",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_expenses": {
        "blocks": [
          {
            "x": 2482,
            "top": 1343,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "segment_revenue": {
        "blocks": []
      }
    }
  },
  "nodes": [
    {
      "id": "institutional_securities",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Institutional Securities",
      "value": 7.0,
      "valueText": "$7.0B"
    },
    {
      "id": "wealth_management",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Wealth Management",
      "value": 6.8,
      "valueText": "$6.8B"
    },
    {
      "id": "investment_management",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Investment Management",
      "value": 1.4,
      "valueText": "$1.4B"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 15.2
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 15.0,
      "valueText": "$15.0B"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Pretax income",
      "value": 4.1,
      "valueText": "$4.1B"
    },
    {
      "id": "non_interest_expenses",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Non interest expenses",
      "value": 10.9,
      "valueText": "($10.9B)"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Provision for credit losses",
      "value": 0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Net income",
      "value": 3.1,
      "valueText": "$3.1B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Tax",
      "value": 1.0,
      "valueText": "($1.0B)"
    },
    {
      "id": "compensation_benefits",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Compensation & benefits",
      "value": 6.5,
      "valueText": "($6.5B)"
    },
    {
      "id": "brokerage_clearing_exchange",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "Brokerage, clearing & exchange fees",
      "value": 1.0,
      "valueText": "($1.0B)"
    },
    {
      "id": "information_communications",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "Information & communications",
      "value": 1.0,
      "valueText": "($1.0B)"
    },
    {
      "id": "professional_services",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": "Professional services",
      "value": 0.8,
      "valueText": "($0.8B)"
    },
    {
      "id": "occupancy",
      "col": 4,
      "order": 15,
      "type": "cost",
      "label": "Occupancy",
      "value": 0.5,
      "valueText": "($0.5B)"
    },
    {
      "id": "marketing_business_development",
      "col": 4,
      "order": 16,
      "type": "cost",
      "label": "Marketing & business dev.",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "other_expenses",
      "col": 4,
      "order": 17,
      "type": "cost",
      "label": "Other",
      "value": 0.9,
      "valueText": "($0.9B)"
    }
  ],
  "links": [
    {
      "source": "institutional_securities",
      "target": "segment_revenue",
      "value": 7.0,
      "width": 133,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "wealth_management",
      "target": "segment_revenue",
      "value": 6.8,
      "width": 130,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "investment_management",
      "target": "segment_revenue",
      "value": 1.4,
      "width": 26,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 15.0,
      "width": 287,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 287,
      "targetWidth": 286
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.1,
      "width": 2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4.1,
      "width": 78,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 78,
      "targetWidth": 76
    },
    {
      "source": "revenue",
      "target": "non_interest_expenses",
      "value": 10.9,
      "width": 206,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 206,
      "targetWidth": 208
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 0.1,
      "width": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.1,
      "width": 59,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.0,
      "width": 17,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 17,
      "targetWidth": 19
    },
    {
      "source": "non_interest_expenses",
      "target": "compensation_benefits",
      "value": 6.5,
      "width": 123,
      "sourceWidth": 126,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "brokerage_clearing_exchange",
      "value": 1.0,
      "width": 18,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "information_communications",
      "value": 1.0,
      "width": 19,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "professional_services",
      "value": 0.8,
      "width": 14,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "occupancy",
      "value": 0.5,
      "width": 9,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "marketing_business_development",
      "value": 0.2,
      "width": 5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "non_interest_expenses",
      "target": "other_expenses",
      "value": 0.9,
      "width": 17,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "15.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "15.2%"
    },
    {
      "id": "rotce",
      "value": "17.5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "17.5%"
    }
  ],
  "i18n": {
    "zh": {
      "annotationsSvg": annotations(true),
      "name": "摩根士丹利 · 2024 财年第二季度",
      "meta": {
        "title": "摩根士丹利 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "titleTextLength": 2280
      },
      "nodes": {
        "institutional_securities": {
          "label": "机构证券"
        },
        "wealth_management": {
          "label": "财富管理"
        },
        "investment_management": {
          "label": "投资管理"
        },
        "revenue": {
          "label": "收入"
        },
        "eliminations": {
          "label": "抵销"
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "non_interest_expenses": {
          "label": "非利息费用"
        },
        "operating_expenses": {
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "brokerage_clearing_exchange": {
          "label": "经纪、清算与交易所费用"
        },
        "information_communications": {
          "label": "信息与通信"
        },
        "professional_services": {
          "label": "专业服务"
        },
        "occupancy": {
          "label": "场地占用"
        },
        "marketing_business_development": {
          "label": "市场与业务开发"
        },
        "other_expenses": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "institutional_securities": {
            "blocks": [
              {
                "x": 326,
                "top": 405,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "机构证券",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 22%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 428,
                "top": 312,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "wealth_management": {
            "blocks": [
              {
                "x": 326,
                "top": 710,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 21%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 428,
                "top": 614,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "investment_management": {
            "blocks": [
              {
                "x": 326,
                "top": 977,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "投资管理",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "净利率 12%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 428,
                "top": 916,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
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
                "x": 1352,
                "top": 451,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1360,
                "top": 1048,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1825,
                "top": 333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "non_interest_expenses": {
            "blocks": [
              {
                "x": 1825,
                "top": 1043,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 37,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 37,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1832,
                "top": 1233,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2472,
                "top": 235,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 +40%",
                    "size": 28,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2472,
                "top": 423,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2482,
                "top": 588,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "brokerage_clearing_exchange": {
            "blocks": [
              {
                "x": 2482,
                "top": 753,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "经纪、清算与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "交易所费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "information_communications": {
            "blocks": [
              {
                "x": 2482,
                "top": 876,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信息与通信",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 2482,
                "top": 1003,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2482,
                "top": 1117,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "marketing_business_development": {
            "blocks": [
              {
                "x": 2482,
                "top": 1214,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "市场与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "业务开发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_expenses": {
            "blocks": [
              {
                "x": 2482,
                "top": 1343,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "segment_revenue": {
            "blocks": []
          }
        }
      }
    }
  }
});
})();
