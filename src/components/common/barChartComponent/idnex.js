import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { AxisPointer, Tooltip, Legend, Grid, XAxis, YAxis, Series } = Components

const BarChartComponent = props => {
  return (
    <div className="bar-chart-box">
      <Recharts>
        <Tooltip trigger="axis">
          <AxisPointer type="shadow" />
        </Tooltip>
        {/* <Legend data={["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"]} /> */}
        <Grid left="3%" right="4%" bottom="3%" containLabel={true} />
        <XAxis type="category" data={["周一","周二","周三","周四","周五","周六","周日"]} />
        <YAxis type="value" />
        <Series name="直接访问" type="bar" stack="广告" data={[320,332,301,334,390,330,320]} />
        <Series name="邮件营销" type="bar" stack="广告" data={[120,132,101,134,90,230,210]} />
        <Series name="联盟广告" type="bar" stack="广告" data={[220,182,191,234,290,330,310]} />
        <Series name="视频广告" type="bar" stack="广告" data={[150,232,201,154,190,330,410]} />
      </Recharts>
    </div>
  )
}

export default BarChartComponent
