import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { Tooltip, Series } = Components

const PieChartComponent = () => {
  return (
    <div className="pie-chart-box">
      <Recharts>
        <Tooltip trigger="item" formatter="{a} <br/>{b} : {c} ({d}%)" />
        <Series
          name="版本分布"
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
            { value: 335, name: '基础版' },
            { value: 310, name: '升级版' },
            { value: 234, name: '自选版' },
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
