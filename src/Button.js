import React from 'react';

class Button extends React.Component{
  render(){
    return(
      <button onClick = {this.props.Change}>submit</button>
    );
  }
}

export default Button;
