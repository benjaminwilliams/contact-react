import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';


// Add Props from redux here
function mapStateToProps(state){
  return{
    contactDetails: state.contactDetails
  }
}

function mapDispatchToProps(dispach){
  return bindActionCreators(actionCreators, dispach);
}


class Main extends React.Component {

  constructor(){
    super();
    this.renderName = this.renderName.bind(this);
  }

  renderName(){
    const name = this.props.contactDetails.name;

    return (
      <div>Hello, {name}</div>
    )
  }

  render(){
    return(
      <div>
        {this.renderName()}
      </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;