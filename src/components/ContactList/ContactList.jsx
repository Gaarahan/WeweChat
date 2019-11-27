import React from 'react'
import SingleChatItem from '../SingleChatItem/SingleChatItem'

class ContactList extends React.Component {
  render() {
    return (
        this.props.contactList
            .map(item => {
              return <SingleChatItem
                  item={item}
                  key={item.id}
              />
            }
        )
    )
  }
}

export default ContactList;