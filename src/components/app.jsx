import React from 'react';
import * as actionCreators from '../actions/actionCreators';
class App extends React.Component {

  render(){
    const w = "World";
    return(
      <div>
        Hello {w}
      </div>
    )
  }
}

export default App;