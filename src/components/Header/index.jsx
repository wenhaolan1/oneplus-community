import React, { useState } from 'react'
import { Button, Drawer } from 'antd';
import { HeaderWrapper } from './style'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="list"onClick={showDrawer}>
          <i className="fa fa-navicon"></i>
        </div>
        <span>一加社区</span>
        <div className="search">
        <i className="fa fa-search"></i>
        </div>
        <Drawer
        title="社区首页"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width='230px'
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </div>
      
    </HeaderWrapper>
  )
}

export default Header
