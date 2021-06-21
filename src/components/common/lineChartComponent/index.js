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

const LineChartComponent = () => {
  return (
    <div className="line-chart-box">
      <Recharts>
        <Title text="检测量">
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
          data={[
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月',
          ]}
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
          color="#4ed4f8"
          name="每月检测量"
          type="line"
          stack="总量"
          areaStyle={{}}
          data={[320, 332, 301, 334, 390, 330, 320, 270, 220, 230, 290, 350]}
        />
        <Series
          color="#fdd856"
          name="累计检测量"
          type="line"
          stack="总量"
          areaStyle={{}}
          data={[
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            1280,
            1260,
            1280,
            1350,
            1370,
          ]}
        >
          {' '}
          <Label normal={{ show: true, position: 'top' }} />{' '}
        </Series>
      </Recharts>
    </div>
  )
}

export default LineChartComponent
