import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class Ctldata extends Component{
    constructor(props) {
        super(props);
        this.state={
            inputValue: '' ,
            ProcessValue : this.props.ProcessValue
        }
        this.setInputValue=this.setInputValue.bind(this)
      }

    setInputValue=(eventValue) => {
        this.setState({
             inputValue : eventValue 
            })
        if(this.state.inputValue.length > 5)
            this.props.GetProcess(5)
        } 

    render(){
        return(
            <div>
                <div>
                <Input onChange={(e)=>{this.setInputValue(e.target.value)}} />
                </div>
            </div>
        );
    }
}
export default Ctldata;