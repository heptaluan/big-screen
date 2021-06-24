import React from 'react'
import './index.scss'
import BarChartComponent from '../common/barChartComponent/idnex'

const ModelComponent = props => {
  return (
    <div className="wrap-box">
      <div className="model-box-wrap">
        <div className="model-box"></div>
        <div className="model-bottom"></div>
      </div>
      <BarChartComponent data={props.data} />
    </div>
  )
}

export default ModelComponent
