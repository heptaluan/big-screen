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
        <Title text="每月检测数量" x="center">
          <TextStyle color="#fff" fontSize={24} />
        </Title>
        <Tooltip trigger="axis" />
        <Legend
          show={false}
          data={[
            '江苏海尔思',
            '河南中平韩一',
            '河南圣德医院',
            '广东慈善',
            '广东顺德',
            '贵州爱康国宾',
          ]}
        />
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
          name="江苏海尔思"
          type="line"
          stack="诊断数"
          data={[28, 30, 46, 28, 46, 37, 39, 40, 14, 21, 31, 26]}
          itemStyle={{
            normal: {
              color: '#4ed4f8',
              lineStyle: { color: '#4ed4f8' },
            },
          }}
        />
        <Series
          name="河南中平韩一"
          type="line"
          stack="诊断数"
          data={[34, 33, 43, 41, 41, 38, 42, 29, 49, 17, 32, 30]}
          itemStyle={{
            normal: {
              color: '#fdd856',
              lineStyle: { color: '#fdd856' },
            },
          }}
        />
        <Series
          name="河南圣德医院"
          type="line"
          stack="诊断数"
          data={[40, 42, 40, 35, 48, 27, 42, 21, 33, 34, 25, 43]}
          itemStyle={{
            normal: {
              color: '#3978e4',
              lineStyle: { color: '#3978e4' },
            },
          }}
        />
        <Series
          name="广东慈善"
          type="line"
          stack="诊断数"
          data={[35, 31, 28, 41, 41, 39, 43, 19, 40, 35, 39, 42]}
          itemStyle={{
            normal: {
              color: '#e15862',
              lineStyle: { color: '#e15862' },
            },
          }}
        />
        <Series
          name="广东顺德"
          type="line"
          stack="诊断数"
          data={[40, 31, 34, 54, 42, 36, 38, 42, 46, 34, 31, 33]}
          itemStyle={{
            normal: {
              color: '#ff8c42',
              lineStyle: { color: '#ff8c42' },
            },
          }}
        />
        <Series
          name="贵州爱康国宾"
          type="line"
          stack="诊断数"
          data={[37, 37, 38, 40, 32, 41, 33, 33, 37, 26, 26, 46]}
          itemStyle={{
            normal: {
              color: '#65e198',
              lineStyle: { color: '#65e198' },
            },
          }}
        />
      </Recharts>
    </div>
  )
}

export default LineChartComponent
