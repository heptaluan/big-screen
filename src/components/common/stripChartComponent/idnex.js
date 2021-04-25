import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  AxisPointer,
  SplitLine,
  AxisLine,
  AxisTick,
  Tooltip,
  Grid,
  XAxis,
  YAxis,
  Series,
} = Components

const StripChartComponent = () => {
  return (
    <div className="strip-chart-box">
      <Recharts>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis show={false} type="value" boundaryGap={[0, 0.01]}>
          <SplitLine show={false} />
          <AxisLine show={false} />
          <AxisTick show={false} />
        </XAxis>
        <YAxis
          type="category"
          data={[...Array(14).keys()]}
        >
          <SplitLine show={false} />
          <AxisLine show={false} />
          <AxisTick show={false} />
        </YAxis>
        <Series
          name="2011年"
          type="bar"
          data={[...Array(14).keys()]}
        />
      </Recharts>
    </div>
  )
}

export default StripChartComponent
