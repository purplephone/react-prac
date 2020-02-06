import React from 'react';
import Button from './Button';

class Content extends React.Component{
  constructor(props) {
    super(props);
    this.state = {input: ""};
  }
  render(){
    return(<>
      <input onChange={e => this.setState({input:e.target.value})} value={this.state.input}></input>
      <Button Change={()=>this.props.Change(this.state.input)}/>
      </>
    );
  }
}

export default Content;
