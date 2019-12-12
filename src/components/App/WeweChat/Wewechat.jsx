import React from 'react'
import ChatArea from '../../ChatArea/ChatArea'
import SideBar from '../../SideBar/SideBar'
import './WeweChat.less'

class WeweChat extends React.Component {
  constructor(props) {
    super(props);
    const {sessions, contactList, userInfo} = require('../../../Common/data.js').default;
    this.state = {
      sessions,
      contactList,
      userInfo ,
      selectedSessionId: 1
    };
  }

  render() {
    const selectedSession = this.state.sessions.find(val => val.id === this.state.selectedSessionId);
    return (
        <div className={'wewe-chat'}>
          <SideBar
              sessions={this.state.sessions}
              userInfo={this.state.userInfo}
              contactList={this.state.contactList}
              selectedSessionId={this.state.selectedSessionId}
              onSessionSelect={this.selectSession.bind(this)}
          />
          <ChatArea
              chatSession={selectedSession}
          />
        </div>
    )
  }
  selectSession(id) {
    this.setState({
      selectedSessionId: id
    })
  }
}

export default WeweChat;
