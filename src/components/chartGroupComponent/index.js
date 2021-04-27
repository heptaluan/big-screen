import React, { useState } from 'react'
import './index.scss'
import StripChartComponent from '../common/stripChartComponent/idnex'
import MapChartComponent from '../common/mapChartComponent/index'

const ChartGroupComponent = () => {
  const [data, setData] = useState({
    yAxisData: [...Array(10).keys()],
    seriesData: [...Array(10).keys()],
  })

  const updateStripChart = params => {
    console.log(params)
    setData({
      yAxisData: [...Array(10).keys()],
      seriesData: [...Array(10).keys()],
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
