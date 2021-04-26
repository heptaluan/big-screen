import React, { useState } from 'react'
import './index.scss'
import StripChartComponent from '../common/stripChartComponent/idnex'
import MapChartComponent from '../common/mapChartComponent/index'

// 测试用
const randomArray = length => {
  let i = 0
  let index = 0
  let temp = null
  let arr = [length]
  length = typeof length === 'undefined' ? 9 : length
  for (i = 1; i <= length; i++) {
    arr[i - 1] = i
  }
  for (i = 1; i <= length; i++) {
    index = window.parseInt(Math.random() * (length - i)) + i
    if (index !== i) {
      temp = arr[i - 1]
      arr[i - 1] = arr[index - 1]
      arr[index - 1] = temp
    }
  }
  return arr
}

const ChartGroupComponent = () => {
  const [data, setData] = useState({
    yAxisData: randomArray(14),
    seriesData: randomArray(14),
  })

  const updateStripChart = params => {
    console.log(params)
    setData({
      yAxisData: randomArray(14),
      seriesData: randomArray(14),
    })
  }

  return (
    <div className="chart-group-box">
      <MapChartComponent updateStripChart={updateStripChart} />
      <StripChartComponent
        yAxisData={data.yAxisData}
        seriesData={data.seriesData}
      />
    </div>
  )
}

export default ChartGroupComponent
