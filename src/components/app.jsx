import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import ContactUsForm from './form/ContactUsForm';

// Add Props from redux here
function mapStateToProps(state){
  return{
    contactDetails: state.contactDetails
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}


class Main extends React.Component {

  constructor(){
    super();
  }


  render(){
    return(
      <div>
        <h1>Contact Us</h1>
        <p>Use the following form to contact us. We will reply as soon as possible</p>
        <ContactUsForm contactDetails={this.props.contactDetails} setContactDetails={this.props.setContactDetails} />
      </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;