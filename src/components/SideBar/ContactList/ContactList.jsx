import React from 'react'
import './ContactList.less'
import HEAD_CHAT_PIC from '@/assets/vim.png'

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curChatId: 1
    }
  }
  render() {

    return (
        this.props.contactList
            .map(item => {
              return <SingleChatItem
                  item={item}
                  isCurrent={item.id === this.state.curChatId}
                  key={item.id}
              />
            }
        )
    )
  }
}

function SingleChatItem(props) {
  return  (
      <div className={
        props.isCurrent ?
            'single-chat-item selected' :
            'single-chat-item'
      }>
        <img src={HEAD_CHAT_PIC} alt="" width={40} height={40}/>
        <div className={'message-contain'}>
          <span className={'title'}>{props.item.title}</span>
          <span className={'message'}>{props.item.message}</span>
        </div>
      </div>
  );
}

export default ContactList;