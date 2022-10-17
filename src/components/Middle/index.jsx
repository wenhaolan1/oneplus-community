import React from 'react'
import './style'
import { MiddleWrapper } from './style'

const Middle = () => {
  return (
    <MiddleWrapper>
        <div className='icon-box'>
            <div className="jrqd">
                <div className="background">
                    <i className="fa fa-calendar fa-2x"></i>
                </div>
                <p>今日签到</p>
            </div>
            <div className="sqrw">
                <div className="background">
                    <i className="fa fa-check-circle fa-2x"></i>
                </div>
                <p>社区任务</p>
            </div>
            <div className="xucj">
                <div className="background">
                <i className="fa fa-gift fa-2x"></i>
                </div>
                <p>幸运抽奖</p>
            </div>
        </div>
    </MiddleWrapper>
  )
}

export default Middle
