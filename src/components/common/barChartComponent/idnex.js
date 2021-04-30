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
  AxisPointer,
} = Components

const BarChartComponent = props => {
  return (
    <div className="bar-chart-box">
      <Recharts>
        <Title text="年龄段分布" x="center">
          <TextStyle color="#fff" fontSize={24} />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <XAxis type="category" data={props.data.name}>
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
          name={'数量'}
          data={props.data.value}
          type="bar"
          itemStyle={{ normal: { color: 'rgb(73, 146, 255)' } }}
        />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
