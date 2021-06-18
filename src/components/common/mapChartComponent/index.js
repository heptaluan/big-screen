import React, { useRef, useEffect } from 'react'
import './index.scss'

import * as echarts from 'echarts'
import * as map from './map'
import { option } from './options'

const MapChartComponent = props => {
  const boxRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(boxRef.current)
    echarts.registerMap('china', map.data)
    myChart.setOption(option)
    myChart.on('click', function (params) {
      if (params.data) {
        props.updateStripChart(params.data.list.list)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={boxRef} className="map-chart-box"></div>
}

export default MapChartComponent
