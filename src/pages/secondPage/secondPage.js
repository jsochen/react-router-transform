import React,{Component} from 'react';
import {Button,NavBar,Icon,Flex} from 'antd-mobile';
export default class SecondPage extends Component {
    timers
    constructor(props){
        super(props);
        
        this.state = {
            testListOne:this.props.testList,
            selectvalue:2
        };
        this.ChangeValue = this.props.ChangeValue;

    }

    componentDidMount() {
       this.timers =  setTimeout(()=>{
          this.setState({testListOne:[...this.state.testListOne,{
            name:"吴波",
            value:"123"
          }]})
          
        },3000);
    }
    componentWillUnmount() {
        clearTimeout(this.timers);
    }
    render() {
        let listDom =  this.state.testListOne.map((element,index) => <Button style={{height:"40%",display:"block"}} key={index}>{element.name}</Button>);
        return (
            <div className="">
                {listDom}
                 <Button onClick={() => this.ChangeValue(1)}>回传父组件</Button>
            </div>
        );
    }
    getSelectValye(){
        return this.state.selectvalue
    }
}