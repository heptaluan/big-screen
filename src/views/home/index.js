import React, { useState } from 'react'
import './index.scss'
import TopHeaderComponent from '../../components/topHeaderComponent/index'

import ChartGroupComponent from '../../components/chartGroupComponent/index'
import ModelComponent from '../../components/modelComponent/index'
import ListGroupComponent from '../../components/listGroupComponent/index'

import useWindowSize from '../../hook/useWindowSize'

import * as data from '../../assets/js/config'

const Home = () => {
  const { scale, origin, top, left } = useWindowSize()
  const [state, setstate] = useState(data.allData)

  const handleClick = type => {
    switch (type) {
      case 'all':
        setstate(data.allData)
        break
      case 'month':
        setstate(data.monthData)
        break
      case 'lastMonth':
        setstate(data.lastMonthData)
        break
      default:
        setstate(data.allData)
        break
    }
  }

  return (
    <div
      className="home-box"
      style={{
        transform: scale,
        transformOrigin: origin,
        top: top,
        left: left,
      }}
    >
      <div>
        <button onClick={() => handleClick('all')}>全部</button>
        <button onClick={() => handleClick('month')}>当月</button>
        <button onClick={() => handleClick('lastMonth')}>上月</button>
      </div>
      <TopHeaderComponent />
      <div className="home-content">
        <ListGroupComponent data={state} />
        <ModelComponent data={state} />
        <ChartGroupComponent data={state} />
      </div>
    </div>
  )
}

export default Home
