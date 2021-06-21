import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  TextStyle,
  AxisPointer,
  LineStyle,
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
    <div className="pie-chart-box">
      <Recharts>
        <Title text="年龄段分部">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis
          type="category"
          data={['20以下', '20-35', '35-50', '50-70', '70以上']}
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
          color={['#4ed4f8']}
          name="男"
          type="bar"
          stack="年龄段分部"
          data={[320, 332, 301, 334, 390]}
        />
        <Series
          color={['#fdd856']}
          name="女"
          type="bar"
          stack="年龄段分部"
          data={[120, 132, 101, 134, 90]}
        />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
