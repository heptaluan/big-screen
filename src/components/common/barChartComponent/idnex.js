import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, AxisPointer, AxisLine, AxisTick, LineStyle, SplitLine, AxisLabel, Title, Tooltip, XAxis, YAxis, Series } = Components

const BarChartComponent = props => {
  return (
    <div className="bar-chart-box">
      <Recharts color={props.data.color}>
        <Title text={props.data.barChartData.title}>
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <XAxis type="category" data={props.data.barChartData.xAxisData}>
          <AxisLabel interval={0} rotate={40} />
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
        <Series
          name="癌肿风险占比"
          data={props.data.barChartData.seriesData}
          type="bar"
          barMaxWidth={20}
          itemStyle={{ emphasis: { barBorderRadius: 10 } }}
        />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
