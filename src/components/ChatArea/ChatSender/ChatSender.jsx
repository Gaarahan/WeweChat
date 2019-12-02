import React from 'react'

export default class ChatSender extends React.Component{
  render() {
    return (
        <div className={'chat-sender'}>
          <div className={'sender-head'}>
            <span className={'iconfont icon-smile'}/>
            <span className={'iconfont icon-jietu'}/>
            <span className={'iconfont icon-wenjianjia'}/>
          </div>
          <div className={'sender-body'}>
            <textarea
                name="txt" id="txt-input" cols="30" rows="10"
                autoComplete={'off'}
            />
          </div>
          <div className={'sender-foot'}>
            <button className={'send-btn'}>发送</button>
          </div>
        </div>
    )
  }
}
