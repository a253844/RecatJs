import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class Ctldata extends Component{
    constructor(props) {
        super(props);
        this.state={
            inputValue: '',
            id: this.props.id , 
            processvalue: 0
        }
        this.setInputValue=this.setInputValue.bind(this)
        this.setProcess=this.setProcess.bind(this)
      }
    
    setInputValue=(event) => 
        this.setState({
             inputValue : event.target.value
            })

    setProcess(){
        debugger;
        if(this.state.inputValue.length >= 5)
            this.props.getprocess( "" ,this.state.processvalue + 25 );
        else
            this.props.getprocess( "" ,this.state.processvalue - 25 );
    }

    render(){
        return(
            <div>
                <div>
                <Input id={this.state.id} value={this.state.inputValue}
                    onChange={this.setInputValue} />
                </div>
            </div>
        )
    }
}
export default Ctldata;