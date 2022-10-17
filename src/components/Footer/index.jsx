import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import './style'
import { FooterWrapper } from './style'

const Footer = () => {
  const { pathname } = useLocation()
  return (
    <FooterWrapper>
       <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
          <i className="iconfont icon-home"></i>
          <span>首页</span>
       </Link>
       <Link to="/section" className={classnames({active:pathname == '/section'})}>
          <i className="iconfont  icon-caozuorizhi"></i>
          <span>版块</span>
       </Link>
       <Link to="/notice" className={classnames({active:pathname == '/notice'})}>
          <i className="iconfont icon-tongzhi"></i>
          <span>通知</span>
       </Link>
       <Link to="/shop" className={classnames({active:pathname == '/shop'})}>
          <i className="iconfont icon-shangcheng"></i>
          <span>商城</span>
       </Link>
       <Link to="/mine" className={classnames({active:pathname == '/mine'})}>
          <i className="iconfont icon-wode-"></i>
          <span>我的</span>
       </Link>
    </FooterWrapper>
  )
}

export default Footer
