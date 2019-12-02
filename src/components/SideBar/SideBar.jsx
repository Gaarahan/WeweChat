import React from 'react'
import ContactList from './ContactList/ContactList'
import UserInfo from "./UserInfo/UserInfo";
import './SideBar.less'

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
          <UserInfo/>
          {/* TODO 搜索*/}
          <div className={'search-contain'}>
            <span className={'iconfont icon-sousuo'}/>
            <input type="text" className={'search'}/>
          </div>
          <div className={'func-toggle'}>
            <div className={"menu-selected chat"}>
              <span className={'iconfont icon-weixin'}/>
            </div>
            <div className={"article"}>
              <span className={'iconfont icon-wenzhangguanli'}/>
            </div>
            <div className={"contact"}>
              <span className={'iconfont icon-lianxiren'}/>
            </div>
          </div>
          <ContactList
              contactList={this.state.contactList}
          />
        </section>
    )
  }
}

export default SideBar;
