import React, { Component  } from 'react';
import App from './function/App';
import Ctldata from './function/Ctldata';
import Button from '@material-ui/core/Button';

class Ctl extends Component{
    constructor(props) {
        super(props);
        this.state={
            processvalue: 0
        }
        this.setInputProcess=this.setInputProcess.bind(this)
      }

    setInputProcess(target,amount){
        this.setState({processvalue:amount})
    }

    render(){
        return(
            <div>
                <Ctldata id="fristname"  />
                <Ctldata id="secondname" />
                <Ctldata id="phnomber" />
                <App processpercent={this.state.processvalue}/>
            </div>
        )
    }
}
export default Ctl;