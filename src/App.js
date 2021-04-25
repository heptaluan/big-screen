import React from 'react'
import './assets/scss/reset.scss'
import './assets/scss/common.scss'
import Home from './views/home/index'
import 'echarts'

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
