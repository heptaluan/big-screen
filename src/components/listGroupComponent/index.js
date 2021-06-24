import React from 'react'
import './index.scss'
import LineChartComponent from '../common/lineChartComponent/index'
import StackedBarChartComponent from '../common/stackedBarChartComponent/idnex'
import PieChartComponent from '../common/pieChartComponent/index'

const ListGroupComponent = props => {
  return (
    <div className="list-group-box">
      <PieChartComponent data={props.data} />
      <StackedBarChartComponent data={props.data} />
      <LineChartComponent data={props.data} />
    </div>
  )
}

export default ListGroupComponent
