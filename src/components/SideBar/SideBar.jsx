import React from 'react'
import ContactList from '../ContactList/ContactList'


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: []
    }
  }

  loadContactList() {
    return import('../../Common/data.js');
  }

  componentDidMount() {
    this.loadContactList().then((res) => {
      this.setState({
        contactList: res.default
      })
    })
  }

  render() {
    return (
        <section
            className={'sidebar'}
        >
          <span>sideBar</span>
          <ContactList
              contactList={this.state.contactList}
          />
        </section>
    )
  }
}

export default SideBar;
