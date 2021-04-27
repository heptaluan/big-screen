import * as dataList from './dataList'

export const option = {
  tooltip: {
    // 提示框组件
    formatter: function (e, t, n) {
      // 提示框浮层内容格式器
      return 0.5 === e.value
        ? e.name + '：考研报考人数'
        : e.seriesName + '<br />' + e.name + '：' + e.value
    },
  },
  visualMap: {
    //设置图例的相关参数
    min: 0,
    max: 450000,
    left: 20, // 图例距离左侧边框的距离
    bottom: 0, // 图例距离底部边框的距离
    text: ['高', '低'], // 图例文本设置
    textStyle: {
      color: '#fff',
    },
    pieces: [
      {
        // 图例中文字颜色得设置，min 与 max 的设置与图中显示相关联
        min: 240000,
        label: '> 24 万人',
        color: '#2222d2',
      },
      {
        min: 80000,
        max: 240000,
        label: '8 - 24 万人',
        color: '#4A4AFF',
      },
      {
        min: 5000,
        max: 80000,
        label: '0.5 - 8 万人',
        color: '#9393FF',
      },
      {
        min: 500,
        max: 5000,
        label: '0.05 - 0.5 万人',
        color: '#B9B9FF',
      },
      {
        max: 500,
        label: '< 0.05 万人',
        color: '#C7C7E2',
      },
    ],
    show: !0,
  },
  geo: {
    // 地图组件配置
    map: 'china', // 选择地图
    roam: !1, // 可缩放和平移true（或！0），false（或！1）
    zoom: 1.2, // 地图显示比例
    top: 50, // 地图距离上边框距离
    label: {
      // 绑定文字设置(图中省名字的设置
      normal: {
        // 初始状态配置（是否显示文本、颜色）
        show: !0,
        fontSize: '10',
        formatter: '{a}',
        color: 'rgba(0,0,0,0.7)',
      },
    },
    itemStyle: {
      emphasis: {
        //选中后
        areaColor: '#f2d5ad', // 鼠标移入颜色
        shadowOffsetX: 0, // 阴影水平方向上偏移量
        shadowOffsetY: 0, // 阴影垂直方向上偏移量
        borderWidth: 0, // 描边现况宽
      },
    },
  },
  series: [
    {
      name: '人数',
      type: 'map',
      geoIndex: 0,
      data: dataList.list,
    },
  ],
}
