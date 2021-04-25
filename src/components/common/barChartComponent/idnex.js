import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  TextStyle,
  AxisPointer,
  AxisTick,
  SplitLine,
  AxisLine,
  Title,
  Tooltip,
  Grid,
  XAxis,
  YAxis,
  Series,
} = Components

const BarChartComponent = () => {
  return (
    <div className="bar-chart-box">
      <Recharts>
        <Title text="患者年龄分布" left="center">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis
          type="category"
          data={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        >
          <AxisTick alignWithLabel={true} />
          <SplitLine show={false} />
          <AxisLine show={false} />
        </XAxis>
        <YAxis type="value">
          <SplitLine show={false} />
          <AxisLine show={false} />
        </YAxis>
        <Series
          name="直接访问"
          type="bar"
          barWidth="60%"
          data={[10, 52, 200, 334, 390, 330, 220]}
        />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
