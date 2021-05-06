import React from 'react'
import './index.scss'
import LineChartComponent from '../common/lineChartComponent/index'
import BarChartComponent from '../common/barChartComponent/idnex'

import * as jsonData from '../../assets/js/data'
import { formatChartData } from '../../util/index'

const ListGroupComponent = () => {
  const barChartData = formatChartData(jsonData.data).ages
  return (
    <div className="list-group-box">
      <BarChartComponent data={barChartData} />
      <LineChartComponent />
    </div>
  )
}

export default ListGroupComponent
