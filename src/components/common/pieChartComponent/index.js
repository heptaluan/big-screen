import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, Label, Title, Tooltip, Series } = Components

const PieChartComponent = props => {
  return (
    <div className="pie-chart-box">
      <Recharts color={props.data.color}>
        <Title text={props.data.pieChartData.title} left="center" top="6%">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="item" />
        <Series
          name="产品分布"
          type="pie"
          radius="70%"
          data={props.data.pieChartData.data}
          emphasis={{ itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } }}
          center={['50%', '62%']}
        >
          {' '}
          <Label normal={{ show: true, position: 'inner', textStyle: { fontWeight: 300, fontSize: 14, color: '#000' } }} />{' '}
        </Series>
      </Recharts>
    </div>
  )
}

export default PieChartComponent
