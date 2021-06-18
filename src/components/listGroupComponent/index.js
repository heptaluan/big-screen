import React from 'react'
import './index.scss'
import LineChartComponent from '../common/lineChartComponent/index'
import BarChartComponent from '../common/barChartComponent/idnex'
import PieChartComponent from '../common/pieChartComponent/index'

const ListGroupComponent = () => {
  return (
    <div className="list-group-box">
      <PieChartComponent />
      {/* <BarChartComponent />
      <LineChartComponent /> */}
    </div>
  )
}

export default ListGroupComponent
