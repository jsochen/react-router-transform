import React, { Component } from 'react';
import {Button,NavBar,Icon,Flex} from 'antd-mobile';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import IndexPage from './pages/IndexPage/indexPage.js';
import AboutPage from './pages/aboutePage/aboutPage.js';
import {Link,Switch,Route} from 'react-router-dom';
import appStyle from './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return (  
      <div>
        <Route path="/" component={Layout}>
        </Route>
      </div>
    );
  }
}

export default App;




class Layout extends Component {
    constructor(props){
      super(props);
      this.state = {
        transitionName:'transitionWrapperPush'
      };
      console.log(this.props);
      // this.props.history.listen((res)=>{
      //   console.log(res);
      //   this.setState({transitionName:'transitionWrapperPop'})
      // })
    }
    componentWillReceiveProps(nextProps) {
       console.log(nextProps)
      if(nextProps.history.action=="PUSH"){
        this.setState({transitionName:'transitionWrapperPush'})
      }else if(nextProps.history.action == "POP"){
        this.setState({transitionName:'transitionWrapperPop'})
      }
    }
    render() {
        return (
          <ReactCSSTransitionGroup
            transitionName={this.state.transitionName}
            className={appStyle[this.state.transitionName]}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="div"
            >
            <div key={this.props.location.pathname} 
                className={this.props.location.pathname}
                style={{position:"absolute", width: "100%"}}>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/about" component={AboutPage}/>
            </div>
        </ReactCSSTransitionGroup>
        );
    }
}
