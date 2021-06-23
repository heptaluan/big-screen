import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { TextStyle, AxisPointer, AxisLabel, Title, Tooltip, XAxis, YAxis, Series } = Components

const BarChartComponent = () => {
  return (
    <div className="bar-chart-box">
      <Recharts>
        <Title text="癌肿风险占比">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        <XAxis type="category" data={["胃癌","乳腺癌","肝癌","肺癌","肠癌","食管癌","胰腺癌","血液肿瘤","脑瘤","前列腺癌","卵巢癌","甲状腺癌","鼻咽癌","嗜铬细胞瘤"]}>
          <AxisLabel interval={0} rotate={40} />
        </XAxis>
        <YAxis type="value" />
        <Series name="癌肿风险占比" data={[120,200,150,80,70,110,130,120,200,150,80,70,110,130]} type="bar" itemStyle={{"emphasis":{"barBorderRadius":10},"normal":{"barBorderRadius":10}}} />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
