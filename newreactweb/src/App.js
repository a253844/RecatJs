import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) { // 加入建構子以及props參數
    super(props);
  }

  render(){
    return (
      <Button onClick={this.props.handleClick}>
        {this.props.name}
      </Button>
    );
  }
}

export default App;
