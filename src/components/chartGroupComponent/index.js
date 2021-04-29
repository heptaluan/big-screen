import React, { useState } from 'react'
import './index.scss'
import StripChartComponent from '../common/stripChartComponent/idnex'
import MapChartComponent from '../common/mapChartComponent/index'

const ChartGroupComponent = () => {
  return (
    <div className="chart-group-box">
      <MapChartComponent />
      <StripChartComponent />
    </div>
  )
}

export default ChartGroupComponent
