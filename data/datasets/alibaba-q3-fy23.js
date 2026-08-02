/* Alibaba Q3 FY23 income statement (RMB B), fixed to the 2667×1500 Source. */
(function () {
  const ORANGE = '#ff5a00';
  const GREEN = '#2ca02c';
  const RED = '#cc0000';
  const NOTE = '#666666';
  const ORANGE_LINK = '#f7ae85';
  const GREEN_LINK = '#99cd99';
  const RED_LINK = '#e08585';
  const RIGHT = 2338;
  const block = (x, top, anchor = 'middle', parts = ['name', 'value', 'notes']) => ({
    blocks: [{ x, top, anchor, parts, lineGap: 7 }],
  });
  const split = (valueTop, nameTop, nameX = 542) => ({ blocks: [
    { x: 603, top: valueTop, anchor: 'middle', parts: ['value', 'notes'], lineGap: 7 },
    { x: nameX, top: nameTop, anchor: 'end', parts: ['name'], lineGap: 7 },
  ] });

  const logo = `<g fill="${ORANGE}">
    <path d="M20 47C48 4 132-7 135 34c3 37-53 60-100 55C10 86-8 70 4 54c18-19 49-29 80-31-31 6-53 17-61 32-8 20 38 23 71 6 25-14 33-34 15-42C84 6 44 19 20 47Z"/>
    <path d="m69 43 33-13-8 23-10-8c-17 10-35 14-52 11 15-3 30-7 44-16Z" fill="#fff"/>
    <text x="158" y="91" font-family="Arial,sans-serif" font-size="112" font-weight="700">Alibaba</text></g>`;
  const annotations = `<g data-typography-role="brand" font-family="Arial,sans-serif" font-weight="700">
    <g transform="translate(64 410)"><text x="56" y="30" text-anchor="middle" font-size="34" fill="${ORANGE}">淘宝</text><text x="56" y="55" text-anchor="middle" font-size="20" fill="${ORANGE}">Taobao</text><text x="56" y="94" text-anchor="middle" font-size="34" fill="#ff1645">TMALL</text><text x="56" y="140" text-anchor="middle" font-size="27" fill="#0068a8">盒马</text></g>
    <g transform="translate(52 646)"><path d="M0 10 18 0l18 10v22L18 42 0 32Z" fill="#ff7b00"/><text x="46" y="28" font-size="26" fill="#2a278f">Lazada</text><text x="0" y="68" font-size="26" fill="${ORANGE}">AliExpress</text><text x="0" y="108" font-size="31" fill="#242424">trendyol</text></g>
    <g transform="translate(57 785)" fill="#008fd5"><text x="0" y="30" font-size="27">饿了么</text><path d="M42 47 77 58 45 78 27 91 24 61Z" fill="#ffd52d"/></g>
    <g transform="translate(50 925)" fill="#0068ff"><text x="0" y="28" font-size="30">CAI</text><text x="0" y="56" font-size="30">NIAO</text><text x="72" y="56" font-size="23">菜鸟</text></g>
    <g transform="translate(49 1062)" fill="${ORANGE}"><rect x="0" y="2" width="22" height="20" rx="4" fill="none" stroke="${ORANGE}" stroke-width="4"/><text x="30" y="22" font-size="22">Alibaba Cloud</text></g>
    <g transform="translate(53 1184)" font-size="38"><text x="0" y="28" fill="#ff4081">YOU</text><text x="76" y="28" fill="#2db7ea">KU</text></g>
  </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q3-fy23', name: 'Alibaba · Q3 FY23', company: 'Alibaba',
    meta: {
      company: 'Alibaba', title: 'Alibaba Q3 FY23 Income Statement', subtitle: 'In RMB',
      subtitleX: 260, subtitleY: 274, subtitleSize: 38, subtitleAnchor: 'start',
      period: 'Q3 FY23', periodNote: 'Ending Dec. 2022', currency: '', unit: 'B', decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q3-fy23.png', width: 2667, height: 1500 },
      titleX: 1334, titleY: 198, titleSize: 130, titleWeight: 800, titleTextLength: 2205,
      periodX: 225, periodY: 1310, periodNoteY: 1353,
      logoWidth: 600, logoHeight: 105, logoY: 330, logoViewBox: '0 0 760 105', logoSvg: logo,
    },
    render: {
      width: 2667, height: 1500, background: '#f2f2f2', interfaceAudit: { mode: 'error' },
      titleColor: '#155077', subtitleColor: '#155077', noteColor: NOTE,
      palette: { source: { node: ORANGE, label: ORANGE }, hub: { node: ORANGE, label: ORANGE }, profit: { node: GREEN, label: '#008f51' }, cost: { node: RED, label: '#941100' } },
      linkTint: { source: ORANGE_LINK, hub: ORANGE_LINK, profit: GREEN_LINK, cost: RED_LINK },
      linkOpacity: 1, type: { name: 36, value: 36, note: 27, lineGap: 7 },
    },
    annotationsSvg: annotations,
    layout: {
      scale: 1.13,
      nodes: {
        china_commerce: { x: 569, y: 407, width: 68, height: 194 }, international_commerce: { x: 569, y: 711, width: 68, height: 20 },
        local_consumer_services: { x: 569, y: 830, width: 68, height: 14 }, cainiao: { x: 569, y: 949, width: 68, height: 17 },
        cloud: { x: 569, y: 1070, width: 68, height: 21 }, digital_media: { x: 569, y: 1198, width: 68, height: 7 },
        other_revenue: { x: 569, y: 1307, width: 68, height: 1 }, revenue: { x: 1132, y: 679, width: 67, height: 283 },
        gross_profit: { x: 1530, y: 593, width: 69, height: 111 }, cost_of_revenue: { x: 1532, y: 874, width: 69, height: 171 },
        operating_profit: { x: 1907, y: 513, width: 67, height: 38 }, operating_expenses: { x: 1914, y: 730, width: 67, height: 70 },
        interest_investments: { x: 2162, y: 520, width: 68, height: 15 }, net_profit: { x: 2256, y: 412, width: 68, height: 51 },
        tax: { x: 2256, y: 699, width: 68, height: 4 }, other_expense: { x: 2256, y: 768, width: 68, height: 1 },
        product_development: { x: 2256, y: 851, width: 68, height: 32 }, sm: { x: 2256, y: 978, width: 68, height: 14 },
        ga: { x: 2256, y: 1090, width: 68, height: 10 }, amortization_intangibles: { x: 2256, y: 1206, width: 68, height: 5 },
        goodwill_impairment: { x: 2256, y: 1313, width: 68, height: 3 },
      },
      labels: {
        china_commerce: split(312, 460), international_commerce: split(618, 677), local_consumer_services: split(748, 793),
        cainiao: split(867, 935), cloud: split(988, 1054), digital_media: split(1116, 1178), other_revenue: split(1225, 1283),
        revenue: block(1166, 526), gross_profit: block(1565, 404), cost_of_revenue: block(1567, 1058),
        operating_profit: block(1941, 320), operating_expenses: block(1948, 820), interest_investments: block(2196, 544),
        net_profit: block(RIGHT, 398, 'start'),
        tax: { blocks: [{ x: RIGHT, top: 681, anchor: 'start', lines: [{ text: 'Tax (3.8B)', size: 30, weight: 800 }] }] },
        other_expense: { blocks: [{ x: RIGHT, top: 749, anchor: 'start', lines: [{ text: 'Other (1.0B)', size: 30, weight: 800 }] }] },
        product_development: { blocks: [{ x: RIGHT, top: 824, anchor: 'start', lineGap: 7, lines: [{ text: 'Product', size: 30, weight: 800 }, { text: 'development (13.5B)', size: 29, weight: 800 }] }] },
        sm: { blocks: [{ x: RIGHT, top: 961, anchor: 'start', lines: [{ text: 'S&M (30.6B)', size: 30, weight: 800 }] }] },
        ga: { blocks: [{ x: RIGHT, top: 1072, anchor: 'start', lines: [{ text: 'G&A (10.3B)', size: 30, weight: 800 }] }] },
        amortization_intangibles: { blocks: [{ x: RIGHT, top: 1174, anchor: 'start', lineGap: 7, lines: [{ text: 'Amortization', size: 29, weight: 800 }, { text: 'of intangibles (5.5B)', size: 28, weight: 800 }] }] },
        goodwill_impairment: { blocks: [{ x: RIGHT, top: 1280, anchor: 'start', lineGap: 7, lines: [{ text: 'Goodwill', size: 29, weight: 800 }, { text: 'impairment (2.7B)', size: 28, weight: 800 }] }] },
      },
    },
    nodes: [
      ['china_commerce',0,0,'source',['China','commerce'],170.0,'170.0B',['(1%) Y/Y']], ['international_commerce',0,1,'source',['International','commerce'],19.5,'19.5B',['+18% Y/Y']],
      ['local_consumer_services',0,2,'source',['Local consumer','services'],13.2,'13.2B',['+6% Y/Y']], ['cainiao',0,3,'source','Cainiao',16.6,'16.6B',['+27% Y/Y']],
      ['cloud',0,4,'source','Cloud',20.2,'20.2B',['+3% Y/Y']], ['digital_media',0,5,'source','Digital Media',7.6,'7.6B',['(6%) Y/Y']],
      ['other_revenue',0,6,'source','Other',0.8,'0.8B',['(20%) Y/Y']], ['revenue',1,0,'hub','Revenue',247.8,'247.8B',['+2% Y/Y']],
      ['gross_profit',2,0,'profit','Gross profit',97.8,'97.8B',['39% margin','(0pp) Y/Y']], ['cost_of_revenue',2,1,'cost',['Cost of','revenue'],150,'(150.0B)',[]],
      ['operating_profit',3,0,'profit','Operating profit',35,'35.0B',['14% margin','+11pp Y/Y']], ['operating_expenses',3,1,'cost',['Operating','expenses'],62.7,'(62.7B)',[]],
      ['interest_investments',4,0,'profit',['Interest &','investments'],15.5,'15.5B',[]], ['net_profit',5,0,'profit','Net profit',45.7,'45.7B',['18% margin','+11pp Y/Y']],
      ['tax',5,1,'cost','Tax',3.8,'(3.8B)',[]], ['other_expense',5,2,'cost','Other',1,'(1.0B)',[]],
      ['product_development',5,3,'cost',['Product','development'],13.5,'(13.5B)',[]], ['sm',5,4,'cost','S&M',30.6,'(30.6B)',[]],
      ['ga',5,5,'cost','G&A',10.3,'(10.3B)',[]], ['amortization_intangibles',5,6,'cost',['Amortization','of intangibles'],5.5,'(5.5B)',[]],
      ['goodwill_impairment',5,7,'cost',['Goodwill','impairment'],2.7,'(2.7B)',[]],
    ].map(([id,col,order,type,label,value,valueText,notes]) => ({ id,col,order,type,label,value,valueText,notes,
      color: type === 'profit' ? GREEN : type === 'cost' ? RED : ORANGE,
      labelColor: type === 'profit' ? '#008f51' : type === 'cost' ? '#941100' : ORANGE,
      linkTint: type === 'profit' ? GREEN_LINK : type === 'cost' ? RED_LINK : ORANGE_LINK,
    })),
    links: [
      ['china_commerce','revenue',170,194,203,0], ['international_commerce','revenue',19.5,20,20,1], ['local_consumer_services','revenue',13.2,14,14,2],
      ['cainiao','revenue',16.6,17,17,3], ['cloud','revenue',20.2,21,21,4], ['digital_media','revenue',7.6,7,7,5], ['other_revenue','revenue',0.8,1,1,6],
    ].map(([source,target,value,sourceWidth,targetWidth,targetOrder]) => ({source,target,value,sourceWidth,targetWidth,targetOrder})).concat([
      { source:'revenue', target:'gross_profit', value:97.8, sourceWidth:111, targetWidth:111, sourceOrder:0, targetOrder:0 },
      { source:'revenue', target:'cost_of_revenue', value:150, sourceWidth:171, targetWidth:171, sourceOrder:1, targetOrder:0 },
      { source:'gross_profit', target:'operating_profit', value:35, sourceWidth:38, targetWidth:38, sourceOrder:0, targetOrder:0 },
      { source:'gross_profit', target:'operating_expenses', value:62.7, sourceWidth:73, targetWidth:70, sourceOrder:1, targetOrder:0 },
      { source:'operating_profit', target:'net_profit', value:35, sourceWidth:33, targetWidth:35, sourceOrder:0, targetOrder:0, y0:529.5 },
      { source:'operating_profit', target:'tax', value:3.8, sourceWidth:4, targetWidth:4, sourceOrder:1, y0:548 },
      { source:'operating_profit', target:'other_expense', value:1, sourceWidth:1, targetWidth:1, sourceOrder:2, y0:550.5 },
      { source:'interest_investments', target:'net_profit', value:15.5, sourceWidth:15, targetWidth:16, targetOrder:1 },
      { source:'operating_expenses', target:'product_development', value:13.5, sourceWidth:32, targetWidth:32, sourceOrder:0, y0:746 },
      { source:'operating_expenses', target:'sm', value:30.6, sourceWidth:14, targetWidth:14, sourceOrder:1, y0:769 },
      { source:'operating_expenses', target:'ga', value:10.3, sourceWidth:10, targetWidth:10, sourceOrder:2, y0:781 },
      { source:'operating_expenses', target:'amortization_intangibles', value:5.5, sourceWidth:5, targetWidth:5, sourceOrder:3, y0:788.5 },
      { source:'operating_expenses', target:'goodwill_impairment', value:2.7, sourceWidth:9, targetWidth:3, sourceOrder:4, y0:795.5 },
    ]),
    i18n: {
      preservedAnnotationText: ['Taobao','TMALL','Lazada','AliExpress','trendyol','Alibaba Cloud','YOUKU'],
      zh: {
        name: 'Alibaba · 2023 财年第三季度',
        meta: { title: 'Alibaba 2023 财年第三季度利润表', subtitle: '单位：人民币', period: '2023 财年第三季度', periodNote: '截至 2022 年 12 月', titleTextLength: 1980, periodX: 320 },
        nodes: {
          china_commerce:{label:'中国商业',notes:['同比 (1%)']}, international_commerce:{label:'国际商业',notes:['同比 +18%']}, local_consumer_services:{label:'本地生活服务',notes:['同比 +6%']},
          cainiao:{label:'菜鸟',notes:['同比 +27%']}, cloud:{label:'云',notes:['同比 +3%']}, digital_media:{label:'数字媒体',notes:['同比 (6%)']}, other_revenue:{label:'其他',notes:['同比 (20%)']},
          revenue:{label:'收入',notes:['同比 +2%']}, gross_profit:{label:'毛利润',notes:['利润率 39%','同比 (0 个百分点)']}, cost_of_revenue:{label:'收入成本'},
          operating_profit:{label:'营业利润',notes:['利润率 14%','同比 +11 个百分点']}, operating_expenses:{label:'运营费用'}, interest_investments:{label:'利息与投资收益'},
          net_profit:{label:'净利润',notes:['利润率 18%','同比 +11 个百分点']}, tax:{label:'税费'}, other_expense:{label:'其他'}, product_development:{label:'产品开发'},
          sm:{label:'销售与市场'}, ga:{label:'一般及行政'}, amortization_intangibles:{label:'无形资产摊销'}, goodwill_impairment:{label:'商誉减值'},
        },
        layout: { labels: {
          china_commerce:{blocks:[{x:603,top:312,anchor:'middle',parts:['value','notes'],lineGap:7},{x:542,top:482,anchor:'end',parts:['name'],lineGap:7}]},
          international_commerce:{blocks:[{x:603,top:618,anchor:'middle',parts:['value','notes'],lineGap:7},{x:542,top:699,anchor:'end',parts:['name'],lineGap:7}]},
          local_consumer_services:{blocks:[{x:603,top:748,anchor:'middle',parts:['value','notes'],lineGap:7},{x:542,top:815,anchor:'end',parts:['name'],lineGap:7}]},
          tax:{blocks:[{x:RIGHT,top:681,anchor:'start',lines:[{text:'税费 (3.8B)',size:30,weight:800}]}]},
          other_expense:{blocks:[{x:RIGHT,top:749,anchor:'start',lines:[{text:'其他 (1.0B)',size:30,weight:800}]}]},
          product_development:{blocks:[{x:RIGHT,top:824,anchor:'start',lineGap:7,lines:[{text:'产品',size:30,weight:800},{text:'开发 (13.5B)',size:29,weight:800}]}]},
          sm:{blocks:[{x:RIGHT,top:961,anchor:'start',lines:[{text:'销售与市场 (30.6B)',size:30,weight:800}]}]},
          ga:{blocks:[{x:RIGHT,top:1072,anchor:'start',lines:[{text:'一般及行政 (10.3B)',size:30,weight:800}]}]},
          amortization_intangibles:{blocks:[{x:RIGHT,top:1174,anchor:'start',lineGap:7,lines:[{text:'无形资产',size:29,weight:800},{text:'摊销 (5.5B)',size:28,weight:800}]}]},
          goodwill_impairment:{blocks:[{x:RIGHT,top:1280,anchor:'start',lineGap:7,lines:[{text:'商誉',size:29,weight:800},{text:'减值 (2.7B)',size:28,weight:800}]}]},
        } },
      },
    },
  });
})();
