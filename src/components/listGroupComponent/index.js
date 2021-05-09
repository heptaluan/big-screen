import React from 'react'
import './index.scss'
import LineChartComponent from '../common/lineChartComponent/index'
import BarChartComponent from '../common/barChartComponent/idnex'

const ListGroupComponent = () => {
  return (
    <div className="list-group-box">
      <BarChartComponent />
      <LineChartComponent />
    </div>
  )
}

export default ListGroupComponent
