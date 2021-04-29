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
        <Title text="年龄分布" x="center">
          <TextStyle color="#fff" fontSize={24} />
        </Title>
        <Tooltip trigger="axis" />
        <Legend
          show={false}
          data={['类型一', '类型二', '类型三', '类型四', '类型五']}
        />
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis
          type="category"
          boundaryGap={false}
          data={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
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
          name="类型一"
          type="line"
          stack="总量"
          data={[120, 132, 101, 134, 90, 230, 210]}
          itemStyle={{
            normal: {
              color: 'rgb(73, 146, 255)',
              lineStyle: { color: 'rgb(73, 146, 255)' },
            },
          }}
        />
        <Series
          name="类型二"
          type="line"
          stack="总量"
          data={[220, 182, 191, 234, 290, 330, 310]}
          itemStyle={{
            normal: {
              color: 'rgb(124, 255, 178)',
              lineStyle: { color: 'rgb(124, 255, 178)' },
            },
          }}
        />
        <Series
          name="类型三"
          type="line"
          stack="总量"
          data={[150, 232, 201, 154, 190, 330, 410]}
          itemStyle={{
            normal: {
              color: 'rgb(253, 221, 96)',
              lineStyle: { color: 'rgb(253, 221, 96)' },
            },
          }}
        />
        <Series
          name="直接访问"
          type="line"
          stack="总量"
          data={[320, 332, 301, 334, 390, 330, 320]}
          itemStyle={{
            normal: {
              color: 'rgb(255, 110, 118)',
              lineStyle: { color: 'rgb(255, 110, 118)' },
            },
          }}
        />
        <Series
          name="类型四"
          type="line"
          stack="总量"
          data={[820, 932, 901, 934, 1290, 1330, 1320]}
          itemStyle={{
            normal: {
              color: 'rgb(88, 217, 249)',
              lineStyle: { color: 'rgb(88, 217, 249)' },
            },
          }}
        />
        <Series
          name="类型五"
          type="line"
          stack="总量"
          data={[820, 932, 901, 934, 1290, 1330, 1320]}
          itemStyle={{
            normal: {
              color: 'rgb(88, 217, 249)',
              lineStyle: { color: 'rgb(88, 217, 249)' },
            },
          }}
        />
      </Recharts>
    </div>
  )
}

export default LineChartComponent
