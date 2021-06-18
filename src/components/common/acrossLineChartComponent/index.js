import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const {
  AxisPointer,
  Label,
  Tooltip,
  Legend,
  Grid,
  XAxis,
  YAxis,
  Series,
} = Components

const AcrossLineChartComponent = () => {
  return (
    <div className="line-chart-box">
      <Recharts>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <Legend
          data={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']}
        />
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis type="value" />
        <YAxis
          type="category"
          data={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
        />
        <Series
          name="直接访问"
          type="bar"
          stack="总量"
          data={[320, 302, 301, 334, 390, 330, 320]}
        >
          {' '}
          <Label show={true} position="insideRight" />{' '}
        </Series>
        <Series
          name="邮件营销"
          type="bar"
          stack="总量"
          data={[120, 132, 101, 134, 90, 230, 210]}
        >
          {' '}
          <Label show={true} position="insideRight" />{' '}
        </Series>
        <Series
          name="联盟广告"
          type="bar"
          stack="总量"
          data={[220, 182, 191, 234, 290, 330, 310]}
        >
          {' '}
          <Label show={true} position="insideRight" />{' '}
        </Series>
        <Series
          name="视频广告"
          type="bar"
          stack="总量"
          data={[150, 212, 201, 154, 190, 330, 410]}
        >
          {' '}
          <Label show={true} position="insideRight" />{' '}
        </Series>
        <Series
          name="搜索引擎"
          type="bar"
          stack="总量"
          data={[820, 832, 901, 934, 1290, 1330, 1320]}
        >
          {' '}
          <Label show={true} position="insideRight" />{' '}
        </Series>
      </Recharts>
    </div>
  )
}

export default AcrossLineChartComponent
