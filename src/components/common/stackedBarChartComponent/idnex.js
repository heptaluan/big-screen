import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, AxisPointer, LineStyle, AxisLabel, SplitLine, AxisTick, AxisLine, Title, Tooltip, Grid, XAxis, YAxis, Series } = Components

const StackedBarChartComponent = props => {
  return (
    <div className="pie-chart-box">
      <Recharts color={props.data.color}>
        <Title text={props.data.stackedBarChartData.title}>
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis type="category" data={props.data.stackedBarChartData.xAxisData}>
          <SplitLine show={false} />
          <AxisTick show={false} />
          <AxisLine>
            <LineStyle color="#fff" />
          </AxisLine>
        </XAxis>
        <YAxis type="value">
          <SplitLine show={false} />
          <AxisTick show={false} />
          <AxisLine show={false} />
          <AxisLabel>
            <TextStyle color="#fff" />
          </AxisLabel>
        </YAxis>
        <Series name="男" barMaxWidth={40} type="bar" stack="年龄段分部" data={props.data.stackedBarChartData.manData} />
        <Series name="女" barMaxWidth={40} type="bar" stack="年龄段分部" data={props.data.stackedBarChartData.womanData} />
      </Recharts>
    </div>
  )
}

export default StackedBarChartComponent
