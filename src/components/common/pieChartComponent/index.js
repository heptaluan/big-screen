import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, Label, Title, Tooltip, Series } = Components

const PieChartComponent = props => {
  return (
    <div className="pie-chart-box">
      <Recharts color={props.data.color}>
        <Title text={props.data.pieChartData.title} left="center">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="item" />
        <Series name="产品分布" type="pie" radius={["40%","70%"]} avoidLabelOverlap={false} itemStyle={{"borderRadius":10,"borderColor":"#fff","borderWidth":2}} emphasis={{"label":{"show":true,"fontSize":"40","fontWeight":"bold"}}} labelLine={{"show":false}} data={props.data.pieChartData.data}> <Label show={false} position="center" /> </Series>
      </Recharts>
    </div>
  )
}

export default PieChartComponent
