const list = [
  {
    name: '江苏海尔思',
    value: 386,
    list: {
      types: [
        '胃癌',
        '乳腺癌',
        '肝癌',
        '肺癌',
        '肠癌',
        '食管癌',
        '胰腺癌',
        '血液肿瘤',
        '脑瘤',
        '前列腺癌',
        '卵巢癌',
        '甲状腺癌',
        '鼻咽癌',
        '嗜铬细胞瘤',
      ],
      values: [15, 15, 18, 20, 22, 23, 26, 27, 27, 28, 29, 30, 32, 34],
    },
  },
  {
    name: '河南中平韩一',
    value: 429,
    list: {
      types: [
        '肺癌',
        '甲状腺癌',
        '乳腺癌',
        '嗜铬细胞瘤',
        '血液肿瘤',
        '食管癌',
        '鼻咽癌',
        '胰腺癌',
        '肝癌',
        '肠癌',
        '前列腺癌',
        '脑瘤',
        '卵巢癌',
        '胃癌',
      ],
      values: [15, 15, 17, 19, 22, 24, 26, 29, 29, 30, 32, 32, 32, 34],
    },
  },
  {
    name: '河南圣德医院',
    value: 430,
    list: {
      types: [
        '前列腺癌',
        '甲状腺癌',
        '肝癌',
        '胰腺癌',
        '肺癌',
        '血液肿瘤',
        '胃癌',
        '肠癌',
        '卵巢癌',
        '乳腺癌',
        '脑瘤',
        '嗜铬细胞瘤',
        '食管癌',
        '鼻咽癌',
      ],
      values: [18, 18, 19, 19, 20, 20, 20, 21, 22, 23, 24, 27, 29, 30],
    },
  },
  {
    name: '广东慈善',
    value: 433,
    list: {
      types: [
        '甲状腺癌',
        '卵巢癌',
        '血液肿瘤',
        '胃癌',
        '肠癌',
        '肺癌',
        '肝癌',
        '乳腺癌',
        '食管癌',
        '嗜铬细胞瘤',
        '鼻咽癌',
        '前列腺癌',
        '胰腺癌',
        '脑瘤',
      ],
      values: [22, 24, 24, 24, 25, 27, 29, 29, 29, 30, 32, 32, 33, 34],
    },
  },
  {
    name: '广东顺德',
    value: 461,
    list: {
      types: [
        '食管癌',
        '肺癌',
        '肠癌',
        '卵巢癌',
        '甲状腺癌',
        '胃癌',
        '血液肿瘤',
        '前列腺癌',
        '鼻咽癌',
        '嗜铬细胞瘤',
        '脑瘤',
        '肝癌',
        '乳腺癌',
        '胰腺癌',
      ],
      values: [20, 20, 21, 21, 22, 24, 24, 26, 27, 28, 30, 30, 32, 34],
    },
  },
  {
    name: '贵州爱康国宾',
    value: 426,
    list: {
      types: [
        '肠癌',
        '嗜铬细胞瘤',
        '血液肿瘤',
        '甲状腺癌',
        '肺癌',
        '鼻咽癌',
        '胃癌',
        '乳腺癌',
        '脑瘤',
        '胰腺癌',
        '肝癌',
        '卵巢癌',
        '前列腺癌',
        '食管癌',
      ],
      values: [21, 21, 22, 25, 26, 26, 26, 27, 27, 27, 29, 30, 31, 34],
    },
  },
]

const geoCoordMap = {
  江苏海尔思: [119.76, 33.32],
  河南中平韩一: [112.5, 33.01],
  河南圣德医院: [113.96, 35.27],
  广东慈善: [113.27, 23.13],
  广东顺德: [114.68, 23.72],
  贵州爱康国宾: [106.63, 26.65],
}

const convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
        list: list[i],
      })
    }
  }
  return res
}

export const option = {
  title: {
    text: '渠道商分布',
    left: 'center',
    top: 10,
    textStyle: {
      color: '#fff',
      fontSize: 24,
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return params.name + ' : ' + params.value[2]
    },
  },
  visualMap: {
    min: 200,
    max: 500,
    left: 20,
    bottom: 0,
    calculable: true,
    text: ['高', '低'],
    inRange: {
      color: ['#8888ff', '#1e20cc'],
    },
    textStyle: {
      color: '#fff',
    },
  },
  geo: {
    map: 'china',
    roam: true,
    zoom: 1.1,
    top: 50,
    label: {
      emphasis: {
        show: false,
      },
    },
    itemStyle: {
      normal: {
        areaColor: 'rgb(73, 146, 255)',
        borderColor: 'rgb(9, 54, 95)',
      },
      emphasis: {
        areaColor: '#4042ff',
      },
    },
  },
  series: [
    {
      name: '渠道商分布',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(list),
      symbolSize: 12,
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        emphasis: {
          borderColor: '#fff',
          borderWidth: 1,
        },
      },
    },
    {
      type: 'map',
      map: 'china',
      geoIndex: 0,
      aspectScale: 0.75,
      tooltip: {
        show: false,
      },
    },
  ],
}
