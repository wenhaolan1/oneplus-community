import React,{ useEffect, memo } from 'react'
import { BannersWrapper } from './style'
import { Link } from 'react-router-dom'
import './style'
import Swiper from 'swiper'


const Banners = ({bannerslist}) => {
  // console.log(bannerslist,'lll')
  let swiper = null;
  useEffect(() => {
    if(swiper){
      return
    }
    swiper = new Swiper('.btn-banners',{
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay:{ //自动轮播
        delay:2500
    },
      circular: true,
      observeParents: true,
    })
  },[])
  const renderBanners1 = () => {
    let items = bannerslist && bannerslist.slice(0, 5)
    return items && items.map(item => {
      return (
        <Link 
        to="/"
        className="swiper-item"
        key={item.bid}
        >
        <div>
            <p>
                <img src={item.bpic} />
            </p>
        </div>
    </Link>
      )
    })
  }
  const renderBanners2 = () => {
    let items = bannerslist && bannerslist.slice(1, 2)
    return items && items.map(item => {
      return (
        <Link 
        to="/"
        className="swiper-item"
        key={item.bid}
        >
        <div>
            <p>
                <img src={item.bpic} />
            </p>
        </div>
    </Link>
      )
    })
  }
  const renderBanners3 = () => {
    let items = bannerslist && bannerslist.slice(2, 3)
    return items && items.map(item => {
      return (
        <Link 
        to="/"
        className="swiper-item"
        key={item.bid}
        >
        <div>
            <p>
                <img src={item.bpic} />
            </p>
        </div>
    </Link>
      )
    })
  }
  const renderBanners4 = () => {
    let items = bannerslist && bannerslist.slice(3, 4)
    return items && items.map(item => {
      return (
        <Link 
        to="/"
        className="swiper-item"
        key={item.bid}
        >
        <div>
            <p>
                <img src={item.bpic} />
            </p>
        </div>
    </Link>
      )
    })
  }
  const renderBanners5 = () => {
    let items = bannerslist && bannerslist.slice(4, 5)
    return items && items.map(item => {
      return (
        <Link 
        to="/"
        className="swiper-item"
        key={item.bid}
        >
        <div>
            <p>
                <img src={item.bpic} />
            </p>
        </div>
    </Link>
      )
    })
  }
  const renderBanners6 = () => {
    let items = bannerslist && bannerslist.slice(5, 6)
    return items && items.map(item => {
      return (
        <Link 
        to="/"
        className="swiper-item"
        key={item.bid}
        >
        <div>
            <p>
                <img src={item.bpic} />
            </p>
        </div>
    </Link>
      )
    })
  }
  return (
    <BannersWrapper>
        <div className="btn-banners swiper-container swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    {renderBanners1()}
                </div>
                <div className="swiper-slide">
                    {renderBanners2()}
                </div>
                <div className="swiper-slide">
                    {renderBanners3()}
                </div>
                <div className="swiper-slide">
                    {renderBanners4()}
                </div>
                <div className="swiper-slide">
                    {renderBanners5()}
                </div>
                <div className="swiper-slide">
                    {renderBanners6()}
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </BannersWrapper>
  )
}

export default memo(Banners)