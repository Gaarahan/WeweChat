import React from 'react'
import ChatShower from './ChatShower/ChatShower'
import ChatSender from './ChatSender/ChatSender'
import './ChatArea.less'

class ChatArea extends React.Component{
  render() {
    return (
        <section
            className={'chat-area'}
        >
          <ChatShower/>
          <ChatSender/>
        </section>
    )
  }
}

export default ChatArea;
