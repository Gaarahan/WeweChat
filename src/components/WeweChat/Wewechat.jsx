import React from 'react'
import ChatArea from '../ChatArea/ChatArea'
import SideBar from '../SideBar/SideBar'
import './WeweChat.less'

class WeweChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className={'wewe-chat'}>
          <SideBar/>
          <ChatArea/>
        </div>
    )
  }
}

export default WeweChat;
