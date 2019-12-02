import React from 'react'
import '@/assets/fonts/iconfont.css'
import './UserInfo.less'
import HEAD_PIC from '@/assets/head.png';

export default class UserInfo extends React.Component {
  render() {
    return (
        <div className={'header-contain'}>
          <img src={HEAD_PIC} className={'head-pic-img'} width={40} height={40} alt=""/>
          <div className={'head-context'}>
            <span>Gaarahan</span>
            <span className={'iconfont icon-caidan'}/>
          </div>
        </div>
    )
  }
}