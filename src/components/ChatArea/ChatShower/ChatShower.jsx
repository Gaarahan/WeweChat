import React from 'react'

export default class ChatShower extends React.Component{
  render() {
    const headTitle = 'zhao';
    const messages = 'han';
    return (
        <div className={'chat-shower'}>
          <div className={'shower-head'}>
            <span>{headTitle}</span>
          </div>
          <div className={'shower-content'}>
            {messages}
          </div>
        </div>
    );
  }
}