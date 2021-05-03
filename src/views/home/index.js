import React from 'react'
import './index.scss'
import TopHeaderComponent from '../../components/topHeaderComponent/index'
import NavComponent from '../../components/navComponent/index'

import ChartGroupComponent from '../../components/chartGroupComponent/index'
import ModelComponent from '../../components/modelComponent/index'
import ListGroupComponent from '../../components/listGroupComponent/index'

const Home = () => {

  return (
    <div
      className="home-box"
    >
      <TopHeaderComponent />
      <NavComponent />
      <div className="home-content">
        <ListGroupComponent />
        <ModelComponent />
        <ChartGroupComponent />
      </div>
    </div>
  )
}

export default Home
