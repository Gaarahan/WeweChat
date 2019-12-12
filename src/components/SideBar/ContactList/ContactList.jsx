import React from 'react'
import './ContactList.less'

class ContactList extends React.Component {
  render() {
    const {sessions, selectedSessionId, onSessionSelect: selectSession} = this.props;
    return (
        sessions.map(item => {
              return (
                  <SingleChatItem
                      clickHandler={() => {
                        selectSession(item.id)
                      }}
                      item={item}
                      isCurrent={item.id === selectedSessionId}
                      key={item.id}
                  />
              )
            }
        )
    )
  }
}

function SingleChatItem(props) {
  return  (
      <div
          className={
            props.isCurrent ?
                'single-chat-item selected' :
                'single-chat-item'
          }
          onClick={props.clickHandler}
      >
        <img src={require(`@/assets/headPic/${props.item.img}`)} alt="" width={40} height={40}/>
        <div className={'message-contain'}>
          <span className={'title'}>{props.item.title}</span>
          <span className={'message'}>{props.item.message}</span>
        </div>
      </div>
  );
}

export default ContactList;