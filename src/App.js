import React, {Component} from 'react';
import './App.css';
import Content from './Content';
import Con_But from './Con_But';

class App extends Component {
  state={
    inform:[
    ]
  }
  Change = input => this.setState(prev => {
      prev.inform.push({text:input});
      return {inform: prev.inform};
    });

  render(){
    return(
      <div>
        <Content Change={this.Change}/>
        <Con_But tt={this.state.inform}/>
      </div>
    );
  }
}

export default App;
