import React from 'react';

class Chat extends React.Component{
  render(){
    return(
      <div style={{textAlign: "center", marginBottom: "5px"}}>
        {this.props.message}
      </div>
    );
  }
}

export default Chat;
