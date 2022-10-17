import React from 'react'
import { ShowWrapper } from './style';

function Show ({showlist = []}) {
  console.log(showlist,'/////////');
  const renderShow = () => {
    return showlist && showlist.map((items) => {
      let imgattachmentList
      if (items.imgattachment) {
        imgattachmentList = Object.values(items.imgattachment)
      }
      const img = imgattachmentList?.slice(0,1)
      // const LinkTo = () => {
      //   <a href="https://www.oneplusbbs.com/sdk/weixinjssdk.php?url=https%3A%2F%2Fwww.oneplusbbs.com%2Fthread-{item.aid}-1-mobile-2.html"></a>
      // }
      console.log(imgattachmentList, '=========')
      return (
        <ul className="show-list" key={items.tid} >  
          <li>
            <div className="show-subject">
              <span>{items.subject}</span>
            </div>
            
            <div className="show-image">
              {
                img && img.map(item => {
                  return (
                    <img key={item.attachment} src={item.attachment} alt="" />
                  )
                })
              }
            </div>
            <div className="logo-box">
              <div className="logo-item">
                <img src={items.avatar} alt="" />
              <span>{items.author}/{items.dateline}</span>
              </div>
              <div className="see-item">
                <div className="see">
                  <i className="iconfont icon-yanjing"></i>
                <span>{items.views}</span>
                </div>
                <div className="message">
                  <i className="iconfont icon-duanxin"></i>
                <span>{items.replies}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      )
    })
  }


  return (
      <ShowWrapper>
        <div className="show">
          {renderShow()}
        </div>
      </ShowWrapper>
  )

}

export default Show
