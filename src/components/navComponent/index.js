import React from 'react'
import './index.scss'
import IconFont from '../../components/common/iconFont/index'

const NavComponent = () => {
  return (
    <div className="nav-box-wrap">
      <ul className="nav-box">
        <li>
          <IconFont style={{ fontSize: '60px' }} type="icondingdan" />
          <div className="list-context">总订单：1234</div>
        </li>
        <li>
          <IconFont style={{ fontSize: '60px' }} type="iconjiance" />
          <div className="list-context">检测正确率：98%</div>
        </li>
        <li>
          <IconFont style={{ fontSize: '60px' }} type="iconyaopinjiance" />
          <div className="list-context">物检正确率：98%</div>
        </li>
      </ul>
    </div>
  )
}

export default NavComponent
