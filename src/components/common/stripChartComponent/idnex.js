import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  TextStyle,
  AxisPointer,
  SplitLine,
  AxisLine,
  AxisTick,
  AxisLabel,
  Title,
  Tooltip,
  Grid,
  XAxis,
  YAxis,
  Series,
} = Components

const StripChartComponent = props => {
  return (
    <div className="strip-chart-box">
      <Recharts>
        <Title text="地区癌肿高风险指数" x="center">
          <TextStyle color="#fff" fontSize={24} />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis show={false} type="value" boundaryGap={[0, 0.01]}>
          <SplitLine show={false} />
          <AxisLine show={false} />
          <AxisTick show={false} />
          <AxisLabel>
            <TextStyle color="#fff" />
          </AxisLabel>
        </XAxis>
        <YAxis type="category" data={props.yAxisData}>
          <SplitLine show={false} />
          <AxisLine show={false} />
          <AxisTick show={false} />
          <AxisLabel>
            <TextStyle color="#fff" />
          </AxisLabel>
        </YAxis>
        <Series
          name="地区癌肿高风险指数"
          type="bar"
          data={props.seriesData}
          itemStyle={{ normal: { color: 'rgb(73, 146, 255)' } }}
        />
      </Recharts>
    </div>
  )
}

export default StripChartComponent
