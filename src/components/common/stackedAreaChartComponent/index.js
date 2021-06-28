import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'
import * as echarts from 'echarts/lib/echarts'

const { TextStyle, Label, AxisPointer, LineStyle, Title, Tooltip, Legend, Grid, XAxis, YAxis, Series, SplitLine, AxisLine } = Components

const StackedAreaChartComponent = props => {
  return (
    <div className="stacked-area-chart-box">
      <Recharts color={props.data.color}>
        <Title text={props.data.stackedAreaChartData.title}>
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="cross">
            {' '}
            <Label backgroundColor="#6a7985" />{' '}
          </AxisPointer>
        </Tooltip>
        <Legend top="12%" data={props.data.stackedAreaChartData.legendData}>
          <TextStyle color="#fff" />
        </Legend>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis type="category" boundaryGap={false} data={props.data.stackedAreaChartData.xAxisData}>
          <SplitLine show={false} />
          <AxisLine>
            <LineStyle color="#fff" />
          </AxisLine>
        </XAxis>
        <YAxis type="value">
          <SplitLine show={false} />
          <AxisLine>
            <LineStyle color="#fff" />
          </AxisLine>
        </YAxis>
        {props.data.stackedAreaChartData.seriesData.map(item => (
          <Series
            key={item.id}
            name={item.name}
            type="line"
            stack="总量"
            smooth={true}
            showSymbol={false}
            areaStyle={{
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: item.color[0] || 'rgba(128, 255, 165)',
                },
                {
                  offset: 1,
                  color: item.color[1] || 'rgba(1, 191, 236)',
                },
              ]),
            }}
            emphasis={{ focus: 'series' }}
            data={item.data}
          >
            <LineStyle width={0} />
          </Series>
        ))}
      </Recharts>
    </div>
  )
}

export default StackedAreaChartComponent
