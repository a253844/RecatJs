import React, { Component  } from 'react';
import Ctldata from './Ctldata';
import Button from '@material-ui/core/Button';

class Ctl extends Component{
constructor(props) {
    super(props);
    this.state={
        Process: 0
    }
    this.setProcessValue=this.setProcessValue.bind(this)
    }

    setProcessValue(amount){
            this.setState({Process: this.state.Process + amount})
        }    

    render(){
        return(
            <div>
                <div>
                <Ctldata ProcessValue={this.state.Process} 
                        GetProcess={this.setProcessValue} />
                目前比率: {this.state.Process}%
                </div>
            </div>
        );
    }
}

export default Ctl;