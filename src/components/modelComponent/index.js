import React from 'react'
import './index.scss'
import BarChartComponent from '../common/barChartComponent/idnex'

const ModelComponent = () => {
  return (
    <div className="wrap-box">
      <div className="model-box-wrap">
        <div className="model-box"></div>
        <div className="model-bottom"></div>
      </div>
      <BarChartComponent />
    </div>
  )
}

export default ModelComponent
