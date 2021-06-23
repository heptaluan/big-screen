import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, Label, Title, Tooltip, Series } = Components

const PieChartComponent = () => {
  return (
    <div className="pie-chart-box">
      <Recharts>
        <Title text="产品分布" left="center">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="item" />
        <Series name="访问来源" type="pie" radius={["40%","70%"]} avoidLabelOverlap={false} itemStyle={{"borderRadius":10,"borderColor":"#fff","borderWidth":2}} emphasis={{"label":{"show":true,"fontSize":"40","fontWeight":"bold"}}} labelLine={{"show":false}} data={[{"value":400,"name":"自选版"},{"value":1200,"name":"升级版"},{"value":200,"name":"基础版"}]}> <Label show={false} position="center" /> </Series>
      </Recharts>
    </div>
  )
}

export default PieChartComponent
