import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  TextStyle,
  SplitLine,
  AxisLine,
  AxisTick,
  AxisLabel,
  Title,
  XAxis,
  YAxis,
  Series,
  Tooltip,
  AxisPointer
} = Components

const BarChartComponent = () => {
  return (
    <div className="bar-chart-box">
      <Recharts>
        <Title text="年龄分布" x="center">
          <TextStyle color="#fff" fontSize={24} />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <XAxis
          type="category"
          data={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        >
          <SplitLine show={false} />
          <AxisLine show={false} />
          <AxisTick show={false} />
          <AxisLabel>
            <TextStyle color="#fff" />
          </AxisLabel>
        </XAxis>
        <YAxis type="value">
          <SplitLine show={false} />
          <AxisLine show={false} />
          <AxisTick show={false} />
          <AxisLabel>
            <TextStyle color="#fff" />
          </AxisLabel>
        </YAxis>
        <Series
          data={[120, 200, 150, 80, 70, 110, 130]}
          type="bar"
          itemStyle={{ normal: { color: 'rgb(73, 146, 255)' } }}
        />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
