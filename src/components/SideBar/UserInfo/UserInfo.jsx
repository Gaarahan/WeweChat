import React from 'react'
import '@/assets/fonts/iconfont.css'
import './UserInfo.less'

export default class UserInfo extends React.Component {
  render() {
    const {userInfo} = this.props;
    return (
        <div className={'header-contain'}>
          <img src={require(`@/assets/headPic/${userInfo.img}`)} className={'head-pic-img'} width={40} height={40} alt=""/>
          <div className={'head-context'}>
            <span>{userInfo.name}</span>
            <span className={'iconfont icon-caidan'}/>
          </div>
        </div>
    )
  }
}