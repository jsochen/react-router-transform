import React, { Component } from 'react';
import './indexPage.css';
import {Button,NavBar,Icon,Flex} from 'antd-mobile';
import {Link,Switch,Route} from 'react-router-dom';
import SecondPage from '../secondPage/secondPage.js';
import AboutPage from "../aboutePage/aboutPage.js";
class IndexPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      testListOne:[
        {
          name:"chenlong1",
          value:"111111"
        },
        {
          name:"chenlong2",
          value:"111111"
        },
        {
          name:"chenlong3",
          value:"111111"
        },
        {
          name:"chenlong4",
          value:"111111"
        }
      ]
    }; 
    this.getChangeValue = this.ChangeValue.bind(this)
  }
  // componentDidMount() {
    
  // }
  // componentDidUpdate(prevProps, prevState) {
    
  // }
  // shouldComponentUpdate(nextProps, nextState) {
    
  // }
  // componentWillMount() {
    
  // }
  // componentWillReceiveProps(nextProps) {
    
  // }

  // componentWillUnmount() {
    
  // }
  // componentWillUpdate(nextProps, nextState) {
    
  // }
  ChangeValue(value){
      console.log(value)
  }
  getChildvalue(){
       console.log(this.refs.secondPages.getSelectValye());
  }
  jumpToAboutPage(){
    // this.props.history.push('/about')
    this.props.history.push({
      pathname: '/about',
      state: { fromDashboard: true }
    })
  }
  render() {
   
    return (
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
            <SecondPage ref="secondPages" ChangeValue={this.getChangeValue}  testList = {this.state.testListOne}/>
            
            <Button onClick={()=>this.getChildvalue()}>获取子组件的值</Button>
            <Button onClick={()=>this.jumpToAboutPage()}>about</Button>
          </div>
      </div>
    );
  }
}

export default IndexPage;


// <img src="./images/F389E220-EC71-4695-8EEB-317F6C8B0FA5.png" alt=""/>
// <img src={require("./images/F389E220-EC71-4695-8EEB-317F6C8B0FA5.png")} alt=""/>


// const MyListDom = ()
