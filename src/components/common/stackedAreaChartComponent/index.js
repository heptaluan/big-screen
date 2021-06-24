import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'
import * as echarts from 'echarts/lib/echarts'

const { TextStyle, Label, AxisPointer, SaveAsImage, Feature, LineStyle, Title, Tooltip, Legend, Toolbox, Grid, XAxis, YAxis, Series } = Components

const LineChartComponent = props => {
  return (
    <div className="line-chart-box">
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
        <Legend data={props.data.stackedAreaChartData.legendData}>
          <TextStyle color="#fff" />
        </Legend>
        <Toolbox>
          <Feature>
            <SaveAsImage />
          </Feature>
        </Toolbox>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis type="category" boundaryGap={false} data={props.data.stackedAreaChartData.xAxisData} />
        <YAxis type="value" />
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

export default LineChartComponent
