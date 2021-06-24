import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  TextStyle,
  Label,
  AxisPointer,
  LineStyle,
  SplitLine,
  AxisLine,
  Title,
  Tooltip,
  Legend,
  Grid,
  XAxis,
  YAxis,
  Series,
} = Components

const LineChartComponent = props => {
  return (
    <div className="line-chart-box">
      <Recharts color={props.data.color}>
        <Title text={props.data.lineChartData.title}>
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="cross">
            {' '}
            <Label backgroundColor="#6a7985" />{' '}
          </AxisPointer>
        </Tooltip>
        <Legend data={['每月检测量', '累计检测量']}>
          <TextStyle color="#fff" />
        </Legend>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis
          type="category"
          boundaryGap={false}
          data={props.data.lineChartData.xAxisData}
        >
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
        <Series
          name="每月检测量"
          type="line"
          stack="总量"
          data={props.data.lineChartData.monthTestNum}
        />
        <Series
          name="累计检测量"
          type="line"
          stack="总量"
          data={props.data.lineChartData.allTestNum}
        >
          {' '}
          <Label normal={{ show: true, position: 'top' }} />{' '}
        </Series>
      </Recharts>
    </div>
  )
}

export default LineChartComponent
