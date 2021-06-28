import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, AxisPointer, SplitLine, AxisLine, AxisTick, AxisLabel, Title, Tooltip, Grid, XAxis, YAxis, Series } = Components

const StripChartComponent = props => {
  return (
    <div className="strip-chart-box">
      <Recharts color={['#00DDFF', '#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00']}>
        <Title text="地区癌肿高风险指数" x="center">
          <TextStyle color="#fff" fontSize={20} />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Grid top="15%" left="3%" right="4%" bottom="0%" containLabel={true} />
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
        <Series name="地区癌肿高风险指数" type="bar" data={props.seriesData} />
      </Recharts>
    </div>
  )
}

export default StripChartComponent
