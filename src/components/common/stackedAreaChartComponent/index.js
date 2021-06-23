import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'
import * as echarts from 'echarts/lib/echarts'

const color0 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  offset: 0,
  color: 'rgba(128, 255, 165)'
}, {
  offset: 1,
  color: 'rgba(1, 191, 236)'
}])

const color1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  offset: 0,
  color: 'rgba(0, 221, 255)'
}, {
  offset: 1,
  color: 'rgba(77, 119, 255)'
}])

const color2 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  offset: 0,
  color: 'rgba(55, 162, 255)'
}, {
  offset: 1,
  color: 'rgba(116, 21, 219)'
}])

const { TextStyle, Label, AxisPointer, SaveAsImage, Feature, LineStyle, Title, Tooltip, Legend, Toolbox, Grid, XAxis, YAxis, Series } = Components

const LineChartComponent = () => {
  return (
    <div className="line-chart-box">
      <Recharts color={["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"]}>
        <Title text="渠道商检测量">
          <TextStyle color="#fff" />
        </Title>
        <Tooltip trigger="axis">
          <AxisPointer type="cross"> <Label backgroundColor="#6a7985" /> </AxisPointer>
        </Tooltip>
        <Legend data={["Line 1","Line 2","Line 3"]}>
          <TextStyle color="#fff" />
        </Legend>
        <Toolbox>
          <Feature>
            <SaveAsImage />
          </Feature>
        </Toolbox>
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis type="category" boundaryGap={false} data={["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]} />
        <YAxis type="value" />
        <Series name="Line 1" type="line" stack="总量" smooth={true} showSymbol={false} areaStyle={{"opacity":0.8,"color":color0}} emphasis={{"focus":"series"}} data={[140,232,101,264,90,340,250,140,232,101,264,90,340,250]}>
          <LineStyle width={0} />
        </Series>
        <Series name="Line 2" type="line" stack="总量" smooth={true} showSymbol={false} areaStyle={{"opacity":0.8,"color":color1}} emphasis={{"focus":"series"}} data={[120,282,111,234,220,340,310,120,282,111,234,220,140]}>
          <LineStyle width={0} />
        </Series>
        <Series name="Line 3" type="line" stack="总量" smooth={true} showSymbol={false} areaStyle={{"opacity":0.8,"color":color2}} emphasis={{"focus":"series"}} data={[320,132,201,334,190,130,220,320,132,201,334,190,330]}>
          <LineStyle width={0} />
        </Series>
      </Recharts>
    </div>
  )
}

export default LineChartComponent
