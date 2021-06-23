import React from 'react'
import './index.scss'
import LineChartComponent from '../common/lineChartComponent/index'
import StackedBarChartComponent from '../common/stackedBarChartComponent/idnex'
import PieChartComponent from '../common/pieChartComponent/index'

const ListGroupComponent = () => {
  return (
    <div className="list-group-box">
      <PieChartComponent />
      <StackedBarChartComponent />
      <LineChartComponent />
    </div>
  )
}

export default ListGroupComponent
