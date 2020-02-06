import React from 'react';
import Chat from './Chat';

class Con_But extends React.Component{
  render(){
    const array = []
    for(let i = 0; i < this.props.tt.length ;i++){
      array.push(<Chat message={this.props.tt[i].text} key={this.props.tt[i].text} />);
    }
    return(
      <div style={{width:"80%",height:"500px",border:"10px solid black"}}>
        {array}
      </div>
    );
  }
}

export default Con_But;
