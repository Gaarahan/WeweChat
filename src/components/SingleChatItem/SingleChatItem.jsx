import React from 'react'

class SingleChatItem extends React.Component {
  render() {
    return (
        <div>
          <span>{this.props.item.title}</span>
          <span>{this.props.item.message}</span>
        </div>
    )
  }
}

export default SingleChatItem;