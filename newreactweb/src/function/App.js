import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) { // 加入建構子以及props參數
    super(props);
    this.state={ // 宣告state物件，內包含一個變數percent
      percent:"0%", 
      processpercent : props.processpercent
    }
  }

  componentDidMount(){ //加入changePercent函式
    this.setState({
      percent: this.state.processpercent
    })
  }

  render(){
    return (
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
        </div>
      </div>
    );
  }
}

export default App;
