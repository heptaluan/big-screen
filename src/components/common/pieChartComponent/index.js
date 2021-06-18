import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { Title, Tooltip, Legend, Series } = Components

const PieChartComponent = () => {
  return (
    <div className="pie-chart-box">
      <Recharts>
        <Title text="某站点用户访问来源" subtext="纯属虚构" left="center" />
        <Tooltip trigger="item" formatter="{a} <br/>{b} : {c} ({d}%)" />
        {/* <Legend
          orient="vertical"
          left="left"
          data={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']}
        /> */}
        <Series
          name="访问来源"
          type="pie"
          radius="55%"
          center={['50%', '60%']}
          color={[
            '#4ed4f8',
            '#fdd856',
            '#3978e4',
            '#e15862',
            '#ff8c42',
            '#65e198',
          ]}
          data={[
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' },
          ]}
          emphasis={{
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        />
      </Recharts>
    </div>
  )
}

export default PieChartComponent
