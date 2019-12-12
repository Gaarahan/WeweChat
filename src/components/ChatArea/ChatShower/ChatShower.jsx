import React from 'react'
import './ChatShower.less'

export default class ChatShower extends React.Component{
  render() {
    const {session, title} = this.props.chatSession;
    return (
        <div className={'chat-shower'}>
          <div className={'shower-head'}>
            <span>{title}</span>
          </div>
          <div className={'shower-content'}>
            {
              session.map(itm => <SingleChatMessage item={itm} key={itm.id}/>)
            }
          </div>
        </div>
    );
  }
}

function SingleChatMessage(props) {
  const {img, message} = props.item;
  const isSelf = props.item.userId === 0;
  return (
      <div className={isSelf?"single-chat-message self":"single-chat-message"}>
        <img
            src={require(`@/assets/headPic/${img}`)}
            alt="head-pic"
            width={40} height={40}
        />
        <span className={'arrow'}/>
        <span className={'chat-message'}> {message} </span>
      </div>
  )
}
