import React, { Component } from "react";
import {Button,NavBar,Icon,Flex} from 'antd-mobile';
export default class Class extends Component {
  constructor(props){
    super(props);
    // this.state = {};
    // console.log(this.props);
    let fromDashboard
    if(this.props.location.state.fromDashboard!=undefined){
      fromDashboard = this.props.location.state.fromDashboard
    }
    this.state = {
      fromDashboard: fromDashboard
    }
  }
  render() {
    return(
      <div className="appdiv">
          <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[
            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}>NavBar</NavBar>
          <div style={{flex:1,overflowY:"scroll"}}>
             
          </div>
          
      </div>
    )
  }
}
