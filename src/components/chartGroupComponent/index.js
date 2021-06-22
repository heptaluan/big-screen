import React, { useState } from 'react'
import './index.scss'
import StripChartComponent from '../common/stripChartComponent/idnex'
import MapChartComponent from '../common/mapChartComponent/index'
import LineChartComponent from '../common/lineChartComponent/index'

const ChartGroupComponent = () => {
  const [data, setData] = useState({
    yAxisData: [
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
    seriesData: [22, 24, 25, 25, 25, 26, 26, 27, 27, 28, 29, 30, 32, 34],
  })

  const updateStripChart = params => {
    setData({
      yAxisData: params.types,
      seriesData: params.values,
    })
  }

  return (
    <div className="chart-group-box">
      <MapChartComponent updateStripChart={updateStripChart} />
      <StripChartComponent
        yAxisData={data.yAxisData}
        seriesData={data.seriesData}
      />
      <LineChartComponent />
    </div>
  )
}

export default ChartGroupComponent
